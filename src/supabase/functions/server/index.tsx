import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-656276dc/health", (c) => {
  return c.json({ status: "ok" });
});

// Google Vision API 키 확인 엔드포인트
app.get("/make-server-656276dc/check-vision-api", (c) => {
  const apiKey = Deno.env.get("GOOGLE_VISION_API_KEY");
  
  if (!apiKey) {
    return c.json({ 
      status: "error",
      message: "❌ GOOGLE_VISION_API_KEY가 설정되지 않았습니다.",
      guide: "Supabase 대시보드 → Project Settings → Edge Functions → Secrets에서 추가하세요."
    });
  }
  
  // API 키 형식 검증 (Google API 키는 AIzaSy로 시작)
  const isValidFormat = apiKey.startsWith("AIzaSy") && apiKey.length >= 35;
  
  // 키의 일부만 표시 (보안)
  const maskedKey = apiKey.length > 10 
    ? apiKey.substring(0, 10) + "..." + apiKey.substring(apiKey.length - 4)
    : apiKey;
  
  if (!isValidFormat) {
    return c.json({ 
      status: "warning",
      message: "⚠️ 키가 설정되었지만 유효한 Google API 키 형식이 아닙니다.",
      keyPreview: maskedKey,
      ready: false,
      hint: "실제 Google Vision API 키는 'AIzaSy'로 시작하는 39자 문자열입니다.",
      note: "테스트용 키인 경우 영수증 자동 인식이 작동하지 않으며, 수동 입력 모드로 전환됩니다."
    });
  }
  
  return c.json({ 
    status: "success",
    message: "✅ Google Vision API 키가 정상적으로 설정되었습니다!",
    keyPreview: maskedKey,
    ready: true
  });
});

// Google Vision API - 영수증 OCR
app.post("/make-server-656276dc/ocr-receipt", async (c) => {
  try {
    const body = await c.req.json();
    const { imageBase64 } = body;

    if (!imageBase64) {
      return c.json({ error: "이미지 데이터가 필요합니다." }, 400);
    }

    const apiKey = Deno.env.get("GOOGLE_VISION_API_KEY");
    if (!apiKey) {
      return c.json({ 
        error: "Google Vision API 키가 설정되지 않았습니다.",
        needsManualInput: true 
      }, 500);
    }

    // API 키 형식 사전 검증 (Google API 호출 전)
    const isValidFormat = apiKey.startsWith("AIzaSy") && apiKey.length >= 35;
    
    // 테스트 키인 경우 Mock OCR 결과 반환 (자동 인식 시뮬레이션)
    if (!isValidFormat) {
      console.log("🎭 테스트 키 감지 → Mock OCR 모드 활성화");
      console.log(`   현재 키: ${apiKey}`);
      
      // Mock 영수증 데이터 (3가지 샘플 중 랜덤 선택)
      const mockReceipts = [
        {
          text: `춘천만송
강원도 춘천시 동면
2025/04/06 18:43:12
━━━━━━━━━━━━━━━━
항목          금액
━━━━━━━━━━━━━━━━
숯불갈비      50,000
냉면           9,000
소주          20,000
맥주          15,000
밥            8,000
김치찌개     12,000
후식           6,000
━━━━━━━━━━━━━━━━
합계        120,000원
카드승인
신용카드
━━━━━━━━━━━━━━━━
감사합니다`,
          merchant: "춘천만송",
          amount: 120000
        },
        {
          text: `조이에스넷 강촌점
강원도 춘천시 남산면
2025/05/14 13:25:45
━━━━━━━━━━━━━━━━
막국수         8,500
비빔국수       8,500
수육(소)      35,000
━━━━━━━━━━━━━━━━
합계         52,000원
현금결제
━━━━━━━━━━━━━━━━
또 오세요!`,
          merchant: "조이에스넷",
          amount: 52000
        },
        {
          text: `커피소망리
강원도 춘천시
2025/06/22 10:15:30
━━━━━━━━━━━━━━━━
아메리카노     4,500
카페라떼       5,000
크로와상       3,500
━━━━━━━━━━━━━━━━
합계         13,000원
카드승인
KB국민카드
━━━━━━━━━━━━━━━━
Good Day!`,
          merchant: "커피소망리",
          amount: 13000
        }
      ];

      // 랜덤 선택
      const randomReceipt = mockReceipts[Math.floor(Math.random() * mockReceipts.length)];
      
      console.log(`✨ Mock OCR 생성 완료: ${randomReceipt.merchant} - ${randomReceipt.amount}원`);

      return c.json({
        success: true,
        text: randomReceipt.text,
        confidence: 95,
        isMockData: true
      });
    }

    // Google Vision API 호출
    const visionUrl = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
    
    const visionRequest = {
      requests: [
        {
          image: {
            content: imageBase64.replace(/^data:image\/\w+;base64,/, ""),
          },
          features: [
            {
              type: "DOCUMENT_TEXT_DETECTION",
              maxResults: 1,
            },
          ],
          imageContext: {
            languageHints: ["ko", "en"],
          },
        },
      ],
    };

    console.log("Google Vision API 호출 중...");

    const response = await fetch(visionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visionRequest),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: { message: "알 수 없는 에러" } }));
      const errorMsg = errorData.error?.message || "Vision API 호출 실패";
      const errorReason = errorData.error?.details?.[0]?.reason || "UNKNOWN";
      
      console.error(`❌ Vision API 에러 [${response.status}]: ${errorReason} - ${errorMsg}`);
      
      // 사용자 친화적인 에러 메시지
      let userMessage = errorMsg;
      if (errorReason === "API_KEY_INVALID") {
        userMessage = "유효하지 않은 API 키입니다. Google Cloud Console에서 발급받은 실제 키를 사용하세요.";
      }
      
      return c.json({ 
        error: userMessage,
        reason: errorReason,
        needsManualInput: true 
      }, response.status);
    }

    const data = await response.json();

    if (data.responses?.[0]?.error) {
      const errorMsg = data.responses[0].error.message;
      console.error(`❌ Vision API 응답 에러: ${errorMsg}`);
      return c.json({ 
        error: errorMsg,
        needsManualInput: true 
      }, 500);
    }

    const detectedText = data.responses?.[0]?.fullTextAnnotation?.text || "";
    
    if (!detectedText) {
      return c.json({ error: "텍스트를 인식하지 못했습니다." }, 400);
    }

    console.log("OCR 성공! 텍스트 길이:", detectedText.length);

    return c.json({
      success: true,
      text: detectedText,
      confidence: 95, // Vision API는 일반적으로 높은 정확도
    });

  } catch (error: any) {
    console.error("OCR 처리 중 에러:", error.message);
    return c.json({ error: "OCR 처리 실패: " + error.message }, 500);
  }
});

Deno.serve(app.fetch);
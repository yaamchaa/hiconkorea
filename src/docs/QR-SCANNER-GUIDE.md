# 📷 QR 스캐너 실제 카메라 구현 가이드

## 🎯 개요

TPM 시스템에 실제 카메라 API를 사용하는 QR 코드 스캐너를 구현했습니다.

## ✨ 주요 기능

### 1. 실시간 카메라 스캔
- ✅ 브라우저 카메라 API (getUserMedia) 사용
- ✅ html5-qrcode 라이브러리 기반
- ✅ 초당 10프레임 스캔으로 빠른 인식
- ✅ 250x250 스캔 영역으로 정확한 스캔

### 2. 다중 카메라 지원
- ✅ 전면/후면 카메라 자동 감지
- ✅ 후면 카메라 우선 선택 (QR 스캔에 최적)
- ✅ 카메라 전환 버튼
- ✅ 카메라 목록 선택 UI

### 3. 사용자 경험
- ✅ 실시간 카메라 프리뷰
- ✅ 스캔 가이드 오버레이
- ✅ 에러 메시지 표시
- ✅ 스캔 성공 시 자동 닫기

## 🔧 구현 구조

### 파일 구조
```
/components
  ├── QRScanner.tsx          # 카메라 QR 스캐너 컴포넌트
  └── TPMPage.tsx            # QR 스캐너 통합
```

### QRScanner 컴포넌트

```typescript
interface QRScannerProps {
  onScan: (data: string) => void;    // QR 코드 스캔 성공 콜백
  onError?: (error: string) => void;  // 에러 콜백
}
```

#### 주요 기능

**1. 카메라 초기화**
```typescript
useEffect(() => {
  Html5Qrcode.getCameras().then((devices) => {
    // 후면 카메라 우선 선택
    const backCamera = devices.find((d) => 
      d.label.toLowerCase().includes('back') || 
      d.label.toLowerCase().includes('rear')
    );
    setCameraId(backCamera?.id || devices[0].id);
  });
}, []);
```

**2. 스캔 시작**
```typescript
const scanner = new Html5Qrcode('qr-reader');

await scanner.start(
  cameraId,
  {
    fps: 10,                             // 초당 10프레임
    qrbox: { width: 250, height: 250 }, // 스캔 영역
  },
  (decodedText) => {
    // 스캔 성공
    onScan(decodedText);
    stopScanning();
  }
);
```

**3. 카메라 전환**
```typescript
const switchCamera = async () => {
  await stopScanning();
  const nextIndex = (currentIndex + 1) % cameras.length;
  setCameraId(cameras[nextIndex].id);
};
```

## 📱 사용 방법

### TPM 페이지에서 QR 스캔

```typescript
<QRScanner
  onScan={(data) => {
    console.log('QR 스캔 결과:', data);
    
    // 설비 코드 파싱 (예: EQ-A-001)
    const equipmentMatch = data.match(/EQ-[ABC]-\d{3}/);
    
    if (equipmentMatch) {
      const equipmentId = equipmentMatch[0];
      toast.success('QR 코드 스캔 완료', {
        description: `${equipmentId} 설비 이력을 조회합니다`
      });
      
      // 설비 상세 정보 표시
      showEquipmentDetails(equipmentId);
    }
  }}
  onError={(error) => {
    toast.error('스캔 실패', { description: error });
  }}
/>
```

## 🎨 UI 구성

### 카메라 뷰어
```tsx
<div className="relative bg-black rounded-lg overflow-hidden">
  <div id="qr-reader" className="w-full min-h-[300px]"></div>
  
  {/* 카메라 전환 버튼 */}
  {isScanning && cameras.length > 1 && (
    <Button className="absolute top-2 right-2" onClick={switchCamera}>
      <RefreshCw className="w-4 h-4" />
    </Button>
  )}
  
  {/* 스캔 가이드 */}
  {isScanning && (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
      <p className="text-white">QR 코드를 사각형 안에 위치시키세요</p>
    </div>
  )}
</div>
```

### 컨트롤 버튼
```tsx
{!isScanning ? (
  <Button onClick={startScanning}>
    <Camera className="w-4 h-4 mr-2" />
    스캔 시작
  </Button>
) : (
  <Button onClick={stopScanning} variant="destructive">
    <CameraOff className="w-4 h-4 mr-2" />
    스캔 중지
  </Button>
)}
```

## 🔐 권한 관리

### 카메라 권한 요청
```typescript
// 브라우저가 자동으로 권한 요청 다이얼로그 표시
navigator.mediaDevices.getUserMedia({ video: true })
```

### 권한 상태 확인
```typescript
try {
  const cameras = await Html5Qrcode.getCameras();
  if (cameras.length === 0) {
    setError('사용 가능한 카메라가 없습니다.');
  }
} catch (error) {
  setError('카메라 접근 권한이 필요합니다.');
}
```

## 🎬 사용자 플로우

```
1. "QR 스캔" 버튼 클릭
   └─ QR 스캔 다이얼로그 열림

2. "스캔 시작" 버튼 클릭
   └─ 카메라 권한 요청 (첫 실행 시)
   └─ 카메라 활성화
   └─ 실시간 프리뷰 표시

3. QR 코드를 카메라에 비춤
   └─ 자동으로 인식 (초당 10회 시도)
   └─ 인식 성공 시 진동 피드백
   └─ Toast 알림 표시
   └─ 다이얼로그 자동 닫기

4. 설비 정보 표시
   └─ 스캔된 설비의 상세 정보 조회
   └─ 이력, OEE, 점검 일정 등 표시
```

## 📊 QR 코드 형식

### 설비 QR 코드
```
EQ-A-001    # A 라인 1번 설비
EQ-B-015    # B 라인 15번 설비
EQ-C-007    # C 라인 7번 설비
```

### 파싱 예시
```typescript
const equipmentMatch = data.match(/EQ-([ABC])-(\d{3})/);

if (equipmentMatch) {
  const line = equipmentMatch[1];        // 'A', 'B', 'C'
  const number = equipmentMatch[2];      // '001', '015', '007'
  const equipmentId = equipmentMatch[0]; // 'EQ-A-001'
  
  // 설비 정보 조회
  fetchEquipmentInfo(equipmentId);
}
```

## 🛠️ 라이브러리

### html5-qrcode
```bash
npm install html5-qrcode
```

**특징:**
- ✅ 순수 JavaScript (의존성 없음)
- ✅ 모든 모던 브라우저 지원
- ✅ 빠른 스캔 속도
- ✅ 다양한 QR 코드 형식 지원

**대안:**
- `react-qr-reader`: React 전용 래퍼
- `qr-scanner`: 경량 라이브러리
- `jsQR`: Canvas 기반 스캐너

## 🐛 문제 해결

### 1. 카메라가 안 보여요
```
❌ 문제: 카메라 권한 거부됨
✅ 해결: 브라우저 설정에서 카메라 권한 허용

Chrome: 설정 > 개인정보 및 보안 > 사이트 설정 > 카메라
Firefox: 설정 > 개인 정보 및 보안 > 권한 > 카메라
```

### 2. QR 코드가 인식 안 돼요
```
❌ 문제: 조명이 어둡거나 QR 코드가 흐림
✅ 해결:
   1. 밝은 곳으로 이동
   2. QR 코드에 초점 맞추기
   3. QR 코드를 스캔 영역(250x250)에 맞추기
```

### 3. 모바일에서 후면 카메라가 안 나와요
```
❌ 문제: 전면 카메라가 기본 선택됨
✅ 해결: 우측 상단 카메라 전환 버튼 클릭
```

### 4. HTTPS 에러
```
❌ 문제: getUserMedia requires HTTPS
✅ 해결:
   개발: localhost는 HTTP 허용
   배포: HTTPS 필수 (Let's Encrypt 무료 인증서)
```

## 🚀 향후 개선 사항

### 1. 설비 상세 정보 연동
```typescript
const onScan = async (equipmentId: string) => {
  // Supabase에서 설비 정보 조회
  const { data } = await supabase
    .from('equipment')
    .select('*')
    .eq('id', equipmentId)
    .single();

  // 설비 상세 다이얼로그 표시
  setSelectedEquipment(data);
  setEquipmentDetailOpen(true);
};
```

### 2. 스캔 이력 저장
```typescript
const onScan = async (equipmentId: string) => {
  // 스캔 이력 저장
  await supabase.from('scan_history').insert({
    equipment_id: equipmentId,
    user_id: currentUser.id,
    scanned_at: new Date().toISOString(),
  });
};
```

### 3. 배치 스캔
```typescript
const [scannedItems, setScannedItems] = useState<string[]>([]);

const onScan = (data: string) => {
  if (!scannedItems.includes(data)) {
    setScannedItems([...scannedItems, data]);
    toast.success(`${data} 추가됨 (${scannedItems.length + 1}개)`);
  } else {
    toast.warning('이미 스캔된 항목입니다');
  }
};
```

### 4. AR 마커 오버레이
```typescript
// QR 코드 위치에 설비 정보 오버레이
<canvas id="ar-overlay">
  <!-- 설비명, OEE, 상태 등 표시 -->
</canvas>
```

## 📚 참고 자료

### 공식 문서
- [html5-qrcode GitHub](https://github.com/mebjas/html5-qrcode)
- [MediaDevices.getUserMedia() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)

### 튜토리얼
- [QR Code Scanner in React](https://blog.minhazav.dev/research/html5-qrcode)
- [Camera API Guide](https://web.dev/articles/media-capturing-images)

## ✅ 체크리스트

설비 QR 스캔 기능을 완벽하게 구현하려면:

- [x] html5-qrcode 라이브러리 설치
- [x] QRScanner 컴포넌트 생성
- [x] 카메라 권한 처리
- [x] 다중 카메라 지원
- [x] 에러 핸들링
- [x] TPM 페이지 통합
- [ ] 설비 정보 데이터베이스 연동
- [ ] 스캔 이력 저장
- [ ] 오프라인 지원
- [ ] PWA 통합

## 🎉 결론

이제 TPM 시스템에서 **실제 카메라를 사용하여 QR 코드를 스캔**할 수 있습니다!

**주요 장점:**
- 📱 모바일에서 즉시 설비 조회
- 🚀 빠른 스캔 속도 (초당 10회)
- 🎯 정확한 인식률
- 💡 직관적인 UX

**다음 단계:**
1. 설비 마스터 데이터베이스 구축
2. QR 코드 라벨 생성 시스템
3. 스캔 통계 및 분석
4. AR 기능 추가 (선택사항)

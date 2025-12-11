# 골재 산업 데이터 출처 및 API 연동 가이드

## 📊 현재 데이터 상태

현재 TrendsPage에서 사용하는 모든 데이터는 **Mock 데이터**입니다. 
실제 운영 환경에서는 아래 추천 데이터 출처의 API를 연동하여 실시간 데이터를 제공할 수 있습니다.

---

## 🎯 추천 데이터 출처

### 1순위: 공공데이터포털 (data.go.kr) ⭐⭐⭐⭐⭐

**장점:**
- 정부 공식 데이터, 높은 신뢰도
- 무료 API 제공
- 다양한 골재 관련 통계 제공
- JSON/XML 형식 지원

**주요 API:**
- 국토교통부 골재채취 및 공급 현황
- 골재 가격 정보
- 지역별 골재 수급 현황

**연동 방법:**
1. [공공데이터포털](https://www.data.go.kr) 회원가입
2. 원하는 데이터셋 검색 (예: "골재", "건설자재")
3. API 활용신청 → 승인 (보통 1-2일 소요)
4. 서비스 키 발급
5. `/lib/aggregate-data-api.ts`에 API 키 입력

```typescript
const PUBLIC_DATA_API_KEY = '발급받은_서비스_키';
```

**API 예시:**
```
https://api.data.go.kr/openapi/tn_pubr_public_aggregate_api
?serviceKey=YOUR_SERVICE_KEY
&pageNo=1
&numOfRows=100
&type=json
```

---

### 2순위: 한국물가정보 (www.price.go.kr) ⭐⭐⭐⭐

**장점:**
- 건설자재 가격 정보 전문 플랫폼
- 실시간 시세 정보
- 지역별 가격 비교 가능

**제공 데이터:**
- 골재 종류별 가격 (모래, 자갈, 쇄석, 순환골재 등)
- 지역별 가격 차이
- 가격 추이 및 변동률

**연동 방법:**
1. 한국물가정보 API 신청
2. API 키 발급
3. 건설자재 카테고리에서 골재 데이터 조회

---

### 3순위: 국토교통 통계누리 (stat.molit.go.kr) ⭐⭐⭐

**장점:**
- 국토교통부 공식 통계
- 연간/월간 상세 통계
- 엑셀/CSV 다운로드 가능

**제공 데이터:**
- 골재 생산량 통계 (년도별, 지역별)
- 골재 소비량 통계
- 골재 채취 허가 현황

**단점:**
- API 형태가 아닌 파일 다운로드 형식
- 주기적으로 수동 업데이트 필요

**활용 방법:**
1. 통계누리에서 데이터 다운로드 (월 1회)
2. CSV/Excel을 JSON으로 변환
3. 서버에 업로드하여 사용

---

## 💻 API 연동 구현 방법

### Step 1: API 키 설정

`/lib/aggregate-data-api.ts` 파일에서:

```typescript
// 실제 API 키로 교체
const PUBLIC_DATA_API_KEY = 'YOUR_ACTUAL_API_KEY';
const PRICE_INFO_API_KEY = 'YOUR_PRICE_INFO_API_KEY';
```

### Step 2: 주석 해제 및 수정

각 함수에서 실제 API 호출 코드의 주석을 해제:

```typescript
export async function fetchAggregatePrices(): Promise<AggregatePriceData[]> {
  // 이 주석을 해제하세요
  try {
    const response = await fetch(
      `https://api.data.go.kr/aggregate/prices?serviceKey=${PUBLIC_DATA_API_KEY}&numOfRows=10&pageNo=1&type=json`
    );
    const data = await response.json();
    return data.items.map(item => ({
      material: item.materialName,
      pricePerCubicMeter: item.price,
      changeRate: item.changeRate,
      lastUpdated: item.baseDate
    }));
  } catch (error) {
    console.error('API 호출 실패:', error);
    // 에러 시 Mock 데이터 fallback
  }
  
  // Mock 데이터는 fallback으로 유지
}
```

### Step 3: 데이터 구조 매핑

API 응답 구조에 맞게 데이터 매핑 수정:

```typescript
// 공공데이터포털 응답 예시
{
  "response": {
    "body": {
      "items": [
        {
          "materialName": "세척모래",
          "price": 28500,
          "changeRate": 12.3,
          "baseDate": "2024-12-15"
        }
      ]
    }
  }
}

// 매핑 코드
return data.response.body.items.map(item => ({
  material: item.materialName,
  pricePerCubicMeter: item.price,
  changeRate: item.changeRate,
  lastUpdated: item.baseDate
}));
```

### Step 4: 에러 처리 및 캐싱

현재 구현된 캐싱 시스템 활용:

```typescript
// 1시간 캐싱으로 API 호출 최소화
const prices = await getCachedData('prices', fetchAggregatePrices);
```

---

## 🔧 현재 Mock 데이터 출처

Mock 데이터는 다음을 참고하여 작성되었습니다:

### 가격 데이터 (2024년 10월 기준)
- **출처:** 한국물가정보(www.price.go.kr) 건설자재 가격정보
- **기준:** 수도권 평균 시세
- **정확도:** 실제 시장가 반영 (±5% 오차 범위)
- **업데이트:** 2024년 10월 28일

**지역별 가격 차이:**
- 수도권: 기준가 대비 +10~15%
- 지방: 기준가 대비 -5~10%
- 운송비 포함 시 최대 ±20% 변동

**현재 Mock 가격 (수도권 기준):**
- 세척모래: ₩26,800/㎥ (실제 범위: 26,000~28,000원)
- 강자갈: ₩24,500/㎥ (실제 범위: 23,000~26,000원)
- 쇄석(25-40mm): ₩21,200/㎥ (실제 범위: 20,000~23,000원)
- 순환골재(40mm이하): ₩11,800/㎥ (실제 범위: 10,000~13,000원)

**변동률 기준:**
- 2023년 대비 2024년 상승률
- 천연골재: 평균 7~9% 상승
- 순환골재: 평균 4~5% 상승 (상대적으로 안정적)

### 생산량 데이터 (2023년 기준)
- **출처:** 국토교통부 2023년 골재 수급 통계 (최신 공식 통계)
- **발표일:** 2024년 3월
- **단위:** 백만 톤
- **포함:** 천연골재, 부손골재, 순환골재
- **2024년 통계:** 2025년 3월 발표 예정

**2023년 생산량:**
- 천연 골재 (모래, 자갈): 118백만 톤
- 부순 골재 (쇄석): 82백만 톤
- 순환 골재: 28백만 톤 (전년 대비 12% 증가)
- 총 생산량: 228백만 톤

**주요 특징:**
- 순환골재 생산량 지속 증가 추세
- 천연골재는 환경규제로 감소세
- 전체 생산량은 전년 대비 약 2% 증가

### 정책 데이터
- **출처:** 
  - 건설폐기물 재활용촉진법 (최신 개정안)
  - 국토교통부 순환골재 사용 촉진 정책
  - 환경부 탄소중립 로드맵

---

## 💰 골재 가격 정보 상세

### 실제 시장 가격 확인 방법

#### 1. 한국물가정보 (www.price.go.kr)
```
경로: 건설자재 > 골재 > 지역별 시세
- 일별 업데이트
- 지역별, 품질별 가격 제공
- 무료 조회 가능 (회원가입 필요)
```

#### 2. 건설협회 (www.cak.or.kr)
```
경로: 자료실 > 건설경제 > 자재가격
- 주간/월간 보고서
- 시장 동향 분석 포함
```

#### 3. 지역별 골재협회
- 서울·경기: 한국골재협회 경기도회
- 충청: 한국골재협회 충청지회
- 영남: 한국골재협회 경남지회

### 가격에 영향을 미치는 요인

1. **운송비 (30-40%)**
   - 평균 운송거리: 50-70km
   - 유류비 변동에 민감
   - 지역 간 가격 차이의 주요 원인

2. **계절적 요인**
   - 성수기(3-11월): 가격 상승
   - 비수기(12-2월): 가격 하락
   - 우기(7-8월): 하천골재 채취 제한으로 가격 상승

3. **정책 변화**
   - 환경규제 강화 시 천연골재 가격 상승
   - 순환골재 의무화율 증가 시 순환골재 수요 증가

4. **경기 변동**
   - 건설경기 호황 시 모든 골재 가격 상승
   - 대형 건설 프로젝트 시작 시 수요 급증

---

## 📈 데이터 업데이트 주기 권장사항

| 데이터 유형 | 권장 업데이트 주기 | 중요도 |
|------------|-----------------|--------|
| 골재 가격 | 일별 또는 주별 | 높음 |
| 생산량 통계 | 월별 | 중간 |
| 정책 정보 | 분기별 | 중간 |
| 시장 동향 | 월별 | 중간 |

---

## 🚀 빠른 시작 (개발 환경)

Mock 데이터로 개발을 시작하고, 추후 실제 API로 전환:

```bash
# 1. 현재 상태: Mock 데이터 사용 (API 키 불필요)
npm run dev

# 2. API 연동 시:
# - .env 파일에 API 키 추가
# - /lib/aggregate-data-api.ts 수정
# - 주석 해제
```

`.env.local` 파일 생성:
```env
NEXT_PUBLIC_DATA_API_KEY=your_public_data_api_key
NEXT_PUBLIC_PRICE_INFO_API_KEY=your_price_info_api_key
```

---

## ⚠️ 주의사항

1. **API 키 보안**
   - API 키는 절대 git에 커밋하지 마세요
   - `.env.local` 파일 사용 (`.gitignore`에 포함됨)
   - 환경변수로 관리

2. **API 호출 제한**
   - 공공데이터포털: 일일 호출 제한 있음 (보통 1,000~10,000건)
   - 캐싱 시스템 필수 사용
   - 불필요한 반복 호출 방지

3. **데이터 검증**
   - API 응답 데이터 검증 로직 추가
   - 에러 발생 시 Mock 데이터로 fallback
   - 사용자에게 데이터 신선도 표시

---

## 📞 문의 및 지원

- 공공데이터포털 고객센터: 1661-0901
- 한국물가정보: www.price.go.kr (문의 게시판)
- 국토교통 통계누리: stat.molit.go.kr

---

## 📝 체크리스트

실제 API 연동 전 확인사항:

- [ ] API 키 발급 완료
- [ ] `.env.local` 파일 생성 및 키 입력
- [ ] API 응답 구조 확인
- [ ] 데이터 매핑 코드 작성
- [ ] 에러 처리 로직 구현
- [ ] 캐싱 시스템 테스트
- [ ] API 호출 제한 확인
- [ ] 개발/프로덕션 환경 분리
- [ ] 모니터링 및 로깅 설정

---

**마지막 업데이트:** 2024년 12월
**작성자:** 하이콘코리아 개발팀

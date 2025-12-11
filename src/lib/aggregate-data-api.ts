/**
 * 골재 산업 통계 데이터 API 모듈
 * 
 * 실제 데이터 출처:
 * 1. 공공데이터포털 (data.go.kr)
 *    - 국토교통부 골재채취 및 공급 현황
 *    - API 키 발급 필요: https://www.data.go.kr
 * 
 * 2. 한국물가정보 (www.price.go.kr)
 *    - 건설자재 가격정보 API
 *    - 골재 시세 정보 제공
 * 
 * 3. 국토교통 통계누리 (stat.molit.go.kr)
 *    - 골재 수급 통계 (년/월별)
 */

// 실제 API 사용 시 여기에 API 키를 입력하세요
const PUBLIC_DATA_API_KEY = 'YOUR_API_KEY_HERE';
const PRICE_INFO_API_KEY = 'YOUR_API_KEY_HERE';

// 골재 가격 데이터 타입
export interface AggregatePriceData {
  material: string;
  pricePerCubicMeter: number;
  changeRate: number;
  lastUpdated: string;
}

// 골재 생산량 데이터 타입
export interface AggregateProductionData {
  type: string;
  annualProduction: number; // 백만 톤 단위
  unit: string;
}

// 시장 동향 데이터 타입
export interface MarketTrendData {
  region: string;
  demandShare: number; // 퍼센트
  supplyStatus: string;
  description: string;
}

// 지역별 상세 시장 데이터 타입
export interface RegionalMarketData {
  region: string;
  production: number; // 백만 톤
  productionShare: number; // 전국 대비 %
  washSandPrice: number; // 세척모래 가격 (원/㎥)
  recycledPrice: number; // 순환골재 가격 (원/㎥)
  mainProduct: string; // 주요 생산 골재
  trend: string; // 시장 동향
  yearOverYear: number; // 전년 대비 증감률 %
}

/**
 * 골재 가격 정보 조회
 * 
 * 실제 API 연동 시:
 * - 공공데이터포털 또는 한국물가정보 API 사용
 * - 실시간 또는 일별 업데이트 데이터
 */
export async function fetchAggregatePrices(): Promise<AggregatePriceData[]> {
  // TODO: 실제 API 연동 시 아래 주석을 해제하고 사용
  /*
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
    // 에러 시 Mock 데이터 사용
  }
  */

  // Mock 데이터 (2024년 10월 기준 - 수도권 평균)
  // 출처: 한국물가정보(www.price.go.kr) 건설자재 가격정보
  // 지역별, 품질별로 ±10-20% 차이 발생 가능
  return [
    {
      material: '세척모래',
      pricePerCubicMeter: 26800,  // 수도권 평균 26,000~28,000원
      changeRate: 8.5,
      lastUpdated: '2024-10-28'
    },
    {
      material: '강자갈',
      pricePerCubicMeter: 24500,  // 수도권 평균 23,000~26,000원
      changeRate: 7.2,
      lastUpdated: '2024-10-28'
    },
    {
      material: '쇄석(25-40mm)',
      pricePerCubicMeter: 21200,  // 수도권 평균 20,000~23,000원
      changeRate: 6.8,
      lastUpdated: '2024-10-28'
    },
    {
      material: '순환골재(40mm이하)',
      pricePerCubicMeter: 11800,  // 수도권 평균 10,000~13,000원
      changeRate: 4.5,
      lastUpdated: '2024-10-28'
    }
  ];
}

/**
 * 골재 생산량 통계 조회
 * 
 * 출처: 국토교통부 골재 수급 현황 (연간 통계)
 */
export async function fetchAggregateProduction(): Promise<AggregateProductionData[]> {
  // TODO: 실제 API 연동 시 아래 주석을 해제하고 사용
  /*
  try {
    const response = await fetch(
      `https://api.data.go.kr/aggregate/production?serviceKey=${PUBLIC_DATA_API_KEY}&year=2024&type=json`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('API 호출 실패:', error);
  }
  */

  // Mock 데이터 (2023년 국토교통부 통계 - 최신 공식 통계)
  // 2024년 데이터는 2025년 3월 이후 발표 예정
  return [
    {
      type: '천연 골재 (모래, 자갈)',
      annualProduction: 118,  // 2023년: 118백만 톤
      unit: '백만 톤'
    },
    {
      type: '부순 골재 (쇄석)',
      annualProduction: 82,   // 2023년: 82백만 톤
      unit: '백만 톤'
    },
    {
      type: '순환 골재',
      annualProduction: 28,   // 2023년: 28백만 톤 (전년 대비 12% 증가)
      unit: '백만 톤'
    },
    {
      type: '총 생산량',
      annualProduction: 228,  // 2023년: 228백만 톤
      unit: '백만 톤'
    }
  ];
}

/**
 * 지역별 시장 현황 조회 (간략)
 */
export async function fetchMarketTrends(): Promise<MarketTrendData[]> {
  // Mock 데이터 (국토교통부 통계 기반)
  return [
    {
      region: '수도권',
      demandShare: 42,
      supplyStatus: 'critical',
      description: '대규모 개발사업 집중, 공급 부족 심각, 경기·강원 지역에서 장거리 운송'
    },
    {
      region: '충청권',
      demandShare: 18,
      supplyStatus: 'stable',
      description: '산림골재 생산 활발, 수도권 공급 기지 역할, 안정적 수급 상태'
    },
    {
      region: '영남권',
      demandShare: 24,
      supplyStatus: 'stable',
      description: '대형 산업단지 개발, 항만·도로 건설 수요, 지역 내 자급자족 가능'
    },
    {
      region: '호남권',
      demandShare: 11,
      supplyStatus: 'surplus',
      description: '상대적 수요 적음, 공급 여력 있음, 타 지역 공급 가능'
    },
    {
      region: '강원권',
      demandShare: 5,
      supplyStatus: 'stable',
      description: '산림골재 중심, 수도권 공급원, 환경규제 강화로 생산 제한'
    }
  ];
}

/**
 * 지역별 상세 시장 현황 조회
 * 
 * 출처: 
 * - 국토교통부 2023년 골재 수급 통계
 * - 한국물가정보 2024년 10월 가격 자료
 */
export async function fetchRegionalMarketData(): Promise<RegionalMarketData[]> {
  // Mock 데이터 (2023년 생산량 + 2024년 10월 가격)
  return [
    {
      region: '경기',
      production: 48.5,
      productionShare: 21.3,
      washSandPrice: 26800,
      recycledPrice: 11800,
      mainProduct: '쇄석, 모래',
      trend: '최대 생산지, 수도권 공급 중심',
      yearOverYear: -1.2
    },
    {
      region: '강원',
      production: 38.2,
      productionShare: 16.8,
      washSandPrice: 24200,
      recycledPrice: 11200,
      mainProduct: '산림골재, 모래',
      trend: '수도권 공급원, 환경규제 영향',
      yearOverYear: -2.5
    },
    {
      region: '충남',
      production: 32.8,
      productionShare: 14.4,
      washSandPrice: 23500,
      recycledPrice: 10800,
      mainProduct: '쇄석, 자갈',
      trend: '수도권 공급 기지, 안정적',
      yearOverYear: 1.8
    },
    {
      region: '경남',
      production: 28.5,
      productionShare: 12.5,
      washSandPrice: 22000,
      recycledPrice: 10200,
      mainProduct: '쇄석',
      trend: '영남권 중심, 지역 자급자족',
      yearOverYear: 2.3
    },
    {
      region: '경북',
      production: 24.3,
      productionShare: 10.7,
      washSandPrice: 21500,
      recycledPrice: 9800,
      mainProduct: '쇄석, 모래',
      trend: '대구권 공급, 여유 있음',
      yearOverYear: 1.5
    },
    {
      region: '충북',
      production: 18.9,
      productionShare: 8.3,
      washSandPrice: 22800,
      recycledPrice: 10500,
      mainProduct: '쇄석',
      trend: '내륙 생산, 중부권 공급',
      yearOverYear: 0.8
    },
    {
      region: '전남',
      production: 15.2,
      productionShare: 6.7,
      washSandPrice: 20800,
      recycledPrice: 9500,
      mainProduct: '바다모래',
      trend: '해사 채취, 공급 여유',
      yearOverYear: -0.5
    },
    {
      region: '전북',
      production: 10.8,
      productionShare: 4.7,
      washSandPrice: 21200,
      recycledPrice: 10000,
      mainProduct: '쇄석',
      trend: '지역 소비 중심',
      yearOverYear: 0.3
    },
    {
      region: '인천',
      production: 6.5,
      productionShare: 2.9,
      washSandPrice: 27200,
      recycledPrice: 12500,
      mainProduct: '바다모래',
      trend: '수도권 보조, 해사 중심',
      yearOverYear: -3.2
    },
    {
      region: '기타',
      production: 4.3,
      productionShare: 1.9,
      washSandPrice: 28500,
      recycledPrice: 12200,
      mainProduct: '혼합',
      trend: '서울/대전 등 소규모',
      yearOverYear: -1.0
    }
  ];
}

/**
 * 정책 및 규제 정보
 */
export async function fetchPolicyInfo() {
  return {
    recycledAggregateQuota: {
      current: 30,
      target2025: 40,
      target2030: 50,
      unit: '퍼센트'
    },
    environmentalRegulations: [
      '골재채취법 개정 (2023년)',
      '건설폐기물 재활용촉진법 강화',
      '순환골재 품질인증제 의무화',
      '환경영향평가 기준 강화'
    ],
    govSupport: [
      '순환골재 생산시설 설치 보조금 (최대 30%)',
      '세제 혜택 (5년간 법인세 감면)',
      'R&D 지원 (연간 100억 원 규모)',
      '품질인증 취득 지원'
    ]
  };
}

/**
 * 데이터 캐싱 (1시간)
 */
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000; // 1시간

export async function getCachedData<T>(
  key: string,
  fetchFunction: () => Promise<T>
): Promise<T> {
  const cached = cache.get(key);
  const now = Date.now();

  if (cached && now - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const data = await fetchFunction();
  cache.set(key, { data, timestamp: now });
  return data;
}

/**
 * 모든 골재 데이터를 한 번에 조회
 */
export async function fetchAllAggregateData() {
  const [prices, production, trends, policy] = await Promise.all([
    getCachedData('prices', fetchAggregatePrices),
    getCachedData('production', fetchAggregateProduction),
    getCachedData('trends', fetchMarketTrends),
    getCachedData('policy', fetchPolicyInfo)
  ]);

  return {
    prices,
    production,
    trends,
    policy,
    lastUpdated: new Date().toISOString()
  };
}

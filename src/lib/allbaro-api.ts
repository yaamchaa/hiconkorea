// 올바로 시스템 API 연동 - 하이콘 코리아 전용
// 실제 사용 시 환경변수에 API 키를 설정하세요

const ALLBARO_API_KEY = import.meta.env?.VITE_ALLBARO_API_KEY || 'YOUR_API_KEY_HERE';
const ALLBARO_API_URL = 'https://www.allbaro.or.kr/api'; // 실제 API 엔드포인트로 변경 필요

// 하이콘 코리아 사업자 정보
const COMPANY_NAME = '하이콘 코리아';
const BUSINESS_NUMBER = '123-45-67890'; // 실제 사업자번호로 변경 필요
const FACILITY_ID = 'HICON-KOREA-001';

export async function fetchWasteData(startDate: string, endDate: string) {
  // 하이콘 코리아 전용 올바로 시스템 API 호출
  // 현재는 Mock 데이터를 반환합니다
  
  try {
    // 실제 API 호출 예시 (실제 엔드포인트로 교체 필요)
    // 올바로 시스템에서 특정 사업자번호의 데이터만 가져오기
    // const response = await fetch(
    //   `${ALLBARO_API_URL}/waste-data?` +
    //   `key=${ALLBARO_API_KEY}&` +
    //   `businessNumber=${BUSINESS_NUMBER}&` +
    //   `facilityId=${FACILITY_ID}&` +
    //   `startDate=${startDate}&` +
    //   `endDate=${endDate}`
    // );
    // const data = await response.json();
    // return data;
    
    // Mock 데이터 (개발/테스트용 - 하이콘 코리아 데이터)
    return generateMockWasteData(startDate, endDate);
  } catch (error) {
    console.error('올바로 시스템 API 호출 실패:', error);
    throw error;
  }
}

// Mock 데이터 생성 (실제 API 연동 전까지 사용)
// 하이콘 코리아 순환 골재 공장으로 입고되는 폐기물 데이터
function generateMockWasteData(startDate: string, endDate: string) {
  const wasteTypes = [
    '건설폐기물 - 콘크리트',
    '건설폐기물 - 아스팔트',
    '건설폐기물 - 벽돌',
    '건설폐기물 - 혼합',
  ];
  
  // 하이콘 코리아 공장으로 폐기물을 반입하는 실제 건설 현장들
  const sources = [
    '서울시 강남구 재개발 현장',
    '경기도 수원시 건축 현장',
    '인천시 도로 확장 공사',
    '서울시 송파구 아파트 재건축',
    '경기도 성남시 상가 신축',
    '경기도 화성시 공장 건설',
  ];
  
  const mockData = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
    const recordsPerDay = Math.floor(Math.random() * 3) + 2; // 2-4건
    
    for (let i = 0; i < recordsPerDay; i++) {
      mockData.push({
        date: date.toISOString().split('T')[0],
        waste_type: wasteTypes[Math.floor(Math.random() * wasteTypes.length)],
        quantity: Math.floor(Math.random() * 50) + 10, // 10-60톤
        unit: '톤',
        source: sources[Math.floor(Math.random() * sources.length)],
        status: ['received', 'processing', 'completed'][Math.floor(Math.random() * 3)] as 'received' | 'processing' | 'completed',
      });
    }
  }
  
  return mockData;
}

// 순환 골재 생산 데이터 생성
export function generateRecycledAggregateData(wasteQuantity: number) {
  const productTypes = [
    '순환 조골재 (40mm)',
    '순환 잔골재 (5mm)',
    '순환 세골재 (0.08mm)',
  ];
  
  const qualityGrades = ['1급', '2급', '3급'];
  
  // 폐기물 대비 재생률 (일반적으로 70-85%)
  const recyclingRate = 0.75 + Math.random() * 0.1;
  const totalProduced = wasteQuantity * recyclingRate;
  
  const products = [];
  let remaining = totalProduced;
  
  // 제품 타입별 분배
  for (let i = 0; i < productTypes.length - 1; i++) {
    const ratio = 0.2 + Math.random() * 0.3;
    const quantity = remaining * ratio;
    products.push({
      product_type: productTypes[i],
      quantity: Math.round(quantity * 10) / 10,
      unit: '톤',
      quality_grade: qualityGrades[Math.floor(Math.random() * qualityGrades.length)],
    });
    remaining -= quantity;
  }
  
  // 나머지는 마지막 제품으로
  products.push({
    product_type: productTypes[productTypes.length - 1],
    quantity: Math.round(remaining * 10) / 10,
    unit: '톤',
    quality_grade: qualityGrades[Math.floor(Math.random() * qualityGrades.length)],
  });
  
  return products;
}

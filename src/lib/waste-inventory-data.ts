// 공유 폐기물 재고 데이터
// InventoryPage와 ProductionPage에서 모두 사용

// 차량별 운송 정보
export interface DeliveryInfo {
  vehicle_number: string; // 차량 번호
  transport_company: string; // 운송 회사
  departure_time: string; // 출발 시간
  arrival_time: string; // 도착 시간
  transported_amount: number; // 운송량 (톤)
  driver_name?: string; // 운전기사명
}

export interface WasteInventory {
  id: string;
  waste_type: string;
  quantity: number;
  location: string;
  received_date: string;
  supplier: string;
  status: 'pending' | 'processing' | 'processed';
  production_date?: string;
  production_time?: string;
  production_line?: string;
  production_aggregate_type?: string;
  production_duration?: number;
  // 공급/운송 정보 (올바로 시스템 연동)
  contract_number?: string; // 계약 번호
  delivery_batch?: string; // 배송 회차 (예: "1차", "2차")
  predicted_supply_amount?: number; // 올바로 시스템 예측 공급량 (전일 저녁 전달)
  deliveries?: DeliveryInfo[]; // 차량별 운송 내역 (여러 차량 가능)
}

// Mock 데이터 - 폐기물 재고
// 일련번호 중복 방지: 현재 재고에 있는 폐기물만 포함
// W001, W003, W005, W007은 이미 순환골재로 이동 완료 (삭제됨)
export const baseWasteInventory: WasteInventory[] = [
  // W002 - 처리중 (현재 A라인에서 생산 진행중)
  {
    id: 'W002',
    waste_type: '아스팔트 폐기물',
    quantity: 320,
    location: '야적장 B구역',
    received_date: '2025-10-28',
    supplier: '대한건설산업',
    status: 'processing',
    production_date: '2025-10-30',
    production_time: '13:00',
    production_line: 'A라인',
    production_aggregate_type: '순환골재 25mm',
    production_duration: 100,
    contract_number: 'HC-2025-002',
    delivery_batch: '1차',
    predicted_supply_amount: 340,
    deliveries: [
      {
        vehicle_number: '경기 45나 7890',
        transport_company: '대한물류',
        departure_time: '08:15',
        arrival_time: '10:15',
        transported_amount: 170,
        driver_name: '최민호'
      },
      {
        vehicle_number: '인천 78라 3456',
        transport_company: '대한물류',
        departure_time: '09:00',
        arrival_time: '11:00',
        transported_amount: 150,
        driver_name: '정수진'
      }
    ]
  },
  // W004 - 대기중
  {
    id: 'W004',
    waste_type: '혼합골재 폐기물',
    quantity: 275,
    location: '야적장 D구역',
    received_date: '2025-10-29',
    supplier: '서울건설 주식회사',
    status: 'pending',
    contract_number: 'HC-2025-001',
    delivery_batch: '2차',
    predicted_supply_amount: 260,
    deliveries: [
      {
        vehicle_number: '서울 90라 5678',
        transport_company: '한진운수',
        departure_time: '09:20',
        arrival_time: '11:20',
        transported_amount: 140,
        driver_name: '홍길동'
      },
      {
        vehicle_number: '경기 12마 9012',
        transport_company: '한진운수',
        departure_time: '09:45',
        arrival_time: '11:50',
        transported_amount: 135,
        driver_name: '윤서연'
      }
    ]
  },
  // W006 - 대기중
  {
    id: 'W006',
    waste_type: '아스팔트 폐기물',
    quantity: 280,
    location: '야적장 F구역',
    received_date: '2025-10-29',
    supplier: 'GS건설',
    status: 'pending',
    contract_number: 'HC-2025-005',
    delivery_batch: '1차',
    predicted_supply_amount: 270,
    deliveries: [
      {
        vehicle_number: '서울 56바 3456',
        transport_company: 'GS로지스틱스',
        departure_time: '12:30',
        arrival_time: '14:30',
        transported_amount: 150,
        driver_name: '임태희'
      },
      {
        vehicle_number: '경기 89아 1234',
        transport_company: 'GS로지스틱스',
        departure_time: '13:00',
        arrival_time: '15:00',
        transported_amount: 130,
        driver_name: '한소희'
      }
    ]
  },
  // W008 - 대기중
  {
    id: 'W008',
    waste_type: '벽돌 폐기물',
    quantity: 210,
    location: '야적장 H구역',
    received_date: '2025-10-28',
    supplier: '포스코건설',
    status: 'pending',
    contract_number: 'HC-2025-007',
    delivery_batch: '1차',
    predicted_supply_amount: 200,
    deliveries: [
      {
        vehicle_number: '인천 67아 1234',
        transport_company: '포스코물류',
        departure_time: '11:15',
        arrival_time: '13:15',
        transported_amount: 110,
        driver_name: '전지현'
      },
      {
        vehicle_number: '경기 90자 5678',
        transport_company: '포스코물류',
        departure_time: '11:45',
        arrival_time: '13:45',
        transported_amount: 100,
        driver_name: '김태리'
      }
    ]
  }
];

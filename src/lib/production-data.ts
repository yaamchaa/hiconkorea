// 공유 생산 기록 데이터
// ProductionPage와 InventoryPage에서 모두 사용

export interface ProductionRecord {
  id: string;
  date: string;
  time: string;
  line_name: string;
  waste_input_type: string;
  waste_input_quantity: number;
  aggregate_output_type: string;
  aggregate_output_quantity: number;
  conversion_rate: number;
  quality_grade: 'A' | 'B' | 'C';
  duration: number;
  waste_id?: string;
  completed_at?: string; // 생산 완료 시간 (ISO 8601)
}

// Mock 데이터 - 생산 이력 (기본)
// 하나의 폐기물이 여러 라인에 나뉘어 투입될 수 있음
// 일련번호 W001~W008까지만 사용 (waste-inventory-data.ts와 일치)
export const baseProductionRecords: ProductionRecord[] = [
  // W001 콘크리트 폐기물 450톤 → A라인(200톤), B라인(150톤), C라인(100톤)으로 분산
  {
    id: 'PR001-1',
    date: '2025-10-30',
    time: '09:30',
    line_name: 'A라인',
    waste_input_type: '콘크리트 폐기물',
    waste_input_quantity: 200,
    aggregate_output_type: '순환골재 40mm',
    aggregate_output_quantity: 184,
    conversion_rate: 92,
    quality_grade: 'A',
    duration: 120,
    waste_id: 'W001',
    completed_at: '2025-10-30T11:30:00+09:00'
  },
  {
    id: 'PR001-2',
    date: '2025-10-30',
    time: '09:35',
    line_name: 'B라인',
    waste_input_type: '콘크리트 폐기물',
    waste_input_quantity: 150,
    aggregate_output_type: '순환골재 25mm',
    aggregate_output_quantity: 135,
    conversion_rate: 90,
    quality_grade: 'A',
    duration: 95,
    waste_id: 'W001',
    completed_at: '2025-10-30T11:10:00+09:00'
  },
  {
    id: 'PR001-3',
    date: '2025-10-30',
    time: '09:40',
    line_name: 'C라인',
    waste_input_type: '콘크리트 폐기물',
    waste_input_quantity: 100,
    aggregate_output_type: '순환 쇄석',
    aggregate_output_quantity: 85,
    conversion_rate: 85,
    quality_grade: 'B',
    duration: 80,
    waste_id: 'W001',
    completed_at: '2025-10-30T11:00:00+09:00'
  },
  // W002 아스팔트 폐기물 320톤 → A라인에서 처리중
  {
    id: 'PR002',
    date: '2025-10-30',
    time: '13:00',
    line_name: 'A라인',
    waste_input_type: '아스팔트 폐기물',
    waste_input_quantity: 320,
    aggregate_output_type: '순환골재 25mm',
    aggregate_output_quantity: 272,
    conversion_rate: 85,
    quality_grade: 'A',
    duration: 100,
    waste_id: 'W002'
  },
  // W003 벽돌 폐기물 180톤 → B라인에 투입
  {
    id: 'PR003',
    date: '2025-10-30',
    time: '11:15',
    line_name: 'B라인',
    waste_input_type: '벽돌 폐기물',
    waste_input_quantity: 180,
    aggregate_output_type: '순환 쇄석',
    aggregate_output_quantity: 144,
    conversion_rate: 80,
    quality_grade: 'B',
    duration: 95,
    waste_id: 'W003',
    completed_at: '2025-10-30T12:50:00+09:00'
  },
  // W005 콘크리트 폐기물 520톤 → C라인에 투입
  {
    id: 'PR005',
    date: '2025-10-30',
    time: '08:00',
    line_name: 'C라인',
    waste_input_type: '콘크리트 폐기물',
    waste_input_quantity: 520,
    aggregate_output_type: '순환골재 25mm',
    aggregate_output_quantity: 442,
    conversion_rate: 85,
    quality_grade: 'A',
    duration: 135,
    waste_id: 'W005',
    completed_at: '2025-10-30T10:15:00+09:00'
  },
  // W007 콘크리트 폐기물 390톤 → A라인(200톤), B라인(190톤)에 나뉘어 투입
  {
    id: 'PR007-1',
    date: '2025-10-29',
    time: '14:30',
    line_name: 'A라인',
    waste_input_type: '콘크리트 폐기물',
    waste_input_quantity: 200,
    aggregate_output_type: '순환골재 40mm',
    aggregate_output_quantity: 184,
    conversion_rate: 92,
    quality_grade: 'A',
    duration: 95,
    waste_id: 'W007',
    completed_at: '2025-10-29T16:05:00+09:00'
  },
  {
    id: 'PR007-2',
    date: '2025-10-29',
    time: '14:35',
    line_name: 'B라인',
    waste_input_type: '콘크리트 폐기물',
    waste_input_quantity: 190,
    aggregate_output_type: '순환골재 25mm',
    aggregate_output_quantity: 171,
    conversion_rate: 90,
    quality_grade: 'A',
    duration: 90,
    waste_id: 'W007',
    completed_at: '2025-10-29T16:05:00+09:00'
  }
];

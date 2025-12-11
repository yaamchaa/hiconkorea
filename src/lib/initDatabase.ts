import { supabase } from './supabase';

// 데이터베이스 초기화 SQL
const INIT_SQL = `
-- 폐기물 입고 기록 테이블
CREATE TABLE IF NOT EXISTS waste_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT DEFAULT '하이콘 코리아',
  facility_id TEXT DEFAULT 'HICON-KOREA-001',
  date DATE NOT NULL,
  waste_type TEXT NOT NULL,
  quantity DECIMAL(10, 2) NOT NULL,
  unit TEXT DEFAULT '톤',
  source TEXT NOT NULL,
  status TEXT CHECK (status IN ('received', 'processing', 'completed')) DEFAULT 'received',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 순환 골재 생산 기록 테이블
CREATE TABLE IF NOT EXISTS recycled_aggregates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT DEFAULT '하이콘 코리아',
  facility_id TEXT DEFAULT 'HICON-KOREA-001',
  date DATE NOT NULL,
  product_type TEXT NOT NULL,
  quantity DECIMAL(10, 2) NOT NULL,
  unit TEXT DEFAULT '톤',
  quality_grade TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 일일 통계 테이블
CREATE TABLE IF NOT EXISTS daily_stats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT DEFAULT '하이콘 코리아',
  facility_id TEXT DEFAULT 'HICON-KOREA-001',
  date DATE NOT NULL,
  total_waste_received DECIMAL(10, 2) DEFAULT 0,
  total_aggregate_produced DECIMAL(10, 2) DEFAULT 0,
  recycling_rate DECIMAL(5, 2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(company_name, facility_id, date)
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_waste_records_company ON waste_records(company_name, facility_id);
CREATE INDEX IF NOT EXISTS idx_waste_records_date ON waste_records(date);
CREATE INDEX IF NOT EXISTS idx_waste_records_status ON waste_records(status);
CREATE INDEX IF NOT EXISTS idx_recycled_aggregates_company ON recycled_aggregates(company_name, facility_id);
CREATE INDEX IF NOT EXISTS idx_recycled_aggregates_date ON recycled_aggregates(date);
CREATE INDEX IF NOT EXISTS idx_daily_stats_company ON daily_stats(company_name, facility_id);
CREATE INDEX IF NOT EXISTS idx_daily_stats_date ON daily_stats(date);

-- RLS (Row Level Security) 활성화
ALTER TABLE waste_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE recycled_aggregates ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_stats ENABLE ROW LEVEL SECURITY;

-- 정책이 존재하지 않는 경우에만 생성
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'waste_records' AND policyname = 'Enable read access for all users'
  ) THEN
    CREATE POLICY "Enable read access for all users" ON waste_records FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'recycled_aggregates' AND policyname = 'Enable read access for all users'
  ) THEN
    CREATE POLICY "Enable read access for all users" ON recycled_aggregates FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'daily_stats' AND policyname = 'Enable read access for all users'
  ) THEN
    CREATE POLICY "Enable read access for all users" ON daily_stats FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'waste_records' AND policyname = 'Enable insert access for all users'
  ) THEN
    CREATE POLICY "Enable insert access for all users" ON waste_records FOR INSERT WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'recycled_aggregates' AND policyname = 'Enable insert access for all users'
  ) THEN
    CREATE POLICY "Enable insert access for all users" ON recycled_aggregates FOR INSERT WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'daily_stats' AND policyname = 'Enable insert access for all users'
  ) THEN
    CREATE POLICY "Enable insert access for all users" ON daily_stats FOR INSERT WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'daily_stats' AND policyname = 'Enable update access for all users'
  ) THEN
    CREATE POLICY "Enable update access for all users" ON daily_stats FOR UPDATE USING (true);
  END IF;
END $$;
`;

const SAMPLE_DATA_SQL = `
-- 샘플 데이터 삽입 (중복 방지)
INSERT INTO waste_records (company_name, facility_id, date, waste_type, quantity, unit, source, status)
SELECT * FROM (VALUES
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE - INTERVAL '1 day', '건설폐기물 - 콘크리트', 35.5, '톤', '서울시 건설현장 A', 'completed'),
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE - INTERVAL '1 day', '건설폐기물 - 아스팔트', 28.0, '톤', '경기도 재개발 B', 'completed'),
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE, '건설폐기물 - 콘크리트', 42.3, '톤', '인천시 도로공사 C', 'processing'),
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE, '건설폐기물 - 벽돌', 18.7, '톤', '수원시 건축현장 D', 'received')
) AS t(company_name, facility_id, date, waste_type, quantity, unit, source, status)
WHERE NOT EXISTS (
  SELECT 1 FROM waste_records WHERE company_name = '하이콘 코리아' LIMIT 1
);

INSERT INTO recycled_aggregates (company_name, facility_id, date, product_type, quantity, unit, quality_grade)
SELECT * FROM (VALUES
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE - INTERVAL '1 day', '순환 조골재 (40mm)', 25.5, '톤', '1급'),
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE - INTERVAL '1 day', '순환 잔골재 (5mm)', 20.3, '톤', '1급'),
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE - INTERVAL '1 day', '순환 세골재 (0.08mm)', 12.8, '톤', '2급')
) AS t(company_name, facility_id, date, product_type, quantity, unit, quality_grade)
WHERE NOT EXISTS (
  SELECT 1 FROM recycled_aggregates WHERE company_name = '하이콘 코리아' LIMIT 1
);

INSERT INTO daily_stats (company_name, facility_id, date, total_waste_received, total_aggregate_produced, recycling_rate)
SELECT * FROM (VALUES
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE - INTERVAL '1 day', 63.5, 58.6, 92.3),
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE, 61.0, 0.0, 0.0)
) AS t(company_name, facility_id, date, total_waste_received, total_aggregate_produced, recycling_rate)
WHERE NOT EXISTS (
  SELECT 1 FROM daily_stats WHERE company_name = '하이콘 코리아' LIMIT 1
)
ON CONFLICT (company_name, facility_id, date) DO NOTHING;
`;

export async function initializeDatabase() {
  try {
    console.log('🔧 데이터베이스 초기화 시작...');

    // Supabase에서는 RPC를 통해 SQL을 실행할 수 없으므로
    // 사용자에게 수동으로 실행하도록 안내
    const instructions = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Supabase 데이터베이스 초기화가 필요합니다
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

아래 단계를 따라 데이터베이스를 설정해주세요:

1️⃣ Supabase 대시보드 접속
   https://supabase.com/dashboard

2️⃣ 프로젝트 선택 후 왼쪽 메뉴에서 "SQL Editor" 클릭

3️⃣ "New Query" 버튼 클릭

4️⃣ 아래 SQL을 복사하여 붙여넣고 "Run" 버튼 클릭

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${INIT_SQL}

${SAMPLE_DATA_SQL}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ 실행 완료 후 페이지를 새로고침하세요!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;

    console.log(instructions);
    
    return {
      success: false,
      message: '데이터베이스 테이블을 생성해야 합니다. 콘솔을 확인하세요.',
      instructions: instructions,
      sql: INIT_SQL + '\n\n' + SAMPLE_DATA_SQL
    };

  } catch (error) {
    console.error('데이터베이스 초기화 오류:', error);
    return {
      success: false,
      error: error
    };
  }
}

// 테이블 존재 여부 확인
export async function checkTablesExist() {
  try {
    const { data: wasteData, error: wasteError } = await supabase
      .from('waste_records')
      .select('id')
      .limit(1);

    const { data: aggregatesData, error: aggregatesError } = await supabase
      .from('recycled_aggregates')
      .select('id')
      .limit(1);

    const { data: statsData, error: statsError } = await supabase
      .from('daily_stats')
      .select('id')
      .limit(1);

    // PGRST205 에러는 테이블이 없다는 의미
    const wasteExists = !wasteError || wasteError.code !== 'PGRST205';
    const aggregatesExists = !aggregatesError || aggregatesError.code !== 'PGRST205';
    const statsExists = !statsError || statsError.code !== 'PGRST205';

    const allExist = wasteExists && aggregatesExists && statsExists;

    if (!allExist) {
      console.warn('⚠️ 일부 테이블이 존재하지 않습니다:');
      if (!wasteExists) console.warn('  - waste_records');
      if (!aggregatesExists) console.warn('  - recycled_aggregates');
      if (!statsExists) console.warn('  - daily_stats');
    }

    return {
      allExist,
      waste_records: wasteExists,
      recycled_aggregates: aggregatesExists,
      daily_stats: statsExists
    };
  } catch (error) {
    console.error('테이블 확인 오류:', error);
    return {
      allExist: false,
      waste_records: false,
      recycled_aggregates: false,
      daily_stats: false
    };
  }
}

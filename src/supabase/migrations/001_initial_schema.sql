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

-- 모든 사용자가 읽기 가능하도록 설정
CREATE POLICY "Enable read access for all users" ON waste_records FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON recycled_aggregates FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON daily_stats FOR SELECT USING (true);

-- 모든 사용자가 쓰기 가능하도록 설정 (실제 운영에서는 적절한 권한 설정 필요)
CREATE POLICY "Enable insert access for all users" ON waste_records FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert access for all users" ON recycled_aggregates FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert access for all users" ON daily_stats FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON daily_stats FOR UPDATE USING (true);

-- 샘플 데이터 삽입 (테스트용 - 하이콘 코리아 전용)
INSERT INTO waste_records (company_name, facility_id, date, waste_type, quantity, unit, source, status) VALUES
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE - INTERVAL '1 day', '건설폐기물 - 콘크리트', 35.5, '톤', '서울시 건설현장 A', 'completed'),
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE - INTERVAL '1 day', '건설폐기물 - 아스팔트', 28.0, '톤', '경기도 재개발 B', 'completed'),
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE, '건설폐기물 - 콘크리트', 42.3, '톤', '인천시 도로공사 C', 'processing'),
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE, '건설폐기물 - 벽돌', 18.7, '톤', '수원시 건축현장 D', 'received');

INSERT INTO recycled_aggregates (company_name, facility_id, date, product_type, quantity, unit, quality_grade) VALUES
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE - INTERVAL '1 day', '순환 조골재 (40mm)', 25.5, '톤', '1급'),
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE - INTERVAL '1 day', '순환 잔골재 (5mm)', 20.3, '톤', '1급'),
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE - INTERVAL '1 day', '순환 세골재 (0.08mm)', 12.8, '톤', '2급');

INSERT INTO daily_stats (company_name, facility_id, date, total_waste_received, total_aggregate_produced, recycling_rate) VALUES
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE - INTERVAL '1 day', 63.5, 58.6, 92.3),
  ('하이콘 코리아', 'HICON-KOREA-001', CURRENT_DATE, 61.0, 0, 0);

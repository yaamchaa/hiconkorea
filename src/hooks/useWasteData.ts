import { useState, useEffect } from 'react';
import { supabase, isSupabaseConnected } from '../lib/supabase';
import { fetchWasteData, generateRecycledAggregateData } from '../lib/allbaro-api';

// 하이콘 코리아 전용 상수
const COMPANY_NAME = '하이콘 코리아';
const FACILITY_ID = 'HICON-KOREA-001';

export function useWasteData() {
  const [loading, setLoading] = useState(false);
  const [dailyStats, setDailyStats] = useState<any>(null);
  const [recentWaste, setRecentWaste] = useState<any[]>([]);
  const [recentProducts, setRecentProducts] = useState<any[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // 준비중 모드 - 데이터 로딩 비활성화
    setLoading(false);
    setIsConnected(false);
  }, []);

  // 데모용 Mock 데이터 로드 (Supabase 미연결 시)
  function loadDemoData() {
    const today = new Date().toISOString().split('T')[0];
    
    // 최근 7일 Mock 데이터 생성
    const mockWaste = [];
    const mockProducts = [];
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      
      // 폐기물 2-3건씩
      const recordsPerDay = Math.floor(Math.random() * 2) + 2;
      for (let j = 0; j < recordsPerDay; j++) {
        mockWaste.push({
          date,
          waste_type: ['건설폐기물 - 콘크리트', '건설폐기물 - 아스팔트', '건설폐기물 - 벽돌'][j % 3],
          quantity: Math.floor(Math.random() * 40) + 20,
          source: ['서울시 건설현장 A', '경기도 재개발 B', '인천시 도로공사 C'][j % 3],
          status: ['received', 'processing', 'completed'][j % 3],
        });
      }
      
      // 환 골재 1-2건씩
      const productsPerDay = Math.floor(Math.random() * 2) + 1;
      for (let j = 0; j < productsPerDay; j++) {
        mockProducts.push({
          date,
          product_type: ['순환 조골재 (40mm)', '순환 잔골재 (5mm)'][j % 2],
          quantity: Math.floor(Math.random() * 30) + 15,
          quality_grade: ['1급', '2급'][j % 2],
        });
      }
    }
    
    // 오늘 통계
    const todayWaste = mockWaste.filter(w => w.date === today).reduce((sum, w) => sum + w.quantity, 0);
    const todayProducts = mockProducts.filter(p => p.date === today).reduce((sum, p) => sum + p.quantity, 0);
    
    setRecentWaste(mockWaste);
    setRecentProducts(mockProducts);
    setDailyStats({
      date: today,
      total_waste_received: todayWaste,
      total_aggregate_produced: todayProducts,
      recycling_rate: todayWaste > 0 ? Math.round((todayProducts / todayWaste) * 100) : 0,
    });
  }

  // Supabase 연결 시 초기화
  async function initializeData() {
    try {
      setLoading(true);
      
      // 하이콘 코리아 기존 데이터 확인
      const { data: existingData, error } = await supabase
        .from('waste_records')
        .select('*')
        .eq('company_name', COMPANY_NAME)
        .eq('facility_id', FACILITY_ID)
        .limit(1);
      
      if (error && error.code !== 'PGRST116') {
        console.error('데이터 확인 실패:', error);
      }
      
      // 데이터가 없으면 초기 Mock 데이터 생성
      if (!existingData || existingData.length === 0) {
        console.log('초기 데이터 생성 중...');
        await generateInitialMockData();
      }
      
      // 데이터 로드
      await loadData();
      
      // 자동 동기화 체크
      checkAndSync();
      
    } catch (error) {
      console.error('초기화 실패:', error);
      setLoading(false);
    }
  }

  // 초기 Mock 데이터 생성 (Supabase 첫 연결 시)
  async function generateInitialMockData() {
    try {
      // 최근 7일 Mock 데이터 생성
      const today = new Date();
      
      for (let i = 6; i >= 0; i--) {
        const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        
        const wasteTypes = ['건설폐기물 - 콘크리트', '건설폐기물 - 아스팔트', '건설폐기물 - 벽돌', '건설폐기물 - 혼합'];
        const sources = ['서울시 건설현장 A', '경기도 재개발 B', '인천시 도로공사 C', '수원시 건축현장 D'];
        
        // 하루에 3-4건의 폐기물 입고
        const recordsPerDay = Math.floor(Math.random() * 2) + 3;
        
        for (let j = 0; j < recordsPerDay; j++) {
          const quantity = Math.floor(Math.random() * 50) + 20;
          const status = ['received', 'processing', 'completed'][Math.floor(Math.random() * 3)];
          
          // 하이콘 코리아 폐기물 데이터 저장
          const { error: wasteError } = await supabase
            .from('waste_records')
            .insert([{
              company_name: COMPANY_NAME,
              facility_id: FACILITY_ID,
              date,
              waste_type: wasteTypes[Math.floor(Math.random() * wasteTypes.length)],
              quantity,
              unit: '톤',
              source: sources[Math.floor(Math.random() * sources.length)],
              status,
            }]);
          
          if (wasteError) {
            console.error('Mock 데이터 저장 실패:', wasteError);
            continue;
          }
          
          // 완료된 폐기물에 대해서만 순환 골재 생성
          if (status === 'completed') {
            const productTypes = ['순환 조골재 (40mm)', '순환 잔골재 (5mm)', '순환 세골재 (0.08mm)'];
            const qualityGrades = ['1급', '2급'];
            
            // 재활용률 75-85%
            const recyclingRate = 0.75 + Math.random() * 0.1;
            const totalProduced = quantity * recyclingRate;
            
            // 2-3개 제품으로 분배
            const numProducts = Math.floor(Math.random() * 2) + 2;
            let remaining = totalProduced;
            
            for (let k = 0; k < numProducts - 1; k++) {
              const productQty = remaining * (0.3 + Math.random() * 0.3);
              
              await supabase
                .from('recycled_aggregates')
                .insert([{
                  company_name: COMPANY_NAME,
                  facility_id: FACILITY_ID,
                  date,
                  product_type: productTypes[k % productTypes.length],
                  quantity: Math.round(productQty * 10) / 10,
                  unit: '톤',
                  quality_grade: qualityGrades[Math.floor(Math.random() * qualityGrades.length)],
                }]);
              
              remaining -= productQty;
            }
            
            // 나머지는 마지막 제품으로
            await supabase
              .from('recycled_aggregates')
              .insert([{
                company_name: COMPANY_NAME,
                facility_id: FACILITY_ID,
                date,
                product_type: productTypes[numProducts - 1],
                quantity: Math.round(remaining * 10) / 10,
                unit: '톤',
                quality_grade: qualityGrades[Math.floor(Math.random() * qualityGrades.length)],
              }]);
          }
        }
        
        // 각 날짜별 통계 업데이트
        await updateDailyStats(date);
      }
      
      console.log('초기 Mock 데이터 생성 완료');
    } catch (error) {
      console.error('초기 Mock 데이터 생성 실패:', error);
    }
  }

  // 자동 동기화 체크 함수
  async function checkAndSync() {
    const now = new Date();
    const lastSyncKey = 'lastAllbaroSync';
    const lastSync = localStorage.getItem(lastSyncKey);
    const today = now.toISOString().split('T')[0];
    
    // 오늘 아직 동기화하지 않았고, 현재 시간이 오전 7시 이후인 경우
    if (lastSync !== today && now.getHours() >= 7) {
      console.log('자동 동기화 시작:', new Date().toLocaleString('ko-KR'));
      const result = await syncFromAllbaro();
      if (result.success) {
        localStorage.setItem(lastSyncKey, today);
        console.log(`자동 동기화 완료: ${result.count}건의 데이터 가져옴`);
      }
    }
  }

  async function loadData() {
    if (!isSupabaseConnected()) {
      setLoading(false);
      return;
    }
    
    try {
      setLoading(true);
      
      // 오늘 날짜
      const today = new Date().toISOString().split('T')[0];
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      
      // 하이콘 코리아 최근 7일 폐기물 데이터 조회
      const { data: wasteData, error: wasteError } = await supabase
        .from('waste_records')
        .select('*')
        .eq('company_name', COMPANY_NAME)
        .eq('facility_id', FACILITY_ID)
        .gte('date', weekAgo)
        .order('date', { ascending: false })
        .limit(10);
      
      if (wasteError) {
        console.error('폐기물 데이터 조회 실패:', wasteError);
      }
      
      // 하이콘 코리아 최근 순환 골재 생산 데이터 조회
      const { data: productData, error: productError } = await supabase
        .from('recycled_aggregates')
        .select('*')
        .eq('company_name', COMPANY_NAME)
        .eq('facility_id', FACILITY_ID)
        .gte('date', weekAgo)
        .order('date', { ascending: false })
        .limit(10);
      
      if (productError) {
        console.error('순환 골재 데이터 조회 실패:', productError);
      }
      
      // 하이콘 코리아 오늘 통계 조회
      const { data: statsData, error: statsError } = await supabase
        .from('daily_stats')
        .select('*')
        .eq('company_name', COMPANY_NAME)
        .eq('facility_id', FACILITY_ID)
        .eq('date', today)
        .single();
      
      if (statsError && statsError.code !== 'PGRST116') {
        console.error('통계 데이터 조회 실패:', statsError);
      }
      
      setRecentWaste(wasteData || []);
      setRecentProducts(productData || []);
      setDailyStats(statsData || {
        date: today,
        total_waste_received: 0,
        total_aggregate_produced: 0,
        recycling_rate: 0,
      });
      
    } catch (error) {
      console.error('데이터 로드 실패:', error);
    } finally {
      setLoading(false);
    }
  }

  // 올바로 시스템에서 데이터 가져오기
  async function syncFromAllbaro() {
    if (!isSupabaseConnected()) {
      return { 
        success: false, 
        error: 'Supabase가 연결되지 않았습니다. 환경변수를 설정해주세요.' 
      };
    }
    
    try {
      const today = new Date().toISOString().split('T')[0];
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      
      // 올바로 시스템 API 호출
      const wasteData = await fetchWasteData(yesterday, today);
      
      // 하이콘 코리아 데이터로 Supabase에 저장
      for (const waste of wasteData) {
        const { error } = await supabase
          .from('waste_records')
          .insert([{
            ...waste,
            company_name: COMPANY_NAME,
            facility_id: FACILITY_ID,
          }]);
        
        if (error) {
          console.error('폐기물 데이터 저장 실패:', error);
          continue;
        }
        
        // 완료된 폐기물에 대해 순환 골재 생성
        if (waste.status === 'completed') {
          const products = generateRecycledAggregateData(waste.quantity);
          
          for (const product of products) {
            await supabase
              .from('recycled_aggregates')
              .insert([{
                company_name: COMPANY_NAME,
                facility_id: FACILITY_ID,
                date: waste.date,
                ...product,
              }]);
          }
        }
      }
      
      // 일일 통계 업데이트
      await updateDailyStats(today);
      
      // 데이터 새로고침
      await loadData();
      
      return { success: true, count: wasteData.length };
    } catch (error) {
      console.error('올바로 시스템 동기화 실패:', error);
      return { success: false, error };
    }
  }

  async function updateDailyStats(date: string) {
    // 하이콘 코리아 해당 날짜의 총 입고량 계산
    const { data: wasteData } = await supabase
      .from('waste_records')
      .select('quantity')
      .eq('company_name', COMPANY_NAME)
      .eq('facility_id', FACILITY_ID)
      .eq('date', date);
    
    const totalWaste = wasteData?.reduce((sum, record) => sum + record.quantity, 0) || 0;
    
    // 하이콘 코리아 해당 날짜의 총 생산량 계산
    const { data: productData } = await supabase
      .from('recycled_aggregates')
      .select('quantity')
      .eq('company_name', COMPANY_NAME)
      .eq('facility_id', FACILITY_ID)
      .eq('date', date);
    
    const totalProduct = productData?.reduce((sum, record) => sum + record.quantity, 0) || 0;
    
    const recyclingRate = totalWaste > 0 ? (totalProduct / totalWaste) * 100 : 0;
    
    // 하이콘 코리아 통계 저장/업데이트
    await supabase
      .from('daily_stats')
      .upsert([{
        company_name: COMPANY_NAME,
        facility_id: FACILITY_ID,
        date,
        total_waste_received: totalWaste,
        total_aggregate_produced: totalProduct,
        recycling_rate: Math.round(recyclingRate * 10) / 10,
      }]);
  }

  return {
    loading,
    dailyStats,
    recentWaste,
    recentProducts,
    syncFromAllbaro,
    refreshData: loadData,
    isConnected,
  };
}
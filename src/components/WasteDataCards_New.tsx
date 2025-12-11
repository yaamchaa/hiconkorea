import { useState } from 'react';
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid } from 'recharts';
import { TrendingUp, TrendingDown, Package, Recycle, Calendar, ArrowUpRight, Truck, Box } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Progress } from './ui/progress';

// 하드코딩된 데이터
const HARDCODED_DATA = {
  // 오늘의 통계
  dailyStats: {
    date: new Date().toISOString().split('T')[0],
    total_waste_received: 245.8,
    total_aggregate_produced: 198.5,
    recycling_rate: 81,
  },
  
  // 최근 7일 폐기물 입고 데이터
  recentWaste: [
    { date: new Date(Date.now() - 0 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 콘크리트', quantity: 85.5, source: '서울시 강남구 건설현장 A', status: 'completed' },
    { date: new Date(Date.now() - 0 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 아스팔트', quantity: 62.3, source: '경기도 성남시 재개발 B', status: 'processing' },
    { date: new Date(Date.now() - 0 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 벽돌', quantity: 45.2, source: '인천시 연수구 도로공사 C', status: 'processing' },
    { date: new Date(Date.now() - 0 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 혼합', quantity: 52.8, source: '수원시 건축현장 D', status: 'received' },
    
    { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 콘크리트', quantity: 92.4, source: '서울시 송파구 재건축 E', status: 'completed' },
    { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 아스팔트', quantity: 71.2, source: '경기도 화성시 도로공사 F', status: 'completed' },
    { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 벽돌', quantity: 38.6, source: '인천시 부평구 건설현장 G', status: 'completed' },
    
    { date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 콘크리트', quantity: 78.3, source: '서울시 마포구 재개발 H', status: 'completed' },
    { date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 아스팔트', quantity: 55.7, source: '경기도 용인시 건설현장 I', status: 'completed' },
    { date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 혼합', quantity: 43.9, source: '수원시 재건축 J', status: 'completed' },
    
    { date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 콘크리트', quantity: 88.6, source: '서울시 서초구 도로공사 K', status: 'completed' },
    { date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 벽돌', quantity: 47.3, source: '경기도 안양시 건설현장 L', status: 'completed' },
    { date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 아스팔트', quantity: 64.1, source: '인천시 남동구 재개발 M', status: 'completed' },
    
    { date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 콘크리트', quantity: 95.2, source: '서울시 강서구 건설현장 N', status: 'completed' },
    { date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 아스팔트', quantity: 68.9, source: '경기도 광명시 도로공사 O', status: 'completed' },
    { date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 혼합', quantity: 51.4, source: '수원시 재개발 P', status: 'completed' },
    
    { date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 콘크리트', quantity: 82.7, source: '서울시 양천구 재건축 Q', status: 'completed' },
    { date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 벽돌', quantity: 42.5, source: '경기도 평택시 건설현장 R', status: 'completed' },
    { date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 아스팔트', quantity: 59.8, source: '인천시 서구 도로공사 S', status: 'completed' },
    
    { date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 콘크리트', quantity: 91.3, source: '서울시 영등포구 재개발 T', status: 'completed' },
    { date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 아스팔트', quantity: 73.6, source: '경기도 시흥시 건설현장 U', status: 'completed' },
    { date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], waste_type: '건설폐기물 - 혼합', quantity: 48.7, source: '수원시 도로공사 V', status: 'completed' },
  ],
  
  // 최근 7일 순환 골재 생산 데이터
  recentProducts: [
    { date: new Date(Date.now() - 0 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 조골재 (40mm)', quantity: 112.3, quality_grade: '1급' },
    { date: new Date(Date.now() - 0 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 잔골재 (5mm)', quantity: 86.2, quality_grade: '1급' },
    
    { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 조골재 (40mm)', quantity: 118.5, quality_grade: '1급' },
    { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 잔골재 (5mm)', quantity: 92.8, quality_grade: '1급' },
    { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 세골재 (0.08mm)', quantity: 32.1, quality_grade: '2급' },
    
    { date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 조골재 (40mm)', quantity: 98.7, quality_grade: '1급' },
    { date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 잔골재 (5mm)', quantity: 75.4, quality_grade: '1급' },
    
    { date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 조골재 (40mm)', quantity: 115.2, quality_grade: '1급' },
    { date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 잔골재 (5mm)', quantity: 89.6, quality_grade: '1급' },
    { date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 세골재 (0.08mm)', quantity: 28.3, quality_grade: '2급' },
    
    { date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 조골재 (40mm)', quantity: 125.8, quality_grade: '1급' },
    { date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 잔골재 (5mm)', quantity: 96.3, quality_grade: '1급' },
    
    { date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 조골재 (40mm)', quantity: 102.4, quality_grade: '1급' },
    { date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 잔골재 (5mm)', quantity: 81.7, quality_grade: '1급' },
    { date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 세골재 (0.08mm)', quantity: 35.6, quality_grade: '2급' },
    
    { date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 조골재 (40mm)', quantity: 121.6, quality_grade: '1급' },
    { date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], product_type: '순환 잔골재 (5mm)', quantity: 94.2, quality_grade: '1급' },
  ],
};

export function WasteOverviewCard() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { dailyStats, recentWaste, recentProducts } = HARDCODED_DATA;

  return (
    <>
      <div 
        onClick={() => setDialogOpen(true)}
        className="rounded-2xl p-4 md:p-6 text-white relative overflow-hidden aspect-square shadow-2xl cursor-pointer hover:shadow-3xl transition-all group"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'
        }}
      >
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-6 h-6" />
        </div>
        
        <div className="mt-4 md:mt-8">
          <h3 className="text-xl md:text-2xl mb-2">오늘의 폐기물 현황</h3>
          <p className="text-white/80 text-xs md:text-sm mb-4 md:mb-6">{new Date().toLocaleDateString('ko-KR')}</p>
          
          <div className="space-y-3 md:space-y-4 mt-4 md:mt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">입고량</span>
              </div>
              <div className="text-xl md:text-2xl">{dailyStats.total_waste_received}<span className="text-xs md:text-sm ml-1">톤</span></div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Recycle className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">재생 골재</span>
              </div>
              <div className="text-xl md:text-2xl">{dailyStats.total_aggregate_produced}<span className="text-xs md:text-sm ml-1">톤</span></div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">재활용률</span>
                </div>
                <div className="text-xl md:text-2xl">{dailyStats.recycling_rate}<span className="text-xs md:text-sm ml-1">%</span></div>
              </div>
              <Progress 
                value={dailyStats.recycling_rate} 
                className="h-2"
                indicatorClassName={dailyStats.recycling_rate >= 75 ? 'bg-white' : 'bg-white/60'}
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              오늘의 폐기물 현황 상세
            </DialogTitle>
            <DialogDescription>
              {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Package className="w-4 h-4" />
                  <span className="text-sm">입고량</span>
                </div>
                <p className="text-3xl text-blue-900">{dailyStats.total_waste_received}</p>
                <p className="text-sm text-blue-600 mt-1">톤</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-600 mb-2">
                  <Recycle className="w-4 h-4" />
                  <span className="text-sm">재생 골재 생산량</span>
                </div>
                <p className="text-3xl text-green-900">{dailyStats.total_aggregate_produced}</p>
                <p className="text-sm text-green-600 mt-1">톤</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center gap-2 text-purple-600 mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">재활용률</span>
                </div>
                <p className="text-3xl text-purple-900">{dailyStats.recycling_rate}</p>
                <p className="text-sm text-purple-600 mt-2 mb-2">% / 목표 75%</p>
                <Progress 
                  value={dailyStats.recycling_rate} 
                  className="h-2"
                  indicatorClassName={dailyStats.recycling_rate >= 75 ? 'bg-purple-600' : 'bg-orange-500'}
                />
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-gray-700">오늘 입고된 폐기물</h4>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs text-gray-600">폐기물 종류</th>
                      <th className="px-4 py-3 text-left text-xs text-gray-600">출처</th>
                      <th className="px-4 py-3 text-right text-xs text-gray-600">수량 (톤)</th>
                      <th className="px-4 py-3 text-center text-xs text-gray-600">상태</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentWaste.filter((waste) => {
                      const today = new Date().toISOString().split('T')[0];
                      return waste.date === today;
                    }).length > 0 ? (
                      recentWaste.filter((waste) => {
                        const today = new Date().toISOString().split('T')[0];
                        return waste.date === today;
                      }).map((waste, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-900">{waste.waste_type}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{waste.source}</td>
                          <td className="px-4 py-3 text-sm text-gray-900 text-right">{waste.quantity}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                              waste.status === 'completed' ? 'bg-green-100 text-green-700' :
                              waste.status === 'processing' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {waste.status === 'completed' ? '생산완료' : waste.status === 'processing' ? '생산중' : '입고완료'}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-4 py-8 text-center text-gray-400">
                          오늘 입고된 데이터가 없습니다
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-gray-700">늘 생산된 순환 골재</h4>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs text-gray-600">제품 종류</th>
                      <th className="px-4 py-3 text-right text-xs text-gray-600">생산량 (톤)</th>
                      <th className="px-4 py-3 text-center text-xs text-gray-600">품질 등급</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentProducts.filter((product) => {
                      const today = new Date().toISOString().split('T')[0];
                      return product.date === today;
                    }).length > 0 ? (
                      recentProducts.filter((product) => {
                        const today = new Date().toISOString().split('T')[0];
                        return product.date === today;
                      }).map((product, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-900">{product.product_type}</td>
                          <td className="px-4 py-3 text-sm text-gray-900 text-right">{product.quantity}</td>
                          <td className="px-4 py-3 text-center">
                            <span className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                              {product.quality_grade}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="px-4 py-8 text-center text-gray-400">
                          오늘 생산된 데이터가 없습니다
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function WasteTypesCard() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { recentWaste } = HARDCODED_DATA;
  
  const wasteByType = recentWaste.reduce((acc: any, waste: any) => {
    const type = waste.waste_type;
    if (!acc[type]) {
      acc[type] = 0;
    }
    acc[type] += waste.quantity;
    return acc;
  }, {});
  
  const chartData = Object.entries(wasteByType).map(([type, quantity]) => ({
    type: type.replace('건설폐기물 - ', ''),
    quantity,
  }));

  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  
  const weeklyWasteByType = recentWaste
    .filter((w: any) => w.date >= weekAgo)
    .reduce((acc: any, waste: any) => {
      const type = waste.waste_type;
      if (!acc[type]) acc[type] = 0;
      acc[type] += waste.quantity;
      return acc;
    }, {});

  const monthlyWasteByType = recentWaste
    .filter((w: any) => w.date >= monthAgo)
    .reduce((acc: any, waste: any) => {
      const type = waste.waste_type;
      if (!acc[type]) acc[type] = 0;
      acc[type] += waste.quantity;
      return acc;
    }, {});

  return (
    <>
      <div 
        onClick={() => setDialogOpen(true)}
        className="bg-white rounded-2xl p-4 md:p-6 aspect-square flex flex-col shadow-2xl cursor-pointer hover:shadow-3xl transition-all group"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm md:text-base text-gray-900">폐기물 종류별 현황</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">최근 7일</span>
            <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barCategoryGap="35%">
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.95}/>
                  <stop offset="100%" stopColor="#2563eb" stopOpacity={1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis 
                dataKey="type" 
                tick={{ fontSize: 11, fill: '#64748b' }} 
                axisLine={false} 
                tickLine={false}
                tickMargin={8}
              />
              <YAxis 
                tick={{ fontSize: 11, fill: '#64748b' }} 
                axisLine={false} 
                tickLine={false}
                tickMargin={8}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                  backgroundColor: 'white',
                  padding: '12px 16px'
                }} 
                cursor={{ fill: 'rgba(96, 165, 250, 0.08)' }}
                formatter={(value: any) => [typeof value === 'number' ? value.toFixed(1) : value, '입고량 (톤)']}
              />
              <Bar 
                dataKey="quantity" 
                fill="url(#barGradient)" 
                radius={[6, 6, 0, 0]} 
                barSize={10}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>폐기물 종류별 상세 현황</DialogTitle>
            <DialogDescription>
              폐기물 종류별 입고 현황 및 통계
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="text-sm text-gray-600 mb-3">오늘</h4>
                <div className="space-y-2">
                  {Object.entries(recentWaste
                    .filter((w: any) => w.date === new Date().toISOString().split('T')[0])
                    .reduce((acc: any, w: any) => {
                      if (!acc[w.waste_type]) acc[w.waste_type] = 0;
                      acc[w.waste_type] += w.quantity;
                      return acc;
                    }, {}))
                    .map(([type, qty]: [string, any]) => (
                      <div key={type} className="flex justify-between text-sm">
                        <span className="text-gray-600">{type.replace('건설폐기물 - ', '')}</span>
                        <span>{qty}톤</span>
                      </div>
                    ))}
                  {Object.keys(recentWaste.filter((w: any) => w.date === new Date().toISOString().split('T')[0])).length === 0 && (
                    <p className="text-sm text-gray-400">데이터 없음</p>
                  )}
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-blue-50">
                <h4 className="text-sm text-blue-900 mb-3">주간 (7일)</h4>
                <div className="space-y-2">
                  {Object.entries(weeklyWasteByType).map(([type, qty]: [string, any]) => (
                    <div key={type} className="flex justify-between text-sm">
                      <span className="text-blue-700">{type.replace('건설폐기물 - ', '')}</span>
                      <span className="text-blue-900">{qty.toFixed(1)}톤</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-purple-50">
                <h4 className="text-sm text-purple-900 mb-3">월간 (30일)</h4>
                <div className="space-y-2">
                  {Object.entries(monthlyWasteByType).map(([type, qty]: [string, any]) => (
                    <div key={type} className="flex justify-between text-sm">
                      <span className="text-purple-700">{type.replace('건설폐기물 - ', '')}</span>
                      <span className="text-purple-900">{qty.toFixed(1)}톤</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="mb-4 text-gray-700">주간 종류별 입고량</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={Object.entries(weeklyWasteByType).map(([type, quantity]) => ({
                  type: type.replace('건설폐기물 - ', ''),
                  quantity,
                }))}>
                  <defs>
                    <linearGradient id="barGradientBlueDetail" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#1d4ed8" stopOpacity={1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis 
                    dataKey="type" 
                    tick={{ fontSize: 11, fill: '#64748b' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 11, fill: '#64748b' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '12px', 
                      border: 'none', 
                      boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                      backgroundColor: 'white'
                    }}
                    cursor={false}
                    formatter={(value: any) => [typeof value === 'number' ? value.toFixed(1) : value]}
                  />
                  <Legend />
                  <Bar 
                    dataKey="quantity" 
                    fill="url(#barGradientBlueDetail)" 
                    name="입고량 (톤)"
                    radius={[6, 6, 0, 0]}
                    barSize={10}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h4 className="mb-3 text-gray-700">최근 입고 내역</h4>
              <div className="border rounded-lg overflow-hidden max-h-64 overflow-y-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs text-gray-600">날짜</th>
                      <th className="px-4 py-3 text-left text-xs text-gray-600">종류</th>
                      <th className="px-4 py-3 text-left text-xs text-gray-600">출처</th>
                      <th className="px-4 py-3 text-right text-xs text-gray-600">수량</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentWaste.map((waste: any, index: number) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {new Date(waste.date).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">{waste.waste_type}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{waste.source}</td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">{waste.quantity}톤</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function RecyclingTrendCard() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { recentWaste, recentProducts } = HARDCODED_DATA;
  
  const dateMap = new Map();
  
  recentWaste.forEach((waste: any) => {
    if (!dateMap.has(waste.date)) {
      dateMap.set(waste.date, { date: waste.date, wasteTotal: 0, productTotal: 0 });
    }
    const data = dateMap.get(waste.date);
    data.wasteTotal += waste.quantity;
  });
  
  recentProducts.forEach((product: any) => {
    if (!dateMap.has(product.date)) {
      dateMap.set(product.date, { date: product.date, wasteTotal: 0, productTotal: 0 });
    }
    const data = dateMap.get(product.date);
    data.productTotal += product.quantity;
  });
  
  const allDailyData = Array.from(dateMap.values())
    .map(d => ({
      date: d.date,
      displayDate: new Date(d.date).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' }),
      wasteTotal: d.wasteTotal,
      productTotal: d.productTotal,
      rate: d.wasteTotal > 0 ? Math.round((d.productTotal / d.wasteTotal) * 100) : 0,
    }))
    .sort((a, b) => a.date.localeCompare(b.date));
  
  const chartData = allDailyData.slice(-7);

  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  
  const weeklyData = allDailyData.filter(d => d.date >= weekAgo);
  const monthlyData = allDailyData.filter(d => d.date >= monthAgo);
  
  const weeklyAvg = weeklyData.length > 0 
    ? Math.round(weeklyData.reduce((sum, d) => sum + d.rate, 0) / weeklyData.length)
    : 0;
  
  const monthlyAvg = monthlyData.length > 0
    ? Math.round(monthlyData.reduce((sum, d) => sum + d.rate, 0) / monthlyData.length)
    : 0;

  const avgRate = chartData.length > 0 
    ? Math.round(chartData.reduce((sum, d) => sum + d.rate, 0) / chartData.length)
    : 0;

  return (
    <>
      <div 
        onClick={() => setDialogOpen(true)}
        className="bg-white rounded-2xl p-4 md:p-6 aspect-square flex flex-col shadow-2xl cursor-pointer hover:shadow-3xl transition-all group"
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-xl md:text-2xl">{avgRate}%</h3>
            <p className="text-xs md:text-sm text-gray-500">평균 재활용률</p>
          </div>
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1 ${avgRate >= 75 ? 'text-green-500' : 'text-orange-500'}`}>
              {avgRate >= 75 ? <TrendingUp className="w-4 h-4 md:w-5 md:h-5" /> : <TrendingDown className="w-4 h-4 md:w-5 md:h-5" />}
              <span className="text-xs md:text-sm">{avgRate >= 75 ? '목표달성' : '개선필요'}</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500">목표 75%</span>
            <span className="text-xs text-gray-500">{avgRate}/100</span>
          </div>
          <Progress 
            value={avgRate} 
            className="h-2.5"
            indicatorClassName={avgRate >= 75 ? 'bg-green-500' : avgRate >= 50 ? 'bg-orange-500' : 'bg-red-500'}
          />
        </div>
        
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.25}/>
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis 
                dataKey="displayDate" 
                tick={{ fontSize: 10, fill: '#64748b' }} 
                axisLine={false}
                tickLine={false}
                tickMargin={8}
              />
              <YAxis 
                domain={[0, 100]} 
                tick={{ fontSize: 10, fill: '#64748b' }} 
                axisLine={false}
                tickLine={false}
                tickMargin={8}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                  backgroundColor: 'white',
                  padding: '12px 16px'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="rate" 
                stroke="#22c55e" 
                strokeWidth={3}
                fill="url(#areaGradient)"
                dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>재활용률 상세 분석</DialogTitle>
            <DialogDescription>
              폐기물 대비 순환 골재 생산 비율 추이
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 bg-green-50">
                <h4 className="text-sm text-green-900 mb-2">오늘</h4>
                <p className="text-3xl text-green-900">
                  {allDailyData.length > 0 ? allDailyData[allDailyData.length - 1].rate : 0}%
                </p>
                <p className="text-xs text-green-600 mt-2 mb-2">재활용률</p>
                <Progress 
                  value={allDailyData.length > 0 ? allDailyData[allDailyData.length - 1].rate : 0} 
                  className="h-2"
                  indicatorClassName="bg-green-600"
                />
              </div>

              <div className="border rounded-lg p-4 bg-blue-50">
                <h4 className="text-sm text-blue-900 mb-2">주간 평균 (7일)</h4>
                <p className="text-3xl text-blue-900">{weeklyAvg}%</p>
                <div className="flex items-center gap-1 mt-2 mb-2">
                  {weeklyAvg >= 75 ? (
                    <TrendingUp className="w-3 h-3 text-green-600" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-orange-600" />
                  )}
                  <p className="text-xs text-blue-600">
                    목표: 75%
                  </p>
                </div>
                <Progress 
                  value={weeklyAvg} 
                  className="h-2"
                  indicatorClassName={weeklyAvg >= 75 ? 'bg-blue-600' : 'bg-orange-500'}
                />
              </div>

              <div className="border rounded-lg p-4 bg-purple-50">
                <h4 className="text-sm text-purple-900 mb-2">월간 평균 (30일)</h4>
                <p className="text-3xl text-purple-900">{monthlyAvg}%</p>
                <div className="flex items-center gap-1 mt-2 mb-2">
                  {monthlyAvg >= 75 ? (
                    <TrendingUp className="w-3 h-3 text-green-600" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-orange-600" />
                  )}
                  <p className="text-xs text-purple-600">
                    목표: 75%
                  </p>
                </div>
                <Progress 
                  value={monthlyAvg} 
                  className="h-2"
                  indicatorClassName={monthlyAvg >= 75 ? 'bg-purple-600' : 'bg-orange-500'}
                />
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="mb-4 text-gray-700">재활용률 추이</h4>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={allDailyData}>
                  <defs>
                    <linearGradient id="areaGradientDetail" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="displayDate" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip 
                    formatter={(value: any) => [`${value}%`, '재활용률']}
                    labelFormatter={(label) => `날짜: ${label}`}
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#22c55e" 
                    strokeWidth={3} 
                    fill="url(#areaGradientDetail)"
                    dot={{ fill: '#22c55e', r: 4 }}
                    name="재활용률 (%)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h4 className="mb-3 text-gray-700">일별 상세 내역</h4>
              <div className="border rounded-lg overflow-hidden max-h-80 overflow-y-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs text-gray-600">날짜</th>
                      <th className="px-4 py-3 text-right text-xs text-gray-600">폐기물 입고 (톤)</th>
                      <th className="px-4 py-3 text-right text-xs text-gray-600">골재 생산 (톤)</th>
                      <th className="px-4 py-3 text-right text-xs text-gray-600">재활용률</th>
                      <th className="px-4 py-3 text-center text-xs text-gray-600">달성도</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[...allDailyData].reverse().map((day: any, index: number) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {new Date(day.date).toLocaleDateString('ko-KR')}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">
                          {day.wasteTotal.toFixed(1)}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">
                          {day.productTotal.toFixed(1)}
                        </td>
                        <td className="px-4 py-3 text-sm text-right">
                          <span className={`${day.rate >= 75 ? 'text-green-600' : 'text-orange-600'}`}>
                            {day.rate}%
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          {day.rate >= 75 ? (
                            <span className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                              달성
                            </span>
                          ) : (
                            <span className="inline-block px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-700">
                              미달
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function RecentWasteListCard() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const { recentWaste } = HARDCODED_DATA;

  const statusColors = {
    received: 'bg-blue-100 text-blue-700',
    processing: 'bg-yellow-100 text-yellow-700',
    completed: 'bg-green-100 text-green-700',
  };

  const statusLabels = {
    received: '입고완료',
    processing: '생산중',
    completed: '생산완료',
  };

  const today = new Date().toISOString().split('T')[0];
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const todayWaste = recentWaste.filter((w: any) => w.date === today);
  const weeklyWaste = recentWaste.filter((w: any) => w.date >= weekAgo);
  const monthlyWaste = recentWaste.filter((w: any) => w.date >= monthAgo);

  const todayTotal = todayWaste.reduce((sum: number, w: any) => sum + w.quantity, 0);
  const weeklyTotal = weeklyWaste.reduce((sum: number, w: any) => sum + w.quantity, 0);
  const monthlyTotal = monthlyWaste.reduce((sum: number, w: any) => sum + w.quantity, 0);

  const filteredWaste = statusFilter === 'all' 
    ? recentWaste 
    : recentWaste.filter((w: any) => w.status === statusFilter);

  return (
    <>
      <div 
        onClick={() => setDialogOpen(true)}
        className="bg-white rounded-2xl p-4 md:p-6 aspect-square flex flex-col shadow-2xl overflow-hidden cursor-pointer hover:shadow-3xl transition-all group"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm md:text-base text-gray-900">최근 입고 내역</h3>
          <div className="flex items-center gap-2">
            <a 
              href="https://www.allbaro.or.kr/index.jsp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-blue-600 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              올바로 시스템 →
            </a>
            <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-2">
          {recentWaste.slice(0, 5).map((waste: any, index: number) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-slate-50 to-white hover:from-blue-50 hover:to-white border border-slate-100 transition-all"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Box className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate text-gray-900">{waste.waste_type.replace('건설폐기물 - ', '')}</p>
                  <p className="text-xs text-gray-500">{waste.source}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-900">{waste.quantity}톤</p>
                <p className="text-xs text-gray-500">{new Date(waste.date).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-blue-600" />
              전체 입고 내역
            </DialogTitle>
            <DialogDescription>
              폐기물 입고 기록 및 처리 현황
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="text-sm text-gray-600 mb-2">오늘</h4>
                <p className="text-2xl text-gray-900">{todayTotal.toFixed(1)}<span className="text-sm ml-1">톤</span></p>
                <p className="text-xs text-gray-500 mt-1">{todayWaste.length}건</p>
              </div>

              <div className="border rounded-lg p-4 bg-blue-50">
                <h4 className="text-sm text-blue-900 mb-2">주간 (7일)</h4>
                <p className="text-2xl text-blue-900">{weeklyTotal.toFixed(1)}<span className="text-sm ml-1">톤</span></p>
                <p className="text-xs text-blue-600 mt-1">{weeklyWaste.length}건</p>
              </div>

              <div className="border rounded-lg p-4 bg-purple-50">
                <h4 className="text-sm text-purple-900 mb-2">월간 (30일)</h4>
                <p className="text-2xl text-purple-900">{monthlyTotal.toFixed(1)}<span className="text-sm ml-1">톤</span></p>
                <p className="text-xs text-purple-600 mt-1">{monthlyWaste.length}건</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <h4 className="text-gray-700">입고 내역</h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => setStatusFilter('all')}
                    className={`px-3 py-1 rounded-full text-xs transition ${
                      statusFilter === 'all'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    전체
                  </button>
                  <button
                    onClick={() => setStatusFilter('received')}
                    className={`px-3 py-1 rounded-full text-xs transition ${
                      statusFilter === 'received'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    입고완료
                  </button>
                  <button
                    onClick={() => setStatusFilter('processing')}
                    className={`px-3 py-1 rounded-full text-xs transition ${
                      statusFilter === 'processing'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    생산중
                  </button>
                  <button
                    onClick={() => setStatusFilter('completed')}
                    className={`px-3 py-1 rounded-full text-xs transition ${
                      statusFilter === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    생산완료
                  </button>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden max-h-96 overflow-y-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs text-gray-600">날짜</th>
                      <th className="px-4 py-3 text-left text-xs text-gray-600">폐기물 종류</th>
                      <th className="px-4 py-3 text-left text-xs text-gray-600">출처</th>
                      <th className="px-4 py-3 text-right text-xs text-gray-600">수량 (톤)</th>
                      <th className="px-4 py-3 text-center text-xs text-gray-600">상태</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredWaste.map((waste: any, index: number) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {new Date(waste.date).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">{waste.waste_type}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{waste.source}</td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">{waste.quantity}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                            statusColors[waste.status as keyof typeof statusColors]
                          }`}>
                            {statusLabels[waste.status as keyof typeof statusLabels]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
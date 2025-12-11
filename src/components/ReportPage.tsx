import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';
import {
  TrendingUp,
  Download,
  Package,
  Truck,
  Factory,
  FileText,
  Recycle,
  Activity
} from 'lucide-react';
import { Badge } from './ui/badge';

// Mock 데이터
const monthlyData = [
  { month: '1월', waste: 450, aggregate: 380, revenue: 95000, cost: 45000 },
  { month: '2월', waste: 480, aggregate: 410, revenue: 102500, cost: 48000 },
  { month: '3월', waste: 520, aggregate: 445, revenue: 111250, cost: 52000 },
  { month: '4월', waste: 495, aggregate: 425, revenue: 106250, cost: 49500 },
  { month: '5월', waste: 550, aggregate: 475, revenue: 118750, cost: 55000 },
  { month: '6월', waste: 580, aggregate: 505, revenue: 126250, cost: 58000 },
  { month: '7월', waste: 610, aggregate: 530, revenue: 132500, cost: 61000 },
  { month: '8월', waste: 595, aggregate: 515, revenue: 128750, cost: 59500 },
  { month: '9월', waste: 630, aggregate: 550, revenue: 137500, cost: 63000 },
  { month: '10월', waste: 660, aggregate: 575, revenue: 143750, cost: 66000 },
];

const quarterlyData = [
  { quarter: '2024 Q1', waste: 1450, aggregate: 1235, revenue: 308750, customers: 45 },
  { quarter: '2024 Q2', waste: 1625, aggregate: 1405, revenue: 351250, customers: 52 },
  { quarter: '2024 Q3', waste: 1835, aggregate: 1595, revenue: 398750, customers: 58 },
  { quarter: '2024 Q4', waste: 1950, aggregate: 1695, revenue: 423750, customers: 64 },
];

const wasteTypeDistribution = [
  { name: '콘크리트폐기물', value: 3200, color: '#3b82f6' },
  { name: '아스팔트폐기물', value: 2800, color: '#8b5cf6' },
  { name: '벽돌폐기물', value: 1500, color: '#ec4899' },
  { name: '기타건설폐기물', value: 1200, color: '#f59e0b' },
];

const aggregateGradeDistribution = [
  { name: 'A급', value: 4500, color: '#10b981' },
  { name: 'B급', value: 2800, color: '#3b82f6' },
  { name: 'C급', value: 1400, color: '#6b7280' },
];

const lineProductionData = [
  { month: '1월', A라인: 145, B라인: 125, C라인: 110 },
  { month: '2월', A라인: 152, B라인: 138, C라인: 120 },
  { month: '3월', A라인: 168, B라인: 145, C라인: 132 },
  { month: '4월', A라인: 158, B라인: 140, C라인: 127 },
  { month: '5월', A라인: 175, B라인: 155, C라인: 145 },
  { month: '6월', A라인: 185, B라인: 165, C라인: 155 },
  { month: '7월', A라인: 195, B라인: 175, C라인: 160 },
  { month: '8월', A라인: 188, B라인: 170, C라인: 157 },
  { month: '9월', A라인: 200, B라인: 182, C라인: 168 },
  { month: '10월', A라인: 210, B라인: 190, C라인: 175 },
];

export function ReportPage() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedQuarter, setSelectedQuarter] = useState('Q4');

  // 통계 계산
  const totalWasteProcessed = monthlyData.reduce((sum, item) => sum + item.waste, 0);
  const totalAggregateProduced = monthlyData.reduce((sum, item) => sum + item.aggregate, 0);
  const recyclingRate = ((totalAggregateProduced / totalWasteProcessed) * 100).toFixed(1);
  
  // 생산 가동률 계산 (A라인 95%, B라인 93%, C라인 89% 평균)
  const operatingRate = ((95 + 93 + 89) / 3).toFixed(1);

  const handleExport = (format: 'excel' | 'pdf') => {
    console.log(`Exporting ${format}...`);
    // 실제 구현: 데이터 export 로직
  };

  return (
    <div className="h-screen overflow-y-auto bg-gray-50">
      <div className="p-4 md:p-6 lg:p-8 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* 헤더 */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div>
              <h1 className="text-3xl mb-2">통계 리포트</h1>
              <p className="text-gray-600">생산 및 판매 실적 종합 분석</p>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => handleExport('excel')} className="gap-2">
                <Download className="w-4 h-4" />
                Excel 다운로드
              </Button>
              <Button variant="outline" onClick={() => handleExport('pdf')} className="gap-2">
                <FileText className="w-4 h-4" />
                PDF 다운로드
              </Button>
            </div>
          </div>

          {/* 기간 선택 */}
          <div className="flex gap-3 mb-6">
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024년</SelectItem>
                <SelectItem value="2023">2023년</SelectItem>
                <SelectItem value="2022">2022년</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedQuarter} onValueChange={setSelectedQuarter}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Q1">1분기</SelectItem>
                <SelectItem value="Q2">2분기</SelectItem>
                <SelectItem value="Q3">3분기</SelectItem>
                <SelectItem value="Q4">4분기</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 핵심 지표 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Recycle className="w-4 h-4" />
                  재활용률 (환경 성과)
                </CardDescription>
                <CardTitle className="text-3xl">{recyclingRate}%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>목표 대비 +5.6%p</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  생산 가동률 (운영 효율)
                </CardDescription>
                <CardTitle className="text-3xl">{operatingRate}%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <span>A: 95% | B: 93% | C: 89%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  폐기물 처리량 (규모)
                </CardDescription>
                <CardTitle className="text-3xl">{totalWasteProcessed.toLocaleString()}톤</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Factory className="w-4 h-4" />
                  <span>월평균 {Math.round(totalWasteProcessed / 10)}톤</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  골재 생산량 (생산성)
                </CardDescription>
                <CardTitle className="text-3xl">{totalAggregateProduced.toLocaleString()}톤</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>전환율 {recyclingRate}%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 탭 컨텐츠 */}
          <Tabs defaultValue="monthly" className="space-y-4 mb-12">
            <TabsList>
              <TabsTrigger value="monthly">월별 분석</TabsTrigger>
              <TabsTrigger value="quarterly">분기별 분석</TabsTrigger>
              <TabsTrigger value="distribution">분포 분석</TabsTrigger>
              <TabsTrigger value="production">생산 라인</TabsTrigger>
            </TabsList>

            {/* 월별 분석 */}
            <TabsContent value="monthly" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>폐기물 처리 & 골재 생산</CardTitle>
                    <CardDescription>월별 처리량 및 생산량 추이 (단위: 톤)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="waste" fill="#3b82f6" name="폐기물 처리" />
                        <Bar dataKey="aggregate" fill="#10b981" name="골재 생산" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>매출 & 비용 추이</CardTitle>
                    <CardDescription>월별 수익성 분석 (단위: 만원)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={monthlyData}>
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="revenue"
                          stroke="#3b82f6"
                          fillOpacity={1}
                          fill="url(#colorRevenue)"
                          name="매출"
                        />
                        <Area
                          type="monotone"
                          dataKey="cost"
                          stroke="#ef4444"
                          fillOpacity={1}
                          fill="url(#colorCost)"
                          name="비용"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 분기별 분석 */}
            <TabsContent value="quarterly" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>분기별 성장 추이</CardTitle>
                  <CardDescription>2024년 분기별 실적 비교</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={quarterlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="quarter" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="waste"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        name="폐기물(톤)"
                      />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="aggregate"
                        stroke="#10b981"
                        strokeWidth={2}
                        name="골재(톤)"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="customers"
                        stroke="#8b5cf6"
                        strokeWidth={2}
                        name="고객사 수"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 분포 분석 */}
            <TabsContent value="distribution" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>폐기물 유형 분포</CardTitle>
                    <CardDescription>전체 처리량 중 유형별 비중</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={wasteTypeDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {wasteTypeDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>골재 등급 분포</CardTitle>
                    <CardDescription>생산된 순환골재 품질 등급별 비중</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={aggregateGradeDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {aggregateGradeDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 생산 라인 분석 */}
            <TabsContent value="production" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>생산 라인별 성과</CardTitle>
                  <CardDescription>A, B, C 라인 월별 생산량 비교 (단위: 톤)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={lineProductionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="A라인" fill="#3b82f6" />
                      <Bar dataKey="B라인" fill="#10b981" />
                      <Bar dataKey="C라인" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* 라인별 통계 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="default" className="bg-blue-600">A</Badge>
                      A 라인
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">월평균 생산량</span>
                      <span className="font-semibold">176톤</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">가동률</span>
                      <span className="font-semibold text-green-600">95.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">A급 비율</span>
                      <span className="font-semibold">68%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="default" className="bg-green-600">B</Badge>
                      B 라인
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">월평균 생산량</span>
                      <span className="font-semibold">158톤</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">가동률</span>
                      <span className="font-semibold text-green-600">92.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">A급 비율</span>
                      <span className="font-semibold">62%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="default" className="bg-purple-600">C</Badge>
                      C 라인
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">월평균 생산량</span>
                      <span className="font-semibold">145톤</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">가동률</span>
                      <span className="font-semibold text-yellow-600">89.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">A급 비율</span>
                      <span className="font-semibold">58%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}

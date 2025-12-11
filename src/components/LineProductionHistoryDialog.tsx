import { useState, useMemo } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Calendar, TrendingUp, Factory, BarChart3, Package } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface ProductionRecord {
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
  completed_at?: string;
}

interface LineProductionHistoryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lineName: string;
  productionRecords: ProductionRecord[];
}

export function LineProductionHistoryDialog({
  open,
  onOpenChange,
  lineName,
  productionRecords
}: LineProductionHistoryDialogProps) {
  const [periodTab, setPeriodTab] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('daily');

  // 해당 라인의 생산 기록만 필터링 (useMemo로 최적화)
  const lineRecords = useMemo(() => {
    return productionRecords.filter(r => r.line_name === lineName);
  }, [productionRecords, lineName]);

  // 일간 데이터 (최근 7일) - useMemo로 최적화
  const dailyData = useMemo(() => {
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      return date.toISOString().split('T')[0];
    });

    return last7Days.map(date => {
      const dayRecords = lineRecords.filter(r => r.date === date);
      const totalOutput = dayRecords.reduce((sum, r) => sum + r.aggregate_output_quantity, 0);
      const avgEfficiency = dayRecords.length > 0 
        ? dayRecords.reduce((sum, r) => sum + r.conversion_rate, 0) / dayRecords.length 
        : 0;

      return {
        date: date.substring(5), // MM-DD
        생산량: Math.round(totalOutput),
        효율: Math.round(avgEfficiency),
        건수: dayRecords.length
      };
    });
  }, [lineRecords]);

  // 시간대별 데이터 (오늘) - useMemo로 최적화
  const hourlyData = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    const todayRecords = lineRecords.filter(r => r.date === today);

    const hours = Array.from({ length: 9 }, (_, i) => i + 8); // 08:00 ~ 16:00
    
    return hours.map(hour => {
      const hourStr = `${hour.toString().padStart(2, '0')}:00`;
      const hourRecords = todayRecords.filter(r => {
        const recordHour = parseInt(r.time.split(':')[0]);
        return recordHour === hour;
      });

      const totalOutput = hourRecords.reduce((sum, r) => sum + r.aggregate_output_quantity, 0);

      return {
        time: hourStr,
        생산량: Math.round(totalOutput)
      };
    });
  }, [lineRecords]);

  // 주간 데이터 (최근 4주) - useMemo로 최적화
  const weeklyData = useMemo(() => {
    const weeks = Array.from({ length: 4 }, (_, i) => {
      const weekStart = new Date();
      weekStart.setDate(weekStart.getDate() - (weekStart.getDay() || 7) + 1 - (3 - i) * 7);
      return {
        label: `${weekStart.getMonth() + 1}/${weekStart.getDate()}주`,
        start: new Date(weekStart),
        end: new Date(weekStart.getTime() + 6 * 24 * 60 * 60 * 1000)
      };
    });

    return weeks.map(week => {
      const weekRecords = lineRecords.filter(r => {
        const recordDate = new Date(r.date);
        return recordDate >= week.start && recordDate <= week.end;
      });

      const totalOutput = weekRecords.reduce((sum, r) => sum + r.aggregate_output_quantity, 0);
      const avgEfficiency = weekRecords.length > 0
        ? weekRecords.reduce((sum, r) => sum + r.conversion_rate, 0) / weekRecords.length
        : 0;

      return {
        week: week.label,
        생산량: Math.round(totalOutput),
        효율: Math.round(avgEfficiency),
        건수: weekRecords.length
      };
    });
  }, [lineRecords]);

  // 월간 데이터 (최근 6개월) - useMemo로 최적화
  const monthlyData = useMemo(() => {
    const months = Array.from({ length: 6 }, (_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - (5 - i));
      return {
        label: `${date.getMonth() + 1}월`,
        year: date.getFullYear(),
        month: date.getMonth() + 1
      };
    });

    return months.map(monthInfo => {
      const monthRecords = lineRecords.filter(r => {
        const recordDate = new Date(r.date);
        return recordDate.getFullYear() === monthInfo.year && 
               recordDate.getMonth() + 1 === monthInfo.month;
      });

      const totalOutput = monthRecords.reduce((sum, r) => sum + r.aggregate_output_quantity, 0);
      const avgEfficiency = monthRecords.length > 0
        ? monthRecords.reduce((sum, r) => sum + r.conversion_rate, 0) / monthRecords.length
        : 0;

      return {
        month: monthInfo.label,
        생산량: Math.round(totalOutput),
        효율: Math.round(avgEfficiency),
        건수: monthRecords.length
      };
    });
  }, [lineRecords]);

  // 연간 데이터 (최근 3년) - useMemo로 최적화
  const yearlyData = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 3 }, (_, i) => currentYear - (2 - i));

    return years.map(year => {
      const yearRecords = lineRecords.filter(r => {
        const recordDate = new Date(r.date);
        return recordDate.getFullYear() === year;
      });

      const totalOutput = yearRecords.reduce((sum, r) => sum + r.aggregate_output_quantity, 0);
      const avgEfficiency = yearRecords.length > 0
        ? yearRecords.reduce((sum, r) => sum + r.conversion_rate, 0) / yearRecords.length
        : 0;

      return {
        year: `${year}년`,
        생산량: Math.round(totalOutput),
        효율: Math.round(avgEfficiency),
        건수: yearRecords.length
      };
    });
  }, [lineRecords]);

  // 통계 계산 - useMemo로 최적화
  const statistics = useMemo(() => {
    const totalProduction = lineRecords.reduce((sum, r) => sum + r.aggregate_output_quantity, 0);
    const avgConversionRate = lineRecords.length > 0
      ? lineRecords.reduce((sum, r) => sum + r.conversion_rate, 0) / lineRecords.length
      : 0;
    const gradeCount = {
      A: lineRecords.filter(r => r.quality_grade === 'A').length,
      B: lineRecords.filter(r => r.quality_grade === 'B').length,
      C: lineRecords.filter(r => r.quality_grade === 'C').length
    };

    return {
      totalProduction: Math.round(totalProduction),
      avgConversionRate: Math.round(avgConversionRate),
      totalCount: lineRecords.length,
      gradeCount
    };
  }, [lineRecords]);

  const getGradeBadge = (grade: string) => {
    const gradeConfig: Record<string, { color: string }> = {
      A: { color: 'bg-blue-100 text-blue-700 border-blue-200' },
      B: { color: 'bg-green-100 text-green-700 border-green-200' },
      C: { color: 'bg-orange-100 text-orange-700 border-orange-200' }
    };
    
    const config = gradeConfig[grade] || { color: '' };
    
    return (
      <Badge variant="outline" className={config.color}>
        등급 {grade}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Factory className="w-6 h-6 text-blue-600" />
            {lineName} 생산 이력
          </DialogTitle>
          <DialogDescription>
            라인별 생산 실적 및 효율 분석
          </DialogDescription>
        </DialogHeader>

        {/* 통계 요약 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                총 생산량
              </CardDescription>
              <CardTitle className="text-2xl">{statistics.totalProduction}톤</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                평균 전환율
              </CardDescription>
              <CardTitle className="text-2xl">{statistics.avgConversionRate}%</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                총 생산 건수
              </CardDescription>
              <CardTitle className="text-2xl">{statistics.totalCount}건</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <Factory className="w-4 h-4" />
                품질 등급
              </CardDescription>
              <div className="flex gap-2 mt-2">
                <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
                  A: {statistics.gradeCount.A}
                </Badge>
                <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                  B: {statistics.gradeCount.B}
                </Badge>
                <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-200">
                  C: {statistics.gradeCount.C}
                </Badge>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* 기간별 탭 */}
        <Tabs value={periodTab} onValueChange={(v) => setPeriodTab(v as any)} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="daily" className="gap-2">
              <Calendar className="w-4 h-4" />
              일간
            </TabsTrigger>
            <TabsTrigger value="weekly" className="gap-2">
              <Calendar className="w-4 h-4" />
              주간
            </TabsTrigger>
            <TabsTrigger value="monthly" className="gap-2">
              <Calendar className="w-4 h-4" />
              월간
            </TabsTrigger>
            <TabsTrigger value="yearly" className="gap-2">
              <Calendar className="w-4 h-4" />
              연간
            </TabsTrigger>
          </TabsList>

          {/* 일간 탭 */}
          <TabsContent value="daily" className="space-y-6">
            {/* 일간 생산량 추이 */}
            <Card>
              <CardHeader>
                <CardTitle>일간 생산량 추이 (최근 7일)</CardTitle>
                <CardDescription>생산량 및 전환 효율</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={dailyData}>
                    <defs>
                      <linearGradient id="colorDaily" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis 
                      dataKey="date" 
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      yAxisId="left"
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <RechartsTooltip 
                      contentStyle={{ 
                        borderRadius: '8px', 
                        border: 'none', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Area yAxisId="left" type="monotone" dataKey="생산량" stroke="#3b82f6" fillOpacity={1} fill="url(#colorDaily)" />
                    <Line yAxisId="right" type="monotone" dataKey="효율" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* 시간대별 생산량 */}
            <Card>
              <CardHeader>
                <CardTitle>금일 시간대별 생산량</CardTitle>
                <CardDescription>08:00 ~ 16:00 시간당 생산량</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis 
                      dataKey="time" 
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <RechartsTooltip 
                      contentStyle={{ 
                        borderRadius: '8px', 
                        border: 'none', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                      }}
                      formatter={(value: any) => [`${value}톤`, '생산량']}
                    />
                    <Bar dataKey="생산량" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* 최근 생산 이력 테이블 */}
            <Card>
              <CardHeader>
                <CardTitle>최근 생산 이력 (최근 10건)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">날짜</th>
                        <th className="text-left p-3">시간</th>
                        <th className="text-left p-3">투입 폐기물</th>
                        <th className="text-right p-3">투입량</th>
                        <th className="text-left p-3">생산 골재</th>
                        <th className="text-right p-3">생산량</th>
                        <th className="text-right p-3">전환율</th>
                        <th className="text-center p-3">품질</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lineRecords.slice(0, 10).map((record) => (
                        <tr key={record.id} className="border-b hover:bg-gray-50">
                          <td className="p-3">{formatDate(record.date)}</td>
                          <td className="p-3">{record.time}</td>
                          <td className="p-3">{record.waste_input_type}</td>
                          <td className="text-right p-3">{record.waste_input_quantity}톤</td>
                          <td className="p-3">{record.aggregate_output_type}</td>
                          <td className="text-right p-3">{record.aggregate_output_quantity}톤</td>
                          <td className="text-right p-3">{record.conversion_rate}%</td>
                          <td className="text-center p-3">{getGradeBadge(record.quality_grade)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 주간 탭 */}
          <TabsContent value="weekly" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>주간 생산량 추이 (최근 4주)</CardTitle>
                <CardDescription>주별 생산량 및 전환 효율</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis 
                      dataKey="week" 
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      yAxisId="left"
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <RechartsTooltip 
                      contentStyle={{ 
                        borderRadius: '8px', 
                        border: 'none', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar yAxisId="left" dataKey="생산량" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Line yAxisId="right" type="monotone" dataKey="효율" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 월간 탭 */}
          <TabsContent value="monthly" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>월간 생산량 추이 (최근 6개월)</CardTitle>
                <CardDescription>월별 생산량 및 전환 효율</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis 
                      dataKey="month" 
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      yAxisId="left"
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <RechartsTooltip 
                      contentStyle={{ 
                        borderRadius: '8px', 
                        border: 'none', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar yAxisId="left" dataKey="생산량" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Line yAxisId="right" type="monotone" dataKey="효율" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 연간 탭 */}
          <TabsContent value="yearly" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>연간 생산량 추이 (최근 3년)</CardTitle>
                <CardDescription>연도별 생산량 및 전환 효율</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis 
                      dataKey="year" 
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      yAxisId="left"
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <RechartsTooltip 
                      contentStyle={{ 
                        borderRadius: '8px', 
                        border: 'none', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar yAxisId="left" dataKey="생산량" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Line yAxisId="right" type="monotone" dataKey="효율" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

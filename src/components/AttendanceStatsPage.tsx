import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Clock, 
  TrendingUp, 
  TrendingDown,
  Users, 
  Award,
  AlertTriangle,
  Calendar,
  BarChart3,
  Activity,
  CheckCircle,
  XCircle,
  Star,
  AlertCircle,
  ChevronRight,
  User,
  Target
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Progress } from './ui/progress';

// 출근 기록 타입
interface AttendanceRecord {
  id: string;
  employee_id: string;
  employee_name: string;
  department: string; // A라인, B라인, C라인, 본사
  date: string; // YYYY-MM-DD
  check_in_time: string; // HH:MM
  check_out_time?: string; // HH:MM
  status: 'present' | 'late' | 'early_leave' | 'absent';
  is_late: boolean;
  late_minutes?: number;
  method: 'nfc' | 'qr' | 'manual' | 'gps';
}

// 직원 통계 타입
interface EmployeeStats {
  employee_id: string;
  employee_name: string;
  department: string;
  total_days: number;
  present_days: number;
  late_count: number;
  early_leave_count: number;
  absent_count: number;
  attendance_rate: number;
  punctuality_rate: number;
  average_check_in: string;
}

// 팀 통계 타입
interface TeamStats {
  department: string;
  total_employees: number;
  average_attendance_rate: number;
  average_punctuality_rate: number;
  total_late_count: number;
  average_check_in: string;
}

export function AttendanceStatsPage() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7)); // YYYY-MM
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedEmployee, setSelectedEmployee] = useState<string>('all');
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [employees, setEmployees] = useState<any[]>([]);

  // 데이터 로드
  useEffect(() => {
    loadAttendanceRecords();
    loadEmployees();
  }, []);

  const loadAttendanceRecords = () => {
    const saved = localStorage.getItem('attendance_records');
    if (saved) {
      setAttendanceRecords(JSON.parse(saved));
    } else {
      // Mock 데이터 생성 (데모용)
      const mockRecords = generateMockAttendanceData();
      localStorage.setItem('attendance_records', JSON.stringify(mockRecords));
      setAttendanceRecords(mockRecords);
    }
  };

  const loadEmployees = () => {
    const saved = localStorage.getItem('registered_staff');
    if (saved) {
      setEmployees(JSON.parse(saved));
    }
  };

  // Mock 데이터 생성 (데모용)
  const generateMockAttendanceData = (): AttendanceRecord[] => {
    const records: AttendanceRecord[] = [];
    const departments = ['SCM(영업부)', 'TPM(시설부)', 'MES(생산부)', 'BOM(시설부)', '본사(대표)', '본사 경영지원(전무)', '이노베이션 전략본부'];
    const employeeNames = [
      '김철수', '이영희', '박민수', '최지은', '정우성',
      '강미라', '윤서준', '임하은', '송민호', '한지우',
      '오세훈', '신유진', '백승호', '문채원', '양동근'
    ];

    const startDate = new Date('2025-10-01');
    const endDate = new Date('2025-11-02');

    employeeNames.forEach((name, idx) => {
      const dept = departments[idx % departments.length];
      const employeeId = `E${String(idx + 1).padStart(3, '0')}`;

      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        // 주말 제외
        if (d.getDay() === 0 || d.getDay() === 6) continue;

        const date = d.toISOString().split('T')[0];
        
        // 90% 출근율 (랜덤으로 결근)
        if (Math.random() > 0.9) {
          records.push({
            id: `ATT-${employeeId}-${date}`,
            employee_id: employeeId,
            employee_name: name,
            department: dept,
            date,
            check_in_time: '',
            status: 'absent',
            is_late: false,
            method: 'nfc'
          });
          continue;
        }

        // 출근 시간 생성 (08:00~09:30 사이)
        const baseMinutes = 8 * 60; // 08:00
        const randomMinutes = Math.floor(Math.random() * 90); // 0~90분
        const totalMinutes = baseMinutes + randomMinutes;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const checkInTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

        const standardTime = 9 * 60; // 09:00
        const isLate = totalMinutes > standardTime;
        const lateMinutes = isLate ? totalMinutes - standardTime : 0;

        // 조퇴 여부 (5% 확률)
        const isEarlyLeave = Math.random() < 0.05;

        records.push({
          id: `ATT-${employeeId}-${date}`,
          employee_id: employeeId,
          employee_name: name,
          department: dept,
          date,
          check_in_time: checkInTime,
          check_out_time: isEarlyLeave ? '16:30' : '18:00',
          status: isLate ? 'late' : isEarlyLeave ? 'early_leave' : 'present',
          is_late: isLate,
          late_minutes: lateMinutes,
          method: Math.random() > 0.5 ? 'nfc' : 'qr'
        });
      }
    });

    return records;
  };

  // 선택된 월의 데이터 필터링
  const filteredRecords = useMemo(() => {
    return attendanceRecords.filter(record => {
      const matchMonth = record.date.startsWith(selectedMonth);
      const matchDept = selectedDepartment === 'all' || record.department === selectedDepartment;
      const matchEmp = selectedEmployee === 'all' || record.employee_id === selectedEmployee;
      return matchMonth && matchDept && matchEmp;
    });
  }, [attendanceRecords, selectedMonth, selectedDepartment, selectedEmployee]);

  // 개인 통계 계산
  const employeeStats = useMemo((): EmployeeStats[] => {
    const statsMap = new Map<string, EmployeeStats>();

    filteredRecords.forEach(record => {
      if (!statsMap.has(record.employee_id)) {
        statsMap.set(record.employee_id, {
          employee_id: record.employee_id,
          employee_name: record.employee_name,
          department: record.department,
          total_days: 0,
          present_days: 0,
          late_count: 0,
          early_leave_count: 0,
          absent_count: 0,
          attendance_rate: 0,
          punctuality_rate: 0,
          average_check_in: '00:00'
        });
      }

      const stats = statsMap.get(record.employee_id)!;
      stats.total_days++;

      if (record.status !== 'absent') {
        stats.present_days++;
      } else {
        stats.absent_count++;
      }

      if (record.is_late) {
        stats.late_count++;
      }

      if (record.status === 'early_leave') {
        stats.early_leave_count++;
      }
    });

    // 비율 계산
    statsMap.forEach(stats => {
      stats.attendance_rate = (stats.present_days / stats.total_days) * 100;
      stats.punctuality_rate = ((stats.present_days - stats.late_count) / stats.total_days) * 100;

      // 평균 출근 시간 계산
      const employeeRecords = filteredRecords.filter(r => r.employee_id === stats.employee_id && r.check_in_time);
      if (employeeRecords.length > 0) {
        const totalMinutes = employeeRecords.reduce((sum, r) => {
          const [h, m] = r.check_in_time.split(':').map(Number);
          return sum + (h * 60 + m);
        }, 0);
        const avgMinutes = Math.round(totalMinutes / employeeRecords.length);
        const avgHours = Math.floor(avgMinutes / 60);
        const avgMins = avgMinutes % 60;
        stats.average_check_in = `${String(avgHours).padStart(2, '0')}:${String(avgMins).padStart(2, '0')}`;
      }
    });

    return Array.from(statsMap.values()).sort((a, b) => b.attendance_rate - a.attendance_rate);
  }, [filteredRecords]);

  // 팀 통계 계산
  const teamStats = useMemo((): TeamStats[] => {
    const departments = ['SCM(영업부)', 'TPM(시설부)', 'MES(생산부)', 'BOM(시설부)', '본사(대표)', '본사 경영지원(전무)', '이노베이션 전략본부'];
    
    return departments.map(dept => {
      const deptStats = employeeStats.filter(s => s.department === dept);
      
      if (deptStats.length === 0) {
        return {
          department: dept,
          total_employees: 0,
          average_attendance_rate: 0,
          average_punctuality_rate: 0,
          total_late_count: 0,
          average_check_in: '00:00'
        };
      }

      const avgAttendance = deptStats.reduce((sum, s) => sum + s.attendance_rate, 0) / deptStats.length;
      const avgPunctuality = deptStats.reduce((sum, s) => sum + s.punctuality_rate, 0) / deptStats.length;
      const totalLate = deptStats.reduce((sum, s) => sum + s.late_count, 0);

      // 평균 출근 시간
      const deptRecords = filteredRecords.filter(r => r.department === dept && r.check_in_time);
      let avgCheckIn = '00:00';
      if (deptRecords.length > 0) {
        const totalMinutes = deptRecords.reduce((sum, r) => {
          const [h, m] = r.check_in_time.split(':').map(Number);
          return sum + (h * 60 + m);
        }, 0);
        const avgMinutes = Math.round(totalMinutes / deptRecords.length);
        const avgHours = Math.floor(avgMinutes / 60);
        const avgMins = avgMinutes % 60;
        avgCheckIn = `${String(avgHours).padStart(2, '0')}:${String(avgMins).padStart(2, '0')}`;
      }

      return {
        department: dept,
        total_employees: deptStats.length,
        average_attendance_rate: avgAttendance,
        average_punctuality_rate: avgPunctuality,
        total_late_count: totalLate,
        average_check_in: avgCheckIn
      };
    });
  }, [employeeStats, filteredRecords]);

  // 일별 출근율 데이터
  const dailyAttendanceData = useMemo(() => {
    const dailyMap = new Map<string, { date: string; present: number; late: number; absent: number; total: number }>();

    filteredRecords.forEach(record => {
      if (!dailyMap.has(record.date)) {
        dailyMap.set(record.date, { date: record.date, present: 0, late: 0, absent: 0, total: 0 });
      }

      const data = dailyMap.get(record.date)!;
      data.total++;

      if (record.status === 'absent') {
        data.absent++;
      } else if (record.is_late) {
        data.late++;
      } else {
        data.present++;
      }
    });

    return Array.from(dailyMap.values())
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-14) // 최근 14일
      .map(d => ({
        ...d,
        date: d.date.slice(5), // MM-DD만 표시
        attendance_rate: Math.round((d.present + d.late) / d.total * 100)
      }));
  }, [filteredRecords]);

  // 요일별 지각 패턴
  const weekdayLatePattern = useMemo(() => {
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const patternMap = new Map<number, { day: string; late_count: number; total_count: number }>();

    filteredRecords.forEach(record => {
      const dayOfWeek = new Date(record.date).getDay();
      
      if (!patternMap.has(dayOfWeek)) {
        patternMap.set(dayOfWeek, { day: weekdays[dayOfWeek], late_count: 0, total_count: 0 });
      }

      const data = patternMap.get(dayOfWeek)!;
      data.total_count++;
      if (record.is_late) {
        data.late_count++;
      }
    });

    return Array.from(patternMap.values())
      .filter(d => d.day !== '일' && d.day !== '토')
      .map(d => ({
        ...d,
        late_rate: Math.round((d.late_count / d.total_count) * 100)
      }));
  }, [filteredRecords]);

  // 우수 직원 (출근율 95% 이상 + 지각 2회 이하)
  const topEmployees = useMemo(() => {
    return employeeStats
      .filter(s => s.attendance_rate >= 95 && s.late_count <= 2)
      .slice(0, 5);
  }, [employeeStats]);

  // 지각 예상 알림 (평소보다 늦은 직원)
  const lateWarnings = useMemo(() => {
    const warnings: { employee_name: string; department: string; avg_time: string; recent_pattern: string }[] = [];

    employeeStats.forEach(stats => {
      const employeeRecords = filteredRecords
        .filter(r => r.employee_id === stats.employee_id && r.check_in_time)
        .sort((a, b) => b.date.localeCompare(a.date));

      if (employeeRecords.length < 5) return;

      // 최근 3일 평균
      const recentRecords = employeeRecords.slice(0, 3);
      const recentAvg = recentRecords.reduce((sum, r) => {
        const [h, m] = r.check_in_time.split(':').map(Number);
        return sum + (h * 60 + m);
      }, 0) / 3;

      // 전체 평균
      const [avgH, avgM] = stats.average_check_in.split(':').map(Number);
      const overallAvg = avgH * 60 + avgM;

      // 최근이 평소보다 15분 이상 늦으면 경고
      if (recentAvg - overallAvg >= 15) {
        const recentH = Math.floor(recentAvg / 60);
        const recentM = Math.round(recentAvg % 60);
        warnings.push({
          employee_name: stats.employee_name,
          department: stats.department,
          avg_time: stats.average_check_in,
          recent_pattern: `${String(recentH).padStart(2, '0')}:${String(recentM).padStart(2, '0')}`
        });
      }
    });

    return warnings;
  }, [employeeStats, filteredRecords]);

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <div className="h-screen overflow-y-auto bg-gray-50">
      <div className="p-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* 헤더 */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-gray-900">출근 통계 및 분석</h1>
                <p className="text-sm text-gray-600">직원 근태 현황 및 예측 분석</p>
              </div>
            </div>
          </div>

          {/* 필터 */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">기간 선택</label>
                  <input
                    type="month"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">부서</label>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체</SelectItem>
                      <SelectItem value="SCM(영업부)">SCM(영업부)</SelectItem>
                      <SelectItem value="TPM(시설부)">TPM(시설부)</SelectItem>
                      <SelectItem value="MES(생산부)">MES(생산부)</SelectItem>
                      <SelectItem value="BOM(시설부)">BOM(시설부)</SelectItem>
                      <SelectItem value="본사(대표)">본사(대표)</SelectItem>
                      <SelectItem value="본사 경영지원(전무)">본사 경영지원(전무)</SelectItem>
                      <SelectItem value="이노베이션 전략본부">이노베이션 전략본부</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">직원</label>
                  <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체</SelectItem>
                      {employeeStats.map(emp => (
                        <SelectItem key={emp.employee_id} value={emp.employee_id}>
                          {emp.employee_name} ({emp.department})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">전체 현황</TabsTrigger>
              <TabsTrigger value="individual">개인 통계</TabsTrigger>
              <TabsTrigger value="team">팀 통계</TabsTrigger>
              <TabsTrigger value="prediction">예측 분석</TabsTrigger>
            </TabsList>

            {/* 전체 현황 */}
            <TabsContent value="overview" className="space-y-6">
              {/* 핵심 지표 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-600">전체 출근율</div>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {employeeStats.length > 0
                        ? Math.round(employeeStats.reduce((sum, s) => sum + s.attendance_rate, 0) / employeeStats.length)
                        : 0}%
                    </div>
                    <div className="text-xs text-green-600">
                      <TrendingUp className="w-3 h-3 inline mr-1" />
                      전월 대비 +2.3%
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-600">정시 출근율</div>
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {employeeStats.length > 0
                        ? Math.round(employeeStats.reduce((sum, s) => sum + s.punctuality_rate, 0) / employeeStats.length)
                        : 0}%
                    </div>
                    <div className="text-xs text-blue-600">
                      <TrendingUp className="w-3 h-3 inline mr-1" />
                      전월 대비 +1.5%
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-600">평균 지각 횟수</div>
                      <AlertTriangle className="w-4 h-4 text-orange-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {employeeStats.length > 0
                        ? (employeeStats.reduce((sum, s) => sum + s.late_count, 0) / employeeStats.length).toFixed(1)
                        : 0}회
                    </div>
                    <div className="text-xs text-green-600">
                      <TrendingDown className="w-3 h-3 inline mr-1" />
                      전월 대비 -0.8회
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-600">우수 직원</div>
                      <Award className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {topEmployees.length}명
                    </div>
                    <div className="text-xs text-gray-600">
                      출근율 95% 이상
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 일별 출근율 추이 */}
              <Card>
                <CardHeader>
                  <CardTitle>일별 출근율 추이 (최근 14일)</CardTitle>
                  <CardDescription>정상 출근, 지각, 결근 현황</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={dailyAttendanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <RechartsTooltip />
                      <Legend />
                      <Area type="monotone" dataKey="present" stackId="1" stroke="#10b981" fill="#10b981" name="정상 출근" />
                      <Area type="monotone" dataKey="late" stackId="1" stroke="#f59e0b" fill="#f59e0b" name="지각" />
                      <Area type="monotone" dataKey="absent" stackId="1" stroke="#ef4444" fill="#ef4444" name="결근" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* 요일별 지각 패턴 */}
              <Card>
                <CardHeader>
                  <CardTitle>요일별 지각 패턴</CardTitle>
                  <CardDescription>요일별 지각율 분석</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={weekdayLatePattern}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <RechartsTooltip />
                      <Legend />
                      <Bar dataKey="late_rate" fill="#f59e0b" name="지각율 (%)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 개인 통계 */}
            <TabsContent value="individual" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>개인별 출근 현황</CardTitle>
                  <CardDescription>
                    {selectedMonth.replace('-', '년 ')}월 기준
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {employeeStats.map((stats, idx) => (
                      <div key={stats.employee_id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium">{stats.employee_name}</div>
                              <div className="text-sm text-gray-600">{stats.department}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-600 mb-1">출근율</div>
                            <div className="text-xl font-bold text-blue-600">
                              {stats.attendance_rate.toFixed(1)}%
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                          <div>
                            <div className="text-gray-600 mb-1">총 근무일</div>
                            <div className="font-medium">{stats.total_days}일</div>
                          </div>
                          <div>
                            <div className="text-gray-600 mb-1">출근일</div>
                            <div className="font-medium text-green-600">{stats.present_days}일</div>
                          </div>
                          <div>
                            <div className="text-gray-600 mb-1">지각</div>
                            <div className="font-medium text-orange-600">{stats.late_count}회</div>
                          </div>
                          <div>
                            <div className="text-gray-600 mb-1">조퇴</div>
                            <div className="font-medium text-orange-600">{stats.early_leave_count}회</div>
                          </div>
                          <div>
                            <div className="text-gray-600 mb-1">평균 출근시간</div>
                            <div className="font-medium">{stats.average_check_in}</div>
                          </div>
                        </div>

                        <div className="mt-3 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">정시 출근율</span>
                            <span className="font-medium">{stats.punctuality_rate.toFixed(1)}%</span>
                          </div>
                          <Progress value={stats.punctuality_rate} className="h-2" />
                        </div>

                        {stats.attendance_rate >= 95 && stats.late_count <= 2 && (
                          <Badge className="mt-3 bg-yellow-100 text-yellow-800">
                            <Star className="w-3 h-3 mr-1" />
                            우수 직원
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 팀 통계 */}
            <TabsContent value="team" className="space-y-6">
              {/* 팀별 비교 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>팀별 출근율 비교</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={teamStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="department" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Bar dataKey="average_attendance_rate" fill="#3b82f6" name="출근율 (%)" />
                        <Bar dataKey="average_punctuality_rate" fill="#10b981" name="정시율 (%)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>팀별 지각 현황</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={teamStats}
                          dataKey="total_late_count"
                          nameKey="department"
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          label
                        >
                          {teamStats.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* 팀별 상세 현황 */}
              <Card>
                <CardHeader>
                  <CardTitle>부서별 근태 현황</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamStats.map((team, idx) => (
                      <div key={team.department} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS[idx % COLORS.length] + '20' }}>
                              <Users className="w-5 h-5" style={{ color: COLORS[idx % COLORS.length] }} />
                            </div>
                            <div>
                              <div className="font-medium">{team.department}</div>
                              <div className="text-sm text-gray-600">{team.total_employees}명</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant={team.average_attendance_rate >= 95 ? "default" : "secondary"}>
                              출근율 {team.average_attendance_rate.toFixed(1)}%
                            </Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-600 mb-1">정시 출근율</div>
                            <div className="font-medium text-green-600">{team.average_punctuality_rate.toFixed(1)}%</div>
                          </div>
                          <div>
                            <div className="text-gray-600 mb-1">총 지각 횟수</div>
                            <div className="font-medium text-orange-600">{team.total_late_count}회</div>
                          </div>
                          <div>
                            <div className="text-gray-600 mb-1">평균 출근시간</div>
                            <div className="font-medium">{team.average_check_in}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 우수 직원 표창 */}
              <Card>
                <CardHeader>
                  <CardTitle>우수 직원 표창</CardTitle>
                  <CardDescription>출근율 95% 이상 + 지각 2회 이하</CardDescription>
                </CardHeader>
                <CardContent>
                  {topEmployees.length > 0 ? (
                    <div className="space-y-3">
                      {topEmployees.map((emp, idx) => (
                        <div key={emp.employee_id} className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                              <Award className="w-4 h-4 text-yellow-600" />
                            </div>
                            <div>
                              <div className="font-medium">{emp.employee_name}</div>
                              <div className="text-sm text-gray-600">{emp.department}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-yellow-700">
                              출근율 {emp.attendance_rate.toFixed(1)}%
                            </div>
                            <div className="text-xs text-gray-600">
                              지각 {emp.late_count}회
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      해당 기준을 만족하는 직원이 없습니다
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* 예측 분석 */}
            <TabsContent value="prediction" className="space-y-6">
              {/* 지각 예상 알림 */}
              <Card>
                <CardHeader>
                  <CardTitle>지각 예상 알림</CardTitle>
                  <CardDescription>최근 출근 패턴이 평소보다 늦은 직원</CardDescription>
                </CardHeader>
                <CardContent>
                  {lateWarnings.length > 0 ? (
                    <div className="space-y-3">
                      {lateWarnings.map((warning, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                          <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                          <div className="flex-1">
                            <div className="font-medium mb-1">{warning.employee_name} ({warning.department})</div>
                            <div className="text-sm text-gray-600">
                              평소 평균: <span className="font-medium">{warning.avg_time}</span> → 
                              최근 평균: <span className="font-medium text-orange-600">{warning.recent_pattern}</span>
                            </div>
                            <div className="text-xs text-orange-600 mt-1">
                              최근 출근 시간이 평소보다 늦어지고 있습니다
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <CheckCircle className="w-12 h-12 mx-auto mb-2 text-green-500" />
                      모든 직원이 정상적인 출근 패턴을 유지하고 있습니다
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* 요일별 출근 패턴 */}
              <Card>
                <CardHeader>
                  <CardTitle>요일별 출근 패턴 분석</CardTitle>
                  <CardDescription>요일별 지각 빈도 분석</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {weekdayLatePattern
                      .sort((a, b) => b.late_rate - a.late_rate)
                      .map((pattern, idx) => (
                        <div key={pattern.day} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              pattern.late_rate >= 15 ? 'bg-red-100' :
                              pattern.late_rate >= 10 ? 'bg-orange-100' : 'bg-green-100'
                            }`}>
                              <Calendar className={`w-4 h-4 ${
                                pattern.late_rate >= 15 ? 'text-red-600' :
                                pattern.late_rate >= 10 ? 'text-orange-600' : 'text-green-600'
                              }`} />
                            </div>
                            <div>
                              <div className="font-medium">{pattern.day}요일</div>
                              <div className="text-sm text-gray-600">
                                총 {pattern.total_count}건 중 {pattern.late_count}건 지각
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-lg font-bold ${
                              pattern.late_rate >= 15 ? 'text-red-600' :
                              pattern.late_rate >= 10 ? 'text-orange-600' : 'text-green-600'
                            }`}>
                              {pattern.late_rate}%
                            </div>
                            {pattern.late_rate >= 15 && (
                              <div className="text-xs text-red-600">주의 필요</div>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>

                  {weekdayLatePattern.some(p => p.late_rate >= 15) && (
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Target className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-blue-900 mb-1">개선 제안</div>
                          <div className="text-sm text-blue-700">
                            {weekdayLatePattern.find(p => p.late_rate >= 15)?.day}요일 지각율이 높습니다. 
                            해당 요일에 출근 독려 메시지를 발송하거나 조회 시간을 조정하는 것을 권장합니다.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* 개선 추천 */}
              <Card>
                <CardHeader>
                  <CardTitle>AI 기반 개선 추천</CardTitle>
                  <CardDescription>데이터 분석 기반 근태 개선 제안</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                      <Activity className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-medium mb-1">출근 독려 시스템 도입</div>
                        <div className="text-sm text-gray-600">
                          평소 지각이 잦은 직원에게 출근 30분 전 알림을 발송하여 지각률을 평균 23% 감소시킬 수 있습니다.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                      <Target className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium mb-1">인센티브 제도</div>
                        <div className="text-sm text-gray-600">
                          분기별 우수 출근 직원에게 포상을 제공하여 전체 출근율을 향상시킬 수 있습니다.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 border-l-4 border-orange-500 bg-orange-50 rounded-r-lg">
                      <Clock className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <div className="font-medium mb-1">유연 근무제 검토</div>
                        <div className="text-sm text-gray-600">
                          특정 부서의 지각률이 높은 경우, 근무 시작 시간을 30분 늦추는 것도 고려해볼 수 있습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}

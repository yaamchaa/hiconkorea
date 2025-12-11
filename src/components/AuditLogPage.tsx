import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  FileText,
  Search,
  Download,
  Filter,
  AlertCircle,
  CheckCircle,
  Edit,
  Trash2,
  Plus,
  Settings,
  User,
  Calendar
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

// Mock 감사 로그 데이터
const mockAuditLogs = [
  {
    id: 'LOG-2024-001',
    timestamp: '2024-10-31 14:35:22',
    user: '김철수 (E001)',
    action: '생산 시작',
    module: '생산 관리',
    details: 'A라인에서 W001 폐기물 50톤 생산 시작',
    ip: '192.168.1.101',
    status: 'success',
    severity: 'info'
  },
  {
    id: 'LOG-2024-002',
    timestamp: '2024-10-31 14:20:15',
    user: '이영희 (E002)',
    action: '출고 승인',
    module: '출고 관리',
    details: 'ORD-2024-125 주문 출고 승인 (고객: 현대건설)',
    ip: '192.168.1.102',
    status: 'success',
    severity: 'info'
  },
  {
    id: 'LOG-2024-003',
    timestamp: '2024-10-31 13:58:40',
    user: '박민수 (E003)',
    action: '재고 수정',
    module: '재고 관리',
    details: 'A급 순환골재 재고량 수정: 450톤 → 500톤',
    ip: '192.168.1.103',
    status: 'warning',
    severity: 'warning'
  },
  {
    id: 'LOG-2024-004',
    timestamp: '2024-10-31 13:45:10',
    user: '최지원 (E004)',
    action: '직원 추가',
    module: '직원 관리',
    details: '신규 직원 등록: 강동욱 (E006)',
    ip: '192.168.1.104',
    status: 'success',
    severity: 'info'
  },
  {
    id: 'LOG-2024-005',
    timestamp: '2024-10-31 12:30:55',
    user: '김철수 (E001)',
    action: '긴급 알림 발송',
    module: '알림 시스템',
    details: 'A라인 긴급 점검 알림 전체 발송',
    ip: '192.168.1.101',
    status: 'success',
    severity: 'critical'
  },
  {
    id: 'LOG-2024-006',
    timestamp: '2024-10-31 11:15:33',
    user: 'System',
    action: '자동 백업',
    module: '백업 시스템',
    details: '일일 자동 데이터 백업 완료 (1.2GB)',
    ip: 'localhost',
    status: 'success',
    severity: 'info'
  },
  {
    id: 'LOG-2024-007',
    timestamp: '2024-10-31 10:55:20',
    user: '이영희 (E002)',
    action: '로그인 실패',
    module: '인증',
    details: '잘못된 비밀번호 입력 (3회 시도)',
    ip: '192.168.1.102',
    status: 'error',
    severity: 'warning'
  },
  {
    id: 'LOG-2024-008',
    timestamp: '2024-10-31 10:20:45',
    user: '박민수 (E003)',
    action: '계약 생성',
    module: '계약 관리',
    details: '신규 계약 생성: GS건설 (50톤, A급)',
    ip: '192.168.1.103',
    status: 'success',
    severity: 'info'
  },
  {
    id: 'LOG-2024-009',
    timestamp: '2024-10-31 09:40:12',
    user: '정수민 (E005)',
    action: '생산 중단',
    module: '생산 관리',
    details: 'B라인 설비 점검으로 생산 일시 중단',
    ip: '192.168.1.105',
    status: 'warning',
    severity: 'warning'
  },
  {
    id: 'LOG-2024-010',
    timestamp: '2024-10-31 09:00:00',
    user: 'System',
    action: '시스템 시작',
    module: '시스템',
    details: '대시보드 시스템 정상 시작',
    ip: 'localhost',
    status: 'success',
    severity: 'info'
  },
];

export function AuditLogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const filteredLogs = mockAuditLogs.filter(log => {
    const matchesSearch = 
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesModule = selectedModule === 'all' || log.module === selectedModule;
    const matchesSeverity = selectedSeverity === 'all' || log.severity === selectedSeverity;
    return matchesSearch && matchesModule && matchesSeverity;
  });

  const handleExport = () => {
    toast.success('감사 로그가 CSV 파일로 다운로드되었습니다.');
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <Badge variant="destructive">긴급</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-500">경고</Badge>;
      case 'info':
      default:
        return <Badge variant="outline">정보</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      default:
        return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };

  const getActionIcon = (module: string) => {
    switch (module) {
      case '직원 관리':
        return <User className="w-4 h-4" />;
      case '생산 관리':
        return <Settings className="w-4 h-4" />;
      case '재고 관리':
      case '출고 관리':
        return <FileText className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="h-screen overflow-y-auto bg-gray-50">
      <div className="p-4 md:p-6 lg:p-8 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* 헤더 */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div>
              <h1 className="text-3xl mb-2">감사 로그</h1>
              <p className="text-gray-600">모든 시스템 작업 이력 추적 및 모니터링</p>
            </div>
            
            <Button onClick={handleExport} className="gap-2">
              <Download className="w-4 h-4" />
              로그 다운로드
            </Button>
          </div>

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  총 로그 수
                </CardDescription>
                <CardTitle className="text-3xl">{mockAuditLogs.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">금일 기준</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  성공
                </CardDescription>
                <CardTitle className="text-3xl text-green-600">
                  {mockAuditLogs.filter(l => l.status === 'success').length}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {((mockAuditLogs.filter(l => l.status === 'success').length / mockAuditLogs.length) * 100).toFixed(0)}% 성공률
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  경고
                </CardDescription>
                <CardTitle className="text-3xl text-yellow-600">
                  {mockAuditLogs.filter(l => l.status === 'warning').length}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">주의 필요</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  오류
                </CardDescription>
                <CardTitle className="text-3xl text-red-600">
                  {mockAuditLogs.filter(l => l.status === 'error').length}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">즉시 확인 필요</p>
              </CardContent>
            </Card>
          </div>

          {/* 필터 및 검색 */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="사용자, 작업, 상세 내용 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>

                <Select value={selectedModule} onValueChange={setSelectedModule}>
                  <SelectTrigger>
                    <SelectValue placeholder="모듈 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">전체 모듈</SelectItem>
                    <SelectItem value="생산 관리">생산 관리</SelectItem>
                    <SelectItem value="재고 관리">재고 관리</SelectItem>
                    <SelectItem value="출고 관리">출고 관리</SelectItem>
                    <SelectItem value="직원 관리">직원 관리</SelectItem>
                    <SelectItem value="계약 관리">계약 관리</SelectItem>
                    <SelectItem value="알림 시스템">알림 시스템</SelectItem>
                    <SelectItem value="백업 시스템">백업 시스템</SelectItem>
                    <SelectItem value="인증">인증</SelectItem>
                    <SelectItem value="시스템">시스템</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                  <SelectTrigger>
                    <SelectValue placeholder="중요도 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">전체 중요도</SelectItem>
                    <SelectItem value="critical">긴급</SelectItem>
                    <SelectItem value="warning">경고</SelectItem>
                    <SelectItem value="info">정보</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* 로그 테이블 */}
          <Card>
            <CardHeader>
              <CardTitle>작업 이력</CardTitle>
              <CardDescription>
                {filteredLogs.length}개의 로그 항목 (전체 {mockAuditLogs.length}개 중)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>상태</TableHead>
                      <TableHead>로그 ID</TableHead>
                      <TableHead>시간</TableHead>
                      <TableHead>사용자</TableHead>
                      <TableHead>모듈</TableHead>
                      <TableHead>작업</TableHead>
                      <TableHead>상세 내용</TableHead>
                      <TableHead>IP 주소</TableHead>
                      <TableHead>중요도</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell>{getStatusIcon(log.status)}</TableCell>
                        <TableCell className="font-mono text-xs">{log.id}</TableCell>
                        <TableCell className="text-sm whitespace-nowrap">{log.timestamp}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-sm">{log.user}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getActionIcon(log.module)}
                            <span className="text-sm">{log.module}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{log.action}</Badge>
                        </TableCell>
                        <TableCell className="max-w-md">
                          <p className="text-sm text-gray-600 truncate">{log.details}</p>
                        </TableCell>
                        <TableCell className="font-mono text-xs text-gray-500">
                          {log.ip}
                        </TableCell>
                        <TableCell>{getSeverityBadge(log.severity)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* 로그 보존 정책 */}
          <Card className="mt-6 mb-32">
            <CardHeader>
              <CardTitle>로그 보존 정책</CardTitle>
              <CardDescription>감사 로그 자동 관리 설정</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">일반 로그</h3>
                  <p className="text-2xl mb-1">90일</p>
                  <p className="text-sm text-gray-600">정보 수준 로그 보존 기간</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">경고 로그</h3>
                  <p className="text-2xl mb-1">180일</p>
                  <p className="text-sm text-gray-600">경고 수준 로그 보존 기간</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">긴급 로그</h3>
                  <p className="text-2xl mb-1">365일</p>
                  <p className="text-sm text-gray-600">긴급 수준 로그 보존 기간</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">자동 아카이빙</h4>
                    <p className="text-sm text-blue-800">
                      보존 기간이 지난 로그는 자동으로 압축되어 별도 스토리지에 아카이빙됩니다.
                      필요 시 관리자가 아카이브에서 복원할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Input } from './ui/input';
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
  Alert,
  AlertDescription,
  AlertTitle,
} from './ui/alert';
import {
  Database,
  Download,
  Upload,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Clock,
  HardDrive,
  Calendar,
  Settings,
  Play,
  Trash2
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

// Mock 백업 이력 데이터
const mockBackupHistory = [
  {
    id: 'BK-2024-031',
    timestamp: '2024-10-31 03:00:00',
    type: '자동 백업',
    size: '1.2GB',
    status: 'completed',
    duration: '4분 35초',
    records: '158,432'
  },
  {
    id: 'BK-2024-030',
    timestamp: '2024-10-30 03:00:00',
    type: '자동 백업',
    size: '1.18GB',
    status: 'completed',
    duration: '4분 28초',
    records: '157,845'
  },
  {
    id: 'BK-2024-029',
    timestamp: '2024-10-29 15:30:00',
    type: '수동 백업',
    size: '1.15GB',
    status: 'completed',
    duration: '4분 15초',
    records: '156,920'
  },
  {
    id: 'BK-2024-028',
    timestamp: '2024-10-29 03:00:00',
    type: '자동 백업',
    size: '1.15GB',
    status: 'completed',
    duration: '4분 20초',
    records: '156,850'
  },
  {
    id: 'BK-2024-027',
    timestamp: '2024-10-28 03:00:00',
    type: '자동 백업',
    size: '1.12GB',
    status: 'completed',
    duration: '4분 10초',
    records: '155,230'
  },
  {
    id: 'BK-2024-026',
    timestamp: '2024-10-27 03:00:00',
    type: '자동 백업',
    size: '1.1GB',
    status: 'failed',
    duration: '1분 05초',
    records: '0'
  },
];

export function BackupPage() {
  const [autoBackupEnabled, setAutoBackupEnabled] = useState(true);
  const [backupTime, setBackupTime] = useState('03:00');
  const [retentionDays, setRetentionDays] = useState('30');
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [backupProgress, setBackupProgress] = useState(0);

  const handleManualBackup = () => {
    setIsBackingUp(true);
    setBackupProgress(0);

    // 백업 진행 시뮬레이션
    const interval = setInterval(() => {
      setBackupProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsBackingUp(false);
          toast.success('백업이 완료되었습니다.', {
            description: '데이터가 안전하게 백업되었습니다.'
          });
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleRestore = (backupId: string) => {
    toast.success(`${backupId} 백업으로 복원을 시작합니다.`, {
      description: '복원이 완료되면 알림을 보내드립니다.'
    });
  };

  const handleDelete = (backupId: string) => {
    toast.success(`${backupId} 백업이 삭제되었습니다.`);
  };

  const handleSaveSettings = () => {
    toast.success('백업 설정이 저장되었습니다.');
  };

  const totalBackupSize = mockBackupHistory.reduce((sum, backup) => {
    const size = parseFloat(backup.size);
    return sum + size;
  }, 0);

  const successRate = (mockBackupHistory.filter(b => b.status === 'completed').length / mockBackupHistory.length * 100).toFixed(1);

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
              <h1 className="text-3xl mb-2">백업 & 복원</h1>
              <p className="text-gray-600">데이터 백업 및 복원 관리</p>
            </div>
            
            <Button 
              onClick={handleManualBackup}
              disabled={isBackingUp}
              className="gap-2"
            >
              {isBackingUp ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  백업 중... {backupProgress}%
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  수동 백업 시작
                </>
              )}
            </Button>
          </div>

          {/* 백업 진행 상태 */}
          {isBackingUp && (
            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <RefreshCw className="w-4 h-4 animate-spin text-blue-600" />
              <AlertTitle>백업 진행 중</AlertTitle>
              <AlertDescription>
                <div className="mt-2">
                  <Progress value={backupProgress} className="mb-2" />
                  <p className="text-sm">데이터를 안전하게 백업하고 있습니다... {backupProgress}%</p>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  총 백업 수
                </CardDescription>
                <CardTitle className="text-3xl">{mockBackupHistory.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">최근 30일 기준</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4" />
                  총 백업 크기
                </CardDescription>
                <CardTitle className="text-3xl">{totalBackupSize.toFixed(2)}GB</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">압축 후 크기</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  성공률
                </CardDescription>
                <CardTitle className="text-3xl text-green-600">{successRate}%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  성공: {mockBackupHistory.filter(b => b.status === 'completed').length}건
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  다음 백업
                </CardDescription>
                <CardTitle className="text-3xl">3시간</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">오늘 03:00 AM</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* 백업 설정 */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  백업 설정
                </CardTitle>
                <CardDescription>자동 백업 스케줄 및 보존 정책</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>자동 백업</Label>
                    <p className="text-sm text-gray-600">매일 자동 백업 활성화</p>
                  </div>
                  <Switch
                    checked={autoBackupEnabled}
                    onCheckedChange={setAutoBackupEnabled}
                  />
                </div>

                <div className="space-y-2">
                  <Label>백업 시간</Label>
                  <Input
                    type="time"
                    value={backupTime}
                    onChange={(e) => setBackupTime(e.target.value)}
                    disabled={!autoBackupEnabled}
                  />
                  <p className="text-xs text-gray-500">서버 부하가 적은 시간대를 권장합니다</p>
                </div>

                <div className="space-y-2">
                  <Label>보존 기간 (일)</Label>
                  <Select value={retentionDays} onValueChange={setRetentionDays}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7일</SelectItem>
                      <SelectItem value="14">14일</SelectItem>
                      <SelectItem value="30">30일</SelectItem>
                      <SelectItem value="60">60일</SelectItem>
                      <SelectItem value="90">90일</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500">
                    오래된 백업은 자동으로 삭제됩니다
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>백업 대상</Label>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>폐기물 데이터</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>순환골재 재고</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>계약 정보</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>생산 이력</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>직원 정보</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>시스템 설정</span>
                    </div>
                  </div>
                </div>

                <Button onClick={handleSaveSettings} className="w-full">
                  설정 저장
                </Button>
              </CardContent>
            </Card>

            {/* 백업 이력 */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  백업 이력
                </CardTitle>
                <CardDescription>최근 백업 내역 및 복원 가능한 포인트</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>백업 ID</TableHead>
                        <TableHead>시간</TableHead>
                        <TableHead>유형</TableHead>
                        <TableHead>크기</TableHead>
                        <TableHead>레코드</TableHead>
                        <TableHead>소요시간</TableHead>
                        <TableHead>상태</TableHead>
                        <TableHead className="text-right">작업</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockBackupHistory.map((backup) => (
                        <TableRow key={backup.id}>
                          <TableCell className="font-mono text-xs">{backup.id}</TableCell>
                          <TableCell className="text-sm whitespace-nowrap">
                            {backup.timestamp}
                          </TableCell>
                          <TableCell>
                            <Badge variant={backup.type === '자동 백업' ? 'default' : 'secondary'}>
                              {backup.type}
                            </Badge>
                          </TableCell>
                          <TableCell>{backup.size}</TableCell>
                          <TableCell className="text-sm text-gray-600">
                            {backup.records}
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">
                            {backup.duration}
                          </TableCell>
                          <TableCell>
                            {backup.status === 'completed' ? (
                              <Badge variant="outline" className="gap-1">
                                <CheckCircle className="w-3 h-3" />
                                완료
                              </Badge>
                            ) : (
                              <Badge variant="destructive" className="gap-1">
                                <AlertCircle className="w-3 h-3" />
                                실패
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              {backup.status === 'completed' && (
                                <>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleRestore(backup.id)}
                                    className="gap-1"
                                  >
                                    <Upload className="w-4 h-4" />
                                    복원
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleDelete(backup.id)}
                                  >
                                    <Trash2 className="w-4 h-4 text-red-600" />
                                  </Button>
                                </>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 안내 사항 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
            <Alert className="bg-blue-50 border-blue-200">
              <Database className="w-4 h-4 text-blue-600" />
              <AlertTitle>백업 보안</AlertTitle>
              <AlertDescription>
                모든 백업 파일은 AES-256 암호화로 보호되며, 안전한 클라우드 스토리지에 저장됩니다.
                관리자만 백업 파일에 접근할 수 있습니다.
              </AlertDescription>
            </Alert>

            <Alert className="bg-green-50 border-green-200">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <AlertTitle>복원 가이드</AlertTitle>
              <AlertDescription>
                백업을 복원하면 해당 시점의 데이터로 되돌아갑니다.
                복원 전에 현재 데이터를 백업하는 것을 권장합니다.
              </AlertDescription>
            </Alert>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

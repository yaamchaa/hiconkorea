import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from './ui/alert';
import {
  Bell,
  BellRing,
  Volume2,
  Vibrate,
  Mail,
  MessageSquare,
  Send,
  AlertCircle,
  CheckCircle,
  Users,
  Clock,
  Trash2,
  Edit
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { addEmergencyAlert, playSirenSound, vibrateSiren } from '../utils/emergencyAlert';

// Mock 알림 이력 데이터
const mockNotificationHistory = [
  {
    id: 'NOTI-2024-005',
    timestamp: '2024-10-31 12:30:55',
    title: 'A라인 긴급 점검',
    message: 'A라인에서 설비 이상 감지로 긴급 점검이 필요합니다.',
    type: 'emergency',
    recipients: 6,
    acknowledged: 6,
    sender: '김철수 (E001)'
  },
  {
    id: 'NOTI-2024-004',
    timestamp: '2024-10-30 16:20:10',
    title: '생산 목표 달성',
    message: '10월 생산 목표를 조기 달성했습니다.',
    type: 'info',
    recipients: 6,
    acknowledged: 5,
    sender: 'System'
  },
  {
    id: 'NOTI-2024-003',
    timestamp: '2024-10-29 09:15:30',
    title: '재고 부족 경고',
    message: 'A급 순환골재 재고가 임계값 이하입니다.',
    type: 'warning',
    recipients: 3,
    acknowledged: 3,
    sender: 'System'
  },
  {
    id: 'NOTI-2024-002',
    timestamp: '2024-10-28 14:45:00',
    title: '신규 계약 체결',
    message: '삼성물산과 신규 공급 계약이 체결되었습니다.',
    type: 'info',
    recipients: 6,
    acknowledged: 6,
    sender: '이영희 (E002)'
  },
  {
    id: 'NOTI-2024-001',
    timestamp: '2024-10-27 08:00:00',
    title: '시스템 점검 안내',
    message: '금일 18:00-19:00 서버 정기 점검이 예정되어 있습니다.',
    type: 'info',
    recipients: 6,
    acknowledged: 6,
    sender: 'System'
  },
];

export function NotificationSettingsPage() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrateEnabled, setVibrateEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [autoAcknowledge, setAutoAcknowledge] = useState(false);
  const [showSendDialog, setShowSendDialog] = useState(false);
  
  // 긴급 알림 발송 폼
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState<'emergency' | 'warning' | 'info'>('emergency');

  const handleSaveSettings = () => {
    toast.success('알림 설정이 저장되었습니다.');
  };

  const handleSendNotification = () => {
    if (!notificationTitle || !notificationMessage) {
      toast.error('제목과 내용을 모두 입력해주세요.');
      return;
    }

    // 긴급 알림 발송
    if (notificationType === 'emergency') {
      // 긴급 알림 저장
      addEmergencyAlert({
        type: 'emergency-tpm',
        title: notificationTitle,
        message: notificationMessage,
      });
      
      // 사이렌 및 진동 활성화
      if (soundEnabled) {
        playSirenSound();
      }
      if (vibrateEnabled) {
        vibrateSiren();
      }
      
      toast.success('긴급 알림이 발송되었습니다.', {
        description: `${notificationTitle} - 전체 직원 30명에게 사이렌과 함께 발송됨`
      });
    } else {
      toast.success('알림이 전송되었습니다.', {
        description: `${notificationTitle} - 전체 직원 30명에게 발송됨`
      });
    }

    setShowSendDialog(false);
    setNotificationTitle('');
    setNotificationMessage('');
  };

  const handleTestNotification = () => {
    toast.info('테스트 알림', {
      description: '알림 테스트가 발송되었습니다.',
    });
  };

  const handleDeleteNotification = (id: string) => {
    toast.success(`${id} 알림이 삭제되었습니다.`);
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
              <h1 className="text-3xl mb-2">알림 설정</h1>
              <p className="text-gray-600">긴급 알림 및 시스템 알림 관리</p>
            </div>
            
            <Dialog open={showSendDialog} onOpenChange={setShowSendDialog}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Send className="w-4 h-4" />
                  긴급 알림 발송
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>전체 직원 알림 발송</DialogTitle>
                  <DialogDescription>
                    모든 직원에게 즉시 알림이 전송됩니다.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>알림 유형</Label>
                    <div className="flex gap-2">
                      <Button
                        variant={notificationType === 'emergency' ? 'default' : 'outline'}
                        onClick={() => setNotificationType('emergency')}
                        className="flex-1"
                      >
                        <AlertCircle className="w-4 h-4 mr-2" />
                        긴급
                      </Button>
                      <Button
                        variant={notificationType === 'warning' ? 'default' : 'outline'}
                        onClick={() => setNotificationType('warning')}
                        className="flex-1"
                      >
                        <AlertCircle className="w-4 h-4 mr-2" />
                        경고
                      </Button>
                      <Button
                        variant={notificationType === 'info' ? 'default' : 'outline'}
                        onClick={() => setNotificationType('info')}
                        className="flex-1"
                      >
                        <Bell className="w-4 h-4 mr-2" />
                        정보
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>알림 제목</Label>
                    <Input
                      placeholder="예: A라인 긴급 점검"
                      value={notificationTitle}
                      onChange={(e) => setNotificationTitle(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>알림 내용</Label>
                    <Textarea
                      placeholder="알림 메시지를 입력하세요..."
                      value={notificationMessage}
                      onChange={(e) => setNotificationMessage(e.target.value)}
                      rows={5}
                    />
                  </div>

                  {notificationType === 'emergency' && (
                    <Alert className="bg-red-50 border-red-200">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <AlertTitle>긴급 알림</AlertTitle>
                      <AlertDescription>
                        사이렌 소리와 진동이 활성화되며, 모든 직원의 기기에서 즉시 알림이 울립니다.
                        화면이 켜지지 않은 상태에서도 알림이 표시됩니다.
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Users className="w-4 h-4" />
                      <span>수신 대상: 전체 직원 30명</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      경영진 3명, A라인 9명, B라인 9명, C라인 9명
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowSendDialog(false)}>
                    취소
                  </Button>
                  <Button onClick={handleSendNotification}>
                    발송
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  총 알림 수
                </CardDescription>
                <CardTitle className="text-3xl">{mockNotificationHistory.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">최근 7일 기준</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  긴급 알림
                </CardDescription>
                <CardTitle className="text-3xl text-red-600">
                  {mockNotificationHistory.filter(n => n.type === 'emergency').length}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">최근 발송</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  확인률
                </CardDescription>
                <CardTitle className="text-3xl text-green-600">
                  {((mockNotificationHistory.reduce((sum, n) => sum + n.acknowledged, 0) / 
                     mockNotificationHistory.reduce((sum, n) => sum + n.recipients, 0)) * 100).toFixed(0)}%
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">평균 확인률</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  평균 응답 시간
                </CardDescription>
                <CardTitle className="text-3xl">2.3분</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">긴급 알림 기준</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* 알림 설정 */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  알림 설정
                </CardTitle>
                <CardDescription>알림 수신 방법 및 옵션</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-5 h-5 text-blue-600" />
                      <div>
                        <Label>사이렌 소리</Label>
                        <p className="text-sm text-gray-600">긴급 알림 사운드</p>
                      </div>
                    </div>
                    <Switch
                      checked={soundEnabled}
                      onCheckedChange={setSoundEnabled}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Vibrate className="w-5 h-5 text-purple-600" />
                      <div>
                        <Label>진동</Label>
                        <p className="text-sm text-gray-600">기기 진동 알림</p>
                      </div>
                    </div>
                    <Switch
                      checked={vibrateEnabled}
                      onCheckedChange={setVibrateEnabled}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-green-600" />
                      <div>
                        <Label>이메일</Label>
                        <p className="text-sm text-gray-600">이메일 알림 수신</p>
                      </div>
                    </div>
                    <Switch
                      checked={emailEnabled}
                      onCheckedChange={setEmailEnabled}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-orange-600" />
                      <div>
                        <Label>SMS</Label>
                        <p className="text-sm text-gray-600">문자 메시지 수신</p>
                      </div>
                    </div>
                    <Switch
                      checked={smsEnabled}
                      onCheckedChange={setSmsEnabled}
                    />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Label>자동 확인</Label>
                      <p className="text-sm text-gray-600">알림 클릭 시 자동 확인</p>
                    </div>
                    <Switch
                      checked={autoAcknowledge}
                      onCheckedChange={setAutoAcknowledge}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Button onClick={handleTestNotification} variant="outline" className="w-full gap-2">
                    <BellRing className="w-4 h-4" />
                    테스트 알림 발송
                  </Button>
                  <Button onClick={handleSaveSettings} className="w-full">
                    설정 저장
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 알림 이력 */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  알림 이력
                </CardTitle>
                <CardDescription>최근 발송된 알림 내역</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>시간</TableHead>
                        <TableHead>제목</TableHead>
                        <TableHead>유형</TableHead>
                        <TableHead>발송자</TableHead>
                        <TableHead>수신/확인</TableHead>
                        <TableHead className="text-right">작업</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockNotificationHistory.map((notification) => (
                        <TableRow key={notification.id}>
                          <TableCell className="text-sm whitespace-nowrap">
                            {notification.timestamp.split(' ')[1]}
                            <br />
                            <span className="text-xs text-gray-500">
                              {notification.timestamp.split(' ')[0]}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{notification.title}</div>
                              <div className="text-sm text-gray-600 truncate max-w-xs">
                                {notification.message}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                notification.type === 'emergency' ? 'destructive' :
                                notification.type === 'warning' ? 'default' :
                                'outline'
                              }
                              className={
                                notification.type === 'warning' ? 'bg-yellow-500' : ''
                              }
                            >
                              {notification.type === 'emergency' ? '긴급' :
                               notification.type === 'warning' ? '경고' : '정보'}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm">
                            {notification.sender}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <span className="text-sm">
                                {notification.acknowledged}/{notification.recipients}
                              </span>
                              {notification.acknowledged === notification.recipients ? (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              ) : (
                                <Clock className="w-4 h-4 text-gray-400" />
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteNotification(notification.id)}
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </Button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Alert className="bg-red-50 border-red-200">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <AlertTitle>긴급 알림 사용 안내</AlertTitle>
              <AlertDescription>
                긴급 알림은 큰 소리와 진동으로 모든 직원에게 즉시 전달됩니다.
                실제 긴급 상황에서만 사용해주세요.
              </AlertDescription>
            </Alert>

            <Alert className="bg-blue-50 border-blue-200">
              <Bell className="w-4 h-4 text-blue-600" />
              <AlertTitle>알림 확인 방법</AlertTitle>
              <AlertDescription>
                알림을 클릭하면 상세 내용을 확인할 수 있습니다.
                긴급 알림은 반드시 확인 버튼을 눌러 확인 완료 처리해야 합니다.
              </AlertDescription>
            </Alert>
          </div>

          {/* 시스템 제한사항 안내 */}
          <Alert className="bg-yellow-50 border-yellow-300 mb-32">
            <AlertCircle className="w-4 h-4 text-yellow-600" />
            <AlertTitle className="text-yellow-900">⚠️ 현재 시스템 제한사항 (테스트 모드)</AlertTitle>
            <AlertDescription className="text-yellow-800">
              <div className="space-y-2 mt-2">
                <p className="font-semibold">현재 알림 시스템은 <u>같은 브라우저/기기에서만</u> 작동합니다:</p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                  <li>컴퓨터 A에서 발송한 알림은 컴퓨터 B에 전달되지 <strong>않습니다</strong></li>
                  <li>다른 직원의 기기에는 알림이 전송되지 <strong>않습니다</strong></li>
                  <li>LocalStorage 기반으로 새로고침 시 알림이 사라질 수 있습니다</li>
                </ul>
                <div className="mt-3 pt-3 border-t border-yellow-200">
                  <p className="font-semibold text-sm">✅ 실제 운영을 위한 필요 작업:</p>
                  <p className="text-sm mt-1">
                    Supabase Realtime 또는 WebSocket 연동이 필요합니다. 
                    구현 시 모든 접속 중인 직원(30명)에게 실시간으로 알림이 전송됩니다.
                  </p>
                  <p className="text-xs mt-2 text-yellow-700">
                    📝 자세한 내용: <code className="bg-yellow-100 px-1 rounded">/utils/emergencyAlert.ts</code> 파일 상단 주석 참조
                  </p>
                </div>
              </div>
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>
    </div>
  );
}

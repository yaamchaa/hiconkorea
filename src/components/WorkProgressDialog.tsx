import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { 
  Clock, 
  Factory, 
  Package, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Play, 
  Pause, 
  StopCircle,
  User,
  Calendar,
  Target,
  Activity
} from 'lucide-react';
import { toast } from 'sonner';

// 날짜 포맷팅 함수
const formatDate = (date: Date, formatStr: string) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  if (formatStr === 'MM/dd') {
    return `${month}/${day}`;
  } else if (formatStr === 'MM/dd HH:mm') {
    return `${month}/${day} ${hours}:${minutes}`;
  }
  return `${year}-${month}-${day}`;
};

interface WorkProgressDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave?: () => void;
}

interface WorkOrder {
  id: string;
  workOrderNo: string;
  productName: string;
  productCode: string;
  targetQuantity: number;
  unit: string;
  productionLine: string;
  startDate: Date;
  endDate: Date;
  priority: 'high' | 'medium' | 'low';
  wasteType: string;
  targetGrade: string;
  supervisor: string;
  notes: string;
  status: 'pending' | 'in-progress' | 'completed' | 'paused';
  createdAt: Date;
  actualQuantity?: number;
  startedAt?: Date;
  completedAt?: Date;
  progress?: number;
}

export function WorkProgressDialog({ open, onOpenChange, onSave }: WorkProgressDialogProps) {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);
  const [filteredStatus, setFilteredStatus] = useState<'all' | 'pending' | 'in-progress' | 'paused' | 'completed'>('all');

  useEffect(() => {
    if (open) {
      loadWorkOrders();
    }
  }, [open]);

  const loadWorkOrders = () => {
    const saved = localStorage.getItem('work_orders');
    if (saved) {
      const orders = JSON.parse(saved);
      // Date 객체로 변환
      const parsedOrders = orders.map((order: any) => ({
        ...order,
        startDate: new Date(order.startDate),
        endDate: new Date(order.endDate),
        createdAt: new Date(order.createdAt),
        startedAt: order.startedAt ? new Date(order.startedAt) : undefined,
        completedAt: order.completedAt ? new Date(order.completedAt) : undefined,
      }));
      setWorkOrders(parsedOrders);
    }
  };

  const handleStartWork = (orderId: string) => {
    const updated = workOrders.map(order => {
      if (order.id === orderId && order.status === 'pending') {
        return {
          ...order,
          status: 'in-progress' as const,
          startedAt: new Date(),
          progress: 0,
          actualQuantity: 0,
        };
      }
      return order;
    });
    
    setWorkOrders(updated);
    localStorage.setItem('work_orders', JSON.stringify(updated));
    
    if (onSave) {
      onSave();
    }
    
    toast.success('작업 시작', {
      description: '생산 작업이 시작되었습니다.',
    });
  };

  const handlePauseWork = (orderId: string) => {
    const updated = workOrders.map(order => {
      if (order.id === orderId && order.status === 'in-progress') {
        return { ...order, status: 'paused' as const };
      }
      return order;
    });
    
    setWorkOrders(updated);
    localStorage.setItem('work_orders', JSON.stringify(updated));
    
    if (onSave) {
      onSave();
    }
    
    toast.info('작업 일시정지', {
      description: '생산 작업이 일시정지되었습니다.',
    });
  };

  const handleResumeWork = (orderId: string) => {
    const updated = workOrders.map(order => {
      if (order.id === orderId && order.status === 'paused') {
        return { ...order, status: 'in-progress' as const };
      }
      return order;
    });
    
    setWorkOrders(updated);
    localStorage.setItem('work_orders', JSON.stringify(updated));
    
    if (onSave) {
      onSave();
    }
    
    toast.success('작업 재개', {
      description: '생산 작업이 재개되었습니다.',
    });
  };

  const handleCompleteWork = (orderId: string) => {
    const updated = workOrders.map(order => {
      if (order.id === orderId) {
        return {
          ...order,
          status: 'completed' as const,
          completedAt: new Date(),
          progress: 100,
          actualQuantity: order.targetQuantity, // 실제로는 입력받아야 함
        };
      }
      return order;
    });
    
    setWorkOrders(updated);
    localStorage.setItem('work_orders', JSON.stringify(updated));
    
    if (onSave) {
      onSave();
    }
    
    toast.success('작업 완료', {
      description: '생산 작업이 완료되었습니다.',
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-gray-100 text-gray-700">대기중</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-600 text-white">진행중</Badge>;
      case 'paused':
        return <Badge variant="outline" className="border-orange-500 text-orange-600">일시정지</Badge>;
      case 'completed':
        return <Badge className="bg-green-600 text-white">완료</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive" className="text-xs">높음</Badge>;
      case 'medium':
        return <Badge variant="default" className="text-xs">보통</Badge>;
      case 'low':
        return <Badge variant="secondary" className="text-xs">낮음</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">{priority}</Badge>;
    }
  };

  const filteredOrders = filteredStatus === 'all' 
    ? workOrders 
    : workOrders.filter(order => order.status === filteredStatus);

  const pendingCount = workOrders.filter(o => o.status === 'pending').length;
  const inProgressCount = workOrders.filter(o => o.status === 'in-progress').length;
  const pausedCount = workOrders.filter(o => o.status === 'paused').length;
  const completedCount = workOrders.filter(o => o.status === 'completed').length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Activity className="w-6 h-6 text-blue-600" />
            작업 진행 현황
          </DialogTitle>
          <DialogDescription>
            생산 라인별 작업 진행 상태를 실시간으로 모니터링합니다.
          </DialogDescription>
        </DialogHeader>

        {/* 요약 카드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4">
          <Card className="border-gray-200 bg-gray-50/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">대기중</p>
                  <p className="text-2xl text-gray-900 mt-1">{pendingCount}</p>
                </div>
                <Clock className="w-8 h-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-blue-600">진행중</p>
                  <p className="text-2xl text-blue-900 mt-1">{inProgressCount}</p>
                </div>
                <Play className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-orange-600">일시정지</p>
                  <p className="text-2xl text-orange-900 mt-1">{pausedCount}</p>
                </div>
                <Pause className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-green-600">완료</p>
                  <p className="text-2xl text-green-900 mt-1">{completedCount}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 필터 탭 */}
        <Tabs value={filteredStatus} onValueChange={(v: any) => setFilteredStatus(v)} className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">전체 ({workOrders.length})</TabsTrigger>
            <TabsTrigger value="pending">대기 ({pendingCount})</TabsTrigger>
            <TabsTrigger value="in-progress">진행 ({inProgressCount})</TabsTrigger>
            <TabsTrigger value="paused">정지 ({pausedCount})</TabsTrigger>
            <TabsTrigger value="completed">완료 ({completedCount})</TabsTrigger>
          </TabsList>

          <TabsContent value={filteredStatus} className="flex-1 overflow-hidden mt-4">
            <ScrollArea className="h-[450px] pr-4">
              {filteredOrders.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                  <AlertCircle className="w-16 h-16 mb-4" />
                  <p>작업지시가 없습니다</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredOrders.map((order) => (
                    <Card key={order.id} className="border-2 hover:shadow-md transition-shadow">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg">{order.productName}</h3>
                              {getStatusBadge(order.status)}
                              {getPriorityBadge(order.priority)}
                            </div>
                            <p className="text-sm text-gray-600">작업지시서: {order.workOrderNo}</p>
                          </div>
                          
                          {/* 작업 제어 버튼 */}
                          <div className="flex gap-2">
                            {order.status === 'pending' && (
                              <Button
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700"
                                onClick={() => handleStartWork(order.id)}
                              >
                                <Play className="w-4 h-4 mr-1" />
                                시작
                              </Button>
                            )}
                            {order.status === 'in-progress' && (
                              <>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-orange-500 text-orange-600 hover:bg-orange-50"
                                  onClick={() => handlePauseWork(order.id)}
                                >
                                  <Pause className="w-4 h-4 mr-1" />
                                  정지
                                </Button>
                                <Button
                                  size="sm"
                                  className="bg-green-600 hover:bg-green-700"
                                  onClick={() => handleCompleteWork(order.id)}
                                >
                                  <CheckCircle className="w-4 h-4 mr-1" />
                                  완료
                                </Button>
                              </>
                            )}
                            {order.status === 'paused' && (
                              <Button
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700"
                                onClick={() => handleResumeWork(order.id)}
                              >
                                <Play className="w-4 h-4 mr-1" />
                                재개
                              </Button>
                            )}
                          </div>
                        </div>

                        {/* 진행률 (진행중 또는 일시정지인 경우) */}
                        {(order.status === 'in-progress' || order.status === 'paused') && (
                          <div className="mb-4">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-600">진행률</span>
                              <span className="text-blue-600">{order.progress || 0}%</span>
                            </div>
                            <Progress value={order.progress || 0} className="h-2" />
                          </div>
                        )}

                        {/* 상세 정보 그리드 */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Factory className="w-4 h-4 text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-500">생산라인</p>
                              <p className="text-gray-900">{order.productionLine}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-500">목표수량</p>
                              <p className="text-gray-900">{order.targetQuantity} {order.unit}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Package className="w-4 h-4 text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-500">투입폐기물</p>
                              <p className="text-gray-900">{order.wasteType || '-'}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-500">담당자</p>
                              <p className="text-gray-900">{order.supervisor || '-'}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-500">시작일</p>
                              <p className="text-gray-900">{formatDate(order.startDate, 'MM/dd')}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-500">종료일</p>
                              <p className="text-gray-900">{formatDate(order.endDate, 'MM/dd')}</p>
                            </div>
                          </div>

                          {order.startedAt && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <div>
                                <p className="text-xs text-gray-500">실제시작</p>
                                <p className="text-gray-900">{formatDate(order.startedAt, 'MM/dd HH:mm')}</p>
                              </div>
                            </div>
                          )}

                          {order.completedAt && (
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-gray-400" />
                              <div>
                                <p className="text-xs text-gray-500">완료시간</p>
                                <p className="text-gray-900">{formatDate(order.completedAt, 'MM/dd HH:mm')}</p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* 비고 */}
                        {order.notes && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-xs text-gray-500 mb-1">특이사항</p>
                            <p className="text-sm text-gray-700">{order.notes}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            닫기
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

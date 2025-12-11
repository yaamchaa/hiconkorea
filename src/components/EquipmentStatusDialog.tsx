import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { 
  Settings, 
  Power, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Activity,
  Gauge,
  Wrench,
  Factory,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

interface EquipmentStatusDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave?: () => void;
}

interface Equipment {
  id: string;
  equipmentCode: string;
  equipmentName: string;
  line: 'A라인' | 'B라인' | 'C라인';
  type: string;
  status: 'running' | 'idle' | 'maintenance' | 'fault';
  utilizationRate: number; // %
  operatingHoursToday: number; // 시간
  temperature?: number; // °C
  vibration?: number; // mm/s
  power?: number; // kW
  speed?: number; // rpm
  lastMaintenance: string;
  nextMaintenance: string;
  location: string;
  operator?: string;
}

export function EquipmentStatusDialog({ open, onOpenChange, onSave }: EquipmentStatusDialogProps) {
  const [selectedLine, setSelectedLine] = useState<'all' | 'A라인' | 'B라인' | 'C라인'>('all');
  const [equipment, setEquipment] = useState<Equipment[]>([]);

  // Mock 데이터 생성
  useEffect(() => {
    if (open) {
      const mockEquipment = generateMockEquipment();
      setEquipment(mockEquipment);
    }
  }, [open]);

  const generateMockEquipment = (): Equipment[] => {
    const lines = ['A라인', 'B라인', 'C라인'] as const;
    const equipmentTypes = [
      { name: '1차 파쇄기', type: 'crusher' },
      { name: '2차 파쇄기', type: 'crusher' },
      { name: '진동 스크린', type: 'screen' },
      { name: '자력 선별기', type: 'separator' },
      { name: '풍력 선별기', type: 'separator' },
      { name: '이송 컨베이어', type: 'conveyor' },
      { name: '저장 호퍼', type: 'hopper' },
    ];
    
    const statuses: Equipment['status'][] = ['running', 'idle', 'maintenance', 'fault'];
    const mockData: Equipment[] = [];

    lines.forEach((line, lineIndex) => {
      const equipmentCount = lineIndex === 0 ? 26 : lineIndex === 1 ? 24 : 21;
      
      for (let i = 0; i < equipmentCount; i++) {
        const eqType = equipmentTypes[i % equipmentTypes.length];
        const status = statuses[Math.floor(Math.random() * 100) % (i < 3 ? 2 : 4)]; // 처음 3개는 주로 running/idle
        
        mockData.push({
          id: `eq-${lineIndex}-${i}`,
          equipmentCode: `${line.charAt(0)}-${String(i + 1).padStart(3, '0')}`,
          equipmentName: `${eqType.name} #${i + 1}`,
          line,
          type: eqType.type,
          status,
          utilizationRate: status === 'running' ? 75 + Math.random() * 20 : 
                          status === 'idle' ? Math.random() * 30 :
                          status === 'maintenance' ? 0 : Math.random() * 10,
          operatingHoursToday: status === 'running' ? 6 + Math.random() * 3 :
                              status === 'idle' ? Math.random() * 2 : 0,
          temperature: status === 'running' ? 45 + Math.random() * 25 : 25 + Math.random() * 15,
          vibration: status === 'running' ? 2 + Math.random() * 3 : 0.5 + Math.random() * 1,
          power: status === 'running' ? 50 + Math.random() * 100 : Math.random() * 10,
          speed: status === 'running' ? 800 + Math.random() * 400 : 0,
          lastMaintenance: '2024-10-15',
          nextMaintenance: '2024-11-15',
          location: `${line} Zone-${Math.floor(i / 7) + 1}`,
          operator: status === 'running' ? `작업자 ${String.fromCharCode(65 + (lineIndex * 3 + Math.floor(i / 9)))}` : undefined,
        });
      }
    });

    return mockData;
  };

  const filteredEquipment = selectedLine === 'all' 
    ? equipment 
    : equipment.filter(eq => eq.line === selectedLine);

  const runningCount = filteredEquipment.filter(eq => eq.status === 'running').length;
  const idleCount = filteredEquipment.filter(eq => eq.status === 'idle').length;
  const maintenanceCount = filteredEquipment.filter(eq => eq.status === 'maintenance').length;
  const faultCount = filteredEquipment.filter(eq => eq.status === 'fault').length;

  const avgUtilization = filteredEquipment.length > 0
    ? filteredEquipment.reduce((sum, eq) => sum + eq.utilizationRate, 0) / filteredEquipment.length
    : 0;

  const getStatusBadge = (status: Equipment['status']) => {
    switch (status) {
      case 'running':
        return <Badge className="bg-green-600 text-white">가동중</Badge>;
      case 'idle':
        return <Badge variant="secondary" className="bg-gray-200 text-gray-700">대기</Badge>;
      case 'maintenance':
        return <Badge variant="outline" className="border-orange-500 text-orange-600">점검중</Badge>;
      case 'fault':
        return <Badge variant="destructive">고장</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: Equipment['status']) => {
    switch (status) {
      case 'running':
        return <Power className="w-5 h-5 text-green-600" />;
      case 'idle':
        return <Clock className="w-5 h-5 text-gray-400" />;
      case 'maintenance':
        return <Wrench className="w-5 h-5 text-orange-500" />;
      case 'fault':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Settings className="w-6 h-6 text-blue-600" />
            설비 가동 현황
          </DialogTitle>
          <DialogDescription>
            전체 생산 라인의 설비 실시간 가동 상태를 모니터링합니다.
          </DialogDescription>
        </DialogHeader>

        {/* 요약 통계 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 py-4">
          <Card className="border-gray-200">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-xs text-gray-600 mb-1">전체 설비</p>
                <p className="text-2xl text-gray-900">{filteredEquipment.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-green-600">가동중</p>
                  <p className="text-2xl text-green-900">{runningCount}</p>
                </div>
                <Power className="w-6 h-6 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">대기</p>
                  <p className="text-2xl text-gray-900">{idleCount}</p>
                </div>
                <Clock className="w-6 h-6 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-orange-600">점검중</p>
                  <p className="text-2xl text-orange-900">{maintenanceCount}</p>
                </div>
                <Wrench className="w-6 h-6 text-orange-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-red-600">고장</p>
                  <p className="text-2xl text-red-900">{faultCount}</p>
                </div>
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 평균 가동률 */}
        <Card className="border-blue-200 bg-blue-50/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-blue-900">평균 가동률</span>
              </div>
              <span className="text-2xl text-blue-900">{avgUtilization.toFixed(1)}%</span>
            </div>
            <Progress value={avgUtilization} className="h-2" />
          </CardContent>
        </Card>

        {/* 라인별 필터 */}
        <Tabs value={selectedLine} onValueChange={(v: any) => setSelectedLine(v)} className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">전체 ({equipment.length})</TabsTrigger>
            <TabsTrigger value="A라인">A라인 (26)</TabsTrigger>
            <TabsTrigger value="B라인">B라인 (24)</TabsTrigger>
            <TabsTrigger value="C라인">C라인 (21)</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedLine} className="flex-1 overflow-hidden mt-4">
            <ScrollArea className="h-[400px] pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredEquipment.map((eq) => (
                  <Card key={eq.id} className={`border-2 transition-all hover:shadow-md ${
                    eq.status === 'fault' ? 'border-red-300 bg-red-50/30' :
                    eq.status === 'running' ? 'border-green-200' :
                    eq.status === 'maintenance' ? 'border-orange-200 bg-orange-50/30' :
                    'border-gray-200'
                  }`}>
                    <CardContent className="p-4">
                      {/* 헤더 */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(eq.status)}
                          <div>
                            <p className="text-sm text-gray-900">{eq.equipmentName}</p>
                            <p className="text-xs text-gray-500">{eq.equipmentCode}</p>
                          </div>
                        </div>
                        {getStatusBadge(eq.status)}
                      </div>

                      {/* 위치 */}
                      <div className="flex items-center gap-2 mb-3 text-xs text-gray-600">
                        <Factory className="w-3 h-3" />
                        <span>{eq.line} · {eq.location}</span>
                      </div>

                      {/* 가동률 */}
                      {eq.status !== 'maintenance' && (
                        <div className="mb-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-600">가동률</span>
                            <span className={`
                              ${eq.utilizationRate >= 80 ? 'text-green-600' :
                                eq.utilizationRate >= 50 ? 'text-blue-600' : 'text-gray-600'}
                            `}>
                              {eq.utilizationRate.toFixed(1)}%
                            </span>
                          </div>
                          <Progress value={eq.utilizationRate} className="h-1.5" />
                        </div>
                      )}

                      {/* 상세 정보 */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {eq.status === 'running' && (
                          <>
                            <div className="bg-gray-50 rounded p-2">
                              <p className="text-gray-500 mb-0.5">온도</p>
                              <p className={`
                                ${eq.temperature && eq.temperature > 70 ? 'text-red-600' :
                                  eq.temperature && eq.temperature > 60 ? 'text-orange-600' : 'text-gray-900'}
                              `}>
                                {eq.temperature?.toFixed(1)}°C
                              </p>
                            </div>
                            <div className="bg-gray-50 rounded p-2">
                              <p className="text-gray-500 mb-0.5">진동</p>
                              <p className={`
                                ${eq.vibration && eq.vibration > 4 ? 'text-red-600' :
                                  eq.vibration && eq.vibration > 3 ? 'text-orange-600' : 'text-gray-900'}
                              `}>
                                {eq.vibration?.toFixed(1)} mm/s
                              </p>
                            </div>
                            <div className="bg-gray-50 rounded p-2">
                              <p className="text-gray-500 mb-0.5">전력</p>
                              <p className="text-gray-900">{eq.power?.toFixed(0)} kW</p>
                            </div>
                            <div className="bg-gray-50 rounded p-2">
                              <p className="text-gray-500 mb-0.5">속도</p>
                              <p className="text-gray-900">{eq.speed?.toFixed(0)} rpm</p>
                            </div>
                          </>
                        )}
                        
                        <div className="bg-gray-50 rounded p-2 col-span-2">
                          <p className="text-gray-500 mb-0.5">금일 가동시간</p>
                          <p className="text-gray-900">{eq.operatingHoursToday.toFixed(1)}시간</p>
                        </div>

                        {eq.operator && (
                          <div className="bg-blue-50 rounded p-2 col-span-2">
                            <p className="text-gray-500 mb-0.5">담당 작업자</p>
                            <p className="text-blue-900">{eq.operator}</p>
                          </div>
                        )}
                      </div>

                      {/* 고장 알림 */}
                      {eq.status === 'fault' && (
                        <div className="mt-3 bg-red-100 border border-red-300 rounded p-2">
                          <p className="text-xs text-red-800">
                            <AlertTriangle className="w-3 h-3 inline mr-1" />
                            긴급 점검 필요
                          </p>
                        </div>
                      )}

                      {/* 점검 예정 */}
                      {eq.status === 'maintenance' && (
                        <div className="mt-3 bg-orange-100 border border-orange-300 rounded p-2">
                          <p className="text-xs text-orange-800">
                            <Wrench className="w-3 h-3 inline mr-1" />
                            정기 점검 진행 중
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
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

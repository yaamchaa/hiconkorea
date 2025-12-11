import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { CalendarIcon, FileText, Factory, Package, Target, Clock, User, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ProductionWorkOrderDialogProps {
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
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: Date;
}

export function ProductionWorkOrderDialog({ open, onOpenChange, onSave }: ProductionWorkOrderDialogProps) {
  const [workOrderNo, setWorkOrderNo] = useState('');
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [targetQuantity, setTargetQuantity] = useState('');
  const [unit, setUnit] = useState('ton');
  const [productionLine, setProductionLine] = useState('');
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium');
  const [wasteType, setWasteType] = useState('');
  const [targetGrade, setTargetGrade] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [notes, setNotes] = useState('');

  // 작업지시 번호 자동 생성
  const generateWorkOrderNo = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateStr = `${year}${month}${day}`;
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const newWorkOrderNo = `WO-${dateStr}-${randomNum}`;
    setWorkOrderNo(newWorkOrderNo);
  };

  // 날짜 포맷팅 함수
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}년 ${month}월 ${day}일`;
  };

  const handleSubmit = () => {
    // 필수 항목 검증
    if (!workOrderNo || !productName || !targetQuantity || !productionLine || !startDate || !endDate) {
      toast.error('필수 항목 누락', {
        description: '작업지시서 번호, 제품명, 목표 수량, 생산 라인, 시작/종료일을 입력해주세요.',
      });
      return;
    }

    const newWorkOrder: WorkOrder = {
      id: Math.random().toString(36).substr(2, 9),
      workOrderNo,
      productName,
      productCode,
      targetQuantity: parseFloat(targetQuantity),
      unit,
      productionLine,
      startDate,
      endDate,
      priority,
      wasteType,
      targetGrade,
      supervisor,
      notes,
      status: 'pending',
      createdAt: new Date(),
    };

    // localStorage에 저장
    const existingOrders = JSON.parse(localStorage.getItem('work_orders') || '[]');
    const updatedOrders = [...existingOrders, newWorkOrder];
    localStorage.setItem('work_orders', JSON.stringify(updatedOrders));

    toast.success('생산작업 지시 등록 완료', {
      description: `작업지시서 번호: ${workOrderNo}`,
    });

    // 부모 컴포넌트에 저장 완료 알림
    if (onSave) {
      onSave();
    }

    // 초기화
    resetForm();
    onOpenChange(false);
  };

  const resetForm = () => {
    setWorkOrderNo('');
    setProductName('');
    setProductCode('');
    setTargetQuantity('');
    setUnit('ton');
    setProductionLine('');
    setStartDate(undefined);
    setEndDate(undefined);
    setPriority('medium');
    setWasteType('');
    setTargetGrade('');
    setSupervisor('');
    setNotes('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <FileText className="w-6 h-6 text-blue-600" />
            생산작업 지시서 등록
          </DialogTitle>
          <DialogDescription>
            신규 생산작업 지시를 등록하고 라인에 할당합니다.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* 기본 정보 */}
          <Card className="border-blue-200 bg-blue-50/30">
            <CardContent className="pt-6 space-y-4">
              <h3 className="flex items-center gap-2 text-blue-900 mb-4">
                <FileText className="w-5 h-5" />
                기본 정보
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="workOrderNo">
                    작업지시서 번호 <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="workOrderNo"
                      value={workOrderNo}
                      onChange={(e) => setWorkOrderNo(e.target.value)}
                      placeholder="WO-20241102-001"
                    />
                    <Button type="button" variant="outline" onClick={generateWorkOrderNo}>
                      자동 생성
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">우선순위</Label>
                  <Select value={priority} onValueChange={(value: any) => setPriority(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive" className="text-xs">높음</Badge>
                        </div>
                      </SelectItem>
                      <SelectItem value="medium">
                        <div className="flex items-center gap-2">
                          <Badge variant="default" className="text-xs">보통</Badge>
                        </div>
                      </SelectItem>
                      <SelectItem value="low">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">낮음</Badge>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 제품 정보 */}
          <Card className="border-green-200 bg-green-50/30">
            <CardContent className="pt-6 space-y-4">
              <h3 className="flex items-center gap-2 text-green-900 mb-4">
                <Package className="w-5 h-5" />
                제품 정보
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="productName">
                    제품명 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="순환 골재 40mm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productCode">제품 코드</Label>
                  <Input
                    id="productCode"
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                    placeholder="AGG-40-A"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetQuantity">
                    목표 생산량 <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="targetQuantity"
                      type="number"
                      value={targetQuantity}
                      onChange={(e) => setTargetQuantity(e.target.value)}
                      placeholder="100"
                    />
                    <Select value={unit} onValueChange={setUnit}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ton">톤</SelectItem>
                        <SelectItem value="kg">kg</SelectItem>
                        <SelectItem value="m3">m³</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetGrade">목표 등급</Label>
                  <Select value={targetGrade} onValueChange={setTargetGrade}>
                    <SelectTrigger>
                      <SelectValue placeholder="등급 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">A등급 (프리미엄)</SelectItem>
                      <SelectItem value="B">B등급 (표준)</SelectItem>
                      <SelectItem value="C">C등급 (일반)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 생산 계획 */}
          <Card className="border-orange-200 bg-orange-50/30">
            <CardContent className="pt-6 space-y-4">
              <h3 className="flex items-center gap-2 text-orange-900 mb-4">
                <Factory className="w-5 h-5" />
                생산 계획
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="productionLine">
                    생산 라인 <span className="text-red-500">*</span>
                  </Label>
                  <Select value={productionLine} onValueChange={setProductionLine}>
                    <SelectTrigger>
                      <SelectValue placeholder="라인 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A라인">A라인 (26설비)</SelectItem>
                      <SelectItem value="B라인">B라인 (24설비)</SelectItem>
                      <SelectItem value="C라인">C라인 (21설비)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wasteType">투입 폐기물</Label>
                  <Select value={wasteType} onValueChange={setWasteType}>
                    <SelectTrigger>
                      <SelectValue placeholder="폐기물 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="폐콘크리트">폐콘크리트</SelectItem>
                      <SelectItem value="폐아스콘">폐아스콘</SelectItem>
                      <SelectItem value="폐벽돌">폐벽돌</SelectItem>
                      <SelectItem value="혼합건설폐기물">혼합건설폐기물</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>
                    시작일 <span className="text-red-500">*</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? formatDate(startDate) : '날짜 선택'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={startDate} onSelect={setStartDate} />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>
                    종료일 <span className="text-red-500">*</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? formatDate(endDate) : '날짜 선택'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={endDate} onSelect={setEndDate} />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="supervisor">담당 감독자</Label>
                  <Input
                    id="supervisor"
                    value={supervisor}
                    onChange={(e) => setSupervisor(e.target.value)}
                    placeholder="홍길동"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 비고 */}
          <div className="space-y-2">
            <Label htmlFor="notes">특이사항 및 비고</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="작업 시 주의사항, 특수 요구사항 등을 입력하세요..."
              rows={4}
            />
          </div>

          {/* 안내 메시지 */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800">
              <p className="mb-1">
                <strong>작업지시 등록 안내:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>등록된 작업지시는 "작업 진행 현황"에서 확인할 수 있습니다</li>
                <li>생산 라인 담당자가 작업을 시작하면 상태가 "진행중"으로 변경됩니다</li>
                <li>우선순위가 높은 작업은 대시보드에서 강조 표시됩니다</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            취소
          </Button>
          <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
            작업지시 등록
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { Settings, Wrench, AlertTriangle, Package, TrendingUp, Calendar, Clock, CheckCircle2, Info } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Checkbox } from './ui/checkbox';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Card } from './ui/card';
import { EquipmentMasterDialog } from './EquipmentMasterDialog';

interface TPMCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab?: 'inspection' | 'maintenance' | 'failure' | 'parts' | 'oee';
}

export function TPMCreateDialog({ open, onOpenChange, defaultTab = 'inspection' }: TPMCreateDialogProps) {
  const [equipmentMasterOpen, setEquipmentMasterOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[96vw] lg:max-w-[98vw] xl:max-w-[1600px] max-h-[95vh] overflow-y-auto p-4 sm:p-6">
          <DialogHeader className="pb-2">
            <DialogTitle 
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors group"
              onClick={() => setEquipmentMasterOpen(true)}
            >
              <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              <span>TPM 관리 등록</span>
              <span className="text-xs text-gray-400 group-hover:text-blue-500 ml-2">
                (설비 등록하기 클릭)
              </span>
            </DialogTitle>
            <DialogDescription>
              설비 점검, 보전 작업, 고장 이력, 부품 교체, OEE 데이터를 등록하고 관리할 수 있습니다.
            </DialogDescription>
          </DialogHeader>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto gap-2">
            <TabsTrigger value="inspection" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">설비 점검</span>
            </TabsTrigger>
            <TabsTrigger value="maintenance" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <Wrench className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">보전 작업</span>
            </TabsTrigger>
            <TabsTrigger value="failure" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">고장 이력</span>
            </TabsTrigger>
            <TabsTrigger value="parts" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <Package className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">부품 교체</span>
            </TabsTrigger>
            <TabsTrigger value="oee" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <TrendingUp className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">OEE 데이터</span>
            </TabsTrigger>
          </TabsList>

          {/* 설비 점검 */}
          <TabsContent value="inspection">
            <InspectionRegistration />
          </TabsContent>

          {/* 보전 작업 */}
          <TabsContent value="maintenance">
            <MaintenanceRegistration />
          </TabsContent>

          {/* 고장 이력 */}
          <TabsContent value="failure">
            <FailureRegistration />
          </TabsContent>

          {/* 부품 교체 */}
          <TabsContent value="parts">
            <PartsRegistration />
          </TabsContent>

          {/* OEE 데이터 */}
          <TabsContent value="oee">
            <OEERegistration />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>

    <EquipmentMasterDialog 
      open={equipmentMasterOpen} 
      onOpenChange={setEquipmentMasterOpen} 
    />
    </>
  );
}

// 설비 점검 등록
function InspectionRegistration() {
  const [inspectionData, setInspectionData] = useState({
    line: '',
    equipment: '',
    equipmentCode: '',
    inspectionType: '',
    inspectionDate: '',
    inspector: '',
    checklist: [] as { item: string; status: 'good' | 'warning' | 'bad'; note: string }[],
    result: '',
    notes: ''
  });

  const checklistItems = [
    '외관 점검 (균열, 파손)',
    '윤활유 상태 확인',
    '볼트/너트 체결 상태',
    '배관 누유/누수 확인',
    '전기 배선 상태',
    '이상 소음/진동 확인',
    '안전장치 작동 확인',
    '센서/계기 정상 작동'
  ];

  const handleSubmit = () => {
    if (!inspectionData.line || !inspectionData.equipment || !inspectionData.inspectionType || !inspectionData.inspectionDate) {
      toast.error('필수 항목을 모두 입력해주세요');
      return;
    }
    console.log('설비 점검 등록:', inspectionData);
    toast.success('설비 점검이 등록되었습니다');
  };

  return (
    <div className="space-y-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="line">생산 라인 *</Label>
          <Select value={inspectionData.line} onValueChange={(value) => setInspectionData({ ...inspectionData, line: value })}>
            <SelectTrigger>
              <SelectValue placeholder="라인 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">A 라인</SelectItem>
              <SelectItem value="B">B 라인</SelectItem>
              <SelectItem value="C">C 라인</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="equipment">설비명 *</Label>
          <Input
            id="equipment"
            value={inspectionData.equipment}
            onChange={(e) => setInspectionData({ ...inspectionData, equipment: e.target.value })}
            placeholder="예: 파쇄기"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="equipmentCode">설비 코드</Label>
          <Input
            id="equipmentCode"
            value={inspectionData.equipmentCode}
            onChange={(e) => setInspectionData({ ...inspectionData, equipmentCode: e.target.value })}
            placeholder="예: A01-1F/CRUSHER01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="inspectionType">점검 유형 *</Label>
          <Select value={inspectionData.inspectionType} onValueChange={(value) => setInspectionData({ ...inspectionData, inspectionType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="점검 유형 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">일상 점검</SelectItem>
              <SelectItem value="weekly">주간 점검</SelectItem>
              <SelectItem value="monthly">월간 점검</SelectItem>
              <SelectItem value="quarterly">분기 점검</SelectItem>
              <SelectItem value="annual">연간 점검</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="inspectionDate">점검 일시 *</Label>
          <Input
            id="inspectionDate"
            type="datetime-local"
            value={inspectionData.inspectionDate}
            onChange={(e) => setInspectionData({ ...inspectionData, inspectionDate: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="inspector">점검자</Label>
          <Input
            id="inspector"
            value={inspectionData.inspector}
            onChange={(e) => setInspectionData({ ...inspectionData, inspector: e.target.value })}
            placeholder="점검자 이름"
          />
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-base">점검 체크리스트</Label>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%]">점검 항목</TableHead>
                <TableHead className="w-[15%]">양호</TableHead>
                <TableHead className="w-[15%]">주의</TableHead>
                <TableHead className="w-[15%]">불량</TableHead>
                <TableHead className="w-[15%]">비고</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {checklistItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item}</TableCell>
                  <TableCell>
                    <Checkbox className="mx-auto block" />
                  </TableCell>
                  <TableCell>
                    <Checkbox className="mx-auto block" />
                  </TableCell>
                  <TableCell>
                    <Checkbox className="mx-auto block" />
                  </TableCell>
                  <TableCell>
                    <Input placeholder="특이사항" className="h-8 text-xs" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="result">점검 결과</Label>
        <Select value={inspectionData.result} onValueChange={(value) => setInspectionData({ ...inspectionData, result: value })}>
          <SelectTrigger>
            <SelectValue placeholder="점검 결과 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pass">정상 (Pass)</SelectItem>
            <SelectItem value="warning">주의 (Warning)</SelectItem>
            <SelectItem value="fail">불량 (Fail)</SelectItem>
            <SelectItem value="maintenance">보전 필요</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">특이사항</Label>
        <Textarea
          id="notes"
          value={inspectionData.notes}
          onChange={(e) => setInspectionData({ ...inspectionData, notes: e.target.value })}
          placeholder="특이사항이나 추가 조치사항을 입력하세요"
          rows={4}
        />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline">취소</Button>
        <Button onClick={handleSubmit}>점검 기록 저장</Button>
      </div>
    </div>
  );
}

// 보전 작업 등록
function MaintenanceRegistration() {
  const [maintenanceData, setMaintenanceData] = useState({
    line: '',
    equipment: '',
    equipmentCode: '',
    maintenanceType: '',
    workType: '',
    workDate: '',
    startTime: '',
    endTime: '',
    worker: '',
    workContent: '',
    partsUsed: '',
    cost: '',
    result: '',
    notes: ''
  });

  const handleSubmit = () => {
    if (!maintenanceData.line || !maintenanceData.equipment || !maintenanceData.maintenanceType || !maintenanceData.workDate) {
      toast.error('필수 항목을 모두 입력해주세요');
      return;
    }
    console.log('보전 작업 등록:', maintenanceData);
    toast.success('보전 작업이 등록되었습니다');
  };

  return (
    <div className="space-y-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="line">생산 라인 *</Label>
          <Select value={maintenanceData.line} onValueChange={(value) => setMaintenanceData({ ...maintenanceData, line: value })}>
            <SelectTrigger>
              <SelectValue placeholder="라인 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">A 라인</SelectItem>
              <SelectItem value="B">B 라인</SelectItem>
              <SelectItem value="C">C 라인</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="equipment">설비명 *</Label>
          <Input
            id="equipment"
            value={maintenanceData.equipment}
            onChange={(e) => setMaintenanceData({ ...maintenanceData, equipment: e.target.value })}
            placeholder="예: 파쇄기"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="equipmentCode">설비 코드</Label>
          <Input
            id="equipmentCode"
            value={maintenanceData.equipmentCode}
            onChange={(e) => setMaintenanceData({ ...maintenanceData, equipmentCode: e.target.value })}
            placeholder="예: A01-1F/CRUSHER01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="maintenanceType">보전 유형 *</Label>
          <Select value={maintenanceData.maintenanceType} onValueChange={(value) => setMaintenanceData({ ...maintenanceData, maintenanceType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="보전 유형 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="preventive">예방 보전</SelectItem>
              <SelectItem value="predictive">예지 보전</SelectItem>
              <SelectItem value="breakdown">사후 보전</SelectItem>
              <SelectItem value="improvement">개량 보전</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="workType">작업 유형</Label>
          <Select value={maintenanceData.workType} onValueChange={(value) => setMaintenanceData({ ...maintenanceData, workType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="작업 유형 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cleaning">청소/세척</SelectItem>
              <SelectItem value="lubrication">급유/윤활</SelectItem>
              <SelectItem value="adjustment">조정/정렬</SelectItem>
              <SelectItem value="replacement">부품 교체</SelectItem>
              <SelectItem value="repair">수리/보수</SelectItem>
              <SelectItem value="overhaul">오버홀</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="workDate">작업 일자 *</Label>
          <Input
            id="workDate"
            type="date"
            value={maintenanceData.workDate}
            onChange={(e) => setMaintenanceData({ ...maintenanceData, workDate: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="startTime">시작 시간</Label>
          <Input
            id="startTime"
            type="time"
            value={maintenanceData.startTime}
            onChange={(e) => setMaintenanceData({ ...maintenanceData, startTime: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="endTime">종료 시간</Label>
          <Input
            id="endTime"
            type="time"
            value={maintenanceData.endTime}
            onChange={(e) => setMaintenanceData({ ...maintenanceData, endTime: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="worker">작업자</Label>
          <Input
            id="worker"
            value={maintenanceData.worker}
            onChange={(e) => setMaintenanceData({ ...maintenanceData, worker: e.target.value })}
            placeholder="작업자 이름"
          />
        </div>

        <div className="space-y-2 md:col-span-2 lg:col-span-3">
          <Label htmlFor="workContent">작업 내용</Label>
          <Textarea
            id="workContent"
            value={maintenanceData.workContent}
            onChange={(e) => setMaintenanceData({ ...maintenanceData, workContent: e.target.value })}
            placeholder="수행한 작업 내용을 상세히 입력하세요"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="partsUsed">사용 부품</Label>
          <Input
            id="partsUsed"
            value={maintenanceData.partsUsed}
            onChange={(e) => setMaintenanceData({ ...maintenanceData, partsUsed: e.target.value })}
            placeholder="교체/사용한 부품명"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cost">작업 비용 (원)</Label>
          <Input
            id="cost"
            type="number"
            value={maintenanceData.cost}
            onChange={(e) => setMaintenanceData({ ...maintenanceData, cost: e.target.value })}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="result">작업 결과</Label>
          <Select value={maintenanceData.result} onValueChange={(value) => setMaintenanceData({ ...maintenanceData, result: value })}>
            <SelectTrigger>
              <SelectValue placeholder="작업 결과 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="completed">완료</SelectItem>
              <SelectItem value="partial">일부 완료</SelectItem>
              <SelectItem value="pending">보류</SelectItem>
              <SelectItem value="failed">실패</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">특이사항</Label>
        <Textarea
          id="notes"
          value={maintenanceData.notes}
          onChange={(e) => setMaintenanceData({ ...maintenanceData, notes: e.target.value })}
          placeholder="추가 조치사항이나 특이사항을 입력하세요"
          rows={3}
        />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline">취소</Button>
        <Button onClick={handleSubmit}>보전 작업 저장</Button>
      </div>
    </div>
  );
}

// 고장 이력 등록
function FailureRegistration() {
  const [failureData, setFailureData] = useState({
    line: '',
    equipment: '',
    equipmentCode: '',
    failureDate: '',
    discoveryTime: '',
    failureType: '',
    failureCause: '',
    symptom: '',
    failurePart: '',
    stopDuration: '',
    productionLoss: '',
    repairAction: '',
    repairTime: '',
    repairer: '',
    cost: '',
    preventAction: '',
    severity: '',
    notes: ''
  });

  const handleSubmit = () => {
    if (!failureData.line || !failureData.equipment || !failureData.failureDate || !failureData.failureType) {
      toast.error('필수 항목을 모두 입력해주세요');
      return;
    }
    console.log('고장 이력 등록:', failureData);
    toast.success('고장 이력이 등록되었습니다');
  };

  return (
    <div className="space-y-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="line">생산 라인 *</Label>
          <Select value={failureData.line} onValueChange={(value) => setFailureData({ ...failureData, line: value })}>
            <SelectTrigger>
              <SelectValue placeholder="라인 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">A 라인</SelectItem>
              <SelectItem value="B">B 라인</SelectItem>
              <SelectItem value="C">C 라인</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="equipment">설비명 *</Label>
          <Input
            id="equipment"
            value={failureData.equipment}
            onChange={(e) => setFailureData({ ...failureData, equipment: e.target.value })}
            placeholder="예: 파쇄기"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="equipmentCode">설비 코드</Label>
          <Input
            id="equipmentCode"
            value={failureData.equipmentCode}
            onChange={(e) => setFailureData({ ...failureData, equipmentCode: e.target.value })}
            placeholder="예: A01-1F/CRUSHER01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="failureDate">고장 발생 일자 *</Label>
          <Input
            id="failureDate"
            type="date"
            value={failureData.failureDate}
            onChange={(e) => setFailureData({ ...failureData, failureDate: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="discoveryTime">발견 시간</Label>
          <Input
            id="discoveryTime"
            type="time"
            value={failureData.discoveryTime}
            onChange={(e) => setFailureData({ ...failureData, discoveryTime: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="failureType">고장 유형 *</Label>
          <Select value={failureData.failureType} onValueChange={(value) => setFailureData({ ...failureData, failureType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="고장 유형 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mechanical">기계적 고장</SelectItem>
              <SelectItem value="electrical">전기적 고장</SelectItem>
              <SelectItem value="hydraulic">유압 고장</SelectItem>
              <SelectItem value="pneumatic">공압 고장</SelectItem>
              <SelectItem value="control">제어 고장</SelectItem>
              <SelectItem value="sensor">센서 고장</SelectItem>
              <SelectItem value="other">기타</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="failureCause">고장 원인</Label>
          <Select value={failureData.failureCause} onValueChange={(value) => setFailureData({ ...failureData, failureCause: value })}>
            <SelectTrigger>
              <SelectValue placeholder="고장 원인 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wear">마모</SelectItem>
              <SelectItem value="fatigue">피로</SelectItem>
              <SelectItem value="corrosion">부식</SelectItem>
              <SelectItem value="overload">과부하</SelectItem>
              <SelectItem value="lack-lubrication">윤활 부족</SelectItem>
              <SelectItem value="misalignment">정렬 불량</SelectItem>
              <SelectItem value="human-error">작업 실수</SelectItem>
              <SelectItem value="design-flaw">설계 결함</SelectItem>
              <SelectItem value="unknown">원인 미상</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="severity">고장 심각도</Label>
          <Select value={failureData.severity} onValueChange={(value) => setFailureData({ ...failureData, severity: value })}>
            <SelectTrigger>
              <SelectValue placeholder="심각도 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="critical">치명적 (생산 중단)</SelectItem>
              <SelectItem value="major">중대 (성능 저하)</SelectItem>
              <SelectItem value="minor">경미 (일부 기능 제한)</SelectItem>
              <SelectItem value="cosmetic">외관상 (기능 정상)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="failurePart">고장 부위</Label>
          <Input
            id="failurePart"
            value={failureData.failurePart}
            onChange={(e) => setFailureData({ ...failureData, failurePart: e.target.value })}
            placeholder="예: 베어링, 모터 등"
          />
        </div>

        <div className="space-y-2 md:col-span-2 lg:col-span-3">
          <Label htmlFor="symptom">고장 증상</Label>
          <Textarea
            id="symptom"
            value={failureData.symptom}
            onChange={(e) => setFailureData({ ...failureData, symptom: e.target.value })}
            placeholder="고장 발생 시 나타난 증상을 상세히 입력하세요"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="stopDuration">정지 시간 (분)</Label>
          <Input
            id="stopDuration"
            type="number"
            value={failureData.stopDuration}
            onChange={(e) => setFailureData({ ...failureData, stopDuration: e.target.value })}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="productionLoss">생산 손실 (톤)</Label>
          <Input
            id="productionLoss"
            type="number"
            value={failureData.productionLoss}
            onChange={(e) => setFailureData({ ...failureData, productionLoss: e.target.value })}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cost">수리 비용 (원)</Label>
          <Input
            id="cost"
            type="number"
            value={failureData.cost}
            onChange={(e) => setFailureData({ ...failureData, cost: e.target.value })}
            placeholder="0"
          />
        </div>

        <div className="space-y-2 md:col-span-2 lg:col-span-3">
          <Label htmlFor="repairAction">수리 조치 내용</Label>
          <Textarea
            id="repairAction"
            value={failureData.repairAction}
            onChange={(e) => setFailureData({ ...failureData, repairAction: e.target.value })}
            placeholder="수행한 수리 조치 내용을 입력하세요"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="repairTime">수리 완료 시간</Label>
          <Input
            id="repairTime"
            type="datetime-local"
            value={failureData.repairTime}
            onChange={(e) => setFailureData({ ...failureData, repairTime: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="repairer">수리 담당자</Label>
          <Input
            id="repairer"
            value={failureData.repairer}
            onChange={(e) => setFailureData({ ...failureData, repairer: e.target.value })}
            placeholder="수리 담당자 이름"
          />
        </div>

        <div className="space-y-2 md:col-span-2 lg:col-span-3">
          <Label htmlFor="preventAction">재발 방지 대책</Label>
          <Textarea
            id="preventAction"
            value={failureData.preventAction}
            onChange={(e) => setFailureData({ ...failureData, preventAction: e.target.value })}
            placeholder="재발 방지를 위한 대책을 입력하세요"
            rows={3}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">특이사항</Label>
        <Textarea
          id="notes"
          value={failureData.notes}
          onChange={(e) => setFailureData({ ...failureData, notes: e.target.value })}
          placeholder="추가 특이사항을 입력하세요"
          rows={2}
        />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline">취소</Button>
        <Button onClick={handleSubmit} className="bg-red-600 hover:bg-red-700">고장 이력 저장</Button>
      </div>
    </div>
  );
}

// 부품 교체 등록
function PartsRegistration() {
  const [partsData, setPartsData] = useState({
    line: '',
    equipment: '',
    equipmentCode: '',
    partName: '',
    partNumber: '',
    partCategory: '',
    replacementDate: '',
    replacementReason: '',
    oldPartCondition: '',
    oldPartUsageDuration: '',
    newPartManufacturer: '',
    newPartSerial: '',
    quantity: '',
    unitPrice: '',
    totalCost: '',
    worker: '',
    workDuration: '',
    nextReplacementDate: '',
    notes: ''
  });

  const handleSubmit = () => {
    if (!partsData.line || !partsData.equipment || !partsData.partName || !partsData.replacementDate) {
      toast.error('필수 항목을 모두 입력해주세요');
      return;
    }
    console.log('부품 교체 등록:', partsData);
    toast.success('부품 교체 기록이 등록되었습니다');
  };

  return (
    <div className="space-y-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="line">생산 라인 *</Label>
          <Select value={partsData.line} onValueChange={(value) => setPartsData({ ...partsData, line: value })}>
            <SelectTrigger>
              <SelectValue placeholder="라인 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">A 라인</SelectItem>
              <SelectItem value="B">B 라인</SelectItem>
              <SelectItem value="C">C 라인</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="equipment">설비명 *</Label>
          <Input
            id="equipment"
            value={partsData.equipment}
            onChange={(e) => setPartsData({ ...partsData, equipment: e.target.value })}
            placeholder="예: 파쇄기"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="equipmentCode">설비 코드</Label>
          <Input
            id="equipmentCode"
            value={partsData.equipmentCode}
            onChange={(e) => setPartsData({ ...partsData, equipmentCode: e.target.value })}
            placeholder="예: A01-1F/CRUSHER01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="partName">부품명 *</Label>
          <Input
            id="partName"
            value={partsData.partName}
            onChange={(e) => setPartsData({ ...partsData, partName: e.target.value })}
            placeholder="예: 베어링, 벨트 등"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="partNumber">부품 번호</Label>
          <Input
            id="partNumber"
            value={partsData.partNumber}
            onChange={(e) => setPartsData({ ...partsData, partNumber: e.target.value })}
            placeholder="부품 고유 번호"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="partCategory">부품 분류</Label>
          <Select value={partsData.partCategory} onValueChange={(value) => setPartsData({ ...partsData, partCategory: value })}>
            <SelectTrigger>
              <SelectValue placeholder="부품 분류 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bearing">베어링</SelectItem>
              <SelectItem value="belt">벨트</SelectItem>
              <SelectItem value="chain">체인</SelectItem>
              <SelectItem value="motor">모터</SelectItem>
              <SelectItem value="sensor">센서</SelectItem>
              <SelectItem value="valve">밸브</SelectItem>
              <SelectItem value="filter">필터</SelectItem>
              <SelectItem value="seal">씰</SelectItem>
              <SelectItem value="other">기타</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="replacementDate">교체 일자 *</Label>
          <Input
            id="replacementDate"
            type="date"
            value={partsData.replacementDate}
            onChange={(e) => setPartsData({ ...partsData, replacementDate: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="replacementReason">교체 사유</Label>
          <Select value={partsData.replacementReason} onValueChange={(value) => setPartsData({ ...partsData, replacementReason: value })}>
            <SelectTrigger>
              <SelectValue placeholder="교체 사유 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="scheduled">정기 교체</SelectItem>
              <SelectItem value="wear">마모</SelectItem>
              <SelectItem value="failure">고장</SelectItem>
              <SelectItem value="preventive">예방 교체</SelectItem>
              <SelectItem value="upgrade">성능 개선</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="oldPartCondition">구 부품 상태</Label>
          <Select value={partsData.oldPartCondition} onValueChange={(value) => setPartsData({ ...partsData, oldPartCondition: value })}>
            <SelectTrigger>
              <SelectValue placeholder="상태 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal-wear">정상 마모</SelectItem>
              <SelectItem value="abnormal-wear">비정상 마모</SelectItem>
              <SelectItem value="broken">파손</SelectItem>
              <SelectItem value="deformed">변형</SelectItem>
              <SelectItem value="corroded">부식</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="oldPartUsageDuration">구 부품 사용 기간 (일)</Label>
          <Input
            id="oldPartUsageDuration"
            type="number"
            value={partsData.oldPartUsageDuration}
            onChange={(e) => setPartsData({ ...partsData, oldPartUsageDuration: e.target.value })}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="newPartManufacturer">신규 부품 제조사</Label>
          <Input
            id="newPartManufacturer"
            value={partsData.newPartManufacturer}
            onChange={(e) => setPartsData({ ...partsData, newPartManufacturer: e.target.value })}
            placeholder="제조사명"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="newPartSerial">신규 부품 시리얼 번호</Label>
          <Input
            id="newPartSerial"
            value={partsData.newPartSerial}
            onChange={(e) => setPartsData({ ...partsData, newPartSerial: e.target.value })}
            placeholder="시리얼 번호"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity">교체 수량</Label>
          <Input
            id="quantity"
            type="number"
            value={partsData.quantity}
            onChange={(e) => setPartsData({ ...partsData, quantity: e.target.value })}
            placeholder="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="unitPrice">단가 (원)</Label>
          <Input
            id="unitPrice"
            type="number"
            value={partsData.unitPrice}
            onChange={(e) => setPartsData({ ...partsData, unitPrice: e.target.value })}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="totalCost">총 비용 (원)</Label>
          <Input
            id="totalCost"
            type="number"
            value={partsData.totalCost}
            onChange={(e) => setPartsData({ ...partsData, totalCost: e.target.value })}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="worker">작업자</Label>
          <Input
            id="worker"
            value={partsData.worker}
            onChange={(e) => setPartsData({ ...partsData, worker: e.target.value })}
            placeholder="작업자 이름"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="workDuration">작업 소요 시간 (분)</Label>
          <Input
            id="workDuration"
            type="number"
            value={partsData.workDuration}
            onChange={(e) => setPartsData({ ...partsData, workDuration: e.target.value })}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="nextReplacementDate">다음 교체 예정일</Label>
          <Input
            id="nextReplacementDate"
            type="date"
            value={partsData.nextReplacementDate}
            onChange={(e) => setPartsData({ ...partsData, nextReplacementDate: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">특이사항</Label>
        <Textarea
          id="notes"
          value={partsData.notes}
          onChange={(e) => setPartsData({ ...partsData, notes: e.target.value })}
          placeholder="교체 작업 시 특이사항을 입력하세요"
          rows={3}
        />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline">취소</Button>
        <Button onClick={handleSubmit}>부품 교체 기록 저장</Button>
      </div>
    </div>
  );
}

// OEE 데이터 등록
function OEERegistration() {
  const [oeeData, setOeeData] = useState({
    line: '',
    equipment: '',
    date: '',
    shift: '',
    plannedProductionTime: '',
    actualOperatingTime: '',
    downtimeReason: '',
    theoreticalCycleTime: '',
    actualProduction: '',
    plannedProduction: '',
    goodProduction: '',
    defectProduction: '',
    defectReason: '',
    availability: '',
    performance: '',
    quality: '',
    oee: '',
    notes: ''
  });

  const calculateOEE = () => {
    const plannedTime = parseFloat(oeeData.plannedProductionTime) || 0;
    const operatingTime = parseFloat(oeeData.actualOperatingTime) || 0;
    const theoretical = parseFloat(oeeData.theoreticalCycleTime) || 0;
    const actualProd = parseFloat(oeeData.actualProduction) || 0;
    const goodProd = parseFloat(oeeData.goodProduction) || 0;

    if (plannedTime > 0 && theoretical > 0 && actualProd > 0) {
      const availability = (operatingTime / plannedTime) * 100;
      const performance = (theoretical * actualProd / operatingTime) * 100;
      const quality = (goodProd / actualProd) * 100;
      const oee = (availability / 100) * (performance / 100) * (quality / 100) * 100;

      setOeeData({
        ...oeeData,
        availability: availability.toFixed(2),
        performance: performance.toFixed(2),
        quality: quality.toFixed(2),
        oee: oee.toFixed(2)
      });
    }
  };

  const handleSubmit = () => {
    if (!oeeData.line || !oeeData.equipment || !oeeData.date) {
      toast.error('필수 항목을 모두 입력해주세요');
      return;
    }
    console.log('OEE 데이터 등록:', oeeData);
    toast.success('OEE 데이터가 등록되었습니다');
  };

  return (
    <div className="space-y-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="line">생산 라인 *</Label>
          <Select value={oeeData.line} onValueChange={(value) => setOeeData({ ...oeeData, line: value })}>
            <SelectTrigger>
              <SelectValue placeholder="라인 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">A 라인</SelectItem>
              <SelectItem value="B">B 라인</SelectItem>
              <SelectItem value="C">C 라인</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="equipment">설비명 *</Label>
          <Input
            id="equipment"
            value={oeeData.equipment}
            onChange={(e) => setOeeData({ ...oeeData, equipment: e.target.value })}
            placeholder="예: 파쇄기"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">기록 일자 *</Label>
          <Input
            id="date"
            type="date"
            value={oeeData.date}
            onChange={(e) => setOeeData({ ...oeeData, date: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="shift">근무 조</Label>
          <Select value={oeeData.shift} onValueChange={(value) => setOeeData({ ...oeeData, shift: value })}>
            <SelectTrigger>
              <SelectValue placeholder="근무 조 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">주간</SelectItem>
              <SelectItem value="night">야간</SelectItem>
              <SelectItem value="all">전체</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="border-t pt-6 space-y-4">
        <h3 className="font-medium flex items-center gap-2">
          <Clock className="w-4 h-4" />
          가동률 (Availability)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="plannedProductionTime">계획 생산 시간 (분)</Label>
            <Input
              id="plannedProductionTime"
              type="number"
              value={oeeData.plannedProductionTime}
              onChange={(e) => setOeeData({ ...oeeData, plannedProductionTime: e.target.value })}
              placeholder="480"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="actualOperatingTime">실제 가동 시간 (분)</Label>
            <Input
              id="actualOperatingTime"
              type="number"
              value={oeeData.actualOperatingTime}
              onChange={(e) => setOeeData({ ...oeeData, actualOperatingTime: e.target.value })}
              placeholder="450"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="downtimeReason">정지 사유</Label>
            <Input
              id="downtimeReason"
              value={oeeData.downtimeReason}
              onChange={(e) => setOeeData({ ...oeeData, downtimeReason: e.target.value })}
              placeholder="예: 점심시간, 고장 등"
            />
          </div>
        </div>
      </div>

      <div className="border-t pt-6 space-y-4">
        <h3 className="font-medium flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          성능률 (Performance)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="theoreticalCycleTime">이론 사이클타임 (초/개)</Label>
            <Input
              id="theoreticalCycleTime"
              type="number"
              step="0.1"
              value={oeeData.theoreticalCycleTime}
              onChange={(e) => setOeeData({ ...oeeData, theoreticalCycleTime: e.target.value })}
              placeholder="30"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="actualProduction">실제 생산량 (개)</Label>
            <Input
              id="actualProduction"
              type="number"
              value={oeeData.actualProduction}
              onChange={(e) => setOeeData({ ...oeeData, actualProduction: e.target.value })}
              placeholder="850"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="plannedProduction">계획 생산량 (개)</Label>
            <Input
              id="plannedProduction"
              type="number"
              value={oeeData.plannedProduction}
              onChange={(e) => setOeeData({ ...oeeData, plannedProduction: e.target.value })}
              placeholder="900"
            />
          </div>
        </div>
      </div>

      <div className="border-t pt-6 space-y-4">
        <h3 className="font-medium flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          양품률 (Quality)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="goodProduction">양품 생산량 (개)</Label>
            <Input
              id="goodProduction"
              type="number"
              value={oeeData.goodProduction}
              onChange={(e) => setOeeData({ ...oeeData, goodProduction: e.target.value })}
              placeholder="830"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="defectProduction">불량 생산량 (개)</Label>
            <Input
              id="defectProduction"
              type="number"
              value={oeeData.defectProduction}
              onChange={(e) => setOeeData({ ...oeeData, defectProduction: e.target.value })}
              placeholder="20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="defectReason">불량 사유</Label>
            <Input
              id="defectReason"
              value={oeeData.defectReason}
              onChange={(e) => setOeeData({ ...oeeData, defectReason: e.target.value })}
              placeholder="불량 사유"
            />
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="flex justify-between items-center mb-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <h3 className="font-medium flex items-center gap-1.5 cursor-help">
                  OEE 계산 결과
                  <Info className="w-4 h-4 text-gray-400" />
                </h3>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs">
                <p className="font-medium">Overall Equipment Effectiveness</p>
                <p className="text-xs text-gray-400 mt-1">설비종합효율</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button onClick={calculateOEE} variant="outline" size="sm">
            OEE 계산
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">가동률</p>
            <p className="text-2xl font-bold text-blue-600">{oeeData.availability || '0'}%</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">성능률</p>
            <p className="text-2xl font-bold text-green-600">{oeeData.performance || '0'}%</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">양품률</p>
            <p className="text-2xl font-bold text-purple-600">{oeeData.quality || '0'}%</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">OEE</p>
            <p className="text-2xl font-bold text-orange-600">{oeeData.oee || '0'}%</p>
          </div>
        </div>
      </div>

      {/* OEE 상세 설명 */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          OEE 구성 요소 및 평가 기준
        </h3>

        {/* 3가지 지표 설명 */}
        <div className="space-y-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-blue-900 mb-1">1. 가동률 (Availability)</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <code className="bg-blue-50 px-2 py-0.5 rounded text-xs">가동률 = (실제 가동시간 / 계획 생산시간) × 100%</code>
                </p>
                <p className="text-sm text-gray-600 mb-1">• <strong>의미:</strong> 설비가 얼마나 멈추지 않고 가동되었는가?</p>
                <p className="text-sm text-gray-600 mb-1">• <strong>손실 요인:</strong> 고장, 셋업/교체, 계획 정지</p>
                <p className="text-sm text-blue-700">• <strong>예시:</strong> 8시간(480분) 근무 중 실제 가동 450분 → 93.75%</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-green-100">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-green-900 mb-1">2. 성능률 (Performance)</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <code className="bg-green-50 px-2 py-0.5 rounded text-xs">성능률 = (이론 사이클타임 × 실제 생산량 / 실제 가동시간) × 100%</code>
                </p>
                <p className="text-sm text-gray-600 mb-1">• <strong>의미:</strong> 설비가 최대 속도로 가동되었는가?</p>
                <p className="text-sm text-gray-600 mb-1">• <strong>손실 요인:</strong> 속도 저하, 일시 정지, 공회전</p>
                <p className="text-sm text-green-700">• <strong>예시:</strong> 설계 속도로 900개 생산 가능한데 850개만 생산 → 94.44%</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-purple-100">
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 p-2 rounded">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-purple-900 mb-1">3. 양품률 (Quality)</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <code className="bg-purple-50 px-2 py-0.5 rounded text-xs">양품률 = (양품 생산량 / 실제 생산량) × 100%</code>
                </p>
                <p className="text-sm text-gray-600 mb-1">• <strong>의미:</strong> 불량품 없이 양품만 생산했는가?</p>
                <p className="text-sm text-gray-600 mb-1">• <strong>손실 요인:</strong> 불량품, 재작업, 가동 초기 손실</p>
                <p className="text-sm text-purple-700">• <strong>예시:</strong> 850개 생산 중 830개 양품 → 97.65%</p>
              </div>
            </div>
          </div>
        </div>

        {/* OEE 최종 계산 */}
        <div className="bg-white p-4 rounded-lg border-2 border-orange-200 mb-6">
          <h4 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            OEE 최종 계산
          </h4>
          <p className="text-sm text-gray-700 mb-2">
            <code className="bg-orange-50 px-2 py-0.5 rounded">OEE = 가동률 × 성능률 × 양품률</code>
          </p>
          <div className="text-sm text-gray-600 space-y-1">
            <p>• 가동률: 93.75%</p>
            <p>• 성능률: 94.44%</p>
            <p>• 양품률: 97.65%</p>
            <p className="text-orange-700 font-semibold pt-1">• OEE = 0.9375 × 0.9444 × 0.9765 = 86.46%</p>
          </div>
        </div>

        {/* 평가 기준 */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">📈 OEE 평가 기준</h4>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[30%]">OEE 수치</TableHead>
                  <TableHead className="w-[30%]">등급</TableHead>
                  <TableHead className="w-[40%]">평가</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-green-50">
                  <TableCell className="font-medium">85% 이상</TableCell>
                  <TableCell>🏆 World Class</TableCell>
                  <TableCell>세계 최고 수준</TableCell>
                </TableRow>
                <TableRow className="bg-blue-50">
                  <TableCell className="font-medium">70~85%</TableCell>
                  <TableCell>🥇 Good</TableCell>
                  <TableCell>우수</TableCell>
                </TableRow>
                <TableRow className="bg-yellow-50">
                  <TableCell className="font-medium">60~70%</TableCell>
                  <TableCell>🥈 Fair</TableCell>
                  <TableCell>보통</TableCell>
                </TableRow>
                <TableRow className="bg-red-50">
                  <TableCell className="font-medium">60% 미만</TableCell>
                  <TableCell>🥉 Poor</TableCell>
                  <TableCell>개선 필요</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* 하이콘 코리아 활용 사례 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">💡 하이콘 코리아에서 OEE가 중요한 이유</h4>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">📍 골재 생산 라인별 효율 측정</p>
              <div className="bg-white p-3 rounded space-y-1 text-sm">
                <p className="text-green-700">• A 라인 OEE: 87.3% ✅ (파쇄기 성능 우수)</p>
                <p className="text-orange-600">• B 라인 OEE: 72.1% ⚠️ (체인 교체 필요)</p>
                <p className="text-red-600">• C 라인 OEE: 65.8% 🔴 (잦은 고장으로 개선 필요)</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">🎯 실제 활용 사례</p>
              <div className="bg-white p-3 rounded space-y-2 text-sm">
                <div>
                  <p className="font-medium text-gray-800">1. 문제 설비 식별</p>
                  <p className="text-gray-600 ml-3">→ OEE 낮은 라인 → 고장 이력 분석 → 예방 보전 강화</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">2. 개선 효과 측정</p>
                  <p className="text-gray-600 ml-3">→ 베어링 교체 전: OEE 68%</p>
                  <p className="text-green-600 ml-3">→ 베어링 교체 후: OEE 84% (16%p 향상!)</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">3. 생산 계획 수립</p>
                  <p className="text-gray-600 ml-3">→ OEE 85% 라인: 높은 생산량 할당</p>
                  <p className="text-gray-600 ml-3">→ OEE 65% 라인: 보전 시간 확보</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="space-y-2">
        <Label htmlFor="notes">특이사항</Label>
        <Textarea
          id="notes"
          value={oeeData.notes}
          onChange={(e) => setOeeData({ ...oeeData, notes: e.target.value })}
          placeholder="OEE 관련 특이사항을 입력하세요"
          rows={3}
        />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline">취소</Button>
        <Button onClick={handleSubmit}>OEE 데이터 저장</Button>
      </div>
    </div>
  );
}

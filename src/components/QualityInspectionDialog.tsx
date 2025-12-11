import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { 
  ClipboardCheck, 
  Package, 
  Calendar, 
  User, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Target,
  Gauge,
  Sparkles
} from 'lucide-react';
import { toast } from 'sonner';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

interface QualityInspectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave?: () => void;
}

interface QualityInspection {
  id: string;
  inspectionNo: string;
  productName: string;
  batchNumber: string;
  productionLine: string;
  inspectionDate: string;
  inspector: string;
  
  // 검사 항목
  particleSize: string; // 입도
  particleSizeResult: 'pass' | 'fail';
  impurityRate: number; // 불순물 함량 (%)
  impurityResult: 'pass' | 'fail';
  strength: string; // 강도
  strengthResult: 'pass' | 'fail';
  density: string; // 밀도
  densityResult: 'pass' | 'fail';
  moisture: string; // 수분 함량
  moistureResult: 'pass' | 'fail';
  
  // 종합 판정
  overallGrade: 'A' | 'B' | 'C' | 'D';
  overallResult: 'pass' | 'fail';
  quantity: number;
  unit: string;
  
  notes: string;
  correctiveAction?: string;
  createdAt: Date;
}

export function QualityInspectionDialog({ open, onOpenChange, onSave }: QualityInspectionDialogProps) {
  const [inspectionNo, setInspectionNo] = useState('');
  const [productName, setProductName] = useState('');
  const [batchNumber, setBatchNumber] = useState('');
  const [productionLine, setProductionLine] = useState('');
  const [inspector, setInspector] = useState('');
  
  // 검사 항목
  const [particleSize, setParticleSize] = useState('');
  const [particleSizeResult, setParticleSizeResult] = useState<'pass' | 'fail'>('pass');
  const [impurityRate, setImpurityRate] = useState('');
  const [impurityResult, setImpurityResult] = useState<'pass' | 'fail'>('pass');
  const [strength, setStrength] = useState('');
  const [strengthResult, setStrengthResult] = useState<'pass' | 'fail'>('pass');
  const [density, setDensity] = useState('');
  const [densityResult, setDensityResult] = useState<'pass' | 'fail'>('pass');
  const [moisture, setMoisture] = useState('');
  const [moistureResult, setMoistureResult] = useState<'pass' | 'fail'>('pass');
  
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('ton');
  const [notes, setNotes] = useState('');
  const [correctiveAction, setCorrectiveAction] = useState('');

  // 검사번호 자동 생성
  const generateInspectionNo = () => {
    const today = new Date();
    const dateStr = today.toISOString().slice(0, 10).replace(/-/g, '');
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const newInspectionNo = `QI-${dateStr}-${randomNum}`;
    setInspectionNo(newInspectionNo);
  };

  // 종합 등급 자동 계산
  const calculateOverallGrade = (): 'A' | 'B' | 'C' | 'D' => {
    const results = [
      particleSizeResult,
      impurityResult,
      strengthResult,
      densityResult,
      moistureResult
    ];
    
    const passCount = results.filter(r => r === 'pass').length;
    
    if (passCount === 5) return 'A';
    if (passCount === 4) return 'B';
    if (passCount === 3) return 'C';
    return 'D';
  };

  const handleSubmit = () => {
    // 필수 항목 검증
    if (!inspectionNo || !productName || !batchNumber || !productionLine || !inspector) {
      toast.error('필수 항목 누락', {
        description: '검사번호, 제품명, 배치번호, 생산라인, 검사자를 입력해주세요.',
      });
      return;
    }

    const overallGrade = calculateOverallGrade();
    const overallResult = overallGrade === 'D' ? 'fail' : 'pass';

    const newInspection: QualityInspection = {
      id: Math.random().toString(36).substr(2, 9),
      inspectionNo,
      productName,
      batchNumber,
      productionLine,
      inspectionDate: new Date().toISOString(),
      inspector,
      particleSize,
      particleSizeResult,
      impurityRate: parseFloat(impurityRate) || 0,
      impurityResult,
      strength,
      strengthResult,
      density,
      densityResult,
      moisture,
      moistureResult,
      overallGrade,
      overallResult,
      quantity: parseFloat(quantity) || 0,
      unit,
      notes,
      correctiveAction: overallResult === 'fail' ? correctiveAction : undefined,
      createdAt: new Date(),
    };

    // localStorage에 저장
    const existingInspections = JSON.parse(localStorage.getItem('quality_inspections') || '[]');
    const updatedInspections = [...existingInspections, newInspection];
    localStorage.setItem('quality_inspections', JSON.stringify(updatedInspections));

    toast.success('품질검사 등록 완료', {
      description: `검사번호: ${inspectionNo} | 등급: ${overallGrade} | 판정: ${overallResult === 'pass' ? '합격' : '불합격'}`,
    });

    // 페이지 새로고침 트리거
    if (onSave) {
      onSave();
    }

    resetForm();
    onOpenChange(false);
  };

  const resetForm = () => {
    setInspectionNo('');
    setProductName('');
    setBatchNumber('');
    setProductionLine('');
    setInspector('');
    setParticleSize('');
    setParticleSizeResult('pass');
    setImpurityRate('');
    setImpurityResult('pass');
    setStrength('');
    setStrengthResult('pass');
    setDensity('');
    setDensityResult('pass');
    setMoisture('');
    setMoistureResult('pass');
    setQuantity('');
    setUnit('ton');
    setNotes('');
    setCorrectiveAction('');
  };

  const currentGrade = calculateOverallGrade();
  const currentResult = currentGrade === 'D' ? 'fail' : 'pass';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <ClipboardCheck className="w-6 h-6 text-green-600" />
            품질검사 등록
          </DialogTitle>
          <DialogDescription>
            생산된 순환골재의 품질검사 결과를 등록합니다.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* 기본 정보 */}
          <Card className="border-blue-200 bg-blue-50/30">
            <CardContent className="pt-6 space-y-4">
              <h3 className="flex items-center gap-2 text-blue-900 mb-4">
                <Package className="w-5 h-5" />
                검사 대상 정보
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="inspectionNo">
                    검사번호 <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="inspectionNo"
                      value={inspectionNo}
                      onChange={(e) => setInspectionNo(e.target.value)}
                      placeholder="QI-20241102-001"
                    />
                    <Button type="button" variant="outline" size="sm" onClick={generateInspectionNo}>
                      생성
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productName">
                    제품명 <span className="text-red-500">*</span>
                  </Label>
                  <Select value={productName} onValueChange={setProductName}>
                    <SelectTrigger>
                      <SelectValue placeholder="제품 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="순환골재 40mm">순환골재 40mm</SelectItem>
                      <SelectItem value="순환골재 25mm">순환골재 25mm</SelectItem>
                      <SelectItem value="순환골재 13mm">순환골재 13mm</SelectItem>
                      <SelectItem value="순환골재 5mm">순환골재 5mm</SelectItem>
                      <SelectItem value="순환모래">순환모래</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="batchNumber">
                    배치번호 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="batchNumber"
                    value={batchNumber}
                    onChange={(e) => setBatchNumber(e.target.value)}
                    placeholder="BATCH-20241102-A01"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productionLine">
                    생산라인 <span className="text-red-500">*</span>
                  </Label>
                  <Select value={productionLine} onValueChange={setProductionLine}>
                    <SelectTrigger>
                      <SelectValue placeholder="라인 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A라인">A라인</SelectItem>
                      <SelectItem value="B라인">B라인</SelectItem>
                      <SelectItem value="C라인">C라인</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inspector">
                    검사자 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="inspector"
                    value={inspector}
                    onChange={(e) => setInspector(e.target.value)}
                    placeholder="홍길동"
                  />
                </div>

                <div className="space-y-2">
                  <Label>검사 수량</Label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
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
              </div>
            </CardContent>
          </Card>

          {/* 검사 항목 */}
          <Card className="border-green-200 bg-green-50/30">
            <CardContent className="pt-6 space-y-6">
              <h3 className="flex items-center gap-2 text-green-900 mb-4">
                <Gauge className="w-5 h-5" />
                검사 항목
              </h3>

              {/* 입도 (Particle Size) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="particleSize">입도 (Particle Size)</Label>
                  <Input
                    id="particleSize"
                    value={particleSize}
                    onChange={(e) => setParticleSize(e.target.value)}
                    placeholder="예: 40mm, 25-40mm"
                  />
                </div>
                <div className="space-y-2">
                  <Label>판정</Label>
                  <RadioGroup value={particleSizeResult} onValueChange={(v: any) => setParticleSizeResult(v)}>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pass" id="ps-pass" />
                        <Label htmlFor="ps-pass" className="cursor-pointer">합격</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fail" id="ps-fail" />
                        <Label htmlFor="ps-fail" className="cursor-pointer">불합격</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* 불순물 함량 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="impurityRate">불순물 함량 (%)</Label>
                  <Input
                    id="impurityRate"
                    type="number"
                    step="0.1"
                    value={impurityRate}
                    onChange={(e) => setImpurityRate(e.target.value)}
                    placeholder="예: 2.5"
                  />
                </div>
                <div className="space-y-2">
                  <Label>판정</Label>
                  <RadioGroup value={impurityResult} onValueChange={(v: any) => setImpurityResult(v)}>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pass" id="imp-pass" />
                        <Label htmlFor="imp-pass" className="cursor-pointer">합격</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fail" id="imp-fail" />
                        <Label htmlFor="imp-fail" className="cursor-pointer">불합격</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* 강도 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="strength">압축강도 (MPa)</Label>
                  <Input
                    id="strength"
                    value={strength}
                    onChange={(e) => setStrength(e.target.value)}
                    placeholder="예: 35 MPa"
                  />
                </div>
                <div className="space-y-2">
                  <Label>판정</Label>
                  <RadioGroup value={strengthResult} onValueChange={(v: any) => setStrengthResult(v)}>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pass" id="str-pass" />
                        <Label htmlFor="str-pass" className="cursor-pointer">합격</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fail" id="str-fail" />
                        <Label htmlFor="str-fail" className="cursor-pointer">불합격</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* 밀도 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="density">밀도 (g/cm³)</Label>
                  <Input
                    id="density"
                    value={density}
                    onChange={(e) => setDensity(e.target.value)}
                    placeholder="예: 2.5 g/cm³"
                  />
                </div>
                <div className="space-y-2">
                  <Label>판정</Label>
                  <RadioGroup value={densityResult} onValueChange={(v: any) => setDensityResult(v)}>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pass" id="den-pass" />
                        <Label htmlFor="den-pass" className="cursor-pointer">합격</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fail" id="den-fail" />
                        <Label htmlFor="den-fail" className="cursor-pointer">불합격</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* 수분 함량 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="moisture">수분 함량 (%)</Label>
                  <Input
                    id="moisture"
                    value={moisture}
                    onChange={(e) => setMoisture(e.target.value)}
                    placeholder="예: 5.0"
                  />
                </div>
                <div className="space-y-2">
                  <Label>판정</Label>
                  <RadioGroup value={moistureResult} onValueChange={(v: any) => setMoistureResult(v)}>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pass" id="moi-pass" />
                        <Label htmlFor="moi-pass" className="cursor-pointer">합격</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fail" id="moi-fail" />
                        <Label htmlFor="moi-fail" className="cursor-pointer">불합격</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 종합 판정 미리보기 */}
          <Card className={`border-2 ${currentResult === 'pass' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {currentResult === 'pass' ? (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-600" />
                  )}
                  <div>
                    <h3 className={`text-lg ${currentResult === 'pass' ? 'text-green-900' : 'text-red-900'}`}>
                      종합 판정 (자동 계산)
                    </h3>
                    <p className="text-sm text-gray-600">5개 항목 검사 결과 기반</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-600">등급:</span>
                    <Badge className={`text-lg px-4 py-1 ${
                      currentGrade === 'A' ? 'bg-green-600' :
                      currentGrade === 'B' ? 'bg-blue-600' :
                      currentGrade === 'C' ? 'bg-orange-600' : 'bg-red-600'
                    }`}>
                      {currentGrade}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">판정:</span>
                    <Badge variant={currentResult === 'pass' ? 'default' : 'destructive'} className="text-base px-3 py-1">
                      {currentResult === 'pass' ? '합격' : '불합격'}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 불합격 시 개선조치 */}
          {currentResult === 'fail' && (
            <div className="space-y-2">
              <Label htmlFor="correctiveAction" className="text-red-600">
                개선 조치 사항 <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="correctiveAction"
                value={correctiveAction}
                onChange={(e) => setCorrectiveAction(e.target.value)}
                placeholder="불합격 사유 및 개선 조치 계획을 입력하세요..."
                rows={3}
                className="border-red-300"
              />
            </div>
          )}

          {/* 비고 */}
          <div className="space-y-2">
            <Label htmlFor="notes">비고 및 특이사항</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="검사 중 발견된 특이사항이나 추가 코멘트를 입력하세요..."
              rows={3}
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            취소
          </Button>
          <Button 
            onClick={handleSubmit} 
            className={currentResult === 'pass' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}
          >
            {currentResult === 'pass' ? '검사 완료 (합격)' : '검사 완료 (불합격)'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

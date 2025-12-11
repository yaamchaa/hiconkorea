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
  FileCheck, 
  Factory, 
  Package, 
  TrendingUp, 
  Clock, 
  User, 
  AlertCircle,
  Target,
  CheckCircle2,
  Recycle
} from 'lucide-react';
import { toast } from 'sonner';

interface ProductionPerformanceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave?: () => void;
}

interface ProductionPerformance {
  id: string;
  recordNo: string;
  date: string;
  shift: 'day' | 'night';
  productionLine: string;
  
  // 투입 정보
  wasteType: string;
  wasteQuantity: number;
  wasteUnit: string;
  
  // 생산 정보
  productName: string;
  productQuantity: number;
  productUnit: string;
  qualityGrade: 'A' | 'B' | 'C';
  
  // 효율 정보
  conversionRate: number; // %
  productionTime: number; // 분
  downtime: number; // 분
  defectQuantity: number;
  
  // 담당자 정보
  operator: string;
  supervisor: string;
  
  notes: string;
  createdAt: Date;
}

export function ProductionPerformanceDialog({ open, onOpenChange, onSave }: ProductionPerformanceDialogProps) {
  const [recordNo, setRecordNo] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [shift, setShift] = useState<'day' | 'night'>('day');
  const [productionLine, setProductionLine] = useState('');
  
  const [wasteType, setWasteType] = useState('');
  const [wasteQuantity, setWasteQuantity] = useState('');
  const [wasteUnit, setWasteUnit] = useState('ton');
  
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productUnit, setProductUnit] = useState('ton');
  const [qualityGrade, setQualityGrade] = useState<'A' | 'B' | 'C'>('A');
  
  const [productionTime, setProductionTime] = useState('');
  const [downtime, setDowntime] = useState('');
  const [defectQuantity, setDefectQuantity] = useState('');
  
  const [operator, setOperator] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [notes, setNotes] = useState('');

  // 실적 번호 자동 생성
  const generateRecordNo = () => {
    const today = new Date();
    const dateStr = today.toISOString().slice(0, 10).replace(/-/g, '');
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const newRecordNo = `PR-${dateStr}-${randomNum}`;
    setRecordNo(newRecordNo);
  };

  // 전환율 자동 계산
  const calculateConversionRate = (): number => {
    const waste = parseFloat(wasteQuantity);
    const product = parseFloat(productQuantity);
    
    if (!waste || !product || waste === 0) return 0;
    
    return (product / waste) * 100;
  };

  const conversionRate = calculateConversionRate();

  const handleSubmit = () => {
    // 필수 항목 검증
    if (!recordNo || !productionLine || !wasteType || !wasteQuantity || !productName || !productQuantity || !productionTime || !operator) {
      toast.error('필수 항목 누락', {
        description: '모든 필수 항목(*)을 입력해주세요.',
      });
      return;
    }

    const newPerformance: ProductionPerformance = {
      id: Math.random().toString(36).substr(2, 9),
      recordNo,
      date,
      shift,
      productionLine,
      wasteType,
      wasteQuantity: parseFloat(wasteQuantity),
      wasteUnit,
      productName,
      productQuantity: parseFloat(productQuantity),
      productUnit,
      qualityGrade,
      conversionRate,
      productionTime: parseFloat(productionTime),
      downtime: parseFloat(downtime) || 0,
      defectQuantity: parseFloat(defectQuantity) || 0,
      operator,
      supervisor,
      notes,
      createdAt: new Date(),
    };

    // localStorage에 저장
    const existingRecords = JSON.parse(localStorage.getItem('production_performance') || '[]');
    const updatedRecords = [...existingRecords, newPerformance];
    localStorage.setItem('production_performance', JSON.stringify(updatedRecords));

    toast.success('생산 실적 등록 완료', {
      description: `${productName} ${productQuantity}${productUnit} 생산 | 전환율 ${conversionRate.toFixed(1)}%`,
    });

    // 페이지 새로고침 트리거
    if (onSave) {
      onSave();
    }

    resetForm();
    onOpenChange(false);
  };

  const resetForm = () => {
    setRecordNo('');
    setDate(new Date().toISOString().slice(0, 10));
    setShift('day');
    setProductionLine('');
    setWasteType('');
    setWasteQuantity('');
    setWasteUnit('ton');
    setProductName('');
    setProductQuantity('');
    setProductUnit('ton');
    setQualityGrade('A');
    setProductionTime('');
    setDowntime('');
    setDefectQuantity('');
    setOperator('');
    setSupervisor('');
    setNotes('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <FileCheck className="w-6 h-6 text-green-600" />
            생산 실적 입력
          </DialogTitle>
          <DialogDescription>
            일일 생산 실적을 입력하고 전환율을 자동으로 계산합니다.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* 기본 정보 */}
          <Card className="border-blue-200 bg-blue-50/30">
            <CardContent className="pt-6 space-y-4">
              <h3 className="flex items-center gap-2 text-blue-900 mb-4">
                <Clock className="w-5 h-5" />
                기본 정보
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="recordNo">
                    실적 번호 <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="recordNo"
                      value={recordNo}
                      onChange={(e) => setRecordNo(e.target.value)}
                      placeholder="PR-20241102-001"
                    />
                    <Button type="button" variant="outline" size="sm" onClick={generateRecordNo}>
                      생성
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">
                    생산일자 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="shift">작업 교대</Label>
                  <Select value={shift} onValueChange={(value: any) => setShift(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">
                        <div className="flex items-center gap-2">
                          <Badge variant="default" className="text-xs bg-yellow-500">주간</Badge>
                          <span className="text-xs text-gray-600">08:00 - 17:00</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="night">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs bg-blue-800 text-white">야간</Badge>
                          <span className="text-xs text-gray-600">20:00 - 05:00</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-3">
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
              </div>
            </CardContent>
          </Card>

          {/* 투입 정보 */}
          <Card className="border-orange-200 bg-orange-50/30">
            <CardContent className="pt-6 space-y-4">
              <h3 className="flex items-center gap-2 text-orange-900 mb-4">
                <Recycle className="w-5 h-5" />
                투입 폐기물 정보
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="wasteType">
                    폐기물 종류 <span className="text-red-500">*</span>
                  </Label>
                  <Select value={wasteType} onValueChange={setWasteType}>
                    <SelectTrigger>
                      <SelectValue placeholder="폐기물 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="폐콘크리트">폐콘크리트</SelectItem>
                      <SelectItem value="폐아스콘">폐아스콘</SelectItem>
                      <SelectItem value="폐벽돌">폐벽돌</SelectItem>
                      <SelectItem value="혼합건설폐기물">혼합건설폐기물</SelectItem>
                      <SelectItem value="폐타일">폐타일</SelectItem>
                      <SelectItem value="폐석재">폐석재</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wasteQuantity">
                    투입량 <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="wasteQuantity"
                      type="number"
                      step="0.1"
                      value={wasteQuantity}
                      onChange={(e) => setWasteQuantity(e.target.value)}
                      placeholder="100.0"
                    />
                    <Select value={wasteUnit} onValueChange={setWasteUnit}>
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

          {/* 생산 정보 */}
          <Card className="border-green-200 bg-green-50/30">
            <CardContent className="pt-6 space-y-4">
              <h3 className="flex items-center gap-2 text-green-900 mb-4">
                <Package className="w-5 h-5" />
                생산 제품 정보
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <Label htmlFor="productQuantity">
                    생산량 <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="productQuantity"
                      type="number"
                      step="0.1"
                      value={productQuantity}
                      onChange={(e) => setProductQuantity(e.target.value)}
                      placeholder="85.0"
                    />
                    <Select value={productUnit} onValueChange={setProductUnit}>
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
                  <Label htmlFor="qualityGrade">품질 등급</Label>
                  <Select value={qualityGrade} onValueChange={(value: any) => setQualityGrade(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-600 text-white text-xs">A</Badge>
                          <span className="text-xs text-gray-600">프리미엄</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="B">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-600 text-white text-xs">B</Badge>
                          <span className="text-xs text-gray-600">표준</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="C">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-orange-600 text-white text-xs">C</Badge>
                          <span className="text-xs text-gray-600">일반</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 전환율 표시 */}
          {wasteQuantity && productQuantity && (
            <Card className={`border-2 ${
              conversionRate >= 85 ? 'border-green-500 bg-green-50' :
              conversionRate >= 75 ? 'border-blue-500 bg-blue-50' :
              conversionRate >= 60 ? 'border-orange-500 bg-orange-50' :
              'border-red-500 bg-red-50'
            }`}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingUp className={`w-8 h-8 ${
                      conversionRate >= 85 ? 'text-green-600' :
                      conversionRate >= 75 ? 'text-blue-600' :
                      conversionRate >= 60 ? 'text-orange-600' :
                      'text-red-600'
                    }`} />
                    <div>
                      <h3 className={`text-lg ${
                        conversionRate >= 85 ? 'text-green-900' :
                        conversionRate >= 75 ? 'text-blue-900' :
                        conversionRate >= 60 ? 'text-orange-900' :
                        'text-red-900'
                      }`}>
                        전환율 (자동 계산)
                      </h3>
                      <p className="text-sm text-gray-600">생산량 ÷ 투입량 × 100</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-4xl ${
                      conversionRate >= 85 ? 'text-green-600' :
                      conversionRate >= 75 ? 'text-blue-600' :
                      conversionRate >= 60 ? 'text-orange-600' :
                      'text-red-600'
                    }`}>
                      {conversionRate.toFixed(1)}%
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {conversionRate >= 85 ? '우수' :
                       conversionRate >= 75 ? '양호' :
                       conversionRate >= 60 ? '보통' : '개선 필요'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 생산 효율 정보 */}
          <Card className="border-purple-200 bg-purple-50/30">
            <CardContent className="pt-6 space-y-4">
              <h3 className="flex items-center gap-2 text-purple-900 mb-4">
                <Target className="w-5 h-5" />
                생산 효율 정보
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="productionTime">
                    생산 시간 (분) <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="productionTime"
                    type="number"
                    value={productionTime}
                    onChange={(e) => setProductionTime(e.target.value)}
                    placeholder="480"
                  />
                  <p className="text-xs text-gray-500">실제 생산에 소요된 시간</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="downtime">비가동 시간 (분)</Label>
                  <Input
                    id="downtime"
                    type="number"
                    value={downtime}
                    onChange={(e) => setDowntime(e.target.value)}
                    placeholder="30"
                  />
                  <p className="text-xs text-gray-500">고장, 점검 등으로 인한 중단</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="defectQuantity">불량품 (톤)</Label>
                  <Input
                    id="defectQuantity"
                    type="number"
                    step="0.1"
                    value={defectQuantity}
                    onChange={(e) => setDefectQuantity(e.target.value)}
                    placeholder="2.5"
                  />
                  <p className="text-xs text-gray-500">품질 기준 미달</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 담당자 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="operator">
                작업자 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="operator"
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
                placeholder="홍길동"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="supervisor">관리 감독자</Label>
              <Input
                id="supervisor"
                value={supervisor}
                onChange={(e) => setSupervisor(e.target.value)}
                placeholder="김철수"
              />
            </div>
          </div>

          {/* 비고 */}
          <div className="space-y-2">
            <Label htmlFor="notes">비고 및 특이사항</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="생산 중 발생한 특이사항, 개선 필요 사항 등을 입력하세요..."
              rows={3}
            />
          </div>

          {/* 안내 메시지 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="mb-1">
                <strong>생산 실적 입력 안내:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>투입량과 생산량을 입력하면 전환율이 자동으로 계산됩니다</li>
                <li>전환율 85% 이상은 우수, 75% 이상은 양호, 60% 이상은 보통입니다</li>
                <li>등록된 실적은 통계 리포트에서 확인할 수 있습니다</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            취소
          </Button>
          <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            실적 등록
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

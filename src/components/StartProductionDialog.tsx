import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Play, Factory, Recycle, Clock, AlertTriangle } from 'lucide-react';

interface WasteInventory {
  id: string;
  waste_type: string;
  quantity: number;
  location: string;
  received_date: string;
  supplier: string;
  status: 'pending' | 'processing' | 'processed';
}

interface StartProductionDialogProps {
  waste: WasteInventory | null;
  open: boolean;
  onClose: () => void;
  onStartProduction: (wasteId: string, productionLine: string, aggregateType: string, estimatedDuration: number) => void;
}

export function StartProductionDialog({ waste, open, onClose, onStartProduction }: StartProductionDialogProps) {
  const [productionLine, setProductionLine] = useState('');
  const [aggregateType, setAggregateType] = useState('');
  const [estimatedDuration, setEstimatedDuration] = useState('120');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleSubmitClick = () => {
    if (!waste || !productionLine || !aggregateType) return;
    setShowConfirmDialog(true);
  };

  const handleConfirm = () => {
    if (!waste) return;
    
    onStartProduction(waste.id, productionLine, aggregateType, parseInt(estimatedDuration));
    
    // 초기화
    setProductionLine('');
    setAggregateType('');
    setEstimatedDuration('120');
    setShowConfirmDialog(false);
    onClose();
  };

  if (!waste) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Play className="w-5 h-5 text-green-600" />
              생산 시작
            </DialogTitle>
            <DialogDescription>
              {waste.waste_type} ({waste.id})를 생산 라인에 투입합니다
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* 폐기물 정보 요약 */}
            <div className="bg-slate-50 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">폐기물 종류</span>
                <span className="font-medium">{waste.waste_type}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">재고량</span>
                <span className="font-medium text-orange-600">{waste.quantity.toLocaleString()}톤</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">보관위치</span>
                <span className="font-medium">{waste.location}</span>
              </div>
            </div>

            {/* 생산 라인 선택 */}
            <div className="space-y-2">
              <Label htmlFor="production-line" className="flex items-center gap-2">
                <Factory className="w-4 h-4" />
                생산 라인
              </Label>
              <Select value={productionLine} onValueChange={setProductionLine}>
                <SelectTrigger id="production-line">
                  <SelectValue placeholder="라인을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A라인">A라인 - 대형 크러셔</SelectItem>
                  <SelectItem value="B라인">B라인 - 중형 크러셔</SelectItem>
                  <SelectItem value="C라인">C라인 - 소형 크러셔</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 생산 골재 유형 선택 */}
            <div className="space-y-2">
              <Label htmlFor="aggregate-type" className="flex items-center gap-2">
                <Recycle className="w-4 h-4" />
                생산할 순환골재
              </Label>
              <Select value={aggregateType} onValueChange={setAggregateType}>
                <SelectTrigger id="aggregate-type">
                  <SelectValue placeholder="골재 유형을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="순환골재 40mm">순환골재 40mm</SelectItem>
                  <SelectItem value="순환골재 25mm">순환골재 25mm</SelectItem>
                  <SelectItem value="순환 쇄석">순환 쇄석</SelectItem>
                  <SelectItem value="순환 잔골재">순환 잔골재</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 예상 생산 시간 */}
            <div className="space-y-2">
              <Label htmlFor="duration" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                예상 생산 시간 (분)
              </Label>
              <Input
                id="duration"
                type="number"
                value={estimatedDuration}
                onChange={(e) => setEstimatedDuration(e.target.value)}
                min="30"
                max="300"
                step="10"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              취소
            </Button>
            <Button 
              onClick={handleSubmitClick}
              disabled={!productionLine || !aggregateType}
              className="gap-2"
            >
              <Play className="w-4 h-4" />
              생산 시작
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 생산 시작 확인 다이얼로그 */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              생산을 시작하시겠습니까?
            </AlertDialogTitle>
            <AlertDialogDescription className="space-y-3">
              <div className="text-gray-700">
                다음 내용으로 생산을 시작합니다:
              </div>
              <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">폐기물</span>
                  <span className="font-medium text-gray-900">{waste.waste_type} ({waste.id})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">투입량</span>
                  <span className="font-medium text-orange-600">{waste.quantity.toLocaleString()}톤</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">생산 라인</span>
                  <span className="font-medium text-blue-600">{productionLine}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">생산 골재</span>
                  <span className="font-medium text-green-600">{aggregateType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">예상 시간</span>
                  <span className="font-medium text-gray-900">{estimatedDuration}분</span>
                </div>
              </div>
              <div className="text-gray-500 text-sm">
                생산 시작 후에는 취소할 수 없습니다.
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirm} className="gap-2 bg-green-600 hover:bg-green-700">
              <Play className="w-4 h-4" />
              확인 - 생산 시작
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { X, Factory, TrendingUp, Truck, FileText, Clock, Package, AlertTriangle, User } from 'lucide-react';
import { Button } from './ui/button';

interface ProductionRecord {
  id: string;
  date: string;
  time: string;
  line_name: string;
  waste_input_type: string;
  waste_input_quantity: number;
  aggregate_output_type: string;
  aggregate_output_quantity: number;
  conversion_rate: number;
  quality_grade: 'A' | 'B' | 'C';
  duration: number;
  waste_id?: string;
}

interface DeliveryInfo {
  vehicle_number: string;
  transport_company: string;
  departure_time: string;
  arrival_time: string;
  transported_amount: number;
  driver_name?: string;
}

interface WasteInventory {
  id: string;
  waste_type: string;
  quantity: number;
  location: string;
  received_date: string;
  supplier: string;
  status: 'pending' | 'processing' | 'processed';
  production_date?: string;
  production_time?: string;
  production_line?: string;
  production_aggregate_type?: string;
  production_duration?: number;
  contract_number?: string;
  delivery_batch?: string;
  predicted_supply_amount?: number;
  deliveries?: DeliveryInfo[];
}

interface WasteDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  waste: WasteInventory | null;
  productionRecords: ProductionRecord[];
}

export function WasteDetailDialog({ open, onOpenChange, waste, productionRecords }: WasteDetailDialogProps) {
  if (!waste) return null;

  // 해당 폐기물의 생산 이력 필터링
  const wasteProductions = productionRecords.filter(record => record.waste_id === waste.id);

  // 총 투입량 계산
  const totalInputQuantity = wasteProductions.reduce((sum, record) => sum + record.waste_input_quantity, 0);
  
  // 총 생산량 계산
  const totalOutputQuantity = wasteProductions.reduce((sum, record) => sum + record.aggregate_output_quantity, 0);
  
  // 평균 전환율 계산
  const avgConversionRate = wasteProductions.length > 0
    ? Math.round(wasteProductions.reduce((sum, record) => sum + record.conversion_rate, 0) / wasteProductions.length)
    : 0;

  // 실제 운송량 계산 (모든 차량의 합)
  const actualSupplyAmount = waste.deliveries?.reduce((sum, delivery) => sum + delivery.transported_amount, 0) || 0;
  
  // 예측량 대비 차이
  const supplyDifference = waste.predicted_supply_amount 
    ? actualSupplyAmount - waste.predicted_supply_amount 
    : 0;
  
  const supplyDifferencePercent = waste.predicted_supply_amount && waste.predicted_supply_amount > 0
    ? ((supplyDifference / waste.predicted_supply_amount) * 100).toFixed(1)
    : '0.0';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const getGradeBadge = (grade: string) => {
    const gradeConfig: Record<string, { color: string; label: string }> = {
      A: { color: 'bg-green-100 text-green-700 border-green-200', label: 'A급' },
      B: { color: 'bg-blue-100 text-blue-700 border-blue-200', label: 'B급' },
      C: { color: 'bg-gray-100 text-gray-700 border-gray-200', label: 'C급' }
    };
    
    const config = gradeConfig[grade] || { color: 'bg-gray-100 text-gray-700', label: grade };
    
    return (
      <Badge variant="outline" className={config.color}>
        {config.label}
      </Badge>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] lg:max-w-[1200px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl">폐기물 상세 정보</DialogTitle>
              <DialogDescription>
                일련번호 {waste.id} | {waste.waste_type}
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* 폐기물 기본 정보 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <div className="text-sm text-gray-600">총 재고량</div>
            <div className="text-xl mt-1">{waste.quantity.toLocaleString()}톤</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">보관위치</div>
            <div className="text-xl mt-1">{waste.location}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">반입일</div>
            <div className="text-xl mt-1">{formatDate(waste.received_date)}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">공급업체</div>
            <div className="text-xl mt-1">{waste.supplier}</div>
          </div>
        </div>

        {/* 공급 및 운송 정보 (올바로 시스템 연동 데이터) */}
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-3">
            <Truck className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg">공급 및 운송 정보</h3>
            <Badge variant="outline" className="ml-auto bg-blue-50 text-blue-700 border-blue-200">
              올바로 시스템 연동
            </Badge>
          </div>
          
          {/* 계약 및 공급량 요약 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="p-4 border rounded-lg bg-white">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <FileText className="w-4 h-4" />
                계약 정보
              </div>
              <div className="text-lg">{waste.contract_number || '-'}</div>
              <div className="text-sm text-gray-500 mt-1">
                배송 {waste.delivery_batch || '-'}
              </div>
            </div>
            <div className="p-4 border rounded-lg bg-white">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Package className="w-4 h-4" />
                올바로 예측량
              </div>
              <div className="text-lg text-blue-600">
                {waste.predicted_supply_amount ? `${waste.predicted_supply_amount.toLocaleString()}톤` : '-'}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                전일 저녁 전달
              </div>
            </div>
            <div className="p-4 border rounded-lg bg-white">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Truck className="w-4 h-4" />
                실제 운송량
              </div>
              <div className="text-lg text-green-600">
                {actualSupplyAmount.toLocaleString()}톤
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {waste.deliveries?.length || 0}대 차량
              </div>
            </div>
            <div className="p-4 border rounded-lg bg-white">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <TrendingUp className="w-4 h-4" />
                예측 차이
              </div>
              <div className={`text-lg ${supplyDifference >= 0 ? 'text-green-600' : 'text-orange-600'}`}>
                {supplyDifference >= 0 ? '+' : ''}{supplyDifference.toLocaleString()}톤
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {supplyDifference >= 0 ? '+' : ''}{supplyDifferencePercent}%
              </div>
            </div>
          </div>

          {/* 차량별 운송 내역 */}
          {waste.deliveries && waste.deliveries.length > 0 && (
            <div className="mt-4">
              <h4 className="mb-3">차량별 운송 내역</h4>
              <div className="border rounded-lg overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="whitespace-nowrap">차량 번호</TableHead>
                      <TableHead className="whitespace-nowrap">운송 회사</TableHead>
                      <TableHead className="whitespace-nowrap">운전기사</TableHead>
                      <TableHead className="whitespace-nowrap">출발 시간</TableHead>
                      <TableHead className="whitespace-nowrap">도착 시간</TableHead>
                      <TableHead className="text-right whitespace-nowrap">운송량</TableHead>
                      <TableHead className="text-right whitespace-nowrap">비율</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {waste.deliveries.map((delivery, index) => {
                      const deliveryPercent = ((delivery.transported_amount / actualSupplyAmount) * 100).toFixed(1);
                      return (
                        <TableRow key={`${delivery.vehicle_number}-${index}`}>
                          <TableCell className="whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <Truck className="w-4 h-4 text-gray-400" />
                              {delivery.vehicle_number}
                            </div>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            {delivery.transport_company}
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <User className="w-3 h-3 text-gray-400" />
                              {delivery.driver_name || '-'}
                            </div>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            <div className="text-sm">{delivery.departure_time}</div>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            <div className="text-sm">{delivery.arrival_time}</div>
                          </TableCell>
                          <TableCell className="text-right whitespace-nowrap">
                            <span className="text-green-600">
                              {delivery.transported_amount.toLocaleString()}톤
                            </span>
                          </TableCell>
                          <TableCell className="text-right whitespace-nowrap">
                            <span className="text-sm text-gray-600">{deliveryPercent}%</span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    <TableRow className="bg-gray-50">
                      <TableCell colSpan={5} className="text-right">
                        <strong>총 운송량</strong>
                      </TableCell>
                      <TableCell className="text-right">
                        <strong className="text-green-600">{actualSupplyAmount.toLocaleString()}톤</strong>
                      </TableCell>
                      <TableCell className="text-right">
                        <strong>100%</strong>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {/* 예측 vs 실제 비교 안내 */}
          {waste.predicted_supply_amount && (
            <div className={`mt-3 p-3 rounded-lg border ${
              Math.abs(supplyDifference) <= waste.predicted_supply_amount * 0.1
                ? 'bg-green-50 border-green-200'
                : 'bg-yellow-50 border-yellow-200'
            }`}>
              <div className="flex items-start gap-2">
                {Math.abs(supplyDifference) <= waste.predicted_supply_amount * 0.1 ? (
                  <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                )}
                <div className={`text-sm ${
                  Math.abs(supplyDifference) <= waste.predicted_supply_amount * 0.1
                    ? 'text-green-800'
                    : 'text-yellow-800'
                }`}>
                  <strong>
                    {Math.abs(supplyDifference) <= waste.predicted_supply_amount * 0.1
                      ? '예측 정확도 우수:'
                      : '예측 차이 발생:'}
                  </strong>{' '}
                  올바로 시스템 예측량 대비 실제 운송량이 {supplyDifference >= 0 ? '초과' : '부족'}되었습니다.
                  (차이: {Math.abs(supplyDifference).toLocaleString()}톤, {Math.abs(parseFloat(supplyDifferencePercent))}%)
                </div>
              </div>
            </div>
          )}

          <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="text-sm text-blue-800">
              <strong>참고:</strong> 공급 및 운송 정보는 올바로 시스템에서 매일 자동 업데이트됩니다. 예측량은 전일 저녁에 전달되며, 실제 운송량과 다소 차이가 있을 수 있습니다.
            </div>
          </div>
        </div>

        {/* 생산 현황 요약 */}
        {wasteProductions.length > 0 ? (
          <>
            <div className="mt-4">
              <h3 className="text-lg mb-3">생산 현황 요약</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Factory className="w-4 h-4" />
                    총 투입량
                  </div>
                  <div className="text-2xl">{totalInputQuantity.toLocaleString()}톤</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {wasteProductions.length}개 라인에 분산
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <TrendingUp className="w-4 h-4" />
                    총 생산량
                  </div>
                  <div className="text-2xl text-green-600">{totalOutputQuantity.toLocaleString()}톤</div>
                  <div className="text-sm text-gray-500 mt-1">
                    순환골재 생산
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <TrendingUp className="w-4 h-4" />
                    평균 전환율
                  </div>
                  <div className="text-2xl text-blue-600">{avgConversionRate}%</div>
                  <div className="text-sm text-gray-500 mt-1">
                    전체 평균 효율
                  </div>
                </div>
              </div>
            </div>

            {/* 라인별 생산 이력 */}
            <div className="mt-4">
              <h3 className="text-lg mb-3">라인별 생산 이력</h3>
              <div className="border rounded-lg overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="whitespace-nowrap">생산 일시</TableHead>
                      <TableHead className="whitespace-nowrap">투입 라인</TableHead>
                      <TableHead className="text-right whitespace-nowrap">투입량</TableHead>
                      <TableHead className="whitespace-nowrap">생산 제품</TableHead>
                      <TableHead className="text-right whitespace-nowrap">생산량</TableHead>
                      <TableHead className="text-right whitespace-nowrap">전환율</TableHead>
                      <TableHead className="whitespace-nowrap">품질 등급</TableHead>
                      <TableHead className="text-right whitespace-nowrap">생산 시간</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {wasteProductions.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell className="whitespace-nowrap">
                          <div className="text-sm">
                            {formatDate(record.date)}
                          </div>
                          <div className="text-xs text-gray-500">{record.time}</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 whitespace-nowrap">
                            {record.line_name}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap">
                          {record.waste_input_quantity.toLocaleString()}톤
                        </TableCell>
                        <TableCell className="whitespace-nowrap">
                          <div className="text-sm">{record.aggregate_output_type}</div>
                        </TableCell>
                        <TableCell className="text-right text-green-600 whitespace-nowrap">
                          {record.aggregate_output_quantity.toLocaleString()}톤
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap">
                          <span className="text-blue-600">{record.conversion_rate}%</span>
                        </TableCell>
                        <TableCell>
                          {getGradeBadge(record.quality_grade)}
                        </TableCell>
                        <TableCell className="text-right text-sm text-gray-600 whitespace-nowrap">
                          {record.duration}분
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* 잔여 재고 정보 */}
            {waste.quantity > totalInputQuantity && (
              <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-yellow-800">
                    <strong>잔여 재고:</strong> {(waste.quantity - totalInputQuantity).toLocaleString()}톤
                  </div>
                  <div className="text-xs text-yellow-600">
                    (투입 대기중)
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="mt-4 p-6 text-center border-2 border-dashed rounded-lg">
            <Factory className="w-12 h-12 mx-auto text-gray-300 mb-3" />
            <div className="text-gray-500">아직 생산 라인에 투입되지 않은 폐기물입니다.</div>
            <div className="text-sm text-gray-400 mt-1">생산 라인에 투입되면 이력이 여기에 표시됩니다.</div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

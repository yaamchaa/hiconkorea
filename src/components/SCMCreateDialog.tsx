import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { ShoppingCart, Package, Truck, Building2, Boxes } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface SCMCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab?: 'order' | 'inout' | 'delivery' | 'supplier' | 'inventory';
}

export function SCMCreateDialog({ open, onOpenChange, defaultTab = 'order' }: SCMCreateDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[96vw] lg:max-w-[98vw] xl:max-w-[1600px] max-h-[95vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="pb-2">
          <DialogTitle className="flex items-center gap-2">
            SCM 관리 등록
          </DialogTitle>
          <DialogDescription>
            발주/수주, 입출고, 배송, 공급업체, 재고 정보를 등록할 수 있습니다.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto gap-2">
            <TabsTrigger value="order" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <ShoppingCart className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">발주/수주 현황</span>
            </TabsTrigger>
            <TabsTrigger value="inout" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <Package className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">입출고 내역</span>
            </TabsTrigger>
            <TabsTrigger value="delivery" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <Truck className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">배송 추적</span>
            </TabsTrigger>
            <TabsTrigger value="supplier" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <Building2 className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">공급업체 관리</span>
            </TabsTrigger>
            <TabsTrigger value="inventory" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <Boxes className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">재고 현황</span>
            </TabsTrigger>
          </TabsList>

          {/* 발주/수주 현황 */}
          <TabsContent value="order">
            <OrderRegistration />
          </TabsContent>

          {/* 입출고 내역 */}
          <TabsContent value="inout">
            <InOutRegistration />
          </TabsContent>

          {/* 배송 추적 */}
          <TabsContent value="delivery">
            <DeliveryRegistration />
          </TabsContent>

          {/* 공급업체 관리 */}
          <TabsContent value="supplier">
            <SupplierRegistration />
          </TabsContent>

          {/* 재고 현황 */}
          <TabsContent value="inventory">
            <InventoryRegistration />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

// 발주/수주 현황 등록
function OrderRegistration() {
  const [orderData, setOrderData] = useState({
    orderType: '',
    orderNumber: '',
    company: '',
    productName: '',
    quantity: '',
    unit: '',
    unitPrice: '',
    totalPrice: '',
    orderDate: '',
    deliveryDate: '',
    status: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast.success('발주/수주 등록 완료', {
      description: `${orderData.orderNumber} 건이 등록되었습니다.`,
    });
    
    // 폼 초기화
    setOrderData({
      orderType: '',
      orderNumber: '',
      company: '',
      productName: '',
      quantity: '',
      unit: '',
      unitPrice: '',
      totalPrice: '',
      orderDate: '',
      deliveryDate: '',
      status: '',
      notes: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="orderType">구분 *</Label>
          <Select
            value={orderData.orderType}
            onValueChange={(value) => setOrderData({ ...orderData, orderType: value })}
          >
            <SelectTrigger id="orderType">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="purchase">발주 (구매)</SelectItem>
              <SelectItem value="sales">수주 (판매)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="orderNumber">발주/수주 번호 *</Label>
          <Input
            id="orderNumber"
            value={orderData.orderNumber}
            onChange={(e) => setOrderData({ ...orderData, orderNumber: e.target.value })}
            placeholder="PO-2025-001"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">거래처 *</Label>
          <Input
            id="company"
            value={orderData.company}
            onChange={(e) => setOrderData({ ...orderData, company: e.target.value })}
            placeholder="㈜골재상사"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="productName">품목명 *</Label>
          <Input
            id="productName"
            value={orderData.productName}
            onChange={(e) => setOrderData({ ...orderData, productName: e.target.value })}
            placeholder="재생골재 25mm"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity">수량 *</Label>
          <Input
            id="quantity"
            type="number"
            value={orderData.quantity}
            onChange={(e) => {
              const qty = e.target.value;
              const total = qty && orderData.unitPrice 
                ? (parseFloat(qty) * parseFloat(orderData.unitPrice)).toFixed(0)
                : '';
              setOrderData({ ...orderData, quantity: qty, totalPrice: total });
            }}
            placeholder="100"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="unit">단위 *</Label>
          <Select
            value={orderData.unit}
            onValueChange={(value) => setOrderData({ ...orderData, unit: value })}
          >
            <SelectTrigger id="unit">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ton">톤(t)</SelectItem>
              <SelectItem value="kg">킬로그램(kg)</SelectItem>
              <SelectItem value="m3">세제곱미터(㎥)</SelectItem>
              <SelectItem value="ea">개(EA)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="unitPrice">단가 (원) *</Label>
          <Input
            id="unitPrice"
            type="number"
            value={orderData.unitPrice}
            onChange={(e) => {
              const price = e.target.value;
              const total = price && orderData.quantity 
                ? (parseFloat(orderData.quantity) * parseFloat(price)).toFixed(0)
                : '';
              setOrderData({ ...orderData, unitPrice: price, totalPrice: total });
            }}
            placeholder="50000"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="totalPrice">총 금액 (원)</Label>
          <Input
            id="totalPrice"
            type="number"
            value={orderData.totalPrice}
            readOnly
            className="bg-gray-50"
            placeholder="자동 계산"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="orderDate">발주/수주일 *</Label>
          <Input
            id="orderDate"
            type="date"
            value={orderData.orderDate}
            onChange={(e) => setOrderData({ ...orderData, orderDate: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="deliveryDate">납기일 *</Label>
          <Input
            id="deliveryDate"
            type="date"
            value={orderData.deliveryDate}
            onChange={(e) => setOrderData({ ...orderData, deliveryDate: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">상태 *</Label>
          <Select
            value={orderData.status}
            onValueChange={(value) => setOrderData({ ...orderData, status: value })}
          >
            <SelectTrigger id="status">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">대기</SelectItem>
              <SelectItem value="confirmed">확정</SelectItem>
              <SelectItem value="inprogress">진행 중</SelectItem>
              <SelectItem value="completed">완료</SelectItem>
              <SelectItem value="cancelled">취소</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 col-span-3">
          <Label htmlFor="notes">비고</Label>
          <Textarea
            id="notes"
            value={orderData.notes}
            onChange={(e) => setOrderData({ ...orderData, notes: e.target.value })}
            placeholder="특이사항을 입력하세요"
            rows={3}
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="submit">등록</Button>
      </div>
    </form>
  );
}

// 입출고 내역 등록
function InOutRegistration() {
  const [inoutData, setInoutData] = useState({
    type: '',
    slipNumber: '',
    productName: '',
    quantity: '',
    unit: '',
    warehouse: '',
    location: '',
    company: '',
    inoutDate: '',
    personInCharge: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast.success('입출고 등록 완료', {
      description: `${inoutData.slipNumber} 건이 등록되었습니다.`,
    });
    
    setInoutData({
      type: '',
      slipNumber: '',
      productName: '',
      quantity: '',
      unit: '',
      warehouse: '',
      location: '',
      company: '',
      inoutDate: '',
      personInCharge: '',
      notes: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="type">구분 *</Label>
          <Select
            value={inoutData.type}
            onValueChange={(value) => setInoutData({ ...inoutData, type: value })}
          >
            <SelectTrigger id="type">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="in">입고</SelectItem>
              <SelectItem value="out">출고</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="slipNumber">전표 번호 *</Label>
          <Input
            id="slipNumber"
            value={inoutData.slipNumber}
            onChange={(e) => setInoutData({ ...inoutData, slipNumber: e.target.value })}
            placeholder="IN-2025-001"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="inoutDate">입출고일 *</Label>
          <Input
            id="inoutDate"
            type="date"
            value={inoutData.inoutDate}
            onChange={(e) => setInoutData({ ...inoutData, inoutDate: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="productName">품목명 *</Label>
          <Input
            id="productName"
            value={inoutData.productName}
            onChange={(e) => setInoutData({ ...inoutData, productName: e.target.value })}
            placeholder="재생골재 25mm"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity">수량 *</Label>
          <Input
            id="quantity"
            type="number"
            value={inoutData.quantity}
            onChange={(e) => setInoutData({ ...inoutData, quantity: e.target.value })}
            placeholder="100"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="unit">단위 *</Label>
          <Select
            value={inoutData.unit}
            onValueChange={(value) => setInoutData({ ...inoutData, unit: value })}
          >
            <SelectTrigger id="unit">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ton">톤(t)</SelectItem>
              <SelectItem value="kg">킬로그램(kg)</SelectItem>
              <SelectItem value="m3">세제곱미터(㎥)</SelectItem>
              <SelectItem value="ea">개(EA)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="warehouse">창고 *</Label>
          <Select
            value={inoutData.warehouse}
            onValueChange={(value) => setInoutData({ ...inoutData, warehouse: value })}
          >
            <SelectTrigger id="warehouse">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="warehouse1">제1창고</SelectItem>
              <SelectItem value="warehouse2">제2창고</SelectItem>
              <SelectItem value="warehouse3">제3창고</SelectItem>
              <SelectItem value="outdoor">야적장</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">위치</Label>
          <Input
            id="location"
            value={inoutData.location}
            onChange={(e) => setInoutData({ ...inoutData, location: e.target.value })}
            placeholder="A-01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">거래처</Label>
          <Input
            id="company"
            value={inoutData.company}
            onChange={(e) => setInoutData({ ...inoutData, company: e.target.value })}
            placeholder="㈜골재상사"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="personInCharge">담당자</Label>
          <Input
            id="personInCharge"
            value={inoutData.personInCharge}
            onChange={(e) => setInoutData({ ...inoutData, personInCharge: e.target.value })}
            placeholder="홍길동"
          />
        </div>

        <div className="space-y-2 col-span-3">
          <Label htmlFor="notes">비고</Label>
          <Textarea
            id="notes"
            value={inoutData.notes}
            onChange={(e) => setInoutData({ ...inoutData, notes: e.target.value })}
            placeholder="특이사항을 입력하세요"
            rows={3}
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="submit">등록</Button>
      </div>
    </form>
  );
}

// 배송 추적 등록
function DeliveryRegistration() {
  const [deliveryData, setDeliveryData] = useState({
    deliveryNumber: '',
    orderNumber: '',
    productName: '',
    quantity: '',
    unit: '',
    sender: '',
    receiver: '',
    departureAddress: '',
    arrivalAddress: '',
    vehicleNumber: '',
    driverName: '',
    driverPhone: '',
    departureDate: '',
    arrivalDate: '',
    status: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast.success('배송 등록 완료', {
      description: `${deliveryData.deliveryNumber} 건이 등록되었습니다.`,
    });
    
    setDeliveryData({
      deliveryNumber: '',
      orderNumber: '',
      productName: '',
      quantity: '',
      unit: '',
      sender: '',
      receiver: '',
      departureAddress: '',
      arrivalAddress: '',
      vehicleNumber: '',
      driverName: '',
      driverPhone: '',
      departureDate: '',
      arrivalDate: '',
      status: '',
      notes: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="deliveryNumber">배송 번호 *</Label>
          <Input
            id="deliveryNumber"
            value={deliveryData.deliveryNumber}
            onChange={(e) => setDeliveryData({ ...deliveryData, deliveryNumber: e.target.value })}
            placeholder="DEL-2025-001"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="orderNumber">주문 번호</Label>
          <Input
            id="orderNumber"
            value={deliveryData.orderNumber}
            onChange={(e) => setDeliveryData({ ...deliveryData, orderNumber: e.target.value })}
            placeholder="PO-2025-001"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">배송 상태 *</Label>
          <Select
            value={deliveryData.status}
            onValueChange={(value) => setDeliveryData({ ...deliveryData, status: value })}
          >
            <SelectTrigger id="status">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ready">배송 준비</SelectItem>
              <SelectItem value="intransit">배송 중</SelectItem>
              <SelectItem value="delivered">배송 완료</SelectItem>
              <SelectItem value="returned">반송</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="productName">품목명 *</Label>
          <Input
            id="productName"
            value={deliveryData.productName}
            onChange={(e) => setDeliveryData({ ...deliveryData, productName: e.target.value })}
            placeholder="재생골재 25mm"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity">수량 *</Label>
          <Input
            id="quantity"
            type="number"
            value={deliveryData.quantity}
            onChange={(e) => setDeliveryData({ ...deliveryData, quantity: e.target.value })}
            placeholder="100"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="unit">단위 *</Label>
          <Select
            value={deliveryData.unit}
            onValueChange={(value) => setDeliveryData({ ...deliveryData, unit: value })}
          >
            <SelectTrigger id="unit">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ton">톤(t)</SelectItem>
              <SelectItem value="kg">킬로그램(kg)</SelectItem>
              <SelectItem value="m3">세제곱미터(㎥)</SelectItem>
              <SelectItem value="ea">개(EA)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sender">발송인 *</Label>
          <Input
            id="sender"
            value={deliveryData.sender}
            onChange={(e) => setDeliveryData({ ...deliveryData, sender: e.target.value })}
            placeholder="하이콘 코리아"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="receiver">수령인 *</Label>
          <Input
            id="receiver"
            value={deliveryData.receiver}
            onChange={(e) => setDeliveryData({ ...deliveryData, receiver: e.target.value })}
            placeholder="㈜건설회사"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="vehicleNumber">차량 번호</Label>
          <Input
            id="vehicleNumber"
            value={deliveryData.vehicleNumber}
            onChange={(e) => setDeliveryData({ ...deliveryData, vehicleNumber: e.target.value })}
            placeholder="12가 3456"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="driverName">기사 이름</Label>
          <Input
            id="driverName"
            value={deliveryData.driverName}
            onChange={(e) => setDeliveryData({ ...deliveryData, driverName: e.target.value })}
            placeholder="홍길동"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="driverPhone">기사 연락처</Label>
          <Input
            id="driverPhone"
            type="tel"
            value={deliveryData.driverPhone}
            onChange={(e) => setDeliveryData({ ...deliveryData, driverPhone: e.target.value })}
            placeholder="010-1234-5678"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="departureDate">출발 일시 *</Label>
          <Input
            id="departureDate"
            type="datetime-local"
            value={deliveryData.departureDate}
            onChange={(e) => setDeliveryData({ ...deliveryData, departureDate: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="arrivalDate">도착 예정 일시</Label>
          <Input
            id="arrivalDate"
            type="datetime-local"
            value={deliveryData.arrivalDate}
            onChange={(e) => setDeliveryData({ ...deliveryData, arrivalDate: e.target.value })}
          />
        </div>

        <div className="space-y-2 col-span-3">
          <Label htmlFor="departureAddress">출발지 주소 *</Label>
          <Input
            id="departureAddress"
            value={deliveryData.departureAddress}
            onChange={(e) => setDeliveryData({ ...deliveryData, departureAddress: e.target.value })}
            placeholder="경기도 화성시 ..."
            required
          />
        </div>

        <div className="space-y-2 col-span-3">
          <Label htmlFor="arrivalAddress">도착지 주소 *</Label>
          <Input
            id="arrivalAddress"
            value={deliveryData.arrivalAddress}
            onChange={(e) => setDeliveryData({ ...deliveryData, arrivalAddress: e.target.value })}
            placeholder="서울시 강남구 ..."
            required
          />
        </div>

        <div className="space-y-2 col-span-3">
          <Label htmlFor="notes">비고</Label>
          <Textarea
            id="notes"
            value={deliveryData.notes}
            onChange={(e) => setDeliveryData({ ...deliveryData, notes: e.target.value })}
            placeholder="특이사항을 입력하세요"
            rows={3}
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="submit">등록</Button>
      </div>
    </form>
  );
}

// 공급업체 관리 등록
function SupplierRegistration() {
  const [supplierData, setSupplierData] = useState({
    supplierCode: '',
    supplierName: '',
    businessNumber: '',
    representativeName: '',
    businessType: '',
    businessCategory: '',
    address: '',
    phone: '',
    fax: '',
    email: '',
    managerName: '',
    managerPhone: '',
    managerEmail: '',
    bankName: '',
    accountNumber: '',
    accountHolder: '',
    status: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast.success('공급업체 등록 완료', {
      description: `${supplierData.supplierName}이(가) 등록되었습니다.`,
    });
    
    setSupplierData({
      supplierCode: '',
      supplierName: '',
      businessNumber: '',
      representativeName: '',
      businessType: '',
      businessCategory: '',
      address: '',
      phone: '',
      fax: '',
      email: '',
      managerName: '',
      managerPhone: '',
      managerEmail: '',
      bankName: '',
      accountNumber: '',
      accountHolder: '',
      status: '',
      notes: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="space-y-6">
        {/* 기본 정보 */}
        <div>
          <h3 className="text-sm mb-3 text-gray-700 border-b pb-2">기본 정보</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="supplierCode">업체 코드 *</Label>
              <Input
                id="supplierCode"
                value={supplierData.supplierCode}
                onChange={(e) => setSupplierData({ ...supplierData, supplierCode: e.target.value })}
                placeholder="SUP-001"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="supplierName">업체명 *</Label>
              <Input
                id="supplierName"
                value={supplierData.supplierName}
                onChange={(e) => setSupplierData({ ...supplierData, supplierName: e.target.value })}
                placeholder="㈜골재상사"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessNumber">사업자번호 *</Label>
              <Input
                id="businessNumber"
                value={supplierData.businessNumber}
                onChange={(e) => setSupplierData({ ...supplierData, businessNumber: e.target.value })}
                placeholder="123-45-67890"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="representativeName">대표자명 *</Label>
              <Input
                id="representativeName"
                value={supplierData.representativeName}
                onChange={(e) => setSupplierData({ ...supplierData, representativeName: e.target.value })}
                placeholder="홍길동"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessType">업태</Label>
              <Input
                id="businessType"
                value={supplierData.businessType}
                onChange={(e) => setSupplierData({ ...supplierData, businessType: e.target.value })}
                placeholder="제조업"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessCategory">업종</Label>
              <Input
                id="businessCategory"
                value={supplierData.businessCategory}
                onChange={(e) => setSupplierData({ ...supplierData, businessCategory: e.target.value })}
                placeholder="골재 제조"
              />
            </div>

            <div className="space-y-2 col-span-3">
              <Label htmlFor="address">주소 *</Label>
              <Input
                id="address"
                value={supplierData.address}
                onChange={(e) => setSupplierData({ ...supplierData, address: e.target.value })}
                placeholder="경기도 화성시 ..."
                required
              />
            </div>
          </div>
        </div>

        {/* 연락처 정보 */}
        <div>
          <h3 className="text-sm mb-3 text-gray-700 border-b pb-2">연락처 정보</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">전화번호 *</Label>
              <Input
                id="phone"
                type="tel"
                value={supplierData.phone}
                onChange={(e) => setSupplierData({ ...supplierData, phone: e.target.value })}
                placeholder="02-1234-5678"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fax">팩스번호</Label>
              <Input
                id="fax"
                type="tel"
                value={supplierData.fax}
                onChange={(e) => setSupplierData({ ...supplierData, fax: e.target.value })}
                placeholder="02-1234-5679"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                value={supplierData.email}
                onChange={(e) => setSupplierData({ ...supplierData, email: e.target.value })}
                placeholder="company@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">담당자명</Label>
              <Input
                id="managerName"
                value={supplierData.managerName}
                onChange={(e) => setSupplierData({ ...supplierData, managerName: e.target.value })}
                placeholder="홍길동"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerPhone">담당자 연락처</Label>
              <Input
                id="managerPhone"
                type="tel"
                value={supplierData.managerPhone}
                onChange={(e) => setSupplierData({ ...supplierData, managerPhone: e.target.value })}
                placeholder="010-1234-5678"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerEmail">담당자 이메일</Label>
              <Input
                id="managerEmail"
                type="email"
                value={supplierData.managerEmail}
                onChange={(e) => setSupplierData({ ...supplierData, managerEmail: e.target.value })}
                placeholder="manager@example.com"
              />
            </div>
          </div>
        </div>

        {/* 계좌 정보 */}
        <div>
          <h3 className="text-sm mb-3 text-gray-700 border-b pb-2">계좌 정보</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bankName">은행명</Label>
              <Input
                id="bankName"
                value={supplierData.bankName}
                onChange={(e) => setSupplierData({ ...supplierData, bankName: e.target.value })}
                placeholder="국민은행"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="accountNumber">계좌번호</Label>
              <Input
                id="accountNumber"
                value={supplierData.accountNumber}
                onChange={(e) => setSupplierData({ ...supplierData, accountNumber: e.target.value })}
                placeholder="123-45-678901"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="accountHolder">예금주</Label>
              <Input
                id="accountHolder"
                value={supplierData.accountHolder}
                onChange={(e) => setSupplierData({ ...supplierData, accountHolder: e.target.value })}
                placeholder="㈜골재상사"
              />
            </div>
          </div>
        </div>

        {/* 기타 정보 */}
        <div>
          <h3 className="text-sm mb-3 text-gray-700 border-b pb-2">기타 정보</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="status">거래 상태 *</Label>
              <Select
                value={supplierData.status}
                onValueChange={(value) => setSupplierData({ ...supplierData, status: value })}
              >
                <SelectTrigger id="status">
                  <SelectValue placeholder="선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">활성</SelectItem>
                  <SelectItem value="inactive">비활성</SelectItem>
                  <SelectItem value="pending">검토 중</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 col-span-3">
              <Label htmlFor="notes">비고</Label>
              <Textarea
                id="notes"
                value={supplierData.notes}
                onChange={(e) => setSupplierData({ ...supplierData, notes: e.target.value })}
                placeholder="특이사항을 입력하세요"
                rows={3}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="submit">등록</Button>
      </div>
    </form>
  );
}

// 재고 현황 등록
function InventoryRegistration() {
  const [inventoryData, setInventoryData] = useState({
    productCode: '',
    productName: '',
    category: '',
    specification: '',
    unit: '',
    warehouse: '',
    location: '',
    currentStock: '',
    safetyStock: '',
    unitPrice: '',
    totalValue: '',
    lastInDate: '',
    lastOutDate: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast.success('재고 등록 완료', {
      description: `${inventoryData.productName}이(가) 등록되었습니다.`,
    });
    
    setInventoryData({
      productCode: '',
      productName: '',
      category: '',
      specification: '',
      unit: '',
      warehouse: '',
      location: '',
      currentStock: '',
      safetyStock: '',
      unitPrice: '',
      totalValue: '',
      lastInDate: '',
      lastOutDate: '',
      notes: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="productCode">품목 코드 *</Label>
          <Input
            id="productCode"
            value={inventoryData.productCode}
            onChange={(e) => setInventoryData({ ...inventoryData, productCode: e.target.value })}
            placeholder="PRD-001"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="productName">품목명 *</Label>
          <Input
            id="productName"
            value={inventoryData.productName}
            onChange={(e) => setInventoryData({ ...inventoryData, productName: e.target.value })}
            placeholder="재생골재 25mm"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">분류 *</Label>
          <Select
            value={inventoryData.category}
            onValueChange={(value) => setInventoryData({ ...inventoryData, category: value })}
          >
            <SelectTrigger id="category">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="raw">원자재</SelectItem>
              <SelectItem value="semi">반제품</SelectItem>
              <SelectItem value="product">제품</SelectItem>
              <SelectItem value="supplies">부자재</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="specification">규격</Label>
          <Input
            id="specification"
            value={inventoryData.specification}
            onChange={(e) => setInventoryData({ ...inventoryData, specification: e.target.value })}
            placeholder="25mm"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="unit">단위 *</Label>
          <Select
            value={inventoryData.unit}
            onValueChange={(value) => setInventoryData({ ...inventoryData, unit: value })}
          >
            <SelectTrigger id="unit">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ton">톤(t)</SelectItem>
              <SelectItem value="kg">킬로그램(kg)</SelectItem>
              <SelectItem value="m3">세제곱미터(㎥)</SelectItem>
              <SelectItem value="ea">개(EA)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="warehouse">창고 *</Label>
          <Select
            value={inventoryData.warehouse}
            onValueChange={(value) => setInventoryData({ ...inventoryData, warehouse: value })}
          >
            <SelectTrigger id="warehouse">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="warehouse1">제1창고</SelectItem>
              <SelectItem value="warehouse2">제2창고</SelectItem>
              <SelectItem value="warehouse3">제3창고</SelectItem>
              <SelectItem value="outdoor">야적장</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">위치</Label>
          <Input
            id="location"
            value={inventoryData.location}
            onChange={(e) => setInventoryData({ ...inventoryData, location: e.target.value })}
            placeholder="A-01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentStock">현재고 *</Label>
          <Input
            id="currentStock"
            type="number"
            value={inventoryData.currentStock}
            onChange={(e) => {
              const stock = e.target.value;
              const total = stock && inventoryData.unitPrice 
                ? (parseFloat(stock) * parseFloat(inventoryData.unitPrice)).toFixed(0)
                : '';
              setInventoryData({ ...inventoryData, currentStock: stock, totalValue: total });
            }}
            placeholder="100"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="safetyStock">안전재고</Label>
          <Input
            id="safetyStock"
            type="number"
            value={inventoryData.safetyStock}
            onChange={(e) => setInventoryData({ ...inventoryData, safetyStock: e.target.value })}
            placeholder="20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="unitPrice">단가 (원)</Label>
          <Input
            id="unitPrice"
            type="number"
            value={inventoryData.unitPrice}
            onChange={(e) => {
              const price = e.target.value;
              const total = price && inventoryData.currentStock 
                ? (parseFloat(inventoryData.currentStock) * parseFloat(price)).toFixed(0)
                : '';
              setInventoryData({ ...inventoryData, unitPrice: price, totalValue: total });
            }}
            placeholder="50000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="totalValue">재고 금액 (원)</Label>
          <Input
            id="totalValue"
            type="number"
            value={inventoryData.totalValue}
            readOnly
            className="bg-gray-50"
            placeholder="자동 계산"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastInDate">최종 입고일</Label>
          <Input
            id="lastInDate"
            type="date"
            value={inventoryData.lastInDate}
            onChange={(e) => setInventoryData({ ...inventoryData, lastInDate: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastOutDate">최종 출고일</Label>
          <Input
            id="lastOutDate"
            type="date"
            value={inventoryData.lastOutDate}
            onChange={(e) => setInventoryData({ ...inventoryData, lastOutDate: e.target.value })}
          />
        </div>

        <div className="space-y-2 col-span-3">
          <Label htmlFor="notes">비고</Label>
          <Textarea
            id="notes"
            value={inventoryData.notes}
            onChange={(e) => setInventoryData({ ...inventoryData, notes: e.target.value })}
            placeholder="특이사항을 입력하세요"
            rows={3}
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="submit">등록</Button>
      </div>
    </form>
  );
}
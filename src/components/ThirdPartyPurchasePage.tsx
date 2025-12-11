import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Package, 
  CreditCard, 
  ShoppingCart, 
  CheckCircle, 
  Calendar,
  MapPin,
  AlertCircle,
  Filter,
  Search,
  X
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { Toaster } from './ui/sonner';
import { PageHeader } from './PageHeader';

interface AggregateProduct {
  id: string;
  product_number: string;
  serial_number: string;
  sales_store: string;
  aggregate_type: string;
  quantity: number;
  sales_price_per_ton?: number;
  total_sales_price?: number;
  production_date: string;
  registration_date: string;
  quality_grade: string;
  description?: string;
  status: 'for_sale';
}

interface PurchaseForm {
  buyer_name: string;
  buyer_company: string;
  buyer_phone: string;
  buyer_email: string;
  delivery_location: string;
  delivery_date: string;
  payment_method: 'card' | 'bank_transfer' | 'kakao_pay' | 'toss_pay' | '';
  special_note: string;
  purchase_quantity: number;
}

interface ThirdPartyPurchasePageProps {
  onBack: () => void;
  onStaffAuth?: () => void;
  onVisionClick?: () => void;
  onMissionClick?: () => void;
  onTrendsClick?: () => void;
  onPurchaseClick?: () => void;
}

export function ThirdPartyPurchasePage({ onBack, onStaffAuth, onVisionClick, onMissionClick, onTrendsClick, onPurchaseClick }: ThirdPartyPurchasePageProps) {
  const [products, setProducts] = useState<AggregateProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<AggregateProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<AggregateProduct | null>(null);
  const [showPurchaseDialog, setShowPurchaseDialog] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [cart, setCart] = useState<AggregateProduct[]>([]);
  const [showCart, setShowCart] = useState(false);

  const [purchaseForm, setPurchaseForm] = useState<PurchaseForm>({
    buyer_name: '',
    buyer_company: '',
    buyer_phone: '',
    buyer_email: '',
    delivery_location: '',
    delivery_date: '',
    payment_method: '',
    special_note: '',
    purchase_quantity: 0
  });

  // localStorage에서 판매중인 골재만 로드
  useEffect(() => {
    const loadProducts = () => {
      const saved = localStorage.getItem('shipping_orders');
      if (saved) {
        try {
          const allOrders = JSON.parse(saved);
          // 'for_sale' 상태인 골재만 필터링
          const forSaleProducts = allOrders
            .filter((order: any) => order.status === 'for_sale')
            .map((order: any) => ({
              id: order.id,
              product_number: order.product_number || '',
              serial_number: order.serial_number || '',
              sales_store: order.sales_store || '하이콘 코리아',
              aggregate_type: order.aggregate_type,
              quantity: order.quantity,
              sales_price_per_ton: order.sales_price_per_ton,
              total_sales_price: order.total_sales_price,
              production_date: order.production_date || '',
              registration_date: order.registration_date || '',
              quality_grade: order.quality_grade || 'A',
              description: order.description || '',
              status: 'for_sale' as const
            }));
          setProducts(forSaleProducts);
          setFilteredProducts(forSaleProducts);
        } catch (error) {
          console.error('판매 가능 상품 로드 실패:', error);
          setProducts([]);
          setFilteredProducts([]);
        }
      } else {
        setProducts([]);
        setFilteredProducts([]);
      }
    };

    loadProducts();

    // 주기적으로 업데이트 확인 (2초마다)
    const interval = setInterval(loadProducts, 2000);
    return () => clearInterval(interval);
  }, []);

  // 검색 및 필터링
  useEffect(() => {
    let filtered = products;

    // 타입 필터
    if (filterType !== 'all') {
      filtered = filtered.filter(p => p.aggregate_type.includes(filterType));
    }

    // 검색
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.product_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.serial_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.aggregate_type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, filterType, products]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  };

  const handleAddToCart = (product: AggregateProduct) => {
    if (cart.find(p => p.id === product.id)) {
      toast.error('이미 장바구니에 담긴 상품입니다');
      return;
    }
    setCart([...cart, product]);
    toast.success('장바구니에 담았습니다');
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(cart.filter(p => p.id !== productId));
    toast.success('장바구니에서 제거했습니다');
  };

  const handlePurchaseClick = (product: AggregateProduct) => {
    setSelectedProduct(product);
    // 구매 수량을 전체 수량으로 초기화
    setPurchaseForm(prev => ({ ...prev, purchase_quantity: product.quantity }));
    setShowPurchaseDialog(true);
  };

  const handlePurchaseSubmit = () => {
    // 폼 검증
    if (!purchaseForm.buyer_name || !purchaseForm.buyer_phone || !purchaseForm.buyer_email) {
      toast.error('필수 정보를 입력해주세요');
      return;
    }

    if (!purchaseForm.delivery_location || !purchaseForm.delivery_date) {
      toast.error('배송 정보를 입력해주세요');
      return;
    }

    if (!purchaseForm.payment_method) {
      toast.error('결제 방법을 선택해주세요');
      return;
    }

    // 구매 수량 검증
    if (!purchaseForm.purchase_quantity || purchaseForm.purchase_quantity <= 0) {
      toast.error('구매 수량을 입력해주세요');
      return;
    }

    if (selectedProduct && purchaseForm.purchase_quantity > selectedProduct.quantity) {
      toast.error('구매 수량이 재고 수량을 초과합니다');
      return;
    }

    // 결제 다이얼로그로 이동
    setShowPurchaseDialog(false);
    setShowPaymentDialog(true);
  };

  const handlePaymentConfirm = async () => {
    if (!selectedProduct) return;

    try {
      // 실제로는 결제 API 호출
      // 예: 토스페이먼츠, 카카오페이 등
      
      // localStorage에서 shipping_orders 로드
      const saved = localStorage.getItem('shipping_orders');
      if (saved) {
        const allOrders = JSON.parse(saved);
        
        const purchaseQuantity = purchaseForm.purchase_quantity;
        const remainingQuantity = selectedProduct.quantity - purchaseQuantity;
        
        // 구매한 수량만큼 새로운 예약 주문 생성
        const newReservedOrder = {
          id: `${selectedProduct.id}-reserved-${Date.now()}`,
          product_number: selectedProduct.product_number,
          serial_number: selectedProduct.serial_number,
          sales_store: selectedProduct.sales_store,
          aggregate_type: selectedProduct.aggregate_type,
          quantity: purchaseQuantity,
          sales_price_per_ton: selectedProduct.sales_price_per_ton,
          total_sales_price: selectedProduct.sales_price_per_ton ? selectedProduct.sales_price_per_ton * purchaseQuantity : 0,
          production_date: selectedProduct.production_date,
          registration_date: selectedProduct.registration_date,
          quality_grade: selectedProduct.quality_grade,
          description: selectedProduct.description,
          status: 'reserved',
          customer: purchaseForm.buyer_company || purchaseForm.buyer_name,
          delivery_location: purchaseForm.delivery_location,
          shipping_date: purchaseForm.delivery_date,
          buyer_name: purchaseForm.buyer_name,
          buyer_phone: purchaseForm.buyer_phone,
          buyer_email: purchaseForm.buyer_email,
          payment_method: purchaseForm.payment_method,
          special_note: purchaseForm.special_note,
          payment_date: new Date().toISOString().split('T')[0]
        };
        
        let updatedOrders;
        
        if (remainingQuantity <= 0) {
          // 전체 수량을 구매한 경우: 기존 항목을 reserved로 변경
          updatedOrders = allOrders.map((order: any) => {
            if (order.id === selectedProduct.id) {
              return newReservedOrder;
            }
            return order;
          });
        } else {
          // 일부만 구매한 경우: 기존 항목의 수량을 줄이고 새 예약 추가
          updatedOrders = allOrders.map((order: any) => {
            if (order.id === selectedProduct.id) {
              return {
                ...order,
                quantity: remainingQuantity,
                total_sales_price: order.sales_price_per_ton ? order.sales_price_per_ton * remainingQuantity : order.total_sales_price
              };
            }
            return order;
          });
          updatedOrders.push(newReservedOrder);
        }
        
        // localStorage 업데이트
        localStorage.setItem('shipping_orders', JSON.stringify(updatedOrders));
      }
      
      // 결제 성공 시 로컬 상태 업데이트
      const purchaseQuantity = purchaseForm.purchase_quantity;
      const remainingQuantity = selectedProduct.quantity - purchaseQuantity;
      
      let updatedProducts;
      if (remainingQuantity <= 0) {
        // 전체 수량 구매: 목록에서 제거
        updatedProducts = products.filter(p => p.id !== selectedProduct.id);
      } else {
        // 일부만 구매: 수량 감소
        updatedProducts = products.map(p => {
          if (p.id === selectedProduct.id) {
            return {
              ...p,
              quantity: remainingQuantity,
              total_sales_price: p.sales_price_per_ton ? p.sales_price_per_ton * remainingQuantity : p.total_sales_price
            };
          }
          return p;
        });
      }
      
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts.filter(p => {
        let matches = true;
        if (filterType !== 'all') {
          matches = matches && p.aggregate_type.includes(filterType);
        }
        if (searchTerm) {
          matches = matches && (
            p.product_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.serial_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.aggregate_type.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        return matches;
      }));
      
      toast.success('결제가 완료되었습니다!', {
        description: `${purchaseQuantity}톤 구매 완료 | 예약 완료 → 출고 예정 탭으로 이동됩니다`
      });

      // 상태 초기화
      setShowPaymentDialog(false);
      setSelectedProduct(null);
      setPurchaseForm({
        buyer_name: '',
        buyer_company: '',
        buyer_phone: '',
        buyer_email: '',
        delivery_location: '',
        delivery_date: '',
        payment_method: '',
        special_note: '',
        purchase_quantity: 0
      });

    } catch (error) {
      console.error('결제 처리 오류:', error);
      toast.error('결제 처리 중 오류가 발생했습니다');
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.total_sales_price || 0), 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50 pb-20"
    >
      <Toaster position="top-center" />

      {/* PageHeader */}
      <PageHeader 
        onLogoClick={onBack}
        onStaffAuth={onStaffAuth}
        onVisionClick={onVisionClick}
        onMissionClick={onMissionClick}
        onTrendsClick={onTrendsClick}
        onPurchaseClick={onPurchaseClick}
        currentPage="purchase"
      />

      {/* 콘텐츠 영역 - mt-[100px] 추가하여 고정 헤더 아래로 배치 */}
      <div className="mt-[100px] relative z-10">
        {/* 서브 헤더 */}
        <div className="bg-white border-b sticky top-[100px] z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl md:text-2xl">순환골재 공식 판매 플랫폼</h1>
              </div>
              <Button
                variant="outline"
                onClick={() => setShowCart(true)}
                className="relative md:px-4 px-0 w-10 h-10 md:w-auto md:h-auto rounded-full md:rounded-md"
              >
                <ShoppingCart className="w-5 h-5 md:mr-2" />
                <span className="hidden md:inline">장바구니</span>
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500">{cart.length}</Badge>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* 검색 및 필터 */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex gap-2 sm:gap-4">
            <div className="flex-1 relative min-w-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <Input
                placeholder="제품번호, 일련번호, 골재 종류로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 sm:pl-10 text-sm sm:text-base"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[130px] sm:w-[160px] md:w-[200px]">
                <Filter className="w-4 h-4 mr-1 sm:mr-2" />
                <SelectValue placeholder="전체 골재" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체 골재</SelectItem>
                <SelectItem value="25-40mm">25-40mm</SelectItem>
                <SelectItem value="5-25mm">5-25mm</SelectItem>
                <SelectItem value="0-5mm">0-5mm</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* 상품 목록 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-lg">판매 가능한 순환골재</h2>
          <p className="text-sm text-gray-600">총 {filteredProducts.length}개 상품</p>
        </div>

        {filteredProducts.length === 0 ? (
          <Card className="py-12">
            <CardContent className="text-center">
              <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg text-gray-900 mb-2">판매 가능한 골재가 없습니다</h3>
              <p className="text-sm text-gray-600 mb-4">
                현재 판매중인 순환골재가 없습니다.<br />
                출고 관리 페이지에서 골재를 등록하면 여기에 표시됩니다.
              </p>
              <Button onClick={onBack} variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                메인 페이지로 돌아가기
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{product.aggregate_type}</CardTitle>
                    <CardDescription className="mt-1">
                      제품번호: {product.product_number}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    판매중
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 일련번호 */}
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-100 text-purple-700 border-purple-300">
                    {product.serial_number}
                  </Badge>
                  <span className="text-xs text-gray-500">일련번호</span>
                </div>

                {/* 수량 및 가격 */}
                <div className="space-y-2 bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">수량</span>
                    <span className="font-medium">{product.quantity.toLocaleString()}톤</span>
                  </div>
                  {product.sales_price_per_ton && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">톤당 가격</span>
                      <span className="font-medium text-blue-600">
                        {product.sales_price_per_ton.toLocaleString()}원/톤
                      </span>
                    </div>
                  )}
                  {product.total_sales_price && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">총 금액</span>
                      <span className="text-lg text-green-600">
                        {product.total_sales_price.toLocaleString()}원
                      </span>
                    </div>
                  )}
                </div>

                {/* 품질 및 날짜 */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">품질 등급</span>
                    <Badge variant={product.quality_grade === 'A' ? 'default' : 'secondary'}>
                      {product.quality_grade}등급
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    생산일: {formatDate(product.production_date)}
                  </div>
                </div>

                {/* 설명 */}
                {product.description && (
                  <p className="text-sm text-gray-700 bg-blue-50 p-2 rounded">
                    {product.description}
                  </p>
                )}

                {/* 버튼 */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    장바구니
                  </Button>
                  <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => handlePurchaseClick(product)}
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    구매하기
                  </Button>
                </div>
              </CardContent>
            </Card>
            ))}
          </div>
        )}
      </div>

      {/* 구매 정보 입력 다이얼로그 */}
      <Dialog open={showPurchaseDialog} onOpenChange={setShowPurchaseDialog}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-600" />
              구매 정보 입력
            </DialogTitle>
            <DialogDescription>
              구매자 정보와 배송 정보를 입력해주세요
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 overflow-y-auto pr-2 -mr-2 flex-1">
            {/* 선택된 상품 정보 */}
            {selectedProduct && (
              <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                <h4 className="font-medium">선택 상품</h4>
                <div className="text-sm space-y-1">
                  <p><span className="text-gray-600">제품:</span> {selectedProduct.aggregate_type}</p>
                  <p><span className="text-gray-600">재고 수량:</span> {selectedProduct.quantity}톤</p>
                  <p><span className="text-gray-600">톤당 가격:</span> {selectedProduct.sales_price_per_ton?.toLocaleString()}원/톤</p>
                </div>
                
                {/* 구매 수량 입력 */}
                <div className="space-y-2 pt-2 border-t border-blue-200">
                  <Label htmlFor="purchase_quantity" className="text-sm font-medium">
                    구매 수량 (톤) *
                  </Label>
                  <div className="flex gap-2 items-center">
                    <Input
                      id="purchase_quantity"
                      type="number"
                      min="0.1"
                      max={selectedProduct.quantity}
                      step="0.1"
                      placeholder="구매할 수량 입력"
                      value={purchaseForm.purchase_quantity || ''}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value) || 0;
                        setPurchaseForm({ ...purchaseForm, purchase_quantity: value });
                      }}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setPurchaseForm({ ...purchaseForm, purchase_quantity: selectedProduct.quantity })}
                    >
                      전체
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    최소 0.1톤부터 최대 {selectedProduct.quantity}톤까지 구매 가능합니다
                  </p>
                </div>

                {/* 계산된 총 금액 */}
                <div className="pt-2 border-t border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">총 금액:</span>
                    <span className="text-lg text-green-600">
                      {selectedProduct.sales_price_per_ton && purchaseForm.purchase_quantity 
                        ? (selectedProduct.sales_price_per_ton * purchaseForm.purchase_quantity).toLocaleString()
                        : '0'
                      }원
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 구매자 정보 */}
            <div className="space-y-3">
              <h4 className="font-medium">구매자 정보</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="buyer_name">구매자명 *</Label>
                  <Input
                    id="buyer_name"
                    placeholder="홍길동"
                    value={purchaseForm.buyer_name}
                    onChange={(e) => setPurchaseForm({ ...purchaseForm, buyer_name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="buyer_company">회사명</Label>
                  <Input
                    id="buyer_company"
                    placeholder="(주)회사명"
                    value={purchaseForm.buyer_company}
                    onChange={(e) => setPurchaseForm({ ...purchaseForm, buyer_company: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="buyer_phone">연락처 *</Label>
                  <Input
                    id="buyer_phone"
                    type="tel"
                    placeholder="010-1234-5678"
                    value={purchaseForm.buyer_phone}
                    onChange={(e) => setPurchaseForm({ ...purchaseForm, buyer_phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="buyer_email">이메일 *</Label>
                  <Input
                    id="buyer_email"
                    type="email"
                    placeholder="example@email.com"
                    value={purchaseForm.buyer_email}
                    onChange={(e) => setPurchaseForm({ ...purchaseForm, buyer_email: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* 배송 정보 */}
            <div className="space-y-3">
              <h4 className="font-medium">배송 정보</h4>
              <div className="space-y-2">
                <Label htmlFor="delivery_location">배송지 주소 *</Label>
                <Textarea
                  id="delivery_location"
                  placeholder="서울특별시 강남구..."
                  value={purchaseForm.delivery_location}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, delivery_location: e.target.value })}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="delivery_date">희망 배송일 *</Label>
                <Input
                  id="delivery_date"
                  type="date"
                  value={purchaseForm.delivery_date}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, delivery_date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            {/* 결제 방법 */}
            <div className="space-y-2">
              <Label htmlFor="payment_method">결제 방법 *</Label>
              <Select
                value={purchaseForm.payment_method}
                onValueChange={(value: any) => setPurchaseForm({ ...purchaseForm, payment_method: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="결제 방법 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">신용카드</SelectItem>
                  <SelectItem value="bank_transfer">계좌이체</SelectItem>
                  <SelectItem value="kakao_pay">카카오페이</SelectItem>
                  <SelectItem value="toss_pay">토스페이</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 특이사항 */}
            <div className="space-y-2">
              <Label htmlFor="special_note">특이사항</Label>
              <Textarea
                id="special_note"
                placeholder="배송 시 주의사항 등을 입력해주세요"
                value={purchaseForm.special_note}
                onChange={(e) => setPurchaseForm({ ...purchaseForm, special_note: e.target.value })}
                rows={3}
              />
            </div>
          </div>

          <DialogFooter className="gap-2 flex-shrink-0 pt-4 border-t">
            <Button variant="outline" onClick={() => setShowPurchaseDialog(false)}>
              취소
            </Button>
            <Button onClick={handlePurchaseSubmit} className="bg-blue-600 hover:bg-blue-700">
              <CreditCard className="w-4 h-4 mr-2" />
              결제하기
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 결제 확인 다이얼로그 */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-green-600" />
              결제 확인
            </DialogTitle>
            <DialogDescription>
              결제 정보를 확인해주세요
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {selectedProduct && (
              <>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <h4 className="font-medium">주문 정보</h4>
                  <div className="text-sm space-y-1">
                    <p><span className="text-gray-600">제품:</span> {selectedProduct.aggregate_type}</p>
                    <p><span className="text-gray-600">구매 수량:</span> <span className="text-blue-600 font-medium">{purchaseForm.purchase_quantity}톤</span></p>
                    <p><span className="text-gray-600">제품번호:</span> {selectedProduct.product_number}</p>
                    <p><span className="text-gray-600">톤당 가격:</span> {selectedProduct.sales_price_per_ton?.toLocaleString()}원/톤</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                  <h4 className="font-medium">구매자 정보</h4>
                  <div className="text-sm space-y-1">
                    <p><span className="text-gray-600">이름:</span> {purchaseForm.buyer_name}</p>
                    {purchaseForm.buyer_company && (
                      <p><span className="text-gray-600">회사:</span> {purchaseForm.buyer_company}</p>
                    )}
                    <p><span className="text-gray-600">연락처:</span> {purchaseForm.buyer_phone}</p>
                    <p><span className="text-gray-600">이메일:</span> {purchaseForm.buyer_email}</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg space-y-2">
                  <div className="text-sm text-gray-600 space-y-1 pb-2 border-b border-green-200">
                    <div className="flex justify-between">
                      <span>단가:</span>
                      <span>{selectedProduct.sales_price_per_ton?.toLocaleString()}원/톤</span>
                    </div>
                    <div className="flex justify-between">
                      <span>수량:</span>
                      <span>{purchaseForm.purchase_quantity}톤</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-medium">최종 결제 금액</span>
                    <span className="text-2xl text-green-600">
                      {selectedProduct.sales_price_per_ton && purchaseForm.purchase_quantity
                        ? (selectedProduct.sales_price_per_ton * purchaseForm.purchase_quantity).toLocaleString()
                        : '0'
                      }원
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 pt-2 border-t border-green-200">
                    결제 방법: {
                      purchaseForm.payment_method === 'card' ? '신용카드' :
                      purchaseForm.payment_method === 'bank_transfer' ? '계좌이체' :
                      purchaseForm.payment_method === 'kakao_pay' ? '카카오페이' :
                      purchaseForm.payment_method === 'toss_pay' ? '토스페이' : ''
                    }
                  </p>
                </div>

                <div className="flex items-start gap-2 text-sm text-orange-600 bg-orange-50 p-3 rounded">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>
                    결제 완료 후 상태가 "예약중"으로 변경되며, 
                    희망 배송일에 맞춰 차량이 배차됩니다.
                  </p>
                </div>
              </>
            )}
          </div>

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setShowPaymentDialog(false)}>
              취소
            </Button>
            <Button onClick={handlePaymentConfirm} className="bg-green-600 hover:bg-green-700">
              <CheckCircle className="w-4 h-4 mr-2" />
              결제 완료
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 장바구니 다이얼로그 */}
      <Dialog open={showCart} onOpenChange={setShowCart}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              장바구니
            </DialogTitle>
            <DialogDescription>
              {cart.length}개의 상품이 담겨있습니다
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 overflow-y-auto pr-2 -mr-2 flex-1">
            {cart.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <ShoppingCart className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>장바구니가 비어있습니다</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{item.aggregate_type}</h4>
                      <p className="text-sm text-gray-600">{item.product_number}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{item.quantity}톤</span>
                    <span className="text-green-600">
                      {item.total_sales_price?.toLocaleString()}원
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <>
              <div className="flex-shrink-0 border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">총 금액</span>
                  <span className="text-2xl text-green-600">
                    {cartTotal.toLocaleString()}원
                  </span>
                </div>
              </div>
              <DialogFooter className="gap-2 flex-shrink-0">
                <Button variant="outline" onClick={() => setShowCart(false)}>
                  계속 쇼핑
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  전체 구매하기
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
      </div>
    </motion.div>
  );
}

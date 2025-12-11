import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Truck,
  Package,
  CheckCircle,
  Clock,
  MapPin,
  User,
  Calendar,
  Search,
  Filter,
  Download,
  FileText,
  TrendingUp,
  AlertCircle,
  Navigation,
  Gauge,
  Box,
  Users,
  BarChart3
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

// 타입 정의
interface ShippingOrder {
  id: string;
  product_number?: string;  // 제품번호 (판매가능 상태에서 생성)
  serial_number?: string;   // 일련번호 (추적용)
  order_number?: string;    // 기존 주문번호 (하위 호환성)
  customer?: string;        // 기존 고객사명 (하위 호환성)
  sales_store?: string;     // 판매점
  aggregate_type: string;
  quantity: number; // 톤
  sales_price?: number;     // 판매금액 (하위 호환성)
  sales_price_per_ton?: number;  // 톤당 판매금액
  total_sales_price?: number;    // 총 판매금액
  registration_date?: string; // 판매 등록일
  production_date?: string;   // 생산일
  shipping_date?: string;   // 출고일 (기존 필드)
  delivery_location?: string;  // 배송지 (기존 필드)
  description?: string;     // 순환 골재 설명
  vehicle_number?: string;
  driver_name?: string;
  driver_phone?: string;
  status: 'for_sale' | 'reserved' | 'loading' | 'in_transit' | 'completed';
  priority: 'normal' | 'urgent';
  aggregate_id?: string;
  quality_grade?: 'A' | 'B' | 'C';
  notes?: string;           // 기존 비고 (하위 호환성)
  waste_id?: string;        // 추적용 원본 폐기물 ID
}

interface Vehicle {
  id: string;
  vehicle_number: string;
  vehicle_type: string;
  capacity: number; // 톤
  driver_name: string;
  driver_phone: string;
  status: 'available' | 'in_use' | 'maintenance';
  current_location?: string;
}

export function ShippingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [orders, setOrders] = useState<ShippingOrder[]>([]);

  // localStorage에서 출고 예정 항목 로드
  useEffect(() => {
    const loadOrders = () => {
      const saved = localStorage.getItem('shipping_orders');
      if (saved) {
        try {
          setOrders(JSON.parse(saved));
        } catch (error) {
          console.error('출고 주문 로드 실패:', error);
        }
      }
    };

    loadOrders();

    // 주기적으로 업데이트 확인 (1초마다)
    const interval = setInterval(loadOrders, 1000);
    return () => clearInterval(interval);
  }, []);

  // 기본 Mock 데이터 (참고용 - 실제로는 사용하지 않음)
  const mockOrders: ShippingOrder[] = [
    {
      id: 'SO001',
      order_number: 'OUT-2025-1029-001',
      customer: '현대건설 주식회사',
      aggregate_type: '순환골재 40mm',
      quantity: 25,
      shipping_date: '2025-10-29',
      delivery_location: '서울시 강남구 테헤란로 521 현장',
      vehicle_number: '서울12가3456',
      driver_name: '김철수',
      driver_phone: '010-1234-5678',
      status: 'loading',
      priority: 'normal'
    },
    {
      id: 'SO002',
      order_number: 'OUT-2025-1029-002',
      customer: '삼성물산 건설부문',
      aggregate_type: '순환골재 25mm',
      quantity: 30,
      shipping_date: '2025-10-29',
      delivery_location: '경기도 성남시 분당구 판교역로 231',
      vehicle_number: '경기34나5678',
      driver_name: '이영희',
      driver_phone: '010-2345-6789',
      status: 'in_transit',
      priority: 'normal'
    },
    {
      id: 'SO003',
      order_number: 'OUT-2025-1029-003',
      customer: 'GS건설',
      aggregate_type: '순환 잔골재',
      quantity: 20,
      shipping_date: '2025-10-29',
      delivery_location: '서울시 마포구 상암동 1602',
      status: 'scheduled',
      priority: 'normal'
    },
    {
      id: 'SO004',
      order_number: 'OUT-2025-1028-015',
      customer: '대우건설',
      aggregate_type: '순환 쇄석',
      quantity: 35,
      shipping_date: '2025-10-28',
      delivery_location: '인천시 연수구 송도동 24-5',
      vehicle_number: '인천78다9012',
      driver_name: '박민수',
      driver_phone: '010-3456-7890',
      status: 'completed',
      priority: 'normal'
    },
    {
      id: 'SO005',
      order_number: 'OUT-2025-1028-014',
      customer: '포스코건설',
      aggregate_type: '순환골재 40mm',
      quantity: 28,
      shipping_date: '2025-10-28',
      delivery_location: '부산시 해운대구 센텀중앙로 97',
      vehicle_number: '부산45라6789',
      driver_name: '최지훈',
      driver_phone: '010-4567-8901',
      status: 'completed',
      priority: 'normal'
    },
    {
      id: 'SO006',
      order_number: 'OUT-2025-1029-004',
      customer: '롯데건설',
      aggregate_type: '순환골재 25mm',
      quantity: 22,
      shipping_date: '2025-10-29',
      delivery_location: '서울시 송파구 올림픽로 300',
      status: 'scheduled',
      priority: 'normal'
    },
    {
      id: 'SO007',
      order_number: 'OUT-2025-1029-005',
      customer: '하이콘코리아 출고',
      aggregate_type: '순환 쇄석',
      quantity: 290,
      shipping_date: '2025-10-29',
      delivery_location: '경기도 화성시 제품 야적장 4',
      status: 'scheduled',
      priority: 'normal'
    }
  ];

  // 제3자 결제 처리
  const handlePayment = (orderId: string) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId 
        ? { ...order, status: 'reserved' as const }
        : order
    );
    setOrders(updatedOrders);
    
    // localStorage에 저장
    localStorage.setItem('shipping_orders', JSON.stringify(updatedOrders));
    
    // 재고 관리의 순환골재 상태도 업데이트
    const order = orders.find(o => o.id === orderId);
    if (order && order.aggregate_id) {
      const aggregates = JSON.parse(localStorage.getItem('aggregate_inventory') || '[]');
      const updatedAggregates = aggregates.map((agg: any) => {
        if (agg.id === order.aggregate_id) {
          return { ...agg, status: 'reserved' };
        }
        return agg;
      });
      localStorage.setItem('aggregate_inventory', JSON.stringify(updatedAggregates));
    }
  };

  // 차량 배차 처리
  const handleAssignVehicle = (orderId: string) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId 
        ? { 
            ...order, 
            status: 'loading' as const,
            vehicle_number: '서울78바5678',
            driver_name: '홍길동',
            driver_phone: '010-9999-8888'
          }
        : order
    );
    setOrders(updatedOrders);
    
    // localStorage에 저장
    localStorage.setItem('shipping_orders', JSON.stringify(updatedOrders));
    
    setActiveTab('in_progress');
  };

  // 배송 시작 처리
  const handleStartDelivery = (orderId: string) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId 
        ? { ...order, status: 'in_transit' as const }
        : order
    );
    setOrders(updatedOrders);
    
    // localStorage에 저장
    localStorage.setItem('shipping_orders', JSON.stringify(updatedOrders));
    
    // 재고 관리에 배송중 상태 업데이트
    const order = orders.find(o => o.id === orderId);
    if (order) {
      localStorage.setItem(`inventory_status_${order.aggregate_type}`, 'in_transit');
    }
  };

  // 배송 완료 처리
  const handleCompleteDelivery = (orderId: string) => {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    // 주문 상태를 완료로 변경
    const updatedOrders = orders.map(o => 
      o.id === orderId 
        ? { ...o, status: 'completed' as const }
        : o
    );
    setOrders(updatedOrders);
    
    // localStorage에 저장
    localStorage.setItem('shipping_orders', JSON.stringify(updatedOrders));

    // 판매 완료 기록 생성
    const salesRecord = {
      id: `S${Date.now()}`,
      sale_date: new Date().toISOString().split('T')[0],
      customer: order.customer,
      aggregate_type: order.aggregate_type,
      quantity: order.quantity,
      unit_price: 15000, // 기본 단가
      total_amount: order.quantity * 15000,
      delivery_location: order.delivery_location,
      quality_grade: 'A' as const,
      payment_status: 'paid' as const,
      order_number: order.order_number,
      vehicle_number: order.vehicle_number,
      driver_name: order.driver_name
    };

    // localStorage에 판매 기록 저장
    const existingSales = JSON.parse(localStorage.getItem('sales_records') || '[]');
    existingSales.push(salesRecord);
    localStorage.setItem('sales_records', JSON.stringify(existingSales));

    // 재고 상태 초기화
    localStorage.removeItem(`inventory_status_${order.aggregate_type}`);

    setActiveTab('completed');
  };

  // Mock 데이터 - 차량
  const vehicles: Vehicle[] = [
    {
      id: 'V001',
      vehicle_number: '서울12가3456',
      vehicle_type: '25톤 덤프트럭',
      capacity: 25,
      driver_name: '김철수',
      driver_phone: '010-1234-5678',
      status: 'in_use',
      current_location: '테헤란로 현장 적재중'
    },
    {
      id: 'V002',
      vehicle_number: '경기34나5678',
      vehicle_type: '25톤 덤프트럭',
      capacity: 25,
      driver_name: '이영희',
      driver_phone: '010-2345-6789',
      status: 'in_use',
      current_location: '판교 현장 배송중'
    },
    {
      id: 'V003',
      vehicle_number: '서울56다7890',
      vehicle_type: '30톤 덤프트럭',
      capacity: 30,
      driver_name: '정태호',
      driver_phone: '010-5678-9012',
      status: 'available',
      current_location: '공장 대기중'
    },
    {
      id: 'V004',
      vehicle_number: '경기78라1234',
      vehicle_type: '25톤 덤프트럭',
      capacity: 25,
      driver_name: '강서연',
      driver_phone: '010-6789-0123',
      status: 'available',
      current_location: '공장 대기중'
    },
    {
      id: 'V005',
      vehicle_number: '인천90마2345',
      vehicle_type: '20톤 덤프트럭',
      capacity: 20,
      driver_name: '윤동주',
      driver_phone: '010-7890-1234',
      status: 'maintenance',
      current_location: '정비소'
    }
  ];

  // 주간 출고 데이터
  const weeklyShippingData = [
    { date: '10/23', 출고량: 380, 배송건수: 18 },
    { date: '10/24', 출고량: 420, 배송건수: 20 },
    { date: '10/25', 출고량: 450, 배송건수: 22 },
    { date: '10/26', 출고량: 410, 배송건수: 19 },
    { date: '10/27', 출고량: 480, 배송건수: 24 },
    { date: '10/28', 출고량: 440, 배송건수: 21 },
    { date: '10/29', 출고량: 470, 배송건수: 23 }
  ];

  // 고객사별 출고 현황
  const customerShippingData = [
    { name: '현대건설', value: 580 },
    { name: '삼성물산', value: 520 },
    { name: 'GS건설', value: 410 },
    { name: '대우건설', value: 380 },
    { name: '기타', value: 350 }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#6b7280'];

  // 통계 계산
  const todayScheduled = orders.filter(o => (o.status === 'for_sale' || o.status === 'reserved') && o.shipping_date === '2025-10-29').length;
  const inProgress = orders.filter(o => o.status === 'loading' || o.status === 'in_transit').length;
  const todayCompleted = orders.filter(o => o.status === 'completed' && o.shipping_date === '2025-10-29').length;
  const vehicleUtilization = Math.round((vehicles.filter(v => v.status === 'in_use').length / vehicles.length) * 100);
  const availableVehicles = vehicles.filter(v => v.status === 'available').length;

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { variant: any; label: string; icon: any; color: string }> = {
      for_sale: { variant: 'outline', label: '판매중', icon: Package, color: 'bg-blue-100 text-blue-700 border-blue-200' },
      reserved: { variant: 'secondary', label: '출고예정', icon: Clock, color: 'bg-orange-100 text-orange-700 border-orange-200' },
      loading: { variant: 'default', label: '적재중', icon: Package, color: 'bg-purple-100 text-purple-700 border-purple-200' },
      in_transit: { variant: 'default', label: '배송중', icon: Truck, color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
      completed: { variant: 'outline', label: '출고완료', icon: CheckCircle, color: 'bg-green-100 text-green-700 border-green-200' }
    };
    
    const config = statusConfig[status] || { variant: 'outline', label: status, icon: Package, color: '' };
    const Icon = config.icon;
    
    return (
      <Badge variant={config.variant} className={`gap-1 ${config.color}`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </Badge>
    );
  };

  const getVehicleStatusBadge = (status: string) => {
    const statusConfig: Record<string, { color: string; label: string }> = {
      available: { color: 'bg-green-100 text-green-700 border-green-200', label: '대기중' },
      in_use: { color: 'bg-blue-100 text-blue-700 border-blue-200', label: '운행중' },
      maintenance: { color: 'bg-red-100 text-red-700 border-red-200', label: '정비중' }
    };
    
    const config = statusConfig[status] || { color: '', label: status };
    
    return (
      <Badge variant="outline" className={config.color}>
        {config.label}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const formatTime = (dateString: string) => {
    return '09:00'; // Mock time
  };

  return (
    <div className="h-screen overflow-y-auto bg-gray-50">
      <div className="p-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* 헤더 */}
          <div className="mb-8">
            <h1 className="text-3xl mb-2">출고 관리</h1>
            <p className="text-gray-600">순환골재 출고 및 배송 현황 관리</p>
          </div>

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  금일 출고 예정
                </CardDescription>
                <CardTitle className="text-3xl">{todayScheduled}건</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <Package className="w-4 h-4" />
                  <span>대기중 차량 {availableVehicles}대</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  출고 진행중
                </CardDescription>
                <CardTitle className="text-3xl">{inProgress}건</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-purple-600">
                  <Navigation className="w-4 h-4" />
                  <span>배송중 차량 {vehicles.filter(v => v.status === 'in_use').length}대</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  금일 출고 완료
                </CardDescription>
                <CardTitle className="text-3xl">{todayCompleted}건</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>목표 대비 95%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Gauge className="w-4 h-4" />
                  차량 가동률
                </CardDescription>
                <CardTitle className="text-3xl">{vehicleUtilization}%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-orange-600">
                  <Truck className="w-4 h-4" />
                  <span>총 {vehicles.length}대 운영중</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 탭 컨텐츠 */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <TabsList className="w-full lg:w-auto grid grid-cols-3 sm:grid-cols-5 gap-1">
                <TabsTrigger value="overview" className="gap-2 flex-1 lg:flex-initial">
                  <BarChart3 className="w-4 h-4" />
                  <span className="hidden sm:inline">출고 현황</span>
                </TabsTrigger>
                <TabsTrigger value="scheduled" className="gap-2 flex-1 lg:flex-initial">
                  <Clock className="w-4 h-4" />
                  <span className="hidden sm:inline">출고 예정</span> ({orders.filter(o => o.status === 'for_sale' || o.status === 'reserved').length})
                </TabsTrigger>
                <TabsTrigger value="in_progress" className="gap-2 flex-1 lg:flex-initial">
                  <Truck className="w-4 h-4" />
                  <span className="hidden sm:inline">진행중</span> ({orders.filter(o => o.status === 'loading' || o.status === 'in_transit').length})
                </TabsTrigger>
                <TabsTrigger value="completed" className="gap-2 flex-1 lg:flex-initial">
                  <CheckCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">출고 완료</span> ({orders.filter(o => o.status === 'completed').length})
                </TabsTrigger>
                <TabsTrigger value="vehicles" className="gap-2 flex-1 lg:flex-initial">
                  <Gauge className="w-4 h-4" />
                  <span className="hidden sm:inline">차량 관리</span> ({vehicles.length})
                </TabsTrigger>
              </TabsList>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2 flex-1 sm:flex-initial">
                    <Filter className="w-4 h-4" />
                    <span className="hidden md:inline">필터</span>
                  </Button>
                  <Button variant="outline" className="gap-2 flex-1 sm:flex-initial">
                    <Download className="w-4 h-4" />
                    <span className="hidden md:inline">내보내기</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* 출고 현황 탭 */}
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 주간 출고량 추이 */}
                <Card>
                  <CardHeader>
                    <CardTitle>주간 출고량 추이</CardTitle>
                    <CardDescription>최근 7일간 출고량 및 배송 건수</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={weeklyShippingData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                        <XAxis 
                          dataKey="date" 
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis 
                          yAxisId="left"
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                          axisLine={false}
                          tickLine={false}
                          label={{ value: '톤', angle: 0, position: 'top', offset: 10, style: { fontSize: 12, fill: '#374151', fontWeight: 600 } }}
                        />
                        <YAxis 
                          yAxisId="right"
                          orientation="right"
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                          axisLine={false}
                          tickLine={false}
                          label={{ value: '건', angle: 0, position: 'top', offset: 10, style: { fontSize: 12, fill: '#374151', fontWeight: 600 } }}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            borderRadius: '8px', 
                            border: 'none', 
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                          }}
                        />
                        <Legend wrapperStyle={{ fontSize: 12 }} />
                        <Line yAxisId="left" type="monotone" dataKey="출고량" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                        <Line yAxisId="right" type="monotone" dataKey="배송건수" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* 고객사별 출고 현황 */}
                <Card>
                  <CardHeader>
                    <CardTitle>고객사별 출고 현황</CardTitle>
                    <CardDescription>이번 달 고객사별 출고량 (톤)</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={customerShippingData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}톤`}
                          outerRadius={90}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {customerShippingData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: any) => `${value}톤`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 출고 예정 탭 */}
            <TabsContent value="scheduled" className="space-y-4">
              {orders.filter(o => o.status === 'for_sale' || o.status === 'reserved').length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Clock className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-lg mb-2 text-gray-600">등록된 출고 예정이 없습니다</h3>
                    <p className="text-sm text-gray-500">재고 관리 메뉴의 순환골재 재고 탭에서 출고를 등록해주세요</p>
                  </CardContent>
                </Card>
              ) : null}
              {orders.filter(o => o.status === 'for_sale' || o.status === 'reserved').map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-lg md:text-xl">
                            {order.product_number || order.order_number || order.id}
                          </h3>
                          {getStatusBadge(order.status)}
                          {order.serial_number && (
                            <Badge variant="outline" className="gap-1 bg-orange-50 text-orange-700 border-orange-200">
                              <Package className="w-3 h-3" />
                              일련번호: {order.serial_number}
                            </Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                          <div className="space-y-2">
                            {order.sales_store && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">판매점</span>
                                <span className="font-medium">{order.sales_store}</span>
                              </div>
                            )}
                            {order.customer && !order.sales_store && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">고객사</span>
                                <span className="font-medium">{order.customer}</span>
                              </div>
                            )}
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">제품명</span>
                              <span className="font-medium">{order.aggregate_type}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">수량</span>
                              <span className="font-medium">{order.quantity.toLocaleString()}톤</span>
                            </div>
                            {order.sales_price_per_ton && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">톤당 금액</span>
                                <span className="font-medium text-blue-600">{order.sales_price_per_ton.toLocaleString()}원/톤</span>
                              </div>
                            )}
                            {order.total_sales_price && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">총 판매금액</span>
                                <span className="font-medium text-green-600">{order.total_sales_price.toLocaleString()}원</span>
                              </div>
                            )}
                            {/* 하위 호환성: 기존 sales_price */}
                            {order.sales_price && !order.total_sales_price && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">판매금액</span>
                                <span className="font-medium text-green-600">{order.sales_price.toLocaleString()}원</span>
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            {order.production_date && (
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">생산일:</span>
                                <span className="font-medium">{formatDate(order.production_date)}</span>
                              </div>
                            )}
                            {order.registration_date && (
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">판매 등록일:</span>
                                <span className="font-medium">{formatDate(order.registration_date)}</span>
                              </div>
                            )}
                            {order.shipping_date && !order.registration_date && (
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">출고일시:</span>
                                <span className="font-medium">{formatDate(order.shipping_date)} {formatTime(order.shipping_date)}</span>
                              </div>
                            )}
                            {order.delivery_location && (
                              <div className="flex items-start gap-2 text-sm">
                                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                                <div>
                                  <span className="text-gray-600">배송지:</span>
                                  <div className="font-medium">{order.delivery_location}</div>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            {order.description && (
                              <div className="text-sm">
                                <span className="text-gray-600">골재 설명:</span>
                                <div className="font-medium text-gray-700 mt-1">{order.description}</div>
                              </div>
                            )}
                            {order.vehicle_number ? (
                              <>
                                <div className="flex items-center gap-2 text-sm">
                                  <Truck className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-600">차량:</span>
                                  <span className="font-medium">{order.vehicle_number}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <User className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-600">기사:</span>
                                  <span className="font-medium">{order.driver_name}</span>
                                </div>
                              </>
                            ) : order.status === 'reserved' ? (
                              <div className="text-sm text-orange-600">
                                <AlertCircle className="w-4 h-4 inline mr-1" />
                                차량 배차 대기
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 lg:ml-6">
                        {order.status === 'for_sale' ? (
                          <>
                            <Button 
                              className="gap-2 w-full lg:w-auto bg-green-600 hover:bg-green-700"
                              onClick={() => handlePayment(order.id)}
                            >
                              <CheckCircle className="w-4 h-4" />
                              제3자 결제
                            </Button>
                            <Button variant="outline" className="gap-2 w-full lg:w-auto">
                              <FileText className="w-4 h-4" />
                              상세정보
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button 
                              className="gap-2 w-full lg:w-auto"
                              onClick={() => handleAssignVehicle(order.id)}
                            >
                              <Truck className="w-4 h-4" />
                              차량 배차
                            </Button>
                            <Button variant="outline" className="gap-2 w-full lg:w-auto">
                              <FileText className="w-4 h-4" />
                              출하증
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* 진행중 탭 */}
            <TabsContent value="in_progress" className="space-y-4">
              {orders.filter(o => o.status === 'loading' || o.status === 'in_transit').map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-lg md:text-xl">
                            {order.product_number || order.order_number || order.id}
                          </h3>
                          {getStatusBadge(order.status)}
                          {order.serial_number && (
                            <Badge variant="outline" className="gap-1 bg-orange-50 text-orange-700 border-orange-200">
                              <Package className="w-3 h-3" />
                              일련번호: {order.serial_number}
                            </Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                          <div className="space-y-2">
                            {order.sales_store && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">판매점</span>
                                <span className="font-medium">{order.sales_store}</span>
                              </div>
                            )}
                            {order.customer && !order.sales_store && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">고객사</span>
                                <span className="font-medium">{order.customer}</span>
                              </div>
                            )}
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">제품명</span>
                              <span className="font-medium">{order.aggregate_type}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">수량</span>
                              <span className="font-medium">{order.quantity.toLocaleString()}톤</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Truck className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-600">차량:</span>
                              <span className="font-medium">{order.vehicle_number}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <User className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-600">기사:</span>
                              <span className="font-medium">{order.driver_name}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-gray-600">연락처:</span>
                              <span className="font-medium">{order.driver_phone}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {order.delivery_location ? (
                              <div className="flex items-start gap-2 text-sm">
                                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                                <div>
                                  <span className="text-gray-600">배송지:</span>
                                  <div className="font-medium">{order.delivery_location}</div>
                                </div>
                              </div>
                            ) : (
                              <div className="text-sm text-gray-500">배송지 정보 없음</div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 lg:ml-6">
                        {order.status === 'loading' && (
                          <Button 
                            className="gap-2 w-full lg:w-auto"
                            onClick={() => handleStartDelivery(order.id)}
                          >
                            <Truck className="w-4 h-4" />
                            배송 시작
                          </Button>
                        )}
                        {order.status === 'in_transit' && (
                          <Button 
                            className="gap-2 w-full lg:w-auto"
                            onClick={() => handleCompleteDelivery(order.id)}
                          >
                            <CheckCircle className="w-4 h-4" />
                            배송 완료
                          </Button>
                        )}
                        <Button variant="outline" className="gap-2 w-full lg:w-auto">
                          <Navigation className="w-4 h-4" />
                          위치 추적
                        </Button>
                        <Button variant="outline" className="gap-2 w-full lg:w-auto">
                          <FileText className="w-4 h-4" />
                          출하증
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* 출고 완료 탭 */}
            <TabsContent value="completed" className="space-y-4">
              {orders.filter(o => o.status === 'completed').map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-lg md:text-xl">
                            {order.product_number || order.order_number || order.id}
                          </h3>
                          {getStatusBadge(order.status)}
                          {order.serial_number && (
                            <Badge variant="outline" className="gap-1 bg-orange-50 text-orange-700 border-orange-200">
                              <Package className="w-3 h-3" />
                              일련번호: {order.serial_number}
                            </Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                          <div className="space-y-2">
                            {order.sales_store && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">판매점</span>
                                <span className="font-medium">{order.sales_store}</span>
                              </div>
                            )}
                            {order.customer && !order.sales_store && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">고객사</span>
                                <span className="font-medium">{order.customer}</span>
                              </div>
                            )}
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">제품명</span>
                              <span className="font-medium">{order.aggregate_type}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">수량</span>
                              <span className="font-medium">{order.quantity.toLocaleString()}톤</span>
                            </div>
                            {order.sales_price_per_ton && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">톤당 금액</span>
                                <span className="font-medium text-blue-600">{order.sales_price_per_ton.toLocaleString()}원/톤</span>
                              </div>
                            )}
                            {order.total_sales_price && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">총 판매금액</span>
                                <span className="font-medium text-green-600">{order.total_sales_price.toLocaleString()}원</span>
                              </div>
                            )}
                            {/* 하위 호환성: 기존 sales_price */}
                            {order.sales_price && !order.total_sales_price && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">판매금액</span>
                                <span className="font-medium text-green-600">{order.sales_price.toLocaleString()}원</span>
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            {order.registration_date && (
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">판매 등록일:</span>
                                <span className="font-medium">{formatDate(order.registration_date)}</span>
                              </div>
                            )}
                            {order.shipping_date && (
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">출고일:</span>
                                <span className="font-medium">{formatDate(order.shipping_date)}</span>
                              </div>
                            )}
                            {order.vehicle_number && (
                              <div className="flex items-center gap-2 text-sm">
                                <Truck className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">차량:</span>
                                <span className="font-medium">{order.vehicle_number}</span>
                              </div>
                            )}
                            {order.driver_name && (
                              <div className="flex items-center gap-2 text-sm">
                                <User className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">기사:</span>
                                <span className="font-medium">{order.driver_name}</span>
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            {order.delivery_location && (
                              <div className="flex items-start gap-2 text-sm">
                                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                                <div>
                                  <span className="text-gray-600">배송지:</span>
                                  <div className="font-medium">{order.delivery_location}</div>
                                </div>
                              </div>
                            )}
                            {order.description && (
                              <div className="text-sm mt-2">
                                <span className="text-gray-600">골재 설명:</span>
                                <div className="font-medium text-gray-700 mt-1">{order.description}</div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 lg:ml-6">
                        <Button variant="outline" className="gap-2 w-full lg:w-auto">
                          <FileText className="w-4 h-4" />
                          출하증 출력
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* 차량 관리 탭 */}
            <TabsContent value="vehicles" className="space-y-4">
              {vehicles.map((vehicle) => (
                <Card key={vehicle.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-lg md:text-xl">{vehicle.vehicle_number}</h3>
                          {getVehicleStatusBadge(vehicle.status)}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">차량 종류</span>
                              <span className="font-medium">{vehicle.vehicle_type}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">적재 용량</span>
                              <span className="font-medium">{vehicle.capacity}톤</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <User className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-600">기사:</span>
                              <span className="font-medium">{vehicle.driver_name}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-gray-600">연락처:</span>
                              <span className="font-medium">{vehicle.driver_phone}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-start gap-2 text-sm">
                              <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                              <div>
                                <span className="text-gray-600">현재 위치:</span>
                                <div className="font-medium">{vehicle.current_location}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 lg:ml-6">
                        {vehicle.status === 'available' && (
                          <Button className="gap-2 flex-1 lg:flex-initial">
                            <Truck className="w-4 h-4" />
                            <span className="hidden sm:inline">배차</span>
                          </Button>
                        )}
                        {vehicle.status === 'in_use' && (
                          <Button variant="outline" className="gap-2 flex-1 lg:flex-initial">
                            <Navigation className="w-4 h-4" />
                            <span className="hidden sm:inline">추적</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}

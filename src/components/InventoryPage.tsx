import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Package, 
  TrendingUp, 
  TrendingDown,
  ArrowRight,
  Search,
  Filter,
  Download,
  AlertTriangle,
  CheckCircle,
  Clock,
  Recycle,
  Truck,
  Factory,
  BarChart3,
  Plus,
  Eye,
  X,
  Play
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { WasteDetailDialog } from './WasteDetailDialog';
import { StartProductionDialog } from './StartProductionDialog';
import { baseProductionRecords } from '../lib/production-data';
import { baseWasteInventory } from '../lib/waste-inventory-data';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

// 차량별 운송 정보
interface DeliveryInfo {
  vehicle_number: string;
  transport_company: string;
  departure_time: string;
  arrival_time: string;
  transported_amount: number;
  driver_name?: string;
}

// 타입 정의
interface WasteInventory {
  id: string;
  waste_type: string;
  quantity: number; // 톤
  location: string;
  received_date: string;
  supplier: string;
  status: 'pending' | 'processing' | 'processed';
  // 처리중일 때 추가되는 생산 정보
  production_date?: string;
  production_time?: string;
  production_line?: string;
  production_aggregate_type?: string;
  production_duration?: number; // 분
  // 공급/운송 정보 (올바로 시스템 연동)
  contract_number?: string;
  delivery_batch?: string;
  predicted_supply_amount?: number;
  deliveries?: DeliveryInfo[];
}

interface AggregateInventory {
  id: string;
  aggregate_type: string;
  quantity: number; // 톤
  location: string;
  production_date: string;
  quality_grade: 'A' | 'B' | 'C';
  status: 'available' | 'reserved' | 'shipped' | 'in_transit';
  created_at?: string; // 순환골재 생성 시간 (ISO 8601)
  waste_id?: string; // 원본 폐기물 ID
}

interface SalesRecord {
  id: string;
  sale_date: string;
  customer: string;
  aggregate_type: string;
  quantity: number; // 톤
  unit_price: number; // 원/톤
  total_amount: number; // 원
  delivery_location: string;
  quality_grade: 'A' | 'B' | 'C';
  payment_status: 'paid' | 'pending' | 'overdue';
  order_number?: string;
  vehicle_number?: string;
  driver_name?: string;
}

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
  completed_at?: string; // 생산 완료 시간 (ISO 8601)
}

export function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [dynamicSalesRecords, setDynamicSalesRecords] = useState<SalesRecord[]>([]);
  const [aggregateStatuses, setAggregateStatuses] = useState<Record<string, string>>({});
  const [dynamicAggregateInventory, setDynamicAggregateInventory] = useState<AggregateInventory[]>([]);
  const [selectedWaste, setSelectedWaste] = useState<WasteInventory | null>(null);
  const [showWasteDetail, setShowWasteDetail] = useState(false);
  const [showStartProduction, setShowStartProduction] = useState(false);
  const [productionRecords, setProductionRecords] = useState<ProductionRecord[]>([]);
  const [wasteInventory, setWasteInventory] = useState<WasteInventory[]>(baseWasteInventory);
  const [showMoveConfirm, setShowMoveConfirm] = useState(false);
  const [wasteToMove, setWasteToMove] = useState<WasteInventory | null>(null);
  
  // 출고 등록 다이얼로그 상태
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);
  const [selectedAggregate, setSelectedAggregate] = useState<AggregateInventory | null>(null);
  const [registerForm, setRegisterForm] = useState({
    serial_number: '',  // 일련번호 (골재 추적용)
    quantity: '',
    sales_price: '',    // 판매금액
    sales_store: '',    // 판매점
    registration_date: new Date().toISOString().split('T')[0],  // 판매 등록일
    production_date: '', // 생산일 (읽기 전용)
    description: ''     // 순환 골재 설명
  });

  // localStorage에서 폐기물 재고 및 생산 기록 로드
  useEffect(() => {
    const dataVersion = localStorage.getItem('waste_data_version');
    const currentVersion = '5.1'; // 폐기물 상태 초기화 버전 (W004 pending 복구)
    
    // 버전이 다르거나 없으면 초기화
    if (dataVersion !== currentVersion) {
      console.log('데이터 버전 업데이트: 판매중/예약중 상태 추가');
      setWasteInventory(baseWasteInventory);
      setProductionRecords(baseProductionRecords);
      
      // 순환골재도 초기화 (W001, W003, W005, W007에서 생성된 것들)
      const cleanAggregateInventory = [
        {
          id: 'A001',
          aggregate_type: '순환골재 40mm',
          quantity: 404,
          location: '제품 야적장 1',
          production_date: '2025-10-30',
          quality_grade: 'A',
          status: 'available',
          waste_id: 'W001'
        },
        {
          id: 'A002',
          aggregate_type: '순환 쇄석',
          quantity: 144,
          location: '제품 야적장 2',
          production_date: '2025-10-30',
          quality_grade: 'B',
          status: 'available',
          waste_id: 'W003'
        },
        {
          id: 'A003',
          aggregate_type: '순환골재 25mm',
          quantity: 442,
          location: '제품 야적장 3',
          production_date: '2025-10-30',
          quality_grade: 'A',
          status: 'available',
          waste_id: 'W005'
        },
        {
          id: 'A004',
          aggregate_type: '순환골재 40mm',
          quantity: 355,
          location: '제품 야적장 4',
          production_date: '2025-10-29',
          quality_grade: 'A',
          status: 'available',
          waste_id: 'W007'
        }
      ];
      
      localStorage.setItem('waste_inventory', JSON.stringify(baseWasteInventory));
      localStorage.setItem('production_records', JSON.stringify(baseProductionRecords));
      localStorage.setItem('aggregate_inventory', JSON.stringify(cleanAggregateInventory));
      localStorage.setItem('shipping_orders', JSON.stringify([])); // 출고 주문 초기화
      localStorage.setItem('waste_data_version', currentVersion);
      setDynamicAggregateInventory(cleanAggregateInventory);
      return;
    }
    
    // 폐기물 재고 로드
    const savedWasteInventory = localStorage.getItem('waste_inventory');
    if (savedWasteInventory) {
      try {
        const parsed = JSON.parse(savedWasteInventory);
        // deliveries 필드가 있는지 확인
        const hasDeliveries = parsed.some((item: WasteInventory) => item.deliveries !== undefined);
        if (!hasDeliveries) {
          console.log('운송 정보 없음: baseWasteInventory로 초기화');
          setWasteInventory(baseWasteInventory);
          localStorage.setItem('waste_inventory', JSON.stringify(baseWasteInventory));
        } else {
          setWasteInventory(parsed);
        }
      } catch (error) {
        console.error('폐기물 재고 로드 실패:', error);
        setWasteInventory(baseWasteInventory);
      }
    } else {
      // localStorage에 데이터가 없으면 baseWasteInventory 저장
      setWasteInventory(baseWasteInventory);
      localStorage.setItem('waste_inventory', JSON.stringify(baseWasteInventory));
    }

    // 생산 기록 로드
    const savedProductionRecords = localStorage.getItem('production_records');
    if (savedProductionRecords) {
      try {
        setProductionRecords(JSON.parse(savedProductionRecords));
      } catch (error) {
        console.error('생산 기록 로드 실패:', error);
        setProductionRecords(baseProductionRecords);
        localStorage.setItem('production_records', JSON.stringify(baseProductionRecords));
      }
    } else {
      setProductionRecords(baseProductionRecords);
      localStorage.setItem('production_records', JSON.stringify(baseProductionRecords));
    }
  }, []);

  // Mock 데이터 - 순환골재 재고 (기본)
  // 버전 4.0부터는 초기화 시에만 사용되므로 빈 배열
  // 실제 데이터는 localStorage의 aggregate_inventory에서 로드됨
  const baseAggregateInventory: AggregateInventory[] = [];

  // 순환골재로 이동 버튼 클릭 시 확인 다이얼로그 표시
  const handleMoveToAggregateClick = (waste: WasteInventory) => {
    setWasteToMove(waste);
    setShowMoveConfirm(true);
  };

  // 폐기물 처리 완료 → 순환골재 재고로 이동 (확인 후 실행)
  const handleMoveToAggregate = () => {
    if (!wasteToMove) return;

    const waste = wasteToMove;

    // 현재 한국 시간 생성 (KST, UTC+9)
    const now = new Date();
    const kstOffset = 9 * 60; // 9시간을 분으로
    const kstTime = new Date(now.getTime() + kstOffset * 60 * 1000);
    const createdAt = kstTime.toISOString();

    // 고유 일련번호 생성 (AGG + timestamp)
    const aggregateId = `AGG${Date.now().toString().slice(-8)}`;

    // 순환골재로 변환
    const newAggregate: AggregateInventory = {
      id: aggregateId,
      aggregate_type: waste.production_aggregate_type || waste.waste_type.replace('폐기물', '순환골재'),
      quantity: Math.floor(waste.quantity * 0.85), // 처리 과정에서 15% 손실 가정
      location: '제품 야적장',
      production_date: new Date().toISOString().split('T')[0],
      quality_grade: 'A',
      status: 'available',
      created_at: createdAt,
      waste_id: waste.id
    };

    // 기존 동적 재고와 병합
    const existingAggregates = JSON.parse(localStorage.getItem('aggregate_inventory') || '[]');
    existingAggregates.unshift(newAggregate); // 최신 항목을 맨 앞에 추가
    localStorage.setItem('aggregate_inventory', JSON.stringify(existingAggregates));

    // 폐기물 재고에서 제거
    const updatedWasteInventory = wasteInventory.filter(w => w.id !== waste.id);
    localStorage.setItem('waste_inventory', JSON.stringify(updatedWasteInventory));
    setWasteInventory(updatedWasteInventory);

    // 즉시 상태 업데이트
    setDynamicAggregateInventory(existingAggregates);
    
    toast.success('순환골재로 이동 완료', {
      description: `${newAggregate.aggregate_type} ${newAggregate.quantity.toLocaleString()}톤 (${aggregateId})`
    });

    // 순환골재 재고 탭으로 이동
    setActiveTab('aggregate');

    // 다이얼로그 닫기
    setShowMoveConfirm(false);
    setWasteToMove(null);
  };

  // 출고 등록 다이얼로그 열기
  const handleRegisterClick = (aggregate: AggregateInventory) => {
    setSelectedAggregate(aggregate);
    // 일련번호는 waste_id 또는 aggregate.id를 기본값으로 설정
    const serialNumber = aggregate.waste_id || aggregate.id;
    setRegisterForm({
      serial_number: serialNumber,  // 일련번호 자동 설정 (추적용)
      quantity: aggregate.quantity.toString(),
      sales_price: '',    // 판매금액은 사용자 입력
      sales_store: '',    // 판매점은 사용자 입력
      registration_date: new Date().toISOString().split('T')[0],
      production_date: aggregate.production_date, // 생산일은 순환골재 정보에서 자동 가져오기
      description: ''     // 골재 설명은 사용자 입력
    });
    setShowRegisterDialog(true);
  };

  // 출고 등록 처리
  const handleRegisterShipping = () => {
    if (!selectedAggregate) return;

    // 입력 검증
    if (!registerForm.serial_number.trim()) {
      toast.error('일련번호를 확인해주세요');
      return;
    }
    if (!registerForm.sales_store.trim()) {
      toast.error('판매점을 입력해주세요');
      return;
    }
    if (!registerForm.sales_price.trim()) {
      toast.error('판매금액을 입력해주세요');
      return;
    }
    const quantity = parseFloat(registerForm.quantity);
    if (isNaN(quantity) || quantity <= 0 || quantity > selectedAggregate.quantity) {
      toast.error(`수량을 확인해주세요 (최대 ${selectedAggregate.quantity}톤)`);
      return;
    }

    const salesPricePerTon = parseFloat(registerForm.sales_price);
    if (isNaN(salesPricePerTon) || salesPricePerTon <= 0) {
      toast.error('톤당 판매금액을 올바르게 입력해주세요');
      return;
    }

    // 총 판매금액 계산
    const totalSalesPrice = salesPricePerTon * quantity;

    // 제품번호 생성 (판매가능 상태에서만 새로운 제품번호 생성)
    const productNumber = `P${Date.now().toString().slice(-8)}`;

    // 출고 예정 항목 생성 (판매중 상태)
    const newOrder = {
      id: `SO${Date.now()}`,
      product_number: productNumber,  // 제품번호 (판매가능 상태에서 생성)
      serial_number: registerForm.serial_number.trim(),  // 일련번호 (추적용, waste_id 기반)
      sales_store: registerForm.sales_store.trim(),
      aggregate_type: selectedAggregate.aggregate_type,
      quantity: quantity,
      sales_price_per_ton: salesPricePerTon,  // 톤당 판매금액
      total_sales_price: totalSalesPrice,      // 총 판매금액
      registration_date: registerForm.registration_date,
      production_date: registerForm.production_date,
      status: 'for_sale' as const,
      priority: 'normal' as const,
      aggregate_id: selectedAggregate.id,
      quality_grade: selectedAggregate.quality_grade,
      description: registerForm.description.trim(),
      waste_id: selectedAggregate.waste_id  // 추적용 원본 폐기물 ID
    };

    // localStorage에 출고 예정 항목 저장
    const existingOrders = JSON.parse(localStorage.getItem('shipping_orders') || '[]');
    existingOrders.unshift(newOrder);
    localStorage.setItem('shipping_orders', JSON.stringify(existingOrders));

    // 순환골재 상태를 'for_sale' (판매중)으로 변경
    const existingAggregates = JSON.parse(localStorage.getItem('aggregate_inventory') || '[]');
    const updatedAggregates = existingAggregates.map((agg: AggregateInventory) => {
      if (agg.id === selectedAggregate.id) {
        return { ...agg, status: 'for_sale' };
      }
      return agg;
    });
    localStorage.setItem('aggregate_inventory', JSON.stringify(updatedAggregates));

    // 상태 업데이트
    setDynamicAggregateInventory(updatedAggregates);

    toast.success('판매 등록 완료', {
      description: `제품번호: ${productNumber} | 일련번호: ${registerForm.serial_number} | ${selectedAggregate.aggregate_type} ${quantity}톤 | 총 ${totalSalesPrice.toLocaleString()}원`
    });

    // 다이얼로그 닫기
    setShowRegisterDialog(false);
    setSelectedAggregate(null);
    setRegisterForm({
      serial_number: '',
      quantity: '',
      sales_price: '',
      sales_store: '',
      registration_date: new Date().toISOString().split('T')[0],
      production_date: '',
      description: ''
    });
  };

  // localStorage에서 판매 기록 및 재고 상태 로드 (주기적 업데이트)
  useEffect(() => {
    const loadData = () => {
      // 판매 기록 로드
      const saved = localStorage.getItem('sales_records');
      if (saved) {
        setDynamicSalesRecords(JSON.parse(saved));
      }

      // 폐기물 재고 로드 (주기적으로 업데이트, 중복 방지)
      const wasteSaved = localStorage.getItem('waste_inventory');
      if (wasteSaved) {
        try {
          const parsed = JSON.parse(wasteSaved);
          // 현재 상태와 다를 때만 업데이트 (무한 렌더링 방지)
          setWasteInventory(prevWaste => {
            if (JSON.stringify(prevWaste) !== JSON.stringify(parsed)) {
              return parsed;
            }
            return prevWaste;
          });
        } catch (error) {
          console.error('폐기물 재고 주기적 로드 실패:', error);
        }
      }

      // 순환골재 재고 로드
      const aggregateSaved = localStorage.getItem('aggregate_inventory');
      if (aggregateSaved) {
        setDynamicAggregateInventory(JSON.parse(aggregateSaved));
      }

      // 생산 기록 로드 (주기적으로 업데이트, 중복 방지)
      const productionSaved = localStorage.getItem('production_records');
      if (productionSaved) {
        try {
          const parsed = JSON.parse(productionSaved);
          // 현재 상태와 다를 때만 업데이트 (무한 렌더링 방지)
          setProductionRecords(prevRecords => {
            if (JSON.stringify(prevRecords) !== JSON.stringify(parsed)) {
              return parsed;
            }
            return prevRecords;
          });
        } catch (error) {
          console.error('생산 기록 주기적 로드 실패:', error);
        }
      }

      // 재고 상태 로드 (배송중 상태 등)
      const statuses: Record<string, string> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('inventory_status_')) {
          const aggregateType = key.replace('inventory_status_', '');
          statuses[aggregateType] = localStorage.getItem(key) || '';
        }
      }
      setAggregateStatuses(statuses);
    };

    loadData();

    // 주기적으로 업데이트 확인 (다른 탭/페이지에서 변경될 수 있음)
    const interval = setInterval(loadData, 1000);
    return () => clearInterval(interval);
  }, []);



  // Mock 데이터 - 판매 완료 기록
  const baseSalesRecords: SalesRecord[] = [
    {
      id: 'S001',
      sale_date: '2025-10-29',
      customer: '현대건설 주식회사',
      aggregate_type: '순환골재 40mm',
      quantity: 380,
      unit_price: 15000,
      total_amount: 5700000,
      delivery_location: '서울시 강남구 테헤란로 공사현장',
      quality_grade: 'A',
      payment_status: 'paid'
    },
    {
      id: 'S002',
      sale_date: '2025-10-28',
      customer: '삼성물산 건설부문',
      aggregate_type: '순환골재 25mm',
      quantity: 450,
      unit_price: 14000,
      total_amount: 6300000,
      delivery_location: '경기도 성남시 판교 신축현장',
      quality_grade: 'A',
      payment_status: 'paid'
    },
    {
      id: 'S003',
      sale_date: '2025-10-27',
      customer: '대우건설',
      aggregate_type: '순환 잔골재',
      quantity: 280,
      unit_price: 12000,
      total_amount: 3360000,
      delivery_location: '인천시 송도 도로공사',
      quality_grade: 'B',
      payment_status: 'pending'
    },
    {
      id: 'S004',
      sale_date: '2025-10-26',
      customer: 'GS건설',
      aggregate_type: '순환 쇄석',
      quantity: 520,
      unit_price: 13500,
      total_amount: 7020000,
      delivery_location: '서울시 마포구 상암동 개발지구',
      quality_grade: 'A',
      payment_status: 'paid'
    },
    {
      id: 'S005',
      sale_date: '2025-10-25',
      customer: '포스코건설',
      aggregate_type: '순환골재 40mm',
      quantity: 410,
      unit_price: 15000,
      total_amount: 6150000,
      delivery_location: '부산시 해운대구 신축현장',
      quality_grade: 'A',
      payment_status: 'overdue'
    }
  ];

  // 모든 판매 기록 병합 (동적 + 기본)
  const salesRecords = [...dynamicSalesRecords, ...baseSalesRecords];

  // 모든 순환골재 재고 병합 (동적 + 기본)
  const aggregateInventory = [...dynamicAggregateInventory, ...baseAggregateInventory];

  // 주간 생산 데이터
  const weeklyProductionData = [
    { date: '10/23', 폐기물입고: 450, 골재생산: 405, 골재출고: 380 },
    { date: '10/24', 폐기물입고: 520, 골재생산: 468, 골재출고: 420 },
    { date: '10/25', 폐기물입고: 480, 골재생산: 432, 골재출고: 450 },
    { date: '10/26', 폐기물입고: 550, 골재생산: 495, 골재출고: 410 },
    { date: '10/27', 폐기물입고: 490, 골재생산: 441, 골재출고: 480 },
    { date: '10/28', 폐기물입고: 530, 골재생산: 477, 골재출고: 440 },
    { date: '10/29', 폐기물입고: 510, 골재생산: 459, 골재출고: 470 }
  ];

  // 주간 판매 데이터
  const weeklySalesData = [
    { date: '10/23', 판매량: 380, 판매금액: 5320 },
    { date: '10/24', 판매량: 420, 판매금액: 5880 },
    { date: '10/25', 판매량: 450, 판매금액: 6150 },
    { date: '10/26', 판매량: 410, 판매금액: 5740 },
    { date: '10/27', 판매량: 480, 판매금액: 6720 },
    { date: '10/28', 판매량: 440, 판매금액: 6160 },
    { date: '10/29', 판매량: 470, 판매금액: 6580 }
  ];

  // 재고 유형별 분포 데이터
  const wasteTypeDistribution = [
    { name: '콘크리트', value: 450 },
    { name: '아스팔트', value: 320 },
    { name: '벽돌', value: 180 },
    { name: '혼합골재', value: 275 }
  ];

  const aggregateTypeDistribution = [
    { name: '40mm', value: 580 },
    { name: '25mm', value: 420 },
    { name: '잔골재', value: 350 },
    { name: '쇄석', value: 290 }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

  // 통계 계산
  const totalWasteInventory = wasteInventory.reduce((sum, item) => sum + item.quantity, 0);
  const totalAggregateInventory = aggregateInventory.reduce((sum, item) => sum + item.quantity, 0);
  const totalSalesAmount = salesRecords.reduce((sum, item) => sum + item.total_amount, 0);
  const todayProduction = weeklyProductionData[weeklyProductionData.length - 1]?.골재생산 || 0;

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { variant: any; label: string; icon: any; color?: string }> = {
      pending: { variant: 'secondary', label: '대기중', icon: Clock },
      processing: { variant: 'default', label: '처리중', icon: Recycle },
      processed: { variant: 'outline', label: '처리완료', icon: CheckCircle },
      available: { variant: 'default', label: '판매가능', icon: CheckCircle, color: 'bg-green-100 text-green-700 border-green-200' },
      for_sale: { variant: 'outline', label: '판매중', icon: Package, color: 'bg-blue-100 text-blue-700 border-blue-200' },
      reserved: { variant: 'outline', label: '예약중', icon: Clock, color: 'bg-orange-100 text-orange-700 border-orange-200' },
      shipped: { variant: 'outline', label: '출고', icon: Truck },
      in_transit: { variant: 'default', label: '배송중', icon: Truck }
    };
    
    const config = statusConfig[status] || { variant: 'outline', label: status, icon: Package };
    const Icon = config.icon;
    
    return (
      <Badge variant={config.variant} className={`gap-1 ${config.color || ''}`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </Badge>
    );
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  // 생산 시작 핸들러
  const handleStartProduction = (wasteId: string, productionLine: string, aggregateType: string, estimatedDuration: number) => {
    const now = new Date();
    const productionDate = now.toISOString().split('T')[0];
    const productionTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    // 현재 폐기물 찾기
    const currentWaste = wasteInventory.find(w => w.id === wasteId);
    if (!currentWaste) {
      toast.error('폐기물을 찾을 수 없습니다');
      return;
    }

    // wasteInventory 업데이트 (localStorage에 저장)
    const updatedWaste = wasteInventory.map(waste => {
      if (waste.id === wasteId) {
        return {
          ...waste,
          status: 'processing' as const,
          production_date: productionDate,
          production_time: productionTime,
          production_line: productionLine,
          production_aggregate_type: aggregateType,
          production_duration: estimatedDuration
        };
      }
      return waste;
    });

    // localStorage에 저장
    localStorage.setItem('waste_inventory', JSON.stringify(updatedWaste));

    // 생산 기록 생성
    const newProductionRecord: ProductionRecord = {
      id: `PR-${wasteId}-${Date.now()}`,
      date: productionDate,
      time: productionTime,
      line_name: productionLine,
      waste_input_type: currentWaste.waste_type,
      waste_input_quantity: currentWaste.quantity,
      aggregate_output_type: aggregateType,
      aggregate_output_quantity: Math.round(currentWaste.quantity * 0.85), // 85% 전환율 가정
      conversion_rate: 85,
      quality_grade: 'A',
      duration: estimatedDuration,
      waste_id: wasteId
    };

    // 기존 생산 기록 로드
    const savedRecords = localStorage.getItem('production_records');
    const existingRecords = savedRecords ? JSON.parse(savedRecords) : [];
    
    // 새 생산 기록 추가
    const updatedRecords = [...existingRecords, newProductionRecord];
    localStorage.setItem('production_records', JSON.stringify(updatedRecords));

    // 상태 즉시 업데이트 (새로고침 없이)
    setWasteInventory(updatedWaste);
    setProductionRecords(updatedRecords);

    toast.success(`${wasteId} 생산 시작됨`, {
      description: `${productionLine}에서 ${aggregateType} 생산 시작`,
    });

    // 다이얼로그 닫기
    setShowStartProduction(false);
    setSelectedWaste(null);
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
            <h1 className="text-3xl mb-2">재고 관리</h1>
            <p className="text-gray-600">폐기물 입고부터 순환골재 생산 및 출고까지 통합 관리</p>
          </div>

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  폐기물 재고
                </CardDescription>
                <CardTitle className="text-3xl">{totalWasteInventory.toLocaleString()}톤</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-orange-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span>처리 대기 {wasteInventory.filter(w => w.status === 'pending').length}건</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Recycle className="w-4 h-4" />
                  순환골재 재고
                </CardDescription>
                <CardTitle className="text-3xl">{totalAggregateInventory.toLocaleString()}톤</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>판매가능 {aggregateInventory.filter(a => a.status === 'available').length}건</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Factory className="w-4 h-4" />
                  금일 생산량
                </CardDescription>
                <CardTitle className="text-3xl">{todayProduction.toLocaleString()}톤</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>생산 효율 90%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  주간 출고량
                </CardDescription>
                <CardTitle className="text-3xl">
                  {weeklyProductionData.reduce((sum, item) => sum + item.골재출고, 0).toLocaleString()}톤
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-purple-600">
                  <BarChart3 className="w-4 h-4" />
                  <span>일평균 {Math.round(weeklyProductionData.reduce((sum, item) => sum + item.골재출고, 0) / 7)}톤</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 탭 컨텐츠 */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <TabsList className="w-full lg:w-auto">
                <TabsTrigger value="overview" className="gap-2 flex-1 lg:flex-initial">
                  <BarChart3 className="w-4 h-4" />
                  <span className="hidden sm:inline">현황 요약</span>
                </TabsTrigger>
                <TabsTrigger value="waste" className="gap-2 flex-1 lg:flex-initial">
                  <Package className="w-4 h-4" />
                  <span className="hidden sm:inline">폐기물 재고</span> ({wasteInventory.length})
                </TabsTrigger>
                <TabsTrigger value="aggregate" className="gap-2 flex-1 lg:flex-initial">
                  <Recycle className="w-4 h-4" />
                  <span className="hidden sm:inline">순환골재 재고</span> ({aggregateInventory.length})
                </TabsTrigger>
                <TabsTrigger value="sales" className="gap-2 flex-1 lg:flex-initial">
                  <Truck className="w-4 h-4" />
                  <span className="hidden sm:inline">판매 완료</span> ({salesRecords.length})
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

            {/* 현황 요약 탭 */}
            <TabsContent value="overview" className="space-y-6">
              {/* 재고 흐름 시각화 */}
              <Card>
                <CardHeader>
                  <CardTitle>재고 흐름 현황 (최근 7일)</CardTitle>
                  <CardDescription>폐기물 입고 → 순환골재 생산 → 순환골재 출고</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={weeklyProductionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                      <XAxis 
                        dataKey="date" 
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis 
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                        axisLine={false}
                        tickLine={false}
                        label={{ value: '톤', angle: 0, position: 'top', offset: 10, style: { fontSize: 12, fill: '#374151', fontWeight: 600 } }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          borderRadius: '8px', 
                          border: 'none', 
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                        }}
                        formatter={(value: any) => [`${value}톤`, '']}
                      />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                      <Line type="monotone" dataKey="폐기물입고" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
                      <Line type="monotone" dataKey="골재생산" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                      <Line type="monotone" dataKey="골재출고" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 폐기물 유형별 분포 */}
                <Card>
                  <CardHeader>
                    <CardTitle>폐기물 유형별 재고</CardTitle>
                    <CardDescription>현재 보유 중인 폐기물 종류별 수량</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={wasteTypeDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}톤`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {wasteTypeDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: any) => `${value}톤`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* 순환골재 유형별 분포 */}
                <Card>
                  <CardHeader>
                    <CardTitle>순환골재 유형별 재고</CardTitle>
                    <CardDescription>제품별 현재 재고 수량</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={aggregateTypeDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}톤`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {aggregateTypeDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: any) => `${value}톤`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* 주간 판매 실적 */}
              <Card>
                <CardHeader>
                  <CardTitle>주간 판매 실적</CardTitle>
                  <CardDescription>최근 7일간 순환골재 판매량 및 판매금액</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={weeklySalesData}>
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
                        label={{ value: '만원', angle: 0, position: 'top', offset: 10, style: { fontSize: 12, fill: '#374151', fontWeight: 600 } }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          borderRadius: '8px', 
                          border: 'none', 
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                        }}
                        formatter={(value: any, name: string) => {
                          if (name === '판매량') return [`${value}톤`, name];
                          return [`${value}만원`, name];
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                      <Bar yAxisId="left" dataKey="판매량" fill="#3b82f6" name="판매량" radius={[4, 4, 0, 0]} />
                      <Bar yAxisId="right" dataKey="판매금액" fill="#10b981" name="판매금액" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 폐기물 재고 탭 */}
            <TabsContent value="waste" className="space-y-4">
              {wasteInventory.map((waste) => (
                <Card key={waste.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-lg md:text-xl">{waste.waste_type}</h3>
                          {getStatusBadge(waste.status)}
                          <Badge variant="outline" className="gap-1 bg-slate-100 text-slate-700 border-slate-300">
                            <Package className="w-3 h-3" />
                            {waste.id}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">재고량</span>
                              <span className="font-medium">{waste.quantity.toLocaleString()}톤</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">보관위치</span>
                              <span className="font-medium">{waste.location}</span>
                            </div>
                            {waste.status === 'processing' && waste.production_line && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">투입 라인</span>
                                <span className="font-medium text-blue-600">{waste.production_line}</span>
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">반입일</span>
                              <span className="font-medium">{formatDate(waste.received_date)}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">공급업체</span>
                              <span className="font-medium">{waste.supplier}</span>
                            </div>
                            {waste.status === 'processing' && waste.production_date && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">생산 일시</span>
                                <span className="font-medium text-green-600">{formatDate(waste.production_date)} {waste.production_time}</span>
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            {waste.status === 'processing' && waste.production_aggregate_type && (
                              <>
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-600">생산 골재명</span>
                                  <span className="font-medium">{waste.production_aggregate_type}</span>
                                </div>
                                {waste.production_duration && (
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">생산 시간</span>
                                    <span className="font-medium">{waste.production_duration}분</span>
                                  </div>
                                )}
                              </>
                            )}
                            <div className="text-sm text-gray-600">
                              {waste.status === 'pending' && '처리 대기중입니다'}
                              {waste.status === 'processing' && '현재 처리가 진행중입니다'}
                              {waste.status === 'processed' && '처리가 완료되었습니다'}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 lg:ml-6">
                        {waste.status === 'pending' && (
                          <Button 
                            size="sm" 
                            className="gap-2 w-full lg:w-auto bg-green-600 hover:bg-green-700"
                            onClick={() => {
                              setSelectedWaste(waste);
                              setShowStartProduction(true);
                            }}
                          >
                            <Play className="w-4 h-4" />
                            <span className="hidden sm:inline">생산 시작</span>
                          </Button>
                        )}
                        {waste.status === 'processed' && (
                          <Button 
                            size="sm" 
                            className="gap-2 w-full lg:w-auto"
                            onClick={() => handleMoveToAggregateClick(waste)}
                          >
                            <CheckCircle className="w-4 h-4" />
                            <span className="hidden sm:inline">순환골재로 이동</span>
                          </Button>
                        )}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2 flex-1 lg:flex-initial"
                          onClick={() => {
                            setSelectedWaste(waste);
                            setShowWasteDetail(true);
                          }}
                        >
                          <Eye className="w-4 h-4" />
                          <span className="hidden sm:inline">상세</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* 순환골재 재고 탭 */}
            <TabsContent value="aggregate" className="space-y-4">
              {aggregateInventory.map((aggregate) => (
                <Card key={aggregate.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-lg md:text-xl">{aggregate.aggregate_type}</h3>
                          {getStatusBadge(aggregateStatuses[aggregate.aggregate_type] || aggregate.status)}
                          {getGradeBadge(aggregate.quality_grade)}
                          <Badge variant="outline" className="gap-1 bg-slate-100 text-slate-700 border-slate-300">
                            <Package className="w-3 h-3" />
                            {aggregate.id}
                          </Badge>
                          {aggregate.waste_id && (
                            <Badge variant="outline" className="gap-1 bg-orange-50 text-orange-700 border-orange-200">
                              <Recycle className="w-3 h-3" />
                              원본: {aggregate.waste_id}
                            </Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">재고량</span>
                              <span className="font-medium">{aggregate.quantity.toLocaleString()}톤</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">보관위치</span>
                              <span className="font-medium">{aggregate.location}</span>
                            </div>
                            {aggregate.created_at && (
                              <div className="flex items-center gap-1 text-xs text-green-600">
                                <CheckCircle className="w-3 h-3" />
                                <span>최근 이동 완료</span>
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">생산일</span>
                              <span className="font-medium">{formatDate(aggregate.production_date)}</span>
                            </div>
                            {aggregate.created_at && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">이동 시간</span>
                                <span className="font-medium text-green-600">
                                  {new Date(aggregate.created_at).toLocaleString('ko-KR', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                    hour12: false
                                  }).replace(/\. /g, '.').replace(/\.$/, '')}
                                </span>
                              </div>
                            )}
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">품질등급</span>
                              <span className="font-medium">{aggregate.quality_grade}급</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm text-gray-600">
                              {(aggregateStatuses[aggregate.aggregate_type] || aggregate.status) === 'available' && '판매 가능한 상태입니다'}
                              {(aggregateStatuses[aggregate.aggregate_type] || aggregate.status) === 'for_sale' && '시장에 판매 등록되었습니다'}
                              {(aggregateStatuses[aggregate.aggregate_type] || aggregate.status) === 'reserved' && '제3자가 구매하여 예약되었습니다'}
                              {(aggregateStatuses[aggregate.aggregate_type] || aggregate.status) === 'shipped' && '출고가 완료되었습니다'}
                              {(aggregateStatuses[aggregate.aggregate_type] || aggregate.status) === 'in_transit' && '현재 배송 중입니다'}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 lg:ml-6">
                        <Button variant="outline" size="sm" className="gap-2 flex-1 lg:flex-initial">
                          <Eye className="w-4 h-4" />
                          <span className="hidden sm:inline">상세</span>
                        </Button>
                        {(aggregateStatuses[aggregate.aggregate_type] || aggregate.status) === 'available' && (
                          <Button 
                            size="sm" 
                            className="gap-2 flex-1 lg:flex-initial bg-blue-600 hover:bg-blue-700"
                            onClick={() => handleRegisterClick(aggregate)}
                          >
                            <Plus className="w-4 h-4" />
                            <span className="hidden sm:inline">등록</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* 판매 완료 탭 */}
            <TabsContent value="sales" className="space-y-4">
              {salesRecords.map((sale) => (
                <Card key={sale.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-lg md:text-xl">{sale.customer}</h3>
                          {getGradeBadge(sale.quality_grade)}
                          <Badge 
                            variant={sale.payment_status === 'paid' ? 'default' : sale.payment_status === 'pending' ? 'secondary' : 'destructive'}
                            className={
                              sale.payment_status === 'paid' 
                                ? 'bg-green-100 text-green-700 border-green-200' 
                                : sale.payment_status === 'pending'
                                ? 'bg-yellow-100 text-yellow-700 border-yellow-200'
                                : 'bg-red-100 text-red-700 border-red-200'
                            }
                          >
                            {sale.payment_status === 'paid' && '결제완료'}
                            {sale.payment_status === 'pending' && '결제대기'}
                            {sale.payment_status === 'overdue' && '연체'}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">제품명</span>
                              <span className="font-medium">{sale.aggregate_type}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">판매량</span>
                              <span className="font-medium">{sale.quantity.toLocaleString()}톤</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">단가</span>
                              <span className="font-medium">{sale.unit_price.toLocaleString()}원/톤</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">판매일</span>
                              <span className="font-medium">{formatDate(sale.sale_date)}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">판매금액</span>
                              <span className="font-medium text-blue-600">{sale.total_amount.toLocaleString()}원</span>
                            </div>
                            {sale.order_number && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">출고번호</span>
                                <span className="font-medium">{sale.order_number}</span>
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm">
                              <span className="text-gray-600">납품지: </span>
                              <span className="font-medium">{sale.delivery_location}</span>
                            </div>
                            {sale.vehicle_number && (
                              <div className="flex items-center gap-2 text-sm">
                                <Truck className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">차량:</span>
                                <span className="font-medium">{sale.vehicle_number}</span>
                              </div>
                            )}
                            {sale.driver_name && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">배송기사</span>
                                <span className="font-medium">{sale.driver_name}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 lg:ml-6">
                        <Button variant="outline" size="sm" className="gap-2 flex-1 lg:flex-initial">
                          <Eye className="w-4 h-4" />
                          <span className="hidden sm:inline">상세</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          {/* 폐기물 상세 다이얼로그 */}
          <WasteDetailDialog
            open={showWasteDetail}
            onOpenChange={setShowWasteDetail}
            waste={selectedWaste}
            productionRecords={productionRecords}
          />

          {/* 생산 시작 다이얼로그 */}
          <StartProductionDialog
            open={showStartProduction}
            onClose={() => setShowStartProduction(false)}
            waste={selectedWaste}
            onStartProduction={handleStartProduction}
          />

          {/* 출고 등록 다이얼로그 */}
          <Dialog open={showRegisterDialog} onOpenChange={setShowRegisterDialog}>
            <DialogContent className="sm:max-w-[550px] max-h-[90vh] flex flex-col">
              <DialogHeader className="flex-shrink-0">
                <DialogTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-600" />
                  순환골재 판매 등록
                </DialogTitle>
                <DialogDescription>
                  순환골재를 시장에 판매 등록합니다. 일련번호로 전체 과정을 추적할 수 있습니다.
                </DialogDescription>
              </DialogHeader>

              {selectedAggregate && (
                <div className="space-y-4 overflow-y-auto pr-2 -mr-2 flex-1">
                  {/* 순환골재 정보 */}
                  <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">골재 종류</span>
                      <span className="font-medium">{selectedAggregate.aggregate_type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">재고량</span>
                      <span className="font-medium text-blue-600">{selectedAggregate.quantity.toLocaleString()}톤</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">품질등급</span>
                      <span className="font-medium">{selectedAggregate.quality_grade}급</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">보관위치</span>
                      <span className="font-medium">{selectedAggregate.location}</span>
                    </div>
                  </div>

                  {/* 입력 폼 */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="serial_number">일련번호 *</Label>
                      <Input
                        id="serial_number"
                        placeholder="일련번호 (자동 설정)"
                        value={registerForm.serial_number}
                        className="bg-gray-50"
                        readOnly
                      />
                      <p className="text-xs text-gray-500">※ 공급부터 판매완료까지 추적용 일련번호입니다</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="production_date">생산일</Label>
                      <Input
                        id="production_date"
                        type="date"
                        value={registerForm.production_date}
                        className="bg-gray-50"
                        readOnly
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quantity">판매 수량 (톤) *</Label>
                      <Input
                        id="quantity"
                        type="number"
                        placeholder={`최대 ${selectedAggregate.quantity}톤`}
                        value={registerForm.quantity}
                        onChange={(e) => setRegisterForm({ ...registerForm, quantity: e.target.value })}
                        max={selectedAggregate.quantity}
                        step="0.1"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sales_price">판매금액 (톤당) *</Label>
                      <div className="relative">
                        <Input
                          id="sales_price"
                          type="number"
                          placeholder="예: 15000"
                          value={registerForm.sales_price}
                          onChange={(e) => setRegisterForm({ ...registerForm, sales_price: e.target.value })}
                          step="1000"
                          className="pr-12"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">원</span>
                      </div>
                      {registerForm.sales_price && registerForm.quantity && (
                        <p className="text-xs text-gray-600">
                          총 판매금액: <span className="font-medium text-blue-600">
                            {(parseFloat(registerForm.sales_price) * parseFloat(registerForm.quantity)).toLocaleString()}원
                          </span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sales_store">판매점 *</Label>
                      <Input
                        id="sales_store"
                        placeholder="예: 서울 강남 건자재 판매점"
                        value={registerForm.sales_store}
                        onChange={(e) => setRegisterForm({ ...registerForm, sales_store: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="registration_date">판매 등록일 *</Label>
                      <Input
                        id="registration_date"
                        type="date"
                        value={registerForm.registration_date}
                        onChange={(e) => setRegisterForm({ ...registerForm, registration_date: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">순환 골재 설명</Label>
                      <Textarea
                        id="description"
                        placeholder="골재 특성, 용도, 품질 정보 등을 입력하세요 (선택)"
                        value={registerForm.description}
                        onChange={(e) => setRegisterForm({ ...registerForm, description: e.target.value })}
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* 안내사항 */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex gap-2">
                      <AlertTriangle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <div className="font-medium mb-1">안내사항</div>
                        <div className="space-y-1 text-xs">
                          <div>• 등록 후 순환골재 상태가 <strong>"판매중"</strong>으로 변경됩니다</div>
                          <div>• 출고 관리 메뉴의 <strong>"출고 예정"</strong> 탭에서 확인할 수 있습니다</div>
                          <div>• 제품번호가 자동으로 생성되며, 일련번호로 전체 과정을 추적합니다</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <DialogFooter className="gap-2 flex-shrink-0 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => setShowRegisterDialog(false)}
                >
                  취소
                </Button>
                <Button
                  onClick={handleRegisterShipping}
                  className="gap-2 bg-blue-600 hover:bg-blue-700"
                >
                  <CheckCircle className="w-4 h-4" />
                  판매 등록
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* 순환골재로 이동 확인 다이얼로그 */}
          <AlertDialog open={showMoveConfirm} onOpenChange={setShowMoveConfirm}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2">
                  <Recycle className="w-5 h-5 text-green-600" />
                  순환골재 재고로 이동하시겠습니까?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  처리가 완료된 다음 폐기물을 순환골재 재고로 이동합니다.
                </AlertDialogDescription>
              </AlertDialogHeader>

              {/* 폐기물 정보 */}
              {wasteToMove && (
                <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">폐기물 ID</span>
                    <span className="font-medium text-gray-900">{wasteToMove.id}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">폐기물 종류</span>
                    <span className="font-medium text-gray-900">{wasteToMove.waste_type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">투입량</span>
                    <span className="font-medium text-orange-600">{wasteToMove.quantity.toLocaleString()}톤</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">변환 후 예상량</span>
                    <span className="font-medium text-green-600">{Math.floor(wasteToMove.quantity * 0.85).toLocaleString()}톤 (전환율 85%)</span>
                  </div>
                  {wasteToMove.production_aggregate_type && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">생산 골재</span>
                      <span className="font-medium text-blue-600">{wasteToMove.production_aggregate_type}</span>
                    </div>
                  )}
                  {wasteToMove.production_line && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">생산 라인</span>
                      <span className="font-medium text-gray-900">{wasteToMove.production_line}</span>
                    </div>
                  )}
                </div>
              )}

              {/* 안내사항 */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <div className="font-medium mb-1">안내사항</div>
                    <div className="space-y-1 text-xs">
                      <div>• 고유 일련번호가 자동으로 생성됩니다</div>
                      <div>• 정확한 이동 시간이 기록됩니다</div>
                      <div>• 순환골재 재고 탭에서 확인할 수 있습니다</div>
                      <div>• 이동 후에는 취소할 수 없습니다</div>
                    </div>
                  </div>
                </div>
              </div>

              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setWasteToMove(null)}>취소</AlertDialogCancel>
                <AlertDialogAction onClick={handleMoveToAggregate} className="gap-2 bg-green-600 hover:bg-green-700">
                  <CheckCircle className="w-4 h-4" />
                  확인 - 순환골재로 이동
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </motion.div>
      </div>
    </div>
  );
}

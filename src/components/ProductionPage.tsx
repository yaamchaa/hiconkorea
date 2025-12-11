import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Factory,
  Gauge,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Activity,
  Zap,
  Settings,
  Search,
  Filter,
  Download,
  Play,
  Pause,
  Power,
  AlertCircle,
  Award,
  BarChart3,
  PieChart as PieChartIcon,
  Package,
  Recycle,
  Target,
  Timer,
  QrCode,
  Camera,
  X,
  Bell,
  Truck,
  Warehouse,
  User,
  FileText,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  Settings as SettingsIcon,
  FileCheck
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { toast } from 'sonner';
import { Html5Qrcode } from 'html5-qrcode';
import { addEmergencyAlert, playSirenSound, vibrateSiren } from '../utils/emergencyAlert';
import { Label } from './ui/label';
import { baseProductionRecords as importedBaseProductionRecords, ProductionRecord as ImportedProductionRecord } from '../lib/production-data';
import { baseWasteInventory } from '../lib/waste-inventory-data';
import { LineProductionHistoryDialog } from './LineProductionHistoryDialog';
import { ProductionWorkOrderDialog } from './ProductionWorkOrderDialog';
import { WorkProgressDialog } from './WorkProgressDialog';
import { QualityInspectionDialog } from './QualityInspectionDialog';
import { EquipmentStatusDialog } from './EquipmentStatusDialog';
import { ProductionPerformanceDialog } from './ProductionPerformanceDialog';
// 타입 정의
interface ProductionLine {
  id: string;
  line_name: string;
  equipment_type: string;
  status: 'running' | 'idle' | 'maintenance' | 'stopped';
  current_input: string; // 현재 투입 폐기물
  current_output: string; // 현재 생산 골재
  throughput: number; // 시간당 처리량 (톤/h)
  efficiency: number; // 가동 효율 (%)
  uptime_today: number; // 금일 가동 시간 (분)
  operator: string;
}

interface ProductionRecord {
  id: string;
  date: string;
  time: string;
  line_name: string;
  waste_input_type: string;
  waste_input_quantity: number; // 톤
  aggregate_output_type: string;
  aggregate_output_quantity: number; // 톤
  conversion_rate: number; // %
  quality_grade: 'A' | 'B' | 'C';
  duration: number; // 생산 시간 (분)
  waste_id?: string; // 중복 방지용
  completed_at?: string; // 생산 완료 시간 (ISO 8601)
}

interface Equipment {
  id: string;
  equipment_name: string;
  equipment_type: string;
  status: 'operational' | 'maintenance' | 'fault';
  utilization_rate: number; // %
  operating_hours_today: number; // 시간
  last_maintenance: string;
  next_maintenance: string;
  location: string;
}

interface QualityCheck {
  id: string;
  check_date: string;
  check_time: string;
  aggregate_type: string;
  batch_number: string;
  quality_grade: 'A' | 'B' | 'C';
  particle_size: string;
  impurity_rate: number; // %
  strength: string;
  inspector: string;
  passed: boolean;
}

interface ProductionPageProps {
  showWorkOrder?: boolean;
  setShowWorkOrder?: (show: boolean) => void;
  showWorkProgress?: boolean;
  setShowWorkProgress?: (show: boolean) => void;
  showQualityInspection?: boolean;
  setShowQualityInspection?: (show: boolean) => void;
  showEquipmentStatus?: boolean;
  setShowEquipmentStatus?: (show: boolean) => void;
  showProductionPerformance?: boolean;
  setShowProductionPerformance?: (show: boolean) => void;
}

export function ProductionPage({
  showWorkOrder: externalShowWorkOrder,
  setShowWorkOrder: externalSetShowWorkOrder,
  showWorkProgress: externalShowWorkProgress,
  setShowWorkProgress: externalSetShowWorkProgress,
  showQualityInspection: externalShowQualityInspection,
  setShowQualityInspection: externalSetShowQualityInspection,
  showEquipmentStatus: externalShowEquipmentStatus,
  setShowEquipmentStatus: externalSetShowEquipmentStatus,
  showProductionPerformance: externalShowProductionPerformance,
  setShowProductionPerformance: externalSetShowProductionPerformance,
}: ProductionPageProps = {}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('daily-supply');
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [selectedLine, setSelectedLine] = useState<ProductionLine | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanError, setScanError] = useState<string>('');
  const [manualQRCode, setManualQRCode] = useState('');
  const [showConversionEdit, setShowConversionEdit] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<ProductionRecord | null>(null);
  const [editConversionRate, setEditConversionRate] = useState('');
  const [dynamicProductionRecords, setDynamicProductionRecords] = useState<ProductionRecord[]>([]);
  const [historyFilter, setHistoryFilter] = useState<'processing' | 'completed'>('processing');
  const [wasteInventory, setWasteInventory] = useState(baseWasteInventory);
  const [showCompleteConfirm, setShowCompleteConfirm] = useState(false);
  const [recordToComplete, setRecordToComplete] = useState<ProductionRecord | null>(null);
  const [showLineHistory, setShowLineHistory] = useState(false);
  const [selectedLineForHistory, setSelectedLineForHistory] = useState<string>('');
  const [expandedVehicles, setExpandedVehicles] = useState<Set<string>>(new Set());
  const qrReaderRef = useRef<Html5Qrcode | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // MES 다이얼로그 상태 - props로 받은 값을 우선 사용, 없으면 내부 state 사용
  const [internalShowWorkOrder, internalSetShowWorkOrder] = useState(false);
  const [internalShowWorkProgress, internalSetShowWorkProgress] = useState(false);
  const [internalShowQualityInspection, internalSetShowQualityInspection] = useState(false);
  const [internalShowEquipmentStatus, internalSetShowEquipmentStatus] = useState(false);
  const [internalShowProductionPerformance, internalSetShowProductionPerformance] = useState(false);
  
  const showWorkOrder = externalShowWorkOrder ?? internalShowWorkOrder;
  const setShowWorkOrder = externalSetShowWorkOrder ?? internalSetShowWorkOrder;
  const showWorkProgress = externalShowWorkProgress ?? internalShowWorkProgress;
  const setShowWorkProgress = externalSetShowWorkProgress ?? internalSetShowWorkProgress;
  const showQualityInspection = externalShowQualityInspection ?? internalShowQualityInspection;
  const setShowQualityInspection = externalSetShowQualityInspection ?? internalSetShowQualityInspection;
  const showEquipmentStatus = externalShowEquipmentStatus ?? internalShowEquipmentStatus;
  const setShowEquipmentStatus = externalSetShowEquipmentStatus ?? internalSetShowEquipmentStatus;
  const showProductionPerformance = externalShowProductionPerformance ?? internalShowProductionPerformance;
  const setShowProductionPerformance = externalSetShowProductionPerformance ?? internalSetShowProductionPerformance;

  // MES 데이터 상태
  const [workOrders, setWorkOrders] = useState<any[]>([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // localStorage에서 생산 기록 로드
  useEffect(() => {
    const loadProductionRecords = () => {
      const saved = localStorage.getItem('production_records');
      if (saved) {
        const records = JSON.parse(saved);
        
        // 라인명 마이그레이션: 이전 라인명을 하이콘 코리아 A/B/C 라인으로 변환
        const migratedRecords = records.map((record: ProductionRecord) => {
          let newLineName = record.line_name;
          
          if (record.line_name === '1호 파쇄 라인') {
            newLineName = 'A라인';
          } else if (record.line_name === '2호 파쇄 라인') {
            newLineName = 'B라인';
          } else if (record.line_name === '3호 파쇄 라인') {
            newLineName = 'C라인';
          } else if (record.line_name === '선별 라인' || record.line_name === '세척 라인') {
            // 선별 라인과 세척 라인은 더 이상 사용하지 않으므로 필터링
            return null;
          }
          
          return {
            ...record,
            line_name: newLineName
          };
        }).filter((record: ProductionRecord | null) => record !== null);
        
        setDynamicProductionRecords(migratedRecords);
        
        // 마이그레이션된 데이터 저장
        if (JSON.stringify(records) !== JSON.stringify(migratedRecords)) {
          localStorage.setItem('production_records', JSON.stringify(migratedRecords));
        }
      } else {
        // localStorage에 데이터가 없으면 기본 데이터로 초기화
        setDynamicProductionRecords(importedBaseProductionRecords);
        localStorage.setItem('production_records', JSON.stringify(importedBaseProductionRecords));
      }
    };

    loadProductionRecords();

    // 주기적으로 업데이트 확인
    const interval = setInterval(loadProductionRecords, 1000);
    return () => clearInterval(interval);
  }, []);

  // localStorage에서 폐기물 재고 로드
  useEffect(() => {
    const loadWasteInventory = () => {
      const saved = localStorage.getItem('waste_inventory');
      if (saved) {
        try {
          setWasteInventory(JSON.parse(saved));
        } catch (error) {
          console.error('폐기물 재고 로드 실패:', error);
        }
      }
    };

    loadWasteInventory();

    // 주기적으로 업데이트 확인
    const interval = setInterval(loadWasteInventory, 1000);
    return () => clearInterval(interval);
  }, []);

  // localStorage에서 MES 데이터 로드
  useEffect(() => {
    const loadMESData = () => {
      const workOrdersData = localStorage.getItem('work_orders');
      if (workOrdersData) {
        try {
          setWorkOrders(JSON.parse(workOrdersData));
        } catch (error) {
          console.error('작업지시 로드 실패:', error);
        }
      }
    };

    loadMESData();
  }, [refreshTrigger]);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // QR 스캐너 초기화 및 정리
  useEffect(() => {
    return () => {
      if (qrReaderRef.current && isScanning) {
        try {
          const state = qrReaderRef.current.getState();
          if (state === 2) { // Html5QrcodeScannerState.SCANNING
            qrReaderRef.current.stop().catch(() => {});
          }
        } catch (err) {
          // 무시
        }
      }
    };
  }, [isScanning]);

  // 카메라 권한 요청
  const requestCameraPermission = async (): Promise<boolean> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop());
      console.log('✅ 카메라 권한 허용됨');
      return true;
    } catch (err: any) {
      console.warn('카메라 권한:', err.name === 'NotAllowedError' ? '거부됨' : err.name);
      return false;
    }
  };

  // QR 코드 스캔 시작
  const startQRScanner = async () => {
    try {
      setScanError('');
      
      // 먼저 카메라 권한 요청
      const hasPermission = await requestCameraPermission();
      if (!hasPermission) {
        setScanError('카메라 접근 권한이 거부되었습니다. 브라우저 설정에서 카메라 권한을 허용해주세요.');
        toast.error('카메라 권한이 필요합니다', {
          description: '브라우저 설정에서 카메라 권한을 허용해주세요'
        });
        return;
      }

      setIsScanning(true);
      
      const html5QrCode = new Html5Qrcode('qr-reader');
      qrReaderRef.current = html5QrCode;
      
      await html5QrCode.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 }
        },
        (decodedText) => {
          // QR 코드 스캔 성공
          handleQRCodeScanned(decodedText);
        },
        () => {
          // 스캔 실패 (무시)
        }
      );
    } catch (err: any) {
      console.warn('QR 스캐너 시작:', err.name);
      
      let errorMessage = '카메라를 시작할 수 없습니다.';
      if (err.name === 'NotAllowedError') {
        errorMessage = '카메라 접근 권한이 거부되었습니다. 브라우저 설정에서 권한을 허용해주세요.';
      } else if (err.name === 'NotFoundError') {
        errorMessage = '카메라를 찾을 수 없습니다.';
      } else if (err.name === 'NotReadableError') {
        errorMessage = '카메라가 다른 앱에서 사용중입니다.';
      }
      
      setScanError(errorMessage);
      toast.error('카메라 시작 실패', {
        description: errorMessage
      });
      setIsScanning(false);
    }
  };

  // QR 코드 스캔 중지
  const stopQRScanner = async () => {
    if (qrReaderRef.current && isScanning) {
      try {
        const state = qrReaderRef.current.getState();
        // 스캐너가 실제로 실행 중일 때만 중지
        if (state === 2) { // Html5QrcodeScannerState.SCANNING
          await qrReaderRef.current.stop();
        }
        qrReaderRef.current.clear();
        qrReaderRef.current = null;
      } catch (err: any) {
        // 이미 중지되었거나 실행되지 않은 경우 무시
        if (!err.message?.includes('not running')) {
          console.error('QR 스캐너 중지 실패:', err);
        }
      }
    }
    setIsScanning(false);
  };

  // QR 코드 스캔 완료 처리
  const handleQRCodeScanned = async (qrData: string) => {
    await stopQRScanner();
    setShowQRScanner(false);

    // 긴급 알림 발생
    triggerEmergencyAlert(selectedLine, qrData);
  };

  // 긴급 알림 발생
  const triggerEmergencyAlert = (line: ProductionLine | null, qrData: string) => {
    console.log('🚨 긴급 알림 발생 시작:', {
      line: line?.line_name,
      equipment: line?.equipment_type,
      qrData
    });

    // 긴급 알림 저장 및 사이렌 재생
    const newAlert = addEmergencyAlert({
      type: 'emergency-tpm',
      title: '🚨 긴급 TPM 발생!',
      message: `${line?.line_name} - 설비 고장 발생. 즉시 조치가 필요합니다.`,
      lineName: line?.line_name,
      equipment: line?.equipment_type,
      qrData
    });

    console.log('✅ 긴급 알림 저장 완료:', newAlert);

    // 긴 사이렌 소리 재생 (반복) + 음성 안내
    console.log('🔊 사이렌 재생 시작 (라인명:', line?.line_name, ')');
    try {
      playSirenSound(line?.line_name);
      console.log('✅ playSirenSound() 호출 완료 (음성 안내 포함)');
    } catch (err) {
      console.error('❌ playSirenSound() 호출 실패:', err);
    }
    
    // 긴 진동 패턴
    console.log('📳 진동 시작');
    try {
      vibrateSiren();
      console.log('✅ vibrateSiren() 호출 완료');
    } catch (err) {
      console.error('❌ vibrateSiren() 호출 실패:', err);
    }

    // 브라우저 알림
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('🚨 긴급 TPM 발생!', {
        body: `${line?.line_name} - 설비 고장 발생\n즉시 조치가 필요합니다.`,
        icon: '/icon-192x192.png',
        badge: '/icon-192x192.png',
        requireInteraction: true,
        tag: 'emergency-tpm',
        vibrate: [3000, 500, 3000, 500, 3000]
      });
    }

    // Toast 알림 (모든 디바이스)
    toast.error(
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-red-600 animate-pulse" />
          <span className="font-bold">긴급 TPM 발생!</span>
        </div>
        <div className="text-sm">
          <p className="font-medium">{line?.line_name}</p>
          <p className="text-gray-600">설비: {line?.equipment_type}</p>
          <p className="text-gray-600">QR: {qrData}</p>
          <p className="text-red-600 font-medium mt-1">즉시 조치가 필요합니다!</p>
        </div>
      </div>,
      {
        duration: 15000,
        important: true
      }
    );

    console.log('🚨 긴급 TPM 알림 발생:', {
      line: line?.line_name,
      equipment: line?.equipment_type,
      qrData,
      timestamp: new Date().toISOString()
    });
  };

  // 파일에서 QR 코드 스캔
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const html5QrCode = new Html5Qrcode('qr-reader-file');
      const result = await html5QrCode.scanFile(file, true);
      handleQRCodeScanned(result);
      
      // 정리
      try {
        html5QrCode.clear();
      } catch (err) {
        // 무시
      }
    } catch (err) {
      console.error('QR 코드 파일 스캔 실패:', err);
      toast.error('QR 코드를 인식할 수 없습니다');
    }
    
    // 파일 입력 초기화
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // 수동 QR 코드 입력
  const handleManualSubmit = () => {
    if (!manualQRCode.trim()) {
      toast.error('QR 코드를 입력해주세요');
      return;
    }
    handleQRCodeScanned(manualQRCode.trim());
  };

  // 전환율 수정 다이얼로그 열기
  const openConversionEdit = (record: ProductionRecord) => {
    setSelectedRecord(record);
    setEditConversionRate(record.conversion_rate.toString());
    setShowConversionEdit(true);
  };

  // 전환율 업데이트
  const handleUpdateConversionRate = () => {
    if (!selectedRecord) return;

    const newRate = parseFloat(editConversionRate);
    if (isNaN(newRate) || newRate < 0 || newRate > 100) {
      toast.error('유효한 전환율을 입력해주세요 (0-100)');
      return;
    }

    // localStorage에서 기록 업데이트
    const saved = localStorage.getItem('production_records');
    if (saved) {
      const records: ProductionRecord[] = JSON.parse(saved);
      const updatedRecords = records.map(r => {
        if (r.id === selectedRecord.id) {
          // 전환율에 따라 생산량 재계산
          const newOutputQty = Math.round((r.waste_input_quantity * newRate) / 100 * 10) / 10;
          return {
            ...r,
            conversion_rate: newRate,
            aggregate_output_quantity: newOutputQty
          };
        }
        return r;
      });
      localStorage.setItem('production_records', JSON.stringify(updatedRecords));
      setDynamicProductionRecords(updatedRecords);
    }

    toast.success('전환율이 업데이트되었습니다', {
      description: `${selectedRecord.line_name} - 전환율 ${newRate}%`
    });

    setShowConversionEdit(false);
    setSelectedRecord(null);
    setEditConversionRate('');
  };

  // 긴급 TPM 버튼 클릭
  const handleEmergencyTPM = (line: ProductionLine) => {
    setSelectedLine(line);
    setShowQRScanner(true);
    setScanError('');
    setManualQRCode('');

    // 알림 권한 요청
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }

    // 데스크톱 사용자에게 안내 메시지
    if (!isMobile) {
      toast.info('데스크톱 모드', {
        description: 'QR 코드를 직접 입력하거나 파일을 업로드해주세요'
      });
    }
  };

  // QR 스캐너 다이얼로그 열릴 때 (자동 시작 제거 - 사용자가 직접 시작)
  // 권한 문제 방지를 위해 사용자 액션으로만 카메라 시작

  // Mock 데이터 - 생산 라인 (하이콘 코리아 A/B/C 3개 라인)
  const productionLines: ProductionLine[] = [
    {
      id: 'PL001',
      line_name: 'A라인',
      equipment_type: '대형 조 크러셔',
      status: 'running',
      current_input: '콘크리트 폐기물',
      current_output: '순환골재 40mm',
      throughput: 45,
      efficiency: 92,
      uptime_today: 420,
      operator: '김철수'
    },
    {
      id: 'PL002',
      line_name: 'B라인',
      equipment_type: '중형 임팩트 크러셔',
      status: 'running',
      current_input: '아스팔트 폐기물',
      current_output: '순환골재 25mm',
      throughput: 38,
      efficiency: 88,
      uptime_today: 410,
      operator: '이영희'
    },
    {
      id: 'PL003',
      line_name: 'C라인',
      equipment_type: '콘 크러셔',
      status: 'idle',
      current_input: '-',
      current_output: '-',
      throughput: 0,
      efficiency: 0,
      uptime_today: 380,
      operator: '박민수'
    }
  ];

  // Mock 데이터 - 생산 이력 (기본) - 공유 파일에서 가져옴
  const baseProductionRecords = importedBaseProductionRecords;

  // 모든 생산 기록 병합 (동적 + 기본)
  const productionRecords = [...dynamicProductionRecords, ...baseProductionRecords];

  // Mock 데이터 - 설비 (하이콘 코리아 A/B/C 라인)
  const equipment: Equipment[] = [
    {
      id: 'EQ001',
      equipment_name: 'JC-3000',
      equipment_type: '대형 조 크러셔',
      status: 'operational',
      utilization_rate: 92,
      operating_hours_today: 7.5,
      last_maintenance: '2025-10-15',
      next_maintenance: '2025-11-15',
      location: 'A라인'
    },
    {
      id: 'EQ002',
      equipment_name: 'IC-2500',
      equipment_type: '중형 임팩트 크러셔',
      status: 'operational',
      utilization_rate: 88,
      operating_hours_today: 7.2,
      last_maintenance: '2025-10-20',
      next_maintenance: '2025-11-20',
      location: 'B라인'
    },
    {
      id: 'EQ003',
      equipment_name: 'CC-2800',
      equipment_type: '콘 크러셔',
      status: 'operational',
      utilization_rate: 75,
      operating_hours_today: 6.3,
      last_maintenance: '2025-10-22',
      next_maintenance: '2025-11-22',
      location: 'C라인'
    }
  ];

  // Mock 데이터 - 품질 검사
  const qualityChecks: QualityCheck[] = [
    {
      id: 'QC001',
      check_date: '2025-10-29',
      check_time: '14:45',
      aggregate_type: '순환골재 40mm',
      batch_number: 'B20251029-001',
      quality_grade: 'A',
      particle_size: '40±5mm',
      impurity_rate: 1.2,
      strength: '25MPa',
      inspector: '정태호',
      passed: true
    },
    {
      id: 'QC002',
      check_date: '2025-10-29',
      check_time: '13:30',
      aggregate_type: '순환골재 25mm',
      batch_number: 'B20251029-002',
      quality_grade: 'A',
      particle_size: '25±3mm',
      impurity_rate: 1.5,
      strength: '22MPa',
      inspector: '강서연',
      passed: true
    },
    {
      id: 'QC003',
      check_date: '2025-10-29',
      check_time: '12:00',
      aggregate_type: '순환 잔골재',
      batch_number: 'B20251029-003',
      quality_grade: 'B',
      particle_size: '5mm 이하',
      impurity_rate: 2.8,
      strength: '18MPa',
      inspector: '윤동주',
      passed: true
    },
    {
      id: 'QC004',
      check_date: '2025-10-29',
      check_time: '10:45',
      aggregate_type: '순환 쇄석',
      batch_number: 'B20251029-004',
      quality_grade: 'A',
      particle_size: '30±8mm',
      impurity_rate: 1.8,
      strength: '23MPa',
      inspector: '정태호',
      passed: true
    }
  ];

  // 주간 생산 데이터
  const weeklyProductionData = [
    { date: '10/23', 생산량: 405, 효율: 88, 목표: 450 },
    { date: '10/24', 생산량: 468, 효율: 92, 목표: 450 },
    { date: '10/25', 생산량: 432, 효율: 89, 목표: 450 },
    { date: '10/26', 생산량: 495, 효율: 95, 목표: 450 },
    { date: '10/27', 생산량: 441, 효율: 90, 목표: 450 },
    { date: '10/28', 생산량: 477, 효율: 93, 목표: 450 },
    { date: '10/29', 생산량: 459, 효율: 91, 목표: 450 }
  ];

  // 제품별 생산 비율
  const productTypeDistribution = [
    { name: '골재 40mm', value: 380 },
    { name: '골재 25mm', value: 320 },
    { name: '잔골재', value: 280 },
    { name: '쇄석', value: 240 }
  ];

  // 시간대별 생산량
  const hourlyProductionData = [
    { time: '08:00', 생산량: 42 },
    { time: '09:00', 생산량: 48 },
    { time: '10:00', 생산량: 55 },
    { time: '11:00', 생산량: 52 },
    { time: '12:00', 생산량: 38 },
    { time: '13:00', 생산량: 50 },
    { time: '14:00', 생산량: 58 },
    { time: '15:00', 생산량: 56 },
    { time: '16:00', 생산량: 60 }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

  // 통계 계산
  const todayProduction = weeklyProductionData[weeklyProductionData.length - 1].생산량;
  const avgEfficiency = Math.round(weeklyProductionData.reduce((sum, item) => sum + item.효율, 0) / weeklyProductionData.length);
  const totalUptime = productionLines.reduce((sum, line) => sum + line.uptime_today, 0);
  const avgUptime = Math.round(totalUptime / productionLines.length);
  const runningLines = productionLines.filter(l => l.status === 'running').length;
  const defectRate = 2.1; // Mock data

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { variant: any; label: string; icon: any; color: string }> = {
      running: { variant: 'default', label: '가동중', icon: Play, color: 'bg-green-100 text-green-700 border-green-200' },
      idle: { variant: 'secondary', label: '대기중', icon: Pause, color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
      maintenance: { variant: 'outline', label: '정비중', icon: Settings, color: 'bg-orange-100 text-orange-700 border-orange-200' },
      stopped: { variant: 'destructive', label: '정지', icon: Power, color: 'bg-red-100 text-red-700 border-red-200' }
    };
    
    const config = statusConfig[status] || { variant: 'outline', label: status, icon: Activity, color: '' };
    const Icon = config.icon;
    
    return (
      <Badge variant={config.variant} className={`gap-1 ${config.color}`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </Badge>
    );
  };

  const getEquipmentStatusBadge = (status: string) => {
    const statusConfig: Record<string, { color: string; label: string }> = {
      operational: { color: 'bg-green-100 text-green-700 border-green-200', label: '정상' },
      maintenance: { color: 'bg-orange-100 text-orange-700 border-orange-200', label: '정비중' },
      fault: { color: 'bg-red-100 text-red-700 border-red-200', label: '고장' }
    };
    
    const config = statusConfig[status] || { color: '', label: status };
    
    return (
      <Badge variant="outline" className={config.color}>
        {config.label}
      </Badge>
    );
  };

  const getGradeBadge = (grade: string) => {
    const gradeConfig: Record<string, { color: string }> = {
      A: { color: 'bg-blue-100 text-blue-700 border-blue-200' },
      B: { color: 'bg-green-100 text-green-700 border-green-200' },
      C: { color: 'bg-orange-100 text-orange-700 border-orange-200' }
    };
    
    const config = gradeConfig[grade] || { color: '' };
    
    return (
      <Badge variant="outline" className={config.color}>
        등급 {grade}
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

  // 완료 시간 포맷 (한국 시간)
  const formatCompletedTime = (isoString: string) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
  };

  // 최근 완료 여부 체크 (5분 이내)
  const isRecentlyCompleted = (completedAt?: string) => {
    if (!completedAt) return false;
    const completedTime = new Date(completedAt).getTime();
    const now = Date.now();
    const fiveMinutes = 5 * 60 * 1000;
    return (now - completedTime) < fiveMinutes;
  };

  // 생산 완료 버튼 클릭 시 확인 다이얼로그 표시
  const handleCompleteProductionClick = (record: ProductionRecord) => {
    if (!record.waste_id) {
      toast.error('폐기물 ID가 없는 생산 기록입니다');
      return;
    }

    const currentWaste = wasteInventory.find(w => w.id === record.waste_id);
    if (!currentWaste) {
      toast.error('폐기물을 찾을 수 없습니다');
      return;
    }

    setRecordToComplete(record);
    setShowCompleteConfirm(true);
  };

  // 생산 완료 처리 (처리중 → 완료)
  const handleCompleteProduction = () => {
    if (!recordToComplete) return;

    const record = recordToComplete;

    // 현재 한국 시간 생성 (KST, UTC+9)
    const now = new Date();
    const kstOffset = 9 * 60; // 9시간을 분으로
    const kstTime = new Date(now.getTime() + kstOffset * 60 * 1000);
    const completedAt = kstTime.toISOString();

    // 1. 폐기물 상태를 'processed'로 변경
    const updatedWasteInventory = wasteInventory.map(waste => {
      if (waste.id === record.waste_id) {
        return {
          ...waste,
          status: 'processed' as const
        };
      }
      return waste;
    });
    localStorage.setItem('waste_inventory', JSON.stringify(updatedWasteInventory));

    // 2. 생산 기록에 완료 시간 추가
    const existingRecords = JSON.parse(localStorage.getItem('production_records') || '[]');
    const updatedRecords = existingRecords.map((r: ProductionRecord) => {
      if (r.id === record.id) {
        return {
          ...r,
          completed_at: completedAt
        };
      }
      return r;
    });
    localStorage.setItem('production_records', JSON.stringify(updatedRecords));
    setDynamicProductionRecords(updatedRecords);

    // 3. 순환골재 재고 생성
    const newAggregate = {
      id: `A${Date.now()}`,
      aggregate_type: record.aggregate_output_type,
      quantity: record.aggregate_output_quantity,
      location: '제품 야적장',
      production_date: record.date,
      quality_grade: record.quality_grade,
      status: 'available'
    };

    // 기존 순환골재 재고 로드 및 추가
    const existingAggregates = JSON.parse(localStorage.getItem('aggregate_inventory') || '[]');
    existingAggregates.push(newAggregate);
    localStorage.setItem('aggregate_inventory', JSON.stringify(existingAggregates));

    toast.success('생산 완료', {
      description: `${record.aggregate_output_type} ${record.aggregate_output_quantity}톤이 순환골재 재고에 추가되었습니다`,
    });

    // 4. 상태 업데이트 (새로고침 없이)
    setWasteInventory(updatedWasteInventory);
    
    // 다이얼로그 닫기
    setShowCompleteConfirm(false);
    setRecordToComplete(null);
  };

  // 생산 복구 처리 (처리중 → 재고로 복구)
  const handleRestoreProduction = (record: ProductionRecord) => {
    if (!record.waste_id) {
      toast.error('폐기물 ID가 없는 생산 기록입니다');
      return;
    }

    const currentWaste = wasteInventory.find(w => w.id === record.waste_id);
    if (!currentWaste) {
      toast.error('폐기물을 찾을 수 없습니다');
      return;
    }

    if (currentWaste.status !== 'processing') {
      toast.error('처리중 상태가 아닌 폐기물은 복구할 수 없습니다');
      return;
    }

    // 확인 다이얼로그
    if (!confirm(`${record.waste_input_type} ${record.waste_input_quantity}톤을 폐기물 재고로 복구하시겠습니까?\n\n이 생산 기록은 삭제되고, 폐기물이 다시 "대기중" 상태로 돌아가 "생산 시작" 버튼이 활성화됩니다.`)) {
      return;
    }

    // 1. 폐기물 상태를 'pending' (대기중)으로 복구하고 생산 관련 정보 제거
    const updatedWasteInventory = wasteInventory.map(waste => {
      if (waste.id === record.waste_id) {
        // 생산 관련 필드를 제거하여 원래 상태로 복구
        const { production_date, production_time, production_line, production_aggregate_type, production_duration, ...restWaste } = waste;
        return {
          ...restWaste,
          status: 'pending' as const
        };
      }
      return waste;
    });
    localStorage.setItem('waste_inventory', JSON.stringify(updatedWasteInventory));
    setWasteInventory(updatedWasteInventory);

    // 2. 생산 기록 삭제
    const existingRecords = JSON.parse(localStorage.getItem('production_records') || '[]');
    const updatedRecords = existingRecords.filter((r: ProductionRecord) => r.id !== record.id);
    localStorage.setItem('production_records', JSON.stringify(updatedRecords));
    setDynamicProductionRecords(updatedRecords);

    toast.success('생산 복구 완료', {
      description: `${record.waste_input_type} ${record.waste_input_quantity}톤이 폐기물 재고로 복구되었습니다`,
    });

    console.log('✅ 생산 복구 완료:', {
      wasteId: record.waste_id,
      recordId: record.id,
      wasteType: record.waste_input_type,
      quantity: record.waste_input_quantity
    });
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
            <h1 className="text-3xl mb-2">생산 관리</h1>
            <p className="text-gray-600">순환골재 생산 라인 및 설비 현황 관리</p>
          </div>

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Factory className="w-4 h-4" />
                  금일 생산량
                </CardDescription>
                <CardTitle className="text-3xl">{todayProduction}톤</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <Target className="w-4 h-4" />
                  <span>목표 대비 102%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  오늘 예약 차량
                </CardDescription>
                <CardTitle className="text-3xl">12대 / 245톤</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Package className="w-4 h-4" />
                  <span>공급 예정량</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Warehouse className="w-4 h-4" />
                  오늘 재고량
                </CardDescription>
                <CardTitle className="text-3xl">385톤</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-purple-600">
                  <Recycle className="w-4 h-4" />
                  <span>폐기물 + 순환골재</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  품질 불량률
                </CardDescription>
                <CardTitle className="text-3xl">{defectRate}%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>목표 달성 (3% 이하)</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 탭 컨텐츠 */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <TabsList className="w-full lg:w-auto">
                <TabsTrigger value="daily-supply" className="gap-2 flex-1 lg:flex-initial">
                  <Package className="w-4 h-4" />
                  <span className="hidden sm:inline">일일 공급현황</span>
                </TabsTrigger>
                <TabsTrigger value="current" className="gap-2 flex-1 lg:flex-initial">
                  <Activity className="w-4 h-4" />
                  <span className="hidden sm:inline">생산 현황</span> ({runningLines})
                </TabsTrigger>
                <TabsTrigger value="history" className="gap-2 flex-1 lg:flex-initial">
                  <BarChart3 className="w-4 h-4" />
                  <span className="hidden sm:inline">생산 이력</span> ({productionRecords.length})
                </TabsTrigger>
                <TabsTrigger value="quality" className="gap-2 flex-1 lg:flex-initial">
                  <Award className="w-4 h-4" />
                  <span className="hidden sm:inline">품질 관리</span> ({qualityChecks.length})
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

            {/* 생산 현황 탭 */}
            <TabsContent value="current" className="space-y-6">
              {/* 주간 생산량 및 효율 추이 */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>주간 생산량 및 효율 추이</CardTitle>
                    <CardDescription>최근 7일간 생산량 및 생산 효율</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <AreaChart data={weeklyProductionData}>
                        <defs>
                          <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
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
                          label={{ value: '%', angle: 0, position: 'top', offset: 10, style: { fontSize: 12, fill: '#374151', fontWeight: 600 } }}
                        />
                        <RechartsTooltip 
                          contentStyle={{ 
                            borderRadius: '8px', 
                            border: 'none', 
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                          }}
                        />
                        <Legend wrapperStyle={{ fontSize: 12 }} />
                        <Area yAxisId="left" type="monotone" dataKey="생산량" stroke="#3b82f6" fillOpacity={1} fill="url(#colorProduction)" />
                        <Line yAxisId="right" type="monotone" dataKey="효율" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                        <Line yAxisId="left" type="monotone" dataKey="목표" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* 제품별 생산 비율 */}
                <Card>
                  <CardHeader>
                    <CardTitle>제품별 생산 비율</CardTitle>
                    <CardDescription>금일 제품 유형별 생산량</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={productTypeDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {productTypeDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartsTooltip formatter={(value: any) => `${value}톤`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* 금일 시간대별 생산량 */}
              <Card>
                <CardHeader>
                  <CardTitle>금일 시간대별 생산량</CardTitle>
                  <CardDescription>08:00 ~ 현재까지 시간당 생산량</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={hourlyProductionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                      <XAxis 
                        dataKey="time" 
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
                      <RechartsTooltip 
                        contentStyle={{ 
                          borderRadius: '8px', 
                          border: 'none', 
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                        }}
                        formatter={(value: any) => [`${value}톤`, '생산량']}
                      />
                      <Bar dataKey="생산량" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* 생산 라인 카드 */}
              {productionLines.map((line) => (
                <Card key={line.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                          <h3 className="text-lg md:text-xl">{line.line_name}</h3>
                          {getStatusBadge(line.status)}
                          <Badge variant="outline" className="gap-1">
                            <Zap className="w-3 h-3" />
                            효율 {line.efficiency}%
                          </Badge>
                        </div>

                        {line.status === 'running' ? (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-4">
                              <div className="space-y-1">
                                <div className="text-sm text-gray-600">설비 유형</div>
                                <div className="font-medium">{line.equipment_type}</div>
                              </div>

                              <div className="space-y-1">
                                <div className="text-sm text-gray-600">투입 폐기물</div>
                                <div className="font-medium flex items-center gap-2">
                                  <Package className="w-4 h-4 text-orange-600" />
                                  {line.current_input}
                                </div>
                              </div>

                              <div className="space-y-1">
                                <div className="text-sm text-gray-600">생산 골재</div>
                                <div className="font-medium flex items-center gap-2">
                                  <Recycle className="w-4 h-4 text-green-600" />
                                  {line.current_output}
                                </div>
                              </div>

                              <div className="space-y-1">
                                <div className="text-sm text-gray-600">처리량</div>
                                <div className="font-medium text-blue-600">{line.throughput}톤/h</div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">가동 시간 (금일)</span>
                                <span className="font-medium">{Math.floor(line.uptime_today / 60)}시간 {line.uptime_today % 60}분</span>
                              </div>
                              <Progress value={(line.uptime_today / 480) * 100} className="h-2" />
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">운영자</span>
                                <span className="font-medium">{line.operator}</span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="space-y-2">
                            <div className="text-sm text-gray-600">설비 유형: {line.equipment_type}</div>
                            {line.status === 'maintenance' && (
                              <div className="text-sm text-orange-600 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                정기 점검 진행중
                              </div>
                            )}
                            {line.status === 'idle' && (
                              <div className="text-sm text-gray-500">
                                금일 가동: {Math.floor(line.uptime_today / 60)}시간 {line.uptime_today % 60}분 / 운영자: {line.operator}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 lg:ml-6">
                        <div className="flex gap-2">
                          {line.status === 'running' && (
                            <>
                              <Button variant="outline" size="sm" className="gap-2 flex-1 lg:flex-initial">
                                <Pause className="w-4 h-4" />
                                <span className="hidden sm:inline">일시정지</span>
                              </Button>
                              <Button 
                                variant="destructive" 
                                size="sm" 
                                className="gap-2 flex-1 lg:flex-initial bg-red-600 hover:bg-red-700"
                                onClick={() => handleEmergencyTPM(line)}
                              >
                                <AlertTriangle className="w-4 h-4" />
                                <span className="hidden sm:inline">긴급 TPM</span>
                              </Button>
                            </>
                          )}
                          {line.status === 'idle' && (
                            <Button size="sm" className="gap-2 flex-1 lg:flex-initial">
                              <Play className="w-4 h-4" />
                              <span className="hidden sm:inline">가동 시작</span>
                            </Button>
                          )}
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2 w-full"
                          onClick={() => {
                            setSelectedLineForHistory(line.line_name);
                            setShowLineHistory(true);
                          }}
                        >
                          <BarChart3 className="w-4 h-4" />
                          상세 이력
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* 생산 이력 탭 */}
            <TabsContent value="history" className="space-y-4">
              {/* 처리중/생산 완료 필터 */}
              <div className="flex gap-2 mb-4">
                <Button 
                  variant={historyFilter === 'processing' ? 'default' : 'outline'}
                  onClick={() => setHistoryFilter('processing')}
                  className="gap-2"
                >
                  <Clock className="w-4 h-4" />
                  처리중 ({dynamicProductionRecords.filter(record => {
                    if (!record.waste_id) return false;
                    const waste = wasteInventory.find(w => w.id === record.waste_id);
                    return waste?.status === 'processing';
                  }).length})
                </Button>
                <Button 
                  variant={historyFilter === 'completed' ? 'default' : 'outline'}
                  onClick={() => setHistoryFilter('completed')}
                  className="gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  생산 완료 ({dynamicProductionRecords.filter(record => {
                    if (!record.waste_id) return true;
                    const waste = wasteInventory.find(w => w.id === record.waste_id);
                    return !waste || waste.status === 'processed';
                  }).length})
                </Button>
              </div>

              {(() => {
                let filteredRecords = dynamicProductionRecords.filter(record => {
                  if (historyFilter === 'processing') {
                    // 처리중: waste_id가 있고, 해당 폐기물이 processing 상태인 경우만 표시
                    if (!record.waste_id) return false;
                    const waste = wasteInventory.find(w => w.id === record.waste_id);
                    return waste?.status === 'processing';
                  } else {
                    // 생산 완료: waste_id가 없거나, 해당 폐기물이 processed 상태인 경우 표시
                    if (!record.waste_id) return true;
                    const waste = wasteInventory.find(w => w.id === record.waste_id);
                    return !waste || waste.status === 'processed';
                  }
                });

                // 생산 완료 탭에서는 최신 완료 항목이 위로 오도록 정렬
                if (historyFilter === 'completed') {
                  filteredRecords = filteredRecords.sort((a, b) => {
                    // completed_at이 있는 항목을 우선
                    if (a.completed_at && b.completed_at) {
                      return new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime();
                    }
                    if (a.completed_at && !b.completed_at) return -1;
                    if (!a.completed_at && b.completed_at) return 1;
                    // completed_at이 없으면 기본 ID로 정렬 (최신 것이 위로)
                    return b.id.localeCompare(a.id);
                  });
                }

                if (filteredRecords.length === 0) {
                  return (
                    <Card className="border-2 border-dashed">
                      <CardContent className="flex flex-col items-center justify-center py-12">
                        <Factory className="w-16 h-16 text-gray-300 mb-4" />
                        <h3 className="text-lg mb-2">
                          {historyFilter === 'processing' ? '현재 처리중인 생산이 없습니다' : '생산 이력이 없습니다'}
                        </h3>
                        <p className="text-sm text-gray-500 text-center max-w-md">
                          {historyFilter === 'processing' 
                            ? '폐기물 재고 관리에서 폐기물을 생산 라인에 투입하면 여기에 표시됩니다.'
                            : '생산이 완료되면 이력이 여기에 기록됩니다.'}
                        </p>
                      </CardContent>
                    </Card>
                  );
                }

                return filteredRecords.map((record) => {
                  const isRecent = isRecentlyCompleted(record.completed_at);
                  const isCompleted = historyFilter === 'completed';
                  
                  return (
                <Card 
                  key={record.id} 
                  className={`hover:shadow-md transition-shadow ${isRecent && isCompleted ? 'border-2 border-green-500 bg-green-50' : ''}`}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-lg md:text-xl">{record.line_name}</h3>
                          {getGradeBadge(record.quality_grade)}
                          {isRecent && isCompleted && (
                            <Badge className="gap-1 bg-green-600 text-white animate-pulse">
                              <CheckCircle className="w-3 h-3" />
                              NEW
                            </Badge>
                          )}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span>
                                  <Badge 
                                    className="gap-1 bg-purple-100 text-purple-700 border-purple-200 cursor-pointer hover:bg-purple-200 transition-colors"
                                    onClick={() => openConversionEdit(record)}
                                  >
                                    전환율 {record.conversion_rate}%
                                  </Badge>
                                </span>
                              </TooltipTrigger>
                              <TooltipContent 
                                className="max-w-sm bg-slate-900 text-white p-4"
                                side="top"
                              >
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Recycle className="w-4 h-4 text-green-400" />
                                    <span className="font-semibold">전환율이란?</span>
                                  </div>
                                  <p className="text-xs leading-relaxed">
                                    폐기물을 순환골재로 변환하는 과정의 생산 효율입니다.
                                  </p>
                                  <div className="text-xs space-y-1 pt-2 border-t border-slate-700">
                                    <p className="text-slate-300">예시: 투입 100톤 → 생산 {record.conversion_rate}톤</p>
                                    <p className="text-slate-300">손실: {100 - record.conversion_rate}톤 (불순물, 분진 등)</p>
                                  </div>
                                  <div className="text-xs pt-2 border-t border-slate-700">
                                    <p className="text-slate-400 mb-1">업계 평균:</p>
                                    <p className="text-slate-300">• 콘크리트: 85-90%</p>
                                    <p className="text-slate-300">• 아스팔트: 80-85%</p>
                                    <p className="text-slate-300">• 벽돌: 75-80%</p>
                                  </div>
                                  <p className="text-xs text-green-400 pt-2 border-t border-slate-700">
                                    💡 클릭하여 전환율을 수정할 수 있습니다
                                  </p>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          {record.waste_id && (
                            <Badge variant="outline" className="gap-1 bg-slate-100 text-slate-700 border-slate-300">
                              <Package className="w-3 h-3" />
                              {record.waste_id}
                            </Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-600">
                                {isCompleted && record.completed_at ? '완료 시간:' : '시작 일시:'}
                              </span>
                            </div>
                            <div className="font-medium">
                              {isCompleted && record.completed_at 
                                ? formatCompletedTime(record.completed_at)
                                : `${formatDate(record.date)} ${record.time}`
                              }
                            </div>
                            {isCompleted && record.completed_at && (
                              <div className="text-xs text-green-600 flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" />
                                완료
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm text-gray-600">투입</div>
                            <div className="font-medium">{record.waste_input_type}</div>
                            <div className="text-sm text-orange-600">{record.waste_input_quantity}톤</div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm text-gray-600">생산</div>
                            <div className="font-medium">{record.aggregate_output_type}</div>
                            <div className="text-sm text-blue-600">{record.aggregate_output_quantity}톤</div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm text-gray-600">생산 시간</div>
                            <div className="font-medium">{record.duration}분</div>
                          </div>
                        </div>
                      </div>

                      {/* 처리중일 때만 생산 완료 버튼과 복구 버튼 표시 */}
                      {historyFilter === 'processing' && record.waste_id && (() => {
                        const waste = wasteInventory.find(w => w.id === record.waste_id);
                        return waste?.status === 'processing' ? (
                          <div className="flex flex-col lg:flex-row gap-2 lg:ml-6">
                            <Button 
                              size="sm" 
                              className="gap-2 w-full lg:w-auto bg-blue-600 hover:bg-blue-700"
                              onClick={() => handleCompleteProductionClick(record)}
                            >
                              <CheckCircle className="w-4 h-4" />
                              <span className="hidden sm:inline">생산 완료</span>
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="gap-2 w-full lg:w-auto border-orange-300 text-orange-700 hover:bg-orange-50 hover:text-orange-800"
                              onClick={() => handleRestoreProduction(record)}
                            >
                              <Activity className="w-4 h-4" />
                              <span className="hidden sm:inline">복구</span>
                            </Button>
                          </div>
                        ) : null;
                      })()}
                    </div>
                  </CardContent>
                </Card>
                  );
                });
              })()}
            </TabsContent>

            {/* 일일 공급현황 탭 */}
            <TabsContent value="daily-supply" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    일일 차량 공급 현황
                  </CardTitle>
                  <CardDescription>올바로 시스템에서 전날 저녁 수신한 금일 예약 차량 및 시간대별 공급량</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 전체 요약 */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-sm text-blue-700 mb-2">
                        <Truck className="w-4 h-4" />
                        예약 차량
                      </div>
                      <div className="text-2xl font-semibold text-blue-900">12대</div>
                      <div className="text-xs text-blue-600 mt-1">올바로 연동</div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-sm text-green-700 mb-2">
                        <Package className="w-4 h-4" />
                        총 공급량
                      </div>
                      <div className="text-2xl font-semibold text-green-900">245톤</div>
                      <div className="text-xs text-green-600 mt-1">평균 20.4톤/대</div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-sm text-purple-700 mb-2">
                        <CheckCircle className="w-4 h-4" />
                        도착 완료
                      </div>
                      <div className="text-2xl font-semibold text-purple-900">7대</div>
                      <div className="text-xs text-purple-600 mt-1">175톤 입고</div>
                    </div>
                    
                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-sm text-orange-700 mb-2">
                        <Clock className="w-4 h-4" />
                        도착 예정
                      </div>
                      <div className="text-2xl font-semibold text-orange-900">5대</div>
                      <div className="text-xs text-orange-600 mt-1">70톤 예정</div>
                    </div>
                  </div>

                  {/* 시간대별 차량 도착 현황 */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">시간대별 차량 도착 현황</h3>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        <Clock className="w-3 h-3 mr-1" />
                        실시간 업데이트
                      </Badge>
                    </div>
                    
                    {/* 08:00 - 10:00 */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-600" />
                            <span className="font-semibold">08:00 - 10:00</span>
                          </div>
                          <Badge className="bg-green-600">3대 / 65톤</Badge>
                        </div>
                      </div>
                      <div className="divide-y">
                        {[
                          { truck: '12가3456', driver: '김철수', expectedTime: '08:00', arrivalTime: '08:15', type: '폐콘크리트', expectedQty: 22, actualQty: 23, status: 'completed', composition: '콘크리트 95%, 불순물 5%' },
                          { truck: '34나5678', driver: '이영희', expectedTime: '09:00', arrivalTime: '09:20', type: '폐아스팔트', expectedQty: 20, actualQty: 18, status: 'completed', composition: '아스팔트 92%, 불순물 8%' },
                          { truck: '56다7890', driver: '박민수', expectedTime: '09:30', arrivalTime: '09:45', type: '폐콘크리트', expectedQty: 25, actualQty: 24, status: 'completed', composition: '콘크리트 93%, 불순물 7%' }
                        ].map((vehicle, idx) => {
                          const vehicleId = `08-10-${vehicle.truck}`;
                          const isExpanded = expandedVehicles.has(vehicleId);
                          
                          return (
                            <div key={idx} className="hover:bg-gray-50 transition-colors">
                              <div 
                                className="px-4 py-3 cursor-pointer"
                                onClick={() => {
                                  const newExpanded = new Set(expandedVehicles);
                                  if (isExpanded) {
                                    newExpanded.delete(vehicleId);
                                  } else {
                                    newExpanded.add(vehicleId);
                                  }
                                  setExpandedVehicles(newExpanded);
                                }}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                      <Truck className="w-4 h-4 text-blue-600" />
                                      <span className="font-mono font-semibold">{vehicle.truck}</span>
                                    </div>
                                    <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                                      <CheckCircle className="w-3 h-3 mr-1" />
                                      도착완료
                                    </Badge>
                                    <div className="flex items-center gap-1 text-sm text-gray-600">
                                      <User className="w-3 h-3" />
                                      {vehicle.driver}
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    <span className="text-sm text-gray-500">{vehicle.arrivalTime}</span>
                                    <span className="text-sm text-gray-700">{vehicle.type}</span>
                                    <span className="font-semibold text-blue-600">{vehicle.actualQty}톤</span>
                                    {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                                  </div>
                                </div>
                              </div>
                              
                              {isExpanded && (
                                <div className="px-4 pb-3 pt-0 border-t bg-gray-50/50">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                                    <div className="space-y-2">
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">올바로 예정 공급량:</span>
                                        <span className="font-medium">{vehicle.expectedQty}톤</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">실제 계근 공급량:</span>
                                        <span className="font-semibold text-blue-600">{vehicle.actualQty}톤</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">차이:</span>
                                        <span className={`font-medium ${vehicle.actualQty > vehicle.expectedQty ? 'text-green-600' : vehicle.actualQty < vehicle.expectedQty ? 'text-red-600' : 'text-gray-600'}`}>
                                          {vehicle.actualQty > vehicle.expectedQty ? '+' : ''}{vehicle.actualQty - vehicle.expectedQty}톤
                                        </span>
                                      </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">예상 도착:</span>
                                        <span className="font-medium">{vehicle.expectedTime}</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">실제 도착:</span>
                                        <span className="font-medium text-green-600">{vehicle.arrivalTime}</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">성분 분석:</span>
                                        <Button size="sm" variant="outline" className="h-6 text-xs gap-1">
                                          <FileText className="w-3 h-3" />
                                          보기
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="mt-3 pt-3 border-t">
                                    <div className="text-xs text-gray-600 mb-1">성분표:</div>
                                    <div className="text-sm text-gray-800">{vehicle.composition}</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* 10:00 - 12:00 */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-600" />
                            <span className="font-semibold">10:00 - 12:00</span>
                          </div>
                          <Badge className="bg-green-600">2대 / 45톤</Badge>
                        </div>
                      </div>
                      <div className="divide-y">
                        {[
                          { truck: '78라1234', driver: '정다은', expectedTime: '10:00', arrivalTime: '10:30', type: '폐벽돌', expectedQty: 19, actualQty: 20, status: 'completed', composition: '벽돌 88%, 불순물 12%' },
                          { truck: '90마5678', driver: '최준호', expectedTime: '11:30', arrivalTime: '11:40', type: '폐아스팔트', expectedQty: 24, actualQty: 25, status: 'completed', composition: '아스팔트 94%, 불순물 6%' }
                        ].map((vehicle, idx) => {
                          const vehicleId = `10-12-${vehicle.truck}`;
                          const isExpanded = expandedVehicles.has(vehicleId);
                          
                          return (
                            <div key={idx} className="hover:bg-gray-50 transition-colors">
                              <div 
                                className="px-4 py-3 cursor-pointer"
                                onClick={() => {
                                  const newExpanded = new Set(expandedVehicles);
                                  if (isExpanded) {
                                    newExpanded.delete(vehicleId);
                                  } else {
                                    newExpanded.add(vehicleId);
                                  }
                                  setExpandedVehicles(newExpanded);
                                }}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                      <Truck className="w-4 h-4 text-blue-600" />
                                      <span className="font-mono font-semibold">{vehicle.truck}</span>
                                    </div>
                                    <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                                      <CheckCircle className="w-3 h-3 mr-1" />
                                      도착완료
                                    </Badge>
                                    <div className="flex items-center gap-1 text-sm text-gray-600">
                                      <User className="w-3 h-3" />
                                      {vehicle.driver}
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    <span className="text-sm text-gray-500">{vehicle.arrivalTime}</span>
                                    <span className="text-sm text-gray-700">{vehicle.type}</span>
                                    <span className="font-semibold text-blue-600">{vehicle.actualQty}톤</span>
                                    {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                                  </div>
                                </div>
                              </div>
                              
                              {isExpanded && (
                                <div className="px-4 pb-3 pt-0 border-t bg-gray-50/50">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                                    <div className="space-y-2">
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">올바로 예정 공급량:</span>
                                        <span className="font-medium">{vehicle.expectedQty}톤</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">실제 계근 공급량:</span>
                                        <span className="font-semibold text-blue-600">{vehicle.actualQty}톤</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">차이:</span>
                                        <span className={`font-medium ${vehicle.actualQty > vehicle.expectedQty ? 'text-green-600' : vehicle.actualQty < vehicle.expectedQty ? 'text-red-600' : 'text-gray-600'}`}>
                                          {vehicle.actualQty > vehicle.expectedQty ? '+' : ''}{vehicle.actualQty - vehicle.expectedQty}톤
                                        </span>
                                      </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">예상 도착:</span>
                                        <span className="font-medium">{vehicle.expectedTime}</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">실제 도착:</span>
                                        <span className="font-medium text-green-600">{vehicle.arrivalTime}</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">성분 분석:</span>
                                        <Button size="sm" variant="outline" className="h-6 text-xs gap-1">
                                          <FileText className="w-3 h-3" />
                                          보기
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="mt-3 pt-3 border-t">
                                    <div className="text-xs text-gray-600 mb-1">성분표:</div>
                                    <div className="text-sm text-gray-800">{vehicle.composition}</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* 13:00 - 15:00 */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-600" />
                            <span className="font-semibold">13:00 - 15:00</span>
                          </div>
                          <Badge className="bg-green-600">2대 / 40톤</Badge>
                        </div>
                      </div>
                      <div className="divide-y">
                        {[
                          { truck: '12바3456', driver: '강서현', expectedTime: '13:00', arrivalTime: '13:15', type: '폐콘크리트', expectedQty: 23, actualQty: 22, status: 'completed', composition: '콘크리트 91%, 불순물 9%' },
                          { truck: '34사7890', driver: '윤태영', expectedTime: '14:00', arrivalTime: '14:25', type: '폐벽돌', expectedQty: 18, actualQty: 18, status: 'completed', composition: '벽돌 90%, 불순물 10%' }
                        ].map((vehicle, idx) => {
                          const vehicleId = `13-15-${vehicle.truck}`;
                          const isExpanded = expandedVehicles.has(vehicleId);
                          
                          return (
                            <div key={idx} className="hover:bg-gray-50 transition-colors">
                              <div 
                                className="px-4 py-3 cursor-pointer"
                                onClick={() => {
                                  const newExpanded = new Set(expandedVehicles);
                                  if (isExpanded) {
                                    newExpanded.delete(vehicleId);
                                  } else {
                                    newExpanded.add(vehicleId);
                                  }
                                  setExpandedVehicles(newExpanded);
                                }}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                      <Truck className="w-4 h-4 text-blue-600" />
                                      <span className="font-mono font-semibold">{vehicle.truck}</span>
                                    </div>
                                    <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                                      <CheckCircle className="w-3 h-3 mr-1" />
                                      도착완료
                                    </Badge>
                                    <div className="flex items-center gap-1 text-sm text-gray-600">
                                      <User className="w-3 h-3" />
                                      {vehicle.driver}
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    <span className="text-sm text-gray-500">{vehicle.arrivalTime}</span>
                                    <span className="text-sm text-gray-700">{vehicle.type}</span>
                                    <span className="font-semibold text-blue-600">{vehicle.actualQty}톤</span>
                                    {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                                  </div>
                                </div>
                              </div>
                              
                              {isExpanded && (
                                <div className="px-4 pb-3 pt-0 border-t bg-gray-50/50">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                                    <div className="space-y-2">
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">올바로 예정 공급량:</span>
                                        <span className="font-medium">{vehicle.expectedQty}톤</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">실제 계근 공급량:</span>
                                        <span className="font-semibold text-blue-600">{vehicle.actualQty}톤</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">차이:</span>
                                        <span className={`font-medium ${vehicle.actualQty > vehicle.expectedQty ? 'text-green-600' : vehicle.actualQty < vehicle.expectedQty ? 'text-red-600' : 'text-gray-600'}`}>
                                          {vehicle.actualQty > vehicle.expectedQty ? '+' : ''}{vehicle.actualQty - vehicle.expectedQty}톤
                                        </span>
                                      </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">예상 도착:</span>
                                        <span className="font-medium">{vehicle.expectedTime}</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">실제 도착:</span>
                                        <span className="font-medium text-green-600">{vehicle.arrivalTime}</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">성분 분석:</span>
                                        <Button size="sm" variant="outline" className="h-6 text-xs gap-1">
                                          <FileText className="w-3 h-3" />
                                          보기
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="mt-3 pt-3 border-t">
                                    <div className="text-xs text-gray-600 mb-1">성분표:</div>
                                    <div className="text-sm text-gray-800">{vehicle.composition}</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* 15:00 - 17:00 */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-600" />
                            <span className="font-semibold">15:00 - 17:00</span>
                          </div>
                          <Badge className="bg-orange-600">5대 / 95톤 예정</Badge>
                        </div>
                      </div>
                      <div className="divide-y">
                        {[
                          { truck: '56아1234', driver: '임지훈', expectedTime: '15:30', type: '폐콘크리트', expectedQty: 21, status: 'pending', composition: '콘크리트 94%, 불순물 6%' },
                          { truck: '78자5678', driver: '송미라', expectedTime: '15:45', type: '폐아스팔트', expectedQty: 19, status: 'pending', composition: '아스팔트 93%, 불순물 7%' },
                          { truck: '90차7890', driver: '한동욱', expectedTime: '16:00', type: '폐벽돌', expectedQty: 17, status: 'pending', composition: '벽돌 87%, 불순물 13%' },
                          { truck: '12카3456', driver: '오세진', expectedTime: '16:30', type: '폐콘크리트', expectedQty: 20, status: 'pending', composition: '콘크리트 96%, 불순물 4%' },
                          { truck: '34타5678', driver: '배수현', expectedTime: '16:50', type: '폐아스팔트', expectedQty: 18, status: 'pending', composition: '아스팔트 91%, 불순물 9%' }
                        ].map((vehicle, idx) => {
                          const vehicleId = `15-17-${vehicle.truck}`;
                          const isExpanded = expandedVehicles.has(vehicleId);
                          
                          return (
                            <div key={idx} className="hover:bg-gray-50 transition-colors">
                              <div 
                                className="px-4 py-3 cursor-pointer"
                                onClick={() => {
                                  const newExpanded = new Set(expandedVehicles);
                                  if (isExpanded) {
                                    newExpanded.delete(vehicleId);
                                  } else {
                                    newExpanded.add(vehicleId);
                                  }
                                  setExpandedVehicles(newExpanded);
                                }}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                      <Truck className="w-4 h-4 text-orange-600" />
                                      <span className="font-mono font-semibold">{vehicle.truck}</span>
                                    </div>
                                    <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-200">
                                      <Clock className="w-3 h-3 mr-1" />
                                      도착예정
                                    </Badge>
                                    <div className="flex items-center gap-1 text-sm text-gray-600">
                                      <User className="w-3 h-3" />
                                      {vehicle.driver}
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    <span className="text-sm text-gray-500">{vehicle.expectedTime}</span>
                                    <span className="text-sm text-gray-700">{vehicle.type}</span>
                                    <span className="font-semibold text-orange-600">{vehicle.expectedQty}톤</span>
                                    {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                                  </div>
                                </div>
                              </div>
                              
                              {isExpanded && (
                                <div className="px-4 pb-3 pt-0 border-t bg-gray-50/50">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                                    <div className="space-y-2">
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">올바로 예정 공급량:</span>
                                        <span className="font-semibold text-orange-600">{vehicle.expectedQty}톤</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">실제 계근 공급량:</span>
                                        <span className="font-medium text-gray-400">도착 후 측정</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">상태:</span>
                                        <Badge variant="outline" className="bg-orange-100 text-orange-700 text-xs">
                                          이동 중
                                        </Badge>
                                      </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">예상 도착:</span>
                                        <span className="font-semibold text-orange-600">{vehicle.expectedTime}</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">실제 도착:</span>
                                        <span className="font-medium text-gray-400">-</span>
                                      </div>
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">성분 분석:</span>
                                        <Button size="sm" variant="outline" className="h-6 text-xs gap-1">
                                          <FileText className="w-3 h-3" />
                                          보기
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="mt-3 pt-3 border-t">
                                    <div className="text-xs text-gray-600 mb-1">사전 성분표 (올바로):</div>
                                    <div className="text-sm text-gray-800">{vehicle.composition}</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* 폐기물 유형별 집계 */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">폐기물 유형별 집계</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { type: '폐콘크리트', vehicles: 5, quantity: 110, color: 'blue' },
                        { type: '폐아스팔트', vehicles: 4, quantity: 80, color: 'green' },
                        { type: '폐벽돌', vehicles: 3, quantity: 55, color: 'purple' }
                      ].map((item, idx) => (
                        <div key={idx} className="border rounded-lg p-4 bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full bg-${item.color}-500`} />
                              <h4 className="font-semibold">{item.type}</h4>
                            </div>
                            <Badge className={`bg-${item.color}-600`}>{item.vehicles}대</Badge>
                          </div>
                          <div className="text-2xl font-semibold text-gray-900">{item.quantity}톤</div>
                          <div className="text-xs text-gray-500 mt-1">평균 {Math.round(item.quantity / item.vehicles * 10) / 10}톤/대</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 품질 관리 탭 */}
            <TabsContent value="quality" className="space-y-4">
              {qualityChecks.map((check) => (
                <Card key={check.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-lg md:text-xl">{check.aggregate_type}</h3>
                          {getGradeBadge(check.quality_grade)}
                          <Badge variant={check.passed ? 'default' : 'destructive'} className={check.passed ? 'bg-green-100 text-green-700 border-green-200' : ''}>
                            {check.passed ? (
                              <>
                                <CheckCircle className="w-3 h-3 mr-1" />
                                합격
                              </>
                            ) : (
                              <>
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                불합격
                              </>
                            )}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-600">검사 일시:</span>
                            </div>
                            <div className="font-medium">{formatDate(check.check_date)} {check.check_time}</div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm text-gray-600">배치 번호</div>
                            <div className="font-medium text-xs">{check.batch_number}</div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm text-gray-600">입도</div>
                            <div className="font-medium">{check.particle_size}</div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm text-gray-600">불순물률</div>
                            <div className="font-medium">{check.impurity_rate}%</div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm text-gray-600">강도</div>
                            <div className="font-medium">{check.strength}</div>
                          </div>
                        </div>

                        <div className="mt-3 text-sm text-gray-600">
                          검사자: <span className="font-medium">{check.inspector}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* QR 스캐너 다이얼로그 */}
      <Dialog open={showQRScanner} onOpenChange={async (open) => {
        if (!open) {
          await stopQRScanner();
          setSelectedLine(null);
          setScanError('');
          setManualQRCode('');
        }
        setShowQRScanner(open);
      }}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              긴급 TPM - 설비 QR 스캔
            </DialogTitle>
            <DialogDescription>
              고장난 설비의 QR 코드를 스캔해주세요
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* 라인 정보 */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">생산 라인:</span>
                <span className="font-medium">{selectedLine?.line_name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">설비 유형:</span>
                <span className="font-medium">{selectedLine?.equipment_type}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">운영자:</span>
                <span className="font-medium">{selectedLine?.operator}</span>
              </div>
            </div>

            {/* 에러 메시지 */}
            {scanError && (
              <div className={`border rounded-lg p-4 ${
                scanError.includes('거부') 
                  ? 'bg-yellow-50 border-yellow-200' 
                  : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex gap-2">
                  <AlertCircle className={`w-5 h-5 flex-shrink-0 ${
                    scanError.includes('거부') ? 'text-yellow-600' : 'text-red-600'
                  }`} />
                  <div className="flex-1 space-y-2">
                    <div className={`text-sm ${
                      scanError.includes('거부') ? 'text-yellow-800' : 'text-red-800'
                    }`}>
                      <p className="font-medium mb-1">
                        {scanError.includes('거부') ? '카메라 권한 필요' : '카메라 오류'}
                      </p>
                      <p>{scanError}</p>
                    </div>
                    {scanError.includes('거부') && (
                      <div className="pt-2 space-y-2 border-t border-yellow-300">
                        <p className="text-xs text-yellow-700 font-medium">해결 방법:</p>
                        <ul className="text-xs text-yellow-700 space-y-1 list-disc list-inside">
                          <li>Chrome: 주소창 왼쪽 🔒 아이콘 → 카메라 허용</li>
                          <li>Safari: 설정 → Safari → 카메라 허용</li>
                        </ul>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setScanError('');
                            startQRScanner();
                          }}
                          className="w-full mt-2"
                        >
                          다시 시도
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* QR 스캐너 영역 */}
            {!scanError && (
              <div className="relative">
                <div 
                  id="qr-reader" 
                  className="w-full rounded-lg overflow-hidden border-2 border-gray-200"
                  style={{ minHeight: '250px' }}
                />
                <div id="qr-reader-file" className="hidden" />
                
                {!isScanning && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                    <div className="text-center space-y-3">
                      <Camera className="w-12 h-12 text-gray-400 mx-auto" />
                      <p className="text-sm text-gray-600">카메라를 시작하고 있습니다...</p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={startQRScanner}
                        className="gap-2"
                      >
                        <Camera className="w-4 h-4" />
                        카메라 시작
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 대안: 파일 업로드 */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600">또는 QR 코드 이미지를 업로드하세요</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button
                variant="outline"
                className="w-full gap-2"
                onClick={() => fileInputRef.current?.click()}
              >
                <QrCode className="w-4 h-4" />
                이미지에서 QR 코드 스캔
              </Button>
            </div>

            {/* 대안: 수동 입력 */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600">또는 QR 코드를 직접 입력하세요</p>
              <div className="flex gap-2">
                <Input
                  placeholder="QR 코드 입력"
                  value={manualQRCode}
                  onChange={(e) => setManualQRCode(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleManualSubmit();
                    }
                  }}
                />
                <Button onClick={handleManualSubmit} className="gap-2 flex-shrink-0">
                  <CheckCircle className="w-4 h-4" />
                  확인
                </Button>
              </div>
            </div>

            {/* 안내 메시지 */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="flex gap-2">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-red-800">
                  <p className="font-medium mb-1">긴급 상황 안내</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>설비에 부착된 QR 코드를 스캔하세요</li>
                    <li>스캔 즉시 전체 직원에게 긴급 알림이 발송됩니다</li>
                    <li>TPM 담당자가 즉시 대응합니다</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 닫기 버튼 */}
            <Button
              variant="outline"
              className="w-full"
              onClick={async () => {
                await stopQRScanner();
                setShowQRScanner(false);
                setSelectedLine(null);
                setScanError('');
                setManualQRCode('');
              }}
            >
              <X className="w-4 h-4 mr-2" />
              취소
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 전환율 수정 다이얼로그 */}
      <Dialog open={showConversionEdit} onOpenChange={setShowConversionEdit}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Recycle className="w-5 h-5 text-purple-600" />
              전환율 수정
            </DialogTitle>
            <DialogDescription>
              생산 전환율을 수정하여 생산량을 재계산합니다
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* 현재 정보 */}
            {selectedRecord && (
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">생산 라인:</span>
                  <span className="font-medium">{selectedRecord.line_name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">투입 폐기물:</span>
                  <span className="font-medium">{selectedRecord.waste_input_type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">투입량:</span>
                  <span className="font-medium text-orange-600">{selectedRecord.waste_input_quantity}톤</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">현재 전환율:</span>
                  <span className="font-medium text-purple-600">{selectedRecord.conversion_rate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">현재 생산량:</span>
                  <span className="font-medium text-blue-600">{selectedRecord.aggregate_output_quantity}톤</span>
                </div>
              </div>
            )}

            {/* 전환율 입력 */}
            <div className="space-y-2">
              <Label htmlFor="conversionRate">새 전환율 (%)</Label>
              <Input
                id="conversionRate"
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={editConversionRate}
                onChange={(e) => setEditConversionRate(e.target.value)}
                placeholder="전환율 입력 (0-100)"
              />
              <p className="text-xs text-gray-500">
                새 생산량: {selectedRecord ? Math.round((selectedRecord.waste_input_quantity * parseFloat(editConversionRate || '0')) / 100 * 10) / 10 : 0}톤
              </p>
            </div>

            {/* 전환율 참고 정보 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">전환율 참고</p>
                  <ul className="space-y-1 text-xs">
                    <li>• 콘크리트 폐기물: 85-90%</li>
                    <li>• 아스팔트 폐기물: 80-85%</li>
                    <li>• 벽돌 폐기물: 75-80%</li>
                    <li>• 혼합 폐기물: 70-75%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => {
                setShowConversionEdit(false);
                setSelectedRecord(null);
                setEditConversionRate('');
              }}
            >
              취소
            </Button>
            <Button onClick={handleUpdateConversionRate} className="gap-2">
              <CheckCircle className="w-4 h-4" />
              저장
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 생산 완료 확인 다이얼로그 */}
      <AlertDialog open={showCompleteConfirm} onOpenChange={setShowCompleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              생산을 완료 처리하시겠습니까?
            </AlertDialogTitle>
            <AlertDialogDescription className="space-y-3">
              <div className="text-gray-700">
                다음 생산을 완료하고 순환골재 재고로 이동합니다:
              </div>
              {recordToComplete && (() => {
                const waste = wasteInventory.find(w => w.id === recordToComplete.waste_id);
                return (
                  <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">폐기물 ID</span>
                      <span className="font-medium text-gray-900">{recordToComplete.waste_id}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">폐기물 종류</span>
                      <span className="font-medium text-gray-900">{waste?.waste_type || recordToComplete.waste_input_type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">생산 라인</span>
                      <span className="font-medium text-blue-600">{recordToComplete.line_name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">생산 골재</span>
                      <span className="font-medium text-green-600">{recordToComplete.aggregate_output_type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">생산량</span>
                      <span className="font-medium text-blue-600">{recordToComplete.aggregate_output_quantity.toLocaleString()}톤</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">품질등급</span>
                      <span className="font-medium text-gray-900">{recordToComplete.quality_grade}급</span>
                    </div>
                  </div>
                );
              })()}
              <div className="text-gray-500 text-sm">
                완료 처리 후 재고 관리 페이지에서 순환골재를 확인할 수 있습니다.
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setRecordToComplete(null)}>취소</AlertDialogCancel>
            <AlertDialogAction onClick={handleCompleteProduction} className="gap-2 bg-blue-600 hover:bg-blue-700">
              <CheckCircle className="w-4 h-4" />
              확인 - 생산 완료
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* 라인별 생산 이력 다이얼로그 */}
      <LineProductionHistoryDialog
        open={showLineHistory}
        onOpenChange={setShowLineHistory}
        lineName={selectedLineForHistory}
        productionRecords={productionRecords}
      />

      {/* MES 다이얼로그들 */}
      <ProductionWorkOrderDialog
        open={showWorkOrder}
        onOpenChange={setShowWorkOrder}
        onSave={() => setRefreshTrigger(prev => prev + 1)}
      />
      
      <WorkProgressDialog
        open={showWorkProgress}
        onOpenChange={setShowWorkProgress}
        onSave={() => setRefreshTrigger(prev => prev + 1)}
      />
      
      <QualityInspectionDialog
        open={showQualityInspection}
        onOpenChange={setShowQualityInspection}
        onSave={() => setRefreshTrigger(prev => prev + 1)}
      />
      
      <EquipmentStatusDialog
        open={showEquipmentStatus}
        onOpenChange={setShowEquipmentStatus}
        onSave={() => setRefreshTrigger(prev => prev + 1)}
      />
      
      <ProductionPerformanceDialog
        open={showProductionPerformance}
        onOpenChange={setShowProductionPerformance}
        onSave={() => setRefreshTrigger(prev => prev + 1)}
      />
    </div>
  );
}

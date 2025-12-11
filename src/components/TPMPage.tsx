import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  AlertTriangle, 
  Wrench, 
  Calendar, 
  QrCode,
  Bell,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowUp,
  ArrowDown,
  Settings,
  BarChart3,
  Activity,
  Zap,
  FileText,
  ChevronDown,
  ChevronRight,
  Package,
  Cog
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  Legend, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';
import { TPMCreateDialog } from './TPMCreateDialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { toast } from 'sonner@2.0.3';
import { QRScanner } from './QRScanner';

// OEE 데이터 타입
interface OEEData {
  line: string;
  oee: number;
  availability: number;
  performance: number;
  quality: number;
  trend: 'up' | 'down' | 'stable';
}

// 고장 데이터 타입
interface FailureData {
  date: string;
  count: number;
  line: string;
}

// 점검 일정 타입
interface InspectionSchedule {
  id: string;
  equipment: string;
  type: string;
  dueDate: string;
  status: 'pending' | 'completed' | 'overdue';
  line: string;
}

// 일일보고서 데이터 타입
interface DailyReportEntry {
  day: number;
  status: 'normal' | 'inspected' | 'failure' | 'empty';
  workContent?: string;
  inspectionItems?: string[];
  failurePart?: string;
  failureDetail?: string;
}

interface PartsDailyReport {
  partId: string;
  partName: string;
  reports: DailyReportEntry[];
}

interface MaterialDailyReport {
  materialId: string;
  materialName: string;
  reports: DailyReportEntry[];
  parts: PartsDailyReport[];
}

interface EquipmentDailyReport {
  equipmentId: string;
  equipmentName: string;
  line: 'A' | 'B' | 'C';
  reports: DailyReportEntry[];
  materials: MaterialDailyReport[];
}

export function TPMPage({ onBack }: { onBack: () => void }) {
  const [tpmDialogOpen, setTpmDialogOpen] = useState(false);
  const [qrScanOpen, setQrScanOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const tabContentRef = useRef<HTMLDivElement>(null);
  
  // 일일보고서 상태
  const [reportLine, setReportLine] = useState<'A' | 'B' | 'C'>('A');
  const [selectedDayDetail, setSelectedDayDetail] = useState<{
    itemName: string;
    itemType: 'equipment' | 'material' | 'part';
    day: number;
    data: DailyReportEntry;
  } | null>(null);
  const [openEquipment, setOpenEquipment] = useState<string[]>([]);
  const [openMaterial, setOpenMaterial] = useState<string[]>([]);

  // 탭 변경 시 스크롤
  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    setTimeout(() => {
      if (tabContentRef.current) {
        const viewport = document.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
          const targetOffset = tabContentRef.current.offsetTop - 20; // 20px 여유 공간
          viewport.scrollTo({ top: targetOffset, behavior: 'smooth' });
        }
      }
    }, 100);
  };

  // Mock OEE 데이터
  const [oeeData] = useState<OEEData[]>([
    { line: 'A', oee: 87.3, availability: 95.2, performance: 92.8, quality: 98.8, trend: 'up' },
    { line: 'B', oee: 72.1, availability: 88.5, performance: 84.2, quality: 96.8, trend: 'down' },
    { line: 'C', oee: 65.8, availability: 82.3, performance: 79.5, quality: 100.0, trend: 'stable' }
  ]);

  // OEE 트렌드 데이터 (주간)
  const [oeeTrendData] = useState([
    { date: '10/25', A: 85.2, B: 74.3, C: 67.1 },
    { date: '10/26', A: 86.1, B: 73.8, C: 66.5 },
    { date: '10/27', A: 86.8, B: 72.5, C: 65.2 },
    { date: '10/28', A: 87.0, B: 71.9, C: 65.8 },
    { date: '10/29', A: 87.5, B: 72.3, C: 66.1 },
    { date: '10/30', A: 87.1, B: 72.0, C: 65.5 },
    { date: '11/01', A: 87.3, B: 72.1, C: 65.8 }
  ]);

  // 고장 트렌드 데이터 (월간)
  const [failureTrendData] = useState<FailureData[]>([
    { date: '10/01', count: 3, line: 'A' },
    { date: '10/05', count: 1, line: 'B' },
    { date: '10/08', count: 2, line: 'C' },
    { date: '10/12', count: 4, line: 'B' },
    { date: '10/15', count: 1, line: 'A' },
    { date: '10/18', count: 3, line: 'C' },
    { date: '10/22', count: 2, line: 'B' },
    { date: '10/25', count: 1, line: 'A' },
    { date: '10/28', count: 5, line: 'B' }
  ]);

  // 라인별 고장 통계
  const [failureByLine] = useState([
    { name: 'A 라인', line: 'A 라인', count: 5, percentage: 22 },
    { name: 'B 라인', line: 'B 라인', count: 12, percentage: 52 },
    { name: 'C 라인', line: 'C 라인', count: 6, percentage: 26 }
  ]);

  // 커스텀 Pie Chart 툴팁
  const CustomPieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="font-semibold text-gray-900">{data.line}</p>
          <p className="text-sm text-gray-600">고장 건수: <span className="font-semibold text-red-600">{data.count}건</span></p>
          <p className="text-sm text-gray-600">비율: <span className="font-semibold">{data.percentage}%</span></p>
        </div>
      );
    }
    return null;
  };

  // 주간 점검 계획표 데이터
  interface WeeklyInspection {
    id: string;
    equipment: string;
    line: 'A' | 'B' | 'C';
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
    inspector: string;
    status: 'completed' | 'pending' | 'in-progress' | 'delayed';
  }

  const [weeklyInspections] = useState<WeeklyInspection[]>([
    { 
      id: '1', 
      equipment: 'EQ-A-001 1차 파쇄기', 
      line: 'A',
      monday: '일일점검',
      wednesday: '주간점검',
      friday: '일일점검',
      inspector: '김현수',
      status: 'completed'
    },
    { 
      id: '2', 
      equipment: 'EQ-A-002 2차 파쇄기', 
      line: 'A',
      tuesday: '일일점검',
      thursday: '월간점검',
      inspector: '이준호',
      status: 'in-progress'
    },
    { 
      id: '3', 
      equipment: 'EQ-A-003 선별기', 
      line: 'A',
      monday: '청소/점검',
      wednesday: '일일점검',
      friday: '주간점검',
      inspector: '박지민',
      status: 'pending'
    },
    { 
      id: '4', 
      equipment: 'EQ-B-001 1차 파쇄기', 
      line: 'B',
      monday: '일일점검',
      thursday: '주간점검',
      inspector: '최영수',
      status: 'completed'
    },
    { 
      id: '5', 
      equipment: 'EQ-B-005 컨베이어', 
      line: 'B',
      tuesday: '일일점검',
      friday: '일일점검',
      inspector: '정민철',
      status: 'delayed'
    },
    { 
      id: '6', 
      equipment: 'EQ-B-008 선별기', 
      line: 'B',
      wednesday: '월간점검',
      saturday: '일일점검',
      inspector: '강태희',
      status: 'in-progress'
    },
    { 
      id: '7', 
      equipment: 'EQ-C-001 1차 파쇄기', 
      line: 'C',
      monday: '일일점검',
      wednesday: '일일점검',
      friday: '주간점검',
      inspector: '윤서준',
      status: 'completed'
    },
    { 
      id: '8', 
      equipment: 'EQ-C-005 컨베이어', 
      line: 'C',
      tuesday: '청소/점검',
      thursday: '일일점검',
      inspector: '한지우',
      status: 'pending'
    },
    { 
      id: '9', 
      equipment: 'EQ-C-012 승강기', 
      line: 'C',
      wednesday: '주간점검',
      saturday: '일일점검',
      inspector: '송민준',
      status: 'completed'
    },
  ]);

  const [selectedLine, setSelectedLine] = useState<'전체' | 'A' | 'B' | 'C'>('전체');

  // 점검 일정 (기존 데이터 유지 - 다른 곳에서 사용될 수 있음)
  const [inspectionSchedule] = useState<InspectionSchedule[]>([
    { id: '1', equipment: 'EQ-A-001 1차 파쇄기', type: '월간 점검', dueDate: '2025-11-05', status: 'pending', line: 'A' },
    { id: '2', equipment: 'EQ-B-001 2차 파쇄기', type: '주간 점검', dueDate: '2025-11-03', status: 'overdue', line: 'B' },
    { id: '3', equipment: 'EQ-A-015 승강기', type: '분기 점검', dueDate: '2025-11-10', status: 'pending', line: 'A' },
    { id: '4', equipment: 'EQ-C-005 컨베이어', type: '일간 점검', dueDate: '2025-11-01', status: 'completed', line: 'C' },
    { id: '5', equipment: 'EQ-B-008 선별기', type: '월간 점검', dueDate: '2025-11-02', status: 'overdue', line: 'B' }
  ]);

  // 일일보고서 Mock 데이터 생성 (3단계 계층)
  const generateDailyReports = (): EquipmentDailyReport[] => {
    const reports: EquipmentDailyReport[] = [];
    const lines: ('A' | 'B' | 'C')[] = ['A', 'B', 'C'];
    
    const equipmentNames = ['1차 파쇄기', '2차 파쇄기', '선별기', '컨베이어', '승강기'];
    const materialsPerEquipment = ['콘크리트', '아스팔트', '자갈'];
    const partsPerMaterial = ['베어링', '체인', '벨트'];

    // 전체 데이터셋에서 고장/점검을 제한하기 위한 카운터
    let totalFailureCount = 0;
    let totalInspectionCount = 0;
    const maxFailures = 4; // 최대 고장 개수
    const maxInspections = 8; // 최대 점검 개수

    const generateReports = (): DailyReportEntry[] => {
      const dailyReports: DailyReportEntry[] = [];
      
      for (let day = 1; day <= 30; day++) {
        const rand = Math.random();
        let status: DailyReportEntry['status'];
        let entry: DailyReportEntry;
        
        // 고장은 매우 드물게 (전체 데이터셋에서 3-4개만)
        if (totalFailureCount < maxFailures && rand > 0.999) {
          status = 'failure';
          totalFailureCount++;
          entry = {
            day,
            status,
            workContent: '긴급 수리 작업',
            inspectionItems: ['고장 원인 파악', '부품 교체', '재가동 테스트'],
            failurePart: '유압 실린더',
            failureDetail: '기계적 결함으로 인한 가동 중단'
          };
        } else if (totalInspectionCount < maxInspections && rand > 0.998) {
          // 점검도 제한 (전체 데이터셋에서 7-8개만)
          status = 'inspected';
          totalInspectionCount++;
          entry = {
            day,
            status,
            workContent: '정기 점검 실시',
            inspectionItems: [
              '외관 상태 확인',
              '윤활유 보충',
              '볼트 체결 확인',
              '작동 테스트'
            ]
          };
        } else if (rand > 0.95) {
          // 5% 확률로 비어있음 (휴무/미가동)
          status = 'empty';
          entry = { day, status };
        } else {
          // 대부분 정상 (약 95%)
          status = 'normal';
          entry = {
            day,
            status,
            workContent: '정상 가동',
            inspectionItems: ['일일 점검 완료']
          };
        }
        
        dailyReports.push(entry);
      }
      return dailyReports;
    };

    lines.forEach(line => {
      equipmentNames.forEach((equipName, eqIdx) => {
        const materials: MaterialDailyReport[] = [];
        
        materialsPerEquipment.forEach((matName, matIdx) => {
          const parts: PartsDailyReport[] = [];
          
          partsPerMaterial.forEach((partName, partIdx) => {
            parts.push({
              partId: `PT-${line}-${String(eqIdx + 1).padStart(3, '0')}-${String(matIdx + 1).padStart(2, '0')}-${String(partIdx + 1).padStart(2, '0')}`,
              partName,
              reports: generateReports()
            });
          });
          
          materials.push({
            materialId: `MT-${line}-${String(eqIdx + 1).padStart(3, '0')}-${String(matIdx + 1).padStart(2, '0')}`,
            materialName: matName,
            reports: generateReports(),
            parts
          });
        });
        
        reports.push({
          equipmentId: `EQ-${line}-${String(eqIdx + 1).padStart(3, '0')}`,
          equipmentName: equipName,
          line,
          reports: generateReports(),
          materials
        });
      });
    });
    
    return reports;
  };

  const [dailyReportsData] = useState<EquipmentDailyReport[]>(generateDailyReports());

  const toggleEquipment = (id: string) => {
    setOpenEquipment(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleMaterial = (id: string) => {
    setOpenMaterial(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // 하위 항목의 상태를 반영하여 집계된 상태 계산
  const getAggregatedStatus = (reports: DailyReportEntry[], childStatuses?: DailyReportEntry['status'][]): DailyReportEntry['status'] => {
    const allStatuses = [...reports.map(r => r.status), ...(childStatuses || [])];
    
    // 우선순위: 고장 > 점검 > 정상 > 미가동
    if (allStatuses.includes('failure')) return 'failure';
    if (allStatuses.includes('inspected')) return 'inspected';
    if (allStatuses.includes('normal')) return 'normal';
    return 'empty';
  };

  // 자재의 집계 상태 계산 (자재 자체 + 모든 부품)
  const getMaterialAggregatedStatus = (material: MaterialDailyReport, day: number): DailyReportEntry['status'] => {
    const materialStatus = material.reports.find(r => r.day === day)?.status || 'empty';
    const partStatuses = material.parts.map(part => 
      part.reports.find(r => r.day === day)?.status || 'empty'
    );
    
    return getAggregatedStatus([{ day, status: materialStatus }], partStatuses);
  };

  // 설비의 집계 상태 계산 (설비 자체 + 모든 자재 + 모든 부품)
  const getEquipmentAggregatedStatus = (equipment: EquipmentDailyReport, day: number): DailyReportEntry['status'] => {
    const equipmentStatus = equipment.reports.find(r => r.day === day)?.status || 'empty';
    const allChildStatuses: DailyReportEntry['status'][] = [];
    
    equipment.materials.forEach(material => {
      const materialStatus = material.reports.find(r => r.day === day)?.status || 'empty';
      allChildStatuses.push(materialStatus);
      
      material.parts.forEach(part => {
        const partStatus = part.reports.find(r => r.day === day)?.status || 'empty';
        allChildStatuses.push(partStatus);
      });
    });
    
    return getAggregatedStatus([{ day, status: equipmentStatus }], allChildStatuses);
  };

  // 라인별 고장 차트 색상 (더 선명하게)
  const COLORS = ['#3b82f6', '#ef4444', '#f59e0b'];

  const getOEEColor = (oee: number) => {
    if (oee >= 85) return 'text-green-600';
    if (oee >= 70) return 'text-blue-600';
    if (oee >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getOEEBadge = (oee: number) => {
    if (oee >= 85) return { label: 'World Class', color: 'bg-green-100 text-green-800' };
    if (oee >= 70) return { label: 'Good', color: 'bg-blue-100 text-blue-800' };
    if (oee >= 60) return { label: 'Fair', color: 'bg-yellow-100 text-yellow-800' };
    return { label: 'Poor', color: 'bg-red-100 text-red-800' };
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    if (trend === 'up') return <ArrowUp className="w-4 h-4 text-green-600" />;
    if (trend === 'down') return <ArrowDown className="w-4 h-4 text-red-600" />;
    return <span className="w-4 h-4 text-gray-400">─</span>;
  };

  const getStatusBadge = (status: InspectionSchedule['status']) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">완료</Badge>;
      case 'pending':
        return <Badge className="bg-blue-100 text-blue-800">예정</Badge>;
      case 'overdue':
        return <Badge className="bg-red-100 text-red-800">지연</Badge>;
    }
  };

  // 알림 시스템
  const overdueCount = inspectionSchedule.filter(s => s.status === 'overdue').length;
  
  useEffect(() => {
    if (overdueCount > 0) {
      toast.warning(`${overdueCount}건의 점검이 지연되었습니다`, {
        description: '점검 일정을 확인해주세요',
        duration: 5000
      });
    }
  }, [overdueCount]);

  return (
    <div className="w-full h-full bg-gray-50 overflow-hidden">
      <ScrollArea className="h-full w-full">
        <div className="p-4 md:p-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* 헤더 */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0 mb-4 md:mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl mb-1 md:mb-2 flex items-center gap-2">
              <Settings className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
              TPM 관리 시스템
            </h1>
            <p className="text-sm md:text-base text-gray-600">전사적 생산 보전 (Total Productive Maintenance)</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setQrScanOpen(true)} className="flex-1 md:flex-none h-9 md:h-10">
              <QrCode className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">QR 스캔</span>
            </Button>
            <Button onClick={() => setTpmDialogOpen(true)} className="flex-1 md:flex-none h-9 md:h-10">
              <Settings className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">TPM 등록</span>
            </Button>
          </div>
        </div>

        {/* 주요 지표 카드 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
          <Card className="p-3 md:p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 md:mb-4">
              <div className="flex-1">
                <p className="text-xs md:text-sm text-gray-600 mb-1">평균 OEE</p>
                <p className="text-xl md:text-3xl">75.1%</p>
              </div>
              <div className="hidden md:block bg-blue-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
              <ArrowUp className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
              <span className="text-green-600">+2.3%</span>
              <span className="text-gray-500 hidden md:inline">지난 주 대비</span>
            </div>
          </Card>

          <Card className="p-3 md:p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 md:mb-4">
              <div className="flex-1">
                <p className="text-xs md:text-sm text-gray-600 mb-1">이번 달 고장</p>
                <p className="text-xl md:text-3xl">23건</p>
              </div>
              <div className="hidden md:block bg-red-100 p-3 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
              <ArrowDown className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
              <span className="text-green-600">-15%</span>
              <span className="text-gray-500 hidden md:inline">지난 달 대비</span>
            </div>
          </Card>

          <Card className="p-3 md:p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 md:mb-4">
              <div className="flex-1">
                <p className="text-xs md:text-sm text-gray-600 mb-1">보전 작업</p>
                <p className="text-xl md:text-3xl">142건</p>
              </div>
              <div className="hidden md:block bg-green-100 p-3 rounded-lg">
                <Wrench className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
              <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
              <span className="text-green-600 text-xs md:text-sm">95% 완료</span>
            </div>
          </Card>

          <Card className="p-3 md:p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 md:mb-4">
              <div className="flex-1">
                <p className="text-xs md:text-sm text-gray-600 mb-1">점검 지연</p>
                <p className="text-xl md:text-3xl text-red-600">{overdueCount}건</p>
              </div>
              <div className="hidden md:block bg-orange-100 p-3 rounded-lg">
                <Bell className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
              <Clock className="w-3 h-3 md:w-4 md:h-4 text-orange-600" />
              <span className="text-orange-600 text-xs md:text-sm">즉시 조치</span>
            </div>
          </Card>
        </div>

        {/* 메인 콘텐츠 */}
        <Tabs value={selectedTab} onValueChange={handleTabChange}>
          <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0 mb-4">
            <TabsList className="mb-0 bg-white shadow-sm border inline-flex w-full md:w-auto min-w-max">
              <TabsTrigger 
                value="dashboard" 
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white hover:bg-blue-50 transition-all duration-200 text-xs md:text-sm px-2 md:px-4"
              >
                <BarChart3 className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">OEE 대시보드</span>
                <span className="sm:hidden">OEE</span>
              </TabsTrigger>
              <TabsTrigger 
                value="failures"
                className="data-[state=active]:bg-red-500 data-[state=active]:text-white hover:bg-red-50 transition-all duration-200 text-xs md:text-sm px-2 md:px-4"
              >
                <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">고장 분석</span>
                <span className="sm:hidden">고장</span>
              </TabsTrigger>
              <TabsTrigger 
                value="schedule"
                className="data-[state=active]:bg-green-500 data-[state=active]:text-white hover:bg-green-50 transition-all duration-200 text-xs md:text-sm px-2 md:px-4"
              >
                <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">점검 일정</span>
                <span className="sm:hidden">일정</span>
              </TabsTrigger>
              <TabsTrigger 
                value="daily-report"
                className="data-[state=active]:bg-purple-500 data-[state=active]:text-white hover:bg-purple-50 transition-all duration-200 text-xs md:text-sm px-2 md:px-4"
              >
                <FileText className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">일일보고서</span>
                <span className="sm:hidden">보고서</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* 탭 컨텐츠 스크롤 타겟 */}
          <div ref={tabContentRef}>
            {/* OEE 대시보드 */}
            <TabsContent value="dashboard">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
              {/* 라인별 OEE 현황 */}
              <Card className="p-4 md:p-6">
                <h3 className="text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 md:w-5 md:h-5" />
                  라인별 OEE 현황
                </h3>
                <div className="space-y-4">
                  {oeeData.map((data) => {
                    const badge = getOEEBadge(data.oee);
                    return (
                      <div key={data.line} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold">{data.line} 라인</span>
                            <Badge className={badge.color}>{badge.label}</Badge>
                            {getTrendIcon(data.trend)}
                          </div>
                          <span className={`text-2xl ${getOEEColor(data.oee)}`}>
                            {data.oee}%
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div className="bg-blue-50 p-2 rounded">
                            <p className="text-xs text-gray-600">가동률</p>
                            <p className="font-semibold text-blue-600">{data.availability}%</p>
                          </div>
                          <div className="bg-green-50 p-2 rounded">
                            <p className="text-xs text-gray-600">성능률</p>
                            <p className="font-semibold text-green-600">{data.performance}%</p>
                          </div>
                          <div className="bg-purple-50 p-2 rounded">
                            <p className="text-xs text-gray-600">양품률</p>
                            <p className="font-semibold text-purple-600">{data.quality}%</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* OEE 트렌드 차트 */}
              <Card className="p-4 md:p-6">
                <h3 className="text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                  OEE 트렌드 (주간)
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={oeeTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis domain={[60, 90]} tick={{ fontSize: 12 }} />
                    <RechartsTooltip />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Line type="monotone" dataKey="A" stroke="#3b82f6" strokeWidth={2} name="A 라인" />
                    <Line type="monotone" dataKey="B" stroke="#10b981" strokeWidth={2} name="B 라인" />
                    <Line type="monotone" dataKey="C" stroke="#f59e0b" strokeWidth={2} name="C 라인" />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              {/* OEE 구성 요소 분포 */}
              <Card className="p-4 md:p-6">
                <h3 className="text-base md:text-lg mb-3 md:mb-4">OEE 구성 요소 비교</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={oeeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="line" tick={{ fontSize: 12 }} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                    <RechartsTooltip />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Bar dataKey="availability" fill="#3b82f6" name="가동률" />
                    <Bar dataKey="performance" fill="#10b981" name="성능률" />
                    <Bar dataKey="quality" fill="#8b5cf6" name="양품률" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              {/* OEE 개선 목표 */}
              <Card className="p-4 md:p-6">
                <h3 className="text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                  개선 우선순위
                </h3>
                <div className="space-y-3">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-red-900">C 라인 - 긴급</span>
                      <Badge className="bg-red-600 text-white">65.8%</Badge>
                    </div>
                    <p className="text-sm text-red-800">• 잦은 고장으로 가동률 저하</p>
                    <p className="text-sm text-red-800">• 예방 보전 강화 필요</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-yellow-900">B 라인 - 주의</span>
                      <Badge className="bg-yellow-600 text-white">72.1%</Badge>
                    </div>
                    <p className="text-sm text-yellow-800">• 체인 교체 필요</p>
                    <p className="text-sm text-yellow-800">• 성능률 개선 가능</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-green-900">A 라인 - 우수</span>
                      <Badge className="bg-green-600 text-white">87.3%</Badge>
                    </div>
                    <p className="text-sm text-green-800">• 파쇄기 성능 우수</p>
                    <p className="text-sm text-green-800">• 현재 수준 유지</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* 고장 분석 */}
          <TabsContent value="failures">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
              {/* ��장 트렌드 */}
              <Card className="p-4 md:p-6">
                <h3 className="text-base md:text-lg mb-3 md:mb-4">월간 고장 발생 트렌드</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={failureTrendData.reduce((acc, curr) => {
                    const existing = acc.find(item => item.date === curr.date);
                    if (existing) {
                      existing.count += curr.count;
                    } else {
                      acc.push({ date: curr.date, count: curr.count });
                    }
                    return acc;
                  }, [] as { date: string; count: number }[])}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <RechartsTooltip />
                    <Area type="monotone" dataKey="count" stroke="#ef4444" fill="#fca5a5" name="고장 건수" />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>

              {/* 라인별 고장 분포 */}
              <Card className="p-4 md:p-6">
                <h3 className="text-base md:text-lg mb-3 md:mb-4">라인별 고장 분포</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={failureByLine}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ line, percentage }) => `${line}: ${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {failureByLine.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip content={<CustomPieTooltip />} />
                    <Legend wrapperStyle={{ fontSize: '12px' }} formatter={(value, entry: any) => `${entry.payload.line} (${entry.payload.count}건)`} />
                  </PieChart>
                </ResponsiveContainer>
              </Card>

              {/* 고장 통계 테이블 */}
              <Card className="p-4 md:p-6 lg:col-span-2">
                <h3 className="text-base md:text-lg mb-3 md:mb-4">라인별 고장 상세</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">라인</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">총 고장</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">비율</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">평균 복구시간</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">주요 원인</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="px-4 py-3">A 라인</td>
                        <td className="px-4 py-3">5건</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '22%' }} />
                            </div>
                            <span className="text-sm">22%</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">45분</td>
                        <td className="px-4 py-3 text-sm text-gray-600">베어링 마모</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="px-4 py-3">B 라인</td>
                        <td className="px-4 py-3 font-semibold text-red-600">12건</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div className="bg-red-500 h-2 rounded-full" style={{ width: '52%' }} />
                            </div>
                            <span className="text-sm font-semibold text-red-600">52%</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">128분</td>
                        <td className="px-4 py-3 text-sm text-gray-600">체인 장력, 전기 문제</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">C 라인</td>
                        <td className="px-4 py-3">6건</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '26%' }} />
                            </div>
                            <span className="text-sm">26%</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">67분</td>
                        <td className="px-4 py-3 text-sm text-gray-600">센서 오류</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* 점검 일정 - 주간 점검 계획표 */}
          <TabsContent value="schedule">
            <div className="grid grid-cols-1 gap-3 md:gap-6">
              <Card className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">
                  <h3 className="text-base md:text-lg flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-600" />
                    주간 점검 계획표
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Select value={selectedLine} onValueChange={(v) => setSelectedLine(v as '전체' | 'A' | 'B' | 'C')}>
                      <SelectTrigger className="w-32 h-9">
                        <SelectValue placeholder="라인 선택" />
                      </SelectTrigger>
                      <SelectContent className="z-[9999]">
                        <SelectItem value="전체">전체 라인</SelectItem>
                        <SelectItem value="A">A 라인</SelectItem>
                        <SelectItem value="B">B 라인</SelectItem>
                        <SelectItem value="C">C 라인</SelectItem>
                      </SelectContent>
                    </Select>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      완료 {weeklyInspections.filter(w => w.status === 'completed').length}건
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      진행중 {weeklyInspections.filter(w => w.status === 'in-progress').length}건
                    </Badge>
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                      지연 {weeklyInspections.filter(w => w.status === 'delayed').length}건
                    </Badge>
                  </div>
                </div>

                {/* 주간 계획표 테이블 */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse min-w-[900px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-green-50 to-blue-50">
                        <th className="border border-gray-300 px-3 py-3 text-left text-sm font-semibold bg-gray-100 sticky left-0 z-10">
                          설비명
                        </th>
                        <th className="border border-gray-300 px-3 py-3 text-center text-sm font-semibold bg-gray-100 w-16">
                          라인
                        </th>
                        <th className="border border-gray-300 px-3 py-3 text-center text-sm font-semibold bg-red-50 w-24">
                          월요일
                        </th>
                        <th className="border border-gray-300 px-3 py-3 text-center text-sm font-semibold w-24">
                          화요일
                        </th>
                        <th className="border border-gray-300 px-3 py-3 text-center text-sm font-semibold w-24">
                          수요일
                        </th>
                        <th className="border border-gray-300 px-3 py-3 text-center text-sm font-semibold w-24">
                          목요일
                        </th>
                        <th className="border border-gray-300 px-3 py-3 text-center text-sm font-semibold w-24">
                          금요일
                        </th>
                        <th className="border border-gray-300 px-3 py-3 text-center text-sm font-semibold bg-blue-50 w-24">
                          토요일
                        </th>
                        <th className="border border-gray-300 px-3 py-3 text-center text-sm font-semibold bg-red-50 w-24">
                          일요일
                        </th>
                        <th className="border border-gray-300 px-3 py-3 text-center text-sm font-semibold bg-gray-100 w-20">
                          담당자
                        </th>
                        <th className="border border-gray-300 px-3 py-3 text-center text-sm font-semibold bg-gray-100 w-20">
                          상태
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {weeklyInspections
                        .filter(item => selectedLine === '전체' || item.line === selectedLine)
                        .map((item) => {
                          const getStatusColor = (status: WeeklyInspection['status']) => {
                            switch (status) {
                              case 'completed':
                                return 'bg-green-50';
                              case 'in-progress':
                                return 'bg-blue-50';
                              case 'delayed':
                                return 'bg-red-50';
                              default:
                                return 'bg-white';
                            }
                          };

                          const getStatusBadgeWeekly = (status: WeeklyInspection['status']) => {
                            switch (status) {
                              case 'completed':
                                return <Badge className="bg-green-100 text-green-800 text-xs">완료</Badge>;
                              case 'in-progress':
                                return <Badge className="bg-blue-100 text-blue-800 text-xs">진행중</Badge>;
                              case 'delayed':
                                return <Badge className="bg-red-100 text-red-800 text-xs">지연</Badge>;
                              default:
                                return <Badge variant="outline" className="text-xs">대기</Badge>;
                            }
                          };

                          const getCellContent = (day?: string) => {
                            if (!day) return <span className="text-gray-300">-</span>;
                            
                            let bgColor = 'bg-gray-50';
                            let textColor = 'text-gray-700';
                            
                            if (day.includes('월간')) {
                              bgColor = 'bg-purple-100';
                              textColor = 'text-purple-800';
                            } else if (day.includes('주간')) {
                              bgColor = 'bg-blue-100';
                              textColor = 'text-blue-800';
                            } else if (day.includes('일일')) {
                              bgColor = 'bg-green-100';
                              textColor = 'text-green-800';
                            } else if (day.includes('청소')) {
                              bgColor = 'bg-yellow-100';
                              textColor = 'text-yellow-800';
                            }
                            
                            return (
                              <div className={`inline-flex items-center justify-center px-2 py-1 rounded text-xs ${bgColor} ${textColor}`}>
                                {day}
                              </div>
                            );
                          };

                          return (
                            <tr key={item.id} className={getStatusColor(item.status)}>
                              <td className="border border-gray-300 px-3 py-3 text-sm sticky left-0 bg-white">
                                <div className="flex items-center gap-2">
                                  <Wrench className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                  <span className="font-medium">{item.equipment}</span>
                                </div>
                              </td>
                              <td className="border border-gray-300 px-3 py-3 text-center">
                                <Badge variant="outline" className="text-xs">
                                  {item.line}
                                </Badge>
                              </td>
                              <td className="border border-gray-300 px-3 py-3 text-center bg-red-50/30">
                                {getCellContent(item.monday)}
                              </td>
                              <td className="border border-gray-300 px-3 py-3 text-center">
                                {getCellContent(item.tuesday)}
                              </td>
                              <td className="border border-gray-300 px-3 py-3 text-center">
                                {getCellContent(item.wednesday)}
                              </td>
                              <td className="border border-gray-300 px-3 py-3 text-center">
                                {getCellContent(item.thursday)}
                              </td>
                              <td className="border border-gray-300 px-3 py-3 text-center">
                                {getCellContent(item.friday)}
                              </td>
                              <td className="border border-gray-300 px-3 py-3 text-center bg-blue-50/30">
                                {getCellContent(item.saturday)}
                              </td>
                              <td className="border border-gray-300 px-3 py-3 text-center bg-red-50/30">
                                {getCellContent(item.sunday)}
                              </td>
                              <td className="border border-gray-300 px-3 py-3 text-center text-sm">
                                {item.inspector}
                              </td>
                              <td className="border border-gray-300 px-3 py-3 text-center">
                                {getStatusBadgeWeekly(item.status)}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>

                {/* 범례 */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    점검 유형 범례
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-6 bg-green-100 border border-green-300 rounded flex items-center justify-center">
                        <span className="text-xs text-green-800">일일</span>
                      </div>
                      <span className="text-xs text-gray-600">일일 점검</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-6 bg-blue-100 border border-blue-300 rounded flex items-center justify-center">
                        <span className="text-xs text-blue-800">주간</span>
                      </div>
                      <span className="text-xs text-gray-600">주간 점검</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-6 bg-purple-100 border border-purple-300 rounded flex items-center justify-center">
                        <span className="text-xs text-purple-800">월간</span>
                      </div>
                      <span className="text-xs text-gray-600">월간 점검</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-6 bg-yellow-100 border border-yellow-300 rounded flex items-center justify-center">
                        <span className="text-xs text-yellow-800">청소</span>
                      </div>
                      <span className="text-xs text-gray-600">청소/점검</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* 일일보고서 */}
          <TabsContent value="daily-report">
            <Card className="p-6">
              {/* 필터 섹션 */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <h3 className="text-base md:text-lg flex items-center gap-2">
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  월간 점검 현황
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs md:text-sm text-gray-600">라인:</span>
                  <Select value={reportLine} onValueChange={(v) => setReportLine(v as 'A' | 'B' | 'C')}>
                    <SelectTrigger className="w-20 md:w-24 h-8 md:h-10 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">A 라인</SelectItem>
                      <SelectItem value="B">B 라인</SelectItem>
                      <SelectItem value="C">C 라인</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* 범례 */}
              <div className="flex flex-wrap gap-2 md:gap-4 mb-3 md:mb-4 p-2 md:p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-4 h-4 md:w-6 md:h-6 bg-green-100 border-2 border-green-500 rounded" />
                  <span className="text-xs md:text-sm text-gray-700">정상</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-4 h-4 md:w-6 md:h-6 bg-blue-100 border-2 border-blue-500 rounded" />
                  <span className="text-xs md:text-sm text-gray-700">점검</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-4 h-4 md:w-6 md:h-6 bg-red-100 border-2 border-red-500 rounded" />
                  <span className="text-xs md:text-sm text-gray-700">고장</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-4 h-4 md:w-6 md:h-6 bg-gray-100 border-2 border-gray-300 rounded" />
                  <span className="text-xs md:text-sm text-gray-700">미가동</span>
                </div>
              </div>

              {/* 계층 구조 테이블 */}
              <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0 border md:border-0 rounded-lg">
                <div className="min-w-max">
                  {/* 헤더 */}
                  <div className="flex bg-gray-100 border-b-2 border-gray-300">
                    <div className="sticky left-0 z-10 bg-gray-100 border-r px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm font-semibold min-w-[150px] md:min-w-[200px]">
                      설비명
                    </div>
                    {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
                      <div key={day} className="border-r px-1 md:px-2 py-1.5 md:py-2 text-[10px] md:text-xs font-semibold text-center w-[32px] md:w-[40px] flex-shrink-0">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* 데이터 행 */}
                  {dailyReportsData
                    .filter(eq => eq.line === reportLine)
                    .map(equipment => (
                      <div key={equipment.equipmentId}>
                        {/* 레벨 1: 설비 기계 */}
                        <div className="flex border-b hover:bg-gray-50">
                          <div 
                            className="sticky left-0 z-10 bg-white border-r px-3 py-2 min-w-[200px] cursor-pointer hover:bg-gray-50 flex items-center gap-2"
                            onClick={() => toggleEquipment(equipment.equipmentId)}
                          >
                            {openEquipment.includes(equipment.equipmentId) ? (
                              <ChevronDown className="w-4 h-4 text-gray-600 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
                            )}
                            <Cog className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="font-medium text-sm">{equipment.equipmentName}</div>
                              <div className="text-xs text-gray-500">{equipment.equipmentId}</div>
                            </div>
                          </div>
                          {equipment.reports.map(report => {
                            // 하위 항목 상태를 반영한 집계 상태 사용
                            const aggregatedStatus = getEquipmentAggregatedStatus(equipment, report.day);
                            const cellClass = 
                              aggregatedStatus === 'normal' ? 'bg-green-100 hover:bg-green-200 cursor-pointer' :
                              aggregatedStatus === 'inspected' ? 'bg-blue-100 hover:bg-blue-200 cursor-pointer' :
                              aggregatedStatus === 'failure' ? 'bg-red-100 hover:bg-red-200 cursor-pointer' :
                              'bg-gray-100';
                            
                            return (
                              <div
                                key={report.day}
                                className={`border-r p-1 flex items-center justify-center transition-colors w-[32px] md:w-[40px] flex-shrink-0 ${cellClass}`}
                                onClick={() => {
                                  if (aggregatedStatus !== 'empty') {
                                    setSelectedDayDetail({
                                      itemName: `${equipment.equipmentName} (${equipment.equipmentId})`,
                                      itemType: 'equipment',
                                      day: report.day,
                                      data: report
                                    });
                                  }
                                }}
                              >
                                {aggregatedStatus === 'normal' && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                                {aggregatedStatus === 'inspected' && <Wrench className="w-4 h-4 text-blue-600" />}
                                {aggregatedStatus === 'failure' && <XCircle className="w-4 h-4 text-red-600" />}
                              </div>
                            );
                          })}
                        </div>

                        {/* 레벨 2: 자재 (설비가 펼쳐져 있을 때만 표시) */}
                        {openEquipment.includes(equipment.equipmentId) && equipment.materials.map(material => (
                          <div key={material.materialId}>
                            <div className="flex border-b hover:bg-gray-50 bg-blue-50/30">
                              <div 
                                className="sticky left-0 z-10 bg-blue-50/50 border-r px-3 py-2 min-w-[200px] cursor-pointer hover:bg-blue-100/50 flex items-center gap-2 pl-8"
                                onClick={() => toggleMaterial(material.materialId)}
                              >
                                {openMaterial.includes(material.materialId) ? (
                                  <ChevronDown className="w-4 h-4 text-gray-600 flex-shrink-0" />
                                ) : (
                                  <ChevronRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
                                )}
                                <Package className="w-4 h-4 text-purple-600 flex-shrink-0" />
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{material.materialName}</div>
                                  <div className="text-xs text-gray-500">{material.materialId}</div>
                                </div>
                              </div>
                              {material.reports.map(report => {
                                // 하위 부품 상태를 반영한 집계 상태 사용
                                const aggregatedStatus = getMaterialAggregatedStatus(material, report.day);
                                const cellClass = 
                                  aggregatedStatus === 'normal' ? 'bg-green-100 hover:bg-green-200 cursor-pointer' :
                                  aggregatedStatus === 'inspected' ? 'bg-blue-100 hover:bg-blue-200 cursor-pointer' :
                                  aggregatedStatus === 'failure' ? 'bg-red-100 hover:bg-red-200 cursor-pointer' :
                                  'bg-gray-100';
                                
                                return (
                                  <div
                                    key={report.day}
                                    className={`border-r p-1 flex items-center justify-center transition-colors w-[32px] md:w-[40px] flex-shrink-0 ${cellClass}`}
                                    onClick={() => {
                                      if (aggregatedStatus !== 'empty') {
                                        setSelectedDayDetail({
                                          itemName: `${equipment.equipmentName} > ${material.materialName} (${material.materialId})`,
                                          itemType: 'material',
                                          day: report.day,
                                          data: report
                                        });
                                      }
                                    }}
                                  >
                                    {aggregatedStatus === 'normal' && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                                    {aggregatedStatus === 'inspected' && <Wrench className="w-4 h-4 text-blue-600" />}
                                    {aggregatedStatus === 'failure' && <XCircle className="w-4 h-4 text-red-600" />}
                                  </div>
                                );
                              })}
                            </div>

                            {/* 레벨 3: 부품/부속 (자재가 펼쳐져 있을 때만 표시) */}
                            {openMaterial.includes(material.materialId) && material.parts.map(part => (
                              <div key={part.partId} className="flex border-b hover:bg-gray-50 bg-purple-50/30">
                                <div className="sticky left-0 z-10 bg-purple-50/50 border-r px-3 py-2 min-w-[200px] flex items-center gap-2 pl-14">
                                  <div className="w-4 h-4 flex-shrink-0" />
                                  <Wrench className="w-3 h-3 text-orange-600 flex-shrink-0" />
                                  <div className="flex-1">
                                    <div className="font-medium text-sm">{part.partName}</div>
                                    <div className="text-xs text-gray-500">{part.partId}</div>
                                  </div>
                                </div>
                                {part.reports.map(report => {
                                  const cellClass = 
                                    report.status === 'normal' ? 'bg-green-100 hover:bg-green-200 cursor-pointer' :
                                    report.status === 'inspected' ? 'bg-blue-100 hover:bg-blue-200 cursor-pointer' :
                                    report.status === 'failure' ? 'bg-red-100 hover:bg-red-200 cursor-pointer' :
                                    'bg-gray-100';
                                  
                                  return (
                                    <div
                                      key={report.day}
                                      className={`border-r p-1 flex items-center justify-center transition-colors w-[32px] md:w-[40px] flex-shrink-0 ${cellClass}`}
                                      onClick={() => {
                                        if (report.status !== 'empty') {
                                          setSelectedDayDetail({
                                            itemName: `${equipment.equipmentName} > ${material.materialName} > ${part.partName} (${part.partId})`,
                                            itemType: 'part',
                                            day: report.day,
                                            data: report
                                          });
                                        }
                                      }}
                                    >
                                      {report.status === 'normal' && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                                      {report.status === 'inspected' && <Wrench className="w-4 h-4 text-blue-600" />}
                                      {report.status === 'failure' && <XCircle className="w-4 h-4 text-red-600" />}
                                    </div>
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              </div>

              {/* 통계 요약 */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {(() => {
                  const filteredData = dailyReportsData.filter(eq => eq.line === reportLine);
                  
                  // 모든 레벨의 데이터를 수집
                  let allReports: DailyReportEntry[] = [];
                  filteredData.forEach(equipment => {
                    allReports = [...allReports, ...equipment.reports];
                    equipment.materials.forEach(material => {
                      allReports = [...allReports, ...material.reports];
                      material.parts.forEach(part => {
                        allReports = [...allReports, ...part.reports];
                      });
                    });
                  });
                  
                  const totalDays = allReports.length;
                  const normalCount = allReports.filter(r => r.status === 'normal').length;
                  const inspectedCount = allReports.filter(r => r.status === 'inspected').length;
                  const failureCount = allReports.filter(r => r.status === 'failure').length;
                  
                  return (
                    <>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">정상 가동</p>
                        <p className="text-2xl text-green-600">{normalCount}건</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {totalDays > 0 ? ((normalCount / totalDays) * 100).toFixed(1) : 0}%
                        </p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">점검 실시</p>
                        <p className="text-2xl text-blue-600">{inspectedCount}건</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {totalDays > 0 ? ((inspectedCount / totalDays) * 100).toFixed(1) : 0}%
                        </p>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">고장 발생</p>
                        <p className="text-2xl text-red-600">{failureCount}건</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {totalDays > 0 ? ((failureCount / totalDays) * 100).toFixed(1) : 0}%
                        </p>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">총 점검일</p>
                        <p className="text-2xl text-gray-900">{totalDays}건</p>
                        <p className="text-xs text-gray-500 mt-1">30일 기준</p>
                      </div>
                    </>
                  );
                })()}
              </div>
            </Card>
          </TabsContent>
          </div>
        </Tabs>
          </motion.div>
        </div>
      </ScrollArea>

      {/* TPM 등록 다이얼로그 */}
      <TPMCreateDialog open={tpmDialogOpen} onOpenChange={setTpmDialogOpen} />

      {/* 일일보고서 상세 다이얼로그 */}
      <Dialog open={!!selectedDayDetail} onOpenChange={() => setSelectedDayDetail(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              {selectedDayDetail?.itemName} - {selectedDayDetail?.day}일 상세
            </DialogTitle>
            <DialogDescription>
              {reportLine} 라인 / {
                selectedDayDetail?.itemType === 'equipment' ? '설비 기계' : 
                selectedDayDetail?.itemType === 'material' ? '자재' : 
                '부품/부속'
              }
            </DialogDescription>
          </DialogHeader>
          
          {selectedDayDetail && (
            <div className="space-y-6">
              {/* 상태 */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  상태
                </h4>
                <div className="flex items-center gap-2">
                  {selectedDayDetail.data.status === 'normal' && (
                    <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      정상 가동
                    </Badge>
                  )}
                  {selectedDayDetail.data.status === 'inspected' && (
                    <Badge className="bg-blue-100 text-blue-800 flex items-center gap-1">
                      <Wrench className="w-3 h-3" />
                      점검 실시
                    </Badge>
                  )}
                  {selectedDayDetail.data.status === 'failure' && (
                    <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
                      <XCircle className="w-3 h-3" />
                      고장 발생
                    </Badge>
                  )}
                </div>
              </div>

              {/* 작업 내용 */}
              {selectedDayDetail.data.workContent && (
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    작업 내용
                  </h4>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                    {selectedDayDetail.data.workContent}
                  </p>
                </div>
              )}

              {/* 점검 사항 */}
              {selectedDayDetail.data.inspectionItems && selectedDayDetail.data.inspectionItems.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    점검 사항
                  </h4>
                  <ul className="space-y-2">
                    {selectedDayDetail.data.inspectionItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 고장 정보 (고장일 경우에만) */}
              {selectedDayDetail.data.status === 'failure' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-red-900">
                    <AlertTriangle className="w-4 h-4" />
                    고장 상세 정보
                  </h4>
                  
                  {selectedDayDetail.data.failurePart && (
                    <div className="mb-3">
                      <p className="text-sm text-red-800 font-semibold mb-1">고장 부품/자재:</p>
                      <p className="text-red-900 bg-red-100 px-3 py-2 rounded">
                        {selectedDayDetail.data.failurePart}
                      </p>
                    </div>
                  )}
                  
                  {selectedDayDetail.data.failureDetail && (
                    <div>
                      <p className="text-sm text-red-800 font-semibold mb-1">고장 상세:</p>
                      <p className="text-red-900 bg-red-100 px-3 py-2 rounded">
                        {selectedDayDetail.data.failureDetail}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 메모 섹션 (추후 확장 가능) */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  추가 메모
                </h4>
                <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600">
                  작업자: {reportLine}라인 담당자 <br />
                  일시: 2025년 11월 {selectedDayDetail.day}일
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setSelectedDayDetail(null)}>
              닫기
            </Button>
            <Button onClick={() => {
              toast.success('보고서가 다운로드되었습니다');
              setSelectedDayDetail(null);
            }}>
              PDF 다운로드
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* QR 스캔 다이얼로그 */}
      <Dialog open={qrScanOpen} onOpenChange={setQrScanOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <QrCode className="w-5 h-5" />
              설비 QR 코드 스캔
            </DialogTitle>
            <DialogDescription>
              설비에 부착된 QR 코드를 카메라로 스캔하세요
            </DialogDescription>
          </DialogHeader>
          <QRScanner
            onScan={(data) => {
              console.log('QR 스캔 결과:', data);
              
              // QR 코드 데이터 파싱 (예: EQ-A-001)
              const equipmentMatch = data.match(/EQ-[ABC]-\d{3}/);
              
              if (equipmentMatch) {
                const equipmentId = equipmentMatch[0];
                toast.success('QR 코드 스캔 완료', {
                  description: `${equipmentId} 설비 이력을 조회합니다`
                });
                
                // 여기서 설비 정보를 서버에서 가져오거나 상세 페이지로 이동
                // TODO: 실제 구현 시 설비 상세 정보 표시
              } else {
                toast.success('QR 코드 스캔 완료', {
                  description: data
                });
              }
              
              setQrScanOpen(false);
            }}
            onError={(error) => {
              console.error('QR 스캔 에러:', error);
              toast.error('스캔 실패', {
                description: error
              });
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

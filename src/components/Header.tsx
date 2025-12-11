import { useState, useEffect } from 'react';
import { Search, Bell, Plus, CheckCircle2, AlertCircle, Info, Clock, ShoppingCart, Package, Truck, Building2, Boxes, LogOut, User, Menu, AlertTriangle, Settings, Users, History, Database, BellRing, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ScrollArea } from './ui/scroll-area';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { SCMCreateDialog } from './SCMCreateDialog';
import { TPMCreateDialog } from './TPMCreateDialog';
import { Sidebar } from './Sidebar';
import avatarHeader from 'figma:asset/95bb4654de298cb28859bcb152046b9f145f4b6e.png';
import { getEmergencyAlerts, getUnacknowledgedAlerts, acknowledgeAlert, stopSirenSound, stopVibrate, type EmergencyAlert } from '../utils/emergencyAlert';
import { toast } from 'sonner@2.0.3';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

// 알림 데이터
const notifications = [
  {
    id: 1,
    type: 'success',
    title: '폐기물 입고 완료',
    message: '건설폐기물 - 콘크리트 12.5톤이 입고되었습니다.',
    time: '5분 전',
    isRead: false
  },
  {
    id: 2,
    type: 'info',
    title: '재활용률 목표 달성',
    message: '오늘 재활용률이 78%로 목표를 달성했습니다.',
    time: '1시간 전',
    isRead: false
  },
  {
    id: 3,
    type: 'warning',
    title: 'TPM 보전 작업 예정',
    message: 'A라인 파쇄기 정기 점검이 오후 2시에 예정되어 있습니다.',
    time: '2시간 전',
    isRead: true
  },
  {
    id: 4,
    type: 'success',
    title: '순환 골재 생산 완료',
    message: '재생골재 - 25mm 8.3톤 생산이 완료되었습니다.',
    time: '3시간 전',
    isRead: true
  },
  {
    id: 5,
    type: 'info',
    title: '올바로 시스템 동기화',
    message: '환경부 올바로 시스템과 데이터 동기화가 완료되었습니다.',
    time: '5시간 전',
    isRead: true
  }
];

interface HeaderProps {
  onTPMClick?: () => void;
  onBOMClick?: () => void;
  showMobileMenu?: boolean;
  onLogoClick?: () => void;
  onHomeClick?: () => void;
  onCRMClick?: () => void;
  onDashboardClick?: () => void;
  onInventoryClick?: () => void;
  onShippingClick?: () => void;
  onProductionClick?: () => void;
  onReportClick?: () => void;
  onStaffManagementClick?: () => void;
  onAuditLogClick?: () => void;
  onBackupClick?: () => void;
  onNotificationClick?: () => void;
  onMESWorkOrderClick?: () => void;
  onMESWorkProgressClick?: () => void;
  onMESQualityInspectionClick?: () => void;
  onMESEquipmentStatusClick?: () => void;
  onMESProductionPerformanceClick?: () => void;
  currentPage?: string;
}

export function Header({ 
  onTPMClick,
  onBOMClick, 
  showMobileMenu = false,
  onLogoClick,
  onHomeClick,
  onCRMClick,
  onDashboardClick,
  onInventoryClick,
  onShippingClick,
  onProductionClick,
  onReportClick,
  onStaffManagementClick,
  onAuditLogClick,
  onBackupClick,
  onNotificationClick,
  onMESWorkOrderClick,
  onMESWorkProgressClick,
  onMESQualityInspectionClick,
  onMESEquipmentStatusClick,
  onMESProductionPerformanceClick,
  currentPage
}: HeaderProps = {}) {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [scmDialogOpen, setScmDialogOpen] = useState(false);
  const [scmDialogTab, setScmDialogTab] = useState<'order' | 'inout' | 'delivery' | 'supplier' | 'inventory'>('order');
  const [tpmDialogOpen, setTpmDialogOpen] = useState(false);
  const [tpmDialogTab, setTpmDialogTab] = useState<'inspection' | 'maintenance' | 'failure' | 'parts' | 'oee'>('inspection');
  const [currentStaff, setCurrentStaff] = useState<{ name: string; employeeId: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emergencyAlerts, setEmergencyAlerts] = useState<EmergencyAlert[]>([]);
  const [isStoppingSiren, setIsStoppingSiren] = useState(false);
  const unreadCount = notifications.filter(n => !n.isRead).length;

  // 로그인한 직원 정보 불러오기
  useEffect(() => {
    const staffData = localStorage.getItem("currentStaff");
    if (staffData) {
      try {
        setCurrentStaff(JSON.parse(staffData));
      } catch (error) {
        console.error("직원 정보 파싱 실패:", error);
      }
    }
  }, []);

  // 긴급 알림 로드 및 실시간 업데이트
  useEffect(() => {
    const loadEmergencyAlerts = () => {
      // 모든 긴급 알림을 가져옴 (확인 여부와 관계없이)
      const allAlerts = getEmergencyAlerts();
      setEmergencyAlerts(allAlerts);
      console.log('✅ 긴급 알림 로드:', allAlerts.length, '개 (확인된 알림 포함)');
      
      // 확인하지 않은 알림 개수 확인
      const userId = currentStaff?.employeeId || 'anonymous';
      const unacknowledged = getUnacknowledgedAlerts(userId);
      console.log('📊 미확인 알림:', unacknowledged.length, '개');
      
      // ⭐ 중요: 미확인 알림이 0개가 되면 자동으로 사�� 중지
      if (unacknowledged.length === 0 && allAlerts.length > 0) {
        console.log('🔇 모든 알림이 확인되었습니다. 사이렌을 자동으로 중지합니다.');
        try {
          stopSirenSound();
          stopVibrate();
          console.log('✅ 사이렌 및 진동 자동 중지 완료');
        } catch (err) {
          console.error('❌ 사이렌 자동 중지 실패:', err);
        }
      }
    };

    loadEmergencyAlerts();

    // 긴급 알림 추가 이벤트 리스너
    const handleAlertAdded = (event: any) => {
      console.log('🚨 긴급 알림 추가됨:', event.detail);
      loadEmergencyAlerts();
    };

    // 긴급 알림 확인 이벤트 리스너
    const handleAlertAcknowledged = (event: any) => {
      console.log('✓ 긴급 알림 확인됨:', event.detail);
      loadEmergencyAlerts();
    };

    // 긴급 알림 삭제 이벤트 리스너
    const handleAlertDeleted = (event: any) => {
      console.log('🗑️ 긴급 알림 삭제됨:', event.detail);
      loadEmergencyAlerts();
    };

    window.addEventListener('emergency-alert-added', handleAlertAdded);
    window.addEventListener('emergency-alert-acknowledged', handleAlertAcknowledged);
    window.addEventListener('emergency-alert-deleted', handleAlertDeleted);

    return () => {
      window.removeEventListener('emergency-alert-added', handleAlertAdded);
      window.removeEventListener('emergency-alert-acknowledged', handleAlertAcknowledged);
      window.removeEventListener('emergency-alert-deleted', handleAlertDeleted);
    };
  }, [currentStaff]);

  // 로그아웃 핸들러
  const handleLogout = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("currentStaff");
      console.log("✅ 로그아웃 완료");
      // 페이지 새로고침하여 홈으로 이동
      window.location.reload();
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'emergency':
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-orange-600" />;
      case 'info':
        return <Info className="w-4 h-4 text-blue-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  // 긴급 알림 확인 처리
  const handleAcknowledgeEmergency = (alertId: string) => {
    console.log('✓ 긴급 알림 확인 시작:', alertId, 'currentStaff:', currentStaff?.employeeId);
    
    // 사용자 ID 결정 (로그인한 경우 employeeId, 아닌 경우 'anonymous')
    const userId = currentStaff?.employeeId || 'anonymous';
    console.log(`👤 사용자 ID: ${userId}`);
    
    const success = acknowledgeAlert(alertId, userId);
    if (success) {
      console.log('✓ 긴급 알림 확인 완료:', alertId);
      console.log('⚠️ 사이렌은 "알람 중지" 버튼을 눌러야 중지됩니다');
    } else {
      console.log('⚠️ 긴급 알림 확인 실패 (이미 확인됨 또는 알림 없음)');
    }
  };

  // 시간 형식 변환
  const getRelativeTime = (timestamp: string) => {
    const now = new Date();
    const then = new Date(timestamp);
    const diffMs = now.getTime() - then.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return '방금 전';
    if (diffMins < 60) return `${diffMins}분 전`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}시간 전`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}일 전`;
  };

  const handleOpenSCMDialog = (tab: 'order' | 'inout' | 'delivery' | 'supplier' | 'inventory') => {
    setScmDialogTab(tab);
    setScmDialogOpen(true);
  };

  const handleOpenTPMDialog = (tab: 'inspection' | 'maintenance' | 'failure' | 'parts' | 'oee') => {
    setTpmDialogTab(tab);
    setTpmDialogOpen(true);
  };

  // 긴급 알림과 일반 알림을 합쳐서 표시 (긴급 알림이 최상단)
  const userId = currentStaff?.employeeId || 'anonymous';
  const allNotifications = [
    ...emergencyAlerts.map(alert => {
      const isAcknowledged = alert.acknowledgedBy.includes(userId);
      return {
        id: alert.id,
        type: 'emergency' as const,
        title: alert.title,
        message: alert.message,
        time: getRelativeTime(alert.timestamp),
        isRead: isAcknowledged,
        isEmergency: true,
        isAcknowledged: isAcknowledged,
        alertData: alert
      };
    }),
    ...notifications
  ];

  // 미확인 긴급 알림 개수 계산
  const unacknowledgedEmergencyCount = emergencyAlerts.filter(alert => !alert.acknowledgedBy.includes(userId)).length;
  const totalUnreadCount = unacknowledgedEmergencyCount + unreadCount;
  const hasEmergencyAlert = emergencyAlerts.length > 0;

  return (
    <div 
      className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 md:py-4"
      style={{
        boxShadow: '0 30px 100px -5px rgba(99, 102, 241, 0.15)'
      }}
    >
      <div className="mt-[7px]">
        <div className="flex lg:grid lg:grid-cols-4 gap-2 lg:gap-4 items-center justify-between">
          {/* 모바일 햄버거 메뉴 */}
          {showMobileMenu && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-80">
                <SheetTitle className="sr-only">메뉴</SheetTitle>
                <SheetDescription className="sr-only">사이드바 내비게이션 메뉴</SheetDescription>
                <Sidebar 
                  currentPage={currentPage}
                  onLogoClick={() => {
                    setMobileMenuOpen(false);
                    onLogoClick?.();
                  }}
                  onHomeClick={() => {
                    setMobileMenuOpen(false);
                    onHomeClick?.();
                  }}
                  onCRMClick={() => {
                    setMobileMenuOpen(false);
                    onCRMClick?.();
                  }}
                  onDashboardClick={() => {
                    setMobileMenuOpen(false);
                    onDashboardClick?.();
                  }}
                  onInventoryClick={() => {
                    setMobileMenuOpen(false);
                    onInventoryClick?.();
                  }}
                  onShippingClick={() => {
                    setMobileMenuOpen(false);
                    onShippingClick?.();
                  }}
                  onProductionClick={() => {
                    setMobileMenuOpen(false);
                    onProductionClick?.();
                  }}
                  onReportClick={() => {
                    setMobileMenuOpen(false);
                    onReportClick?.();
                  }}
                  onStaffManagementClick={() => {
                    setMobileMenuOpen(false);
                    onStaffManagementClick?.();
                  }}
                  onAuditLogClick={() => {
                    setMobileMenuOpen(false);
                    onAuditLogClick?.();
                  }}
                  onBackupClick={() => {
                    setMobileMenuOpen(false);
                    onBackupClick?.();
                  }}
                  onNotificationClick={() => {
                    setMobileMenuOpen(false);
                    onNotificationClick?.();
                  }}
                />
              </SheetContent>
            </Sheet>
          )}

          {/* 메뉴 */}
          <div className="flex lg:col-span-2 gap-3 md:gap-4 lg:gap-8 items-end">
            <button 
              onClick={() => toast.info('준비중입니다')}
              className="pb-0 transition-all text-base lg:text-lg text-gray-500 hover:border-b-2 hover:border-blue-600"
            >
              <span className="lg:hidden">S</span>
              <span className="hidden lg:inline">SCM</span>
            </button>
            <button 
              onClick={() => toast.info('준비중입니다')}
              className="pb-0 transition-all text-base lg:text-lg text-gray-500 hover:border-b-2 hover:border-blue-600"
            >
              <span className="lg:hidden">M</span>
              <span className="hidden lg:inline">MES</span>
            </button>
            <button 
              onClick={() => toast.info('준비중입니다')}
              className="pb-0 transition-all text-base lg:text-lg text-gray-500 hover:border-b-2 hover:border-blue-600"
            >
              <span className="lg:hidden">T</span>
              <span className="hidden lg:inline">TPM</span>
            </button>
            <button 
              onClick={() => toast.info('준비중입니다')}
              className="pb-0 transition-all text-base lg:text-lg text-gray-500 hover:border-b-2 hover:border-blue-600"
            >
              <span className="lg:hidden">B</span>
              <span className="hidden lg:inline">BOM</span>
            </button>
            
            {/* CMS 메뉴 (클릭 드롭다운) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="pb-0 transition-all text-base lg:text-lg text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-blue-600 focus:outline-none">
                  <Settings className="w-5 h-5 lg:hidden" />
                  <strong className="hidden lg:inline">CMS</strong>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]" align="start">
                <DropdownMenuItem onClick={() => toast.info('준비중입니다')}>
                  <Users className="mr-2 h-4 w-4" />
                  직원 관리
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toast.info('준비중입니다')}>
                  <History className="mr-2 h-4 w-4" />
                  감사 로그
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toast.info('준비중입니다')}>
                  <Database className="mr-2 h-4 w-4" />
                  백업 & 복원
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toast.info('준비중입니다')}>
                  <BellRing className="mr-2 h-4 w-4" />
                  알림 설정
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex lg:col-span-2 items-center justify-end gap-2 md:gap-3 lg:gap-4 flex-1">
            <div className="relative hidden xl:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
              <input
                type="text"
                placeholder=""
                className="w-64 xl:w-80 pl-8 lg:pl-10 pr-4 py-1 bg-gray-50 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            
            <div className="flex items-center gap-3 lg:gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="hover:opacity-70 transition-opacity focus:outline-none">
                    <Avatar className="w-8 h-8 cursor-pointer">
                      <AvatarImage src={avatarHeader} />
                      <AvatarFallback>{currentStaff?.name?.[0] || 'U'}</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span className="text-sm">{currentStaff?.name || '직원'}</span>
                      <span className="text-xs text-gray-500">{currentStaff?.employeeId || ''}</span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    내 정보
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600 focus:bg-red-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    로그아웃
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* 알림 종 아이콘 - 준비중 */}
              <button 
                onClick={() => toast.info('준비중입니다')}
                className="relative hover:opacity-70 transition-opacity"
              >
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* +새로 만들기 버튼 - 준비중 */}
              <Button 
                onClick={() => toast.info('준비중입니다')}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-9 w-9 lg:h-auto lg:w-auto p-0 lg:py-1 lg:px-4"
              >
                <Plus className="w-5 h-5 lg:w-4 lg:h-4 lg:mr-1" />
                <span className="hidden lg:inline">새로 만들기</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* SCM 등록 다이얼로그 */}
      <SCMCreateDialog 
        open={scmDialogOpen} 
        onOpenChange={setScmDialogOpen}
        defaultTab={scmDialogTab}
      />

      {/* TPM 등록 다이얼로그 */}
      <TPMCreateDialog 
        open={tpmDialogOpen} 
        onOpenChange={setTpmDialogOpen}
        defaultTab={tpmDialogTab}
      />
    </div>
  );
}
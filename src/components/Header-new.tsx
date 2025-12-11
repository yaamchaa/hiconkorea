import { useState, useEffect } from 'react';
import { Search, Bell, Plus, CheckCircle2, AlertCircle, Info, Clock, ShoppingCart, Package, Truck, Building2, Boxes, LogOut, User, Menu, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ScrollArea } from './ui/scroll-area';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { SCMCreateDialog } from './SCMCreateDialog';
import { Sidebar } from './Sidebar';
import avatarHeader from 'figma:asset/95bb4654de298cb28859bcb152046b9f145f4b6e.png';
import { getEmergencyAlerts, getUnacknowledgedAlerts, acknowledgeAlert, stopSirenSound, stopVibrate, type EmergencyAlert } from '../utils/emergencyAlert';

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
  showMobileMenu?: boolean;
  onLogoClick?: () => void;
  onHomeClick?: () => void;
  onCRMClick?: () => void;
  onDashboardClick?: () => void;
  onInventoryClick?: () => void;
  onShippingClick?: () => void;
  onProductionClick?: () => void;
  currentPage?: string;
}

export function Header({ 
  onTPMClick, 
  showMobileMenu = false,
  onLogoClick,
  onHomeClick,
  onCRMClick,
  onDashboardClick,
  onInventoryClick,
  onShippingClick,
  onProductionClick,
  currentPage
}: HeaderProps = {}) {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [scmDialogOpen, setScmDialogOpen] = useState(false);
  const [scmDialogTab, setScmDialogTab] = useState<'order' | 'inout' | 'delivery' | 'supplier' | 'inventory'>('order');
  const [currentStaff, setCurrentStaff] = useState<{ name: string; employeeId: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emergencyAlerts, setEmergencyAlerts] = useState<EmergencyAlert[]>([]);
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
      // currentStaff가 있으면 해당 직원이 확인하지 않은 알림만
      // 없으면 모든 긴급 알림 표시 (로그인하지 않은 경우에도 알림 표시)
      if (currentStaff) {
        const unacknowledged = getUnacknowledgedAlerts(currentStaff.employeeId);
        setEmergencyAlerts(unacknowledged);
        console.log('✅ 긴급 알림 로드 (직원 ID:', currentStaff.employeeId, '):', unacknowledged.length, '개');
      } else {
        // 로그인하지 않은 경우 모든 긴급 알림 표시
        const allAlerts = getEmergencyAlerts();
        setEmergencyAlerts(allAlerts);
        console.log('✅ 긴급 알림 로드 (전체):', allAlerts.length, '개');
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

    window.addEventListener('emergency-alert-added', handleAlertAdded);
    window.addEventListener('emergency-alert-acknowledged', handleAlertAcknowledged);

    return () => {
      window.removeEventListener('emergency-alert-added', handleAlertAdded);
      window.removeEventListener('emergency-alert-acknowledged', handleAlertAcknowledged);
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
    if (currentStaff) {
      const success = acknowledgeAlert(alertId, currentStaff.employeeId);
      if (success) {
        console.log('✓ 긴급 알림 확인 완료:', alertId);
        // 남은 긴급 알림이 없으면 사이렌 중지
        const remaining = getUnacknowledgedAlerts(currentStaff.employeeId);
        if (remaining.length === 0) {
          console.log('🔇 사이렌 중지');
          stopSirenSound();
          stopVibrate();
        }
      }
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

  // 긴급 알림과 일반 알림을 합쳐서 표시 (긴급 알림이 최상단)
  const allNotifications = [
    ...emergencyAlerts.map(alert => ({
      id: alert.id,
      type: 'emergency' as const,
      title: alert.title,
      message: alert.message,
      time: getRelativeTime(alert.timestamp),
      isRead: false,
      isEmergency: true,
      alertData: alert
    })),
    ...notifications
  ];

  const totalUnreadCount = emergencyAlerts.length + unreadCount;
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
                />
              </SheetContent>
            </Sheet>
          )}

          {/* 빈 공간 - 좌측 여백 */}
          <div className="hidden lg:flex lg:col-span-2"></div>
          
          <div className="flex lg:col-span-2 items-center justify-end gap-2 lg:gap-4 flex-1">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
              <input
                type="text"
                placeholder=""
                className="w-40 lg:w-80 pl-8 lg:pl-10 pr-4 py-1 bg-gray-50 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
              
              <Popover open={notificationOpen} onOpenChange={setNotificationOpen}>
                <PopoverTrigger asChild>
                  <button className="relative hover:opacity-70 transition-opacity">
                    <Bell className={`w-5 h-5 ${hasEmergencyAlert ? 'text-red-600 animate-pulse' : 'text-gray-600'}`} />
                    {totalUnreadCount > 0 && (
                      <span className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${hasEmergencyAlert ? 'bg-red-600 animate-pulse' : 'bg-blue-600'}`}></span>
                    )}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-96 p-0" align="end">
                  <div className="border-b px-4 py-3 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-900">알림</h3>
                      {totalUnreadCount > 0 && (
                        <Badge variant="secondary" className={hasEmergencyAlert ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}>
                          {totalUnreadCount}개 새 알림
                        </Badge>
                      )}
                    </div>
                    {hasEmergencyAlert && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          console.log('🔇 수동 알람 중지');
                          stopSirenSound();
                          stopVibrate();
                        }}
                        className="w-full bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:text-red-800"
                      >
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        알람 중지
                      </Button>
                    )}
                  </div>
                  <ScrollArea className="h-96">
                    <div className="divide-y">
                      {allNotifications.map((notification: any) => (
                        <div
                          key={notification.id}
                          className={`p-4 hover:bg-gray-50 transition-colors ${
                            notification.type === 'emergency' ? 'bg-red-50 border-l-4 border-red-600' : 
                            !notification.isRead ? 'bg-blue-50/50' : ''
                          }`}
                        >
                          <div className="flex gap-3">
                            <div className="mt-1">
                              {getNotificationIcon(notification.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <p className={`text-sm ${
                                  notification.type === 'emergency' ? 'font-bold text-red-900' :
                                  !notification.isRead ? 'font-medium text-gray-900' : 'text-gray-700'
                                }`}>
                                  {notification.title}
                                </p>
                                {!notification.isRead && notification.type !== 'emergency' && (
                                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                                )}
                              </div>
                              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                {notification.message}
                              </p>
                              {notification.isEmergency && notification.alertData && (
                                <div className="mt-2 space-y-1 text-xs text-gray-600">
                                  {notification.alertData.lineName && (
                                    <p>설비: {notification.alertData.lineName}</p>
                                  )}
                                  {notification.alertData.equipment && (
                                    <p>장비: {notification.alertData.equipment}</p>
                                  )}
                                </div>
                              )}
                              <div className="flex items-center justify-between mt-2">
                                <p className="text-xs text-gray-400">
                                  {notification.time}
                                </p>
                                {notification.isEmergency && (
                                  <Button
                                    size="sm"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleAcknowledgeEmergency(notification.id);
                                    }}
                                    className="h-6 px-3 text-xs bg-red-600 hover:bg-red-700"
                                  >
                                    확인
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="border-t p-3">
                    <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700">
                      모든 알림 보기
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-auto py-1 px-4">
                    <Plus className="w-4 h-4 mr-1" />
                    새로 만들기
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>SCM 관리</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleOpenSCMDialog('order')}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    발주/수주 현황
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleOpenSCMDialog('inout')}>
                    <Package className="mr-2 h-4 w-4" />
                    입출고 내역
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleOpenSCMDialog('delivery')}>
                    <Truck className="mr-2 h-4 w-4" />
                    배송 추적
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleOpenSCMDialog('supplier')}>
                    <Building2 className="mr-2 h-4 w-4" />
                    공급업체 관리
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleOpenSCMDialog('inventory')}>
                    <Boxes className="mr-2 h-4 w-4" />
                    재고 현황
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
    </div>
  );
}

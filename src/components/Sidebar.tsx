import { Home, LayoutDashboard, Package, Truck, TrendingUp, FileCheck, Calendar, RefreshCw, AlertCircle, Settings, BarChart3, Users, FileText, Database, Bell, Lock, Clock } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import logoImage from 'figma:asset/32a38d87c238cd48be61bfaa23f973d5d35eaeef.png';
import { useWasteData } from '../hooks/useWasteData';
import { toast } from 'sonner@2.0.3';
import { useState, useEffect } from 'react';
import { SettingsDialog } from './SettingsDialog';

interface SidebarProps {
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
  onAttendanceStatsClick?: () => void;
  currentPage?: string;
}

export function Sidebar({ onLogoClick, onHomeClick, onCRMClick, onDashboardClick, onInventoryClick, onShippingClick, onProductionClick, onReportClick, onStaffManagementClick, onAuditLogClick, onBackupClick, onNotificationClick, onAttendanceStatsClick, currentPage = '대시보드' }: SidebarProps) {
  const { syncFromAllbaro, isConnected } = useWasteData();
  const [syncing, setSyncing] = useState(false);
  const [showSetupDialog, setShowSetupDialog] = useState(false);
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);
  const [userPermissions, setUserPermissions] = useState<string[]>([]);

  // 현재 로그인한 사용자 권한 불러오기
  useEffect(() => {
    const loadUserPermissions = () => {
      const currentStaff = JSON.parse(localStorage.getItem('currentStaff') || 'null');
      if (currentStaff && currentStaff.permissions) {
        setUserPermissions(currentStaff.permissions);
      } else {
        // 권한 정보가 없으면 모든 권한 부여 (기존 사용자 호환성)
        setUserPermissions(['dashboard', 'production', 'inventory', 'shipping', 'scm', 'tpm', 'trends', 'reports', 'crm', 'backup', 'audit', 'notification', 'staff', 'settings']);
      }
    };

    loadUserPermissions();
    
    // 1초마다 체크하여 로그인 상태 반영
    const interval = setInterval(loadUserPermissions, 1000);
    return () => clearInterval(interval);
  }, []);

  // 권한 체크 함수
  const hasPermission = (permission: string) => {
    return userPermissions.includes(permission);
  };

  const handleSync = async () => {
    if (!isConnected) {
      setShowSetupDialog(true);
      return;
    }
    
    setSyncing(true);
    const result = await syncFromAllbaro();
    setSyncing(false);
    
    if (result.success) {
      toast.success('올바로 시스템 동기화 완료', {
        description: `${result.count}건의 데이터를 가져왔습니다.`,
      });
    } else {
      toast.error('데이터 동기화 실패', {
        description: result.error,
      });
    }
  };

  return (
    <>
      <div className="w-80 bg-white h-screen flex flex-col p-6 border-r border-gray-200 overflow-y-auto">
        <div className="mb-8 px-3 mt-[8px]">
          <button onClick={onLogoClick} className="ml-[10px] cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logoImage} alt="HICON KOREA" className="h-auto max-h-5" />
          </button>
        </div>
        
        <nav className="flex-1 mt-10">
          <div className="space-y-1.5">
            <SidebarItem icon={LayoutDashboard} label="대시보드" active={currentPage === '대시보드'} onClick={() => {
              toast.info('준비중입니다');
            }} />
            <SidebarItem icon={FileCheck} label="계약 관리" badge="M. 1575+" active={currentPage === '계약 관리'} onClick={() => {
              toast.info('준비중입니다');
            }} />
            <SidebarItem icon={Package} label="재고 관리" active={currentPage === '재고 관리'} onClick={() => {
              toast.info('준비중입니다');
            }} />
            <SidebarItem icon={TrendingUp} label="생산 관리" active={currentPage === '생산 관리'} onClick={() => {
              toast.info('준비중입니다');
            }} />
            <SidebarItem icon={Truck} label="출고 관리" active={currentPage === '출고 관리'} onClick={() => {
              toast.info('준비중입니다');
            }} />
            <SidebarItem icon={BarChart3} label="통계 리포트" active={currentPage === '통계 리포트'} onClick={() => {
              toast.info('준비중입니다');
            }} />
            <SidebarItem icon={Clock} label="출근 통계" active={currentPage === '출근 통계'} onClick={() => {
              toast.info('준비중입니다');
            }} />
          </div>
          
          <div className="mt-[40px]">
            <SidebarItem 
              icon={Calendar} 
              label="올바로 시스템" 
              highlighted 
              onClick={() => toast.info('준비중입니다')}
            />
          </div>
        </nav>
        
        <div className="mt-auto">
          <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition" onClick={() => toast.info('준비중입니다')}>
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Dialog open={showSetupDialog} onOpenChange={setShowSetupDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              Supabase 연결 필요
            </DialogTitle>
            <DialogDescription>
              올바로 시스템과 연동하려면 먼저 Supabase를 설정해야 합니다.
            </DialogDescription>
          </DialogHeader>
          
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs">1</span>
              <div>
                <div className="text-sm">Supabase 프로젝트 생성</div>
                <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                  supabase.com →
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs">2</span>
              <div>
                <div className="text-sm">환경변수 설정</div>
                <code className="text-xs bg-gray-800 text-green-400 px-2 py-1 rounded block mt-1">
                  VITE_SUPABASE_URL
                </code>
                <code className="text-xs bg-gray-800 text-green-400 px-2 py-1 rounded block mt-1">
                  VITE_SUPABASE_ANON_KEY
                </code>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs">3</span>
              <div className="text-sm">SQL 마이그레이션 실행</div>
            </div>
          </div>
          
          <div className="text-xs text-gray-500">
            자세한 설정 방법은 <code className="bg-gray-100 px-1 rounded">README-ALLBARO.md</code> 파일을 참조하세요.
          </div>
          
          <div className="flex justify-end gap-2 mt-2">
            <Button variant="outline" onClick={() => setShowSetupDialog(false)}>
              닫기
            </Button>
            <Button onClick={() => {
              window.open('https://supabase.com', '_blank');
              setShowSetupDialog(false);
            }}>
              Supabase 시작하기
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <SettingsDialog open={showSettingsDialog} onOpenChange={setShowSettingsDialog} />
    </>
  );
}

interface SidebarItemProps {
  icon: any;
  label: string;
  active?: boolean;
  badge?: string;
  highlighted?: boolean;
  href?: string;
  onClick?: () => void;
  spinning?: boolean;
  isSubItem?: boolean;
}

function SidebarItem({ icon: Icon, label, active, badge, highlighted, href, onClick, spinning, isSubItem }: SidebarItemProps) {
  const className = `w-full flex items-center gap-3 px-3 py-2 rounded-lg transition cursor-pointer ${
    highlighted
      ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
      : active 
      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
  }`;

  const content = (
    <>
      <Icon className={`w-5 h-5 ${spinning ? 'animate-spin' : ''}`} />
      <span>{label}</span>
      {badge && (
        <Badge className="ml-auto bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md transition cursor-pointer rounded-full">{badge}</Badge>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
}
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { FeaturedCard1, FeaturedCard2, QuickNoteCard, AnalyticsCards } from './components/DashboardCards';
import { WasteOverviewCard, WasteTypesCard, RecyclingTrendCard, RecentWasteListCard } from './components/WasteDataCards_New';
import { Toaster } from './components/ui/sonner';
import { List, LayoutGrid } from 'lucide-react';
import HomeIntro from './components/HomeIntro';
import StaffAuth from './components/StaffAuth';
import MainPage from './components/MainPage';
import { StaffSignupDialog } from './components/StaffSignupDialog';
import { TPMPage } from './components/TPMPage';
import { TrendsPage } from './components/TrendsPage';
import { VisionPage } from './components/VisionPage';
import { MissionPage } from './components/MissionPage';
import { CRMPage } from './components/CRMPage';
import { InventoryPage } from './components/InventoryPage';
import { ShippingPage } from './components/ShippingPage';
import { ProductionPage } from './components/ProductionPage';
import { ThirdPartyPurchasePage } from './components/ThirdPartyPurchasePage';
import { getEmergencyAlerts, getUnacknowledgedAlerts, stopSirenSound, stopVibrate } from './utils/emergencyAlert';
import { DashboardSkeleton } from './components/DashboardSkeleton';
import { InventorySkeleton } from './components/InventorySkeleton';
import { ShippingSkeleton } from './components/ShippingSkeleton';
import { ProductionSkeleton } from './components/ProductionSkeleton';
import { CRMSkeleton } from './components/CRMSkeleton';
import { ReportSkeleton } from './components/ReportSkeleton';
import { ReportPage } from './components/ReportPage';
import { StaffManagementPage } from './components/StaffManagementPage';
import { AuditLogPage } from './components/AuditLogPage';
import { BackupPage } from './components/BackupPage';
import { NotificationSettingsPage } from './components/NotificationSettingsPage';
import { ManagementSkeleton } from './components/ManagementSkeleton';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { AttendanceStatsPage } from './components/AttendanceStatsPage';
import { DatabaseInitializer } from './components/DatabaseInitializer';

export default function App() {
  // 새로 고침 시 항상 랜딩 페이지(HomeIntro)로 시작
  const [showWasteCards, setShowWasteCards] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showStaffAuth, setShowStaffAuth] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);
  const [showSignupDialog, setShowSignupDialog] = useState(false);
  const [showTPM, setShowTPM] = useState(false);
  const [showTrends, setShowTrends] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [showMission, setShowMission] = useState(false);
  const [showPurchase, setShowPurchase] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showServicesPage, setShowServicesPage] = useState(false);
  
  // 직원 전용 페이지 통합 관리
  const [showStaffLayout, setShowStaffLayout] = useState(false);
  const [currentStaffPage, setCurrentStaffPage] = useState<'dashboard' | 'inventory' | 'shipping' | 'production' | 'crm' | 'report' | 'staff-management' | 'audit-log' | 'backup' | 'notification' | 'tpm' | 'attendance-stats'>('dashboard');
  
  // 로딩 상태 관리
  const [isPageLoading, setIsPageLoading] = useState(false);
  
  // MES 다이얼로그 상태 관리 (Header에서 제어)
  const [showWorkOrder, setShowWorkOrder] = useState(false);
  const [showWorkProgress, setShowWorkProgress] = useState(false);
  const [showQualityInspection, setShowQualityInspection] = useState(false);
  const [showEquipmentStatus, setShowEquipmentStatus] = useState(false);
  const [showProductionPerformance, setShowProductionPerformance] = useState(false);
  
  const mainPageRef = useRef<HTMLDivElement>(null);
  const homeIntroRef = useRef<HTMLDivElement>(null);

  // 페이지 전환 시 로딩 효과
  useEffect(() => {
    if (showStaffLayout) {
      setIsPageLoading(true);
      const timer = setTimeout(() => {
        setIsPageLoading(false);
      }, 600); // 0.6초 로딩
      
      return () => clearTimeout(timer);
    }
  }, [currentStaffPage, showStaffLayout]);

  // TPM 페이지로 진입할 때 개발 모드 활성화
  useEffect(() => {
    if (showTPM) {
      localStorage.setItem('dev-tpm-mode', 'true');
    }
  }, [showTPM]);

  // 백그라운드 알림 시스템 초기화
  useEffect(() => {
    const initBackgroundNotifications = async () => {
      const { initializeBackgroundNotifications, startTPMAlertPolling } = await import('./utils/backgroundNotifications');
      
      try {
        await initializeBackgroundNotifications();
        console.log('✅ 백그라운드 알림 시스템 활성화');
        
        // Fallback: 주기적 폴링도 시작 (5분마다)
        startTPMAlertPolling(5 * 60 * 1000);
      } catch (error) {
        console.error('❌ 백그라운드 알림 초기화 실패:', error);
      }
    };

    initBackgroundNotifications();
  }, []);

  // 페이지 로드 시 긴급 알림 상태 확인 및 사이렌 자동 중지
  useEffect(() => {
    console.log('🔍 페이지 로드 - 긴급 알림 상태 확인 중...');
    
    const alerts = getEmergencyAlerts();
    if (alerts.length > 0) {
      console.log(`📋 긴급 알림 ${alerts.length}개 발견`);
      
      // 사용자 ID 확인
      const staffData = localStorage.getItem("currentStaff");
      let userId = 'anonymous';
      if (staffData) {
        try {
          const staff = JSON.parse(staffData);
          userId = staff.employeeId || 'anonymous';
        } catch (e) {
          console.error('❌ 직원 정보 파싱 실패:', e);
        }
      }
      
      // 미확인 알림 확인
      const unacknowledged = getUnacknowledgedAlerts(userId);
      console.log(`📊 미확인 알림: ${unacknowledged.length}개`);
      
      // 모든 알림이 확인된 경우 사이렌 중지
      if (unacknowledged.length === 0) {
        console.log('🔇 모든 알림이 이미 확인됨 - 사이렌 자동 중지');
        try {
          stopSirenSound();
          stopVibrate();
          console.log('✅ 사이렌 및 진동 자동 중지 완료');
        } catch (err) {
          console.error('❌ 사이렌 자동 중지 실패:', err);
        }
      }
    } else {
      console.log('✅ 긴급 알림 없음');
    }
  }, []);

  // 페이드 전환 애니메이션 설정
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: 'easeInOut' }
  };

  // MainPage 푸터로 스크롤하는 함수
  const scrollToFooter = () => {
    // MainPage의 div를 직접 스크롤
    if (mainPageRef.current) {
      mainPageRef.current.scrollTo({
        top: 2694,
        behavior: 'smooth'
      });
    }
  };

  // MainPage 상단으로 스크롤하는 함수
  const scrollToTop = () => {
    if (mainPageRef.current) {
      mainPageRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // HomeIntro 푸터로 스크롤하는 함수
  const scrollToHomeIntroFooter = () => {
    if (homeIntroRef.current) {
      // Frame1의 높이가 calc(100vh - 30px)이므로 그 위치로 스크롤
      const viewportHeight = window.innerHeight;
      homeIntroRef.current.scrollTo({
        top: viewportHeight - 30,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* 데이터베이스 초기화 체크 - 모든 페이지 위에 표시 */}
      <DatabaseInitializer />
      
      <AnimatePresence mode="wait">
        {/* 골재 구매 페이지 화면 */}
        {showPurchase && (
          <motion.div
            key="purchase-page"
            {...pageTransition}
            className="bg-white relative w-screen h-screen overflow-y-auto"
          >
            <ThirdPartyPurchasePage 
              onBack={() => {
                setShowPurchase(false);
                setShowMainPage(true);
              }}
              onStaffAuth={() => {
                setShowPurchase(false);
                setShowStaffAuth(true);
              }}
              onVisionClick={() => {
                setShowPurchase(false);
                setShowVision(true);
              }}
              onMissionClick={() => {
                setShowPurchase(false);
                setShowMission(true);
              }}
              onTrendsClick={() => {
                setShowPurchase(false);
                setShowTrends(true);
              }}
            />
          </motion.div>
        )}

        {/* Mission 페이지 화면 */}
        {!showPurchase && showMission && (
          <motion.div
            key="mission-page"
            {...pageTransition}
            className="bg-white relative w-screen h-screen overflow-y-auto"
          >
            <MissionPage 
              onBack={() => {
                setShowMission(false);
                setShowMainPage(true);
              }}
              onStaffAuth={() => {
                setShowMission(false);
                setShowStaffAuth(true);
              }}
              onAboutClick={() => {
                setShowAboutPage(true);
              }}
              onServicesClick={() => {
                setShowServicesPage(true);
              }}
              onVisionClick={() => {
                setShowMission(false);
                setShowVision(true);
              }}
              onMissionClick={() => {
                setShowMission(false);
                setShowMission(true);
              }}
              onTrendsClick={() => {
                setShowMission(false);
                setShowTrends(true);
              }}
              onPurchaseClick={() => {
                setShowMission(false);
                setShowPurchase(true);
              }}
            />
          </motion.div>
        )}

        {/* Vision 페이지 화면 */}
        {!showPurchase && !showMission && showVision && (
          <motion.div
            key="vision-page"
            {...pageTransition}
            className="bg-white relative w-screen h-screen overflow-y-auto"
          >
            <VisionPage 
              onBack={() => {
                setShowVision(false);
                setShowMainPage(true);
              }}
              onStaffAuth={() => {
                setShowVision(false);
                setShowStaffAuth(true);
              }}
              onAboutClick={() => {
                setShowAboutPage(true);
              }}
              onServicesClick={() => {
                setShowServicesPage(true);
              }}
              onVisionClick={() => {
                setShowVision(false);
                setShowVision(true);
              }}
              onMissionClick={() => {
                setShowVision(false);
                setShowMission(true);
              }}
              onTrendsClick={() => {
                setShowVision(false);
                setShowTrends(true);
              }}
              onPurchaseClick={() => {
                setShowVision(false);
                setShowPurchase(true);
              }}
            />
          </motion.div>
        )}

        {/* Trends 페이지 화면 */}
        {!showPurchase && !showMission && !showVision && showTrends && (
          <motion.div
            key="trends-page"
            {...pageTransition}
            className="bg-white relative w-screen h-screen overflow-y-auto"
          >
            <TrendsPage 
              onBack={() => {
                setShowTrends(false);
                setShowMainPage(true);
              }}
              onStaffAuth={() => {
                setShowTrends(false);
                setShowStaffAuth(true);
              }}
              onAboutClick={() => {
                setShowAboutPage(true);
              }}
              onServicesClick={() => {
                setShowServicesPage(true);
              }}
              onVisionClick={() => {
                setShowTrends(false);
                setShowVision(true);
              }}
              onMissionClick={() => {
                setShowTrends(false);
                setShowMission(true);
              }}
              onTrendsClick={() => {
                // Trends 페이지에서 Trends를 다시 클릭하면 페이지를 새로고침
                setShowTrends(false);
                setTimeout(() => setShowTrends(true), 10);
              }}
              onPurchaseClick={() => {
                setShowTrends(false);
                setShowPurchase(true);
              }}
            />
          </motion.div>
        )}

        {/* TPM 페이지 화면 - 최우선 */}
        {!showPurchase && !showMission && !showVision && !showTrends && showTPM && (
          <motion.div
            key="tpm-page"
            {...pageTransition}
            className="bg-white relative w-screen h-screen"
          >
            <TPMPage 
              onBack={() => {
                setShowTPM(false);
              }}
            />
          </motion.div>
        )}

        {/* Main 홈 페이지 화면 */}
        {!showPurchase && !showMission && !showVision && !showTrends && !showTPM && !showStaffLayout && !showStaffAuth && showMainPage && (
          <motion.div
            key="main-page"
            {...pageTransition}
            ref={mainPageRef}
            className="bg-white relative w-screen h-screen overflow-x-hidden overflow-y-auto"
          >
            <MainPage 
              onStaffAuth={() => {
                setShowMainPage(false);
                setShowStaffAuth(true);
              }}
              onLogoClick={() => {
                setShowMainPage(false);
                setShowHome(true);
              }}
              onScrollToFooter={scrollToFooter}
              onScrollToTop={scrollToTop}
              onTrendsClick={() => {
                setShowMainPage(false);
                setShowTrends(true);
              }}
              onVisionClick={() => {
                setShowMainPage(false);
                setShowVision(true);
              }}
              onMissionClick={() => {
                setShowMainPage(false);
                setShowMission(true);
              }}
              onPurchaseClick={() => {
                setShowMainPage(false);
                setShowPurchase(true);
              }}
            />
          </motion.div>
        )}

        {/* 직원 인증 화면 */}
        {!showPurchase && !showMission && !showVision && !showTrends && !showTPM && !showMainPage && showStaffAuth && (
          <motion.div
            key="staff-auth"
            {...pageTransition}
          >
            <StaffAuth 
              onBack={() => {
                setShowStaffAuth(false);
                setShowHome(true);
              }}
              onAuthComplete={() => {
                setShowStaffAuth(false);
                setShowStaffLayout(true);
                setCurrentStaffPage('dashboard');
              }}
            />
          </motion.div>
        )}

        {/* 홈 인트로 화면 */}
        {!showPurchase && !showMission && !showVision && !showTrends && !showTPM && !showMainPage && !showStaffAuth && showHome && (
          <motion.div
            key="home-intro"
            {...pageTransition}
            className="bg-white relative w-screen h-screen"
          >
            <HomeIntro 
              ref={homeIntroRef}
              onEnterDashboard={() => {
                setShowHome(false);
                setShowStaffLayout(true);
                setCurrentStaffPage('dashboard');
              }}
              onStaffAuth={() => {
                setShowHome(false);
                setShowStaffAuth(true);
              }}
              onLogoClick={() => {
                setShowHome(false);
                setShowMainPage(true);
              }}
              onScrollToFooter={scrollToHomeIntroFooter}
            />
          </motion.div>
        )}

        {/* 직원 전용 통합 레이아웃 - Sidebar와 Header 고정, 콘텐츠만 전환 */}
        {!showPurchase && !showMission && !showVision && !showTrends && !showTPM && !showMainPage && !showStaffAuth && !showHome && showStaffLayout && (
          <div className="flex h-screen bg-gray-50">
            {/* 데스크톱 사이드바 - 항상 고정 */}
            <div className="hidden lg:block">
              <Sidebar 
                currentPage={
                  currentStaffPage === 'dashboard' ? '대시보드' :
                  currentStaffPage === 'inventory' ? '재고 관리' :
                  currentStaffPage === 'shipping' ? '출고 관리' :
                  currentStaffPage === 'production' ? '생산 관리' :
                  currentStaffPage === 'report' ? '통계 리포트' :
                  currentStaffPage === 'attendance-stats' ? '출근 통계' :
                  currentStaffPage === 'staff-management' ? '직원 관리' :
                  currentStaffPage === 'audit-log' ? '감사 로그' :
                  currentStaffPage === 'backup' ? '백업 & 복원' :
                  currentStaffPage === 'notification' ? '알림 설정' :
                  currentStaffPage === 'tpm' ? 'TPM' :
                  '계약 관리'
                }
                onLogoClick={() => {
                  setShowStaffLayout(false);
                  setShowMainPage(true);
                }} 
                onHomeClick={() => {
                  setShowStaffLayout(false);
                  setShowMainPage(true);
                }}
                onCRMClick={() => setCurrentStaffPage('crm')}
                onDashboardClick={() => setCurrentStaffPage('dashboard')}
                onInventoryClick={() => setCurrentStaffPage('inventory')}
                onShippingClick={() => setCurrentStaffPage('shipping')}
                onProductionClick={() => setCurrentStaffPage('production')}
                onReportClick={() => setCurrentStaffPage('report')}
                onAttendanceStatsClick={() => setCurrentStaffPage('attendance-stats')}
                onStaffManagementClick={() => setCurrentStaffPage('staff-management')}
                onAuditLogClick={() => setCurrentStaffPage('audit-log')}
                onBackupClick={() => setCurrentStaffPage('backup')}
                onNotificationClick={() => setCurrentStaffPage('notification')}
              />
            </div>
            <Toaster position="top-right" />
            
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* 헤더 - 항상 고정 */}
              <Header 
                onTPMClick={() => setCurrentStaffPage('tpm')}
                showMobileMenu={true}
                onLogoClick={() => {
                  setShowStaffLayout(false);
                  setShowHome(true);
                }}
                onHomeClick={() => {
                  setShowStaffLayout(false);
                  setShowMainPage(true);
                }}
                onCRMClick={() => setCurrentStaffPage('crm')}
                onDashboardClick={() => setCurrentStaffPage('dashboard')}
                onInventoryClick={() => setCurrentStaffPage('inventory')}
                onShippingClick={() => setCurrentStaffPage('shipping')}
                onProductionClick={() => setCurrentStaffPage('production')}
                onReportClick={() => setCurrentStaffPage('report')}
                onStaffManagementClick={() => setCurrentStaffPage('staff-management')}
                onAuditLogClick={() => setCurrentStaffPage('audit-log')}
                onBackupClick={() => setCurrentStaffPage('backup')}
                onNotificationClick={() => setCurrentStaffPage('notification')}
                onMESWorkOrderClick={() => {
                  setCurrentStaffPage('production');
                  setShowWorkOrder(true);
                }}
                onMESWorkProgressClick={() => {
                  setCurrentStaffPage('production');
                  setShowWorkProgress(true);
                }}
                onMESQualityInspectionClick={() => {
                  setCurrentStaffPage('production');
                  setShowQualityInspection(true);
                }}
                onMESEquipmentStatusClick={() => {
                  setCurrentStaffPage('production');
                  setShowEquipmentStatus(true);
                }}
                onMESProductionPerformanceClick={() => {
                  setCurrentStaffPage('production');
                  setShowProductionPerformance(true);
                }}
                currentPage={
                  currentStaffPage === 'dashboard' ? '대시보드' :
                  currentStaffPage === 'inventory' ? '재고 관리' :
                  currentStaffPage === 'shipping' ? '출고 관리' :
                  currentStaffPage === 'production' ? '생산 관리' :
                  currentStaffPage === 'report' ? '통계 리포트' :
                  currentStaffPage === 'staff-management' ? '직원 관리' :
                  currentStaffPage === 'audit-log' ? '감사 로그' :
                  currentStaffPage === 'backup' ? '백업 & 복원' :
                  currentStaffPage === 'notification' ? '알림 설정' :
                  currentStaffPage === 'tpm' ? 'TPM' :
                  currentStaffPage === 'attendance-stats' ? '출근 통계' :
                  currentStaffPage === 'bom' ? 'BOM' :
                  '계약 관리'
                }
              />
              
              {/* 콘텐츠 영역만 애니메이션 전환 */}
              <AnimatePresence mode="wait">
                {isPageLoading ? (
                  <motion.div
                    key="loading-skeleton"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex-1 overflow-auto"
                  >
                    <DashboardSkeleton />
                  </motion.div>
                ) : (
                  <motion.main
                    key="coming-soon-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="flex-1 overflow-auto flex items-center justify-center bg-gray-50"
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-4">🚧</div>
                      <h2 className="text-2xl text-gray-700 mb-2">준비중입니다</h2>
                      <p className="text-gray-500">현재 페이지를 준비하고 있습니다.</p>
                    </div>
                  </motion.main>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

      </AnimatePresence>

      {/* 회사소개 페이지 - 독립 레이어 */}
      <AnimatePresence mode="wait">
        {showAboutPage && (
          <motion.div
            key="about-page"
            {...pageTransition}
            className="fixed inset-0 z-[100]"
          >
            <AboutPage onClose={() => setShowAboutPage(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 서비스 페이지 - 독립 레이어 */}
      <AnimatePresence mode="wait">
        {showServicesPage && (
          <motion.div
            key="services-page"
            {...pageTransition}
            className="fixed inset-0 z-[100]"
          >
            <ServicesPage onClose={() => setShowServicesPage(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
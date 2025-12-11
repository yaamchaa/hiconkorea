import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import imgImage6 from "figma:asset/6a398b2390720386e6fd6048e501f78ed8e80a77.png";
import imgImage7 from "figma:asset/dc80206819425424b07394d02d5f4daf1bdf9aa7.png";
import svgPaths from "../imports/svg-abnzna0rid";

interface PageHeaderProps {
  onLogoClick?: () => void;
  onStaffAuth?: () => void;
  onAboutClick?: () => void;
  onServicesClick?: () => void;
  onVisionClick?: () => void;
  onMissionClick?: () => void;
  onTrendsClick?: () => void;
  onPurchaseClick?: () => void;
  currentPage?: 'vision' | 'trends' | 'tpm' | 'main' | 'purchase';
}

// 로고 컴포넌트
function Ci({ onClick, isScrolled }: { onClick?: () => void; isScrolled: boolean }) {
  return (
    <button
      onClick={onClick}
      className="hidden md:block fixed h-[16px] sm:h-[18px] md:h-[22px] lg:h-[25px] xl:h-[27px] 
                 left-[170px] md:left-[170px] lg:left-[170px] xl:left-[170px] 
                 top-[42px] 
                 w-[140px] md:w-[200px] lg:w-[240px] xl:w-[283px] 
                 cursor-pointer hover:opacity-80 transition-all duration-300 bg-transparent border-0 p-0 z-50"
      data-name="하이콘 CI로고"
      type="button"
    >
      <div className="absolute inset-0 pointer-events-none transition-all duration-300" data-name="image 6">
        <img 
          alt="HICON KOREA" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-all duration-300" 
          src={imgImage6}
          style={{
            filter: isScrolled ? 'invert(1)' : 'none',
            opacity: isScrolled ? 1 : 0.5
          }}
        />
      </div>
    </button>
  );
}

// 모바일 로고 (센터 배치)
function MobileCi({ onClick, isScrolled }: { onClick?: () => void; isScrolled: boolean }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden fixed h-[16px] sm:h-[18px] left-[50%] -translate-x-1/2 top-[42px] 
                 w-[65vw] max-w-[180px] sm:max-w-[200px] 
                 cursor-pointer hover:opacity-80 transition-all duration-300 bg-transparent border-0 p-0 z-50"
      data-name="하이콘 CI로고 모바일"
      type="button"
    >
      <div className="absolute inset-0 pointer-events-none transition-all duration-300" data-name="image 6">
        <img 
          alt="HICON KOREA" 
          className="absolute inset-0 w-full h-full object-contain pointer-events-none transition-all duration-300" 
          src={imgImage6}
          style={{
            filter: isScrolled ? 'invert(1)' : 'none',
            opacity: isScrolled ? 1 : 0.5
          }}
        />
      </div>
    </button>
  );
}

// 메뉴 항목 컴포넌트들
function Scm({ isScrolled, onClick }: { isScrolled: boolean; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="box-border content-stretch flex gap-[10px] h-[22px] items-center justify-center rounded-[100px] relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-0 p-0" 
      data-name="SCM"
    >
      <div className={`flex flex-col font-['Microsoft_Sans_Serif:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-nowrap transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
        <p className="leading-[normal] whitespace-pre">우리는</p>
      </div>
    </button>
  );
}

function Mes({ isScrolled, onClick }: { isScrolled: boolean; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="box-border content-stretch flex gap-[10px] h-[22px] items-center justify-center rounded-[100px] relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-0 p-0" 
      data-name="MES"
    >
      <div className={`flex flex-col font-['Microsoft_Sans_Serif:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-nowrap transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
        <p className="leading-[normal] whitespace-pre">함께하는</p>
      </div>
    </button>
  );
}

function Component8({ isScrolled, onClick }: { isScrolled: boolean; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="box-border content-stretch flex gap-[10px] h-[22px] items-center justify-center rounded-[100px] relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-0 p-0" 
      data-name="산업"
    >
      <div className={`flex flex-col font-['Microsoft_Sans_Serif:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-nowrap transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
        <p className="leading-[normal] whitespace-pre">산업</p>
      </div>
    </button>
  );
}

function Component9({ isScrolled, onClick }: { isScrolled: boolean; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="box-border content-stretch flex gap-[10px] h-[22px] items-center justify-center rounded-[100px] relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-0 p-0" 
      data-name="미션"
    >
      <div className={`flex flex-col font-['Microsoft_Sans_Serif:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-nowrap transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
        <p className="leading-[normal] whitespace-pre">Mission</p>
      </div>
    </button>
  );
}

function Component10({ isScrolled, onClick }: { isScrolled: boolean; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="box-border content-stretch flex gap-[10px] h-[22px] items-center justify-center rounded-[100px] relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-0 p-0" 
      data-name="미션"
    >
      <div className={`flex flex-col font-['Microsoft_Sans_Serif:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-nowrap transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
        <p className="leading-[normal] whitespace-pre">Vision</p>
      </div>
    </button>
  );
}

function Bom({ isScrolled, onClick }: { isScrolled: boolean; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="content-stretch flex flex-col gap-[10px] items-center justify-center flex-shrink-0 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-0 p-0" 
      data-name="BOM 메뉴버튼"
    >
      <div className={`flex flex-col font-['Gmarket_Sans_TTF:Bold',_sans-serif] justify-center leading-[0] not-italic opacity-75 relative shrink-0 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] w-auto transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
        <p className="leading-[normal]">골재 구매</p>
      </div>
    </button>
  );
}

function Frame17({ isScrolled, onAboutClick, onServicesClick, onVisionClick, onMissionClick, onTrendsClick }: { isScrolled: boolean; onAboutClick?: () => void; onServicesClick?: () => void; onVisionClick?: () => void; onMissionClick?: () => void; onTrendsClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[24px] sm:gap-[28px] md:gap-[32px] lg:gap-[36px] xl:gap-[40px] items-center relative shrink-0">
      <Scm isScrolled={isScrolled} onClick={onAboutClick} />
      <Mes isScrolled={isScrolled} onClick={onServicesClick} />
      <Component8 isScrolled={isScrolled} onClick={onTrendsClick} />
      <Component9 isScrolled={isScrolled} onClick={onMissionClick} />
      <Component10 isScrolled={isScrolled} onClick={onVisionClick} />
    </div>
  );
}

function Frame18({ isScrolled, onAboutClick, onServicesClick, onVisionClick, onMissionClick, onTrendsClick, onPurchaseClick }: { isScrolled: boolean; onAboutClick?: () => void; onServicesClick?: () => void; onVisionClick?: () => void; onMissionClick?: () => void; onTrendsClick?: () => void; onPurchaseClick?: () => void }) {
  return (
    <div className="fixed hidden md:flex content-stretch gap-[30px] lg:gap-[40px] xl:gap-[52px] items-center left-[50%] -translate-x-[189px] sm:-translate-x-[189px] md:-translate-x-[189px] lg:-translate-x-[189px] xl:-translate-x-[189px] top-[54px] z-40">
      <Frame17 isScrolled={isScrolled} onAboutClick={onAboutClick} onServicesClick={onServicesClick} onVisionClick={onVisionClick} onMissionClick={onMissionClick} onTrendsClick={onTrendsClick} />
    </div>
  );
}

// 모바일 햄버거 메뉴
function MobileMenu({ isScrolled, onAboutClick, onServicesClick, onVisionClick, onMissionClick, onTrendsClick, onPurchaseClick }: { isScrolled: boolean; onAboutClick?: () => void; onServicesClick?: () => void; onVisionClick?: () => void; onMissionClick?: () => void; onTrendsClick?: () => void; onPurchaseClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAboutClick = () => {
    setIsOpen(false);
    onAboutClick?.();
  };

  const handleServicesClick = () => {
    setIsOpen(false);
    onServicesClick?.();
  };

  const handleVisionClick = () => {
    setIsOpen(false);
    onVisionClick?.();
  };

  const handleMissionClick = () => {
    setIsOpen(false);
    onMissionClick?.();
  };

  const handleTrendsClick = () => {
    setIsOpen(false);
    onTrendsClick?.();
  };

  const handlePurchaseClick = () => {
    setIsOpen(false);
    onPurchaseClick?.();
  };

  return (
    <>
      {/* 햄버거 버튼 */}
      <button
        onClick={() => setIsOpen(true)}
        className={`md:hidden fixed left-4 top-8 z-50 p-2 hover:opacity-70 transition-all duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}
      >
        <Menu className="size-6" />
      </button>

      {/* 사이드바 */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 배경 오버레이 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />

            {/* 좌측 사이드바 */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed left-0 top-0 bottom-0 w-[280px] bg-white backdrop-blur-xl border-r border-gray-200 shadow-2xl z-[70] overflow-y-auto"
            >
              {/* 닫기 버튼 */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="size-5 text-black" />
              </button>

              {/* 로고 */}
              <div className="p-6 border-b border-gray-200">
                <div className="h-[24px] w-[160px]">
                  <img alt="HICON KOREA Logo" className="w-full h-full object-contain" src={imgImage7} />
                </div>
                <p className="mt-2 text-gray-600 text-xs">하이콘코리아</p>
              </div>

              {/* 메뉴 아이템들 */}
              <nav className="p-4 space-y-2">
                <button 
                  onClick={handleAboutClick}
                  className="w-full text-left px-4 py-3 rounded-lg text-black hover:bg-gray-100 transition-colors"
                >
                  <p className="text-sm">우리는</p>
                </button>
                <button 
                  onClick={handleServicesClick}
                  className="w-full text-left px-4 py-3 rounded-lg text-black hover:bg-gray-100 transition-colors"
                >
                  <p className="text-sm">함께하는</p>
                </button>
                <button 
                  onClick={handleTrendsClick}
                  className="w-full text-left px-4 py-3 rounded-lg text-black hover:bg-gray-100 transition-colors"
                >
                  <p className="text-sm">산업</p>
                </button>
                <button 
                  onClick={handleMissionClick}
                  className="w-full text-left px-4 py-3 rounded-lg text-black hover:bg-gray-100 transition-colors"
                >
                  <p className="text-sm">Mission</p>
                </button>
                <button 
                  onClick={handleVisionClick}
                  className="w-full text-left px-4 py-3 rounded-lg text-black hover:bg-gray-100 transition-colors"
                >
                  <p className="text-sm">Vision</p>
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// 모바일 Staff 버튼 (우측에서 살짝 나온 "S" 버튼)
function MobileStaffButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ x: 60 }}
      animate={{ x: 0 }}
      transition={{ 
        type: "spring", 
        damping: 20, 
        stiffness: 100,
        delay: 0.5 
      }}
      className="md:hidden fixed right-0 top-[102px] z-50 h-[48px] w-[56px] rounded-l-full backdrop-blur-[10px] hover:backdrop-blur-[20px] backdrop-filter border-l border-t border-b border-white/20 shadow-lg hover:w-[64px] hover:bg-white/10 transition-all duration-300 flex items-center justify-center group overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center">
        <span className="font-['Noto_Sans:Display_Regular',_sans-serif] text-white text-2xl group-hover:scale-110 transition-transform duration-300" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          S
        </span>
      </div>
      {/* 빛나는 효과 */}
      <div className="absolute inset-0 rounded-l-full bg-gradient-to-br from-white/5 via-white/15 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute top-0 left-0 bottom-0 right-1/2 bg-gradient-to-r from-white/20 to-transparent opacity-30 pointer-events-none rounded-l-full" />
    </motion.button>
  );
}

// Staff 버튼 컴포넌트
function Frame12() {
  return (
    <div className="absolute backdrop-blur-[6px] backdrop-filter h-[47px] left-0 opacity-[0.35] rounded-[500px] top-0 w-[135px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 47">
        <foreignObject height="55" width="143" x="-4" y="-4">
          <div style={{ backdropFilter: "blur(2px)", clipPath: "url(#bgblur_0_112_528_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
        </foreignObject>
        <path d={svgPaths.p38197a40} data-figma-bg-blur-radius="4" fill="var(--fill-0, black)" fillOpacity="0.25" id="Rectangle 21" opacity="0.5" />
        <defs>
          <clipPath id="bgblur_0_112_528_clip_path" transform="translate(4 4)">
            <path d={svgPaths.p38197a40} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[11px] top-[12px]">
      <div className="flex flex-col font-['MS_Gothic:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b7b7b7] text-[0px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[7px]">exclusively for</span>
          <span className="font-['Noto_Sans:Display_Regular',_sans-serif] font-normal text-[#b7b7b7] text-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>{` Staff`}</span>
        </p>
      </div>
    </div>
  );
}

function StaffButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="hidden md:block backdrop-blur-[10px] hover:backdrop-blur-[20px] backdrop-filter h-[47px] w-[135px] cursor-pointer hover:scale-105 hover:bg-white/10 transition-all duration-300 overflow-hidden group border border-white/20 shadow-lg rounded-full z-50 flex-shrink-0"
      data-name="staff button"
    >
      <Frame12 />
      <Frame13 />
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/15 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full" />
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-30 pointer-events-none rounded-t-full" />
    </button>
  );
}

export function PageHeader({ onLogoClick, onStaffAuth, onAboutClick, onServicesClick, onVisionClick, onMissionClick, onTrendsClick, onPurchaseClick, currentPage = 'main' }: PageHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(currentPage !== 'main');

  useEffect(() => {
    if (currentPage === 'main') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // 메인이 아닌 페이지에서는 항상 스크롤된 상태로 표시
      setIsScrolled(true);
    }
  }, [currentPage]);

  const handleStaffAuth = () => {
    if (onStaffAuth) {
      onStaffAuth();
    }
  };

  return (
    <>
      {/* 스크롤 상태에 따라 배경색이 변하는 헤더 배경 */}
      <div className={`fixed top-0 left-0 right-0 h-[100px] transition-all duration-300 z-30 ${isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-transparent'}`} />
      
      <Frame18 isScrolled={isScrolled} onAboutClick={onAboutClick} onServicesClick={onServicesClick} onVisionClick={onVisionClick} onMissionClick={onMissionClick} onTrendsClick={onTrendsClick} onPurchaseClick={onPurchaseClick} />
      <Ci onClick={onLogoClick} isScrolled={isScrolled} />
      <div className="hidden md:block fixed right-[116px] md:right-[124px] lg:right-[132px] xl:right-[148px] 2xl:right-[164px] top-[32px] z-50">
        <StaffButton onClick={handleStaffAuth} />
      </div>
      <MobileCi onClick={onLogoClick} isScrolled={isScrolled} />
      <MobileMenu isScrolled={isScrolled} onAboutClick={onAboutClick} onServicesClick={onServicesClick} onVisionClick={onVisionClick} onMissionClick={onMissionClick} onTrendsClick={onTrendsClick} onPurchaseClick={onPurchaseClick} />
      {/* 골재 구매 페이지에서는 Staff 버튼 숨김 (제3자 구매자용 페이지) */}
      {currentPage !== 'purchase' && <MobileStaffButton onClick={handleStaffAuth} />}
    </>
  );
}
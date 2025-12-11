import image_00fab15615a5cb09c209e62e8d8f506f21eacf6a from 'figma:asset/00fab15615a5cb09c209e62e8d8f506f21eacf6a.png';
import svgPaths from "../imports/svg-abnzna0rid";
import imgImage6 from "figma:asset/6a398b2390720386e6fd6048e501f78ed8e80a77.png";
import imgImage7 from "figma:asset/dc80206819425424b07394d02d5f4daf1bdf9aa7.png";

// 3행 카드 아이콘들 (1번 산은 유지, 2번 포크레인, 3번 빌딩, 4번 사람은 새 이미지)
import imgIcon1Mountain from "figma:asset/00fab15615a5cb09c209e62e8d8f506f21eacf6a.png";
import imgIcon2Excavator from "figma:asset/f55a15fa1eba4b559a4dc338000adeac9b7c7136.png";
import imgIcon3Building from "figma:asset/a4ca29aaca8f16048dae07a44c54e003458516a9.png";
import imgIcon4People from "figma:asset/afd2a60eef1f8836850921ebbf1b8ab5c5210d55.png";

// 배경 이미지 (파란색 건물)
import imgBackgroundBlueBuilding from "figma:asset/a67c85ec57d0ecd6b048f20693cf681a8d593e8b.png";

// 브랜드 모션 섹션 이미지 (콘크리트, 시멘트, 순환골재)
import imgConcrete from "figma:asset/fc327d7b0bd0900cbdd6490ccf3b231d3b8c0465.png";
import imgCement from "figma:asset/ffc4778c088638f20753c72cd85fef84bbf860af.png";
import imgRecycledAggregate from "figma:asset/100e7f7fa0a9247b0f85754dea7b037aa377cdda.png";

// Waste Recycling Aggregate 섹션 ���미지 (4개 블루 이미지)
import imgBlue1Platform from "figma:asset/6d0528c2019bd8c9b1e22e7f5e1b1dda439d5875.png";
import imgBlue2Layers from "figma:asset/e0a5e4acf606d636a82d16ab496a60644b7d5124.png";
import imgBlue3Tree from "figma:asset/3e148d986f4214d709de03ce7ed64e1e2bda1119.png";
import imgBlue4Helmet from "figma:asset/718e2cc2c351b22665def6186e28fa5ff51e12bf.png";

// Color Cards (PARK RESIDENCE) 섹션 이미지 (4개 블루 이미지)
import imgCard1RedLake from "figma:asset/f752b9bb0b510ab7248757bcb400910aba253d30.png";
import imgCard2BlueRiver from "figma:asset/9425d9746aed1dc3d55dc08d88f12fb541262ccd.png";
import imgCard3SandDunes from "figma:asset/593e9b3e9b2a601fa8d13b3338c31463a4d14cc8.png";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { YoutubeBackground } from "./YoutubeBackground";
import { Instagram, Menu, X, ArrowRight, ChevronLeft, ChevronRight, Activity, ShieldCheck, Truck, Leaf, Recycle, Award, Zap, Factory, Layers, TreePine, Users, Mouse } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { PartnerApplicationDialog } from "./PartnerApplicationDialog";
import { Toaster } from "./ui/sonner";
import { ThirdPartyPurchasePage } from "./ThirdPartyPurchasePage";
import { AboutPage } from "./AboutPage";
import { ServicesPage } from "./ServicesPage";

interface MainPageProps {
  onStaffAuth: () => void;
  onLogoClick?: () => void;
  onScrollToFooter?: () => void;
  onScrollToTop?: () => void;
  onTrendsClick?: () => void;
  onVisionClick?: () => void;
  onMissionClick?: () => void;
}

// 숫자 카운트업 애니메이션 컴포넌트
function AnimatedNumber({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    const duration = 2000; // 2초
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end]);
  
  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

function Frame20() {
  return (
    <div className="absolute h-[130px] left-0 md:left-[100px] left-1/2 -translate-x-1/2 md:translate-x-0 top-[120px] w-full max-w-[578px]">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Regular',_sans-serif] font-normal justify-center leading-[0] left-0 md:left-0 left-1/2 -translate-x-1/2 md:translate-x-0 opacity-[0.85] text-[0px] text-neutral-50 text-nowrap top-[-23px] translate-y-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="font-['Gmarket_Sans_TTF:Medium',_sans-serif] leading-[normal] mb-0 not-italic">
          <span className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">우리에게</span>
          <span className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px]"> </span>
          <span className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">{`"자연"은 `}</span>
        </p>
        <p className="font-['Gmarket_Sans_TTF:Medium',_sans-serif] leading-[normal] not-italic">
          <span className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">그대로 "자연"이어야 합니다</span>
          <span className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px]">.</span>
        </p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute box-border content-stretch flex items-center left-0 px-0 py-[10px] top-0">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic opacity-[0.85] relative shrink-0 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-neutral-50 text-nowrap">
        <p className="leading-[normal] whitespace-pre">그렇습니다.</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-0 top-[55px] md:top-[95px]">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic opacity-[0.92] relative shrink-0 text-[0px] text-neutral-50 text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">주식회사</span>
          <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">{`  하이콘코리아`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute h-[177px] left-0 md:left-[100px] left-1/2 -translate-x-1/2 md:translate-x-0 top-[145px] md:top-[172px] w-full max-w-[295px]">
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute h-[437px] left-1/2 -translate-x-1/2 top-[120px] sm:top-[130px] md:top-[120px] lg:top-[130px] xl:top-[140px] w-full max-w-[578px] px-4 z-20">
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function Component({ onClick }: { onClick?: () => void }) {
  const handleClick = () => {
    console.log('Arrow button clicked!'); // 디버깅용
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <button 
      onClick={handleClick}
      className="block cursor-pointer relative size-[50px] hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center" 
      data-name="이동버튼"
    >
      <Mouse className="w-8 h-8 text-white opacity-55 -rotate-90" strokeWidth={1.5} />
    </button>
  );
}

function Ci({ onClick, isScrolled }: { onClick?: () => void; isScrolled: boolean }) {
  console.log('Ci isScrolled:', isScrolled); // 디버깅용
  
  return (
    <button
      onClick={onClick}
      className="hidden md:block fixed h-[16px] sm:h-[18px] md:h-[22px] lg:h-[25px] xl:h-[27px] 
                 left-[100px] md:left-[120px] lg:left-[150px] xl:left-[170px] 
                 top-[38px] sm:top-[40px] md:top-[42px] lg:top-[42px] xl:top-[42px] 
                 w-[140px] md:w-[180px] lg:w-[220px] xl:w-[283px] 
                 cursor-pointer hover:opacity-80 transition-all duration-300 bg-transparent border-0 p-0 z-50"
      data-name="하이콘 CI로고"
      type="button"
    >
      <div className="absolute inset-0 pointer-events-none transition-all duration-300" data-name="image 6">
        <img 
          alt="HICON KOREA" 
          className="absolute inset-0 w-full h-full object-contain object-left pointer-events-none transition-all duration-300" 
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

function Frame({ onLogoClick, onScrollToStrategy }: { onLogoClick?: () => void; onScrollToStrategy?: () => void }) {
  return (
    <div className="absolute h-[450px] sm:h-[480px] md:h-[520px] lg:h-[550px] xl:h-[580px] left-0 overflow-visible top-0 w-full">
      <YoutubeBackground videoId="Lm0Sl9_UoIA" brightness={1.1} startTime={0} maxDuration={9} />
      
      <Frame23 />
      <div className="absolute flex h-[50px] items-center justify-center left-1/2 -translate-x-1/2 bottom-[20px] sm:bottom-[25px] md:bottom-[30px] lg:bottom-[35px] xl:bottom-[40px] w-[50px] z-50">
        <div className="flex-none rotate-[270deg]">
          <Component onClick={onScrollToStrategy} />
        </div>
      </div>
      {/* 헤더 하단 흰색 라인 - 모바일에서 숨김 */}
      <div className="hidden md:block absolute left-[70px] right-[70px] top-[95px] h-[2px] bg-white/30 backdrop-blur-sm z-10" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[136.6px] top-[20px]">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[6px] text-black w-full">
        <p className="leading-[1.5]">R</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="box-border content-stretch flex gap-[2px] items-start px-0 py-[5px] relative shrink-0 w-full overflow-visible" data-name="로고">
      <div className="bg-[rgba(6,10,22,0)] h-[20px] shrink-0 w-[15px]" data-name="빈박스" />
      <Frame15 />
      <div className="h-[28px] relative shrink-0 w-full max-w-[250px] sm:max-w-[270px] md:max-w-[290px] lg:max-w-[296px]" data-name="image 7">
        <img alt="HICON KOREA Logo" className="absolute inset-0 w-full h-full object-contain object-left pointer-events-none" src={imgImage7} />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-[15px] md:pl-[60px] lg:pl-[110px] pr-0 py-0 relative shrink-0">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b7b7b7] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">하이콘코리아</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative md:absolute content-stretch flex flex-col gap-[17px] items-start left-0 top-0 md:top-[23px] w-full md:w-[328px] mb-6 md:mb-0">
      <Component1 />
      <Frame14 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative w-full md:w-auto pl-[15px] md:pl-0">
      <div className="flex flex-col font-['Noto_Sans:Display_Light',_'Noto_Sans_KR:Light',_sans-serif] font-light justify-center leading-[0] text-[#b7b7b7] text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.5px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre-wrap md:whitespace-pre">
          <span className="font-['Gmarket_Sans_TTF:Bold',_'Noto_Sans_KR:Light',_sans-serif]" style={{ fontVariationSettings: "'wght' 300" }}>{`HICON KOREA `}</span>
          <span>{`    대표 : 조 동 희`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative w-full md:w-auto pl-[15px] md:pl-0">
      <div className="flex flex-col font-['Noto_Sans:Display_Light',_'Noto_Sans_KR:Light',_sans-serif] font-light justify-center leading-[0] text-[#b7b7b7] text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.5px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">{`사업자등록번호  143 81 04340`}</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[10px] md:gap-[30px] lg:gap-[50px] items-start md:items-center relative shrink-0 w-full md:w-auto">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative w-full md:w-auto pl-[15px] md:pl-0">
      <div className="flex flex-col font-['Noto_Sans:Display_Light',_'Noto_Sans_KR:Light',_sans-serif] font-light justify-center leading-[0] text-[#b7b7b7] text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.5px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre-wrap md:whitespace-pre">본사 : 경기도 화성시 팔탄면 버들로 1261</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative md:absolute content-stretch flex flex-col gap-[4px] items-start left-0 md:left-auto md:right-0 lg:left-[444px] top-0 md:top-[56px] w-full md:w-auto mb-6 md:mb-0">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative md:absolute h-auto md:h-[33px] left-0 md:left-auto md:right-0 lg:left-[444px] top-0 md:top-[22px] w-full md:w-auto mb-4 md:mb-0 pl-[15px] md:pl-0">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic text-[#b7b7b7] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] tracking-[0.75px]">
        <p className="leading-[1.5] whitespace-pre">kakao chanel talk</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative md:absolute content-stretch flex flex-wrap md:flex-nowrap font-['Gmarket_Sans_TTF:Medium',_sans-serif] gap-[20px] md:gap-[60px] lg:gap-[90px] xl:gap-[120px] items-center leading-[0] left-0 md:left-auto md:right-0 lg:left-[444px] not-italic text-[#b7b7b7] text-[10px] sm:text-[11px] md:text-[12px] text-nowrap top-0 mb-4 md:mb-0 pl-[15px] md:pl-0">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">FAQ</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">이용약관</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">고객센터</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">VISION CENTER</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="hidden md:block absolute left-0 size-[7px] top-[249px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        <g id="Group 31">
          <path clipRule="evenodd" d={svgPaths.pf0fcb00} fill="var(--fill-0, #B7B7B7)" fillRule="evenodd" id="Ellipse 4 (Stroke)" />
          <path d={svgPaths.p1134cc80} fill="var(--fill-0, #B7B7B7)" id="C" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[27.17%_25.17%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
        <g id="Group 134">
          <path d={svgPaths.p9cb6200} fill="var(--fill-0, #B7B7B7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[30px] sm:h-[35px] md:h-[40px] overflow-clip relative shrink-0 w-[28px] sm:w-[32px] md:w-[39px]" data-name="네이버로고">
      <Group1 />
    </div>
  );
}

function Component3() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[28px] sm:size-[32px] md:size-[39.252px]" data-name="카톡로고">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="카톡로고">
          <path d={svgPaths.p27516100} fill="var(--fill-0, #B7B7B7)" id="Polygon 1" stroke="var(--stroke-0, #B7B7B7)" strokeLinejoin="round" />
          <path d={svgPaths.p21ab5c80} fill="var(--fill-0, #B7B7B7)" id="Exclude" />
        </g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="카톡로고">
      <Component3 />
    </div>
  );
}

function Component5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[7px] sm:p-[8px] md:p-[9px] relative shrink-0 w-[28px] sm:w-[32px] md:w-[39px]" data-name="인스타로고">
      <Instagram className="size-[18px] sm:size-[20px] md:size-[24px] text-[#B7B7B7]" strokeWidth={1.5} />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[28px] sm:w-[32px] md:w-[39px]" data-name="핀터레스트">
      <svg 
        className="size-[20px] sm:size-[24px] md:size-[28px]" 
        viewBox="0 0 24 24" 
        fill="none"
        stroke="#B7B7B7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.744 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="hidden md:flex absolute content-stretch gap-[10px] sm:gap-[12px] md:gap-[15px] h-[40px] sm:h-[46px] md:h-[52px] items-center justify-end left-1/2 -translate-x-1/2 top-[173px] w-[500px] sm:w-[600px] md:w-[700px]">
      <Component2 />
      <Component4 />
      <Component5 />
      <Component6 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative md:absolute h-auto min-h-[315px] md:h-[315px] left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-[235px] w-full max-w-[1106px] px-4 md:px-8 lg:px-12 py-6 md:py-8 flex flex-col md:block">
      <Frame2 />
      <Frame10 />
      <Frame4 />
      <Frame3 />
      <div className="hidden md:block absolute h-px left-0 top-[153px] w-full" data-name="Line 17 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1106 1">
          <path clipRule="evenodd" d="M1106 1H0V0H1106V1Z" fill="var(--fill-0, #B7B7B7)" fillRule="evenodd" id="Line 17 (Stroke)" />
        </svg>
      </div>
      <div className="hidden md:block absolute flex flex-col font-['Gmarket_Sans_TTF:Light',_sans-serif] justify-center leading-[0] left-0 not-italic text-[#b7b7b7] text-[8px] sm:text-[9px] md:text-[10px] text-nowrap top-[261px] translate-y-[-50%]">
        <p className="leading-[1.4] whitespace-pre">{`Copyright  All rights  reserved`}</p>
      </div>
      <div className="block md:hidden mt-6 text-center">
        <p className="font-['Gmarket_Sans_TTF:Light',_sans-serif] text-[#b7b7b7] text-[8px]">Copyright All rights reserved</p>
      </div>
      <Group />
      <Frame1 />
      <div className="block md:hidden mt-6">
        <div className="flex gap-[15px] items-center justify-center">
          <Component2 />
          <Component4 />
          <Component5 />
          <Component6 />
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="relative bg-white min-h-[400px] h-auto md:h-[550px] left-0 overflow-auto w-full mt-auto" data-name="푸터 바탕">
      <Frame11 />
    </div>
  );
}

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

function Scm({ isScrolled, onClick }: { isScrolled: boolean; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="box-border content-stretch flex gap-[10px] h-[22px] items-center justify-center rounded-[100px] relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-0 p-0" 
      data-name="SCM"
    >
      <div className={`flex flex-col font-['Microsoft_Sans_Serif:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] md:text-[12px] lg:text-[13px] xl:text-[15px] text-nowrap transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
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
      <div className={`flex flex-col font-['Microsoft_Sans_Serif:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] md:text-[12px] lg:text-[13px] xl:text-[15px] text-nowrap transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
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
      <div className={`flex flex-col font-['Microsoft_Sans_Serif:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] md:text-[12px] lg:text-[13px] xl:text-[15px] text-nowrap transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
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
      <div className={`flex flex-col font-['Microsoft_Sans_Serif:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] md:text-[12px] lg:text-[13px] xl:text-[15px] text-nowrap transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
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
      <div className={`flex flex-col font-['Microsoft_Sans_Serif:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] md:text-[12px] lg:text-[13px] xl:text-[15px] text-nowrap transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
        <p className="leading-[normal] whitespace-pre">Vision</p>
      </div>
    </button>
  );
}

function Frame17({ isScrolled, onAboutClick, onServicesClick, onMissionClick, onVisionClick, onTrendsClick }: { isScrolled: boolean; onAboutClick?: () => void; onServicesClick?: () => void; onMissionClick?: () => void; onVisionClick?: () => void; onTrendsClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] md:gap-[20px] lg:gap-[28px] xl:gap-[36px] 2xl:gap-[40px] items-center relative shrink-0">
      <Scm isScrolled={isScrolled} onClick={onAboutClick} />
      <Mes isScrolled={isScrolled} onClick={onServicesClick} />
      <Component8 isScrolled={isScrolled} onClick={onTrendsClick} />
      <Component9 isScrolled={isScrolled} onClick={onMissionClick} />
      <Component10 isScrolled={isScrolled} onClick={onVisionClick} />
    </div>
  );
}

function Frame18({ isScrolled, showPurchasePage, onAboutClick, onServicesClick, onMissionClick, onVisionClick, onTrendsClick }: { isScrolled: boolean; showPurchasePage?: boolean; onAboutClick?: () => void; onServicesClick?: () => void; onMissionClick?: () => void; onVisionClick?: () => void; onTrendsClick?: () => void }) {
  // 골재 구매 페이지에서는 항상 검정색 텍스트, 아니면 스크롤 상태에 따라
  const textShouldBeDark = showPurchasePage || isScrolled;
  
  return (
    <div className="fixed hidden md:flex content-stretch gap-[20px] lg:gap-[32px] xl:gap-[52px] items-center left-[50%] -translate-x-[120px] lg:-translate-x-[160px] xl:-translate-x-[189px] top-[54px] z-40">
      <Frame17 isScrolled={textShouldBeDark} onAboutClick={onAboutClick} onServicesClick={onServicesClick} onMissionClick={onMissionClick} onVisionClick={onVisionClick} onTrendsClick={onTrendsClick} />
    </div>
  );
}

// 모바일 로고 (센터 배치)
function MobileCi({ showPurchasePage, isScrolled, onClick }: { showPurchasePage?: boolean; isScrolled?: boolean; onClick?: () => void }) {
  const shouldBeDark = showPurchasePage || isScrolled;
  
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
            filter: shouldBeDark ? 'invert(1)' : 'none',
            opacity: shouldBeDark ? 1 : 0.5
          }}
        />
      </div>
    </button>
  );
}

// 모바일 햄버거 메뉴
function MobileMenu({ showPurchasePage, isScrolled, onAboutClick, onServicesClick, onVisionClick, onMissionClick, onTrendsClick }: { showPurchasePage?: boolean; isScrolled?: boolean; onAboutClick?: () => void; onServicesClick?: () => void; onVisionClick?: () => void; onMissionClick?: () => void; onTrendsClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldBeDark = showPurchasePage || isScrolled;

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

  return (
    <>
      {/* 햄버거 버튼 - 골재 구매 페이지나 스크롤 시 검정색 */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed left-4 top-8 z-50 p-2 hover:opacity-70 transition-opacity duration-300"
      >
        <Menu className={`size-6 transition-colors duration-300 ${shouldBeDark ? 'text-black' : 'text-white'}`} />
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
function MobileStaffButton({ showPurchasePage, onClick }: { showPurchasePage?: boolean; onClick: () => void }) {
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
      className={`md:hidden fixed right-0 top-[102px] z-50 h-[48px] w-[56px] rounded-l-full backdrop-blur-[10px] hover:backdrop-blur-[20px] backdrop-filter border-l border-t border-b shadow-lg hover:w-[64px] transition-all duration-300 flex items-center justify-center group overflow-hidden ${showPurchasePage ? 'border-gray-300 bg-gray-100/80 hover:bg-gray-200/80' : 'border-white/20 hover:bg-white/10'}`}
    >
      <div className="flex flex-col items-center justify-center">
        <span className={`font-['Noto_Sans:Display_Regular',_sans-serif] text-2xl group-hover:scale-110 transition-all duration-300 ${showPurchasePage ? 'text-black' : 'text-white'}`} style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          S
        </span>
      </div>
      {/* 빛나는 효과 */}
      <div className={`absolute inset-0 rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${showPurchasePage ? 'bg-gradient-to-br from-gray-300/50 via-gray-400/50 to-gray-300/50' : 'bg-gradient-to-br from-white/5 via-white/15 to-white/5'}`} />
      <div className={`absolute top-0 left-0 bottom-0 right-1/2 opacity-30 pointer-events-none rounded-l-full ${showPurchasePage ? 'bg-gradient-to-r from-gray-400/40 to-transparent' : 'bg-gradient-to-r from-white/20 to-transparent'}`} />
    </motion.button>
  );
}

// Investment Strategy Section
function InvestmentStrategySection({ onTrendsClick, isScrolling }: { onTrendsClick?: () => void; isScrolling: boolean }) {
  const [partnerDialogOpen, setPartnerDialogOpen] = useState(false);

  return (
    <>
      <div id="investment-strategy-section" className="relative w-full left-0 mt-[450px] sm:mt-[480px] md:mt-[520px] lg:mt-[550px] xl:mt-[580px] bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <h2 className="mb-6">
                <span className="block text-[28px] md:text-[36px] lg:text-[42px] tracking-[-0.02em] leading-[1.1] font-['Gmarket_Sans_TTF:Bold',_sans-serif] font-bold">
                  비즈니스 혁신 전략
                </span>
                <span className="block text-[28px] md:text-[36px] lg:text-[42px] text-[#E63946] tracking-normal leading-[1.1] font-bold font-['Noto_Sans:Display_Regular',_sans-serif]">
                  Strategy
                </span>
              </h2>

            </div>
            <div className="max-w-[540px] md:-ml-[50px]">
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#1A1A1A] leading-[1.6] mb-6 font-bold font-['Gmarket_Sans_TTF:Bold',_sans-serif]">
                사회적 가치 창출이 가능한 전략 구축
              </p>
              <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#666] leading-[1.7] mb-4 whitespace-normal md:whitespace-nowrap">
                하이콘코리아는 혁신적인 기술과 지속 가능한 솔루션을 통해 가치를 제공합니다.
              </p>
              <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#666] leading-[1.7] mb-2 whitespace-normal md:whitespace-nowrap">
                순환경제 생태계 구축과 친환경 자재 개발을 통해 2030년까지 탄소중립을 달성 하겠습니다.
              </p>
              <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#666] leading-[1.7] mb-6">
                지역사회와 환경에 긍정적 영향을 미치는 것을 목표로 합니다.
              </p>
            </div>
          </div>
          
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6 auto-rows-fr md:auto-rows-[minmax(240px,1fr)] relative">
          {/* 배경 이미지 - 파란색 건물, 브라우저 너비에 맞춤, 가로세로 비율 유지 */}
          <div className="absolute top-[60px] bottom-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden pointer-events-none">
            <img 
              src={imgBackgroundBlueBuilding} 
              alt="Blue Building Background" 
              className="w-full h-full object-cover md:object-contain"
            />
          </div>

          {/* Partner & Collaboration Card - 파트너 요청 카드 (1행 전체) */}
          <div className="md:col-span-6 lg:col-span-12 md:row-span-1 flex items-start justify-start min-h-[240px] md:min-h-[240px] relative z-10">
            <div className="w-full md:w-[21%] md:min-w-[180px] h-[85%] bg-[#00294F] text-white p-5 sm:p-6 md:p-5 lg:p-6 flex flex-col justify-between cursor-pointer">
              <div>
                <h3 className="text-[16px] sm:text-[17px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[1.3] mb-2 font-[Gmarket_Sans]">
                  파트너<br />
                  &<br />
                  협력
                </h3>
                <p className="text-[11px] sm:text-[11.5px] md:text-[11px] lg:text-[12px] xl:text-[13px] leading-[1.5] opacity-90 mt-[25px] font-[Gmarket_Sans] font-light">
                  당사와 함께 가장 큰 비에너지 사업에 동참 하시기 바랍니다.
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setPartnerDialogOpen(true)}
                  className="group bg-white rounded-full flex items-center justify-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 md:px-4 md:py-1.5 lg:px-5 lg:py-2 hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer text-[rgb(16,16,16)] font-bold shadow-md"
                >
                  <span className="text-[13px] sm:text-[14px] md:text-[13px] lg:text-[14px] xl:text-[15px]">신청</span>
                  <ArrowRight className="size-4 sm:size-4 md:size-4 lg:size-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Calendar Card - 일정 카드 (2행, 현재 사이즈 유지) */}
          <div className="md:col-span-4 lg:col-span-9 bg-white border border-gray-200 p-5 md:p-6 hover:shadow-lg transition-shadow relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-[15px] md:text-[16px]">
                TRENDS
              </h4>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <ChevronLeft className="size-4" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
            <div>
              <p className="text-[12px] md:text-[13px] text-black mb-3">
                하이콘코리아는 가장 유용한 골재 생산 데이터를 수집합니다.
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[56px] md:text-[64px] lg:text-[72px] text-[rgb(200,32,44)] tracking-tighter leading-none">23</span>
                <span className="text-[18px] md:text-[20px] lg:text-[22px] text-[rgb(200,32,44)] font-bold">Oct</span>
              </div>
              <button
                onClick={onTrendsClick}
                className="mt-4 flex items-center gap-1 text-[12px] md:text-[13px] text-[#666] hover:text-[#000] transition-colors group cursor-pointer"
              >
                <span>상세보기</span>
                <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Stock Quotes Card - 주요 지표 (일정 카드 우측) */}
          <div className="md:col-span-2 lg:col-span-3 bg-white border border-gray-200 p-5 md:p-6 hover:shadow-lg transition-shadow relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-[15px] md:text-[16px]">
                주요 지표
              </h4>
              <button className="flex items-center gap-1 text-[12px] md:text-[13px] text-[#666] hover:text-[#000] transition-colors group">
                <span>전체보기</span>
                <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-[11px] md:text-[12px] text-[#999] mb-1">2024년 입고량</p>
                <p className="text-[11px] md:text-[12px] text-[#666] mb-2">전년 대비</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-[28px] md:text-[32px] lg:text-[36px] tracking-tight"><AnimatedNumber end={12} />.97</span>
                  <span className="text-[14px] md:text-[15px] lg:text-[16px] text-[#666]">톤</span>
                </div>
                <p className="text-[11px] md:text-[12px] text-[#10B981] mt-1">▲ 15.2%</p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-[11px] md:text-[12px] text-[#999] mb-1">재생골재 생산량</p>
                <p className="text-[11px] md:text-[12px] text-[#666] mb-2">누적 생산량</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-[28px] md:text-[32px] lg:text-[36px] tracking-tight"><AnimatedNumber end={1003} />.60</span>
                  <span className="text-[14px] md:text-[15px] lg:text-[16px] text-[#666]">톤</span>
                </div>
                <p className="text-[11px] md:text-[12px] text-[#10B981] mt-1">▲ 8.3%</p>
              </div>
            </div>
          </div>

          {/* Industry Stats Card 1 - 가장 큰 비에너지 산업 */}
          <div key="card-1" className="md:col-span-2 lg:col-span-3 bg-white border border-gray-200 p-5 md:p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer relative z-10">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-1 -translate-y-[15px]">
                <div className="relative w-[154px] h-[154px]">
                  <img
                    src={image_00fab15615a5cb09c209e62e8d8f506f21eacf6a}
                    alt="Mountain Icon"
                    className="size-[115px] md:size-[134px] lg:size-[154px] object-contain -translate-x-[5px]"
                  />
                </div>
              </div>
              <div className="mt-auto -translate-y-[5px]">
                <p className="text-[11px] md:text-[12px] text-black mb-2 -translate-y-[20px]">골재 부문은 단연코</p>
                <div className="space-y-1">
                  <h5 className="text-[18px] md:text-[22px] lg:text-[26px] text-black leading-tight font-bold">
                    가장 큰
                  </h5>
                  <p className="text-[18px] md:text-[22px] lg:text-[26px] text-black leading-[1.3] truncate font-bold">
                    비에너지 추출 산업 중
                  </p>
                </div>
                <p className="text-[12px] md:text-[13px] text-black leading-[1.5] mt-2 truncate">
                  생산량 측면에서 사이트 , 회사 , 고용자 수, 
                </p>
              </div>
            </div>
          </div>

          {/* Industry Stats Card 2 - 가장 큰 비에너지 산업 */}
          <div key="card-2" className="md:col-span-2 lg:col-span-3 bg-white border border-gray-200 p-5 md:p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer relative z-10">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-1 -translate-y-[15px]">
                <div className="relative w-[154px] h-[154px]">
                  <img
                    src={imgIcon2Excavator}
                    alt="Excavator Icon"
                    className="size-[115px] md:size-[134px] lg:size-[154px] object-contain -translate-x-[5px]"
                  />
                </div>
              </div>
              <div className="mt-auto -translate-y-[5px]">
                <p className="text-[11px] md:text-[12px] text-black mb-2 -translate-y-[20px]">국내 골재 평균 수요</p>
                <div className="space-y-1">
                  <h5 className="text-[18px] md:text-[22px] lg:text-[26px] text-sky-700 leading-tight font-bold">
                    1인당 연간 평균 수요
                  </h5>
                  <p className="text-[18px] md:text-[22px] lg:text-[26px] text-sky-700 leading-[1.3] truncate font-bold">
                    약 4톤
                  </p>
                </div>
                <p className="text-[12px] md:text-[13px] text-black leading-[1.5] mt-2 truncate">
                  (4 tons per capita) 인구 약 5천만 명 기준
                </p>
              </div>
            </div>
          </div>

          {/* Industry Stats Card 3 - 가장 큰 비에너지 산업 (4번 사람들 아이콘) */}
          <div key="card-3" className="md:col-span-2 lg:col-span-3 bg-white border border-gray-200 p-5 md:p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer relative z-10">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-1 -translate-y-[15px]">
                <div className="relative overflow-hidden w-[154px] h-[154px]">
                  <img
                    src={imgIcon4People}
                    alt="People Icon"
                    className="size-[100px] md:size-[115px] lg:size-[130px] object-contain -translate-x-[5px] translate-y-[15px]"
                  />
                  {/* 빨간 점 가리기 */}
                  <div className="absolute top-0 right-0 w-4 h-4 bg-white"></div>
                </div>
              </div>
              <div className="mt-auto -translate-y-[5px]">
                <p className="text-[11px] md:text-[12px] text-black mb-2 -translate-y-[20px]">폐기물 산업 종사자</p>
                <div className="space-y-1">
                  <h5 className="text-[18px] md:text-[22px] lg:text-[26px] text-black leading-tight font-bold">
                    약 6만명
                  </h5>
                  <p className="text-[18px] md:text-[22px] lg:text-[26px] text-black leading-[1.3] truncate font-bold">
                    전국 종사자
                  </p>
                </div>
                <p className="text-[12px] md:text-[13px] text-black leading-[1.5] mt-2 truncate">
                  외국인 20,000명 | 내국인 40,000명
                </p>
              </div>
            </div>
          </div>

          {/* Industry Stats Card 4 - 가장 큰 비에너지 산업 (3번 빌딩 아이콘) */}
          <div key="card-4" className="md:col-span-2 lg:col-span-3 bg-white border border-gray-200 p-5 md:p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer relative z-10">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-1 -translate-y-[15px]">
                <div className="relative w-[154px] h-[154px]">
                  <img
                    src={imgIcon3Building}
                    alt="Building Icon"
                    className="size-[100px] md:size-[115px] lg:size-[130px] object-contain -translate-x-[5px] translate-y-[15px]"
                  />
                </div>
              </div>
              <div className="mt-auto -translate-y-[5px]">
                <p className="text-[11px] md:text-[12px] text-black mb-2 -translate-y-[20px]">국내 골재 산업은 다음과 같습니다.</p>
                <div className="space-y-1">
                  <h5 className="text-[18px] md:text-[22px] lg:text-[26px] text-sky-700 leading-tight font-bold">
                    약 1,200개
                  </h5>
                  <p className="text-[18px] md:text-[22px] lg:text-[26px] text-sky-700 leading-[1.3] truncate font-bold">
                    골재 채취 사업
                  </p>
                </div>
                <p className="text-[12px] md:text-[13px] text-black leading-[1.5] mt-2 truncate">
                  연간 2억 톤 이상의 골재 생산 (모래, 자갈, 쇄석)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <PartnerApplicationDialog 
        open={partnerDialogOpen} 
        onOpenChange={setPartnerDialogOpen} 
      />
    </>
  );
}

// Brand Motion Language Section
function BrandMotionSection() {
  return (
    <div className="relative w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="mb-2">
                <span className="block text-[#17A2B8] text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2]">
                  미래 산업 리더를
                </span>
                <span className="block text-[#17A2B8] text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2]">
                  위한 프로젝트
                </span>
              </h2>
              <p className="text-[#17A2B8] text-[14px] md:text-[15px] lg:text-[16px] mt-2">
                Industry Leaders
              </p>
            </div>
            <div className="flex items-start">
              <p className="text-[#999] text-[12px] md:text-[13px] lg:text-[14px] leading-[1.8]">
                혁신과 경제성장을 이끌 신성장동력으로 순환경제 신산업 및 신기술 혁신을 통한 자원 순환성을 높이고자 재생 원료와 순환자원, 재활용가능자원을 강화한다。
              </p>
            </div>
          </div>
        </div>

        {/* Three Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-24 md:mb-32">
          {/* Card 1 - 시멘트 */}
          <div className="relative h-[200px] md:h-[280px] lg:h-[320px] overflow-hidden group cursor-pointer">
            <img
              src={imgCement}
              alt="시멘트 건축물"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent bg-[rgba(25,24,24,0)]" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-[28px] md:text-[32px] lg:text-[36px]">
                시멘트
              </h3>
            </div>
          </div>

          {/* Card 2 - 콘크리트 */}
          <div className="relative h-[200px] md:h-[280px] lg:h-[320px] overflow-hidden group cursor-pointer">
            <img
              src={imgConcrete}
              alt="콘크리트 건축물"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-[28px] md:text-[32px] lg:text-[36px]">
                콘크리트
              </h3>
            </div>
          </div>

          {/* Card 3 - 순환골재 */}
          <div className="relative h-[200px] md:h-[280px] lg:h-[320px] overflow-hidden group cursor-pointer">
            <img
              src={imgRecycledAggregate}
              alt="순환골재 - 환경 친화적 순환경제"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-[28px] md:text-[32px] lg:text-[36px]">
                순환골재
              </h3>
            </div>
          </div>
        </div>

        {/* Partner Program Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Left Side - Title */}
          <div>
            <h2 className="mb-6">
              <span className="block text-[#17A2B8] text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2]">
                선도적 파트너를
              </span>
              <span className="block text-[#17A2B8] text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2]">
                위한 프로그램
              </span>
            </h2>
            <p className="text-[#17A2B8] text-[14px] md:text-[15px] lg:text-[16px]">
              Partner Program
            </p>
          </div>

          {/* Right Side - Services with Icons */}
          <div className="space-y-10 md:space-y-12">
            {/* 실시간 생산,재고 투명성 */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#17A2B8]/10 flex items-center justify-center group-hover:bg-[#17A2B8]/20 transition-colors duration-300">
                  <Activity className="w-5 h-5 text-[#17A2B8]" />
                </div>
                <h4 className="text-black text-[15px] md:text-[16px] lg:text-[17px]">
                  실시간 생산,재고 투명성
                </h4>
              </div>
              <p className="text-[#999] text-[12px] md:text-[13px] lg:text-[14px] leading-[1.8]">
                A/B/C 라인별 생산 현황과 순환골재 재고를 실시간으로 확인하고, 원하는 품질과 수량이 준비되면 즉시 알림을 받아 공사 일정에 맞춰 사전 예약할 수 있습니다.
              </p>
            </div>

            {/* 품질 보증 & 추적 */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#17A2B8]/10 flex items-center justify-center group-hover:bg-[#17A2B8]/20 transition-colors duration-300">
                  <ShieldCheck className="w-5 h-5 text-[#17A2B8]" />
                </div>
                <h4 className="text-black text-[15px] md:text-[16px] lg:text-[17px]">
                  품질 보증 & 추적
                </h4>
              </div>
              <p className="text-[#999] text-[12px] md:text-[13px] lg:text-[14px] leading-[1.8]">
                폐기물 원천부터 생산 라인, 품질 시험 결과까지 올바로 시스템과 연동된 완전한 이력을 QR 코드로 현장에서 즉시 확인하고, 자동 발급되는 품질 성적서로 투명성을 증명합니다.
              </p>
            </div>

            {/* 스마트 물류 통합 */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#17A2B8]/10 flex items-center justify-center group-hover:bg-[#17A2B8]/20 transition-colors duration-300">
                  <Truck className="w-5 h-5 text-[#17A2B8]" />
                </div>
                <h4 className="text-black text-[15px] md:text-[16px] lg:text-[17px]">
                  스마트 물류 통합
                </h4>
              </div>
              <p className="text-[#999] text-[#999] text-[12px] md:text-[13px] lg:text-[14px] leading-[1.8]">
                차량 배차부터 적재, 배송, 출고 완료까지 전 과정을 PWA 모바일 앱으로 실시간 추적하고, 현장 도착 전 사전 알림으로 건설 현장 특화 물류를 경험하세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Waste Recycling Aggregate Section
function ParkResidenceSection() {
  const colorCards = [
    {
      line1: "폐기물 자원화율",
      line2: "재생 순환 골재",
      line3: "78% (2025)",
      bottomText: "NATURE AS NATURE 01",
      bg: "bg-[#5B7A9F]",
      image: imgCard1RedLake,
      icon: Leaf,
      title: "자연 그대로의 자연",
      subtitle: "Nature as Nature"
    },
    {
      line1: "순환 경제 달성률",
      line2: "재활용 처리율",
      line3: "100% (목표)",
      bottomText: "PERFECT CIRCULATION 02",
      bg: "bg-[#6B9DD1]",
      image: imgCard2BlueRiver,
      icon: Recycle,
      title: "완벽한 순환",
      subtitle: "Perfect Circulation"
    },
    {
      line1: "매립·소각 감소율",
      line2: "품질 만족도",
      line3: "95.8%",
      bottomText: "ZERO WASTE 03",
      bg: "bg-[#87B4D9]",
      image: imgCard3SandDunes,
      icon: Award,
      title: "Zero Waste",
      subtitle: "Sustainable Future"
    },
    {
      line1: "탄소 감축 목표",
      line2: "재생에너지 자급률",
      line3: "60% (2025)",
      bottomText: "NET ZERO 04",
      bg: "bg-[#B4D5ED]",
      image: null, // 4번째 이미지 대기중
      icon: Zap,
      title: "Net Zero",
      subtitle: "Carbon Neutrality"
    }
  ];

  return (
    <div className="relative w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Image Grid with Overlay Text */}
        <div className="relative mb-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {/* Image 1 - Blue Platform */}
            <div className="relative h-[200px] md:h-[350px] lg:h-[400px] overflow-hidden group cursor-pointer">
              <img
                src={imgBlue1Platform}
                alt="Blue Platform"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/20" />
              {/* 아이콘과 타이틀 */}
              <div className="absolute top-6 left-6 md:left-8 lg:left-10 z-10 pointer-events-none">
                <div className="flex items-center gap-2 mb-1">
                  <Factory className="size-5 md:size-6 text-white drop-shadow-lg" strokeWidth={1.5} />
                  <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] drop-shadow-lg"
                     style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600 }}>
                    생산 인프라
                  </p>
                </div>
                <p className="text-white/80 text-[10px] md:text-[11px] lg:text-[12px] tracking-[0.1em]"
                   style={{ fontFamily: "'Noto Sans', sans-serif" }}>
                  Production Facility
                </p>
              </div>
            </div>

            {/* Image 2 - Blue Layers */}
            <div className="relative h-[200px] md:h-[350px] lg:h-[400px] overflow-hidden group cursor-pointer">
              <img
                src={imgBlue2Layers}
                alt="Blue Layers"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/20" />
              {/* 아이콘과 타이틀 */}
              <div className="absolute top-6 left-6 md:left-8 lg:left-10 z-10 pointer-events-none">
                <div className="flex items-center gap-2 mb-1">
                  <Layers className="size-5 md:size-6 text-white drop-shadow-lg" strokeWidth={1.5} />
                  <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] drop-shadow-lg"
                     style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600 }}>
                    품질 공정
                  </p>
                </div>
                <p className="text-white/80 text-[10px] md:text-[11px] lg:text-[12px] tracking-[0.1em]"
                   style={{ fontFamily: "'Noto Sans', sans-serif" }}>
                  Quality Process
                </p>
              </div>
            </div>

            {/* Image 3 - Blue Tree */}
            <div className="relative h-[200px] md:h-[350px] lg:h-[400px] overflow-hidden group cursor-pointer">
              <img
                src={imgBlue3Tree}
                alt="Blue Tree"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/20" />
              {/* 아이콘과 타이틀 */}
              <div className="absolute top-6 left-6 md:left-8 lg:left-10 z-10 pointer-events-none">
                <div className="flex items-center gap-2 mb-1">
                  <TreePine className="size-5 md:size-6 text-white drop-shadow-lg" strokeWidth={1.5} />
                  <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] drop-shadow-lg"
                     style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600 }}>
                    환경 보호
                  </p>
                </div>
                <p className="text-white/80 text-[10px] md:text-[11px] lg:text-[12px] tracking-[0.1em]"
                   style={{ fontFamily: "'Noto Sans', sans-serif" }}>
                  Environmental Care
                </p>
              </div>
            </div>

            {/* Image 4 - Blue Helmet */}
            <div className="relative h-[200px] md:h-[350px] lg:h-[400px] overflow-hidden group cursor-pointer">
              <img
                src={imgBlue4Helmet}
                alt="Blue Helmet"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/20" />
              {/* 아이콘과 타이틀 */}
              <div className="absolute top-6 left-6 md:left-8 lg:left-10 z-10 pointer-events-none">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="size-5 md:size-6 text-white drop-shadow-lg" strokeWidth={1.5} />
                  <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] drop-shadow-lg"
                     style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600 }}>
                    안전 인력
                  </p>
                </div>
                <p className="text-white/80 text-[10px] md:text-[11px] lg:text-[12px] tracking-[0.1em]"
                   style={{ fontFamily: "'Noto Sans', sans-serif" }}>
                  Safety & Team
                </p>
              </div>
            </div>
          </div>

          {/* Overlay Text - Waste Recycling Aggregate */}
          <div className="absolute inset-0 flex items-start justify-start pl-4 sm:pl-12 md:pl-16 lg:pl-20 pt-[85px] md:pt-28 lg:pt-[95px] pointer-events-none">
            <h2 className="text-white text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] tracking-[0.02em] sm:tracking-[0.1em] opacity-90 leading-tight md:leading-relaxed"
                style={{ 
                  fontFamily: "'Noto Sans', sans-serif",
                  fontWeight: 200,
                  letterSpacing: window.innerWidth < 640 ? '0.02em' : '0.1em',
                  textShadow: '0 2px 20px rgba(0,0,0,0.3)'
                }}>
              Waste<br />Recycling Aggregate
            </h2>
          </div>
        </div>

        {/* Color Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 -mt-1">
          {colorCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className={`relative ${card.bg} p-6 md:p-8 lg:p-10 h-[200px] md:h-[240px] lg:h-[260px] flex flex-col justify-between overflow-hidden cursor-pointer`}
              >
                {/* 배경 이미지 */}
                {card.image && (
                  <img
                    src={card.image}
                    alt={`Color Card ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    style={index === 1 ? { objectPosition: 'center bottom' } : {}}
                  />
                )}
                
                {/* 컬러 오버레이 */}
                <div className={`absolute inset-0 ${card.bg} opacity-40`} />
                
                {/* 콘텐츠 */}
                <div className="relative z-10">
                  {/* 아이콘과 타이틀 */}
                  <div className="flex items-center gap-2 mb-3">
                    <IconComponent className="size-5 md:size-6 text-white" />
                    <div>
                      <p className="text-white text-[14px] md:text-[16px] lg:text-[18px]"
                         style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 700 }}>
                        {card.title}
                      </p>
                      <p className="text-white/80 text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.1em]"
                         style={{ fontFamily: "'Noto Sans', sans-serif", letterSpacing: '0.1em' }}>
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 relative z-10">
                  <p className="text-white/70 text-[10px] md:text-[11px] lg:text-[12px]"
                     style={{ fontFamily: "'Noto Sans', sans-serif" }}>
                    {card.line1}
                  </p>
                  <p className="text-white/70 text-[10px] md:text-[11px] lg:text-[12px]"
                     style={{ fontFamily: "'Noto Sans', sans-serif" }}>
                    {card.line2}
                  </p>
                  <p className="text-white text-[10px] md:text-[11px] lg:text-[12px] mt-2"
                     style={{ fontFamily: "'Noto Sans', sans-serif" }}>
                    {card.line3}
                  </p>
                </div>

                <div className="relative z-10">
                  <p className="text-white/50 text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.1em]"
                     style={{ fontFamily: "'Noto Sans', sans-serif", letterSpacing: '0.1em' }}>
                    {card.bottomText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function MainPage({ onStaffAuth, onLogoClick, onScrollToFooter, onScrollToTop, onTrendsClick, onVisionClick, onMissionClick }: MainPageProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showPurchasePage, setShowPurchasePage] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showServicesPage, setShowServicesPage] = useState(false);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 스크롤 컨테이너 찾기 (부모의 overflow-y-auto div)
    const scrollContainer = mainContainerRef.current?.parentElement;
    
    if (!scrollContainer) {
      console.log('스크롤 컨테이너를 찾을 수 없습니다');
      return;
    }

    const handleScroll = () => {
      const scrollY = scrollContainer.scrollTop;
      const scrolled = scrollY > 50;
      console.log('Scroll Y:', scrollY, 'isScrolled:', scrolled);
      setIsScrolled(scrolled);
      
      // 스크롤 중 상태 설정
      setIsScrolling(true);
      
      // 기존 타이머 취소
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
      
      // 150ms 후 스크롤이 멈춘 것으로 판단
      scrollTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // 초기 상태 체크
    handleScroll();
    
    // 스크롤 이벤트 리스너 등록
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  // 비즈니스 혁신 전략 섹션으로 스크롤
  const handleScrollToStrategy = () => {
    console.log('handleScrollToStrategy called'); // 디버깅용
    const strategySection = document.getElementById('investment-strategy-section');
    console.log('strategySection:', strategySection); // 디버깅용
    if (strategySection) {
      // 스크롤 컨테이너 찾기 (App.tsx의 motion.div)
      const scrollContainer = strategySection.closest('.overflow-y-auto');
      console.log('scrollContainer:', scrollContainer); // 디버깅용
      if (scrollContainer) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const sectionRect = strategySection.getBoundingClientRect();
        const targetY = sectionRect.top - containerRect.top + scrollContainer.scrollTop;
        console.log('Scrolling container to:', targetY); // 디버깅용
        scrollContainer.scrollTo({ 
          top: targetY, 
          behavior: 'smooth' 
        });
      } else {
        // 폴백: window 스크롤
        const rect = strategySection.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop;
        console.log('Scrolling window to:', targetY); // 디버깅용
        window.scrollTo({ 
          top: targetY, 
          behavior: 'smooth' 
        });
      }
    } else {
      console.log('Strategy section not found!'); // 디버깅용
    }
  };

  // 회사소개 페이지 열기 핸들러
  const handleOpenAboutPage = () => {
    setShowAboutPage(true);
  };

  // 서비스 페이지 열기 핸들러
  const handleOpenServicesPage = () => {
    setShowServicesPage(true);
  };

  return (
    <div ref={mainContainerRef} className="bg-white flex flex-col w-full min-h-screen" data-name="MAIN 화면">
      {/* 헤더는 항상 고정 표시 - 골재 구매 페이지에서는 흰색 배경 */}
      <div className={`fixed top-0 left-0 right-0 h-[100px] transition-all duration-300 z-30 ${showPurchasePage || isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-transparent'}`} />
      
      <Frame18 isScrolled={isScrolled} showPurchasePage={showPurchasePage} onAboutClick={handleOpenAboutPage} onServicesClick={handleOpenServicesPage} onMissionClick={onMissionClick} onVisionClick={onVisionClick} onTrendsClick={onTrendsClick} />
      <Ci onClick={onLogoClick} isScrolled={showPurchasePage || isScrolled} />
      <div className="hidden md:block fixed right-[60px] md:right-[80px] lg:right-[110px] xl:right-[148px] 2xl:right-[164px] top-[32px] z-50">
        <StaffButton onClick={onStaffAuth} />
      </div>
      <MobileCi showPurchasePage={showPurchasePage} isScrolled={isScrolled} onClick={onLogoClick} />
      <MobileMenu showPurchasePage={showPurchasePage} isScrolled={isScrolled} onAboutClick={handleOpenAboutPage} onServicesClick={handleOpenServicesPage} onMissionClick={onMissionClick} onVisionClick={onVisionClick} onTrendsClick={onTrendsClick} />
      <MobileStaffButton showPurchasePage={showPurchasePage} onClick={onStaffAuth} />

      {/* 본문: 골재 구매 페이지 또는 메인 콘텐츠 */}
      {showPurchasePage ? (
        <div className="pt-[100px] min-h-screen">
          <ThirdPartyPurchasePage 
            onBack={() => setShowPurchasePage(false)}
          />
        </div>
      ) : (
        <div className="relative flex-1">
          <Frame onLogoClick={onLogoClick} onScrollToStrategy={handleScrollToStrategy} />
          <InvestmentStrategySection onTrendsClick={onTrendsClick} isScrolling={isScrolling} />
          <BrandMotionSection />
          <ParkResidenceSection />
        </div>
      )}
      
      {!showPurchasePage && <Component7 />}
      <Toaster position="top-right" />

      {/* 회사소개 페이지 */}
      <AnimatePresence>
        {showAboutPage && (
          <AboutPage onClose={() => setShowAboutPage(false)} />
        )}
      </AnimatePresence>

      {/* 서비스 페이지 */}
      <AnimatePresence>
        {showServicesPage && (
          <ServicesPage onClose={() => setShowServicesPage(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
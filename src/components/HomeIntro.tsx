import svgPaths from "../imports/svg-dhwltl00y2";
import svgPathsSocial from "../imports/svg-iooyb64buu";
import imgImage7 from "figma:asset/dc80206819425424b07394d02d5f4daf1bdf9aa7.png";
import logoCenter from "figma:asset/64838244035b1abea6a9e8ff138ebcd48fb6a649.png";
import { Instagram } from "lucide-react";
import { useState, useEffect, useRef, forwardRef } from "react";
import { StaffSignupDialog } from "./StaffSignupDialog";
import { motion } from "motion/react";

interface HomeIntroProps {
  onEnterDashboard: () => void;
  onStaffAuth: () => void;
  onLogoClick?: () => void;
  onScrollToFooter?: () => void;
}

// 동영상 URL 설정
// YouTube 비디오 - 일부 공개/공개 모두 작동
// 원본: https://youtu.be/JLSiwvMx7uw
const YOUTUBE_VIDEO_ID = "JLSiwvMx7uw";

// 비디오 사용 여부 (true: YouTube 비디오, false: 그라디언트 배경)
const USE_VIDEO = true;

// YouTube IFrame Player API 타입 정의
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

function Component({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="block cursor-pointer relative size-[50px] transition-transform hover:scale-110" 
      data-name="이동버튼"
    >
      <div className="absolute bottom-[-1%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 51">
          <g id="이동버튼">
            <path d={svgPaths.p3a493780} fill="rgba(236, 236, 236, 0.3)" id="스타일 공간 버튼 우2" opacity="0.3" />
            <path d={svgPaths.p1cae7e80} fill="white" id="Line 5" />
          </g>
        </svg>
      </div>
    </button>
  );
}

function Ci({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`relative w-[90vw] max-w-[1199px] h-[80px] sm:h-[95px] md:h-[115px] ${onClick ? 'cursor-pointer transition-transform hover:scale-105' : ''}`}
      data-name="하이콘 CI로고"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src={logoCenter} 
          alt="HICON KOREA" 
          className="h-full w-auto object-contain opacity-50"
        />
      </div>
    </button>
  );
}

function Frame1({ onEnterDashboard, onLogoClick, onScrollToFooter }: { onEnterDashboard: () => void; onLogoClick?: () => void; onScrollToFooter?: () => void }) {
  const [hasVideo, setHasVideo] = useState(USE_VIDEO);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!USE_VIDEO || !hasVideo) return;

    // YouTube IFrame API 스크립트 로드
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // API 준비 콜백
    window.onYouTubeIframeAPIReady = () => {
      if (playerContainerRef.current) {
        playerRef.current = new window.YT.Player(playerContainerRef.current, {
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            enablejsapi: 1,
            // loop와 playlist 제거 - 수동으로 루프 처리
          },
          events: {
            onReady: (event: any) => {
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              // 비디오가 끝나면 처음으로 되돌리기
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(0);
                event.target.playVideo();
              }
            },
            onError: () => {
              console.warn('비디오 로드 실패 - 그라디언트 배경으로 전환합니다');
              setHasVideo(false);
            },
          },
        });
      }
    };

    // 이미 YT 객체가 로드되어 있다면 바로 실행
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [hasVideo]);

  return (
    <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[65vh] lg:h-[calc(100vh-30px)] max-w-[1920px] mx-auto flex items-center justify-center overflow-hidden">
      {/* 배경: YouTube 비디오 또는 그라디언트 */}
      {hasVideo && USE_VIDEO ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div
            ref={playerContainerRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ 
              filter: 'brightness(1.1)', // 원본보다 10% 더 밝게
              width: '177.78vh', // 16:9 비율 유지하며 높이에 맞춤
              height: '56.25vw', // 16:9 비율 유지하며 너비에 맞춤
              minWidth: '100%',
              minHeight: '100%',
            }}
          />
        </div>
      ) : (
        // 그라디언트 배경
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #0d9488 100%)',
          }}
        />
      )}
      
      {/* 오버레이 - 매우 연한 효과로 변경 */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      
      <div 
        className="hidden md:flex absolute flex-col font-['Noto_Sans:Display_Regular',_sans-serif] font-normal justify-center leading-[0] right-[calc(20%+90px)] opacity-75 text-[#b7b7b7] text-[12px] md:text-[13px] lg:text-[15px] text-nowrap top-[calc(55%+110px)] translate-y-[-50%] whitespace-pre z-10 pointer-events-none" 
        style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
      >
        <p className="leading-[normal] mb-0">FOR US</p>
        <p className="leading-[normal]">
          Nature Should Be Nature Itself. Yes, it is.
        </p>
      </div>
      <div className="absolute flex items-center justify-center left-1/2 -translate-x-1/2 bottom-[12%] z-10">
        <div className="flex-none rotate-[270deg]">
          <Component onClick={onScrollToFooter || onEnterDashboard} />
        </div>
      </div>
      <div className="absolute top-[calc(40%+30px)] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Ci onClick={onLogoClick} />
      </div>
    </div>
  );
}

function Frame532() {
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
      <Frame532 />
      <div className="h-[28px] relative shrink-0 w-full max-w-[250px] sm:max-w-[270px] md:max-w-[290px] lg:max-w-[296px]" data-name="image 7">
        <img alt="HICON KOREA Logo" className="absolute inset-0 w-full h-full object-contain object-left pointer-events-none" src={imgImage7} />
      </div>
    </div>
  );
}

function Frame511() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-0 md:pl-[60px] lg:pl-[110px] pr-0 py-0 relative shrink-0">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b7b7b7] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">하이콘코리아</p>
      </div>
    </div>
  );
}

function Frame185() {
  return (
    <div className="relative md:absolute content-stretch flex flex-col gap-[17px] items-start left-0 top-0 md:top-[23px] w-full md:w-[328px] mb-6 md:mb-0">
      <Component1 />
      <Frame511 />
    </div>
  );
}

function Frame189() {
  return (
    <div className="relative w-full md:w-auto">
      <div className="flex flex-col font-['Noto_Sans:Display_Light',_'Noto_Sans_KR:Light',_sans-serif] font-light justify-center leading-[0] text-[#b7b7b7] text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.5px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre-wrap md:whitespace-pre">
          <span className="font-['Gmarket_Sans_TTF:Bold',_'Noto_Sans_KR:Light',_sans-serif]" style={{ fontVariationSettings: "'wght' 300" }}>{`HICON KOREA `}</span>
          <span>{`    대표 : 조 동 희`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame190() {
  return (
    <div className="relative w-full md:w-auto">
      <div className="flex flex-col font-['Noto_Sans:Display_Light',_'Noto_Sans_KR:Light',_sans-serif] font-light justify-center leading-[0] text-[#b7b7b7] text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.5px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">{`사업자등록번호  143 81 04340`}</p>
      </div>
    </div>
  );
}

function Frame191() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[10px] md:gap-[30px] lg:gap-[50px] items-start md:items-center relative shrink-0 w-full md:w-auto">
      <Frame189 />
      <Frame190 />
    </div>
  );
}

function Frame192() {
  return (
    <div className="relative w-full md:w-auto">
      <div className="flex flex-col font-['Noto_Sans:Display_Light',_'Noto_Sans_KR:Light',_sans-serif] font-light justify-center leading-[0] text-[#b7b7b7] text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.5px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre-wrap md:whitespace-pre">본사 : 경기도 화성시 팔탄면 버들로 1261</p>
      </div>
    </div>
  );
}

function Frame194() {
  return (
    <div className="relative md:absolute content-stretch flex flex-col gap-[4px] items-start left-0 md:left-auto md:right-0 lg:left-[444px] top-0 md:top-[56px] w-full md:w-auto mb-6 md:mb-0">
      <Frame191 />
      <Frame192 />
    </div>
  );
}

function Frame187() {
  return (
    <div className="relative md:absolute h-auto md:h-[33px] left-0 md:left-auto md:right-0 lg:left-[444px] top-0 md:top-[22px] w-full md:w-auto mb-4 md:mb-0">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic text-[#b7b7b7] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] tracking-[0.75px]">
        <p className="leading-[1.5] whitespace-pre">kakao chanel talk</p>
      </div>
    </div>
  );
}

function Frame186() {
  return (
    <div className="relative md:absolute content-stretch flex flex-wrap md:flex-nowrap font-['Gmarket_Sans_TTF:Medium',_sans-serif] gap-[20px] md:gap-[60px] lg:gap-[90px] xl:gap-[120px] items-center leading-[0] left-0 md:left-auto md:right-0 lg:left-[444px] not-italic text-[#b7b7b7] text-[10px] sm:text-[11px] md:text-[12px] text-nowrap top-0 mb-4 md:mb-0">
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

function Group31() {
  return (
    <div className="hidden md:block absolute left-0 size-[7px] top-[249px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        <g id="Group 31">
          <path clipRule="evenodd" d={svgPaths.pf0fcb00} fill="#B7B7B7" fillRule="evenodd" id="Ellipse 4 (Stroke)" />
          <path d={svgPaths.p3fc5b080} fill="#B7B7B7" id="C" />
        </g>
      </svg>
    </div>
  );
}

function NaverLogo() {
  return (
    <div className="absolute inset-[27.17%_25.17%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
        <g id="Group 134">
          <path d={svgPathsSocial.p9cb6200} fill="#B7B7B7" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NaverIcon() {
  return (
    <button className="h-[40px] overflow-clip relative shrink-0 w-[39px] cursor-pointer hover:opacity-80 transition-opacity" data-name="네이버로고">
      <NaverLogo />
    </button>
  );
}

function KakaoSVG() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[39.252px]" data-name="카톡로고">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="카톡로고">
          <path d={svgPathsSocial.p27516100} fill="#B7B7B7" id="Polygon 1" stroke="#B7B7B7" strokeLinejoin="round" />
          <path d={svgPathsSocial.p21ab5c80} fill="#B7B7B7" id="Exclude" />
        </g>
      </svg>
    </div>
  );
}

function KakaoIcon() {
  return (
    <button className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="카톡로고">
      <KakaoSVG />
    </button>
  );
}

function InstagramIcon() {
  return (
    <button className="h-[40px] w-[39px] flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity" data-name="인스타로고">
      <Instagram className="w-6 h-6 text-[#B7B7B7] stroke-[1.5]" />
    </button>
  );
}

function PinterestIcon() {
  return (
    <button className="h-[40px] w-[39px] flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity" data-name="핀터레스트로고">
      <svg 
        viewBox="0 0 24 24" 
        className="w-6 h-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.744 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" 
          fill="#B7B7B7"
        />
      </svg>
    </button>
  );
}

function Frame184() {
  return (
    <div className="absolute content-stretch flex gap-[15px] h-[52px] items-center justify-end left-[calc(50%-29px)] top-[173px] translate-x-[-50%] w-[700px]">
      <NaverIcon />
      <KakaoIcon />
      <InstagramIcon />
      <PinterestIcon />
    </div>
  );
}

function Frame195() {
  return (
    <div className="relative md:absolute h-auto min-h-[315px] md:h-[315px] left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-[235px] w-full max-w-[1106px] px-4 md:px-8 lg:px-12 py-6 md:py-8 flex flex-col md:block">
      <Frame185 />
      <Frame194 />
      <Frame187 />
      <Frame186 />
      <div className="hidden md:block absolute h-px left-0 top-[153px] w-full" data-name="Line 17 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1106 1">
          <path clipRule="evenodd" d="M1106 1H0V0H1106V1Z" fill="#B7B7B7" fillRule="evenodd" id="Line 17 (Stroke)" />
        </svg>
      </div>
      <div className="hidden md:block absolute flex flex-col font-['Gmarket_Sans_TTF:Light',_sans-serif] justify-center leading-[0] left-0 not-italic text-[#b7b7b7] text-[8px] sm:text-[9px] md:text-[10px] text-nowrap top-[261px] translate-y-[-50%]">
        <p className="leading-[1.4] whitespace-pre">{`Copyright  All rights  reserved`}</p>
      </div>
      <div className="block md:hidden mt-6 text-center">
        <p className="font-['Gmarket_Sans_TTF:Light',_sans-serif] text-[#b7b7b7] text-[8px]">Copyright All rights reserved</p>
      </div>
      <Group31 />
      <div className="hidden md:flex absolute content-stretch gap-[10px] sm:gap-[12px] md:gap-[15px] h-[40px] sm:h-[46px] md:h-[52px] items-center justify-end left-1/2 -translate-x-1/2 top-[173px] w-[500px] sm:w-[600px] md:w-[700px]">
        <NaverIcon />
        <KakaoIcon />
        <InstagramIcon />
        <PinterestIcon />
      </div>
      <div className="block md:hidden mt-6">
        <div className="flex gap-[15px] items-center justify-center">
          <div className="h-[30px] overflow-clip relative shrink-0 w-[28px]"><NaverLogo /></div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"><div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[28px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40"><g id="카톡로고"><path d={svgPathsSocial.p27516100} fill="#B7B7B7" id="Polygon 1" stroke="#B7B7B7" strokeLinejoin="round" /><path d={svgPathsSocial.p21ab5c80} fill="#B7B7B7" id="Exclude" /></g></svg></div></div>
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[7px] relative shrink-0 w-[28px]"><Instagram className="size-[18px] text-[#B7B7B7]" strokeWidth={1.5} /></div>
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-[28px]"><svg className="size-[20px]" viewBox="0 0 24 24" fill="none" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.744 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg></div>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="relative bg-white w-full max-w-[1920px] mx-auto min-h-[400px] h-auto md:h-[550px] flex flex-col items-center justify-end overflow-auto px-4 md:px-8" data-name="푸터 바탕">
      <Frame195 />
    </div>
  );
}

function Component9() {
  return <div className="relative bg-white w-full max-w-[1920px] mx-auto h-[60px]" data-name="푸터 바탕" />;
}

function Frame370() {
  return (
    <div className="absolute backdrop-blur-[6px] backdrop-filter h-[47px] left-0 opacity-[0.35] rounded-[500px] top-0 w-[135px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 47">
        <foreignObject height="55" width="143" x="-4" y="-4">
          <div style={{ backdropFilter: "blur(2px)", clipPath: "url(#bgblur_0_36_901_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
        </foreignObject>
        <path d={svgPaths.p38197a40} data-figma-bg-blur-radius="4" fill="black" fillOpacity="0.25" id="Rectangle 21" opacity="0.5" />
        <defs>
          <clipPath id="bgblur_0_36_901_clip_path" transform="translate(4 4)">
            <path d={svgPaths.p38197a40} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame371() {
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
      className="hidden lg:block absolute left-auto right-[5%] xl:left-[1403px] xl:right-auto top-[63px] backdrop-blur-[10px] hover:backdrop-blur-[20px] backdrop-filter h-[47px] w-[135px] rounded-full cursor-pointer hover:scale-105 hover:bg-white/10 transition-all duration-300 z-50 overflow-hidden group border border-white/20 shadow-lg" 
      data-name="staff button"
    >
      <Frame370 />
      <Frame371 />
      {/* 호버시 추가 유리 효과 레이어 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/15 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full" />
      {/* 유리 광택 효과 */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-30 pointer-events-none rounded-t-full" />
    </button>
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
      className="lg:hidden fixed right-0 top-[102px] z-50 h-[48px] w-[56px] rounded-l-full backdrop-blur-[10px] hover:backdrop-blur-[20px] backdrop-filter border-l border-t border-b border-white/20 shadow-lg hover:w-[64px] hover:bg-white/10 transition-all duration-300 flex items-center justify-center group overflow-hidden"
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

export const HomeIntro = forwardRef<HTMLDivElement, HomeIntroProps>(
  ({ onEnterDashboard, onStaffAuth, onLogoClick, onScrollToFooter }, ref) => {
    const [showSignupDialog, setShowSignupDialog] = useState(false);

    // Staff 버튼 클릭 핸들러
    const handleStaffButtonClick = () => {
      // 등록된 직원이 있는지 확인
      const registeredStaff = JSON.parse(localStorage.getItem("registeredStaff") || "[]");
      
      if (registeredStaff.length > 0) {
        // 이미 가입된 직원이 있으면 로그인 화면으로 이동
        onStaffAuth();
      } else {
        // 가입된 직원이 없으면 회원가입 팝업 표시
        setShowSignupDialog(true);
      }
    };

    // 회원가입 완료 핸들러
    const handleSignupComplete = (staffData: { name: string; employeeId: string }) => {
      // 회원가입 성공 알림
      alert(`${staffData.name}님, 회원가입이 완료되었습니다!`);
      // 로그인 화면으로 이동
      onStaffAuth();
    };

    return (
      <div 
        ref={ref}
        className="bg-white relative w-screen h-screen overflow-x-hidden overflow-y-auto" 
        data-name="HOME INTRO화면"
      >
        <div className="relative w-full min-h-screen flex flex-col items-center">
          <Frame1 onEnterDashboard={onEnterDashboard} onLogoClick={onLogoClick} onScrollToFooter={onScrollToFooter} />
          <Component8 />
          <Component9 />
          <StaffButton onClick={handleStaffButtonClick} />
          <MobileStaffButton onClick={handleStaffButtonClick} />
        </div>

        {/* 회원가입 팝업 */}
        <StaffSignupDialog 
          open={showSignupDialog}
          onOpenChange={setShowSignupDialog}
          onSignupComplete={handleSignupComplete}
        />
      </div>
    );
  }
);

HomeIntro.displayName = 'HomeIntro';

export default HomeIntro;
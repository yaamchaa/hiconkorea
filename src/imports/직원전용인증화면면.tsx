import svgPaths from "./svg-7fxmxes9ri";
import imgImage7 from "figma:asset/dc80206819425424b07394d02d5f4daf1bdf9aa7.png";
import imgImage6 from "figma:asset/6a398b2390720386e6fd6048e501f78ed8e80a77.png";

function Frame518() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-[300px]">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[17px] text-nowrap tracking-[0.51px]">
        <p className="leading-[1.5] whitespace-pre">직원명 :</p>
      </div>
    </div>
  );
}

function Frame519() {
  return (
    <div className="box-border content-stretch flex h-[40px] items-center pl-[30px] pr-0 py-0 relative shrink-0 w-[300px]">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[17px] text-nowrap tracking-[0.51px]">
        <p className="leading-[1.5] whitespace-pre">사원번호 :</p>
      </div>
    </div>
  );
}

function Frame522() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0">
      <Frame518 />
      <Frame519 />
    </div>
  );
}

function Frame526() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[11px] text-nowrap tracking-[0.11px]">
        <p className="leading-[1.5] whitespace-pre">Go task</p>
      </div>
    </div>
  );
}

function Frame525() {
  return (
    <div className="relative shrink-0 size-[11.021px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame 525">
          <circle cx="5.51068" cy="5.51068" id="Ellipse 3" r="3.75" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="0.5" transform="rotate(31.9464 5.51068 5.51068)" />
          <path d={svgPaths.p397d6e00} fill="var(--stroke-0, #D9D9D9)" id="Arrow 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame527() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center left-[14px] top-[4px]">
      <Frame526 />
      <Frame525 />
    </div>
  );
}

function Frame524() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 top-0 w-[100px]">
      <div className="bg-[#3b3b3b] h-[25px] rounded-[100px] shrink-0 w-full" />
      <Frame527 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[26px] left-0 top-0 w-[99px]" data-name="직원인증 버튼">
      <Frame524 />
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[26px] relative shrink-0 w-[99px]" data-name="확인 버튼">
      <Component />
    </div>
  );
}

function Frame523() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#191919] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Frame522 />
      <Component2 />
    </div>
  );
}

function Frame529() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start px-[30px] py-0 relative w-full">
          <Frame523 />
        </div>
      </div>
    </div>
  );
}

function Component3P() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.55)] box-border content-stretch flex flex-col gap-[11px] items-start left-[367px] opacity-[0.85] pb-[30px] pt-[17px] px-[185px] rounded-[5px] top-[627px] w-[1186px]" data-name="3p 고객정보입력">
      <Frame529 />
    </div>
  );
}

function Frame515() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start justify-center left-[552px] pb-[15px] pt-0 px-[30px] top-[564px]">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[25px] text-nowrap text-white tracking-[0.75px]">
        <p className="[text-indent:calc(-11.25px)] leading-[1.5] whitespace-pre">“하이콘코리아” 직원을 위한 공간 입니다.</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[845px] left-1/2 top-0 translate-x-[-50%] w-[1920px]" data-name="1. 홈 화면 배경">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/6f1b897613a74dd36f78026e2e500acfe8cb2828" />
      </video>
      <Component3P />
      <Frame515 />
    </div>
  );
}

function Frame531() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="-webkit-box css-1s94jm flex-col font-['Gmarket_Sans_TTF:Light',_sans-serif] justify-end leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191919] text-[12px] text-nowrap tracking-[0.48px]">
        <p className="leading-[1.4] whitespace-pre">{`위 내용을 확인 하였으며,  본인(사원)에게 인증 문자가 전달 됩니다.`}</p>
      </div>
    </div>
  );
}

function Frame533() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[639px] top-[864px] w-[642px]">
      <Frame531 />
    </div>
  );
}

function Frame189() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] relative shrink-0 text-[#b7b7b7] text-[10px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[1.5] whitespace-pre">{`주식회사 하이콘코리아              대표 : 조 동 희`}</p>
      </div>
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] relative shrink-0 text-[#b7b7b7] text-[10px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[1.5] whitespace-pre">{`사업자등록번호  143 81 04340`}</p>
      </div>
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] relative shrink-0 text-[#b7b7b7] text-[10px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[1.5] whitespace-pre">본사 : 경기도 화성시 팔탄면 버들로 1261</p>
      </div>
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[10px] text-nowrap tracking-[0.4px]">
        <p className="leading-[1.4] whitespace-pre">회사규칙안내</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="basis-0 box-border content-between flex flex-wrap gap-[30px] grow items-start min-h-px min-w-px pb-0 pt-px px-0 relative shrink-0" data-name="맴버 사업자 정보">
      <Frame189 />
      <Frame190 />
      <Frame192 />
      <Frame193 />
    </div>
  );
}

function Component4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="푸터 맴버사 등록">
      <div className="size-full">
        <div className="box-border content-between flex flex-wrap gap-[100px] items-start pl-[188px] pr-0 py-0 relative w-full">
          <div className="h-[28px] relative shrink-0 w-[296px]" data-name="image 7">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
          </div>
          <Component3 />
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-start justify-center left-[212px] overflow-auto pb-[44px] pt-[100px] px-0 top-[961px] w-[1535px]" data-name="푸터 바탕">
      <Component4 />
    </div>
  );
}

function Ci() {
  return (
    <div className="absolute h-[115px] left-[360px] top-[346px] w-[1199px]" data-name="하이콘 CI로고">
      <div className="absolute inset-0 opacity-50" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

export default function Component6() {
  return (
    <div className="bg-white relative size-full" data-name="직원전용인증화면면">
      <Component1 />
      <Frame533 />
      <Component5 />
      <Ci />
    </div>
  );
}
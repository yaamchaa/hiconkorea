import { useState } from "react";
import svgPaths from "../imports/svg-7fxmxes9ri";
import imgImage7 from "figma:asset/dc80206819425424b07394d02d5f4daf1bdf9aa7.png";
import imgImage6 from "figma:asset/6a398b2390720386e6fd6048e501f78ed8e80a77.png";
import { YouTubeBackground } from "./YouTubeBackground";

interface StaffAuthProps {
  onBack: () => void;
  onAuthComplete: () => void;
}

function Frame518({ value, onChange, onEnter }: { value: string; onChange: (v: string) => void; onEnter: () => void }) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onEnter();
    }
  };

  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full md:w-[300px]">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[14px] md:text-[17px] text-nowrap tracking-[0.51px] mr-2 md:mr-3 w-[85px] md:w-auto">
        <p className="leading-[1.5] whitespace-pre">직원명 :</p>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 h-full px-3 border border-gray-300 rounded focus:outline-none focus:border-teal-600 text-[14px] md:text-[15px]"
        placeholder="이름 입력"
      />
    </div>
  );
}

function Frame519({ value, onChange, onEnter }: { value: string; onChange: (v: string) => void; onEnter: () => void }) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onEnter();
    }
  };

  return (
    <div className="box-border content-stretch flex h-[40px] items-center pl-0 md:pl-[30px] pr-0 py-0 relative shrink-0 w-full md:w-[300px]">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[14px] md:text-[17px] text-nowrap tracking-[0.51px] mr-2 md:mr-3 w-[85px] md:w-auto">
        <p className="leading-[1.5] whitespace-pre">사원번호 :</p>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 h-full px-3 border border-gray-300 rounded focus:outline-none focus:border-teal-600 text-[14px] md:text-[15px]"
        placeholder="사원번호 입력"
      />
    </div>
  );
}

function Frame522({ 
  nameValue, 
  employeeIdValue, 
  onNameChange, 
  onEmployeeIdChange,
  onSubmit
}: { 
  nameValue: string; 
  employeeIdValue: string; 
  onNameChange: (v: string) => void; 
  onEmployeeIdChange: (v: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-4 md:gap-0 md:h-[60px] items-center justify-center relative shrink-0 w-full">
      <Frame518 value={nameValue} onChange={onNameChange} onEnter={onSubmit} />
      <Frame519 value={employeeIdValue} onChange={onEmployeeIdChange} onEnter={onSubmit} />
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

function AuthButton({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`h-[26px] relative shrink-0 w-[99px] transition-transform ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'
      }`}
      data-name="직원인증 버튼"
    >
      <Frame524 />
    </button>
  );
}

function Frame523({ 
  nameValue, 
  employeeIdValue, 
  onNameChange, 
  onEmployeeIdChange,
  onSubmit 
}: { 
  nameValue: string; 
  employeeIdValue: string; 
  onNameChange: (v: string) => void; 
  onEmployeeIdChange: (v: string) => void;
  onSubmit: () => void;
}) {
  const isDisabled = !nameValue || !employeeIdValue;
  
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-4 md:gap-[36px] items-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#191919] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Frame522 
        nameValue={nameValue}
        employeeIdValue={employeeIdValue}
        onNameChange={onNameChange}
        onEmployeeIdChange={onEmployeeIdChange}
        onSubmit={onSubmit}
      />
      <AuthButton onClick={onSubmit} disabled={isDisabled} />
    </div>
  );
}

function Frame529({ 
  nameValue, 
  employeeIdValue, 
  onNameChange, 
  onEmployeeIdChange,
  onSubmit 
}: { 
  nameValue: string; 
  employeeIdValue: string; 
  onNameChange: (v: string) => void; 
  onEmployeeIdChange: (v: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start px-4 md:px-[30px] py-0 relative w-full">
          <Frame523 
            nameValue={nameValue}
            employeeIdValue={employeeIdValue}
            onNameChange={onNameChange}
            onEmployeeIdChange={onEmployeeIdChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}

function Component3P({ 
  nameValue, 
  employeeIdValue, 
  onNameChange, 
  onEmployeeIdChange,
  onSubmit 
}: { 
  nameValue: string; 
  employeeIdValue: string; 
  onNameChange: (v: string) => void; 
  onEmployeeIdChange: (v: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div 
      className="absolute bg-[rgba(255,255,255,0.55)] box-border content-stretch flex flex-col gap-[11px] items-start 
                 left-4 right-4 md:left-[367px] md:right-auto md:w-[1186px] 
                 opacity-[0.85] pb-[30px] pt-[17px] px-4 md:px-[185px] rounded-[5px] 
                 top-[400px] md:top-[627px]" 
      data-name="3p 고객정보입력"
    >
      <Frame529 
        nameValue={nameValue}
        employeeIdValue={employeeIdValue}
        onNameChange={onNameChange}
        onEmployeeIdChange={onEmployeeIdChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

function Frame515() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start justify-center 
                    left-4 right-4 md:left-[552px] md:right-auto 
                    pb-[15px] pt-0 px-4 md:px-[30px] 
                    top-[320px] md:top-[564px]">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 
                      text-[18px] md:text-[25px] text-center md:text-left text-nowrap text-white tracking-[0.75px]">
        <p className="leading-[1.5] whitespace-pre md:[text-indent:calc(-11.25px)]">"하이콘코리아" 직원을 위한 공간 입니다.</p>
      </div>
    </div>
  );
}

function BackgroundVideo({ 
  nameValue, 
  employeeIdValue, 
  onNameChange, 
  onEmployeeIdChange,
  onSubmit 
}: { 
  nameValue: string; 
  employeeIdValue: string; 
  onNameChange: (v: string) => void; 
  onEmployeeIdChange: (v: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="absolute h-[600px] md:h-[calc(845px-30px)] left-1/2 top-0 translate-x-[-50%] w-full md:w-[1920px]" data-name="1. 홈 화면 배경">
      <YouTubeBackground videoId="f7W2SJl2zW4" brightness={1.1} />
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      <Component3P 
        nameValue={nameValue}
        employeeIdValue={employeeIdValue}
        onNameChange={onNameChange}
        onEmployeeIdChange={onEmployeeIdChange}
        onSubmit={onSubmit}
      />
      <Frame515 />
    </div>
  );
}

function Frame531() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="-webkit-box css-1s94jm flex-col font-['Gmarket_Sans_TTF:Light',_sans-serif] justify-end leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191919] text-[10px] md:text-[12px] text-center md:text-left text-nowrap tracking-[0.48px]">
        <p className="leading-[1.4] whitespace-pre-wrap md:whitespace-pre">{`위 내용을 확인 하였으며,  본인(사원)에게 인증 문자가 전달 됩니다.`}</p>
      </div>
    </div>
  );
}

function Frame533() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center 
                    left-4 right-4 md:left-[639px] md:right-auto md:w-[642px] 
                    top-[560px] md:top-[864px] px-4 md:px-0">
      <Frame531 />
    </div>
  );
}

function Frame189() {
  return (
    <div className="content-stretch flex gap-[10px] h-auto md:h-[23px] items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] relative shrink-0 text-[#b7b7b7] text-[8px] md:text-[10px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[1.5] whitespace-pre">{`주식회사 하이콘코리아              대표 : 조 동 희`}</p>
      </div>
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex gap-[10px] h-auto md:h-[23px] items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] relative shrink-0 text-[#b7b7b7] text-[8px] md:text-[10px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[1.5] whitespace-pre">{`사업자등록번호  143 81 04340`}</p>
      </div>
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex gap-[10px] h-auto md:h-[23px] items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] relative shrink-0 text-[#b7b7b7] text-[8px] md:text-[10px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[1.5] whitespace-pre">본사 : 경기도 화성시 팔탄면 버들로 1261</p>
      </div>
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex gap-[10px] h-auto md:h-[23px] items-center relative shrink-0">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[8px] md:text-[10px] text-nowrap tracking-[0.4px]">
        <p className="leading-[1.4] whitespace-pre">회사규칙안내</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="basis-0 box-border content-between flex flex-wrap gap-[15px] md:gap-[30px] grow items-start min-h-px min-w-px pb-0 pt-px px-0 relative shrink-0" data-name="맴버 사업자 정보">
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
        <div className="box-border content-between flex flex-col md:flex-row flex-wrap gap-[20px] md:gap-[100px] items-center md:items-start pl-4 md:pl-[188px] pr-4 md:pr-0 py-0 relative w-full">
          <div className="h-[20px] md:h-[28px] relative shrink-0 w-[70vw] max-w-[200px] md:w-[296px] md:max-w-none" data-name="image 7">
            <img alt="HICON KOREA Logo" className="absolute inset-0 w-full h-full object-contain md:object-cover pointer-events-none" src={imgImage7} />
          </div>
          <Component3 />
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-start justify-center 
                    left-0 right-0 md:left-1/2 md:right-auto md:-translate-x-1/2 
                    overflow-auto pb-[30px] md:pb-[44px] pt-[50px] md:pt-[100px] px-0 
                    top-[620px] md:top-[961px] 
                    w-full md:w-[1535px]" 
         data-name="푸터 바탕">
      <Component4 />
    </div>
  );
}

function Ci({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`absolute h-[60px] md:h-[115px] left-1/2 -translate-x-1/2 
                  top-[200px] md:top-[346px] 
                  w-[85vw] max-w-[280px] md:w-[1199px] md:max-w-none
                  ${onClick ? 'cursor-pointer transition-transform hover:scale-105 z-20' : ''}`}
      data-name="하이콘 CI로고"
    >
      <div className="absolute inset-0 opacity-50 pointer-events-none" data-name="image 6">
        <img alt="HICON KOREA" className="absolute inset-0 w-full h-full object-contain md:object-cover pointer-events-none" src={imgImage6} />
      </div>
    </button>
  );
}

export default function StaffAuth({ onBack, onAuthComplete }: StaffAuthProps) {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const handleSubmit = () => {
    if (employeeName && employeeId) {
      // 하드코딩된 계정 확인 (하이콘 / 2012)
      if (employeeName === "하이콘" && employeeId === "2012") {
        // 하드코딩된 계정으로 로그인 성공
        const staffData = {
          name: "하이콘",
          employeeId: "2012",
          position: "관리자",
          department: "경영지원팀"
        };
        localStorage.setItem("currentStaff", JSON.stringify(staffData));
        alert(`${employeeName}님, 환영합니다!`);
        onAuthComplete();
        return;
      }
      
      // 등록된 직원 정보 확인
      const registeredStaff = JSON.parse(localStorage.getItem("registeredStaff") || "[]");
      
      // 직원명과 사원번호가 일치하는지 확인
      const staff = registeredStaff.find(
        (s: any) => s.name === employeeName && s.employeeId === employeeId
      );

      if (staff) {
        // 로그인 성공
        localStorage.setItem("currentStaff", JSON.stringify(staff));
        alert(`${employeeName}님, 환영합니다!`);
        onAuthComplete();
      } else {
        // 로그인 실패
        alert("등록되지 않은 직원 정보입니다.\\n회원가입을 먼저 진행해주세요.");
      }
    }
  };

  return (
    <div className="bg-white relative w-screen h-screen overflow-x-hidden overflow-y-auto" data-name="직원전용인증화면면">
      <div className="relative w-full min-h-screen flex flex-col items-center">
        <BackgroundVideo 
          nameValue={employeeName}
          employeeIdValue={employeeId}
          onNameChange={setEmployeeName}
          onEmployeeIdChange={setEmployeeId}
          onSubmit={handleSubmit}
        />
        <Frame533 />
        <Component5 />
        <Ci onClick={onBack} />
      </div>
    </div>
  );
}
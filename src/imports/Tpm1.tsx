import svgPaths from "./svg-00p98ux9i6";

function Heading1() {
  return <div className="h-[32px] shrink-0 w-full" data-name="Heading 1" />;
}

function Paragraph() {
  return <div className="h-[17.5px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container() {
  return (
    <div className="h-[53px] relative shrink-0 w-[322.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.5px] h-[53px] items-start relative w-[322.094px]">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#bf0009] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[29px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29px] items-center justify-center relative">
        <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#bf0009] text-[0px] w-[54px]">
          <span className="text-[40px]">A</span>
          <span className="text-[12.25px]">{` Line`}</span>
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[29px] relative shrink-0 w-[75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[29px] items-center relative w-[75px]">
        <Container1 />
        <Text />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f0c63c] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[29px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29px] items-center justify-center relative">
        <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#d8d8d9] text-[0px] w-[54px]">
          <span className="text-[40px]">B</span>
          <span className="text-[12.25px]">{` Line`}</span>
        </p>
      </div>
    </div>
  );
}

function B() {
  return (
    <div className="relative shrink-0" data-name="B">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] items-center relative">
        <Container3 />
        <Text1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#247129] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[29px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29px] items-center justify-center relative">
        <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#d8d8d9] text-[0px] text-nowrap whitespace-pre">
          <span className="text-[40px]">C</span>
          <span className="text-[12.25px]">{` Line`}</span>
        </p>
      </div>
    </div>
  );
}

function C() {
  return (
    <div className="relative shrink-0" data-name="C">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] items-center relative">
        <Container4 />
        <Text2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[100px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[23px] items-center px-[30px] py-[10px] relative">
        <Container2 />
        <B />
        <C />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[916.656px] h-[53px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[82px] relative shrink-0 w-[1784px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[82px] items-start pb-px pt-[14px] px-[21px] relative w-[1784px]">
        <Container6 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M4.66667 1.16667V3.5" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.66667 8.16667H4.6725" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 8.16667H7.00583" id="Vector_6" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 8.16667H9.33917" id="Vector_7" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.66667 10.5H4.6725" id="Vector_8" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 10.5H7.00583" id="Vector_9" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 10.5H9.33917" id="Vector_10" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Frame1321() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">PM/유지보전관리 일정</p>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[24px] items-center px-[5px] py-[3px] relative rounded-[12.75px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <Icon />
      <Frame1321 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pfab8980} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.73666 4.73667L7 7" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p35204680} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2d33bc00} id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p10bc93c0} id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="box-border content-stretch flex gap-[13px] items-center px-[5px] py-[3px] relative rounded-[12.75px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <Icon1 />
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">MP/개선,개량일정</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_104_4510)" id="Icon">
          <path d={svgPaths.p28ad48f0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1ad2ef00} fill="var(--fill-0, #0A0A0A)" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p31d77900} fill="var(--fill-0, #0A0A0A)" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2f386100} fill="var(--fill-0, #0A0A0A)" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p41ae980} fill="var(--fill-0, #0A0A0A)" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_104_4510">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="box-border content-stretch flex gap-[21px] items-center px-[5px] py-[3px] relative rounded-[12.75px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <Icon2 />
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">TPM 교육일정</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p317fdd80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2f54f800} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p11e2cd80} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p31c78b80} id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="box-border content-stretch flex gap-[27px] items-center px-[5px] py-[3px] relative rounded-[12.75px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <Icon3 />
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">직원근무 / 휴무 계획</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p16dcb0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p29a9aa00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p9f2bd80} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p13c0200} id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="box-border content-stretch flex gap-[30px] items-center px-[5px] py-[4px] relative rounded-[12.75px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <Icon4 />
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">BM 고장수리내역</p>
    </div>
  );
}

function Tpm() {
  return (
    <div className="bg-[rgba(236,236,240,0.3)] relative rounded-[12.75px] shrink-0" data-name="TPM 계획">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[78px] items-center p-[3px] relative">
        <PrimitiveButton />
        <PrimitiveButton1 />
        <PrimitiveButton2 />
        <PrimitiveButton3 />
        <PrimitiveButton4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M12.25 12.25L9.71833 9.71834" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p8cdb700} id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 bg-[#f3f3f5] grow h-[31.5px] min-h-px min-w-px relative rounded-[6.75px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.5px] items-center px-[10.5px] py-[3.5px] relative w-full">
          <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">{`검색 : `}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[31.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[31.5px] items-center relative w-full">
        <Icon5 />
        <Input />
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[21.203px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center overflow-clip relative rounded-[inherit] w-[21.203px]">
        <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">구분</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon" opacity="0.5">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="bg-[#f3f3f5] h-[31.5px] relative rounded-[6.75px] shrink-0 w-[112px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.5px] items-center justify-between px-[11.5px] py-px relative w-[112px]">
        <PrimitiveSpan />
        <Icon6 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-[371px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[14px] h-[31.5px] items-center relative w-[371px]">
        <Container8 />
        <PrimitiveButton5 />
      </div>
    </div>
  );
}

function Frame1320() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[93px]">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">2025년: 100%</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <Frame1320 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 w-[14px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[3px] py-0 relative rounded-[inherit] w-[14px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[12.25px] text-black w-full">9</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.75px] shrink-0 w-[33.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-center justify-center p-px relative w-[33.5px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 w-[14px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit] w-[14px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#aaa7a7] text-[12.25px] w-full">10</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.75px] shrink-0 w-[33.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-center justify-center p-px relative w-[33.5px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p17c47b00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p9995160} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.75px] shrink-0 w-[33.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-center justify-center p-px relative w-[33.5px]">
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "14", "--transform-inner-height": "14" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <Icon9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p19bdf890} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2916a880} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.75px] shrink-0 w-[33.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-center justify-center p-px relative w-[33.5px]">
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "14", "--transform-inner-height": "14" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <Icon10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[28px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[28px] items-center px-[8px] py-0 relative">
        <Text3 />
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(236,236,240,0.3)] h-[61px] rounded-tl-[8.75px] rounded-tr-[8.75px] shrink-0 sticky top-0 w-[1786px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-tl-[8.75px] rounded-tr-[8.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[61px] items-center justify-between pb-px pt-0 px-[14px] relative w-[1786px]">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">생산설비라인</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#eceef2] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[57.031px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[57.031px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#030213] text-[10.5px] text-nowrap whitespace-pre">26 Items</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[19.5px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[30px] h-[19.5px] items-center relative">
        <Text4 />
        <Badge />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">26 생산설비 / installation</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center relative">
        <Container13 />
        <Text5 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f0c63c] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">78 in 자재 / Componentmechanical</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center relative">
        <Container15 />
        <Text6 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#060d92] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">357 부품,부속 / part,component</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[71.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center relative w-[71.781px]">
        <Container17 />
        <Text7 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[58px] h-[17.5px] items-center relative w-full">
        <Container14 />
        <Container16 />
        <Container18 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M4.66667 1.16667V3.5" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">2025/09/22</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[84.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center relative w-[84.688px]">
        <Icon11 />
        <Text8 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white h-[41px] shrink-0 sticky top-0 w-[1786px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[48px] h-[41px] items-center pb-px pl-[135px] pr-[14px] pt-0 relative w-[1786px]">
        <Container12 />
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center pl-[25px] pr-0 py-0 relative size-full">
          <p className="font-['Arial:Bold',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[0px] text-neutral-950 text-nowrap whitespace-pre">
            <span className="text-[20px]">A</span>
            <span className="text-[14px]">{` Line`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-end justify-center pl-0 pr-[30px] py-0 relative size-full">
          <p className="font-['Arial:Bold',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">9 Sept.</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[rgba(236,236,240,0.3)] h-[56px] relative shrink-0 w-[335px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[56px] items-center justify-between pb-px pl-[70px] pr-0 pt-0 relative w-[335px]">
        <Heading3 />
        <Heading4 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex h-[55px] items-center justify-center left-0 pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#e7000b] text-[10.5px] text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex h-[55px] items-center justify-center left-[40px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#e7000b] text-[10.5px] text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[80px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">3</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[120px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">4</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[160px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">5</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[200px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">6</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[240px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">7</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex h-[55px] items-center justify-center left-[280px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#e7000b] text-[10.5px] text-nowrap whitespace-pre">8</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex h-[55px] items-center justify-center left-[320px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#e7000b] text-[10.5px] text-nowrap whitespace-pre">9</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[360px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">10</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[400px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">11</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[440px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">12</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[480px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">13</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[520px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">14</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex h-[55px] items-center justify-center left-[560px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#e7000b] text-[10.5px] text-nowrap whitespace-pre">15</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex h-[55px] items-center justify-center left-[600px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#e7000b] text-[10.5px] text-nowrap whitespace-pre">16</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[640px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">17</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[680px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">18</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[720px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">19</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[760px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">20</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[800px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">21</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex h-[55px] items-center justify-center left-[840px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#e7000b] text-[10.5px] text-nowrap whitespace-pre">22</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex h-[55px] items-center justify-center left-[880px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#e7000b] text-[10.5px] text-nowrap whitespace-pre">23</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[920px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">24</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[960px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">25</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[1000px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">26</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[1040px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">27</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute box-border content-stretch flex h-[55px] items-center justify-center left-[1080px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">28</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex h-[55px] items-center justify-center left-[1120px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#e7000b] text-[10.5px] text-nowrap whitespace-pre">29</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex h-[55px] items-center justify-center left-[1160px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#e7000b] text-[10.5px] text-nowrap whitespace-pre">30</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-[#fafafb] box-border content-stretch flex h-[55px] items-center justify-center left-[1200px] pl-0 pr-px py-0 top-0 w-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-neutral-950 text-nowrap whitespace-pre">31</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[55px] relative shrink-0 w-[1448px]" data-name="Container">
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="basis-0 bg-[rgba(236,236,240,0.3)] grow h-[56px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[56px] items-start overflow-clip pb-px pl-0 pt-0 relative rounded-[inherit] w-full">
        <Container54 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-white shrink-0 sticky top-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start pl-0 pr-px py-0 relative w-full">
        <Container22 />
        <Container55 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[4px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A01-1F/HOPPER01</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Feeder Hopper / 공급 피더호퍼 / 1F `}</p>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute left-[224.5px] overflow-clip size-[24px] top-[9.88px]" data-name="image">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p263c3100} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text9 />
        <Container58 />
        <Image />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button4 />
        <Container57 />
        <Container59 />
      </div>
    </div>
  );
}

function GanttTaskRow() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[49px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap uppercase whitespace-pre">A02-1F/Unloader01</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Bulk Bag Unloader / 분진공급배출기 / 1F `}</p>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute left-[224.5px] overflow-clip size-[24px] top-[9.38px]" data-name="image">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p263c3100} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text10 />
        <Container62 />
        <Image1 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button5 />
        <Container61 />
        <Container63 />
      </div>
    </div>
  );
}

function GanttTaskRow1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon14 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A03-1F/BELTCONVEYOR01</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute left-[224.5px] overflow-clip size-[24px] top-[9.38px]" data-name="image">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p263c3100} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text11 />
        <Container66 />
        <Image2 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button6 />
        <Container65 />
        <Container67 />
      </div>
    </div>
  );
}

function GanttTaskRow2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon15 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap uppercase whitespace-pre">A04-1F/Separator01</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Magnetic Separator / 자석탈철기 / 1F `}</p>
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute left-[224.5px] overflow-clip size-[24px] top-[9.38px]" data-name="image">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p263c3100} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text12 />
        <Container70 />
        <Image3 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button7 />
        <Container69 />
        <Container71 />
      </div>
    </div>
  );
}

function GanttTaskRow3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon16 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A05-1F/CONVEYOR02P</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 컨베이어밸트(피킹) / 1F `}</p>
    </div>
  );
}

function Image4() {
  return (
    <div className="absolute left-[224.5px] overflow-clip size-[24px] top-[9.38px]" data-name="image">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p263c3100} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text13 />
        <Container74 />
        <Image4 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button8 />
        <Container73 />
        <Container75 />
      </div>
    </div>
  );
}

function GanttTaskRow4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container76 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon17 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A06-1F/JAWCRUSHER01</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Jaw Crusher / 쪼크라샤 / 1F `}</p>
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute left-[224.5px] overflow-clip size-[24px] top-[9.38px]" data-name="image">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p263c3100} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text14 />
        <Container78 />
        <Image5 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button9 />
        <Container77 />
        <Container79 />
      </div>
    </div>
  );
}

function GanttTaskRow5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon18 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A07-1F/BELTCONVEYOR03</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
    </div>
  );
}

function Image6() {
  return (
    <div className="absolute left-[224.5px] overflow-clip size-[24px] top-[9.38px]" data-name="image">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p263c3100} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text15 />
        <Container82 />
        <Image6 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button10 />
        <Container81 />
        <Container83 />
      </div>
    </div>
  );
}

function GanttTaskRow6() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon19 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A08-1F/BELTCONVEYOR04</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
    </div>
  );
}

function Image7() {
  return (
    <div className="absolute left-[224.5px] overflow-clip size-[24px] top-[9.38px]" data-name="image">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p263c3100} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text16 />
        <Container86 />
        <Image7 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button11 />
        <Container85 />
        <Container87 />
      </div>
    </div>
  );
}

function GanttTaskRow7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container88 />
        </div>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon20 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap uppercase whitespace-pre">A09-1F/Separator02</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Magnetic Separator / 자석탈철기 / 1F `}</p>
    </div>
  );
}

function Image8() {
  return (
    <div className="absolute left-[224.5px] overflow-clip size-[24px] top-[9.38px]" data-name="image">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p263c3100} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text17 />
        <Container90 />
        <Image8 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button12 />
        <Container89 />
        <Container91 />
      </div>
    </div>
  );
}

function GanttTaskRow8() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container92 />
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon21 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A10-1F/BELTCONVEYOR05</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
    </div>
  );
}

function Image9() {
  return (
    <div className="absolute left-[224.5px] overflow-clip size-[24px] top-[9.38px]" data-name="image">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p263c3100} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text18 />
        <Container94 />
        <Image9 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button13 />
        <Container93 />
        <Container95 />
      </div>
    </div>
  );
}

function GanttTaskRow9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container96 />
        </div>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon22 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A11-1F/BELTCONVEYOR06</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
    </div>
  );
}

function Image10() {
  return (
    <div className="absolute left-[224.5px] overflow-clip size-[24px] top-[9.38px]" data-name="image">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p263c3100} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text19 />
        <Container98 />
        <Image10 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button14 />
        <Container97 />
        <Container99 />
      </div>
    </div>
  );
}

function GanttTaskRow10() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container100 />
        </div>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon23 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A12-1F/BELTCONVEYOR07</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
    </div>
  );
}

function Image11() {
  return (
    <div className="absolute left-[224.5px] overflow-clip size-[24px] top-[9.38px]" data-name="image">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p263c3100} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text20 />
        <Container102 />
        <Image11 />
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button15 />
        <Container101 />
        <Container103 />
      </div>
    </div>
  );
}

function GanttTaskRow11() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container104 />
        </div>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon24 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A13-1F/BELTCONVEYOR08</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
    </div>
  );
}

function Image12() {
  return (
    <div className="absolute left-[224.5px] overflow-clip size-[24px] top-[9.38px]" data-name="image">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p263c3100} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text21 />
        <Container106 />
        <Image12 />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button16 />
        <Container105 />
        <Container107 />
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="13">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container108 />
        </div>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon25 />
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A14-1F/BELTCONVEYOR09</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
    </div>
  );
}

function Image13() {
  return (
    <div className="absolute left-[224.5px] size-[24px] top-[9.38px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p20268180} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container111() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text22 />
        <Container110 />
        <Image13 />
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button17 />
        <Container109 />
        <Container111 />
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="14">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container112 />
        </div>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon26 />
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A15-4F/ELEVATOR01</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Bucket Elevator / 골재 이송 승강기 / 4F `}</p>
    </div>
  );
}

function Image14() {
  return (
    <div className="absolute left-[224.5px] size-[24px] top-[9.38px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p20268180} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container115() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text23 />
        <Container114 />
        <Image14 />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button18 />
        <Container113 />
        <Container115 />
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="15">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container116 />
        </div>
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon27 />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap uppercase whitespace-pre">A16-4F/vibratingscreen01</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Vibrating Screen / 골재선별기 / 4F `}</p>
    </div>
  );
}

function Image15() {
  return (
    <div className="absolute left-[224.5px] size-[24px] top-[9.38px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p20268180} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container119() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text24 />
        <Container118 />
        <Image15 />
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button19 />
        <Container117 />
        <Container119 />
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="16">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container120 />
        </div>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon28 />
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A17-3F/BELTCONVEYOR10</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 /3F `}</p>
    </div>
  );
}

function Image16() {
  return (
    <div className="absolute left-[224.5px] size-[24px] top-[9.38px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p20268180} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container123() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text25 />
        <Container122 />
        <Image16 />
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button20 />
        <Container121 />
        <Container123 />
      </div>
    </div>
  );
}

function GanttTaskRow12() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container124 />
        </div>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon29 />
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A18-3F/BELTCONVEYOR11</p>
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 3F `}</p>
    </div>
  );
}

function Image17() {
  return (
    <div className="absolute left-[224.5px] size-[24px] top-[9.38px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p20268180} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container127() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text26 />
        <Container126 />
        <Image17 />
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button21 />
        <Container125 />
        <Container127 />
      </div>
    </div>
  );
}

function GanttTaskRow13() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container128 />
        </div>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon30 />
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap uppercase whitespace-pre">A19-2F/hammercrusher01</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Hammer Crusher / 골재 파쇄 해머크라샤 / 2F `}</p>
    </div>
  );
}

function Image18() {
  return (
    <div className="absolute left-[224.5px] size-[24px] top-[9.38px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p20268180} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container131() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text27 />
        <Container130 />
        <Image18 />
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button22 />
        <Container129 />
        <Container131 />
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="19">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container132 />
        </div>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon31 />
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A20-1F/CONVEYOR12</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 컨베이어밸트(12mm) / 1F `}</p>
    </div>
  );
}

function Image19() {
  return (
    <div className="absolute left-[224.5px] size-[24px] top-[9.38px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p20268180} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container135() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text28 />
        <Container134 />
        <Image19 />
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button23 />
        <Container133 />
        <Container135 />
      </div>
    </div>
  );
}

function GanttTaskRow14() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container136 />
        </div>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon32 />
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A21-3F/BELTCONVEYOR12</p>
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 3F `}</p>
    </div>
  );
}

function Image20() {
  return (
    <div className="absolute left-[224.5px] size-[24px] top-[9.38px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p20268180} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container139() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text29 />
        <Container138 />
        <Image20 />
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button24 />
        <Container137 />
        <Container139 />
      </div>
    </div>
  );
}

function GanttTaskRow15() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container140 />
        </div>
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon33 />
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap uppercase whitespace-pre">A22-3F/Separator03</p>
    </div>
  );
}

function Container142() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Magnetic Separator / 자석탈철기 / 3F `}</p>
    </div>
  );
}

function Image21() {
  return (
    <div className="absolute left-[224.5px] size-[24px] top-[9.38px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p20268180} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container143() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text30 />
        <Container142 />
        <Image21 />
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button25 />
        <Container141 />
        <Container143 />
      </div>
    </div>
  );
}

function GanttTaskRow16() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container144 />
        </div>
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon34 />
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A23-2F/BELTCONVEYOR13</p>
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 2F `}</p>
    </div>
  );
}

function Image22() {
  return (
    <div className="absolute left-[224.5px] size-[24px] top-[9.38px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p20268180} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container147() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text31 />
        <Container146 />
        <Image22 />
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button26 />
        <Container145 />
        <Container147 />
      </div>
    </div>
  );
}

function GanttTaskRow17() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container148 />
        </div>
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon35 />
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A24-2F/BELTCONVEYOR14</p>
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 컨베이어밸트(12mmFIN) / 2F `}</p>
    </div>
  );
}

function Image23() {
  return (
    <div className="absolute left-[224.5px] size-[24px] top-[9.38px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p20268180} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container151() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text32 />
        <Container150 />
        <Image23 />
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button27 />
        <Container149 />
        <Container151 />
      </div>
    </div>
  );
}

function GanttTaskRow18() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container152 />
        </div>
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon36 />
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A25-2F/BELTCONVEYOR15</p>
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 2F `}</p>
    </div>
  );
}

function Image24() {
  return (
    <div className="absolute left-[224.5px] size-[24px] top-[9.38px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p20268180} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container155() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text33 />
        <Container154 />
        <Image24 />
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button28 />
        <Container153 />
        <Container155 />
      </div>
    </div>
  );
}

function GanttTaskRow19() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container156 />
        </div>
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon37 />
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A26-1F/BELTCONVEYOR16CR</p>
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 컨베이어밸트(30mmFIN) / 2F `}</p>
    </div>
  );
}

function Image25() {
  return (
    <div className="absolute left-[224.5px] size-[24px] top-[9.38px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p20268180} fill="var(--fill-0, #1D1B20)" id="icon" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Container159() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text34 />
        <Container158 />
        <Image25 />
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button29 />
        <Container157 />
        <Container159 />
      </div>
    </div>
  );
}

function GanttTaskRow20() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="GanttTaskRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Container160 />
        </div>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="h-[1248px] relative shrink-0 w-[335px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[1248px] items-start overflow-x-clip overflow-y-auto relative w-[335px]">
        <GanttTaskRow />
        <GanttTaskRow1 />
        <GanttTaskRow2 />
        <GanttTaskRow3 />
        <GanttTaskRow4 />
        <GanttTaskRow5 />
        <GanttTaskRow6 />
        <GanttTaskRow7 />
        <GanttTaskRow8 />
        <GanttTaskRow9 />
        <GanttTaskRow10 />
        <GanttTaskRow11 />
        <Component13 />
        <Component14 />
        <Component15 />
        <Component16 />
        <GanttTaskRow12 />
        <GanttTaskRow13 />
        <Component19 />
        <GanttTaskRow14 />
        <GanttTaskRow15 />
        <GanttTaskRow16 />
        <GanttTaskRow17 />
        <GanttTaskRow18 />
        <GanttTaskRow19 />
        <GanttTaskRow20 />
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute bg-[rgba(254,242,242,0.5)] h-[912px] left-0 top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container163() {
  return (
    <div className="absolute bg-[rgba(254,242,242,0.5)] h-[1248px] left-[40px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container164() {
  return (
    <div className="absolute h-[1248px] left-[80px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container165() {
  return (
    <div className="absolute h-[1248px] left-[120px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container166() {
  return (
    <div className="absolute h-[1248px] left-[160px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container167() {
  return (
    <div className="absolute h-[1248px] left-[200px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container168() {
  return (
    <div className="absolute h-[1248px] left-[240px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container169() {
  return (
    <div className="absolute bg-[rgba(254,242,242,0.5)] h-[1248px] left-[280px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container170() {
  return (
    <div className="absolute bg-[rgba(254,242,242,0.5)] h-[1248px] left-[320px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container171() {
  return (
    <div className="absolute h-[1248px] left-[360px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container172() {
  return (
    <div className="absolute h-[1248px] left-[400px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container173() {
  return (
    <div className="absolute h-[1248px] left-[440px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container174() {
  return (
    <div className="absolute h-[1248px] left-[480px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute h-[1248px] left-[520px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container176() {
  return (
    <div className="absolute bg-[rgba(254,242,242,0.5)] h-[1248px] left-[560px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container177() {
  return (
    <div className="absolute bg-[rgba(254,242,242,0.5)] h-[1248px] left-[600px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container178() {
  return (
    <div className="absolute h-[1248px] left-[640px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container179() {
  return (
    <div className="absolute h-[1248px] left-[680px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container180() {
  return (
    <div className="absolute h-[1248px] left-[720px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container181() {
  return (
    <div className="absolute h-[1248px] left-[760px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container182() {
  return (
    <div className="absolute h-[1248px] left-[800px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container183() {
  return (
    <div className="absolute bg-[rgba(254,242,242,0.5)] h-[1248px] left-[840px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container184() {
  return (
    <div className="absolute bg-[rgba(254,242,242,0.5)] h-[1248px] left-[880px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container185() {
  return (
    <div className="absolute h-[1248px] left-[920px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container186() {
  return (
    <div className="absolute h-[1248px] left-[960px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container187() {
  return (
    <div className="absolute h-[1248px] left-[1000px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute h-[1248px] left-[1040px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container189() {
  return (
    <div className="absolute h-[1248px] left-[1080px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container190() {
  return (
    <div className="absolute bg-[rgba(254,242,242,0.5)] h-[1248px] left-[1120px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container191() {
  return (
    <div className="absolute bg-[rgba(254,242,242,0.5)] h-[1248px] left-[1160px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container192() {
  return (
    <div className="absolute bg-[rgba(254,242,242,0.5)] h-[1248px] left-[1200px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container193() {
  return (
    <div className="absolute bg-[rgba(254,242,242,0.5)] h-[1248px] left-[1240px] top-0 w-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container194() {
  return (
    <div className="absolute h-px left-0 top-[48px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container195() {
  return (
    <div className="absolute h-px left-0 top-[96px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container196() {
  return (
    <div className="absolute h-px left-0 top-[144px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container197() {
  return (
    <div className="absolute h-px left-0 top-[192px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container198() {
  return (
    <div className="absolute h-px left-0 top-[240px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container199() {
  return (
    <div className="absolute h-px left-0 top-[288px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container200() {
  return (
    <div className="absolute h-px left-0 top-[336px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container201() {
  return (
    <div className="absolute h-px left-0 top-[384px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container202() {
  return (
    <div className="absolute h-px left-0 top-[432px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container203() {
  return (
    <div className="absolute h-px left-0 top-[480px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container204() {
  return (
    <div className="absolute h-px left-0 top-[528px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container205() {
  return (
    <div className="absolute h-px left-0 top-[576px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container206() {
  return (
    <div className="absolute h-px left-0 top-[624px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container207() {
  return (
    <div className="absolute h-px left-0 top-[672px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container208() {
  return (
    <div className="absolute h-px left-0 top-[720px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container209() {
  return (
    <div className="absolute h-px left-0 top-[768px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container210() {
  return (
    <div className="absolute h-px left-0 top-[816px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container211() {
  return (
    <div className="absolute h-px left-0 top-[864px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container212() {
  return (
    <div className="absolute h-px left-0 top-[912px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container213() {
  return (
    <div className="absolute h-px left-px top-[912px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container214() {
  return (
    <div className="absolute h-px left-px top-[960px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container215() {
  return (
    <div className="absolute h-px left-px top-[1008px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container216() {
  return (
    <div className="absolute h-px left-px top-[1056px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container217() {
  return (
    <div className="absolute h-px left-px top-[1104px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container218() {
  return (
    <div className="absolute h-px left-px top-[1152px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container219() {
  return (
    <div className="absolute h-px left-px top-[1200px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container220() {
  return (
    <div className="absolute h-px left-px top-[1248px] w-[1239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container221() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[381px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container222() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container223() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[673px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container224() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-px rounded-[3.5px] top-[10px] w-[381px]" data-name="Container">
      <Container221 />
      <Container222 />
      <Container223 />
    </div>
  );
}

function Container225() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[40px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container226() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container227() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[33px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container228() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-px rounded-[3.5px] top-[104px] w-[40px]" data-name="Container">
      <Container225 />
      <Container226 />
      <Container227 />
    </div>
  );
}

function Container229() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[40px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container230() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container231() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[33px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container232() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[41px] rounded-[3.5px] top-[152px] w-[40px]" data-name="Container">
      <Container229 />
      <Container230 />
      <Container231 />
    </div>
  );
}

function Container233() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[40px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container234() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container235() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[33px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container236() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[98px] rounded-[3.5px] top-[203px] w-[103px]" data-name="Container">
      <Container233 />
      <Container234 />
      <Container235 />
    </div>
  );
}

function Container237() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[40px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container238() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container239() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[33px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container240() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[138px] rounded-[3.5px] top-[298px] w-[103px]" data-name="Container">
      <Container237 />
      <Container238 />
      <Container239 />
    </div>
  );
}

function Container241() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[40px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container242() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container243() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[33px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container244() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[201px] rounded-[3.5px] top-[347px] w-[159px]" data-name="Container">
      <Container241 />
      <Container242 />
      <Container243 />
    </div>
  );
}

function Container245() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[40px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container246() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container247() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[33px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container248() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[138px] rounded-[3.5px] top-[251px] w-[40px]" data-name="Container">
      <Container245 />
      <Container246 />
      <Container247 />
    </div>
  );
}

function Container249() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[80px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container250() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container251() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[73px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container252() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[200px] rounded-[3.5px] top-[538px] w-[80px]" data-name="Container">
      <Container249 />
      <Container250 />
      <Container251 />
    </div>
  );
}

function Container253() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[80px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container254() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container255() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[73px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container256() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[240px] rounded-[3.5px] top-[586px] w-[80px]" data-name="Container">
      <Container253 />
      <Container254 />
      <Container255 />
    </div>
  );
}

function Container257() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[80px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container258() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container259() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[73px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container260() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[197px] rounded-[3.5px] top-[442px] w-[80px]" data-name="Container">
      <Container257 />
      <Container258 />
      <Container259 />
    </div>
  );
}

function Container261() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[80px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container262() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container263() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[73px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container264() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[237px] rounded-[3.5px] top-[490px] w-[123px]" data-name="Container">
      <Container261 />
      <Container262 />
      <Container263 />
    </div>
  );
}

function Container265() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[80px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container266() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container267() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[73px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container268() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[280px] rounded-[3.5px] top-[634px] w-[80px]" data-name="Container">
      <Container265 />
      <Container266 />
      <Container267 />
    </div>
  );
}

function Container269() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[80px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container270() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container271() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[73px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container272() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[360px] rounded-[3.5px] top-[682px] w-[80px]" data-name="Container">
      <Container269 />
      <Container270 />
      <Container271 />
    </div>
  );
}

function Container273() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[240px]" data-name="Container">
      <p className="font-['Arial:Bold',_'Noto_Sans_KR:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">
        <span>{`35%중 BM발생 / 수리계획 작성 / `}</span>
        <span className="text-[#e7000b]">TFT / Y</span>
      </p>
    </div>
  );
}

function Container274() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container275() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[233px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Component() {
  return (
    <div className="absolute bg-[#f0c63c] h-[28px] left-[280px] rounded-[3.5px] top-[730px] w-[240px]" data-name="에러 노랑색">
      <Container273 />
      <Container274 />
      <Container275 />
    </div>
  );
}

function Container276() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[40px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container277() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container278() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[33px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container279() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[380px] rounded-[3.5px] top-[778px] w-[40px]" data-name="Container">
      <Container276 />
      <Container277 />
      <Container278 />
    </div>
  );
}

function Container280() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[40px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container281() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container282() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[33px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container283() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[340px] rounded-[3.5px] top-[826px] w-[40px]" data-name="Container">
      <Container280 />
      <Container281 />
      <Container282 />
    </div>
  );
}

function Container284() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[80px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container285() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[460px] rounded-[3.5px] top-[874px] w-[80px]" data-name="Container">
      <Container284 />
    </div>
  );
}

function Container286() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[80px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container287() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container288() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[73px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container289() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[500px] rounded-[3.5px] top-[922px] w-[80px]" data-name="Container">
      <Container286 />
      <Container287 />
      <Container288 />
    </div>
  );
}

function Container290() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[80px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container291() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container292() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[73px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container293() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[607px] rounded-[3.5px] top-[970px] w-[80px]" data-name="Container">
      <Container290 />
      <Container291 />
      <Container292 />
    </div>
  );
}

function Container294() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[80px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container295() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container296() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[73px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container297() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[647px] rounded-[3.5px] top-[1018px] w-[80px]" data-name="Container">
      <Container294 />
      <Container295 />
      <Container296 />
    </div>
  );
}

function Container298() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[240px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">90%</p>
    </div>
  );
}

function Container299() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container300() {
  return <div className="absolute bg-red-50 h-[28px] left-[231px] rounded-br-[4px] rounded-tr-[4px] top-0 w-[15px]" data-name="Container" />;
}

function Container301() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[607px] rounded-[3.5px] top-[1066px] w-[240px]" data-name="Container">
      <Container298 />
      <Container299 />
      <Container300 />
    </div>
  );
}

function Container302() {
  return <div className="absolute h-[14px] left-0 top-[7px] w-[240px]" data-name="Container" />;
}

function Container303() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container304() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[233px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container305() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[80px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">36%</p>
    </div>
  );
}

function Container306() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container307() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[73px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container308() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-0 rounded-[3.5px] top-0 w-[80px]" data-name="Container">
      <Container305 />
      <Container306 />
      <Container307 />
    </div>
  );
}

function Container309() {
  return (
    <div className="absolute h-[28px] left-[760px] rounded-[3.5px] top-[1114px] w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <Container302 />
      <Container303 />
      <Container304 />
      <Container308 />
    </div>
  );
}

function Container310() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[80px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#5f5e5e] text-[10.5px] text-nowrap whitespace-pre">0%</p>
    </div>
  );
}

function Container311() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container312() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[73px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container313() {
  return (
    <div className="absolute h-[28px] left-[1000px] rounded-[3.5px] top-[1162px] w-[80px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <Container310 />
      <Container311 />
      <Container312 />
    </div>
  );
}

function Container314() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[80px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#5f5e5e] text-[10.5px] text-nowrap whitespace-pre">0%</p>
    </div>
  );
}

function Container315() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container316() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[73px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container317() {
  return (
    <div className="absolute h-[28px] left-[1040px] rounded-[3.5px] top-[1210px] w-[80px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <Container314 />
      <Container315 />
      <Container316 />
    </div>
  );
}

function Container318() {
  return (
    <div className="absolute box-border content-stretch flex h-[14px] items-center justify-center left-0 px-[7px] py-0 top-[7px] w-[240px]" data-name="Container">
      <p className="font-['Arial:Bold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">100%</p>
    </div>
  );
}

function Container319() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-0 opacity-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container320() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[28px] left-[233px] opacity-0 rounded-br-[4px] rounded-tr-[4px] top-0 w-[7px]" data-name="Container" />;
}

function Container321() {
  return (
    <div className="absolute bg-[#e7000b] h-[28px] left-[160px] rounded-[3.5px] shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#030213] top-[394px] w-[280px]" data-name="Container">
      <Container318 />
      <Container319 />
      <Container320 />
    </div>
  );
}

function Container322() {
  return (
    <div className="h-[1249px] relative shrink-0 w-[1449px]" data-name="Container">
      <Container162 />
      <Container163 />
      <Container164 />
      <Container165 />
      <Container166 />
      <Container167 />
      <Container168 />
      <Container169 />
      <Container170 />
      <Container171 />
      <Container172 />
      <Container173 />
      <Container174 />
      <Container175 />
      <Container176 />
      <Container177 />
      <Container178 />
      <Container179 />
      <Container180 />
      <Container181 />
      <Container182 />
      <Container183 />
      <Container184 />
      <Container185 />
      <Container186 />
      <Container187 />
      <Container188 />
      <Container189 />
      <Container190 />
      <Container191 />
      <Container192 />
      <Container193 />
      <Container194 />
      <Container195 />
      <Container196 />
      <Container197 />
      <Container198 />
      <Container199 />
      <Container200 />
      <Container201 />
      <Container202 />
      <Container203 />
      <Container204 />
      <Container205 />
      <Container206 />
      <Container207 />
      <Container208 />
      <Container209 />
      <Container210 />
      <Container211 />
      <Container212 />
      <Container213 />
      <Container214 />
      <Container215 />
      <Container216 />
      <Container217 />
      <Container218 />
      <Container219 />
      <Container220 />
      <Container224 />
      <Container228 />
      <Container232 />
      <Container236 />
      <Container240 />
      <Container244 />
      <Container248 />
      <Container252 />
      <Container256 />
      <Container260 />
      <Container264 />
      <Container268 />
      <Container272 />
      <Component />
      <Container279 />
      <Container283 />
      <Container285 />
      <Container289 />
      <Container293 />
      <Container297 />
      <Container301 />
      <Container309 />
      <Container313 />
      <Container317 />
      <Container321 />
    </div>
  );
}

function Container323() {
  return (
    <div className="basis-0 grow h-[1248px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[1248px] items-start overflow-x-clip overflow-y-auto pl-0 py-0 relative w-full">
        <Container322 />
      </div>
    </div>
  );
}

function Container324() {
  return (
    <div className="h-[625px] shrink-0 sticky top-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[625px] items-start overflow-x-clip overflow-y-auto relative w-full">
        <Container161 />
        <Container323 />
      </div>
    </div>
  );
}

function GanttChart() {
  return (
    <div className="bg-white h-[1389px] relative rounded-[8.75px] shrink-0 w-full" data-name="GanttChart">
      <div className="box-border content-stretch flex flex-col h-[1389px] items-start overflow-x-clip overflow-y-auto p-px relative w-full">
        <Container56 />
        <Container324 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
    </div>
  );
}

function Container325() {
  return (
    <div className="h-[682px] relative shrink-0 w-[1786px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[682px] items-start overflow-clip relative rounded-[inherit] w-[1786px]">
        <GanttChart />
      </div>
    </div>
  );
}

function ProductionSchedule() {
  return (
    <div className="bg-white h-[785px] relative rounded-[8.75px] shrink-0 w-[1786px]" data-name="ProductionSchedule">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[785px] items-center p-px relative w-[1786px]">
        <Container11 />
        <Container21 />
        <Container325 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="h-[937px] relative shrink-0 w-full" data-name="Primitive.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[21px] h-[937px] items-center pb-0 pt-[14px] px-0 relative w-full">
        <Tpm />
        <ProductionSchedule />
      </div>
    </div>
  );
}

function TpmChart() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1019px] items-center pointer-events-auto sticky top-0 w-[1920px]" data-name="TPM CHART">
      <Container7 />
      <PrimitiveDiv />
    </div>
  );
}

function Frame1299() {
  return (
    <div className="absolute h-[27px] left-[83px] top-[149px] w-[166px]">
      <div className="absolute flex flex-col font-['Microsoft_Sans_Serif:Regular',_sans-serif] justify-center leading-[0] left-0 not-italic text-[0px] text-black text-nowrap top-[13.5px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[24px]">{`“TPM” `}</span>
          <span className="font-['Gmarket_Sans_TTF:Medium',_sans-serif] not-italic text-[16px]">생산설비구성</span>
        </p>
      </div>
    </div>
  );
}

function Frame1301() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[19px] items-center justify-center left-[278px] rounded-[9.5px] top-[155px] w-[82px]">
      <div aria-hidden="true" className="absolute border-[#060d92] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[9.5px]" />
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[11px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">월간계획</p>
      </div>
    </div>
  );
}

function Frame1310() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[460px] top-[129px]">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[11px] text-nowrap tracking-[0.88px]">
        <p className="leading-[normal] whitespace-pre">공정율</p>
      </div>
    </div>
  );
}

function Frame1302() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[460px] top-[149px]">
      <div className="flex flex-col font-['Microsoft_Sans_Serif:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">27월간계획중 75.3 완료</p>
      </div>
    </div>
  );
}

function Frame1311() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Microsoft_Sans_Serif:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#060d92] text-[20px] text-nowrap tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre">75.3</p>
      </div>
    </div>
  );
}

function Frame1312() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-px pt-0 px-0 relative shrink-0">
      <div className="flex flex-col font-['Microsoft_Sans_Serif:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#060d92] text-[14px] text-nowrap tracking-[-0.14px]">
        <p className="leading-[normal] whitespace-pre">%</p>
      </div>
    </div>
  );
}

function Frame1313() {
  return (
    <div className="absolute content-stretch flex items-end justify-center left-[750px] top-[169px]">
      <Frame1311 />
      <Frame1312 />
    </div>
  );
}

function Frame1314() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[918px] top-[129px]">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[11px] text-nowrap tracking-[0.22px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Gmarket_Sans_TTF:Medium',_sans-serif] not-italic tracking-[0.32px]">BOM</span>
          <span className="tracking-[1.28px]">수급율</span>
        </p>
      </div>
    </div>
  );
}

function Frame1315() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[918px] top-[149px]">
      <div className="flex flex-col font-['Microsoft_Sans_Serif:Regular',_'Noto_Sans_KR:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">{`325품목중 49품목 소진 `}</p>
      </div>
    </div>
  );
}

function Frame1309() {
  return (
    <div className="absolute left-[739px] size-[74px] top-[144px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
        <g id="Frame 1309">
          <rect height="69" rx="34.5" stroke="var(--stroke-0, #060D92)" strokeWidth="5" width="69" x="2.5" y="2.5" />
          <path d={svgPaths.p1383e600} fill="var(--fill-0, #B7B7B7)" id="Intersect" />
        </g>
      </svg>
    </div>
  );
}

function Frame1316() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-0 top-0">
      <div className="flex flex-col font-['Microsoft_Sans_Serif:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#060d92] text-[20px] text-nowrap tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre">15.1</p>
      </div>
    </div>
  );
}

function Frame1319() {
  return (
    <div className="absolute h-[23px] left-[11px] top-[25px] w-[52px]">
      <Frame1316 />
      <div className="absolute flex flex-col font-['Microsoft_Sans_Serif:Regular',_sans-serif] justify-center leading-[0] left-[39px] not-italic text-[#060d92] text-[14px] text-nowrap top-[14px] tracking-[-0.14px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">%</p>
      </div>
    </div>
  );
}

function Frame1317() {
  return (
    <div className="absolute left-[1193px] rounded-[37px] size-[74px] top-[144px]">
      <div aria-hidden="true" className="absolute border-[#b7b7b7] border-[5px] border-solid inset-0 pointer-events-none rounded-[37px]" />
      <div className="absolute left-[36.99px] size-[37px] top-0" data-name="Intersect">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
          <path d={svgPaths.p22130d00} fill="var(--fill-0, #F0C63C)" id="Intersect" />
        </svg>
      </div>
      <Frame1319 />
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#717182] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-center pl-0 pr-[16px] py-0 relative">
        <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">품번(Code)</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">A</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">: 생산설비라인</p>
      </div>
    </div>
  );
}

function Container326() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#717182] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center pl-0 pr-[16px] py-0 relative">
        <Text36 />
        <Text37 />
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">
          <span className="text-[#b7b7b7]">A</span>
          <span>{` 01`}</span>
        </p>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">: 설비일련번호</p>
      </div>
    </div>
  );
}

function Container327() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#717182] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center pl-0 pr-[16px] py-0 relative">
        <Text38 />
        <Text39 />
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">
          <span className="text-[#b7b7b7]">A01-</span>1F
        </p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">: 층</p>
      </div>
    </div>
  );
}

function Container328() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#717182] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center pl-0 pr-[16px] py-0 relative">
        <Text40 />
        <Text41 />
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">
          <span className="text-[#b7b7b7]">A01-1F</span>
          <span>{` BELTCONVEYOR`}</span>
        </p>
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">: 기계명</p>
      </div>
    </div>
  );
}

function Container329() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#717182] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center pl-0 pr-[16px] py-0 relative">
        <Text42 />
        <Text43 />
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">
          <span className="text-[#b7b7b7]">A01-1FBELTCONVEYOR</span>
          <span>{` 01 `}</span>
        </p>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular',_'Noto_Sans_KR:Regular',_sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">: 일련번호(COUNT)</p>
      </div>
    </div>
  );
}

function Container330() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#717182] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center pl-0 pr-[16px] py-0 relative">
        <Text44 />
        <Text45 />
      </div>
    </div>
  );
}

function Container331() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[677.453px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[14px] h-[17.5px] items-center relative w-[677.453px]">
        <Container326 />
        <Container327 />
        <Container328 />
        <Container329 />
        <Container330 />
      </div>
    </div>
  );
}

function Container332() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[21px] items-center pl-[62px] pr-0 py-[15px] relative w-full">
          <Text35 />
          <Container331 />
        </div>
      </div>
    </div>
  );
}

function Code() {
  return (
    <div className="absolute bg-[rgba(236,236,240,0)] content-stretch flex flex-col h-[899px] items-start justify-end left-[67px] top-[94px] w-[1786px]" data-name="품번(code)">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <Container332 />
    </div>
  );
}

function Frame1297() {
  return (
    <div className="absolute bg-white h-[91px] left-[67px] top-0 w-[1785px]">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame1296() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[17px] items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[0px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[15px]">MES/</span>
          <span className="font-['Gulim:Regular',_sans-serif] not-italic text-[10px]">생산부</span>
          <span className="text-[13px]">{`  :`}</span>
          <span className="font-['Gulim:Regular',_sans-serif] not-italic text-[10px]">이종수 사원</span>
        </p>
      </div>
    </div>
  );
}

function Frame1300() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[17px] items-center justify-end pb-[0.8px] pt-0 px-0 relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[0px] text-nowrap">
        <p className="font-['Gulim:Regular',_sans-serif] leading-[normal] text-[10px] whitespace-pre">:25i0102</p>
      </div>
    </div>
  );
}

function Frame1318() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[6px] items-center ml-0 mt-0 relative">
      <Frame1296 />
      <Frame1300 />
    </div>
  );
}

function Group135() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame1318 />
    </div>
  );
}

function Bom() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="BOM">
      <div className="flex flex-col font-['Gmarket_Sans_TTF:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5f5e5e] text-[15px] w-[58px]">
        <p className="leading-[normal]">BOM</p>
      </div>
    </div>
  );
}

function Frame1291() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0">
      <Bom />
    </div>
  );
}

function ScmMes() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[22px] items-center justify-center p-[10px] relative rounded-[100px] shrink-0 w-[64px]" data-name="SCM mes버튼">
      <a className="[white-space-collapse:collapse] absolute flex flex-col font-['Microsoft_Sans_Serif:Regular',_sans-serif] justify-center leading-[0] left-[calc(50%-17px)] not-italic text-[#5f5e5e] text-[15px] text-nowrap top-[calc(50%-0.5px)] translate-y-[-50%]" href="Page 1">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[normal] underline whitespace-pre">SCM</p>
      </a>
    </div>
  );
}

function TpmMes() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[22px] items-center justify-center p-[10px] relative rounded-[100px] shrink-0 w-[64px]" data-name="TPM mes버튼">
      <div className="absolute flex flex-col font-['Microsoft_Sans_Serif:Regular',_sans-serif] justify-center leading-[0] left-[calc(50%-17px)] not-italic text-[#5f5e5e] text-[15px] text-nowrap top-[calc(50%-0.5px)] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">MES</p>
      </div>
    </div>
  );
}

function MesMes() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[22px] items-center justify-center p-[10px] relative shrink-0 w-[64px]" data-name="MES mes버튼">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Microsoft_Sans_Serif:Regular',_sans-serif] justify-center leading-[0] left-[calc(50%-17px)] not-italic text-[#0358db] text-[15px] text-nowrap top-[calc(50%-0.5px)] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">TPM</p>
      </div>
    </div>
  );
}

function Frame1322() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <ScmMes />
      <TpmMes />
      <MesMes />
    </div>
  );
}

function Frame1323() {
  return (
    <div className="content-stretch flex gap-[52px] items-center relative shrink-0">
      <Frame1291 />
      <Frame1322 />
    </div>
  );
}

function Frame1298() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-[31px] px-[140px] py-0 top-[35px] w-[1820px]">
      <Group135 />
      <Frame1323 />
    </div>
  );
}

export default function Tpm1() {
  return (
    <div className="bg-white relative size-full" data-name="TPM1.">
      <Code />
      <Frame1297 />
      <Frame1298 />
      <div className="absolute bottom-0 h-[calc(100%-152px)] left-0 pointer-events-none top-[152px]">
        <TpmChart />
      </div>
      <Frame1299 />
      <Frame1301 />
      <Frame1310 />
      <Frame1302 />
      <Frame1313 />
      <Frame1314 />
      <Frame1315 />
      <div className="absolute h-[87px] left-[413px] top-[131px] w-[0.5px]">
        <div aria-hidden="true" className="absolute border-[#5f5e5e] border-[0.5px] border-solid inset-0 pointer-events-none" />
      </div>
      <Frame1309 />
      <Frame1317 />
      <div className="absolute h-[87px] left-[875px] top-[131px] w-[0.5px]">
        <div aria-hidden="true" className="absolute border-[#5f5e5e] border-[0.5px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}
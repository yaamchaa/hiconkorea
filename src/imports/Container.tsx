import svgPaths from "./svg-snljs21xoz";

function Icon() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[4px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A01-1F/HOPPER01</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Feeder Hopper / 공급 피더호퍼 / 1F `}</p>
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

function Container2() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text />
        <Container1 />
        <Image />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button />
        <Container />
        <Container2 />
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
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap uppercase whitespace-pre">A02-1F/Unloader01</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Bulk Bag Unloader / 분진공급배출기 / 1F `}</p>
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

function Container6() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text1 />
        <Container5 />
        <Image1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button1 />
        <Container4 />
        <Container6 />
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
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A03-1F/BELTCONVEYOR01</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
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

function Container10() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text2 />
        <Container9 />
        <Image2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button2 />
        <Container8 />
        <Container10 />
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
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[21px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.5px] px-[3.5px] relative size-[21px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap uppercase whitespace-pre">A04-1F/Separator01</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Magnetic Separator / 자석탈철기 / 1F `}</p>
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

function Container14() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text3 />
        <Container13 />
        <Image3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button3 />
        <Container12 />
        <Container14 />
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
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon4 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A05-1F/CONVEYOR02P</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 컨베이어밸트(피킹) / 1F `}</p>
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

function Container18() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text4 />
        <Container17 />
        <Image4 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button4 />
        <Container16 />
        <Container18 />
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
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon5 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A06-1F/JAWCRUSHER01</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Jaw Crusher / 쪼크라샤 / 1F `}</p>
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

function Container22() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text5 />
        <Container21 />
        <Image5 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button5 />
        <Container20 />
        <Container22 />
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
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon6 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A07-1F/BELTCONVEYOR03</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
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

function Container26() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text6 />
        <Container25 />
        <Image6 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button6 />
        <Container24 />
        <Container26 />
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
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon7 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A08-1F/BELTCONVEYOR04</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
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

function Container30() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text7 />
        <Container29 />
        <Image7 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button7 />
        <Container28 />
        <Container30 />
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
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon8 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap uppercase whitespace-pre">A09-1F/Separator02</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Magnetic Separator / 자석탈철기 / 1F `}</p>
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

function Container34() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text8 />
        <Container33 />
        <Image8 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button8 />
        <Container32 />
        <Container34 />
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
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon9 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A10-1F/BELTCONVEYOR05</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
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

function Container38() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text9 />
        <Container37 />
        <Image9 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button9 />
        <Container36 />
        <Container38 />
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
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon10 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A11-1F/BELTCONVEYOR06</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
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

function Container42() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text10 />
        <Container41 />
        <Image10 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button10 />
        <Container40 />
        <Container42 />
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
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon11 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A12-1F/BELTCONVEYOR07</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
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

function Container46() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text11 />
        <Container45 />
        <Image11 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button11 />
        <Container44 />
        <Container46 />
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
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon12 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A13-1F/BELTCONVEYOR08</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
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

function Container50() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text12 />
        <Container49 />
        <Image12 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button12 />
        <Container48 />
        <Container50 />
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
          <Container51 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon13 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A14-1F/BELTCONVEYOR09</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 1F `}</p>
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

function Container54() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text13 />
        <Container53 />
        <Image13 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button13 />
        <Container52 />
        <Container54 />
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
          <Container55 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon14 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A15-4F/ELEVATOR01</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Bucket Elevator / 골재 이송 승강기 / 4F `}</p>
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

function Container58() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text14 />
        <Container57 />
        <Image14 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button14 />
        <Container56 />
        <Container58 />
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
          <Container59 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon15 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap uppercase whitespace-pre">A16-4F/vibratingscreen01</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Vibrating Screen / 골재선별기 / 4F `}</p>
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

function Container62() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text15 />
        <Container61 />
        <Image15 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button15 />
        <Container60 />
        <Container62 />
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
          <Container63 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon16 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A17-3F/BELTCONVEYOR10</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 /3F `}</p>
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

function Container66() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text16 />
        <Container65 />
        <Image16 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button16 />
        <Container64 />
        <Container66 />
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
          <Container67 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon17 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A18-3F/BELTCONVEYOR11</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 3F `}</p>
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

function Container70() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text17 />
        <Container69 />
        <Image17 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button17 />
        <Container68 />
        <Container70 />
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
          <Container71 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon18 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap uppercase whitespace-pre">A19-2F/hammercrusher01</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Hammer Crusher / 골재 파쇄 해머크라샤 / 2F `}</p>
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

function Container74() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text18 />
        <Container73 />
        <Image18 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button18 />
        <Container72 />
        <Container74 />
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
          <Container75 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon19 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A20-1F/CONVEYOR12</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 컨베이어밸트(12mm) / 1F `}</p>
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

function Container78() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text19 />
        <Container77 />
        <Image19 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button19 />
        <Container76 />
        <Container78 />
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
          <Container79 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon20 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A21-3F/BELTCONVEYOR12</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 3F `}</p>
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

function Container82() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text20 />
        <Container81 />
        <Image20 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button20 />
        <Container80 />
        <Container82 />
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
          <Container83 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon21 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap uppercase whitespace-pre">A22-3F/Separator03</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Magnetic Separator / 자석탈철기 / 3F `}</p>
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

function Container86() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text21 />
        <Container85 />
        <Image21 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button21 />
        <Container84 />
        <Container86 />
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
          <Container87 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon22 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A23-2F/BELTCONVEYOR13</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 2F `}</p>
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

function Container90() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text22 />
        <Container89 />
        <Image22 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button22 />
        <Container88 />
        <Container90 />
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
          <Container91 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon23 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A24-2F/BELTCONVEYOR14</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 컨베이어밸트(12mmFIN) / 2F `}</p>
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

function Container94() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text23 />
        <Container93 />
        <Image23 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button23 />
        <Container92 />
        <Container94 />
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
          <Container95 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon24 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A25-2F/BELTCONVEYOR15</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 골재 이송 컨베이어밸트 / 2F `}</p>
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

function Container98() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text24 />
        <Container97 />
        <Image24 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button24 />
        <Container96 />
        <Container98 />
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
          <Container99 />
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
        <Icon25 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[3px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">A26-1F/BELTCONVEYOR16CR</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[0.5px] top-[24.88px]" data-name="Container">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[13.125px] not-italic relative shrink-0 text-[#717182] text-[10.5px] text-nowrap whitespace-pre">{`Belt Conveyer / 컨베이어밸트(30mmFIN) / 2F `}</p>
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

function Container102() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.75px] relative w-full">
        <Text25 />
        <Container101 />
        <Image25 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="basis-0 grow h-[43.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[43.75px] items-center relative w-full">
        <Button25 />
        <Container100 />
        <Container102 />
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
          <Container103 />
        </div>
      </div>
    </div>
  );
}

export default function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
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
  );
}
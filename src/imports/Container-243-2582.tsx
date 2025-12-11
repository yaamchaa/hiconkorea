import svgPaths from "./svg-cb6j5pdj8d";

// Removed: "생산설비라인" and "26 Items" components

function Container1() {
  return (
    <div className="bg-[#e7000b] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">26 생산설비 / installation</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center relative">
        <Container1 />
        <Text1 />
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

function Text2() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative">
        <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">78 in 자재 / Componentmechanical</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center relative">
        <Container3 />
        <Text2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#060d92] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">357 부품,부속 / part,component</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[71.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center relative w-[71.781px]">
        <Container5 />
        <Text3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[58px] h-[17.5px] items-center relative w-full">
        <Container2 />
        <Container4 />
        <Container6 />
      </div>
    </div>
  );
}

// Removed: "2025/09/22" date component

export default function Container9() {
  return (
    <div className="bg-white relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[48px] items-center pb-px pt-0 relative">
          <Container7 />
        </div>
      </div>
    </div>
  );
}
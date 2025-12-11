import svgPaths from "./svg-atcowrd6zk";

function Icon() {
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
    <div className="basis-0 bg-white grow h-[31.5px] min-h-px min-w-px relative rounded-[6.75px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.5px] items-center px-[10.5px] py-[3.5px] relative w-full">
          <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">{`검색 : `}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[31.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[31.5px] items-center relative w-full">
        <Icon />
        <Input />
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[21.203px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[17.5px] items-center overflow-clip relative rounded-[inherit] w-[21.203px]">
        <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">구분</p>
      </div>
    </div>
  );
}

function Icon1() {
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

function PrimitiveButton() {
  return (
    <div className="bg-white h-[31.5px] relative rounded-[6.75px] shrink-0 w-[112px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.5px] items-center justify-between px-[11.5px] py-px relative w-[112px]">
        <PrimitiveSpan />
        <Icon1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-[371px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[14px] h-[31.5px] items-center relative w-[371px]">
        <Container />
        <PrimitiveButton />
      </div>
    </div>
  );
}

function Frame1320() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[93px]">
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#717182] text-[12.25px] text-nowrap whitespace-pre">2025년: 100%</p>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <Frame1320 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 w-[14px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[3px] py-0 relative rounded-[inherit] w-[14px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12.25px] text-black w-full">9</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.75px] shrink-0 w-[33.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-center justify-center p-px relative w-[33.5px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 w-[14px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit] w-[14px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#aaa7a7] text-[12.25px] w-full">10</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.75px] shrink-0 w-[33.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-center justify-center p-px relative w-[33.5px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
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
            <Icon4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
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
            <Icon5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[28px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[28px] items-center px-[8px] py-0 relative">
        <Text />
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

export default function Container3() {
  return (
    <div className="bg-white relative rounded-tl-[8.75px] rounded-tr-[8.75px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-tl-[8.75px] rounded-tr-[8.75px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-px pt-0 px-[14px] relative size-full">
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}
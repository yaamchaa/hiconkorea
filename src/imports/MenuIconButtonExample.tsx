import svgPaths from "./svg-3na39bx4yk";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pe21b600} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="absolute bottom-0 h-[28px] right-0 w-[38px]" data-name="Ripple">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 28">
          <path d={svgPaths.p3e89a300} fill="var(--fill-0, white)" fillOpacity="0.1" id="Ripple" />
        </svg>
      </div>
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#6750a4] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.5px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Menu item</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function MenuListItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 1">
      <StateLayer1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.5px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Menu item</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function MenuListItem2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 2">
      <StateLayer2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.5px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Menu item</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function MenuListItem3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 3">
      <StateLayer3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.5px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Menu item</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function MenuListItem4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 4">
      <StateLayer4 />
    </div>
  );
}

function MenuList() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Menu list">
      <MenuListItem1 />
      <MenuListItem2 />
      <MenuListItem3 />
      <MenuListItem4 />
    </div>
  );
}

function Menu() {
  return (
    <div className="bg-[#f3edf7] box-border content-stretch flex items-start max-w-[280px] min-w-[112px] px-0 py-[8px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)] shrink-0 w-[200px]" data-name="Menu">
      <MenuList />
    </div>
  );
}

export default function MenuIconButtonExample() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Menu - Icon button Example">
      <IconButton />
      <Menu />
    </div>
  );
}
import svgPaths from "./svg-iooyb64buu";
import img1 from "figma:asset/9edf2d8c6a8e0e7e54553b61acadbb127be46f66.png";
import img from "figma:asset/e7cacc3683387b76ceb5f88149fbccc324a29223.png";

function Group134() {
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

function Component() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-[39px]" data-name="네이버로고">
      <Group134 />
    </div>
  );
}

function Component2() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[39.252px]" data-name="카톡로고">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="ì¹´í¡ë¡ê³ ">
          <path d={svgPaths.p27516100} fill="var(--fill-0, #B7B7B7)" id="Polygon 1" stroke="var(--stroke-0, #B7B7B7)" strokeLinejoin="round" />
          <path d={svgPaths.p21ab5c80} fill="var(--fill-0, #B7B7B7)" id="Exclude" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="카톡로고">
      <Component2 />
    </div>
  );
}

function Component4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[9px] relative shrink-0 w-[39px]" data-name="인스타로고">
      <div className="basis-0 grow h-[21.553px] min-h-px min-w-px relative shrink-0" data-name="인스타그램_라인_아이콘 1">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-difference object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="핀터레스트">
      <div className="h-[34.959px] relative shrink-0 w-[21.466px]" data-name="핀터로고 사진">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-difference object-50%-50% object-cover pointer-events-none size-full" src={img} />
      </div>
    </div>
  );
}

export default function Frame184() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-end relative size-full">
      <Component />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}
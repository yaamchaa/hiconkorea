import svgPaths from "./svg-n2m4pljtxk";

export default function CursorPointer() {
  return (
    <div className="relative size-full" data-name="Cursor/Pointer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_36_769)" id="Cursor/Pointer">
          <g filter="url(#filter0_d_36_769)" id="hand">
            <mask fill="black" height="16" id="path-1-outside-1_36_769" maskUnits="userSpaceOnUse" width="16" x="9.72461" y="14">
              <rect fill="white" height="16" width="16" x="9.72461" y="14" />
              <path d={svgPaths.p14c8a510} />
            </mask>
            <path d={svgPaths.p14c8a510} fill="var(--fill-0, white)" />
            <path d={svgPaths.p120e8400} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_36_769)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_36_769" width="20.2757" x="7.72429" y="12">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_36_769" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_36_769" mode="normal" result="shape" />
          </filter>
          <clipPath id="clip0_36_769">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
import { ClipboardList, Wrench, GraduationCap, Users, Hammer } from 'lucide-react';

function PrimitiveButton() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[12.75px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <ClipboardList className="w-[14px] h-[14px] shrink-0" />
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">PM/유지보전관리 일정</p>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[12.75px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <Wrench className="w-[14px] h-[14px] shrink-0" />
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">MP/개선,개량일정</p>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[12.75px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <GraduationCap className="w-[14px] h-[14px] shrink-0" />
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">TPM 교육일정</p>
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[12.75px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <Users className="w-[14px] h-[14px] shrink-0" />
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">직원근무 / 휴무 계획</p>
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[12.75px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <Hammer className="w-[14px] h-[14px] shrink-0" />
      <p className="font-['Arial:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-neutral-950 text-nowrap whitespace-pre">BM 고장수리내역</p>
    </div>
  );
}

export default function Tpm() {
  return (
    <div className="bg-[rgba(236,236,240,0.3)] relative rounded-[12.75px]" data-name="TPM 계획">
      <div className="flex flex-row items-center justify-center">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[6px] relative">
          <PrimitiveButton />
          <PrimitiveButton1 />
          <PrimitiveButton2 />
          <PrimitiveButton3 />
          <PrimitiveButton4 />
        </div>
      </div>
    </div>
  );
}

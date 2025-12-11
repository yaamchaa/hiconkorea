function Container() {
  return (
    <div className="bg-[#bf0009] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[29px] relative shrink-0 translate-y-[8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29px] items-center justify-center relative">
        <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#bf0009] text-[0px] w-[54px]">
          <span className="text-[40px]">A</span>
          <span className="text-[12.25px]">{` Line`}</span>
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[29px] relative shrink-0 w-[75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[29px] items-center relative w-[75px]">
        <Container />
        <Text />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f0c63c] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[29px] relative shrink-0 translate-y-[8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29px] items-center justify-center relative">
        <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#d8d8d9] text-[0px] w-[54px]">
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
        <Container2 />
        <Text1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#247129] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[29px] relative shrink-0 translate-y-[8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29px] items-center justify-center relative">
        <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#d8d8d9] text-[0px] text-nowrap whitespace-pre">
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
        <Container3 />
        <Text2 />
      </div>
    </div>
  );
}

export default function Container4() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[100px]" data-name="Container">
      <div className="flex flex-row items-center">
        <div className="box-border content-stretch flex gap-[23px] items-center px-[30px] py-[10px] relative">
          <Container1 />
          <B />
          <C />
        </div>
      </div>
    </div>
  );
}
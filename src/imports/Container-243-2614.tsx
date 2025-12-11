type CProps = {
  className?: string;
  prop1?: "기본" | "베리언트2";
};

/**
 * @figmaAssetKey ebadd8496c0af3d927f39702860180998905d75d
 */
function C({ className, prop1 = "기본" }: CProps) {
  const container = (
    <div className="bg-[#247129] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
  const element = <span className="text-[40px]">C</span>;
  const element1 = <span className="text-[12.25px]"> Line</span>;
  if (prop1 === "베리언트2") {
    return (
      <div className={className} data-name="속성 1=베리언트2">
        {container}
        <div className="h-[29px] relative shrink-0" data-name="Text">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29px] items-center justify-center relative">
            <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#247129] text-[0px] text-nowrap whitespace-pre" />
            {element}
            {element1}
            <p />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="속성 1=기본">
      {container}
      <div className="h-[29px] relative shrink-0" data-name="Text">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29px] items-center justify-center relative">
          <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#d8d8d9] text-[0px] text-nowrap whitespace-pre" />
          {element}
          {element1}
          <p />
        </div>
      </div>
    </div>
  );
}
type BProps = {
  className?: string;
  prop1?: "기본" | "베리언트2";
};

/**
 * @figmaAssetKey 02c4f190ab68d3efe3dd217a78003f8e8b0e47fc
 */
function B({ className, prop1 = "기본" }: BProps) {
  const container = (
    <div className="bg-[#f0c63c] relative rounded-[3.35544e+07px] shrink-0 size-[10.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10.5px]" />
    </div>
  );
  const element = <span className="text-[40px]">B</span>;
  const element1 = <span className="text-[12.25px]"> Line</span>;
  if (prop1 === "베리언트2") {
    return (
      <div className={className} data-name="속성 1=베리언트2">
        {container}
        <div className="h-[29px] relative shrink-0" data-name="Text">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29px] items-center justify-center relative">
            <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#f0c63c] text-[0px] w-[54px]" />
            {element}
            {element1}
            <p />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="속성 1=기본">
      {container}
      <div className="h-[29px] relative shrink-0" data-name="Text">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29px] items-center justify-center relative">
          <p className="font-['Arial:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#d8d8d9] text-[0px] w-[54px]" />
          {element}
          {element1}
          <p />
        </div>
      </div>
    </div>
  );
}

function Container() {
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

export default function Container2() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[100px]" data-name="Container">
      <div className="flex flex-row items-center">
        <div className="box-border content-stretch flex gap-[23px] items-center px-[30px] py-[10px] relative">
          <Container1 />
          <B className="relative shrink-0" />
          <C className="relative shrink-0" />
        </div>
      </div>
    </div>
  );
}
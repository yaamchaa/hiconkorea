interface Frame1343Props {
  year?: number;
  month?: number;
  lineName?: string;
}

// 2025년 대한민국 공휴일 (월은 0부터 시작)
const HOLIDAYS_2025 = [
  { month: 0, day: 1 },   // 1월 1일 - 신정
  { month: 1, day: 28 },  // 2월 28일 - 구정 전날
  { month: 1, day: 29 },  // 2월 29일 - 구정 (음력 1월 1일)
  { month: 2, day: 1 },   // 3월 1일 - 삼일절
  { month: 2, day: 2 },   // 3월 2일 - 구정 다음날
  { month: 4, day: 5 },   // 5월 5일 - 어린이날
  { month: 4, day: 15 },  // 5월 15일 - 석가탄신일
  { month: 5, day: 6 },   // 6월 6일 - 현충일
  { month: 7, day: 15 },  // 8월 15일 - 광복절
  { month: 8, day: 6 },   // 9월 6일 - 추석 전날
  { month: 8, day: 7 },   // 9월 7일 - 추석
  { month: 8, day: 8 },   // 9월 8일 - 추석 다음날
  { month: 9, day: 3 },   // 10월 3일 - 개천절
  { month: 9, day: 9 },   // 10월 9일 - 한글날
  { month: 11, day: 25 }, // 12월 25일 - 크리스마스
];

function isWeekend(year: number, month: number, day: number): boolean {
  const date = new Date(year, month, day);
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6; // 일요일(0) 또는 토요일(6)
}

function isHoliday(year: number, month: number, day: number): boolean {
  if (year !== 2025) return false;
  return HOLIDAYS_2025.some(holiday => 
    holiday.month === month && holiday.day === day
  );
}

function isWeekendOrHoliday(year: number, month: number, day: number): boolean {
  return isWeekend(year, month, day) || isHoliday(year, month, day);
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getMonthName(month: number): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return months[month];
}

export default function Frame1343({ year, month, lineName = 'A', isCollapsed = false }: Frame1343Props & { isCollapsed?: boolean }) {
  // 기본값: 현재 년월
  const now = new Date();
  const currentYear = year ?? now.getFullYear();
  const currentMonth = month ?? now.getMonth();
  
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const monthName = getMonthName(currentMonth);

  return (
    <div className="flex h-full">
      {/* 좌측 라인명 및 날짜 헤더 - Sticky */}
      <div className={`sticky left-0 bg-[rgba(236,236,240,0.3)] box-border content-stretch flex h-[48px] md:h-[56px] items-center justify-between pb-px pr-0 pt-0 transition-all duration-300 z-20 border-b border-[rgba(0,0,0,0.1)] flex-shrink-0 ${isCollapsed ? 'w-[50px] md:w-[60px] pl-0' : 'w-[200px] md:w-[280px] lg:w-[335px] pl-[20px] md:pl-[50px] lg:pl-[70px]'}`}>
        
        {isCollapsed ? (
          // 축소 모드: "A"만 표시
          <div className="w-full h-full flex items-center justify-center">
            <p className="font-['Arial:Bold',sans-serif] text-[16px] md:text-[20px] text-neutral-950">
              {lineName}
            </p>
          </div>
        ) : (
          <>
            {/* A Line */}
            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
              <div className="flex flex-row items-center size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] md:gap-[10px] items-center pl-[10px] md:pl-[25px] pr-0 py-0 relative size-full">
                  <p className="font-['Arial:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[0px] text-neutral-950 text-nowrap whitespace-pre">
                    <span className="text-[16px] md:text-[20px]">{lineName}</span>
                    <span className="text-[12px] md:text-[14px]">{` Line`}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 날짜 표시 (예: 9 Sept.) */}
            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0 hidden md:block">
              <div className="flex flex-col items-end justify-center size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-end justify-center pl-0 pr-[30px] py-0 relative size-full">
                  <p className="font-['Arial:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">
                    {currentMonth + 1} {monthName}.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* 우측 날짜 그리드 - 스크롤 가능 */}
      <div className="bg-[rgba(236,236,240,0.3)] h-[48px] md:h-[56px] flex-shrink-0 border-b border-[rgba(0,0,0,0.1)]" style={{ width: `${daysInMonth * 30}px` }}>
        <div className="box-border content-stretch flex h-[48px] md:h-[56px] items-start overflow-clip pb-px pl-0 pt-0 relative rounded-[inherit] w-full">
          <div className="h-[47px] md:h-[55px] relative shrink-0 flex w-full">
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const isSpecialDay = isWeekendOrHoliday(currentYear, currentMonth, day);
              
              return (
                <div
                  key={day}
                  className={`box-border content-stretch flex h-[47px] md:h-[55px] items-center justify-center w-[30px] md:w-[35px] lg:w-[40px] border-r border-[rgba(0,0,0,0.05)] ${
                    isSpecialDay ? 'bg-red-50' : ''
                  } ${day === daysInMonth ? 'bg-[#fafafb]' : ''}`}
                >
                  <p className={`font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[9px] md:text-[10.5px] text-nowrap whitespace-pre ${
                    isSpecialDay ? 'text-[#e7000b]' : 'text-neutral-950'
                  }`}>
                    {day}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

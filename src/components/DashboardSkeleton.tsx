import { Skeleton } from './ui/skeleton';

export function DashboardSkeleton() {
  return (
    <div className="py-4 px-4 md:py-6 md:px-8 lg:px-24 xl:px-36">
      {/* 헤더 스켈레톤 */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-4 mt-4 md:mt-8">
        <div className="flex gap-2 md:gap-6 items-center flex-wrap">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-40" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-9 w-9 rounded" />
          <Skeleton className="h-9 w-9 rounded" />
        </div>
      </div>
      
      {/* 첫 번째 행: Featured 카드 2개 + Quick Note 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-7 mb-4 md:mb-6 lg:mb-7">
        <Skeleton className="h-48 md:h-56" />
        <Skeleton className="h-48 md:h-56" />
        <div className="md:col-span-2">
          <Skeleton className="h-48 md:h-56" />
        </div>
      </div>
      
      {/* 두 번째 행: 분석 카드 4개 */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-7">
        <Skeleton className="h-64 md:h-72" />
        <Skeleton className="h-64 md:h-72" />
        <Skeleton className="h-64 md:h-72" />
        <Skeleton className="h-64 md:h-72" />
      </div>
    </div>
  );
}

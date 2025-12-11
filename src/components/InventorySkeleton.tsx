import { Skeleton } from './ui/skeleton';

export function InventorySkeleton() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* 페이지 헤더 */}
      <div className="mb-6">
        <Skeleton className="h-10 w-48 mb-2" />
        <Skeleton className="h-5 w-96" />
      </div>

      {/* 검색바 및 필터 영역 */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <Skeleton className="h-10 flex-1" />
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-32" />
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
      </div>

      {/* 테이블 헤더 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <Skeleton className="h-6 w-full" />
        </div>
        
        {/* 테이블 행들 */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="p-4 border-b last:border-b-0 flex gap-4">
            <Skeleton className="h-6 w-1/6" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-6 w-1/6" />
            <Skeleton className="h-6 w-1/6" />
            <Skeleton className="h-6 w-1/6" />
            <Skeleton className="h-6 w-24" />
          </div>
        ))}
      </div>
    </div>
  );
}

import { Skeleton } from './ui/skeleton';

export function ProductionSkeleton() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* 페이지 헤더 */}
      <div className="mb-6">
        <Skeleton className="h-10 w-48 mb-2" />
        <Skeleton className="h-5 w-96" />
      </div>

      {/* 생산 라인 카드 (A, B, C) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-32" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-32" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t space-y-2">
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* 생산 이력 테이블 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <Skeleton className="h-7 w-48" />
        </div>
        <div className="p-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-4 py-3 border-b last:border-b-0">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-28" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

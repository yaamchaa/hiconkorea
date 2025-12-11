import { useEffect, useState } from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';

export function AutoSyncStatus() {
  const [lastSync, setLastSync] = useState<string | null>(null);
  const [nextSyncTime, setNextSyncTime] = useState<string>('');

  useEffect(() => {
    const updateSyncStatus = () => {
      const lastSyncDate = localStorage.getItem('lastAllbaroSync');
      setLastSync(lastSyncDate);
      
      // 다음 동기화 시간 계산
      const now = new Date();
      const today = now.toISOString().split('T')[0];
      
      if (lastSyncDate === today) {
        // 오늘 이미 동기화됨 - 내일 오전 7시
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(7, 0, 0, 0);
        setNextSyncTime(tomorrow.toLocaleString('ko-KR', { 
          month: 'long', 
          day: 'numeric', 
          hour: 'numeric', 
          minute: 'numeric' 
        }));
      } else {
        // 오늘 아직 동기화 안됨
        if (now.getHours() >= 7) {
          setNextSyncTime('곧 자동 동기화 예정');
        } else {
          const today7am = new Date(now);
          today7am.setHours(7, 0, 0, 0);
          setNextSyncTime(today7am.toLocaleString('ko-KR', { 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric' 
          }));
        }
      }
    };

    updateSyncStatus();
    const interval = setInterval(updateSyncStatus, 60000); // 1분마다 업데이트

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {lastSync === new Date().toISOString().split('T')[0] ? (
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          ) : (
            <Clock className="w-5 h-5 text-blue-600" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-blue-900">
            <span className="font-medium">자동 동기화:</span> 매일 오전 7시에 올바로 시스템에서 데이터를 자동으로 가져옵니다
          </p>
          {lastSync && (
            <p className="text-xs text-blue-700 mt-1">
              마지막 동기화: {new Date(lastSync).toLocaleDateString('ko-KR', { 
                year: 'numeric',
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          )}
          <p className="text-xs text-blue-600 mt-1">
            다음 동기화: {nextSyncTime}
          </p>
        </div>
      </div>
    </div>
  );
}

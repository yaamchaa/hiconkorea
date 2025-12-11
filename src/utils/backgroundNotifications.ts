// 백그라운드 알림 관리 유틸리티

// Service Worker 등록 상태
let registration: ServiceWorkerRegistration | null = null;

/**
 * Service Worker 코드 생성
 */
function createServiceWorkerCode(): string {
  return `
// Service Worker for Background Notifications
const CACHE_NAME = 'hicon-tpm-v1';
const NOTIFICATION_CHECK_INTERVAL = 5 * 60 * 1000; // 5분마다 체크

// 설치 이벤트
self.addEventListener('install', (event) => {
  console.log('✅ Service Worker 설치됨');
  self.skipWaiting();
});

// 활성화 이벤트
self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker 활성화됨');
  event.waitUntil(clients.claim());
});

// 백그라운드 동기화
self.addEventListener('sync', (event) => {
  console.log('🔄 백그라운드 동기화:', event.tag);
  
  if (event.tag === 'check-tpm-alerts') {
    event.waitUntil(checkTPMAlerts());
  }
});

// 주기적 백그라운드 동기화 (Chrome 80+)
self.addEventListener('periodicsync', (event) => {
  console.log('⏰ 주기적 동기화:', event.tag);
  
  if (event.tag === 'check-tpm-alerts') {
    event.waitUntil(checkTPMAlerts());
  }
});

// Push 알림 수신
self.addEventListener('push', (event) => {
  console.log('📬 Push 알림 수신:', event);
  
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { title: 'TPM 알림', body: event.data ? event.data.text() : '' };
  }

  const title = data.title || 'TPM 시스템 알림';
  const options = {
    body: data.body || '새로운 알림이 있습니다',
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    vibrate: [200, 100, 200],
    tag: data.tag || 'tpm-notification',
    requireInteraction: data.urgent || false,
    actions: [
      {
        action: 'view',
        title: '확인하기',
      },
      {
        action: 'close',
        title: '닫기',
      },
    ],
    data: data,
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// 알림 클릭 이벤트
self.addEventListener('notificationclick', (event) => {
  console.log('🖱️ 알림 클릭:', event.action);
  
  event.notification.close();

  if (event.action === 'view') {
    // TPM 페이지로 이동
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
        // 이미 열린 창이 있으면 포커스
        for (const client of clientList) {
          if (client.url.includes('/tpm') && 'focus' in client) {
            return client.focus();
          }
        }
        // 없으면 새 창 열기
        if (clients.openWindow) {
          return clients.openWindow('/?page=tpm');
        }
      })
    );
  }
});

// TPM 알림 체크 함수
async function checkTPMAlerts() {
  console.log('🔍 TPM 알림 체크 시작...');

  try {
    // localStorage는 Service Worker에서 접근 불가
    // IndexedDB 또는 서버 API 사용 필요
    
    // 예시: 긴급 알림 시뮬레이션
    const alerts = [];
    
    // 긴급 알림 처리
    for (const alert of alerts) {
      if (alert.urgent && !alert.acknowledged) {
        await self.registration.showNotification('🚨 긴급 TPM 알림', {
          body: alert.message,
          icon: '/icon-192x192.png',
          badge: '/icon-192x192.png',
          vibrate: [200, 100, 200, 100, 200],
          tag: 'tpm-alert-' + alert.id,
          requireInteraction: true,
          actions: [
            {
              action: 'acknowledge',
              title: '확인 완료',
            },
            {
              action: 'view',
              title: '상세 보기',
            },
          ],
          data: alert,
        });
      }
    }
    
    console.log('✅ TPM 알림 체크 완료: ' + alerts.length + '건');
  } catch (error) {
    console.error('❌ TPM 알림 체크 실패:', error);
  }
}

// 백그라운드 메시지 수신
self.addEventListener('message', (event) => {
  console.log('💬 Service Worker 메시지:', event.data);

  if (event.data && event.data.type === 'CHECK_ALERTS') {
    event.waitUntil(checkTPMAlerts());
  }
  
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, body, urgent } = event.data;
    event.waitUntil(
      self.registration.showNotification(title, {
        body,
        icon: '/icon-192x192.png',
        badge: '/icon-192x192.png',
        vibrate: urgent ? [200, 100, 200, 100, 200] : [200, 100, 200],
        requireInteraction: urgent,
        tag: 'tpm-custom-notification',
      })
    );
  }
});

// Fetch 이벤트 (오프라인 지원)
self.addEventListener('fetch', (event) => {
  // TPM 관련 API 요청은 항상 네트워크 우선
  if (event.request.url.includes('/api/tpm')) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response(JSON.stringify({ error: '오프라인 상태' }), {
          headers: { 'Content-Type': 'application/json' },
        });
      })
    );
  }
});
`;
}

/**
 * Service Worker 등록 (환경 제약으로 비활성화)
 * 
 * Figma Make 환경에서는 Service Worker를 사용할 수 없습니다:
 * - /public/service-worker.js → 404 에러
 * - Blob URL → 'blob:' protocol not supported
 * 
 * 대신 로컬 알림 + 폴링 방식을 사용합니다.
 */
export async function registerServiceWorker(): Promise<boolean> {
  console.warn('⚠️ Service Worker는 이 환경에서 지원되지 않습니다');
  console.log('✅ 로컬 알림 + 폴링 방식으로 대체합니다');
  return false;
}

/**
 * 로컬 알림 권한 요청
 */
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) {
    console.warn('⚠️ 알림을 지원하지 않는 브라우저입니다');
    return 'denied';
  }

  if (Notification.permission === 'granted') {
    console.log('✅ 알림 권한이 이미 허용되어 있습니다');
    return 'granted';
  }

  if (Notification.permission === 'denied') {
    console.warn('⚠️ 알림 권한이 거부되었습니다');
    return 'denied';
  }

  try {
    const permission = await Notification.requestPermission();
    console.log('📬 알림 권한:', permission);
    return permission;
  } catch (error) {
    console.error('❌ 알림 권한 요청 실패:', error);
    return 'denied';
  }
}

// Service Worker 관련 함수들은 이 환경에서 지원되지 않으므로 제거되었습니다.
// 로컬 알림 + 폴링 방식을 사용합니다.

/**
 * 즉시 알림 체크 요청 (로컬 버전)
 */
export async function checkAlertsNow(): Promise<void> {
  console.log('🔍 TPM 알림 체크 (로컬 모드)');
  
  // localStorage에서 긴급 알림 확인
  try {
    const alertsStr = localStorage.getItem('emergencyAlerts');
    if (alertsStr) {
      const alerts = JSON.parse(alertsStr);
      const unacknowledged = alerts.filter((a: any) => !a.acknowledged);
      
      if (unacknowledged.length > 0) {
        console.log(`📋 미확인 긴급 알림 ${unacknowledged.length}개 발견`);
        // 첫 번째 알림만 표시
        const alert = unacknowledged[0];
        showLocalNotification(
          '🚨 긴급 TPM 알림',
          alert.message || '긴급 상황이 발생했습니다',
          {
            tag: `tpm-alert-${alert.id}`,
            requireInteraction: true,
          }
        );
      }
    }
  } catch (error) {
    console.error('❌ 알림 체크 실패:', error);
  }
}

/**
 * 커스텀 알림 표시 (로컬 버전)
 */
export async function showCustomNotification(
  title: string,
  body: string,
  urgent: boolean = false
): Promise<void> {
  showLocalNotification(title, body, {
    requireInteraction: urgent,
    tag: 'tpm-custom-notification',
  });
}

/**
 * 로컬 알림 표시 (Service Worker 없이)
 */
export function showLocalNotification(
  title: string,
  body: string,
  options: NotificationOptions = {}
): void {
  if (!('Notification' in window)) {
    console.warn('⚠️ 알림을 지원하지 않는 브라우저입니다');
    return;
  }

  if (Notification.permission !== 'granted') {
    console.warn('⚠️ 알림 권한이 없습니다');
    return;
  }

  new Notification(title, {
    body,
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    vibrate: [200, 100, 200],
    ...options,
  });
}

/**
 * 로컬 알림 시스템 초기화
 * 
 * Service Worker 대신 로컬 알림 + 폴링 방식 사용
 */
export async function initializeBackgroundNotifications(): Promise<void> {
  console.log('🚀 로컬 알림 시스템 초기화...');

  // 1. 알림 권한 요청
  const permission = await requestNotificationPermission();
  if (permission !== 'granted') {
    console.warn('⚠️ 알림 권한이 없습니다. 브라우저 설정에서 알림을 허용해주세요.');
    console.log('💡 알림 없이도 시스템은 정상 작동합니다.');
    return;
  }

  console.log('✅ 로컬 알림 시스템 초기화 완료');
  console.log('📱 알림 권한: 허용됨');
  console.log('🔄 폴링 방식으로 알림을 체크합니다 (5분 간격)');
}

// VAPID 관련 함수는 Service Worker 없이 필요하지 않으므로 제거되었습니다.

/**
 * TPM 알림 폴링 시작
 */
let pollingInterval: ReturnType<typeof setInterval> | null = null;

export function startTPMAlertPolling(intervalMs: number = 5 * 60 * 1000): void {
  if (pollingInterval) {
    console.warn('⚠️ 이미 폴링이 실행 중입니다');
    return;
  }

  console.log(`🔄 TPM 알림 폴링 시작 (${Math.floor(intervalMs / 60000)}분 간격)`);

  // 즉시 한 번 체크
  checkAlertsNow();

  // 주기적으로 체크
  pollingInterval = setInterval(async () => {
    console.log('⏰ TPM 알림 주기 체크...');
    await checkAlertsNow();
  }, intervalMs);
}

export function stopTPMAlertPolling(): void {
  if (pollingInterval) {
    clearInterval(pollingInterval);
    pollingInterval = null;
    console.log('⏹️ TPM 알림 폴링 중지');
  }
}

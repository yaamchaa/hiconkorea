# 🔔 백그라운드 알림 시스템 가이드

## 🎯 개요

TPM 시스템의 알림을 백그라운드 작업으로 확장하여, 앱이 닫혀있거나 백그라운드에 있을 때도 실시간으로 긴급 알림을 받을 수 있습니다.

## ✨ 주요 기능

### 1. Service Worker 기반 백그라운드 처리
- ✅ 앱이 닫혀있어도 작동
- ✅ 배터리 효율적
- ✅ PWA와 완벽 통합
- ✅ 오프라인 지원

### 2. Push 알림
- ✅ 서버에서 직접 푸시
- ✅ 사용자 맞춤 알림
- ✅ 긴급도 구분
- ✅ 액션 버튼 지원

### 3. 백그라운드 동기화
- ✅ 네트워크 복구 시 자동 동기화
- ✅ 주기적 체크 (5분마다)
- ✅ 실패 시 재시도
- ✅ 배터리 최적화

### 4. 로컬 폴링 (Fallback)
- ✅ Service Worker 미지원 브라우저 대응
- ✅ 설정 가능한 간격
- ✅ 수동 체크 기능
- ✅ 자동 시작/중지

## 🔧 구현 구조

### 파일 구조
```
/utils
  └── backgroundNotifications.ts           # 백그라운드 알림 유틸 + Service Worker 코드
/App.tsx                                   # 시스템 초기화
```

**참고:** Service Worker 코드는 `backgroundNotifications.ts` 내부에 인라인으로 포함되어 Blob URL로 등록됩니다.

## 📋 Service Worker 구현

### 기본 구조

```javascript
// service-worker.js

// 설치
self.addEventListener('install', (event) => {
  console.log('✅ Service Worker 설치됨');
  self.skipWaiting();
});

// 활성화
self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker 활성화됨');
  event.waitUntil(clients.claim());
});
```

### Push 알림 수신

```javascript
self.addEventListener('push', (event) => {
  const data = event.data.json();

  const title = data.title || 'TPM 시스템 알림';
  const options = {
    body: data.body,
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    vibrate: [200, 100, 200],
    tag: data.tag || 'tpm-notification',
    requireInteraction: data.urgent || false,
    actions: [
      { action: 'view', title: '확인하기' },
      { action: 'close', title: '닫기' },
    ],
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
```

### 알림 클릭 처리

```javascript
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'view') {
    // TPM 페이지로 이동
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then((clientList) => {
        // 이미 열린 창이 있으면 포커스
        for (const client of clientList) {
          if (client.url.includes('/tpm')) {
            return client.focus();
          }
        }
        // 없으면 새 창 열기
        return clients.openWindow('/?page=tpm');
      })
    );
  }
});
```

### 백그라운드 동기화

```javascript
self.addEventListener('sync', (event) => {
  if (event.tag === 'check-tpm-alerts') {
    event.waitUntil(checkTPMAlerts());
  }
});

async function checkTPMAlerts() {
  const response = await fetch('/api/tpm/check-alerts');
  const alerts = await response.json();
  
  for (const alert of alerts) {
    if (alert.urgent && !alert.acknowledged) {
      await self.registration.showNotification('🚨 긴급 TPM 알림', {
        body: alert.message,
        requireInteraction: true,
      });
    }
  }
}
```

### 주기적 동기화 (Chrome 80+)

```javascript
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'check-tpm-alerts') {
    event.waitUntil(checkTPMAlerts());
  }
});
```

## 🛠️ 클라이언트 유틸리티

### Service Worker 등록

```typescript
// backgroundNotifications.ts

export async function registerServiceWorker(): Promise<boolean> {
  if (!('serviceWorker' in navigator)) {
    console.warn('⚠️ Service Worker를 지원하지 않는 브라우저입니다');
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.register('/service-worker.js');
    console.log('✅ Service Worker 등록 완료');
    return true;
  } catch (error) {
    console.error('❌ Service Worker 등록 실패:', error);
    return false;
  }
}
```

### 알림 권한 요청

```typescript
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) {
    return 'denied';
  }

  if (Notification.permission === 'granted') {
    return 'granted';
  }

  return await Notification.requestPermission();
}
```

### Push 구독

```typescript
export async function subscribeToPushNotifications(): Promise<PushSubscription | null> {
  const registration = await navigator.serviceWorker.ready;

  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: 'YOUR_VAPID_PUBLIC_KEY',
  });

  // 서버에 구독 정보 전송
  await fetch('/api/push/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
  });

  return subscription;
}
```

### 백그라운드 동기화 등록

```typescript
export async function registerBackgroundSync(tag: string = 'check-tpm-alerts'): Promise<boolean> {
  const registration = await navigator.serviceWorker.ready;

  if (!('sync' in registration)) {
    console.warn('⚠️ 백그라운드 동기화를 지원하지 않는 브라우저입니다');
    return false;
  }

  await (registration as any).sync.register(tag);
  console.log(`✅ 백그라운드 동기화 등록: ${tag}`);
  return true;
}
```

### 주기적 동기화 등록

```typescript
export async function registerPeriodicSync(
  tag: string = 'check-tpm-alerts',
  minInterval: number = 5 * 60 * 1000 // 5분
): Promise<boolean> {
  const registration = await navigator.serviceWorker.ready;

  if (!('periodicSync' in registration)) {
    console.warn('⚠️ 주기적 동기화를 지원하지 않는 브라우저입니다');
    return false;
  }

  await (registration as any).periodicSync.register(tag, { minInterval });
  console.log(`✅ 주기적 동기화 등록: ${tag} (${minInterval}ms)`);
  return true;
}
```

### Service Worker 메시지 전송

```typescript
export async function sendMessageToServiceWorker(message: any): Promise<void> {
  if (!navigator.serviceWorker.controller) {
    console.warn('⚠️ Service Worker 컨트롤러가 없습니다');
    return;
  }

  navigator.serviceWorker.controller.postMessage(message);
}

// 즉시 알림 체크
export async function checkAlertsNow(): Promise<void> {
  await sendMessageToServiceWorker({
    type: 'CHECK_ALERTS',
  });
}

// 커스텀 알림 표시
export async function showCustomNotification(
  title: string,
  body: string,
  urgent: boolean = false
): Promise<void> {
  await sendMessageToServiceWorker({
    type: 'SHOW_NOTIFICATION',
    title,
    body,
    urgent,
  });
}
```

### 폴링 Fallback

```typescript
let pollingInterval: NodeJS.Timeout | null = null;

export function startTPMAlertPolling(intervalMs: number = 5 * 60 * 1000): void {
  pollingInterval = setInterval(async () => {
    console.log('⏰ TPM 알림 체크...');
    await checkAlertsNow();
  }, intervalMs);
}

export function stopTPMAlertPolling(): void {
  if (pollingInterval) {
    clearInterval(pollingInterval);
    pollingInterval = null;
  }
}
```

## 🚀 시스템 초기화

### App.tsx에서 초기화

```typescript
// App.tsx

useEffect(() => {
  const initBackgroundNotifications = async () => {
    const { 
      initializeBackgroundNotifications, 
      startTPMAlertPolling 
    } = await import('./utils/backgroundNotifications');
    
    try {
      await initializeBackgroundNotifications();
      console.log('✅ 백그라운드 알림 시스템 활성화');
      
      // Fallback 폴링도 시작
      startTPMAlertPolling(5 * 60 * 1000); // 5분마다
    } catch (error) {
      console.error('❌ 백그라운드 알림 초기화 실패:', error);
    }
  };

  initBackgroundNotifications();
}, []);
```

### 올인원 초기화 함수

```typescript
export async function initializeBackgroundNotifications(): Promise<void> {
  console.log('🚀 백그라운드 알림 시스템 초기화...');

  // 1. Service Worker 등록
  const swRegistered = await registerServiceWorker();
  if (!swRegistered) return;

  // 2. 알림 권한 요청
  const permission = await requestNotificationPermission();
  if (permission !== 'granted') return;

  // 3. 백그라운드 동기화 등록
  await registerBackgroundSync('check-tpm-alerts');

  // 4. 주기적 동기화 등록
  await registerPeriodicSync('check-tpm-alerts', 5 * 60 * 1000);

  console.log('✅ 백그라운드 알림 시스템 초기화 완료');
}
```

## 📱 사용 시나리오

### Scenario 1: 긴급 고장 발생

```
1. 서버에서 긴급 알림 감지
   └─ Push 서버로 알림 전송

2. Push 서버 → 사용자 디바이스
   └─ Service Worker가 알림 수신

3. Service Worker가 알림 표시
   └─ "🚨 긴급 TPM 알림"
   └─ "B 라인 15번 설비 고장 발생"
   └─ [확인하기] [닫기] 버튼

4. 사용자가 [확인하기] 클릭
   └─ 앱 열림 또는 포커스
   └─ TPM 페이지로 이동
   └─ 설비 상세 정보 표시
```

### Scenario 2: 주기적 점검 알림

```
1. 주기적 동기화 (5분마다)
   └─ Service Worker가 서버 API 호출

2. 점검 예정 항목 발견
   └─ "🔔 점검 알림"
   └─ "오늘 오후 2시 A-001 주간 점검"

3. 사용자가 확인
   └─ 점검 일정 페이지로 이동
```

### Scenario 3: 오프라인 → 온라인 복구

```
1. 네트워크 연결 끊김
   └─ 오프라인 상태

2. 네트워크 연결 복구
   └─ Service Worker의 sync 이벤트 발생

3. 자동으로 미싱된 알림 체크
   └─ 오프라인 중 발생한 알림 가져오기
   └─ 사용자에게 표시
```

## 🔐 보안 고려사항

### 1. VAPID 키 관리

```typescript
// ❌ 절대 클라이언트 코드에 하드코딩하지 마세요
const vapidPublicKey = 'BNx...';

// ✅ 환경 변수 사용
const vapidPublicKey = import.meta.env.VITE_VAPID_PUBLIC_KEY;
```

### 2. 구독 검증

```typescript
// 서버에서 구독 정보 검증
app.post('/api/push/subscribe', async (req, res) => {
  const subscription = req.body;
  
  // 사용자 인증 확인
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  // 구독 정보 저장
  await saveSubscription(req.user.id, subscription);
  
  res.json({ success: true });
});
```

### 3. 알림 필터링

```typescript
// 사용자별 알림 권한 확인
async function checkTPMAlerts() {
  const response = await fetch('/api/tpm/check-alerts', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  
  // 서버가 사용자 권한에 맞는 알림만 반환
}
```

## 🌐 브라우저 호환성

### Service Worker
| 브라우저 | 지원 버전 |
|---------|----------|
| Chrome | 40+ |
| Firefox | 44+ |
| Safari | 11.1+ |
| Edge | 17+ |
| iOS Safari | 11.3+ |

### Push API
| 브라우저 | 지원 버전 |
|---------|----------|
| Chrome | 50+ |
| Firefox | 44+ |
| Safari | 16+ ⚠️ |
| Edge | 17+ |

### Background Sync
| 브라우저 | 지원 버전 |
|---------|----------|
| Chrome | 49+ |
| Firefox | ❌ |
| Safari | ❌ |
| Edge | 79+ |

### Periodic Sync
| 브라우저 | 지원 버전 |
|---------|----------|
| Chrome | 80+ |
| Others | ❌ |

⚠️ **Safari Push 알림:** Safari 16+에서만 Web Push를 지원하며, iOS는 16.4+에서 지원합니다.

## 🐛 문제 해결

### 1. Service Worker가 등록 안 돼요

```
❌ 문제: HTTPS 필요
✅ 해결: 
   개발: localhost는 HTTP 허용
   배포: HTTPS 인증서 필요
```

### 2. 알림이 안 와요

```
❌ 문제: 알림 권한이 없음
✅ 해결: 브라우저 설정에서 알림 허용

Chrome: 설정 > 개인정보 및 보안 > 사이트 설정 > 알림
```

### 3. 백그라운드 동기화가 안 돼요

```
❌ 문제: Firefox/Safari는 미지원
✅ 해결: 폴링 fallback 사용

startTPMAlertPolling(5 * 60 * 1000);
```

### 4. Push 알림이 안 와요

```
❌ 문제: VAPID 키 설정 안 됨
✅ 해결:
   1. VAPID 키 생성 (web-push npm 패키지)
   2. 공개 키를 클라이언트에 설정
   3. 비밀 키를 서버에 저장
```

## 🧪 테스트

### 로컬 테스트

```typescript
// 즉시 알림 표시
import { showCustomNotification } from './utils/backgroundNotifications';

showCustomNotification(
  '테스트 알림',
  '백그라운드 알림 시스템 테스트',
  true // 긴급
);
```

### Service Worker 디버깅

```
Chrome DevTools:
  Application > Service Workers
  - 현재 상태 확인
  - 강제 업데이트
  - 로그 확인
```

### Push 알림 시뮬레이션

```typescript
// 개발 중 Push 시뮬레이션
self.dispatchEvent(new Event('push', {
  data: {
    json: () => ({
      title: '테스트 알림',
      body: 'Push 알림 테스트',
      urgent: true,
    }),
  },
}));
```

## 🚀 배포 가이드

### 1. VAPID 키 생성

```bash
npm install -g web-push
web-push generate-vapid-keys
```

### 2. 환경 변수 설정

```env
# .env
VITE_VAPID_PUBLIC_KEY=BNx...
VAPID_PRIVATE_KEY=xxx...  # 서버만
```

### 3. Service Worker 등록

Service Worker는 `backgroundNotifications.ts`에서 동적으로 생성되어 Blob URL로 등록됩니다.

```typescript
// 자동으로 처리됨 - 별도 작업 불필요
const swCode = createServiceWorkerCode();
const blob = new Blob([swCode], { type: 'application/javascript' });
const swUrl = URL.createObjectURL(blob);
await navigator.serviceWorker.register(swUrl);
```

### 4. Push 서버 구현

```typescript
// 서버에서 Push 전송
import webpush from 'web-push';

webpush.setVapidDetails(
  'mailto:support@hicon.com',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

async function sendPushNotification(subscription, data) {
  await webpush.sendNotification(
    subscription,
    JSON.stringify(data)
  );
}
```

## 📊 모니터링

### 알림 통계

```typescript
// 알림 전송 로그
{
  timestamp: '2025-11-01T10:30:00Z',
  user_id: 'user123',
  notification_type: 'urgent_tpm_alert',
  delivered: true,
  acknowledged: false,
}
```

### Service Worker 상태

```typescript
navigator.serviceWorker.getRegistrations().then((registrations) => {
  console.log(`활성 Service Worker: ${registrations.length}개`);
});
```

## ✅ 체크리스트

백그라운드 알림 시스템 구현:

- [x] Service Worker 파일 생성
- [x] 클라이언트 유틸리티 구현
- [x] App.tsx 초기화
- [x] Push 알림 수신 처리
- [x] 백그라운드 동기화
- [x] 폴링 fallback
- [ ] VAPID 키 생성 및 설정
- [ ] Push 서버 API 구현
- [ ] Supabase Functions 연동
- [ ] 알림 구독 관리 UI
- [ ] 알림 히스토리
- [ ] 분석 대시보드

## 🎉 결론

이제 TPM 시스템이 **앱이 닫혀있어도 실시간으로 알림을 받을 수 있는** 백그라운드 알림 시스템을 갖추었습니다!

**주요 이점:**
- 🔔 실시간 긴급 알림
- 💤 배터리 효율적
- 🌐 오프라인 지원
- 📱 PWA 완전 통합

**다음 단계:**
1. VAPID 키 발급 및 설정
2. Push 서버 구현 (Supabase Functions)
3. 사용자별 알림 설정 UI
4. 알림 통계 대시보드

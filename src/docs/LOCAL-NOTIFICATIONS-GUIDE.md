# 📱 로컬 알림 시스템 가이드 (Service Worker 대체)

## 🎯 개요

Figma Make 환경에서는 Service Worker를 사용할 수 없으므로, **로컬 알림 + 폴링 방식**으로 TPM 알림 시스템을 구현했습니다.

## ❌ Service Worker를 사용할 수 없는 이유

### 시도했던 방법들

**1. 파일 기반 방식**
```typescript
// ❌ 실패: 404 Not Found
await navigator.serviceWorker.register('/service-worker.js');
```
- `/public/service-worker.js` 파일이 배포되지 않음
- Figma Make 환경의 제약

**2. Blob URL 방식**
```typescript
// ❌ 실패: Protocol not supported
const blob = new Blob([swCode], { type: 'application/javascript' });
const swUrl = URL.createObjectURL(blob);
await navigator.serviceWorker.register(swUrl);
```
- 에러: `The URL protocol of the script ('blob:...') is not supported`
- 보안상의 이유로 Blob URL을 Service Worker로 등록 불가

### 결론

이 환경에서는 Service Worker를 **완전히 사용할 수 없습니다**. 대신 로컬 알림 시스템으로 대체합니다.

---

## ✅ 로컬 알림 시스템

### 주요 기능

1. **브라우저 Notification API 사용**
   - Service Worker 없이도 알림 표시 가능
   - 사용자 권한만 있으면 작동
   - 앱이 열려있을 때만 작동

2. **주기적 폴링**
   - 5분마다 자동으로 알림 체크
   - `setInterval`을 사용한 간단한 구현
   - CPU 효율적

3. **localStorage 기반**
   - 긴급 알림을 localStorage에서 관리
   - 빠른 읽기/쓰기
   - 별도 서버 API 불필요

### 제한 사항

❌ **앱이 닫혀있을 때 알림 불가**
- Service Worker 없이는 백그라운드 작업 불가능
- 사용자가 앱을 열어두어야 함

✅ **앱이 열려있을 때는 완벽하게 작동**
- 실시간 알림 표시
- 진동 피드백
- 액션 버튼 (브라우저 지원 시)

---

## 🔧 구현 상세

### 1. 알림 권한 요청

```typescript
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) {
    console.warn('⚠️ 알림을 지원하지 않는 브라우저입니다');
    return 'denied';
  }

  if (Notification.permission === 'granted') {
    console.log('✅ 알림 권한이 이미 허용되어 있습니다');
    return 'granted';
  }

  const permission = await Notification.requestPermission();
  console.log('📬 알림 권한:', permission);
  return permission;
}
```

### 2. 로컬 알림 표시

```typescript
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
```

### 3. 알림 체크 (폴링)

```typescript
export async function checkAlertsNow(): Promise<void> {
  console.log('🔍 TPM 알림 체크 (로컬 모드)');
  
  try {
    // localStorage에서 긴급 알림 확인
    const alertsStr = localStorage.getItem('emergencyAlerts');
    if (!alertsStr) return;
    
    const alerts = JSON.parse(alertsStr);
    const unacknowledged = alerts.filter((a: any) => !a.acknowledged);
    
    if (unacknowledged.length > 0) {
      console.log(`📋 미확인 긴급 알림 ${unacknowledged.length}개 발견`);
      
      // 첫 번째 알림 표시
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
  } catch (error) {
    console.error('❌ 알림 체크 실패:', error);
  }
}
```

### 4. 주기적 폴링

```typescript
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
```

### 5. 시스템 초기화

```typescript
export async function initializeBackgroundNotifications(): Promise<void> {
  console.log('🚀 로컬 알림 시스템 초기화...');

  // 알림 권한 요청
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
```

---

## 🚀 사용 방법

### App.tsx에서 초기화

```typescript
// App.tsx

useEffect(() => {
  const initNotifications = async () => {
    const { 
      initializeBackgroundNotifications, 
      startTPMAlertPolling 
    } = await import('./utils/backgroundNotifications');
    
    try {
      // 로컬 알림 시스템 초기화
      await initializeBackgroundNotifications();
      
      // 5분마다 폴링 시작
      startTPMAlertPolling(5 * 60 * 1000);
      
      console.log('✅ 로컬 알림 시스템 활성화');
    } catch (error) {
      console.error('❌ 알림 초기화 실패:', error);
    }
  };

  initNotifications();
}, []);
```

### 커스텀 알림 표시

```typescript
import { showCustomNotification } from './utils/backgroundNotifications';

// 일반 알림
await showCustomNotification(
  'TPM 알림',
  'A-001 설비 점검 완료',
  false
);

// 긴급 알림
await showCustomNotification(
  '🚨 긴급 알림',
  'B-015 설비 고장 발생!',
  true  // requireInteraction
);
```

### 즉시 알림 체크

```typescript
import { checkAlertsNow } from './utils/backgroundNotifications';

// 버튼 클릭 시 즉시 체크
<Button onClick={checkAlertsNow}>
  지금 알림 체크
</Button>
```

---

## 📊 비교: Service Worker vs 로컬 알림

| 기능 | Service Worker | 로컬 알림 |
|------|---------------|----------|
| **앱 닫혀있을 때 알림** | ✅ 가능 | ❌ 불가능 |
| **앱 열려있을 때 알림** | ✅ 가능 | ✅ 가능 |
| **배터리 효율** | ✅ 높음 | ⚠️ 보통 |
| **구현 난이도** | ⚠️ 복잡 | ✅ 간단 |
| **브라우저 호환성** | ⚠️ 제한적 | ✅ 넓음 |
| **Figma Make 지원** | ❌ 불가능 | ✅ 가능 |

---

## 🎯 시나리오

### Scenario 1: 앱 열려있음 + 긴급 알림 발생

```
1. 사용자가 TPM 페이지를 보고 있음
   ↓
2. 다른 사용자가 긴급 알림 발송
   ↓
3. localStorage에 알림 저장됨
   ↓
4. 5분 이내에 폴링이 감지
   ↓
5. 브라우저 알림 표시
   "🚨 긴급 TPM 알림"
   "B 라인 15번 설비 고장 발생"
   ↓
6. 사용자가 알림 클릭
   ↓
7. 앱이 이미 열려있으므로 즉시 확인 가능
```

### Scenario 2: 앱 닫혀있음 + 긴급 알림 발생

```
1. 사용자가 앱을 닫음
   ↓
2. 긴급 알림 발생
   ↓
3. localStorage에 알림 저장됨
   ↓
4. ❌ 폴링이 작동하지 않음 (앱 닫혀있음)
   ↓
5. 사용자가 나중에 앱을 다시 열면
   ↓
6. 폴링 시작
   ↓
7. 미확인 알림 발견
   ↓
8. 알림 표시
```

**해결책:**
- 사용자에게 앱을 백그라운드에 켜두도록 안내
- 또는 정기적으로 앱을 확인하도록 안내

---

## 🔔 알림 권한 관리

### 권한 요청 UX

```typescript
// 처음 앱 로드 시
if (Notification.permission === 'default') {
  // 사용자에게 알림의 중요성 설명
  const userWantsNotifications = confirm(
    'TPM 긴급 알림을 받으시겠습니까?\n' +
    '설비 고장 등 중요한 상황을 실시간으로 알려드립니다.'
  );
  
  if (userWantsNotifications) {
    await requestNotificationPermission();
  }
}
```

### 권한 상태 확인

```typescript
function getNotificationStatus(): string {
  if (!('Notification' in window)) {
    return '❌ 브라우저가 알림을 지원하지 않습니다';
  }
  
  switch (Notification.permission) {
    case 'granted':
      return '✅ 알림 허용됨';
    case 'denied':
      return '❌ 알림 거부됨 (브라우저 설정에서 변경 가능)';
    case 'default':
      return '⚠️ 알림 권한 요청 필요';
  }
}
```

---

## 🧪 테스트

### 로컬 알림 테스트

```typescript
// 브라우저 콘솔에서
import { showLocalNotification } from './utils/backgroundNotifications';

// 간단한 알림
showLocalNotification('테스트', '로컬 알림이 작동합니다!');

// 긴급 알림
showLocalNotification(
  '🚨 긴급 테스트',
  '긴급 알림 테스트입니다',
  {
    requireInteraction: true,
    vibrate: [200, 100, 200, 100, 200],
  }
);
```

### 폴링 테스트

```typescript
// 1초마다 체크 (테스트용)
startTPMAlertPolling(1000);

// localStorage에 테스트 알림 추가
localStorage.setItem('emergencyAlerts', JSON.stringify([
  {
    id: 'test-1',
    message: '테스트 긴급 알림',
    timestamp: new Date().toISOString(),
    acknowledged: false,
  }
]));

// 1초 후 알림이 표시되는지 확인
```

---

## 📱 모바일 지원

### iOS

```
✅ Safari 7+
✅ Chrome iOS 84+
⚠️ 앱이 포그라운드에 있을 때만 작동
❌ 백그라운드 알림 불가
```

### Android

```
✅ Chrome 42+
✅ Firefox 44+
✅ Samsung Internet 4+
⚠️ 앱이 포그라운드에 있을 때만 작동
❌ 백그라운드 알림 불가
```

### 권장 사항

**모바일 사용자에게 안내:**
```
"📱 모바일에서는 앱을 백그라운드에 켜두어야 
실시간 알림을 받을 수 있습니다."
```

---

## 🎨 UX 개선

### 1. 알림 설정 UI

```typescript
function NotificationSettings() {
  const [enabled, setEnabled] = useState(Notification.permission === 'granted');
  
  return (
    <div>
      <h3>알림 설정</h3>
      <Switch
        checked={enabled}
        onCheckedChange={async (checked) => {
          if (checked) {
            const permission = await requestNotificationPermission();
            setEnabled(permission === 'granted');
          }
        }}
      />
      <p>
        {enabled ? '✅ 알림 켜짐' : '❌ 알림 꺼짐'}
      </p>
      
      {Notification.permission === 'denied' && (
        <Alert>
          알림이 차단되었습니다. 
          브라우저 설정에서 알림을 허용해주세요.
        </Alert>
      )}
    </div>
  );
}
```

### 2. 앱 상태 표시

```typescript
function AppStatus() {
  const [isActive, setIsActive] = useState(true);
  
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(!document.hidden);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);
  
  return (
    <Badge variant={isActive ? 'success' : 'secondary'}>
      {isActive ? '🟢 실시간 알림 활성' : '🟡 백그라운드'}
    </Badge>
  );
}
```

### 3. 마지막 체크 시간 표시

```typescript
function LastCheckTime() {
  const [lastCheck, setLastCheck] = useState<Date | null>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLastCheck(new Date());
    }, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <p className="text-sm text-gray-500">
      마지막 체크: {lastCheck ? lastCheck.toLocaleTimeString() : '대기 중'}
    </p>
  );
}
```

---

## ✅ 체크리스트

로컬 알림 시스템 구현:

- [x] Service Worker 제거
- [x] 로컬 알림 함수 구현
- [x] 폴링 시스템 구현
- [x] localStorage 연동
- [x] App.tsx 초기화
- [x] 에러 핸들링
- [x] 문서 작성
- [ ] 알림 설정 UI
- [ ] 앱 상태 표시
- [ ] 마지막 체크 시간 표시
- [ ] 모바일 최적화
- [ ] 사용자 가이드 작성

---

## 🎉 결론

**제약 사항:**
- ❌ Service Worker 사용 불가 (Figma Make 환경)
- ❌ 백그라운드 알림 불가
- ❌ 앱 닫혀있을 때 알림 불가

**해결책:**
- ✅ 로컬 Notification API 사용
- ✅ 주기적 폴링 (5분 간격)
- ✅ localStorage 기반 알림 관리

**결과:**
- 📱 앱이 열려있을 때는 완벽하게 작동
- 🔔 실시간 알림 표시
- 💡 간단하고 안정적인 구현

**앱을 열어두면 Service Worker 없이도 실시간 알림을 받을 수 있습니다!** 🚀

---

**생성일**: 2025-11-01  
**버전**: 2.0.0 (Service Worker → 로컬 알림)  
**환경**: Figma Make (Service Worker 미지원)

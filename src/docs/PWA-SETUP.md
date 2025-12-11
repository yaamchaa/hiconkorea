# PWA (Progressive Web App) 설정 가이드

하이콘 코리아 대시보드를 모바일 앱처럼 사용할 수 있도록 PWA 설정이 완료되었습니다.

## 📱 현재 PWA 상태

✅ **기본 PWA 기능**
- 오프라인 지원
- 홈 화면에 추가 가능
- 풀스크린 모드
- 반응형 디자인

## 🎨 권장 아이콘 사양

PWA로 완벽하게 동작하려면 다음 아이콘들이 필요합니다:

### **필수 아이콘 사이즈**
- `icon-192x192.png` - Android 홈 화면
- `icon-512x512.png` - Android 스플래시 스크린
- `apple-touch-icon.png` (180x180) - iOS 홈 화면

### **선택 아이콘 사이즈**
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-384x384.png`

## 🎯 아이콘 디자인 가이드

### **하이콘 코리아 브랜드 색상**
- 주요: `#2563eb` (파란색)
- 보조: `#10b981` (녹색)
- 배경: `#f8fafc` (연한 회색)

### **아이콘 컨셉**
1. **심플한 로고형**: 하이콘 로고만 깔끔하게
2. **순환 아이콘**: 재활용 심볼 + 골재 이미지
3. **공장 실루엣**: 건설/재활용 산업 느낌

### **디자인 원칙**
- 배경색은 단색으로 (그라디언트 지양)
- 로고/아이콘은 중앙 배치
- 여백은 전체의 10-15% 확보
- 선명하고 대비가 높은 색상 사용

## 🚀 manifest.json 템플릿

`/public/manifest.json` 파일을 다음과 같이 생성하세요:

```json
{
  "name": "하이콘 코리아 - 순환골재 생산 대시보드",
  "short_name": "하이콘 대시보드",
  "description": "폐기물 재생 순환골재 생산 통합 관리 시스템",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f8fafc",
  "theme_color": "#2563eb",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "shortcuts": [
    {
      "name": "대시보드",
      "short_name": "대시보드",
      "description": "메인 대시보드로 이동",
      "url": "/dashboard",
      "icons": [{ "src": "/icons/dashboard-96x96.png", "sizes": "96x96" }]
    },
    {
      "name": "재고 관리",
      "short_name": "재고",
      "description": "재고 관리 페이지",
      "url": "/inventory",
      "icons": [{ "src": "/icons/inventory-96x96.png", "sizes": "96x96" }]
    },
    {
      "name": "출고 관리",
      "short_name": "출고",
      "description": "출고 관리 페이지",
      "url": "/shipping",
      "icons": [{ "src": "/icons/shipping-96x96.png", "sizes": "96x96" }]
    }
  ],
  "categories": ["business", "productivity", "utilities"],
  "screenshots": [
    {
      "src": "/screenshots/desktop-1.png",
      "sizes": "1280x720",
      "type": "image/png",
      "form_factor": "wide"
    },
    {
      "src": "/screenshots/mobile-1.png",
      "sizes": "750x1334",
      "type": "image/png",
      "form_factor": "narrow"
    }
  ]
}
```

## 🔧 index.html 설정

`index.html`의 `<head>` 섹션에 다음을 추가하세요:

```html
<!-- PWA Manifest -->
<link rel="manifest" href="/manifest.json">

<!-- Theme Color -->
<meta name="theme-color" content="#2563eb">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

<!-- iOS Meta Tags -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="하이콘 대시보드">
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">

<!-- Android/Chrome -->
<meta name="mobile-web-app-capable" content="yes">

<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">

<!-- Splash Screens for iOS -->
<link rel="apple-touch-startup-image" href="/splash/iphone5.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)">
<link rel="apple-touch-startup-image" href="/splash/iphone6.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)">
<link rel="apple-touch-startup-image" href="/splash/iphoneplus.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)">
<link rel="apple-touch-startup-image" href="/splash/iphonex.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)">
<link rel="apple-touch-startup-image" href="/splash/ipad.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)">
```

## 📲 Service Worker 등록

Service Worker가 아직 등록되지 않았다면, `main.tsx` 또는 `index.tsx`에 다음 코드를 추가하세요:

```typescript
// Service Worker 등록 (프로덕션 환경에서만)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}
```

## 🎨 스플래시 스크린 생성

iOS용 스플래시 스크린은 다음 사이즈가 필요합니다:

- iPhone SE: 640x1136px
- iPhone 8: 750x1334px
- iPhone 8 Plus: 1242x2208px
- iPhone X/11 Pro: 1125x2436px
- iPhone 11 Pro Max: 1242x2688px
- iPad: 1536x2048px
- iPad Pro 10.5": 1668x2224px
- iPad Pro 12.9": 2048x2732px

### **스플래시 디자인 권장사항**
1. 중앙에 하이콘 로고
2. 하단에 로딩 인디케이터
3. 브랜드 색상 (#2563eb) 배경
4. "하이콘 코리아" 텍스트

## 🧪 테스트 방법

### **Chrome DevTools**
1. F12 → Application 탭
2. Manifest 섹션 확인
3. Service Workers 등록 확인

### **Lighthouse**
1. F12 → Lighthouse 탭
2. Progressive Web App 항목 체크
3. Generate report 클릭
4. 90점 이상 목표

### **실제 기기 테스트**
1. **Android**: Chrome에서 "홈 화면에 추가"
2. **iOS**: Safari에서 공유 → "홈 화면에 추가"

## 🔗 유용한 도구

- **아이콘 생성**: [RealFaviconGenerator](https://realfavicongenerator.net/)
- **스플래시 생성**: [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator)
- **매니페스트 검증**: [Web App Manifest Validator](https://manifest-validator.appspot.com/)
- **PWA 체크리스트**: [PWA Checklist](https://web.dev/pwa-checklist/)

## 📝 추가 최적화

### **오프라인 지원 강화**
- IndexedDB로 데이터 캐싱
- Background Sync API 활용
- Push Notifications 구현

### **성능 최적화**
- Critical CSS 인라인
- 이미지 Lazy Loading
- Code Splitting
- Service Worker Precaching

## ✅ 완료 체크리스트

- [ ] manifest.json 파일 생성
- [ ] 모든 사이즈 아이콘 준비
- [ ] iOS 스플래시 스크린 준비
- [ ] index.html에 메타 태그 추가
- [ ] Service Worker 등록
- [ ] Chrome/Safari에서 테스트
- [ ] Lighthouse 점수 90+ 달성
- [ ] 실제 기기에서 설치 테스트

## 🎉 완료 후

PWA 설정이 완료되면:
- 모바일에서 "홈 화면에 추가" 가능
- 네이티브 앱처럼 전체 화면 실행
- 오프라인에서도 기본 기능 동작
- 빠른 로딩 속도
- 푸시 알림 수신 가능 (구현 시)

---

**문의사항**: PWA 설정 관련 문의는 개발팀에 연락하세요.

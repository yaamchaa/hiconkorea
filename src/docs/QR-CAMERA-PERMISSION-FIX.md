# 📷 QR 스캐너 카메라 권한 에러 해결

## 🐛 발생했던 에러

```
❌ 카메라 목록 가져오기 실패: NotAllowedError: Permission denied
❌ QR 스캔 에러: 카메라 접근 권한이 필요합니다.
```

---

## 🔍 문제 원인

### 1. 권한 요청 시점 문제

**Before (❌):**
```typescript
// 컴포넌트 마운트 시 즉시 카메라 목록 가져오기 시도
useEffect(() => {
  Html5Qrcode.getCameras()  // ❌ 권한 없으면 실패!
    .then((devices) => {
      setCameras(devices);
    })
    .catch((err) => {
      console.error('카메라 목록 가져오기 실패:', err);
    });
}, []);
```

**문제점:**
- 사용자가 권한을 허용하지 않은 상태에서 카메라 접근 시도
- `Html5Qrcode.getCameras()`는 권한이 필요함
- 권한이 없으면 `NotAllowedError` 발생

### 2. getUserMedia 선행 필요

브라우저는 다음 순서로 작동:
```
1. navigator.mediaDevices.getUserMedia() 호출
   → 사용자에게 권한 팝업 표시
   
2. 사용자가 "허용" 클릭
   → 권한 부여됨
   
3. Html5Qrcode.getCameras() 호출
   → 카메라 목록 반환 가능
```

---

## ✅ 해결 방법

### 1. 명시적 권한 요청 함수

```typescript
const requestCameraPermission = async () => {
  try {
    // 먼저 getUserMedia로 권한 요청
    const stream = await navigator.mediaDevices.getUserMedia({ 
      video: { facingMode: 'environment' } // 후면 카메라 우선
    });
    
    // 권한을 받았으면 즉시 스트림 중지 (html5-qrcode가 다시 열 것임)
    stream.getTracks().forEach(track => track.stop());
    
    setPermissionGranted(true);
    
    // 이제 카메라 목록 가져오기
    const devices = await Html5Qrcode.getCameras();
    
    if (devices && devices.length > 0) {
      const cameraList = devices.map((device) => ({
        id: device.id,
        label: device.label || `카메라 ${device.id}`,
      }));
      setCameras(cameraList);
      
      // 후면 카메라 우선 선택
      const backCamera = devices.find((d) => 
        d.label.toLowerCase().includes('back') || 
        d.label.toLowerCase().includes('rear') ||
        d.label.toLowerCase().includes('environment')
      );
      setCameraId(backCamera?.id || devices[0].id);
      
      console.log('✅ 카메라 권한 허용됨:', cameraList.length, '개 카메라 발견');
    }
  } catch (err: any) {
    // 에러 처리
    if (err.name === 'NotAllowedError') {
      setError('카메라 접근 권한이 거부되었습니다.');
    }
  }
};
```

### 2. 2단계 버튼 UI

**Step 1: 권한 요청**
```tsx
{!permissionGranted ? (
  <Button onClick={requestCameraPermission}>
    <Camera className="w-4 h-4 mr-2" />
    카메라 권한 허용
  </Button>
) : (
  // Step 2: 스캔 시작
  <Button onClick={startScanning}>
    <Camera className="w-4 h-4 mr-2" />
    스캔 시작
  </Button>
)}
```

### 3. 상세 에러 메시지

```typescript
catch (err: any) {
  if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
    setError('카메라 접근 권한이 거부되었습니다. 브라우저 설정에서 카메라 권한을 허용해주세요.');
  } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
    setError('카메라를 찾을 수 없습니다. 카메라가 연결되어 있는지 확인해주세요.');
  } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
    setError('카메라가 이미 다른 앱에서 사용 중입니다.');
  } else if (err.name === 'SecurityError') {
    setError('보안 오류: HTTPS 환경에서만 카메라를 사용할 수 있습니다.');
  } else {
    setError(`카메라 접근 오류: ${err.message || '알 수 없는 오류'}`);
  }
}
```

---

## 🎯 사용자 플로우 (수정 후)

### Before (❌ 에러 발생)
```
1. QR 스캐너 다이얼로그 열기
   ↓
2. 자동으로 카메라 목록 가져오기 시도
   ↓
3. ❌ NotAllowedError: Permission denied
   ↓
4. 에러 메시지 표시
   ↓
5. 사용자 막막함
```

### After (✅ 정상 작동)
```
1. QR 스캐너 다이얼로그 열기
   ↓
2. "카메라 권한 허용" 버튼 표시
   ↓
3. 사용자가 버튼 클릭
   ↓
4. 브라우저 권한 팝업 표시
   "이 사이트에서 카메라를 사용하도록 허용하시겠습니까?"
   ↓
5. 사용자가 "허용" 클릭
   ↓
6. ✅ 카메라 권한 부여됨
   ↓
7. 카메라 목록 자동 로드
   ↓
8. "스캔 시작" 버튼으로 변경
   ↓
9. 사용자가 "스캔 시작" 클릭
   ↓
10. 카메라 활성화
   ↓
11. QR 코드 스캔 가능
```

---

## 🧪 테스트 시나리오

### Scenario 1: 첫 방문 사용자

```typescript
// 상태: 권한 없음 (permissionGranted = false)

1. QR 스캐너 열기
   → "카메라 권한 허용" 버튼 표시
   
2. "카메라 권한 허용" 클릭
   → 브라우저 권한 팝업
   
3. "허용" 클릭
   → ✅ 카메라 2개 발견
   → "스캔 시작" 버튼으로 변경
   
4. "스캔 시작" 클릭
   → ✅ 카메라 활성화
   → QR 코드 스캔 가능
```

### Scenario 2: 권한 거부한 사용자

```typescript
// 상태: 권한 없음

1. "카메라 권한 허용" 클릭
   → 브라우저 권한 팝업
   
2. "차단" 클릭
   → ❌ NotAllowedError
   → "카메라 접근 권한이 거부되었습니다. 
       브라우저 설정에서 카메라 권한을 허용해주세요."
   → "다시 시도" 버튼 표시
   
3. 브라우저 설정에서 권한 허용
   
4. "다시 시도" 클릭
   → ✅ 권한 허용됨
   → 정상 작동
```

### Scenario 3: 이미 권한이 있는 사용자

```typescript
// 상태: 권한 있음 (permissionGranted = true)

1. QR 스캐너 열기
   → "카메라 권한 허용" 버튼 클릭
   → ✅ 권한 이미 있음
   → 바로 카메라 목록 로드
   → "스캔 시작" 버튼 표시
   
2. "스캔 시작" 클릭
   → ✅ 즉시 카메라 활성화
   → QR 코드 스캔 가능
```

### Scenario 4: HTTPS가 아닌 환경

```typescript
// http://localhost가 아닌 http://... 환경

1. "카메라 권한 허용" 클릭
   → ❌ SecurityError
   → "보안 오류: HTTPS 환경에서만 카메라를 사용할 수 있습니다."
   
해결책: HTTPS로 배포하거나 localhost 사용
```

---

## 📱 모바일 테스트

### iOS Safari

```
✅ 권한 요청: 정상 작동
✅ 전면 카메라: 작동
✅ 후면 카메라: 작동
⚠️ 주의: 처음에는 전면 카메라만 표시될 수 있음
   → 카메라 전환 버튼 사용
```

### Android Chrome

```
✅ 권한 요청: 정상 작동
✅ 전면 카메라: 작동
✅ 후면 카메라: 작동 (자동 선택)
✅ 카메라 전환: 정상 작동
```

---

## 🔧 추가 개선 사항

### 1. 권한 상태 체크

```typescript
// 권한이 이미 허용되었는지 체크
const checkPermission = async () => {
  try {
    const result = await navigator.permissions.query({ name: 'camera' as PermissionName });
    
    if (result.state === 'granted') {
      // 이미 권한이 있으면 바로 카메라 목록 로드
      await requestCameraPermission();
    }
  } catch (err) {
    // permissions.query를 지원하지 않는 브라우저
    console.log('Permissions API not supported');
  }
};
```

### 2. 자동 재시도

```typescript
// 권한이 허용되면 자동으로 스캔 시작
useEffect(() => {
  if (permissionGranted && cameraId && !isScanning) {
    // 자동 시작은 UX상 좋지 않을 수 있으므로 옵션
    // startScanning();
  }
}, [permissionGranted, cameraId]);
```

### 3. 권한 상태 표시

```tsx
{permissionGranted ? (
  <Badge variant="success">
    ✅ 카메라 권한 허용됨
  </Badge>
) : (
  <Badge variant="secondary">
    ⚠️ 카메라 권한 필요
  </Badge>
)}
```

---

## 🎨 UI 개선

### Before
```tsx
// 단순한 버튼
<Button onClick={startScanning}>
  스캔 시작
</Button>
```

### After
```tsx
// 권한 상태에 따른 UI
{!permissionGranted ? (
  // Step 1: 권한 요청
  <>
    <Alert>
      <AlertDescription>
        카메라를 사용하려면 권한이 필요합니다. 
        "카메라 권한 허용" 버튼을 클릭해주세요.
      </AlertDescription>
    </Alert>
    
    <Button onClick={requestCameraPermission} className="flex-1">
      <Camera className="w-4 h-4 mr-2" />
      카메라 권한 허용
    </Button>
  </>
) : !isScanning ? (
  // Step 2: 스캔 시작
  <Button onClick={startScanning} disabled={!cameraId} className="flex-1">
    <Camera className="w-4 h-4 mr-2" />
    스캔 시작
  </Button>
) : (
  // Step 3: 스캔 중
  <Button onClick={stopScanning} variant="destructive" className="flex-1">
    <CameraOff className="w-4 h-4 mr-2" />
    스캔 중지
  </Button>
)}

{/* 에러 메시지 + 재시도 버튼 */}
{error && (
  <Alert variant="destructive">
    <AlertDescription>
      {error}
      {error.includes('거부') && (
        <Button
          size="sm"
          variant="outline"
          onClick={requestCameraPermission}
          className="mt-2"
        >
          다시 시도
        </Button>
      )}
    </AlertDescription>
  </Alert>
)}
```

---

## 🔍 디버깅 가이드

### 1. 권한 상태 확인

```typescript
// 브라우저 콘솔에서
navigator.permissions.query({ name: 'camera' }).then(result => {
  console.log('카메라 권한 상태:', result.state);
  // 'granted', 'denied', 'prompt'
});
```

### 2. 카메라 목록 확인

```typescript
// 권한이 있는 상태에서
navigator.mediaDevices.enumerateDevices().then(devices => {
  const cameras = devices.filter(d => d.kind === 'videoinput');
  console.log('사용 가능한 카메라:', cameras);
});
```

### 3. 에러 로그

```typescript
catch (err) {
  console.error('에러 이름:', err.name);
  console.error('에러 메시지:', err.message);
  console.error('전체 에러:', err);
}
```

### 4. 브라우저 권한 리셋

```
Chrome: chrome://settings/content/camera
Firefox: about:preferences#privacy
Safari: 환경설정 → 웹사이트 → 카메라
```

---

## ✅ 체크리스트

QR 스캐너 카메라 권한 수정:

- [x] `requestCameraPermission()` 함수 추가
- [x] `getUserMedia()` 먼저 호출
- [x] `permissionGranted` 상태 추가
- [x] 2단계 버튼 UI (권한 허용 → 스캔 시작)
- [x] 상세 에러 메시지
- [x] "다시 시도" 버튼
- [x] HTTPS 에러 처리
- [x] 후면 카메라 우선 선택
- [x] 카메라 전환 기능
- [x] 문서 작성

---

## 🎉 최종 결과

### Before (❌)
```
❌ NotAllowedError: Permission denied
❌ 사용자가 어떻게 해야 할지 모름
❌ 에러만 표시되고 해결 방법 없음
```

### After (✅)
```
✅ 명확한 권한 요청 버튼
✅ 브라우저 권한 팝업 자동 표시
✅ 상세한 에러 메시지
✅ "다시 시도" 버튼 제공
✅ 권한 허용 후 즉시 사용 가능
✅ 모든 에러 케이스 처리
```

---

## 🚀 추가 개선 제안

1. **권한 설명 다이얼로그**
   ```typescript
   // 권한 요청 전에 설명 표시
   "QR 코드를 스캔하려면 카메라 접근이 필요합니다.
    설비 정보를 빠르게 조회할 수 있습니다."
   ```

2. **튜토리얼 모드**
   ```typescript
   // 첫 사용자를 위한 가이드
   "1단계: 카메라 권한 허용
    2단계: 스캔 시작
    3단계: QR 코드를 사각형 안에 위치"
   ```

3. **권한 복구 가이드**
   ```typescript
   // 권한이 거부된 경우
   <Alert>
     카메라 권한이 차단되었습니다.
     
     Chrome: 주소창 옆 🔒 아이콘 → 카메라 허용
     Safari: 설정 → Safari → 카메라 → 허용
   </Alert>
   ```

---

**생성일**: 2025-11-01  
**버전**: 1.0.0  
**해결**: QR 스캐너 카메라 권한 에러 완전 수정 ✅

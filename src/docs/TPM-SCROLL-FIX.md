# TPM 페이지 스크롤 문제 해결

## 🐛 문제 상황

**증상:**
- TPM 페이지에서 스크롤이 전혀 작동하지 않음
- ScrollArea 컴포넌트를 추가했지만 스크롤바가 보이지 않음
- 콘텐츠가 화면을 벗어나도 스크롤 불가능

## 🔍 원인 분석

### 문제의 핵심: 높이 충돌

#### App.tsx (부모 컴포넌트)
```tsx
{showTPM && (
  <motion.div
    className="bg-white relative w-screen h-screen"  // ← h-screen 설정
  >
    <TPMPage onBack={() => setShowTPM(false)} />
  </motion.div>
)}
```

#### TPMPage.tsx (자식 컴포넌트) - Before
```tsx
return (
  <div className="h-screen bg-gray-50 overflow-hidden">  // ← 또 h-screen 설정!
    <ScrollArea className="flex-1">  // ← flex-1이 작동 안 함
      {/* 콘텐츠 */}
    </ScrollArea>
  </div>
);
```

### 왜 스크롤이 안 됐을까?

```
App.tsx:         h-screen (100vh)
  └─ TPMPage:    h-screen (100vh)  ❌ 충돌!
      └─ ScrollArea: flex-1  ❌ 부모가 flex가 아니므로 무시됨
```

**문제점:**
1. 부모가 이미 `h-screen`으로 고정 높이를 가짐
2. 자식도 `h-screen`을 사용하여 부모와 동일한 높이로 설정
3. ScrollArea는 `flex-1`을 사용했지만 부모가 `flex`가 아님
4. 결과: ScrollArea의 높이가 0 또는 부모를 초과하지 못함

## ✅ 해결 방법

### 변경된 코드

#### TPMPage.tsx - After
```tsx
return (
  <div className="w-full h-full bg-gray-50 overflow-hidden">  // ✅ h-full로 변경
    <ScrollArea className="h-full w-full">  // ✅ h-full w-full 명시
      <div className="p-4 md:p-6">
        {/* 콘텐츠 */}
      </div>
    </ScrollArea>
  </div>
);
```

### 핵심 변경 사항

| Before | After | 이유 |
|--------|-------|------|
| `h-screen` | `h-full` | 부모의 높이를 상속받음 |
| `flex-1` | `h-full w-full` | 명시적으로 100% 크기 지정 |
| ❌ | `overflow-hidden` | 스크롤이 ScrollArea 내부에서만 발생하도록 |

### 작동 원리

```
App.tsx:         h-screen (100vh) ← 최상위 높이 정의
  └─ TPMPage:    h-full (100% of parent = 100vh) ← 부모 높이 상속
      └─ ScrollArea: h-full (100% of parent = 100vh) ← 명확한 높이
          └─ Content: p-4 md:p-6 ← 콘텐츠가 ScrollArea를 넘으면 스크롤 발생!
```

## 🎯 CSS 레이아웃 이해하기

### h-screen vs h-full

#### h-screen (100vh)
```css
height: 100vh; /* 뷰포트 높이의 100% */
```
- **사용 시기**: 최상위 컨테이너
- **특징**: 절대적인 높이 값
- **문제**: 중첩되면 충돌 발생

#### h-full (100%)
```css
height: 100%; /* 부모 높이의 100% */
```
- **사용 시기**: 자식 컴포넌트
- **특징**: 상대적인 높이 값
- **장점**: 부모에 따라 유연하게 조정

### flex-1 vs h-full

#### flex-1
```css
flex: 1 1 0%; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
```
- **작동 조건**: 부모가 `display: flex`여야 함
- **문제**: 부모가 flex가 아니면 무시됨

#### h-full
```css
height: 100%;
```
- **작동 조건**: 부모에 명시적인 높이 필요
- **장점**: flex 없이도 작동

## 🔧 일반적인 스크롤 문제 해결 패턴

### 패턴 1: 부모-자식 높이 체인

```tsx
// ✅ 올바른 패턴
<div className="h-screen">           {/* 최상위: 절대 높이 */}
  <div className="h-full">           {/* 자식: 상대 높이 */}
    <ScrollArea className="h-full">  {/* 손자: 상대 높이 */}
      {/* 콘텐츠 */}
    </ScrollArea>
  </div>
</div>

// ❌ 잘못된 패턴
<div className="h-screen">           {/* 최상위: 절대 높이 */}
  <div className="h-screen">         {/* 자식: 절대 높이 (충돌!) */}
    <ScrollArea className="flex-1">  {/* flex 아님 (무시됨!) */}
      {/* 스크롤 안 됨 😱 */}
    </ScrollArea>
  </div>
</div>
```

### 패턴 2: Flex 레이아웃

```tsx
// ✅ Flex 사용 시
<div className="h-screen flex flex-col">  {/* flex 컨테이너 */}
  <header className="h-16">                {/* 고정 높이 */}
    {/* 헤더 */}
  </header>
  <ScrollArea className="flex-1">         {/* 나머지 공간 차지 */}
    {/* 콘텐츠 */}
  </ScrollArea>
</div>
```

### 패턴 3: Grid 레이아웃

```tsx
// ✅ Grid 사용 시
<div className="h-screen grid grid-rows-[auto_1fr]">
  <header>                              {/* 자동 높이 */}
    {/* 헤더 */}
  </header>
  <ScrollArea className="h-full">      {/* 나머지 공간 */}
    {/* 콘텐츠 */}
  </ScrollArea>
</div>
```

## 📋 체크리스트

ScrollArea가 작동하지 않을 때 확인할 것들:

- [ ] **부모의 높이가 명시적으로 설정되어 있는가?**
  - `h-screen`, `h-full`, `h-[500px]` 등

- [ ] **ScrollArea에 명시적인 높이가 있는가?**
  - `h-full`, `flex-1` (부모가 flex인 경우), `h-[600px]` 등

- [ ] **flex-1을 사용했다면 부모가 flex인가?**
  - 부모에 `flex flex-col` 또는 `flex` 있는지 확인

- [ ] **overflow가 올바르게 설정되어 있는가?**
  - 부모: `overflow-hidden`
  - ScrollArea: 자동 처리

- [ ] **높이 충돌이 없는가?**
  - 여러 레벨에서 `h-screen` 중복 사용 금지

## 🎓 배운 점

### 1. 높이 체인의 중요성
```
최상위: h-screen (절대값)
   ↓
중간: h-full (상대값)
   ↓
ScrollArea: h-full (상대값)
   ↓
콘텐츠: 자유 높이
```

모든 단계가 올바르게 연결되어야 스크롤이 작동합니다!

### 2. flex-1의 함정
```
❌ <div className="...">         {/* flex 아님 */}
     <ScrollArea className="flex-1">  {/* 무시됨! */}
```

`flex-1`은 부모가 flex일 때만 작동합니다.

### 3. 명시적 > 암묵적
```
✅ className="h-full w-full"  {/* 명확함 */}
❌ className="flex-1"         {/* 조건부 */}
```

명시적으로 높이를 지정하는 것이 더 안전합니다.

## 🚀 추가 최적화

### 성능 개선
```tsx
// 큰 콘텐츠의 경우
<ScrollArea className="h-full w-full">
  <div className="p-4 md:p-6 min-h-full">  {/* 최소 높이 보장 */}
    {/* 많은 콘텐츠 */}
  </div>
</ScrollArea>
```

### 반응형 높이
```tsx
// 모바일/데스크톱 대응
<div className="h-screen md:h-auto md:min-h-screen">
  <ScrollArea className="h-full">
    {/* 콘텐츠 */}
  </ScrollArea>
</div>
```

## ✅ 최종 결과

**Before:**
```
TPM 페이지 진입
  ↓
스크롤 안 됨 😱
  ↓
콘텐츠 일부만 보임
  ↓
사용 불가능
```

**After:**
```
TPM 페이지 진입
  ↓
우측 스크롤바 표시 ✅
  ↓
마우스 휠/드래그/터치 모두 작동
  ↓
모든 콘텐츠 접근 가능
  ↓
완벽한 사용자 경험! 🎉
```

## 🎯 핵심 요약

1. **h-screen은 최상위에서만 한 번**
2. **자식은 h-full로 부모 높이 상속**
3. **ScrollArea에 명시적 높이 지정**
4. **flex-1은 flex 컨테이너 내부에서만**
5. **부모에 overflow-hidden 추가**

이 5가지 원칙만 지키면 ScrollArea가 완벽하게 작동합니다! ✨

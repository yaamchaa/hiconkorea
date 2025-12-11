# 긴급 알림 시스템 사양서

## 📌 개요
생산 라인에서 긴급 TPM(Total Productive Maintenance) 발생 시 전체 직원에게 즉시 알림을 전송하는 시스템

---

## 🔔 현재 상태 (테스트 모드)

### 동작 방식
- **대상**: 현재 페이지에 접속한 모든 사용자
- **트리거**: 긴급 TPM 버튼 클릭 → QR 코드 스캔 완료 시
- **알림 방법**: 
  - 브라우저 푸시 알림 (Notification API)
  - 화면 상단 Toast 메시지 (Sonner)
- **권한**: 별도 인증 없이 모든 사용자에게 전송

### 구현 파일
- `/utils/emergencyAlert.ts` - 알림 전송 로직
- `/components/ProductionPage.tsx` - 긴급 TPM 버튼 및 QR 스캔

### 테스트 시나리오
1. 생산 관리 페이지 → 생산 현황 탭
2. 가동중인 라인의 "긴급 TPM" 버튼 클릭
3. QR 코드 스캔 (모바일: 카메라, 데스크톱: 수동 입력)
4. 스캔 성공 시 모든 접속자에게 알림 전송

---

## 🚀 실제 서비스 배포 시 요구사항

### 변경사항
**대상 제한**: 등록된 하이콘 코리아 직원에게만 알림 전송

### 구현 방법
1. **직원 등록 시스템**
   - 직원 등록 시 **전화번호 필수 입력**
   - Supabase 테이블: `staff_656276dc` 또는 별도 직원 테이블 생성
   - 필드: `id`, `name`, `phone_number`, `email`, `department`, `position`, `created_at`

2. **알림 전송 로직 변경**
   ```typescript
   // 현재 (테스트): 모든 사용자
   await sendEmergencyAlert(message);
   
   // 실제 서비스: 등록된 직원만
   const registeredStaff = await getRegisteredStaff();
   await sendEmergencyAlertToStaff(registeredStaff, message);
   ```

3. **알림 채널**
   - **1차**: 브라우저 푸시 알림 (현재와 동일)
   - **2차** (옵션): SMS 문자 알림 (전화번호 활용)
   - **3차** (옵션): 이메일 알림

4. **권한 체크**
   - 직원 인증 시스템과 연동
   - 로그인한 직원만 알림 수신 가능
   - 비로그인 사용자는 알림 제외

### 데이터베이스 설계 (예시)
```sql
-- 직원 테이블
CREATE TABLE staff_656276dc (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  phone_number TEXT NOT NULL UNIQUE,  -- 알림용 전화번호
  email TEXT,
  department TEXT,  -- 부서 (생산팀, 관리팀 등)
  position TEXT,    -- 직급
  is_active BOOLEAN DEFAULT true,  -- 재직 여부
  created_at TIMESTAMP DEFAULT NOW()
);

-- 알림 수신 설정 테이블 (옵션)
CREATE TABLE notification_settings_656276dc (
  staff_id UUID REFERENCES staff_656276dc(id),
  push_enabled BOOLEAN DEFAULT true,
  sms_enabled BOOLEAN DEFAULT true,
  email_enabled BOOLEAN DEFAULT true,
  PRIMARY KEY (staff_id)
);
```

### 우선순위
- **P0 (필수)**: 등록된 직원만 알림 수신
- **P1 (중요)**: 전화번호 기반 SMS 알림
- **P2 (선택)**: 알림 수신 설정 개인화

---

## 📋 체크리스트 (배포 전)

### 개발 작업
- [ ] 직원 테이블 생성 및 마이그레이션
- [ ] 직원 등록/수정/삭제 API 구현
- [ ] 긴급 알림 로직을 직원 대상으로 변경
- [ ] SMS 발송 API 연동 (옵션)
- [ ] 알림 수신 설정 UI 구현 (옵션)

### 테스트
- [ ] 등록된 직원에게만 알림 전송 확인
- [ ] 미등록 사용자는 알림 미수신 확인
- [ ] 전화번호 유효성 검증
- [ ] 알림 발송 로그 기록

### 운영
- [ ] 초기 직원 데이터 등록
- [ ] 알림 발송 이력 모니터링
- [ ] 장애 발생 시 대응 방안 수립

---

## 🔧 관련 파일

### 현재 구현
- `/utils/emergencyAlert.ts` - 알림 전송 유틸
- `/components/ProductionPage.tsx` - 긴급 TPM 버튼
- `/components/StaffAuth.tsx` - 직원 인증 (기존)
- `/components/StaffSignupDialog.tsx` - 직원 등록 (기존)

### 추가 필요 (실제 서비스 시)
- `/lib/staff-api.ts` - 직원 관리 API
- `/lib/sms-api.ts` - SMS 발송 API (옵션)
- `/supabase/functions/server/notification.tsx` - 알림 서버 로직
- `/components/NotificationSettingsDialog.tsx` - 알림 설정 UI (옵션)

---

## 💡 참고 사항

### 현재 테스트 모드를 유지하는 이유
- 시스템 안정성 검증
- 알림 발송 로직 테스트
- UI/UX 개선
- 직원 등록 시스템 구축 전까지 임시 운영

### 실제 서비스 전환 시 주의사항
- **개인정보 보호**: 전화번호, 이메일 등 개인정보 처리방침 준수
- **알림 피로도**: 너무 잦은 알림 방지
- **중요도 분류**: 긴급(빨강), 주의(노랑), 정보(파랑) 등 레벨 구분
- **야간/주말 알림**: 근무시간 외 알림 정책 수립

---

## 📞 담당자
- **개발**: Figma Make AI
- **문의**: 하이콘 코리아 IT팀
- **최종 수정일**: 2025년 10월 30일

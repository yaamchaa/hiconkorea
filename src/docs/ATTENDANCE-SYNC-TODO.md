# 출근 통계 시스템 동기화 작업 가이드

## 📋 현재 상태 (2025-11-02)

### ✅ 완료된 작업
- AttendanceStatsPage.tsx 완전 구현 (Mock 데이터 기반)
- 개인 통계, 팀 통계, 예측 분석 UI 완성
- 부서 정보를 SettingsDialog와 일치하도록 수정
- 반응형 차트 (Recharts) 구현
- Framer Motion 0.3초 페이드 전환 적용
- App.tsx 라우팅 연결 완료
- Sidebar 메뉴 추가 완료
- PAGE_PERMISSIONS 권한 설정 완료

### ⚠️ 미완성 작업
- **직원 등록/관리 페이지와 실시간 동기화 안 됨**
- **Mock 데이터만 사용 중 (실제 데이터 연동 필요)**
- **출근 기록 저장소 없음**
- **NFC/QR 출근 시스템과 연동 안 됨**

---

## 🔧 동기화 구현 방안

### 1단계: 출근 기록 저장소 구축

#### localStorage 키 구조
```typescript
// 기존 키
"employeeList" // 직원 목록 (SettingsDialog, StaffManagementPage 사용 중)

// 추가 필요 키
"attendanceRecords" // 출근 기록 저장
```

#### attendanceRecords 데이터 구조
```typescript
interface AttendanceRecord {
  id: string;                    // 고유 ID
  employeeId: string;            // 직원 ID (employeeList의 employeeId와 매칭)
  employeeName: string;          // 직원 이름
  department: string;            // 부서
  date: string;                  // 날짜 (YYYY-MM-DD)
  checkInTime: string;           // 출근 시간 (HH:mm:ss)
  checkOutTime?: string;         // 퇴근 시간 (옵션)
  status: 'present' | 'late' | 'absent' | 'early-leave' | 'out';
  lateMinutes?: number;          // 지각 시간 (분)
  method: 'nfc' | 'qr' | 'manual'; // 출근 방법
  location?: string;             // 출근 위치
  notes?: string;                // 비고
}

// 저장 예시
[
  {
    id: "att_20251102_001",
    employeeId: "HC2024001",
    employeeName: "김철수",
    department: "SCM(영업부)",
    date: "2025-11-02",
    checkInTime: "08:45:23",
    checkOutTime: "18:10:45",
    status: "present",
    method: "nfc",
    location: "본사 1층 출입구"
  }
]
```

---

### 2단계: AttendanceStatsPage.tsx 수정

#### 변경 사항
1. **Mock 데이터 생성 함수 제거**
   ```typescript
   // 삭제: const generateMockAttendanceData = () => { ... }
   ```

2. **실제 데이터 불러오기 추가**
   ```typescript
   const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
   const [employeeList, setEmployeeList] = useState<Employee[]>([]);

   useEffect(() => {
     // localStorage에서 출근 기록 불러오기
     const records = JSON.parse(localStorage.getItem("attendanceRecords") || "[]");
     setAttendanceRecords(records);

     // localStorage에서 직원 목록 불러오기
     const employees = JSON.parse(localStorage.getItem("employeeList") || "[]");
     setEmployeeList(employees);
   }, []);

   // localStorage 변경 감지 (다른 탭/컴포넌트에서 변경 시 실시간 반영)
   useEffect(() => {
     const handleStorageChange = () => {
       const records = JSON.parse(localStorage.getItem("attendanceRecords") || "[]");
       const employees = JSON.parse(localStorage.getItem("employeeList") || "[]");
       setAttendanceRecords(records);
       setEmployeeList(employees);
     };

     window.addEventListener('storage', handleStorageChange);
     
     // 커스텀 이벤트로 같은 탭 내 변경도 감지
     window.addEventListener('localStorageUpdated', handleStorageChange);
     
     return () => {
       window.removeEventListener('storage', handleStorageChange);
       window.removeEventListener('localStorageUpdated', handleStorageChange);
     };
   }, []);
   ```

3. **필터링 로직 수정**
   ```typescript
   const filteredRecords = useMemo(() => {
     return attendanceRecords.filter(record => {
       // 월 필터
       if (selectedMonth && !record.date.startsWith(selectedMonth)) {
         return false;
       }
       
       // 부서 필터
       if (selectedDepartment !== 'all' && record.department !== selectedDepartment) {
         return false;
       }
       
       // 직원 필터
       if (selectedEmployee !== 'all' && record.employeeId !== selectedEmployee) {
         return false;
       }
       
       return true;
     });
   }, [attendanceRecords, selectedMonth, selectedDepartment, selectedEmployee]);
   ```

4. **직원 선택 옵션 동적 생성**
   ```typescript
   <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
     <SelectTrigger>
       <SelectValue />
     </SelectTrigger>
     <SelectContent>
       <SelectItem value="all">전체</SelectItem>
       {employeeList.map(emp => (
         <SelectItem key={emp.id} value={emp.employeeId}>
           {emp.name} ({emp.employeeId})
         </SelectItem>
       ))}
     </SelectContent>
   </Select>
   ```

---

### 3단계: NFC/QR 출근 시스템 연동

#### QRScanner.tsx 수정

현재 QRScanner는 올바로 시스템만 연동되어 있습니다.
출근 기록 저장 기능 추가가 필요합니다.

```typescript
// QRScanner.tsx에 추가
const saveAttendanceRecord = (employeeId: string) => {
  const employees = JSON.parse(localStorage.getItem("employeeList") || "[]");
  const employee = employees.find((e: any) => e.employeeId === employeeId);
  
  if (!employee) {
    toast.error('등록되지 않은 직원', {
      description: '직원 정보를 찾을 수 없습니다.',
    });
    return;
  }

  const now = new Date();
  const currentDate = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const currentTime = now.toTimeString().split(' ')[0]; // HH:mm:ss

  // 근무 시작 시간 (예: 09:00)
  const workStartTime = '09:00:00';
  const lateThreshold = new Date(`${currentDate}T${workStartTime}`);
  const checkInDateTime = new Date(`${currentDate}T${currentTime}`);
  
  const isLate = checkInDateTime > lateThreshold;
  const lateMinutes = isLate 
    ? Math.floor((checkInDateTime.getTime() - lateThreshold.getTime()) / 60000)
    : 0;

  const attendanceRecord = {
    id: `att_${currentDate}_${employeeId}`,
    employeeId: employee.employeeId,
    employeeName: employee.name,
    department: employee.department,
    date: currentDate,
    checkInTime: currentTime,
    status: isLate ? 'late' : 'present',
    lateMinutes: lateMinutes,
    method: 'qr',
    location: 'QR 스캔',
  };

  // 기존 출근 기록 불러오기
  const records = JSON.parse(localStorage.getItem("attendanceRecords") || "[]");
  
  // 오늘 이미 출근한 기록이 있는지 확인
  const existingIndex = records.findIndex(
    (r: any) => r.employeeId === employeeId && r.date === currentDate
  );

  if (existingIndex >= 0) {
    // 이미 출근한 경우 -> 퇴근 처리
    records[existingIndex].checkOutTime = currentTime;
    toast.success('퇴근 처리 완료', {
      description: `${employee.name}님 퇴근이 기록되었습니다.`,
    });
  } else {
    // 새로운 출근 기록 추가
    records.push(attendanceRecord);
    toast.success(isLate ? '지각 출근' : '출근 완료', {
      description: isLate 
        ? `${employee.name}님 ${lateMinutes}분 지각` 
        : `${employee.name}님 출근이 기록되었습니다.`,
    });
  }

  // 저장
  localStorage.setItem("attendanceRecords", JSON.stringify(records));
  
  // 커스텀 이벤트 발생 (실시간 업데이트)
  window.dispatchEvent(new Event('localStorageUpdated'));
};
```

---

### 4단계: 수동 출근 등록 기능 추가 (선택 사항)

AttendanceStatsPage에 관리자용 수동 출근 등록 기능 추가:

```typescript
// Dialog 컴포넌트 추가
<Dialog open={showManualEntry} onOpenChange={setShowManualEntry}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>수동 출근 기록</DialogTitle>
    </DialogHeader>
    <div className="space-y-4">
      <Select value={manualEmployee} onValueChange={setManualEmployee}>
        <SelectTrigger>
          <SelectValue placeholder="직원 선택" />
        </SelectTrigger>
        <SelectContent>
          {employeeList.map(emp => (
            <SelectItem key={emp.id} value={emp.employeeId}>
              {emp.name} ({emp.department})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Input 
        type="date" 
        value={manualDate}
        onChange={(e) => setManualDate(e.target.value)}
      />
      
      <Input 
        type="time" 
        value={manualTime}
        onChange={(e) => setManualTime(e.target.value)}
        placeholder="출근 시간"
      />
      
      <Select value={manualStatus} onValueChange={setManualStatus}>
        <SelectTrigger>
          <SelectValue placeholder="상태 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="present">정상 출근</SelectItem>
          <SelectItem value="late">지각</SelectItem>
          <SelectItem value="absent">결근</SelectItem>
          <SelectItem value="early-leave">조퇴</SelectItem>
          <SelectItem value="out">외출</SelectItem>
        </SelectContent>
      </Select>
      
      <Button onClick={handleManualSave}>등록</Button>
    </div>
  </DialogContent>
</Dialog>
```

---

### 5단계: Supabase 연동 (선택 사항)

현재는 localStorage 기반이지만, 나중에 Supabase로 확장 가능:

```typescript
// /supabase/functions/server/index.tsx에 추가

// 출근 기록 저장
app.post('/make-server-656276dc/attendance', async (c) => {
  const record = await c.req.json();
  
  await kv.set(`attendance:${record.id}`, record);
  
  return c.json({ success: true, id: record.id });
});

// 출근 기록 조회 (월별)
app.get('/make-server-656276dc/attendance/:month', async (c) => {
  const month = c.req.param('month'); // YYYY-MM
  
  const records = await kv.getByPrefix(`attendance:att_${month}`);
  
  return c.json({ records });
});

// 직원별 출근 기록 조회
app.get('/make-server-656276dc/attendance/employee/:employeeId', async (c) => {
  const employeeId = c.req.param('employeeId');
  
  const allRecords = await kv.getByPrefix('attendance:att_');
  const employeeRecords = allRecords.filter(
    (r: any) => r.employeeId === employeeId
  );
  
  return c.json({ records: employeeRecords });
});
```

---

## 📝 작업 체크리스트

### 필수 작업
- [ ] localStorage "attendanceRecords" 키 구조 설계
- [ ] AttendanceStatsPage.tsx Mock 데이터 제거
- [ ] AttendanceStatsPage.tsx 실제 데이터 불러오기 구현
- [ ] localStorage 변경 감지 및 실시간 업데이트
- [ ] QRScanner.tsx 출근 기록 저장 기능 추가
- [ ] NFC 스캔 시 출근 기록 저장 (해당 시)
- [ ] 직원 선택 옵션 동적 생성
- [ ] 필터링 로직 실제 데이터 기반으로 수정

### 선택 작업
- [ ] 관리자용 수동 출근 등록 Dialog 추가
- [ ] 출근 기록 수정/삭제 기능
- [ ] Excel/PDF 내보내기 기능
- [ ] Supabase 백엔드 연동
- [ ] 푸시 알림 (지각 예상 시)
- [ ] 월간 리포트 자동 생성

---

## 🎯 예상 작업 시간

- **1단계 (저장소 구축)**: 30분
- **2단계 (AttendanceStatsPage 수정)**: 1시간
- **3단계 (QR 연동)**: 1시간
- **4단계 (수동 등록)**: 30분
- **5단계 (Supabase 연동)**: 2시간

**총 예상 시간**: 5시간

---

## 🔗 관련 파일

### 수정이 필요한 파일
- `/components/AttendanceStatsPage.tsx` - 메인 통계 페이지
- `/components/QRScanner.tsx` - QR 스캔 출근 기록
- `/supabase/functions/server/index.tsx` - Supabase 백엔드 (선택)

### 참고할 파일
- `/components/SettingsDialog.tsx` - 직원 등록 (employeeList 구조)
- `/components/StaffManagementPage.tsx` - 직원 관리 (localStorage 동기화 패턴)
- `/utils/emergencyAlert.ts` - 푸시 알림 패턴

---

## 💡 참고 사항

### localStorage 동기화 패턴 (StaffManagementPage 참고)
```typescript
// 저장 시
localStorage.setItem("employeeList", JSON.stringify(updatedList));
window.dispatchEvent(new Event('localStorageUpdated'));

// 불러오기 시
useEffect(() => {
  const handleUpdate = () => {
    const data = JSON.parse(localStorage.getItem("employeeList") || "[]");
    setEmployeeList(data);
  };
  
  handleUpdate();
  window.addEventListener('localStorageUpdated', handleUpdate);
  
  return () => {
    window.removeEventListener('localStorageUpdated', handleUpdate);
  };
}, []);
```

### 현재 부서 목록 (동기화 필수)
- SCM(영업부)
- TPM(시설부)
- MES(생산부)
- BOM(시설부)
- 본사(대표)
- 본사 경영지원(전무)
- 이노베이션 전략본부

---

## 🚀 다음 단계

동기화 작업을 시작할 준비가 되면:
1. 이 문서를 참고하여 단계별로 진행
2. 1단계부터 순차적으로 구현
3. 각 단계 완료 시 테스트 및 검증
4. 문제 발생 시 관련 파일 확인

**작성일**: 2025-11-02  
**상태**: 대기 중 (Mock 데이터 사용)  
**우선순위**: Medium (운영 안정화 후 진행 권장)

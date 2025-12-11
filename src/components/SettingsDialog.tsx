import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useState, useEffect } from 'react';
import { toast } from 'sonner@2.0.3';
import { UserPlus, Factory, Wrench, Package, Plus, Trash2, Building2, ExternalLink, Calendar, ChevronDown, ChevronUp, Users, Shield, Lock } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination';
import { Checkbox } from './ui/checkbox';

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[96vw] lg:max-w-[98vw] xl:max-w-[1800px] max-h-[95vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="pb-2">
          <DialogTitle className="flex items-center gap-2">
            시스템 설정 및 계획 등록
          </DialogTitle>
          <DialogDescription>
            직원 등록 및 MES, TPM, BOM 계획을 등록할 수 있습니다.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="employee" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto gap-2">
            <TabsTrigger value="employee" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <UserPlus className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">직원 등록</span>
            </TabsTrigger>
            <TabsTrigger value="mes" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <Factory className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">MES 계획</span>
            </TabsTrigger>
            <TabsTrigger value="tpm" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <Wrench className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">TPM 계획</span>
            </TabsTrigger>
            <TabsTrigger value="bom" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <Package className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">BOM 계획</span>
            </TabsTrigger>
            <TabsTrigger value="companies" className="flex items-center gap-1.5 py-2.5 px-2 sm:px-3">
              <Building2 className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">Featured 회사</span>
            </TabsTrigger>
          </TabsList>

          {/* 직원 등록 */}
          <TabsContent value="employee">
            <EmployeeRegistration dialogOpen={open} />
          </TabsContent>

          {/* MES 계획 등록 */}
          <TabsContent value="mes">
            <PlanRegistration type="MES" />
          </TabsContent>

          {/* TPM 계획 등록 */}
          <TabsContent value="tpm">
            <PlanRegistration type="TPM" />
          </TabsContent>

          {/* BOM 계획 등록 */}
          <TabsContent value="bom">
            <PlanRegistration type="BOM" />
          </TabsContent>

          {/* Featured 회사 관리 */}
          <TabsContent value="companies">
            <FeaturedCompaniesManagement />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

// 페이지 권한 정의
const PAGE_PERMISSIONS = {
  dashboard: { id: 'dashboard', label: '대시보드', icon: '📊' },
  production: { id: 'production', label: '생산 관리', icon: '🏭' },
  inventory: { id: 'inventory', label: '재고 관리', icon: '📦' },
  shipping: { id: 'shipping', label: '출하 관리', icon: '🚚' },
  scm: { id: 'scm', label: 'SCM 구매', icon: '🛒' },
  tpm: { id: 'tpm', label: 'TPM 관리', icon: '🔧' },
  trends: { id: 'trends', label: '트렌드 분석', icon: '📈' },
  reports: { id: 'reports', label: '보고서', icon: '📋' },
  crm: { id: 'crm', label: 'CRM 관리', icon: '👥' },
  backup: { id: 'backup', label: '백업 관리', icon: '💾' },
  audit: { id: 'audit', label: '감사 로그', icon: '🔍' },
  notification: { id: 'notification', label: '알림 설정', icon: '🔔' },
  staff: { id: 'staff', label: '직원 관리', icon: '👤' },
  settings: { id: 'settings', label: '시스템 설정', icon: '⚙️' },
  'attendance-stats': { id: 'attendance-stats', label: '출근 통계', icon: '📊' },
};

// 역할별 권한 프리셋
const ROLE_PRESETS = {
  admin: {
    label: '🛡️ 최고 관리자',
    permissions: Object.keys(PAGE_PERMISSIONS),
  },
  manager: {
    label: '👔 생산 관리자',
    permissions: ['dashboard', 'production', 'inventory', 'shipping', 'tpm', 'trends', 'reports'],
  },
  quality: {
    label: '🔬 품질 관리',
    permissions: ['dashboard', 'tpm', 'reports', 'trends'],
  },
  staff: {
    label: '👷 일반 직원',
    permissions: ['dashboard', 'production'],
  },
  viewer: {
    label: '👁️ 조회 전용',
    permissions: ['dashboard'],
  },
};

// 직원 등록 컴포넌트
function EmployeeRegistration({ dialogOpen }: { dialogOpen: boolean }) {
  interface Employee {
    id: string;
    name: string;
    employeeId: string;
    department: string;
    position: string;
    email: string;
    phone: string;
    userId: string;
    tempPassword: string;
    registeredAt?: string;
    permissions?: string[];
    role?: string;
  }

  const createEmptyEmployee = (): Employee => ({
    id: Math.random().toString(36).substr(2, 9),
    name: '',
    employeeId: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    userId: '',
    tempPassword: '',
    permissions: [],
    role: '',
  });

  const [employees, setEmployees] = useState<Employee[]>([
    createEmptyEmployee(),
    createEmptyEmployee(),
    createEmptyEmployee(),
  ]);

  // 등록된 직원 목록 불러오기
  const [registeredEmployees, setRegisteredEmployees] = useState<Employee[]>([]);

  // Dialog가 열릴 때마다 등록된 직원 목록 불러오기
  useEffect(() => {
    if (dialogOpen) {
      const loadRegisteredEmployees = () => {
        const employeeList = JSON.parse(localStorage.getItem("employeeList") || "[]");
        console.log("설정 창이 열렸습니다. 등록된 직원:", employeeList);
        setRegisteredEmployees(employeeList);
      };
      loadRegisteredEmployees();
    }
  }, [dialogOpen]);

  // 등록된 직원 삭제
  const handleDeleteRegisteredEmployee = (employeeId: string) => {
    if (confirm("이 직원을 삭제하시겠습니까?")) {
      const updatedList = registeredEmployees.filter(emp => emp.id !== employeeId);
      localStorage.setItem("employeeList", JSON.stringify(updatedList));
      setRegisteredEmployees(updatedList);
      
      toast.success('직원 삭제 완료', {
        description: '직원 정보가 삭제되었습니다.',
      });
    }
  };

  const handleAddRow = () => {
    setEmployees([...employees, createEmptyEmployee()]);
  };

  const handleRemoveRow = (id: string) => {
    if (employees.length > 1) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  const handleInputChange = (id: string, field: keyof Employee, value: string | string[]) => {
    setEmployees(prev => prev.map(emp => {
      if (emp.id === id) {
        // 부서가 변경되면 직급도 초기화
        if (field === 'department') {
          return { ...emp, [field]: value, position: '' };
        }
        // 권한 필드는 쉼표로 구분된 문자열을 배열로 변환
        if (field === 'permissions' && typeof value === 'string') {
          return { ...emp, permissions: value.split(',').filter(p => p) };
        }
        return { ...emp, [field]: value };
      }
      return emp;
    }));
  };

  const handleRoleChange = (id: string, roleValue: string) => {
    setEmployees(prev => prev.map(emp => {
      if (emp.id === id) {
        const preset = ROLE_PRESETS[roleValue as keyof typeof ROLE_PRESETS];
        return {
          ...emp,
          role: roleValue,
          permissions: preset ? preset.permissions : []
        };
      }
      return emp;
    }));
  };

  const handleBulkRegister = () => {
    // 빈 행 필터링 (모든 필수 항목 체크)
    const validEmployees = employees.filter(emp => 
      emp.name.trim() && 
      emp.employeeId.trim() && 
      emp.userId.trim() && 
      emp.tempPassword.trim() &&
      emp.role &&
      emp.permissions &&
      emp.permissions.length > 0
    );
    
    if (validEmployees.length === 0) {
      toast.error('등록 실패', {
        description: '최소 1명 이상의 직원 정보를 입력해주세요. (이름, 사번, 사용 ID, 임시 비번, 역할/권한은 필수)',
      });
      return;
    }

    // 필수 항목이 누락된 행 개수
    const invalidCount = employees.filter(emp => 
      emp.name.trim() || emp.employeeId.trim() || emp.userId.trim() || emp.tempPassword.trim()
    ).length - validEmployees.length;

    if (invalidCount > 0) {
      toast.warning('일부 행 제외', {
        description: `필수 항목(이름, 사번, 사용 ID, 임시 비번, 역할/권한)이 누락된 ${invalidCount}개 행은 제외되었습니다.`,
      });
    }

    // localStorage에 직원 정보 저장 (기존 데이터와 병합)
    const existingEmployees = JSON.parse(localStorage.getItem("employeeList") || "[]");
    const newEmployees = validEmployees.map(emp => ({
      ...emp,
      registeredAt: new Date().toISOString(),
    }));
    const updatedEmployees = [...existingEmployees, ...newEmployees];
    
    console.log("=== 일괄 직원 등록 ===");
    console.log("등록할 직원들:", newEmployees);
    console.log("업데이트된 직원 목록:", updatedEmployees);
    
    localStorage.setItem("employeeList", JSON.stringify(updatedEmployees));

    // TODO: 실제 API 연동 시 데이터 저장
    toast.success('직원 일괄 등록 완료', {
      description: `${validEmployees.length}명의 직원이 등록되었습니다.`,
    });

    // 등록된 직원 목록 새로고침
    setRegisteredEmployees(updatedEmployees);

    // 폼 초기화 (3개의 빈 행으로)
    setEmployees([
      createEmptyEmployee(),
      createEmptyEmployee(),
      createEmptyEmployee(),
    ]);
  };

  const handleIndividualRegister = (employee: Employee) => {
    console.log('=== 개별 등록 시도 ===');
    console.log('직원 데이터:', employee);
    console.log('역할:', employee.role);
    console.log('권한:', employee.permissions);
    console.log('권한 개수:', employee.permissions?.length);
    
    // 필수 항목 검증
    if (!employee.name.trim()) {
      toast.error('등록 실패', {
        description: '이름을 입력해주세요.',
      });
      return;
    }
    if (!employee.employeeId.trim()) {
      toast.error('등록 실패', {
        description: '사번을 입력해주세요.',
      });
      return;
    }
    if (!employee.userId.trim()) {
      toast.error('등록 실패', {
        description: '사용 ID를 입력해주세요.',
      });
      return;
    }
    if (!employee.tempPassword.trim()) {
      toast.error('등록 실패', {
        description: '임시 비밀번호를 입력해주세요.',
      });
      return;
    }
    if (!employee.role || !employee.permissions || employee.permissions.length === 0) {
      console.error('❌ 권한 검증 실패!');
      console.log('역할 존재:', !!employee.role);
      console.log('권한 존재:', !!employee.permissions);
      console.log('권한 배열:', employee.permissions);
      toast.error('등록 실패', {
        description: `역할/권한을 선택해주세요. (현재 role: ${employee.role}, permissions: ${employee.permissions?.length || 0}개)`,
      });
      return;
    }

    // localStorage에 직원 정보 저장 (기존 데이터와 병합)
    const existingEmployees = JSON.parse(localStorage.getItem("employeeList") || "[]");
    const newEmployee = {
      ...employee,
      registeredAt: new Date().toISOString(),
    };
    const updatedEmployees = [...existingEmployees, newEmployee];
    
    console.log("=== 개별 직원 등록 ===");
    console.log("등록할 직원:", newEmployee);
    console.log("기존 직원 목록:", existingEmployees);
    console.log("업데이트된 직원 목록:", updatedEmployees);
    
    try {
      localStorage.setItem("employeeList", JSON.stringify(updatedEmployees));
      console.log("✅ localStorage 저장 완료!");
      
      // 저장 확인
      const savedData = localStorage.getItem("employeeList");
      console.log("📦 localStorage에서 읽어온 데이터:", savedData);
      const parsedData = JSON.parse(savedData || "[]");
      console.log("📋 파싱된 데이터:", parsedData);
      console.log("📊 저장된 직원 수:", parsedData.length);
      
      // 특히 임시 비밀번호 확인
      if (parsedData.length > 0) {
        console.log("🔑 마지막 등록 직원의 임시 비번:", parsedData[parsedData.length - 1].tempPassword);
      }
    } catch (error) {
      console.error("❌ localStorage 저장 실패:", error);
      toast.error('저장 실패', {
        description: 'localStorage에 저장할 수 없습니다. 브라우저 설정을 확인하세요.',
      });
      return;
    }

    // TODO: 실제 API 연동 시 개별 데이터 저장
    toast.success('직원 등록 완료', {
      description: `${employee.name}(${employee.employeeId})님이 등록되었습니다.`,
    });

    // 등록된 직원 목록 새로고침
    setRegisteredEmployees(updatedEmployees);

    // 등록된 행 제거 및 새 빈 행 추가
    setEmployees(prev => {
      const filtered = prev.filter(emp => emp.id !== employee.id);
      // 최소 3개 행 유지
      if (filtered.length < 3) {
        const newRows = [];
        for (let i = filtered.length; i < 3; i++) {
          newRows.push(createEmptyEmployee());
        }
        return [...filtered, ...newRows];
      }
      return filtered;
    });
  };

  const departmentOptions = [
    { value: 'scm', label: 'SCM(영업부)' },
    { value: 'tpm', label: 'TPM(시설부)' },
    { value: 'mes', label: 'MES(생산부)' },
    { value: 'bom', label: 'BOM(시설부)' },
    { value: 'headquarters', label: '본사(대표)' },
    { value: 'management', label: '본사 경영지원(전무)' },
    { value: 'innovation', label: '이노베이션 전략본부' },
  ];

  // 부서별 직급 매핑
  const positionsByDepartment: { [key: string]: { value: string; label: string; }[] } = {
    scm: [
      { value: 'staff', label: '직원' },
      { value: 'assistant', label: '주임' },
      { value: 'associate', label: '대리' },
      { value: 'manager', label: '과장' },
      { value: 'team_leader', label: '팀장' },
      { value: 'dept_head', label: '부서장' },
    ],
    tpm: [
      { value: 'staff', label: '직원' },
      { value: 'assistant', label: '주임' },
      { value: 'associate', label: '대리' },
      { value: 'manager', label: '과장' },
      { value: 'team_leader', label: '팀장' },
      { value: 'dept_head', label: '부서장' },
    ],
    mes: [
      { value: 'staff', label: '직원' },
      { value: 'assistant', label: '주임' },
      { value: 'associate', label: '대리' },
      { value: 'manager', label: '과장' },
      { value: 'team_leader', label: '팀장' },
      { value: 'dept_head', label: '부서장' },
    ],
    bom: [
      { value: 'staff', label: '직원' },
      { value: 'assistant', label: '주임' },
      { value: 'associate', label: '대리' },
      { value: 'manager', label: '과장' },
      { value: 'team_leader', label: '팀장' },
      { value: 'dept_head', label: '부서장' },
    ],
    headquarters: [
      { value: 'ceo', label: '대표' },
    ],
    management: [
      { value: 'staff', label: '직원' },
      { value: 'assistant', label: '주임' },
      { value: 'associate', label: '대리' },
      { value: 'manager', label: '과장' },
      { value: 'team_leader', label: '팀장' },
      { value: 'executive_director', label: '전무' },
    ],
    innovation: [
      { value: 'staff', label: '직원' },
      { value: 'general_manager', label: '실장' },
      { value: 'director', label: '이사' },
      { value: 'division_head', label: '본부장' },
      { value: 'ceo', label: '대표' },
    ],
  };

  // 선택된 부서에 따라 직급 옵션 가져오기
  const getPositionOptions = (department: string) => {
    return positionsByDepartment[department] || [];
  };

  // 부서 레이블 가져오기
  const getDepartmentLabel = (value: string) => {
    return departmentOptions.find(opt => opt.value === value)?.label || '-';
  };

  // 직급 레이블 가져오기
  const getPositionLabel = (department: string, value: string) => {
    return positionsByDepartment[department]?.find(opt => opt.value === value)?.label || '-';
  };

  return (
    <div className="space-y-6 py-4">
      {/* 등록된 직원 목록 섹션 */}
      {registeredEmployees.length > 0 && (
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border-2 border-green-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-600 rounded-full">
                <Users className="w-4 h-4 text-white" />
                <span className="text-sm text-white">등록된 직원 목록</span>
              </div>
              <Badge className="bg-green-600 text-white">{registeredEmployees.length}명</Badge>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setRegisteredEmployees([])}
              className="flex items-center gap-2 bg-white hover:bg-green-50"
            >
              초기화
            </Button>
          </div>

          <div className="border-2 border-green-200 rounded-lg overflow-hidden bg-white">
            <ScrollArea className="h-[300px]">
              <Table>
                <TableHeader>
                  <TableRow className="bg-green-50">
                    <TableHead className="w-[4%]">No.</TableHead>
                    <TableHead className="w-[8%]">이름</TableHead>
                    <TableHead className="w-[8%]">사번</TableHead>
                    <TableHead className="w-[10%]">부서</TableHead>
                    <TableHead className="w-[7%]">직급</TableHead>
                    <TableHead className="w-[12%]">이메일</TableHead>
                    <TableHead className="w-[9%]">연락처</TableHead>
                    <TableHead className="w-[8%]">사용 ID</TableHead>
                    <TableHead className="w-[8%]">임시 비번</TableHead>
                    <TableHead className="w-[8%]">역할</TableHead>
                    <TableHead className="w-[10%]">권한</TableHead>
                    <TableHead className="w-[8%]">등록일시</TableHead>
                    <TableHead className="w-[4%]">삭제</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {registeredEmployees.map((emp, index) => (
                    <TableRow key={emp.id}>
                      <TableCell className="text-center text-gray-500">
                        {index + 1}
                      </TableCell>
                      <TableCell className="text-sm">{emp.name}</TableCell>
                      <TableCell className="text-sm">{emp.employeeId}</TableCell>
                      <TableCell className="text-sm">
                        {emp.department ? getDepartmentLabel(emp.department) : '-'}
                      </TableCell>
                      <TableCell className="text-sm">
                        {emp.position ? getPositionLabel(emp.department, emp.position) : '-'}
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">{emp.email || '-'}</TableCell>
                      <TableCell className="text-sm text-gray-600">{emp.phone || '-'}</TableCell>
                      <TableCell className="text-sm">{emp.userId}</TableCell>
                      <TableCell className="text-sm">
                        <code className="bg-yellow-100 px-2 py-1 rounded font-mono text-xs border border-yellow-300 text-yellow-900">{emp.tempPassword}</code>
                      </TableCell>
                      <TableCell className="text-sm">
                        {emp.role ? (
                          <Badge variant="outline" className="text-xs">
                            {ROLE_PRESETS[emp.role as keyof typeof ROLE_PRESETS]?.label || emp.role}
                          </Badge>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </TableCell>
                      <TableCell className="text-xs">
                        {emp.permissions && emp.permissions.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="secondary" className="text-xs">
                              {emp.permissions.length}개 권한
                            </Badge>
                          </div>
                        ) : (
                          <span className="text-gray-400">없음</span>
                        )}
                      </TableCell>
                      <TableCell className="text-xs text-gray-500">
                        {emp.registeredAt ? new Date(emp.registeredAt).toLocaleString('ko-KR', { 
                          month: '2-digit', 
                          day: '2-digit', 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        }) : '-'}
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteRegisteredEmployee(emp.id)}
                          className="h-8 w-8 p-0 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </div>

          <div className="mt-3 text-xs text-green-700 bg-green-50 p-3 rounded-lg">
            💡 <strong>직원 관리 안내:</strong> 등록된 직원들은 이 임시 비밀번호를 사용하여 홈 화면에서 회원가입할 수 있습니다.
          </div>
        </div>
      )}

      {/* 직원 등록 폼 섹션 */}
      <div>
        <h3 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
          <UserPlus className="w-5 h-5 text-blue-600" />
          신규 직원 등록
        </h3>

        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm text-gray-600">
              총 <span className="text-blue-600">{employees.length}</span>명 입력 중
            </h3>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleAddRow}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            행 추가
          </Button>
        </div>

        <div className="mb-2 p-3 bg-amber-50 border border-amber-200 rounded-lg lg:hidden">
          <p className="text-xs text-amber-800">
            📱 <strong>모바일 안내:</strong> 테이블을 좌우로 스크롤하여 모든 입력란을 확인하실 수 있습니다.
          </p>
        </div>

        <div className="border rounded-md overflow-hidden w-full">
          <div className="max-h-[500px] overflow-y-auto overflow-x-auto">
            <Table className="min-w-[1600px] w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px] min-w-[50px]">No.</TableHead>
                  <TableHead className="w-[120px] min-w-[120px]">이름 *</TableHead>
                  <TableHead className="w-[120px] min-w-[120px]">사번 *</TableHead>
                  <TableHead className="w-[150px] min-w-[150px]">부서</TableHead>
                  <TableHead className="w-[100px] min-w-[100px]">직급</TableHead>
                  <TableHead className="w-[180px] min-w-[180px]">이메일</TableHead>
                  <TableHead className="w-[130px] min-w-[130px]">연락처</TableHead>
                  <TableHead className="w-[110px] min-w-[110px]">사용 ID *</TableHead>
                  <TableHead className="w-[110px] min-w-[110px]">임시 비번 *</TableHead>
                  <TableHead className="w-[160px] min-w-[160px]">
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      역할/권한 *
                    </div>
                  </TableHead>
                  <TableHead className="w-[80px] min-w-[80px]">등록</TableHead>
                  <TableHead className="w-[60px] min-w-[60px]">삭제</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee, index) => (
                  <TableRow key={employee.id}>
                    <TableCell className="text-center text-gray-500">
                      {index + 1}
                    </TableCell>
                    <TableCell className="px-2">
                      <Input
                        value={employee.name}
                        onChange={(e) => handleInputChange(employee.id, 'name', e.target.value)}
                        placeholder="홍길동"
                        className="h-10 w-full px-3 text-sm"
                      />
                    </TableCell>
                    <TableCell className="px-2">
                      <Input
                        value={employee.employeeId}
                        onChange={(e) => handleInputChange(employee.id, 'employeeId', e.target.value)}
                        placeholder="EMP-001"
                        className="h-10 w-full px-3 text-sm"
                      />
                    </TableCell>
                    <TableCell className="px-2">
                      <Select
                        value={employee.department}
                        onValueChange={(value) => handleInputChange(employee.id, 'department', value)}
                      >
                        <SelectTrigger className="h-10 w-full px-3 text-sm">
                          <SelectValue placeholder="선택" />
                        </SelectTrigger>
                        <SelectContent className="z-[9999]">
                          {departmentOptions.map(opt => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="px-2">
                      <Select
                        value={employee.position}
                        onValueChange={(value) => handleInputChange(employee.id, 'position', value)}
                      >
                        <SelectTrigger className="h-10 w-full px-3 text-sm">
                          <SelectValue placeholder="선택" />
                        </SelectTrigger>
                        <SelectContent className="z-[9999]">
                          {getPositionOptions(employee.department).map(opt => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="px-2">
                      <Input
                        type="email"
                        value={employee.email}
                        onChange={(e) => handleInputChange(employee.id, 'email', e.target.value)}
                        placeholder="example@hicon.co.kr"
                        className="h-10 w-full px-3 text-sm"
                      />
                    </TableCell>
                    <TableCell className="px-2">
                      <Input
                        type="tel"
                        value={employee.phone}
                        onChange={(e) => handleInputChange(employee.id, 'phone', e.target.value)}
                        placeholder="010-1234-5678"
                        className="h-10 w-full px-3 text-sm"
                      />
                    </TableCell>
                    <TableCell className="px-2">
                      <Input
                        value={employee.userId}
                        onChange={(e) => handleInputChange(employee.id, 'userId', e.target.value)}
                        placeholder="user01"
                        className="h-10 w-full px-3 text-sm"
                      />
                    </TableCell>
                    <TableCell className="px-2">
                      <Input
                        type="password"
                        value={employee.tempPassword}
                        onChange={(e) => handleInputChange(employee.id, 'tempPassword', e.target.value)}
                        placeholder="temp1234"
                        className="h-10 w-full px-3 text-sm"
                      />
                    </TableCell>
                    <TableCell className="px-2">
                      <div className="space-y-1.5">
                        <Select
                          value={employee.role || ''}
                          onValueChange={(value) => handleRoleChange(employee.id, value)}
                        >
                          <SelectTrigger className="h-10 w-full px-3 text-sm">
                            <SelectValue placeholder="역할 선택" />
                          </SelectTrigger>
                          <SelectContent className="z-[9999]">
                            {Object.entries(ROLE_PRESETS).map(([key, preset]) => (
                              <SelectItem key={key} value={key}>
                                {preset.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {employee.role && employee.permissions && employee.permissions.length > 0 && (
                          <Badge variant="secondary" className="text-xs">
                            ✓ {employee.permissions.length}개 권한
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-center px-2">
                      <Button
                        type="button"
                        variant="default"
                        size="sm"
                        onClick={() => handleIndividualRegister(employee)}
                        className="h-10 px-4 text-sm whitespace-nowrap"
                      >
                        등록
                      </Button>
                    </TableCell>
                    <TableCell className="text-center px-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveRow(employee.id)}
                        disabled={employees.length === 1}
                        className="h-10 w-10 p-0"
                      >
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 space-y-2">
            <h4 className="text-sm text-blue-900 flex items-center gap-2">
              <Users className="w-4 h-4" />
              💡 등록 방법 안내
            </h4>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• <strong>개별 등록</strong>: 각 행의 "등록" 버튼을 클릭하여 1명씩 즉시 등록</li>
              <li>• <strong>일괄 등록</strong>: 여러 명을 입력 후 하단의 "일괄 등록" 버튼으로 한 번에 등록</li>
              <li>• <strong>필수 항목</strong>: 이름, 사번, 사용 ID, 임시 비번, 역할/권한</li>
              <li>• 사용 ID는 시스템 로그인 아이디, 임시 비번은 첫 로그인 시 사용</li>
              <li>• "행 추가" 버튼으로 필요한 만큼 행 추가 (최대 30명 권장)</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 space-y-2">
            <h4 className="text-sm text-purple-900 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              🛡️ 역할별 권한 안내
            </h4>
            <ul className="text-xs text-purple-700 space-y-1">
              <li>• <strong>최고 관리자</strong>: 모든 페이지 접근 가능 (시스템 설정, 직원 관리 포함)</li>
              <li>• <strong>생산 관리자</strong>: 생산/재고/출하/TPM/트렌드/보고서 접근</li>
              <li>• <strong>품질 관리</strong>: TPM 설비 관리 및 품질 보고서 접근</li>
              <li>• <strong>일반 직원</strong>: 대시보드 및 생산 현황 조회만 가능</li>
              <li>• <strong>조회 전용</strong>: 대시보드만 볼 수 있는 제한된 권한</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setEmployees([createEmptyEmployee(), createEmptyEmployee(), createEmptyEmployee()])}
          >
            전체 초기화
          </Button>
          <Button type="button" onClick={handleBulkRegister}>
            일괄 등록 ({employees.filter(e => e.name.trim() && e.employeeId.trim()).length}명)
          </Button>
        </div>
      </div>
    </div>
  );
}

// 계획 등록 컴포넌트 (MES, TPM, BOM 공통)
function PlanRegistration({ type }: { type: 'MES' | 'TPM' | 'BOM' }) {
  const [planData, setPlanData] = useState({
    period: '',
    startDate: '',
    endDate: '',
    target: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: 실제 API 연동 시 데이터 저장
    toast.success(`${type} 계획 등록 완료`, {
      description: `${planData.period} 계획이 등록되었습니다.`,
    });
    
    // 폼 초기화
    setPlanData({
      period: '',
      startDate: '',
      endDate: '',
      target: '',
      description: '',
    });
  };

  const getPeriodLabel = () => {
    switch (type) {
      case 'MES':
        return '생산 목표';
      case 'TPM':
        return '설비 가동률 목표';
      case 'BOM':
        return '수급률 목표';
      default:
        return '목표';
    }
  };

  const getPlaceholder = () => {
    switch (type) {
      case 'MES':
        return '예: 10,000톤';
      case 'TPM':
        return '예: 95%';
      case 'BOM':
        return '예: 98%';
      default:
        return '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="period">계획 기간 *</Label>
          <Select
            value={planData.period}
            onValueChange={(value) => setPlanData({ ...planData, period: value })}
          >
            <SelectTrigger id="period">
              <SelectValue placeholder="기간 선택" />
            </SelectTrigger>
            <SelectContent className="z-[9999]">
              <SelectItem value="daily">일일 계획</SelectItem>
              <SelectItem value="weekly">주간 계획</SelectItem>
              <SelectItem value="monthly">월간 계획</SelectItem>
              <SelectItem value="quarterly">분기 계획</SelectItem>
              <SelectItem value="yearly">년간 계획</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="target">{getPeriodLabel()} *</Label>
          <Input
            id="target"
            value={planData.target}
            onChange={(e) => setPlanData({ ...planData, target: e.target.value })}
            placeholder={getPlaceholder()}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="startDate">시작일 *</Label>
          <Input
            id="startDate"
            type="date"
            value={planData.startDate}
            onChange={(e) => setPlanData({ ...planData, startDate: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="endDate">종료일 *</Label>
          <Input
            id="endDate"
            type="date"
            value={planData.endDate}
            onChange={(e) => setPlanData({ ...planData, endDate: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2 col-span-2">
          <Label htmlFor="description">계획 설명</Label>
          <Input
            id="description"
            value={planData.description}
            onChange={(e) => setPlanData({ ...planData, description: e.target.value })}
            placeholder={`${type} ${planData.period || '계획'} 상세 내용을 입력하세요`}
          />
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 space-y-2">
        <h4 className="text-sm text-blue-900">💡 등록 안내</h4>
        <ul className="text-xs text-blue-700 space-y-1">
          <li>• 계획 기간에 맞춰 시작일과 종료일을 설정하세요</li>
          <li>• 목표값은 실제 달성 가능한 수치로 입력해주세요</li>
          <li>• 등록된 계획은 대시보드의 각 카드에 반영됩니다</li>
          <li>• 실제 데이터는 SCM 대시보드 구축 후 연동됩니다</li>
        </ul>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="submit">계획 등록</Button>
      </div>
    </form>
  );
}

// Featured 회사 관리 컴포넌트
function FeaturedCompaniesManagement() {
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  interface Company {
    id: string;
    name: string;
    description: string;
    website: string;
    category: '순환 골재' | '골재 파쇄기';
    selectedDate: string;
  }

  // 전체 회사 데이터 (날짜별 역순 - 최신순)
  const allCompanies: Company[] = [
    // 오늘 선정 (2025-10-19) - 8개
    {
      id: '9',
      name: 'LafargeHolcim (스위스)',
      description: '지속가능한 건축 솔루션 글로벌 리더',
      website: 'https://www.holcim.com',
      category: '순환 골재',
      selectedDate: '2025-10-19',
    },
    {
      id: '10',
      name: 'HeidelbergCement (독일)',
      description: '친환경 콘크리트 및 골재 전문',
      website: 'https://www.heidelbergmaterials.com',
      category: '순환 골재',
      selectedDate: '2025-10-19',
    },
    {
      id: '11',
      name: 'CRH (아일랜드)',
      description: '건축 자재 및 순환 골재 솔루션',
      website: 'https://www.crh.com',
      category: '순환 골재',
      selectedDate: '2025-10-19',
    },
    {
      id: '12',
      name: 'GCP Applied Technologies (미국)',
      description: '콘크리트 첨가제 및 강화 기술',
      website: 'https://gcpat.com',
      category: '순환 골재',
      selectedDate: '2025-10-19',
    },
    {
      id: '13',
      name: 'McCloskey (캐나다)',
      description: '모바일 파쇄 및 스크리닝 장비',
      website: 'https://www.mccloskeyinternational.com',
      category: '골재 파쇄기',
      selectedDate: '2025-10-19',
    },
    {
      id: '14',
      name: 'Powerscreen (영국)',
      description: '모바일 파쇄 및 선별 솔루션',
      website: 'https://www.powerscreen.com',
      category: '골재 파쇄기',
      selectedDate: '2025-10-19',
    },
    {
      id: '15',
      name: 'Eagle Crusher (미국)',
      description: '고효율 파쇄 및 스크리닝 시스템',
      website: 'https://www.eaglecrusher.com',
      category: '골재 파쇄기',
      selectedDate: '2025-10-19',
    },
    {
      id: '16',
      name: 'Astec Industries (미국)',
      description: '골재 처리 및 파쇄 장비 제조',
      website: 'https://www.astecindustries.com',
      category: '골재 파쇄기',
      selectedDate: '2025-10-19',
    },
    // 어제 선정 (2025-10-18) - 8개 (Featured 카드에 표시되는 회사들)
    {
      id: '1',
      name: 'BASF (독일)',
      description: '콘크리트 혼화제 및 강화재 선도기업',
      website: 'https://www.basf.com',
      category: '순환 골재',
      selectedDate: '2025-10-18',
    },
    {
      id: '2',
      name: 'Metso Outotec (핀란드)',
      description: '순환 골재 처리 솔루션 글로벌 리더',
      website: 'https://www.mogroup.com',
      category: '순환 골재',
      selectedDate: '2025-10-18',
    },
    {
      id: '3',
      name: 'Mapei (이탈리아)',
      description: '콘크리트 보강재 전문기업',
      website: 'https://www.mapei.com',
      category: '순환 골재',
      selectedDate: '2025-10-18',
    },
    {
      id: '4',
      name: 'Sika (스위스)',
      description: '콘크리트 강화 솔루션 세계 선두',
      website: 'https://www.sika.com',
      category: '순환 골재',
      selectedDate: '2025-10-18',
    },
    {
      id: '5',
      name: 'Sandvik (스웨덴)',
      description: '고성능 파쇄 시스템 전문',
      website: 'https://www.sandvik.com',
      category: '골재 파쇄기',
      selectedDate: '2025-10-18',
    },
    {
      id: '6',
      name: 'Metso Outotec (핀란드)',
      description: '순환 골재 파쇄 장비 세계 1위',
      website: 'https://www.mogroup.com',
      category: '골재 파쇄기',
      selectedDate: '2025-10-18',
    },
    {
      id: '7',
      name: 'Terex (미국)',
      description: '혁신적인 모바일 파쇄 솔루션',
      website: 'https://www.terex.com',
      category: '골재 파쇄기',
      selectedDate: '2025-10-18',
    },
    {
      id: '8',
      name: 'Kleemann (독일)',
      description: '모바일 파쇄 플랜트 전문',
      website: 'https://www.kleemann.info',
      category: '골재 파쇄기',
      selectedDate: '2025-10-18',
    },
  ];

  // 날짜별로 그룹핑
  const groupByDate = (companies: Company[]) => {
    const groups: { [key: string]: Company[] } = {};
    companies.forEach(company => {
      if (!groups[company.selectedDate]) {
        groups[company.selectedDate] = [];
      }
      groups[company.selectedDate].push(company);
    });
    return groups;
  };

  const groupedCompanies = groupByDate(allCompanies);
  const dates = Object.keys(groupedCompanies).sort((a, b) => b.localeCompare(a)); // 최신순

  // 오늘 날짜
  const todayDate = '2025-10-19';
  const todayCompanies = allCompanies.filter(c => c.selectedDate === todayDate);
  const pastCompanies = allCompanies.filter(c => c.selectedDate !== todayDate);

  // 페이지네이션
  const displayCompanies = showAll ? pastCompanies : [];
  const totalPages = Math.ceil(displayCompanies.length / itemsPerPage);
  const paginatedCompanies = displayCompanies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 페이지네이션된 날짜별 그룹
  const paginatedGrouped = groupByDate(paginatedCompanies);
  const paginatedDates = Object.keys(paginatedGrouped).sort((a, b) => b.localeCompare(a));

  // Collapsible 상태 관리
  const [openDates, setOpenDates] = useState<{ [key: string]: boolean }>({});

  const toggleDate = (date: string) => {
    setOpenDates(prev => ({ ...prev, [date]: !prev[date] }));
  };

  // 회사 테이블 렌더링 함수
  const renderCompanyTable = (companies: Company[]) => {
    const recycling = companies.filter(c => c.category === '순환 골재');
    const crusher = companies.filter(c => c.category === '골재 파쇄기');

    return (
      <div className="space-y-6">
        {/* 순환 골재 */}
        {recycling.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-5 h-5 text-purple-600" />
              <h4 className="text-sm text-gray-900">순환 골재 및 콘크리트 강화</h4>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                {recycling.length}개
              </Badge>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-[5%]">No.</TableHead>
                    <TableHead className="w-[25%]">회사명</TableHead>
                    <TableHead className="w-[10%]">국가</TableHead>
                    <TableHead className="w-[40%]">설명</TableHead>
                    <TableHead className="w-[20%]">홈페이지</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recycling.map((company, index) => (
                    <TableRow key={company.id}>
                      <TableCell className="text-center text-gray-500">
                        {index + 1}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>{company.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{company.name.match(/\(([^)]+)\)/)?.[1] || '-'}</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {company.description}
                      </TableCell>
                      <TableCell>
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm hover:underline"
                        >
                          <ExternalLink className="w-3 h-3" />
                          바로가기
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        {/* 골재 파쇄기 */}
        {crusher.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-5 h-5 text-blue-600" />
              <h4 className="text-sm text-gray-900">골재 파쇄기 제조</h4>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                {crusher.length}개
              </Badge>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-[5%]">No.</TableHead>
                    <TableHead className="w-[25%]">회사명</TableHead>
                    <TableHead className="w-[10%]">국가</TableHead>
                    <TableHead className="w-[40%]">설명</TableHead>
                    <TableHead className="w-[20%]">홈페이지</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {crusher.map((company, index) => (
                    <TableRow key={company.id}>
                      <TableCell className="text-center text-gray-500">
                        {index + 1}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{company.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{company.name.match(/\(([^)]+)\)/)?.[1] || '-'}</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {company.description}
                      </TableCell>
                      <TableCell>
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm hover:underline"
                        >
                          <ExternalLink className="w-3 h-3" />
                          바로가기
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6 py-4">
      {/* 요약 통계 */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-green-600 mb-1">총 등록 회사</p>
              <p className="text-2xl text-green-900">{allCompanies.length}</p>
            </div>
            <Building2 className="w-8 h-8 text-green-400" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-orange-600 mb-1">오늘 선정</p>
              <p className="text-2xl text-orange-900">{todayCompanies.length}</p>
            </div>
            <Calendar className="w-8 h-8 text-orange-400" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-purple-600 mb-1">순환 골재</p>
              <p className="text-2xl text-purple-900">{allCompanies.filter(c => c.category === '순환 골재').length}</p>
            </div>
            <Building2 className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-blue-600 mb-1">파쇄기 제조</p>
              <p className="text-2xl text-blue-900">{allCompanies.filter(c => c.category === '골재 파쇄기').length}</p>
            </div>
            <Building2 className="w-8 h-8 text-blue-400" />
          </div>
        </div>
      </div>

      {/* 오늘 선정된 회사 (2025-10-19) */}
      <div className="border-2 border-orange-200 rounded-xl p-4 bg-gradient-to-br from-orange-50/50 to-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-100 rounded-full">
            <Calendar className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-orange-900">2025년 10월 19일 (오늘)</span>
          </div>
          <Badge className="bg-orange-500 text-white">NEW</Badge>
          <span className="text-sm text-gray-600">총 {todayCompanies.length}개 회사 선정</span>
        </div>
        
        {renderCompanyTable(todayCompanies)}
      </div>

      {/* 전체 보기 버튼 */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => {
            setShowAll(!showAll);
            setCurrentPage(1);
          }}
          className="flex items-center gap-2"
        >
          {showAll ? (
            <>
              <ChevronUp className="w-4 h-4" />
              접기
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              이전 선정 회사 전체 보기 ({pastCompanies.length}개)
            </>
          )}
        </Button>
      </div>

      {/* 이전 날짜 회사들 (Collapsible) */}
      {showAll && (
        <div className="space-y-4">
          {paginatedDates.map(date => (
            <Collapsible
              key={date}
              open={openDates[date]}
              onOpenChange={() => toggleDate(date)}
            >
              <div className="border rounded-lg overflow-hidden">
                <CollapsibleTrigger asChild>
                  <button className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-900">{date}</span>
                      <Badge variant="outline" className="text-xs">
                        {paginatedGrouped[date].length}개 회사
                      </Badge>
                    </div>
                    {openDates[date] ? (
                      <ChevronUp className="w-4 h-4 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    )}
                  </button>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="p-4 bg-white">
                    {renderCompanyTable(paginatedGrouped[date])}
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="flex justify-center pt-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      )}

      {/* 안내 메시지 */}
      <div className="bg-blue-50 rounded-lg p-4 space-y-2">
        <h4 className="text-sm text-blue-900">💡 Featured 회사 정보</h4>
        <ul className="text-xs text-blue-700 space-y-1">
          <li>• 메인 대시보드의 Featured 카드 표시되는 글로벌 선두 기업들의 정보입니다</li>
          <li>• 매일 새로운 회사들이 업데이트되며, 오늘 선정된 회사는 상단에 표시됩니다</li>
          <li>• <strong>Featured Card 1</strong>: 순환 골재 및 콘크리트 강화재 전문 회사 (4초마다 자동 스크롤)</li>
          <li>• <strong>Featured Card 2</strong>: 골재 파쇄기 제조 전문 회사 (4초마다 자동 스크롤)</li>
          <li>• 카드를 클릭하면 해당 회사의 공식 홈페이지로 이동합니다</li>
          <li>• "전체 보기" 버튼을 클릭하면 이전 선정 회사들을 날짜별로 확인할 수 있습니다 (최대 30개)</li>
          <li>• 날짜를 클릭하면 해당 날짜에 선정된 회사 목록이 펼쳐집니다</li>
        </ul>
      </div>
    </div>
  );
}
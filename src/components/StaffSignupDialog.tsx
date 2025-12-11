import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface StaffSignupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSignupComplete: (staffData: { name: string; employeeId: string }) => void;
}

export function StaffSignupDialog({ open, onOpenChange, onSignupComplete }: StaffSignupDialogProps) {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 유효성 검사
    if (!name.trim()) {
      setError("직원명을 입력해주세요.");
      return;
    }

    if (!employeeId.trim()) {
      setError("사원번호를 입력해주세요.");
      return;
    }

    if (!tempPassword.trim()) {
      setError("임시 비밀번호를 입력해주세요.");
      return;
    }

    // 대시보드 설정에서 등록된 직원 정보 확인
    const employeeList = JSON.parse(localStorage.getItem("employeeList") || "[]");
    
    // 디버깅: localStorage 내용 출력
    console.log("=== 회원가입 디버깅 ===");
    console.log("입력한 이름:", name.trim());
    console.log("입력한 사번:", employeeId.trim());
    console.log("입력한 임시비번:", tempPassword);
    console.log("저장된 직원 목록:", employeeList);
    
    // 직원명과 사원번호가 일치하는 직원 찾기
    const registeredEmployee = employeeList.find(
      (emp: any) => emp.name === name.trim() && emp.employeeId === employeeId.trim()
    );

    console.log("찾은 직원:", registeredEmployee);

    if (!registeredEmployee) {
      setError(`등록되지 않은 직원 정보입니다. 관리자에게 먼저 직원 등록을 요청하세요.\n\n[디버깅] 등록된 직원 수: ${employeeList.length}명\n입력한 정보 - 이름: "${name.trim()}", 사번: "${employeeId.trim()}"`);
      return;
    }

    // 임시 비밀번호 검증
    console.log("=== 임시 비밀번호 검증 ===");
    console.log("등록된 임시비번:", `"${registeredEmployee.tempPassword}"`);
    console.log("등록된 임시비번 길이:", registeredEmployee.tempPassword.length);
    console.log("입력한 임시비번:", `"${tempPassword}"`);
    console.log("입력한 임시비번 길이:", tempPassword.length);
    console.log("일치 여부:", registeredEmployee.tempPassword === tempPassword);
    
    if (registeredEmployee.tempPassword !== tempPassword) {
      setError(`유효하지 않은 임시 비밀번호입니다. 관리자에게 문의하세요.\n\n[디버깅] 등록된 비번: "${registeredEmployee.tempPassword}" / 입력한 비번: "${tempPassword}"`);
      return;
    }

    // 기존 회원가입 정보 확인
    const existingStaff = JSON.parse(localStorage.getItem("registeredStaff") || "[]");
    
    // 중복 사원번호 확인
    if (existingStaff.some((staff: any) => staff.employeeId === employeeId)) {
      setError("이미 회원가입이 완료된 사원번호입니다.");
      return;
    }

    // 회원가입 정보 저장 (권한 정보 포함)
    const newStaff = {
      ...registeredEmployee, // 등록된 직원의 모든 정보 포함 (권한 포함)
      name: name.trim(),
      employeeId: employeeId.trim(),
      registeredAt: new Date().toISOString(),
    };

    const updatedStaff = [...existingStaff, newStaff];
    localStorage.setItem("registeredStaff", JSON.stringify(updatedStaff));
    localStorage.setItem("currentStaff", JSON.stringify(newStaff));

    console.log("회원가입 성공!");

    // 초기화
    setName("");
    setEmployeeId("");
    setTempPassword("");
    setError("");

    // 회원가입 완료 콜백
    onSignupComplete(newStaff);
    onOpenChange(false);
  };

  const handleClose = () => {
    setName("");
    setEmployeeId("");
    setTempPassword("");
    setError("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white/95 backdrop-blur-md border-teal-600/20">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-teal-100 data-[state=open]:text-teal-600"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">닫기</span>
        </button>

        <DialogHeader>
          <DialogTitle className="text-2xl text-teal-700">직원 회원가입</DialogTitle>
          <DialogDescription className="text-gray-600">
            하이콘코리아 직원 전용 대시보드 회원가입
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              직원명 <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-gray-300 focus:border-teal-600 focus:ring-teal-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="employeeId" className="text-gray-700">
              사원번호 <span className="text-red-500">*</span>
            </Label>
            <Input
              id="employeeId"
              type="text"
              placeholder="사원번호를 입력하세요"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              className="border-gray-300 focus:border-teal-600 focus:ring-teal-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tempPassword" className="text-gray-700">
              임시 비밀번호 <span className="text-red-500">*</span>
            </Label>
            <Input
              id="tempPassword"
              type="password"
              placeholder="대시보드 설정에서 발행한 임시 비밀번호"
              value={tempPassword}
              onChange={(e) => setTempPassword(e.target.value)}
              className="border-gray-300 focus:border-teal-600 focus:ring-teal-600"
            />
            <p className="text-xs text-gray-500 mt-1">
              * 관리자가 직원 등록 시 설정한 임시 비밀번호를 입력하세요
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1"
            >
              취소
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
            >
              회원가입
            </Button>
          </div>
        </form>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            회원가입 후 직원 전용 대시보드에 접속하실 수 있습니다.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
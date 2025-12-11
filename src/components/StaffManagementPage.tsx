import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import {
  Users,
  UserPlus,
  Shield,
  Clock,
  DollarSign,
  Edit,
  Trash2,
  Search,
  Calendar,
  CheckCircle,
  XCircle,
  Download,
  Camera,
  Receipt,
  FileText,
  Upload,
  Image as ImageIcon,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { SearchFilterBar } from './SearchFilterBar';
import { toast } from 'sonner@2.0.3';

// Mock 데이터 - 하이콘 코리아 전체 직원 30명
const mockStaff = [
  // 경영진 및 관리자 (3명)
  { id: 'E001', name: '김철수', role: '관리자', department: '경영', position: '대표이사', salary: 6000000, status: 'active', joinDate: '2018-01-15', email: 'kim@hicon.co.kr', phone: '010-1234-5678' },
  { id: 'E002', name: '이영희', role: '관리자', department: '생산부', position: '공장장', salary: 5000000, status: 'active', joinDate: '2018-03-01', email: 'lee@hicon.co.kr', phone: '010-2345-6789' },
  { id: 'E003', name: '박민수', role: '매니저', department: '품질관리', position: '품질관리팀장', salary: 4200000, status: 'active', joinDate: '2019-01-10', email: 'park@hicon.co.kr', phone: '010-3456-7890' },
  
  // A라인 팀 (9명)
  { id: 'E004', name: '최지원', role: '매니저', department: 'A라인', position: '라인장', salary: 3800000, status: 'active', joinDate: '2019-06-20', email: 'choi@hicon.co.kr', phone: '010-4567-8901' },
  { id: 'E005', name: '정수민', role: '직원', department: 'A라인', position: '반장', salary: 3200000, status: 'active', joinDate: '2020-03-01', email: 'jung@hicon.co.kr', phone: '010-5678-9012' },
  { id: 'E006', name: '강동욱', role: '직원', department: 'A라인', position: '파쇄기 담당', salary: 2800000, status: 'active', joinDate: '2020-07-15', email: 'kang@hicon.co.kr', phone: '010-6789-0123' },
  { id: 'E007', name: '윤서현', role: '직원', department: 'A라인', position: '선별기 담당', salary: 2800000, status: 'active', joinDate: '2021-02-01', email: 'yoon@hicon.co.kr', phone: '010-7890-1234' },
  { id: 'E008', name: '임재현', role: '직원', department: 'A라인', position: '컨베이어 담당', salary: 2600000, status: 'active', joinDate: '2021-08-10', email: 'lim@hicon.co.kr', phone: '010-8901-2345' },
  { id: 'E009', name: '한지민', role: '직원', department: 'A라인', position: '검사원', salary: 2600000, status: 'active', joinDate: '2022-01-15', email: 'han@hicon.co.kr', phone: '010-9012-3456' },
  { id: 'E010', name: '신동혁', role: '직원', department: 'A라인', position: '포장 담당', salary: 2500000, status: 'active', joinDate: '2022-05-20', email: 'shin@hicon.co.kr', phone: '010-0123-4567' },
  { id: 'E011', name: '오세훈', role: '직원', department: 'A라인', position: '보조원', salary: 2400000, status: 'active', joinDate: '2023-01-10', email: 'oh@hicon.co.kr', phone: '010-1111-2222' },
  { id: 'E012', name: '송유진', role: '직원', department: 'A라인', position: '보조원', salary: 2400000, status: 'vacation', joinDate: '2023-06-01', email: 'song@hicon.co.kr', phone: '010-2222-3333' },
  
  // B라인 팀 (9명)
  { id: 'E013', name: '배준호', role: '매니저', department: 'B라인', position: '라인장', salary: 3800000, status: 'active', joinDate: '2019-09-01', email: 'bae@hicon.co.kr', phone: '010-3333-4444' },
  { id: 'E014', name: '황수지', role: '직원', department: 'B라인', position: '반장', salary: 3200000, status: 'active', joinDate: '2020-04-15', email: 'hwang@hicon.co.kr', phone: '010-4444-5555' },
  { id: 'E015', name: '안재민', role: '직원', department: 'B라인', position: '파쇄기 담당', salary: 2800000, status: 'active', joinDate: '2020-09-20', email: 'ahn@hicon.co.kr', phone: '010-5555-6666' },
  { id: 'E016', name: '서민아', role: '직원', department: 'B라인', position: '선별기 담당', salary: 2800000, status: 'active', joinDate: '2021-03-10', email: 'seo@hicon.co.kr', phone: '010-6666-7777' },
  { id: 'E017', name: '노승우', role: '직원', department: 'B라인', position: '컨베이어 담당', salary: 2600000, status: 'active', joinDate: '2021-09-05', email: 'noh@hicon.co.kr', phone: '010-7777-8888' },
  { id: 'E018', name: '권하늘', role: '직원', department: 'B라인', position: '검사원', salary: 2600000, status: 'active', joinDate: '2022-02-20', email: 'kwon@hicon.co.kr', phone: '010-8888-9999' },
  { id: 'E019', name: '류태양', role: '직원', department: 'B라인', position: '포장 담당', salary: 2500000, status: 'active', joinDate: '2022-07-01', email: 'ryu@hicon.co.kr', phone: '010-9999-0000' },
  { id: 'E020', name: '천민서', role: '직원', department: 'B라인', position: '보조원', salary: 2400000, status: 'active', joinDate: '2023-02-15', email: 'cheon@hicon.co.kr', phone: '010-1010-2020' },
  { id: 'E021', name: '방지훈', role: '직원', department: 'B라인', position: '보조원', salary: 2400000, status: 'active', joinDate: '2023-07-20', email: 'bang@hicon.co.kr', phone: '010-2020-3030' },
  
  // C라인 팀 (9명)
  { id: 'E022', name: '홍길동', role: '매니저', department: 'C라인', position: '라인장', salary: 3800000, status: 'active', joinDate: '2019-11-01', email: 'hong@hicon.co.kr', phone: '010-3030-4040' },
  { id: 'E023', name: '문채원', role: '직원', department: 'C라인', position: '반장', salary: 3200000, status: 'active', joinDate: '2020-05-10', email: 'moon@hicon.co.kr', phone: '010-4040-5050' },
  { id: 'E024', name: '표지훈', role: '직원', department: 'C라인', position: '파쇄기 담당', salary: 2800000, status: 'active', joinDate: '2020-10-25', email: 'pyo@hicon.co.kr', phone: '010-5050-6060' },
  { id: 'E025', name: '손예진', role: '직원', department: 'C라인', position: '선별기 담당', salary: 2800000, status: 'active', joinDate: '2021-04-15', email: 'son@hicon.co.kr', phone: '010-6060-7070' },
  { id: 'E026', name: '탁재훈', role: '직원', department: 'C라인', position: '컨베이어 담당', salary: 2600000, status: 'active', joinDate: '2021-10-01', email: 'tak@hicon.co.kr', phone: '010-7070-8080' },
  { id: 'E027', name: '진세연', role: '직원', department: 'C라인', position: '검사원', salary: 2600000, status: 'active', joinDate: '2022-03-25', email: 'jin@hicon.co.kr', phone: '010-8080-9090' },
  { id: 'E028', name: '감우성', role: '직원', department: 'C라인', position: '포장 담당', salary: 2500000, status: 'active', joinDate: '2022-08-15', email: 'gam@hicon.co.kr', phone: '010-9090-1010' },
  { id: 'E029', name: '엄정화', role: '직원', department: 'C라인', position: '보조원', salary: 2400000, status: 'active', joinDate: '2023-03-20', email: 'um@hicon.co.kr', phone: '010-1212-3434' },
  { id: 'E030', name: '유해진', role: '직원', department: 'C라인', position: '보조원', salary: 2400000, status: 'active', joinDate: '2023-08-25', email: 'yoo@hicon.co.kr', phone: '010-3434-5656' },
];

const mockAttendance = [
  { id: 'E001', name: '김철수', checkIn: '08:30', checkOut: '18:00', status: 'present', overtime: 0 },
  { id: 'E002', name: '이영희', checkIn: '08:35', checkOut: '17:50', status: 'present', overtime: 0 },
  { id: 'E003', name: '박민수', checkIn: '08:40', checkOut: '17:45', status: 'present', overtime: 0 },
  { id: 'E004', name: '최지원', checkIn: '08:45', checkOut: '19:30', status: 'present', overtime: 1.5 },
  { id: 'E005', name: '정수민', checkIn: '08:50', checkOut: '17:35', status: 'present', overtime: 0 },
  { id: 'E006', name: '강동욱', checkIn: '08:55', checkOut: '18:10', status: 'present', overtime: 0 },
  { id: 'E007', name: '윤서현', checkIn: '09:00', checkOut: '17:30', status: 'present', overtime: 0 },
  { id: 'E008', name: '임재현', checkIn: '08:40', checkOut: '20:00', status: 'present', overtime: 2 },
  { id: 'E009', name: '한지민', checkIn: '08:45', checkOut: '17:40', status: 'present', overtime: 0 },
  { id: 'E010', name: '신동혁', checkIn: '09:05', checkOut: '17:25', status: 'late', overtime: 0 },
  { id: 'E011', name: '오세훈', checkIn: '08:50', checkOut: '17:35', status: 'present', overtime: 0 },
  { id: 'E012', name: '송유진', checkIn: '-', checkOut: '-', status: 'vacation', overtime: 0 },
  { id: 'E013', name: '배준호', checkIn: '08:35', checkOut: '19:00', status: 'present', overtime: 1 },
  { id: 'E014', name: '황수지', checkIn: '08:40', checkOut: '17:45', status: 'present', overtime: 0 },
  { id: 'E015', name: '안재민', checkIn: '08:50', checkOut: '17:30', status: 'present', overtime: 0 },
  { id: 'E016', name: '서민아', checkIn: '08:55', checkOut: '17:35', status: 'present', overtime: 0 },
  { id: 'E017', name: '노승우', checkIn: '09:10', checkOut: '17:20', status: 'late', overtime: 0 },
  { id: 'E018', name: '권하늘', checkIn: '08:45', checkOut: '17:40', status: 'present', overtime: 0 },
  { id: 'E019', name: '류태양', checkIn: '08:40', checkOut: '19:30', status: 'present', overtime: 1.5 },
  { id: 'E020', name: '천민서', checkIn: '08:50', checkOut: '17:35', status: 'present', overtime: 0 },
  { id: 'E021', name: '방지훈', checkIn: '08:55', checkOut: '17:30', status: 'present', overtime: 0 },
  { id: 'E022', name: '홍길동', checkIn: '08:40', checkOut: '18:40', status: 'present', overtime: 0.5 },
  { id: 'E023', name: '문채원', checkIn: '08:45', checkOut: '17:45', status: 'present', overtime: 0 },
  { id: 'E024', name: '표지훈', checkIn: '08:50', checkOut: '17:30', status: 'present', overtime: 0 },
  { id: 'E025', name: '손예진', checkIn: '08:55', checkOut: '17:35', status: 'present', overtime: 0 },
  { id: 'E026', name: '탁재훈', checkIn: '09:00', checkOut: '17:40', status: 'present', overtime: 0 },
  { id: 'E027', name: '진세연', checkIn: '09:20', checkOut: '17:25', status: 'late', overtime: 0 },
  { id: 'E028', name: '감우성', checkIn: '08:45', checkOut: '17:30', status: 'present', overtime: 0 },
  { id: 'E029', name: '엄정화', checkIn: '08:50', checkOut: '17:35', status: 'present', overtime: 0 },
  { id: 'E030', name: '유해진', checkIn: '08:55', checkOut: '17:40', status: 'present', overtime: 0 },
];

// 직원 지출 내역 Mock 데이터
const mockExpenses = [
  { id: 'EXP001', employeeId: 'E005', employeeName: '정수민', date: '2024-10-28', category: '교통비', merchant: '카카오택시', item: '현장 방문 택시비', amount: 35000, receipt: true, status: 'approved', approvedBy: '이영희', memo: '폐기물 수거 현장 방문' },
  { id: 'EXP002', employeeId: 'E008', employeeName: '임재현', date: '2024-10-27', category: '유류비', merchant: 'GS칼텍스', item: '경유 주유', amount: 120000, receipt: true, status: 'approved', approvedBy: '이영희', memo: '지게차 연료 보충' },
  { id: 'EXP003', employeeId: 'E015', employeeName: '안재민', date: '2024-10-27', category: '사무용품', merchant: '다이소', item: 'A4용지 외 10건', amount: 52000, receipt: true, status: 'pending', approvedBy: '', memo: '' },
  { id: 'EXP004', employeeId: 'E004', employeeName: '최지원', date: '2024-10-26', category: '식비', merchant: '춘천만송', item: '직원 회의 중식', amount: 85000, receipt: true, status: 'approved', approvedBy: '이영희', memo: 'A라인 월간 회의' },
  { id: 'EXP005', employeeId: 'E019', employeeName: '류태양', date: '2024-10-26', category: '교통비', merchant: '공영주차장', item: '거래처 방문 주차비', amount: 12000, receipt: true, status: 'pending', approvedBy: '', memo: '' },
  { id: 'EXP006', employeeId: 'E013', employeeName: '배준호', date: '2024-10-25', category: '교육비', merchant: '한국산업안전협회', item: '안전교육 수료증', amount: 150000, receipt: true, status: 'approved', approvedBy: '이영희', memo: '산업안전보건교육' },
  { id: 'EXP007', employeeId: 'E024', employeeName: '표지훈', date: '2024-10-25', category: '소모품', merchant: '산업자재마트', item: '작업용 장갑 50켤레', amount: 45000, receipt: true, status: 'approved', approvedBy: '이영희', memo: 'C라인 작업 소모품' },
  { id: 'EXP008', employeeId: 'E007', employeeName: '윤서현', date: '2024-10-24', category: '교통비', merchant: 'KTX', item: '출장비 (서울-부산)', amount: 180000, receipt: true, status: 'rejected', approvedBy: '이영희', memo: '증빙 불충분' },
  { id: 'EXP009', employeeId: 'E020', employeeName: '천민서', date: '2024-10-24', category: '사무용품', merchant: '모닝글로리', item: '필기구 세트', amount: 18000, receipt: false, status: 'pending', approvedBy: '', memo: '' },
  { id: 'EXP010', employeeId: 'E011', employeeName: '오세훈', date: '2024-10-23', category: '유류비', merchant: 'SK에너지', item: '차량 주유', amount: 95000, receipt: true, status: 'approved', approvedBy: '이영희', memo: '순환골재 배송 차량' },
  { id: 'EXP011', employeeId: 'E005', employeeName: '정수민', date: '2024-10-22', category: '식비', merchant: 'GS25', item: '편의점 구매', amount: 15000, receipt: true, status: 'approved', approvedBy: '이영희', memo: '' },
  { id: 'EXP012', employeeId: 'E008', employeeName: '임재현', date: '2024-10-21', category: '식비', merchant: '커피소망리', item: '커피/음료', amount: 19300, receipt: true, status: 'approved', approvedBy: '이영희', memo: '' },
  { id: 'EXP013', employeeId: 'E015', employeeName: '안재민', date: '2024-10-20', category: '교통비', merchant: '조이에스넷', item: '톨게이트 통행료', amount: 17500, receipt: true, status: 'approved', approvedBy: '이영희', memo: '' },
];

export function StaffManagementPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('2024-10');
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showReceiptScanDialog, setShowReceiptScanDialog] = useState(false);
  const [showManualExpenseDialog, setShowManualExpenseDialog] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [registeredStaff, setRegisteredStaff] = useState<any[]>([]);
  
  // 직원 추가 폼 데이터
  const [newStaffData, setNewStaffData] = useState({
    employeeId: '',
    name: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    userId: '',
    tempPassword: ''
  });

  // 위치 기반 출근 체크
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isInOffice, setIsInOffice] = useState(false);
  const [locationChecking, setLocationChecking] = useState(false);
  const [showCheckInButton, setShowCheckInButton] = useState(false);
  const [attendanceRecords, setAttendanceRecords] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // 하이콘 코리아 공장 위치 (예시: 경기도 용인시)
  const OFFICE_LOCATION = {
    lat: 37.2411,
    lng: 127.1776,
    radius: 200 // 200미터 반경
  };

  // 데모 모드 (테스트용)
  const [demoMode, setDemoMode] = useState(false);

  // localStorage에서 등록된 직원 불러오기
  useEffect(() => {
    const loadRegisteredStaff = () => {
      const employeeList = JSON.parse(localStorage.getItem('employeeList') || '[]');
      console.log('📋 등록된 직원 불러오기:', employeeList);
      setRegisteredStaff(employeeList);
    };
    
    loadRegisteredStaff();
    
    // 1초마다 체크하여 변경사항 반영
    const interval = setInterval(loadRegisteredStaff, 1000);
    return () => clearInterval(interval);
  }, []);

  // localStorage에서 출근 기록 불러오기
  useEffect(() => {
    const loadAttendanceRecords = () => {
      const records = JSON.parse(localStorage.getItem('attendanceRecords') || '[]');
      console.log('📅 출근 기록 불러오기:', records);
      setAttendanceRecords(records);
    };
    
    loadAttendanceRecords();
    
    // 1초마다 체크하여 변경사항 반영
    const interval = setInterval(loadAttendanceRecords, 1000);
    return () => clearInterval(interval);
  }, []);

  // 현재 로그인한 사용자 정보 불러오기
  useEffect(() => {
    const loadCurrentUser = () => {
      const user = JSON.parse(localStorage.getItem('currentStaff') || 'null');
      if (user) {
        console.log('👤 현재 로그인한 직원:', user);
        setCurrentUser(user);
      }
    };
    
    loadCurrentUser();
    
    // 1초마다 체크하여 로그인 상태 반영
    const interval = setInterval(loadCurrentUser, 1000);
    return () => clearInterval(interval);
  }, []);

  // Mock 데이터와 등록된 직원을 병합
  const allStaff = [
    ...mockStaff,
    ...registeredStaff.map((emp: any, index: number) => ({
      id: emp.employeeId || `REG${String(index + 1).padStart(3, '0')}`,
      name: emp.name,
      role: '직원',
      department: emp.department || '미지정',
      position: emp.position || '사원',
      salary: 0,
      status: 'active',
      joinDate: emp.registeredAt ? new Date(emp.registeredAt).toISOString().split('T')[0] : '-',
      email: emp.email || '-',
      phone: emp.phone || '-'
    }))
  ];

  const filteredStaff = allStaff.filter(staff => {
    const matchesSearch = staff.name.includes(searchTerm) || staff.id.includes(searchTerm);
    const matchesDepartment = selectedDepartment === 'all' || staff.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleAddStaff = () => {
    // 필수 항목 검증
    if (!newStaffData.name.trim() || !newStaffData.employeeId.trim()) {
      toast.error('이름과 사번은 필수 입력 항목입니다.');
      return;
    }

    // localStorage에 저장
    const existingEmployees = JSON.parse(localStorage.getItem('employeeList') || '[]');
    const newEmployee = {
      ...newStaffData,
      id: Math.random().toString(36).substr(2, 9),
      registeredAt: new Date().toISOString()
    };
    
    const updatedEmployees = [...existingEmployees, newEmployee];
    localStorage.setItem('employeeList', JSON.stringify(updatedEmployees));
    setRegisteredStaff(updatedEmployees);
    
    console.log('✅ 새 직원 추가:', newEmployee);
    
    toast.success('직원이 추가되었습니다.');
    
    // 폼 초기화
    setNewStaffData({
      employeeId: '',
      name: '',
      department: '',
      position: '',
      email: '',
      phone: '',
      userId: '',
      tempPassword: ''
    });
    
    setShowAddDialog(false);
  };

  const handleDeleteStaff = (staffId: string, name: string) => {
    // 등록된 직원인지 확인
    const registeredEmployee = registeredStaff.find(emp => 
      emp.employeeId === staffId || emp.id === staffId
    );
    
    if (registeredEmployee) {
      // localStorage에서 삭제
      const updatedList = registeredStaff.filter(emp => 
        emp.employeeId !== staffId && emp.id !== staffId
      );
      localStorage.setItem('employeeList', JSON.stringify(updatedList));
      setRegisteredStaff(updatedList);
      toast.success(`${name} 직원이 삭제되었습니다.`);
    } else {
      // Mock 데이터는 삭제 불가
      toast.error('기본 직원은 삭제할 수 없습니다.');
    }
  };

  const handleReceiptUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedReceipt(file);
    setIsScanning(true);

    try {
      console.log('=== 영수증 스캔 시작 (Google Vision API) ===');
      console.log('파일명:', file.name);
      console.log('파일 크기:', (file.size / 1024).toFixed(2), 'KB');

      // 파일을 Base64로 변환
      const base64Image = await fileToBase64(file);
      
      // Google Vision API 호출 (현재 비활성화 - 준비중 상태)
      throw new Error('Vision API 기능은 현재 준비중입니다.');
      
      /* Vision API는 현재 비활성화되어 있습니다
      const { projectId, publicAnonKey } = await import('../utils/supabase/info');
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-656276dc/ocr-receipt`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ imageBase64: base64Image }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        
        // 실제 Google API 에러
        console.warn(`⚠️ Vision API 실패 [${response.status}]: ${errorData.reason || 'UNKNOWN'}`);
        console.warn(`💡 ${errorData.error || 'Vision API 호출 실패'}`);
        throw new Error(errorData.error || 'Vision API 호출 실패');
      }

      const data = await response.json();
      */
      const data = { text: '', isMockData: true }; // Fallback
      
      if (data.isMockData) {
        console.log('✅ Mock OCR 성공! (자동 인식 시뮬레이션)');
        console.log('인식된 텍스트:\n', data.text);
      } else {
        console.log('✅ Vision API 성공!');
        console.log('인식된 텍스트:\n', data.text);
      }

      // 텍스트에서 정보 추출
      const extractedData = extractReceiptData(data.text);
      
      setScannedData(extractedData);
      setIsScanning(false);
      
      if (data.isMockData) {
        toast.success('🎉 영수증 자동 인식 완료! (Demo 모드)', {
          description: '실제 Google Vision AI를 사용하려면 API 키를 설정하세요.',
          duration: 5000
        });
      } else {
        toast.success('🎉 영수증 자동 인식 완료! (Vision AI)', {
          description: 'Google Cloud Vision API로 자동 추출되었습니다.',
          duration: 4000
        });
      }
      
    } catch (error: any) {
      // Vision API 에러 → 수동 입력 모드로 전환
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('⚠️ Vision AI 자동 인식 실패 → 수동 입력 모드');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('💡 영수증 사진을 보면서 직접 입력할 수 있습니다.');
      console.log('💡 실제 Google Vision API 키가 필요하면:');
      console.log('   1. https://console.cloud.google.com');
      console.log('   2. Cloud Vision API 활성화');
      console.log('   3. API 키 생성 (AIzaSy로 시작)');
      console.log('   4. Supabase → Secrets에 등록');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      
      // Vision API 실패 시 수동 입력 모드로 전환
      setIsScanning(false);
      setScannedData({
        date: new Date().toISOString().split('T')[0],
        merchant: '',
        amount: 0,
        category: '식비',
        item: ''
      });
      
      toast.error('자동 인식 실패. 사진을 보며 직접 입력해주세요.', {
        description: '최근 상호명 자동완성 기능이 지원됩니다.',
        duration: 5000
      });
    }
  };

  // 파일을 Base64로 변환
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };



  // 영수증 텍스트에서 데이터 추출 (Vision API 최적화)
  const extractReceiptData = (text: string) => {
    console.log('=== 영수증 데이터 추출 시작 (Vision AI) ===');
    console.log('원본 텍스트:\n', text);
    
    // 1. 날짜 추출 (모든 형식 지원)
    let date = new Date().toISOString().split('T')[0];
    
    // 패턴 1: YYYY/MM/DD HH:MM:SS 또는 YYYY-MM-DD HH:MM:SS
    let dateMatch = text.match(/20\d{2}[\s\/\-\.년](0?[1-9]|1[0-2])[\s\/\-\.월](0?[1-9]|[12][0-9]|3[01])[\s일]*\s*(\d{1,2}:\d{2}:\d{2})?/);
    if (dateMatch) {
      const fullMatch = dateMatch[0];
      const yearMatch = fullMatch.match(/20\d{2}/);
      const monthMatch = fullMatch.match(/[\s\/\-\.년](0?[1-9]|1[0-2])/);
      const dayMatch = fullMatch.match(/[\s\/\-\.월](0?[1-9]|[12][0-9]|3[01])/);
      
      if (yearMatch && monthMatch && dayMatch) {
        const year = yearMatch[0];
        const month = monthMatch[1].padStart(2, '0');
        const day = dayMatch[1].padStart(2, '0');
        date = `${year}-${month}-${day}`;
      }
    }
    console.log('✅ 추출된 날짜:', date);

    // 2. 금액 추출 - Vision AI용 강화 전략
    let amount = 0;
    
    // 전략 1: "합계", "총액", "결제금액" 키워드 근처 (가장 정확)
    const amountKeywords = [
      /합\s*계[^\d\n]{0,10}(\d{1,3}(?:[,\s]\d{3})+|\d{4,})/i,
      /총\s*액[^\d\n]{0,10}(\d{1,3}(?:[,\s]\d{3})+|\d{4,})/i,
      /결제\s*금액[^\d\n]{0,10}(\d{1,3}(?:[,\s]\d{3})+|\d{4,})/i,
      /지불\s*금액[^\d\n]{0,10}(\d{1,3}(?:[,\s]\d{3})+|\d{4,})/i,
      /승인\s*금액[^\d\n]{0,10}(\d{1,3}(?:[,\s]\d{3})+|\d{4,})/i,
    ];
    
    for (const regex of amountKeywords) {
      const match = text.match(regex);
      if (match) {
        amount = parseInt(match[1].replace(/[,\s]/g, ''));
        console.log(`키워드에서 금액 추출 (${regex}):`, amount);
        break;
      }
    }
    
    // 전략 2: 모든 금액 패턴 추출 후 가장 큰 값 선택
    if (!amount) {
      const allAmounts = text.match(/\d{1,3}(?:[,\s]\d{3})+|\d{5,}/g);
      if (allAmounts && allAmounts.length > 0) {
        const amounts = allAmounts
          .map(a => parseInt(a.replace(/[,\s]/g, '')))
          .filter(a => a >= 1000 && a <= 10000000); // 1천원~1천만원 사이만
        
        if (amounts.length > 0) {
          amount = Math.max(...amounts);
          console.log('전체 금액 중 최대값:', amount);
        }
      }
    }
    
    console.log('✅ 추출된 금액:', amount);

    // 3. 상호명 추출 (Vision AI 결과용)
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    let merchant = '';
    
    // 제외할 패턴
    const excludePatterns = [
      /카드.*결제/,
      /신용.*승인/,
      /영수증/,
      /거래.*일시/,
      /전표.*번호/,
      /20\d{2}[\s\/\-]/,  // 날짜
      /\d{3,4}[-\s]\d{3,4}/,  // 전화번호
      /사업자.*등록/,
      /주소/,
      /TEL/i,
      /^\d+$/,  // 숫자만
    ];
    
    // 상위 15줄에서 상호명 찾기
    for (let i = 0; i < Math.min(lines.length, 15); i++) {
      const line = lines[i];
      
      // 너무 길거나 짧으면 제외
      if (line.length > 30 || line.length < 2) continue;
      
      // 제외 패턴 체크
      if (excludePatterns.some(pattern => pattern.test(line))) continue;
      
      // 한글 2글자 이상 포함
      const koreanMatch = line.match(/[가-힣]{2,}/);
      if (koreanMatch) {
        merchant = line;
        break;
      }
    }
    
    if (!merchant) merchant = '상호명 확인 필요';
    console.log('✅ 추출된 상호명:', merchant);

    // 4. 카테고리 자동 분류 (키워드 기반)
    let category = '식비';
    let item = '식사/간식';
    
    const textLower = text.toLowerCase();
    
    if (text.includes('편의점') || textLower.includes('gs25') || textLower.includes('cu') || textLower.includes('7-eleven') || textLower.includes('세븐')) {
      category = '식비';
      item = '편의점 구매';
    } else if (text.includes('주유') || text.includes('경유') || text.includes('휘발유') || textLower.includes('oil') || textLower.includes('gas')) {
      category = '유류비';
      item = '차량 주유';
    } else if (text.includes('택시') || text.includes('버스') || text.includes('지하철') || text.includes('교통카드')) {
      category = '교통비';
      item = '교통비';
    } else if (text.includes('카페') || text.includes('커피') || textLower.includes('cafe') || textLower.includes('coffee') || textLower.includes('starbucks')) {
      category = '식비';
      item = '카페/음료';
    } else if (text.includes('문구') || text.includes('사무용품') || text.includes('다이소') || text.includes('용품')) {
      category = '사무용품';
      item = '사무용품 구매';
    } else if (text.includes('식당') || text.includes('음식점') || text.includes('레스토랑') || textLower.includes('restaurant')) {
      category = '식비';
      item = '식사';
    }

    console.log('✅ 카테고리:', category, '/', item);
    console.log('=== 추출 완료 ===\n');

    return {
      date,
      merchant,
      amount,
      category,
      item
    };
  };

  const handleSaveExpense = () => {
    toast.success('지출 내역이 저장되었습니다.');
    setShowReceiptScanDialog(false);
    setShowManualExpenseDialog(false);
    setSelectedReceipt(null);
    setScannedData(null);
  };

  const handleApproveExpense = (id: string) => {
    toast.success('지출 내역이 승인되었습니다.');
  };

  const handleRejectExpense = (id: string) => {
    toast.error('지출 내역이 반려되었습니다.');
  };

  const filteredExpenses = mockExpenses.filter(expense => {
    const matchesCategory = selectedCategory === 'all' || expense.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || expense.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  // 두 지점 사이의 거리 계산 (Haversine formula)
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371e3; // 지구 반지름 (미터)
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // 거리 (미터)
  };

  // 위치 확인 함수
  const checkUserLocation = async () => {
    setLocationChecking(true);
    
    try {
      console.log('🌍 위치 확인 시작...');
      
      // 데모 모드: 자동으로 회사 위치로 설정
      if (demoMode) {
        console.log('🎭 데모 모드: 회사 위치로 자동 설정');
        setTimeout(() => {
          setUserLocation({ lat: OFFICE_LOCATION.lat, lng: OFFICE_LOCATION.lng });
          setIsInOffice(true);
          setShowCheckInButton(true);
          toast.success('데모 모드: 회사 위치 확인!', {
            description: '출근 체크를 진행하세요.'
          });
          setLocationChecking(false);
        }, 1000);
        return;
      }
      
      if (!navigator.geolocation) {
        toast.error('위치 서비스를 지원하지 않는 브라우저입니다.');
        setLocationChecking(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`📍 현재 위치: ${latitude}, ${longitude}`);
          
          setUserLocation({ lat: latitude, lng: longitude });
          
          // 회사 위치와의 거리 계산
          const distance = calculateDistance(
            latitude,
            longitude,
            OFFICE_LOCATION.lat,
            OFFICE_LOCATION.lng
          );
          
          console.log(`📏 회사와의 거리: ${distance.toFixed(0)}m`);
          
          if (distance <= OFFICE_LOCATION.radius) {
            setIsInOffice(true);
            setShowCheckInButton(true);
            toast.success(`회사 위치 확인! (${distance.toFixed(0)}m 이내)`, {
              description: '출근 체크를 진행하세요.'
            });
          } else {
            setIsInOffice(false);
            setShowCheckInButton(false);
            toast.warning(`회사 위치에서 벗어났습니다 (${(distance / 1000).toFixed(1)}km 떨어짐)`, {
              description: '회사 근처에서 다시 시도하세요.'
            });
          }
          
          setLocationChecking(false);
        },
        (error) => {
          console.error('❌ 위치 확인 실패 [코드: ' + error.code + ']:', error.message);
          let errorMessage = '위치 확인에 실패했습니다.';
          let errorDescription = '';
          
          switch (error.code) {
            case 1: // PERMISSION_DENIED
              errorMessage = '위치 권한이 거부되었습니다.';
              errorDescription = '브라우저 설정에서 위치 권한을 허용해주세요.';
              console.log('💡 해결 방법: 브라우저 주소창 옆 자물쇠 아이콘 → 위치 권한 허용');
              break;
            case 2: // POSITION_UNAVAILABLE
              errorMessage = '위치 정보를 사용할 수 없습니다.';
              errorDescription = 'GPS 신호가 약하거나 실내에 있을 수 있습니다.';
              console.log('💡 해결 방법: 창가로 이동하거나 데모 모드를 사용하세요.');
              break;
            case 3: // TIMEOUT
              errorMessage = '위치 확인 시간이 초과되었습니다.';
              errorDescription = '다시 시도하거나 데모 모드를 사용하세요.';
              console.log('💡 해결 방법: 데모 모드를 켜고 다시 시도하세요.');
              break;
            default:
              errorMessage = '알 수 없는 위치 오류가 발생했습니다.';
              errorDescription = '데모 모드를 사용해주세요.';
          }
          
          toast.error(errorMessage, {
            description: errorDescription,
            duration: 5000
          });
          setLocationChecking(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    } catch (error: any) {
      console.error('❌ 위치 확인 오류:', error);
      console.error('오류 상세:', {
        name: error?.name,
        message: error?.message,
        stack: error?.stack
      });
      toast.error('위치 확인 중 오류가 발생했습니다.', {
        description: '데모 모드를 사용하거나 브라우저를 새로고침하세요.',
        duration: 5000
      });
      setLocationChecking(false);
    }
  };

  // 출근 체크인
  const handleCheckIn = () => {
    if (!isInOffice) {
      toast.error('회사 위치에서만 출근 체크가 가능합니다.');
      return;
    }

    // 현재 로그인한 사용자 확인
    if (!currentUser) {
      toast.error('로그인이 필요합니다.', {
        description: '직원 인증을 먼저 진행해주세요.'
      });
      return;
    }

    const now = new Date();
    const timeString = now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    const today = now.toISOString().split('T')[0];
    
    // 출근 기록 생성 (현재 로그인한 사용자 정보 사용)
    const newRecord = {
      id: currentUser.employeeId || currentUser.id,
      name: currentUser.name,
      checkIn: timeString,
      checkOut: '-',
      status: 'present',
      overtime: 0,
      date: today,
      location: userLocation,
      timestamp: now.toISOString()
    };

    // localStorage에 저장
    const existingRecords = JSON.parse(localStorage.getItem('attendanceRecords') || '[]');
    
    // 오늘 이미 출근한 기록이 있는지 확인
    const alreadyCheckedIn = existingRecords.some((record: any) => 
      record.id === newRecord.id && record.date === today
    );

    if (alreadyCheckedIn) {
      toast.warning('이미 출근 처리되었습니다.', {
        description: '퇴근 처리는 별도로 진행해주세요.'
      });
      return;
    }

    const updatedRecords = [...existingRecords, newRecord];
    localStorage.setItem('attendanceRecords', JSON.stringify(updatedRecords));
    setAttendanceRecords(updatedRecords);

    console.log('✅ 출근 체크 완료:', newRecord);

    toast.success(`출근 처리 완료!`, {
      description: `${currentUser.name}님 - ${timeString}`
    });

    // 초기화
    setShowCheckInButton(false);
    setUserLocation(null);
    setIsInOffice(false);
  };

  return (
    <div className="h-screen overflow-y-auto bg-gray-50">
      <div className="p-4 md:p-6 lg:p-8 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* 헤더 */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div>
              <h1 className="text-3xl mb-2">직원 관리</h1>
              <p className="text-gray-600">직원 정보, 권한, 출퇴근, 지출 관리</p>
            </div>
            
            <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <UserPlus className="w-4 h-4" />
                  직원 추가
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>새 직원 추가</DialogTitle>
                  <DialogDescription>직원 정보를 입력하세요.</DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="space-y-2">
                    <Label>사번 <span className="text-red-500">*</span></Label>
                    <Input 
                      placeholder="E007" 
                      value={newStaffData.employeeId}
                      onChange={(e) => setNewStaffData({...newStaffData, employeeId: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>이름 <span className="text-red-500">*</span></Label>
                    <Input 
                      placeholder="홍길동" 
                      value={newStaffData.name}
                      onChange={(e) => setNewStaffData({...newStaffData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>부서</Label>
                    <Select value={newStaffData.department} onValueChange={(value) => setNewStaffData({...newStaffData, department: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="경영">경영</SelectItem>
                        <SelectItem value="생산부">생산부</SelectItem>
                        <SelectItem value="품질관리">품질관리</SelectItem>
                        <SelectItem value="A라인">A라인</SelectItem>
                        <SelectItem value="B라인">B라인</SelectItem>
                        <SelectItem value="C라인">C라인</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>직급</Label>
                    <Select value={newStaffData.position} onValueChange={(value) => setNewStaffData({...newStaffData, position: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="사원">사원</SelectItem>
                        <SelectItem value="대리">대리</SelectItem>
                        <SelectItem value="과장">과장</SelectItem>
                        <SelectItem value="차장">차장</SelectItem>
                        <SelectItem value="부장">부장</SelectItem>
                        <SelectItem value="라인장">라인장</SelectItem>
                        <SelectItem value="반장">반장</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>이메일</Label>
                    <Input 
                      type="email" 
                      placeholder="example@hicon.co.kr" 
                      value={newStaffData.email}
                      onChange={(e) => setNewStaffData({...newStaffData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>전화번호</Label>
                    <Input 
                      placeholder="010-0000-0000" 
                      value={newStaffData.phone}
                      onChange={(e) => setNewStaffData({...newStaffData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>로그인 ID (선택)</Label>
                    <Input 
                      placeholder="user_id" 
                      value={newStaffData.userId}
                      onChange={(e) => setNewStaffData({...newStaffData, userId: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>임시 비밀번호 (선택)</Label>
                    <Input 
                      type="password"
                      placeholder="******" 
                      value={newStaffData.tempPassword}
                      onChange={(e) => setNewStaffData({...newStaffData, tempPassword: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowAddDialog(false)}>취소</Button>
                  <Button onClick={handleAddStaff}>추가</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  총 직원 수
                </CardDescription>
                <CardTitle className="text-3xl">{allStaff.length}명</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  재직: {allStaff.filter(s => s.status === 'active').length}명
                  {registeredStaff.length > 0 && (
                    <span className="ml-2 text-blue-600">(등록: {registeredStaff.length}명)</span>
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  금일 출근
                </CardDescription>
                <CardTitle className="text-3xl">
                  {mockAttendance.filter(a => a.status !== 'absent').length + 
                   attendanceRecords.filter(r => r.date === new Date().toISOString().split('T')[0]).length}명
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Mock: {mockAttendance.filter(a => a.status !== 'absent').length}명
                  {attendanceRecords.filter(r => r.date === new Date().toISOString().split('T')[0]).length > 0 && (
                    <span className="ml-2 text-green-600">
                      / 실시간: {attendanceRecords.filter(r => r.date === new Date().toISOString().split('T')[0]).length}명
                    </span>
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  총 초과근무
                </CardDescription>
                <CardTitle className="text-3xl">{mockAttendance.reduce((sum, a) => sum + a.overtime, 0)}시간</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">이번 주 기준</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  이번 달 지출
                </CardDescription>
                <CardTitle className="text-3xl">₩{(mockExpenses.reduce((sum, e) => sum + e.amount, 0) / 10000).toFixed(0)}만</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">승인 대기: {mockExpenses.filter(e => e.status === 'pending').length}건</p>
              </CardContent>
            </Card>
          </div>

          {/* 탭 컨텐츠 */}
          <Tabs defaultValue="staff" className="space-y-4">
            <TabsList>
              <TabsTrigger value="staff">직원 목록</TabsTrigger>
              <TabsTrigger value="attendance">출퇴근 관리</TabsTrigger>
              <TabsTrigger value="expenses">직원 지출 내역</TabsTrigger>
              <TabsTrigger value="permissions">권한 설정</TabsTrigger>
            </TabsList>

            {/* 직원 목록 */}
            <TabsContent value="staff" className="space-y-4 pb-32">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle>직원 정보</CardTitle>
                      <CardDescription>전체 직원 명단 및 상세 정보</CardDescription>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          placeholder="이름 또는 사번 검색"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-9 w-64"
                        />
                      </div>
                      <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">전체 부서</SelectItem>
                          <SelectItem value="경영">경영</SelectItem>
                          <SelectItem value="생산부">생산부</SelectItem>
                          <SelectItem value="품질관리">품질관리</SelectItem>
                          <SelectItem value="A라인">A라인</SelectItem>
                          <SelectItem value="B라인">B라인</SelectItem>
                          <SelectItem value="C라인">C라인</SelectItem>
                          <SelectItem value="미지정">미지정</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* 모바일: 스크롤바가 화면 하단에 고정, 데스크톱: 자동 높이 */}
                  <div className="lg:overflow-x-auto overflow-x-auto lg:max-h-none max-h-[calc(100vh-400px)] overflow-y-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>사번</TableHead>
                          <TableHead>이름</TableHead>
                          <TableHead>부서</TableHead>
                          <TableHead>직급</TableHead>
                          <TableHead>권한</TableHead>
                          <TableHead>상태</TableHead>
                          <TableHead>입사일</TableHead>
                          <TableHead>연락처</TableHead>
                          <TableHead className="text-right">작업</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredStaff.map((staff) => {
                          const isRegistered = registeredStaff.some(emp => 
                            emp.employeeId === staff.id || emp.id === staff.id
                          );
                          
                          return (
                            <TableRow key={staff.id}>
                              <TableCell className="font-medium">
                                {staff.id}
                                {isRegistered && (
                                  <Badge variant="outline" className="ml-2 text-xs bg-blue-50 text-blue-700 border-blue-200">
                                    신규
                                  </Badge>
                                )}
                              </TableCell>
                              <TableCell>{staff.name}</TableCell>
                              <TableCell>{staff.department}</TableCell>
                              <TableCell>{staff.position}</TableCell>
                              <TableCell>
                                <Badge variant={staff.role === '관리자' ? 'default' : 'secondary'}>
                                  {staff.role}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge variant={staff.status === 'active' ? 'default' : 'outline'}>
                                  {staff.status === 'active' ? '재직' : '휴가'}
                                </Badge>
                              </TableCell>
                              <TableCell>{staff.joinDate}</TableCell>
                              <TableCell className="text-sm text-gray-600">{staff.phone}</TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button variant="ghost" size="sm">
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => handleDeleteStaff(staff.id, staff.name)}
                                  >
                                    <Trash2 className="w-4 h-4 text-red-600" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 출퇴근 관리 */}
            <TabsContent value="attendance" className="space-y-4 pb-32">
              {/* 위치 기반 자동 출근 체크 카드 */}
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        자동 출근 체크
                      </CardTitle>
                      <CardDescription>
                        위치 기반으로 회사 출근을 자동으로 확인합니다
                      </CardDescription>
                    </div>
                    {/* 데모 모드 토글 */}
                    <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-2 rounded-lg border-2 border-purple-200">
                      <Label htmlFor="demo-mode" className="text-xs font-medium text-purple-700 cursor-pointer">
                        {demoMode ? '🎭 데모 ON' : '📍 실제 GPS'}
                      </Label>
                      <Switch 
                        id="demo-mode" 
                        checked={demoMode} 
                        onCheckedChange={setDemoMode}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* 위치 정보 표시 */}
                    {userLocation && (
                      <div className="p-3 bg-white rounded-lg border">
                        <p className="text-sm text-gray-600">현재 위치</p>
                        <p className="text-xs text-gray-500 mt-1">
                          위도: {userLocation.lat.toFixed(6)}, 경도: {userLocation.lng.toFixed(6)}
                        </p>
                        <div className="mt-2">
                          {isInOffice ? (
                            <Badge className="bg-green-500">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              회사 범위 내
                            </Badge>
                          ) : (
                            <Badge variant="destructive">
                              <XCircle className="w-3 h-3 mr-1" />
                              회사 범위 외
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {/* 현재 로그인 사용자 표시 */}
                    {currentUser ? (
                      <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full text-white">
                            <Users className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">현재 로그인</p>
                            <p className="text-base">
                              <strong>{currentUser.name}</strong> ({currentUser.employeeId || currentUser.id})
                            </p>
                            <p className="text-xs text-gray-500">{currentUser.department} · {currentUser.position}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                        <p className="text-sm text-yellow-800">
                          ⚠️ <strong>로그인이 필요합니다.</strong> 직원 인증을 먼저 진행해주세요.
                        </p>
                      </div>
                    )}

                    {/* 버튼 영역 */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={checkUserLocation}
                        disabled={locationChecking}
                        variant="outline"
                        className="flex-1"
                      >
                        {locationChecking ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            위치 확인 중...
                          </>
                        ) : (
                          <>
                            <Search className="w-4 h-4 mr-2" />
                            위치 확인
                          </>
                        )}
                      </Button>

                      {showCheckInButton && currentUser && (
                        <Button
                          onClick={handleCheckIn}
                          className="flex-1 bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          출근 체크하기
                        </Button>
                      )}
                    </div>

                    {/* 안내 메시지 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-xs text-blue-800 mb-2">
                          💡 <strong>사용 방법</strong>
                        </p>
                        <ul className="text-xs text-blue-700 space-y-1">
                          <li>1️⃣ 직원 인증 로그인 (1회)</li>
                          <li>2️⃣ 데모 모드 ON/OFF 선택</li>
                          <li>3️⃣ "위치 확인" 클릭</li>
                          <li>4️⃣ "출근 체크하기" 클릭</li>
                          <li>✅ 자동으로 본인 출근 처리!</li>
                        </ul>
                      </div>
                      
                      <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-xs text-purple-800 mb-2">
                          🎭 <strong>데모 모드 안내</strong>
                        </p>
                        <ul className="text-xs text-purple-700 space-y-1">
                          <li>• <strong>ON</strong>: 위치 자동 인식 (테스트용)</li>
                          <li>• <strong>OFF</strong>: 실제 GPS 사용</li>
                          <li>• 위치 권한 오류 시 ON 권장</li>
                          <li>• 실내/GPS 약할 때 ON 사용</li>
                        </ul>
                      </div>
                    </div>
                    
                    {demoMode && (
                      <div className="p-3 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                        <p className="text-xs text-yellow-800">
                          🎭 <strong>데모 모드 활성화:</strong> 위치 확인 시 자동으로 회사 위치로 설정됩니다.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle>금일 출퇴근 현황</CardTitle>
                      <CardDescription>{new Date().toLocaleDateString('ko-KR')} 기준</CardDescription>
                    </div>
                    
                    <Input type="date" className="w-48" defaultValue={new Date().toISOString().split('T')[0]} />
                  </div>
                </CardHeader>
                <CardContent>
                  {/* 모바일: 스크롤바가 화면 하단에 고정, 데스크톱: 자동 높이 */}
                  <div className="lg:overflow-x-auto overflow-x-auto lg:max-h-none max-h-[calc(100vh-500px)] overflow-y-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>사번</TableHead>
                          <TableHead>이름</TableHead>
                          <TableHead>출근 시간</TableHead>
                          <TableHead>퇴근 시간</TableHead>
                          <TableHead>상태</TableHead>
                          <TableHead>초과근무</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {/* 실제 출근 기록 먼저 표시 */}
                        {attendanceRecords
                          .filter(record => record.date === new Date().toISOString().split('T')[0])
                          .map((record) => (
                            <TableRow key={`real-${record.id}-${record.timestamp}`} className="bg-blue-50">
                              <TableCell className="font-medium">
                                {record.id}
                                <Badge variant="outline" className="ml-2 text-xs bg-blue-100 text-blue-700 border-blue-300">
                                  실시간
                                </Badge>
                              </TableCell>
                              <TableCell>{record.name}</TableCell>
                              <TableCell className="text-green-700">{record.checkIn}</TableCell>
                              <TableCell>{record.checkOut}</TableCell>
                              <TableCell>
                                <Badge variant="default" className="bg-green-600">
                                  {record.status === 'present' ? '정상' :
                                   record.status === 'late' ? '지각' :
                                   record.status === 'vacation' ? '휴가' : '결근'}
                                </Badge>
                              </TableCell>
                              <TableCell>{record.overtime > 0 ? `${record.overtime}시간` : '-'}</TableCell>
                            </TableRow>
                          ))
                        }
                        
                        {/* Mock 데이터 표시 (실제 기록과 중복되지 않는 것만) */}
                        {mockAttendance
                          .filter(mockRecord => !attendanceRecords.some(realRecord => 
                            realRecord.id === mockRecord.id && 
                            realRecord.date === new Date().toISOString().split('T')[0]
                          ))
                          .map((record) => (
                            <TableRow key={`mock-${record.id}`}>
                              <TableCell className="font-medium">{record.id}</TableCell>
                              <TableCell>{record.name}</TableCell>
                              <TableCell>{record.checkIn}</TableCell>
                              <TableCell>{record.checkOut}</TableCell>
                              <TableCell>
                                <Badge 
                                  variant={
                                    record.status === 'present' ? 'default' :
                                    record.status === 'late' ? 'destructive' :
                                    'outline'
                                  }
                                >
                                  {record.status === 'present' ? '정상' :
                                   record.status === 'late' ? '지각' :
                                   record.status === 'vacation' ? '휴가' : '결근'}
                                </Badge>
                              </TableCell>
                              <TableCell>{record.overtime > 0 ? `${record.overtime}시간` : '-'}</TableCell>
                            </TableRow>
                          ))
                        }
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 직원 지출 내역 */}
            <TabsContent value="expenses" className="space-y-4 pb-32">
              {/* 통계 카드 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription>이번 달 총 지출</CardDescription>
                    <CardTitle className="text-2xl text-blue-600">
                      ₩{mockExpenses.reduce((sum, e) => sum + e.amount, 0).toLocaleString()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600">10월 기준</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription>승인 대기 중</CardDescription>
                    <CardTitle className="text-2xl text-orange-600">
                      {mockExpenses.filter(e => e.status === 'pending').length}건
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600">
                      ₩{mockExpenses.filter(e => e.status === 'pending').reduce((sum, e) => sum + e.amount, 0).toLocaleString()}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription>승인 완료</CardDescription>
                    <CardTitle className="text-2xl text-green-600">
                      {mockExpenses.filter(e => e.status === 'approved').length}건
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600">
                      ₩{mockExpenses.filter(e => e.status === 'approved').reduce((sum, e) => sum + e.amount, 0).toLocaleString()}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle>지출 내역 관리</CardTitle>
                      <CardDescription>직원 업무 지출 내역 등록 및 승인</CardDescription>
                    </div>
                    
                    <div className="flex gap-2">
                      <Dialog open={showReceiptScanDialog} onOpenChange={setShowReceiptScanDialog}>
                        <DialogTrigger asChild>
                          <Button className="gap-2">
                            <Camera className="w-4 h-4" />
                            영수증 스캔
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>영수증 자동 스캔 (Vision AI)</DialogTitle>
                            <DialogDescription>
                              영수증 사진을 업로드하면 Google Vision AI가 자동으로 정보를 추출합니다.
                            </DialogDescription>
                          </DialogHeader>
                          
                          {/* Google Vision API 상태 확인 버튼 */}
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={async () => {
                              try {
                                toast.info('Vision API 기능은 현재 준비중입니다.', {
                                  description: '영수증은 수동으로 입력해주세요.',
                                  duration: 3000
                                });
                                return;
                                
                                /* Vision API 체크 코드 (비활성화)
                                const { projectId, publicAnonKey } = await import('../utils/supabase/info');
                                const res = await fetch(
                                  `https://${projectId}.supabase.co/functions/v1/make-server-656276dc/check-vision-api`,
                                  {
                                    headers: { 'Authorization': `Bearer ${publicAnonKey}` }
                                  }
                                );
                                const data = await res.json();
                                */
                                const data: any = {};
                                
                                if (data.status === 'success') {
                                  toast.success(data.message, {
                                    description: `키: ${data.keyPreview}`,
                                    duration: 4000
                                  });
                                } else if (data.status === 'warning') {
                                  toast.warning(data.message, {
                                    description: data.note || data.hint,
                                    duration: 7000
                                  });
                                  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                                  console.log('⚠️ API 키 형식 검증 실패');
                                  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                                  console.log('현재 키:', data.keyPreview);
                                  console.log('힌트:', data.hint);
                                  console.log('참고:', data.note);
                                  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                                } else {
                                  toast.error(data.message, {
                                    description: data.guide,
                                    duration: 5000
                                  });
                                  console.log('📝 설정 방법:', data.guide);
                                }
                              } catch (error: any) {
                                toast.error('API 상태 확인 실패: ' + error.message);
                              }
                            }}
                          >
                            🔍 Google Vision API 연결 상태 확인
                          </Button>
                          
                          <div className="space-y-4">
                            {!selectedReceipt && (
                              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                <input
                                  type="file"
                                  accept="image/*"
                                  capture="environment"
                                  onChange={handleReceiptUpload}
                                  className="hidden"
                                  id="receipt-upload"
                                />
                                <label 
                                  htmlFor="receipt-upload" 
                                  className="cursor-pointer flex flex-col items-center gap-4"
                                >
                                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                                    <Camera className="w-8 h-8 text-blue-600" />
                                  </div>
                                  <div>
                                    <p className="text-lg mb-1">영수증 사진 업로드</p>
                                    <p className="text-sm text-gray-500">
                                      휴대폰 카메라로 촬영하거나 파일을 선택하세요
                                    </p>
                                  </div>
                                  <Button type="button">파일 선택</Button>
                                </label>
                              </div>
                            )}

                            {isScanning && (
                              <div className="flex flex-col items-center justify-center gap-4 py-8">
                                <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
                                <p className="text-lg">영수증을 스캔하고 있습니다...</p>
                                <p className="text-sm text-gray-500">잠시만 기다려주세요</p>
                              </div>
                            )}

                            {selectedReceipt && !isScanning && scannedData && (
                              <div className="space-y-4">
                                {scannedData.merchant ? (
                                  <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <p className="text-sm text-green-800">
                                      ✨ 영수증 자동 인식 완료! (Vision AI)
                                    </p>
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                                    <p className="text-sm text-yellow-800">
                                      자동 인식 실패. 사진을 보며 직접 입력해주세요.
                                    </p>
                                  </div>
                                )}

                                {/* 영수증 사진 미리보기 + 입력 폼 나란히 배치 */}
                                <div className="grid grid-cols-2 gap-6">
                                  {/* 왼쪽: 영수증 사진 미리보기 */}
                                  <div className="space-y-2">
                                    <Label>📸 영수증 사진</Label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                                      <img
                                        src={URL.createObjectURL(selectedReceipt)}
                                        alt="영수증"
                                        className="w-full h-auto max-h-[500px] object-contain"
                                      />
                                    </div>
                                    <p className="text-xs text-gray-500 text-center">
                                      {selectedReceipt.name} ({(selectedReceipt.size / 1024).toFixed(1)}KB)
                                    </p>
                                  </div>

                                  {/* 오른쪽: 입력 폼 */}
                                  <div className="space-y-4">
                                    <div className="space-y-2">
                                      <Label>지출 날짜 *</Label>
                                      <Input type="date" defaultValue={scannedData.date} />
                                    </div>

                                    <div className="space-y-2">
                                      <Label>상호명 *</Label>
                                      <Input 
                                        defaultValue={scannedData.merchant} 
                                        placeholder="예: GS25 하이콘지점"
                                        list="merchant-suggestions"
                                      />
                                      <datalist id="merchant-suggestions">
                                        {/* 최근 상호명 자동완성 */}
                                        {Array.from(new Set(mockExpenses.map(e => e.merchant))).slice(0, 10).map(merchant => (
                                          <option key={merchant} value={merchant} />
                                        ))}
                                      </datalist>
                                    </div>

                                    <div className="space-y-2">
                                      <Label>카테고리 *</Label>
                                      <Select defaultValue={scannedData.category}>
                                        <SelectTrigger>
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="교통비">🚗 교통비</SelectItem>
                                          <SelectItem value="식비">🍴 식비</SelectItem>
                                          <SelectItem value="사무용품">📎 사무용품</SelectItem>
                                          <SelectItem value="유류비">⛽ 유류비</SelectItem>
                                          <SelectItem value="교육비">📚 교육비</SelectItem>
                                          <SelectItem value="소모품">🔧 소모품</SelectItem>
                                          <SelectItem value="기타">📌 기타</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>

                                    <div className="space-y-2">
                                      <Label>금액 * (원)</Label>
                                      <Input 
                                        type="number" 
                                        defaultValue={scannedData.amount || ''} 
                                        placeholder="예: 25000"
                                      />
                                    </div>

                                    <div className="space-y-2">
                                      <Label>지출 항목 *</Label>
                                      <Input 
                                        defaultValue={scannedData.item} 
                                        placeholder="예: 음료 및 간식"
                                      />
                                    </div>

                                    <div className="space-y-2">
                                      <Label>메모</Label>
                                      <Input placeholder="추가 메모 (선택사항)" />
                                    </div>
                                  </div>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t">
                                  <p className="text-sm text-gray-500">
                                    * 필수 항목을 모두 입력해주세요
                                  </p>
                                  <div className="flex gap-2">
                                    <Button 
                                      variant="outline" 
                                      onClick={() => {
                                        setShowReceiptScanDialog(false);
                                        setSelectedReceipt(null);
                                        setScannedData(null);
                                      }}
                                    >
                                      취소
                                    </Button>
                                    <Button onClick={handleSaveExpense}>
                                      💾 저장
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Dialog open={showManualExpenseDialog} onOpenChange={setShowManualExpenseDialog}>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="gap-2">
                            <FileText className="w-4 h-4" />
                            수동 등록
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>지출 내역 수동 등록</DialogTitle>
                            <DialogDescription>지출 정보를 직접 입력하세요.</DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label>지출 날짜</Label>
                                <Input type="date" defaultValue="2024-10-31" />
                              </div>
                              <div className="space-y-2">
                                <Label>카테고리</Label>
                                <Select defaultValue="식비">
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="교통비">교통비</SelectItem>
                                    <SelectItem value="식비">식비</SelectItem>
                                    <SelectItem value="사무용품">사무용품</SelectItem>
                                    <SelectItem value="유류비">유류비</SelectItem>
                                    <SelectItem value="교육비">교육비</SelectItem>
                                    <SelectItem value="소모품">소모품</SelectItem>
                                    <SelectItem value="기타">기타</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label>금액</Label>
                                <Input type="number" placeholder="25000" />
                              </div>
                              <div className="space-y-2">
                                <Label>상호명</Label>
                                <Input placeholder="GS25 하이콘지점" />
                              </div>
                              <div className="space-y-2 col-span-2">
                                <Label>지출 항목</Label>
                                <Input placeholder="음료 및 간식" />
                              </div>
                              <div className="space-y-2 col-span-2">
                                <Label>메모</Label>
                                <Input placeholder="추가 메모 (선택사항)" />
                              </div>
                              <div className="space-y-2 col-span-2">
                                <Label>영수증 첨부 (선택)</Label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    id="manual-receipt-upload"
                                  />
                                  <label 
                                    htmlFor="manual-receipt-upload" 
                                    className="cursor-pointer flex items-center gap-2 text-sm text-gray-600"
                                  >
                                    <Upload className="w-4 h-4" />
                                    영수증 이미지 업로드
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-end gap-2">
                              <Button variant="outline" onClick={() => setShowManualExpenseDialog(false)}>
                                취소
                              </Button>
                              <Button onClick={handleSaveExpense}>저장</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* 필터 */}
                  <div className="flex gap-2 mb-4">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="카테고리" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">전체 카테고리</SelectItem>
                        <SelectItem value="교통비">교통비</SelectItem>
                        <SelectItem value="식비">식비</SelectItem>
                        <SelectItem value="사무용품">사무용품</SelectItem>
                        <SelectItem value="유류비">유류비</SelectItem>
                        <SelectItem value="교육비">교육비</SelectItem>
                        <SelectItem value="소모품">소모품</SelectItem>
                        <SelectItem value="기타">기타</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="상태" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">전체 상태</SelectItem>
                        <SelectItem value="pending">승인 대기</SelectItem>
                        <SelectItem value="approved">승인 완료</SelectItem>
                        <SelectItem value="rejected">반려됨</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* 모바일: 스크롤바가 화면 하단에 고정, 데스크톱: 자동 높이 */}
                  <div className="lg:overflow-x-auto overflow-x-auto lg:max-h-none max-h-[calc(100vh-600px)] overflow-y-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>날짜</TableHead>
                          <TableHead>직원</TableHead>
                          <TableHead>카테고리</TableHead>
                          <TableHead>항목</TableHead>
                          <TableHead className="text-right">금액</TableHead>
                          <TableHead>영수증</TableHead>
                          <TableHead>상태</TableHead>
                          <TableHead>관리</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredExpenses.map((expense) => (
                          <TableRow key={expense.id}>
                            <TableCell>{expense.date}</TableCell>
                            <TableCell>
                              <div>
                                <p className="font-medium">{expense.employeeName}</p>
                                <p className="text-xs text-gray-500">{expense.employeeId}</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{expense.category}</Badge>
                            </TableCell>
                            <TableCell>
                              <div>
                                <p>{expense.item}</p>
                                {expense.memo && (
                                  <p className="text-xs text-gray-500">{expense.memo}</p>
                                )}
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              ₩{expense.amount.toLocaleString()}
                            </TableCell>
                            <TableCell>
                              {expense.receipt ? (
                                <Receipt className="w-4 h-4 text-green-600" />
                              ) : (
                                <XCircle className="w-4 h-4 text-gray-300" />
                              )}
                            </TableCell>
                            <TableCell>
                              <Badge 
                                variant={
                                  expense.status === 'approved' ? 'default' :
                                  expense.status === 'pending' ? 'outline' :
                                  'destructive'
                                }
                              >
                                {expense.status === 'approved' ? '승인' :
                                 expense.status === 'pending' ? '대기중' :
                                 '반려'}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {expense.status === 'pending' && (
                                <div className="flex gap-1">
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => handleApproveExpense(expense.id)}
                                    className="h-7 text-xs"
                                  >
                                    승인
                                  </Button>
                                  <Button 
                                    size="sm" 
                                    variant="destructive"
                                    onClick={() => handleRejectExpense(expense.id)}
                                    className="h-7 text-xs"
                                  >
                                    반려
                                  </Button>
                                </div>
                              )}
                              {expense.status === 'approved' && expense.approvedBy && (
                                <p className="text-xs text-gray-500">승인: {expense.approvedBy}</p>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 권한 설정 */}
            <TabsContent value="permissions" className="space-y-4 pb-32">
              <Card>
                <CardHeader>
                  <CardTitle>권한 설정</CardTitle>
                  <CardDescription>직원별 시스템 접근 권한 관리</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card className="border-2 border-blue-200 bg-blue-50">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Shield className="w-5 h-5 text-blue-600" />
                            관리자
                          </CardTitle>
                          <CardDescription>모든 기능 접근 가능</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              직원 관리
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              생산 관리
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              재고/출고 관리
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              통계 리포트
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              시스템 설정
                            </li>
                          </ul>
                          <div className="mt-4 pt-4 border-t">
                            <p className="text-sm text-gray-600">현재 인원: 2명</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-2 border-green-200 bg-green-50">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Shield className="w-5 h-5 text-green-600" />
                            매니저
                          </CardTitle>
                          <CardDescription>부서별 관리 권한</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <XCircle className="w-4 h-4 text-gray-400" />
                              직원 관리
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              생산 관리
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              재고/출고 관리
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              통계 리포트 (읽기)
                            </li>
                            <li className="flex items-center gap-2">
                              <XCircle className="w-4 h-4 text-gray-400" />
                              시스템 설정
                            </li>
                          </ul>
                          <div className="mt-4 pt-4 border-t">
                            <p className="text-sm text-gray-600">현재 인원: 4명 (품질+A/B/C 라인장)</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-2 border-gray-200">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Shield className="w-5 h-5 text-gray-600" />
                            직원
                          </CardTitle>
                          <CardDescription>기본 작업 권한</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <XCircle className="w-4 h-4 text-gray-400" />
                              직원 관리
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              생산 관리 (입력)
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              재고 확인
                            </li>
                            <li className="flex items-center gap-2">
                              <XCircle className="w-4 h-4 text-gray-400" />
                              통계 리포트
                            </li>
                            <li className="flex items-center gap-2">
                              <XCircle className="w-4 h-4 text-gray-400" />
                              시스템 설정
                            </li>
                          </ul>
                          <div className="mt-4 pt-4 border-t">
                            <p className="text-sm text-gray-600">현재 인원: 24명</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}

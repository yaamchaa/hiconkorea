import { useState } from 'react';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Users, 
  TrendingUp, 
  UserPlus, 
  Building2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Package,
  FileText,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  Clock,
  XCircle,
  BarChart3,
  User
} from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 타입 정의
interface Partner {
  id: string;
  company_name: string;
  business_number: string;
  ceo_name: string;
  contact_person: string;
  phone: string;
  email: string;
  address: string;
  contract_start: string;
  contract_end: string;
  annual_estimated_volume: number; // 연간 예상 공급량 (톤)
  waste_types: string[];
  monthly_quota: number; // 월간 예상 공급량
  current_supply: number; // 현재까지 총 공급량
  daily_supply: number; // 오늘 입고량
  weekly_supply: number; // 이번 주 입고량
  monthly_supply: number; // 이번 달 입고량
  last_settlement_date: string; // 최근 정산일
  status: 'active' | 'pending' | 'expired';
  allbaro_connected: boolean;
  weekly_data?: Array<{ date: string; [key: string]: number | string }>; // 주간 데이터
  monthly_data?: Array<{ date: string; [key: string]: number | string }>; // 월간 데이터
}

interface Customer {
  id: string;
  company_name: string;
  contact_person: string;
  phone: string;
  email: string;
  address: string;
  first_order_date: string;
  last_order_date: string;
  total_orders: number;
  total_amount: number;
  aggregate_types: string[];
  status: 'active' | 'inactive';
}

interface Lead {
  id: string;
  company_name: string;
  contact_person: string;
  phone: string;
  email: string;
  interest_type: 'waste_supply' | 'aggregate_purchase' | 'both';
  inquiry_date: string;
  status: 'new' | 'contacted' | 'negotiating' | 'converted' | 'lost';
  notes: string;
}

export function CRMPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [activeTab, setActiveTab] = useState('partners');

  // 폐기물 종류별 색상 매핑
  const wasteTypeColors: Record<string, string> = {
    '콘크리트': '#3b82f6',
    '아스팔트': '#10b981',
    '벽돌': '#f59e0b',
    '혼합골재': '#8b5cf6'
  };

  // Mock 데이터 생성 헬퍼 함수
  const generateWeeklyData = (wasteTypes: string[]) => {
    const data = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = `${date.getMonth() + 1}/${date.getDate()}`;
      
      const dayData: any = { date: dateStr };
      wasteTypes.forEach(type => {
        dayData[type] = Math.floor(Math.random() * 30) + 10; // 10-40톤
      });
      data.push(dayData);
    }
    return data;
  };

  const generateYearlyData = (wasteTypes: string[]) => {
    const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    const data = [];
    
    for (let i = 0; i < 12; i++) {
      const monthData: any = { date: months[i] };
      wasteTypes.forEach(type => {
        monthData[type] = Math.floor(Math.random() * 300) + 200; // 200-500톤 (월별이므로 더 많은 양)
      });
      data.push(monthData);
    }
    return data;
  };

  // Mock 데이터 - 파트너 (폐기물 공급업체)
  const partners: Partner[] = [
    {
      id: 'P001',
      company_name: '서울건설 주식회사',
      business_number: '123-45-67890',
      ceo_name: '김철수',
      contact_person: '이영희',
      phone: '02-1234-5678',
      email: 'contact@seoulconst.com',
      address: '서울시 강남구 테헤란로 123',
      contract_start: '2025-01-01',
      contract_end: '2025-12-31',
      annual_estimated_volume: 12000, // 연간 예상 12,000톤
      waste_types: ['콘크리트', '아스팔트', '벽돌'],
      monthly_quota: 1000,
      current_supply: 8450,
      daily_supply: 45,
      weekly_supply: 285,
      monthly_supply: 1150,
      last_settlement_date: '2025-09-30',
      status: 'active',
      allbaro_connected: true,
      weekly_data: generateWeeklyData(['콘크리트', '아스팔트', '벽돌']),
      monthly_data: generateYearlyData(['콘크리트', '아스팔트', '벽돌'])
    },
    {
      id: 'P002',
      company_name: '대한건설산업',
      business_number: '234-56-78901',
      ceo_name: '박민수',
      contact_person: '정수진',
      phone: '02-2345-6789',
      email: 'info@daehanconst.co.kr',
      address: '서울시 서초구 서초대로 456',
      contract_start: '2025-01-01',
      contract_end: '2025-12-31',
      annual_estimated_volume: 18000, // 연간 예상 18,000톤
      waste_types: ['콘크리트', '혼합골재'],
      monthly_quota: 1500,
      current_supply: 12300,
      daily_supply: 62,
      weekly_supply: 420,
      monthly_supply: 1580,
      last_settlement_date: '2025-09-30',
      status: 'active',
      allbaro_connected: true,
      weekly_data: generateWeeklyData(['콘크리트', '혼합골재']),
      monthly_data: generateYearlyData(['콘크리트', '혼합골재'])
    },
    {
      id: 'P003',
      company_name: '한강개발',
      business_number: '345-67-89012',
      ceo_name: '최동욱',
      contact_person: '강미영',
      phone: '031-3456-7890',
      email: 'hangang@dev.com',
      address: '경기도 성남시 분당구 판교로 789',
      contract_start: '2025-01-01',
      contract_end: '2025-12-31',
      annual_estimated_volume: 9600, // 연간 예상 9,600톤
      waste_types: ['아스팔트', '벽돌'],
      monthly_quota: 800,
      current_supply: 6780,
      daily_supply: 38,
      weekly_supply: 195,
      monthly_supply: 820,
      last_settlement_date: '2025-09-30',
      status: 'active',
      allbaro_connected: false,
      weekly_data: generateWeeklyData(['아스팔트', '벽돌']),
      monthly_data: generateYearlyData(['아스팔트', '벽돌'])
    }
  ];

  // Mock 데이터 - 고객 (골재 구매업체)
  const customers: Customer[] = [
    {
      id: 'C001',
      company_name: '한국도로공사',
      contact_person: '김도로',
      phone: '042-1111-2222',
      email: 'road@korea.co.kr',
      address: '대전광역시 유성구 도로공사로 50',
      first_order_date: '2024-03-15',
      last_order_date: '2025-10-25',
      total_orders: 45,
      total_amount: 890000000,
      aggregate_types: ['순환골재 40mm', '순환골재 25mm'],
      status: 'active'
    },
    {
      id: 'C002',
      company_name: '삼성물산 건설부문',
      contact_person: '이건설',
      phone: '02-5555-6666',
      email: 'samsung.const@samsung.com',
      address: '서울시 서초구 서초대로 74길 11',
      first_order_date: '2024-06-20',
      last_order_date: '2025-10-28',
      total_orders: 32,
      total_amount: 650000000,
      aggregate_types: ['순환골재 40mm', '순환 잔골재'],
      status: 'active'
    },
    {
      id: 'C003',
      company_name: '현대건설',
      contact_person: '박현대',
      phone: '02-7777-8888',
      email: 'hd.construction@hyundai.com',
      address: '서울시 종로구 율곡로 75',
      first_order_date: '2024-01-10',
      last_order_date: '2025-09-15',
      total_orders: 28,
      total_amount: 520000000,
      aggregate_types: ['순환골재 25mm', '순환 쇄석'],
      status: 'active'
    }
  ];

  // Mock 데이터 - 온라인 고객
  const leads: Lead[] = [
    {
      id: 'L001',
      company_name: 'GS건설',
      contact_person: '최영수',
      phone: '02-9999-0000',
      email: 'gs.const@gsenc.com',
      interest_type: 'aggregate_purchase',
      inquiry_date: '2025-10-20',
      status: 'negotiating',
      notes: '대규모 도로 공사 프로젝트 진행 예정. 월 500톤 이상 필요'
    },
    {
      id: 'L002',
      company_name: '롯데건설',
      contact_person: '정민철',
      phone: '02-3333-4444',
      email: 'lotte.const@lotte.net',
      interest_type: 'waste_supply',
      inquiry_date: '2025-10-18',
      status: 'contacted',
      notes: '재개발 사업 진행 중. 폐기물 처리 파트너 물색'
    },
    {
      id: 'L003',
      company_name: '포스코건설',
      contact_person: '김포스',
      phone: '031-8888-9999',
      email: 'posco.const@poscoenc.com',
      interest_type: 'both',
      inquiry_date: '2025-10-28',
      status: 'new',
      notes: '신규 사업장 개설. 전반적인 파트너십 논의 희망'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { variant: any; label: string }> = {
      active: { variant: 'default', label: '활성' },
      pending: { variant: 'secondary', label: '대기' },
      expired: { variant: 'destructive', label: '만료' },
      inactive: { variant: 'outline', label: '비활성' },
      new: { variant: 'default', label: '신규' },
      contacted: { variant: 'secondary', label: '연락완료' },
      negotiating: { variant: 'default', label: '협상중' },
      converted: { variant: 'default', label: '전환완료' },
      lost: { variant: 'destructive', label: '실패' }
    };
    
    const config = statusConfig[status] || { variant: 'outline', label: status };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <div className="h-screen overflow-y-auto bg-gray-50">
      <div className="p-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* 헤더 */}
          <div className="mb-8">
            <h1 className="text-3xl mb-2">계약 관리</h1>
            <p className="text-gray-600">파트너, 고객, 온라인 고객을 통합 관리합니다</p>
          </div>

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>파트너사</CardDescription>
                <CardTitle className="text-3xl">{partners.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>활성 계약 {partners.filter(p => p.status === 'active').length}건</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>고객사</CardDescription>
                <CardTitle className="text-3xl">{customers.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <Users className="w-4 h-4" />
                  <span>활성 고객 {customers.filter(c => c.status === 'active').length}곳</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>온라인 고객</CardDescription>
                <CardTitle className="text-3xl">{leads.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-orange-600">
                  <UserPlus className="w-4 h-4" />
                  <span>협상중 {leads.filter(l => l.status === 'negotiating').length}건</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>연간 예상 공급량</CardDescription>
                <CardTitle className="text-3xl">
                  {(partners.reduce((sum, p) => sum + p.annual_estimated_volume, 0) / 1000).toFixed(1)}K톤
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-purple-600">
                  <BarChart3 className="w-4 h-4" />
                  <span>2025년 계약 기준</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 탭 컨텐츠 */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <TabsList className="w-full lg:w-auto">
                <TabsTrigger value="partners" className="gap-2 flex-1 lg:flex-initial">
                  <Building2 className="w-4 h-4" />
                  <span className="hidden sm:inline">파트너사</span> ({partners.length})
                </TabsTrigger>
                <TabsTrigger value="customers" className="gap-2 flex-1 lg:flex-initial">
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">고객사</span> ({customers.length})
                </TabsTrigger>
                <TabsTrigger value="leads" className="gap-2 flex-1 lg:flex-initial">
                  <UserPlus className="w-4 h-4" />
                  <span className="hidden sm:inline">온라인 고객</span> ({leads.length})
                </TabsTrigger>
              </TabsList>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2 flex-1 sm:flex-initial">
                    <Filter className="w-4 h-4" />
                    <span className="hidden md:inline">필터</span>
                  </Button>
                  <Button variant="outline" className="gap-2 flex-1 sm:flex-initial">
                    <Download className="w-4 h-4" />
                    <span className="hidden md:inline">내보내기</span>
                  </Button>
                  <Button className="gap-2 flex-1 sm:flex-initial" onClick={() => setShowAddDialog(true)}>
                    <Plus className="w-4 h-4" />
                    <span className="hidden md:inline">추가</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* 파트너사 탭 */}
            <TabsContent value="partners" className="space-y-4">
              {partners.map((partner) => (
                <Card key={partner.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-lg md:text-xl">{partner.company_name}</h3>
                          {getStatusBadge(partner.status)}
                          {partner.allbaro_connected && (
                            <Badge variant="outline" className="gap-1 bg-green-50 text-green-700 border-green-200">
                              <CheckCircle className="w-3 h-3" />
                              <span className="hidden sm:inline">올바로 연동</span>
                            </Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <User className="w-4 h-4" />
                              <span>대표: {partner.ceo_name}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone className="w-4 h-4" />
                              <span>{partner.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Mail className="w-4 h-4" />
                              <span>{partner.email}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>계약기간: {formatDate(partner.contract_start)} ~ {formatDate(partner.contract_end)}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Package className="w-4 h-4" />
                                <span>연간 예상 공급량:</span>
                              </div>
                              <span className="font-medium">{partner.annual_estimated_volume.toLocaleString()}톤</span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                <span>현재 누적 공급량:</span>
                              </div>
                              <span className="font-medium">{partner.current_supply.toLocaleString()}톤</span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <BarChart3 className="w-4 h-4" />
                                <span>오늘 예상 공급량:</span>
                              </div>
                              <span className="font-medium">{partner.daily_supply.toLocaleString()}톤</span>
                            </div>
                            {partner.allbaro_connected && (
                              <div className="text-xs text-green-600 flex items-center gap-1 ml-6">
                                <CheckCircle className="w-3 h-3" />
                                올바로 시스템 연동 시 자동 업데이트
                              </div>
                            )}
                          </div>
                        </div>

                        {/* 주간 및 월간 공급 그래프 */}
                        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {/* 주간 (7일) 그래프 */}
                          <div className="p-2 md:p-4">
                            <h4 className="text-sm mb-3 text-gray-700">주간 공급 현황 (최근 7일)</h4>
                            <ResponsiveContainer width="100%" height={200}>
                              <BarChart data={partner.weekly_data} barGap={1} barCategoryGap="20%">
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                                <XAxis 
                                  dataKey="date" 
                                  tick={{ fontSize: 11, fill: '#6b7280' }}
                                  axisLine={false}
                                  tickLine={false}
                                />
                                <YAxis 
                                  tick={{ fontSize: 11, fill: '#6b7280' }}
                                  axisLine={false}
                                  tickLine={false}
                                  label={{ value: '톤', angle: 0, position: 'top', offset: 10, style: { fontSize: 12, fill: '#374151', fontWeight: 600 } }}
                                />
                                <Tooltip 
                                  contentStyle={{ 
                                    borderRadius: '8px', 
                                    border: 'none', 
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                                  }}
                                  formatter={(value: any) => [`${value}톤`, '']}
                                />
                                <Legend wrapperStyle={{ fontSize: 12 }} />
                                {partner.waste_types.map((type) => (
                                  <Bar 
                                    key={type}
                                    dataKey={type} 
                                    fill={wasteTypeColors[type] || '#6b7280'}
                                    radius={[2, 2, 0, 0]}
                                    barSize={8}
                                  />
                                ))}
                              </BarChart>
                            </ResponsiveContainer>
                          </div>

                          {/* 연간 (월별) 그래프 */}
                          <div className="p-2 md:p-4">
                            <h4 className="text-sm mb-3 text-gray-700">연간 공급 현황 (월별)</h4>
                            <ResponsiveContainer width="100%" height={200}>
                              <BarChart data={partner.monthly_data} barGap={1} barCategoryGap="20%">
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                                <XAxis 
                                  dataKey="date" 
                                  tick={{ fontSize: 10, fill: '#6b7280' }}
                                  axisLine={false}
                                  tickLine={false}
                                />
                                <YAxis 
                                  tick={{ fontSize: 11, fill: '#6b7280' }}
                                  axisLine={false}
                                  tickLine={false}
                                  label={{ value: '톤', angle: 0, position: 'top', offset: 10, style: { fontSize: 12, fill: '#374151', fontWeight: 600 } }}
                                />
                                <Tooltip 
                                  contentStyle={{ 
                                    borderRadius: '8px', 
                                    border: 'none', 
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                                  }}
                                  formatter={(value: any) => [`${value}톤`, '']}
                                />
                                <Legend wrapperStyle={{ fontSize: 12 }} />
                                {partner.waste_types.map((type) => (
                                  <Bar 
                                    key={type}
                                    dataKey={type} 
                                    fill={wasteTypeColors[type] || '#6b7280'}
                                    radius={[2, 2, 0, 0]}
                                    barSize={8}
                                  />
                                ))}
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 lg:ml-6">
                        <Button variant="outline" size="sm" className="gap-2 flex-1 lg:flex-initial">
                          <Eye className="w-4 h-4" />
                          <span className="hidden sm:inline">상세</span>
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2 flex-1 lg:flex-initial">
                          <Edit className="w-4 h-4" />
                          <span className="hidden sm:inline">수정</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* 고객사 탭 */}
            <TabsContent value="customers" className="space-y-4">
              {customers.map((customer) => (
                <Card key={customer.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-lg md:text-xl">{customer.company_name}</h3>
                          {getStatusBadge(customer.status)}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <User className="w-4 h-4" />
                              <span>담당자: {customer.contact_person}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone className="w-4 h-4" />
                              <span>{customer.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Mail className="w-4 h-4" />
                              <span>{customer.email}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>첫 주문: {formatDate(customer.first_order_date)}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>최근 주문: {formatDate(customer.last_order_date)}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Package className="w-4 h-4" />
                              <span>총 주문: {customer.total_orders}건</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm text-gray-600">총 거래액</div>
                            <div className="text-2xl text-green-600">{formatCurrency(customer.total_amount)}</div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {customer.aggregate_types.map((type, idx) => (
                                <Badge key={idx} variant="outline">{type}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 lg:ml-6">
                        <Button variant="outline" size="sm" className="gap-2 flex-1 lg:flex-initial">
                          <Eye className="w-4 h-4" />
                          <span className="hidden sm:inline">상세</span>
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2 flex-1 lg:flex-initial">
                          <Edit className="w-4 h-4" />
                          <span className="hidden sm:inline">수정</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* 온라인 고객 탭 */}
            <TabsContent value="leads" className="space-y-4">
              {leads.map((lead) => (
                <Card key={lead.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-lg md:text-xl">{lead.company_name}</h3>
                          <Badge variant="secondary">
                            {lead.interest_type === 'waste_supply' && '폐기물 공급'}
                            {lead.interest_type === 'aggregate_purchase' && '골재 구매'}
                            {lead.interest_type === 'both' && '공급+구매'}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <User className="w-4 h-4" />
                              <span>담당자: {lead.contact_person}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone className="w-4 h-4" />
                              <span>{lead.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Mail className="w-4 h-4" />
                              <span>{lead.email}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {lead.interest_type === 'aggregate_purchase' && '판매일: '}
                                {lead.interest_type === 'waste_supply' && '반입일: '}
                                {lead.interest_type === 'both' && '거래일: '}
                                {formatDate(lead.inquiry_date)}
                              </span>
                            </div>
                            {lead.notes && (
                              <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 mt-2">
                                {lead.notes}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 lg:ml-6">
                        <Button variant="outline" size="sm" className="gap-2 flex-1 lg:flex-initial">
                          <Eye className="w-4 h-4" />
                          <span className="hidden sm:inline">상세</span>
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2 flex-1 lg:flex-initial">
                          <Edit className="w-4 h-4" />
                          <span className="hidden sm:inline">수정</span>
                        </Button>
                        <Button size="sm" className="gap-2 flex-1 lg:flex-initial">
                          <CheckCircle className="w-4 h-4" />
                          <span className="hidden sm:inline">전환</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}

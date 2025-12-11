import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';
import { Building2, User, Phone, Mail, MapPin, FileText, Briefcase, X, CheckCircle2 } from 'lucide-react';

interface PartnerApplicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PartnerApplicationDialog({ open, onOpenChange }: PartnerApplicationDialogProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    representativeName: '',
    businessNumber: '',
    phone: '',
    email: '',
    address: '',
    partnershipType: '',
    businessDescription: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 필수 항목 검증
    if (!formData.companyName || !formData.representativeName || !formData.phone || !formData.email || !formData.partnershipType) {
      toast.error('필수 항목을 모두 입력해주세요.');
      return;
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('올바른 이메일 형식을 입력해주세요.');
      return;
    }

    console.log('파트너 신청 데이터:', formData);
    toast.success('파트너 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    
    // 폼 초기화 및 다이얼로그 닫기
    setFormData({
      companyName: '',
      representativeName: '',
      businessNumber: '',
      phone: '',
      email: '',
      address: '',
      partnershipType: '',
      businessDescription: '',
      message: ''
    });
    onOpenChange(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden p-0 gap-0 bg-gradient-to-br from-white via-blue-50/30 to-white">
        {/* 헤더 섹션 - 그라데이션 배경 */}
        <div className="relative px-8 pt-8 pb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white overflow-hidden">
          {/* 배경 패턴 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          
          <DialogHeader className="relative">
            <DialogTitle className="text-3xl font-bold flex items-center gap-3">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                <Building2 className="w-7 h-7" />
              </div>
              파트너 신청
            </DialogTitle>
            <DialogDescription className="text-blue-50 text-base mt-3 leading-relaxed">
              하이콘코리아와 함께 순환경제 생태계를 구축할 파트너
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* 폼 섹션 - 스크롤 가능 */}
        <div className="overflow-y-auto px-8 py-6" style={{ maxHeight: 'calc(90vh - 200px)' }}>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* 회사 정보 섹션 */}
            <div className="space-y-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-base font-bold text-gray-800 flex items-center gap-2 pb-2 border-b border-gray-100">
                <div className="p-1.5 bg-blue-100 rounded-lg">
                  <Building2 className="w-4 h-4 text-blue-600" />
                </div>
                회사 정보
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <Label htmlFor="companyName" className="text-sm font-semibold text-gray-700">
                    회사명 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleChange('companyName', e.target.value)}
                    placeholder="(주)하이콘코리아"
                    className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Label htmlFor="representativeName" className="text-sm font-semibold text-gray-700">
                    대표자명 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="representativeName"
                    value={formData.representativeName}
                    onChange={(e) => handleChange('representativeName', e.target.value)}
                    placeholder="홍길동"
                    className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="businessNumber" className="text-sm font-semibold text-gray-700">
                    사업자등록번호
                  </Label>
                  <Input
                    id="businessNumber"
                    value={formData.businessNumber}
                    onChange={(e) => handleChange('businessNumber', e.target.value)}
                    placeholder="123-45-67890"
                    className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* 연락처 정보 섹션 */}
            <div className="space-y-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-base font-bold text-gray-800 flex items-center gap-2 pb-2 border-b border-gray-100">
                <div className="p-1.5 bg-green-100 rounded-lg">
                  <Phone className="w-4 h-4 text-green-600" />
                </div>
                연락처 정보
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                    연락처 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="010-1234-5678"
                    className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    이메일 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="example@company.com"
                    className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="address" className="text-sm font-semibold text-gray-700">
                    사업장 주소
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    placeholder="경기도 화성시 팔탄면 버들로 1261"
                    className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* 협력 분야 섹션 */}
            <div className="space-y-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-base font-bold text-gray-800 flex items-center gap-2 pb-2 border-b border-gray-100">
                <div className="p-1.5 bg-purple-100 rounded-lg">
                  <Briefcase className="w-4 h-4 text-purple-600" />
                </div>
                협력 분야
              </h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="partnershipType" className="text-sm font-semibold text-gray-700">
                    협력 유형 <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.partnershipType} onValueChange={(value) => handleChange('partnershipType', value)}>
                    <SelectTrigger id="partnershipType" className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="협력 유형을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="waste-supply">폐기물 공급</SelectItem>
                      <SelectItem value="aggregate-purchase">순환골재 구매</SelectItem>
                      <SelectItem value="tech-cooperation">기술 협력</SelectItem>
                      <SelectItem value="equipment-supply">장비 공급</SelectItem>
                      <SelectItem value="logistics">물류/운송</SelectItem>
                      <SelectItem value="recycling">재활용 사업</SelectItem>
                      <SelectItem value="construction">건설/토목</SelectItem>
                      <SelectItem value="other">기타</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="businessDescription" className="text-sm font-semibold text-gray-700">
                    사업 내용
                  </Label>
                  <Textarea
                    id="businessDescription"
                    value={formData.businessDescription}
                    onChange={(e) => handleChange('businessDescription', e.target.value)}
                    placeholder="귀사의 주요 사업 내용을 간략히 설명해주세요."
                    className="mt-2 min-h-[80px] border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* 추가 메시지 */}
            <div className="space-y-2 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <Label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <div className="p-1.5 bg-orange-100 rounded-lg">
                  <FileText className="w-4 h-4 text-orange-600" />
                </div>
                기타 요청사항
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder="협력과 관련하여 추가로 전달하실 내용이 있으시면 작성해주세요."
                className="min-h-[100px] border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* 안내 문구 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-sm text-blue-900 font-semibold">신청 안내</p>
                  <ul className="text-xs text-blue-800 leading-relaxed space-y-1.5">
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                      <span>제출하신 정보는 파트너십 검토 목적으로만 사용됩니다.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                      <span>영업일 기준 3~5일 내에 담당자가 연락드릴 예정입니다.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                      <span>문의: 고객센터 <span className="font-bold text-blue-900">031-358-7515</span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 버튼 */}
            <div className="flex gap-3 pt-3 pb-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1 h-12 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                취소
              </Button>
              <Button
                type="submit"
                className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
              >
                신청하기
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
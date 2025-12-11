import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, AlertCircle, FileText, Phone, ExternalLink, Calendar, DollarSign, Building2, Lightbulb, Users, Zap } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface SupportProgramsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SupportProgramsDialog({ open, onOpenChange }: SupportProgramsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-[1800px] sm:max-w-[1800px] max-h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-2xl">정부 지원 사업 안내</DialogTitle>
          <DialogDescription className="text-sm text-gray-600 mt-2">
            하이콘 코리아 신청 가능한 실제 정부 지원 제도
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[calc(90vh-120px)] px-6 py-4">
          <div className="space-y-6">
            {/* 중요 공지 */}
            <Card className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-300">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    ⚠️ 중요 안내
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Trends 페이지의 <span className="font-semibold text-yellow-700">정부 예산 계획 (8.5조원)은 Mock 데이터</span>입니다. 
                    실제 정책 방향을 기반으로 시뮬레이션 목적으로 작성되었습니다.
                  </p>
                  <p className="text-sm text-green-700 font-semibold">
                    ✅ 아래 안내된 지원 사업은 <span className="underline">실제 운영 중인 정부 제도</span>입니다.
                  </p>
                </div>
              </div>
            </Card>

            {/* 우선 추천 3개 */}
            <div>
              <h2 className="text-xl mb-4 text-gray-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                우선 신청 권장 (Top 3)
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* 1순위 */}
                <Card className="p-5 border-2 border-green-400 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-green-600">🥇 1순위</Badge>
                    <Building2 className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-green-700">
                    환경부 순환자원 활용 시설 지원
                  </h3>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-xl text-green-600">최대 30억원</span>
                    </div>
                    <p className="text-xs text-gray-600">총 사업비의 30~50% 지원</p>
                  </div>

                  <div className="space-y-2 text-xs mb-3">
                    <p className="font-semibold text-gray-800">지원 대상:</p>
                    <ul className="space-y-1 text-gray-700 ml-4">
                      <li>✓ 순환골재 생산 시설 보유/설치 예정</li>
                      <li>✓ 건설폐기물 중간처리업 등록 업체</li>
                      <li>✓ <span className="font-semibold text-green-600">하이콘 코리아 해당</span></li>
                    </ul>
                  </div>

                  <div className="space-y-2 text-xs mb-3">
                    <p className="font-semibold text-gray-800">지원 내용:</p>
                    <ul className="space-y-1 text-gray-700 ml-4">
                      <li>• 파쇄기, 선별기, 세척 설비</li>
                      <li>• 중간처리시설 설치비</li>
                      <li>• 처리능력 일 100톤 이상</li>
                    </ul>
                  </div>

                  <div className="border-t pt-2 space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-blue-600" />
                      <span className="font-semibold">신청 시기:</span>
                      <span className="text-blue-600">매년 1~2월</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-blue-600" />
                      <span className="font-semibold">문의:</span>
                      <span>한국환경공단 032-590-4000</span>
                    </div>
                  </div>

                  <div className="mt-3 p-2 bg-green-50 rounded-lg">
                    <p className="text-xs font-semibold text-green-700">
                      💡 승인 가능성이 가장 높은 사업입니다
                    </p>
                  </div>
                </Card>

                {/* 2순위 */}
                <Card className="p-5 border-2 border-blue-400 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-blue-600">🥈 2순위</Badge>
                    <Zap className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">
                    중소벤처기업부 스마트공장 구축
                  </h3>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-xl text-blue-600">최대 2억원</span>
                    </div>
                    <p className="text-xs text-gray-600">총 사업비의 50% 지원</p>
                  </div>

                  <div className="space-y-2 text-xs mb-3">
                    <p className="font-semibold text-gray-800">지원 대상:</p>
                    <ul className="space-y-1 text-gray-700 ml-4">
                      <li>✓ 제조업 중소·중견기업</li>
                      <li>✓ 스마트 제조 혁신 추진</li>
                      <li>✓ <span className="font-semibold text-blue-600">하이콘 코리아 해당</span></li>
                    </ul>
                  </div>

                  <div className="space-y-2 text-xs mb-3">
                    <p className="font-semibold text-gray-800">지원 내용:</p>
                    <ul className="space-y-1 text-gray-700 ml-4">
                      <li>• IoT 센서, 자동화 설비</li>
                      <li>• MES 시스템 구축</li>
                      <li>• 컨설팅 지원 포함</li>
                    </ul>
                  </div>

                  <div className="border-t pt-2 space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-blue-600" />
                      <span className="font-semibold">신청 시기:</span>
                      <span className="text-blue-600">연중 상시</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-blue-600" />
                      <span className="font-semibold">문의:</span>
                      <span>1666-9170</span>
                    </div>
                  </div>

                  <div className="mt-3 p-2 bg-blue-50 rounded-lg">
                    <p className="text-xs font-semibold text-blue-700">
                      💡 생산 효율화 및 품질 향상에 효과적
                    </p>
                  </div>
                </Card>

                {/* 3순위 */}
                <Card className="p-5 border-2 border-purple-400 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-purple-600">🥉 3순위</Badge>
                    <DollarSign className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-700">
                    환경부 녹색 융자 지원
                  </h3>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-xl text-purple-600">최대 50억원</span>
                    </div>
                    <p className="text-xs text-gray-600">연 1.75% 저금리 융자</p>
                  </div>

                  <div className="space-y-2 text-xs mb-3">
                    <p className="font-semibold text-gray-800">지원 대상:</p>
                    <ul className="space-y-1 text-gray-700 ml-4">
                      <li>✓ 환경친화적 시설 투자 기업</li>
                      <li>✓ 친환경 인증 보유/취득 예정</li>
                      <li>✓ <span className="font-semibold text-purple-600">하이콘 코리아 해당</span></li>
                    </ul>
                  </div>

                  <div className="space-y-2 text-xs mb-3">
                    <p className="font-semibold text-gray-800">지원 내용:</p>
                    <ul className="space-y-1 text-gray-700 ml-4">
                      <li>• 일반 대출 대비 약 2%p 낮음</li>
                      <li>• 최대 10년 상환 (거치 3년)</li>
                      <li>• 친환경 시설 투자 용도</li>
                    </ul>
                  </div>

                  <div className="border-t pt-2 space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-blue-600" />
                      <span className="font-semibold">신청 시기:</span>
                      <span className="text-blue-600">연중 상시</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-blue-600" />
                      <span className="font-semibold">문의:</span>
                      <span>032-590-5000</span>
                    </div>
                  </div>

                  <div className="mt-3 p-2 bg-purple-50 rounded-lg">
                    <p className="text-xs font-semibold text-purple-700">
                      💡 저금리 자금 확보에 유리
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* 추가 지원 사업 */}
            <div>
              <h2 className="text-xl mb-4 text-gray-900 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-orange-600" />
                추가 신청 가능 사업
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 국토부 R&D */}
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2 text-gray-800">국토교통부 건설기술 R&D</h4>
                  <p className="text-sm text-gray-600 mb-3">품질 개선 기술 연구</p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-semibold">최대 10억원</span>
                    </p>
                    <p className="text-xs text-gray-600">정부 70% 출연 (2~3년)</p>
                    <p className="text-xs text-blue-600">신청: 연 1~2회 공모</p>
                  </div>
                </Card>

                {/* 산업부 에너지 */}
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2 text-gray-800">산업부 에너지 효율 향상</h4>
                  <p className="text-sm text-gray-600 mb-3">고효율 설비 교체</p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-semibold">최대 15억원</span>
                    </p>
                    <p className="text-xs text-gray-600">투자액의 30~40%</p>
                    <p className="text-xs text-blue-600">신청: 매년 2~3월</p>
                  </div>
                </Card>

                {/* 고용부 청년 */}
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2 text-gray-800">고용부 청년 일자리 지원</h4>
                  <p className="text-sm text-gray-600 mb-3">청년 채용 인건비</p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-semibold">1인당 최대 1,200만원</span>
                    </p>
                    <p className="text-xs text-gray-600">월 80~100만원 × 12개월</p>
                    <p className="text-xs text-blue-600">신청: 채용 후 3개월 내</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* 즉시 실행 액션 */}
            <Card className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                즉시 실행 가능 액션 (이번 주 내)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">1단계: 정보 수집</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">☐</span>
                      <span>환경부 순환자원 시설 지원 공고 확인</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">☐</span>
                      <span>스마트공장 홈페이지 방문 (www.smart-factory.kr)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">☐</span>
                      <span>필요 서류 목록 작성</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">2단계: 무료 상담</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">☐</span>
                      <span>중소기업진흥공단 상담 예약 (전화: 1357)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">☐</span>
                      <span>한국환경공단 환경 분야 상담 (032-590-4000)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">☐</span>
                      <span>사업계획서 초안 작성 시작</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* 무료 상담 */}
            <Card className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-600" />
                무료 상담 가능 (정부 기관)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2 text-sm">중소기업진흥공단</h4>
                  <p className="text-xl font-semibold text-green-600 mb-2">1357</p>
                  <p className="text-xs text-gray-600 mb-2">사업 신청 컨설팅, 서류 작성 지원</p>
                  <a 
                    href="https://www.kosmes.or.kr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                  >
                    홈페이지 방문 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-3 bg-white rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2 text-sm">한국환경공단</h4>
                  <p className="text-xl font-semibold text-green-600 mb-2">032-590-4000</p>
                  <p className="text-xs text-gray-600 mb-2">환경 분야 지원 사업 전문 상담</p>
                  <a 
                    href="https://www.keco.or.kr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                  >
                    홈페이지 방문 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-3 bg-white rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2 text-sm">정부24 통합센터</h4>
                  <p className="text-xl font-semibold text-green-600 mb-2">1588-2188</p>
                  <p className="text-xs text-gray-600 mb-2">모든 정부 지원 사업 통합 안내</p>
                  <a 
                    href="https://www.gov.kr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                  >
                    홈페이지 방문 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </Card>

            {/* 필요 서류 */}
            <Card className="p-5">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                신청 시 필요 서류 (공통)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">기본 서류</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      사업자등록증 사본
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      법인등기부등본 (법인인 경우)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      재무제표 (최근 3개년)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      사업 계획서
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      견적서 (시설 투자 사업)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">추가 서류 (해당 시)</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      환경 관련 인허가증
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      건설폐기물 처리업 등록증
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      품질인증서 (KS 인증 등, 보유 시)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      ISO 인증서 (보유 시)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      고용보험 가입 증명서
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-yellow-800">💡 Tip:</span> 사업계획서는 정량적 목표를 구체적으로 제시하는 것이 중요합니다. 
                  예: "품질 개선" → "불량률 10% → 3%로 개선"
                </p>
              </div>
            </Card>

            {/* 2025년 신청 캘린더 */}
            <Card className="p-5">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                2025년 신청 캘린더
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">월</th>
                      <th className="px-4 py-2 text-left">사업명</th>
                      <th className="px-4 py-2 text-left">신청 기간</th>
                      <th className="px-4 py-2 text-left">예상 발표</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 font-semibold">1~2월</td>
                      <td className="px-4 py-2">환경부 순환자원 시설 지원</td>
                      <td className="px-4 py-2 text-blue-600">1.15 ~ 2.15</td>
                      <td className="px-4 py-2">4월</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 font-semibold">2~3월</td>
                      <td className="px-4 py-2">산업부 에너지 효율 향상</td>
                      <td className="px-4 py-2 text-blue-600">2.1 ~ 3.31</td>
                      <td className="px-4 py-2">5월</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 font-semibold">3~4월</td>
                      <td className="px-4 py-2">경기도 환경산업 육성</td>
                      <td className="px-4 py-2 text-blue-600">3.1 ~ 4.30</td>
                      <td className="px-4 py-2">6월</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 font-semibold">4월</td>
                      <td className="px-4 py-2">국토부 건설기술 R&D</td>
                      <td className="px-4 py-2 text-blue-600">공고 확인</td>
                      <td className="px-4 py-2">7월</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-green-50">
                      <td className="px-4 py-2 font-semibold">연중</td>
                      <td className="px-4 py-2">중기부 스마트공장</td>
                      <td className="px-4 py-2 text-green-600 font-semibold">상시 접수</td>
                      <td className="px-4 py-2">신청 후 2개월</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-green-50">
                      <td className="px-4 py-2 font-semibold">연중</td>
                      <td className="px-4 py-2">환경부 녹색 융자</td>
                      <td className="px-4 py-2 text-green-600 font-semibold">상시 접수</td>
                      <td className="px-4 py-2">신청 후 1개월</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-green-50">
                      <td className="px-4 py-2 font-semibold">연중</td>
                      <td className="px-4 py-2">고용부 청년 일자리</td>
                      <td className="px-4 py-2 text-green-600 font-semibold">채용 후 3개월 내</td>
                      <td className="px-4 py-2">신청 후 2주</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-xs text-gray-500 mt-3">
                * 위 일정은 2024년 기준이며, 2025년 공고 시 변경될 수 있습니다. 반드시 최신 공고를 확인하세요.
              </p>
            </Card>

            {/* 신청 성공 팁 */}
            <Card className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 mb-4">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-purple-600" />
                신청 성공률 높이는 핵심 팁
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-2">✅ 좋은 예시</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• "불량률을 10% → 3%로 개선"</li>
                    <li>• "생산량 일 300톤 → 500톤 증대"</li>
                    <li>• "CO2 연간 1,000톤 감축"</li>
                    <li>• "청년 5명 신규 채용 계획"</li>
                    <li>• "매출 50억 → 80억 (60% 증가)"</li>
                  </ul>
                </div>

                <div className="p-3 bg-white rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">❌ 피해야 할 표현</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• "품질을 개선하겠습니다" (추상적)</li>
                    <li>• "많이 생산하겠습니다" (불명확)</li>
                    <li>• "환경을 개선하겠습니다" (정량화 필요)</li>
                    <li>• "일자리를 창출하겠습니다" (구체적 수치 필요)</li>
                    <li>• "매출을 올리겠습니다" (목표치 명시)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-3 p-3 bg-purple-100 rounded-lg">
                <p className="text-sm font-semibold text-purple-800">
                  🎯 핵심 포인트: 정량적 목표 + 사회적 가치 + 차별화 + 실행 가능성
                </p>
              </div>
            </Card>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

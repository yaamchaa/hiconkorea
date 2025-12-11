import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { TrendingUp, TrendingDown, Factory, Truck, Building2, Globe, BarChart3, AlertCircle, Target, CheckCircle, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface AggregateTrendsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AggregateTrendsDialog({ open, onOpenChange }: AggregateTrendsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            국내 골재 산업 동향
          </DialogTitle>
          <DialogDescription>
            골재 산업의 현황, 시장 동향, 정책 방향 및 미래 전망에 대한 종합 정보를 제공합니다.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">산업 개요</TabsTrigger>
            <TabsTrigger value="market">시장 현황</TabsTrigger>
            <TabsTrigger value="policy">정책 동향</TabsTrigger>
            <TabsTrigger value="future">미래 전망</TabsTrigger>
          </TabsList>

          {/* 산업 개요 */}
          <TabsContent value="overview" className="space-y-4 mt-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <h3 className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-blue-600" />
                골재 산업 개요
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                골재는 건설공사에 사용되는 모래, 자갈, 부순 모래, 부순 자갈 등을 의미하며, 
                국내 건설산업의 핵심 기초자재입니다. 연간 약 <span className="font-semibold text-blue-600">2억 톤</span> 이상이 소비되고 있으며, 
                건설공사비의 약 15~20%를 차지하는 중요한 자재입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 생산 현황 */}
              <Card className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Factory className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 flex items-center gap-2">
                      연간 생산량 현황
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex justify-between items-center">
                        <span>• 천연 골재 (모래, 자갈)</span>
                        <span className="font-semibold">약 1.2억 톤</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>• 부순 골재 (쇄석)</span>
                        <span className="font-semibold">약 0.8억 톤</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>• 순환 골재</span>
                        <span className="font-semibold text-blue-600">약 0.3억 톤</span>
                      </div>
                      <div className="pt-2 border-t border-gray-200 flex justify-between items-center">
                        <span className="font-semibold">총 생산량</span>
                        <span className="font-semibold text-lg">약 2.3억 톤</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* 수급 동향 */}
              <Card className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2">
                      수급 동향
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">▲</span>
                        <p>건설경기 회복으로 인한 수요 증가세</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">▼</span>
                        <p>천연골재 채취 제한으로 공급 감소</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">→</span>
                        <p>순환골재 사용 확대 추세</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">!</span>
                        <p>수도권 지역 골재 부족 현상 심화</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* 가격 동향 */}
              <Card className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2">
                      가격 추이 (2024년 기준)
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex justify-between items-center">
                        <span>• 모래 (㎥당)</span>
                        <span className="font-semibold text-red-600">₩28,000 <span className="text-xs">▲12%</span></span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>• 자갈 (㎥당)</span>
                        <span className="font-semibold text-red-600">₩25,000 <span className="text-xs">▲10%</span></span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>• 쇄석 (㎥당)</span>
                        <span className="font-semibold text-red-600">₩22,000 <span className="text-xs">▲8%</span></span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>• 순환골재 (㎥당)</span>
                        <span className="font-semibold text-green-600">₩12,000 <span className="text-xs">▲5%</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* 유통 구조 */}
              <Card className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2">
                      유통 구조
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• 생산지 → 중간상 → 건설현장</p>
                      <p>• 평균 운송거리: 약 50~70km</p>
                      <p>• 운송비가 전체 원가의 30~40% 차지</p>
                      <p className="pt-2 border-t border-gray-200 text-blue-600 font-semibold">
                        ※ 지역별 수급 불균형으로 운송비 부담 증가
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* 시장 현황 */}
          <TabsContent value="market" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 gap-4">
              {/* 주요 이슈 */}
              <Card className="p-6 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
                <h3 className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  주요 시장 이슈
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">1. 천연골재 공급 감소</h4>
                    <ul className="space-y-1 text-gray-700 ml-4">
                      <li>• 환경규제 강화로 채취허가 제한</li>
                      <li>• 하천·바다골재 채취 감소</li>
                      <li>• 산림골재 개발 어려움 증가</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">2. 수도권 공급 부족</h4>
                    <ul className="space-y-1 text-gray-700 ml-4">
                      <li>• 대형 개발사업 집중</li>
                      <li>• 인근 채취장 고갈</li>
                      <li>• 장거리 운송 증가</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-600">3. 가격 상승 압력</h4>
                    <ul className="space-y-1 text-gray-700 ml-4">
                      <li>• 공급 부족으로 가격 상승</li>
                      <li>• 운송비 증가</li>
                      <li>• 건설공사비 상승 요인</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">4. 순환골재 시장 확대</h4>
                    <ul className="space-y-1 text-gray-700 ml-4">
                      <li>• 건설폐기물 재활용 의무화</li>
                      <li>• 순환골재 품질 개선</li>
                      <li>• 정부 사용 촉진 정책</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* 지역별 현황 */}
              <Card className="p-6">
                <h3 className="mb-4">
                  지역별 시장 현황
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-800">수도권</h4>
                    <p className="text-gray-700 mb-2">수요: <span className="font-semibold">약 40%</span></p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      대규모 개발사업 집중, 공급 부족 심각, 
                      경기·강원 지역에서 장거리 운송
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">충청권</h4>
                    <p className="text-gray-700 mb-2">수요: <span className="font-semibold">약 20%</span></p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      산림골재 생산 활발, 
                      수도권 공급 기지 역할, 
                      안정적 수급 상태
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-800">영남권</h4>
                    <p className="text-gray-700 mb-2">수요: <span className="font-semibold">약 25%</span></p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      대형 산업단지 개발, 
                      항만·도로 건설 수요, 
                      지역 내 자급자족 가능
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* 정책 동향 */}
          <TabsContent value="policy" className="space-y-4 mt-4">
            <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <h3 className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-green-600" />
                정부 정책 방향
              </h3>
              {/* 중요 안내 */}
              <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                <p className="text-xs text-gray-700">
                  <span className="font-semibold text-yellow-800">⚠️ 정책 방향은 실제이나, 구체적 수치와 일정은 참고용입니다.</span>
                  <br />
                  정확한 정보는 정부 공식 발표를 확인하세요.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-4 bg-white rounded-lg border border-green-200">
                  <h4 className="font-semibold mb-2 text-green-700">✅ 1. 순환골재 사용 의무화 강화 (실제 정책)</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• 공공공사 순환골재 사용 비율 단계적 상향</li>
                    <li>• 민간공사 순환골재 사용 권장 및 인센티브 제공</li>
                    <li>• 순환골재 품질기준(KS) 준수 강화</li>
                    <li>• 순환골재 사용 의무 미이행 시 제재 조치</li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-lg border border-blue-200">
                  <h4 className="font-semibold mb-2 text-blue-700">2. 건설폐기물 재활용 촉진 (정책 방향)</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• 건설폐기물 중간처리시설 설치 지원</li>
                    <li>• 재활용 기술 개발 R&D 투자 확대</li>
                    <li>• 순환골재 생산업체 세제 혜택</li>
                    <li>• 불법 투기 단속 강화 및 처벌 강화</li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-lg border border-orange-200">
                  <h4 className="font-semibold mb-2 text-orange-700">✅ 3. 환경친화적 골재 개발 (실제 규제)</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• 친환경 골재 채취 가이드라인 수립</li>
                    <li>• 골재채취 후 복원 의무화</li>
                    <li>• 해양생태계 보호를 위한 바다골재 채취 제한</li>
                    <li>• 산림훼손 최소화 방안 마련</li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-lg border border-purple-200">
                  <h4 className="font-semibold mb-2 text-purple-700">4. 골재 수급 안정화 대책 (정책 방향)</h4>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• 골재채취단지 지정 및 개발 지원</li>
                    <li>• 광역골재 수급망 구축</li>
                    <li>• 골재 비축기지 설치 검토</li>
                    <li>• 골재 가격 모니터링 및 안정화 방안</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4">
                주요 법령 및 제도
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">법령/제도</th>
                      <th className="px-4 py-2 text-left">주요 내용</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-semibold">골재채취법</td>
                      <td className="px-4 py-3">골재 채취 허가 및 관리에 관한 기본법</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">건설폐기물 재활용촉진법</td>
                      <td className="px-4 py-3">순환골재 품질기준 및 사용 의무화</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">환경영향평가법</td>
                      <td className="px-4 py-3">대규모 골재 채취 시 환경영향평가 의무</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">순환골재 품질인증제</td>
                      <td className="px-4 py-3">순환골재의 품질 보증 및 사용 촉진</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* 미래 전망 */}
          <TabsContent value="future" className="space-y-4 mt-4">
            {/* 중요 안내 */}
            <div className="p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
              <p className="text-xs text-gray-700">
                <span className="font-semibold text-yellow-800">⚠️ 미래 전망 수치는 시장 분석 기반 참고용입니다.</span>
                <br />
                실제 시장 상황은 정책 및 경제 여건에 따라 변동될 수 있습니다.
              </p>
            </div>

            <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <h3 className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                2025~2030 전망 (참고)
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-700">순환골재 시장 성장 예상</h4>
                    <div className="space-y-2 text-gray-700">
                      <p>• <span className="font-semibold text-purple-600">현재: 약 3천만 톤 수준</span></p>
                      <p>• <span className="font-semibold text-purple-600">향후: 지속적 증가 예상</span></p>
                      <p className="text-xs pt-2 border-t border-gray-200 italic">
                        * 정확한 수치는 시장 동향 참고
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700">천연골재 생산 감소 예상</h4>
                    <div className="space-y-2 text-gray-700">
                      <p>• 환경규제로 지속적 감소세</p>
                      <p>• 대체재 개발 가속화</p>
                      <p className="text-xs pt-2 border-t border-gray-200">
                        순환골재·인공골재로 대체
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-semibold mb-3">주요 성장 동력</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs font-semibold">1</span>
                      </div>
                      <div>
                        <p className="font-semibold text-green-700">탄소중립 정책</p>
                        <p className="text-xs text-gray-600 mt-1">
                          건설 분야 탄소배출 감축 목표로 순환골재 수요 증가
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-xs font-semibold">2</span>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-700">스마트 기술 도입</p>
                        <p className="text-xs text-gray-600 mt-1">
                          AI·IoT 활용 골재 생산 효율화 및 품질 향상
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-600 text-xs font-semibold">3</span>
                      </div>
                      <div>
                        <p className="font-semibold text-purple-700">순환경제 확산</p>
                        <p className="text-xs text-gray-600 mt-1">
                          ESG 경영 확산으로 재활용 자재 선호도 증가
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                기업 대응 전략
              </h3>

              {/* 전략 개요 */}
              <div className="space-y-4 text-sm mb-6">
                <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                  <p className="text-gray-700">
                    정책 변화와 시장 요구에 선제적으로 대응하여 <span className="font-semibold text-blue-700">지속가능한 성장 기반</span>을 구축합니다.
                  </p>
                </div>

                {/* 전략 1: 기술 경쟁력 강화 */}
                <div className="border border-blue-200 rounded-lg overflow-hidden">
                  <div className="flex items-start gap-3 p-4 bg-blue-50">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-semibold">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-blue-900">고품질 순환골재 생산 기술 확보</h4>
                      <p className="text-gray-700 mb-3">
                        첨단 파쇄·선별 기술 도입으로 천연골재 수준의 품질 확보
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h5 className="font-semibold text-gray-900 mb-2">📋 실행 방안</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>3단계 파쇄 시스템:</strong> 1차(조파쇄) → 2차(중파쇄) → 3차(미분쇄) 공정 도입</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>AI 선별 시스템:</strong> 이미지 인식 기반 불순물 자동 제거 (정확도 98% 이상)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>KS 품질기준 준수:</strong> 밀도, 흡수율, 마모율 등 전 항목 정기 검사</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>품질 안정화:</strong> 원료 특성별 최적 배합비 데이터베이스 구축</span>
                      </li>
                    </ul>
                    <div className="mt-3 p-3 bg-gray-50 rounded">
                      <p className="text-xs text-gray-600">
                        <strong>투자 계획:</strong> 설비 투자 약 30억원 (3년간) | <strong>목표:</strong> KS 인증 획득 및 유지
                      </p>
                    </div>
                  </div>
                </div>

                {/* 전략 2: ESG 경영 */}
                <div className="border border-green-200 rounded-lg overflow-hidden">
                  <div className="flex items-start gap-3 p-4 bg-green-50">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-semibold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-green-900">친환경 인증 및 ESG 경영 강화</h4>
                      <p className="text-gray-700 mb-3">
                        환경 규제 준수를 넘어 지속가능경영 선도 기업으로 도약
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h5 className="font-semibold text-gray-900 mb-2">📋 실행 방안</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>ISO 14001 인증:</strong> 환경경영시스템 구축 및 유지</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>탄소배출 감축:</strong> 2030년까지 탄소중립 달성 로드맵 수립</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>친환경 에너지:</strong> 태양광 발전 설비 설치 (전력 자급률 30% 목표)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>ESG 평가:</strong> 한국기업지배구조원(KCGS) 평가 B등급 이상 목표</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>지역사회 기여:</strong> 환경교육, 일자리 창출 등 사회공헌 활동</span>
                      </li>
                    </ul>
                    <div className="mt-3 p-3 bg-gray-50 rounded">
                      <p className="text-xs text-gray-600">
                        <strong>기대 효과:</strong> 대기업 ESG 협력사 선정, 공공입찰 가점, 친환경 투자 유치
                      </p>
                    </div>
                  </div>
                </div>

                {/* 전략 3: 디지털 전환 */}
                <div className="border border-purple-200 rounded-lg overflow-hidden">
                  <div className="flex items-start gap-3 p-4 bg-purple-50">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-semibold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-purple-900">디지털 전환 및 스마트 팩토리</h4>
                      <p className="text-gray-700 mb-3">
                        IoT, AI, 빅데이터 기술로 생산성 향상 및 원가 절감
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h5 className="font-semibold text-gray-900 mb-2">📋 실행 방안</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>실시간 모니터링:</strong> 생산량, 품질, 설비 상태 통합 대시보드 구축</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>AI 품질 예측:</strong> 원료 특성 기반 최종 품질 사전 예측 시스템</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>수요 예측 모델:</strong> 건설 경기, 계절성 반영 생산 계획 최적화</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>자동화 설비:</strong> 컨베이어, 로봇 팔레타이저 등 도입으로 인력 절감</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>블록체인 추적:</strong> 원료 입고부터 제품 출하까지 전 과정 기록</span>
                      </li>
                    </ul>
                    <div className="mt-3 p-3 bg-gray-50 rounded">
                      <p className="text-xs text-gray-600">
                        <strong>ROI 예상:</strong> 생산성 +25%, 불량률 -40%, 인건비 -20% (3년 내)
                      </p>
                    </div>
                  </div>
                </div>

                {/* 전략 4: 파트너십 */}
                <div className="border border-orange-200 rounded-lg overflow-hidden">
                  <div className="flex items-start gap-3 p-4 bg-orange-50">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-semibold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-orange-900">전략적 파트너십 및 유통망 구축</h4>
                      <p className="text-gray-700 mb-3">
                        안정적 원료 확보 및 판매처 다각화로 경영 리스크 최소화
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h5 className="font-semibold text-gray-900 mb-2">📋 실행 방안</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>건설사 MOU:</strong> 대형 건설사와 장기 공급 계약 체결 (최소 3년)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>폐기물 수집망:</strong> 해체업체, 철거업체와 원료 안정 공급 협약</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>공공기관 납품:</strong> 국가종합전자조달시스템(나라장터) 우수업체 등록</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>협회 가입:</strong> 순환골재협회, 건설자재협회 등 네트워크 강화</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>온라인 마케팅:</strong> B2B 플랫폼 입점, 자체 홈페이지 개선</span>
                      </li>
                    </ul>
                    <div className="mt-3 p-3 bg-gray-50 rounded">
                      <p className="text-xs text-gray-600">
                        <strong>목표:</strong> 안정적 원료 확보율 80% 이상, 고정 거래처 20개 이상 확보
                      </p>
                    </div>
                  </div>
                </div>

                {/* 전략 5: 리스크 관리 */}
                <div className="border border-red-200 rounded-lg overflow-hidden">
                  <div className="flex items-start gap-3 p-4 bg-red-50">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-semibold">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-red-900">리스크 관리 및 위기 대응</h4>
                      <p className="text-gray-700 mb-3">
                        외부 환경 변화에 유연하게 대응할 수 있는 체계 구축
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h5 className="font-semibold text-gray-900 mb-2">📋 실행 방안</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>가격 변동 대응:</strong> 천연골재 가격 모니터링 및 탄력적 가격 정책</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>재고 관리:</strong> 적정 재고 수준 유지 (1개월분 생산량)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>법규 대응:</strong> 정책 변화 모니터링 및 선제적 시설 개선</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>안전 관리:</strong> 산업재해 제로 목표, 정기 안전교육 실시</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>재무 건전성:</strong> 부채비율 200% 이하 유지, 유동성 확보</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 단계별 로드맵 */}
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-50">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-gray-700" />
                      단계별 실행 로드맵
                    </h4>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h5 className="font-semibold text-blue-900 mb-2">📍 1단계: 기반 구축 (1년차)</h5>
                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                          <li>• 핵심 설비 투자 및 품질 관리 시스템 구축</li>
                          <li>• ISO 14001 인증 추진</li>
                          <li>• 주요 건설사 3개사와 MOU 체결</li>
                          <li>• 실시간 모니터링 대시보드 개발</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h5 className="font-semibold text-green-900 mb-2">📍 2단계: 성장 가속화 (2년차)</h5>
                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                          <li>• KS 인증 획득 및 생산 품질 안정화</li>
                          <li>• AI 선별 시스템 도입 및 자동화 확대</li>
                          <li>• ESG 평가 B등급 달성</li>
                          <li>• 공공기관 납품 실적 확보</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h5 className="font-semibold text-purple-900 mb-2">📍 3단계: 시장 선도 (3년차 이후)</h5>
                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                          <li>• 연간 생산량 100만 톤 돌파</li>
                          <li>• 수도권 주요 건설사 정기 공급 계약 체결</li>
                          <li>• 화성시 및 경기남부 골재 자급률 향상 기여</li>
                          <li>• 경기도 순환골재 우수 생산업체 지정</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* KPI 지표 */}
                <div className="border border-indigo-200 rounded-lg overflow-hidden">
                  <div className="p-4 bg-indigo-50">
                    <h4 className="font-semibold text-indigo-900 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      핵심 성과 지표 (KPI)
                    </h4>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="font-semibold text-gray-900 mb-1">📊 생산 효율</p>
                        <p className="text-gray-700">• 설비 가동률 85% 이상</p>
                        <p className="text-gray-700">• 불량률 5% 이하</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="font-semibold text-gray-900 mb-1">💰 재무 건전성</p>
                        <p className="text-gray-700">• 영업이익률 15% 이상</p>
                        <p className="text-gray-700">• 부채비율 200% 이하</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="font-semibold text-gray-900 mb-1">🌱 환경 성과</p>
                        <p className="text-gray-700">• CO₂ 배출량 전년 대비 -10%</p>
                        <p className="text-gray-700">• 재활용률 95% 이상</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="font-semibold text-gray-900 mb-1">🤝 고객 만족</p>
                        <p className="text-gray-700">• 재구매율 80% 이상</p>
                        <p className="text-gray-700">• 클레임 발생률 2% 이하</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 주의사항 */}
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-xs text-gray-600">
                    ⚠️ <strong>참고사항:</strong> 투자 금액, ROI, KPI 목표치 등은 예시 데이터입니다. 
                    실제 사업 계획 수립 시 현장 여건, 재무 상황, 시장 환경을 고려한 정밀한 분석이 필요합니다.
                  </p>
                </div>
              </div>
            </Card>

            <div className="p-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
              <h3 className="mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                하이콘코리아의 비전
              </h3>
              <p className="text-sm leading-relaxed mb-3">
                하이콘코리아는 첨단 기술과 친환경 공정을 통해 <span className="font-semibold">국내 최고 품질의 순환골재</span>를 생산하며, 
                <span className="font-semibold"> 2030년까지 탄소중립</span>을 실현하여 지속가능한 건설산업 생태계 구축에 기여하겠습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-white/20 rounded p-3">
                  <p className="font-semibold mb-1">연간 생산 목표</p>
                  <p className="text-2xl font-bold">50만 톤</p>
                </div>
                <div className="bg-white/20 rounded p-3">
                  <p className="font-semibold mb-1">CO₂ 감축량</p>
                  <p className="text-2xl font-bold">2만 톤/년</p>
                </div>
                <div className="bg-white/20 rounded p-3">
                  <p className="font-semibold mb-1">재활용률</p>
                  <p className="text-2xl font-bold">95%+</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

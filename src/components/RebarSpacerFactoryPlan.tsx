import { Factory, Euro, TrendingUp, Zap, CheckCircle2, AlertTriangle, BarChart3, Settings, Package, Leaf, Globe, Award, DollarSign, Clock, Users, MapPin, Truck, Shield, Target, Building2, Boxes, Gauge } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RebarSpacerFactoryPlan() {
  return (
    <div className="bg-white w-full max-w-[210mm] mx-auto">
      {/* 커버 페이지 */}
      <div className="print-page min-h-[297mm] bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white p-16 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-8">
            ECO-FRIENDLY MANUFACTURING PROJECT 2025
          </div>
          <h1 className="text-6xl mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
            재생골재 활용<br />철근 스페이서<br />공장 설립 계획서
          </h1>
          <div className="h-2 w-32 bg-white mb-8"></div>
          <p className="text-2xl mb-4">유럽 설비 기계 비교 분석 보고서</p>
          <p className="text-xl text-emerald-100">
            Recycled Aggregate Rebar Spacer Factory Plan
          </p>
        </div>

        <div className="relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-6">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-2" style={{ fontWeight: 700 }}>3,000평</div>
                <div className="text-sm text-emerald-100">공장 부지 확보</div>
              </div>
              <div>
                <div className="text-4xl mb-2" style={{ fontWeight: 700 }}>🇪🇺 3개국</div>
                <div className="text-sm text-emerald-100">설비 비교 분석</div>
              </div>
              <div>
                <div className="text-4xl mb-2" style={{ fontWeight: 700 }}>100%</div>
                <div className="text-sm text-emerald-100">재생골재 활용</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div>
              <div className="mb-1">하이콘코리아 (HICON Korea)</div>
              <div className="text-emerald-100">친환경 건축자재 제조</div>
            </div>
            <div className="text-right">
              <div className="mb-1">2025년 11월</div>
              <div className="text-emerald-100">설비 도입 검토 보고서</div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. 프로젝트 개요 */}
      <div className="print-page min-h-[297mm] p-12">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm mb-4">
            01. PROJECT OVERVIEW
          </div>
          <h2 className="text-4xl mb-4" style={{ fontWeight: 700 }}>프로젝트 개요</h2>
          <p className="text-lg text-gray-600">재생골재 활용 철근 스페이서 제조 공장 설립</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Factory className="h-6 w-6 text-emerald-600" />
              <strong>사업 개요</strong>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">사업명</span>
                <span>재생골재 철근 스페이서 제조</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">부지 면적</span>
                <span>약 3,000평 (9,900㎡)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">위치</span>
                <span>경기도 화성시 (예정)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">투자 규모</span>
                <span>30~50억원 (설비 선택에 따라)</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Package className="h-6 w-6 text-blue-600" />
              <strong>철근 스페이서란?</strong>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <div>• 철근과 거푸집 사이 간격 유지 부품</div>
              <div>• 콘크리트 피복두께 확보 (내구성)</div>
              <div>• 건축/토목 현장 필수 자재</div>
              <div>• 플라스틱 or 콘크리트 재질</div>
              <div className="pt-2 border-t border-blue-200">
                <strong>하이콘코리아 차별화</strong>
                <div className="text-emerald-600">✓ 100% 재생골재 활용 (친환경)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWJhciUyMGNvbnN0cnVjdGlvbiUyMHN0ZWVsfGVufDF8fHx8MTc2Mjc2NzUyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="철근 스페이서"
              className="w-full h-48 object-cover rounded"
            />
          </div>
          <div className="text-center text-sm text-gray-600">철근 콘크리트 구조물 - 스페이서가 철근 간격을 유지</div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="h-6 w-6 text-green-600" />
            <strong>재생골재 활용의 장점</strong>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <strong>환경적 가치</strong>
              </div>
              <div className="text-gray-700 space-y-1 text-xs">
                <div>• 건설폐기물 재활용 (순환경제)</div>
                <div>• CO₂ 배출량 40% 감소</div>
                <div>• 천연골재 채취 감소</div>
                <div>• 환경부 녹색인증 취득 가능</div>
              </div>
            </div>
            <div className="bg-white rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-blue-600" />
                <strong>경제적 가치</strong>
              </div>
              <div className="text-gray-700 space-y-1 text-xs">
                <div>• 원재료비 30% 절감</div>
                <div>• 정부 친환경 설비 보조금</div>
                <div>• 녹색건축 인증 건물 수요 증가</div>
                <div>• 공공입찰 가점 (재생자재 우대)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 유럽 3개국 설비 비교 */}
      <div className="print-page min-h-[297mm] p-12">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
            02. EUROPEAN EQUIPMENT COMPARISON
          </div>
          <h2 className="text-4xl mb-4" style={{ fontWeight: 700 }}>유럽 설비 기계 비교</h2>
          <p className="text-lg text-gray-600">독일 🇩🇪 vs 프랑스 🇫🇷 vs 터키 🇹🇷</p>
        </div>

        <div className="space-y-4 mb-6">
          {/* 독일 */}
          <div className="bg-gradient-to-r from-red-50 via-yellow-50 to-red-50 border-2 border-gray-800 rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🇩🇪</div>
                <div>
                  <div className="text-xl" style={{ fontWeight: 700 }}>독일 (Germany)</div>
                  <div className="text-sm text-gray-600">최고급 자동화 설비 - 프리미엄 라인</div>
                </div>
              </div>
              <Badge className="bg-yellow-500 text-white">PREMIUM</Badge>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-white rounded p-3 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">대표 제조사</div>
                <div className="text-sm"><strong>HESS, Masa, Zenith</strong></div>
              </div>
              <div className="bg-white rounded p-3 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">설비 가격</div>
                <div className="text-sm text-red-600"><strong>€2.5M ~ €4.0M</strong></div>
                <div className="text-xs text-gray-500">(약 35억~55억원)</div>
              </div>
              <div className="bg-white rounded p-3 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">생산능력</div>
                <div className="text-sm text-green-600"><strong>150만개/월</strong></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded p-3">
                <div className="flex items-center gap-2 mb-2 text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <strong>장점</strong>
                </div>
                <div className="space-y-1 text-xs text-gray-700">
                  <div>✓ 완전 자동화 (로봇 팔레타이징)</div>
                  <div>✓ 불량률 0.5% 미만 (최저)</div>
                  <div>✓ Industry 4.0 IoT 시스템</div>
                  <div>✓ 에너지 효율 최고 등급</div>
                  <div>✓ 20년 이상 내구성 보장</div>
                  <div>✓ 독일 엔지니어 현장 교육</div>
                </div>
              </div>
              <div className="bg-white rounded p-3">
                <div className="flex items-center gap-2 mb-2 text-red-600">
                  <AlertTriangle className="h-4 w-4" />
                  <strong>단점</strong>
                </div>
                <div className="space-y-1 text-xs text-gray-700">
                  <div>✗ 초기 투자비 매우 높음</div>
                  <div>✗ 부품 수입 의존도 높음</div>
                  <div>✗ A/S 비용 고가 (독일 기술자)</div>
                  <div>✗ 설치 기간 6~8개월 소요</div>
                  <div>✗ 복잡한 시스템 (전문 인력 필요)</div>
                </div>
              </div>
            </div>

            <div className="mt-3 bg-gray-100 rounded p-3 text-sm">
              <strong>💡 추천 대상:</strong> 대량 생산 + 품질 최우선 + 장기 투자 가능 기업
            </div>
          </div>

          {/* 프랑스 */}
          <div className="bg-gradient-to-r from-blue-50 via-white to-red-50 border-2 border-blue-600 rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🇫🇷</div>
                <div>
                  <div className="text-xl" style={{ fontWeight: 700 }}>프랑스 (France)</div>
                  <div className="text-sm text-gray-600">중급 자동화 설비 - 밸런스형</div>
                </div>
              </div>
              <Badge className="bg-blue-500 text-white">BALANCED</Badge>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-white rounded p-3 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">대표 제조사</div>
                <div className="text-sm"><strong>Durmazlar, BFS, Nidec</strong></div>
              </div>
              <div className="bg-white rounded p-3 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">설비 가격</div>
                <div className="text-sm text-orange-600"><strong>€1.5M ~ €2.2M</strong></div>
                <div className="text-xs text-gray-500">(약 21억~30억원)</div>
              </div>
              <div className="bg-white rounded p-3 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">생산능력</div>
                <div className="text-sm text-green-600"><strong>100만개/월</strong></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded p-3">
                <div className="flex items-center gap-2 mb-2 text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <strong>장점</strong>
                </div>
                <div className="space-y-1 text-xs text-gray-700">
                  <div>✓ 가성비 우수 (독일 대비 60% 수준)</div>
                  <div>✓ 반자동화 (유연한 생산)</div>
                  <div>✓ 불량률 1~2% (양호)</div>
                  <div>✓ 유럽 CE 인증</div>
                  <div>✓ 설치 기간 4~5개월</div>
                  <div>✓ 한국어 매뉴얼 제공</div>
                </div>
              </div>
              <div className="bg-white rounded p-3">
                <div className="flex items-center gap-2 mb-2 text-red-600">
                  <AlertTriangle className="h-4 w-4" />
                  <strong>단점</strong>
                </div>
                <div className="space-y-1 text-xs text-gray-700">
                  <div>✗ 독일 대비 자동화 수준 낮음</div>
                  <div>✗ 에너지 효율 중간 수준</div>
                  <div>✗ 일부 수동 작업 필요</div>
                  <div>✗ 내구성 10~15년 수준</div>
                </div>
              </div>
            </div>

            <div className="mt-3 bg-blue-100 rounded p-3 text-sm">
              <strong>💡 추천 대상:</strong> 중규모 생산 + 합리적 투자 + 품질/가격 균형
            </div>
          </div>

          {/* 터키 */}
          <div className="bg-gradient-to-r from-red-50 via-white to-red-50 border-2 border-red-600 rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🇹🇷</div>
                <div>
                  <div className="text-xl" style={{ fontWeight: 700 }}>터키 (Turkey)</div>
                  <div className="text-sm text-gray-600">보급형 설비 - 가성비 최고</div>
                </div>
              </div>
              <Badge className="bg-green-600 text-white">COST EFFECTIVE</Badge>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-white rounded p-3 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">대표 제조사</div>
                <div className="text-sm"><strong>Mussan, Vess, Globmac</strong></div>
              </div>
              <div className="bg-white rounded p-3 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">설비 가격</div>
                <div className="text-sm text-green-600"><strong>€800K ~ €1.3M</strong></div>
                <div className="text-xs text-gray-500">(약 11억~18억원)</div>
              </div>
              <div className="bg-white rounded p-3 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">생산능력</div>
                <div className="text-sm text-orange-600"><strong>70만개/월</strong></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded p-3">
                <div className="flex items-center gap-2 mb-2 text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <strong>장점</strong>
                </div>
                <div className="space-y-1 text-xs text-gray-700">
                  <div>✓ 초기 투자비 최저 (독일 대비 30%)</div>
                  <div>✓ 빠른 ROI (2~3년)</div>
                  <div>✓ 설치 기간 2~3개월</div>
                  <div>✓ 단순한 구조 (유지보수 쉬움)</div>
                  <div>✓ 터키 기술자 저렴한 A/S</div>
                  <div>✓ 중동/아시아 납품 실적 多</div>
                </div>
              </div>
              <div className="bg-white rounded p-3">
                <div className="flex items-center gap-2 mb-2 text-red-600">
                  <AlertTriangle className="h-4 w-4" />
                  <strong>단점</strong>
                </div>
                <div className="space-y-1 text-xs text-gray-700">
                  <div>✗ 자동화 수준 낮음 (반수동)</div>
                  <div>✗ 불량률 3~5% (높은 편)</div>
                  <div>✗ 에너지 효율 낮음</div>
                  <div>✗ 내구성 7~10년</div>
                  <div>✗ 정밀도 독일/프랑스 대비 낮음</div>
                </div>
              </div>
            </div>

            <div className="mt-3 bg-green-100 rounded p-3 text-sm">
              <strong>💡 추천 대상:</strong> 초기 스타트업 + 빠른 투자 회수 + 소규모 생산
            </div>
          </div>
        </div>
      </div>

      {/* 3. 설비 상세 비교표 */}
      <div className="print-page min-h-[297mm] p-12">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm mb-4">
            03. DETAILED COMPARISON
          </div>
          <h2 className="text-4xl mb-4" style={{ fontWeight: 700 }}>설비 사양 상세 비교</h2>
          <p className="text-lg text-gray-600">15개 항목 비교 분석</p>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-3 text-left">비교 항목</th>
                <th className="p-3 text-center">🇩🇪 독일</th>
                <th className="p-3 text-center">🇫🇷 프랑스</th>
                <th className="p-3 text-center">🇹🇷 터키</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              <tr className="border-b border-gray-200 bg-blue-50">
                <td className="p-3"><strong>💰 설비 투자비</strong></td>
                <td className="p-3 text-center text-red-600">35~55억원</td>
                <td className="p-3 text-center text-orange-600">21~30억원</td>
                <td className="p-3 text-center text-green-600">11~18억원</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3"><strong>📦 생산능력 (월)</strong></td>
                <td className="p-3 text-center">150만개</td>
                <td className="p-3 text-center">100만개</td>
                <td className="p-3 text-center">70만개</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-3"><strong>⚙️ 자동화 수준</strong></td>
                <td className="p-3 text-center">완전자동 (95%)</td>
                <td className="p-3 text-center">반자동 (70%)</td>
                <td className="p-3 text-center">반수동 (50%)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3"><strong>❌ 불량률</strong></td>
                <td className="p-3 text-center text-green-600">0.5% 이하</td>
                <td className="p-3 text-center text-blue-600">1~2%</td>
                <td className="p-3 text-center text-orange-600">3~5%</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-3"><strong>⚡ 전력 소비</strong></td>
                <td className="p-3 text-center">120 kW/h</td>
                <td className="p-3 text-center">150 kW/h</td>
                <td className="p-3 text-center">180 kW/h</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3"><strong>👷 필요 인력</strong></td>
                <td className="p-3 text-center">5명</td>
                <td className="p-3 text-center">8명</td>
                <td className="p-3 text-center">12명</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-3"><strong>⏱️ 설치 기간</strong></td>
                <td className="p-3 text-center">6~8개월</td>
                <td className="p-3 text-center">4~5개월</td>
                <td className="p-3 text-center">2~3개월</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3"><strong>🔧 A/S 비용 (연간)</strong></td>
                <td className="p-3 text-center text-red-600">1.5억원</td>
                <td className="p-3 text-center text-orange-600">8,000만원</td>
                <td className="p-3 text-center text-green-600">4,000만원</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-3"><strong>🛡️ 내구성 (년)</strong></td>
                <td className="p-3 text-center">20년 이상</td>
                <td className="p-3 text-center">10~15년</td>
                <td className="p-3 text-center">7~10년</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3"><strong>📱 IoT/스마트 시스템</strong></td>
                <td className="p-3 text-center text-green-600">완벽 지원</td>
                <td className="p-3 text-center text-blue-600">일부 지원</td>
                <td className="p-3 text-center text-gray-400">미지원</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-3"><strong>🌍 친환경 인증</strong></td>
                <td className="p-3 text-center">ISO 14001 + EU 그린딜</td>
                <td className="p-3 text-center">ISO 14001</td>
                <td className="p-3 text-center">CE 인증</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3"><strong>🎓 기술 교육</strong></td>
                <td className="p-3 text-center">독일 본사 4주</td>
                <td className="p-3 text-center">프랑스 2주</td>
                <td className="p-3 text-center">터키 1주</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-3"><strong>🔄 ROI (투자회수)</strong></td>
                <td className="p-3 text-center">5~7년</td>
                <td className="p-3 text-center">3~5년</td>
                <td className="p-3 text-center text-green-600">2~3년</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3"><strong>📊 시장 점유율</strong></td>
                <td className="p-3 text-center">유럽 45%</td>
                <td className="p-3 text-center">유럽 25%</td>
                <td className="p-3 text-center">중동/아시아 35%</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="p-3"><strong>⭐ 종합 평가</strong></td>
                <td className="p-3 text-center">
                  <Badge className="bg-yellow-500 text-white text-xs">최고급</Badge>
                </td>
                <td className="p-3 text-center">
                  <Badge className="bg-blue-500 text-white text-xs">균형형</Badge>
                </td>
                <td className="p-3 text-center">
                  <Badge className="bg-green-600 text-white text-xs">가성비</Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded p-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1739863306113-2629b0ed2a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmV8ZW58MXx8fHwxNzYyNjYwMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="공장 생산 라인"
              className="w-full h-40 object-cover rounded mb-2"
            />
            <div className="text-center text-sm text-gray-600">자동화 생산 라인</div>
          </div>
          <div className="bg-white border border-gray-200 rounded p-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MjY5MDU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="산업 기계 설비"
              className="w-full h-40 object-cover rounded mb-2"
            />
            <div className="text-center text-sm text-gray-600">유럽산 정밀 기계</div>
          </div>
        </div>
      </div>

      {/* 4. 투자비 및 수익성 분석 */}
      <div className="print-page min-h-[297mm] p-12">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm mb-4">
            04. INVESTMENT & ROI ANALYSIS
          </div>
          <h2 className="text-4xl mb-4" style={{ fontWeight: 700 }}>투자비 및 수익성 분석</h2>
          <p className="text-lg text-gray-600">시나리오별 비교 (독일/프랑스/터키)</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* 독일 시나리오 */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-500 rounded-lg p-4">
            <div className="text-center mb-3">
              <div className="text-2xl mb-2">🇩🇪</div>
              <div style={{ fontWeight: 700 }}>독일 설비</div>
              <div className="text-xs text-gray-600">프리미엄 전략</div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">총 투자비</div>
                <div className="text-lg text-red-600" style={{ fontWeight: 700 }}>50억원</div>
                <div className="text-gray-500">설비 40억 + 부지/건축 10억</div>
              </div>
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">월 생산량</div>
                <div>150만개</div>
              </div>
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">개당 판매가</div>
                <div>80원</div>
              </div>
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">월 매출</div>
                <div className="text-blue-600" style={{ fontWeight: 700 }}>1억 2천만원</div>
              </div>
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">연 순이익</div>
                <div className="text-green-600" style={{ fontWeight: 700 }}>8억원</div>
              </div>
              <div className="bg-yellow-100 rounded p-2 border border-yellow-400">
                <div className="text-gray-600 mb-1">ROI</div>
                <div style={{ fontWeight: 700 }}>6.2년</div>
              </div>
            </div>
          </div>

          {/* 프랑스 시나리오 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-500 rounded-lg p-4">
            <div className="text-center mb-3">
              <div className="text-2xl mb-2">🇫🇷</div>
              <div style={{ fontWeight: 700 }}>프랑스 설비</div>
              <div className="text-xs text-gray-600">밸런스 전략</div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">총 투자비</div>
                <div className="text-lg text-orange-600" style={{ fontWeight: 700 }}>35억원</div>
                <div className="text-gray-500">설비 25억 + 부지/건축 10억</div>
              </div>
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">월 생산량</div>
                <div>100만개</div>
              </div>
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">개당 판매가</div>
                <div>75원</div>
              </div>
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">월 매출</div>
                <div className="text-blue-600" style={{ fontWeight: 700 }}>7천5백만원</div>
              </div>
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">연 순이익</div>
                <div className="text-green-600" style={{ fontWeight: 700 }}>5.5억원</div>
              </div>
              <div className="bg-blue-100 rounded p-2 border border-blue-400">
                <div className="text-gray-600 mb-1">ROI</div>
                <div style={{ fontWeight: 700 }}>6.4년 ⭐</div>
              </div>
            </div>
          </div>

          {/* 터키 시나리오 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-lg p-4">
            <div className="text-center mb-3">
              <div className="text-2xl mb-2">🇹🇷</div>
              <div style={{ fontWeight: 700 }}>터키 설비</div>
              <div className="text-xs text-gray-600">가성비 전략</div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">총 투자비</div>
                <div className="text-lg text-green-600" style={{ fontWeight: 700 }}>25억원</div>
                <div className="text-gray-500">설비 15억 + 부지/건축 10억</div>
              </div>
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">월 생산량</div>
                <div>70만개</div>
              </div>
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">개당 판매가</div>
                <div>70원</div>
              </div>
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">월 매출</div>
                <div className="text-blue-600" style={{ fontWeight: 700 }}>4천9백만원</div>
              </div>
              <div className="bg-white rounded p-2">
                <div className="text-gray-600 mb-1">연 순이익</div>
                <div className="text-green-600" style={{ fontWeight: 700 }}>3.5억원</div>
              </div>
              <div className="bg-green-100 rounded p-2 border border-green-400">
                <div className="text-gray-600 mb-1">ROI</div>
                <div className="text-green-600" style={{ fontWeight: 700 }}>7.1년 🚀</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-400 rounded-lg p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-6 w-6 text-purple-600" />
            <strong className="text-lg">하이콘코리아 추천 전략</strong>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded p-3">
              <div className="mb-2"><strong>1단계: 터키 설비로 시작 (0~3년)</strong></div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>✓ 초기 투자 부담 최소화 (25억원)</div>
                <div>✓ 빠른 시장 진입 (2~3개월 설치)</div>
                <div>✓ 재생골재 스페이서 시장 검증</div>
                <div>✓ 고객사 확보 및 매출 안정화</div>
                <div className="text-green-600">→ 3년 안에 투자금 회수</div>
              </div>
            </div>
            <div className="bg-white rounded p-3">
              <div className="mb-2"><strong>2단계: 독일 설비로 증설 (4년~)</strong></div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>✓ 터키 설비 수익으로 독일 설비 구매</div>
                <div>✓ 프리미엄 제품 라인 추가</div>
                <div>✓ 대형 건설사 납품 (품질 인증)</div>
                <div>✓ 수출 시장 진출 (일본, 동남아)</div>
                <div className="text-blue-600">→ 시장 점유율 30% 달성</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <strong>시장 규모 및 성장 전망</strong>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="bg-blue-50 rounded p-3 text-center">
              <div className="text-xs text-gray-600 mb-1">국내 시장 규모</div>
              <div className="text-xl text-blue-600" style={{ fontWeight: 700 }}>2,000억원</div>
              <div className="text-xs text-gray-500">연간 (2024년 기준)</div>
            </div>
            <div className="bg-green-50 rounded p-3 text-center">
              <div className="text-xs text-gray-600 mb-1">연평균 성장률</div>
              <div className="text-xl text-green-600" style={{ fontWeight: 700 }}>12%</div>
              <div className="text-xs text-gray-500">재건축/리모델링 증가</div>
            </div>
            <div className="bg-purple-50 rounded p-3 text-center">
              <div className="text-xs text-gray-600 mb-1">재생골재 점유율</div>
              <div className="text-xl text-purple-600" style={{ fontWeight: 700 }}>5%</div>
              <div className="text-xs text-gray-500">급성장 중 (블루오션)</div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. 공장 레이아웃 및 생산 공정 */}
      <div className="print-page min-h-[297mm] p-12">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm mb-4">
            05. FACTORY LAYOUT & PROCESS
          </div>
          <h2 className="text-4xl mb-4" style={{ fontWeight: 700 }}>3,000평 공장 레이아웃</h2>
          <p className="text-lg text-gray-600">생산 공정 및 부지 활용 계획</p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-400 rounded-lg p-6 mb-6">
          <div className="text-center mb-4">
            <div style={{ fontWeight: 700 }} className="text-xl mb-2">🏭 공장 구역 배치도</div>
            <div className="text-sm text-gray-600">총 부지: 3,000평 (9,900㎡)</div>
          </div>
          <div className="grid grid-cols-4 gap-3 text-sm">
            <div className="bg-blue-100 border-2 border-blue-500 rounded p-3 text-center">
              <div className="text-2xl mb-2">🏢</div>
              <div style={{ fontWeight: 700 }}>생산 동</div>
              <div className="text-xs text-gray-600 mt-1">1,200평</div>
              <div className="text-xs text-gray-700 mt-2">
                <div>• 주 생산 라인</div>
                <div>• 성형/양생 시설</div>
                <div>• 품질 검사실</div>
              </div>
            </div>
            <div className="bg-green-100 border-2 border-green-500 rounded p-3 text-center">
              <div className="text-2xl mb-2">📦</div>
              <div style={{ fontWeight: 700 }}>원료 창고</div>
              <div className="text-xs text-gray-600 mt-1">600평</div>
              <div className="text-xs text-gray-700 mt-2">
                <div>• 재생골재 저장</div>
                <div>• 시멘트/첨가제</div>
                <div>• 자동 투입 시스템</div>
              </div>
            </div>
            <div className="bg-yellow-100 border-2 border-yellow-500 rounded p-3 text-center">
              <div className="text-2xl mb-2">🚛</div>
              <div style={{ fontWeight: 700 }}>제품 창고</div>
              <div className="text-xs text-gray-600 mt-1">700평</div>
              <div className="text-xs text-gray-700 mt-2">
                <div>• 완제품 보관</div>
                <div>• 출하 대기소</div>
                <div>• 파레트 적재</div>
              </div>
            </div>
            <div className="bg-purple-100 border-2 border-purple-500 rounded p-3 text-center">
              <div className="text-2xl mb-2">🏢</div>
              <div style={{ fontWeight: 700 }}>관리/부대시설</div>
              <div className="text-xs text-gray-600 mt-1">500평</div>
              <div className="text-xs text-gray-700 mt-2">
                <div>• 사무동</div>
                <div>• 직원 편의시설</div>
                <div>• 주차장</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-lg p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="h-6 w-6 text-blue-600" />
            <strong className="text-lg">생산 공정 Flow</strong>
          </div>
          <div className="flex items-center justify-between gap-2 text-sm">
            <div className="bg-gray-100 rounded p-3 text-center flex-1">
              <div className="text-2xl mb-2">1️⃣</div>
              <div style={{ fontWeight: 700 }} className="mb-1">원료 투입</div>
              <div className="text-xs text-gray-600">재생골재 + 시멘트<br />+ 첨가제 혼합</div>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="bg-blue-100 rounded p-3 text-center flex-1">
              <div className="text-2xl mb-2">2️⃣</div>
              <div style={{ fontWeight: 700 }} className="mb-1">혼합/교반</div>
              <div className="text-xs text-gray-600">고속 믹서<br />균일한 혼합</div>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="bg-green-100 rounded p-3 text-center flex-1">
              <div className="text-2xl mb-2">3️⃣</div>
              <div style={{ fontWeight: 700 }} className="mb-1">성형</div>
              <div className="text-xs text-gray-600">금형 프레스<br />다양한 규격</div>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="bg-yellow-100 rounded p-3 text-center flex-1">
              <div className="text-2xl mb-2">4️⃣</div>
              <div style={{ fontWeight: 700 }} className="mb-1">양생</div>
              <div className="text-xs text-gray-600">증기 양생<br />24시간</div>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="bg-purple-100 rounded p-3 text-center flex-1">
              <div className="text-2xl mb-2">5️⃣</div>
              <div style={{ fontWeight: 700 }} className="mb-1">검사/포장</div>
              <div className="text-xs text-gray-600">품질 테스트<br />박스 포장</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded p-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1639633901978-772ceb0b1a4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xlZCUyMGNvbmNyZXRlJTIwYWdncmVnYXRlfGVufDF8fHx8MTc2Mjc2NzUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="재생골재"
              className="w-full h-40 object-cover rounded mb-2"
            />
            <div className="text-center text-sm text-gray-600">재생골재 (원료)</div>
          </div>
          <div className="bg-white border border-gray-200 rounded p-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1752614671119-4868a91efc14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0ZWQlMjBtYW51ZmFjdHVyaW5nJTIwcm9ib3R8ZW58MXx8fHwxNzYyNzY3NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="자동화 로봇"
              className="w-full h-40 object-cover rounded mb-2"
            />
            <div className="text-center text-sm text-gray-600">자동화 로봇 팔레타이징</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="h-6 w-6 text-green-600" />
            <strong>친환경 공장 특화 시설</strong>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="bg-white rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-4 w-4 text-yellow-600" />
                <strong>태양광 패널</strong>
              </div>
              <div className="text-xs text-gray-700">
                <div>• 지붕 500㎡ 태양광 설치</div>
                <div>• 연간 전력 20% 자체 생산</div>
                <div>• 탄소배출 저감</div>
              </div>
            </div>
            <div className="bg-white rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-blue-600" />
                <strong>분진 처리</strong>
              </div>
              <div className="text-xs text-gray-700">
                <div>• 집진 시스템 설치</div>
                <div>• 미세먼지 99% 제거</div>
                <div>• 작업 환경 개선</div>
              </div>
            </div>
            <div className="bg-white rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-purple-600" />
                <strong>친환경 인증</strong>
              </div>
              <div className="text-xs text-gray-700">
                <div>• 환경부 녹색인증</div>
                <div>• ISO 14001</div>
                <div>• 저탄소 건축자재 인증</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. 실행 계획 및 결론 */}
      <div className="print-page min-h-[297mm] p-12">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm mb-4">
            06. ACTION PLAN & CONCLUSION
          </div>
          <h2 className="text-4xl mb-4" style={{ fontWeight: 700 }}>실행 계획 및 최종 제언</h2>
          <p className="text-lg text-gray-600">단계별 추진 전략</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-500 rounded-lg p-5 mb-6">
          <div className="text-center mb-4">
            <strong className="text-xl">📅 24개월 실행 로드맵</strong>
          </div>
          <div className="space-y-3 text-sm">
            <div className="bg-white rounded p-3 border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-2">
                <strong>1~3개월: 설비 선정 및 계약</strong>
                <Badge className="bg-blue-500 text-white text-xs">PHASE 1</Badge>
              </div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>✓ 유럽 3개국 제조사 방문 (독일/프랑스/터키)</div>
                <div>✓ 실제 공장 가동 현장 확인</div>
                <div>✓ 견적 비교 및 최종 선정</div>
                <div>✓ 계약 체결 및 선금 지불</div>
                <div className="text-blue-600">→ 추천: 터키 설비 (빠른 ROI)</div>
              </div>
            </div>

            <div className="bg-white rounded p-3 border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-2">
                <strong>4~6개월: 공장 건축 및 설비 제작</strong>
                <Badge className="bg-green-500 text-white text-xs">PHASE 2</Badge>
              </div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>✓ 3,000평 부지 공장 건축 (철골 구조)</div>
                <div>✓ 유럽 현지 설비 제작 (3개월)</div>
                <div>✓ 전기/수도/환경 시설 구축</div>
                <div>✓ 원료 공급처 계약 (재생골재)</div>
              </div>
            </div>

            <div className="bg-white rounded p-3 border-l-4 border-yellow-500">
              <div className="flex items-center justify-between mb-2">
                <strong>7~9개월: 설비 설치 및 시운전</strong>
                <Badge className="bg-yellow-500 text-white text-xs">PHASE 3</Badge>
              </div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>✓ 설비 해상 운송 (유럽 → 한국)</div>
                <div>✓ 현장 설치 및 조립 (1개월)</div>
                <div>✓ 유럽 기술자 시운전 교육</div>
                <div>✓ 테스트 생산 (품질 검증)</div>
              </div>
            </div>

            <div className="bg-white rounded p-3 border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-2">
                <strong>10~12개월: 인증 취득 및 영업</strong>
                <Badge className="bg-purple-500 text-white text-xs">PHASE 4</Badge>
              </div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>✓ KS 인증 (한국산업표준)</div>
                <div>✓ 친환경 인증 (환경부)</div>
                <div>✓ 주요 건설사 샘플 테스트</div>
                <div>✓ 첫 납품 계약 체결</div>
              </div>
            </div>

            <div className="bg-white rounded p-3 border-l-4 border-red-500">
              <div className="flex items-center justify-between mb-2">
                <strong>13~24개월: 본격 양산 및 확대</strong>
                <Badge className="bg-red-500 text-white text-xs">PHASE 5</Badge>
              </div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>✓ 월 70만개 풀가동 생산</div>
                <div>✓ 대형 건설사 정기 납품</div>
                <div>✓ 유통망 확대 (전국)</div>
                <div>✓ 2라인 증설 검토 (독일 설비)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="h-5 w-5 text-green-600" />
              <strong>예상 재원 조달 계획</strong>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">자기자본 (하이콘코리아)</span>
                <span>10억원 (40%)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">정책자금 (중소벤처기업부)</span>
                <span>8억원 (32%)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">은행 대출 (시설자금)</span>
                <span>7억원 (28%)</span>
              </div>
              <div className="border-t-2 border-gray-300 pt-2 mt-2 flex justify-between">
                <strong>총 투자비</strong>
                <strong className="text-blue-600">25억원</strong>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Users className="h-5 w-5 text-blue-600" />
              <strong>예상 고용 인원</strong>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">공장장 (생산관리)</span>
                <span>1명</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">기계 운영 (3교대)</span>
                <span>9명</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">품질검사/포장</span>
                <span>3명</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">영업/사무</span>
                <span>2명</span>
              </div>
              <div className="border-t-2 border-gray-300 pt-2 mt-2 flex justify-between">
                <strong>총 인원</strong>
                <strong className="text-blue-600">15명</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg p-6">
          <div className="text-center mb-4">
            <div className="text-2xl mb-2" style={{ fontWeight: 700 }}>🎯 최종 제언</div>
            <div className="text-sm text-emerald-100">하이콘코리아 경영진 귀중</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded p-4 text-sm space-y-3">
            <div className="flex items-start gap-2">
              <div className="text-xl">1️⃣</div>
              <div>
                <strong>1단계: 터키 설비 도입 추천</strong>
                <div className="text-emerald-100 text-xs mt-1">
                  초기 투자 25억원으로 시장 진입, 3년 안에 투자금 회수 가능. 
                  재생골재 스페이서 시장 검증 후 프리미엄 라인 확장.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-xl">2️⃣</div>
              <div>
                <strong>차별화 전략: 100% 재생골재 + 친환경 인증</strong>
                <div className="text-emerald-100 text-xs mt-1">
                  국내 최초 재생골재 전문 스페이서 브랜드 포지셔닝. 
                  환경부 녹색인증으로 공공입찰 가점 확보.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-xl">3️⃣</div>
              <div>
                <strong>2단계 증설: 독일 설비로 프리미엄 라인</strong>
                <div className="text-emerald-100 text-xs mt-1">
                  4년차부터 독일 설비 추가 도입, 대형 건설사 전용 고품질 제품 생산. 
                  수출 시장(일본, 동남아) 진출.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

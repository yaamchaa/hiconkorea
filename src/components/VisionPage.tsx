import { ArrowLeft, Target, Lightbulb, TrendingUp, Globe, Leaf, Zap, Network, Award, Users, Building2, Recycle } from "lucide-react";
import { motion } from "motion/react";
import { PageHeader } from "./PageHeader";
import closingBgImage from "figma:asset/08a10b6ee9dce9d36971760a160400cc2f664e98.png";

interface VisionPageProps {
  onBack: () => void;
  onStaffAuth?: () => void;
  onAboutClick?: () => void;
  onServicesClick?: () => void;
  onVisionClick?: () => void;
  onMissionClick?: () => void;
  onTrendsClick?: () => void;
  onPurchaseClick?: () => void;
}

export function VisionPage({ onBack, onStaffAuth, onAboutClick, onServicesClick, onVisionClick, onMissionClick, onTrendsClick, onPurchaseClick }: VisionPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pb-16">
      {/* Page Header */}
      <PageHeader 
        onLogoClick={onBack}
        onStaffAuth={onStaffAuth}
        onAboutClick={onAboutClick}
        onServicesClick={onServicesClick}
        onVisionClick={onVisionClick}
        onMissionClick={onMissionClick}
        onTrendsClick={onTrendsClick}
        onPurchaseClick={onPurchaseClick}
        currentPage="vision"
      />

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 mt-[100px]">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-[36px] md:text-[48px] lg:text-[56px] tracking-tight mb-4">
            <span className="block font-['Gmarket_Sans_TTF:Bold',_sans-serif]">하이콘코리아의 비전</span>
            <span className="block text-[#E63946] font-bold">Vision & Future Business</span>
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 leading-[1.7] max-w-[800px]">
            순환경제 생태계를 선도하며, 지속 가능한 미래를 만들어가는 하이콘코리아의 비전과 미래 사업 방향을 소개합니다.
          </p>
        </motion.div>

        {/* Core Vision Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Target className="size-8 text-[#E63946]" />
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-['Gmarket_Sans_TTF:Bold',_sans-serif]">
              핵심 비전
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-[20px] md:text-[22px] mb-4 font-bold">자연 그대로의 자연</h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-[1.7]">
                폐기물을 단순히 처리하는 것이 아니라, 자연 순환의 일부로 되돌려 보내는 것이 우리의 사명입니다. 
                재생 순환 골재를 통해 자연이 자연 그대로 유지될 수 있도록 최선을 다합니다.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-[20px] md:text-[22px] mb-4 font-bold">순환경제 리더십</h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-[1.7]">
                2030년까지 대한민국 순환 골재 산업의 선도 기업으로 자리매김하며, 
                탄소중립 달성과 지속 가능한 건설 생태계 구축에 앞장서겠습니다.
              </p>
            </div>
          </div>
        </motion.section>

        {/* New Business Models Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="size-8 text-[#E63946]" />
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-['Gmarket_Sans_TTF:Bold',_sans-serif]">
              순환 골재 기반 신규 비즈니스
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Business Card 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 border border-blue-100 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-4">
                <Recycle className="size-10 text-[#0066CC] group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-[12px] px-3 py-1 bg-blue-100 text-[#0066CC] rounded-full">진행중</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] mb-3 font-bold">순환 골재 파트너십 플랫폼</h3>
              <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6] mb-4">
                건설사, 철거업체, 골재 수요처를 연결하는 디지털 플랫폼을 구축하여 
                순환 골재의 효율적인 유통과 품질 보증을 실현합니다.
              </p>
              <ul className="space-y-2 text-[12px] md:text-[13px] text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#0066CC] rounded-full" />
                  실시간 골재 매칭 시스템
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#0066CC] rounded-full" />
                  품질 인증 자동화
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#0066CC] rounded-full" />
                  스마트 물류 최적화
                </li>
              </ul>
            </div>

            {/* Business Card 2 */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 border border-green-100 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-4">
                <Building2 className="size-10 text-[#10B981] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[12px] px-3 py-1 bg-green-100 text-[#10B981] rounded-full">2025 Q3</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] mb-3 font-bold">프리미엄 친환경 건설 자재</h3>
              <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6] mb-4">
                재생 골재를 활용한 고부가가치 건설 자재를 개발하여 
                친환경 건축 시장을 선도합니다.
              </p>
              <ul className="space-y-2 text-[12px] md:text-[13px] text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#10B981] rounded-full" />
                  탄소저감 콘크리트 블록
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#10B981] rounded-full" />
                  투수성 보도블록
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#10B981] rounded-full" />
                  경량 조경 자재
                </li>
              </ul>
            </div>

            {/* Business Card 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 border border-purple-100 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-4">
                <Users className="size-10 text-[#8B5CF6] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[12px] px-3 py-1 bg-purple-100 text-[#8B5CF6] rounded-full">2025 Q4</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] mb-3 font-bold">폐기물 처리 컨설팅 서비스</h3>
              <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6] mb-4">
                건설 폐기물 관리 전문 컨설팅을 제공하여 기업의 ESG 경영과 
                순환경제 전환을 지원합니다.
              </p>
              <ul className="space-y-2 text-[12px] md:text-[13px] text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#8B5CF6] rounded-full" />
                  폐기물 최적화 전략 수립
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#8B5CF6] rounded-full" />
                  순환 골재 도입 컨설팅
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#8B5CF6] rounded-full" />
                  탄소배출 감축 솔루션
                </li>
              </ul>
            </div>

            {/* Business Card 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 border border-orange-100 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-4">
                <Zap className="size-10 text-[#F59E0B] group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-[12px] px-3 py-1 bg-orange-100 text-[#F59E0B] rounded-full">2026 Q2</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] mb-3 font-bold">스마트 골재 공장 자동화</h3>
              <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6] mb-4">
                IoT, AI, 로봇공학을 결합한 차세대 스마트 팩토리로 
                생산성과 품질을 획기적으로 향상시킵니다.
              </p>
              <ul className="space-y-2 text-[12px] md:text-[13px] text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#F59E0B] rounded-full" />
                  AI 기반 품질 자동 선별
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#F59E0B] rounded-full" />
                  무인 운반 시스템
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#F59E0B] rounded-full" />
                  실시간 생산 모니터링
                </li>
              </ul>
            </div>

            {/* Business Card 5 */}
            <div className="bg-gradient-to-br from-cyan-50 to-white p-8 border border-cyan-100 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-4">
                <Network className="size-10 text-[#06B6D4] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[12px] px-3 py-1 bg-cyan-100 text-[#06B6D4] rounded-full">2027 Q1</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] mb-3 font-bold">AI 기반 품질 관리 시스템</h3>
              <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6] mb-4">
                머신러닝과 빅데이터 분석을 활용하여 골재 품질을 
                예측하고 최적화하는 지능형 시스템을 구축합니다.
              </p>
              <ul className="space-y-2 text-[12px] md:text-[13px] text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#06B6D4] rounded-full" />
                  실시간 품질 예측 모델
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#06B6D4] rounded-full" />
                  불량률 자동 감지
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#06B6D4] rounded-full" />
                  생산 공정 자동 최적화
                </li>
              </ul>
            </div>

            {/* Business Card 6 */}
            <div className="bg-gradient-to-br from-rose-50 to-white p-8 border border-rose-100 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-4">
                <Globe className="size-10 text-[#E63946] group-hover:rotate-180 transition-transform duration-700" />
                <span className="text-[12px] px-3 py-1 bg-rose-100 text-[#E63946] rounded-full">2028</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] mb-3 font-bold">국제 순환 골재 네트워크</h3>
              <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6] mb-4">
                아시아-태평양 지역의 순환 골재 허브로 성장하여 
                글로벌 순환경제 생태계를 선도합니다.
              </p>
              <ul className="space-y-2 text-[12px] md:text-[13px] text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#E63946] rounded-full" />
                  국제 품질 인증 획득
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#E63946] rounded-full" />
                  해외 파트너십 확대
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 bg-[#E63946] rounded-full" />
                  글로벌 기술 표준화 주도
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Future Direction Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="size-8 text-[#E63946]" />
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-['Gmarket_Sans_TTF:Bold',_sans-serif]">
              미래 사업 방향
            </h2>
          </div>
          <div className="bg-white p-8 md:p-12 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-[20px] md:text-[22px] mb-4 font-bold text-[#E63946]">탄소 크레딧 거래 플랫폼</h3>
                <p className="text-[14px] md:text-[15px] text-gray-600 leading-[1.7] mb-4">
                  순환 골재 사용으로 발생하는 탄소 감축량을 크레딧화하여 
                  거래할 수 있는 블록체인 기반 플랫폼을 개발합니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="size-6 rounded-full bg-[#E63946]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="size-2 rounded-full bg-[#E63946]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] md:text-[15px] font-bold mb-1">탄소 감축량 자동 계산</h4>
                      <p className="text-[12px] md:text-[13px] text-gray-500">
                        재생 골재 사용에 따른 탄소 감축 효과를 실시간으로 측정하고 인증합니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-6 rounded-full bg-[#E63946]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="size-2 rounded-full bg-[#E63946]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] md:text-[15px] font-bold mb-1">크레딧 거래 마켓플레이스</h4>
                      <p className="text-[12px] md:text-[13px] text-gray-500">
                        기업들이 탄소 크레딧을 안전하고 투명하게 거래할 수 있는 플랫폼을 제공합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[20px] md:text-[22px] mb-4 font-bold text-[#0066CC]">순환경제 교육 센터</h3>
                <p className="text-[14px] md:text-[15px] text-gray-600 leading-[1.7] mb-4">
                  순환경제와 재생 골재에 대한 인식을 높이고 전문 인력을 양성하는 
                  교육 및 연구 센터를 운영합니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="size-6 rounded-full bg-[#0066CC]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="size-2 rounded-full bg-[#0066CC]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] md:text-[15px] font-bold mb-1">전문가 양성 프로그램</h4>
                      <p className="text-[12px] md:text-[13px] text-gray-500">
                        순환 골재 품질 관리, 공정 최적화 등 전문 교육 과정을 제공합니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-6 rounded-full bg-[#0066CC]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="size-2 rounded-full bg-[#0066CC]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] md:text-[15px] font-bold mb-1">순환경제 R&D 센터</h4>
                      <p className="text-[12px] md:text-[13px] text-gray-500">
                        학계 및 연구기관과 협력하여 차세대 순환 골재 기술을 개발합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ESG Strategy Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Leaf className="size-8 text-[#10B981]" />
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-['Gmarket_Sans_TTF:Bold',_sans-serif]">
              ESG 경영 전략
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 border-2 border-green-200">
              <div className="size-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Leaf className="size-6 text-green-600" />
              </div>
              <h3 className="text-[20px] md:text-[22px] mb-3 font-bold">환경 (Environmental)</h3>
              <ul className="space-y-2 text-[13px] md:text-[14px] text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>2030년 탄소중립 달성</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>폐기물 재활용률 95% 이상</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>친환경 공정 100% 전환</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>재생에너지 사용 확대</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 border-2 border-blue-200">
              <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users className="size-6 text-blue-600" />
              </div>
              <h3 className="text-[20px] md:text-[22px] mb-3 font-bold">사회 (Social)</h3>
              <ul className="space-y-2 text-[13px] md:text-[14px] text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>안전한 근무 환경 조성</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>지역사회 상생 프로그램</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>일자리 창출 및 인재 육성</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>순환경제 인식 제고 캠페인</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 border-2 border-purple-200">
              <div className="size-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Award className="size-6 text-purple-600" />
              </div>
              <h3 className="text-[20px] md:text-[22px] mb-3 font-bold">지배구조 (Governance)</h3>
              <ul className="space-y-2 text-[13px] md:text-[14px] text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>투명한 경영 및 윤리경영</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>이사회 독립성 강화</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>주주 권리 보호</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>리스크 관리 체계 구축</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* 2030 Roadmap Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="size-8 text-[#E63946]" />
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-['Gmarket_Sans_TTF:Bold',_sans-serif]">
              2030 로드맵
            </h2>
          </div>
          <div className="bg-gradient-to-r from-[#E63946]/5 to-[#0066CC]/5 p-8 md:p-12 border border-gray-200">
            <div className="space-y-8">
              {/* 2025 */}
              <div className="relative pl-8 border-l-4 border-[#E63946]">
                <div className="absolute left-[-13px] top-0 size-6 rounded-full bg-[#E63946] flex items-center justify-center">
                  <div className="size-3 rounded-full bg-white" />
                </div>
                <div className="mb-2">
                  <span className="inline-block px-4 py-1 bg-[#E63946] text-white rounded-full text-[14px] font-bold">2025</span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-bold mb-2">기반 구축 및 시장 진입</h3>
                <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6]">
                  스마트 팩토리 완성, 파트너십 플랫폼 베타 런칭, 친환경 건설 자재 첫 제품 출시
                </p>
              </div>

              {/* 2026-2027 */}
              <div className="relative pl-8 border-l-4 border-[#0066CC]">
                <div className="absolute left-[-13px] top-0 size-6 rounded-full bg-[#0066CC] flex items-center justify-center">
                  <div className="size-3 rounded-full bg-white" />
                </div>
                <div className="mb-2">
                  <span className="inline-block px-4 py-1 bg-[#0066CC] text-white rounded-full text-[14px] font-bold">2026-2027</span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-bold mb-2">성장 및 확장</h3>
                <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6]">
                  AI 품질관리 시스템 도입, 탄소 크레딧 거래 플랫폼 출시, 국내 시장 점유율 20% 달성
                </p>
              </div>

              {/* 2028-2029 */}
              <div className="relative pl-8 border-l-4 border-[#10B981]">
                <div className="absolute left-[-13px] top-0 size-6 rounded-full bg-[#10B981] flex items-center justify-center">
                  <div className="size-3 rounded-full bg-white" />
                </div>
                <div className="mb-2">
                  <span className="inline-block px-4 py-1 bg-[#10B981] text-white rounded-full text-[14px] font-bold">2028-2029</span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-bold mb-2">글로벌 진출</h3>
                <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6]">
                  아시아 시장 진출, 국제 품질 인증 획득, 순환경제 교육 센터 개소, 해외 파트너십 확대
                </p>
              </div>

              {/* 2030 */}
              <div className="relative pl-8 border-l-4 border-[#8B5CF6]">
                <div className="absolute left-[-13px] top-0 size-6 rounded-full bg-[#8B5CF6] flex items-center justify-center">
                  <div className="size-3 rounded-full bg-white" />
                </div>
                <div className="mb-2">
                  <span className="inline-block px-4 py-1 bg-[#8B5CF6] text-white rounded-full text-[14px] font-bold">2030</span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-bold mb-2">비전 달성</h3>
                <div className="space-y-2">
                  <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6]">
                    <span className="font-bold text-[#8B5CF6]">✓</span> 탄소중립 달성 및 넷제로 공장 운영
                  </p>
                  <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6]">
                    <span className="font-bold text-[#8B5CF6]">✓</span> 대한민국 1위 순환 골재 기업 입지 확립
                  </p>
                  <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6]">
                    <span className="font-bold text-[#8B5CF6]">✓</span> 아시아-태평양 순환경제 허브 구축
                  </p>
                  <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6]">
                    <span className="font-bold text-[#8B5CF6]">✓</span> 연간 순환 골재 생산량 100만 톤 달성
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative p-8 md:p-12 lg:p-16 text-center overflow-hidden"
        >
          {/* 배경 이미지 */}
          <img 
            src={closingBgImage} 
            alt="지속 가능한 미래" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* 텍스트 콘텐츠 */}
          <div className="relative z-10">
            <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-['Gmarket_Sans_TTF:Bold',_sans-serif] mb-6 text-white drop-shadow-lg">
              함께 만들어가는 지속 가능한 미래
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] max-w-[900px] mx-auto text-white drop-shadow-md">
              하이콘코리아는 순환경제 생태계를 선도하며, 자연과 인간이 공존하는 지속 가능한 미래를 만들어갑니다.
              <br />
              <span className="block mt-4 opacity-90">우리의 혁신이 곧 지구의 미래입니다.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
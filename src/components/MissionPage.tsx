import { Target, Shield, Recycle, Lightbulb, Users, Heart, TrendingUp, CheckCircle2, Building2, Leaf, Award, Zap } from "lucide-react";
import { motion } from "motion/react";
import { PageHeader } from "./PageHeader";
import missionBgImage from "figma:asset/c6d21d9c140a2effc53c9d84ed24f8d10a318312.png";
import closingBgImage from "figma:asset/fbd08868a015eab4bb7422e7bad54a7c99af56b5.png";

interface MissionPageProps {
  onBack: () => void;
  onStaffAuth?: () => void;
  onAboutClick?: () => void;
  onServicesClick?: () => void;
  onVisionClick?: () => void;
  onMissionClick?: () => void;
  onTrendsClick?: () => void;
  onPurchaseClick?: () => void;
}

export function MissionPage({ onBack, onStaffAuth, onAboutClick, onServicesClick, onVisionClick, onMissionClick, onTrendsClick, onPurchaseClick }: MissionPageProps) {
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
            <span className="block font-['Gmarket_Sans_TTF:Bold',_sans-serif]">하이콘코리아의 미션</span>
            <span className="block text-[#0066CC] font-bold">Our Mission & Strategy</span>
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 leading-[1.7] max-w-[800px]">
            "자연 그대로의 자연"이라는 비전을 실현하기 위해, 하이콘코리아는 6가지 핵심 미션과 구체적인 실행 전략으로 순환경제 생태계를 선도합니다.
          </p>
        </motion.div>

        {/* Core Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <div className="bg-[#0066CC] text-white p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* 배경 이미지 */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${missionBgImage})`,
              }}
            />
            
            {/* 콘텐츠 */}
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-8">
                <Target className="size-12 md:size-16 flex-shrink-0 drop-shadow-lg" />
                <div>
                  <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-['Gmarket_Sans_TTF:Bold',_sans-serif] mb-4 drop-shadow-lg">
                    우리의 사명
                  </h2>
                  <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] drop-shadow-lg">
                    폐기물을 자원으로, 자원을 순환으로, 순환을 자연으로 되돌리는 완벽한 순환 생태계를 구축하여, 
                    지속 가능한 건설 산업과 깨끗한 환경을 미래 세대에게 물려줍니다.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/20 p-6 border border-white/30 drop-shadow-lg">
                  <h3 className="text-[18px] md:text-[20px] mb-2 font-bold">100% 순환</h3>
                  <p className="text-[14px] md:text-[15px] opacity-90">
                    모든 폐기물을 재생 가능한 자원으로 전환
                  </p>
                </div>
                <div className="bg-white/20 p-6 border border-white/30 drop-shadow-lg">
                  <h3 className="text-[18px] md:text-[20px] mb-2 font-bold">Zero Waste</h3>
                  <p className="text-[14px] md:text-[15px] opacity-90">
                    매립·소각 제로를 향한 지속적인 도전
                  </p>
                </div>
                <div className="bg-white/20 p-6 border border-white/30 drop-shadow-lg">
                  <h3 className="text-[18px] md:text-[20px] mb-2 font-bold">Net Zero</h3>
                  <p className="text-[14px] md:text-[15px] opacity-90">
                    2030 탄소중립을 실현하는 친환경 공장
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 6 Core Missions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="size-8 text-[#E63946]" />
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-['Gmarket_Sans_TTF:Bold',_sans-serif]">
              6대 핵심 미션
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission 1: 폐기물 100% 자원화 */}
            <div className="bg-white border-2 border-blue-100 p-8 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Recycle className="size-8 text-white" />
                  </div>
                  <div>
                    <span className="text-[12px] px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold">Mission 01</span>
                    <h3 className="text-[20px] md:text-[24px] mt-2 font-bold">폐기물 100% 자원화</h3>
                  </div>
                </div>
              </div>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-[1.7] mb-6">
                건설 폐기물을 단순 처리하는 것이 아니라, 고품질 순환 골재로 100% 전환하여 
                자연으로 되돌리는 완벽한 자원 순환 체계를 구축합니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">스마트 선별 시스템</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      AI와 IoT 기술로 폐기물을 자동 선별하고 품질별로 분류
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">다단계 파쇄·분쇄 공정</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      3단계 파쇄 공정으로 최적 입도의 재생 골재 생산
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">불순물 제로 기술</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      자력 선별, 풍력 선별, 수선별 등으로 순도 99.5% 이상 달성
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-gray-500">목표 달성률</span>
                  <span className="text-[14px] font-bold text-blue-600">2030년 100%</span>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '78%' }} />
                </div>
                <p className="text-[11px] text-gray-400 mt-1">현재 78% (2025년 기준)</p>
              </div>
            </div>

            {/* Mission 2: 최고 품질의 순환 골재 생산 */}
            <div className="bg-white border-2 border-green-100 p-8 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                    <Award className="size-8 text-white" />
                  </div>
                  <div>
                    <span className="text-[12px] px-3 py-1 bg-green-100 text-green-700 rounded-full font-bold">Mission 02</span>
                    <h3 className="text-[20px] md:text-[24px] mt-2 font-bold">최고 품질 순환 골재</h3>
                  </div>
                </div>
              </div>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-[1.7] mb-6">
                천연 골재와 동등하거나 우수한 품질의 재생 골재를 생산하여 
                건설 산업의 신뢰를 확보하고 순환 골재 시장을 확대합니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">KS 인증 품질 기준 초과 달성</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      한국산업표준 재생골재 1급 인증 기준 120% 충족
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">실시간 품질 모니터링</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      전 공정 품질 데이터 수집 및 자동 피드백 시스템 구축
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">다양한 용도별 제품 라인업</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      도로, 건축, 토목, 조경 등 맞춤형 골재 제품군 개발
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] text-gray-500 mb-1">품질 만족도</p>
                    <p className="text-[18px] font-bold text-green-600">95.8%</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 mb-1">재구매율</p>
                    <p className="text-[18px] font-bold text-green-600">92.3%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission 3: 친환경 기술 혁신 */}
            <div className="bg-white border-2 border-purple-100 p-8 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="size-8 text-white" />
                  </div>
                  <div>
                    <span className="text-[12px] px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-bold">Mission 03</span>
                    <h3 className="text-[20px] md:text-[24px] mt-2 font-bold">친환경 기술 혁신</h3>
                  </div>
                </div>
              </div>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-[1.7] mb-6">
                지속적인 R&D 투자와 첨단 기술 도입으로 친환경 공정을 혁신하고 
                순환 골재 산업의 기술 표준을 선도합니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">무공해 건식 공정 개발</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      물 사용을 최소화하고 분진 발생을 90% 감소시킨 신공정
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">재생에너지 통합 시스템</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      태양광 발전과 에너지 회수 장치로 전력 자급률 60% 달성
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">AI 기반 공정 최적화</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      머신러닝으로 에너지 효율 20% 향상 및 생산성 극대화
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] text-gray-500">연간 R&D 투자</span>
                  <span className="text-[14px] font-bold text-purple-600">매출의 5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-gray-500">특허 출원</span>
                  <span className="text-[14px] font-bold text-purple-600">12건/년</span>
                </div>
              </div>
            </div>

            {/* Mission 4: 지속 가능한 파트너십 */}
            <div className="bg-white border-2 border-orange-100 p-8 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <Users className="size-8 text-white" />
                  </div>
                  <div>
                    <span className="text-[12px] px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-bold">Mission 04</span>
                    <h3 className="text-[20px] md:text-[24px] mt-2 font-bold">파트너십 구축</h3>
                  </div>
                </div>
              </div>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-[1.7] mb-6">
                건설사, 철거업체, 지자체와의 긴밀한 협력 네트워크를 구축하여 
                순환 골재 생태계 전체가 상생할 수 있는 기반을 마련합니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">전략적 제휴 확대</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      주요 건설사 및 공공기관과 장기 공급 계약 체결
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">디지털 플랫폼 운영</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      온라인 파트너 신청 및 실시간 물량 매칭 시스템 구축
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">상생 협력 프로그램</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      기술 지원, 교육, 공동 마케팅 등 파트너 성장 지원
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] text-gray-500 mb-1">협력 파트너</p>
                    <p className="text-[18px] font-bold text-orange-600">158개사</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 mb-1">파트너 만족도</p>
                    <p className="text-[18px] font-bold text-orange-600">4.7/5.0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission 5: 환경 안전 문화 */}
            <div className="bg-white border-2 border-cyan-100 p-8 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Shield className="size-8 text-white" />
                  </div>
                  <div>
                    <span className="text-[12px] px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full font-bold">Mission 05</span>
                    <h3 className="text-[20px] md:text-[24px] mt-2 font-bold">환경 안전 문화</h3>
                  </div>
                </div>
              </div>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-[1.7] mb-6">
                직원의 안전과 건강을 최우선으로 하며, 환경 법규를 준수하고 
                지역사회와 상생하는 책임 있는 기업 문화를 정착시킵니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">무재해 안전 경영</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      정기 안전 교육, 위험 요인 사전 제거, 스마트 안전 관리 시스템
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">환경오염 Zero 달성</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      대기·수질·소음·진동 배출 기준 50% 이하 유지
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">지역사회 환경 개선</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      녹지 조성, 환경 봉사, 지역 환경 모니터링 지원
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] text-gray-500">무재해 기록</span>
                  <span className="text-[14px] font-bold text-cyan-600">1,247일</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-gray-500">환경법규 위반</span>
                  <span className="text-[14px] font-bold text-cyan-600">0건</span>
                </div>
              </div>
            </div>

            {/* Mission 6: 사회적 책임 */}
            <div className="bg-white border-2 border-rose-100 p-8 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center flex-shrink-0">
                    <Heart className="size-8 text-white" />
                  </div>
                  <div>
                    <span className="text-[12px] px-3 py-1 bg-rose-100 text-rose-700 rounded-full font-bold">Mission 06</span>
                    <h3 className="text-[20px] md:text-[24px] mt-2 font-bold">사회적 책임</h3>
                  </div>
                </div>
              </div>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-[1.7] mb-6">
                기업 시민으로서 사회적 가치를 창출하고, 순환경제 인식 확산과 
                환경 교육을 통해 더 나은 사회를 만드는 데 기여합니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">일자리 창출 및 인재 양성</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      청년·여성 고용 확대, 전문 기술 교육 프로그램 운영
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">순환경제 교육 캠페인</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      학교·지역사회 대상 환경 교육 및 공장 견학 프로그램
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">취약계층 지원 활동</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-500">
                      재생 자재 기부, 지역 복지시설 지원, 자선 프로그램 운영
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] text-gray-500 mb-1">사회공헌 활동</p>
                    <p className="text-[18px] font-bold text-rose-600">년 48회</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 mb-1">교육 참여자</p>
                    <p className="text-[18px] font-bold text-rose-600">1,250명</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Implementation Strategy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="size-8 text-[#E63946]" />
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-['Gmarket_Sans_TTF:Bold',_sans-serif]">
              미션 실행 전략
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 단기 전략 (2025-2026) */}
            <div className="bg-white border-2 border-blue-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Zap className="size-6 text-white" />
                </div>
                <div>
                  <span className="text-[12px] px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold">2025-2026</span>
                  <h3 className="text-[20px] md:text-[22px] font-bold mt-2">단기 전략</h3>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="size-2.5 rounded-full bg-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-[14px] md:text-[15px] font-bold mb-1">스마트 팩토리 완성</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-600">
                      전 공정 자동화 및 IoT 센서 설치로 실시간 데이터 기반 생산 체계 구축
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="size-2.5 rounded-full bg-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-[14px] md:text-[15px] font-bold mb-1">품질 인증 강화</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-600">
                      국내 KS 인증 외 국제 품질 인증(ISO) 획득으로 신뢰도 제고
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="size-2.5 rounded-full bg-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-[14px] md:text-[15px] font-bold mb-1">파트너 네트워크 확대</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-600">
                      주요 건설사 50개사와 장기 공급 계약 체결 및 디지털 플랫폼 오픈
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* 중장기 전략 (2027-2030) */}
            <div className="bg-white border-2 border-green-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 rounded-full bg-green-600 flex items-center justify-center">
                  <Building2 className="size-6 text-white" />
                </div>
                <div>
                  <span className="text-[12px] px-3 py-1 bg-green-100 text-green-700 rounded-full font-bold">2027-2030</span>
                  <h3 className="text-[20px] md:text-[22px] font-bold mt-2">중장기 전략</h3>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="size-2.5 rounded-full bg-green-600" />
                  </div>
                  <div>
                    <h4 className="text-[14px] md:text-[15px] font-bold mb-1">탄소중립 공장 전환</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-600">
                      재생에너지 100% 전환 및 탄소 포집 기술 도입으로 넷제로 달성
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="size-2.5 rounded-full bg-green-600" />
                  </div>
                  <div>
                    <h4 className="text-[14px] md:text-[15px] font-bold mb-1">글로벌 시장 진출</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-600">
                      아시아 주요 국가 진출 및 국제 파트너십 구축으로 시장 확대
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="size-2.5 rounded-full bg-green-600" />
                  </div>
                  <div>
                    <h4 className="text-[14px] md:text-[15px] font-bold mb-1">순환경제 교육 센터 설립</h4>
                    <p className="text-[12px] md:text-[13px] text-gray-600">
                      R&D 센터 및 교육 시설 개소로 산업 전문 인력 양성 및 기술 표준화
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Key Performance Indicators */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="size-8 text-[#E63946]" />
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-['Gmarket_Sans_TTF:Bold',_sans-serif]">
              핵심 성과 지표 (KPI)
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="size-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                  <Recycle className="size-10 text-white" />
                </div>
                <h3 className="text-[14px] text-gray-500 mb-2">재활용률</h3>
                <p className="text-[32px] md:text-[36px] font-bold text-blue-600">95%</p>
                <p className="text-[12px] text-gray-400 mt-1">2030년 목표</p>
              </div>
              <div className="text-center">
                <div className="size-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                  <Leaf className="size-10 text-white" />
                </div>
                <h3 className="text-[14px] text-gray-500 mb-2">탄소 감축</h3>
                <p className="text-[32px] md:text-[36px] font-bold text-green-600">-80%</p>
                <p className="text-[12px] text-gray-400 mt-1">2019년 대비</p>
              </div>
              <div className="text-center">
                <div className="size-20 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                  <Award className="size-10 text-white" />
                </div>
                <h3 className="text-[14px] text-gray-500 mb-2">품질 만족도</h3>
                <p className="text-[32px] md:text-[36px] font-bold text-purple-600">98%</p>
                <p className="text-[12px] text-gray-400 mt-1">고객 평가</p>
              </div>
              <div className="text-center">
                <div className="size-20 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                  <Users className="size-10 text-white" />
                </div>
                <h3 className="text-[14px] text-gray-500 mb-2">파트너사</h3>
                <p className="text-[32px] md:text-[36px] font-bold text-orange-600">200+</p>
                <p className="text-[12px] text-gray-400 mt-1">협력 네트워크</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-white p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* 배경 이미지 */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${closingBgImage})`,
            }}
          />
          
          {/* 콘텐츠 */}
          <div className="relative z-10">
            <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-['Gmarket_Sans_TTF:Bold',_sans-serif] mb-6 drop-shadow-lg">
              명확한 미션으로 비전을 실현합니다
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] max-w-[900px] mx-auto drop-shadow-lg">
              하이콘코리아는 6대 핵심 미션과 구체적인 실행 전략을 바탕으로<br />
              "자연 그대로의 자연"이라는 비전을 반드시 달성하겠습니다.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-white/20 border border-white/30 rounded-full drop-shadow-lg">
                <p className="text-[14px] md:text-[15px] font-bold">투명한 실행</p>
              </div>
              <div className="px-6 py-3 bg-white/20 border border-white/30 rounded-full drop-shadow-lg">
                <p className="text-[14px] md:text-[15px] font-bold">지속적인 혁신</p>
              </div>
              <div className="px-6 py-3 bg-white/20 border border-white/30 rounded-full drop-shadow-lg">
                <p className="text-[14px] md:text-[15px] font-bold">책임 있는 성장</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
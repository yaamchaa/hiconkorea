import { useState } from "react";
import { motion } from "motion/react";
import { X, Recycle, Factory, TreePine, Shield, CheckCircle, TrendingUp, Users2, Handshake, Settings, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PartnerApplicationDialog } from "./PartnerApplicationDialog";
import imgHeroBackground from "figma:asset/d717a708d77282b46275acb62d298b14a1f08a2e.png";
import imgPartnerCTA from "figma:asset/1112d7838d08bc65b9494ceefa628ab04a3a1549.png";

interface ServicesPageProps {
  onClose: () => void;
}

export function ServicesPage({ onClose }: ServicesPageProps) {
  const [isPartnerDialogOpen, setIsPartnerDialogOpen] = useState(false);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
    >
      {/* 헤더 */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <h1 className="text-2xl sm:text-3xl">함께하는</h1>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="닫기"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* 히어로 섹션 */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <img 
            src={imgHeroBackground} 
            alt="함께하는" 
            className="w-full h-full object-cover"
          />
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        
        {/* 텍스트 콘텐츠 */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 font-['Gmarket_Sans']">
                순환경제를 선도하는 혁신적인 서비스
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                폐기물을 가치 있는 자원으로, 파트너와 함께 지속 가능한 미래를 만듭니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 주요 서비스 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">우리의 서비스</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Recycle,
              title: "순환골재 생산",
              description: "폐기물을 최첨단 기술로 처리하여 고품질 순환골재를 생산합니다",
              features: ["A라인: 대규모 처리", "B라인: 정밀 선별", "C라인: 특수 가공"],
              color: "from-green-400 to-emerald-500"
            },
            {
              icon: Factory,
              title: "폐기물 재활용",
              description: "체계적인 분류와 처리로 폐기물의 가치를 극대화합니다",
              features: ["효율적 분류 시스템", "친환경 처리 공정", "품질 검증 프로세스"],
              color: "from-blue-400 to-cyan-500"
            },
            {
              icon: TreePine,
              title: "환경 솔루션",
              description: "지속 가능한 환경 관리 솔루션을 제공하여 탄소중립을 실현 합니다",
              features: ["맞춤형 환경 컨설팅", "폐기물 관리 최적화", "친환경 인증 지원"],
              color: "from-purple-400 to-pink-500"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-transparent hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 재활용 프로세스 */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50/30 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">순환골재 생산 프로세스</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              체계적인 프로세스로 최고 품질의 순환골재를 생산합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "폐기물 수집",
                description: "다양한 폐기물을 체계적으로 수집하고 분류합니다",
                icon: Factory
              },
              {
                step: "02",
                title: "정밀 선별",
                description: "최첨단 설비로 폐기물을 정밀하게 선별합니다",
                icon: Settings
              },
              {
                step: "03",
                title: "재생 처리",
                description: "친환경 공정으로 순환골재를 생산합니다",
                icon: Zap
              },
              {
                step: "04",
                title: "품질 검증",
                description: "엄격한 품질 기준으로 검증하여 출하합니다",
                icon: Shield
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-blue-200 group">
                  <div className="text-6xl bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 opacity-20 group-hover:opacity-30 transition-opacity">
                    {process.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <process.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl mb-2">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 파트너십 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">파트너와 함께 성장합니다</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <Handshake className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl mb-2">신뢰할 수 있는 파트너</h3>
                <p className="text-gray-600 leading-relaxed">
                  투명한 거래와 정확한 품질로 고객의 신뢰를 얻습니다
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl mb-2">지속적인 성장</h3>
                <p className="text-gray-600 leading-relaxed">
                  파트너의 성공이 곧 우리의 성공입니다
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <Users2 className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl mb-2">맞춤형 솔루션</h3>
                <p className="text-gray-600 leading-relaxed">
                  각 파트너의 니즈에 맞는 최적의 서비스를 제공합니다
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl sm:text-5xl bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                100+
              </div>
              <p className="text-gray-600">파트너사</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl sm:text-5xl bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <p className="text-gray-600">만족도</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl sm:text-5xl bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className="text-gray-600">고객 지원</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl sm:text-5xl bg-gradient-to-br from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                A+
              </div>
              <p className="text-gray-600">품질 등급</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 품질 관리 */}
      <section className="bg-gradient-to-br from-gray-50 to-purple-50/30 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">철저한 품질 관리</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              모든 제품은 엄격한 품질 기준을 통과한 후에만 출하됩니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "입고 검사",
                description: "폐기물 입고 시 성분과 상태를 철저히 검사합니다",
                percentage: "100%"
              },
              {
                title: "공정 모니터링",
                description: "생산 전 과정을 실시간으로 모니터링하고 관리합니다",
                percentage: "실시간"
              },
              {
                title: "출하 검증",
                description: "최종 제품의 품질을 다시 한번 검증합니다",
                percentage: "2중 검증"
              }
            ].map((quality, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full border border-gray-100 hover:border-purple-200 group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-2xl bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                    {quality.percentage}
                  </div>
                  <h3 className="text-xl mb-3">{quality.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{quality.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="relative py-16 sm:py-20 pb-24 sm:pb-32 overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <img
            src={imgPartnerCTA}
            alt="함께 성장할 파트너를 기다립니다."
            className="w-full h-full object-cover"
          />
        </div>

        {/* 컨텐츠 */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-6 drop-shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              함께 성장할 파트너를 기다립니다.
            </h2>
            <p className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-md" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.6)' }}>
              하이콘 코리아와 함께 지속 가능한 비즈니스를 만들어가세요.
            </p>
            <button
              onClick={() => setIsPartnerDialogOpen(true)}
              className="bg-black/15 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-black/25 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-light"
            >
              파트너 신청
            </button>
          </motion.div>
        </div>
      </section>

      {/* 파트너 신청 다이얼로그 */}
      <PartnerApplicationDialog 
        open={isPartnerDialogOpen}
        onOpenChange={setIsPartnerDialogOpen}
      />
    </motion.div>
  );
}
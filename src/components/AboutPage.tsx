import { motion } from "motion/react";
import { X, Leaf, Users, Award, Heart, Target, Sparkles, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgHeroBackground from "figma:asset/e18f084be17f5e23012065b4f67b9c12df19fdda.png";
import imgTeamCulture from "figma:asset/9af27ed3b544c6f81c42010ebd510630e6d82bcf.png";
import imgLocalEnvironment from "figma:asset/4f8b7d0796feaf352fbdfcb0c4fcee735244ef9c.png";
import imgSustainableWorld from "figma:asset/8d9c1743023501d797011cecab1af3bfed816511.png";
import imgRecycledAggregate from "figma:asset/59e154d21c37db3766b5bf5a6d73ecd2b4fcc2d2.png";

interface AboutPageProps {
  onClose: () => void;
}

export function AboutPage({ onClose }: AboutPageProps) {
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
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full" />
            <h1 className="text-2xl sm:text-3xl">우리는</h1>
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

      {/* 히어로 섹션 - 공장 전경 이미지 */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img 
          src={imgHeroBackground} 
          alt="하이콘 코리아 배경"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h2 className="text-5xl sm:text-6xl md:text-[96px] mb-4 font-[Gmarket_Sans]">하이콘 코리아</h2>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90">
              자연을 지키는 순환경제의 선도기업
            </p>
          </motion.div>
        </div>
      </section>

      {/* 회사 소개 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">우리의 이야기</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8 rounded-full" />
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            하이콘 코리아는 폐기물을 새로운 자원으로 재탄생시키는 기업입니다.<br />
            우리는 환경을 생각하고, 미래를 준비하며, 지속 가능한 내일을 만들어갑니다.
          </p>
        </motion.div>

        {/* 핵심 가치 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16">
          {[
            {
              icon: Leaf,
              title: "환경 보호",
              description: "폐기물을 순환골재로 재생하여 자연 훼손을 최소화합니다",
              color: "from-green-400 to-emerald-500"
            },
            {
              icon: Target,
              title: "품질 혁신",
              description: "최고 품질의 순환골재를 생산하여 고객 만족을 실현합니다",
              color: "from-blue-400 to-cyan-500"
            },
            {
              icon: Heart,
              title: "사회 책임",
              description: "지역사회와 함께 성장하며 환경 가치를 확산합니다",
              color: "from-purple-400 to-pink-500"
            },
            {
              icon: Sparkles,
              title: "기술 선도",
              description: "첨단 기술로 순환경제 산업을 선도해 나갑니다",
              color: "from-orange-400 to-red-500"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-transparent hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 팀 문화 */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50/30 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">함께 성장하는 문화</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">30명의 전문가 팀</h3>
                  <p className="text-gray-600 leading-relaxed">
                    각 분야의 전문가들이 모여 최고의 시너지를 발휘합니다
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">전문성과 열정</h3>
                  <p className="text-gray-600 leading-relaxed">
                    끊임없는 학습과 혁신으로 업계를 선도합니다
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">환경을 위한 헌신</h3>
                  <p className="text-gray-600 leading-relaxed">
                    지구의 미래를 위해 매일 최선을 다합니다
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
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={imgTeamCulture}
                alt="하이콘 코리아 팀"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 환경 보호 노력 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">환경을 위한 우리의 노력</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8 rounded-full" />
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            폐기물을 귀중한 자원으로 전환하여 지속 가능한 미래를 만들어갑니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "자원 순환",
              description: "폐기물을 고품질 순환골재로 재탄생시켜 천연자원 사용을 줄입니다",
              image: imgRecycledAggregate
            },
            {
              title: "탄소 저감",
              description: "효율적인 생산 공정으로 탄소 배출을 최소화합니다",
              image: "https://images.unsplash.com/photo-1758614351900-6398341d5b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHRlY2hub2xvZ3klMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2MTk2MjIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            },
            {
              title: "지역 환경",
              description: "지역사회와 협력하여 깨끗한 환경을 만들어갑니다",
              image: imgLocalEnvironment
            }
          ].map((effort, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  {typeof effort.image === 'string' ? (
                    <ImageWithFallback
                      src={effort.image}
                      alt={effort.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={effort.image}
                      alt={effort.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3">{effort.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{effort.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="relative py-16 sm:py-20 pb-24 sm:pb-32 overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <img
            src={imgSustainableWorld}
            alt="지속 가능한 미래"
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
              지속 가능한 세상 미래를 함께하는,
            </h2>
            <p className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-md" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.6)' }}>
              하이콘 코리아와 함께 환경을 보호하고 가치를 창출하세요
            </p>
            <button
              onClick={onClose}
              className="bg-black/15 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-black/25 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-light"
            >
              HOME
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
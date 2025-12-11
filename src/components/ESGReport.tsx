import { Leaf, Users, Shield, TrendingUp, Recycle, Factory, Award, Target, CheckCircle2, Heart, Zap, Droplet, Wind } from 'lucide-react';

export function ESGReport() {
  return (
    <div className="bg-white w-full max-w-[210mm] mx-auto">
      {/* 커버 페이지 */}
      <div className="min-h-[297mm] bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white p-16 flex flex-col justify-between relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-8">
            ESG REPORT 2024
          </div>
          <h1 className="text-7xl mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
            ESG 보고서
          </h1>
          <div className="h-2 w-32 bg-white mb-8"></div>
          <p className="text-3xl mb-4">지속 가능한 미래를 위한 책임 경영</p>
          <p className="text-xl text-green-100">
            Environmental, Social, and Governance Report
          </p>
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Leaf className="h-12 w-12 mb-3" />
              <div className="text-2xl mb-1">Environment</div>
              <div className="text-green-100">환경 경영</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Users className="h-12 w-12 mb-3" />
              <div className="text-2xl mb-1">Social</div>
              <div className="text-green-100">사회적 책임</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Shield className="h-12 w-12 mb-3" />
              <div className="text-2xl mb-1">Governance</div>
              <div className="text-green-100">지배구조</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-green-100">주식회사 하이콘 코리아</p>
            <p className="text-sm text-green-200">2024년 11월</p>
          </div>
        </div>
      </div>

      {/* CEO 메시지 */}
      <div className="min-h-[297mm] p-12 flex flex-col justify-center bg-white">
        <div className="mb-8">
          <div className="text-green-600 mb-2">CEO MESSAGE</div>
          <h2 className="text-4xl mb-4">대표이사 인사말</h2>
          <div className="h-1 w-24 bg-green-600"></div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
            <p className="text-xl text-gray-800 leading-relaxed mb-4">
              "<strong className="text-green-600">지속 가능한 미래</strong>를 만들어가는 것이<br />
              하이콘 코리아의 사명입니다."
            </p>
            <div className="text-base text-gray-700 space-y-3 leading-relaxed">
              <p>존경하는 이해관계자 여러분,</p>
              <p>
                1996년 설립 이래 하이콘 코리아는 폐기물 재생 순환골재 생산을 통해 
                환경 보호와 자원 순환이라는 두 마리 토끼를 잡기 위해 노력해 왔습니다.
              </p>
              <p>
                기후변화와 자원 고갈이라는 전 지구적 과제 앞에서, 우리는 단순한 수익 창출을 넘어 
                <strong className="text-green-600"> ESG 경영</strong>을 통한 사회적 가치 창출에 집중하고 있습니다.
              </p>
              <p>
                <strong>환경(E)</strong> 측면에서는 연간 27만톤의 건설폐기물을 재활용하여 
                천연자원 채취를 줄이고 탄소 배출을 저감하고 있습니다.
              </p>
              <p>
                <strong>사회(S)</strong> 측면에서는 안전한 작업환경 조성과 지역사회 발전을 위해 
                지속적으로 투자하고 있습니다.
              </p>
              <p>
                <strong>지배구조(G)</strong> 측면에서는 투명한 경영과 윤리적 의사결정을 
                최우선 가치로 삼고 있습니다.
              </p>
              <p className="text-lg text-green-600 mt-4">
                앞으로도 하이콘 코리아는 ESG 경영을 통해 
                지속 가능한 미래를 만들어가는 데 앞장서겠습니다.
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-base text-gray-600 mb-2">주식회사 하이콘 코리아</p>
            <p className="text-xl">대표이사 <span className="text-gray-400">[추후 입력]</span></p>
          </div>
        </div>
      </div>

      {/* Environment - 환경 경영 */}
      <div className="min-h-[297mm] p-12 bg-white">
        <div className="mb-8">
          <div className="text-green-600 mb-2 flex items-center gap-2">
            <Leaf className="h-6 w-6" />
            ENVIRONMENT
          </div>
          <h2 className="text-4xl mb-4">환경 경영</h2>
          <div className="h-1 w-24 bg-green-600"></div>
        </div>

        <div className="space-y-5">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl">
            <h3 className="text-xl mb-4">2024년 환경 성과</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <Wind className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl mb-1">15,000톤</div>
                <div className="text-sm text-green-100">CO₂ 감축</div>
              </div>
              <div className="text-center">
                <Recycle className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl mb-1">100%</div>
                <div className="text-sm text-green-100">재활용률</div>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl mb-1">85%</div>
                <div className="text-sm text-green-100">에너지 효율</div>
              </div>
              <div className="text-center">
                <Droplet className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl mb-1">90%</div>
                <div className="text-sm text-green-100">수자원 재활용</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border rounded-xl p-5">
              <h3 className="text-lg mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                탄소중립 로드맵
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">2024년 (기준년도)</span>
                  <span className="text-gray-600">100%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">2030년 목표</span>
                  <span className="text-orange-600">-40%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">2040년 목표</span>
                  <span className="text-orange-600">-70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">2050년 목표</span>
                  <span className="text-green-600">Net Zero</span>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-xl p-5">
              <h3 className="text-lg mb-3 flex items-center gap-2">
                <Recycle className="h-5 w-5 text-green-600" />
                순환자원 실적
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">폐콘크리트 처리</span>
                  <span className="text-green-600">18만톤/년</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">폐아스콘 처리</span>
                  <span className="text-green-600">6만톤/년</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">순환골재 생산</span>
                  <span className="text-green-600">27만톤/년</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">재활용률</span>
                  <span className="text-green-600">100%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-xl">
            <h3 className="text-lg mb-3">정부 정책 연계</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-lg">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="mb-1">탄소중립 녹색성장 기본법</div>
                    <div className="text-xs text-gray-600">2050 탄소중립 시나리오 이행</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="mb-1">자원순환기본법</div>
                    <div className="text-xs text-gray-600">순환자원 의무 사용 제도 대응</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="mb-1">K-택소노미 가이드라인</div>
                    <div className="text-xs text-gray-600">녹색경제활동 인정 사업</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="mb-1">순환경제 사회 전환 촉진법</div>
                    <div className="text-xs text-gray-600">자원순환성 제고 기여</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h3 className="text-lg mb-3">환경 투자 계획</h3>
            <div className="space-y-2">
              {[
                { year: '2025', investment: '50억원', focus: '친환경 설비 도입 및 현대화' },
                { year: '2026', investment: '30억원', focus: '스마트 에너지 관리 시스템 구축' },
                { year: '2027', investment: '25억원', focus: '재생에너지 설비 투자 (태양광)' },
                { year: '2028', investment: '20억원', focus: '탄소포집 기술 도입 검토' },
              ].map((plan, idx) => (
                <div key={idx} className="flex items-center gap-4 p-2 bg-green-50 rounded-lg text-sm">
                  <div className="w-14 text-green-600">{plan.year}</div>
                  <div className="w-20 text-gray-900">{plan.investment}</div>
                  <div className="flex-1 text-gray-700">{plan.focus}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social - 사회적 책임 */}
      <div className="min-h-[297mm] p-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="mb-8">
          <div className="text-blue-600 mb-2 flex items-center gap-2">
            <Users className="h-6 w-6" />
            SOCIAL
          </div>
          <h2 className="text-4xl mb-4">사회적 책임</h2>
          <div className="h-1 w-24 bg-blue-600"></div>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border-2 border-blue-600 rounded-xl p-5 text-center">
              <Users className="h-10 w-10 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl text-blue-600 mb-1">[입력예정]</div>
              <div className="text-sm text-gray-700">임직원 수</div>
            </div>
            <div className="bg-white border-2 border-green-600 rounded-xl p-5 text-center">
              <Shield className="h-10 w-10 text-green-600 mx-auto mb-2" />
              <div className="text-2xl text-green-600 mb-1">0건</div>
              <div className="text-sm text-gray-700">중대 안전사고 (2024)</div>
            </div>
            <div className="bg-white border-2 border-orange-600 rounded-xl p-5 text-center">
              <Heart className="h-10 w-10 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl text-orange-600 mb-1">95%</div>
              <div className="text-sm text-gray-700">직원 만족도</div>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h3 className="text-lg mb-4">산업안전보건 경영</h3>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <h4 className="text-base mb-3 text-blue-600">안전 관리 체계</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-gray-700">ISO 45001 안전보건경영시스템 인증</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-gray-700">전 직원 안전교육 연 120시간 이수</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-gray-700">월 1회 정기 안전점검 실시</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-gray-700">스마트 안전 모니터링 시스템 운영</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-base mb-3 text-blue-600">복리후생</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-gray-700">4대 보험 100% 가입</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-gray-700">건강검진 연 1회 지원</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-gray-700">자녀 학자금 지원</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-gray-700">명절 상여금 및 성과급 지급</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-5 rounded-xl">
            <h3 className="text-lg mb-4">인재 육성 및 개발</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-lg">
                <div className="text-sm text-blue-600 mb-1">직무 교육</div>
                <div className="text-xs text-gray-700">
                  설비 운영, 품질 관리, 안전 관리 등<br />
                  직무별 전문 교육 프로그램 운영
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <div className="text-sm text-blue-600 mb-1">자격증 취득 지원</div>
                <div className="text-xs text-gray-700">
                  산업안전기사, 품질경영기사 등<br />
                  자격증 취득 비용 100% 지원
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <div className="text-sm text-blue-600 mb-1">외부 교육 지원</div>
                <div className="text-xs text-gray-700">
                  대학원 진학, 전문 교육기관<br />
                  교육비 연간 300만원 한도 지원
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <div className="text-sm text-blue-600 mb-1">승진 및 보상</div>
                <div className="text-xs text-gray-700">
                  역량 기반 공정한 평가와<br />
                  성과에 따른 인센티브 제공
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h3 className="text-lg mb-4">지역사회 공헌</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Heart className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div className="flex-1 text-sm">
                  <div className="mb-1">취약계층 일자리 창출</div>
                  <div className="text-xs text-gray-600">장애인, 고령자 등 우선 채용 프로그램 운영</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Heart className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div className="flex-1 text-sm">
                  <div className="mb-1">지역 인프라 개선</div>
                  <div className="text-xs text-gray-600">지역 도로 정비 및 환경 미화 활동 참여</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Heart className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div className="flex-1 text-sm">
                  <div className="mb-1">환경 교육 프로그램</div>
                  <div className="text-xs text-gray-600">지역 초중고 대상 자원순환 교육 진행</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h3 className="text-lg mb-3">상생 협력</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <div>
                  <div className="mb-1">협력업체 공정 거래</div>
                  <div className="text-xs text-gray-600">표준계약서 사용 및 대금 즉시 지급</div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <div>
                  <div className="mb-1">기술 지원</div>
                  <div className="text-xs text-gray-600">중소 협력사 품질 개선 지원</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Governance - 지배구조 */}
      <div className="min-h-[297mm] p-12 bg-white">
        <div className="mb-8">
          <div className="text-orange-600 mb-2 flex items-center gap-2">
            <Shield className="h-6 w-6" />
            GOVERNANCE
          </div>
          <h2 className="text-4xl mb-4">지배구조</h2>
          <div className="h-1 w-24 bg-orange-600"></div>
        </div>

        <div className="space-y-5">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
            <h3 className="text-xl mb-4 text-center">투명하고 윤리적인 경영</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-lg text-center">
                <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-base mb-1">윤리경영</div>
                <div className="text-xs text-gray-600">윤리강령 준수율 100%</div>
              </div>
              <div className="bg-white p-5 rounded-lg text-center">
                <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-base mb-1">컴플라이언스</div>
                <div className="text-xs text-gray-600">법규 위반 0건</div>
              </div>
              <div className="bg-white p-5 rounded-lg text-center">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-base mb-1">투명성</div>
                <div className="text-xs text-gray-600">정보공개 적시성 100%</div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h3 className="text-lg mb-4">이사회 구성 및 운영</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">이사회 구성</div>
                  <div className="text-base">[추후 입력]</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">이사회 개최</div>
                  <div className="text-base">분기 1회 정기 개최</div>
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-sm text-blue-600 mb-2">이사회 역할</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-600" />
                    <span>경영 전략 및 중요 정책 의결</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-600" />
                    <span>재무제표 승인 및 감사</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-600" />
                    <span>리스크 관리 및 내부통제</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-600" />
                    <span>ESG 전략 수립 및 모니터링</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border rounded-xl p-5">
              <h3 className="text-base mb-3">윤리경영 체계</h3>
              <div className="space-y-2">
                <div className="p-3 bg-orange-50 rounded text-sm">
                  <div className="mb-1">윤리강령</div>
                  <div className="text-xs text-gray-600">
                    임직원 행동 준칙 및 윤리규범 제정
                  </div>
                </div>
                <div className="p-3 bg-orange-50 rounded text-sm">
                  <div className="mb-1">내부 신고 제도</div>
                  <div className="text-xs text-gray-600">
                    부패·비리 익명 신고 채널 운영
                  </div>
                </div>
                <div className="p-3 bg-orange-50 rounded text-sm">
                  <div className="mb-1">윤리 교육</div>
                  <div className="text-xs text-gray-600">
                    전 직원 연 2회 윤리 교육 의무화
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-xl p-5">
              <h3 className="text-base mb-3">리스크 관리</h3>
              <div className="space-y-2">
                <div className="p-3 bg-red-50 rounded text-sm">
                  <div className="mb-1">재무 리스크</div>
                  <div className="text-xs text-gray-600">
                    재무건전성 모니터링 및 유동성 관리
                  </div>
                </div>
                <div className="p-3 bg-red-50 rounded text-sm">
                  <div className="mb-1">운영 리스크</div>
                  <div className="text-xs text-gray-600">
                    설비 안전 점검 및 비상 대응 체계 구축
                  </div>
                </div>
                <div className="p-3 bg-red-50 rounded text-sm">
                  <div className="mb-1">법률 리스크</div>
                  <div className="text-xs text-gray-600">
                    법규 준수 모니터링 및 컴플라이언스 강화
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <h3 className="text-lg mb-4">정보 공개 및 소통</h3>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <h4 className="text-base mb-3 text-orange-600">공시 체계</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>재무정보 분기별 공시</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>ESG 성과 연 1회 공개</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>중요 경영 사항 즉시 공개</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-base mb-3 text-orange-600">이해관계자 소통</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>주주총회 연 1회 개최</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>고객·협력사 간담회 운영</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>지역주민 설명회 정기 개최</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-5 rounded-xl">
            <h3 className="text-base mb-3">정보보안</h3>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="bg-white p-3 rounded text-center">
                <Shield className="h-6 w-6 mx-auto mb-1 text-blue-600" />
                <div>개인정보보호</div>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <Shield className="h-6 w-6 mx-auto mb-1 text-blue-600" />
                <div>데이터 암호화</div>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <Shield className="h-6 w-6 mx-auto mb-1 text-blue-600" />
                <div>접근 권한 관리</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 목표 및 다짐 */}
      <div className="min-h-[297mm] p-12 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex flex-col justify-center">
        <div className="space-y-10">
          <div className="text-center">
            <h2 className="text-4xl mb-4">2030 ESG 목표</h2>
            <div className="h-1 w-32 bg-green-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-xl mb-3 text-green-600">Environment</h3>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-green-50 rounded">
                  <div className="text-gray-900">탄소배출량</div>
                  <div className="text-xl text-green-600">-40%</div>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <div className="text-gray-900">재생에너지 비율</div>
                  <div className="text-xl text-green-600">30%</div>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <div className="text-gray-900">폐기물 재활용률</div>
                  <div className="text-xl text-green-600">100%</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-xl mb-3 text-blue-600">Social</h3>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-blue-50 rounded">
                  <div className="text-gray-900">산업재해율</div>
                  <div className="text-xl text-blue-600">0%</div>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <div className="text-gray-900">직원 교육시간</div>
                  <div className="text-xl text-blue-600">200시간/년</div>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <div className="text-gray-900">지역사회 기여</div>
                  <div className="text-xl text-blue-600">5억원/년</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Shield className="h-12 w-12 text-orange-600 mx-auto mb-3" />
              <h3 className="text-xl mb-3 text-orange-600">Governance</h3>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-orange-50 rounded">
                  <div className="text-gray-900">이사회 독립성</div>
                  <div className="text-xl text-orange-600">50%</div>
                </div>
                <div className="p-3 bg-orange-50 rounded">
                  <div className="text-gray-900">윤리교육 이수율</div>
                  <div className="text-xl text-orange-600">100%</div>
                </div>
                <div className="p-3 bg-orange-50 rounded">
                  <div className="text-gray-900">정보공시 적시성</div>
                  <div className="text-xl text-orange-600">100%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-xl">
            <h3 className="text-2xl mb-4 text-green-600">하이콘 코리아의 약속</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              우리는 <strong className="text-green-600">환경을 보호</strong>하고, 
              <strong className="text-blue-600"> 사회적 가치를 창출</strong>하며, 
              <strong className="text-orange-600"> 투명하게 경영</strong>하는 기업으로서<br />
              지속 가능한 미래를 만들어가겠습니다.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600">
            <p>주식회사 하이콘 코리아</p>
            <p>경기도 [주소 추후 입력]</p>
            <p>Tel: [전화번호 추후 입력] | Email: [이메일 추후 입력]</p>
            <p className="mt-4">본 보고서는 2024년 11월 기준으로 작성되었습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

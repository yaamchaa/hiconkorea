import { Building2, Factory, Award, TrendingUp, Recycle, Users, Globe, Target, CheckCircle2 } from 'lucide-react';

export function CompanyBrochure() {
  return (
    <div className="bg-white w-full max-w-[210mm] mx-auto" style={{ minHeight: '297mm' }}>
      {/* 커버 페이지 */}
      <div className="relative h-[297mm] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white p-16 flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-8">
            COMPANY PROFILE 2024
          </div>
          <h1 className="text-7xl mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
            하이콘 코리아
          </h1>
          <div className="h-2 w-32 bg-white mb-8"></div>
          <p className="text-3xl mb-4">폐기물 재생 순환골재 생산의 선두주자</p>
          <p className="text-xl text-blue-100">
            Pioneering the Future of Recycled Aggregate Production
          </p>
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-3 gap-8 border-t border-white/30 pt-8">
            <div>
              <div className="text-5xl mb-2">28</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl mb-2">27만</div>
              <div className="text-blue-100">연간 처리량 (톤)</div>
            </div>
            <div>
              <div className="text-5xl mb-2">3</div>
              <div className="text-blue-100">생산 라인</div>
            </div>
          </div>
        </div>
      </div>

      {/* 페이지 2: 회사 개요 */}
      <div className="h-[297mm] p-16 flex flex-col">
        <div className="mb-12">
          <div className="text-blue-600 mb-2">ABOUT US</div>
          <h2 className="text-5xl mb-4">회사 개요</h2>
          <div className="h-1 w-24 bg-blue-600"></div>
        </div>

        <div className="grid grid-cols-2 gap-12 flex-1">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-4 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-blue-600" />
                기업 정보
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="grid grid-cols-3 gap-4 py-2 border-b">
                  <div className="text-gray-500">회사명</div>
                  <div className="col-span-2">주식회사 하이콘 코리아</div>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b">
                  <div className="text-gray-500">설립일</div>
                  <div className="col-span-2">1996년</div>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b">
                  <div className="text-gray-500">대표이사</div>
                  <div className="col-span-2">[추후 입력]</div>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b">
                  <div className="text-gray-500">사업자번호</div>
                  <div className="col-span-2">[추후 입력]</div>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b">
                  <div className="text-gray-500">본사 소재지</div>
                  <div className="col-span-2">[추후 입력]</div>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b">
                  <div className="text-gray-500">직원 수</div>
                  <div className="col-span-2">[추후 입력]</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-4 flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                사업 분야
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>건설폐기물 중간처리</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>순환골재 제조 및 판매</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>폐아스콘 재생 및 판매</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>폐콘크리트 순환골재 생산</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl mb-6">핵심 역량</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Factory className="h-5 w-5 text-blue-600" />
                      <div className="text-lg">생산 능력</div>
                    </div>
                    <div className="text-gray-700">연간 22~27만톤 처리 능력을 보유한 3개 생산라인 (A/B/C라인) 운영</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-blue-600" />
                      <div className="text-lg">품질 관리</div>
                    </div>
                    <div className="text-gray-700">엄격한 품질 기준과 인증을 통한 고품질 순환골재 생산</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Recycle className="h-5 w-5 text-blue-600" />
                      <div className="text-lg">환경 경영</div>
                    </div>
                    <div className="text-gray-700">친환경 폐기물 처리 및 자원 순환 시스템 구축</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl text-blue-600 mb-1">71</div>
                  <div className="text-sm text-gray-600">총 설비 수</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">재활용률</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 페이지 3: 비전 & 미션 */}
      <div className="h-[297mm] p-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mb-12">
          <div className="text-blue-600 mb-2">VISION & MISSION</div>
          <h2 className="text-5xl mb-4">우리의 비전</h2>
          <div className="h-1 w-24 bg-blue-600"></div>
        </div>

        <div className="space-y-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-2xl">
            <div className="text-center mb-8">
              <Globe className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-4xl mb-4">지속 가능한 미래를 위한 순환경제 선도 기업</h3>
              <p className="text-xl text-blue-100">
                Leading the Circular Economy for a Sustainable Future
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
              <div className="text-blue-600 mb-4">
                <Recycle className="h-12 w-12" />
              </div>
              <h4 className="text-2xl mb-3">환경 보호</h4>
              <p className="text-gray-600">
                폐기물 재생을 통한 천연자원 보존과 탄소배출 저감으로 환경 보호에 기여합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600">
              <div className="text-green-600 mb-4">
                <TrendingUp className="h-12 w-12" />
              </div>
              <h4 className="text-2xl mb-3">지속 성장</h4>
              <p className="text-gray-600">
                기술 혁신과 품질 향상을 통해 지속 가능한 성장을 추구합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-600">
              <div className="text-orange-600 mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h4 className="text-2xl mb-3">사회 공헌</h4>
              <p className="text-gray-600">
                안전한 작업환경 조성과 지역사회 발전에 기여하는 기업이 되겠습니다.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <h4 className="text-2xl mb-6 text-center">핵심 가치</h4>
            <div className="grid grid-cols-4 gap-6">
              {[
                { title: '혁신', desc: 'Innovation' },
                { title: '품질', desc: 'Quality' },
                { title: '안전', desc: 'Safety' },
                { title: '신뢰', desc: 'Trust' },
              ].map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                    {value.title[0]}
                  </div>
                  <div className="text-lg mb-1">{value.title}</div>
                  <div className="text-sm text-gray-500">{value.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 페이지 4: 사업 현황 */}
      <div className="h-[297mm] p-16">
        <div className="mb-12">
          <div className="text-blue-600 mb-2">BUSINESS STATUS</div>
          <h2 className="text-5xl mb-4">사업 현황</h2>
          <div className="h-1 w-24 bg-blue-600"></div>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl">
              <div className="text-sm mb-2 text-blue-100">A 라인</div>
              <div className="text-4xl mb-2">26</div>
              <div className="text-blue-100">설비</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-xl">
              <div className="text-sm mb-2 text-green-100">B 라인</div>
              <div className="text-4xl mb-2">24</div>
              <div className="text-green-100">설비</div>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-8 rounded-xl">
              <div className="text-sm mb-2 text-orange-100">C 라인</div>
              <div className="text-4xl mb-2">21</div>
              <div className="text-orange-100">설비</div>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-8">
            <h3 className="text-2xl mb-6">주요 생산 제품</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b">
                  <span className="text-gray-700">재생골재 25mm</span>
                  <span className="text-blue-600">35%</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b">
                  <span className="text-gray-700">재생골재 40mm</span>
                  <span className="text-blue-600">28%</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b">
                  <span className="text-gray-700">순환골재</span>
                  <span className="text-blue-600">22%</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b">
                  <span className="text-gray-700">기타 골재</span>
                  <span className="text-blue-600">15%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
            <h3 className="text-2xl mb-6">연도별 성장</h3>
            <div className="grid grid-cols-5 gap-4">
              {[
                { year: '2020', amount: '22만톤', revenue: '185억' },
                { year: '2021', amount: '23.5만톤', revenue: '212억' },
                { year: '2022', amount: '25만톤', revenue: '248억' },
                { year: '2023', amount: '26.5만톤', revenue: '285억' },
                { year: '2024', amount: '27만톤', revenue: '320억' },
              ].map((data, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-500 mb-2">{data.year}</div>
                  <div className="text-xl text-blue-600 mb-1">{data.amount}</div>
                  <div className="text-sm text-gray-600">{data.revenue}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border rounded-xl p-6">
              <h4 className="text-xl mb-4">품질 인증</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span>순환골재 품질인증</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span>ISO 9001 품질경영시스템</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span>ISO 14001 환경경영시스템</span>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h4 className="text-xl mb-4">경쟁 우위</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>28년 업력 및 기술력</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>최신 설비 및 자동화 시스템</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>안정적인 공급망 확보</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 백 커버 */}
      <div className="h-[297mm] bg-gradient-to-br from-gray-800 to-gray-900 text-white p-16 flex flex-col justify-between">
        <div></div>
        
        <div className="text-center">
          <h2 className="text-5xl mb-6">Contact Us</h2>
          <div className="space-y-3 text-xl text-gray-300">
            <p>본사 주소: [추후 입력]</p>
            <p>대표 전화: [추후 입력]</p>
            <p>이메일: [추후 입력]</p>
            <p>웹사이트: www.hicon-korea.com</p>
          </div>
        </div>

        <div className="text-center text-gray-400">
          <p>© 2024 Hicon Korea. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

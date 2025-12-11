import { CheckCircle2, Circle, Phone, Mail, Globe, FileText, Users, Building2, Factory, Clipboard, AlertCircle, ArrowRight, Download, ExternalLink, Calendar, DollarSign, Award, Search, Target } from 'lucide-react';
import { Badge } from './ui/badge';

export function MarketResearchActionPlan() {
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
            ACTION PLAN 2024
          </div>
          <h1 className="text-6xl mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
            철근 스페이서<br />시장 조사<br />실행 계획서
          </h1>
          <div className="h-2 w-32 bg-white mb-8"></div>
          <p className="text-2xl mb-4">누구에게, 어떻게, 무엇을 물어볼 것인가</p>
          <p className="text-xl text-green-100">
            Concrete Spacer Market Research Action Plan
          </p>
        </div>

        <div className="relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-6">
            <h3 className="text-xl mb-4">계획서 개요</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-green-100 mb-1">문서 목적</div>
                <div>실제 시장 조사 실행 가이드</div>
              </div>
              <div>
                <div className="text-green-100 mb-1">예상 소요 기간</div>
                <div>2~3개월</div>
              </div>
              <div>
                <div className="text-green-100 mb-1">예상 비용</div>
                <div>500만원 ~ 2,000만원</div>
              </div>
              <div>
                <div className="text-green-100 mb-1">작성일</div>
                <div>2024년 11월</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-green-100">주식회사 하이콘 코리아</p>
            <p className="text-sm text-green-200">사업개발팀</p>
          </div>
        </div>
      </div>

      {/* 1. 공식 시장 조사 */}
      <div className="min-h-[297mm] p-12 bg-white">
        <div className="mb-8">
          <div className="text-blue-600 mb-2 flex items-center gap-2">
            <Search className="h-6 w-6" />
            STEP 1
          </div>
          <h2 className="text-4xl mb-4">공식 시장 조사</h2>
          <div className="h-1 w-24 bg-blue-600"></div>
          <p className="text-gray-600 mt-4">정부 및 협회 공식 통계 데이터 확보</p>
        </div>

        <div className="space-y-6">
          {/* 한국건설자재산업협회 */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">1</div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">한국건설자재산업협회</h3>
                <p className="text-sm text-gray-600">건설자재 시장 규모, 생산량, 유통 현황 등 공식 통계</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  연락처
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Building2 className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-600">주소</div>
                      <div>서울시 서초구 매헌로 16 (양재동, 건자재빌딩)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-600">전화</div>
                      <div>02-3472-6601~5</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-600">홈페이지</div>
                      <div className="text-blue-600">www.kbmia.or.kr</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-blue-600" />
                  문의 방법 및 절차
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <strong>1단계:</strong> 홈페이지 방문 → 자료실에서 공개 통계 확인
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <strong>2단계:</strong> 전화 문의 (담당 부서: 산업조사팀)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <strong>3단계:</strong> 회원사 가입 시 상세 통계 자료 제공 가능
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Clipboard className="h-4 w-4 text-blue-600" />
                확보 가능한 정보
              </h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>건설자재 시장 규모 (연도별)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>스페이서 생산량 및 판매량</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>제품 유형별 시장 점유율</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>주요 제조업체 목록</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm">
                <strong>💡 TIP:</strong> 회원사 가입 시 연회비 약 30~50만원이지만, 상세한 산업 통계와 정기 세미나 참석 가능
              </p>
            </div>
          </div>

          {/* 통계청 */}
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">2</div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">통계청 (KOSIS 국가통계포털)</h3>
                <p className="text-sm text-gray-600">건설자재 생산 및 출하 통계</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-green-600" />
                  접속 정보
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-600">KOSIS 포털</div>
                      <div className="text-green-600">kosis.kr</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Search className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-600">검색 키워드</div>
                      <div>"건설자재", "철근", "콘크리트 제품"</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-600">고객센터</div>
                      <div>1588-2345</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-green-600" />
                  조사 방법
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <strong>1단계:</strong> KOSIS 접속 → 회원가입 (무료)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <strong>2단계:</strong> "국내통계" → "산업·에너지" → "건설"
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <strong>3단계:</strong> 광업·제조업조사 → 콘크리트 제품 생산
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Clipboard className="h-4 w-4 text-green-600" />
                확보 가능한 정보
              </h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>콘크리트 제품 생산액 (연도별)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>건설자재 출하액 통계</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>건설업 경기 동향</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>지역별 건설 투자액</span>
                </div>
              </div>
            </div>
          </div>

          {/* 관세청 */}
          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl">3</div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">관세청 (수출입무역통계)</h3>
                <p className="text-sm text-gray-600">해외 스페이서 수입 현황 및 가격</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-purple-600" />
                  접속 정보
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-600">무역통계</div>
                      <div className="text-purple-600">unipass.customs.go.kr</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Search className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-600">HS 코드</div>
                      <div>6810.19 (콘크리트 제품) / 3926.90 (플라스틱 제품)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-600">고객센터</div>
                      <div>125 (관세청 콜센터)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-purple-600" />
                  조사 방법
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <div>
                      <strong>1단계:</strong> 유니패스 접속 → 무역통계 클릭
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <div>
                      <strong>2단계:</strong> HS 코드로 검색 (6810.19)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <div>
                      <strong>3단계:</strong> 국가별, 연도별 수입액 및 중량 확인
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Clipboard className="h-4 w-4 text-purple-600" />
                확보 가능한 정보
              </h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>국가별 스페이서 수입량 (톤)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>수입 금액 (달러)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>평균 수입 단가 계산</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>독일, 중국, 일본 수입 비중</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm">
                <strong>💡 TIP:</strong> "철근 스페이서"로 직접 검색되지 않을 경우, "콘크리트 기타 제품" 카테고리에서 세부 품목 확인
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 업계 전문가 자문 */}
      <div className="min-h-[297mm] p-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="mb-8">
          <div className="text-orange-600 mb-2 flex items-center gap-2">
            <Users className="h-6 w-6" />
            STEP 2
          </div>
          <h2 className="text-4xl mb-4">업계 전문가 자문</h2>
          <div className="h-1 w-24 bg-orange-600"></div>
          <p className="text-gray-600 mt-4">실제 사용자와 제조사의 생생한 정보</p>
        </div>

        <div className="space-y-6">
          {/* 건설사 구매 담당자 */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl">1</div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">건설사 구매 담당자 인터뷰</h3>
                <p className="text-sm text-gray-600">실제 수요처의 구매 패턴과 요구사항 파악</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg mb-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Target className="h-4 w-4 text-orange-600" />
                접촉 대상 (우선순위순)
              </h4>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded">
                  <div className="font-semibold mb-2">① 중견 건설사 (연 매출 5,000억~1조원)</div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• <strong>예시:</strong> 계룡건설, 삼부토건, 태영건설 등</div>
                    <div>• <strong>이유:</strong> 가격에 민감하면서도 품질 중요시, 의사결정 빠름</div>
                    <div>• <strong>부서:</strong> 자재구매팀, 현장 소장</div>
                  </div>
                </div>

                <div className="p-3 bg-orange-50 rounded">
                  <div className="font-semibold mb-2">② 대형 건설사 (Big 10)</div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• <strong>예시:</strong> 현대건설, GS건설, 대림산업 등</div>
                    <div>• <strong>이유:</strong> 대량 구매 가능, 품질 기준 명확</div>
                    <div>• <strong>부서:</strong> 구매본부, 기술연구소</div>
                  </div>
                </div>

                <div className="p-3 bg-orange-50 rounded">
                  <div className="font-semibold mb-2">③ 전문 건설사 (토목, 플랜트)</div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• <strong>예시:</strong> 한신공영, 세운건설 등</div>
                    <div>• <strong>이유:</strong> 특수 규격 수요, 안정적 공급 중시</div>
                    <div>• <strong>부서:</strong> 현장 자재팀</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  접촉 방법
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 mt-0.5" />
                    <div>
                      <strong>방법1:</strong> 건설사 대표전화 → 자재구매팀 연결
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 mt-0.5" />
                    <div>
                      <strong>방법2:</strong> 링크드인, 네이버 카페에서 건설 자재 담당자 검색
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 mt-0.5" />
                    <div>
                      <strong>방법3:</strong> 건설 현장 직접 방문 → 현장 소장 면담
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 mt-0.5" />
                    <div>
                      <strong>방법4:</strong> 건설협회 세미나 참석 → 네트워킹
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Clipboard className="h-4 w-4 text-orange-600" />
                  핵심 질문 리스트
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>월평균 스페이서 구매량?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>현재 사용 중인 제품 종류? (플라스틱/콘크리트/철재)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>구매 단가 및 결제 조건?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>주요 공급업체는?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>콘크리트 스페이서로 전환 의향?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>불만 사항 또는 개선 희망 사항?</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm">
                <strong>💡 TIP:</strong> 인터뷰 시 회사 소개서를 먼저 제공하고, "협력 가능성 검토" 목적임을 명확히 전달
              </p>
            </div>
          </div>

          {/* 스페이서 제조업체 벤치마킹 */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">2</div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">스페이서 제조업체 벤치마킹</h3>
                <p className="text-sm text-gray-600">경쟁사 제품, 가격, 생산 방식 조사</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg mb-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Factory className="h-4 w-4 text-blue-600" />
                조사 대상 업체 (검색 방법)
              </h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 rounded">
                  <div className="font-semibold mb-2">① 네이버/구글 검색</div>
                  <div className="text-gray-600">
                    • 검색어: "철근 스페이서 제조", "콘크리트 스페이서 공장", "플라스틱 스페이서 도매"<br />
                    • 상위 10개 업체 리스트 작성
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded">
                  <div className="font-semibold mb-2">② 건설자재 B2B 플랫폼</div>
                  <div className="text-gray-600">
                    • <strong>토탈건설:</strong> totalcon.co.kr<br />
                    • <strong>건설나라:</strong> constnara.com<br />
                    • <strong>건설워커:</strong> constructionworker.kr
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded">
                  <div className="font-semibold mb-2">③ 특허청 검색</div>
                  <div className="text-gray-600">
                    • 사이트: kipris.or.kr<br />
                    • 검색어: "스페이서", "철근 받침대"<br />
                    • → 특허 보유 업체 = 기술력 있는 제조사
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Search className="h-4 w-4 text-blue-600" />
                  조사 방법
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <strong>방법1:</strong> 홈페이지에서 제품 카탈로그, 가격표 다운로드
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <strong>방법2:</strong> 전화/이메일로 샘플 요청 (구매 의향 표명)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <strong>방법3:</strong> 공장 방문 (가능 시) - 생산 공정 관찰
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <strong>방법4:</strong> 쿠팡, 옥션 등 온라인몰에서 소비자 가격 확인
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Clipboard className="h-4 w-4 text-blue-600" />
                  수집 정보 체크리스트
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>제품 사이즈별 판매 가격</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>최소 주문 수량 (MOQ)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>납기 기간</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>품질 인증 (KS, ISO 등)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>주요 고객사</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>제조 공정 (성형, 양생 방식)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 유통업체 */}
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">3</div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">유통업체 시장 정보</h3>
                <p className="text-sm text-gray-600">도매상, 자재상의 판매 현황</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-green-600" />
                  접촉 대상
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-green-50 rounded">
                    <div className="font-semibold mb-1">건설자재 전문 도매상</div>
                    <div className="text-gray-600">서울, 경기 지역 대형 자재상 (철강, 시멘트 취급)</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <div className="font-semibold mb-1">철근 가공업체</div>
                    <div className="text-gray-600">철근과 함께 스페이서 납품하는 업체</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <div className="font-semibold mb-1">온라인 건자재 쇼핑몰</div>
                    <div className="text-gray-600">쿠팡, 네이버 스마트스토어 판매자</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Clipboard className="h-4 w-4 text-green-600" />
                  핵심 질문
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>월평균 스페이서 판매량?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>가장 많이 팔리는 제품 종류/사이즈?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>도매가 및 유통 마진율?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>주요 공급업체 및 납품 조건?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>신규 공급업체 입점 조건?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>고객 불만 및 반품률?</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm">
                <strong>💡 TIP:</strong> 유통업체는 시장의 실제 수요를 가장 정확히 파악하고 있으니, 판매 트렌드를 적극 청취
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 정확한 원가 계산 */}
      <div className="min-h-[297mm] p-12 bg-white">
        <div className="mb-8">
          <div className="text-purple-600 mb-2 flex items-center gap-2">
            <DollarSign className="h-6 w-6" />
            STEP 3
          </div>
          <h2 className="text-4xl mb-4">정확한 원가 계산</h2>
          <div className="h-1 w-24 bg-purple-600"></div>
          <p className="text-gray-600 mt-4">실제 견적 받아서 사업성 검증</p>
        </div>

        <div className="space-y-6">
          {/* 금형 제작 견적 */}
          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl">1</div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">금형 제작 견적</h3>
                <p className="text-sm text-gray-600">스페이서 생산용 금형 제작 업체</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg mb-4">
              <h4 className="font-semibold mb-3">금형 제작 업체 찾기</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-purple-50 rounded">
                  <div className="font-semibold mb-2">① 콘크리트 제품 금형 전문업체</div>
                  <div className="text-gray-600">
                    • 검색어: "콘크리트 제품 금형", "PC 금형 제작"<br />
                    • 주요 지역: 경기도 화성, 평택, 천안 (콘크리트 제품 공장 밀집 지역)
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded">
                  <div className="font-semibold mb-2">② 플라스틱 사출 금형 업체</div>
                  <div className="text-gray-600">
                    • 검색어: "플라스틱 사출 금형"<br />
                    • 비교 목적: 플라스틱 vs 콘크리트 금형 비용 차이
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-purple-600" />
                  견적 요청 시 필요 정보
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>제품 도면 (사이즈: 15mm, 20mm, 25mm, 30mm, 40mm 등)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>형태: 원형, 사각형, H형 등</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>금형 개수 (예: 1회 성형 시 10개 동시 생산)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>재질: 강철 금형 or 플라스틱 금형</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>예상 생산량 (내구성 결정)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-purple-600" />
                  예상 견적 범위
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-purple-50 rounded">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">기본 금형 (1종, 단일 사이즈)</span>
                    </div>
                    <div className="text-gray-600">200만원 ~ 500만원</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">다중 금형 (20종 사이즈)</span>
                    </div>
                    <div className="text-gray-600">4,000만원 ~ 1억원</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">제작 기간</span>
                    </div>
                    <div className="text-gray-600">1~3개월</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 생산 설비 투자 */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">2</div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">생산 설비 투자 비용</h3>
                <p className="text-sm text-gray-600">성형, 양생, 포장 설비</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg mb-4">
              <h4 className="font-semibold mb-3">필요 설비 목록</h4>
              <div className="space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-50 rounded">
                    <div className="font-semibold mb-1">① 콘크리트 성형기</div>
                    <div className="text-gray-600">
                      • 용도: 금형에 콘크리트 주입 및 압착<br />
                      • 예상 비용: 3,000만원 ~ 8,000만원
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded">
                    <div className="font-semibold mb-1">② 양생실/양생기</div>
                    <div className="text-gray-600">
                      • 용도: 온도/습도 조절하여 콘크리트 경화<br />
                      • 예상 비용: 2,000만원 ~ 5,000만원
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded">
                    <div className="font-semibold mb-1">③ 자동 포장기</div>
                    <div className="text-gray-600">
                      • 용도: 제품 포장 및 박스 밴딩<br />
                      • 예상 비용: 1,000만원 ~ 3,000만원
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded">
                    <div className="font-semibold mb-1">④ 품질 검사 장비</div>
                    <div className="text-gray-600">
                      • 용도: 압축강도, 치수 정밀도 측정<br />
                      • 예상 비용: 500만원 ~ 2,000만원
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Search className="h-4 w-4 text-blue-600" />
                설비 구매처
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div>
                    <strong>중고 설비:</strong> 크린게이트(cleangate.co.kr), 팔팔기계(machinepalpal.com)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div>
                    <strong>신품 설비:</strong> 콘크리트 기계 제조업체 직접 문의 (구글 검색)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div>
                    <strong>중국 수입:</strong> 알리바바에서 저렴한 설비 구매 가능 (품질 검증 필요)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm">
                <strong>💡 TIP:</strong> 하이콘 코리아는 이미 콘크리트 생산 시설이 있으므로, 기존 설비 활용 가능 여부 검토 필수!
              </p>
            </div>
          </div>

          {/* 순환골재 원가 */}
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">3</div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">실제 순환골재 원가</h3>
                <p className="text-sm text-gray-600">하이콘 코리아 내부 데이터 활용</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg">
              <h4 className="font-semibold mb-3">원가 계산 항목</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="font-semibold">① 순환골재 자체 생산 원가</span>
                  <span className="text-green-600">톤당 15,000원 ~ 25,000원 (추정)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="font-semibold">② 시멘트 원가</span>
                  <span className="text-green-600">톤당 80,000원 ~ 100,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="font-semibold">③ 물, 혼화제</span>
                  <span className="text-green-600">톤당 5,000원 ~ 10,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="font-semibold">④ 전력/가스 (양생)</span>
                  <span className="text-green-600">개당 10원 ~ 20원 (추정)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="font-semibold">⑤ 인건비 (성형, 포장)</span>
                  <span className="text-green-600">개당 20원 ~ 30원 (추정)</span>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                <h5 className="font-semibold mb-2 text-center">스페이서 1개당 제조 원가 추정</h5>
                <div className="text-center text-3xl text-green-600 mb-2">80원 ~ 120원</div>
                <div className="text-sm text-gray-600 text-center">
                  (기존 국내 제조사 대비 30~40% 저렴 가능)
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm">
                <strong>💡 TIP:</strong> 하이콘 코리아 회계팀에 순환골재 톤당 실제 원가 문의 필수 (가장 중요한 경쟁력!)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. 파일럿 테스트 */}
      <div className="min-h-[297mm] p-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="mb-8">
          <div className="text-red-600 mb-2 flex items-center gap-2">
            <Award className="h-6 w-6" />
            STEP 4
          </div>
          <h2 className="text-4xl mb-4">파일럿 테스트</h2>
          <div className="h-1 w-24 bg-red-600"></div>
          <p className="text-gray-600 mt-4">샘플 제작하여 시장 검증</p>
        </div>

        <div className="space-y-6">
          {/* 샘플 제작 */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl">1</div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">샘플 제작 및 품질 테스트</h3>
                <p className="text-sm text-gray-600">소량 제작 → 품질 검증 → 개선</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Factory className="h-4 w-4 text-red-600" />
                  샘플 제작 방법
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-red-50 rounded">
                    <div className="font-semibold mb-1">방법1: 자체 제작</div>
                    <div className="text-gray-600">
                      • 하이콘 코리아 공장에서 소량 제작<br />
                      • 기존 콘크리트 설비 활용<br />
                      • 비용 최소화
                    </div>
                  </div>

                  <div className="p-3 bg-red-50 rounded">
                    <div className="font-semibold mb-1">방법2: 외주 제작</div>
                    <div className="text-gray-600">
                      • 콘크리트 제품 전문 업체 위탁<br />
                      • 금형 없이 수작업으로 소량 제작<br />
                      • 품질 기준 확인
                    </div>
                  </div>

                  <div className="p-3 bg-red-50 rounded">
                    <div className="font-semibold mb-1">방법3: 3D 프린팅</div>
                    <div className="text-gray-600">
                      • 프로토타입 제작용<br />
                      • 디자인 검증 (사이즈, 형태)<br />
                      • 강도 테스트는 불가
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Clipboard className="h-4 w-4 text-red-600" />
                  품질 테스트 항목
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>압축강도 (최소 200kg/cm² 이상)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>치수 정밀도 (±0.5mm 이내)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>내구성 (낙하 테스트, 충격 테스트)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>내후성 (온도 변화, 습기)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>철근 고정력 (흔들림 없이 고정 가능)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>콘크리트 부착력 (타설 시 분리 여부)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm">
                <strong>💡 TIP:</strong> 샘플 1,000개 제작 후 건설사 3~5곳에 무상 제공하여 현장 피드백 수집
              </p>
            </div>
          </div>

          {/* 건설사 시범 사용 */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl">2</div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">건설사 시범 사용</h3>
                <p className="text-sm text-gray-600">실제 현장에서 사용성 검증</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg mb-4">
              <h4 className="font-semibold mb-3">시범 사용 협력사 선정</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-orange-50 rounded">
                  <div className="font-semibold mb-2">우선 협력사: 중소 건설사</div>
                  <div className="text-gray-600">
                    • 의사결정 빠름<br />
                    • 무상 샘플 제공 시 적극적 협조<br />
                    • 피드백 신속하게 제공
                  </div>
                </div>

                <div className="p-3 bg-orange-50 rounded">
                  <div className="font-semibold mb-2">협력 제안 방법</div>
                  <div className="text-gray-600">
                    1. 샘플 1,000~5,000개 무상 제공<br />
                    2. 현장 소장 면담 → 사용 방법 설명<br />
                    3. 2주 후 피드백 인터뷰<br />
                    4. 문제점 개선 → 재샘플 제공
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3">수집 피드백 항목</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>작업 편의성 (설치 쉬운지)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>파손률 (운반/설치 시)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>철근 고정력 (흔들림 없는지)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>콘크리트 타설 후 문제 여부</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>기존 제품 대비 장단점</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>구매 의향 및 희망 가격</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3">개선 사항 반영</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-orange-50 rounded">
                    <div className="font-semibold mb-1">예시1: 파손률 높음</div>
                    <div className="text-gray-600">→ 배합비 조정 or 두께 증가</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded">
                    <div className="font-semibold mb-1">예시2: 철근 고정 약함</div>
                    <div className="text-gray-600">→ 그립 부분 형상 변경</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded">
                    <div className="font-semibold mb-1">예시3: 무게 무거움</div>
                    <div className="text-gray-600">→ 경량 골재 혼합 검토</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KS 인증 */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">3</div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">KS 인증 가능성 검토</h3>
                <p className="text-sm text-gray-600">공신력 확보 및 대형 건설사 진입</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Award className="h-4 w-4 text-blue-600" />
                  KS 인증 정보
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Building2 className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-600">인증 기관</div>
                      <div>한국표준협회 (KSA)</div>
                      <div className="text-blue-600 text-xs">www.ksa.or.kr</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-600">문의 전화</div>
                      <div>1588-0100</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-600">예상 비용</div>
                      <div>300만원 ~ 1,000만원</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-600">소요 기간</div>
                      <div>3~6개월</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-blue-600" />
                  인증 절차
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <strong>1단계:</strong> KS 표준 규격 확인 (F 4002, F 2503 등)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <strong>2단계:</strong> 인증 신청서 제출 (온라인)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <strong>3단계:</strong> 공장 심사 (생산 설비, 품질 관리)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <strong>4단계:</strong> 제품 시험 (압축강도, 치수 등)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <strong>5단계:</strong> 인증서 발급
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-3">KS 인증 필요 서류</h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>사업자등록증</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>공장 등록증</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>품질관리 조직도</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>생산 공정도</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>검사 설비 목록</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>제품 시방서</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm">
                <strong>💡 TIP:</strong> KS 인증은 필수는 아니지만, 대형 건설사 입찰 시 가산점 부여되므로 장기적으로 필수
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 전체 체크리스트 */}
      <div className="min-h-[297mm] p-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="mb-8 text-center">
          <h2 className="text-4xl mb-4">📋 전체 실행 체크리스트</h2>
          <div className="h-1 w-32 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">단계별로 체크하면서 진행하세요</p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-xl">
          <div className="space-y-6">
            {/* STEP 1 체크리스트 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl mb-4 text-blue-600">STEP 1: 공식 시장 조사</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>한국건설자재산업협회 홈페이지 자료실 확인</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>협회 전화 문의 (02-3472-6601~5) → 산업조사팀</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>KOSIS(kosis.kr) 회원가입 → 건설자재 통계 다운로드</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>관세청 유니패스 접속 → HS 코드 6810.19 검색</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>수입 통계 분석 (독일, 중국, 일본 수입량 및 단가)</span>
                </label>
              </div>
            </div>

            {/* STEP 2 체크리스트 */}
            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-xl mb-4 text-orange-600">STEP 2: 업계 전문가 자문</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>건설사 리스트 작성 (중견 5곳, 대형 3곳)</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>자재구매팀 전화 → 구매 담당자 연결</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>인터뷰 질문지 작성 (월 구매량, 단가, 선호 제품 등)</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>스페이서 제조업체 5곳 검색 → 카탈로그 요청</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>경쟁사 샘플 구매 (5종) → 품질 비교</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>자재 유통업체 3곳 방문 → 판매 현황 청취</span>
                </label>
              </div>
            </div>

            {/* STEP 3 체크리스트 */}
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl mb-4 text-purple-600">STEP 3: 정확한 원가 계산</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>금형 제작 업체 3곳 견적 요청 (기본 사양 제공)</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>콘크리트 성형기 업체 견적 요청 (신품/중고 비교)</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>양생 설비 견적 요청</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>하이콘 코리아 회계팀 → 순환골재 톤당 원가 확인</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>시멘트 공급업체 → 대량 구매 단가 협상</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>제조 원가표 작성 (재료비, 인건비, 전력비 등)</span>
                </label>
              </div>
            </div>

            {/* STEP 4 체크리스트 */}
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl mb-4 text-red-600">STEP 4: 파일럿 테스트</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>샘플 1,000개 제작 (자체 or 외주)</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>압축강도 테스트 (공인시험기관 의뢰)</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>건설사 3곳에 샘플 무상 제공 → 시범 사용</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>2주 후 피드백 인터뷰 (파손률, 작업성, 개선점)</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>개선 사항 반영 → 재샘플 제작</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>KS 인증 필요성 검토 → 한국표준협회 상담</span>
                </label>
              </div>
            </div>

            {/* 최종 의사결정 */}
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl mb-4 text-green-600">STEP 5: 최종 의사결정</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>시장 조사 결과 보고서 작성 (실제 데이터 기반)</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>사업 타당성 분석 (시장성, 수익성, 리스크)</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>투자 계획서 작성 (15억원 투자 근거)</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>경영진 보고 → GO/NO-GO 결정</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl">
            <h3 className="text-2xl mb-3 text-center">🎯 예상 완료 기간 및 비용</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl mb-2">2~3개월</div>
                <div className="text-sm text-green-100">조사 소요 기간</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl mb-2">500~2,000만원</div>
                <div className="text-sm text-green-100">예상 조사 비용</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl mb-2">전담 2명</div>
                <div className="text-sm text-green-100">필요 인력</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 마지막 페이지 - 요약 */}
      <div className="min-h-[297mm] p-12 bg-white flex flex-col justify-center">
        <div className="text-center space-y-8">
          <h2 className="text-5xl text-gray-900">이제 실행만 남았습니다!</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-xl text-left">
              <h3 className="text-2xl mb-4 text-blue-600">✅ 즉시 실행 가능한 항목</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>KOSIS 회원가입 (10분)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>건설자재협회 자료실 확인 (30분)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>경쟁사 샘플 온라인 구매 (1시간)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>건설사 자재팀 전화 문의 (1일)</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl text-left">
              <h3 className="text-2xl mb-4 text-orange-600">⏰ 시간 투자 필요한 항목</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-orange-600 mt-0.5" />
                  <span>금형 제작사 3곳 견적 비교 (1주)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-orange-600 mt-0.5" />
                  <span>건설사 인터뷰 (2~3주)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-orange-600 mt-0.5" />
                  <span>샘플 제작 및 테스트 (1~2개월)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-orange-600 mt-0.5" />
                  <span>시범 사용 피드백 수집 (1개월)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-2xl mb-4">💪 성공의 핵심</h3>
            <p className="text-lg leading-relaxed">
              이 계획서는 "추정"이 아닌 <strong>"실제 데이터"</strong>를 수집하기 위한 로드맵입니다.<br />
              하나씩 체크하면서 진행하면, <strong>3개월 후</strong>에는<br />
              확실한 사업 타당성 결론을 내릴 수 있습니다!
            </p>
          </div>

          <div className="text-sm text-gray-600 mt-12">
            <p>주식회사 하이콘 코리아</p>
            <p>철근 스페이서 시장 조사 실행 계획서</p>
            <p className="mt-4">2024년 11월</p>
          </div>
        </div>
      </div>
    </div>
  );
}

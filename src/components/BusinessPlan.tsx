import { Target, TrendingUp, DollarSign, Factory, Leaf, BarChart3, CheckCircle2, AlertCircle, Calendar, Award } from 'lucide-react';

export function BusinessPlan() {
  return (
    <div className="bg-white w-full max-w-[210mm] mx-auto" style={{ minHeight: '297mm' }}>
      {/* 커버 페이지 */}
      <div className="h-[297mm] p-16 flex flex-col justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center space-y-8">
          <div className="inline-block mx-auto px-6 py-3 bg-green-600 text-white rounded-full">
            정부 녹색 융자 지원 신청서
          </div>
          
          <h1 className="text-6xl mb-4" style={{ fontWeight: 700 }}>
            사업 계획서
          </h1>
          
          <div className="h-1 w-32 bg-green-600 mx-auto"></div>
          
          <div className="text-3xl text-gray-700 mb-12">
            친환경 순환골재 생산설비<br />현대화 및 증설 사업
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <table className="w-full text-left">
              <tbody className="space-y-3">
                <tr className="border-b">
                  <td className="py-3 text-gray-600 w-1/3">신청 기업</td>
                  <td className="py-3">주식회사 하이콘 코리아</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-gray-600">지원 사업명</td>
                  <td className="py-3">녹색 융자 (환경부)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-gray-600">신청 금액</td>
                  <td className="py-3 text-green-600">50억 원</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-gray-600">사업 기간</td>
                  <td className="py-3">2025년 1월 ~ 2026년 12월 (24개월)</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-600">신청 일자</td>
                  <td className="py-3">2024년 11월</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 1. 사업 개요 */}
      <div className="h-[297mm] p-16">
        <div className="mb-12">
          <div className="text-green-600 mb-2">01. BUSINESS OVERVIEW</div>
          <h2 className="text-5xl mb-4">사업 개요</h2>
          <div className="h-1 w-24 bg-green-600"></div>
        </div>

        <div className="space-y-8">
          <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-600">
            <h3 className="text-2xl mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-green-600" />
              사업 목적
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              건설폐기물 재활용률 제고 및 탄소중립 실현을 위해 최신 친환경 설비를 도입하여 
              순환골재 생산 효율을 30% 향상시키고, 연간 탄소배출량을 15,000톤 감축하여 
              국가 탄소중립 목표 달성에 기여하고자 합니다.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-6">사업 필요성</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="mb-2">정부 정책 부합</h4>
                    <p className="text-sm text-gray-600">
                      2050 탄소중립 시나리오 및 순환경제 활성화 정책에 부합하는 친환경 사업
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="mb-2">시장 수요 증가</h4>
                    <p className="text-sm text-gray-600">
                      건설 경기 회복과 재건축·재개발 증가로 순환골재 수요 연평균 12% 성장 예상
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="mb-2">환경 규제 강화</h4>
                    <p className="text-sm text-gray-600">
                      건설폐기물 재활용 의무화 및 천연골재 채취 규제로 순환골재 사용 확대 불가피
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="mb-2">설비 노후화</h4>
                    <p className="text-sm text-gray-600">
                      기존 설비(평균 15년 경과)의 생산 효율 저하 및 유지보수 비용 증가
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
            <h3 className="text-2xl mb-6">기대 효과</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl text-green-600 mb-2">30%</div>
                <div className="text-gray-700">생산 효율 향상</div>
              </div>
              <div className="text-center">
                <div className="text-4xl text-blue-600 mb-2">15,000톤</div>
                <div className="text-gray-700">연간 탄소배출 감축</div>
              </div>
              <div className="text-center">
                <div className="text-4xl text-orange-600 mb-2">50명</div>
                <div className="text-gray-700">신규 고용 창출</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 투자 계획 */}
      <div className="h-[297mm] p-16">
        <div className="mb-12">
          <div className="text-green-600 mb-2">02. INVESTMENT PLAN</div>
          <h2 className="text-5xl mb-4">투자 계획</h2>
          <div className="h-1 w-24 bg-green-600"></div>
        </div>

        <div className="space-y-8">
          <div className="bg-white border rounded-xl overflow-hidden">
            <div className="bg-green-600 text-white p-4">
              <h3 className="text-2xl">총 사업비: 100억 원</h3>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 border-b">구분</th>
                    <th className="text-left p-4 border-b">내역</th>
                    <th className="text-right p-4 border-b">금액 (백만원)</th>
                    <th className="text-right p-4 border-b">비율</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 text-gray-600">설비 투자</td>
                    <td className="p-4">
                      - 파쇄 설비 3기<br />
                      - 선별 설비 2기<br />
                      - 세척 설비 2기
                    </td>
                    <td className="p-4 text-right">6,500</td>
                    <td className="p-4 text-right">65%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 text-gray-600">공사비</td>
                    <td className="p-4">
                      - 부지 조성<br />
                      - 건축 공사<br />
                      - 배관/전기 공사
                    </td>
                    <td className="p-4 text-right">1,500</td>
                    <td className="p-4 text-right">15%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 text-gray-600">부대 비용</td>
                    <td className="p-4">
                      - 인허가 비용<br />
                      - 설계 및 감리<br />
                      - 시운전 비용
                    </td>
                    <td className="p-4 text-right">800</td>
                    <td className="p-4 text-right">8%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 text-gray-600">운영 자금</td>
                    <td className="p-4">
                      - 초기 운영 자금<br />
                      - 인건비 (6개월)<br />
                      - 예비비
                    </td>
                    <td className="p-4 text-right">1,200</td>
                    <td className="p-4 text-right">12%</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="p-4" colSpan={2}><strong>합계</strong></td>
                    <td className="p-4 text-right"><strong>10,000</strong></td>
                    <td className="p-4 text-right"><strong>100%</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                자금 조달 계획
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">정부 녹색융자</span>
                  <span className="text-green-600">50억원 (50%)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">자체 자금</span>
                  <span className="text-blue-600">30억원 (30%)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">금융기관 대출</span>
                  <span className="text-orange-600">20억원 (20%)</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <strong>합계</strong>
                  <strong className="text-xl">100억원</strong>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-600" />
                추진 일정
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-20 text-sm text-gray-600">2025 Q1</div>
                  <div className="flex-1 bg-white p-2 rounded">인허가 및 설계</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-20 text-sm text-gray-600">2025 Q2-Q3</div>
                  <div className="flex-1 bg-white p-2 rounded">설비 구매 및 공사</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-20 text-sm text-gray-600">2025 Q4</div>
                  <div className="flex-1 bg-white p-2 rounded">설치 및 시운전</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-20 text-sm text-gray-600">2026 Q1</div>
                  <div className="flex-1 bg-white p-2 rounded">상업 운전 개시</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 경제성 분석 */}
      <div className="h-[297mm] p-16">
        <div className="mb-12">
          <div className="text-green-600 mb-2">03. FINANCIAL ANALYSIS</div>
          <h2 className="text-5xl mb-4">경제성 분석</h2>
          <div className="h-1 w-24 bg-green-600"></div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl">
            <div className="grid grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-sm mb-2 opacity-90">투자회수기간</div>
                <div className="text-4xl">4.2년</div>
              </div>
              <div>
                <div className="text-sm mb-2 opacity-90">내부수익률(IRR)</div>
                <div className="text-4xl">18.5%</div>
              </div>
              <div>
                <div className="text-sm mb-2 opacity-90">순현재가치(NPV)</div>
                <div className="text-4xl">85억</div>
              </div>
              <div>
                <div className="text-sm mb-2 opacity-90">수익성지수(PI)</div>
                <div className="text-4xl">1.85</div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-xl overflow-hidden">
            <div className="bg-gray-50 p-4 border-b">
              <h3 className="text-xl">5개년 손익 전망 (단위: 백만원)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 border-b">구분</th>
                    <th className="text-right p-4 border-b">2025</th>
                    <th className="text-right p-4 border-b">2026</th>
                    <th className="text-right p-4 border-b">2027</th>
                    <th className="text-right p-4 border-b">2028</th>
                    <th className="text-right p-4 border-b">2029</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 text-gray-700">매출액</td>
                    <td className="p-4 text-right">28,500</td>
                    <td className="p-4 text-right">37,000</td>
                    <td className="p-4 text-right">41,500</td>
                    <td className="p-4 text-right">45,200</td>
                    <td className="p-4 text-right">48,800</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 text-gray-700">매출원가</td>
                    <td className="p-4 text-right">19,900</td>
                    <td className="p-4 text-right">25,200</td>
                    <td className="p-4 text-right">27,800</td>
                    <td className="p-4 text-right">30,100</td>
                    <td className="p-4 text-right">32,200</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 text-gray-700">매출총이익</td>
                    <td className="p-4 text-right">8,600</td>
                    <td className="p-4 text-right">11,800</td>
                    <td className="p-4 text-right">13,700</td>
                    <td className="p-4 text-right">15,100</td>
                    <td className="p-4 text-right">16,600</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 text-gray-700">판관비</td>
                    <td className="p-4 text-right">3,400</td>
                    <td className="p-4 text-right">4,200</td>
                    <td className="p-4 text-right">4,600</td>
                    <td className="p-4 text-right">4,900</td>
                    <td className="p-4 text-right">5,200</td>
                  </tr>
                  <tr className="bg-green-50 border-b">
                    <td className="p-4"><strong>영업이익</strong></td>
                    <td className="p-4 text-right text-green-600"><strong>5,200</strong></td>
                    <td className="p-4 text-right text-green-600"><strong>7,600</strong></td>
                    <td className="p-4 text-right text-green-600"><strong>9,100</strong></td>
                    <td className="p-4 text-right text-green-600"><strong>10,200</strong></td>
                    <td className="p-4 text-right text-green-600"><strong>11,400</strong></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700">영업이익률</td>
                    <td className="p-4 text-right">18.2%</td>
                    <td className="p-4 text-right">20.5%</td>
                    <td className="p-4 text-right">21.9%</td>
                    <td className="p-4 text-right">22.6%</td>
                    <td className="p-4 text-right">23.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                주요 재무 가정
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">생산량 증가율</span>
                  <span>연 8-12%</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">판매단가 인상률</span>
                  <span>연 3%</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">원가 절감 효과</span>
                  <span>연 5%</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">할인율</span>
                  <span>8%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl">
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                민감도 분석
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2">
                  <span className="text-gray-700">매출 10% 감소 시 IRR</span>
                  <span className="text-orange-600">14.2%</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-700">원가 10% 증가 시 IRR</span>
                  <span className="text-orange-600">15.8%</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-700">최악의 시나리오 IRR</span>
                  <span className="text-red-600">11.5%</span>
                </div>
                <div className="bg-white p-3 rounded mt-2">
                  <div className="text-xs text-gray-500 mb-1">결론</div>
                  <div className="text-sm">모든 시나리오에서 사업 타당성 확보</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. 환경 개선 효과 */}
      <div className="h-[297mm] p-16 bg-gradient-to-b from-green-50 to-white">
        <div className="mb-12">
          <div className="text-green-600 mb-2">04. ENVIRONMENTAL IMPACT</div>
          <h2 className="text-5xl mb-4">환경 개선 효과</h2>
          <div className="h-1 w-24 bg-green-600"></div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl mb-6 text-center">탄소중립 기여도</h3>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <Leaf className="h-12 w-12 mx-auto mb-3" />
                <div className="text-4xl mb-2">15,000톤</div>
                <div className="text-green-100">연간 CO₂ 감축량</div>
              </div>
              <div className="text-center">
                <Factory className="h-12 w-12 mx-auto mb-3" />
                <div className="text-4xl mb-2">85%</div>
                <div className="text-green-100">에너지 효율 개선</div>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-3" />
                <div className="text-4xl mb-2">100%</div>
                <div className="text-green-100">폐기물 재활용률</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl mb-4">정부 정책 부합도</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="mb-1">2050 탄소중립 시나리오</div>
                    <div className="text-sm text-gray-600">폐기물 부문 온실가스 46.8% 감축 목표 달성 기여</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="mb-1">순환경제 활성화 정책</div>
                    <div className="text-sm text-gray-600">자원순환기본법에 따른 순환자원 이용 촉진</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="mb-1">녹색전환 정책</div>
                    <div className="text-sm text-gray-600">K-택소노미 녹색부문 적격 사업</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl mb-4">환경 개선 정량 목표</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">CO₂ 배출량 감축</span>
                  <span className="text-green-600">현재 대비 45%↓</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">미세먼지 배출 저감</span>
                  <span className="text-green-600">현재 대비 60%↓</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">에너지 사용량 절감</span>
                  <span className="text-green-600">현재 대비 30%↓</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">수자원 재활용률</span>
                  <span className="text-green-600">80% → 95%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-8">
            <h3 className="text-2xl mb-6">연도별 환경 개선 로드맵</h3>
            <div className="space-y-4">
              {[
                { year: '2025', goals: ['신규 친환경 설비 도입', 'CO₂ 감축 15% 달성', '에너지 효율 20% 개선'] },
                { year: '2026', goals: ['설비 최적화 완료', 'CO₂ 감축 30% 달성', '에너지 효율 25% 개선'] },
                { year: '2027', goals: ['전 공정 자동화', 'CO₂ 감축 40% 달성', '에너지 효율 30% 개선'] },
                { year: '2028', goals: ['스마트팩토리 구축', 'CO₂ 감축 45% 달성', 'RE100 참여 검토'] },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-20 text-lg text-green-600">{item.year}</div>
                  <div className="flex-1 grid grid-cols-3 gap-3">
                    {item.goals.map((goal, gIdx) => (
                      <div key={gIdx} className="bg-green-50 p-3 rounded text-sm">
                        {goal}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
            <h3 className="text-xl mb-4">ESG 경영 강화</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-green-600 mb-2">Environment</div>
                <div className="text-gray-700">친환경 생산체계 구축 및 탄소중립 실현</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-blue-600 mb-2">Social</div>
                <div className="text-gray-700">안전한 작업환경 조성 및 고용 창출</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-orange-600 mb-2">Governance</div>
                <div className="text-gray-700">투명한 경영과 이해관계자 소통 강화</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. 결론 */}
      <div className="h-[297mm] p-16 bg-gradient-to-br from-gray-50 to-white flex flex-col justify-center">
        <div className="space-y-12">
          <div className="text-center">
            <div className="text-green-600 mb-4">CONCLUSION</div>
            <h2 className="text-5xl mb-6">사업 추진의 당위성</h2>
            <div className="h-1 w-32 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-12 rounded-2xl text-center">
            <p className="text-2xl leading-relaxed mb-6">
              본 사업은 <strong>정부의 탄소중립 정책</strong>과 <strong>순환경제 활성화</strong> 방향에 완벽히 부합하며,<br />
              <strong>높은 경제성</strong>과 <strong>환경 개선 효과</strong>를 동시에 실현할 수 있는 사업입니다.
            </p>
            <p className="text-xl text-green-100">
              28년간 축적된 기술력과 노하우를 바탕으로 성공적인 사업 추진을 약속드립니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white border-2 border-green-600 rounded-xl p-8">
              <h3 className="text-2xl mb-6 text-center text-green-600">경제적 타당성</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>IRR 18.5%, 높은 수익성 확보</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>투자회수기간 4.2년으로 안정적</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>연평균 매출액 30% 이상 성장</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>50명 신규 고용으로 일자리 창출</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-blue-600 rounded-xl p-8">
              <h3 className="text-2xl mb-6 text-center text-blue-600">환경적 타당성</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>연간 1.5만톤 CO₂ 감축 기여</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>폐기물 100% 재활용 실현</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>에너지 효율 85% 수준 달성</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>정부 녹색 정책 적극 부응</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl text-center">
            <p className="text-xl text-gray-700 mb-4">
              녹색 융자 지원을 통해 본 사업이 차질없이 추진될 수 있도록
            </p>
            <p className="text-2xl">
              적극적인 검토와 지원을 부탁드립니다.
            </p>
          </div>

          <div className="text-center text-gray-500">
            <p className="text-lg">주식회사 하이콘 코리아</p>
            <p>대표이사 [추후 입력]</p>
          </div>
        </div>
      </div>
    </div>
  );
}

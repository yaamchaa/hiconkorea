import { Calculator, TrendingDown, TrendingUp, AlertCircle, CheckCircle2, Download, Edit, Save, DollarSign, Package, Factory, Users, Zap, FileText, Search, Phone, Globe, Building2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';

export function SpacerPriceAnalysisTemplate() {
  return (
    <div className="bg-white w-full max-w-[210mm] mx-auto">
      {/* 커버 페이지 */}
      <div className="min-h-[297mm] bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white p-16 flex flex-col justify-between relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-8">
            PRICE ANALYSIS TEMPLATE
          </div>
          <h1 className="text-6xl mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
            철근 스페이서<br />가격 분석 템플릿
          </h1>
          <div className="h-2 w-32 bg-white mb-8"></div>
          <p className="text-2xl mb-4">실제 시장 조사용 작성 템플릿</p>
          <p className="text-xl text-pink-100">
            Spacer Price Analysis & Cost Calculation Template
          </p>
        </div>

        <div className="relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-6">
            <h3 className="text-xl mb-4">템플릿 구성</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-pink-100 mb-1">Template 1</div>
                <div>가격 비교 분석표</div>
              </div>
              <div>
                <div className="text-pink-100 mb-1">Template 2</div>
                <div>제조 원가 계산표</div>
              </div>
              <div>
                <div className="text-pink-100 mb-1">Template 3</div>
                <div>경쟁사 조사 체크리스트</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-pink-100">주식회사 하이콘 코리아</p>
            <p className="text-sm text-pink-200">2024년 11월</p>
          </div>
        </div>
      </div>

      {/* Template 1: 가격 비교 분석표 */}
      <div className="min-h-[297mm] p-12 bg-white">
        <div className="mb-8">
          <div className="text-blue-600 mb-2 flex items-center gap-2">
            <DollarSign className="h-6 w-6" />
            TEMPLATE 1
          </div>
          <h2 className="text-4xl mb-4">가격 비교 분석표</h2>
          <div className="h-1 w-24 bg-blue-600"></div>
          <p className="text-gray-600 mt-4">경쟁사 제품 가격 조사 및 하이콘 목표가 설정</p>
        </div>

        <div className="space-y-6">
          {/* 사용 방법 */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              사용 방법
            </h3>
            <ol className="text-sm space-y-1 list-decimal list-inside text-gray-700">
              <li>온라인 쇼핑몰(쿠팡, 네이버)에서 실제 판매 가격 조사</li>
              <li>제조업체 전화 문의로 도매가 확인</li>
              <li>표의 빈칸에 실제 조사한 가격 입력</li>
              <li>하이콘 목표가를 계산하여 경쟁력 분석</li>
            </ol>
          </div>

          {/* 플라스틱 스페이서 */}
          <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-100 p-4">
              <h3 className="text-xl font-semibold">1. 플라스틱 스페이서 (일반형)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="p-3 text-left border-b">구분</th>
                    <th className="p-3 text-center border-b">사이즈</th>
                    <th className="p-3 text-right border-b">소비자가<br/>(쿠팡/네이버)</th>
                    <th className="p-3 text-right border-b">도매가<br/>(추정)</th>
                    <th className="p-3 text-right border-b">제조 원가<br/>(추정)</th>
                    <th className="p-3 text-center border-b">조사 출처</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { size: '15mm', company: '국내 A사' },
                    { size: '20mm', company: '국내 A사' },
                    { size: '25mm', company: '국내 A사' },
                    { size: '30mm', company: '국내 A사' },
                    { size: '40mm', company: '국내 A사' },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-3 border-b">{row.company}</td>
                      <td className="p-3 text-center border-b font-mono">{row.size}</td>
                      <td className="p-3 text-right border-b bg-yellow-50">
                        <input 
                          type="text" 
                          placeholder="___원/개" 
                          className="w-full text-right bg-transparent border-b border-dashed border-gray-400 focus:border-blue-600 outline-none"
                        />
                      </td>
                      <td className="p-3 text-right border-b bg-yellow-50">
                        <input 
                          type="text" 
                          placeholder="___원/개" 
                          className="w-full text-right bg-transparent border-b border-dashed border-gray-400 focus:border-blue-600 outline-none"
                        />
                      </td>
                      <td className="p-3 text-right border-b bg-yellow-50">
                        <input 
                          type="text" 
                          placeholder="___원/개" 
                          className="w-full text-right bg-transparent border-b border-dashed border-gray-400 focus:border-blue-600 outline-none"
                        />
                      </td>
                      <td className="p-3 text-center border-b bg-yellow-50">
                        <input 
                          type="text" 
                          placeholder="쿠팡/네이버/전화" 
                          className="w-full text-center bg-transparent border-b border-dashed border-gray-400 focus:border-blue-600 outline-none text-xs"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 콘크리트 스페이서 */}
          <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-100 p-4">
              <h3 className="text-xl font-semibold">2. 콘크리트 스페이서 (일반 골재)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-green-50">
                  <tr>
                    <th className="p-3 text-left border-b">구분</th>
                    <th className="p-3 text-center border-b">사이즈</th>
                    <th className="p-3 text-right border-b">소비자가<br/>(쿠팡/네이버)</th>
                    <th className="p-3 text-right border-b">도매가<br/>(추정)</th>
                    <th className="p-3 text-right border-b">제조 원가<br/>(추정)</th>
                    <th className="p-3 text-center border-b">조사 출처</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { size: '15mm', company: '국내 B사' },
                    { size: '20mm', company: '국내 B사' },
                    { size: '25mm', company: '국내 B사' },
                    { size: '30mm', company: '국내 B사' },
                    { size: '40mm', company: '국내 B사' },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-3 border-b">{row.company}</td>
                      <td className="p-3 text-center border-b font-mono">{row.size}</td>
                      <td className="p-3 text-right border-b bg-yellow-50">
                        <input 
                          type="text" 
                          placeholder="___원/개" 
                          className="w-full text-right bg-transparent border-b border-dashed border-gray-400 focus:border-green-600 outline-none"
                        />
                      </td>
                      <td className="p-3 text-right border-b bg-yellow-50">
                        <input 
                          type="text" 
                          placeholder="___원/개" 
                          className="w-full text-right bg-transparent border-b border-dashed border-gray-400 focus:border-green-600 outline-none"
                        />
                      </td>
                      <td className="p-3 text-right border-b bg-yellow-50">
                        <input 
                          type="text" 
                          placeholder="___원/개" 
                          className="w-full text-right bg-transparent border-b border-dashed border-gray-400 focus:border-green-600 outline-none"
                        />
                      </td>
                      <td className="p-3 text-center border-b bg-yellow-50">
                        <input 
                          type="text" 
                          placeholder="쿠팡/네이버/전화" 
                          className="w-full text-center bg-transparent border-b border-dashed border-gray-400 focus:border-green-600 outline-none text-xs"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 수입 제품 */}
          <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-100 p-4">
              <h3 className="text-xl font-semibold">3. 수입 스페이서 (독일, 일본, 중국)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="p-3 text-left border-b">국가/브랜드</th>
                    <th className="p-3 text-center border-b">사이즈</th>
                    <th className="p-3 text-right border-b">소비자가<br/>(온라인)</th>
                    <th className="p-3 text-right border-b">수입 단가<br/>(관세청)</th>
                    <th className="p-3 text-center border-b">특징</th>
                    <th className="p-3 text-center border-b">조사 출처</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { country: '독일 (VABA)', size: '25mm' },
                    { country: '일본', size: '25mm' },
                    { country: '중국', size: '25mm' },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-3 border-b font-semibold">{row.country}</td>
                      <td className="p-3 text-center border-b font-mono">{row.size}</td>
                      <td className="p-3 text-right border-b bg-yellow-50">
                        <input 
                          type="text" 
                          placeholder="___원/개" 
                          className="w-full text-right bg-transparent border-b border-dashed border-gray-400 focus:border-purple-600 outline-none"
                        />
                      </td>
                      <td className="p-3 text-right border-b bg-yellow-50">
                        <input 
                          type="text" 
                          placeholder="___원/개" 
                          className="w-full text-right bg-transparent border-b border-dashed border-gray-400 focus:border-purple-600 outline-none"
                        />
                      </td>
                      <td className="p-3 text-center border-b bg-yellow-50">
                        <input 
                          type="text" 
                          placeholder="고급/중급/저가" 
                          className="w-full text-center bg-transparent border-b border-dashed border-gray-400 focus:border-purple-600 outline-none text-xs"
                        />
                      </td>
                      <td className="p-3 text-center border-b bg-yellow-50">
                        <input 
                          type="text" 
                          placeholder="알리익스프레스/유니패스" 
                          className="w-full text-center bg-transparent border-b border-dashed border-gray-400 focus:border-purple-600 outline-none text-xs"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 하이콘 코리아 목표가 */}
          <div className="border-4 border-green-600 rounded-xl overflow-hidden">
            <div className="bg-green-600 text-white p-4">
              <h3 className="text-xl font-semibold">4. 하이콘 코리아 목표가 (순환골재 활용)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-green-50">
                  <tr>
                    <th className="p-3 text-left border-b">사이즈</th>
                    <th className="p-3 text-right border-b">제조 원가<br/>(실제 계산)</th>
                    <th className="p-3 text-right border-b">목표 도매가<br/>(+30% 마진)</th>
                    <th className="p-3 text-right border-b">목표 소비자가<br/>(+유통마진)</th>
                    <th className="p-3 text-center border-b">경쟁력<br/>(vs 경쟁사)</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { size: '15mm' },
                    { size: '20mm' },
                    { size: '25mm' },
                    { size: '30mm' },
                    { size: '40mm' },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-3 border-b font-mono font-semibold">{row.size}</td>
                      <td className="p-3 text-right border-b bg-green-50">
                        <input 
                          type="text" 
                          placeholder="___원/개" 
                          className="w-full text-right bg-transparent border-b-2 border-dashed border-green-600 focus:border-green-800 outline-none font-semibold"
                        />
                      </td>
                      <td className="p-3 text-right border-b bg-green-50">
                        <input 
                          type="text" 
                          placeholder="___원/개" 
                          className="w-full text-right bg-transparent border-b-2 border-dashed border-green-600 focus:border-green-800 outline-none font-semibold"
                        />
                      </td>
                      <td className="p-3 text-right border-b bg-green-50">
                        <input 
                          type="text" 
                          placeholder="___원/개" 
                          className="w-full text-right bg-transparent border-b-2 border-dashed border-green-600 focus:border-green-800 outline-none font-semibold"
                        />
                      </td>
                      <td className="p-3 text-center border-b bg-green-50">
                        <input 
                          type="text" 
                          placeholder="±__%"
                          className="w-full text-center bg-transparent border-b-2 border-dashed border-green-600 focus:border-green-800 outline-none font-semibold"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 종합 분석 */}
          <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">5. 종합 분석 및 결론</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">가격 경쟁력 평가</label>
                <textarea 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 outline-none"
                  rows={3}
                  placeholder="예시: 하이콘 목표가는 플라스틱 대비 10% 비싸지만, 기존 콘크리트 제품 대비 20% 저렴하여 가격 경쟁력 있음"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">시장 진입 전략</label>
                <textarea 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 outline-none"
                  rows={3}
                  placeholder="예시: 초기에는 중견 건설사 대상으로 기존 제품 대비 20% 저렴한 가격으로 시장 진입, 6개월 후 대형 건설사 공략"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">리스크 및 대응 방안</label>
                <textarea 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 outline-none"
                  rows={3}
                  placeholder="예시: 경쟁사의 가격 인하 대응 가능성 → 순환골재 원가 우위로 추가 10% 인하 여력 있음"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template 2: 제조 원가 계산표 */}
      <div className="min-h-[297mm] p-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="mb-8">
          <div className="text-purple-600 mb-2 flex items-center gap-2">
            <Calculator className="h-6 w-6" />
            TEMPLATE 2
          </div>
          <h2 className="text-4xl mb-4">제조 원가 계산표</h2>
          <div className="h-1 w-24 bg-purple-600"></div>
          <p className="text-gray-600 mt-4">순환골재 스페이서 제조 원가 상세 계산</p>
        </div>

        <div className="space-y-6">
          {/* 사용 방법 */}
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-purple-600" />
              사용 방법
            </h3>
            <ol className="text-sm space-y-1 list-decimal list-inside text-gray-700">
              <li>하이콘 코리아 회계팀에 순환골재 실제 원가 문의</li>
              <li>시멘트 공급업체에 대량 구매 단가 확인</li>
              <li>각 항목별 실제 비용 입력</li>
              <li>최종 제조 원가 및 목표 판매가 산출</li>
            </ol>
          </div>

          {/* 원재료비 */}
          <div className="border-2 border-blue-200 rounded-xl overflow-hidden">
            <div className="bg-blue-100 p-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Package className="h-6 w-6 text-blue-600" />
                1. 원재료비 (스페이서 1개당)
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-3 gap-4 text-sm font-semibold bg-blue-50 p-3 rounded">
                <div>항목</div>
                <div className="text-center">단위</div>
                <div className="text-right">금액 (원)</div>
              </div>

              {[
                { item: '순환골재', unit: '약 80g/개', note: '하이콘 자체 생산', color: 'green' },
                { item: '시멘트', unit: '약 20g/개', note: '외부 구매', color: 'gray' },
                { item: '혼화제 (첨가제)', unit: '약 2g/개', note: '품질 개선용', color: 'gray' },
                { item: '물', unit: '약 30ml/개', note: '배합용', color: 'gray' },
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 items-center py-3 border-b last:border-0">
                  <div>
                    <div className="font-semibold">{row.item}</div>
                    <div className="text-xs text-gray-500">{row.note}</div>
                  </div>
                  <div className="text-center text-sm text-gray-600">{row.unit}</div>
                  <div className="text-right">
                    <input 
                      type="text" 
                      placeholder="___원"
                      className={`w-full text-right bg-${row.color}-50 border-b-2 border-dashed border-${row.color}-600 p-2 focus:border-${row.color}-800 outline-none font-semibold`}
                    />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-3 gap-4 items-center py-3 bg-blue-100 rounded font-semibold">
                <div>원재료비 합계</div>
                <div></div>
                <div className="text-right">
                  <input 
                    type="text" 
                    placeholder="___원"
                    className="w-full text-right bg-white border-2 border-blue-600 p-2 rounded outline-none text-blue-600 text-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 제조 경비 */}
          <div className="border-2 border-orange-200 rounded-xl overflow-hidden">
            <div className="bg-orange-100 p-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Factory className="h-6 w-6 text-orange-600" />
                2. 제조 경비 (스페이서 1개당)
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-3 gap-4 text-sm font-semibold bg-orange-50 p-3 rounded">
                <div>항목</div>
                <div className="text-center">계산 방법</div>
                <div className="text-right">금액 (원)</div>
              </div>

              {[
                { item: '인건비 (성형)', calc: '1명이 시간당 500개 성형', note: '월급 ÷ 월 생산량' },
                { item: '인건비 (포장)', calc: '1명이 시간당 1000개 포장', note: '월급 ÷ 월 생산량' },
                { item: '전력비 (성형기)', calc: '시간당 5kW 소비', note: 'kW당 단가 × 가동시간' },
                { item: '가스비 (양생)', calc: '제품 1개당 양생 비용', note: '양생실 가스비 ÷ 생산량' },
                { item: '설비 감가상각', calc: '설비 구매가 ÷ 내용연수 ÷ 연생산량', note: '10년 감가상각 기준' },
                { item: '금형 상각비', calc: '금형 제작비 ÷ 수명 ÷ 생산량', note: '100만개 생산 기준' },
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 items-center py-3 border-b last:border-0">
                  <div>
                    <div className="font-semibold">{row.item}</div>
                    <div className="text-xs text-gray-500">{row.note}</div>
                  </div>
                  <div className="text-center text-xs text-gray-600">{row.calc}</div>
                  <div className="text-right">
                    <input 
                      type="text" 
                      placeholder="___원"
                      className="w-full text-right bg-orange-50 border-b-2 border-dashed border-orange-600 p-2 focus:border-orange-800 outline-none font-semibold"
                    />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-3 gap-4 items-center py-3 bg-orange-100 rounded font-semibold">
                <div>제조 경비 합계</div>
                <div></div>
                <div className="text-right">
                  <input 
                    type="text" 
                    placeholder="___원"
                    className="w-full text-right bg-white border-2 border-orange-600 p-2 rounded outline-none text-orange-600 text-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 간접비 */}
          <div className="border-2 border-purple-200 rounded-xl overflow-hidden">
            <div className="bg-purple-100 p-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Building2 className="h-6 w-6 text-purple-600" />
                3. 간접비 및 기타 경비 (스페이서 1개당)
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-3 gap-4 text-sm font-semibold bg-purple-50 p-3 rounded">
                <div>항목</div>
                <div className="text-center">비고</div>
                <div className="text-right">금액 (원)</div>
              </div>

              {[
                { item: '공장 임대료', note: '월 임대료 ÷ 월 생산량' },
                { item: '관리직 인건비', note: '관리직 급여 ÷ 월 생산량' },
                { item: '포장재 (박스, 테이프)', note: '100개 단위 포장 기준' },
                { item: '품질 검사비', note: '샘플 테스트 비용' },
                { item: '보험료', note: '제조물 책임 보험 등' },
                { item: '기타 잡비', note: '예비비 5%' },
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 items-center py-3 border-b last:border-0">
                  <div className="font-semibold">{row.item}</div>
                  <div className="text-center text-xs text-gray-600">{row.note}</div>
                  <div className="text-right">
                    <input 
                      type="text" 
                      placeholder="___원"
                      className="w-full text-right bg-purple-50 border-b-2 border-dashed border-purple-600 p-2 focus:border-purple-800 outline-none font-semibold"
                    />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-3 gap-4 items-center py-3 bg-purple-100 rounded font-semibold">
                <div>간접비 합계</div>
                <div></div>
                <div className="text-right">
                  <input 
                    type="text" 
                    placeholder="___원"
                    className="w-full text-right bg-white border-2 border-purple-600 p-2 rounded outline-none text-purple-600 text-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 최종 원가 및 판매가 */}
          <div className="border-4 border-green-600 rounded-xl overflow-hidden">
            <div className="bg-green-600 text-white p-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                4. 최종 제조 원가 및 목표 판매가
              </h3>
            </div>
            <div className="p-6 bg-green-50 space-y-4">
              <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-lg border-2 border-green-600">
                <div className="font-semibold text-lg">총 제조 원가 (A+B+C)</div>
                <div className="text-right">
                  <input 
                    type="text" 
                    placeholder="___원/개"
                    className="w-full text-right bg-green-50 border-b-2 border-green-600 p-2 focus:border-green-800 outline-none text-green-600 text-2xl font-bold"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 items-center p-3 bg-white rounded">
                  <div>
                    <div className="font-semibold">도매가 (제조원가 + 30% 마진)</div>
                    <div className="text-xs text-gray-500">유통업체 납품가</div>
                  </div>
                  <div className="text-right">
                    <input 
                      type="text" 
                      placeholder="___원/개"
                      className="w-full text-right bg-blue-50 border-b-2 border-dashed border-blue-600 p-2 focus:border-blue-800 outline-none text-blue-600 text-xl font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 items-center p-3 bg-white rounded">
                  <div>
                    <div className="font-semibold">소비자가 (도매가 + 유통마진 20%)</div>
                    <div className="text-xs text-gray-500">최종 판매가 (VAT 포함)</div>
                  </div>
                  <div className="text-right">
                    <input 
                      type="text" 
                      placeholder="___원/개"
                      className="w-full text-right bg-orange-50 border-b-2 border-dashed border-orange-600 p-2 focus:border-orange-800 outline-none text-orange-600 text-xl font-semibold"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border-2 border-gray-300">
                <h4 className="font-semibold mb-3">원가 절감 포인트 메모</h4>
                <textarea 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-600 outline-none"
                  rows={4}
                  placeholder="예시: 순환골재 자체 생산으로 원재료비 40% 절감, 기존 설비 활용으로 감가상각비 최소화"
                ></textarea>
              </div>
            </div>
          </div>

          {/* 손익분기점 계산 */}
          <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-gray-600" />
              5. 손익분기점 계산
            </h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <label className="block text-sm font-semibold mb-2">월 고정비 (임대료, 관리직 인건비 등)</label>
                  <input 
                    type="text" 
                    placeholder="___만원/월"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 outline-none"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <label className="block text-sm font-semibold mb-2">개당 공헌이익 (판매가 - 변동비)</label>
                  <input 
                    type="text" 
                    placeholder="___원/개"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 outline-none"
                  />
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-600">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-lg">손익분기점 판매량</div>
                    <div className="text-xs text-gray-600">월 고정비 ÷ 개당 공헌이익</div>
                  </div>
                  <div className="text-right">
                    <input 
                      type="text" 
                      placeholder="___개/월"
                      className="text-right bg-white border-2 border-blue-600 p-3 rounded-lg outline-none text-blue-600 text-2xl font-bold w-48"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template 3: 경쟁사 조사 체크리스트 */}
      <div className="min-h-[297mm] p-12 bg-white">
        <div className="mb-8">
          <div className="text-red-600 mb-2 flex items-center gap-2">
            <Search className="h-6 w-6" />
            TEMPLATE 3
          </div>
          <h2 className="text-4xl mb-4">경쟁사 가격 조사 체크리스트</h2>
          <div className="h-1 w-24 bg-red-600"></div>
          <p className="text-gray-600 mt-4">단계별 조사 항목 및 실행 가이드</p>
        </div>

        <div className="space-y-6">
          {/* Phase 1: 온라인 조사 */}
          <div className="border-2 border-blue-200 rounded-xl overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Globe className="h-6 w-6" />
                Phase 1: 온라인 가격 조사 (소요 시간: 2시간)
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  {
                    site: '쿠팡',
                    url: 'coupang.com',
                    keywords: ['철근 스페이서', '콘크리트 스페이서', '플라스틱 스페이서'],
                    tasks: [
                      '상위 10개 제품 가격 기록',
                      '리뷰 수 및 평점 확인',
                      '주요 불만사항 파악',
                      '배송비 포함 여부 확인'
                    ]
                  },
                  {
                    site: '네이버 쇼핑',
                    url: 'shopping.naver.com',
                    keywords: ['철근받침대', '스페이서', '건설자재'],
                    tasks: [
                      '최저가 순 정렬 후 상위 10개 기록',
                      '판매자 유형 확인 (제조사/도매/소매)',
                      '대량 구매 할인 여부',
                      '배송 기간 확인'
                    ]
                  },
                  {
                    site: 'G마켓 / 옥션',
                    url: 'gmarket.co.kr / auction.co.kr',
                    keywords: ['스페이서 도매', '철근 스페이서 대량'],
                    tasks: [
                      '도매 전문 판매자 찾기',
                      '1,000개 단위 가격 확인',
                      '사업자 할인 조건',
                      '배송 조건'
                    ]
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">{item.site}</h4>
                        <div className="text-xs text-gray-600">{item.url}</div>
                      </div>
                      <input type="checkbox" className="w-6 h-6" />
                    </div>
                    <div className="mb-3">
                      <div className="text-sm font-semibold mb-1">검색 키워드:</div>
                      <div className="flex gap-2 flex-wrap">
                        {item.keywords.map((kw, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{kw}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold mb-2">조사 항목:</div>
                      <div className="space-y-1">
                        {item.tasks.map((task, idx) => (
                          <label key={idx} className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>{task}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phase 2: 제조업체 직접 문의 */}
          <div className="border-2 border-green-200 rounded-xl overflow-hidden">
            <div className="bg-green-600 text-white p-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Phone className="h-6 w-6" />
                Phase 2: 제조업체 직접 문의 (소요 시간: 1주일)
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4 bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">제조업체 찾기</h4>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>네이버 검색: "콘크리트 스페이서 제조" → 상위 5개 업체 리스트 작성</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>구글 검색: "플라스틱 스페이서 공장" → 상위 3개 업체 리스트 작성</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>토탈건설 B2B 플랫폼에서 스페이서 판매업체 확인</span>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="border-2 border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">제조업체 #{num}</h4>
                      <input type="checkbox" className="w-5 h-5" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">회사명</label>
                        <input 
                          type="text" 
                          placeholder="업체명 입력"
                          className="w-full p-2 border rounded focus:border-green-600 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">전화번호</label>
                        <input 
                          type="text" 
                          placeholder="000-0000-0000"
                          className="w-full p-2 border rounded focus:border-green-600 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">담당자명</label>
                        <input 
                          type="text" 
                          placeholder="담당자 이름"
                          className="w-full p-2 border rounded focus:border-green-600 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">제품 유형</label>
                        <input 
                          type="text" 
                          placeholder="콘크리트/플라스틱/철재"
                          className="w-full p-2 border rounded focus:border-green-600 outline-none"
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="block text-xs text-gray-600 mb-1">질문 및 답변 메모</label>
                      <textarea 
                        className="w-full p-2 border rounded focus:border-green-600 outline-none text-sm"
                        rows={3}
                        placeholder="Q1. 25mm 스페이서 1,000개 구매 시 가격?
Q2. 최소 주문 수량?
Q3. 납기 기간?
Q4. 주요 거래처?"
                      ></textarea>
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <label className="block text-gray-600">개당 가격</label>
                        <input type="text" placeholder="___원" className="w-full p-1 border rounded" />
                      </div>
                      <div>
                        <label className="block text-gray-600">MOQ</label>
                        <input type="text" placeholder="___개" className="w-full p-1 border rounded" />
                      </div>
                      <div>
                        <label className="block text-gray-600">납기</label>
                        <input type="text" placeholder="___일" className="w-full p-1 border rounded" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phase 3: 현장 방문 조사 */}
          <div className="border-2 border-orange-200 rounded-xl overflow-hidden">
            <div className="bg-orange-600 text-white p-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Building2 className="h-6 w-6" />
                Phase 3: 유통업체 및 현장 방문 (소요 시간: 3일)
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  {
                    type: '건자재 도매상',
                    count: 3,
                    questions: [
                      '월평균 스페이서 판매량은?',
                      '가장 많이 팔리는 제품은?',
                      '도매가는 얼마인가?',
                      '신규 공급업체 입점 조건은?',
                      '고객 불만사항은?'
                    ]
                  },
                  {
                    type: '건설 현장',
                    count: 2,
                    questions: [
                      '어떤 스페이서를 사용 중인가?',
                      '월평균 사용량은?',
                      '현재 제품의 장단점은?',
                      '구매 단가는?',
                      '신제품으로 교체 의향은?'
                    ]
                  },
                  {
                    type: '철근 가공업체',
                    count: 2,
                    questions: [
                      '철근과 스페이서 함께 납품하나?',
                      '스페이서 구매 채널은?',
                      '월평균 판매량은?',
                      '마진율은?',
                      '협력 가능성은?'
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-lg">{category.type} (목표: {category.count}곳)</h4>
                      <div className="text-sm">
                        <span className="text-gray-600">진행률: </span>
                        <input type="text" placeholder="0" className="w-8 text-center border-b" /> / {category.count}
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      {category.questions.map((q, idx) => (
                        <label key={idx} className="flex items-start gap-2">
                          <input type="checkbox" className="w-4 h-4 mt-0.5" />
                          <span>{q}</span>
                        </label>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="block text-xs text-gray-600 mb-1">방문 일지</label>
                      <textarea 
                        className="w-full p-2 border rounded focus:border-orange-600 outline-none text-xs"
                        rows={2}
                        placeholder="일자, 장소, 담당자, 주요 내용 기록"
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phase 4: 샘플 구매 및 비교 */}
          <div className="border-2 border-purple-200 rounded-xl overflow-hidden">
            <div className="bg-purple-600 text-white p-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Package className="h-6 w-6" />
                Phase 4: 경쟁사 샘플 구매 및 품질 비교 (소요 시간: 1주일)
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4 bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">구매 리스트</h4>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>플라스틱 스페이서 (국내 대표 브랜드) 100개</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>콘크리트 스페이서 (국내) 100개</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>수입 스페이서 (독일/일본) 50개</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>중국 저가 제품 100개</span>
                  </label>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { item: '플라스틱 A사', type: 'plastic' },
                  { item: '콘크리트 B사', type: 'concrete' },
                  { item: '수입 제품 (독일)', type: 'import' },
                  { item: '중국 제품', type: 'china' }
                ].map((product, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">{product.item}</h4>
                      <input type="checkbox" className="w-5 h-5" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-3 text-xs">
                      <div>
                        <label className="block text-gray-600 mb-1">구매처</label>
                        <input type="text" placeholder="쿠팡/제조사" className="w-full p-1 border rounded" />
                      </div>
                      <div>
                        <label className="block text-gray-600 mb-1">구매가</label>
                        <input type="text" placeholder="___원" className="w-full p-1 border rounded" />
                      </div>
                      <div>
                        <label className="block text-gray-600 mb-1">수량</label>
                        <input type="text" placeholder="___개" className="w-full p-1 border rounded" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="block text-xs text-gray-600 mb-1">품질 평가 (5점 만점)</label>
                      <div className="grid grid-cols-5 gap-2 text-xs">
                        {['강도', '정밀도', '마감', '무게', '가성비'].map((criterion, idx) => (
                          <div key={idx}>
                            <div className="text-gray-600 mb-1">{criterion}</div>
                            <input type="text" placeholder="_/5" className="w-full p-1 border rounded text-center" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2">
                      <label className="block text-xs text-gray-600 mb-1">종합 평가</label>
                      <textarea 
                        className="w-full p-2 border rounded text-xs"
                        rows={2}
                        placeholder="장점, 단점, 하이콘 제품과 비교 시 차별점"
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 조사 완료 체크 */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl mb-4">✅ 전체 조사 완료 체크</h3>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl mb-2">□</div>
                <div className="text-sm">Phase 1<br/>완료</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl mb-2">□</div>
                <div className="text-sm">Phase 2<br/>완료</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl mb-2">□</div>
                <div className="text-sm">Phase 3<br/>완료</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl mb-2">□</div>
                <div className="text-sm">Phase 4<br/>완료</div>
              </div>
            </div>
            <div className="text-sm text-green-100">
              4개 Phase를 모두 완료하면 Template 1(가격 비교 분석표)를 작성할 수 있습니다!
            </div>
          </div>
        </div>
      </div>

      {/* 마지막 페이지 - 활용 가이드 */}
      <div className="min-h-[297mm] p-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col justify-center">
        <div className="text-center space-y-8">
          <h2 className="text-5xl text-gray-900">템플릿 활용 가이드</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-left">
              <h3 className="text-2xl mb-4 text-blue-600">📋 템플릿 작성 순서</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">1</div>
                  <div>
                    <strong>Template 3 (체크리스트)</strong>부터 시작<br/>
                    <span className="text-sm text-gray-600">→ Phase 1~4를 순차적으로 진행하며 정보 수집</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">2</div>
                  <div>
                    <strong>Template 2 (제조 원가)</strong> 계산<br/>
                    <span className="text-sm text-gray-600">→ 하이콘 내부 데이터로 실제 원가 산출</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">3</div>
                  <div>
                    <strong>Template 1 (가격 비교)</strong> 작성<br/>
                    <span className="text-sm text-gray-600">→ 수집한 정보와 계산한 원가로 경쟁력 분석</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-left">
              <h3 className="text-2xl mb-4 text-orange-600">⏰ 예상 소요 시간</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded">
                  <div className="text-3xl mb-2">2시간</div>
                  <div className="text-sm text-gray-600">온라인 조사</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded">
                  <div className="text-3xl mb-2">1주일</div>
                  <div className="text-sm text-gray-600">제조업체 문의</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded">
                  <div className="text-3xl mb-2">3일</div>
                  <div className="text-sm text-gray-600">현장 방문</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl mb-4">💪 이 템플릿의 강점</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" />
                  <span>실제 시장 가격을 직접 조사하여 정확도 ↑</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" />
                  <span>하이콘 내부 원가 데이터로 현실적 계산</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" />
                  <span>단계별 체크리스트로 누락 방지</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" />
                  <span>경쟁사 대비 가격 경쟁력을 한눈에 파악</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-600 mt-12">
            <p>주식회사 하이콘 코리아</p>
            <p>철근 스페이서 가격 분석 템플릿</p>
            <p className="mt-4">2024년 11월</p>
            <p className="text-xs text-gray-500 mt-2">본 템플릿은 인쇄하여 수기 작성하거나, PDF 편집 프로그램으로 입력 가능합니다</p>
          </div>
        </div>
      </div>
    </div>
  );
}

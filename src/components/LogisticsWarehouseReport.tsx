import { Warehouse, TrendingUp, Package, DollarSign, Building2, Zap, Shield, Leaf, Truck, Thermometer, BarChart3, CheckCircle2, AlertCircle, Target, Users, MapPin, ArrowRight, Container, ParkingSquare, Boxes, Camera } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LogisticsWarehouseReport() {
  return (
    <div className="bg-white w-full max-w-[210mm] mx-auto">
      {/* 커버 페이지 */}
      <div className="print-page min-h-[297mm] bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white p-16 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-8">
            SMART LOGISTICS COMPLEX PROJECT 2025
          </div>
          <h1 className="text-6xl mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
            소형 창고 +<br />야적장 복합<br />임대 사업 계획서
          </h1>
          <div className="h-2 w-32 bg-white mb-8"></div>
          <p className="text-2xl mb-4">화성 이화리 2,500평 부지 개발 프로젝트</p>
          <p className="text-xl text-blue-100">
            Small Warehouse + Open Storage Yard Leasing Business Plan
          </p>
        </div>

        <div className="relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-6">
            <h3 className="text-xl mb-4">프로젝트 개요</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-blue-100 mb-1">위치</div>
                <div>경기도 화성시 이화리 216-1, 213, 216, 산53</div>
              </div>
              <div>
                <div className="text-blue-100 mb-1">전체 부지</div>
                <div>약 2,500평 (8,264㎡)</div>
              </div>
              <div>
                <div className="text-blue-100 mb-1">건축 면적</div>
                <div>250평 (스마트 소형 물류창고)</div>
              </div>
              <div>
                <div className="text-blue-100 mb-1">사업 유형</div>
                <div>창고 + 야적장 + 주차장 복합 임대</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-blue-100">주식회사 하이콘 코리아</p>
            <p className="text-sm text-blue-200">2025년 11월</p>
          </div>
        </div>
      </div>

      {/* 1. 사업 모델 및 부지 활용 계획 */}
      <div className="print-page min-h-[297mm] p-12 bg-white">
        <div className="mb-8">
          <div className="text-blue-600 mb-2 flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            CHAPTER 1
          </div>
          <h2 className="text-4xl mb-4">사업 모델 및 부지 활용 계획</h2>
          <div className="h-1 w-24 bg-blue-600"></div>
        </div>

        <div className="space-y-6">
          {/* 핵심 사업 모델 */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl">
            <h3 className="text-xl mb-4">💡 핵심 사업 모델</h3>
            <p className="text-lg mb-4">
              2,500평 전체를 대형 건물로 개발하는 대신, <strong>250평 소형 스마트 창고</strong>만 건축하고 
              나머지 2,250평은 <strong>야적장, 주차장, 컨테이너 보관소</strong>로 활용하여 
              <strong>투자비는 낮추고 수익성은 높이는 전략</strong>
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
                <Warehouse className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl mb-1">250평</div>
                <div className="text-sm text-blue-100">스마트 창고</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
                <Container className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl mb-1">1,500평</div>
                <div className="text-sm text-blue-100">야적장</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
                <ParkingSquare className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl mb-1">500평</div>
                <div className="text-sm text-blue-100">주차장</div>
              </div>
            </div>
          </div>

          {/* 부지 활용 계획 */}
          <div className="border-2 border-indigo-200 rounded-xl overflow-hidden">
            <div className="bg-indigo-50 p-4 border-b border-indigo-200">
              <h3 className="text-xl flex items-center gap-2">
                <MapPin className="h-5 w-5 text-indigo-600" />
                2,500평 부지 활용 계획 (상세)
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white p-3 rounded-lg">
                      <Warehouse className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg">1️⃣ 스마트 물류 창고 (250평)</h4>
                        <Badge className="bg-blue-600 text-white">핵심 시설</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="text-gray-600 mb-1">건축 면적</div>
                          <div>250평 (826㎡)</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">층고</div>
                          <div>10m (철골 구조)</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">주요 용도</div>
                          <div>일반 화물, 택배 보관</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">특징</div>
                          <div>WMS, IoT, CCTV 완비</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-blue-200">
                        <div className="text-sm text-gray-600 mb-1">예상 임대료</div>
                        <div className="text-xl text-blue-600">월 500만원 (평당 20,000원)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white p-3 rounded-lg">
                      <Container className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg">2️⃣ 야적장 (오픈 스토리지) (1,500평)</h4>
                        <Badge className="bg-green-600 text-white">고수익</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="text-gray-600 mb-1">야적장 면적</div>
                          <div>1,500평 (4,958㎡)</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">바닥 포장</div>
                          <div>콘크리트 / 아스콘 (선택)</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">주요 용도</div>
                          <div>컨테이너, 건축 자재, 중장비 보관</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">특징</div>
                          <div>CCTV 24시간 감시, 펜스 설치</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-green-200">
                        <div className="text-sm text-gray-600 mb-1">예상 임대료</div>
                        <div className="text-xl text-green-600">월 750만원 (평당 5,000원)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600 text-white p-3 rounded-lg">
                      <ParkingSquare className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg">3️⃣ 대형 화물차 주차장 (500평)</h4>
                        <Badge className="bg-purple-600 text-white">추가 수익</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="text-gray-600 mb-1">주차 면적</div>
                          <div>500평 (1,653㎡)</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">주차 가능 대수</div>
                          <div>화물차 20~25대</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">주요 고객</div>
                          <div>화물차 기사, 물류 기업</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">특징</div>
                          <div>야간 보관, 월 정기 계약</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-purple-200">
                        <div className="text-sm text-gray-600 mb-1">예상 임대료</div>
                        <div className="text-xl text-purple-600">월 300만원 (대당 15만원 × 20대)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-600 text-white p-3 rounded-lg">
                      <Leaf className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg mb-2">4️⃣ 기타 (조경, 진입로) (250평)</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="text-gray-600 mb-1">진입로</div>
                          <div>아스콘 포장 (폭 6m)</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">조경</div>
                          <div>외곽 녹지, 태양광 설치 공간</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 월간 수익 요약 */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-xl">
            <h3 className="text-xl mb-4">💰 월간 총 수익 요약</h3>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <div className="text-sm text-cyan-100 mb-1">창고 임대</div>
                <div className="text-xl">500만원</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <div className="text-sm text-cyan-100 mb-1">야적장 임대</div>
                <div className="text-xl">750만원</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <div className="text-sm text-cyan-100 mb-1">주차장 임대</div>
                <div className="text-xl">300만원</div>
              </div>
              <div className="bg-white/40 backdrop-blur-sm p-3 rounded-lg border-2 border-white">
                <div className="text-sm mb-1">월 총 수익</div>
                <div className="text-2xl">1,550만원</div>
              </div>
            </div>
            <div className="text-center text-lg">
              📊 연간 총 수익: <strong>1억 8,600만원</strong>
            </div>
          </div>

          {/* 시장 경쟁력 */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-amber-600" />
              이 사업 모델의 시장 경쟁력
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>낮은 초기 투자비:</strong> 대형 건물 대비 1/8 수준 (10억 vs 80억)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>높은 수익률:</strong> ROI 15~18% (대형 물류센터 7% 대비 2배)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>빠른 임대:</strong> 소형 창고 + 야적장은 수요가 매우 많음</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>운영 간편:</strong> 대형 시설 대비 관리 인력 최소화</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>다양한 고객층:</strong> 중소 물류업체, 건설사, 화물차 기사</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>확장 가능성:</strong> 향후 250평 창고 추가 건축 가능</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 투자비 및 수익성 분석 */}
      <div className="print-page min-h-[297mm] p-12 bg-white">
        <div className="mb-8">
          <div className="text-green-600 mb-2 flex items-center gap-2">
            <DollarSign className="h-6 w-6" />
            CHAPTER 2
          </div>
          <h2 className="text-4xl mb-4">투자비 및 수익성 분석</h2>
          <div className="h-1 w-24 bg-green-600"></div>
        </div>

        <div className="space-y-6">
          {/* 총 투자비 */}
          <div className="border-2 border-green-200 rounded-xl overflow-hidden">
            <div className="bg-green-50 p-4 border-b border-green-200">
              <h3 className="text-xl flex items-center gap-2">
                <Building2 className="h-5 w-5 text-green-600" />
                총 투자비 내역 (상세)
              </h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="p-3 text-left">구분</th>
                      <th className="p-3 text-left">세부 내역</th>
                      <th className="p-3 text-right">단가</th>
                      <th className="p-3 text-right">금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-blue-50">
                      <td className="p-3" rowSpan={5}><strong>1. 창고 건축비</strong></td>
                      <td className="p-3">철골 구조 공사</td>
                      <td className="p-3 text-right">평당 200만원</td>
                      <td className="p-3 text-right">500,000,000원</td>
                    </tr>
                    <tr className="border-b bg-blue-50">
                      <td className="p-3">외벽, 지붕 공사</td>
                      <td className="p-3 text-right">평당 50만원</td>
                      <td className="p-3 text-right">125,000,000원</td>
                    </tr>
                    <tr className="border-b bg-blue-50">
                      <td className="p-3">바닥 에폭시 + 독(Dock)</td>
                      <td className="p-3 text-right">평당 30만원</td>
                      <td className="p-3 text-right">75,000,000원</td>
                    </tr>
                    <tr className="border-b bg-blue-50">
                      <td className="p-3">전기, 소방, 통신 설비</td>
                      <td className="p-3 text-right">평당 40만원</td>
                      <td className="p-3 text-right">100,000,000원</td>
                    </tr>
                    <tr className="border-b bg-blue-50">
                      <td className="p-3"><strong>소계</strong></td>
                      <td className="p-3 text-right"><strong>평당 320만원</strong></td>
                      <td className="p-3 text-right"><strong>800,000,000원</strong></td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-3"><strong>2. 야적장 조성</strong></td>
                      <td className="p-3">1,500평 콘크리트 포장 (두께 15cm)</td>
                      <td className="p-3 text-right">평당 8만원</td>
                      <td className="p-3 text-right">120,000,000원</td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-3"><strong>3. 주차장 조성</strong></td>
                      <td className="p-3">500평 아스콘 포장 + 라인 마킹</td>
                      <td className="p-3 text-right">평당 5만원</td>
                      <td className="p-3 text-right">25,000,000원</td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-3" rowSpan={3}><strong>4. 토목 및 기반</strong></td>
                      <td className="p-3">부지 정리, 절성토</td>
                      <td className="p-3 text-right">일괄</td>
                      <td className="p-3 text-right">50,000,000원</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">진입로 아스콘 포장 (250평)</td>
                      <td className="p-3 text-right">평당 6만원</td>
                      <td className="p-3 text-right">15,000,000원</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">배수로, 우수 처리</td>
                      <td className="p-3 text-right">일괄</td>
                      <td className="p-3 text-right">20,000,000원</td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-3"><strong>5. 외곽 펜스 및 보안</strong></td>
                      <td className="p-3">철재 펜스 (높이 2.5m) + 출입문</td>
                      <td className="p-3 text-right">m당 12만원 × 400m</td>
                      <td className="p-3 text-right">48,000,000원</td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-3" rowSpan={3}><strong>6. 스마트 시스템</strong></td>
                      <td className="p-3">CCTV 통합 관제 (20대)</td>
                      <td className="p-3 text-right">대당 250만원</td>
                      <td className="p-3 text-right">50,000,000원</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">IoT 센서, 출입 통제 시스템</td>
                      <td className="p-3 text-right">일괄</td>
                      <td className="p-3 text-right">30,000,000원</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">WMS (창고관리시스템) 구축</td>
                      <td className="p-3 text-right">일괄</td>
                      <td className="p-3 text-right">20,000,000원</td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-3"><strong>7. 태양광 발전</strong></td>
                      <td className="p-3">창고 지붕 태양광 (100kW)</td>
                      <td className="p-3 text-right">kW당 120만원</td>
                      <td className="p-3 text-right">120,000,000원</td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-3"><strong>8. 조경 및 기타</strong></td>
                      <td className="p-3">조경, LED 가로등, 사무실 컨테이너</td>
                      <td className="p-3 text-right">일괄</td>
                      <td className="p-3 text-right">50,000,000원</td>
                    </tr>

                    <tr className="border-b bg-indigo-50">
                      <td className="p-3"><strong>9. 설계 및 감리</strong></td>
                      <td className="p-3"><strong>프리미엄 설계사 (정림건축 등)</strong></td>
                      <td className="p-3 text-right"><strong>평당 20만원 × 250평</strong></td>
                      <td className="p-3 text-right"><strong>50,000,000원</strong></td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-3"><strong>10. 인허가 비용</strong></td>
                      <td className="p-3">건축허가, 개발행위허가, 각종 부담금</td>
                      <td className="p-3 text-right">일괄</td>
                      <td className="p-3 text-right">30,000,000원</td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-3"><strong>11. 예비비</strong></td>
                      <td className="p-3">공사비 증액, 긴급 상황 대비</td>
                      <td className="p-3 text-right">10%</td>
                      <td className="p-3 text-right">70,000,000원</td>
                    </tr>

                    <tr className="bg-green-600 text-white">
                      <td className="p-3" colSpan={3}><strong>총 투자비</strong></td>
                      <td className="p-3 text-right"><strong>1,173,000,000원</strong></td>
                    </tr>
                    <tr className="bg-green-500 text-white">
                      <td className="p-3" colSpan={3}><strong>반올림 (약)</strong></td>
                      <td className="p-3 text-right text-2xl"><strong>12억원</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 면책 조항 */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg mb-2 text-yellow-900">⚠️ 중요 안내 (면책 조항)</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>본 보고서에 제시된 <strong>건설비, 임대료, 수익률 등의 수치는 참고용 추정치</strong>입니다.</p>
                  <p>실제 투자 결정 시 반드시 다음을 확인하셔야 합니다:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>건설사 정식 견적 (토목, 건축, 설비) <strong>3개사 이상 비교</strong></li>
                    <li>화성 이화리 인근 <strong>야적장 임대 시세 실거래 조사</strong></li>
                    <li>금융기관 PF 대출 조건 및 금리</li>
                    <li>세무사/회계사를 통한 수익성 검토</li>
                    <li>화성시 용도지역, 건폐율, 용적률 확인</li>
                  </ul>
                  <p className="pt-2 border-t border-yellow-200 mt-3">
                    <strong>주식회사 하이콘 코리아는 본 보고서 내용의 정확성을 보증하지 않으며, 투자 결정에 따른 손실에 대해 책임을 지지 않습니다.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 수익성 분석 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
              <h3 className="text-lg mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                월간 수익 구조
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between pb-2 border-b">
                  <span>창고 임대 (250평)</span>
                  <span>5,000,000원</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>야적장 임대 (1,500평)</span>
                  <span>7,500,000원</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>주차장 임대 (20대)</span>
                  <span>3,000,000원</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>태양광 REC 판매</span>
                  <span className="text-green-600">+500,000원</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-blue-300">
                  <span><strong>총 수입</strong></span>
                  <span><strong>16,000,000원</strong></span>
                </div>
                <div className="flex justify-between pb-2 border-b text-red-600">
                  <span>운영비 (전기, 관리, 보안)</span>
                  <span>-1,000,000원</span>
                </div>
                <div className="flex justify-between pb-2 border-b text-red-600">
                  <span>재산세 등 (월 환산)</span>
                  <span>-500,000원</span>
                </div>
                <div className="flex justify-between pt-2 bg-blue-100 p-3 rounded-lg">
                  <span><strong>순수익 (NOI)</strong></span>
                  <span><strong>14,500,000원/월</strong></span>
                </div>
                <div className="bg-blue-600 text-white p-3 rounded-lg text-center">
                  <div className="text-sm mb-1">연간 순수익</div>
                  <div className="text-2xl">174,000,000원</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
              <h3 className="text-lg mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                투자 수익률 분석
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">총 투자비</div>
                  <div className="text-3xl">12억원</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">연간 수익률 (ROI)</div>
                  <div className="text-4xl text-purple-600">14.5%</div>
                  <p className="text-xs text-gray-500 mt-1">연 1.74억원 ÷ 투자비 12억원</p>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">투자 회수 기간</div>
                  <div className="text-4xl text-green-600">6.9년</div>
                  <p className="text-xs text-gray-500 mt-1">대출 활용 시 5년 이내 가능</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <p className="text-xs"><strong>💡 참고:</strong> 부동산 가치 상승, 임대료 인상 미포함</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg border-2 border-green-400">
                  <p className="text-sm"><strong>✅ 대형 물류센터 대비 2배 높은 수익률!</strong></p>
                  <p className="text-xs text-gray-600 mt-1">대형 물류센터 ROI: 7.35% vs 본 사업: 14.5%</p>
                </div>
              </div>
            </div>
          </div>

          {/* 실거래 시세 조사 템플릿 */}
          <div className="border-2 border-orange-200 rounded-xl overflow-hidden">
            <div className="bg-orange-600 text-white p-4">
              <h3 className="text-xl flex items-center gap-2">
                <Target className="h-5 w-5" />
                화성 이화리 인근 야적장 실거래 시세 조사 (필수)
              </h3>
              <p className="text-sm text-orange-100 mt-1">야적장 평당 5,000원은 추정치입니다. 반드시 실제 시세를 확인하세요!</p>
            </div>
            <div className="p-6 bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-3 text-left">번호</th>
                      <th className="border border-orange-200 p-3 text-left">위치</th>
                      <th className="border border-orange-200 p-3 text-left">면적 (평)</th>
                      <th className="border border-orange-200 p-3 text-left">바닥 포장</th>
                      <th className="border border-orange-200 p-3 text-right">평당 임대료</th>
                      <th className="border border-orange-200 p-3 text-left">용도</th>
                      <th className="border border-orange-200 p-3 text-left">출처</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <tr key={num} className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-3">{num}</td>
                        <td className="border border-gray-300 p-3 bg-yellow-50 text-gray-400">[조사 필요]</td>
                        <td className="border border-gray-300 p-3 bg-yellow-50 text-gray-400">[조사 필요]</td>
                        <td className="border border-gray-300 p-3 bg-yellow-50 text-gray-400">[조사 필요]</td>
                        <td className="border border-gray-300 p-3 bg-yellow-50 text-gray-400 text-right">[조사 필요]</td>
                        <td className="border border-gray-300 p-3 bg-yellow-50 text-gray-400">[조사 필요]</td>
                        <td className="border border-gray-300 p-3 bg-yellow-50 text-gray-400">[조사 필요]</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 bg-orange-50 p-4 rounded-lg">
                <h4 className="text-sm mb-2">📞 야적장 시세 조사 방법</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">1.</span>
                    <span>네이버 부동산 → "화성 야적장" 검색</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">2.</span>
                    <span>직방/부동산114 → 상업용 부동산 → 토지/야적장</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">3.</span>
                    <span>화성 지역 부동산 중개소 3곳 이상 전화 문의</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">4.</span>
                    <span>화성 산업단지 관리공단 문의 (031-XXX-XXXX)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 실행 계획 및 인허가 */}
      <div className="print-page min-h-[297mm] p-12 bg-white">
        <div className="mb-8">
          <div className="text-purple-600 mb-2 flex items-center gap-2">
            <Target className="h-6 w-6" />
            CHAPTER 3
          </div>
          <h2 className="text-4xl mb-4">실행 계획 및 인허가</h2>
          <div className="h-1 w-24 bg-purple-600"></div>
        </div>

        <div className="space-y-6">
          {/* 1단계: 인허가 및 설계 */}
          <div className="border-2 border-blue-200 rounded-xl overflow-hidden">
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <div>
                <div className="text-sm opacity-90">1단계 (0~4개월)</div>
                <div className="text-lg">인허가 및 프리미엄 설계</div>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full text-sm">
                핵심 단계
              </div>
            </div>
            <div className="p-6 bg-white space-y-6">
              
              {/* 1-1. 건축 인허가 */}
              <div className="border-2 border-blue-100 rounded-lg overflow-hidden">
                <div className="bg-blue-50 p-3 border-b border-blue-200">
                  <h4 className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    1-1. 건축 인허가 신청 (250평 소형 창고 기준)
                  </h4>
                </div>
                <div className="p-4 space-y-3">
                  <div className="bg-white border border-gray-200 rounded p-3">
                    <div className="text-sm mb-2">📋 필수 인허가 목록 (총 6개)</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600">1.</span>
                        <div>
                          <div>개발행위허가</div>
                          <div className="text-xs text-gray-500">화성시청 건축과 (3~4주)</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600">2.</span>
                        <div>
                          <div>건축허가</div>
                          <div className="text-xs text-gray-500">화성시청 건축과 (4~6주)</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600">3.</span>
                        <div>
                          <div>토지형질변경 허가</div>
                          <div className="text-xs text-gray-500">농지 → 대지 전환 (3주)</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600">4.</span>
                        <div>
                          <div>소방시설 설치 계획</div>
                          <div className="text-xs text-gray-500">화성소방서 (2~3주)</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600">5.</span>
                        <div>
                          <div>전기 인입 협의</div>
                          <div className="text-xs text-gray-500">한전 (2주)</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600">6.</span>
                        <div>
                          <div>상하수도 연결 허가</div>
                          <div className="text-xs text-gray-500">화성시 상하수도사업소 (2주)</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                    <div className="text-sm mb-2">⚠️ 인허가 주의사항</div>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span><strong>용도지역 확인:</strong> 이화리 부지가 계획관리지역인지 확인 (물류창고 가능 여부)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span><strong>건폐율/용적률:</strong> 화성시 도시계획조례 확인 (건폐율 60%, 용적률 200%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span><strong>농지전용부담금:</strong> 약 5,000~10,000원/㎡ 발생 가능</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600">•</span>
                        <span><strong>250평은 소규모:</strong> 환경영향평가, 교통영향평가 면제 가능</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <div className="text-sm mb-2">💡 인허가 단축 전략</div>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>통합심의 신청:</strong> 건축허가 + 개발행위허가 동시 진행 (1개월 단축)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>전문 대행사 활용:</strong> 인허가 전문 법무법인 또는 건축사무소 (성공률 95%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>사전 협의:</strong> 화성시청 담당 공무원 2회 사전 미팅</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 1-2. 프리미엄 설계사 선정 */}
              <div className="border-2 border-indigo-100 rounded-lg overflow-hidden">
                <div className="bg-indigo-50 p-3 border-b border-indigo-200">
                  <h4 className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                    1-2. 프리미엄 설계사 선정 (최고급 설계 기준)
                  </h4>
                </div>
                <div className="p-4 space-y-3">
                  <div className="bg-white border border-gray-200 rounded p-3">
                    <div className="text-sm mb-3">🏢 추천 물류 창고 전문 설계사 (국내 Top 5)</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2 bg-indigo-50 p-2 rounded">
                        <span className="text-indigo-600">1.</span>
                        <div className="flex-1">
                          <div><strong>정림건축종합건축사사무소</strong></div>
                          <div className="text-xs text-gray-600">대표 실적: 쿠팡 물류센터 (김포, 곤지암), CJ대한통운 메가허브</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 bg-indigo-50 p-2 rounded">
                        <span className="text-indigo-600">2.</span>
                        <div className="flex-1">
                          <div><strong>해안종합건축사사무소</strong></div>
                          <div className="text-xs text-gray-600">대표 실적: 이마트 물류센터 (여주), 롯데글로벌로지스 (이천)</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 bg-indigo-50 p-2 rounded">
                        <span className="text-indigo-600">3.</span>
                        <div className="flex-1">
                          <div><strong>간삼건축종합건축사사무소</strong></div>
                          <div className="text-xs text-gray-600">대표 실적: 네이버 풀필먼트센터, 삼성SDS 물류센터</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 bg-indigo-50 p-2 rounded">
                        <span className="text-indigo-600">4.</span>
                        <div className="flex-1">
                          <div><strong>희림건축</strong></div>
                          <div className="text-xs text-gray-600">대표 실적: 현대글로비스 물류센터, SSG 풀필먼트센터</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 bg-indigo-50 p-2 rounded">
                        <span className="text-indigo-600">5.</span>
                        <div className="flex-1">
                          <div><strong>삼우종합건축사사무소</strong></div>
                          <div className="text-xs text-gray-600">대표 실적: 한진 메가허브, GS리테일 물류센터</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 화성시 로컬 설계사 찾는 방법 추가 */}
                  <div className="bg-cyan-50 border-2 border-cyan-300 rounded p-4">
                    <div className="text-sm mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-cyan-600" />
                      <strong>💡 250평 소형 창고 → 화성시 로컬 설계사 추천!</strong>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="bg-white rounded p-3 border border-cyan-200">
                        <div className="mb-2"><strong>왜 로컬 설계사가 유리한가?</strong></div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-start gap-1">
                            <span className="text-cyan-600">✓</span>
                            <span>설계비 30~50% 저렴 (평당 7~12만원)</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <span className="text-cyan-600">✓</span>
                            <span>화성시청 인허가 담당자와 친분</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <span className="text-cyan-600">✓</span>
                            <span>소형 프로젝트 적극 응대</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <span className="text-cyan-600">✓</span>
                            <span>현장 수시 방문 가능 (소통 편함)</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded p-3 border border-cyan-200">
                        <div className="mb-2"><strong>화성시 로컬 설계사 찾는 4가지 방법</strong></div>
                        <ul className="space-y-2 text-xs">
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-600">1.</span>
                            <div>
                              <strong>대한건축사협회 경기도회 검색</strong>
                              <div className="text-gray-600">www.gkia.or.kr → "회원 검색" → "화성시" + "물류시설"</div>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-600">2.</span>
                            <div>
                              <strong>네이버 지도 검색</strong>
                              <div className="text-gray-600">"화성시 건축사사무소" 검색 → 전화 문의 (물류창고 설계 가능 여부)</div>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-600">3.</span>
                            <div>
                              <strong>화성시청 건축과 방문</strong>
                              <div className="text-gray-600">담당 공무원에게 "이화리 물류창고 설계사 추천" 요청</div>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-600">4.</span>
                            <div>
                              <strong>이화리 인근 부동산 중개소 문의</strong>
                              <div className="text-gray-600">지역 건설업체/설계사 정보 소개 받기</div>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-amber-50 rounded p-3 border border-amber-300">
                        <div className="mb-1 text-xs"><strong>💰 비용 비교 (250평 기준)</strong></div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-white p-2 rounded">
                            <div className="text-gray-600">대형 설계사 (정림, 해안)</div>
                            <div className="text-lg text-red-600">5,000만원</div>
                            <div className="text-gray-500">평당 20만원</div>
                          </div>
                          <div className="bg-white p-2 rounded border-2 border-green-400">
                            <div className="text-gray-600">화성 로컬 설계사</div>
                            <div className="text-lg text-green-600">2,500만원</div>
                            <div className="text-gray-500">평당 10만원 ⭐</div>
                          </div>
                        </div>
                        <div className="mt-2 text-center text-xs bg-green-100 p-2 rounded">
                          <strong>💡 로컬 설계사 선택 시 2,500만원 절감!</strong>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded p-3 border border-blue-200">
                        <div className="mb-1 text-xs"><strong>✅ 추천 전략</strong></div>
                        <div className="text-xs text-gray-700 space-y-1">
                          <div>1. 화성 로컬 설계사 <strong>3곳</strong> 견적 받기</div>
                          <div>2. 대형 설계사 (정림 등) <strong>1곳</strong> 비교 견적</div>
                          <div>3. 가성비 + 인허가 경험 고려하여 최종 선택</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 화성시 실제 사례 추가 */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-indigo-400 rounded p-4">
                    <div className="text-sm mb-3 flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-indigo-600" />
                      <strong>📦 화성시 및 인근 실제 물류창고 사례</strong>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="bg-white rounded p-3 border border-indigo-200">
                        <div className="mb-2"><strong>🏢 화성시 대형 물류센터 (10,000평 이상)</strong></div>
                        <div className="space-y-2 text-xs">
                          <div className="bg-blue-50 p-2 rounded">
                            <div className="flex items-start justify-between">
                              <div>
                                <div><strong>쿠팡 화성 동탄 물류센터</strong></div>
                                <div className="text-gray-600">위치: 화성시 동탄순환대로 | 규모: 약 30,000평 (10만㎡)</div>
                                <div className="text-gray-600">특징: 자동화 물류 시스템, 로봇 피킹 | 준공: 2019년</div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-green-50 p-2 rounded">
                            <div className="flex items-start justify-between">
                              <div>
                                <div><strong>마켓컬리 화성 물류센터</strong></div>
                                <div className="text-gray-600">위치: 화성시 향남읍 | 규모: 약 15,000평</div>
                                <div className="text-gray-600">특징: 신선식품 전용 냉장/냉동 창고 | 층고: 12m 이상</div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-yellow-50 p-2 rounded">
                            <div className="flex items-start justify-between">
                              <div>
                                <div><strong>CJ대한통운 화성 물류센터</strong></div>
                                <div className="text-gray-600">위치: 화성시 팔탄면 | 규모: 약 20,000평</div>
                                <div className="text-gray-600">특징: 자동 분류 시스템, 크로스도킹</div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-purple-50 p-2 rounded">
                            <div className="flex items-start justify-between">
                              <div>
                                <div><strong>롯데글로벌로지스 화성센터</strong></div>
                                <div className="text-gray-600">위치: 화성시 우정읍 | 규모: 약 18,000평</div>
                                <div className="text-gray-600">특징: 다층 물류센터 (3층)</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded p-3 border border-green-300">
                        <div className="mb-2"><strong>🏪 화성시 중소형 물류창고 사례 (250~1,000평)</strong></div>
                        <div className="space-y-2 text-xs">
                          <div className="bg-green-50 p-2 rounded">
                            <div><strong>화성 이화리 산업단지</strong></div>
                            <div className="text-gray-600">200~500평 규모 소형 창고 다수 | 지역 제조사 자가 창고</div>
                          </div>
                          <div className="bg-green-50 p-2 rounded">
                            <div><strong>평택 포승읍 물류창고</strong></div>
                            <div className="text-gray-600">300평 철골 창고 + 야적장 | 3PL 중소업체</div>
                          </div>
                          <div className="bg-green-50 p-2 rounded">
                            <div><strong>안성 공도읍 복합창고</strong></div>
                            <div className="text-gray-600">400평 물류창고 + 사무실 | 전자상거래 소상공인</div>
                          </div>
                        </div>
                        <div className="mt-2 bg-amber-100 p-2 rounded text-xs">
                          💡 250평 규모는 지역 건설사/제조사 자가 창고, 3PL 중소업체, 전자상거래 공동 물류센터로 활용
                        </div>
                      </div>

                      <div className="bg-indigo-100 rounded p-3 border border-indigo-300">
                        <div className="mb-2"><strong>🎯 화성시가 물류 중심지인 5가지 이유</strong></div>
                        <div className="grid grid-cols-1 gap-2 text-xs">
                          <div className="flex items-start gap-2 bg-white p-2 rounded">
                            <span>🚛</span>
                            <div>
                              <strong>서울 접근성</strong>
                              <div className="text-gray-600">서울 강남까지 40분 | 수도권 전역 2시간 이내</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 bg-white p-2 rounded">
                            <span>🛣️</span>
                            <div>
                              <strong>교통 인프라</strong>
                              <div className="text-gray-600">서해안고속도로, 평택-파주고속도로, 동탄-인천고속도로 교차</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 bg-white p-2 rounded">
                            <span>💵</span>
                            <div>
                              <strong>토지 가격 경쟁력</strong>
                              <div className="text-gray-600">서울/인천 대비 50% 저렴 | 평당 300~500만원</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 bg-white p-2 rounded">
                            <span>🏗️</span>
                            <div>
                              <strong>인허가 용이</strong>
                              <div className="text-gray-600">계획관리지역 물류시설 허가 비교적 쉬움</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 bg-white p-2 rounded">
                            <span>📍</span>
                            <div>
                              <strong>평택항 근접</strong>
                              <div className="text-gray-600">평택항까지 30분 | 수출입 물류 유리</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded p-3 border-2 border-green-400">
                        <div className="mb-2"><strong>✅ 이화리 임대 사업이 유리한 이유</strong></div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-white p-2 rounded">
                            <div className="text-gray-600">서울 강남 거리</div>
                            <div><strong>40km (차량 40분)</strong></div>
                          </div>
                          <div className="bg-white p-2 rounded">
                            <div className="text-gray-600">평택항 거리</div>
                            <div><strong>20km (차량 25분)</strong></div>
                          </div>
                          <div className="bg-white p-2 rounded">
                            <div className="text-gray-600">동탄신도시 거리</div>
                            <div><strong>15km (차량 20분)</strong></div>
                          </div>
                          <div className="bg-white p-2 rounded">
                            <div className="text-gray-600">오산역 거리</div>
                            <div><strong>10km (차량 15분)</strong></div>
                          </div>
                        </div>

                        <div className="mt-3 bg-white rounded p-2">
                          <div className="mb-1 text-xs"><strong>💼 주변 수요 업종</strong></div>
                          <div className="text-xs text-gray-700 space-y-1">
                            <div>1. 동탄/병점 전자상거래 업체 (쿠팡, 마켓컬리 협력사)</div>
                            <div>2. 평택항 수출입 업체 (중소 제조업)</div>
                            <div>3. 화성/오산 산업단지 제조업체</div>
                            <div>4. 수도권 건설자재 유통업체</div>
                          </div>
                        </div>

                        <div className="mt-3 bg-yellow-50 rounded p-2 border border-yellow-300">
                          <div className="mb-1 text-xs"><strong>🎯 250평 창고 임대 타겟 고객</strong></div>
                          <div className="grid grid-cols-2 gap-1 text-xs text-gray-700">
                            <div>✓ 쿠팡 협력 물류업체</div>
                            <div>✓ 스마트팜 농산물 집하장</div>
                            <div>✓ 중고차 부품 유통업체</div>
                            <div>✓ 건설자재 보관창고</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 물류창고 건축 참고 이미지 추가 */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-400 rounded p-4">
                    <div className="text-sm mb-3 flex items-center gap-2">
                      <Camera className="h-5 w-5 text-purple-600" />
                      <strong>📸 물류창고 건축 참고 이미지</strong>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded p-2 border border-purple-200">
                          <div className="mb-2 text-xs"><strong>🏢 물류창고 외관 (철골 구조)</strong></div>
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1656120199083-eff40d26bd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBleHRlcmlvciUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2Mjc2MzIzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="물류창고 외관"
                            className="w-full h-32 object-cover rounded"
                          />
                          <div className="mt-1 text-xs text-gray-600">
                            철골 구조, 높은 층고, 대형 셔터 도어
                          </div>
                        </div>

                        <div className="bg-white rounded p-2 border border-purple-200">
                          <div className="mb-2 text-xs"><strong>📦 물류창고 내부 (랙 시스템)</strong></div>
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1761519609120-0f0a84a9932b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbnRlcmlvciUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NjI3NjMyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="물류창고 내부"
                            className="w-full h-32 object-cover rounded"
                          />
                          <div className="mt-1 text-xs text-gray-600">
                            10m 이상 층고, 파레트 랙, LED 조명
                          </div>
                        </div>

                        <div className="bg-white rounded p-2 border border-purple-200">
                          <div className="mb-2 text-xs"><strong>📐 건축 설계도 (청사진)</strong></div>
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlcHJpbnQlMjBhcmNoaXRlY3R1cmUlMjBwbGFufGVufDF8fHx8MTc2MjcwNTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="건축 설계도"
                            className="w-full h-32 object-cover rounded"
                          />
                          <div className="mt-1 text-xs text-gray-600">
                            평면도, 입면도, 구조도 등 12종 도면
                          </div>
                        </div>

                        <div className="bg-white rounded p-2 border border-purple-200">
                          <div className="mb-2 text-xs"><strong>🏗️ 철골 구조 공사 현장</strong></div>
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2Mjc2MzIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="철골 구조 공사"
                            className="w-full h-32 object-cover rounded"
                          />
                          <div className="mt-1 text-xs text-gray-600">
                            H빔 철골 구조, 4~6개월 공사 기간
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded p-2 border border-purple-200">
                        <div className="mb-2 text-xs"><strong>🚛 야적장 및 주차장 (콘크리트 포장)</strong></div>
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1758304481967-9edc1307f9d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIweWFyZCUyMHN0b3JhZ2V8ZW58MXx8fHwxNzYyNzYzMjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="야적장"
                          className="w-full h-40 object-cover rounded"
                        />
                        <div className="mt-1 text-xs text-gray-600">
                          2,250평 야적장, 콘크리트 포장, 외곽 펜스, CCTV
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded p-3 border border-blue-300">
                        <div className="mb-2 text-xs"><strong>💡 실제 설계도 얻는 방법</strong></div>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-start gap-2">
                            <span className="text-blue-600">1.</span>
                            <div>
                              <strong>화성시청 건축과 방문</strong>
                              <div className="text-gray-600">최근 인허가 받은 물류창고 건축 도면 열람 가능 (건축물대장 발급)</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-600">2.</span>
                            <div>
                              <strong>건축사사무소 포트폴리오 요청</strong>
                              <div className="text-gray-600">설계사 선정 시 유사 규모 프로젝트 도면 예시 제공받기</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-600">3.</span>
                            <div>
                              <strong>온라인 커뮤니티</strong>
                              <div className="text-gray-600">네이버 카페 "전원주택/창고 건축", 유튜브 "물류창고 건축 과정"</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded p-3">
                    <div className="text-sm mb-3">✅ 설계사 선정 체크리스트 (10개 항목)</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span>물류창고 설계 실적 10건 이상</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span>경기 남부(화성/평택) 프로젝트 경험</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span>층고 10m 이상 철골 구조 설계 가능</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span>스마트 물류(WMS, IoT) 시스템 설계 경험</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span>화성시 인허가 대행 경험 (필수)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span>야적장 조성 설계 경험</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span>태양광 발전 설비 설계 포함</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span>BIM(3D 설계) 도면 제공</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span>VIP 고객 응대 및 맞춤 서비스</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span>준공 후 2년 A/S 보증</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded p-3">
                    <div className="text-sm mb-2">📐 필수 설계 도면 목록 (총 12종)</div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-white p-2 rounded">배치도 (전체 부지)</div>
                      <div className="bg-white p-2 rounded">창고 평면도</div>
                      <div className="bg-white p-2 rounded">창고 입면도 (4면)</div>
                      <div className="bg-white p-2 rounded">창고 단면도</div>
                      <div className="bg-white p-2 rounded">구조도 (철골)</div>
                      <div className="bg-white p-2 rounded">전기 설비도</div>
                      <div className="bg-white p-2 rounded">소방 설비도</div>
                      <div className="bg-white p-2 rounded">야적장 포장 계획도</div>
                      <div className="bg-white p-2 rounded">주차장 계획도</div>
                      <div className="bg-white p-2 rounded">외곽 펜스 계획도</div>
                      <div className="bg-white p-2 rounded">태양광 배치도</div>
                      <div className="bg-white p-2 rounded">공사비 산출서</div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border-2 border-orange-400 rounded p-4">
                    <div className="text-sm mb-3">💰 프리미엄 설계 비용 (최고급 기준)</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-gray-600 mb-1">설계비 (250평 기준)</div>
                        <div className="text-2xl">5,000만원</div>
                        <div className="text-sm text-orange-600 mt-1">
                          <strong>평당 20만원</strong> (프리미엄 설계사)
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          • 정림건축, 해안종합건축 등 Top 설계사<br/>
                          • 인허가 대행 포함<br/>
                          • BIM 3D 모델링 포함<br/>
                          • 야적장 토목 설계 포함
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">설계 기간</div>
                        <div className="text-2xl">2~3개월</div>
                        <div className="text-sm text-green-600 mt-1">
                          <strong>소형 프로젝트로 빠른 진행</strong>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          • 기본설계: 3주<br/>
                          • 실시설계: 5주<br/>
                          • 인허가 신청: 2주<br/>
                          • 인허가 승인 대기: 2개월
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <div className="text-sm mb-2">✨ 프리미엄 설계의 장점</div>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>인허가 1회 통과율 95% 이상 (재심사 방지)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>시공 중 설계 변경 최소화 (공사비 절감)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>임대 시 높은 프리미엄 (입주사 신뢰도 상승)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>미래 확장 시 연속성 있는 설계 가능</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 1-3. 기타 사전 준비 */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  1-3. 기타 사전 준비 사항
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>시공사 입찰 (중소 건설사 3곳 이상 비교 견적)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>사전 임차인 수요 조사 (화성 산단 중소기업, 물류업체)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>금융기관 PF 대출 협의 (신한은행, 농협 등)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2단계~4단계 */}
          <div className="space-y-4">
            <div className="border-2 border-green-200 rounded-xl overflow-hidden">
              <div className="bg-green-600 text-white p-4">
                <div className="text-sm opacity-90">2단계 (4~10개월)</div>
                <div className="text-lg">건설 공사</div>
              </div>
              <div className="p-4 bg-white">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>부지 정리 및 토목 공사 (절성토, 배수로)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>창고 철골 구조 공사 (250평, 층고 10m)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>외벽, 지붕 시공 (단열재, 방수)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>야적장 1,500평 콘크리트 포장 (두께 15cm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>주차장 500평 아스콘 포장</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>외곽 펜스 설치 (높이 2.5m, 400m)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-amber-200 rounded-xl overflow-hidden">
              <div className="bg-amber-600 text-white p-4">
                <div className="text-sm opacity-90">3단계 (10~12개월)</div>
                <div className="text-lg">설비 및 마무리</div>
              </div>
              <div className="p-4 bg-white">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>창고 내부 바닥 에폭시 마감</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>독(Dock) 및 램프 시공</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>전기, 소방, 통신 설비 설치</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>CCTV 통합 관제 시스템 (20대)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>태양광 발전 설비 설치 (100kW)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>사용승인 획득</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-purple-200 rounded-xl overflow-hidden">
              <div className="bg-purple-600 text-white p-4">
                <div className="text-sm opacity-90">4단계 (12개월~)</div>
                <div className="text-lg">임차인 유치 및 운영</div>
              </div>
              <div className="p-4 bg-white">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>창고 임대 마케팅 (중소 물류업체 타겟)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>야적장 임대 마케팅 (건설사, 컨테이너 업체)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>주차장 임대 마케팅 (화물차 기사 협회)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>시설 관리팀 구성 (보안 1명, 청소 외주)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>정식 운영 개시</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 리스크 관리 */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              주요 리스크 및 대응 방안
            </h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <div className="mb-1">야적장 공실 리스크</div>
                    <p className="text-sm text-gray-600"><strong>대응:</strong> 착공 전 건설사, 컨테이너 업체와 사전 계약 50% 이상 확보</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <div className="mb-1">건설비 증가 리스크</div>
                    <p className="text-sm text-gray-600"><strong>대응:</strong> 턴키 계약으로 총액 고정, 예비비 10% 확보</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <div className="mb-1">금리 상승 리스크</div>
                    <p className="text-sm text-gray-600"><strong>대응:</strong> 자기자본 50% 이상 투입, 장기 고정금리 대출</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. 결론 및 제안 */}
      <div className="print-page min-h-[297mm] bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white p-16 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl mb-12 text-center">결론 및 제안</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">투자 효율성 극대화</h3>
                  <p className="text-blue-100">대형 건물 대비 1/7 투자비로 시작, ROI 14.5% (대형 물류센터 7% 대비 2배)</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">빠른 투자 회수</h3>
                  <p className="text-blue-100">6.9년 만에 투자금 회수 (대출 활용 시 5년 이내), 연 1.74억원 순수익</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">높은 시장 수요</h3>
                  <p className="text-blue-100">화성 지역 야적장, 소형 창고 수요 급증, 컨테이너 보관 시설 부족</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">간편한 운영</h3>
                  <p className="text-blue-100">최소 인력 (보안 1명), CCTV 무인 관제로 관리 비용 최소화</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">미래 확장 가능성</h3>
                  <p className="text-blue-100">향후 수요 증가 시 창고 250평 추가 건축 가능 (2차 투자)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl text-center">
            <h3 className="text-2xl mb-4">Next Steps</h3>
            <p className="text-lg mb-6">
              1. 프리미엄 설계사 3곳 미팅 (정림건축, 해안, 간삼)<br/>
              2. 야적장 실거래 시세 조사 (화성 부동산 중개사 5곳)<br/>
              3. 시공사 견적 비교 (중소 건설사 3곳)<br/>
              4. 금융기관 PF 대출 협의 (신한, 농협)
            </p>
            <div className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full text-lg">
              💼 소자본 고수익 사업 모델 - 적극 추진 권장
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
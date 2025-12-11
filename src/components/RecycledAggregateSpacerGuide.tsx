import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Copy, CheckSquare, Beaker, Factory, Globe, Mail, Search, Lightbulb, AlertCircle, CheckCircle2, CheckCircle, ArrowRight, FlaskConical, Layers, Droplet, Thermometer, Package, TestTube, Award, FileText, Users, Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RecycledAggregateSpacerGuide() {
  const [copiedText, setCopiedText] = useState<string>('');

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(id);
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Beaker className="h-12 w-12" />
            <div>
              <h1 className="text-4xl mb-2" style={{ fontWeight: 700 }}>재생골재 철근 스페이서 제조 가이드</h1>
              <p className="text-xl text-green-100">Recycled Aggregate Rebar Spacer Manufacturing Guide + European Chemical Suppliers</p>
            </div>
          </div>
          <div className="flex gap-3 mt-6 flex-wrap">
            <Badge className="bg-white text-green-800 px-4 py-2">제조 공정</Badge>
            <Badge className="bg-green-500 text-white px-4 py-2">혼합물 배합</Badge>
            <Badge className="bg-teal-500 text-white px-4 py-2">유럽 공급사</Badge>
            <Badge className="bg-yellow-500 text-white px-4 py-2">품질 기준</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        {/* 목차 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl mb-6" style={{ fontWeight: 700 }}>📚 목차</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-lg" style={{ fontWeight: 600 }}>PART 1: 제조 공정</div>
              <div className="ml-4 space-y-1 text-sm text-gray-700">
                <div>1.1 재생골재 60% 배합 설계</div>
                <div>1.2 원료 혼합 공정</div>
                <div>1.3 성형 및 압축</div>
                <div>1.4 양생 (Curing)</div>
                <div>1.5 증기 양생 설비 제조사 🆕</div>
                <div>1.6 품질 검사 및 포장</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-lg" style={{ fontWeight: 600 }}>PART 2: 유럽 혼합물 공급사</div>
              <div className="ml-4 space-y-1 text-sm text-gray-700">
                <div>2.1 재생골재 강화 첨가제란?</div>
                <div>2.2 유럽 화학 회사 조사 방법</div>
                <div>2.3 추천 검색 키워드</div>
                <div>2.4 RFQ 발송 템플릿</div>
                <div>2.5 기술 협력 방법</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="space-y-2">
              <div className="text-lg" style={{ fontWeight: 600 }}>PART 3: 유럽 설비 제조사</div>
              <div className="ml-4 space-y-1 text-sm text-gray-700">
                <div>3.1 독일 설비 제조사 4개사 분석</div>
                <div>3.2 턴키 프로젝트 일정 (9-12개월)</div>
                <div>3.3 설비 제조사 선택 가이드</div>
                <div>3.4 가격 정보 및 협상 전략</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-lg" style={{ fontWeight: 600 }}>PART 4: KOTRA 활용 가이드 🆕</div>
              <div className="ml-4 space-y-1 text-sm text-gray-700">
                <div>4.1 KOTRA 지원 프로그램 개요</div>
                <div>4.2 시장조사 및 파트너 발굴</div>
                <div>4.3 수출바우처 사업 활용법</div>
                <div>4.4 해외진출 프리미엄 서비스 (OPS)</div>
                <div>4.5 실무 활용 로드맵</div>
                <div>4.6 KOTRA 연락 방법</div>
                <div>4.7 국가별 신청 방법 FAQ ⭐</div>
              </div>
            </div>
          </div>
        </div>

        {/* PART 1: 제조 공정 */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Factory className="h-10 w-10" />
            <h2 className="text-3xl" style={{ fontWeight: 700 }}>PART 1: 재생골재 철근 스페이서 제조 공정</h2>
          </div>
          <p className="text-blue-100">Recycled Aggregate Rebar Spacer Manufacturing Process</p>
        </div>

        {/* 1.1 배합 설계 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Beaker className="h-8 w-8 text-blue-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>1.1 재생골재 60% 배합 설계</h3>
          </div>

          {/* 표준 배합비 */}
          <div className="mb-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>🧪 표준 배합비 (재생골재 60%)</div>
            
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-3 text-left">원료</th>
                    <th className="p-3 text-left">비율 (%)</th>
                    <th className="p-3 text-left">1,000개 기준 (kg)</th>
                    <th className="p-3 text-left">역할</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-blue-200">
                    <td className="p-3" style={{ fontWeight: 600 }}>재생골재 (5-10mm)</td>
                    <td className="p-3">60%</td>
                    <td className="p-3">300 kg</td>
                    <td className="p-3">주 골재 (비용 절감 + 친환경)</td>
                  </tr>
                  <tr className="border-t border-blue-200 bg-white">
                    <td className="p-3" style={{ fontWeight: 600 }}>시멘트 (OPC 42.5)</td>
                    <td className="p-3">25%</td>
                    <td className="p-3">125 kg</td>
                    <td className="p-3">결합재 (강도 발현)</td>
                  </tr>
                  <tr className="border-t border-blue-200">
                    <td className="p-3" style={{ fontWeight: 600 }}>천연 잔골재 (0-5mm)</td>
                    <td className="p-3">10%</td>
                    <td className="p-3">50 kg</td>
                    <td className="p-3">충전재 (표면 마감)</td>
                  </tr>
                  <tr className="border-t border-blue-200 bg-white">
                    <td className="p-3" style={{ fontWeight: 600 }}>물</td>
                    <td className="p-3">4%</td>
                    <td className="p-3">20 kg (20L)</td>
                    <td className="p-3">수화 반응</td>
                  </tr>
                  <tr className="border-t border-blue-200">
                    <td className="p-3" style={{ fontWeight: 600 }}>재생골재 강화 첨가제 ⭐</td>
                    <td className="p-3">1%</td>
                    <td className="p-3">5 kg</td>
                    <td className="p-3">재생골재 보강 (핵심!)</td>
                  </tr>
                  <tr className="border-t-2 border-blue-400 bg-blue-100">
                    <td className="p-3" style={{ fontWeight: 700 }}>합계</td>
                    <td className="p-3" style={{ fontWeight: 700 }}>100%</td>
                    <td className="p-3" style={{ fontWeight: 700 }}>500 kg</td>
                    <td className="p-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 재생골재 강화 첨가제 종류 */}
          <div className="mb-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>⚗️ 재생골재 강화 첨가제 종류</div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-3">
                  <FlaskConical className="h-5 w-5 text-green-600" />
                  <strong className="text-lg">1. 실리카 퓸 (Silica Fume)</strong>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>✓ <strong>역할:</strong> 미세 공극 충전, 강도 증가</div>
                  <div>✓ <strong>첨가량:</strong> 시멘트 대비 5-10%</div>
                  <div>✓ <strong>효과:</strong> 압축강도 20-30% 향상</div>
                  <div className="text-xs text-green-700 mt-2">🇪🇺 유럽: Elkem, Ferroglobe</div>
                </div>
              </div>

              <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-3">
                  <TestTube className="h-5 w-5 text-blue-600" />
                  <strong className="text-lg">2. 고성능 감수제 (PCE)</strong>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>✓ <strong>역할:</strong> 작업성 개선, 물 사용량 감소</div>
                  <div>✓ <strong>첨가량:</strong> 시멘트 대비 0.5-2%</div>
                  <div>✓ <strong>효과:</strong> 물-시멘트비 20% 감소</div>
                  <div className="text-xs text-blue-700 mt-2">🇪🇺 유럽: BASF, Sika, Mapei</div>
                </div>
              </div>

              <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50">
                <div className="flex items-center gap-2 mb-3">
                  <Droplet className="h-5 w-5 text-purple-600" />
                  <strong className="text-lg">3. 폴리머 에멀전 (SBR/EVA)</strong>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>✓ <strong>역할:</strong> 재생골재 표면 코팅, 흡수율 저하</div>
                  <div>✓ <strong>첨가량:</strong> 고형분 기준 3-5%</div>
                  <div>✓ <strong>효과:</strong> 내구성 향상, 균열 저항</div>
                  <div className="text-xs text-purple-700 mt-2">🇪🇺 유럽: Wacker, Dow</div>
                </div>
              </div>

              <div className="border-2 border-orange-300 rounded-lg p-4 bg-orange-50">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="h-5 w-5 text-orange-600" />
                  <strong className="text-lg">4. 플라이애시 (Fly Ash)</strong>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>✓ <strong>역할:</strong> 포졸란 반응, 장기 강도 증가</div>
                  <div>✓ <strong>첨가량:</strong> 시멘트 대비 10-20%</div>
                  <div>✓ <strong>효과:</strong> 재생골재 알칼리 반응 억제</div>
                  <div className="text-xs text-orange-700 mt-2">🇪🇺 유럽: 현지 화력발전소</div>
                </div>
              </div>
            </div>
          </div>

          {/* 배합 설계 주의사항 */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="mb-2" style={{ fontWeight: 600 }}>⚠️ 재생골재 60% 사용 시 주의사항</div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div><strong>흡수율 높음:</strong> 재생골재는 천연골재 대비 흡수율이 5-10배 높음 → 사전 포수 필요</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div><strong>강도 저하:</strong> 순수 시멘트 대비 초기 강도 10-20% 낮음 → 강화 첨가제로 보완</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div><strong>품질 편차:</strong> 재생골재는 원료에 따라 품질 편차 → 입고 시 품질 검사 필수</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1.2 원료 혼합 공정 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="h-8 w-8 text-green-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>1.2 원료 혼합 공정 (Mixing Process)</h3>
          </div>

          <div className="space-y-6">
            {/* STEP 1 */}
            <div className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center">1</div>
                <strong className="text-lg">재생골재 전처리 (Pre-treatment)</strong>
              </div>
              <div className="ml-11 space-y-2 text-sm text-gray-700">
                <div>✓ <strong>선별:</strong> 5-10mm 입도로 체질 (너무 큰 입자 제거)</div>
                <div>✓ <strong>세척:</strong> 먼지, 이물질 제거 (압축 강도 향상)</div>
                <div>✓ <strong>포수:</strong> 물에 30분 침지 → 표면 흡수 포화 (배합수 손실 방지)</div>
                <div className="text-xs text-blue-700 mt-2">⏱️ 소요 시간: 1시간</div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="border-l-4 border-green-600 bg-green-50 p-6 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center">2</div>
                <strong className="text-lg">건식 원료 혼합 (Dry Mixing)</strong>
              </div>
              <div className="ml-11 space-y-2 text-sm text-gray-700">
                <div>✓ 재생골재 + 시멘트 + 잔골재 + 실리카 퓸 → 믹서 투입</div>
                <div>✓ <strong>믹싱 시간:</strong> 3-5분 (균일 혼합)</div>
                <div>✓ <strong>믹서 타입:</strong> 강제식 믹서 (Pan Mixer) 또는 트윈샤프트 믹서</div>
                <div className="text-xs text-green-700 mt-2">⏱️ 소요 시간: 5분</div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="border-l-4 border-purple-600 bg-purple-50 p-6 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-600 text-white rounded-full h-8 w-8 flex items-center justify-center">3</div>
                <strong className="text-lg">습식 혼합 (Wet Mixing)</strong>
              </div>
              <div className="ml-11 space-y-2 text-sm text-gray-700">
                <div>✓ 물 + 감수제 + 폴리머 에멀전 → 별도 용기에서 혼합</div>
                <div>✓ 액상 첨가제를 건식 혼합물에 천천히 투입</div>
                <div>✓ <strong>믹싱 시간:</strong> 5-7분 (반죽 상태 확보)</div>
                <div>✓ <strong>최종 슬럼프:</strong> 0mm (No-slump, 성형용 배합)</div>
                <div className="text-xs text-purple-700 mt-2">⏱️ 소요 시간: 7분</div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="border-l-4 border-orange-600 bg-orange-50 p-6 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-orange-600 text-white rounded-full h-8 w-8 flex items-center justify-center">4</div>
                <strong className="text-lg">품질 확인 (QC Check)</strong>
              </div>
              <div className="ml-11 space-y-2 text-sm text-gray-700">
                <div>✓ <strong>손 테스트:</strong> 배합물을 손으로 쥐었을 때 뭉쳐져야 함</div>
                <div>✓ <strong>수분 함량:</strong> 4-6% (너무 건조/습윤 시 조정)</div>
                <div>✓ <strong>색상 균일성:</strong> 혼합이 불균일하면 추가 믹싱</div>
                <div className="text-xs text-orange-700 mt-2">⏱️ 소요 시간: 2분</div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-300 rounded-lg p-4">
            <div className="text-sm">
              <strong>🏭 필요 설비:</strong>
              <div className="mt-2 grid md:grid-cols-2 gap-2 text-gray-700">
                <div>• 강제식 믹서 (300-500L)</div>
                <div>• 자동 계량 시스템 (정밀도 ±2%)</div>
                <div>• 재생골재 포수 탱크 (1,000L)</div>
                <div>• 액상 첨가제 공급 펌프</div>
              </div>
            </div>
          </div>
        </div>

        {/* 1.3 성형 및 압축 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Factory className="h-8 w-8 text-purple-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>1.3 성형 및 압축 공정 (Molding & Pressing)</h3>
          </div>

          <div className="space-y-6">
            {/* 성형 방법 비교 */}
            <div>
              <div className="mb-4" style={{ fontWeight: 600 }}>🔧 성형 방법 비교</div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border-2 border-green-400 rounded-lg p-5 bg-green-50">
                  <div className="flex items-center justify-between mb-3">
                    <strong className="text-lg">유압 프레스 (Hydraulic Press)</strong>
                    <Badge className="bg-green-600 text-white">추천 ⭐</Badge>
                  </div>
                  <div className="text-sm space-y-2 text-gray-700">
                    <div>✓ <strong>압력:</strong> 100-300 bar</div>
                    <div>✓ <strong>생산 속도:</strong> 1,500개/시간</div>
                    <div>✓ <strong>장점:</strong> 고밀도, 높은 강도</div>
                    <div>✓ <strong>단점:</strong> 설비 비용 높음</div>
                    <div className="text-xs text-green-700 mt-3">💰 설비 비용: €80,000 - €150,000</div>
                  </div>
                </div>

                <div className="border-2 border-blue-300 rounded-lg p-5 bg-blue-50">
                  <div className="flex items-center justify-between mb-3">
                    <strong className="text-lg">진동 성형 (Vibration Molding)</strong>
                    <Badge className="bg-blue-600 text-white">경제적</Badge>
                  </div>
                  <div className="text-sm space-y-2 text-gray-700">
                    <div>✓ <strong>압력:</strong> 진동 + 50 bar</div>
                    <div>✓ <strong>생산 속도:</strong> 800-1,000개/시간</div>
                    <div>✓ <strong>장점:</strong> 저비용, 간단한 유지보수</div>
                    <div>✓ <strong>단점:</strong> 밀도 약간 낮음</div>
                    <div className="text-xs text-blue-700 mt-3">💰 설비 비용: €30,000 - €60,000</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 성형 프로세스 */}
            <div>
              <div className="mb-4" style={{ fontWeight: 600 }}>⚙️ 성형 프로세스 (유압 프레스 기준)</div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</div>
                  <div className="flex-1">
                    <strong>금형 준비 및 이형제 도포</strong>
                    <div className="text-sm text-gray-600 mt-1">금형 내부에 이형제 스프레이 (실리콘 또는 식물성 오일)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</div>
                  <div className="flex-1">
                    <strong>배합물 투입</strong>
                    <div className="text-sm text-gray-600 mt-1">자동 공급기로 금형에 정량 투입 (500g/개)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</div>
                  <div className="flex-1">
                    <strong>1차 압축 (예비 압축)</strong>
                    <div className="text-sm text-gray-600 mt-1">50 bar, 3초 (공기 제거)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</div>
                  <div className="flex-1">
                    <strong>2차 압축 (본 압축)</strong>
                    <div className="text-sm text-gray-600 mt-1">200-300 bar, 10-15초 (고밀도 성형)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">5</div>
                  <div className="flex-1">
                    <strong>탈형 (De-molding)</strong>
                    <div className="text-sm text-gray-600 mt-1">유압 실린더로 제품 밀어내기 → 컨베이어 벨트로 이송</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-green-50 border border-green-300 rounded p-3">
                <div className="text-sm text-gray-700">
                  <strong className="text-green-700">⏱️ 사이클 타임:</strong> 20-30초/개 (금형 4구 기준: 시간당 480-720개 → 다중 프레스로 1,500개 달성)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1.4 양생 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Thermometer className="h-8 w-8 text-orange-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>1.4 양생 공정 (Curing Process)</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-orange-400 rounded-lg p-5 bg-orange-50">
              <div className="flex items-center justify-between mb-3">
                <strong className="text-lg">증기 양생 (Steam Curing)</strong>
                <Badge className="bg-orange-600 text-white">빠름 ⚡</Badge>
              </div>
              <div className="text-sm space-y-2 text-gray-700">
                <div>✓ <strong>온도:</strong> 60-80°C</div>
                <div>✓ <strong>습도:</strong> 95% 이상</div>
                <div>✓ <strong>시간:</strong> 6-8시간 증기 양생</div>
                <div>✓ <strong>장점:</strong> 빠른 강도 발현 (1일 = 28일 강도의 70%)</div>
                <div>✓ <strong>단점:</strong> 증기 발생 설비 필요 (보일러)</div>
                <div className="text-xs text-orange-700 mt-3">💰 자동화 증기 양생실: €50,000 - €100,000</div>
                <div className="text-xs text-gray-600">💰 간이 시스템 (보일러+덮개): €20,000 - €30,000</div>
              </div>
            </div>

            <div className="border-2 border-blue-300 rounded-lg p-5 bg-blue-50">
              <div className="flex items-center justify-between mb-3">
                <strong className="text-lg">자연 양생 (Air Curing)</strong>
                <Badge className="bg-blue-600 text-white">저비용 💰</Badge>
              </div>
              <div className="text-sm space-y-2 text-gray-700">
                <div>✓ <strong>온도:</strong> 상온 (20-25°C)</div>
                <div>✓ <strong>습도:</strong> 비닐 덮개로 습윤 유지</div>
                <div>✓ <strong>시간:</strong> 24-48시간 → 7일 추가 양생</div>
                <div>✓ <strong>장점:</strong> 설비 불필요, 장기 강도 우수</div>
                <div>✓ <strong>단점:</strong> 생산 주기 길음, 야적장 필요</div>
                <div className="text-xs text-blue-700 mt-3">💰 설비 비용: €5,000 (양생장 + 비닐)</div>
              </div>
            </div>
          </div>

          <div className="mb-6 bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
            <div className="mb-3" style={{ fontWeight: 600 }}>💡 증기 양생 설비 옵션 비교</div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded p-3 border-2 border-green-400">
                <div className="mb-2" style={{ fontWeight: 600 }}>✅ 자동화 증기 양생실 (추천)</div>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>💰 <strong>비용:</strong> €50,000 - €100,000</div>
                  <div>⚙️ <strong>구성:</strong> 양생실 + 보일러 + 자동 온습도 제어</div>
                  <div>📦 <strong>규모:</strong> 동시 1,000-2,000개 양생 가능</div>
                  <div>⏱️ <strong>효율:</strong> 무인 운영 가능, 품질 안정적</div>
                  <div className="text-xs text-green-700 mt-2">👉 하이콘 규모에 최적 (일 1.2만개)</div>
                </div>
              </div>

              <div className="bg-white rounded p-3 border-2 border-orange-300">
                <div className="mb-2" style={{ fontWeight: 600 }}>⚠️ 간이 증기 양생 시스템</div>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>💰 <strong>비용:</strong> €20,000 - €30,000</div>
                  <div>⚙️ <strong>구성:</strong> 보일러 + 비닐 덮개 + 수동 제어</div>
                  <div>📦 <strong>규모:</strong> 동시 300-500개 양생</div>
                  <div>⏱️ <strong>효율:</strong> 수동 관리 필요, 품질 편차 발생 가능</div>
                  <div className="text-xs text-orange-700 mt-2">👉 소규모 시험 생산용 (일 3,000개 미만)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-lg p-6">
            <div className="mb-3" style={{ fontWeight: 600 }}>🔥 증기 양생 프로세스 (추천)</div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="bg-orange-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</div>
                <div>
                  <strong>예비 양생 (2시간):</strong> 상온에서 초기 경화 (바로 증기 가하면 균열)
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-orange-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</div>
                <div>
                  <strong>승온 (1시간):</strong> 20°C → 60°C (10°C/10분씩 천천히)
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-orange-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</div>
                <div>
                  <strong>항온 양생 (4시간):</strong> 60-80°C 유지, 습도 95%
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-orange-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</div>
                <div>
                  <strong>냉각 (1시간):</strong> 자연 냉각 (급랭 시 균열)</div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded">
              <strong className="text-sm">⏱️ 총 증기 양생: 8시간 → 탈형 가능 (초기 강도 70%)</strong>
              <div className="text-xs text-gray-600 mt-2">
                ※ 완전 출하 가능 강도: 증기 양생 후 <strong>12-24시간 추가 양생</strong> 권장<br/>
                ※ 빠른 납품: 증기 양생 완료 후 <strong>다음날 출하</strong> 가능 (자연 양생 대비 7배 빠름)
              </div>
            </div>
          </div>
        </div>

        {/* 1.5 증기 양생 설비 제조사 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Factory className="h-8 w-8 text-orange-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>1.5 증기 양생 설비 제조사 (한국 & 유럽)</h3>
          </div>

          {/* 사진 갤러리 */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1729517764961-97cce4c6fdc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGN1cmluZyUyMGNoYW1iZXIlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2MzUyMjE1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="증기 양생 챔버"
                className="w-full h-48 object-cover"
              />
              <div className="bg-gray-100 p-2 text-xs text-center">증기 양생실</div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1684259499227-e9844ab79747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbSUyMGN1cmluZyUyMGNvbmNyZXRlJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjM1MjIxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="콘크리트 양생 시설"
                className="w-full h-48 object-cover"
              />
              <div className="bg-gray-100 p-2 text-xs text-center">콘크리트 제품 양생 시설</div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1655039353512-ab38d6a37a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYm9pbGVyJTIwc3lzdGVtfGVufDF8fHx8MTc2MzUyMjE1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="산업용 보일러"
                className="w-full h-48 object-cover"
              />
              <div className="bg-gray-100 p-2 text-xs text-center">증기 발생 보일러</div>
            </div>
          </div>

          {/* 한국 제조사 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 text-white rounded px-3 py-1">🇰🇷 한국 제조사</div>
              <Badge className="bg-green-600 text-white">빠른 납기, 한국어 소통</Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
                <div className="mb-3" style={{ fontWeight: 600 }}>1️⃣ 금성산업기계</div>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>📍 <strong>지역:</strong> 경기도 (화성 근처)</div>
                  <div>🏭 <strong>전문:</strong> 콘크리트 2차 제품 양생 설비</div>
                  <div>⚙️ <strong>제품:</strong> 증기 양생실, 보일러, 자동 제어 시스템</div>
                  <div>🔍 <strong>검색:</strong> <code className="bg-white px-1 text-xs">"금성산업기계 증기양생"</code></div>
                  <div className="text-xs text-blue-700 mt-2">💡 중소기업, 맞춤 제작 가능, 가격 협상 유연</div>
                </div>
              </div>

              <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
                <div className="mb-3" style={{ fontWeight: 600 }}>2️⃣ 대성기계공업</div>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>📍 <strong>지역:</strong> 경기도 시흥</div>
                  <div>🏭 <strong>전문:</strong> PC 콘크리트 양생 시스템</div>
                  <div>⚙️ <strong>제품:</strong> 자동화 증기 양생 챔버</div>
                  <div>🔍 <strong>검색:</strong> <code className="bg-white px-1 text-xs">"대성기계 프리캐스트 양생"</code></div>
                  <div className="text-xs text-blue-700 mt-2">💡 국내 프리캐스트 공장 납품 실적 多</div>
                </div>
              </div>

              <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
                <div className="mb-3" style={{ fontWeight: 600 }}>3️⃣ 신성이엔지 (ShinSung E&G)</div>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>📍 <strong>지역:</strong> 충청남도</div>
                  <div>🏭 <strong>전문:</strong> 산업용 보일러 + 양생 시스템</div>
                  <div>⚙️ <strong>제품:</strong> 증기 보일러, 온습도 제어 시스템</div>
                  <div>🔍 <strong>검색:</strong> <code className="bg-white px-1 text-xs">"신성이엔지 보일러"</code></div>
                  <div className="text-xs text-blue-700 mt-2">💡 보일러 전문, A/S 우수, 전국 출장 가능</div>
                </div>
              </div>

              <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
                <div className="mb-3" style={{ fontWeight: 600 }}>4️⃣ 한국프리캐스트 (장비 부문)</div>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>📍 <strong>지역:</strong> 서울/경기</div>
                  <div>🏭 <strong>전문:</strong> 프리캐스트 콘크리트 전체 생산라인</div>
                  <div>⚙️ <strong>제품:</strong> 양생 설비, 몰드, 전체 시스템</div>
                  <div>🔍 <strong>검색:</strong> <code className="bg-white px-1 text-xs">"한국프리캐스트 장비"</code></div>
                  <div className="text-xs text-blue-700 mt-2">💡 턴키 프로젝트 가능, 컨설팅 포함</div>
                </div>
              </div>
            </div>
          </div>

          {/* 유럽 제조사 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-purple-600 text-white rounded px-3 py-1">🇪🇺 유럽 제조사</div>
              <Badge className="bg-orange-600 text-white">최신 기술, 자동화 우수</Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50">
                <div className="mb-3" style={{ fontWeight: 600 }}>1️⃣ Masa Group (독일) ⭐</div>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>🌐 <strong>웹사이트:</strong> <code className="bg-white px-1 text-xs">masa-group.com</code></div>
                  <div>🏭 <strong>전문:</strong> 콘크리트 블록 & 양생 전체 시스템</div>
                  <div>⚙️ <strong>제품:</strong> 자동화 증기 양생실, IoT 제어</div>
                  <div>💰 <strong>예상 비용:</strong> €80,000 - €150,000</div>
                  <div>📧 <strong>문의:</strong> 웹사이트 "Contact" → "Sales Inquiry"</div>
                  <div className="text-xs text-purple-700 mt-2">💡 독일 1위, 전 세계 5,000+ 설비 납품, 한국 레퍼런스 有</div>
                </div>
              </div>

              <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50">
                <div className="mb-3" style={{ fontWeight: 600 }}>2️⃣ Progress Group (이탈리아)</div>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>🌐 <strong>웹사이트:</strong> <code className="bg-white px-1 text-xs">progressgroup.info</code></div>
                  <div>🏭 <strong>전문:</strong> 프리캐스트 콘크리트 생산 라인</div>
                  <div>⚙️ <strong>제품:</strong> 증기 양생 챔버, 순환형 시스템</div>
                  <div>💰 <strong>예상 비용:</strong> €60,000 - €120,000</div>
                  <div>📧 <strong>문의:</strong> info@progressgroup.info</div>
                  <div className="text-xs text-purple-700 mt-2">💡 이탈리아 1위, 에너지 절약형 설비 전문</div>
                </div>
              </div>

              <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50">
                <div className="mb-3" style={{ fontWeight: 600 }}>3️⃣ Hess Group (독일)</div>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>🌐 <strong>웹사이트:</strong> <code className="bg-white px-1 text-xs">hessgroup.com</code></div>
                  <div>🏭 <strong>전문:</strong> 콘크리트 제품 전체 생산 설비</div>
                  <div>⚙️ <strong>제품:</strong> 증기 양생 + 성형 몰드 일체형</div>
                  <div>💰 <strong>예상 비용:</strong> €70,000 - €130,000</div>
                  <div>📧 <strong>문의:</strong> 웹사이트 Contact Form</div>
                  <div className="text-xs text-purple-700 mt-2">💡 독일 설비 제조사, 턴키 프로젝트 가능</div>
                </div>
              </div>

              <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50">
                <div className="mb-3" style={{ fontWeight: 600 }}>4️⃣ Elematic (핀란드)</div>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>🌐 <strong>웹사이트:</strong> <code className="bg-white px-1 text-xs">elematic.com</code></div>
                  <div>🏭 <strong>전문:</strong> 프리캐스트 콘크리트 자동화 시스템</div>
                  <div>⚙️ <strong>제품:</strong> 고압 증기 양생, 자동화 라인</div>
                  <div>💰 <strong>예상 비용:</strong> €100,000 - €200,000</div>
                  <div>📧 <strong>문의:</strong> sales@elematic.com</div>
                  <div className="text-xs text-purple-700 mt-2">💡 프리미엄 급, 대규모 공장용, 한국 납품 실적 有</div>
                </div>
              </div>
            </div>
          </div>

          {/* 견적 요청 방법 */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-lg p-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>📧 증기 양생 설비 견적 요청 이메일 템플릿</div>
            
            <div className="bg-white rounded p-4 text-sm space-y-2 font-mono">
              <div><strong>Subject:</strong> Inquiry for Steam Curing Chamber - Concrete Spacer Production</div>
              <div className="border-t pt-2 mt-2">
                <div>Dear [Company Name] Sales Team,</div>
                <div className="mt-2">
                  We are <strong>Hicon Korea</strong>, a recycled aggregate manufacturer in South Korea, planning to establish a <strong>rebar spacer production facility</strong>.
                </div>
                <div className="mt-2"><strong>Our Requirements:</strong></div>
                <div className="ml-4">
                  • Product: Concrete rebar spacers (50-100mm diameter)<br/>
                  • Daily production: 12,000 pieces/day<br/>
                  • Curing capacity: 1,000-2,000 pieces simultaneously<br/>
                  • Steam curing temperature: 60-80°C<br/>
                  • Humidity control: 95%+ RH<br/>
                  • Automation: Preferred (auto temperature/humidity control)
                </div>
                <div className="mt-2"><strong>Please provide:</strong></div>
                <div className="ml-4">
                  1. Quotation (FOB & CIF Busan Port)<br/>
                  2. Technical specifications<br/>
                  3. Delivery timeline<br/>
                  4. Installation & training support<br/>
                  5. Reference projects (if any in Korea)
                </div>
                <div className="mt-2">
                  Best regards,<br/>
                  [Your Name]<br/>
                  Hicon Korea<br/>
                  Email: [your email]<br/>
                  Phone: [your phone]
                </div>
              </div>
            </div>
          </div>

          {/* 한국 vs 유럽 비교 */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="border-2 border-blue-400 rounded-lg p-4 bg-blue-50">
              <div className="mb-3" style={{ fontWeight: 600 }}>🇰🇷 한국 업체 선택 시</div>
              <div className="text-sm space-y-1 text-gray-700">
                <div>✅ 빠른 납기 (1-2개월)</div>
                <div>✅ 한국어 소통 편리</div>
                <div>✅ A/S 즉시 가능 (당일 출장)</div>
                <div>✅ 맞춤 제작 유연</div>
                <div>✅ 비용 저렴 (€30,000-€60,000)</div>
                <div className="text-xs text-blue-700 mt-3">💡 <strong>추천:</strong> 빠른 시작, 예산 제한, 소규모 초기 투자</div>
              </div>
            </div>

            <div className="border-2 border-purple-400 rounded-lg p-4 bg-purple-50">
              <div className="mb-3" style={{ fontWeight: 600 }}>🇪🇺 유럽 업체 선택 시</div>
              <div className="text-sm space-y-1 text-gray-700">
                <div>✅ 최신 자동화 기술</div>
                <div>✅ 품질 안정성 최고</div>
                <div>✅ 에너지 효율 우수</div>
                <div>✅ IoT 원격 모니터링</div>
                <div>⚠️ 납기 3-4개월, 비용 높음</div>
                <div className="text-xs text-purple-700 mt-3">💡 <strong>추천:</strong> 대규모 투자, 장기 운영, 품질 최우선</div>
              </div>
            </div>
          </div>

          {/* 하이콘 추천 */}
          <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div style={{ fontWeight: 600 }}>💡 하이콘 코리아 추천 전략</div>
            </div>
            <div className="text-sm text-gray-700 space-y-2">
              <div><strong>1단계: 한국 업체 2-3곳 견적 받기</strong> (금성산업기계, 대성기계, 신성이엔지)</div>
              <div>→ 예상 비용: €30,000 - €60,000, 납기: 1-2개월</div>
              
              <div className="mt-3"><strong>2단계: 유럽 업체 1-2곳 견적 비교</strong> (Masa, Progress Group)</div>
              <div>→ 예상 비용: €70,000 - €120,000, 납기: 3-4개월</div>
              
              <div className="mt-3"><strong>3단계: 초기에는 한국 업체로 빠른 시작 ✅</strong></div>
              <div>→ 이유: 화성 부지 3,000평 공장은 신규 사업 → 빠른 검증 필요</div>
              <div>→ 1-2년 후 생산량 증가 시 유럽 자동화 설비 추가 도입</div>

              <div className="mt-3 p-3 bg-white rounded">
                <strong className="text-green-700">💰 최종 추천: 금성산업기계 or 대성기계 (€40,000-€50,000)</strong>
                <div className="text-xs text-gray-600 mt-1">
                  ✓ 2개월 내 설치 가능<br/>
                  ✓ 하이콘 화성 공장에서 1시간 거리 (A/S 편리)<br/>
                  ✓ 맞춤 제작 가능 (스페이서 규격 맞춤)<br/>
                  ✓ 초기 투자 최소화하면서 빠른 생산 시작
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1.6 품질 검사 및 포장 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-8 w-8 text-green-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>1.6 품질 검사 및 포장</h3>
          </div>

          {/* 품질 기준 */}
          <div className="mb-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>📋 철근 스페이서 품질 기준 (KS F 7004)</div>
            
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-700 text-white">
                  <tr>
                    <th className="p-3 text-left">항목</th>
                    <th className="p-3 text-left">기준값</th>
                    <th className="p-3 text-left">시험 방법</th>
                    <th className="p-3 text-left">빈도</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-300">
                    <td className="p-3" style={{ fontWeight: 600 }}>압축강도</td>
                    <td className="p-3">≥ 35 MPa (7일)</td>
                    <td className="p-3">KS F 2405</td>
                    <td className="p-3">1회/1,000개</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-white">
                    <td className="p-3" style={{ fontWeight: 600 }}>흡수율</td>
                    <td className="p-3">≤ 8%</td>
                    <td className="p-3">KS F 2503</td>
                    <td className="p-3">1회/1,000개</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="p-3" style={{ fontWeight: 600 }}>치수 정밀도</td>
                    <td className="p-3">±2mm</td>
                    <td className="p-3">버니어 캘리퍼스</td>
                    <td className="p-3">전수 검사 (자동)</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-white">
                    <td className="p-3" style={{ fontWeight: 600 }}>외관</td>
                    <td className="p-3">균열/결함 없음</td>
                    <td className="p-3">육안 검사</td>
                    <td className="p-3">전수 검사</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 포장 */}
          <div>
            <div className="mb-4" style={{ fontWeight: 600 }}>📦 포장 및 출하</div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-5 w-5 text-blue-600" />
                  <strong>1차 포장</strong>
                </div>
                <div className="text-sm text-gray-700">
                  PE 비닐 봉투<br />
                  100개/봉
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-5 w-5 text-green-600" />
                  <strong>2차 포장</strong>
                </div>
                <div className="text-sm text-gray-700">
                  골판지 박스<br />
                  1,000개/박스
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-purple-50">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-5 w-5 text-purple-600" />
                  <strong>파레트</strong>
                </div>
                <div className="text-sm text-gray-700">
                  1.1m × 1.1m<br />
                  20박스/파레트
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: 유럽 혼합물 공급사 */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-10 w-10" />
            <h2 className="text-3xl" style={{ fontWeight: 700 }}>PART 2: 유럽 재생골재 강화 혼합물 공급사 찾기</h2>
          </div>
          <p className="text-purple-100">European Recycled Aggregate Enhancement Admixture Suppliers</p>
        </div>

        {/* 2.1 재생골재 강화 첨가제란? */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="h-8 w-8 text-purple-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>2.1 재생골재 강화 첨가제란?</h3>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6 mb-6">
            <div className="mb-3" style={{ fontWeight: 600 }}>🧪 재생골재의 문제점과 해결책</div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-red-500 text-white rounded px-2 py-1 text-xs flex-shrink-0">문제</div>
                <div className="flex-1">
                  <strong>높은 흡수율 (5-15%)</strong>
                  <div className="text-sm text-gray-700 mt-1">재생골재 표면에 기존 모르타르가 붙어있어 다공성 구조</div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="bg-green-500 text-white rounded px-2 py-1 text-xs inline-block mb-1">해결</div>
                  <div className="text-sm text-gray-700"><strong>폴리머 에멀전</strong>으로 표면 코팅</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-red-500 text-white rounded px-2 py-1 text-xs flex-shrink-0">문제</div>
                <div className="flex-1">
                  <strong>낮은 강도 (천연골재 대비 80%)</strong>
                  <div className="text-sm text-gray-700 mt-1">골재-시멘트 계면 결합력 약함</div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="bg-green-500 text-white rounded px-2 py-1 text-xs inline-block mb-1">해결</div>
                  <div className="text-sm text-gray-700"><strong>실리카 퓸</strong>으로 미세 공극 충전</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-red-500 text-white rounded px-2 py-1 text-xs flex-shrink-0">문제</div>
                <div className="flex-1">
                  <strong>품질 편차 (원료에 따라 다름)</strong>
                  <div className="text-sm text-gray-700 mt-1">건축/도로 폐기물 혼합 비율 불균일</div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="bg-green-500 text-white rounded px-2 py-1 text-xs inline-block mb-1">해결</div>
                  <div className="text-sm text-gray-700"><strong>고성능 감수제</strong>로 배합 안정화</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
            <div className="mb-2" style={{ fontWeight: 600 }}>💡 핵심 포인트</div>
            <div className="text-sm text-gray-700">
              재생골재 60%를 사용하려면 <strong className="text-blue-700">화학 첨가제가 필수</strong>입니다. 
              단순히 시멘트만으로는 강도와 내구성 확보가 어렵습니다. 
              유럽은 이 분야에서 50년 이상의 기술 축적이 있어, <strong className="text-blue-700">전문 화학 회사의 기술 지원</strong>을 받는 것이 성공의 핵심입니다.
            </div>
          </div>
        </div>

        {/* 2.2 유럽 화학 회사 조사 방법 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Search className="h-8 w-8 text-blue-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>2.2 유럽 화학 회사 조사 방법</h3>
          </div>

          {/* 방법 1: 산업 협회 */}
          <div className="mb-8">
            <div className="mb-4" style={{ fontWeight: 600 }}>방법 1: 유럽 건설 화학 산업 협회</div>
            
            <div className="space-y-4">
              <div className="border-2 border-blue-300 rounded-lg p-5 bg-blue-50">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <strong className="text-lg">EFCA (European Federation of Concrete Admixtures)</strong>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>✓ <strong>웹사이트:</strong> www.efca.info</div>
                  <div>✓ <strong>회원사 디렉토리:</strong> 유럽 주요 콘크리트 첨가제 제조사 목록</div>
                  <div>✓ <strong>검색 방법:</strong> "Members" → "Find a Member" → "Admixture type"</div>
                  <div>✓ <strong>필터:</strong> "Plasticizers", "Superplasticizers", "Polymer modifiers"</div>
                </div>
              </div>

              <div className="border-2 border-green-300 rounded-lg p-5 bg-green-50">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="h-6 w-6 text-green-600" />
                  <strong className="text-lg">ERMCO (European Ready Mixed Concrete Organization)</strong>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>✓ <strong>웹사이트:</strong> www.ermco.eu</div>
                  <div>✓ <strong>기술 문서:</strong> 재생골재 콘크리트 가이드라인</div>
                  <div>✓ <strong>추천 첨가제 목록:</strong> 기술 보고서에서 확인 가능</div>
                </div>
              </div>
            </div>
          </div>

          {/* 방법 2: Google 영문 검색 */}
          <div className="mb-8">
            <div className="mb-4" style={{ fontWeight: 600 }}>방법 2: Google 영문 검색 (가장 효과적) ⭐</div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
              <div className="mb-3" style={{ fontWeight: 600 }}>🔍 추천 영문 검색 키워드 (우선순위순)</div>
              
              <div className="space-y-2">
                {[
                  {
                    keyword: '"recycled aggregate enhancement admixture" manufacturer Europe',
                    priority: '최우선',
                    desc: '재생골재 전용 첨가제 제조사',
                  },
                  {
                    keyword: '"concrete admixture for recycled concrete" supplier Germany',
                    priority: '높음',
                    desc: '독일 재생 콘크리트 첨가제',
                  },
                  {
                    keyword: '"polymer modifier for recycled aggregate"',
                    priority: '높음',
                    desc: '폴리머 개질제 전문',
                  },
                  {
                    keyword: '"superplasticizer recycled concrete" BASF OR Sika OR Mapei',
                    priority: '중간',
                    desc: '대형 화학사 제품',
                  },
                  {
                    keyword: '"silica fume supplier" Europe construction',
                    priority: '중간',
                    desc: '실리카 퓸 공급사',
                  },
                  {
                    keyword: '"green concrete additive" sustainable',
                    priority: '중간',
                    desc: '친환경 첨가제 (재생골재 호환)',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                    <div className="flex-1 mr-3">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">{item.keyword}</code>
                      <div className="text-xs text-gray-600 mt-1">{item.desc}</div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Badge variant={item.priority === '최우선' ? 'default' : item.priority === '높음' ? 'secondary' : 'outline'} className="text-xs">
                        {item.priority}
                      </Badge>
                      <button
                        onClick={() => copyToClipboard(item.keyword, `eu-keyword-${index}`)}
                        className="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 flex items-center gap-1"
                      >
                        {copiedText === `eu-keyword-${index}` ? (
                          <>
                            <CheckSquare className="h-3 w-3" />
                            복사됨
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            복사
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 방법 3: 학술 논문 역추적 */}
          <div>
            <div className="mb-4" style={{ fontWeight: 600 }}>방법 3: 학술 논문에서 역추적 (기술력 검증)</div>
            
            <div className="border-2 border-purple-300 rounded-lg p-5 bg-purple-50">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="bg-purple-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <strong>Google Scholar에서 검색</strong>
                    <div className="text-gray-700 mt-1">
                      검색어: "recycled aggregate concrete admixture" 또는 "polymer modified recycled concrete"
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-purple-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <strong>논문의 "Acknowledgements" 섹션 확인</strong>
                    <div className="text-gray-700 mt-1">
                      연구에 첨가제를 제공한 회사명이 명시됨 (예: "Materials supplied by BASF Construction Chemicals")
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-purple-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <strong>해당 회사 웹사이트 방문</strong>
                    <div className="text-gray-700 mt-1">
                      학술 연구에 참여한 회사 = 기술력이 검증된 회사
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2.3 유럽 화학 회사 찾기 - 실무 팁 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="h-8 w-8 text-yellow-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>2.3 유럽 화학 회사 종류와 특징</h3>
          </div>

          <div className="space-y-4">
            {/* 대형 글로벌 화학사 */}
            <div className="border-2 border-blue-400 rounded-lg p-6 bg-blue-50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  <strong className="text-lg">대형 글로벌 화학사 (Big Players)</strong>
                </div>
                <Badge className="bg-blue-600 text-white">신뢰도 최고</Badge>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded p-3">
                  <div className="mb-2" style={{ fontWeight: 600 }}>💡 찾는 방법 (회사명 없이)</div>
                  <div className="space-y-1 text-gray-700">
                    <div>• Google 검색: <code className="bg-gray-100 px-1 text-xs">"construction chemicals" + "concrete admixtures" + "Europe"</code></div>
                    <div>• 검색 결과에서 웹사이트 도메인이 .de (독일), .ch (스위스), .it (이탈리아)인 회사 우선</div>
                    <div>• 회사 웹사이트 → "Products" → "Concrete Admixtures" → "Recycled Aggregate" 또는 "Sustainable"</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <strong className="text-green-700">✅ 장점</strong>
                    <div className="text-xs text-gray-700 mt-1 space-y-0.5">
                      <div>• 전 세계 레퍼런스 보유</div>
                      <div>• 일부 대형사는 한국 지사 有 (BASF, Sika, Mapei 등)</div>
                      <div>• 기술 지원 팀 (무료 배합 설계)</div>
                      <div>• 품질 안정적</div>
                    </div>
                  </div>
                  <div className="bg-white rounded p-3">
                    <strong className="text-red-700">❌ 단점</strong>
                    <div className="text-xs text-gray-700 mt-1 space-y-0.5">
                      <div>• 가격 높음 (중소 대비 2배)</div>
                      <div>• 최소 주문량 많음 (1톤 이상)</div>
                      <div>• 소량 샘플 요청 어려움</div>
                      <div>• 한국 미진출 회사도 많음</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 중소형 전문 화학사 */}
            <div className="border-2 border-green-400 rounded-lg p-6 bg-green-50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Factory className="h-6 w-6 text-green-600" />
                  <strong className="text-lg">중소형 전문 화학사 (Specialists)</strong>
                </div>
                <Badge className="bg-green-600 text-white">유연성 높음</Badge>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded p-3">
                  <div className="mb-2" style={{ fontWeight: 600 }}>💡 찾는 방법</div>
                  <div className="space-y-1 text-gray-700">
                    <div>• 독일 중소기업 DB: <code className="bg-gray-100 px-1 text-xs">wlw.de</code> (Wer liefert was - "누가 무엇을 공급하는가")</div>
                    <div>• 검색어 (독일어): "Betonzusatzmittel" (콘크리트 첨가제), "Recycling Beton" (재생 콘크리트)</div>
                    <div>• 이탈리아 B2B: <code className="bg-gray-100 px-1 text-xs">europages.com</code> → 필터: Italy, Construction chemicals</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <strong className="text-green-700">✅ 장점</strong>
                    <div className="text-xs text-gray-700 mt-1 space-y-0.5">
                      <div>• 가격 경쟁력 (대형사 대비 50-70%)</div>
                      <div>• 소량 샘플 제공 용이 (5-10kg)</div>
                      <div>• 맞춤형 배합 개발 가능</div>
                      <div>• 빠른 의사결정</div>
                    </div>
                  </div>
                  <div className="bg-white rounded p-3">
                    <strong className="text-red-700">❌ 단점</strong>
                    <div className="text-xs text-gray-700 mt-1 space-y-0.5">
                      <div>• 한국 수출 경험 적음</div>
                      <div>• 영어 소통 어려울 수 있음</div>
                      <div>• 물류 직접 처리 필요</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 연구기관 스핀오프 */}
            <div className="border-2 border-purple-400 rounded-lg p-6 bg-purple-50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Beaker className="h-6 w-6 text-purple-600" />
                  <strong className="text-lg">대학/연구기관 스핀오프 (Startups)</strong>
                </div>
                <Badge className="bg-purple-600 text-white">혁신 기술</Badge>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded p-3">
                  <div className="mb-2" style={{ fontWeight: 600 }}>💡 찾는 방법</div>
                  <div className="space-y-1 text-gray-700">
                    <div>• 독일 대학 기술 이전 센터: <code className="bg-gray-100 px-1 text-xs">TU München, RWTH Aachen</code></div>
                    <div>• 검색어: "sustainable concrete technology startup Europe"</div>
                    <div>• EU Horizon 프로젝트 참여사 목록 확인 (EU 연구 지원 받은 회사 = 기술력 검증)</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <strong className="text-green-700">✅ 장점</strong>
                    <div className="text-xs text-gray-700 mt-1 space-y-0.5">
                      <div>• 최신 기술 (나노 기술 등)</div>
                      <div>• 협력 의지 높음</div>
                      <div>• 공동 연구 가능</div>
                      <div>• 독점 계약 가능성</div>
                    </div>
                  </div>
                  <div className="bg-white rounded p-3">
                    <strong className="text-red-700">❌ 단점</strong>
                    <div className="text-xs text-gray-700 mt-1 space-y-0.5">
                      <div>• 대량 생산 능력 부족</div>
                      <div>• 가격 예측 어려움</div>
                      <div>• 장기 공급 불확실성</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2.4 RFQ 발송 템플릿 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="h-8 w-8 text-blue-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>2.4 영문 RFQ 이메일 템플릿 (화학 첨가제)</h3>
          </div>

          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 relative">
            <button
              onClick={() => copyToClipboard(`Subject: RFQ for Recycled Aggregate Enhancement Admixtures - Korea Project

Dear Technical Sales Team,

We are HICON KOREA Co., Ltd., a leading recycled aggregate manufacturer in South Korea with 28 years of experience.

COMPANY PROFILE:
- Business: Construction waste recycling (220,000 - 270,000 tons/year)
- Location: Hwaseong City, Gyeonggi Province, South Korea
- Facilities: 3 production lines, 71 equipment units
- New Project: Rebar spacer manufacturing using 60% recycled aggregate

PROJECT REQUIREMENTS:
We are establishing a new production line for concrete rebar spacers using recycled aggregates and require technical support for admixtures.

TARGET SPECIFICATIONS:
1. Recycled Aggregate Content: 60% (crushed concrete, 5-10mm)
2. Target Compressive Strength: ≥ 35 MPa (7 days)
3. Water Absorption: ≤ 8%
4. Production Volume: 12,000 pcs/day (500 kg of admixture/day)

REQUIRED ADMIXTURES:
Please provide quotations and technical data for the following:

1. Silica Fume (Microsilica)
   - Required quantity: 50 kg per 1,000 pcs
   - Purpose: Strength enhancement, pore filling

2. High-Range Water Reducer (Polycarboxylate Ether - PCE)
   - Required quantity: 10 kg per 1,000 pcs
   - Purpose: Workability improvement, W/C ratio reduction

3. Polymer Emulsion (SBR or EVA)
   - Required quantity: 25 kg per 1,000 pcs
   - Purpose: Surface coating of recycled aggregate, durability

4. (Optional) Fly Ash or GGBS
   - Purpose: Long-term strength, alkali-silica reaction mitigation

REQUEST FOR QUOTATION:
Please provide:
✓ Product datasheets and technical specifications
✓ Recommended dosage for 60% recycled aggregate concrete
✓ Quotation (FOB + CIF Busan Port, South Korea)
✓ Minimum order quantity (MOQ)
✓ Free samples (5-10 kg) for laboratory testing
✓ Mix design recommendation for our application
✓ Reference projects with recycled aggregate (if available)
✓ Technical support availability (remote consultation)

ADDITIONAL INFORMATION:
- We are willing to enter into a long-term supply agreement
- Technical training and on-site support would be highly valued
- Potential annual purchase volume: 12 tons (after pilot testing)

TIMELINE:
- Sample testing: 4 weeks
- Supplier selection: 6 weeks
- First order: Target date [INSERT DATE]

We would appreciate a response within 2 weeks. Please feel free to contact us if you need any additional information.

Best regards,

[Your Name]
[Your Title]
HICON KOREA Co., Ltd.
Email: [Your Email]
Phone: [Your Phone with +82 country code]
Website: [Company Website]
Address: [Factory Address], Hwaseong, South Korea`, 'chemical-rfq')}
              className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2 z-10"
            >
              {copiedText === 'chemical-rfq' ? (
                <>
                  <CheckSquare className="h-4 w-4" />
                  복사됨!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  전체 복사
                </>
              )}
            </button>
            
            <pre className="text-xs whitespace-pre-wrap text-gray-700 pr-28 overflow-x-auto">
{`Subject: RFQ for Recycled Aggregate Enhancement Admixtures - Korea Project

Dear Technical Sales Team,

We are HICON KOREA Co., Ltd., a leading recycled aggregate manufacturer in 
South Korea with 28 years of experience.

COMPANY PROFILE:
- Business: Construction waste recycling (220,000 - 270,000 tons/year)
- Location: Hwaseong City, Gyeonggi Province, South Korea
- Facilities: 3 production lines, 71 equipment units
- New Project: Rebar spacer manufacturing using 60% recycled aggregate

PROJECT REQUIREMENTS:
We are establishing a new production line for concrete rebar spacers using 
recycled aggregates and require technical support for admixtures.

TARGET SPECIFICATIONS:
1. Recycled Aggregate Content: 60% (crushed concrete, 5-10mm)
2. Target Compressive Strength: ≥ 35 MPa (7 days)
3. Water Absorption: ≤ 8%
4. Production Volume: 12,000 pcs/day (500 kg of admixture/day)

REQUIRED ADMIXTURES:
Please provide quotations and technical data for the following:

1. Silica Fume (Microsilica)
   - Required quantity: 50 kg per 1,000 pcs
   - Purpose: Strength enhancement, pore filling

2. High-Range Water Reducer (Polycarboxylate Ether - PCE)
   - Required quantity: 10 kg per 1,000 pcs
   - Purpose: Workability improvement, W/C ratio reduction

3. Polymer Emulsion (SBR or EVA)
   - Required quantity: 25 kg per 1,000 pcs
   - Purpose: Surface coating of recycled aggregate, durability

4. (Optional) Fly Ash or GGBS
   - Purpose: Long-term strength, alkali-silica reaction mitigation

REQUEST FOR QUOTATION:
Please provide:
✓ Product datasheets and technical specifications
✓ Recommended dosage for 60% recycled aggregate concrete
✓ Quotation (FOB + CIF Busan Port, South Korea)
✓ Minimum order quantity (MOQ)
✓ Free samples (5-10 kg) for laboratory testing
✓ Mix design recommendation for our application
✓ Reference projects with recycled aggregate (if available)
✓ Technical support availability (remote consultation)

ADDITIONAL INFORMATION:
- We are willing to enter into a long-term supply agreement
- Technical training and on-site support would be highly valued
- Potential annual purchase volume: 12 tons (after pilot testing)

TIMELINE:
- Sample testing: 4 weeks
- Supplier selection: 6 weeks
- First order: Target date [INSERT DATE]

We would appreciate a response within 2 weeks. Please feel free to contact 
us if you need any additional information.

Best regards,

[Your Name]
[Your Title]
HICON KOREA Co., Ltd.
Email: [Your Email]
Phone: [Your Phone with +82 country code]
Website: [Company Website]
Address: [Factory Address], Hwaseong, South Korea`}
            </pre>
          </div>
        </div>

        {/* 2.5 기술 협력 전략 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-8 w-8 text-green-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>2.5 유럽 화학사와 기술 협력 전략</h3>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 bg-blue-50 p-5 rounded-r-lg">
              <div className="mb-2" style={{ fontWeight: 600 }}>전략 1: 무료 샘플 테스트로 시작</div>
              <div className="text-sm text-gray-700">
                대부분의 유럽 화학사는 <strong>5-10kg 무료 샘플</strong>을 제공합니다. 
                먼저 3-5개 회사에 샘플을 요청하여 실험실에서 배합 테스트를 진행하세요. 
                이를 통해 <strong>비용 없이</strong> 최적의 첨가제를 찾을 수 있습니다.
              </div>
            </div>

            <div className="border-l-4 border-green-600 bg-green-50 p-5 rounded-r-lg">
              <div className="mb-2" style={{ fontWeight: 600 }}>전략 2: 기술 지원 패키지 협상</div>
              <div className="text-sm text-gray-700">
                "Technical Support Package"를 요청하세요. 많은 유럽 화학사는 신규 고객에게 다음을 제공합니다:
                <div className="mt-2 space-y-1 ml-4">
                  <div>✓ 무료 배합 설계 (Mix Design Consultation)</div>
                  <div>✓ 원격 화상 교육 (2-3회)</div>
                  <div>✓ 현장 방문 기술 지원 (1회, 대량 계약 시)</div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-600 bg-purple-50 p-5 rounded-r-lg">
              <div className="mb-2" style={{ fontWeight: 600 }}>전략 3: 한국 대리점 활용 (일부 대형사)</div>
              <div className="text-sm text-gray-700">
                <strong>BASF, Sika, Mapei</strong> 등 일부 대형 화학사는 한국에 <strong>지사 또는 대리점</strong>이 있습니다. 
                회사 웹사이트에서 "Contact" → "Distributors" → "Korea"를 찾아보세요. 
                한국 대리점을 통하면 <strong>빠른 샘플 수령, 한국어 소통, 물류 간소화</strong>가 가능합니다.
                <div className="mt-2 text-xs text-purple-700">
                  ⚠️ 참고: 중소형 유럽 화학사는 대부분 한국 대리점이 없으므로 직접 거래 필요
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-600 bg-orange-50 p-5 rounded-r-lg">
              <div className="mb-2" style={{ fontWeight: 600 }}>전략 4: 장기 공급 계약으로 가격 협상</div>
              <div className="text-sm text-gray-700">
                첫 주문 시 <strong>"Long-term Supply Agreement"</strong> 의향을 밝히면 
                초기 가격을 10-20% 할인받을 수 있습니다. 
                또한 <strong>연간 예상 구매량</strong>을 제시하면 협상력이 높아집니다.
              </div>
            </div>
          </div>
        </div>

        {/* PART 3: 유럽 설비 제조사 */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-800 text-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Factory className="h-10 w-10" />
            <h2 className="text-3xl" style={{ fontWeight: 700 }}>PART 3: 유럽 스페이서 설비 제조사 (독일 중심)</h2>
          </div>
          <p className="text-blue-100">European Rebar Spacer Manufacturing Equipment Suppliers from Germany</p>
        </div>

        {/* 3.1 독일 설비 제조사 4개사 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="h-8 w-8 text-blue-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>3.1 독일 콘크리트 제품 설비 제조사 (재생골재 스페이서 전용)</h3>
          </div>

          <div className="mb-6 bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
            <div className="mb-3" style={{ fontWeight: 600 }}>💡 왜 독일 회사인가?</div>
            <div className="text-sm text-gray-700 space-y-2">
              <div>✓ <strong>기술력:</strong> 독일은 콘크리트 제품 설비 분야에서 <strong>세계 1위</strong> (100년 이상 역사)</div>
              <div>✓ <strong>재생골재 경험:</strong> 유럽은 1990년대부터 재생골재 사용 → <strong>30년 노하우</strong></div>
              <div>✓ <strong>턴키 방식:</strong> 설계 → 제작 → 설치 → 교육까지 <strong>원스톱 서비스</strong></div>
              <div>✓ <strong>아시아 실적:</strong> 한국, 중국, 일본 등 아시아 수출 경험 풍부</div>
            </div>
          </div>

          {/* 4개 회사 카드 */}
          <div className="space-y-6">
            {/* BFS GmbH */}
            <div className="border-2 border-blue-400 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-blue-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl" style={{ fontWeight: 700 }}>1</div>
                  <div>
                    <h4 className="text-xl" style={{ fontWeight: 700 }}>BFS GmbH (독일)</h4>
                    <div className="text-sm text-gray-600">Concrete Pipe & Manhole Equipment Specialist</div>
                  </div>
                </div>
                <Badge className="bg-blue-600 text-white">최우선 추천 ⭐</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="mb-2" style={{ fontWeight: 600 }}>🏢 회사 정보</div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>• <strong>전문 분야:</strong> 콘크리트 파이프, 맨홀, 소형 프리캐스트</div>
                    <div>• <strong>설립:</strong> 1970년대 (50년+ 경력)</div>
                    <div>• <strong>본사:</strong> 독일 바덴-뷔르템베르크</div>
                    <div>• <strong>직원:</strong> 약 200명</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="mb-2" style={{ fontWeight: 600 }}>🌏 납품 실적</div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>• <strong>아시아:</strong> 한국, 중국, 일본, 태국 등</div>
                    <div>• <strong>유럽:</strong> 독일, 프랑스, 폴란드 등 30개국</div>
                    <div>• <strong>중동:</strong> UAE, 사우디아라비아</div>
                    <div>• <strong>총 설치:</strong> 500개 이상 플랜트</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="mb-2" style={{ fontWeight: 600 }}>⚙️ 스페이서 생산 적합성</div>
                <div className="text-sm text-gray-700 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div><strong>정밀 배합 시스템:</strong> 재생골재 60% 사용 시 필수적인 <strong>자동 계량 시스템</strong> (오차 ±0.5%)</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div><strong>소형 제품 금형:</strong> 파이프 기술 응용 → 스페이서 금형 제작 가능</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div><strong>턴키 경험:</strong> 설계부터 시운전까지 <strong>6개월 완료</strong></div>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-800">
                  💰 <strong>예상 설비 비용 (추정):</strong> 중형 자동화 라인 €300,000 - €500,000 (시간당 1,200-1,500개)
                </div>
                <div className="mt-2 p-2 bg-yellow-50 border border-yellow-300 rounded text-xs text-yellow-800">
                  ⚠️ <strong>주의:</strong> 이 가격은 "기본 구성" 추정치입니다. 실제 비용은 자동화 수준, 몰드 개수, 제어 시스템, 설치/교육 비용에 따라 <strong>±30-50% 변동</strong> 가능합니다. <strong>반드시 직접 견적을 받으세요!</strong>
                </div>
              </div>
            </div>

            {/* Zenith Maschinenfabrik GmbH */}
            <div className="border-2 border-green-400 rounded-lg p-6 bg-gradient-to-r from-green-50 to-green-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl" style={{ fontWeight: 700 }}>2</div>
                  <div>
                    <h4 className="text-xl" style={{ fontWeight: 700 }}>Zenith Maschinenfabrik GmbH (독일)</h4>
                    <div className="text-sm text-gray-600">Concrete Block & Landscaping Products Equipment</div>
                  </div>
                </div>
                <Badge className="bg-green-600 text-white">유연한 시스템</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="mb-2" style={{ fontWeight: 600 }}>🏢 회사 정보</div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>• <strong>전문 분야:</strong> 콘크리트 블록, 조경 제품, 인터락</div>
                    <div>• <strong>설립:</strong> 1960년대</div>
                    <div>• <strong>본사:</strong> 독일 바이에른</div>
                    <div>• <strong>특징:</strong> 다양한 형태 제품 생산 가능</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="mb-2" style={{ fontWeight: 600 }}>🌏 납품 실적</div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>• <strong>글로벌:</strong> 70개국 이상</div>
                    <div>• <strong>유럽:</strong> 시장 점유율 상위 3위</div>
                    <div>• <strong>아시아:</strong> 인도, 베트남, 필리핀 등</div>
                    <div>• <strong>특징:</strong> 중소 규모 공장 전문</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="mb-2" style={{ fontWeight: 600 }}>⚙️ 스페이서 생산 적합성</div>
                <div className="text-sm text-gray-700 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div><strong>모듈형 시스템:</strong> 필요한 부분만 구매 가능 (믹서 + 성형기만)</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div><strong>다양한 금형:</strong> 블록 제작 기술 → 스페이서 여러 규격 동시 생산</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div><strong>재생골재 경험:</strong> 유럽 고객사 80%가 재생골재 20-40% 사용</div>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-green-50 rounded text-xs text-green-800">
                  💰 <strong>예상 설비 비용 (추정):</strong> 소형 모듈형 €200,000 - €400,000 (시간당 800-1,000개)
                </div>
                <div className="mt-2 p-2 bg-yellow-50 border border-yellow-300 rounded text-xs text-yellow-800">
                  ⚠️ 추정치입니다. 모듈 추가 시 €50K-€100K씩 증가. 직접 견적 필수!
                </div>
              </div>
            </div>

            {/* Hess Group */}
            <div className="border-2 border-purple-400 rounded-lg p-6 bg-gradient-to-r from-purple-50 to-purple-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl" style={{ fontWeight: 700 }}>3</div>
                  <div>
                    <h4 className="text-xl" style={{ fontWeight: 700 }}>Hess Group (독일)</h4>
                    <div className="text-sm text-gray-600">Precast Concrete Products & Automated Systems</div>
                  </div>
                </div>
                <Badge className="bg-purple-600 text-white">대형 전문</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="mb-2" style={{ fontWeight: 600 }}>🏢 회사 정보</div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>• <strong>전문 분야:</strong> 프리캐스트 콘크리트 종합 솔루션</div>
                    <div>• <strong>설립:</strong> 1946년 (75년+ 역사)</div>
                    <div>• <strong>본사:</strong> 독일 헤센</div>
                    <div>• <strong>직원:</strong> 약 800명 (대형사)</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="mb-2" style={{ fontWeight: 600 }}>🌏 납품 실적</div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>• <strong>글로벌:</strong> 100개국 이상</div>
                    <div>• <strong>시장 지위:</strong> 세계 Top 3</div>
                    <div>• <strong>한국:</strong> 대형 건설사 납품 경험 有</div>
                    <div>• <strong>레퍼런스:</strong> 1,000개 이상 플랜트</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="mb-2" style={{ fontWeight: 600 }}>⚙️ 스페이서 생산 적합성</div>
                <div className="text-sm text-gray-700 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div><strong>완전 자동화:</strong> 원료 투입부터 포장까지 <strong>무인 시스템</strong> 가능</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div><strong>품질 관리:</strong> 실시간 모니터링 + 불량품 자동 제거</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div><strong>단점:</strong> 대규모 생산 전문 (일 5만개 이상) → 소규모는 과투자 가능성</div>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-800">
                  💰 <strong>예상 설비 비용 (추정):</strong> 대형 완전 자동화 라인 €600,000 - €1,500,000+ (시간당 2,500-3,000개 이상)
                </div>
                <div className="mt-2 p-2 bg-yellow-50 border border-yellow-300 rounded text-xs text-yellow-800">
                  ⚠️ 대규모 투자 프로젝트. 로봇 자동화, IoT 포함 시 €2M 초과 가능. 직접 견적 필수!
                </div>
              </div>
            </div>

            {/* Schuster GmbH */}
            <div className="border-2 border-orange-400 rounded-lg p-6 bg-gradient-to-r from-orange-50 to-orange-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl" style={{ fontWeight: 700 }}>4</div>
                  <div>
                    <h4 className="text-xl" style={{ fontWeight: 700 }}>Schuster GmbH (독일)</h4>
                    <div className="text-sm text-gray-600">Small Concrete Components Specialist</div>
                  </div>
                </div>
                <Badge className="bg-orange-600 text-white">소형 전문 💎</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="mb-2" style={{ fontWeight: 600 }}>🏢 회사 정보</div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>• <strong>전문 분야:</strong> <strong>소형 콘크리트 부품 전문</strong> (스페이서 포함)</div>
                    <div>• <strong>설립:</strong> 1980년대</div>
                    <div>• <strong>본사:</strong> 독일 작센</div>
                    <div>• <strong>특징:</strong> 맞춤형 솔루션 전문</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="mb-2" style={{ fontWeight: 600 }}>🌏 납품 실적</div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>• <strong>유럽:</strong> 중소 규모 공장 200개 이상</div>
                    <div>• <strong>동유럽:</strong> 폴란드, 체코, 루마니아</div>
                    <div>• <strong>스페이서:</strong> 실제 스페이서 설비 납품 경험 有</div>
                    <div>• <strong>특징:</strong> 중소기업 고객 전문</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="mb-2" style={{ fontWeight: 600 }}>⚙️ 스페이서 생산 적합성</div>
                <div className="text-sm text-gray-700 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div><strong>스페이서 전용 라인:</strong> 실제 스페이서 생산 설비 보유 (유일!) ⭐</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div><strong>소량 생산 최적화:</strong> 일 1만개 수준 생산에 가장 적합</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div><strong>가격 경쟁력:</strong> 대형사 대비 40-50% 저렴</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div><strong>빠른 납기:</strong> 주문 후 3-4개월 (대형사는 6-12개월)</div>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-orange-50 rounded text-xs text-orange-800">
                  💰 <strong>예상 설비 비용 (추정):</strong> 소형 반자동 라인 €150,000 - €300,000 (시간당 600-800개)
                </div>
                <div className="mt-2 p-2 bg-yellow-50 border border-yellow-300 rounded text-xs text-yellow-800">
                  ⚠️ 이 가격은 "단일 장비" 기준일 수 있습니다. 전체 라인(믹서+성형+양생+적재)은 €200K-€400K 예상. 직접 견적 필수!
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-400 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="mb-2" style={{ fontWeight: 600 }}>🏆 하이콘 코리아에 가장 적합한 회사!</div>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div>• <strong>이유 1:</strong> 스페이서 전용 설비 경험 (다른 회사는 응용)</div>
                      <div>• <strong>이유 2:</strong> 중소 규모 생산량 (일 1.2만개) 최적화</div>
                      <div>• <strong>이유 3:</strong> 가격 대비 성능 최고 (ROI 빠름)</div>
                      <div>• <strong>이유 4:</strong> 재생골재 60% 배합 경험 보유</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 가격 정보 정확성 경고 */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-400 rounded-lg p-6 mt-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="mb-2" style={{ fontWeight: 600 }}>⚠️ 가격 정보 주의사항 (매우 중요!)</div>
                <div className="text-sm text-gray-700 space-y-2">
                  <div><strong>1. 위 가격은 "추정치"입니다</strong></div>
                  <div className="ml-4 text-xs">
                    • 공식 출처 없음 (독일 업체들은 공개 견적을 제공하지 않음)<br/>
                    • 업계 평균과 유사 프로젝트 경험을 바탕으로 한 추정<br/>
                    • 실제 가격은 <strong>프로젝트별로 크게 다름</strong>
                  </div>

                  <div className="mt-3"><strong>2. 가격 변동 요인 (±30-100% 차이 발생)</strong></div>
                  <div className="ml-4 text-xs space-y-1">
                    <div>📦 <strong>생산 용량:</strong> 시간당 500개 vs 3,000개 → 가격 5배 차이</div>
                    <div>⚙️ <strong>자동화 수준:</strong> 반자동 vs 완전 로봇 자동화 → 가격 3배 차이</div>
                    <div>🔧 <strong>몰드 개수:</strong> 10개 vs 100개 → 추가 €20K-€50K</div>
                    <div>🌡️ <strong>증기 양생 포함 여부:</strong> 포함 시 +€50K-€100K</div>
                    <div>💻 <strong>제어 시스템:</strong> 기본 PLC vs IoT 원격 모니터링 → +€30K-€80K</div>
                    <div>🚢 <strong>배송/설치:</strong> 한국 부산 CIF 기준 +€20K-€50K</div>
                    <div>👷 <strong>교육/시운전:</strong> 독일 엔지니어 현장 방문 +€10K-€30K</div>
                  </div>

                  <div className="mt-3"><strong>3. 전체 생산 라인 구성 요소</strong></div>
                  <div className="ml-4 text-xs space-y-1">
                    <div>• 원료 저장 사일로 (€15K-€30K)</div>
                    <div>• 자동 계량 시스템 (€20K-€50K)</div>
                    <div>• 믹서 (€30K-€80K)</div>
                    <div>• 성형기 + 몰드 (€80K-€250K)</div>
                    <div>• 증기 양생실 (€50K-€100K)</div>
                    <div>• 자동 적재/포장 시스템 (€40K-€100K)</div>
                    <div>• PLC 제어 시스템 (€20K-€60K)</div>
                    <div className="text-red-700 mt-2"><strong>→ 총 기본 구성: €255K-€670K</strong></div>
                    <div className="text-red-700"><strong>→ 고급 자동화: €500K-€1,500K+</strong></div>
                  </div>

                  <div className="mt-4 p-3 bg-white rounded border-2 border-red-400">
                    <strong className="text-red-700">💡 결론: 반드시 직접 견적을 받으세요!</strong>
                    <div className="text-xs text-gray-700 mt-2">
                      이 가이드의 가격은 "대략적인 예산 계획용"입니다. 실제 투자 결정 전에는 최소 3개 업체로부터 상세 견적(Detailed Quotation)을 받고, 레퍼런스 프로젝트를 직접 방문하여 확인하는 것을 강력히 권장합니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 가격 검증 방법 */}
            <div className="mt-4 bg-white rounded p-4">
              <div className="mb-2" style={{ fontWeight: 600 }}>📧 정확한 가격 확인 방법</div>
              <div className="text-sm text-gray-700 space-y-2">
                <div><strong>1단계:</strong> 위 4개 업체에 동일한 RFQ(견적 요청) 이메일 발송</div>
                <div><strong>2단계:</strong> 생산 요구사항 명확히 제시 (일 생산량, 제품 규격, 자동화 수준)</div>
                <div><strong>3단계:</strong> "Detailed Quotation (상세 견적)" 요청 (항목별 가격 분리)</div>
                <div><strong>4단계:</strong> FOB(공장 인도) + CIF Busan(부산항 도착) 두 가지 견적 비교</div>
                <div><strong>5단계:</strong> 레퍼런스 프로젝트 요청 (특히 한국/아시아 납품 사례)</div>
                <div className="text-xs text-gray-600 mt-2">
                  💡 <strong>TIP:</strong> 독일 업체는 초기 견적을 "높게" 제시하는 경향이 있습니다. 2-3회 협상을 통해 10-20% 할인 가능합니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3.2 턴키 방식 설명 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="h-8 w-8 text-yellow-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>3.2 턴키(Turn-key) 방식이란?</h3>
          </div>

          <div className="mb-6 bg-yellow-50 border-2 border-yellow-400 rounded-lg p-5">
            <div className="mb-3" style={{ fontWeight: 600 }}>🔑 "열쇠만 돌리면 바로 생산!" - 턴키의 의미</div>
            <div className="text-sm text-gray-700">
              턴키(Turn-key) 방식은 설비 제조사가 <strong>공장 설계부터 제품 생산까지 모든 것을 책임지는 방식</strong>입니다. 
              고객은 부지와 자금만 준비하면, 설비 제조사가 나머지 모든 것을 해결합니다. 
              마치 새 아파트에 "열쇠만 받아서 바로 입주"하는 것처럼, <strong>완성된 공장을 받아 바로 생산</strong>할 수 있습니다.
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 bg-blue-50 p-5 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center">1</div>
                <strong className="text-lg">공장 설계 (Factory Design)</strong>
              </div>
              <div className="ml-11 text-sm text-gray-700 space-y-1">
                <div>• 3,000평 부지 레이아웃 설계 (원료 저장 → 생산 → 포장 → 출하)</div>
                <div>• 설비 배치도 (Machinery Layout)</div>
                <div>• 전기/수도/배수 설계</div>
                <div>• 3D 시뮬레이션 제공</div>
              </div>
            </div>

            <div className="border-l-4 border-green-600 bg-green-50 p-5 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center">2</div>
                <strong className="text-lg">장비 공급 (Equipment Supply)</strong>
              </div>
              <div className="ml-11 text-sm text-gray-700 space-y-1">
                <div>• 믹서, 컨베이어, 성형기, 양생 시스템 등 <strong>모든 장비</strong></div>
                <div>• 독일 공장에서 제작 → 컨테이너 선적 → 한국 도착</div>
                <div>• 예비 부품(Spare Parts) 1년 분 포함</div>
              </div>
            </div>

            <div className="border-l-4 border-purple-600 bg-purple-50 p-5 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-600 text-white rounded-full h-8 w-8 flex items-center justify-center">3</div>
                <strong className="text-lg">현장 설치 (On-site Installation)</strong>
              </div>
              <div className="ml-11 text-sm text-gray-700 space-y-1">
                <div>• 독일 엔지니어 2-3명 한국 파견 (2-3주)</div>
                <div>• 설비 조립 및 배관/전기 연결</div>
                <div>• 안전 검사 및 시운전 준비</div>
              </div>
            </div>

            <div className="border-l-4 border-orange-600 bg-orange-50 p-5 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-orange-600 text-white rounded-full h-8 w-8 flex items-center justify-center">4</div>
                <strong className="text-lg">시운전 (Commissioning)</strong>
              </div>
              <div className="ml-11 text-sm text-gray-700 space-y-1">
                <div>• 재생골재 60% 배합 테스트</div>
                <div>• 스페이서 1,000개 시험 생산</div>
                <div>• 품질 검사 (압축강도, 흡수율 등)</div>
                <div>• 문제 발견 시 즉시 해결</div>
              </div>
            </div>

            <div className="border-l-4 border-red-600 bg-red-50 p-5 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-600 text-white rounded-full h-8 w-8 flex items-center justify-center">5</div>
                <strong className="text-lg">작업자 교육 (Training)</strong>
              </div>
              <div className="ml-11 text-sm text-gray-700 space-y-1">
                <div>• 운영 매뉴얼 (한국어 번역 가능)</div>
                <div>• 작업자 실습 교육 (1주일)</div>
                <div>• 유지보수 교육 (고장 시 대처법)</div>
                <div>• 24시간 원격 지원 (1년)</div>
              </div>
            </div>

            <div className="border-l-4 border-pink-600 bg-pink-50 p-5 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-pink-600 text-white rounded-full h-8 w-8 flex items-center justify-center">6</div>
                <strong className="text-lg">애프터서비스 (After-sales Service)</strong>
              </div>
              <div className="ml-11 text-sm text-gray-700 space-y-1">
                <div>• 1년 품질 보증 (Warranty)</div>
                <div>• 부품 고장 시 독일에서 긴급 배송 (3-5일)</div>
                <div>• 매년 1회 정기 점검 (유상, 선택)</div>
                <div>• 이메일/화상 기술 지원 (평생)</div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-lg p-5">
            <div className="mb-3" style={{ fontWeight: 600 }}>📅 턴키 프로젝트 전체 일정 (현실적 기준: 9-12개월)</div>
            <div className="mb-3 text-xs text-gray-600">
              ⚠️ <strong>주의:</strong> 아래는 "최적 조건" 기준입니다. 설계 변경, 부품 조달 지연, 통관 문제 발생 시 <strong>+2-4개월</strong> 추가될 수 있습니다.
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded px-2 py-1 text-xs">Month 1-2</div>
                <div>계약 체결 + 상세 설계 + 승인 (재생골재 배합 설계 포함)</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-600 text-white rounded px-2 py-1 text-xs">Month 3-7</div>
                <div>장비 제작 (4-5개월, 커스텀 몰드 제작 시간 포함)</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-600 text-white rounded px-2 py-1 text-xs">Month 7-8</div>
                <div>독일 공장 테스트 + 선적 준비 (1개월)</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 text-white rounded px-2 py-1 text-xs">Month 8-9</div>
                <div>해상운송 (독일 → 부산, 4-6주) + 통관 (1-2주)</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-pink-600 text-white rounded px-2 py-1 text-xs">Month 9-11</div>
                <div>현장 설치 + 배관/전기 공사 (4-6주) + 시운전 (2-4주)</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-600 text-white rounded px-2 py-1 text-xs">Month 11-12</div>
                <div>재생골재 배합 최적화 + 작업자 교육 + 본격 양산 시작! 🎉</div>
              </div>
            </div>

            {/* 지연 요인 경고 */}
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-400 rounded">
              <div className="mb-2 text-xs" style={{ fontWeight: 600 }}>⚠️ 일정 지연 주요 원인 (반드시 확인!)</div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>🔴 <strong>설계 변경 요청:</strong> 계약 후 사양 변경 시 +1-3개월</div>
                <div>🔴 <strong>부품 조달 지연:</strong> 특수 부품(PLC, 센서 등) 공급 문제 시 +2-4주</div>
                <div>🔴 <strong>한국 건축 허가:</strong> 공장 건축 인허가 지연 시 +2-6개월</div>
                <div>🔴 <strong>통관 문제:</strong> 서류 미비, 관세 문제 시 +2-4주</div>
                <div>🔴 <strong>시운전 실패:</strong> 재생골재 품질 불안정 시 배합 재설계 +1-2개월</div>
                <div className="mt-2 text-red-700">
                  <strong>→ 실제 평균: 12-14개월 (업계 표준)</strong>
                </div>
              </div>
            </div>

            {/* 빠른 일정 TIP */}
            <div className="mt-3 p-3 bg-blue-50 border border-blue-400 rounded">
              <div className="mb-2 text-xs" style={{ fontWeight: 600 }}>💡 일정 단축 TIP (9-10개월 목표)</div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>✅ <strong>사전 준비:</strong> 계약 전 공장 부지 확보 + 건축 허가 완료</div>
                <div>✅ <strong>표준 사양:</strong> 커스텀 요청 최소화 (표준 몰드 사용)</div>
                <div>✅ <strong>병렬 진행:</strong> 설비 제작 중 현장 기초 공사 동시 진행</div>
                <div>✅ <strong>빠른 의사결정:</strong> 독일 업체 질문에 24시간 내 답변</div>
                <div>✅ <strong>에어 운송 옵션:</strong> 급한 경우 일부 부품 항공 운송 (+비용)</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3.3 설비 제조사 선택 가이드 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Search className="h-8 w-8 text-blue-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>3.3 어떤 회사를 선택해야 할까? (하이콘 기준)</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="border-2 border-green-400 rounded-lg p-5 bg-green-50">
              <div className="mb-3 text-center">
                <div className="text-3xl mb-2">🏆</div>
                <strong className="text-lg">1순위: Schuster</strong>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <div>✅ 스페이서 전용 설비</div>
                <div>✅ 중소 규모 최적</div>
                <div>✅ 가격 €100K-200K</div>
                <div>✅ 재생골재 경험</div>
                <div>✅ 빠른 납기 (3-4개월)</div>
              </div>
              <div className="mt-3 p-2 bg-green-600 text-white rounded text-center text-xs">
                <strong>하이콘에 최적!</strong>
              </div>
            </div>

            <div className="border-2 border-blue-400 rounded-lg p-5 bg-blue-50">
              <div className="mb-3 text-center">
                <div className="text-3xl mb-2">⭐</div>
                <strong className="text-lg">2순위: BFS</strong>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <div>✅ 정밀 배합 시스템</div>
                <div>✅ 아시아 실적 多</div>
                <div>✅ 가격 €250K-400K</div>
                <div>⚠️ 스페이서는 응용</div>
                <div>⚠️ 중대형 규모</div>
              </div>
              <div className="mt-3 p-2 bg-blue-600 text-white rounded text-center text-xs">
                <strong>확장 계획 시 고려</strong>
              </div>
            </div>

            <div className="border-2 border-purple-400 rounded-lg p-5 bg-purple-50">
              <div className="mb-3 text-center">
                <div className="text-3xl mb-2">💰</div>
                <strong className="text-lg">3순위: Zenith</strong>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <div>✅ 모듈형 (유연함)</div>
                <div>✅ 가격 €150K-300K</div>
                <div>✅ 다양한 제품 동시</div>
                <div>⚠️ 블록 전문</div>
                <div>⚠️ 스페이서 경험 적음</div>
              </div>
              <div className="mt-3 p-2 bg-purple-600 text-white rounded text-center text-xs">
                <strong>다각화 전략 시</strong>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-5">
            <div className="mb-3" style={{ fontWeight: 600 }}>💡 최종 추천: Schuster GmbH</div>
            <div className="text-sm text-gray-700 space-y-2">
              <div><strong>이유 1:</strong> 하이콘의 목표 생산량 (일 1.2만개 = 시간당 800-1,000개)에 정확히 맞춤</div>
              <div><strong>이유 2:</strong> 재생골재 60% 배합 경험 보유 (유럽 고객사 실적)</div>
              <div><strong>이유 3:</strong> 투자 비용 대비 ROI 최고 (€150K 기준 2년 회수 가능)</div>
              <div><strong>이유 4:</strong> 턴키 방식 + 한국어 매뉴얼 제공 가능</div>
            </div>
          </div>
        </div>

        {/* PART 4: KOTRA 활용 가이드 */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-800 text-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-10 w-10" />
            <h2 className="text-3xl" style={{ fontWeight: 700 }}>PART 4: KOTRA 활용 가이드</h2>
          </div>
          <p className="text-indigo-100">Korea Trade-Investment Promotion Agency Support Programs for Equipment Procurement</p>
        </div>

        {/* 4.1 KOTRA 지원 프로그램 개요 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="h-8 w-8 text-indigo-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>4.1 KOTRA 지원 프로그램 개요</h3>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-lg p-6 mb-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>📌 재생골재 스페이서 설비 구매 시 KOTRA 활용 가능성</div>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 text-xs">❌</div>
                  <div>
                    <strong className="text-red-700">직접 지원은 없음:</strong>
                    <div className="mt-1">KOTRA는 재생골재 철근 스페이서 설비 구매를 위한 <strong>특정 지원 프로그램을 직접 운영하지 않습니다.</strong></div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 text-xs">✅</div>
                  <div>
                    <strong className="text-green-700">간접 지원은 풍부:</strong>
                    <div className="mt-1">하지만 <strong>해외 시장 정보 제공, 파트너 발굴, 전시회 참가, 컨설팅</strong> 등 간접 지원 서비스를 적극 활용할 수 있습니다!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>🎯 하이콘 코리아가 활용할 수 있는 KOTRA 지원 3가지</div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border-l-4 border-blue-600 bg-blue-50 p-5 rounded-r-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center">1</div>
                  <strong>시장조사 및 파트너 연결</strong>
                </div>
                <div className="text-sm text-gray-700">
                  독일 무역관을 통해 <strong>BFS, Schuster 등 설비 제조사</strong>에 대한 심층 조사 및 비즈니스 파트너 발굴 지원
                </div>
              </div>

              <div className="border-l-4 border-green-600 bg-green-50 p-5 rounded-r-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center">2</div>
                  <strong>수출바우처 사업</strong>
                </div>
                <div className="text-sm text-gray-700">
                  해외 전시회 참가, 통번역, 컨설팅 비용을 <strong>최대 70-90% 지원</strong> (중소기업 기준)
                </div>
              </div>

              <div className="border-l-4 border-purple-600 bg-purple-50 p-5 rounded-r-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-purple-600 text-white rounded-full h-8 w-8 flex items-center justify-center">3</div>
                  <strong>해외진출 프리미엄 서비스 (OPS)</strong>
                </div>
                <div className="text-sm text-gray-700">
                  설비 도입 관련 <strong>심층 맞춤형 유료 서비스</strong> (현지 법률, 물류, 계약서 검토 등)
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-700 flex-shrink-0 mt-0.5" />
              <div>
                <div className="mb-2" style={{ fontWeight: 600 }}>💡 핵심 팁: KOTRA는 "판매"가 아닌 "구매"에도 활용 가능!</div>
                <div className="text-sm text-gray-700">
                  많은 기업이 KOTRA를 "수출 지원"만 받는다고 생각하지만, 
                  <strong className="text-yellow-800"> 해외 설비 구매 시 현지 정보 조사, 제조사 신뢰도 검증, 계약서 검토</strong> 등에도 활용할 수 있습니다!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4.2 시장조사 및 파트너 발굴 지원 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Search className="h-8 w-8 text-blue-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>4.2 시장조사 및 파트너 발굴 지원</h3>
          </div>

          <div className="mb-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>🌍 KOTRA 해외무역관 활용법</div>
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
              <div className="mb-3 text-sm text-gray-700">
                KOTRA는 <strong>전 세계 127개국, 184개 해외무역관</strong>을 운영하고 있으며, 
                독일에는 <strong>프랑크푸르트, 뮌헨, 함부르크</strong> 3개 무역관이 있습니다.
              </div>
              <div className="grid md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white rounded-lg">
                  <div className="mb-1" style={{ fontWeight: 600 }}>🇩🇪 프랑크푸르트 무역관</div>
                  <div className="text-gray-600">독일 금융/물류 중심지</div>
                  <div className="mt-2 text-blue-700">→ BFS, Hess 인근</div>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <div className="mb-1" style={{ fontWeight: 600 }}>🇩🇪 뮌헨 무역관</div>
                  <div className="text-gray-600">독일 기계/제조업 중심</div>
                  <div className="mt-2 text-blue-700">→ Schuster 인근</div>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <div className="mb-1" style={{ fontWeight: 600 }}>🇩🇪 함부르크 무역관</div>
                  <div className="text-gray-600">북부 항구 도시</div>
                  <div className="mt-2 text-blue-700">→ Zenith 인근</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>📋 요청 가능한 서비스 (무료 또는 저비용)</div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 text-xs">1</div>
                <div className="text-sm">
                  <strong>설비 제조사 리스트업:</strong>
                  <div className="text-gray-700 mt-1">"독일 내 재생골재 활용 철근 스페이서 설비 제조사 5-10개 조사" 요청 가능</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 text-xs">2</div>
                <div className="text-sm">
                  <strong>기업 신뢰도 검증:</strong>
                  <div className="text-gray-700 mt-1">BFS, Schuster 등 특정 제조사의 재무 상태, 납품 이력, 평판 조사</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 text-xs">3</div>
                <div className="text-sm">
                  <strong>가격 정보 수집:</strong>
                  <div className="text-gray-700 mt-1">"유사 프로젝트의 평균 견적 범위"를 무역관을 통해 간접 확인</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 text-xs">4</div>
                <div className="text-sm">
                  <strong>비즈니스 미팅 주선:</strong>
                  <div className="text-gray-700 mt-1">독일 방문 시 설비 제조사와의 <strong>1:1 화상/대면 미팅</strong> 주선</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 text-xs">5</div>
                <div className="text-sm">
                  <strong>통역 지원:</strong>
                  <div className="text-gray-700 mt-1">화상 회의 시 독일어/영어 통역 연결 가능 (유료/무료 혼합)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-400 rounded-lg p-5">
            <div className="mb-3" style={{ fontWeight: 600 }}>✅ 하이콘 코리아 활용 예시</div>
            <div className="text-sm text-gray-700 space-y-2">
              <div><strong>Step 1:</strong> KOTRA 독일 무역관에 "재생골재 스페이서 설비 구매 관련 BFS, Schuster GmbH 신뢰도 검증" 요청</div>
              <div><strong>Step 2:</strong> 무역관에서 현지 기업 등록 상태, 재무 건전성, 한국 수출 이력 등 조사 후 보고서 제공</div>
              <div><strong>Step 3:</strong> 독일 방문 시 무역관에서 BFS 공장 방문 미팅 주선</div>
              <div><strong>Step 4:</strong> 계약서 검토 시 무역관 상담역과 사전 협의 (법률 리스크 확인)</div>
            </div>
          </div>
        </div>

        {/* 4.3 수출바우처 사업 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-8 w-8 text-green-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>4.3 수출바우처 사업 활용법</h3>
          </div>

          <div className="mb-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>💰 수출바우처란?</div>
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5">
              <div className="text-sm text-gray-700 space-y-2">
                <div>중소·중견 기업의 <strong>해외 진출을 돕기 위해</strong> 정부가 비용을 지원하는 프로그램입니다.</div>
                <div>재생골재 스페이서 설비 구매는 <strong>"해외 기술/설비 도입"</strong>으로 분류되어 일부 서비스 지원 가능!</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>📊 지원 내용 (2025년 기준)</div>
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-3 text-left">지원 항목</th>
                    <th className="p-3 text-left">지원 비율</th>
                    <th className="p-3 text-left">최대 금액</th>
                    <th className="p-3 text-left">하이콘 활용 가능성</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-blue-200">
                    <td className="p-3"><strong>해외 전시회 참가</strong></td>
                    <td className="p-3">70-90%</td>
                    <td className="p-3">1,000만원</td>
                    <td className="p-3 text-green-700">✅ <strong>독일 bauma 전시회</strong></td>
                  </tr>
                  <tr className="border-t border-blue-200 bg-blue-50">
                    <td className="p-3"><strong>해외 컨설팅</strong></td>
                    <td className="p-3">70-90%</td>
                    <td className="p-3">800만원</td>
                    <td className="p-3 text-green-700">✅ <strong>독일 법률/계약 컨설팅</strong></td>
                  </tr>
                  <tr className="border-t border-blue-200">
                    <td className="p-3"><strong>통번역 서비스</strong></td>
                    <td className="p-3">80%</td>
                    <td className="p-3">500만원</td>
                    <td className="p-3 text-green-700">✅ <strong>설비사와 화상 회의</strong></td>
                  </tr>
                  <tr className="border-t border-blue-200 bg-blue-50">
                    <td className="p-3"><strong>해외 마케팅</strong></td>
                    <td className="p-3">70-90%</td>
                    <td className="p-3">1,500만원</td>
                    <td className="p-3 text-gray-400">△ 설비 구매는 해당 없음</td>
                  </tr>
                  <tr className="border-t border-blue-200">
                    <td className="p-3"><strong>해외 인증 획득</strong></td>
                    <td className="p-3">70-90%</td>
                    <td className="p-3">1,200만원</td>
                    <td className="p-3 text-gray-400">△ 설비 구매는 해당 없음</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>🎯 하이콘 코리아 활용 시나리오</div>
            <div className="space-y-3">
              <div className="border-l-4 border-green-600 bg-green-50 p-4 rounded-r-lg">
                <div className="mb-2" style={{ fontWeight: 600 }}>시나리오 1: 독일 bauma 전시회 참가 (건설 기계 박람회)</div>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>• <strong>bauma 2025</strong> (독일 뮌헨, 4월 개최 예정)</div>
                  <div>• BFS, Schuster 등 설비 제조사가 모두 참가</div>
                  <div>• 부스 방문 + 현장 시연 확인 + 명함 교환</div>
                  <div className="mt-2 p-2 bg-green-600 text-white rounded text-xs">
                    <strong>지원 금액:</strong> 항공비 + 숙박비 + 통역비 약 <strong>700만원 중 70% = 490만원 지원</strong>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded-r-lg">
                <div className="mb-2" style={{ fontWeight: 600 }}>시나리오 2: 독일 법률 컨설팅 (계약서 검토)</div>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>• Schuster GmbH와 턴키 계약 전 <strong>독일 법률 전문가</strong>에게 계약서 검토 의뢰</div>
                  <div>• 지급 조건, 하자 보증, 지연 위약금 조항 등 확인</div>
                  <div>• 한국 법무법인과 협업하여 리스크 최소화</div>
                  <div className="mt-2 p-2 bg-blue-600 text-white rounded text-xs">
                    <strong>지원 금액:</strong> 법률 컨설팅 비용 약 <strong>600만원 중 70% = 420만원 지원</strong>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 bg-purple-50 p-4 rounded-r-lg">
                <div className="mb-2" style={{ fontWeight: 600 }}>시나리오 3: 독일어 통번역 서비스 (화상 회의 10회)</div>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>• BFS, Schuster와 월 2회 화상 회의 (총 10회)</div>
                  <div>• 전문 통역사 섭외 (독일어 ↔ 한국어)</div>
                  <div>• 기술 사양, 가격 협상, 배송 조건 등 논의</div>
                  <div className="mt-2 p-2 bg-purple-600 text-white rounded text-xs">
                    <strong>지원 금액:</strong> 통역 비용 약 <strong>300만원 중 80% = 240만원 지원</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-5">
            <div className="mb-3" style={{ fontWeight: 600 }}>⚠️ 신청 전 확인 사항</div>
            <div className="text-sm text-gray-700 space-y-2">
              <div>✅ <strong>대상 기업:</strong> 중소·중견 기업 (하이콘 코리아 해당)</div>
              <div>✅ <strong>신청 시기:</strong> 연초 (1-2월) 공고, 선착순 마감</div>
              <div>✅ <strong>신청 방법:</strong> KOTRA 홈페이지 → 수출바우처 → 온라인 신청</div>
              <div>✅ <strong>증빙 서류:</strong> 사업자등록증, 사업 계획서, 견적서 등</div>
              <div className="mt-2 text-red-700">
                <strong>⚠️ 중요:</strong> 설비 구매 "자체"는 지원 불가, <strong>설비 구매를 위한 "부대 비용"만 지원</strong> (전시회, 컨설팅, 통역 등)
              </div>
            </div>
          </div>
        </div>

        {/* 4.4 해외진출 프리미엄 서비스 (OPS) */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-8 w-8 text-purple-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>4.4 해외진출 프리미엄 서비스 (OPS)</h3>
          </div>

          <div className="mb-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>🌟 OPS (Overseas Project Support)란?</div>
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-5">
              <div className="text-sm text-gray-700 space-y-2">
                <div>KOTRA가 제공하는 <strong>유료 심층 맞춤형 서비스</strong>로, 일반 무료 서비스보다 <strong>더 구체적이고 전문적인 지원</strong>을 받을 수 있습니다.</div>
                <div>재생골재 스페이서 설비 도입처럼 <strong>"고액 해외 프로젝트"</strong>에 적합합니다!</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>📋 OPS로 요청 가능한 서비스</div>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-purple-600 text-white rounded-full h-7 w-7 flex items-center justify-center text-xs">1</div>
                  <strong>설비 제조사 심층 실사 (Due Diligence)</strong>
                </div>
                <div className="ml-10 text-sm text-gray-700 space-y-1">
                  <div>• BFS, Schuster의 재무 제표, 소송 이력, 신용 등급 조사</div>
                  <div>• 과거 한국 기업과의 거래 이력 및 평판 확인</div>
                  <div>• 공장 방문 후 생산 능력 검증 보고서 작성</div>
                  <div className="mt-2 text-purple-700">
                    <strong>비용:</strong> 약 200-500만원 (업체 규모에 따라 차등)
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-600 text-white rounded-full h-7 w-7 flex items-center justify-center text-xs">2</div>
                  <strong>계약서 법률 검토 (독일 변호사 협업)</strong>
                </div>
                <div className="ml-10 text-sm text-gray-700 space-y-1">
                  <div>• 턴키 계약서의 독일 법률 적합성 검토</div>
                  <div>• 지급 조건 (50% 선금 → 30%로 협상 가능성 등)</div>
                  <div>• 분쟁 발생 시 준거법 및 중재 조항 확인</div>
                  <div className="mt-2 text-blue-700">
                    <strong>비용:</strong> 약 300-800만원 (계약 규모에 따라 차등)
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-300 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-600 text-white rounded-full h-7 w-7 flex items-center justify-center text-xs">3</div>
                  <strong>현지 물류/통관 컨설팅</strong>
                </div>
                <div className="ml-10 text-sm text-gray-700 space-y-1">
                  <div>• 독일 → 한국 해상운송 최적 경로 분석</div>
                  <div>• 관세 분류 (HS Code), 통관 서류 준비</div>
                  <div>• 포워더 추천 및 운송 비용 협상 지원</div>
                  <div className="mt-2 text-green-700">
                    <strong>비용:</strong> 약 100-300만원
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-orange-600 text-white rounded-full h-7 w-7 flex items-center justify-center text-xs">4</div>
                  <strong>설비 도입 프로젝트 매니징 (PM)</strong>
                </div>
                <div className="ml-10 text-sm text-gray-700 space-y-1">
                  <div>• 계약 → 제작 → 선적 → 설치까지 전 과정 관리</div>
                  <div>• 독일 제조사와의 일정 조율 및 진행 상황 모니터링</div>
                  <div>• 한국 내 설치 시 현지 엔지니어 통역 지원</div>
                  <div className="mt-2 text-orange-700">
                    <strong>비용:</strong> 약 500-1,500만원 (프로젝트 규모에 따라 차등)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-400 rounded-lg p-5">
            <div className="mb-3" style={{ fontWeight: 600 }}>💡 하이콘 코리아 추천 OPS 패키지</div>
            <div className="text-sm text-gray-700 space-y-2">
              <div><strong>추천 조합:</strong> ① 설비 제조사 실사 (300만원) + ② 계약서 법률 검토 (500만원) = <strong>총 800만원</strong></div>
              <div><strong>효과:</strong> Schuster GmbH 신뢰도 검증 + 계약 리스크 최소화</div>
              <div><strong>ROI:</strong> €300,000 (약 4.5억원) 규모 계약에서 <strong>800만원 투자로 수천만원 손실 방지 가능</strong></div>
              <div className="mt-3 p-3 bg-indigo-600 text-white rounded">
                <strong>신청 방법:</strong> KOTRA 홈페이지 → OPS 신청 → 담당자 배정 → 견적 협의 → 계약
              </div>
            </div>
          </div>
        </div>

        {/* 4.5 실무 활용 로드맵 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <ArrowRight className="h-8 w-8 text-green-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>4.5 하이콘 코리아 실무 활용 로드맵</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>1</div>
              <div className="flex-1">
                <div className="mb-2" style={{ fontWeight: 600 }}>KOTRA 독일 무역관에 문의 (무료)</div>
                <div className="text-sm text-gray-700 bg-blue-50 p-4 rounded-lg">
                  <div className="mb-2"><strong>이메일 제목:</strong> "재생골재 철근 스페이서 설비 구매 관련 독일 제조사 정보 요청"</div>
                  <div className="mb-2"><strong>내용:</strong></div>
                  <div className="ml-4 space-y-1">
                    <div>• 하이콘 코리아 소개 (재생골재 사업 설명)</div>
                    <div>• BFS, Schuster GmbH 등 4개사 신뢰도 검증 요청</div>
                    <div>• 유사 프로젝트 평균 견적 범위 문의</div>
                    <div>• 독일 방문 시 비즈니스 미팅 주선 가능 여부 확인</div>
                  </div>
                  <div className="mt-3 p-2 bg-blue-600 text-white rounded text-xs">
                    <strong>연락처:</strong> frankfurt@kotra.or.kr (프랑크푸르트 무역관)
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>2</div>
              <div className="flex-1">
                <div className="mb-2" style={{ fontWeight: 600 }}>수출바우처 신청 (1-2월 공고 시)</div>
                <div className="text-sm text-gray-700 bg-green-50 p-4 rounded-lg">
                  <div className="mb-2"><strong>신청 항목:</strong></div>
                  <div className="ml-4 space-y-1">
                    <div>✅ bauma 2025 전시회 참가 (독일 뮌헨, 4월)</div>
                    <div>✅ 독일 법률 컨설팅 (계약서 검토)</div>
                    <div>✅ 독일어 통번역 서비스 (화상 회의 10회)</div>
                  </div>
                  <div className="mt-3 p-2 bg-green-600 text-white rounded text-xs">
                    <strong>예상 지원 금액:</strong> 총 1,600만원 중 약 <strong>1,150만원 지원</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-600 text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>3</div>
              <div className="flex-1">
                <div className="mb-2" style={{ fontWeight: 600 }}>OPS 신청 (계약 전 단계)</div>
                <div className="text-sm text-gray-700 bg-purple-50 p-4 rounded-lg">
                  <div className="mb-2"><strong>신청 서비스:</strong></div>
                  <div className="ml-4 space-y-1">
                    <div>• Schuster GmbH 심층 실사 (300만원)</div>
                    <div>• 턴키 계약서 법률 검토 (500만원)</div>
                  </div>
                  <div className="mt-3 p-2 bg-purple-600 text-white rounded text-xs">
                    <strong>총 비용:</strong> 800만원 (자체 부담, 하지만 계약 리스크 최소화)
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-600 text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>4</div>
              <div className="flex-1">
                <div className="mb-2" style={{ fontWeight: 600 }}>독일 방문 시 무역관 방문</div>
                <div className="text-sm text-gray-700 bg-orange-50 p-4 rounded-lg">
                  <div className="mb-2"><strong>방문 목적:</strong></div>
                  <div className="ml-4 space-y-1">
                    <div>• Schuster GmbH 공장 방문 동행 요청</div>
                    <div>• 현지 통역사 소개 받기</div>
                    <div>• 독일 내 화학사 (BASF 등) 미팅 주선</div>
                  </div>
                  <div className="mt-3 p-2 bg-orange-600 text-white rounded text-xs">
                    <strong>팁:</strong> 방문 2주 전 미리 이메일로 일정 조율 필수
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4.6 KOTRA 연락 방법 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="h-8 w-8 text-indigo-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>4.6 KOTRA 연락 방법 및 담당 부서</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-indigo-300 rounded-lg p-5 bg-indigo-50">
              <div className="mb-3" style={{ fontWeight: 600 }}>🇰🇷 KOTRA 본사 (서울)</div>
              <div className="space-y-2 text-sm text-gray-700">
                <div><strong>주소:</strong> 서울시 서초구 헌릉로 13 KOTRA 본사</div>
                <div><strong>대표 전화:</strong> 1600-7119</div>
                <div><strong>홈페이지:</strong> www.kotra.or.kr</div>
                <div className="mt-3 p-2 bg-indigo-600 text-white rounded text-xs">
                  <strong>담당 부서:</strong> 해외시장조사팀 (시장조사 요청 시)
                </div>
              </div>
            </div>

            <div className="border-2 border-blue-300 rounded-lg p-5 bg-blue-50">
              <div className="mb-3" style={{ fontWeight: 600 }}>🇩🇪 KOTRA 독일 무역관</div>
              <div className="space-y-3 text-xs text-gray-700">
                <div className="p-2 bg-white rounded">
                  <div><strong>프랑크푸르트:</strong> frankfurt@kotra.or.kr</div>
                  <div className="text-gray-600">→ BFS, Hess 관련 문의</div>
                </div>
                <div className="p-2 bg-white rounded">
                  <div><strong>뮌헨:</strong> munich@kotra.or.kr</div>
                  <div className="text-gray-600">→ Schuster 관련 문의</div>
                </div>
                <div className="p-2 bg-white rounded">
                  <div><strong>함부르크:</strong> hamburg@kotra.or.kr</div>
                  <div className="text-gray-600">→ Zenith 관련 문의</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-lg p-5 mb-6">
            <div className="mb-3" style={{ fontWeight: 600 }}>📧 이메일 문의 템플릿 (복사해서 사용하세요!)</div>
            <div className="bg-white p-4 rounded-lg border border-yellow-300 text-sm">
              <div className="mb-2"><strong>제목:</strong> 재생골재 철근 스페이서 제조 설비 구매 관련 독일 제조사 정보 요청</div>
              <div className="mb-3 h-px bg-gray-300"></div>
              <div className="space-y-2 text-gray-700">
                <div>안녕하세요, KOTRA 독일 무역관 담당자님</div>
                <div className="mt-2">저희는 한국에서 폐기물 재생 순환 골재를 생산하는 <strong>하이콘 코리아</strong>입니다.</div>
                <div className="mt-2">현재 재생골재(60%)를 활용한 철근 스페이서 제조 공장 설립을 계획 중이며, 독일 내 설비 제조사 조사 및 신뢰도 검증을 요청드립니다.</div>
                <div className="mt-3"><strong>요청 사항:</strong></div>
                <div className="ml-4">1. BFS Betonfertigteilwerk, Schuster GmbH, Zenith, Hess 4개사 신뢰도 검증</div>
                <div className="ml-4">2. 유사 설비 (턴키 방식) 평균 견적 범위 정보</div>
                <div className="ml-4">3. 독일 방문 시 비즈니스 미팅 주선 가능 여부</div>
                <div className="mt-3">감사합니다.</div>
                <div className="mt-2"><strong>하이콘 코리아</strong></div>
                <div>[귀사 연락처]</div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(`제목: 재생골재 철근 스페이서 제조 설비 구매 관련 독일 제조사 정보 요청\n\n안녕하세요, KOTRA 독일 무역관 담당자님\n\n저희는 한국에서 폐기물 재생 순환 골재를 생산하는 하이콘 코리아입니다.\n\n현재 재생골재(60%)를 활용한 철근 스페이서 제조 공장 설립을 계획 중이며, 독일 내 설비 제조사 조사 및 신뢰도 검증을 요청드립니다.\n\n요청 사항:\n1. BFS Betonfertigteilwerk, Schuster GmbH, Zenith, Hess 4개사 신뢰도 검증\n2. 유사 설비 (턴키 방식) 평균 견적 범위 정보\n3. 독일 방문 시 비즈니스 미팅 주선 가능 여부\n\n감사합니다.\n\n하이콘 코리아\n[귀사 연락처]`, 'kotra-email')}
              className="mt-3 flex items-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors text-sm"
            >
              {copiedText === 'kotra-email' ? (
                <>
                  <CheckSquare className="h-4 w-4" />
                  <span>복사 완료!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>이메일 템플릿 복사</span>
                </>
              )}
            </button>
          </div>

          <div className="bg-green-50 border-2 border-green-400 rounded-lg p-5">
            <div className="mb-3" style={{ fontWeight: 600 }}>✅ 하이콘 코리아 KOTRA 활용 체크리스트</div>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>KOTRA 독일 무역관에 이메일 문의 발송</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>수출바우처 신청 (bauma 전시회 + 컨설팅 + 통역)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>OPS 신청 (Schuster 실사 + 계약서 검토)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>독일 방문 일정 2주 전 무역관에 미팅 주선 요청</span>
              </div>
              <div className="mt-3 p-3 bg-green-600 text-white rounded">
                <strong>총 절감 효과:</strong> 수출바우처 1,150만원 + 리스크 최소화 (OPS 800만원 투자로 수천만원 손실 방지)
              </div>
            </div>
          </div>
        </div>

        {/* 4.7 국가별 신청 방법 FAQ */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="h-8 w-8 text-red-600" />
            <h3 className="text-2xl" style={{ fontWeight: 700 }}>4.7 국가별 신청 방법 FAQ (중요!)</h3>
          </div>

          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <div className="bg-red-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 text-lg">❓</div>
              <div className="flex-1">
                <div className="mb-2" style={{ fontWeight: 600 }}>질문: "유럽" 전체를 대상으로 신청할 수 있나요?</div>
                <div className="text-sm text-gray-700 space-y-2">
                  <div>아니요! KOTRA는 <strong>"유럽" 같은 광역 지역 단위</strong>로는 신청이 어렵습니다.</div>
                  <div>대신 <strong>프로젝트 목적에 따라</strong> 신청 방식이 달라집니다!</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* 케이스 1: 무료 시장조사 */}
            <div className="border-2 border-blue-400 rounded-lg p-5 bg-blue-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center" style={{ fontWeight: 600 }}>1</div>
                <strong className="text-lg">무료 시장조사 (해외무역관 이용)</strong>
              </div>
              
              <div className="mb-4">
                <div className="text-sm mb-2" style={{ fontWeight: 600 }}>📌 신청 단위:</div>
                <div className="ml-4 text-sm text-gray-700 space-y-1">
                  <div>✅ <strong>1개 국가 1개 프로젝트</strong>가 기본</div>
                  <div>✅ 하지만 "설비 구매"처럼 <strong>명확한 목적</strong>이 있으면 <strong>복수 국가 동시 요청 가능</strong></div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="text-sm mb-2" style={{ fontWeight: 600 }}>✅ 가능한 신청 방법:</div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="p-3 bg-green-50 border-l-4 border-green-600 rounded">
                    <strong>방법 1 (추천):</strong> "독일 철근 스페이서 설비 제조사 조사" 1건 신청
                    <div className="text-xs mt-1 text-gray-600">→ 독일 무역관이 독일 전역(프랑크푸르트, 뮌헨, 함부르크) 제조사 모두 조사</div>
                  </div>

                  <div className="p-3 bg-blue-50 border-l-4 border-blue-600 rounded">
                    <strong>방법 2:</strong> "유럽 철근 스페이서 설비 제조사 조사" 신청 시 <strong>담당 국가 명시</strong>
                    <div className="text-xs mt-1 text-gray-600">→ "독일, 이탈리아, 네덜란드 3개국 제조사 비교" 등으로 구체적 요청</div>
                  </div>

                  <div className="p-3 bg-yellow-50 border-l-4 border-yellow-600 rounded">
                    <strong>방법 3:</strong> 독일 신청 후 → 이탈리아 추가 신청 (별도 건으로 처리)
                    <div className="text-xs mt-1 text-gray-600">→ 각 무역관마다 별도 요청 필요</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-400 rounded p-3">
                <div className="text-sm" style={{ fontWeight: 600 }}>💡 실무 팁:</div>
                <div className="text-xs text-gray-700 mt-1">
                  첫 이메일에 <strong>"독일 중심, 필요 시 이탈리아·네덜란드도 검토 가능"</strong>이라고 적으면 
                  담당자가 알아서 복수 국가 정보를 제공하는 경우가 많습니다!
                </div>
              </div>
            </div>

            {/* 케이스 2: 수출바우처 */}
            <div className="border-2 border-green-400 rounded-lg p-5 bg-green-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center" style={{ fontWeight: 600 }}>2</div>
                <strong className="text-lg">수출바우처 (정부 지원 프로그램)</strong>
              </div>

              <div className="mb-4">
                <div className="text-sm mb-2" style={{ fontWeight: 600 }}>📌 신청 단위:</div>
                <div className="ml-4 text-sm text-gray-700 space-y-1">
                  <div>✅ <strong>1개 사업 계획서</strong>에 <strong>복수 국가 포함 가능!</strong></div>
                  <div>✅ 예: "유럽 건설기계 시장 진출" 사업으로 독일+이탈리아 동시 신청 OK</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="text-sm mb-2" style={{ fontWeight: 600 }}>✅ 하이콘 코리아 신청 예시:</div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="p-3 bg-gradient-to-r from-green-100 to-blue-100 border-l-4 border-green-600 rounded">
                    <div className="mb-2" style={{ fontWeight: 600 }}>사업명: "유럽 재생골재 스페이서 제조 설비 도입 프로젝트"</div>
                    <div className="text-xs space-y-1">
                      <div><strong>대상 국가:</strong> 독일(주), 이탈리아(부)</div>
                      <div><strong>지원 항목:</strong></div>
                      <div className="ml-4">- bauma 2025 전시회 참가 (독일 뮌헨)</div>
                      <div className="ml-4">- 독일 법률 컨설팅 (계약서 검토)</div>
                      <div className="ml-4">- 이탈리아 통역 서비스 (Hess 미팅 시)</div>
                      <div className="ml-4">- 독일·이탈리아 제조사 공장 방문 (항공·숙박)</div>
                    </div>
                    <div className="mt-2 p-2 bg-green-600 text-white rounded text-xs">
                      <strong>총 지원 금액:</strong> 약 1,800만원 중 70% = <strong>1,260만원 지원</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-400 rounded p-3">
                <div className="text-sm" style={{ fontWeight: 600 }}>⚠️ 주의사항:</div>
                <div className="text-xs text-gray-700 mt-1 space-y-1">
                  <div>• 복수 국가 신청 시 <strong>사업 계획서에 국가별 방문 목적</strong> 명시 필수</div>
                  <div>• 예: "독일 Schuster 1순위, 이탈리아 Hess 2순위 검토"</div>
                  <div>• 너무 많은 국가(5개국 이상)는 심사에서 불리할 수 있음</div>
                </div>
              </div>
            </div>

            {/* 케이스 3: OPS */}
            <div className="border-2 border-purple-400 rounded-lg p-5 bg-purple-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600 text-white rounded-full h-8 w-8 flex items-center justify-center" style={{ fontWeight: 600 }}>3</div>
                <strong className="text-lg">OPS (유료 프리미엄 서비스)</strong>
              </div>

              <div className="mb-4">
                <div className="text-sm mb-2" style={{ fontWeight: 600 }}>📌 신청 단위:</div>
                <div className="ml-4 text-sm text-gray-700 space-y-1">
                  <div>✅ <strong>완전 맞춤형!</strong> 국가 제한 없음</div>
                  <div>✅ 1개 국가 집중 또는 복수 국가 동시 진행 모두 가능</div>
                  <div>✅ 비용만 추가하면 무제한 확장 가능</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="text-sm mb-2" style={{ fontWeight: 600 }}>✅ 신청 예시 (복수 국가):</div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="p-3 bg-purple-100 border-l-4 border-purple-600 rounded">
                    <div className="mb-2" style={{ fontWeight: 600 }}>패키지 1: 독일 집중형 (800만원)</div>
                    <div className="text-xs space-y-1">
                      <div>• Schuster GmbH 심층 실사 (300만원)</div>
                      <div>• 독일 턴키 계약서 법률 검토 (500만원)</div>
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-100 border-l-4 border-indigo-600 rounded">
                    <div className="mb-2" style={{ fontWeight: 600 }}>패키지 2: 독일+이탈리아 비교형 (1,200만원)</div>
                    <div className="text-xs space-y-1">
                      <div>• 독일 Schuster + 이탈리아 Hess 동시 실사 (500만원)</div>
                      <div>• 2개 업체 견적 비교 분석 보고서 (200만원)</div>
                      <div>• 최종 선택 업체 계약서 법률 검토 (500만원)</div>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-100 border-l-4 border-blue-600 rounded">
                    <div className="mb-2" style={{ fontWeight: 600 }}>패키지 3: 유럽 전역 탐색형 (2,000만원)</div>
                    <div className="text-xs space-y-1">
                      <div>• 독일, 이탈리아, 네덜란드, 프랑스 제조사 실사 (1,000만원)</div>
                      <div>• 4개국 공장 방문 동행 + PM (700만원)</div>
                      <div>• 최종 계약서 법률 검토 (300만원)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-600 text-white rounded p-3">
                <div className="text-sm" style={{ fontWeight: 600 }}>💡 OPS 장점:</div>
                <div className="text-xs mt-1">
                  국가 제한 없이 <strong>"유럽 전역 설비 제조사 총괄 실사"</strong> 같은 프로젝트도 가능! 
                  담당자와 협의해서 <strong>예산에 맞는 맞춤형 패키지</strong> 설계 가능합니다.
                </div>
              </div>
            </div>
          </div>

          {/* 실전 시나리오 */}
          <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-400 rounded-lg p-6">
            <div className="mb-4" style={{ fontWeight: 600 }}>🎯 하이콘 코리아 실전 시나리오 (추천)</div>
            
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <div className="bg-orange-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 text-xs" style={{ fontWeight: 600 }}>1</div>
                <div className="flex-1">
                  <strong>1단계 (무료):</strong> 독일 무역관에 "독일 철근 스페이서 설비 제조사 조사" 요청
                  <div className="text-xs text-gray-600 mt-1">
                    → 이메일에 "필요 시 이탈리아·네덜란드 정보도 부탁드립니다" 추가 기재
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 text-xs" style={{ fontWeight: 600 }}>2</div>
                <div className="flex-1">
                  <strong>2단계 (정부 지원):</strong> 수출바우처 "유럽 설비 도입 프로젝트"로 신청
                  <div className="text-xs text-gray-600 mt-1">
                    → bauma 전시회(독일) + 컨설팅 + 이탈리아 방문 포함 → <strong>1,260만원 지원</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 text-xs" style={{ fontWeight: 600 }}>3</div>
                <div className="flex-1">
                  <strong>3단계 (선택적):</strong> 독일 Schuster 확정 후 OPS로 실사 (300만원)
                  <div className="text-xs text-gray-600 mt-1">
                    → 1개 업체만 집중 실사로 비용 절감
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 text-xs" style={{ fontWeight: 600 }}>4</div>
                <div className="flex-1">
                  <strong>4단계 (고급):</strong> 독일·이탈리아 2개국 최종 비교 시 OPS (1,200만원)
                  <div className="text-xs text-gray-600 mt-1">
                    → Schuster vs Hess 동시 실사 + 견적 비교 분석
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-orange-600 text-white rounded">
              <strong className="text-sm">💰 총 비용 정리:</strong>
              <div className="text-xs mt-1 space-y-1">
                <div>• 무료 서비스: 0원 (기본 정보 수집)</div>
                <div>• 수출바우처: 자부담 540만원 → 정부 지원 1,260만원 (총 1,800만원 활동)</div>
                <div>• OPS (선택): 300-1,200만원 (리스크 최소화)</div>
                <div className="mt-2 pt-2 border-t border-orange-400">
                  <strong>총 투자: 840-1,740만원 / 정부 지원: 1,260만원 / 총 효과: 2,100-3,000만원 규모 활동!</strong>
                </div>
              </div>
            </div>
          </div>

          {/* 최종 답변 */}
          <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-500 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
              <div>
                <div className="mb-3" style={{ fontWeight: 600 }}>✅ 질문 답변 정리</div>
                <div className="text-sm text-gray-700 space-y-2">
                  <div>
                    <strong className="text-green-700">Q: 유럽 전체를 대상으로 신청할 수 있나요?</strong>
                    <div className="ml-4 mt-1">
                      <strong>A:</strong> "유럽" 자체는 불가하지만, <strong>프로젝트 목적을 명확히</strong> 하면 복수 국가 동시 진행 가능!
                    </div>
                  </div>

                  <div>
                    <strong className="text-blue-700">Q: 다른 나라를 알아보려면 다시 신청해야 하나요?</strong>
                    <div className="ml-4 mt-1">
                      <strong>A:</strong> 
                      <div className="space-y-1">
                        <div>• <strong>무료 서비스:</strong> 가능하면 첫 요청에 복수 국가 언급 (추가 신청 가능)</div>
                        <div>• <strong>수출바우처:</strong> 사업 계획서에 2-3개국 포함 가능 (재신청 불필요)</div>
                        <div>• <strong>OPS:</strong> 언제든 추가 국가 신청 가능 (비용만 추가)</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 p-3 bg-green-600 text-white rounded">
                    <strong>💡 핵심:</strong> 첫 신청 시 <strong>"독일 중심, 필요 시 이탈리아·네덜란드 검토"</strong>라고 적으면 
                    유연하게 대응 가능합니다!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 최종 체크리스트 */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl mb-6" style={{ fontWeight: 700 }}>✅ 최종 실행 체크리스트</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="mb-2" style={{ fontWeight: 600 }}>PART 1: 제조 공정 준비</div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>재생골재 60% 배합 설계 완료</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>원료 혼합 설비 선정 (믹서)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>성형 방법 결정 (유압 vs 진동)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>양생 방법 결정 (증기 vs 자연)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>품질 검사 장비 준비</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="mb-2" style={{ fontWeight: 600 }}>PART 2: 화학 첨가제 조달</div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>유럽 화학사 5-10개 리스트업</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>RFQ 이메일 발송</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>무료 샘플 요청 (5-10kg)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>실험실 배합 테스트</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>최종 공급사 선정 및 계약</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="mb-2" style={{ fontWeight: 600 }}>PART 3: 유럽 설비 조달</div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>독일 제조사 4개사 비교 분석</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Schuster GmbH 우선 컨택</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>견적 요청 (Turn-key 방식)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>계약 및 공장 설계 시작</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>설비 제작 → 설치 → 시운전</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="mb-2" style={{ fontWeight: 600 }}>PART 4: KOTRA 활용 🆕</div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>독일 무역관에 제조사 신뢰도 검증 요청</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>수출바우처 신청 (전시회+컨설팅)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>OPS로 계약서 법률 검토 (800만원)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>독일 방문 시 무역관 미팅 주선</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>총 1,150만원 정부 지원 활용</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="mb-3" style={{ fontWeight: 600 }}>📅 전체 프로젝트 타임라인 (8개월)</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="bg-white text-green-800 rounded px-2 py-0.5 text-xs">W1-2</div>
                  <span>배합 설계 + 유럽 화학사/설비사 조사</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white text-green-800 rounded px-2 py-0.5 text-xs">W3</div>
                  <span>RFQ 발송 (화학사 + Schuster GmbH)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white text-green-800 rounded px-2 py-0.5 text-xs">W4-6</div>
                  <span>샘플 수령 + 실험실 배합 테스트</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white text-green-800 rounded px-2 py-0.5 text-xs">W7-8</div>
                  <span>화학사 계약 + 설비 견적 협상</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white text-green-800 rounded px-2 py-0.5 text-xs">W9-10</div>
                  <span>설비 계약 (Turn-key) + 공장 설계</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-400 text-white rounded px-2 py-0.5 text-xs">M3-5</div>
                  <span>설비 제작 (독일) + 한국 선적</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-purple-400 text-white rounded px-2 py-0.5 text-xs">M6-7</div>
                  <span>설비 설치 + 시운전 + 교육</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-red-500 text-white rounded px-2 py-0.5 text-xs">M8</div>
                  <span>정식 양산 시작! 🎉</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-yellow-500 text-yellow-900 rounded">
                <strong className="text-sm">🎯 4대 핵심 성공 요인</strong>
                <div className="text-xs mt-1 space-y-0.5">
                  <div>1️⃣ <strong>유럽 화학 첨가제</strong> (재생골재 60% 보강)</div>
                  <div>2️⃣ <strong>독일 Turn-key 설비</strong> (Schuster 최우선)</div>
                  <div>3️⃣ <strong>정밀 배합 + 증기 양생</strong> (품질 확보)</div>
                  <div>4️⃣ <strong>KOTRA 활용</strong> (정부 지원 1,150만원 + 리스크 최소화) 🆕</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
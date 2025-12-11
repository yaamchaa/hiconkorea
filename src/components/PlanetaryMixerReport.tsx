import { motion } from 'motion/react';
import { ExternalLink, Factory, Globe, TrendingUp, Award, CheckCircle2, AlertCircle, Zap, Users, DollarSign, Calendar, Package, Building2, BarChart3, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export default function PlanetaryMixerReport() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <motion.div
        className="max-w-7xl mx-auto space-y-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* 헤더 */}
        <motion.div variants={fadeInUp} className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
            <Factory className="w-5 h-5" />
            <span>Global Equipment Research</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            행성형 콘크리트 믹서
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            전 세계 플래너터리 믹서 제조사 상세 분석 및 스페이서 제조 설비 선정 가이드
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>2025년 12월</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>HiCon Korea Research Team</span>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="european" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="european">유럽 제조사</TabsTrigger>
            <TabsTrigger value="chinese">중국 제조사</TabsTrigger>
            <TabsTrigger value="japanese">일본 공급사</TabsTrigger>
            <TabsTrigger value="comparison">비교 분석</TabsTrigger>
            <TabsTrigger value="recommendation">추천 가이드</TabsTrigger>
          </TabsList>

          {/* 유럽 제조사 */}
          <TabsContent value="european" className="space-y-6">
            <motion.div variants={fadeInUp}>
              <Card className="bg-white/80 backdrop-blur border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-6 h-6 text-blue-600" />
                    유럽 플래너터리 믹서 제조사
                  </CardTitle>
                  <CardDescription>
                    프리미엄 품질과 신뢰성을 자랑하는 유럽 5대 제조사
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* BHS-Sonthofen */}
                  <div className="space-y-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-900">1️⃣ BHS-Sonthofen (독일)</h3>
                        <p className="text-sm text-gray-600 mt-1">설립년도: 1563 | 믹서 전문 사업부: 1950년대</p>
                      </div>
                      <Badge className="bg-blue-600">프리미엄</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">공식 홈페이지</p>
                        <a href="https://www.bhs-sonthofen.com" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                          <span>https://www.bhs-sonthofen.com</span>
                        </a>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">주요 사업</p>
                        <p className="text-gray-600">글로벌 믹싱 기술 리더, 플래너터리 믹서 최고봉</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="font-bold text-lg text-gray-800">BPX 시리즈 모델 및 용량</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-blue-600 text-white">
                              <th className="border border-blue-500 px-4 py-2">모델</th>
                              <th className="border border-blue-500 px-4 py-2">정격 용량</th>
                              <th className="border border-blue-500 px-4 py-2">충전량 (L)</th>
                              <th className="border border-blue-500 px-4 py-2">모터 (kW)</th>
                              <th className="border border-blue-500 px-4 py-2">적용 분야</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="hover:bg-blue-50">
                              <td className="border px-4 py-2 font-semibold">BPX 0.5</td>
                              <td className="border px-4 py-2">0.5 m³</td>
                              <td className="border px-4 py-2">500</td>
                              <td className="border px-4 py-2">15</td>
                              <td className="border px-4 py-2">소형 블록/스페이서 ⭐</td>
                            </tr>
                            <tr className="hover:bg-blue-50">
                              <td className="border px-4 py-2 font-semibold">BPX 0.75</td>
                              <td className="border px-4 py-2">0.75 m³</td>
                              <td className="border px-4 py-2">750</td>
                              <td className="border px-4 py-2">22</td>
                              <td className="border px-4 py-2">중소형 블록</td>
                            </tr>
                            <tr className="hover:bg-blue-50">
                              <td className="border px-4 py-2 font-semibold">BPX 1.0</td>
                              <td className="border px-4 py-2">1.0 m³</td>
                              <td className="border px-4 py-2">1,000</td>
                              <td className="border px-4 py-2">30</td>
                              <td className="border px-4 py-2">중형 PC 공장</td>
                            </tr>
                            <tr className="hover:bg-blue-50">
                              <td className="border px-4 py-2 font-semibold">BPX 1.5</td>
                              <td className="border px-4 py-2">1.5 m³</td>
                              <td className="border px-4 py-2">1,500</td>
                              <td className="border px-4 py-2">45</td>
                              <td className="border px-4 py-2">중형~대형 PC</td>
                            </tr>
                            <tr className="hover:bg-blue-50">
                              <td className="border px-4 py-2 font-semibold">BPX 2.0</td>
                              <td className="border px-4 py-2">2.0 m³</td>
                              <td className="border px-4 py-2">2,000</td>
                              <td className="border px-4 py-2">55</td>
                              <td className="border px-4 py-2">대형 PC 공장</td>
                            </tr>
                            <tr className="hover:bg-blue-50">
                              <td className="border px-4 py-2 font-semibold">BPX 3.0</td>
                              <td className="border px-4 py-2">3.0 m³</td>
                              <td className="border px-4 py-2">3,000</td>
                              <td className="border px-4 py-2">90</td>
                              <td className="border px-4 py-2">초대형 PC</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          주요 특징
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1 pl-6">
                          <li>• 독일 최고 품질의 플래너터리 믹서</li>
                          <li>• 우수한 혼합 균일도 및 품질</li>
                          <li>• 매우 강인한 구조, 긴 수명</li>
                          <li>• 세척 시간: 약 5~10분 (자동 옵션)</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700 flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-blue-600" />
                          가격대 및 리드타임
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1 pl-6">
                          <li>• 가격: €80K~220K (최상위)</li>
                          <li>• 리드타임: 4~5개월</li>
                          <li>• 시장 평가: ⭐⭐⭐⭐⭐</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Liebherr */}
                  <div className="space-y-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-purple-900">2️⃣ Liebherr (독일)</h3>
                        <p className="text-sm text-gray-600 mt-1">설립년도: 1949 | 믹싱 기술: 1970년대</p>
                      </div>
                      <Badge className="bg-purple-600">최고급</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">공식 홈페이지</p>
                        <a href="https://www.liebherr.com" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                          <span>https://www.liebherr.com</span>
                        </a>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">일본 법인</p>
                        <a href="https://www.liebherr.com/en-int/group/about-liebherr/liebherr-worldwide/japan/liebherr-in-japan-3935322.html" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors text-sm">
                          <ExternalLink className="w-4 h-4" />
                          <span>Liebherr Japan 페이지</span>
                        </a>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="font-bold text-lg text-gray-800">RIM 링팬 믹서 시리즈</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-purple-600 text-white">
                              <th className="border border-purple-500 px-4 py-2">모델</th>
                              <th className="border border-purple-500 px-4 py-2">정격 용량</th>
                              <th className="border border-purple-500 px-4 py-2">충전량 (L)</th>
                              <th className="border border-purple-500 px-4 py-2">모터 (kW)</th>
                              <th className="border border-purple-500 px-4 py-2">애지테이터</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="hover:bg-purple-50">
                              <td className="border px-4 py-2 font-semibold">RIM 1.0-M</td>
                              <td className="border px-4 py-2">1.0 m³</td>
                              <td className="border px-4 py-2">1,500</td>
                              <td className="border px-4 py-2">48</td>
                              <td className="border px-4 py-2">단일</td>
                            </tr>
                            <tr className="hover:bg-purple-50">
                              <td className="border px-4 py-2 font-semibold">RIM 1.5-M</td>
                              <td className="border px-4 py-2">1.5 m³</td>
                              <td className="border px-4 py-2">2,250</td>
                              <td className="border px-4 py-2">65</td>
                              <td className="border px-4 py-2">단일</td>
                            </tr>
                            <tr className="hover:bg-purple-50">
                              <td className="border px-4 py-2 font-semibold">RIM 2.25-M</td>
                              <td className="border px-4 py-2">2.25 m³</td>
                              <td className="border px-4 py-2">3,375</td>
                              <td className="border px-4 py-2">90</td>
                              <td className="border px-4 py-2">단일</td>
                            </tr>
                            <tr className="hover:bg-purple-50">
                              <td className="border px-4 py-2 font-semibold">RIM 3.0-M</td>
                              <td className="border px-4 py-2">3.0 m³</td>
                              <td className="border px-4 py-2">4,500</td>
                              <td className="border px-4 py-2">110</td>
                              <td className="border px-4 py-2">단일</td>
                            </tr>
                            <tr className="hover:bg-purple-50">
                              <td className="border px-4 py-2 font-semibold">RIM 3.0-D</td>
                              <td className="border px-4 py-2">3.0 m³</td>
                              <td className="border px-4 py-2">4,500</td>
                              <td className="border px-4 py-2">110</td>
                              <td className="border px-4 py-2">듀얼 (고점성용)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          주요 특징
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1 pl-6">
                          <li>• 링팬 믹서 (행성형 진화형)</li>
                          <li>• 고강도 애지테이터 설계</li>
                          <li>• 매우 강인한 구조, 높은 내구성</li>
                          <li>• 세척 시간: 약 8~12분 (자동 회전식)</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700 flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-purple-600" />
                          가격대 및 리드타임
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1 pl-6">
                          <li>• 가격: €120K~300K (최상위)</li>
                          <li>• 리드타임: 4~5개월</li>
                          <li>• 시장 평가: ⭐⭐⭐⭐⭐</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* TEKA Maschinenbau */}
                  <div className="space-y-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-green-900">3️⃣ TEKA Maschinenbau (독일 + 중국)</h3>
                        <p className="text-sm text-gray-600 mt-1">독일 본사: 1952 | 중국 법인: 2003</p>
                      </div>
                      <Badge className="bg-green-600">가성비 최강 ⭐</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">독일 본사</p>
                        <a href="https://teka.de/en/start-2/" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors text-sm">
                          <ExternalLink className="w-4 h-4" />
                          <span>https://teka.de</span>
                        </a>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">글로벌 사이트</p>
                        <a href="https://tekamixers.com" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors text-sm">
                          <ExternalLink className="w-4 h-4" />
                          <span>https://tekamixers.com</span>
                        </a>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">중국 법인</p>
                        <a href="https://teka-maschinenbau.goldsupplier.com" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors text-sm">
                          <ExternalLink className="w-4 h-4" />
                          <span>Taicang 법인</span>
                        </a>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="font-bold text-lg text-gray-800">TPZ 시리즈 모델 (독일 기술 + 중국 생산)</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-green-600 text-white">
                              <th className="border border-green-500 px-4 py-2">모델</th>
                              <th className="border border-green-500 px-4 py-2">정격 용량</th>
                              <th className="border border-green-500 px-4 py-2">배치 (L)</th>
                              <th className="border border-green-500 px-4 py-2">모터 (kW)</th>
                              <th className="border border-green-500 px-4 py-2">적용 분야</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="hover:bg-green-50">
                              <td className="border px-4 py-2 font-semibold">TPZ 375</td>
                              <td className="border px-4 py-2">0.375 m³</td>
                              <td className="border px-4 py-2">375</td>
                              <td className="border px-4 py-2">11</td>
                              <td className="border px-4 py-2">소형 블록</td>
                            </tr>
                            <tr className="hover:bg-green-50 bg-green-100">
                              <td className="border px-4 py-2 font-semibold">TPZ 500 ⭐</td>
                              <td className="border px-4 py-2">0.5 m³</td>
                              <td className="border px-4 py-2">500</td>
                              <td className="border px-4 py-2">15</td>
                              <td className="border px-4 py-2">소형~중형 블록/스페이서</td>
                            </tr>
                            <tr className="hover:bg-green-50">
                              <td className="border px-4 py-2 font-semibold">TPZ 750</td>
                              <td className="border px-4 py-2">0.75 m³</td>
                              <td className="border px-4 py-2">750</td>
                              <td className="border px-4 py-2">22</td>
                              <td className="border px-4 py-2">중형 블록/PC</td>
                            </tr>
                            <tr className="hover:bg-green-50">
                              <td className="border px-4 py-2 font-semibold">TPZ 1000</td>
                              <td className="border px-4 py-2">1.0 m³</td>
                              <td className="border px-4 py-2">1,000</td>
                              <td className="border px-4 py-2">30</td>
                              <td className="border px-4 py-2">중형 PC</td>
                            </tr>
                            <tr className="hover:bg-green-50">
                              <td className="border px-4 py-2 font-semibold">TPZ 1500</td>
                              <td className="border px-4 py-2">1.5 m³</td>
                              <td className="border px-4 py-2">1,500</td>
                              <td className="border px-4 py-2">45</td>
                              <td className="border px-4 py-2">중형~대형 PC</td>
                            </tr>
                            <tr className="hover:bg-green-50">
                              <td className="border px-4 py-2 font-semibold">TPZ 2250</td>
                              <td className="border px-4 py-2">2.25 m³</td>
                              <td className="border px-4 py-2">2,250</td>
                              <td className="border px-4 py-2">75</td>
                              <td className="border px-4 py-2">대형 PC/블록</td>
                            </tr>
                            <tr className="hover:bg-green-50">
                              <td className="border px-4 py-2 font-semibold">TPZ 3000</td>
                              <td className="border px-4 py-2">3.0 m³</td>
                              <td className="border px-4 py-2">3,000</td>
                              <td className="border px-4 py-2">90</td>
                              <td className="border px-4 py-2">초대형 공장</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                      <p className="font-bold text-green-900 mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        동아시아 최강자 - 한국/일본 스페이서 공장 최우선 선택
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1 pl-6">
                        <li>• 독일 기술 + 중국 가격 = 최고의 가성비</li>
                        <li>• 일본, 한국, 동남아 대량 납품 경험 풍부</li>
                        <li>• 세척 시간: 약 5~8분 (플러싱 옵션)</li>
                        <li>• 가격: $15K~85K (중국 법인 기준)</li>
                        <li>• 리드타임: 2~3개월 (중국 법인)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Eurostar */}
                  <div className="space-y-4 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-orange-900">4️⃣ Eurostar (이탈리아, BHS 그룹)</h3>
                        <p className="text-sm text-gray-600 mt-1">설립: 2000년대 | BHS 인수: 2023년</p>
                      </div>
                      <Badge className="bg-orange-600">프리미엄</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">DirectIndustry</p>
                        <a href="https://www.directindustry.com/prod/eurostar-eurostar-200095.html" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors text-sm">
                          <ExternalLink className="w-4 h-4" />
                          <span>Eurostar 제품 페이지</span>
                        </a>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">공급처 (PMSA)</p>
                        <a href="https://pmsa.com/products/mixers-batching-moisture-control-and-dosing-solutions/planetary-pan-mixers/planetary-pan-mixers/" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors text-sm">
                          <ExternalLink className="w-4 h-4" />
                          <span>PMSA 협력 페이지</span>
                        </a>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="font-bold text-lg text-gray-800">EPM 시리즈 모델</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-orange-600 text-white">
                              <th className="border border-orange-500 px-4 py-2">모델</th>
                              <th className="border border-orange-500 px-4 py-2">건식 용량 (L)</th>
                              <th className="border border-orange-500 px-4 py-2">습식 용량 (L)</th>
                              <th className="border border-orange-500 px-4 py-2">모터 (kW)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="hover:bg-orange-50">
                              <td className="border px-4 py-2 font-semibold">EPM 375</td>
                              <td className="border px-4 py-2">375</td>
                              <td className="border px-4 py-2">250</td>
                              <td className="border px-4 py-2">11</td>
                            </tr>
                            <tr className="hover:bg-orange-50">
                              <td className="border px-4 py-2 font-semibold">EPM 750</td>
                              <td className="border px-4 py-2">750</td>
                              <td className="border px-4 py-2">500</td>
                              <td className="border px-4 py-2">22</td>
                            </tr>
                            <tr className="hover:bg-orange-50">
                              <td className="border px-4 py-2 font-semibold">EPM 1500</td>
                              <td className="border px-4 py-2">1,500</td>
                              <td className="border px-4 py-2">1,000</td>
                              <td className="border px-4 py-2">45</td>
                            </tr>
                            <tr className="hover:bg-orange-50">
                              <td className="border px-4 py-2 font-semibold">EPM 3000</td>
                              <td className="border px-4 py-2">3,000</td>
                              <td className="border px-4 py-2">2,000</td>
                              <td className="border px-4 py-2">90</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          주요 특징
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1 pl-6">
                          <li>• 이탈리아 설계의 고급 팬 믹서</li>
                          <li>• 자동 세척 시스템 표준 (6~10분)</li>
                          <li>• BHS 그룹의 글로벌 서비스 지원</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700 flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-orange-600" />
                          가격대 및 리드타임
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1 pl-6">
                          <li>• 가격: €100K~280K (최상위)</li>
                          <li>• 리드타임: 3~4개월</li>
                          <li>• 시장 평가: ⭐⭐⭐⭐⭐</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* MEKA */}
                  <div className="space-y-4 p-6 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg border border-red-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-red-900">5️⃣ MEKA (터키)</h3>
                        <p className="text-sm text-gray-600 mt-1">설립년도: 1987</p>
                      </div>
                      <Badge className="bg-red-600">중상급</Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-700">공식 홈페이지</p>
                      <a href="https://www.mekaglobal.com/en/products/concrete-mixers/planetary-concrete-mixers" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        <span>https://www.mekaglobal.com</span>
                      </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">모델 라인업</p>
                        <ul className="text-sm text-gray-600 space-y-1 pl-6">
                          <li>• MCP 0.5: 0.5 m³, 15 kW</li>
                          <li>• MCP 1.0: 1.0 m³, 30 kW</li>
                          <li>• MCP 2.0: 2.0 m³, 55 kW</li>
                          <li>• MCP 3.0: 3.0 m³, 90 kW</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700 flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-red-600" />
                          가격대
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1 pl-6">
                          <li>• 가격: €50K~150K (중상)</li>
                          <li>• 중동·유럽 시장 최적화</li>
                          <li>• 턴키 솔루션 공급 가능</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* 중국 제조사 */}
          <TabsContent value="chinese" className="space-y-6">
            <motion.div variants={fadeInUp}>
              <Card className="bg-white/80 backdrop-blur border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Factory className="w-6 h-6 text-red-600" />
                    중국 플래너터리 믹서 제조사
                  </CardTitle>
                  <CardDescription>
                    가성비와 빠른 납기로 글로벌 시장을 장악한 중국 제조사
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* CO-NELE */}
                  <div className="space-y-4 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-red-900">1️⃣ CO-NELE (중국 Shandong)</h3>
                        <p className="text-sm text-gray-600 mt-1">설립년도: 2008 | 중국 플래너터리 믹서 시장 선도</p>
                      </div>
                      <Badge className="bg-red-600">초저가 최강</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">공식 홈페이지</p>
                        <a href="https://www.conele-mixer.com" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors text-sm">
                          <ExternalLink className="w-4 h-4" />
                          <span>conele-mixer.com</span>
                        </a>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">중국 사이트</p>
                        <a href="https://co-nele.com.cn" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors text-sm">
                          <ExternalLink className="w-4 h-4" />
                          <span>co-nele.com.cn</span>
                        </a>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">Alibaba</p>
                        <a href="https://www.alibaba.com/product-detail/CO-NELE-Manufacture-MP-Series-Planetary_1873413416.html" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors text-sm">
                          <ExternalLink className="w-4 h-4" />
                          <span>Alibaba Store</span>
                        </a>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="font-bold text-lg text-gray-800">MP 시리즈 모델 및 가격</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-red-600 text-white">
                              <th className="border border-red-500 px-4 py-2">모델</th>
                              <th className="border border-red-500 px-4 py-2">정격 용량</th>
                              <th className="border border-red-500 px-4 py-2">배치 (L)</th>
                              <th className="border border-red-500 px-4 py-2">모터 (kW)</th>
                              <th className="border border-red-500 px-4 py-2">가격대 (약)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="hover:bg-red-50">
                              <td className="border px-4 py-2 font-semibold">MP500</td>
                              <td className="border px-4 py-2">0.5 m³</td>
                              <td className="border px-4 py-2">500</td>
                              <td className="border px-4 py-2">15</td>
                              <td className="border px-4 py-2">$15K~20K</td>
                            </tr>
                            <tr className="hover:bg-red-50">
                              <td className="border px-4 py-2 font-semibold">MP1000</td>
                              <td className="border px-4 py-2">1.0 m³</td>
                              <td className="border px-4 py-2">1,000</td>
                              <td className="border px-4 py-2">30</td>
                              <td className="border px-4 py-2">$22K~30K</td>
                            </tr>
                            <tr className="hover:bg-red-50">
                              <td className="border px-4 py-2 font-semibold">MP1500</td>
                              <td className="border px-4 py-2">1.5 m³</td>
                              <td className="border px-4 py-2">1,500</td>
                              <td className="border px-4 py-2">45</td>
                              <td className="border px-4 py-2">$28K~40K</td>
                            </tr>
                            <tr className="hover:bg-red-50">
                              <td className="border px-4 py-2 font-semibold">MP2000</td>
                              <td className="border px-4 py-2">2.0 m³</td>
                              <td className="border px-4 py-2">2,000</td>
                              <td className="border px-4 py-2">55</td>
                              <td className="border px-4 py-2">$35K~48K</td>
                            </tr>
                            <tr className="hover:bg-red-50">
                              <td className="border px-4 py-2 font-semibold">MP3000</td>
                              <td className="border px-4 py-2">3.0 m³</td>
                              <td className="border px-4 py-2">3,000</td>
                              <td className="border px-4 py-2">90</td>
                              <td className="border px-4 py-2">$55K~75K</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                      <p className="font-bold text-red-900 mb-2">중국 최대 생산량 (연 500대 이상)</p>
                      <ul className="text-sm text-gray-700 space-y-1 pl-6">
                        <li>• 유럽 대비 40~50% 저가</li>
                        <li>• ISO 9001, CE 인증</li>
                        <li>• 세척: 수동 또는 기본 플러싱 (5~7분)</li>
                        <li>• 리드타임: 4~6주</li>
                        <li>• 초저가 시장 최강자</li>
                      </ul>
                    </div>
                  </div>

                  {/* TEKA China */}
                  <div className="space-y-4 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-emerald-900">2️⃣ TEKA China (중국 Taicang 법인)</h3>
                        <p className="text-sm text-gray-600 mt-1">설립: 2003 | 독일 TEKA 기술 기반</p>
                      </div>
                      <Badge className="bg-emerald-600">동아시아 최강 ⭐⭐⭐</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">Goldsupplier</p>
                        <a href="https://teka-maschinenbau.goldsupplier.com" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition-colors text-sm">
                          <ExternalLink className="w-4 h-4" />
                          <span>teka-maschinenbau.goldsupplier.com</span>
                        </a>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700">Made in China</p>
                        <a href="https://teka-machinebau.en.made-in-china.com" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition-colors text-sm">
                          <ExternalLink className="w-4 h-4" />
                          <span>Made-in-China 페이지</span>
                        </a>
                      </div>
                    </div>

                    <div className="bg-emerald-100 p-4 rounded-lg border border-emerald-300 mt-4">
                      <p className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        한국/일본 스페이서 공장 최우선 선택
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1 pl-6">
                        <li>• 독일 기술 + 중국 가격 = 신뢰도 + 가성비 최고</li>
                        <li>• 일본, 한국, 동남아 대량 납품 경험</li>
                        <li>• TEKA 독일과 동일 품질 기준</li>
                        <li>• 가격: $15K~135K (모델별)</li>
                        <li>• 리드타임: 3~4주 (빠른 생산)</li>
                      </ul>
                    </div>
                  </div>

                  {/* 기타 중국 제조사 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3 p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
                      <h4 className="text-lg font-bold text-yellow-900">3️⃣ SANY</h4>
                      <a href="https://www.sanyglobal.com" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-yellow-600 hover:text-yellow-800 transition-colors text-sm">
                        <ExternalLink className="w-4 h-4" />
                        <span>sanyglobal.com</span>
                      </a>
                      <p className="text-sm text-gray-600">중국 건설장비 대형 그룹 (1989년 설립)</p>
                      <ul className="text-sm text-gray-600 space-y-1 pl-4">
                        <li>• 가격: $13K~60K</li>
                        <li>• 배칭 플랜트 통합 설계</li>
                      </ul>
                    </div>

                    <div className="space-y-3 p-4 bg-gradient-to-br from-cyan-50 to-sky-50 rounded-lg border border-cyan-200">
                      <h4 className="text-lg font-bold text-cyan-900">4️⃣ Zoomlion</h4>
                      <a href="https://en.zoomlion.com" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-cyan-600 hover:text-cyan-800 transition-colors text-sm">
                        <ExternalLink className="w-4 h-4" />
                        <span>en.zoomlion.com</span>
                      </a>
                      <p className="text-sm text-gray-600">중국 건설기계 메이커 (1992년)</p>
                      <ul className="text-sm text-gray-600 space-y-1 pl-4">
                        <li>• 가격: $18K~58K</li>
                        <li>• 20개국 이상 수출</li>
                      </ul>
                    </div>

                    <div className="space-y-3 p-4 bg-gradient-to-br from-lime-50 to-green-50 rounded-lg border border-lime-200">
                      <h4 className="text-lg font-bold text-lime-900">5️⃣ NFLG</h4>
                      <a href="https://www.nflg.com" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-lime-600 hover:text-lime-800 transition-colors text-sm">
                        <ExternalLink className="w-4 h-4" />
                        <span>nflg.com</span>
                      </a>
                      <p className="text-sm text-gray-600">중국 배칭 플랜트 전문</p>
                      <ul className="text-sm text-gray-600 space-y-1 pl-4">
                        <li>• 가격: $12K~45K (초저가)</li>
                        <li>• 기본형 설계</li>
                      </ul>
                    </div>

                    <div className="space-y-3 p-4 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-lg border border-indigo-200">
                      <h4 className="text-lg font-bold text-indigo-900">6️⃣ XCMG</h4>
                      <a href="https://www.xcmg.com" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors text-sm">
                        <ExternalLink className="w-4 h-4" />
                        <span>xcmg.com</span>
                      </a>
                      <p className="text-sm text-gray-600">중국 최대 건설장비 그룹</p>
                      <ul className="text-sm text-gray-600 space-y-1 pl-4">
                        <li>• 가격: $17K~44K</li>
                        <li>• 글로벌 다수 국가 수출</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* 일본 공급사 */}
          <TabsContent value="japanese" className="space-y-6">
            <motion.div variants={fadeInUp}>
              <Card className="bg-white/80 backdrop-blur border-rose-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-rose-600" />
                    일본 프리캐스트/블록 설비 공급사
                  </CardTitle>
                  <CardDescription>
                    일본은 믹서 단독 제조사가 아닌 EPC 통합 공급 구조
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 일본 공급 구조 설명 */}
                  <div className="bg-amber-50 p-6 rounded-lg border border-amber-300">
                    <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      일본의 프리캐스트/블록 설비 공급 구조
                    </h3>
                    <p className="text-gray-700 mb-4">
                      일본은 "플래너터리 믹서만 제조"하는 독립 브랜드가 거의 없습니다. 
                      대신 EPC 회사가 유럽 믹서와 일본 성형기를 통합하여 공급합니다.
                    </p>
                    <div className="bg-white p-4 rounded border border-amber-200">
                      <p className="font-mono text-sm text-gray-700 whitespace-pre-line">
                        {`발주자 (스페이서/프리캐스트 공장)
  ↓
일본 EPC 회사 ←→ 유럽 믹서 제조사
(예: Hoei)          (TEKA, BHS, Eurostar)
  ↓                     ↓
• 성형기           • 플래너터리 믹서
• 큐어링 로        • 기술 지원
• 이송 설비`}
                      </p>
                    </div>
                  </div>

                  {/* Hoei */}
                  <div className="space-y-4 p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-rose-900">1️⃣ Hoei (호에이)</h3>
                        <p className="text-sm text-gray-600 mt-1">설립: 1962년 | 프리캐스트/블록 설비 전문</p>
                      </div>
                      <Badge className="bg-rose-600">일본 최고 신뢰도</Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-700">공식 홈페이지</p>
                      <a href="https://hoei-japan.com" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-rose-600 hover:text-rose-800 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        <span>https://hoei-japan.com</span>
                      </a>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="font-bold text-lg text-gray-800">라인 구성 및 믹서 옵션</h4>
                      <div className="bg-rose-100 p-4 rounded border border-rose-300">
                        <p className="font-semibold text-rose-900 mb-2">완전 라인: 혼합 → 성형 → 진동 → 양생 → 이송 → 스태킹</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                          <div>
                            <p className="font-semibold text-sm text-gray-700 mb-1">믹서 옵션</p>
                            <ul className="text-sm text-gray-600 space-y-1 pl-4">
                              <li>• 기본형: 일본산 팬 믹서 (0.5~1.5 m³)</li>
                              <li>• TEKA TPZ: 독일/중국 (동아시아 최고)</li>
                              <li>• BHS BPX: 독일 (프리미엄)</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-gray-700 mb-1">블록 머신 시리즈</p>
                            <ul className="text-sm text-gray-600 space-y-1 pl-4">
                              <li>• HM-400: 2,000~3,000개/일</li>
                              <li>• HM-600: 4,000~6,000개/일</li>
                              <li>• HM-1200: 8,000~12,000개/일</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          주요 특징
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1 pl-6">
                          <li>• 일본 최고 신뢰도의 블록 성형기</li>
                          <li>• 유럽 믹서 + 일본 성형기 통합</li>
                          <li>• 한국·중국 수출 경험 풍부</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-700 flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-rose-600" />
                          완전 라인 가격
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1 pl-6">
                          <li>• 가격: ¥150M~300M</li>
                          <li>• 약 $100~200만 (완전 라인)</li>
                          <li>• 리드타임: 3~5개월</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 기타 일본 공급사 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3 p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg border border-violet-200">
                      <h4 className="text-lg font-bold text-violet-900">2️⃣ Artspace</h4>
                      <a href="http://www.art-space.jp" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-violet-600 hover:text-violet-800 transition-colors text-sm">
                        <ExternalLink className="w-4 h-4" />
                        <span>art-space.jp</span>
                      </a>
                      <p className="text-sm text-gray-600">GRC 강화 콘크리트 스페이서 전문 (Osaka)</p>
                      <ul className="text-sm text-gray-600 space-y-1 pl-4">
                        <li>• 고강도 스페이서 (80N/mm²+)</li>
                        <li>• NETIS 인증 제품</li>
                      </ul>
                    </div>

                    <div className="space-y-3 p-4 bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-lg border border-fuchsia-200">
                      <h4 className="text-lg font-bold text-fuchsia-900">3️⃣ Spacer Kogyo</h4>
                      <a href="https://www.spacerkogyo.co.jp" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-fuchsia-600 hover:text-fuchsia-800 transition-colors text-sm">
                        <ExternalLink className="w-4 h-4" />
                        <span>spacerkogyo.co.jp</span>
                      </a>
                      <p className="text-sm text-gray-600">초고강도 콘크리트 스페이서 (1970년대)</p>
                      <ul className="text-sm text-gray-600 space-y-1 pl-4">
                        <li>• 초고강도: 80N/mm² 이상</li>
                        <li>• 100년 내구성 대응</li>
                      </ul>
                    </div>

                    <div className="space-y-3 p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg border border-sky-200">
                      <h4 className="text-lg font-bold text-sky-900">4️⃣ Katitto</h4>
                      <a href="http://www.katittocon.co.jp" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-sky-600 hover:text-sky-800 transition-colors text-sm">
                        <ExternalLink className="w-4 h-4" />
                        <span>katittocon.co.jp</span>
                      </a>
                      <p className="text-sm text-gray-600">콘크리트 블록/스페이서 제조</p>
                      <ul className="text-sm text-gray-600 space-y-1 pl-4">
                        <li>• In-house 생산 및 설비 운영</li>
                        <li>• 지역·프로젝트별 대량 공급</li>
                      </ul>
                    </div>

                    <div className="space-y-3 p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border border-teal-200">
                      <h4 className="text-lg font-bold text-teal-900">5️⃣ Watanabe Sangyo</h4>
                      <a href="https://www.nabe-san.co.jp" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors text-sm">
                        <ExternalLink className="w-4 h-4" />
                        <span>nabe-san.co.jp</span>
                      </a>
                      <p className="text-sm text-gray-600">콘크리트 스페이서·블록 전문 (1957년)</p>
                      <ul className="text-sm text-gray-600 space-y-1 pl-4">
                        <li>• 전국 배송 네트워크</li>
                        <li>• 다품종 소량 생산 가능</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* 비교 분석 */}
          <TabsContent value="comparison" className="space-y-6">
            <motion.div variants={fadeInUp}>
              <Card className="bg-white/80 backdrop-blur border-indigo-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-indigo-600" />
                    전 세계 제조사 비교 분석
                  </CardTitle>
                  <CardDescription>
                    용량별, 가격대별, 신뢰도별 상세 비교
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 가격대 비교 */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">가격대별 분류</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg border-2 border-purple-400">
                        <h4 className="font-bold text-purple-900 mb-2">프리미엄</h4>
                        <p className="text-sm text-gray-700 mb-2">€100K~300K</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Liebherr</li>
                          <li>• Eurostar</li>
                          <li>• BHS 고급형</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg border-2 border-blue-400">
                        <h4 className="font-bold text-blue-900 mb-2">어퍼-미드</h4>
                        <p className="text-sm text-gray-700 mb-2">€60K~150K</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• TEKA 독일</li>
                          <li>• BHS 기본형</li>
                          <li>• MEKA</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-lg border-2 border-green-400">
                        <h4 className="font-bold text-green-900 mb-2 flex items-center gap-1">
                          미드 ⭐
                        </h4>
                        <p className="text-sm text-gray-700 mb-2">$15K~85K</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• TEKA China ⭐⭐⭐</li>
                          <li>• CO-NELE</li>
                          <li>• SANY</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg border-2 border-yellow-400">
                        <h4 className="font-bold text-yellow-900 mb-2">이코노미</h4>
                        <p className="text-sm text-gray-700 mb-2">$12K~50K</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• CO-NELE</li>
                          <li>• NFLG</li>
                          <li>• XCMG</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* 용량별 추천 */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">용량별 추천 모델</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-indigo-600 text-white">
                            <th className="border border-indigo-500 px-4 py-2">제조사</th>
                            <th className="border border-indigo-500 px-4 py-2">모델</th>
                            <th className="border border-indigo-500 px-4 py-2">용량</th>
                            <th className="border border-indigo-500 px-4 py-2">모터</th>
                            <th className="border border-indigo-500 px-4 py-2">가격대</th>
                            <th className="border border-indigo-500 px-4 py-2">특징</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-indigo-50 bg-green-50">
                            <td className="border px-4 py-2 font-semibold">TEKA</td>
                            <td className="border px-4 py-2">TPZ 500</td>
                            <td className="border px-4 py-2">0.5 m³</td>
                            <td className="border px-4 py-2">15 kW</td>
                            <td className="border px-4 py-2">€60K</td>
                            <td className="border px-4 py-2">스페이서 전용 추천 ⭐</td>
                          </tr>
                          <tr className="hover:bg-indigo-50">
                            <td className="border px-4 py-2 font-semibold">BHS</td>
                            <td className="border px-4 py-2">BPX 0.5</td>
                            <td className="border px-4 py-2">0.5 m³</td>
                            <td className="border px-4 py-2">15 kW</td>
                            <td className="border px-4 py-2">€80K</td>
                            <td className="border px-4 py-2">프리미엄 품질</td>
                          </tr>
                          <tr className="hover:bg-indigo-50 bg-green-50">
                            <td className="border px-4 py-2 font-semibold">TEKA China ⭐</td>
                            <td className="border px-4 py-2">TPZ 750</td>
                            <td className="border px-4 py-2">0.75 m³</td>
                            <td className="border px-4 py-2">22 kW</td>
                            <td className="border px-4 py-2">$18K~25K</td>
                            <td className="border px-4 py-2">가성비 최강, 동아시아</td>
                          </tr>
                          <tr className="hover:bg-indigo-50">
                            <td className="border px-4 py-2 font-semibold">Liebherr</td>
                            <td className="border px-4 py-2">RIM 1.0-M</td>
                            <td className="border px-4 py-2">1.0 m³</td>
                            <td className="border px-4 py-2">48 kW</td>
                            <td className="border px-4 py-2">€120K</td>
                            <td className="border px-4 py-2">링팬 방식, 최고급</td>
                          </tr>
                          <tr className="hover:bg-indigo-50 bg-green-50">
                            <td className="border px-4 py-2 font-semibold">TEKA China ⭐</td>
                            <td className="border px-4 py-2">TPZ 1000</td>
                            <td className="border px-4 py-2">1.0 m³</td>
                            <td className="border px-4 py-2">30 kW</td>
                            <td className="border px-4 py-2">$22K~30K</td>
                            <td className="border px-4 py-2">중형 표준, 최고 선택</td>
                          </tr>
                          <tr className="hover:bg-indigo-50">
                            <td className="border px-4 py-2 font-semibold">CO-NELE</td>
                            <td className="border px-4 py-2">MP500</td>
                            <td className="border px-4 py-2">0.5 m³</td>
                            <td className="border px-4 py-2">15 kW</td>
                            <td className="border px-4 py-2">$15K~20K</td>
                            <td className="border px-4 py-2">초저가 중국산</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <Separator />

                  {/* 세척 방식 비교 */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">세척 방식 비교</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-blue-600 text-white">
                            <th className="border border-blue-500 px-4 py-2">제조사</th>
                            <th className="border border-blue-500 px-4 py-2">방식</th>
                            <th className="border border-blue-500 px-4 py-2">세척 시간</th>
                            <th className="border border-blue-500 px-4 py-2">물 소비</th>
                            <th className="border border-blue-500 px-4 py-2">특징</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-blue-50">
                            <td className="border px-4 py-2 font-semibold">BHS BPX</td>
                            <td className="border px-4 py-2">자동 플러싱</td>
                            <td className="border px-4 py-2">5~10분</td>
                            <td className="border px-4 py-2">중간</td>
                            <td className="border px-4 py-2">자동화 가능, 프리미엄</td>
                          </tr>
                          <tr className="hover:bg-blue-50">
                            <td className="border px-4 py-2 font-semibold">Liebherr RIM</td>
                            <td className="border px-4 py-2">자동 회전식 + 고압수</td>
                            <td className="border px-4 py-2">8~12분</td>
                            <td className="border px-4 py-2">많음</td>
                            <td className="border px-4 py-2">최고급 자동 세척</td>
                          </tr>
                          <tr className="hover:bg-blue-50">
                            <td className="border px-4 py-2 font-semibold">TEKA TPZ</td>
                            <td className="border px-4 py-2">수동/플러싱 옵션</td>
                            <td className="border px-4 py-2">5~8분</td>
                            <td className="border px-4 py-2">적음</td>
                            <td className="border px-4 py-2">기본형 수동, 옵션 가능</td>
                          </tr>
                          <tr className="hover:bg-blue-50">
                            <td className="border px-4 py-2 font-semibold">Eurostar EPM</td>
                            <td className="border px-4 py-2">자동 세척 표준</td>
                            <td className="border px-4 py-2">6~10분</td>
                            <td className="border px-4 py-2">중간</td>
                            <td className="border px-4 py-2">회전식 + 고압 세척</td>
                          </tr>
                          <tr className="hover:bg-blue-50">
                            <td className="border px-4 py-2 font-semibold">CO-NELE MP</td>
                            <td className="border px-4 py-2">수동/기본 플러싱</td>
                            <td className="border px-4 py-2">5~7분</td>
                            <td className="border px-4 py-2">적음</td>
                            <td className="border px-4 py-2">초저가, 옵션 제한적</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 의사결정 매트릭스 */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">선택 의사결정 매트릭스</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                            <th className="border border-green-500 px-4 py-3">선택 기준</th>
                            <th className="border border-green-500 px-4 py-3">TEKA China ⭐</th>
                            <th className="border border-green-500 px-4 py-3">CO-NELE</th>
                            <th className="border border-green-500 px-4 py-3">BHS</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-green-50">
                            <td className="border px-4 py-2 font-semibold">가격</td>
                            <td className="border px-4 py-2 text-center">중</td>
                            <td className="border px-4 py-2 text-center">저</td>
                            <td className="border px-4 py-2 text-center">고</td>
                          </tr>
                          <tr className="hover:bg-green-50 bg-green-100">
                            <td className="border px-4 py-2 font-semibold">신뢰도</td>
                            <td className="border px-4 py-2 text-center font-bold text-green-700">매우 높음 ⭐⭐⭐⭐⭐</td>
                            <td className="border px-4 py-2 text-center">양호</td>
                            <td className="border px-4 py-2 text-center">매우 높음</td>
                          </tr>
                          <tr className="hover:bg-green-50">
                            <td className="border px-4 py-2 font-semibold">세척 편의성</td>
                            <td className="border px-4 py-2 text-center">양호</td>
                            <td className="border px-4 py-2 text-center">낮음</td>
                            <td className="border px-4 py-2 text-center">높음</td>
                          </tr>
                          <tr className="hover:bg-green-50 bg-green-100">
                            <td className="border px-4 py-2 font-semibold">리드타임</td>
                            <td className="border px-4 py-2 text-center font-bold text-green-700">빠름 (2~3개월)</td>
                            <td className="border px-4 py-2 text-center">빠름</td>
                            <td className="border px-4 py-2 text-center">느림</td>
                          </tr>
                          <tr className="hover:bg-green-50">
                            <td className="border px-4 py-2 font-semibold">서비스 지원</td>
                            <td className="border px-4 py-2 text-center">우수 (동아시아)</td>
                            <td className="border px-4 py-2 text-center">보통</td>
                            <td className="border px-4 py-2 text-center">우수 (글로벌)</td>
                          </tr>
                          <tr className="hover:bg-green-50 bg-green-200">
                            <td className="border px-4 py-2 font-semibold">종합 추천도</td>
                            <td className="border px-4 py-2 text-center font-bold text-green-800">⭐⭐⭐⭐⭐</td>
                            <td className="border px-4 py-2 text-center">⭐⭐⭐⭐</td>
                            <td className="border px-4 py-2 text-center">⭐⭐⭐⭐</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* 추천 가이드 */}
          <TabsContent value="recommendation" className="space-y-6">
            <motion.div variants={fadeInUp}>
              <Card className="bg-white/80 backdrop-blur border-emerald-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-emerald-600" />
                    하이콘 코리아 설비 선정 가이드
                  </CardTitle>
                  <CardDescription>
                    스페이서 공장 구축을 위한 최적의 믹서 선택 전략
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 생산량별 추천 */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <Package className="w-6 h-6 text-emerald-600" />
                      일일 생산량별 믹서 추천
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-100 rounded-lg border-2 border-emerald-400">
                        <h4 className="text-lg font-bold text-emerald-900 mb-3">일일 500개 생산</h4>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-700"><span className="font-semibold">필요 용량:</span> 0.5~0.75 m³</p>
                          <p className="text-sm font-bold text-emerald-700">✅ 추천: TEKA China TPZ 500 또는 TPZ 750</p>
                          <ul className="text-xs text-gray-600 space-y-1 pl-4 mt-2">
                            <li>• 가격: ₩2,100만~3,500만</li>
                            <li>• 동아시아 최고 신뢰도</li>
                            <li>• 리드타임: 2~3개월</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg border-2 border-blue-400">
                        <h4 className="text-lg font-bold text-blue-900 mb-3">일일 1,000~2,000개 생산</h4>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-700"><span className="font-semibold">필요 용량:</span> 1.0~1.5 m³</p>
                          <p className="text-sm font-bold text-blue-700">✅ 1순위: TEKA China TPZ 1000/1500</p>
                          <p className="text-sm font-bold text-blue-700">✅ 2순위: CO-NELE MP1000/1500</p>
                          <ul className="text-xs text-gray-600 space-y-1 pl-4 mt-2">
                            <li>• TEKA: ₩3,080만~5,880만 (최고 신뢰도)</li>
                            <li>• CO-NELE: ₩3,080만~5,600만 (초저가)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg border-2 border-purple-400">
                        <h4 className="text-lg font-bold text-purple-900 mb-3">일일 3,000개 이상 생산</h4>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-700"><span className="font-semibold">필요 용량:</span> 2.0~3.0 m³</p>
                          <p className="text-sm font-bold text-purple-700">✅ 1순위: TEKA China TPZ 2250/3000</p>
                          <p className="text-sm font-bold text-purple-700">✅ 2순위: BHS BPX 2.0/3.0</p>
                          <ul className="text-xs text-gray-600 space-y-1 pl-4 mt-2">
                            <li>• TEKA: ₩7,000만~1.19억 (신뢰도 최고)</li>
                            <li>• BHS: ₩2.7억~3.3억 (프리미엄)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg border-2 border-orange-400">
                        <h4 className="text-lg font-bold text-orange-900 mb-3">한국 스페이서 공장</h4>
                        <div className="space-y-2">
                          <p className="text-sm font-bold text-orange-700">🏆 최우선 선택: TEKA China + Hoei (일본)</p>
                          <ul className="text-xs text-gray-600 space-y-1 pl-4 mt-2">
                            <li>• 믹서: TEKA China TPZ (₩3,080만~4,200만)</li>
                            <li>• 성형기: Hoei HM-600 (₩10억)</li>
                            <li>• 총 투자: ₩15.7억~16.8억</li>
                            <li>• 가성비 + 신뢰도 최고 조합</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* 투자 시나리오 */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <DollarSign className="w-6 h-6 text-emerald-600" />
                      투자 비용 분석 (완전 라인 기준)
                    </h3>
                    
                    <div className="space-y-4">
                      {/* 옵션 1: TEKA China + Hoei */}
                      <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-400">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-bold text-green-900">옵션 1: TEKA China + Hoei (추천 ⭐⭐⭐)</h4>
                          <Badge className="bg-green-600 text-lg px-4 py-1">최고 추천</Badge>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-white p-4 rounded border border-green-300">
                            <table className="w-full text-sm">
                              <tbody>
                                <tr>
                                  <td className="py-2 font-semibold text-gray-700">믹서 (TEKA China TPZ 1000)</td>
                                  <td className="py-2 text-right">₩3,080만~4,200만</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-semibold text-gray-700">성형기 + 큐어링 (Hoei HM-600)</td>
                                  <td className="py-2 text-right">약 ₩9.8억</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-semibold text-gray-700">이송/스태킹 설비</td>
                                  <td className="py-2 text-right">약 ₩2,800만</td>
                                </tr>
                                <tr className="border-t-2 border-green-400">
                                  <td className="py-2 font-bold text-green-900 text-lg">총 투자 비용</td>
                                  <td className="py-2 text-right font-bold text-green-900 text-lg">₩15.7억~16.8억</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-semibold text-gray-700">리드타임</td>
                                  <td className="py-2 text-right">약 3~4개월</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-green-100 p-3 rounded">
                              <p className="font-semibold text-green-900 mb-1">장점</p>
                              <ul className="text-xs text-gray-700 space-y-1 pl-4">
                                <li>• 최고의 신뢰도 + 합리적 가격</li>
                                <li>• 동아시아 최강 조합</li>
                                <li>• 한국 운송비 최소화</li>
                              </ul>
                            </div>
                            <div className="bg-white p-3 rounded border border-green-300">
                              <p className="font-semibold text-gray-800 mb-1">평가</p>
                              <ul className="text-xs text-gray-700 space-y-1 pl-4">
                                <li>• 신뢰도: ⭐⭐⭐⭐⭐</li>
                                <li>• 가성비: ⭐⭐⭐⭐⭐</li>
                                <li>• 추천도: 매우 높음</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 옵션 2: CO-NELE + Hoei */}
                      <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-400">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-bold text-yellow-900">옵션 2: CO-NELE + Hoei (초저가)</h4>
                          <Badge className="bg-yellow-600">경제적</Badge>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-white p-4 rounded border border-yellow-300">
                            <table className="w-full text-sm">
                              <tbody>
                                <tr>
                                  <td className="py-2 font-semibold text-gray-700">믹서 (CO-NELE MP1000)</td>
                                  <td className="py-2 text-right">₩3,080만~4,200만</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-semibold text-gray-700">성형기 + 큐어링 (Hoei HM-600)</td>
                                  <td className="py-2 text-right">약 ₩9.8억</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-semibold text-gray-700">이송/스태킹 설비</td>
                                  <td className="py-2 text-right">약 ₩2,800만</td>
                                </tr>
                                <tr className="border-t-2 border-yellow-400">
                                  <td className="py-2 font-bold text-yellow-900 text-lg">총 투자 비용</td>
                                  <td className="py-2 text-right font-bold text-yellow-900 text-lg">₩15.7억~16.8억</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-semibold text-gray-700">리드타임</td>
                                  <td className="py-2 text-right">약 4~6주 (믹서)</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="bg-yellow-100 p-3 rounded">
                            <p className="font-semibold text-yellow-900 mb-1">평가</p>
                            <ul className="text-xs text-gray-700 space-y-1 pl-4">
                              <li>• 신뢰도: ⭐⭐⭐ (양호, TEKA보다 낮음)</li>
                              <li>• 가성비: ⭐⭐⭐⭐</li>
                              <li>• 추천도: 높음 (초저예산 시)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 옵션 3: BHS + Hoei */}
                      <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-400">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-bold text-purple-900">옵션 3: BHS + Hoei (프리미엄)</h4>
                          <Badge className="bg-purple-600">최고급</Badge>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-white p-4 rounded border border-purple-300">
                            <table className="w-full text-sm">
                              <tbody>
                                <tr>
                                  <td className="py-2 font-semibold text-gray-700">믹서 (BHS BPX 1.0)</td>
                                  <td className="py-2 text-right">₩1.8억</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-semibold text-gray-700">성형기 + 큐어링 (Hoei HM-600)</td>
                                  <td className="py-2 text-right">약 ₩9.8억</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-semibold text-gray-700">이송/스태킹 설비</td>
                                  <td className="py-2 text-right">약 ₩2,800만</td>
                                </tr>
                                <tr className="border-t-2 border-purple-400">
                                  <td className="py-2 font-bold text-purple-900 text-lg">총 투자 비용</td>
                                  <td className="py-2 text-right font-bold text-purple-900 text-lg">약 ₩31.1억</td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-semibold text-gray-700">리드타임</td>
                                  <td className="py-2 text-right">약 4~5개월</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="bg-purple-100 p-3 rounded">
                            <p className="font-semibold text-purple-900 mb-1">평가</p>
                            <ul className="text-xs text-gray-700 space-y-1 pl-4">
                              <li>• 신뢰도: ⭐⭐⭐⭐⭐ (최고)</li>
                              <li>• 가성비: ⭐⭐⭐ (비싸지만 가치)</li>
                              <li>• 추천도: 높음 (대형 프로젝트)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* 즉시 실행 가이드 */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <Zap className="w-6 h-6 text-emerald-600" />
                      즉시 실행 가이드
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="p-5 bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg border-2 border-emerald-500">
                        <h4 className="font-bold text-emerald-900 mb-3 text-lg flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          오늘부터 시작
                        </h4>
                        <ol className="space-y-3 text-sm text-gray-700">
                          <li className="flex gap-3">
                            <span className="font-bold text-emerald-600 flex-shrink-0">1.</span>
                            <div>
                              <p className="font-semibold">TEKA China 법인 직접 컨택</p>
                              <p className="text-xs text-gray-600 mt-1">
                                웹사이트: <a href="https://teka-maschinenbau.goldsupplier.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">teka-maschinenbau.goldsupplier.com</a>
                              </p>
                              <p className="text-xs text-gray-600">
                                문의: 한국 스페이서 공장용 TPZ 1000~1500 모델 상담
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="font-bold text-emerald-600 flex-shrink-0">2.</span>
                            <div>
                              <p className="font-semibold">일본 EPC 업체 선정</p>
                              <p className="text-xs text-gray-600 mt-1">
                                Hoei Japan (<a href="https://hoei-japan.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">hoei-japan.com</a>) 또는 국내 건설기계 제조사
                              </p>
                              <p className="text-xs text-gray-600">
                                목적: 성형기, 큐어링, 이송 설비와 TEKA 믹서 통합 라인 설계
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="font-bold text-emerald-600 flex-shrink-0">3.</span>
                            <div>
                              <p className="font-semibold">온사이트 방문 및 레퍼런스 확인</p>
                              <p className="text-xs text-gray-600 mt-1">
                                TEKA 중국 법인이 납품한 한국/일본 프로젝트 방문
                              </p>
                              <p className="text-xs text-gray-600">
                                실제 운영 데이터, 유지보수 비용 확인
                              </p>
                            </div>
                          </li>
                        </ol>
                      </div>

                      <div className="p-5 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg border-2 border-blue-500">
                        <h4 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          1개월 내 완료
                        </h4>
                        <ol className="space-y-3 text-sm text-gray-700">
                          <li className="flex gap-3">
                            <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                            <div>
                              <p className="font-semibold">기술 사양서 및 견적 수집</p>
                              <p className="text-xs text-gray-600 mt-1">
                                TEKA China: 믹서 카탈로그, 기술 스펙, 가격 견적
                              </p>
                              <p className="text-xs text-gray-600">
                                EPC: 성형기, 큐어링, 라인 통합 설계안 및 가격
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="font-bold text-blue-600 flex-shrink-0">5.</span>
                            <div>
                              <p className="font-semibold">목표 생산량 및 예산 확정</p>
                              <p className="text-xs text-gray-600 mt-1">
                                초기 투자 규모: ₩15억~20억
                              </p>
                              <p className="text-xs text-gray-600">
                                ROI 목표: 18~24개월 | 예상 수익성: 연 ₩5억~10억
                              </p>
                            </div>
                          </li>
                        </ol>
                      </div>

                      <div className="p-5 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border-2 border-purple-500">
                        <h4 className="font-bold text-purple-900 mb-3 text-lg flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          2개월 내 완료
                        </h4>
                        <ol className="space-y-3 text-sm text-gray-700">
                          <li className="flex gap-3">
                            <span className="font-bold text-purple-600 flex-shrink-0">6.</span>
                            <div>
                              <p className="font-semibold">구매 계약 및 기술 이전 협의</p>
                              <p className="text-xs text-gray-600 mt-1">
                                TEKA China와 공급계약 체결
                              </p>
                              <p className="text-xs text-gray-600">
                                EPC 업체와 건설 계약 체결, 기술 교육 일정 확정
                              </p>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* 최종 결론 */}
                  <div className="p-8 bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 rounded-xl border-4 border-emerald-500 shadow-lg">
                    <h3 className="text-3xl font-bold text-emerald-900 mb-4 text-center flex items-center justify-center gap-2">
                      <Award className="w-8 h-8" />
                      최종 결론 및 권고사항
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white p-5 rounded-lg shadow-md">
                        <p className="font-bold text-emerald-900 text-xl mb-3">
                          🏆 한국 스페이서 공장 최우선 선택
                        </p>
                        <div className="bg-emerald-50 p-4 rounded border-2 border-emerald-300">
                          <p className="font-bold text-emerald-800 mb-2">TEKA China TPZ (믹서) + Hoei/국내 EPC (성형라인)</p>
                          <ul className="text-sm text-gray-700 space-y-2 pl-4">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><strong>독일 기술 + 중국 가격</strong> = 최고의 가성비</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><strong>동아시아 최강 신뢰도</strong> (일본, 한국 대량 납품 경험)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><strong>빠른 리드타임</strong> (2~3개월) + 우수한 기술 지원</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><strong>합리적 투자 비용</strong>: ₩15.7억~16.8억 (완전 라인)</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white p-5 rounded-lg shadow-md">
                        <p className="font-bold text-gray-900 text-lg mb-3">핵심 투자 포인트</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="p-3 bg-blue-50 rounded border border-blue-300">
                            <p className="font-semibold text-blue-900 mb-1">초기 투자</p>
                            <p className="text-2xl font-bold text-blue-700">₩16억</p>
                            <p className="text-xs text-gray-600">(₩15.7억~16.8억)</p>
                          </div>
                          <div className="p-3 bg-green-50 rounded border border-green-300">
                            <p className="font-semibold text-green-900 mb-1">ROI 목표</p>
                            <p className="text-2xl font-bold text-green-700">18~24개월</p>
                            <p className="text-xs text-gray-600">손익분기점 달성</p>
                          </div>
                          <div className="p-3 bg-purple-50 rounded border border-purple-300">
                            <p className="font-semibold text-purple-900 mb-1">연 수익성</p>
                            <p className="text-2xl font-bold text-purple-700">₩5억~10억</p>
                            <p className="text-xs text-gray-600">안정화 이후</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <motion.div variants={fadeInUp} className="text-center pt-8 pb-4 text-sm text-gray-500">
          <p>본 보고서는 하이콘 코리아의 철근 스페이서 공장 설립을 위한 설비 조사 자료입니다.</p>
          <p className="mt-2">문의: HiCon Korea Research Team | 2025년 12월</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

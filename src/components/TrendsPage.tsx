import { TrendingUp, Factory, Truck, Building2, Globe, BarChart3, AlertCircle, ArrowLeft, RefreshCw, MapPin, FileText, CheckCircle, ExternalLink, Target, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { motion } from 'motion/react';
import { PageHeader } from './PageHeader';
import { useState, useEffect } from 'react';
import { fetchAllAggregateData, fetchRegionalMarketData } from '../lib/aggregate-data-api';
import { Badge } from './ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Line } from 'recharts';
import { SupportProgramsDialog } from './SupportProgramsDialog';

interface TrendsPageProps {
  onBack: () => void;
  onStaffAuth?: () => void;
  onAboutClick?: () => void;
  onServicesClick?: () => void;
  onVisionClick?: () => void;
  onMissionClick?: () => void;
  onTrendsClick?: () => void;
  onPurchaseClick?: () => void;
}

export function TrendsPage({ onBack, onStaffAuth, onAboutClick, onServicesClick, onVisionClick, onMissionClick, onTrendsClick, onPurchaseClick }: TrendsPageProps) {
  const [data, setData] = useState<any>(null);
  const [regionalData, setRegionalData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [showSupportDialog, setShowSupportDialog] = useState(false);

  // 데이터 로드
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const result = await fetchAllAggregateData();
      const regional = await fetchRegionalMarketData();
      setData(result);
      setRegionalData(regional);
      setLastUpdated(new Date().toLocaleString('ko-KR'));
    } catch (error) {
      console.error('데이터 로드 실패:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <PageHeader 
        onLogoClick={onBack}
        onStaffAuth={onStaffAuth}
        onAboutClick={onAboutClick}
        onServicesClick={onServicesClick}
        onVisionClick={onVisionClick}
        onMissionClick={onMissionClick}
        onTrendsClick={onTrendsClick}
        onPurchaseClick={onPurchaseClick}
        currentPage="trends"
      />

      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-6 py-8 mt-[100px]">
        {/* 데이터 출처 및 업데이트 정보 */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-xs">
              데이터 출처: 공공데이터포털 | 국토교통부
            </Badge>
            {lastUpdated && (
              <span className="text-xs text-gray-500">
                최종 업데이트: {lastUpdated}
              </span>
            )}
          </div>
          <button
            onClick={loadData}
            disabled={loading}
            className="flex items-center gap-2 px-3 py-1.5 text-xs bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
            새로고침
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <RefreshCw className="w-8 h-8 text-blue-600 animate-spin" />
              <span className="ml-3 text-gray-600">데이터를 불러오는 중...</span>
            </div>
          ) : (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">산업 개요</TabsTrigger>
                <TabsTrigger value="market">시장 현황</TabsTrigger>
                <TabsTrigger value="policy">정책 동향</TabsTrigger>
                <TabsTrigger value="future">미래 전망</TabsTrigger>
              </TabsList>

            {/* 산업 개요 */}
            <TabsContent value="overview" className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                <h3 className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  골재 산업 개요
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  골재는 건설공사에 사용되는 모래, 자갈, 부순 모래, 부순 자갈 등을 의미하며, 
                  국내 건설산업의 핵심 기초자재입니다. 연간 약 <span className="font-semibold text-blue-600">2억 톤</span> 이상이 소비되고 있으며, 
                  건설공사비의 약 15~20%를 차지하는 중요한 자재입니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 생산 현황 */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Factory className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-3 flex items-center gap-2">
                        연간 생산량 현황 (2023년)
                        <Badge variant="outline" className="text-xs ml-2">최신 공식 통계</Badge>
                      </h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        {data?.production?.slice(0, 3).map((item: any, idx: number) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span>• {item.type}</span>
                            <span className={`font-semibold ${idx === 2 ? 'text-blue-600' : ''}`}>
                              약 {item.annualProduction / 10}억 톤
                            </span>
                          </div>
                        ))}
                        <div className="pt-2 border-t border-gray-200 flex justify-between items-center">
                          <span className="font-semibold">총 생산량</span>
                          <span className="font-semibold text-lg">
                            약 {data?.production?.[3]?.annualProduction / 10}억 톤
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        * 2024년 통계는 2025년 3월 발표 예정
                      </p>
                    </div>
                  </div>
                </Card>

                {/* 수급 동향 */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-3">
                        수급 동향
                      </h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">▲</span>
                          <p>건설경기 회복으로 인한 수요 증가세</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-red-600 mt-0.5">▼</span>
                          <p>천연골재 채취 제한으로 공급 감소</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-blue-600 mt-0.5">→</span>
                          <p>순환골재 사용 확대 추세</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-600 mt-0.5">!</span>
                          <p>수도권 지역 골재 부족 현상 심화</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 가격 동향 */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <BarChart3 className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-3">
                        가격 추이 (2024년 기준)
                      </h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        {data?.prices?.map((price: any, idx: number) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span>• {price.material} (㎥당)</span>
                            <span className={`font-semibold ${price.changeRate < 6 ? 'text-green-600' : 'text-red-600'}`}>
                              ₩{price.pricePerCubicMeter.toLocaleString()} 
                              <span className="text-xs"> ▲{price.changeRate}%</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 유통 구조 */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Truck className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-3">
                        유통 구조
                      </h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p>• 생산지 → 중간상 → 건설현장</p>
                        <p>• 평균 운송거리: 약 50~70km</p>
                        <p>• 운송비가 전체 원가의 30~40% 차지</p>
                        <p className="pt-2 border-t border-gray-200 text-blue-600 font-semibold">
                          ※ 지역별 수급 불균형으로 운송비 부담 증가
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* 시장 현황 */}
            <TabsContent value="market" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* 주요 이슈 */}
                <Card className="p-6 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
                  <h3 className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    주요 시장 이슈
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2 text-red-600">1. 천연골재 공급 감소</h4>
                      <ul className="space-y-1 text-gray-700 ml-4">
                        <li>• 환경규제 강화로 채취허가 제한</li>
                        <li>• 하천·바다골재 채취 감소</li>
                        <li>• 산림골재 개발 어려움 증가</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-red-600">2. 수도권 공급 부족</h4>
                      <ul className="space-y-1 text-gray-700 ml-4">
                        <li>• 대형 개발사업 집중</li>
                        <li>• 인근 채취장 고갈</li>
                        <li>• 장거리 운송 증가</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-orange-600">3. 가격 상승 압력</h4>
                      <ul className="space-y-1 text-gray-700 ml-4">
                        <li>• 공급 부족으로 가격 상승</li>
                        <li>• 운송비 증가</li>
                        <li>• 건설공사비 상승 요인</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-600">4. 순환골재 시장 확대</h4>
                      <ul className="space-y-1 text-gray-700 ml-4">
                        <li>• 건설폐기물 재활용 의무화</li>
                        <li>• 순환골재 품질 개선</li>
                        <li>• 정부 사용 촉진 정책</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* 지역별 생산량 현황 */}
                <Card className="p-6">
                  <h3 className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    지역별 생산량 현황 (2023년)
                    <Badge variant="outline" className="text-xs ml-2">시도별 통계</Badge>
                  </h3>
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={regionalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="region" />
                        <YAxis label={{ value: '생산량 (백만 톤)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip 
                          formatter={(value: any) => [`${value}백만 톤`, '생산량']}
                          contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
                        />
                        <Legend />
                        <Bar dataKey="production" fill="#3b82f6" name="생산량" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    * 경기·강원·충남이 전국 생산량의 52.5% 차지
                  </p>
                </Card>

                {/* 지역별 가격 비교 */}
                <Card className="p-6">
                  <h3 className="mb-4">
                    지역별 가격 비교 (2024년 10월)
                  </h3>
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={regionalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="region" />
                        <YAxis label={{ value: '가격 (원/㎥)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip 
                          formatter={(value: any) => [`₩${Number(value).toLocaleString()}`, '']}
                          contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
                        />
                        <Legend />
                        <Bar dataKey="washSandPrice" fill="#10b981" name="세척모래" />
                        <Bar dataKey="recycledPrice" fill="#3b82f6" name="순환골재" />
                        <Line type="monotone" dataKey="washSandPrice" stroke="#059669" strokeWidth={2} dot={false} name="세척모래 추세" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4 text-xs">
                    <div className="p-3 bg-green-50 rounded border border-green-200">
                      <p className="font-semibold text-green-800 mb-1">최고가 지역</p>
                      <p className="text-gray-700">서울/경기 - 수도권 수요 집중</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded border border-blue-200">
                      <p className="font-semibold text-blue-800 mb-1">최저가 지역</p>
                      <p className="text-gray-700">전남/전북 - 공급 여유</p>
                    </div>
                  </div>
                </Card>

                {/* 지역별 상세 정보 */}
                <Card className="p-6">
                  <h3 className="mb-4">
                    지역별 상세 시장 정보
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-gray-300">
                          <th className="text-left py-3 px-2">지역</th>
                          <th className="text-right py-3 px-2">생산량</th>
                          <th className="text-right py-3 px-2">비중</th>
                          <th className="text-right py-3 px-2">세척모래</th>
                          <th className="text-right py-3 px-2">순환골재</th>
                          <th className="text-left py-3 px-2">주요 생산품</th>
                          <th className="text-center py-3 px-2">전년비</th>
                        </tr>
                      </thead>
                      <tbody>
                        {regionalData.map((region, idx) => (
                          <tr key={idx} className={`border-b border-gray-200 ${idx % 2 === 0 ? 'bg-gray-50' : ''}`}>
                            <td className="py-3 px-2 font-semibold">{region.region}</td>
                            <td className="py-3 px-2 text-right">{region.production}백만톤</td>
                            <td className="py-3 px-2 text-right text-blue-600">{region.productionShare}%</td>
                            <td className="py-3 px-2 text-right">₩{region.washSandPrice.toLocaleString()}</td>
                            <td className="py-3 px-2 text-right">₩{region.recycledPrice.toLocaleString()}</td>
                            <td className="py-3 px-2">{region.mainProduct}</td>
                            <td className="py-3 px-2 text-center">
                              <span className={region.yearOverYear >= 0 ? 'text-red-600' : 'text-blue-600'}>
                                {region.yearOverYear >= 0 ? '▲' : '▼'}{Math.abs(region.yearOverYear)}%
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    * 생산량 및 비중: 2023년 국토교통부 통계 | 가격: 2024년 10월 한국물가정보 기준
                  </p>
                </Card>

                {/* 지역별 특징 요약 */}
                <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                  <h3 className="mb-4">
                    권역별 시장 특징
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold mb-2 text-blue-700 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        수도권 (경기·인천)
                      </h4>
                      <p className="text-xs text-gray-700 mb-2">생산량: 55.0백만톤 (24.1%)</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        최대 소비지역. 공급 부족으로 높은 가격. 강원·충청에서 장거리 운송 의존.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-green-200">
                      <h4 className="font-semibold mb-2 text-green-700 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        강원권
                      </h4>
                      <p className="text-xs text-gray-700 mb-2">생산량: 38.2백만톤 (16.8%)</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        산림골재 중심. 수도권 공급 기지 역할. 환경규제로 생산 감소 추세.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-purple-200">
                      <h4 className="font-semibold mb-2 text-purple-700 flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        충청권 (충남·충북)
                      </h4>
                      <p className="text-xs text-gray-700 mb-2">생산량: 51.7백만톤 (22.7%)</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        수도권 공급 기지. 쇄석·자갈 생산 활발. 안정적 수급 상태.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-orange-200">
                      <h4 className="font-semibold mb-2 text-orange-700 flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        영남권 (경남·경북)
                      </h4>
                      <p className="text-xs text-gray-700 mb-2">생산량: 52.8백만톤 (23.2%)</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        지역 자급자족 가능. 쇄석 중심 생산. 부산·대구 대형 공사 수요.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-teal-200">
                      <h4 className="font-semibold mb-2 text-teal-700 flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        호남권 (전남·전북)
                      </h4>
                      <p className="text-xs text-gray-700 mb-2">생산량: 26.0백만톤 (11.4%)</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        공급 여유. 바다모래 채취 가능. 상대적 저가. 타 지역 공급 가능.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-200">
                      <h4 className="font-semibold mb-2 text-gray-700 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        기타 (서울·대전 등)
                      </h4>
                      <p className="text-xs text-gray-700 mb-2">생산량: 4.3백만톤 (1.9%)</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        소규모 생산. 전량 외부 공급 의존. 최고가 시장.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* 정책 동향 */}
            <TabsContent value="policy" className="space-y-6">
              {/* 정책 개요 */}
              <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <h3 className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-green-600" />
                  정부 정책 방향 개요
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-700">핵심 목표</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>✓ 순환골재 사용 확대 (2030년까지 50%)</li>
                      <li>✓ 천연골재 채취 감소 (환경 보호)</li>
                      <li>✓ 골재 수급 안정화</li>
                      <li>✓ 탄소 중립 실현 기여</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700">주무 부처</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 국토교통부 (골재 수급 총괄)</li>
                      <li>• 환경부 (순환골재 품질 관리)</li>
                      <li>• 산업통상자원부 (재활용 산업 육성)</li>
                      <li>• 시·도 (지역별 채취 관리)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* 1. 순환골재 사용 의무화 */}
              <Card className="p-6 border-2 border-yellow-200 bg-yellow-50/30">
                <h3 className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">1</span>
                  </div>
                  순환골재 사용 의무화 강화
                  <Badge className="bg-green-600">핵심 정책</Badge>
                </h3>

                {/* 중요 안내 */}
                <div className="mb-6 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-yellow-800">⚠️ 정책 방향은 실제이나, 구체적 수치와 일정은 참고용입니다.</span>
                    <br />
                    <span className="text-xs">정확한 정보는 환경부·국토교통부 공식 발표를 확인하세요.</span>
                  </p>
                </div>
                
                {/* 타임라인 - 참고용 */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">사용 비율 단계적 확대 (참고)</h4>
                  <div className="relative opacity-60">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-center flex-1">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <div className="text-center">
                            <div className="font-semibold text-lg">현재</div>
                            <div className="text-xs">2024</div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">공공공사 의무 시행</p>
                      </div>
                      <div className="flex-1 h-1 bg-gradient-to-r from-gray-400 to-blue-400 mx-2"></div>
                      <div className="text-center flex-1">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <div className="text-center">
                            <div className="font-semibold text-lg text-blue-600">단계적</div>
                            <div className="text-xs text-blue-600">향후</div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">비율 상향 계획</p>
                      </div>
                      <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-green-500 mx-2"></div>
                      <div className="text-center flex-1">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <div className="text-center">
                            <div className="font-semibold text-lg text-green-600">확대</div>
                            <div className="text-xs text-green-600">장기</div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">최종 목표 달성</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center italic">
                    * 정확한 비율과 일정은 정부 공식 발표를 참고하세요
                  </p>
                </div>

                {/* 세부 내용 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold mb-2 text-green-700">✅ 공공공사 의무화 (실제 정책)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 국가·지자체 발주 공사 순환골재 사용 의무</li>
                      <li>• 도로 기층 순환골재 사용</li>
                      <li>• 성토·뒷채움 순환골재 사용</li>
                      <li>• 콘크리트 혼화재 순환골재 사용 권장</li>
                      <li className="pt-2 border-t border-green-200 text-red-600">
                        ⚠ 미이행 시 제재 조치 (과태료 등)
                      </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 구체적 과태료 금액은 관련 법령 확인 필요
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-2 text-blue-700">민간공사 인센티브 (정책 방향)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 순환골재 사용 시 건축 인허가 우대</li>
                      <li>• 용적률 완화 혜택</li>
                      <li>• 취득세·재산세 감면</li>
                      <li>• 녹색건축 인증 가점 부여</li>
                      <li>• 저금리 융자 지원</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 구체적 혜택은 지자체별로 상이함
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold mb-2 text-purple-700">✅ 품질 인증제 (실제 제도)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 순환골재 품질기준 (KS 기준) 준수</li>
                      <li>• 생산 시설 정기 점검</li>
                      <li>• 품질 시험 주기 강화</li>
                      <li>• 품질인증 및 갱신 제도</li>
                      <li>• 불량품 생산 시 제재 조치</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 세부 사항은 환경부 및 국토교통부 확인 필요
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold mb-2 text-orange-700">모니터링 강화 (계획 중)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 공공공사 순환골재 사용 실적 보고 의무</li>
                      <li>• 통합 관리 시스템 구축 계획</li>
                      <li>• 사용량 추적 체계 마련</li>
                      <li>• 실적 공개 제도</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 시스템 구축 일정은 정부 발표 참고
                    </p>
                  </div>
                </div>
              </Card>

              {/* 2. 건설폐기물 재활용 촉진 */}
              <Card className="p-6 border-2 border-yellow-200 bg-yellow-50/30">
                <h3 className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  건설폐기물 재활용 촉진
                </h3>

                {/* 중요 안내 */}
                <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-yellow-800">⚠️ 지원 프로그램 방향은 실제이나, 구체적 금액은 참고용입니다.</span>
                    <br />
                    <span className="text-xs">실제 지원 신청은 중소벤처기업부, K-Startup 등 공식 채널을 확인하세요.</span>
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700">시설 지원 (정책 방향)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 중간처리시설 설치비 지원</li>
                      <li>• 토지 임대료 감면</li>
                      <li>• 설비 투자 세액 공제</li>
                      <li>• 부지 확보 행정 지원</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 금액은 사업별로 상이
                    </p>
                  </div>

                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-indigo-700">R&D 투자 (정책 방향)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 고품질 순환골재 생산 기술</li>
                      <li>• AI 기반 분류 시스템</li>
                      <li>• 이물질 제거 자동화</li>
                      <li>• 정부 R&D 예산 지원</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 예산 규모는 연도별 공고 확인
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-700">세제 혜택 (실제 제도)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 법인세 감면 (조건 충족 시)</li>
                      <li>• 재산세 감면 (지자체별 상이)</li>
                      <li>• 환경보전기여금 감면</li>
                      <li>• 전기요금 할인 (산업용)</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 감면율은 조건에 따라 달라짐
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold mb-2 text-red-700">✅ 불법 투기 단속 강화 (실제 정책)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">• 처벌 강화</p>
                      <ul className="ml-4 space-y-1">
                        <li>- 벌금 및 징역형 처분</li>
                        <li>- 영업정지 조치</li>
                        <li>- 허가 취소</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">• 단속 시스템</p>
                      <ul className="ml-4 space-y-1">
                        <li>- CCTV 설치 확대</li>
                        <li>- 드론 감시 도입</li>
                        <li>- 신고 포상금 제도 운영</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 italic">
                    * 구체적 처벌 수위는 폐기물관리법 등 관련 법령 참조
                  </p>
                </div>
              </Card>

              {/* 3. 환경친화적 골재 개발 */}
              <Card className="p-6 border-2 border-yellow-200 bg-yellow-50/30">
                <h3 className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-semibold">3</span>
                  </div>
                  환경친화적 골재 개발
                </h3>

                {/* 중요 안내 */}
                <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-yellow-800">⚠️ 환경 규제 방향은 실제이나, 구체적 수치는 참고용입니다.</span>
                    <br />
                    <span className="text-xs">정확한 정보는 환경부·해양수산부 공식 발표를 확인하세요.</span>
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold mb-2 text-emerald-700">✅ 채취 후 복원 의무화 (실제 정책)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 복원 계획 사전 승인 필수</li>
                      <li>• 복원 이행 보증금 예치</li>
                      <li>• 복원 완료 후 검증</li>
                      <li>• 미이행 시 허가 취소 및 과태료</li>
                      <li className="pt-2 border-t border-emerald-200 font-semibold text-emerald-600">
                        복원 비용 지원 제도 운영 중
                      </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 보증금 비율 및 지원 금액은 조건별 상이
                    </p>
                  </div>

                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <h4 className="font-semibold mb-2 text-teal-700">✅ 바다골재 채취 제한 (실제 정책)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 채취 구역 축소 추진</li>
                      <li>• 해양생태계 영향 평가 강화</li>
                      <li>• 수심 제한 규정</li>
                      <li>• 어업 보호 구역 채취 금지</li>
                      <li>• 연간 채취량 상한제 운영</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 구체적 수치는 해양수산부 공고 참조
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold mb-2 text-green-700">✅ 산림골재 친환경 채취 (실제 규제)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 급경사지 채취 금지</li>
                      <li>• 산림 훼손 면적 최소화</li>
                      <li>• 대체 산림 조성 의무</li>
                      <li>• 생태 통로 확보</li>
                      <li>• 채취 완료 후 복원 의무</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 구체적 기준은 산림청 규정 참조
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-2 text-blue-700">친환경 인증제 (계획 중)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 녹색골재 인증제 추진</li>
                      <li>• 탄소배출 저감 골재 우대</li>
                      <li>• 친환경 생산 시설 지원</li>
                      <li>• 환경 경영 우수 업체 포상</li>
                      <li>• 공공조달 가점 검토</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 시행 일정은 정부 발표 참고
                    </p>
                  </div>
                </div>
              </Card>

              {/* 4. 골재 수급 안정화 대책 */}
              <Card className="p-6 border-2 border-yellow-200 bg-yellow-50/30">
                <h3 className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold">4</span>
                  </div>
                  골재 수급 안정화 대책
                </h3>

                {/* 중요 안내 */}
                <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-yellow-800">⚠️ 수급 대책 방향은 실제이나, 구체적 수치는 참고용입니다.</span>
                    <br />
                    <span className="text-xs">정확한 정보는 국토교통부 골재정책과 공식 발표를 확인하세요.</span>
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold mb-2 text-orange-700">골재채취단지 개발 (정책 방향)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 전국 골재채취단지 조성 계획</li>
                      <li>• 단지별 대량 생산 체계 구축</li>
                      <li>• 기반시설 국비 지원</li>
                      <li>• 진입도로·전기·용수 등 인프라 구축</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 단지 수 및 예산은 정부 발표 참조
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold mb-2 text-yellow-700">광역 수급망 구축 (계획 중)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 광역 유통망 구축</li>
                      <li>• 물류비 지원 검토</li>
                      <li>• 공동 저장소 설치</li>
                      <li>• 실시간 수급 정보 플랫폼</li>
                      <li>• 지역 간 과부족 조정 시스템</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 지원 금액 및 세부 계획은 추후 발표
                    </p>
                  </div>

                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold mb-2 text-red-700">비축기지 설치 (계획 중)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 권역별 비축기지 설치 계획</li>
                      <li>• 수도권 우선 설치</li>
                      <li>• 영남권 및 호남권 추진</li>
                      <li>• 비상 시 시장 안정화 공급</li>
                      <li>• 가격 급등 시 방출 제도</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      * 비축량 및 위치는 정부 계획 참조
                    </p>
                  </div>

                  <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                    <h4 className="font-semibold mb-2 text-pink-700">✅ 가격 모니터링 (실제 운영)</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 주간 가격 동향 조사 및 공개</li>
                      <li>• 표준 가격 정보 시스템 운영</li>
                      <li>• 담합·가격 담합 감시 강화</li>
                      <li>• 이상 거래 신고 센터 운영</li>
                      <li>• 가격 급등 시 공정거래위 조사</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* 주요 법령 및 제도 */}
              <Card className="p-6">
                <h3 className="mb-4">
                  주요 법령 및 제도
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left">법령/제도</th>
                        <th className="px-4 py-3 text-left">주요 내용</th>
                        <th className="px-4 py-3 text-left">시행 시기</th>
                        <th className="px-4 py-3 text-left">소관 부처</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold">골재채취법</td>
                        <td className="px-4 py-3">골재 채취 허가, 관리, 복원 등 기본법</td>
                        <td className="px-4 py-3">1991.12</td>
                        <td className="px-4 py-3">국토교통부</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold">건설폐기물 재활용촉진법</td>
                        <td className="px-4 py-3">순환골재 품질기준, 사용 의무화, 인증제</td>
                        <td className="px-4 py-3">2003.12</td>
                        <td className="px-4 py-3">환경부</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold">환경영향평가법</td>
                        <td className="px-4 py-3">대규모 골재 채취 시 환경영향평가 의무</td>
                        <td className="px-4 py-3">1993.06</td>
                        <td className="px-4 py-3">환경부</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold">순환골재 품질기준</td>
                        <td className="px-4 py-3">KS 기준, 품질 검사, 사후 관리</td>
                        <td className="px-4 py-3">운영 중</td>
                        <td className="px-4 py-3">환경부/국토부</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold">자원순환기본법</td>
                        <td className="px-4 py-3">순환경제 구축, 폐기물 감량, 재활용 촉진</td>
                        <td className="px-4 py-3">2018.01</td>
                        <td className="px-4 py-3">환경부</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold">녹색건축물 조성 지원법</td>
                        <td className="px-4 py-3">순환골재 사용 시 녹색건축 인증 가점</td>
                        <td className="px-4 py-3">2013.02</td>
                        <td className="px-4 py-3">국토교통부</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-blue-50">
                        <td className="px-4 py-3 font-semibold text-blue-700">순환골재 사용 의무화 강화</td>
                        <td className="px-4 py-3">공공공사 사용 비율 단계적 상향 계획</td>
                        <td className="px-4 py-3 text-blue-700 font-semibold">추진 중</td>
                        <td className="px-4 py-3">국토교통부/환경부</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-green-50">
                        <td className="px-4 py-3 font-semibold text-green-700">녹색골재 인증제</td>
                        <td className="px-4 py-3">친환경 생산 골재 인증 및 혜택 부여</td>
                        <td className="px-4 py-3 text-green-700 font-semibold">계획 중</td>
                        <td className="px-4 py-3">환경부</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  * 파란색 표시는 신규 또는 개정 예정 법령
                </p>
              </Card>

              {/* 예산 및 지원 규모 - Mock 데이터 안내 */}
              <Card className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-300">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">
                      ⚠️ 예산 계획 데이터 안내
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      아래 예산 계획(8.5조원)은 <span className="font-semibold text-yellow-700">Mock 데이터</span>입니다. 
                      실제 정부 정책 방향을 기반으로 시뮬레이션 목적으로 작성된 수치이며, 
                      <span className="font-semibold">실제 정부 예산 계획과 다를 수 있습니다.</span>
                    </p>
                    <p className="text-xs text-gray-600">
                      ✓ 순환골재 의무화 확대는 실제 정책입니다 (건설폐기물 재활용촉진법)
                      <br />
                      ✓ 구체적 예산 규모는 정부의 공식 발표를 참고하세요
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-white rounded-lg text-center border-2 border-yellow-200">
                    <div className="text-xs text-yellow-600 mb-1">Mock Data</div>
                    <div className="text-3xl font-semibold text-gray-400 mb-2">8.5조원</div>
                    <div className="text-sm text-gray-600 mb-1">총 예산 (참고)</div>
                    <div className="text-xs text-gray-500">(6년간)</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg text-center border-2 border-yellow-200">
                    <div className="text-xs text-yellow-600 mb-1">Mock Data</div>
                    <div className="text-3xl font-semibold text-gray-400 mb-2">5.0조원</div>
                    <div className="text-sm text-gray-600 mb-1">채취단지 개발</div>
                    <div className="text-xs text-gray-500">인프라 구축</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg text-center border-2 border-yellow-200">
                    <div className="text-xs text-yellow-600 mb-1">Mock Data</div>
                    <div className="text-3xl font-semibold text-gray-400 mb-2">2.0조원</div>
                    <div className="text-sm text-gray-600 mb-1">재활용 시설 지원</div>
                    <div className="text-xs text-gray-500">설비 투자</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg text-center border-2 border-yellow-200">
                    <div className="text-xs text-yellow-600 mb-1">Mock Data</div>
                    <div className="text-3xl font-semibold text-gray-400 mb-2">1.5조원</div>
                    <div className="text-sm text-gray-600 mb-1">R&D 및 기타</div>
                    <div className="text-xs text-gray-500">기술 개발</div>
                  </div>
                </div>
              </Card>

              {/* 실제 지원 사업 안내 */}
              <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    ✅ 실제 신청 가능한 정부 지원 사업
                    <Badge className="bg-green-600">하이콘 코리아 해당</Badge>
                  </h3>
                  <button
                    onClick={() => setShowSupportDialog(true)}
                    className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 hover:underline font-semibold"
                  >
                    <FileText className="w-4 h-4" />
                    상세 가이드 보기
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* 1. 환경부 순환자원 시설 */}
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200 hover:border-green-400 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge variant="outline" className="text-xs mb-2">1순위 추천</Badge>
                        <h4 className="font-semibold text-green-700">환경부 순환자원 시설</h4>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-center gap-2">
                        <span className="text-green-600">💰</span>
                        <span className="font-semibold">최대 30억원</span>
                      </p>
                      <p className="text-xs">총 사업비의 30~50% 지원</p>
                      <div className="pt-2 border-t border-gray-200 text-xs">
                        <p className="mb-1">✓ 순환골재 생산 시설</p>
                        <p className="mb-1">✓ 파쇄·선별·세척 설비</p>
                        <p className="text-blue-600">신청: 매년 1~2월</p>
                      </div>
                    </div>
                  </div>

                  {/* 2. 중기부 스마트공장 */}
                  <div className="p-4 bg-white rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge variant="outline" className="text-xs mb-2">2순위 추천</Badge>
                        <h4 className="font-semibold text-blue-700">스마트공장 구축</h4>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-center gap-2">
                        <span className="text-blue-600">💰</span>
                        <span className="font-semibold">최대 2억원</span>
                      </p>
                      <p className="text-xs">총 사업비의 50% 지원</p>
                      <div className="pt-2 border-t border-gray-200 text-xs">
                        <p className="mb-1">✓ 자동화 설비</p>
                        <p className="mb-1">✓ IoT·MES 시스템</p>
                        <p className="text-blue-600">신청: 연중 상시</p>
                      </div>
                    </div>
                  </div>

                  {/* 3. 환경부 녹색 융자 */}
                  <div className="p-4 bg-white rounded-lg border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge variant="outline" className="text-xs mb-2">3순위 추천</Badge>
                        <h4 className="font-semibold text-emerald-700">녹색 융자</h4>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-center gap-2">
                        <span className="text-emerald-600">💰</span>
                        <span className="font-semibold">최대 50억원</span>
                      </p>
                      <p className="text-xs">연 1.75% 저금리 융자</p>
                      <div className="pt-2 border-t border-gray-200 text-xs">
                        <p className="mb-1">✓ 친환경 시설 투자</p>
                        <p className="mb-1">✓ 최대 10년 상환</p>
                        <p className="text-blue-600">신청: 연중 상시</p>
                      </div>
                    </div>
                  </div>

                  {/* 4. 국토부 R&D */}
                  <div className="p-4 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-colors">
                    <h4 className="font-semibold text-purple-700 mb-3">건설기술 R&D</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-center gap-2">
                        <span className="text-purple-600">💰</span>
                        <span className="font-semibold">최대 10억원</span>
                      </p>
                      <p className="text-xs">정부 70% 출연 (2~3년)</p>
                      <div className="pt-2 border-t border-gray-200 text-xs">
                        <p className="mb-1">✓ 품질 개선 기술</p>
                        <p className="text-blue-600">신청: 연 1~2회 공모</p>
                      </div>
                    </div>
                  </div>

                  {/* 5. 산업부 에너지 효율 */}
                  <div className="p-4 bg-white rounded-lg border border-orange-200 hover:border-orange-400 transition-colors">
                    <h4 className="font-semibold text-orange-700 mb-3">에너지 효율 향상</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-center gap-2">
                        <span className="text-orange-600">💰</span>
                        <span className="font-semibold">최대 15억원</span>
                      </p>
                      <p className="text-xs">투자액의 30~40%</p>
                      <div className="pt-2 border-t border-gray-200 text-xs">
                        <p className="mb-1">✓ 고효율 설비 교체</p>
                        <p className="text-blue-600">신청: 매년 2~3월</p>
                      </div>
                    </div>
                  </div>

                  {/* 6. 고용부 청년 일자리 */}
                  <div className="p-4 bg-white rounded-lg border border-indigo-200 hover:border-indigo-400 transition-colors">
                    <h4 className="font-semibold text-indigo-700 mb-3">청년 일자리 지원</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-center gap-2">
                        <span className="text-indigo-600">💰</span>
                        <span className="font-semibold">월 80~100만원</span>
                      </p>
                      <p className="text-xs">1인당 최대 1,200만원 (1년)</p>
                      <div className="pt-2 border-t border-gray-200 text-xs">
                        <p className="mb-1">✓ 청년 정규직 채용</p>
                        <p className="text-blue-600">신청: 채용 후 3개월 내</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm">📞 무료 상담 가능</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">중소기업진흥공단</p>
                      <p>전화: 1357 (무료)</p>
                      <p className="text-blue-600">사업 신청 컨설팅</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">한국환경공단</p>
                      <p>전화: 032-590-4000</p>
                      <p className="text-blue-600">환경 분야 지원</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">정부24 통합센터</p>
                      <p>전화: 1588-2188</p>
                      <p className="text-blue-600">모든 지원 사업 안내</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    💡 위 지원 사업은 <span className="font-semibold text-green-700">실제 운영 중인 정부 지원 제도</span>입니다.
                  </p>
                  <button
                    onClick={() => setShowSupportDialog(true)}
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 hover:underline font-semibold"
                  >
                    <FileText className="w-4 h-4" />
                    신청 방법 및 서류 안내 상세 가이드 보기
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            </TabsContent>

            {/* 미래 전망 */}
            <TabsContent value="future" className="space-y-6">
              <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <h3 className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  2025~2030 전망
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-700">순환골재 시장 성장</h4>
                      <div className="space-y-2 text-gray-700">
                        <p>• <span className="font-semibold text-purple-600">2024년: 3천만 톤</span></p>
                        <p>• <span className="font-semibold text-purple-600">2030년 목표: 5천만 톤</span></p>
                        <p className="text-xs pt-2 border-t border-gray-200">
                          연평균 약 8~10% 성장 예상
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">천연골재 생산 감소</h4>
                      <div className="space-y-2 text-gray-700">
                        <p>• 환경규제로 지속적 감소세</p>
                        <p>• 대체재 개발 가속화</p>
                        <p className="text-xs pt-2 border-t border-gray-200">
                          순환골재·인공골재로 대체
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold mb-3">주요 성장 동력</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 text-xs font-semibold">1</span>
                        </div>
                        <div>
                          <p className="font-semibold text-green-700">탄소중립 정책</p>
                          <p className="text-xs text-gray-600 mt-1">
                            건설 분야 탄소배출 감축 목표로 순환골재 수요 증가
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 text-xs font-semibold">2</span>
                        </div>
                        <div>
                          <p className="font-semibold text-blue-700">스마트 기술 도입</p>
                          <p className="text-xs text-gray-600 mt-1">
                            AI·IoT 활용 골재 생산 효율화 및 품질 향상
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-purple-600 text-xs font-semibold">3</span>
                        </div>
                        <div>
                          <p className="font-semibold text-purple-700">순환경제 확산</p>
                          <p className="text-xs text-gray-600 mt-1">
                            ESG 경영 확산으로 재활용 자재 선호도 증가
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  기업 대응 전략
                </h3>

                {/* 전략 개요 */}
                <div className="space-y-4 text-sm mb-6">
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                    <p className="text-gray-700">
                      정책 변화와 시장 요구에 선제적으로 대응하여 <span className="font-semibold text-blue-700">지속가능한 성장 기반</span>을 구축합니다.
                    </p>
                  </div>

                  {/* 전략 1: 기술 경쟁력 강화 */}
                  <div className="border border-blue-200 rounded-lg overflow-hidden">
                    <div className="flex items-start gap-3 p-4 bg-blue-50">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-semibold">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 text-blue-900">고품질 순환골재 생산 기술 확보</h4>
                        <p className="text-gray-700 mb-3">
                          첨단 파쇄·선별 기술 도입으로 천연골재 수준의 품질 확보
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <h5 className="font-semibold text-gray-900 mb-2">📋 실행 방안</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>3단계 파쇄 시스템:</strong> 1차(조파쇄) → 2차(중파쇄) → 3차(미분쇄) 공정 도입</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>AI 선별 시스템:</strong> 이미지 인식 기반 불순물 자동 제거 (정확도 98% 이상)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>KS 품질기준 준수:</strong> 밀도, 흡수율, 마모율 등 전 항목 정기 검사</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>품질 안정화:</strong> 원료 특성별 최적 배합비 데이터베이스 구축</span>
                        </li>
                      </ul>
                      <div className="mt-3 p-3 bg-gray-50 rounded">
                        <p className="text-xs text-gray-600">
                          <strong>투자 계획:</strong> 설비 투자 약 30억원 (3년간) | <strong>목표:</strong> KS 인증 획득 및 유지
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 전략 2: ESG 경영 */}
                  <div className="border border-green-200 rounded-lg overflow-hidden">
                    <div className="flex items-start gap-3 p-4 bg-green-50">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-semibold">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 text-green-900">친환경 인증 및 ESG 경영 강화</h4>
                        <p className="text-gray-700 mb-3">
                          환경 규제 준수를 넘어 지속가능경영 선도 기업으로 도약
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <h5 className="font-semibold text-gray-900 mb-2">📋 실행 방안</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>ISO 14001 인증:</strong> 환경경영시스템 구축 및 유지</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>탄소배출 감축:</strong> 2030년까지 탄소중립 달성 로드맵 수립</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>친환경 에너지:</strong> 태양광 발전 설비 설치 (전력 자급률 30% 목표)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>ESG 평가:</strong> 한국기업지배구조원(KCGS) 평가 B등급 이상 목표</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>지역사회 기여:</strong> 환경교육, 일자리 창출 등 사회공헌 활동</span>
                        </li>
                      </ul>
                      <div className="mt-3 p-3 bg-gray-50 rounded">
                        <p className="text-xs text-gray-600">
                          <strong>기대 효과:</strong> 대기업 ESG 협력사 선정, 공공입찰 가점, 친환경 투자 유치
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 전략 3: 디지털 전환 */}
                  <div className="border border-purple-200 rounded-lg overflow-hidden">
                    <div className="flex items-start gap-3 p-4 bg-purple-50">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-semibold">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 text-purple-900">디지털 전환 및 스마트 팩토리</h4>
                        <p className="text-gray-700 mb-3">
                          IoT, AI, 빅데이터 기술로 생산성 향상 및 원가 절감
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <h5 className="font-semibold text-gray-900 mb-2">📋 실행 방안</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span><strong>실시간 모니터링:</strong> 생산량, 품질, 설비 상태 통합 대시보드 구축</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span><strong>AI 품질 예측:</strong> 원료 특성 기반 최종 품질 사전 예측 시스템</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span><strong>수요 예측 모델:</strong> 건설 경기, 계절성 반영 생산 계획 최적화</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span><strong>자동화 설비:</strong> 컨베이어, 로봇 팔레타이저 등 도입으로 인력 절감</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span><strong>블록체인 추적:</strong> 원료 입고부터 제품 출하까지 전 과정 기록</span>
                        </li>
                      </ul>
                      <div className="mt-3 p-3 bg-gray-50 rounded">
                        <p className="text-xs text-gray-600">
                          <strong>ROI 예상:</strong> 생산성 +25%, 불량률 -40%, 인건비 -20% (3년 내)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 전략 4: 파트너십 */}
                  <div className="border border-orange-200 rounded-lg overflow-hidden">
                    <div className="flex items-start gap-3 p-4 bg-orange-50">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-semibold">
                        4
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 text-orange-900">전략적 파트너십 및 유통망 구축</h4>
                        <p className="text-gray-700 mb-3">
                          안정적 원료 확보 및 판매처 다각화로 경영 리스크 최소화
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <h5 className="font-semibold text-gray-900 mb-2">📋 실행 방안</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span><strong>건설사 MOU:</strong> 대형 건설사와 장기 공급 계약 체결 (최소 3년)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span><strong>폐기물 수집망:</strong> 해체업체, 철거업체와 원료 안정 공급 협약</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span><strong>공공기관 납품:</strong> 국가종합전자조달시스템(나라장터) 우수업체 등록</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span><strong>협회 가입:</strong> 순환골재협회, 건설자재협회 등 네트워크 강화</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span><strong>온라인 마케팅:</strong> B2B 플랫폼 입점, 자체 홈페이지 개선</span>
                        </li>
                      </ul>
                      <div className="mt-3 p-3 bg-gray-50 rounded">
                        <p className="text-xs text-gray-600">
                          <strong>목표:</strong> 안정적 원료 확보율 80% 이상, 고정 거래처 20개 이상 확보
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 전략 5: 리스크 관리 */}
                  <div className="border border-red-200 rounded-lg overflow-hidden">
                    <div className="flex items-start gap-3 p-4 bg-red-50">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-semibold">
                        5
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 text-red-900">리스크 관리 및 위기 대응</h4>
                        <p className="text-gray-700 mb-3">
                          외부 환경 변화에 유연하게 대응할 수 있는 체계 구축
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <h5 className="font-semibold text-gray-900 mb-2">📋 실행 방안</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>가격 변동 대응:</strong> 천연골재 가격 모니터링 및 탄력적 가격 정책</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>재고 관리:</strong> 적정 재고 수준 유지 (1개월분 생산량)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>법규 대응:</strong> 정책 변화 모니터링 및 선제적 시설 개선</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>안전 관리:</strong> 산업재해 제로 목표, 정기 안전교육 실시</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>재무 건전성:</strong> 부채비율 200% 이하 유지, 유동성 확보</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 단계별 로드맵 */}
                  <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-50">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-gray-700" />
                        단계별 실행 로드맵
                      </h4>
                    </div>
                    <div className="p-4 bg-white">
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <h5 className="font-semibold text-blue-900 mb-2">📍 1단계: 기반 구축 (1년차)</h5>
                          <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• 핵심 설비 투자 및 품질 관리 시스템 구축</li>
                            <li>• ISO 14001 인증 추진</li>
                            <li>• 주요 건설사 3개사와 MOU 체결</li>
                            <li>• 실시간 모니터링 대시보드 개발</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <h5 className="font-semibold text-green-900 mb-2">📍 2단계: 성장 가속화 (2년차)</h5>
                          <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• KS 인증 획득 및 생산 품질 안정화</li>
                            <li>• AI 선별 시스템 도입 및 자동화 확대</li>
                            <li>• ESG 평가 B등급 달성</li>
                            <li>• 공공기관 납품 실적 확보</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <h5 className="font-semibold text-purple-900 mb-2">📍 3단계: 시장 선도 (3년차 이후)</h5>
                          <ul className="text-sm text-gray-700 space-y-1 ml-4">
                            <li>• 연간 생산량 100만 톤 돌파</li>
                            <li>• 수도권 주요 건설사 정기 공급 계약 체결</li>
                            <li>• 화성시 및 경기남부 골재 자급률 향상 기여</li>
                            <li>• 경기도 순환골재 우수 생산업체 지정</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* KPI 지표 */}
                  <div className="border border-indigo-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-indigo-50">
                      <h4 className="font-semibold text-indigo-900 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5" />
                        핵심 성과 지표 (KPI)
                      </h4>
                    </div>
                    <div className="p-4 bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="font-semibold text-gray-900 mb-1">📊 생산 효율</p>
                          <p className="text-gray-700">• 설비 가동률 85% 이상</p>
                          <p className="text-gray-700">• 불량률 5% 이하</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="font-semibold text-gray-900 mb-1">💰 재무 건전성</p>
                          <p className="text-gray-700">• 영업이익률 15% 이상</p>
                          <p className="text-gray-700">• 부채비율 200% 이하</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="font-semibold text-gray-900 mb-1">🌱 환경 성과</p>
                          <p className="text-gray-700">• CO₂ 배출량 전년 대비 -10%</p>
                          <p className="text-gray-700">• 재활용률 95% 이상</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="font-semibold text-gray-900 mb-1">🤝 고객 만족</p>
                          <p className="text-gray-700">• 재구매율 80% 이상</p>
                          <p className="text-gray-700">• 클레임 발생률 2% 이하</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 주의사항 */}
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-xs text-gray-600">
                      ⚠️ <strong>참고사항:</strong> 투자 금액, ROI, KPI 목표치 등은 예시 데이터입니다. 
                      실제 사업 계획 수립 시 현장 여건, 재무 상황, 시장 환경을 고려한 정밀한 분석이 필요합니다.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
                <h3 className="mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  하이콘코리아의 비전
                </h3>
                <p className="text-sm leading-relaxed mb-4">
                  하이콘코리아는 첨단 기술과 친환경 공정을 통해 <span className="font-semibold">국내 최고 품질의 순환골재</span>를 생산하며, 
                  <span className="font-semibold"> 2030년까지 탄소중립</span>을 실현하여 지속가능한 건설산업 생태계 구축에 기여하겠습니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white/20 rounded p-3">
                    <p className="font-semibold mb-1">연간 생산 목표</p>
                    <p className="text-2xl font-bold">50만 톤</p>
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <p className="font-semibold mb-1">CO₂ 감축량</p>
                    <p className="text-2xl font-bold">2만 톤/년</p>
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <p className="font-semibold mb-1">재활용률</p>
                    <p className="text-2xl font-bold">95%+</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          )}
        </motion.div>
      </div>

      {/* 지원 사업 다이얼로그 */}
      <SupportProgramsDialog 
        open={showSupportDialog}
        onOpenChange={setShowSupportDialog}
      />
    </div>
  );
}

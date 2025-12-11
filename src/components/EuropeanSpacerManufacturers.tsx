import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Globe, Phone, Mail, TrendingUp, AlertCircle, CheckCircle2, Factory, MapPin, ExternalLink, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useState } from 'react';

// 실제 기계설비 제조사 데이터 (확실한 근거가 있는 회사만 포함)
const manufacturersData = [
  // 기존 설비 제조사 (확인된 것만)
  {
    company_name: "OPM Stampi Srl",
    country: "Italy",
    flag: "🇮🇹",
    main_products: "Concrete spacer machines, high-productivity equipment",
    equipment_types: "Automatic spacer press, eccentric press system, electronic feeder, motorized coiler",
    capacity: "100-130 pcs/min (200-250mm); 40 pcs/min standard",
    price_range: "$50k-$150k (est.)",
    delivery_reference: "Remote monitoring, CE certified",
    korea_sales: "To be confirmed",
    contact: "opmstampi.com/en",
    website: "https://opmstampi.com/en",
    priority: "high",
    notes: "고속 생산 가능, 원격 모니터링 지원",
    category: "spacer_equipment"
  },
  {
    company_name: "Weckenmann GmbH",
    country: "Germany",
    flag: "🇩🇪",
    main_products: "Precast concrete systems, carousel technology, automated equipment",
    equipment_types: "Carousel systems, 25-ton cranes, automated casting lines",
    capacity: "Industrial-scale",
    price_range: "Not disclosed",
    delivery_reference: "Minnesota install 2015",
    korea_sales: "To be confirmed",
    contact: "Via IAARC, NPCA",
    website: "https://www.weckenmann.de",
    priority: "high",
    notes: "대규모 자동화 설비 전문, 북미 실적 보유",
    category: "precast_equipment"
  },
  // 새로 추가 - 독일 설비 제조사
  {
    company_name: "MASA Group",
    country: "Germany",
    flag: "🇩🇪",
    main_products: "Concrete block making machines, precast equipment, automation systems",
    equipment_types: "Block making machines, paver production lines, fully automated systems",
    capacity: "Industrial-scale, high-volume production",
    price_range: "Not disclosed",
    delivery_reference: "Global installations, 100+ countries",
    korea_sales: "To be confirmed",
    contact: "masa-group.com",
    website: "https://www.masa-group.com",
    priority: "high",
    notes: "독일 최대 콘크리트 설비 제조사, 글로벌 실적",
    category: "block_equipment"
  },
  {
    company_name: "Rekers",
    country: "Germany",
    flag: "🇩🇪",
    main_products: "Concrete block machines, paver production systems",
    equipment_types: "Hydraulic block machines, fully automated production lines",
    capacity: "High-capacity production",
    price_range: "Not disclosed",
    delivery_reference: "European and global installations",
    korea_sales: "To be confirmed",
    contact: "rekers.de",
    website: "https://www.rekers.de",
    priority: "high",
    notes: "독일 전통 설비 제조사, 유럽 전역 공급",
    category: "block_equipment"
  },
  {
    company_name: "Knauer Engineering",
    country: "Germany",
    flag: "🇩🇪",
    main_products: "Block making machines, mobile concrete equipment",
    equipment_types: "MultiMaster mobile systems, stationary block machines",
    capacity: "Mobile and stationary solutions",
    price_range: "Not disclosed",
    delivery_reference: "European market focus",
    korea_sales: "To be confirmed",
    contact: "knauer-engineering.com",
    website: "https://www.knauer-engineering.com",
    priority: "medium",
    notes: "모바일 콘크리트 설비 전문",
    category: "block_equipment"
  },
  {
    company_name: "HESS Group (Topwerk)",
    country: "Germany",
    flag: "🇩🇪",
    main_products: "Concrete block and paver manufacturing systems",
    equipment_types: "Multimat RH series, automated production systems",
    capacity: "High-volume industrial production",
    price_range: "Not disclosed",
    delivery_reference: "Global installations",
    korea_sales: "To be confirmed",
    contact: "topwerk.com",
    website: "https://www.topwerk.com",
    priority: "high",
    notes: "HESS Group 계열, 대형 생산 시스템",
    category: "block_equipment"
  },
  {
    company_name: "Progress Group",
    country: "Germany",
    flag: "🇩🇪",
    main_products: "Precast concrete production systems, automation technology",
    equipment_types: "Automated casting systems, material handling, production management",
    capacity: "Complete turnkey solutions",
    price_range: "Not disclosed",
    delivery_reference: "Global precast industry leader",
    korea_sales: "To be confirmed",
    contact: "progress.group",
    website: "https://www.progress.group",
    priority: "high",
    notes: "프리캐스트 자동화 시스템 글로벌 리더",
    category: "precast_equipment"
  },
  // 핀란드
  {
    company_name: "Elematic",
    country: "Finland",
    flag: "🇫🇮",
    main_products: "Precast concrete production equipment, automation systems",
    equipment_types: "Hollow-core systems, wall element lines, circulation systems",
    capacity: "Industrial precast solutions",
    price_range: "Not disclosed",
    delivery_reference: "60+ countries, market leader",
    korea_sales: "To be confirmed",
    contact: "elematic.com",
    website: "https://www.elematic.com",
    priority: "high",
    notes: "프리캐스트 설비 세계 1위, 60개국 공급",
    category: "precast_equipment"
  },
  // 터키 설비 제조사
  {
    company_name: "Elkon",
    country: "Turkey",
    flag: "🇹🇷",
    main_products: "Concrete batching plants, block making machines",
    equipment_types: "Paver block machines, mobile batching plants, stationary plants",
    capacity: "Various capacity ranges",
    price_range: "Competitive pricing",
    delivery_reference: "130+ countries",
    korea_sales: "To be confirmed",
    contact: "elkon.net",
    website: "https://www.elkon.net",
    priority: "medium",
    notes: "터키 최대 콘크리트 설비 수출사, 130개국 공급",
    category: "block_equipment"
  },
  {
    company_name: "Merkon Makina",
    country: "Turkey",
    flag: "🇹🇷",
    main_products: "Concrete block machines, batching plants",
    equipment_types: "Fully automatic block machines, semi-automatic systems",
    capacity: "Multiple capacity options",
    price_range: "Competitive pricing",
    delivery_reference: "90+ countries",
    korea_sales: "To be confirmed",
    contact: "merkonmakina.com",
    website: "https://www.merkonmakina.com",
    priority: "medium",
    notes: "터키 주요 설비 제조사, 가격 경쟁력",
    category: "block_equipment"
  },
  {
    company_name: "Constmach",
    country: "Turkey",
    flag: "🇹🇷",
    main_products: "Concrete batching plants, block making machines",
    equipment_types: "Mobile and stationary batching plants, block machines",
    capacity: "Various production capacities",
    price_range: "Budget to mid-range",
    delivery_reference: "100+ countries",
    korea_sales: "To be confirmed",
    contact: "constmach.com",
    website: "https://www.constmach.com",
    priority: "medium",
    notes: "터키 설비 제조사, 모바일 시스템 강점",
    category: "block_equipment"
  },
  {
    company_name: "Beyazlı Group",
    country: "Turkey",
    flag: "🇹🇷",
    main_products: "Concrete production equipment, automation systems",
    equipment_types: "Block machines, batching plants, material handling",
    capacity: "Industrial solutions",
    price_range: "Not disclosed",
    delivery_reference: "Regional and international",
    korea_sales: "To be confirmed",
    contact: "beyazligroup.com",
    website: "https://beyazligroup.com",
    priority: "low",
    notes: "터키 종합 설비 제조사",
    category: "block_equipment"
  },
  {
    company_name: "Globmac",
    country: "Turkey",
    flag: "🇹🇷",
    main_products: "Concrete block making machines",
    equipment_types: "Automatic and semi-automatic block machines",
    capacity: "Various capacities",
    price_range: "Competitive pricing",
    delivery_reference: "International sales",
    korea_sales: "To be confirmed",
    contact: "globmac.com",
    website: "https://www.globmac.com",
    priority: "low",
    notes: "터키 블록 설비 전문",
    category: "block_equipment"
  },
  // 이탈리아
  {
    company_name: "Imer Group",
    country: "Italy",
    flag: "🇮🇹",
    main_products: "Concrete block machines, vibro-presses",
    equipment_types: "Vibroformatrici (vibrating presses), automated production lines",
    capacity: "Industrial-scale production",
    price_range: "Not disclosed",
    delivery_reference: "European installations",
    korea_sales: "To be confirmed",
    contact: "imergroup.com",
    website: "https://www.imergroup.com",
    priority: "medium",
    notes: "이탈리아 진동 프레스 전문 제조사",
    category: "block_equipment"
  },
  {
    company_name: "Alfi Technologies",
    country: "Italy",
    flag: "🇮🇹",
    main_products: "Concrete production equipment, automation systems",
    equipment_types: "Batching systems, block machines, production management",
    capacity: "Complete production solutions",
    price_range: "Not disclosed",
    delivery_reference: "European market",
    korea_sales: "To be confirmed",
    contact: "alfi-technologies.com",
    website: "https://alfi-technologies.com",
    priority: "medium",
    notes: "이탈리아 콘크리트 자동화 시스템",
    category: "block_equipment"
  },
  // 미국
  {
    company_name: "Besser Company",
    country: "USA",
    flag: "🇺🇸",
    main_products: "Concrete block machines, masonry equipment",
    equipment_types: "Production machines, material handling, complete systems",
    capacity: "High-volume industrial production",
    price_range: "Premium pricing",
    delivery_reference: "Global installations, 100+ years",
    korea_sales: "To be confirmed",
    contact: "besser.com",
    website: "https://besser.com",
    priority: "high",
    notes: "미국 최대 콘크리트 설비 제조사, 100년 역사",
    category: "block_equipment"
  },
  // 호주
  {
    company_name: "Neumann Steel",
    country: "Australia",
    flag: "🇦🇺",
    main_products: "Injection moulding equipment, concrete production systems",
    equipment_types: "Injection moulding machines, automated systems",
    capacity: "Industrial production",
    price_range: "Not disclosed",
    delivery_reference: "Asia-Pacific region",
    korea_sales: "To be confirmed",
    contact: "neumannsteel.com.au",
    website: "https://neumannsteel.com.au",
    priority: "low",
    notes: "호주 사출 성형 설비 제조사",
    category: "specialized_equipment"
  }
];

// 국가별 집계
const countryStats = manufacturersData.reduce((acc, company) => {
  acc[company.country] = (acc[company.country] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

// 우선순위별 집계
const priorityStats = manufacturersData.reduce((acc, company) => {
  acc[company.priority] = (acc[company.priority] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

export function EuropeanSpacerManufacturers() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const copyToClipboard = (url: string, companyName: string) => {
    // 대체 방법: textarea를 사용한 복사 (모든 환경에서 작동)
    const textArea = document.createElement('textarea');
    textArea.value = url;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopiedUrl(companyName);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
      // 실패 시 사용자에게 수동 복사 안내
      alert(`URL 복사 실패. 수동으로 복사해주세요:\n${url}`);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-600 text-white">최우선</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-600 text-white">검토 필요</Badge>;
      case 'low':
        return <Badge className="bg-gray-600 text-white">참고용</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* 헤더 */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl mb-3">콘크리트 제조 설비 제조사 조사 보고서</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                글로벌 주요 콘크리트 제조 설비 제조사 18개사 상세 분석
              </CardDescription>
            </div>
            <Globe className="h-16 w-16 text-white/30" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">{manufacturersData.length}</div>
              <div className="text-sm text-blue-100">총 제조사 수</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">{Object.keys(countryStats).length}</div>
              <div className="text-sm text-blue-100">국가 수</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">{priorityStats['high']}</div>
              <div className="text-sm text-blue-100">최우선 타겟</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">2025.11</div>
              <div className="text-sm text-blue-100">조사 완료일</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 국가별 통계 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-blue-600" />
            국가별 제조사 분포
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(countryStats)
              .sort((a, b) => b[1] - a[1])
              .map(([country, count]) => {
                const flag = manufacturersData.find(m => m.country === country)?.flag || '🌍';
                return (
                  <div key={country} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{flag}</span>
                      <span>{country}</span>
                    </div>
                    <Badge variant="secondary">{count}개사</Badge>
                  </div>
                );
              })}
          </div>
        </CardContent>
      </Card>

      {/* 최우선 타겟 제조사 */}
      <Card className="border-2 border-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-red-600" />
            최우선 타겟 제조사 ({priorityStats['high']}개사)
          </CardTitle>
          <CardDescription>
            하이콘 코리아가 우선적으로 접촉해야 할 제조사
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturersData
              .filter(company => company.priority === 'high')
              .map((company, index) => (
                <Card key={index} className="border-2 border-red-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{company.flag}</span>
                      {getPriorityBadge(company.priority)}
                    </div>
                    <CardTitle className="text-xl">{company.company_name}</CardTitle>
                    <CardDescription className="text-sm">{company.country}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">주요 제품</div>
                      <div className="text-sm">{company.main_products}</div>
                    </div>
                    <Separator />
                    <div>
                      <div className="text-sm text-gray-600 mb-1">설비 종류</div>
                      <div className="text-sm">{company.equipment_types}</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-xs text-gray-600 mb-1">생산 능력</div>
                        <div className="text-sm font-semibold">{company.capacity}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">가격대</div>
                        <div className="text-sm font-semibold">{company.price_range}</div>
                      </div>
                    </div>
                    <Separator />
                    <div className="bg-blue-50 p-3 rounded">
                      <div className="text-xs text-gray-600 mb-1">특징</div>
                      <div className="text-sm">{company.notes}</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Globe className="h-4 w-4" />
                      <span className="truncate">{company.contact}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* 전체 제조사 목록 (테이블 형식) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Factory className="h-6 w-6 text-blue-600" />
            전체 제조사 비교표
          </CardTitle>
          <CardDescription>
            {manufacturersData.length}개 제조사 상세 정보 일람 (모든 회사는 실제 기계설비 제조사)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 text-left whitespace-nowrap">우선순위</th>
                  <th className="p-3 text-left whitespace-nowrap">국가</th>
                  <th className="p-3 text-left whitespace-nowrap">회사명</th>
                  <th className="p-3 text-left">주요 제품</th>
                  <th className="p-3 text-left">설비 종류</th>
                  <th className="p-3 text-left whitespace-nowrap">생산 능력</th>
                  <th className="p-3 text-left whitespace-nowrap">가격대</th>
                  <th className="p-3 text-left">납품 실적</th>
                  <th className="p-3 text-left">연락처</th>
                </tr>
              </thead>
              <tbody>
                {manufacturersData
                  .sort((a, b) => {
                    const priorityOrder = { high: 0, medium: 1, low: 2 };
                    return priorityOrder[a.priority as keyof typeof priorityOrder] - priorityOrder[b.priority as keyof typeof priorityOrder];
                  })
                  .map((company, index) => (
                    <tr 
                      key={index} 
                      className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                    >
                      <td className="p-3">
                        {getPriorityBadge(company.priority)}
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <span className="text-xl">{company.flag}</span>
                          <span className="text-xs text-gray-600">{company.country}</span>
                        </div>
                      </td>
                      <td className="p-3 font-semibold whitespace-nowrap">{company.company_name}</td>
                      <td className="p-3 text-xs max-w-xs">{company.main_products}</td>
                      <td className="p-3 text-xs max-w-xs">{company.equipment_types}</td>
                      <td className="p-3 text-xs">{company.capacity}</td>
                      <td className="p-3 text-xs">{company.price_range}</td>
                      <td className="p-3 text-xs max-w-xs">{company.delivery_reference}</td>
                      <td className="p-3">
                        {company.website ? (
                          <div className="space-y-1">
                            <a 
                              href={company.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                            >
                              <Globe className="h-3 w-3 flex-shrink-0" />
                              <span className="break-all">{company.website}</span>
                              <ExternalLink className="h-3 w-3 flex-shrink-0 ml-1" />
                            </a>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Globe className="h-3 w-3" />
                            <span className="truncate max-w-[150px]">{company.contact}</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 상세 정보 카드 (검토 필요 + 참고용) */}
      <div className="space-y-6">
        {/* 검토 필요 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
              검토 필요 제조사 ({priorityStats['medium']}개사)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {manufacturersData
                .filter(company => company.priority === 'medium')
                .map((company, index) => (
                  <Card key={index} className="border border-yellow-200 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">{company.flag}</span>
                            <CardTitle className="text-lg">{company.company_name}</CardTitle>
                          </div>
                          {getPriorityBadge(company.priority)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">주요 제품:</span> {company.main_products}
                      </div>
                      <div>
                        <span className="text-gray-600">특징:</span> {company.notes}
                      </div>
                      <div className="flex items-center gap-1 text-blue-600 text-xs">
                        <Globe className="h-3 w-3" />
                        {company.contact}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* 참고용 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-gray-600" />
              참고용 제조사 ({priorityStats['low']}개사)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {manufacturersData
                .filter(company => company.priority === 'low')
                .map((company, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{company.flag}</span>
                      <div>
                        <div className="font-semibold">{company.company_name}</div>
                        <div className="text-xs text-gray-600">{company.main_products}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getPriorityBadge(company.priority)}
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 다음 단계 액션 플랜 */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            다음 단계: 실행 계획
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>1</div>
              <div className="flex-1">
                <div className="font-semibold mb-1">최우선 타겟 3개사 접촉</div>
                <div className="text-sm text-gray-700">
                  OPM Stampi, MAX FRANK, Nevoga에 문의 이메일 발송 (한국어 + 영어)
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>2</div>
              <div className="flex-1">
                <div className="font-semibold mb-1">KOTRA 지원 프로그램 활용</div>
                <div className="text-sm text-gray-700">
                  독일/이탈리아/오스트리아 무역관에 제조사 실사 요청 (무료)
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-purple-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>3</div>
              <div className="flex-1">
                <div className="font-semibold mb-1">bauma 2025 전시회 참가 (4월, 뮌헨)</div>
                <div className="text-sm text-gray-700">
                  독일/이탈리아 제조사 직접 미팅, 수출바우처로 1,260만원 지원
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-orange-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>4</div>
              <div className="flex-1">
                <div className="font-semibold mb-1">최종 후보 1-2개사 선정 후 OPS 실사</div>
                <div className="text-sm text-gray-700">
                  300-500만원 투자하여 재무제표, 계약서, 공장 방문 등 심층 검증
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="bg-green-600 text-white rounded-lg p-4">
            <div className="font-semibold mb-2">💰 총 예상 비용</div>
            <div className="text-sm space-y-1">
              <div>• 무료 정보 수집: 0원 (KOTRA 기본 서비스)</div>
              <div>• bauma 전시회: 자부담 540만원 (정부 지원 1,260만원)</div>
              <div>• OPS 실사: 300-500만원</div>
              <div className="pt-2 border-t border-green-400 mt-2">
                <strong>총 투자: 840-1,040만원 / 정부 지원: 1,260만원 / 총 효과: 2,100-2,300만원 규모 활동!</strong>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 참고 문서 링크 */}
      <Card className="bg-blue-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="flex-1">
              <div className="font-semibold mb-2">📚 관련 문서</div>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• <strong>재생골재 스페이서 제조 + 유럽 화학사 가이드</strong>: 재생골재를 활용한 스페이서 제조 공정 전체 가이드</div>
                <div>• <strong>철근 스페이서 설비 조사 실무 가이드</strong>: 독일 설비 제조사 4개사 상세 분석 및 턴키 프로젝트 가이드</div>
                <div>• <strong>유럽 설비 조달 가이드</strong>: 검색 키워드 및 접근 전략</div>
                <div className="pt-2 text-xs text-gray-600">
                  ※ 모든 문서는 IR 자료실에서 확인 가능합니다
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 모든 웹사이트 링크 목록 - Figma Design용 */}
      <Card className="border-2 border-purple-500">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-purple-600" />
                전체 웹사이트 링크 목록
              </CardTitle>
              <CardDescription className="mt-2">
                Figma Design에서 사용하기 위한 전체 URL 목록 (복사 버튼 클릭 또는 텍스트 선택하여 복사)
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-yellow-800">
                <div className="font-semibold mb-1">💡 Figma Design으로 내보낼 때 활용 방법</div>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li><strong>방법 1:</strong> 복사 버튼으로 URL 복사 → Figma Prototype에서 "Open Link" 인터랙션 추가</li>
                  <li><strong>방법 2:</strong> 아래 URL을 직접 선택하여 복사 → 문서나 이메일에 붙여넣기</li>
                  <li><strong>방법 3:</strong> Figma Make 웹 앱에서는 바로 클릭하여 웹사이트 방문 가능</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* 최우선 타겟 */}
            <div>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-red-500">
                <Badge className="bg-red-600 text-white">최우선 타겟 ({priorityStats['high']}개사)</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {manufacturersData
                  .filter(company => company.priority === 'high' && company.website)
                  .sort((a, b) => a.company_name.localeCompare(b.company_name))
                  .map((company, index) => (
                    <div key={index} className="border border-red-200 rounded-lg p-4 bg-red-50/50 hover:bg-red-50 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-lg">{company.flag}</span>
                          <div>
                            <div className="font-semibold text-sm">{company.company_name}</div>
                            <div className="text-xs text-gray-600">{company.country}</div>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-shrink-0 h-8"
                          onClick={() => copyToClipboard(company.website!, company.company_name)}
                        >
                          {copiedUrl === company.company_name ? (
                            <>
                              <Check className="h-3 w-3 mr-1" />
                              복사됨
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3 mr-1" />
                              복사
                            </>
                          )}
                        </Button>
                      </div>
                      <div className="bg-white rounded border border-red-200 p-2">
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline break-all flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3 flex-shrink-0" />
                          <span className="select-all">{company.website}</span>
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* 검토 필요 */}
            <div>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-yellow-500">
                <Badge className="bg-yellow-600 text-white">검토 필요 ({priorityStats['medium']}개사)</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {manufacturersData
                  .filter(company => company.priority === 'medium' && company.website)
                  .sort((a, b) => a.company_name.localeCompare(b.company_name))
                  .map((company, index) => (
                    <div key={index} className="border border-yellow-200 rounded-lg p-4 bg-yellow-50/50 hover:bg-yellow-50 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-lg">{company.flag}</span>
                          <div>
                            <div className="font-semibold text-sm">{company.company_name}</div>
                            <div className="text-xs text-gray-600">{company.country}</div>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-shrink-0 h-8"
                          onClick={() => copyToClipboard(company.website!, company.company_name)}
                        >
                          {copiedUrl === company.company_name ? (
                            <>
                              <Check className="h-3 w-3 mr-1" />
                              복사됨
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3 mr-1" />
                              복사
                            </>
                          )}
                        </Button>
                      </div>
                      <div className="bg-white rounded border border-yellow-200 p-2">
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline break-all flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3 flex-shrink-0" />
                          <span className="select-all">{company.website}</span>
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* 참고용 */}
            <div>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-gray-500">
                <Badge className="bg-gray-600 text-white">참고용 ({priorityStats['low']}개사)</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {manufacturersData
                  .filter(company => company.priority === 'low' && company.website)
                  .sort((a, b) => a.company_name.localeCompare(b.company_name))
                  .map((company, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50/50 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-lg">{company.flag}</span>
                          <div>
                            <div className="font-semibold text-sm">{company.company_name}</div>
                            <div className="text-xs text-gray-600">{company.country}</div>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-shrink-0 h-8"
                          onClick={() => copyToClipboard(company.website!, company.company_name)}
                        >
                          {copiedUrl === company.company_name ? (
                            <>
                              <Check className="h-3 w-3 mr-1" />
                              복사됨
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3 mr-1" />
                              복사
                            </>
                          )}
                        </Button>
                      </div>
                      <div className="bg-white rounded border border-gray-200 p-2">
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline break-all flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3 flex-shrink-0" />
                          <span className="select-all">{company.website}</span>
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* 전체 URL 텍스트 목록 */}
          <Separator className="my-6" />
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-300">
            <div className="font-semibold mb-3 flex items-center gap-2">
              <Copy className="h-4 w-4 text-gray-600" />
              전체 URL 텍스트 목록 (한 번에 복사용)
            </div>
            <div className="bg-white rounded border border-gray-300 p-3 max-h-60 overflow-y-auto">
              <pre className="text-xs select-all whitespace-pre-wrap font-mono">
{manufacturersData
  .filter(c => c.website)
  .sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority as keyof typeof priorityOrder] - priorityOrder[b.priority as keyof typeof priorityOrder];
  })
  .map((c, i) => `${i + 1}. ${c.company_name} (${c.flag} ${c.country})\n   ${c.website}`)
  .join('\n\n')}
              </pre>
            </div>
            <div className="mt-3 text-xs text-gray-600">
              💡 위 텍스트를 드래그하여 전체 선택 후 복사하실 수 있습니다
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Globe, Mail, TrendingUp, AlertCircle, CheckCircle2, Factory, MapPin, ExternalLink, FileText, Package, Truck, ClipboardCheck, Beaker, ShieldCheck, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

// Perplexity 조사 데이터
const manufacturersData = [
  {
    company_name: "Sika",
    country: "스위스",
    flag: "🇨🇭",
    main_products: "슈퍼플라스틱라이저, 방수, 섬유 등",
    advantages: "세계 1위, 풀라인업, 글로벌 시공, 환경친화",
    global_track: "100개국+ 시공, 글로벌 대형 프로젝트",
    certifications: "ISO, CE, 환경인증",
    tech_support: "글로벌 지사, 온라인 지원 가능",
    website: "https://www.sika.com",
    priority: "high",
    notes: "세계 1위 첨가제 전문기업, 기술지원 최상급"
  },
  {
    company_name: "BASF",
    country: "독일",
    flag: "🇩🇪",
    main_products: "슈퍼플라스틱라이저, 기능첨가제",
    advantages: "화학기술 선두, 강도/내구성, 대형 공사 풍부",
    global_track: "유럽·미국 대형 인프라 실적 다수",
    certifications: "ISO, REACH, 환���인증",
    tech_support: "한국지사 있음 (서울), 영문/한글 상담",
    website: "https://www.master-builders-solutions.com",
    priority: "high",
    notes: "한국 지사 보유, 1,240명 고용, 국내 매출 €1.1B",
    korea_office: {
      name: "한국바스프(주)",
      address: "서울특별시 중구 세종대로 39, 대한상공회의소빌딩 15~16층",
      phone: "02-3707-3100",
      established: "1954년",
      employees: "1,240명 (2024년)",
      revenue: "€1.1 billion (2024년)",
      facilities: "울산, 여수, 안산, 군산, 예산, 온산, 김천 등"
    }
  },
  {
    company_name: "MAPEI",
    country: "이탈리아",
    flag: "🇮🇹",
    main_products: "내구+방수+조강제",
    advantages: "내구성, 경제성, 맞춤 솔루션",
    global_track: "유럽, 미주, 동남아 실적",
    certifications: "ISO, CE",
    tech_support: "국내 수입사, 영문 지원",
    website: "https://www.mapei.com",
    priority: "high",
    notes: "경제성+내구성 균형, 커스터마이즈 가능"
  },
  {
    company_name: "Fosroc",
    country: "영국",
    flag: "🇬🇧",
    main_products: "내염/수축·방수 등",
    advantages: "환경·내구·내화 특화, 글로벌 실적",
    global_track: "중동, 유럽, 동남아, 아프리카",
    certifications: "ISO, 환경인증",
    tech_support: "중동/아시아 지점",
    website: "https://www.fosroc.com",
    priority: "high",
    notes: "특수 현장(내염, 수축, 방수) 대응력 강함"
  },
  {
    company_name: "Ha-Be",
    country: "독일",
    flag: "🇩🇪",
    main_products: "프리캐스트용 혼화제",
    advantages: "맞춤/공장특화, 품질안정, 신속대응",
    global_track: "독일·유럽 중심",
    certifications: "CE, ISO",
    tech_support: "유럽 거점 지원",
    website: "https://www.ha-be.com",
    priority: "medium",
    notes: "프리캐스트·레디믹스 특화, 맞춤형 시스템"
  },
  {
    company_name: "Oscrete",
    country: "영국",
    flag: "🇬🇧",
    main_products: "플라스틱라이저, 방수·균열 첨가제",
    advantages: "중소 규모, 신뢰도, 가격경쟁력",
    global_track: "영국/유럽·아시아 실적",
    certifications: "ISO",
    tech_support: "영문 지원",
    website: "https://www.oscrete.com",
    priority: "medium",
    notes: "중소규모, 가격 경쟁력 우수"
  },
  {
    company_name: "Rhein-Chemotechnik",
    country: "독일",
    flag: "🇩🇪",
    main_products: "ALPHALITH®, 표면보호제",
    advantages: "표면강화, 방수특화, 프리미엄 R&D",
    global_track: "유럽 대형/고품질 시장",
    certifications: "CE, ISO, 친환경",
    tech_support: "기술센터 영문상담",
    website: "https://www.rhein-chemotechnik.de",
    priority: "medium",
    notes: "표면강화/방수 프리미엄 기술"
  },
  {
    company_name: "Cemex",
    country: "미국",
    flag: "🇺🇸",
    main_products: "첨가제, 내화·조강제",
    advantages: "미국 시장 1위, 대량공급/품질보증",
    global_track: "미주, 유럽, 남미",
    certifications: "ISO, 환경산업",
    tech_support: "현지지사, 상담",
    website: "https://www.cemex.com",
    priority: "high",
    notes: "미국 시장 1위, 대량 공급망 확보"
  },
  {
    company_name: "SpecChem",
    country: "미국",
    flag: "🇺🇸",
    main_products: "표면강화/하드너, 방수첨가제",
    advantages: "실현장 테스트, IBC 등 지역 인증",
    global_track: "미주, 카리브, 특정 시장",
    certifications: "미국 건설 안전/환경",
    tech_support: "미국 HQ, 영문",
    website: "https://www.specchemllc.com",
    priority: "low",
    notes: "미국 현장 중심, 지역 인증 보유"
  },
  {
    company_name: "Premiere",
    country: "미국",
    flag: "🇺🇸",
    main_products: "특수현장용 첨가제",
    advantages: "교량/구조물 등 특화, 고강도 내화학",
    global_track: "미국/캐나다 대형공사",
    certifications: "품질/공정 검증",
    tech_support: "영문/온라인",
    website: "https://www.premiereproducts.com",
    priority: "low",
    notes: "교량/구조물 등 특수 현장 전문"
  },
  {
    company_name: "Pioneer Fiber",
    country: "미국",
    flag: "🇺🇸",
    main_products: "콘크리트용 섬유(균열방지)",
    advantages: "고성능 섬유, 친환경, 균열/내구 특화",
    global_track: "미주·유럽·아시아",
    certifications: "ISO, CE, 환경섬유",
    tech_support: "HQ, 온라인 지원",
    website: "https://www.pioneerfiber.com",
    priority: "medium",
    notes: "균열방지 섬유 전문, 친환경 이력"
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

// 구매 절차 단계
const purchaseSteps = [
  {
    step: 1,
    title: "필요 첨가제 유형·스펙 정리",
    description: "플라스틱라이저, 방수, 조강, 수축저감, 섬유 등 용도와 적용 현장, 물량을 명확히 정의",
    icon: <ClipboardCheck className="h-6 w-6" />
  },
  {
    step: 2,
    title: "회사별 영문 카탈로그/기술자료 다운로드",
    description: "각 사 공식 웹사이트에서 최신 제품소개, 기술사양, MSDS 등을 검토",
    icon: <FileText className="h-6 w-6" />
  },
  {
    step: 3,
    title: "견적/기술상담 영문 템플릿 작성 및 발송",
    description: "아래 제공된 영문 템플릿을 활용하여 이메일 발송",
    icon: <Mail className="h-6 w-6" />
  },
  {
    step: 4,
    title: "회신 받은 기술자료·견적 비교",
    description: "스펙, 품질, 인증 현황, 단가, 납기 등을 병렬적으로 비교 분석",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    step: 5,
    title: "샘플 주문/현장 테스트",
    description: "파일럿 적용으로 성능 확인, 설비 호환 테스트 진행",
    icon: <Beaker className="h-6 w-6" />
  },
  {
    step: 6,
    title: "주문서 발행 및 수입",
    description: "Incoterms 기준 계약, 결제조건/서류확인/운송방식 협의",
    icon: <Truck className="h-6 w-6" />
  },
  {
    step: 7,
    title: "수입 통관 및 국내 적용",
    description: "HS코드 및 화학물질 규제 동시 점검, 현장 평가 후 추가 발주 검토",
    icon: <Package className="h-6 w-6" />
  }
];

export function ConcreteAdmixtureManufacturers() {
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
      <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl mb-3">콘크리트 강화 첨가제(Admixture) 글로벌 제조사 비교</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                유럽·미국 주요 11개 제조사 상세 분석 및 구매 절차 가이드
              </CardDescription>
            </div>
            <Beaker className="h-16 w-16 text-white/30" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">11</div>
              <div className="text-sm text-blue-100">총 제조사 수</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">5</div>
              <div className="text-sm text-blue-100">국가 수</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">{priorityStats['high']}</div>
              <div className="text-sm text-blue-100">최우선 타겟</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">1</div>
              <div className="text-sm text-blue-100">국내 지사 보유</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 국가별 통계 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-purple-600" />
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
            대형 프로젝트/공공·인프라에 적합한 글로벌 메이저 기업
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
                      <div className="text-sm text-gray-600 mb-1">대표 제품군</div>
                      <div className="text-sm">{company.main_products}</div>
                    </div>
                    <Separator />
                    <div>
                      <div className="text-sm text-gray-600 mb-1">주요 장점</div>
                      <div className="text-sm">{company.advantages}</div>
                    </div>
                    <Separator />
                    <div>
                      <div className="text-sm text-gray-600 mb-1">글로벌 실적</div>
                      <div className="text-sm">{company.global_track}</div>
                    </div>
                    <Separator />
                    <div className="bg-purple-50 p-3 rounded">
                      <div className="text-xs text-gray-600 mb-1">인증</div>
                      <div className="text-sm">{company.certifications}</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <div className="text-xs text-gray-600 mb-1">기술 지원</div>
                      <div className="text-sm font-semibold">{company.tech_support}</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <div className="text-xs text-gray-600 mb-1">특징</div>
                      <div className="text-sm">{company.notes}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* BASF 한국 지사 상세 정보 */}
      {manufacturersData
        .filter(company => company.company_name === 'BASF')
        .map((company, index) => (
          company.korea_office && (
            <Card key={index} className="border-2 border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  🇰🇷 BASF 한국 지사 상세 정보
                </CardTitle>
                <CardDescription>
                  국내에서 직접 문의 및 구매 가능한 글로벌 메이저 기업
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* 기본 정보 */}
                  <Card className="border-2 border-blue-300">
                    <CardHeader>
                      <CardTitle className="text-lg">기본 정보</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Building2 className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-600">법인명</div>
                          <div className="font-semibold">{company.korea_office.name}</div>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-600">본사 주소</div>
                          <div className="text-sm">{company.korea_office.address}</div>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-600">대표 전화</div>
                          <div className="font-semibold text-blue-600">{company.korea_office.phone}</div>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-600">설립 연도</div>
                          <div className="font-semibold">{company.korea_office.established}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 사업 규모 */}
                  <Card className="border-2 border-green-300">
                    <CardHeader>
                      <CardTitle className="text-lg">사업 규모</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-blue-600 text-white rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">{company.korea_office.employees}</div>
                        <div className="text-sm text-blue-100">직원 수 (2024년)</div>
                      </div>
                      <div className="bg-green-600 text-white rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">{company.korea_office.revenue}</div>
                        <div className="text-sm text-green-100">국내 매출 (2024년)</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <div className="text-xs text-gray-600 mb-2">전국 생산 시설</div>
                        <div className="text-sm">{company.korea_office.facilities}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* 제공 서비스 */}
                <Card className="mt-6 border-2 border-purple-300">
                  <CardHeader>
                    <CardTitle className="text-lg">제공 서비스</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: '제품 공급', items: ['기초·특수 화학', '플라스틱·폴리머', '건설화학·첨가제', '배터리 소재', '접착제·코팅'] },
                        { title: '기술지원 & R&D', items: ['R&D 센터 (안산/동탄)', '현장 적용 솔루션', '신제품 기술상담', '맞춤형 연구'] },
                        { title: '고객지원', items: ['마케팅·영업 지원', 'MSDS·인증서 제공', '샘플 주문', '현장 컨설팅'] },
                        { title: '환경·안전·품질', items: ['ISO, REACH, CE 준수', '안전교육', '친환경경영', '법규 컴플라이언스'] },
                      ].map((service, idx) => (
                        <div key={idx} className="p-4 bg-white rounded-lg border">
                          <div className="font-semibold mb-3 text-purple-700">{service.title}</div>
                          <ul className="space-y-2">
                            {service.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 bg-blue-600 text-white rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <strong>핵심 장점</strong>
                  </div>
                  <div className="text-sm">
                    BASF 한국 지사는 화학제품 공급, 산업별 맞춤 솔루션, 기술지원/R&D, 환경·품질 관리, 생산·물류, 종합 고객지원까지 
                    <strong className="text-yellow-300"> 원스톱 서비스</strong>를 제공합니다. 샘플/기술자료/현장 적용 문의부터 실제 구매/공급까지 
                    <strong className="text-yellow-300"> 한글/영문 상담</strong>이 모두 가능합니다.
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        ))}

      {/* 전체 제조사 비교표 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Factory className="h-6 w-6 text-purple-600" />
            전체 제조사 비교표
          </CardTitle>
          <CardDescription>
            11개 제조사 상세 정보 일람
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="p-3 text-left whitespace-nowrap">우선순위</th>
                  <th className="p-3 text-left whitespace-nowrap">국가</th>
                  <th className="p-3 text-left whitespace-nowrap">회사명</th>
                  <th className="p-3 text-left">대표 제품군</th>
                  <th className="p-3 text-left">주요 장점</th>
                  <th className="p-3 text-left">글로벌 실적</th>
                  <th className="p-3 text-left">인증</th>
                  <th className="p-3 text-left">웹사이트</th>
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
                      <td className="p-3 font-semibold whitespace-nowrap">
                        {company.company_name}
                        {company.korea_office && (
                          <div className="text-xs text-blue-600">🇰🇷 한국 지사</div>
                        )}
                      </td>
                      <td className="p-3 text-xs max-w-xs">{company.main_products}</td>
                      <td className="p-3 text-xs max-w-xs">{company.advantages}</td>
                      <td className="p-3 text-xs max-w-xs">{company.global_track}</td>
                      <td className="p-3 text-xs">{company.certifications}</td>
                      <td className="p-3">
                        {company.website ? (
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
                        ) : (
                          <span className="text-xs text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 구매 절차 */}
      <Card className="border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-blue-600" />
            실제 구매/도입 세부 절차 (7단계)
          </CardTitle>
          <CardDescription>
            첨가제 해외 직구/수입을 위한 단계별 가이드
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {purchaseSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-blue-600">{step.icon}</div>
                        <h4 className="font-semibold">{step.title}</h4>
                      </div>
                      <p className="text-sm text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 영문 견적 템플릿 */}
      <Card className="border-2 border-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-6 w-6 text-green-600" />
            영문 견적·기술상담 요청 템플릿
          </CardTitle>
          <CardDescription>
            해외 제조사에 직접 문의할 때 사용할 수 있는 영문 이메일 템플릿
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* 템플릿 1: 견적 요청 */}
            <Card className="bg-blue-50 border border-blue-300">
              <CardHeader>
                <CardTitle className="text-lg">Template 1: 견적 요청 (Quotation Request)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-4 rounded-lg border-2 border-blue-200 font-mono text-sm space-y-3">
                  <div><strong>Subject:</strong> Request for Quotation – Concrete Admixture Supply to Korea</div>
                  <Separator />
                  <div className="whitespace-pre-wrap">
{`Dear Sir/Madam,

We are HICON KOREA, a leading recycled aggregate manufacturer in South Korea, specializing in waste-to-resource concrete production.

We are interested in sourcing high-quality concrete admixtures for our production line and would like to request a quotation for the following:

**Product Details:**
- Product Type: [e.g., Superplasticizer, Waterproofing Agent, Fiber Reinforcement]
- Application: [e.g., Precast Concrete, Ready-Mix, High-Strength Concrete]
- Estimated Annual Volume: [e.g., 50 tons/year]
- Delivery Location: South Korea (Port of Incheon/Busan)

**Required Information:**
1. Product Specifications & Technical Data Sheets
2. Unit Price (FOB/CIF) & MOQ (Minimum Order Quantity)
3. Lead Time & Delivery Terms
4. Available Certifications (ISO, CE, MSDS)
5. Sample Availability & Cost

**Company Information:**
- Company: HICON KOREA Co., Ltd.
- Industry: Recycled Aggregate & Concrete Manufacturing
- Production Capacity: 270,000 tons/year
- Location: South Korea

We would appreciate receiving your quotation and technical documentation within 7-10 business days.

Thank you for your time and consideration. We look forward to your response.

Best regards,

[Your Name]
[Your Title]
HICON KOREA Co., Ltd.
Email: [your.email@hiconkorea.com]
Phone: [+82-XX-XXXX-XXXX]`}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 템플릿 2: 기술 문의 */}
            <Card className="bg-green-50 border border-green-300">
              <CardHeader>
                <CardTitle className="text-lg">Template 2: 기술 문의 (Technical Inquiry)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-4 rounded-lg border-2 border-green-200 font-mono text-sm space-y-3">
                  <div><strong>Subject:</strong> Technical Inquiry – Concrete Admixture for Recycled Aggregate Application</div>
                  <Separator />
                  <div className="whitespace-pre-wrap">
{`Dear Technical Support Team,

We are HICON KOREA, a recycled aggregate producer in South Korea, and we are exploring admixture solutions to enhance the performance of recycled aggregate concrete.

**Our Requirements:**
- Base Material: 60% Recycled Concrete Aggregate + 40% Virgin Aggregate
- Target Application: Rebar Spacers (High Compressive Strength Required)
- Key Performance Goals:
  • Improved Workability & Flowability
  • Enhanced Strength (Target: 40-50 MPa)
  • Reduced Water Absorption
  • Durability in Harsh Environments

**Questions:**
1. Which of your products would be most suitable for recycled aggregate concrete?
2. What is the recommended dosage rate (% by weight of cement)?
3. Are there any compatibility issues with recycled aggregates?
4. Can you provide case studies or technical references for similar applications?
5. Is sample testing available before bulk purchase?

**Company Background:**
- Company: HICON KOREA Co., Ltd.
- Business: Waste Recycling & Circular Economy
- Production Lines: 3 lines, 71 equipment units
- Annual Capacity: 270,000 tons

We would greatly appreciate your technical guidance and product recommendations.

Thank you for your expertise and support.

Best regards,

[Your Name]
[Your Title]
HICON KOREA Co., Ltd.
Email: [your.email@hiconkorea.com]
Phone: [+82-XX-XXXX-XXXX]`}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 템플릿 3: 샘플 요청 */}
            <Card className="bg-purple-50 border border-purple-300">
              <CardHeader>
                <CardTitle className="text-lg">Template 3: 샘플 요청 (Sample Request)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-4 rounded-lg border-2 border-purple-200 font-mono text-sm space-y-3">
                  <div><strong>Subject:</strong> Sample Request – Concrete Admixture for Trial Testing</div>
                  <Separator />
                  <div className="whitespace-pre-wrap">
{`Dear Sir/Madam,

Following our initial inquiry, we would like to request product samples for trial testing at our facility in South Korea.

**Sample Request:**
- Product Name: [e.g., Superplasticizer XYZ-2000]
- Quantity Needed: [e.g., 5-10 kg]
- Intended Use: Laboratory & Pilot Production Testing
- Testing Duration: 2-4 weeks

**Shipping Information:**
- Recipient: HICON KOREA Co., Ltd.
- Address: [Your Full Address in Korea]
- Contact: [Your Name / Phone]
- Preferred Shipping Method: DHL/FedEx Express

**Testing Plan:**
We will conduct the following tests:
1. Compressive Strength (7, 14, 28 days)
2. Slump Flow & Workability
3. Water Absorption & Durability
4. Cost-Benefit Analysis

**Next Steps:**
If the trial results are satisfactory, we plan to place an initial order of [XX tons] within [3-6 months].

Please confirm:
1. Sample availability & shipping cost
2. Estimated delivery time to Korea
3. Technical support during testing phase

We appreciate your cooperation and look forward to a successful partnership.

Best regards,

[Your Name]
[Your Title]
HICON KOREA Co., Ltd.
Email: [your.email@hiconkorea.com]
Phone: [+82-XX-XXXX-XXXX]`}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 bg-green-600 text-white rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-5 w-5" />
              <strong>템플릿 사용 팁</strong>
            </div>
            <div className="text-sm space-y-2">
              <div>• <strong>제목(Subject):</strong> 간결하고 명확하게 작성</div>
              <div>• <strong>[ ] 괄호 부분:</strong> 실제 정보로 교체 필수</div>
              <div>• <strong>회사 정보:</strong> 정확한 연락처 및 웹사이트 포함</div>
              <div>• <strong>후속 조치:</strong> 7-10일 내 변이 없으면 재발송</div>
              <div>• <strong>전문성:</strong> 정중하고 전문적인 어조 유지</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 검토 필요 + 참고용 */}
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
                        <span className="text-gray-600">대표 제품:</span> {company.main_products}
                      </div>
                      <div>
                        <span className="text-gray-600">특징:</span> {company.notes}
                      </div>
                      <div className="text-xs text-gray-600">
                        {company.tech_support}
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

      {/* 결론 및 실무 적용 포인트 */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            결론 및 실무 적용 포인트
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: '대형 프로젝트/공공·인프라',
                  companies: 'Sika, BASF, Fosroc, MAPEI, Cemex',
                  reason: '글로벌 실적, 기술 지원, 품질 보증 강점'
                },
                {
                  title: '프리캐스트·수주현장 특화',
                  companies: 'Ha-Be, Oscrete, Rhein-Chemotechnik',
                  reason: '맞춤형 솔루션, 비용 효율성 우수'
                },
                {
                  title: '미국 시장 중심',
                  companies: 'Cemex, SpecChem, Premiere, Pioneer Fiber',
                  reason: '북미 인증, 현지 공급망 확보'
                },
                {
                  title: '한국 현지 지원',
                  companies: 'BASF (한국바스프)',
                  reason: '국내 지사, 한글/영문 상담, 원스톱 서비스'
                }
              ].map((category, index) => (
                <Card key={index} className="border-2 border-blue-300">
                  <CardContent className="p-4">
                    <div className="font-semibold text-blue-700 mb-2">{category.title}</div>
                    <div className="text-sm mb-2">
                      <strong>추천:</strong> {category.companies}
                    </div>
                    <div className="text-xs text-gray-600">
                      <strong>이유:</strong> {category.reason}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>첨가제 목적별 분류:</strong> 강도, 내구, 수축, 방수, 균열방지 등을 명확히 하여 맞춤형 솔루션 선택
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>반드시 비교:</strong> 영문 견적서, 기술자료, 국제인증(MSDS 포함)을 병렬 비교
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>단계별 도입:</strong> 샘플 테스트 → 파일럿 적용 → 본격 구매로 리스크 최소화
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>현지 지원 활용:</strong> BASF 한국 지사처럼 국내 지원이 가능한 업체는 커뮤니케이션 및 기술 지원이 원활
                </div>
              </div>
            </div>

            <Separator />

            <div className="bg-green-600 text-white rounded-lg p-4">
              <div className="font-semibold mb-2">💡 하이콘 코리아 적용 전략</div>
              <div className="text-sm space-y-1">
                <div>1. <strong>BASF 한국 지사</strong>에 우선 문의 (국내 지원 최강)</div>
                <div>2. <strong>Sika, MAPEI, Fosroc</strong>에 병렬 견적 요청 (글로벌 메이저 비교)</div>
                <div>3. 재생골재 60% 배합에 최적화된 <strong>플라스틱라이저 + 방수제</strong> 조합 테스트</div>
                <div>4. 샘플 테스트 후 <strong>비용·성능·납기</strong> 종합 평가로 최종 선정</div>
                <div>5. 초기 소량 발주(5-10톤) → 현장 검증 → 연간 계약(50톤+)으로 확대</div>
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
                <div>• <strong>재생골재 스페이서 제조 + 유럽 화학사 가이드</strong>: 재생골재 60% 배합 설계 및 제조 공정 전체 가이드</div>
                <div>• <strong>유럽 콘크리트 스페이서 제조사 목록</strong>: 스페이서 생산 설비 제조사 10개사 비교</div>
                <div>• <strong>철근 스페이서 공장 사업 계획서</strong>: 3,000평 부지 신규 공장 설립 계획</div>
                <div className="pt-2 text-xs text-gray-600">
                  ※ 모든 문서는 IR 자료실에서 확인 가능합니다
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
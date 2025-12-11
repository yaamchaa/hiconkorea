import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Factory, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp,
  Globe,
  DollarSign,
  Settings,
  Package,
  FileText,
  Copy,
  Check,
  Download,
  Printer
} from 'lucide-react';

interface Manufacturer {
  name: string;
  nameJapanese: string;
  url: string;
  keyProducts: string;
  features: string[];
}

interface FinishedProductVendor {
  name: string;
  nameJapanese: string;
  url: string;
  mainProducts: string;
  specialties: string[];
}

const JapaneseSpacerEquipmentReport: React.FC = () => {
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const machineManufacturers: Manufacturer[] = [
    {
      name: "Hoei Japan",
      nameJapanese: "ホウエイジャパン",
      url: "https://hoei-japan.com/",
      keyProducts: "Spacer/Block Auto Forming Equipment",
      features: [
        "Direct overseas export experience",
        "Cost-effective for trial projects",
        "Flexible production configurations",
        "English support available"
      ]
    },
    {
      name: "Tiger Machine Co., Ltd.",
      nameJapanese: "タイガー機械/Tiger Chiyoda",
      url: "https://www.tigerchiyoda.co.jp/",
      keyProducts: "Large Auto Block Machines",
      features: [
        "High-volume production capability",
        "Robust global support network",
        "Best for large-scale operations",
        "Proven export track record"
      ]
    },
    {
      name: "Itabashi Kenzai Kogyo",
      nameJapanese: "板橋建材工業",
      url: "https://www.itaken.co.jp/",
      keyProducts: "Full Auto Lines/Blocks/Spacers",
      features: [
        "Complete automation solutions",
        "Integrated production systems",
        "Custom configuration available",
        "Advanced quality control"
      ]
    },
    {
      name: "ITO YOGYO",
      nameJapanese: "伊藤窯業",
      url: "https://itoyogyo.co.jp/",
      keyProducts: "Vibrating Cast Block/Eco Spacers",
      features: [
        "Unique vibration technology",
        "Eco-friendly spacer expertise",
        "High-density concrete products",
        "Environmental focus"
      ]
    },
    {
      name: "NSP Co., Ltd.",
      nameJapanese: "エヌ・エス・ピー",
      url: "https://www.kknsp.jp/",
      keyProducts: "NETIS Block/Spacer Lines",
      features: [
        "Government-certified technology",
        "Innovative design systems",
        "Quality certification support",
        "Technical documentation"
      ]
    },
    {
      name: "Okabe Co., Ltd.",
      nameJapanese: "岡部",
      url: "https://www.okabe.co.jp/",
      keyProducts: "Custom Large Factory Lines, Molds",
      features: [
        "Large-scale infrastructure projects",
        "Custom mold design service",
        "Comprehensive factory solutions",
        "Industrial-grade equipment"
      ]
    }
  ];

  const finishedProductVendors: FinishedProductVendor[] = [
    {
      name: "Art Space Co., Ltd.",
      nameJapanese: "アートスペース",
      url: "http://www.art-space.jp/",
      mainProducts: "GRC, Eco Spacers, NETIS Certified",
      specialties: [
        "Designer spacer solutions",
        "GRC (Glass fiber Reinforced Concrete)",
        "NETIS certification",
        "Trial batch available"
      ]
    },
    {
      name: "Watanabe Sangyo",
      nameJapanese: "ワタナベ産業",
      url: "https://www.nabe-san.co.jp/",
      mainProducts: "Block, Donut, Plate Shapes",
      specialties: [
        "Wide variety of shapes",
        "Custom design service",
        "Flexible order quantities",
        "Quick delivery"
      ]
    },
    {
      name: "Spacer Kogyo",
      nameJapanese: "スペーサー工業",
      url: "https://www.spacerkogyo.co.jp/",
      mainProducts: "Mortar, Ultra High-Strength",
      specialties: [
        "Ultra high-strength formulas",
        "Specialized mortar spacers",
        "Custom strength specifications",
        "Technical support"
      ]
    },
    {
      name: "Japan Life Co., Ltd.",
      nameJapanese: "ジャパンライフ",
      url: "https://koueitrading.com/",
      mainProducts: "FBS, JL Spacers",
      specialties: [
        "Environmental compliance",
        "FBS certified products",
        "Construction work optimization",
        "Global distribution"
      ]
    },
    {
      name: "Chuo Sangyo",
      nameJapanese: "中央産業",
      url: "https://www.ipros.jp/",
      mainProducts: "Patented Plastic/Eco Spacers",
      specialties: [
        "PuraStar technology",
        "Patented eco materials",
        "Plastic-concrete hybrid",
        "Innovation focused"
      ]
    },
    {
      name: "ITO YOGYO",
      nameJapanese: "伊藤窯業",
      url: "https://itoyogyo.co.jp/",
      mainProducts: "Vibrating Block Spacers",
      specialties: [
        "Vibration casting method",
        "High-density products",
        "Equipment + materials",
        "Integrated solutions"
      ]
    },
    {
      name: "Metoree/IPROS Platform",
      nameJapanese: "メトリー/IPROS",
      url: "https://metoree.com/",
      mainProducts: "Multi-Vendor Platform",
      specialties: [
        "Dozens of vendors accessible",
        "Compare multiple options",
        "Eco-friendly selections",
        "Bespoke trial orders"
      ]
    }
  ];

  const priceRanges = [
    {
      type: "Basic Auto Forming Machines",
      priceJPY: "¥8–40 million",
      priceUSD: "$55,000–$275,000",
      output: "300–2,000 blocks/hr",
      notes: "Installation & training included"
    },
    {
      type: "High-Capacity Flexible Lines",
      priceJPY: "¥30–80 million",
      priceUSD: "$205,000–$550,000",
      output: "Up to 5,000/hr",
      notes: "Custom mold configurations"
    },
    {
      type: "EU Mid-Tier Machines",
      priceJPY: "—",
      priceUSD: "$50,000–$150,000",
      output: "80–130 pcs/min",
      notes: "Remote support available"
    },
    {
      type: "EU High-End Full Plant",
      priceJPY: "—",
      priceUSD: "$200,000–$800,000+",
      output: "Up to 5,000/hr",
      notes: "AI monitoring, full automation"
    }
  ];

  const procurementSteps = [
    {
      step: "1",
      title: "요구사항 정의",
      description: "생산 자동화 수준, 용량, 사양 결정 및 공급업체 카탈로그 검토",
      icon: FileText
    },
    {
      step: "2",
      title: "공급업체 접촉",
      description: "상위 3-5개 업체에 브로셔, 상세 사양, 가격 정보 요청",
      icon: Globe
    },
    {
      step: "3",
      title: "비교 분석",
      description: "생산량, 보증, A/S, 납기, 맞춤화 옵션(금형, 크기, 전력) 비교",
      icon: Settings
    },
    {
      step: "4",
      title: "견적 및 문서 요청",
      description: "공식 견적서 및 기술 문서 요청",
      icon: DollarSign
    },
    {
      step: "5",
      title: "계약 협상",
      description: "결제 조건, 배송, 설치, 교육, 지원 협상",
      icon: CheckCircle2
    },
    {
      step: "6",
      title: "발주 및 물류",
      description: "PO 발행 및 한국 수입 물류 계획 (관세, 시설 준비)",
      icon: Package
    },
    {
      step: "7",
      title: "설치 및 시운전",
      description: "설치 감독, 교육 참여, 초기 생산 테스트 수행",
      icon: Factory
    },
    {
      step: "8",
      title: "성능 평가",
      description: "OEE 검토, 본격 수입/판매 확대 전 평가",
      icon: TrendingUp
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto space-y-8"
      >
        {/* Header with Actions */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-slate-900">일본 스페이서 기계설비 산업 보고서</h1>
                <p className="text-slate-600 mt-1">Japanese Concrete Spacer & Block Equipment Industry Report</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCopyUrl}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors"
              >
                {copiedUrl ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedUrl ? '복사됨' : 'URL 복사'}</span>
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors print:hidden"
              >
                <Printer className="w-4 h-4" />
                <span>인쇄</span>
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200">
              <div className="flex items-center gap-3">
                <Factory className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-red-900">기계 제조사</p>
                  <p className="text-red-600 mt-1">6개 주요 업체</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-blue-900">완제품 공급업체</p>
                  <p className="text-blue-600 mt-1">7개 주요 브랜드</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-green-900">시장 동향</p>
                  <p className="text-green-600 mt-1">친환경 재생골재</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Executive Summary */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-indigo-600" />
            <h2 className="text-slate-900">개요 (Executive Summary)</h2>
          </div>
          <div className="prose max-w-none text-slate-700 space-y-4">
            <p>
              본 보고서는 콘크리트 스페이서(철근 받침대) 및 블록 제조 설비에 대한 심층 시장, 기술, 비즈니스 분석을 제공하며, 
              유럽 및 일본의 주요 생산업체를 중심으로 작성되었습니다.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-indigo-50 rounded-xl">
                <h3 className="text-indigo-900 mb-2">보고서 목적</h3>
                <p className="text-indigo-700">
                  재생 골재를 활용한 친환경 스페이서 생산을 위해 첨단 콘크리트 스페이서/블록 설비를 
                  수입하려는 한국 기업을 위한 실무 가이드
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <h3 className="text-blue-900 mb-2">포함 내용</h3>
                <p className="text-blue-700">
                  제조사 프로필, 연락처, 설비 특징, 산업 트렌드, 한국 시장 진입 전략, 
                  조달 워크플로우, 가격 정보 및 수입 조건
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Market Overview */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-blue-600" />
            <h2 className="text-slate-900">시장 개요 (Market Overview)</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-slate-800">유럽 시장 특징</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-700">연간 수십억 달러 규모 (독일, 이탈리아, 네덜란드 주도)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-700">연평균 3-5% 성장 (건설 경기 회복)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-700">첨단 자동화, 재생 골재 활용, 맞춤화 및 모니터링 강화</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-slate-800">일본 시장 특징</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-700">완제품 제조사 다수 보유, 기계 전문 공급업체는 소수</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-700">자체 사용 중심, 대외 판매는 제한적</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-700">친환경 재생 골재 스페이서 시험/수입 수요 증가 추세</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Machine Manufacturers */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <Factory className="w-6 h-6 text-red-600" />
            <h2 className="text-slate-900">일본 주요 기계 제조사</h2>
          </div>
          <div className="grid gap-6">
            {machineManufacturers.map((manufacturer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-red-900">{manufacturer.name}</h3>
                    <p className="text-red-600 mt-1">{manufacturer.nameJapanese}</p>
                  </div>
                  <a
                    href={manufacturer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-red-700 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">{manufacturer.url}</span>
                  </a>
                </div>
                <div className="mb-4 p-3 bg-white rounded-lg">
                  <p className="text-slate-600">주요 제품</p>
                  <p className="text-slate-800 mt-1">{manufacturer.keyProducts}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {manufacturer.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2 p-3 bg-white rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Finished Product Vendors */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-6 h-6 text-blue-600" />
            <h2 className="text-slate-900">일본 완제품 공급업체</h2>
          </div>
          <div className="grid gap-6">
            {finishedProductVendors.map((vendor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-blue-900">{vendor.name}</h3>
                    <p className="text-blue-600 mt-1">{vendor.nameJapanese}</p>
                  </div>
                  <a
                    href={vendor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">{vendor.url}</span>
                  </a>
                </div>
                <div className="mb-4 p-3 bg-white rounded-lg">
                  <p className="text-slate-600">주요 제품</p>
                  <p className="text-slate-800 mt-1">{vendor.mainProducts}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {vendor.specialties.map((specialty, sIndex) => (
                    <div key={sIndex} className="flex items-start gap-2 p-3 bg-white rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Price Ranges */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6 text-green-600" />
            <h2 className="text-slate-900">가격 범위 및 조건</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left p-4 text-slate-900">설비 유형</th>
                  <th className="text-left p-4 text-slate-900">가격 (JPY)</th>
                  <th className="text-left p-4 text-slate-900">가격 (USD)</th>
                  <th className="text-left p-4 text-slate-900">생산량</th>
                  <th className="text-left p-4 text-slate-900">비고</th>
                </tr>
              </thead>
              <tbody>
                {priceRanges.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-slate-800">{item.type}</td>
                    <td className="p-4 text-slate-700">{item.priceJPY}</td>
                    <td className="p-4 text-green-700">{item.priceUSD}</td>
                    <td className="p-4 text-slate-700">{item.output}</td>
                    <td className="p-4 text-slate-600">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <p className="text-green-900">결제 조건</p>
              <p className="text-green-700 mt-1">계약금 30-50%, 잔금 선적/설치 시</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-blue-900">납기</p>
              <p className="text-blue-700 mt-1">제작 8-20주, 설치 1-2주</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <p className="text-purple-900">보증</p>
              <p className="text-purple-700 mt-1">1-2년 표준, 원격 지원 가능</p>
            </div>
          </div>
        </motion.div>

        {/* Korean Import Conditions */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            <h2 className="text-slate-900">한국 수입 조건 및 테스트</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="text-amber-900 mb-3">주요 고려사항</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-amber-900">대부분 유럽/일본 기계의 한국 공식 대리점 부재 → 직접 구매/협상 필요</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-amber-900">한국 전력 사양 맞춤화 (380V/60Hz)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-amber-900">한국어/영어 문서화 및 관세 통관 (HS 코드 8461.30.9020)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-800">대부분 업체에서 샘플 기반 파일럿 주문 가능</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-800">구매자 제공 재생 골재를 활용한 시장 테스트용 소량 블록/스페이서 제공 가능</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="text-blue-900 mb-3">사후 지원 (After-Sales)</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• 일본어/영어 엔지니어 현장 설치</li>
                <li>• 원격 모니터링 시스템</li>
                <li>• 수리 및 부품 배송 지원</li>
                <li>• 기술 교육 프로그램</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Procurement Workflow */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-6 h-6 text-purple-600" />
            <h2 className="text-slate-900">설비 조달 워크플로우</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {procurementSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-purple-600" />
                        <h3 className="text-purple-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-700">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <h2 className="text-slate-900">추천 업체 및 연락처</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200">
              <h3 className="text-red-900 mb-4">일본 기계 추천</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-900">Tiger Machine</p>
                    <p className="text-red-600">대용량 생산, 견고한 지원</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-900">Hoei Japan</p>
                    <p className="text-red-600">비용 효율적, 시험용 최적</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-900">ITO YOGYO</p>
                    <p className="text-red-600">진동/친환경 블록 전문</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <h3 className="text-blue-900 mb-4">유럽 기계 추천</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-900">OPM Stampi</p>
                    <p className="text-blue-600">상세 문서, 신뢰성 높음</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-900">Max Frank</p>
                    <p className="text-blue-600">대형 라인, 첨단 자동화</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-900">Nevoga</p>
                    <p className="text-blue-600">다양한 블록/스페이서</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <h3 className="text-green-900 mb-4">일본 완제품 추천</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-900">Art Space</p>
                    <p className="text-green-600">GRC, 친환경, 파일럿 가능</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-900">Watanabe Sangyo</p>
                    <p className="text-green-600">다양한 형태/맞춤 디자인</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-900">Spacer Kogyo</p>
                    <p className="text-green-600">초고강도, 특수 모르타르</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Email Template */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-slate-600" />
            <h2 className="text-slate-900">샘플 영문 이메일 문의</h2>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 font-mono">
            <p className="text-slate-900 mb-4">Subject: Inquiry Regarding Concrete Spacer Block Production Equipment</p>
            <div className="space-y-3 text-slate-700">
              <p>Dear [Company Name] Sales Team,</p>
              <p>
                We are a Korea-based company specialized in eco-friendly aggregates and are seeking to trial and 
                potentially import concrete spacer/block manufacturing equipment for testing and sale in Korea.
              </p>
              <p>
                Could you kindly provide technical product catalog, model options, pricing, lead times, export 
                conditions (FOB/CIF Korea), after-sales support details, and any reference cases for installations 
                in Korea or Asia?
              </p>
              <p className="text-slate-800">We are particularly interested in:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Machine options compatible with recycled aggregate mixes</li>
                <li>Flexibility in mold/size/design</li>
                <li>Warranty terms and installation support in Korea</li>
                <li>Availability of test batch blocks / small order finished spacers for market validation</li>
              </ul>
              <p className="mt-4">Best regards,<br/>[Your Name]<br/>[Your Company]<br/>[Your Contact Information]</p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="text-center">
            <h3 className="mb-4">하이콘 코리아 재생골재 IR 자료실</h3>
            <p className="text-indigo-100 mb-6">
              본 보고서는 하이콘 코리아의 철근 스페이서 공장 설립 계획을 위한 기초 자료로 활용됩니다.
            </p>
            <div className="flex items-center justify-center gap-4 text-indigo-100">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span>2025년 11월 작성</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>유럽 & 일본 시장 분석</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JapaneseSpacerEquipmentReport;
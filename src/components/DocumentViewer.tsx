import { useState } from 'react';
import { LogisticsWarehouseReport } from './LogisticsWarehouseReport';
import { RebarSpacerFactoryPlan } from './RebarSpacerFactoryPlan';
import { RebarSpacerSupplierGuide } from './RebarSpacerSupplierGuide';
import { RebarSpacerResearchGuide } from './RebarSpacerResearchGuide';
import { RecycledAggregateSpacerGuide } from './RecycledAggregateSpacerGuide';
import { EuropeanSpacerManufacturers } from './EuropeanSpacerManufacturers';
import { ConcreteAdmixtureManufacturers } from './ConcreteAdmixtureManufacturers';
import JapaneseSpacerEquipmentReport from './JapaneseSpacerEquipmentReport';
import PlanetaryMixerReport from './PlanetaryMixerReport';
import { Button } from './ui/button';
import { Download, X, FileText, Presentation } from 'lucide-react';

interface DocumentViewerProps {
  docType: 'companyBrochure' | 'businessPlan' | 'esgReport' | 'spacerMarket' | 'actionPlan' | 'priceTemplate' | 'logisticsWarehouse' | 'rebarSpacerFactory' | 'supplierGuide' | 'researchGuide' | 'recycledGuide' | 'europeanManufacturers' | 'concreteAdmixture' | 'japaneseManufacturers' | 'planetaryMixer';
  onClose: () => void;
}

export function DocumentViewer({ docType, onClose }: DocumentViewerProps) {
  const [isPrinting, setIsPrinting] = useState(false);
  const [isGeneratingPPT, setIsGeneratingPPT] = useState(false);

  const handleDownloadPDF = () => {
    setIsPrinting(true);
    
    // 사용자에게 인쇄 설정 안내
    alert('PDF 저장 시 다음 설정을 확인해주세요:\n\n1. 대상: "PDF로 저장" 선택\n2. 페이지: "모두" 선택\n3. 배경 그래픽: "켜기" ✓ (중요!)\n4. 여백: "없음" 선택\n\n배경 그래픽을 켜야 디자인이 제대로 보입니다!');
    
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 500);
  };

  const handleDownloadPPT = async () => {
    setIsGeneratingPPT(true);
    
    try {
      // PptxGenJS 동적 import
      const PptxGenJS = (await import('pptxgenjs')).default;
      const pptx = new PptxGenJS();
      
      const fileName = getDocumentName();
      
      // 공통 스타일 설정
      pptx.layout = 'LAYOUT_16x9';
      pptx.author = '하이콘 코리아';
      pptx.company = '주식회사 하이콘 코리아';
      pptx.subject = fileName;
      pptx.title = fileName;

      // 문서 타입별 슬라이드 생성
      if (docType === 'companyBrochure') {
        createCompanyBrochureSlides(pptx);
      } else if (docType === 'businessPlan') {
        createBusinessPlanSlides(pptx);
      } else if (docType === 'esgReport') {
        createESGReportSlides(pptx);
      } else if (docType === 'spacerMarket') {
        createSpacerMarketSlides(pptx);
      } else if (docType === 'actionPlan') {
        createActionPlanSlides(pptx);
      } else if (docType === 'priceTemplate') {
        createPriceTemplateSlides(pptx);
      } else if (docType === 'logisticsWarehouse') {
        createLogisticsWarehouseSlides(pptx);
      } else if (docType === 'rebarSpacerFactory') {
        createRebarSpacerFactorySlides(pptx);
      } else if (docType === 'supplierGuide') {
        createRebarSpacerSupplierGuideSlides(pptx);
      } else if (docType === 'equipmentReport') {
        createRebarSpacerEquipmentReportSlides(pptx);
      }

      // PPT 파일 다운로드
      await pptx.writeFile({ fileName: `${fileName}.pptx` });
      
    } catch (error) {
      console.error('PPT 생성 오류:', error);
      alert('PPT 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsGeneratingPPT(false);
    }
  };

  const getDocumentName = () => {
    switch (docType) {
      case 'companyBrochure':
        return '회사 소개서';
      case 'businessPlan':
        return '사업 계획서';
      case 'esgReport':
        return 'ESG 보고서';
      case 'spacerMarket':
        return '철근 스페이서 시장 조사 보고서';
      case 'actionPlan':
        return '시장 조사 실행 계획서';
      case 'priceTemplate':
        return '가격 분석 템플릿';
      case 'logisticsWarehouse':
        return '물류 창고 보고서';
      case 'rebarSpacerFactory':
        return '철근 스페이서 공장 계획서';
      case 'supplierGuide':
        return '철근 스페이서 공급자 가이드';
      case 'researchGuide':
        return '철근 스페이서 설비 조사 가이드';
      case 'recycledGuide':
        return '재생골재 스페이서 제조 가이드';
      case 'europeanManufacturers':
        return '유럽 스페이서 제조사 조사 보고서';
      case 'concreteAdmixture':
        return '콘크리트 강화제 제조사 비교 보고서';
      case 'japaneseManufacturers':
        return '일본 스페이서 기계설비 산업 보고서';
      case 'planetaryMixer':
        return '행성형 콘크리트 믹서 조사 보고서';
      default:
        return '';
    }
  };

  // 회사 소개서 슬라이드 생성
  const createCompanyBrochureSlides = (pptx: any) => {
    // 커버 슬라이드
    let slide = pptx.addSlide();
    slide.background = { fill: '0066CC' };
    slide.addText('주식회사 하이콘 코리아', {
      x: 1, y: 2.5, w: 8, h: 1,
      fontSize: 44, bold: true, color: 'FFFFFF', align: 'center'
    });
    slide.addText('회사 소개서', {
      x: 1, y: 3.5, w: 8, h: 0.5,
      fontSize: 28, color: 'E0E0E0', align: 'center'
    });
    slide.addText('HICON KOREA - Company Brochure', {
      x: 1, y: 4.2, w: 8, h: 0.4,
      fontSize: 16, color: 'CCCCCC', align: 'center'
    });

    // 회사 개요 슬라이드
    slide = pptx.addSlide();
    slide.addText('회사 개요', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: '0066CC'
    });
    
    const companyInfo = [
      { label: '회사명', value: '주식회사 하이콘 코리아' },
      { label: '설립연도', value: '1996년' },
      { label: '주요 사업', value: '폐기물 재생 골재 생산' },
      { label: '연간 처리량', value: '22만톤 ~ 27만톤' },
      { label: '생산 라인', value: 'A라인(26설), B라인(24설비), C라인(21설비)' },
      { label: '재활용률', value: '78%' }
    ];

    let yPos = 1.5;
    companyInfo.forEach(info => {
      slide.addText(`${info.label}:`, {
        x: 1, y: yPos, w: 2.5, h: 0.4,
        fontSize: 16, bold: true, color: '333333'
      });
      slide.addText(info.value, {
        x: 3.5, y: yPos, w: 5, h: 0.4,
        fontSize: 16, color: '666666'
      });
      yPos += 0.5;
    });

    // 비전 슬라이드
    slide = pptx.addSlide();
    slide.addText('비전 & 미션', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: '0066CC'
    });
    slide.addText('순환 경제를 선도하는 대한민국 대표 폐기물 재생 골재 기업', {
      x: 1, y: 1.5, w: 8, h: 1,
      fontSize: 20, align: 'center', color: '333333', fill: { color: 'E3F2FD' }
    });

    const missions = [
      '환경 보호: 폐기물을 자원으로 재탄생',
      '기술 혁신: 스마트 팩토리 구현',
      '품질 보증: 최고 품질의 재생 골재'
    ];

    yPos = 3;
    missions.forEach(mission => {
      slide.addText('●  ' + mission, {
        x: 1.5, y: yPos, w: 7, h: 0.5,
        fontSize: 18, color: '333333'
      });
      yPos += 0.6;
    });
  };

  // 사업 계획서 슬라이드 생성
  const createBusinessPlanSlides = (pptx: any) => {
    // 커버
    let slide = pptx.addSlide();
    slide.background = { fill: '6366F1' };
    slide.addText('사업 계획서', {
      x: 1, y: 2.5, w: 8, h: 1,
      fontSize: 44, bold: true, color: 'FFFFFF', align: 'center'
    });
    slide.addText('주식회사 하이콘 코리아', {
      x: 1, y: 3.5, w: 8, h: 0.5,
      fontSize: 24, color: 'E0E0E0', align: 'center'
    });

    // 사업 목표
    slide = pptx.addSlide();
    slide.addText('사업 목표', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: '6366F1'
    });

    const goals = [
      '순환 경제 실현을 통 환경 보호',
      '연간 30만 처리 능력 확보',
      '스마트 팩토리 고도화',
      '신규 시장 진출 (철근 스페이서 등)'
    ];

    let yPos = 1.5;
    goals.forEach((goal, idx) => {
      slide.addText(`${idx + 1}. ${goal}`, {
        x: 1, y: yPos, w: 8, h: 0.5,
        fontSize: 18, color: '333333'
      });
      yPos += 0.7;
    });
  };

  // ESG 보고서 슬라이드 생성
  const createESGReportSlides = (pptx: any) => {
    // 커버
    let slide = pptx.addSlide();
    slide.background = { fill: '10B981' };
    slide.addText('ESG 보고서', {
      x: 1, y: 2.5, w: 8, h: 1,
      fontSize: 44, bold: true, color: 'FFFFFF', align: 'center'
    });
    slide.addText('Environmental, Social & Governance Report', {
      x: 1, y: 3.5, w: 8, h: 0.5,
      fontSize: 20, color: 'E0E0E0', align: 'center'
    });

    // ESG 성과
    slide = pptx.addSlide();
    slide.addText('ESG 핵심 성과', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: '10B981'
    });

    const esgMetrics = [
      { metric: '탄소 절감', value: '85%', desc: '전년 대비 탄소 배출량 감소' },
      { metric: '재활용률', value: '78%', desc: '폐기물 재활용률' },
      { metric: '에너지 효율', value: '92%', desc: '에너지 효율 개선' },
      { metric: '안전 사고', value: '0건', desc: '2024년 중대 안전사고' }
    ];

    let yPos = 1.5;
    esgMetrics.forEach(item => {
      slide.addText(item.metric, {
        x: 1, y: yPos, w: 2, h: 0.4,
        fontSize: 16, bold: true, color: '333333'
      });
      slide.addText(item.value, {
        x: 3, y: yPos, w: 1.5, h: 0.4,
        fontSize: 18, bold: true, color: '10B981'
      });
      slide.addText(item.desc, {
        x: 4.5, y: yPos, w: 4, h: 0.4,
        fontSize: 14, color: '666666'
      });
      yPos += 0.7;
    });
  };

  // 스페이서 시장 조사 슬라이드
  const createSpacerMarketSlides = (pptx: any) => {
    // 커버
    let slide = pptx.addSlide();
    slide.background = { fill: '4F46E5' };
    slide.addText('철근 스페이서', {
      x: 1, y: 2.2, w: 8, h: 0.8,
      fontSize: 44, bold: true, color: 'FFFFFF', align: 'center'
    });
    slide.addText('시장 조사 보고서', {
      x: 1, y: 3, w: 8, h: 0.6,
      fontSize: 32, color: 'FFFFFF', align: 'center'
    });
    slide.addText('순환골재를 활용한 건설자재 시장 진출 전략', {
      x: 1, y: 3.8, w: 8, h: 0.4,
      fontSize: 16, color: 'C7D2FE', align: 'center'
    });

    // 조사 개요
    slide = pptx.addSlide();
    slide.addText('조사 개요', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: '4F46E5'
    });
    
    const overview = [
      { label: '조사 목적', value: '순환재 활용 신사업 타당성 분석' },
      { label: '조사 기간', value: '2024년 11월' },
      { label: '대상 시장', value: '국내 건설현장 철근 스페이서 시장' },
      { label: '조사 기관', value: '주식회사 하이콘 코리아' }
    ];
    
    let yPos = 1.5;
    overview.forEach(item => {
      slide.addText(item.label, {
        x: 1, y: yPos, w: 2.5, h: 0.5,
        fontSize: 18, bold: true, color: '333333',
        fill: { color: 'EEF2FF' }
      });
      slide.addText(item.value, {
        x: 3.7, y: yPos, w: 5, h: 0.5,
        fontSize: 16, color: '666666'
      });
      yPos += 0.7;
    });

    // 시장 규모
    slide = pptx.addSlide();
    slide.addText('시장 규모 (2024년 추정)', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: '4F46E5'
    });

    const marketSize = [
      { value: '3,500억원', label: '연간 시장 규모' },
      { value: '15억개', label: '연간 사용량 (추정)' },
      { value: '7.2%', label: '연평균 성장률' }
    ];

    yPos = 1.8;
    let xPos = 1;
    marketSize.forEach(item => {
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: xPos, y: yPos, w: 2.5, h: 1.2,
        fill: { color: '4F46E5' }
      });
      slide.addText(item.value, {
        x: xPos, y: yPos + 0.2, w: 2.5, h: 0.5,
        fontSize: 28, bold: true, color: 'FFFFFF', align: 'center'
      });
      slide.addText(item.label, {
        x: xPos, y: yPos + 0.7, w: 2.5, h: 0.4,
        fontSize: 12, color: 'C7D2FE', align: 'center'
      });
      xPos += 2.8;
    });

    // 스페이서 종류
    slide = pptx.addSlide();
    slide.addText('스페이서 종류별 시장 점유율', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: '4F46E5'
    });

    const spacerTypes = [
      { type: '플라스틱 스페이서', share: '55%', price: '80-150원/개', features: '경량, 저가, 내구성 낮음' },
      { type: '콘크리트 스페이서', share: '30%', price: '150-300원/개', features: '고강도, 무겁고 깨지기 쉬움' },
      { type: '철재 스페이서', share: '10%', price: '200-400원/개', features: '고강도, 고가, 부식 위험' },
      { type: '수입 프리미엄', share: '5%', price: '500-1,000원/개', features: '독일/일본제, 최고급' }
    ];

    yPos = 1.5;
    slide.addText('유형', {
      x: 0.8, y: yPos, w: 2.2, h: 0.4,
      fontSize: 14, bold: true, color: 'FFFFFF',
      fill: { color: '4F46E5' }
    });
    slide.addText('점유율', {
      x: 3.2, y: yPos, w: 1.2, h: 0.4,
      fontSize: 14, bold: true, color: 'FFFFFF',
      fill: { color: '4F46E5' }
    });
    slide.addText('가격대', {
      x: 4.6, y: yPos, w: 1.8, h: 0.4,
      fontSize: 14, bold: true, color: 'FFFFFF',
      fill: { color: '4F46E5' }
    });
    slide.addText('특징', {
      x: 6.6, y: yPos, w: 2.5, h: 0.4,
      fontSize: 14, bold: true, color: 'FFFFFF',
      fill: { color: '4F46E5' }
    });

    yPos += 0.6;
    spacerTypes.forEach(item => {
      slide.addText(item.type, {
        x: 0.8, y: yPos, w: 2.2, h: 0.4,
        fontSize: 13, color: '333333'
      });
      slide.addText(item.share, {
        x: 3.2, y: yPos, w: 1.2, h: 0.4,
        fontSize: 13, bold: true, color: '4F46E5'
      });
      slide.addText(item.price, {
        x: 4.6, y: yPos, w: 1.8, h: 0.4,
        fontSize: 13, color: '333333'
      });
      slide.addText(item.features, {
        x: 6.6, y: yPos, w: 2.5, h: 0.4,
        fontSize: 11, color: '666666'
      });
      yPos += 0.5;
    });

    // 하이콘 경쟁력
    slide = pptx.addSlide();
    slide.addText('하이콘 순환골재 스페이서 경쟁력', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 28, bold: true, color: '4F46E5'
    });

    const advantages = [
      { title: '가격 경쟁력', desc: '목표가 100-200원/개 (플라스틱 대비 경쟁력, 콘크리트 대비 저렴)' },
      { title: '환경 가치', desc: 'ESG 경영, 순환 경제 실현, 탄소중립 기여' },
      { title: '품질 우수성', desc: '콘크리트 수준의 강도, 플라스틱보다 내구성 우수' },
      { title: '생산 기반', desc: '연 22-27만톤 폐기물 처리 능력, 안정적 원료 공급' },
      { title: '정부 정책', desc: '순환골재 사용 의무화, 친환경 건설자재 우대' }
    ];

    yPos = 1.5;
    advantages.forEach((adv, idx) => {
      slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: 0.8, y: yPos, w: 8.4, h: 0.7,
        fill: { color: idx % 2 === 0 ? 'EEF2FF' : 'FFFFFF' },
        line: { color: '4F46E5', width: 1 }
      });
      slide.addText(`${idx + 1}. ${adv.title}`, {
        x: 1, y: yPos + 0.05, w: 2, h: 0.6,
        fontSize: 16, bold: true, color: '4F46E5'
      });
      slide.addText(adv.desc, {
        x: 3.2, y: yPos + 0.05, w: 5.8, h: 0.6,
        fontSize: 13, color: '333333'
      });
      yPos += 0.85;
    });

    // SWOT 분석
    slide = pptx.addSlide();
    slide.addText('SWOT 분석', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: '4F46E5'
    });

    const swot = [
      { 
        title: 'Strengths (강점)', 
        color: '10B981',
        items: ['순환골재 자체 생산', '낮은 원가', '환경 친화적', '정부 정책 부합']
      },
      { 
        title: 'Weaknesses (약점)', 
        color: 'EF4444',
        items: ['브랜드 인지도 부족', '초기 투자 필요', '품질 인증 필요', '시장 경험 없음']
      },
      { 
        title: 'Opportunities (기회)', 
        color: '3B82F6',
        items: ['ESG 경영 확산', '친환경 건설자재 수요 증가', '정부 지원 정책', '시장 성장세']
      },
      { 
        title: 'Threats (위협)', 
        color: 'F59E0B',
        items: ['기존 업체 가격 경쟁', '품질 신뢰성 검증', '유통망 구축', '대기업 진입']
      }
    ];

    yPos = 1.5;
    let xPos2 = 0.5;
    swot.forEach((category, idx) => {
      if (idx === 2) {
        yPos = 3.5;
        xPos2 = 0.5;
      }
      
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: xPos2, y: yPos, w: 4.5, h: 1.8,
        fill: { color: 'FFFFFF' },
        line: { color: category.color, width: 2 }
      });
      
      slide.addText(category.title, {
        x: xPos2 + 0.2, y: yPos + 0.1, w: 4.1, h: 0.4,
        fontSize: 14, bold: true, color: category.color
      });
      
      let itemY = yPos + 0.6;
      category.items.forEach(item => {
        slide.addText('• ' + item, {
          x: xPos2 + 0.3, y: itemY, w: 3.9, h: 0.25,
          fontSize: 11, color: '333333'
        });
        itemY += 0.28;
      });
      
      xPos2 += 5;
    });

    // 시장 진입 전략
    slide = pptx.addSlide();
    slide.addText('시장 진입 전략 로드맵', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: '4F46E5'
    });

    const roadmap = [
      { phase: '1단계 (0-6개월)', title: '제품 개발 & 인증', tasks: ['금형 제작', 'KS 인증 획득', '샘플 테스트', '초기 생산'] },
      { phase: '2단계 (6-12개월)', title: '파일럿 판매', tasks: ['중소 건설사 공략', '현장 테스트', '피드백 수집', '품질 개선'] },
      { phase: '3단계 (1-2년)', title: '시장 확대', tasks: ['대형 건설사 진입', '유통망 구축', '브랜드 마케팅', '생산 증설'] },
      { phase: '4단계 (2년+)', title: '시장 리더십', tasks: ['시장 점유율 10%', '수출 시장 진출', '제품 라인 확대', '프리미엄화'] }
    ];

    yPos = 1.5;
    roadmap.forEach((stage, idx) => {
      const colors = ['818CF8', '34D399', 'FBBF24', 'F472B6'];
      
      slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: 0.8, y: yPos, w: 8.4, h: 1,
        fill: { color: colors[idx] },
        line: { color: colors[idx], width: 0 }
      });
      
      slide.addText(stage.phase, {
        x: 1, y: yPos + 0.1, w: 8, h: 0.3,
        fontSize: 13, bold: true, color: 'FFFFFF'
      });
      
      slide.addText(stage.title, {
        x: 1, y: yPos + 0.45, w: 8, h: 0.4,
        fontSize: 16, bold: true, color: 'FFFFFF'
      });
      
      yPos += 1.15;
    });

    // 재무 전망
    slide = pptx.addSlide();
    slide.addText('재무 전망 (3개년)', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: '4F46E5'
    });

    const financial = [
      { year: '1년차', revenue: '5억원', volume: '500만개', margin: '손익분기' },
      { year: '2년차', revenue: '20억원', volume: '2,000만개', margin: '영업이익 15%' },
      { year: '3년차', revenue: '50억원', volume: '5,000만개', margin: '영업이익 20%' }
    ];

    yPos = 1.5;
    slide.addText('연도', {
      x: 1, y: yPos, w: 1.5, h: 0.5,
      fontSize: 14, bold: true, color: 'FFFFFF',
      fill: { color: '4F46E5' }
    });
    slide.addText('매출', {
      x: 2.8, y: yPos, w: 2, h: 0.5,
      fontSize: 14, bold: true, color: 'FFFFFF',
      fill: { color: '4F46E5' }
    });
    slide.addText('판매량', {
      x: 5.1, y: yPos, w: 2, h: 0.5,
      fontSize: 14, bold: true, color: 'FFFFFF',
      fill: { color: '4F46E5' }
    });
    slide.addText('수익성', {
      x: 7.4, y: yPos, w: 1.8, h: 0.5,
      fontSize: 14, bold: true, color: 'FFFFFF',
      fill: { color: '4F46E5' }
    });

    yPos += 0.7;
    financial.forEach(item => {
      slide.addText(item.year, {
        x: 1, y: yPos, w: 1.5, h: 0.5,
        fontSize: 14, bold: true, color: '333333'
      });
      slide.addText(item.revenue, {
        x: 2.8, y: yPos, w: 2, h: 0.5,
        fontSize: 14, color: '10B981', bold: true
      });
      slide.addText(item.volume, {
        x: 5.1, y: yPos, w: 2, h: 0.5,
        fontSize: 14, color: '333333'
      });
      slide.addText(item.margin, {
        x: 7.4, y: yPos, w: 1.8, h: 0.5,
        fontSize: 13, color: '666666'
      });
      yPos += 0.7;
    });

    // 결론 및 제안
    slide = pptx.addSlide();
    slide.background = { fill: '4F46E5' };
    slide.addText('결론 및 제안', {
      x: 1, y: 1.5, w: 8, h: 0.8,
      fontSize: 36, bold: true, color: 'FFFFFF', align: 'center'
    });

    const conclusions = [
      '✓ 시장 규모: 연 3,500억원의 성장하는 시장',
      '✓ 경쟁 우위: 순환골재 활용으로 원가 경쟁력 확보',
      '✓ ESG 가치: 환경 친화적 제품으로 정책 지원 가능',
      '✓ 실행 전략: 4단계 로드맵으로 안정적 시장 진입',
      '✓ 재무 전망: 3년 내 연 50억원 매출 달성 가능'
    ];

    yPos = 2.8;
    conclusions.forEach(conclusion => {
      slide.addText(conclusion, {
        x: 1.5, y: yPos, w: 7, h: 0.4,
        fontSize: 16, color: 'FFFFFF'
      });
      yPos += 0.5;
    });
  };

  // 실행 계획서 슬라이드
  const createActionPlanSlides = (pptx: any) => {
    // 커버
    let slide = pptx.addSlide();
    slide.background = { fill: 'F59E0B' };
    slide.addText('시장 조사', {
      x: 1, y: 2.2, w: 8, h: 0.8,
      fontSize: 44, bold: true, color: 'FFFFFF', align: 'center'
    });
    slide.addText('실행 계획서', {
      x: 1, y: 3, w: 8, h: 0.6,
      fontSize: 32, color: 'FFFFFF', align: 'center'
    });

    // 4단계 실행 계획
    slide = pptx.addSlide();
    slide.addText('4단계 실행 계획', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'F59E0B'
    });

    const phases = [
      { phase: 'Phase 1', title: '공식 시장 조사', period: '2-3개월' },
      { phase: 'Phase 2', title: '업계 전문가 자문', period: '1개월' },
      { phase: 'Phase 3', title: '정확한 원가 계산', period: '1개월' },
      { phase: 'Phase 4', title: '파일럿 테스트', period: '3-6개월' }
    ];

    let yPos = 1.5;
    phases.forEach(p => {
      slide.addText(p.phase, {
        x: 1, y: yPos, w: 1.5, h: 0.5,
        fontSize: 14, bold: true, color: 'FFFFFF', fill: { color: 'F59E0B' }
      });
      slide.addText(p.title, {
        x: 2.7, y: yPos, w: 4, h: 0.5,
        fontSize: 16, bold: true, color: '333333'
      });
      slide.addText(p.period, {
        x: 7, y: yPos, w: 1.5, h: 0.5,
        fontSize: 14, color: '666666'
      });
      yPos += 0.7;
    });
  };

  // 가격 템플릿 슬라이드
  const createPriceTemplateSlides = (pptx: any) => {
    // 커버
    let slide = pptx.addSlide();
    slide.background = { fill: '8B5CF6' };
    slide.addText('가격 분석 템플릿', {
      x: 1, y: 2.5, w: 8, h: 1,
      fontSize: 44, bold: true, color: 'FFFFFF', align: 'center'
    });
    slide.addText('실제 시장 조사용 작성 템플릿', {
      x: 1, y: 3.5, w: 8, h: 0.5,
      fontSize: 20, color: 'E0E0E0', align: 'center'
    });

    // 템플릿 구성
    slide = pptx.addSlide();
    slide.addText('템플릿 구성', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: '8B5CF6'
    });

    const templates = [
      { name: 'Template 1', desc: '가격 비교 분석표', detail: '경쟁사 제품 가격 조사 및 하이콘 목표가 설정' },
      { name: 'Template 2', desc: '제조 원가 계산표', detail: '순환골재 스페이서 제조 원가 상세 계산' },
      { name: 'Template 3', desc: '경쟁사 조사 체크리스트', detail: '단계별 조사 항목 및 실행 가이드' }
    ];

    let yPos = 1.5;
    templates.forEach(t => {
      slide.addText(t.name, {
        x: 1, y: yPos, w: 2, h: 0.4,
        fontSize: 16, bold: true, color: '8B5CF6'
      });
      slide.addText(t.desc, {
        x: 1, y: yPos + 0.4, w: 7.5, h: 0.3,
        fontSize: 14, bold: true, color: '333333'
      });
      slide.addText(t.detail, {
        x: 1, y: yPos + 0.7, w: 7.5, h: 0.3,
        fontSize: 12, color: '666666'
      });
      yPos += 1.3;
    });

    // 사용 방법
    slide = pptx.addSlide();
    slide.addText('템플릿 작성 순서', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: '8B5CF6'
    });

    const steps = [
      'Template 3 (체크리스트)부터 시작',
      '→ Phase 1~4를 순차적으로 진행하며 정보 수집',
      '',
      'Template 2 (제조 원가) 계산',
      '→ 하이콘 내부 데이터로 실제 원가 산출',
      '',
      'Template 1 (가격 비교) 작성',
      '→ 수집한 정보와 계산한 원가로 경쟁력 분석'
    ];

    yPos = 1.5;
    steps.forEach(step => {
      if (step === '') {
        yPos += 0.3;
      } else {
        const isArrow = step.startsWith('→');
        slide.addText(step, {
          x: isArrow ? 2 : 1.5,
          y: yPos,
          w: 7,
          h: 0.4,
          fontSize: isArrow ? 14 : 16,
          color: isArrow ? '666666' : '333333',
          bold: !isArrow
        });
        yPos += 0.5;
      }
    });
  };

  // 물류 창고 보고서 슬라이드
  const createLogisticsWarehouseSlides = (pptx: any) => {
    // 커버
    let slide = pptx.addSlide();
    slide.background = { fill: 'FF9500' };
    slide.addText('물류 창고 보고서', {
      x: 1, y: 2.5, w: 8, h: 1,
      fontSize: 44, bold: true, color: 'FFFFFF', align: 'center'
    });
    slide.addText('주식회사 하이콘 코리아', {
      x: 1, y: 3.5, w: 8, h: 0.5,
      fontSize: 24, color: 'E0E0E0', align: 'center'
    });

    // 창고 개요
    slide = pptx.addSlide();
    slide.addText('창고 개요', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const warehouseInfo = [
      { label: '창고명', value: '하이콘 창고' },
      { label: '위치', value: '서울시 강남구' },
      { label: '면적', value: '10,000㎡' },
      { label: '관용 용품', value: '철근 스페이서, 폐기물 재생 골재' },
      { label: '보관 용량', value: '연간 30만톤' },
      { label: '보안 시스템', value: 'CCTV, 출입 관리 시스템' }
    ];

    let yPos = 1.5;
    warehouseInfo.forEach(info => {
      slide.addText(`${info.label}:`, {
        x: 1, y: yPos, w: 2.5, h: 0.4,
        fontSize: 16, bold: true, color: '333333'
      });
      slide.addText(info.value, {
        x: 3.5, y: yPos, w: 5, h: 0.4,
        fontSize: 16, color: '666666'
      });
      yPos += 0.5;
    });

    // 창고 운영
    slide = pptx.addSlide();
    slide.addText('창고 운영', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const operations = [
      '입고 관리: 입고 시스템 자동화',
      '보관 관리: 온라인 보관 위치 추적',
      '출고 관리: 출고 요청 자동 처리',
      '재고 관리: 실시간 재고 현황 모니터링'
    ];

    yPos = 1.5;
    operations.forEach(op => {
      slide.addText('●  ' + op, {
        x: 1.5, y: yPos, w: 7, h: 0.5,
        fontSize: 18, color: '333333'
      });
      yPos += 0.6;
    });

    // 창고 효율성
    slide = pptx.addSlide();
    slide.addText('창고 효율성', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const efficiencyMetrics = [
      { metric: '작업 시간 단축', value: '30%', desc: '자동화 시스템 도입으로 작업 시간 단축' },
      { metric: '오류 감소', value: '20%', desc: '자동화 시스템으로 인한 오류 감소' },
      { metric: '재고 정확성 향상', value: '95%', desc: '실시간 모니터링으로 재고 정확성 향상' },
      { metric: '보안 강화', value: '100%', desc: 'CCTV 및 출입 관리 시스템으로 보안 강화' }
    ];

    yPos = 1.5;
    efficiencyMetrics.forEach(item => {
      slide.addText(item.metric, {
        x: 1, y: yPos, w: 2, h: 0.4,
        fontSize: 16, bold: true, color: '333333'
      });
      slide.addText(item.value, {
        x: 3, y: yPos, w: 1.5, h: 0.4,
        fontSize: 18, bold: true, color: 'FF9500'
      });
      slide.addText(item.desc, {
        x: 4.5, y: yPos, w: 4, h: 0.4,
        fontSize: 14, color: '666666'
      });
      yPos += 0.7;
    });

    // 창고 향후 계획
    slide = pptx.addSlide();
    slide.addText('창고 향후 계획', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const futurePlans = [
      '자동화 시스템 확장: 더 많은 작업 자동화',
      '보안 강화: 추가 CCTV 설치 및 보안 시스템 업그레이드',
      '재고 관리 향상: AI 기반 재고 예측 시스템 도입',
      '창고 확장: 추가 공간 확보 및 보관 용량 증가'
    ];

    yPos = 1.5;
    futurePlans.forEach(plan => {
      slide.addText('●  ' + plan, {
        x: 1.5, y: yPos, w: 7, h: 0.5,
        fontSize: 18, color: '333333'
      });
      yPos += 0.6;
    });
  };

  // 철근 스페이서 공장 계획서 슬라이드
  const createRebarSpacerFactorySlides = (pptx: any) => {
    // 커버
    let slide = pptx.addSlide();
    slide.background = { fill: 'FF9500' };
    slide.addText('철근 스페이서 공장 계획서', {
      x: 1, y: 2.5, w: 8, h: 1,
      fontSize: 44, bold: true, color: 'FFFFFF', align: 'center'
    });
    slide.addText('주식회사 하이콘 코리아', {
      x: 1, y: 3.5, w: 8, h: 0.5,
      fontSize: 24, color: 'E0E0E0', align: 'center'
    });

    // 공장 개요
    slide = pptx.addSlide();
    slide.addText('공장 개요', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const factoryInfo = [
      { label: '공장명', value: '하이콘 철근 스페이서 공장' },
      { label: '위치', value: '서울시 강남구' },
      { label: '면적', value: '15,000㎡' },
      { label: '생산 용품', value: '철근 스페이서' },
      { label: '생산 용량', value: '연간 50만개' },
      { label: '보안 시스템', value: 'CCTV, 출입 관리 시스템' }
    ];

    let yPos = 1.5;
    factoryInfo.forEach(info => {
      slide.addText(`${info.label}:`, {
        x: 1, y: yPos, w: 2.5, h: 0.4,
        fontSize: 16, bold: true, color: '333333'
      });
      slide.addText(info.value, {
        x: 3.5, y: yPos, w: 5, h: 0.4,
        fontSize: 16, color: '666666'
      });
      yPos += 0.5;
    });

    // 공장 운영
    slide = pptx.addSlide();
    slide.addText('공장 운영', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const operations = [
      '생산 관리: 생산 라인 자동화',
      '품질 관리: 온라인 품질 검사 시스템',
      '재고 관리: 실시간 재고 현황 모니터링'
    ];

    yPos = 1.5;
    operations.forEach(op => {
      slide.addText('●  ' + op, {
        x: 1.5, y: yPos, w: 7, h: 0.5,
        fontSize: 18, color: '333333'
      });
      yPos += 0.6;
    });

    // 공장 효율성
    slide = pptx.addSlide();
    slide.addText('공장 효율성', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const efficiencyMetrics = [
      { metric: '작업 시간 단축', value: '40%', desc: '자동화 시스템 도입으로 작업 시간 단축' },
      { metric: '오류 감소', value: '25%', desc: '자동화 시스템으로 인한 오류 감소' },
      { metric: '재고 정확성 향상', value: '98%', desc: '실시간 모니터링으로 재고 정확성 향상' },
      { metric: '보안 강화', value: '100%', desc: 'CCTV 및 출입 관리 시스템으로 보안 강화' }
    ];

    yPos = 1.5;
    efficiencyMetrics.forEach(item => {
      slide.addText(item.metric, {
        x: 1, y: yPos, w: 2, h: 0.4,
        fontSize: 16, bold: true, color: '333333'
      });
      slide.addText(item.value, {
        x: 3, y: yPos, w: 1.5, h: 0.4,
        fontSize: 18, bold: true, color: 'FF9500'
      });
      slide.addText(item.desc, {
        x: 4.5, y: yPos, w: 4, h: 0.4,
        fontSize: 14, color: '666666'
      });
      yPos += 0.7;
    });

    // 공장 향후 계획
    slide = pptx.addSlide();
    slide.addText('공장 향후 계획', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const futurePlans = [
      '자동화 시스템 확장: 더 많은 작업 자동화',
      '보안 강화: 추가 CCTV 설치 및 보안 시스템 업그레이드',
      '재고 관리 향상: AI 기반 재고 예측 시스템 도입',
      '공장 확장: 추가 공간 확보 및 생산 용량 증가'
    ];

    yPos = 1.5;
    futurePlans.forEach(plan => {
      slide.addText('●  ' + plan, {
        x: 1.5, y: yPos, w: 7, h: 0.5,
        fontSize: 18, color: '333333'
      });
      yPos += 0.6;
    });
  };

  // 철근 스페이서 공급자 가이드 슬라이드
  const createRebarSpacerSupplierGuideSlides = (pptx: any) => {
    // 커버
    let slide = pptx.addSlide();
    slide.background = { fill: 'FF9500' };
    slide.addText('철근 스페이서 공급자 가이드', {
      x: 1, y: 2.5, w: 8, h: 1,
      fontSize: 44, bold: true, color: 'FFFFFF', align: 'center'
    });
    slide.addText('주식회사 하이콘 코리아', {
      x: 1, y: 3.5, w: 8, h: 0.5,
      fontSize: 24, color: 'E0E0E0', align: 'center'
    });

    // 공급자 가이드 개요
    slide = pptx.addSlide();
    slide.addText('공급자 가이드 개요', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const guideOverview = [
      { label: '목적', value: '철근 스페이서 공급자에게 제공되는 가이드' },
      { label: '대상', value: '철근 스페이서 공급자' },
      { label: '내용', value: '공급 조건, 품질 기준, 검사 절차 등' }
    ];

    let yPos = 1.5;
    guideOverview.forEach(info => {
      slide.addText(`${info.label}:`, {
        x: 1, y: yPos, w: 2.5, h: 0.4,
        fontSize: 16, bold: true, color: '333333'
      });
      slide.addText(info.value, {
        x: 3.5, y: yPos, w: 5, h: 0.4,
        fontSize: 16, color: '666666'
      });
      yPos += 0.5;
    });

    // 공급 조건
    slide = pptx.addSlide();
    slide.addText('공급 조건', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const supplyConditions = [
      '최소 주문량: 10,000개',
      '납품 기간: 주문 후 2주 이내',
      '납품 장소: 하이콘 창고'
    ];

    yPos = 1.5;
    supplyConditions.forEach(condition => {
      slide.addText('●  ' + condition, {
        x: 1.5, y: yPos, w: 7, h: 0.5,
        fontSize: 18, color: '333333'
      });
      yPos += 0.6;
    });

    // 품질 기준
    slide = pptx.addSlide();
    slide.addText('품질 기준', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const qualityStandards = [
      '강도: 최소 300MPa',
      '내구성: 최소 10만회 굴림 테스트 통과',
      '표면 상태: 부식 없음, 균열 없음'
    ];

    yPos = 1.5;
    qualityStandards.forEach(standard => {
      slide.addText('●  ' + standard, {
        x: 1.5, y: yPos, w: 7, h: 0.5,
        fontSize: 18, color: '333333'
      });
      yPos += 0.6;
    });

    // 검사 절차
    slide = pptx.addSlide();
    slide.addText('검사 절차', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const inspectionProcedures = [
      '입고 검사: 품질 기준 확인',
      '생산 검사: 생산 라인에서 품질 검사',
      '출고 검사: 최종 품질 검사'
    ];

    yPos = 1.5;
    inspectionProcedures.forEach(procedure => {
      slide.addText('●  ' + procedure, {
        x: 1.5, y: yPos, w: 7, h: 0.5,
        fontSize: 18, color: '333333'
      });
      yPos += 0.6;
    });

    // 공급자 협약
    slide = pptx.addSlide();
    slide.addText('공급자 협약', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const supplierAgreement = [
      '계약 기간: 1년',
      '계약 갱신: 연간 재평가 후 갱신 가능',
      '계약 해지: 3개월 전 사전 통지 필요'
    ];

    yPos = 1.5;
    supplierAgreement.forEach(agreement => {
      slide.addText('●  ' + agreement, {
        x: 1.5, y: yPos, w: 7, h: 0.5,
        fontSize: 18, color: '333333'
      });
      yPos += 0.6;
    });

    // 공급자 지원
    slide = pptx.addSlide();
    slide.addText('공급자 지원', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const supplierSupport = [
      '기술 지원: 생산 기술 교육 제공',
      '품질 지원: 품질 개선 조언 제공',
      '마케팅 지원: 마케팅 자료 제공'
    ];

    yPos = 1.5;
    supplierSupport.forEach(support => {
      slide.addText('●  ' + support, {
        x: 1.5, y: yPos, w: 7, h: 0.5,
        fontSize: 18, color: '333333'
      });
      yPos += 0.6;
    });
  };

  // 철근 스페이서 장비 보고서 슬라이드
  const createRebarSpacerEquipmentReportSlides = (pptx: any) => {
    // 커버
    let slide = pptx.addSlide();
    slide.background = { fill: 'FF9500' };
    slide.addText('철근 스페이서 장비 보고서', {
      x: 1, y: 2.5, w: 8, h: 1,
      fontSize: 44, bold: true, color: 'FFFFFF', align: 'center'
    });
    slide.addText('주식회사 하이콘 코리아', {
      x: 1, y: 3.5, w: 8, h: 0.5,
      fontSize: 24, color: 'E0E0E0', align: 'center'
    });

    // 장비 개요
    slide = pptx.addSlide();
    slide.addText('장비 개요', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const equipmentInfo = [
      { label: '장비명', value: '철근 스페이서 제작 장비' },
      { label: '제조사', value: '하이콘 코리아' },
      { label: '설치 위치', value: '서울시 강남구 하이콘 공장' },
      { label: '생산 용량', value: '연간 50만개' },
      { label: '주요 기능', value: '자동화 생산, 품질 검사, 재고 관리' }
    ];

    let yPos = 1.5;
    equipmentInfo.forEach(info => {
      slide.addText(`${info.label}:`, {
        x: 1, y: yPos, w: 2.5, h: 0.4,
        fontSize: 16, bold: true, color: '333333'
      });
      slide.addText(info.value, {
        x: 3.5, y: yPos, w: 5, h: 0.4,
        fontSize: 16, color: '666666'
      });
      yPos += 0.5;
    });

    // 장비 운영
    slide = pptx.addSlide();
    slide.addText('장비 운영', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const operations = [
      '생산 관리: 생산 라인 자동화',
      '품질 관리: 온라인 품질 검사 시스템',
      '재고 관리: 실시간 재고 현황 모니터링'
    ];

    yPos = 1.5;
    operations.forEach(op => {
      slide.addText('●  ' + op, {
        x: 1.5, y: yPos, w: 7, h: 0.5,
        fontSize: 18, color: '333333'
      });
      yPos += 0.6;
    });

    // 장비 효율성
    slide = pptx.addSlide();
    slide.addText('장비 효율성', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const efficiencyMetrics = [
      { metric: '작업 시간 단축', value: '40%', desc: '자동화 시스템 도입으로 작업 시간 단축' },
      { metric: '오류 감소', value: '25%', desc: '자동화 시스템으로 인한 오류 감소' },
      { metric: '재고 정확성 향상', value: '98%', desc: '실시간 모니터링으로 재고 정확성 향상' },
      { metric: '보안 강화', value: '100%', desc: 'CCTV 및 출입 관리 시스템으로 보안 강화' }
    ];

    yPos = 1.5;
    efficiencyMetrics.forEach(item => {
      slide.addText(item.metric, {
        x: 1, y: yPos, w: 2, h: 0.4,
        fontSize: 16, bold: true, color: '333333'
      });
      slide.addText(item.value, {
        x: 3, y: yPos, w: 1.5, h: 0.4,
        fontSize: 18, bold: true, color: 'FF9500'
      });
      slide.addText(item.desc, {
        x: 4.5, y: yPos, w: 4, h: 0.4,
        fontSize: 14, color: '666666'
      });
      yPos += 0.7;
    });

    // 장비 향후 계획
    slide = pptx.addSlide();
    slide.addText('장비 향후 계획', {
      x: 0.5, y: 0.5, w: 9, h: 0.6,
      fontSize: 32, bold: true, color: 'FF9500'
    });

    const futurePlans = [
      '자동화 시스템 확장: 더 많은 작업 자동화',
      '보안 강화: 추가 CCTV 설치 및 보안 시스템 업그레이드',
      '재고 관리 향상: AI 기반 재고 예측 시스템 도입',
      '장비 확장: 추가 공간 확보 및 생산 용량 증가'
    ];

    yPos = 1.5;
    futurePlans.forEach(plan => {
      slide.addText('●  ' + plan, {
        x: 1.5, y: yPos, w: 7, h: 0.5,
        fontSize: 18, color: '333333'
      });
      yPos += 0.6;
    });
  };

  const getDocumentComponent = () => {
    switch (docType) {
      case 'companyBrochure':
        return <CompanyBrochure />;
      case 'businessPlan':
        return <BusinessPlan />;
      case 'esgReport':
        return <ESGReport />;
      case 'spacerMarket':
        return <SpacerMarketResearch />;
      case 'actionPlan':
        return <MarketResearchActionPlan />;
      case 'priceTemplate':
        return <SpacerPriceAnalysisTemplate />;
      case 'logisticsWarehouse':
        return <LogisticsWarehouseReport />;
      case 'rebarSpacerFactory':
        return <RebarSpacerFactoryPlan />;
      case 'supplierGuide':
        return <RebarSpacerSupplierGuide />;
      case 'researchGuide':
        return <RebarSpacerResearchGuide />;
      case 'recycledGuide':
        return <RecycledAggregateSpacerGuide />;
      case 'europeanManufacturers':
        return <EuropeanSpacerManufacturers />;
      case 'concreteAdmixture':
        return <ConcreteAdmixtureManufacturers />;
      case 'japaneseManufacturers':
        return <JapaneseSpacerEquipmentReport />;
      case 'planetaryMixer':
        return <PlanetaryMixerReport />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* 헤더 - 인쇄 시 숨김 */}
      <div className="flex-shrink-0 bg-white border-b shadow-sm print:hidden">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl">{getDocumentName()}</h1>
          <div className="flex gap-2">
            <Button onClick={handleDownloadPDF} disabled={isPrinting} className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              {isPrinting ? '처리 중...' : 'PDF 다운로드'}
            </Button>
            <Button onClick={handleDownloadPPT} disabled={isGeneratingPPT} className="bg-green-600 hover:bg-green-700">
              <Presentation className="h-4 w-4 mr-2" />
              {isGeneratingPPT ? 'PPT 생성 중...' : 'PPT 다운로드'}
            </Button>
            <Button onClick={onClose} variant="outline">
              <X className="h-4 w-4 mr-2" />
              닫기
            </Button>
          </div>
        </div>
      </div>

      {/* 문서 내용 - 스크롤 가능 */}
      <div className="flex-1 overflow-y-auto print:overflow-visible">
        <div className="container mx-auto py-8 print:p-0">
          {getDocumentComponent()}
        </div>
      </div>

      {/* 인쇄용 스타일 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 210mm !important;
            height: auto !important;
            overflow: visible !important;
          }
          
          body * {
            visibility: visible !important;
          }
          
          .print\\:hidden {
            display: none !important;
            visibility: hidden !important;
          }
          
          .print\\:p-0 {
            padding: 0 !important;
          }
          
          .print\\:overflow-visible {
            overflow: visible !important;
          }
          
          /* 메인 컨테이너 */
          .flex-1, .overflow-y-auto {
            overflow: visible !important;
            height: auto !important;
            max-height: none !important;
          }
          
          /* 페이지 구분 */
          .print-page {
            page-break-after: always !important;
            page-break-inside: avoid !important;
            break-after: page !important;
            break-inside: avoid !important;
            width: 210mm !important;
            box-sizing: border-box !important;
            overflow: visible !important;
            display: block !important;
          }
          
          /* 첫 페이지 */
          .print-page:first-child {
            page-break-before: avoid !important;
            break-before: avoid !important;
          }
          
          /* 마지막 페이지는 page-break 없음 */
          .print-page:last-child {
            page-break-after: auto !important;
            break-after: auto !important;
          }
          
          /* Container 제거 */
          .container {
            max-width: none !important;
            width: 210mm !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          
          /* 테이블 페이지 넘김 */
          table {
            page-break-inside: auto !important;
          }
          
          tr {
            page-break-inside: avoid !important;
            page-break-after: auto !important;
          }
          
          thead {
            display: table-header-group !important;
          }
          
          tfoot {
            display: table-footer-group !important;
          }
          
          /* 배경색 및 그라데이션 유지 */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          /* 모든 position fixed/absolute를 relative로 */
          .fixed, .absolute {
            position: relative !important;
          }
        }
        
        @page {
          size: A4 portrait;
          margin: 0;
        }
      ` }} />
    </div>
  );
}
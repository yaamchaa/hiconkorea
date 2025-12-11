import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Copy, CheckSquare, ExternalLink, Search, FileText, Phone, Mail, Building2, Factory, Globe, Target, Lightbulb, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export function RebarSpacerResearchGuide() {
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
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Search className="h-12 w-12" />
            <div>
              <h1 className="text-4xl mb-2" style={{ fontWeight: 700 }}>철근 스페이서 설비 조사 실무 가이드</h1>
              <p className="text-xl text-green-100">Rebar Spacer Equipment Research Guide - 검증 가능한 방법론</p>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <Badge className="bg-white text-green-800 px-4 py-2">100% 실행 가능</Badge>
            <Badge className="bg-green-500 text-white px-4 py-2">단계별 가이드</Badge>
            <Badge className="bg-yellow-500 text-white px-4 py-2">검증된 방법</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        {/* 중요 안내 */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg mb-2" style={{ fontWeight: 700 }}>📌 이 가이드의 특징</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><strong>가상의 회사명 없음</strong> - 실제로 확인 가능한 정보만 제공</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><strong>직접 실행 가능</strong> - 모든 단계를 하이콘 코리아가 직접 수행 가능</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><strong>검증된 방법론</strong> - 실제 제조업에서 사용하는 조사 기법</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 조사 프로세스 개요 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl mb-6" style={{ fontWeight: 700 }}>🎯 조사 프로세스 (3단계)</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center text-xl">1</div>
                <h3 className="text-xl" style={{ fontWeight: 700 }}>한국 철근 스페이서 제조사 찾기</h3>
              </div>
              <p className="ml-13 text-gray-700">
                국내 철근 스페이서를 만드는 회사들을 찾아서, 그들이 어떤 설비를 쓰는지 확인
              </p>
            </div>

            <div className="border-l-4 border-green-600 bg-green-50 p-6 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-600 text-white rounded-full h-10 w-10 flex items-center justify-center text-xl">2</div>
                <h3 className="text-xl" style={{ fontWeight: 700 }}>설비 제조사 역추적</h3>
              </div>
              <p className="ml-13 text-gray-700">
                한국 제조사들이 사용하는 설비의 원 제조사(독일, 이탈리아, 터키 등)를 파악
              </p>
            </div>

            <div className="border-l-4 border-purple-600 bg-purple-50 p-6 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-600 text-white rounded-full h-10 w-10 flex items-center justify-center text-xl">3</div>
                <h3 className="text-xl" style={{ fontWeight: 700 }}>직접 컨택 및 RFQ 발송</h3>
              </div>
              <p className="ml-13 text-gray-700">
                파악된 설비 제조사에게 직접 연락하여 견적 요청 및 기술 상담
              </p>
            </div>
          </div>
        </div>

        {/* 1단계: 한국 제조사 찾기 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
              STEP 01
            </div>
            <h2 className="text-3xl mb-2" style={{ fontWeight: 700 }}>한국 철근 스페이서 제조사 찾기</h2>
            <p className="text-gray-600">Identify Korean Rebar Spacer Manufacturers</p>
          </div>

          {/* 방법 1: 온라인 검색 */}
          <div className="mb-8">
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>방법 1: 네이버/구글 검색</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <div className="mb-4" style={{ fontWeight: 600 }}>🔍 추천 검색 키워드 (우선순위순)</div>
              
              <div className="space-y-3">
                {[
                  { keyword: '철근 스페이서 제조', priority: '최우선', description: '가장 직접적인 키워드' },
                  { keyword: '콘크리트 스페이서 생산', priority: '높음', description: '콘크리트 타입 전문' },
                  { keyword: '플라스틱 스페이서 제조', priority: '중간', description: '플라스틱 타입도 확인' },
                  { keyword: '철근공사 부속자재', priority: '중간', description: '전체 카테고리' },
                  { keyword: '스페이서 공장', priority: '높음', description: '직접 생산 업체' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                    <div className="flex items-center gap-3 flex-1">
                      <Search className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-semibold">{item.keyword}</div>
                        <div className="text-xs text-gray-600">{item.description}</div>
                      </div>
                    </div>
                    <Badge variant={item.priority === '최우선' ? 'default' : 'secondary'}>
                      {item.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
              <div className="mb-2" style={{ fontWeight: 600 }}>💡 검색 팁</div>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• <strong>네이버 블로그/카페</strong>: 건설 관련 커뮤니티에서 실제 사용 후기 확인</div>
                <div>• <strong>네이버 쇼핑</strong>: "철근 스페이서" 검색 → 판매자 확인 → 제조사인지 유통사인지 구분</div>
                <div>• <strong>구글 이미지 검색</strong>: 제품 이미지에서 회사 로고 확인</div>
              </div>
            </div>
          </div>

          {/* 방법 2: 건설 자재 B2B 플랫폼 */}
          <div className="mb-8">
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>방법 2: 건설 자재 B2B 플랫폼</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-5 w-5 text-green-600" />
                  <strong>건자재마켓 (www.gjtmart.com)</strong>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>✓ 철근공사 자재 카테고리</div>
                  <div>✓ 제조사/공급사 구분 명확</div>
                  <div>✓ 직접 문의 가능</div>
                </div>
              </div>

              <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <strong>EC21 (www.ec21.com)</strong>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>✓ 한국 제조사 DB</div>
                  <div>✓ 영문 정보 제공</div>
                  <div>✓ 수출 업체 위주</div>
                </div>
              </div>

              <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-5 w-5 text-purple-600" />
                  <strong>토목건축자재마트</strong>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>✓ 토목/건축 전문</div>
                  <div>✓ 철근 부속자재 전문 카테고리</div>
                </div>
              </div>

              <div className="border-2 border-orange-300 rounded-lg p-4 bg-orange-50">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-5 w-5 text-orange-600" />
                  <strong>네이버 스마트스토어</strong>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>✓ "철근 스페이서" 검색</div>
                  <div>✓ 사업자 정보 확인</div>
                  <div>✓ 리뷰에서 제조사 정보 파악</div>
                </div>
              </div>
            </div>
          </div>

          {/* 방법 3: 정부 DB 활용 */}
          <div className="mb-8">
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>방법 3: 정부 공공 데이터베이스 (가장 정확)</h3>
            
            <div className="space-y-4">
              <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  <div>
                    <strong className="text-lg">조달청 나라장터 (www.g2b.go.kr)</strong>
                    <div className="text-sm text-gray-600">가장 신뢰도 높은 방법</div>
                  </div>
                </div>
                
                <div className="bg-white rounded p-4 mb-3">
                  <div className="mb-2" style={{ fontWeight: 600 }}>🎯 실행 단계</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</div>
                      <div>나라장터 접속 → "물품검색"</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</div>
                      <div>"철근 스페이서" 또는 "콘크리트 스페이서" 검색</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</div>
                      <div>낙찰 기업 정보 확인 → 제조사 또는 공급사 구분</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</div>
                      <div>제조사 사업자등록번호 → 국세청 사업자정보 조회로 정확한 회사명 확인</div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-300 rounded p-3">
                  <div className="text-sm text-gray-700">
                    <strong className="text-green-700">✅ 장점:</strong> 정부 조달에 납품하는 회사들 = 일정 수준 이상의 품질 보증
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-500 rounded-lg p-6 bg-green-50">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                  <div>
                    <strong className="text-lg">KS 인증 제품 조회</strong>
                    <div className="text-sm text-gray-600">품질 인증 제조사 확인</div>
                  </div>
                </div>
                
                <div className="bg-white rounded p-4">
                  <div className="mb-2" style={{ fontWeight: 600 }}>🎯 실행 단계</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</div>
                      <div>한국표준협회(KSA) 홈페이지 접속</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</div>
                      <div>KS 인증제품 검색 → "스페이서" 또는 "철근"</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</div>
                      <div>인증받은 제조사 목록 확인</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 방법 4: 현장 조사 */}
          <div>
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>방법 4: 건설 현장 직접 조사 (가장 확실)</h3>
            
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Target className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>대형 건설 현장 방문</strong>
                    <div className="text-gray-700 mt-1">→ 철근 스페이서 제품 포장/박스에 제조사 정보 확인</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>현장 관리자/자재 담당자 인터뷰</strong>
                    <div className="text-gray-700 mt-1">→ 어떤 회사 제품 쓰는지, 품질은 어떤지 직접 질문</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Building2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>자재상/건자재 유통업체 방문</strong>
                    <div className="text-gray-700 mt-1">→ 어떤 제조사 제품이 잘 팔리는지 문의</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2단계: 설비 제조사 역추적 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm mb-4">
              STEP 02
            </div>
            <h2 className="text-3xl mb-2" style={{ fontWeight: 700 }}>한국 제조사가 쓰는 설비 알아내기</h2>
            <p className="text-gray-600">Identify Equipment Used by Korean Manufacturers</p>
          </div>

          {/* 직접 문의 */}
          <div className="mb-8">
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>방법 1: 직접 전화/이메일 문의 (가장 빠름)</h3>
            
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-4">
              <div className="mb-4" style={{ fontWeight: 600 }}>📞 전화 문의 스크립트 (복사해서 사용)</div>
              
              <div className="bg-white rounded-lg p-4 relative">
                <button
                  onClick={() => copyToClipboard(`안녕하세요, 저희는 경기도 화성에서 재생골재 사업을 하는 하이콘 코리아입니다.

현재 철근 스페이서 생산 라인 구축을 계획하고 있어서 연락드렸습니다.

귀사에서 철근 스페이서를 생산하실 때 어떤 설비를 사용하시는지 여쭤봐도 될까요?

특히 알고 싶은 내용:
1. 설비 제조사 (국내/해외)
2. 설비 모델명
3. 시간당 생산 능력
4. 도입 시기 및 만족도
5. 유지보수는 어떻게 하시는지

혹시 공장 방문이 가능할까요? 벤치마킹하고 싶습니다.

감사합니다.`, 'phone-script')}
                  className="absolute top-2 right-2 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 flex items-center gap-1"
                >
                  {copiedText === 'phone-script' ? (
                    <>
                      <CheckSquare className="h-3 w-3" />
                      복사됨!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      복사
                    </>
                  )}
                </button>
                
                <div className="text-sm whitespace-pre-wrap text-gray-700 pr-20">
{`안녕하세요, 저희는 경기도 화성에서 재생골재 사업을 하는 
하이콘 코리아입니다.

현재 철근 스페이서 생산 라인 구축을 계획하고 있어서 
연락드렸습니다.

귀사에서 철근 스페이서를 생산하실 때 어떤 설비를 
사용하시는지 여쭤봐도 될까요?

특히 알고 싶은 내용:
1. 설비 제조사 (국내/해외)
2. 설비 모델명
3. 시간당 생산 능력
4. 도입 시기 및 만족도
5. 유지보수는 어떻게 하시는지

혹시 공장 방문이 가능할까요? 벤치마킹하고 싶습니다.

감사합니다.`}
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-300 rounded p-4">
              <div className="mb-2" style={{ fontWeight: 600 }}>✅ 전화 문의 팁</div>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• <strong>경쟁사가 아님을 명확히</strong>: "저희는 재생골재 전문이라 다른 분야입니다"</div>
                <div>• <strong>Win-Win 제안</strong>: "향후 재생골재 공급도 가능합니다"</div>
                <div>• <strong>공장 방문 요청</strong>: 직접 보면 설비 브랜드 확인 가능</div>
              </div>
            </div>
          </div>

          {/* 온라인 조사 */}
          <div className="mb-8">
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>방법 2: 온라인 정보 조사</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <strong>회사 홈페이지 "보유 설비" 페이지</strong>
                </div>
                <div className="text-sm text-gray-700">
                  많은 제조사가 홈페이지에 보유 장비 목록을 공개. 모델명까지 확인 가능한 경우도 있음.
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Search className="h-5 w-5 text-green-600" />
                  <strong>네이버 블로그/언론 보도</strong>
                </div>
                <div className="text-sm text-gray-700">
                  "○○ 회사 신규 설비 도입" 같은 보도자료에서 설비 제조사 정보 파악 가능.
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-purple-600" />
                  <strong>특허청 특허 검색</strong>
                </div>
                <div className="text-sm text-gray-700">
                  회사명으로 특허 검색 → 특허 문서에 사용 설비 정보가 포함된 경우 있음.
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="h-5 w-5 text-orange-600" />
                  <strong>채용 공고 확인</strong>
                </div>
                <div className="text-sm text-gray-700">
                  "○○ 설비 운영 경험자 우대" 같은 채용 공고에서 사용 설비 힌트 얻기.
                </div>
              </div>
            </div>
          </div>

          {/* 공장 방문 */}
          <div>
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>방법 3: 공장 방문 (가장 확실)</h3>
            
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
              <div className="mb-4" style={{ fontWeight: 600 }}>🏭 공장 방문 시 확인 사항</div>
              
              <div className="space-y-3">
                {[
                  { icon: <Factory className="h-5 w-5 text-purple-600" />, title: '설비 브랜드 확인', desc: '기계에 붙어있는 제조사 명판 촬영 (허락 받고)' },
                  { icon: <FileText className="h-5 w-5 text-purple-600" />, title: '매뉴얼/사양서 확인', desc: '가능하면 설비 사양서 사본 요청' },
                  { icon: <Phone className="h-5 w-5 text-purple-600" />, title: 'A/S 업체 정보', desc: '설비 유지보수 업체 연락처 (설비 원 제조사 파악 가능)' },
                  { icon: <Lightbulb className="h-5 w-5 text-purple-600" />, title: '실제 생산 과정 관찰', desc: '배합 → 성형 → 양생 → 포장 전체 프로세스 파악' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white rounded p-3">
                    {item.icon}
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-300 rounded">
                <div className="text-sm text-gray-700">
                  <strong>💡 팁:</strong> "향후 재생골재 공급 협력" 명목으로 방문하면 더 개방적으로 정보 공유
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3단계: 유럽 설비 제조사 직접 조사 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm mb-4">
              STEP 03
            </div>
            <h2 className="text-3xl mb-2" style={{ fontWeight: 700 }}>유럽 설비 제조사 직접 찾기</h2>
            <p className="text-gray-600">Direct Search for European Equipment Manufacturers</p>
          </div>

          {/* 독일 검색 */}
          <div className="mb-8">
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>독일 설비 제조사 검색</h3>
            
            <div className="space-y-4">
              <div className="border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <strong className="text-lg">독일 기계 산업 포털 활용</strong>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white rounded p-4">
                    <div className="mb-2" style={{ fontWeight: 600 }}>🔍 VDMA (독일 기계설비 제조협회)</div>
                    <div className="text-sm text-gray-700 mb-2">
                      웹사이트: www.vdma.org (영어 지원)
                    </div>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                        <span>회원사 디렉토리 검색</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                        <span>검색어: "concrete machinery" 또는 "rebar spacer"</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded p-4">
                    <div className="mb-2" style={{ fontWeight: 600 }}>🔍 Maschinenfinder (독일 중고 기계 거래소)</div>
                    <div className="text-sm text-gray-700 mb-2">
                      중고 설비 거래 → 어떤 브랜드가 많이 거래되는지 파악
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                  <strong className="text-lg">Google 영문 검색 (가장 효과적)</strong>
                </div>
                
                <div className="bg-white rounded p-4">
                  <div className="mb-3" style={{ fontWeight: 600 }}>추천 영문 검색 키워드</div>
                  
                  <div className="space-y-2 text-sm">
                    {[
                      '"rebar spacer machine manufacturer"',
                      '"concrete spacer production equipment"',
                      '"rebar chair making machine"',
                      '"spacer molding press"',
                      '"Germany concrete accessories machinery"',
                      '"Italy rebar spacer equipment"',
                    ].map((keyword, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <code className="text-xs">{keyword}</code>
                        <button
                          onClick={() => copyToClipboard(keyword.replace(/"/g, ''), `keyword-${index}`)}
                          className="px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700 flex items-center gap-1"
                        >
                          {copiedText === `keyword-${index}` ? (
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
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* B2B 플랫폼 */}
          <div className="mb-8">
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>글로벌 B2B 플랫폼 활용</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-orange-300 rounded-lg p-4 bg-orange-50">
                <div className="flex items-center justify-between mb-3">
                  <strong>Alibaba.com</strong>
                  <Badge className="bg-orange-600 text-white">중국+글로벌</Badge>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>• 검색: "rebar spacer machine"</div>
                  <div>• 유럽 제조사도 등록되어 있음</div>
                  <div>• 가격 비교 용이</div>
                  <div className="text-xs text-orange-700">⚠️ 중국 업체와 유럽 업체 구분 필요</div>
                </div>
              </div>

              <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
                <div className="flex items-center justify-between mb-3">
                  <strong>Made-in-China.com</strong>
                  <Badge className="bg-blue-600 text-white">중국 전문</Badge>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>• 중국 제조사 직접 연결</div>
                  <div>• 독일 대비 50-70% 저렴</div>
                  <div>• 품질 검증 필수</div>
                </div>
              </div>

              <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
                <div className="flex items-center justify-between mb-3">
                  <strong>GlobalSources.com</strong>
                  <Badge className="bg-green-600 text-white">검증된 업체</Badge>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>• 더 높은 품질 기준</div>
                  <div>• 공급자 인증 시스템</div>
                  <div>• 무역 안전성 높음</div>
                </div>
              </div>

              <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50">
                <div className="flex items-center justify-between mb-3">
                  <strong>ThomasNet.com</strong>
                  <Badge className="bg-purple-600 text-white">미국/유럽</Badge>
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <div>• 북미/유럽 제조사 위주</div>
                  <div>• 산업용 설비 전문</div>
                  <div>• 기술 사양 상세</div>
                </div>
              </div>
            </div>
          </div>

          {/* 전시회 */}
          <div>
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>국제 전시회 참관 (가장 효과적)</h3>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-6">
              <div className="mb-4" style={{ fontWeight: 600 }}>🌍 추천 전시회 (2025년)</div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <strong className="text-lg">bauma (독일 뮌헨)</strong>
                    <Badge className="bg-red-600 text-white">최우선 추천</Badge>
                  </div>
                  <div className="text-sm space-y-1 text-gray-700">
                    <div>• 세계 최대 건설기계 전시회 (3년마다 개최)</div>
                    <div>• 다음 개최: <strong>2025년 4월</strong></div>
                    <div>• 모든 유럽 설비 제조사 참가</div>
                    <div>• 현장에서 직접 상담 + 계약 가능</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <strong className="text-lg">Concrete Show Asia (싱가포르)</strong>
                    <Badge className="bg-green-600 text-white">아시아 최대</Badge>
                  </div>
                  <div className="text-sm space-y-1 text-gray-700">
                    <div>• 아시아 콘크리트 산업 전시회</div>
                    <div>• 유럽 제조사들도 참가</div>
                    <div>• 이동 거리 짧음 (비용 절감)</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <strong className="text-lg">국내: 건설기계대전 (한국)</strong>
                    <Badge className="bg-blue-600 text-white">접근성 최고</Badge>
                  </div>
                  <div className="text-sm space-y-1 text-gray-700">
                    <div>• 서울 KINTEX에서 매년 개최</div>
                    <div>• 유럽 설비 한국 수입사 참가</div>
                    <div>• 수입사 통해 제조사 정보 파악</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-300 rounded">
                <div className="text-sm">
                  <strong>💡 전시회 참관 팁:</strong>
                  <div className="mt-1 space-y-1 text-gray-700">
                    <div>• 사전 등록 필수 (무료 입장)</div>
                    <div>• 명함 200장 이상 준비</div>
                    <div>• 회사 소개 자료 영문 PDF 준비</div>
                    <div>• 현장에서 바로 RFQ 제출</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4단계: RFQ 발송 및 비교 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm mb-4">
              STEP 04
            </div>
            <h2 className="text-3xl mb-2" style={{ fontWeight: 700 }}>RFQ 발송 및 제조사 비교</h2>
            <p className="text-gray-600">Send RFQ and Compare Suppliers</p>
          </div>

          {/* 영문 RFQ 템플릿 */}
          <div className="mb-8">
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>영문 RFQ 이메일 템플릿</h3>
            
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 relative">
              <button
                onClick={() => copyToClipboard(`Subject: RFQ for Rebar Spacer Production Equipment - Recycled Aggregate Application

Dear Sales Team,

We are HICON KOREA Co., Ltd., a leading recycled aggregate manufacturer based in Hwaseong, South Korea.

COMPANY BACKGROUND:
- Business: Construction waste recycling and recycled aggregate production
- Annual processing capacity: 220,000 - 270,000 tons
- 3 production lines with 71 equipment units
- Established: 1996 (28 years of experience)

PROJECT OVERVIEW:
We are planning to establish a new production line for concrete rebar spacers using recycled aggregates on a 3,000 pyeong (approx. 10,000 m²) factory site.

REQUIRED SPECIFICATIONS:
1. Production Equipment:
   - Target output: 1,500 pcs/hour (12,000 pcs/day)
   - Recycled aggregate content: 60%
   - Product range: 15 types (20mm - 50mm diameter)
   - Automatic mold changing system

2. Complete Plant Setup:
   - Raw material mixing system (recycled aggregate + cement)
   - Molding and pressing equipment
   - Steam curing system
   - Quality inspection and packaging line

3. Additional Requirements:
   - Installation and commissioning
   - On-site training (2 weeks)
   - Technical documentation in English
   - After-sales service contract (3-5 years)

REQUEST FOR QUOTATION:
Please provide the following:
✓ Detailed equipment specifications and technical drawings
✓ Quotation (FOB + CIF Busan Port, South Korea)
✓ Reference projects (especially recycled aggregate application)
✓ Delivery timeline
✓ Payment terms
✓ Training and support package
✓ Spare parts list and warranty terms

TIMELINE:
- Supplier selection: Within 4 weeks
- Contract signing: Target date [INSERT DATE]
- Installation completion: Target date [INSERT DATE]

CONTACT INFORMATION:
Company: HICON KOREA Co., Ltd.
Contact Person: [Your Name]
Position: [Your Title]
Email: [Your Email]
Phone: [Your Phone with country code]
Address: [Factory Address]

We look forward to receiving your proposal. Please feel free to contact us if you need any additional information.

Best regards,
[Your Name]
[Your Title]
HICON KOREA Co., Ltd.`, 'rfq-template')}
                className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
              >
                {copiedText === 'rfq-template' ? (
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
{`Subject: RFQ for Rebar Spacer Production Equipment - Recycled Aggregate Application

Dear Sales Team,

We are HICON KOREA Co., Ltd., a leading recycled aggregate manufacturer 
based in Hwaseong, South Korea.

COMPANY BACKGROUND:
- Business: Construction waste recycling and recycled aggregate production
- Annual processing capacity: 220,000 - 270,000 tons
- 3 production lines with 71 equipment units
- Established: 1996 (28 years of experience)

PROJECT OVERVIEW:
We are planning to establish a new production line for concrete rebar 
spacers using recycled aggregates on a 3,000 pyeong (approx. 10,000 m²) 
factory site.

REQUIRED SPECIFICATIONS:
1. Production Equipment:
   - Target output: 1,500 pcs/hour (12,000 pcs/day)
   - Recycled aggregate content: 60%
   - Product range: 15 types (20mm - 50mm diameter)
   - Automatic mold changing system

2. Complete Plant Setup:
   - Raw material mixing system (recycled aggregate + cement)
   - Molding and pressing equipment
   - Steam curing system
   - Quality inspection and packaging line

3. Additional Requirements:
   - Installation and commissioning
   - On-site training (2 weeks)
   - Technical documentation in English
   - After-sales service contract (3-5 years)

REQUEST FOR QUOTATION:
Please provide the following:
✓ Detailed equipment specifications and technical drawings
✓ Quotation (FOB + CIF Busan Port, South Korea)
✓ Reference projects (especially recycled aggregate application)
✓ Delivery timeline
✓ Payment terms
✓ Training and support package
✓ Spare parts list and warranty terms

TIMELINE:
- Supplier selection: Within 4 weeks
- Contract signing: Target date [INSERT DATE]
- Installation completion: Target date [INSERT DATE]

CONTACT INFORMATION:
Company: HICON KOREA Co., Ltd.
Contact Person: [Your Name]
Position: [Your Title]
Email: [Your Email]
Phone: [Your Phone with country code]
Address: [Factory Address]

We look forward to receiving your proposal. Please feel free to contact us 
if you need any additional information.

Best regards,
[Your Name]
[Your Title]
HICON KOREA Co., Ltd.`}
              </pre>
            </div>
          </div>

          {/* 비교 체크리스트 */}
          <div>
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>제조사 비교 체크리스트</h3>
            
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">평가 항목</th>
                    <th className="p-3 text-left">중요도</th>
                    <th className="p-3 text-left">확인 사항</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3" style={{ fontWeight: 600 }}>가격</td>
                    <td className="p-3"><Badge className="bg-red-600 text-white">매우 높음</Badge></td>
                    <td className="p-3">총 투자비, 운송비, 설치비 포함 견적</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="p-3" style={{ fontWeight: 600 }}>재생골재 적용 경험</td>
                    <td className="p-3"><Badge className="bg-red-600 text-white">매우 높음</Badge></td>
                    <td className="p-3">재생골재 60% 사용 가능 여부, 레퍼런스</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3" style={{ fontWeight: 600 }}>생산 능력</td>
                    <td className="p-3"><Badge className="bg-orange-600 text-white">높음</Badge></td>
                    <td className="p-3">시간당 생산량, 가동 효율</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="p-3" style={{ fontWeight: 600 }}>A/S 체계</td>
                    <td className="p-3"><Badge className="bg-red-600 text-white">매우 높음</Badge></td>
                    <td className="p-3">한국 내 서비스 센터, 부품 공급 기간</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3" style={{ fontWeight: 600 }}>납품 기간</td>
                    <td className="p-3"><Badge className="bg-orange-600 text-white">높음</Badge></td>
                    <td className="p-3">제작 기간, 운송 기간</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="p-3" style={{ fontWeight: 600 }}>교육 지원</td>
                    <td className="p-3"><Badge className="bg-yellow-600 text-white">중간</Badge></td>
                    <td className="p-3">현장 교육 기간, 매뉴얼 언어</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3" style={{ fontWeight: 600 }}>납품 실적</td>
                    <td className="p-3"><Badge className="bg-orange-600 text-white">높음</Badge></td>
                    <td className="p-3">아시아 납품 실적, 레퍼런스 확인 가능 여부</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="p-3" style={{ fontWeight: 600 }}>확장성</td>
                    <td className="p-3"><Badge className="bg-yellow-600 text-white">중간</Badge></td>
                    <td className="p-3">향후 생산량 증가 시 증설 가능 여부</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 실행 타임라인 */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl mb-6" style={{ fontWeight: 700 }}>📅 실행 타임라인 (8주)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white text-green-800 rounded-full h-6 w-6 flex items-center justify-center text-sm">1</div>
                  <strong>Week 1: 한국 제조사 조사</strong>
                </div>
                <div className="text-sm ml-8">
                  ✓ 나라장터 검색<br />
                  ✓ B2B 플랫폼 조사<br />
                  ✓ 5-10개 업체 리스트업
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white text-green-800 rounded-full h-6 w-6 flex items-center justify-center text-sm">2</div>
                  <strong>Week 2: 전화/이메일 문의</strong>
                </div>
                <div className="text-sm ml-8">
                  ✓ 사용 설비 정보 수집<br />
                  ✓ 공장 방문 약속<br />
                  ✓ 설비 브랜드 파악
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white text-green-800 rounded-full h-6 w-6 flex items-center justify-center text-sm">3</div>
                  <strong>Week 3-4: 공장 방문</strong>
                </div>
                <div className="text-sm ml-8">
                  ✓ 2-3개 공장 직접 방문<br />
                  ✓ 설비 실물 확인<br />
                  ✓ 생산 과정 학습
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white text-green-800 rounded-full h-6 w-6 flex items-center justify-center text-sm">4</div>
                  <strong>Week 5: 유럽 제조사 조사</strong>
                </div>
                <div className="text-sm ml-8">
                  ✓ Google 영문 검색<br />
                  ✓ B2B 플랫폼 검색<br />
                  ✓ 10-15개 업체 발굴
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white text-green-800 rounded-full h-6 w-6 flex items-center justify-center text-sm">5</div>
                  <strong>Week 6: RFQ 발송</strong>
                </div>
                <div className="text-sm ml-8">
                  ✓ 영문 RFQ 이메일 발송<br />
                  ✓ 10-15개 업체에 동시 발송<br />
                  ✓ 회신 대기
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white text-green-800 rounded-full h-6 w-6 flex items-center justify-center text-sm">6</div>
                  <strong>Week 7: 견적 비교</strong>
                </div>
                <div className="text-sm ml-8">
                  ✓ 견적서 수집 (3-5개 예상)<br />
                  ✓ 체크리스트로 비교<br />
                  ✓ 3개 업체 1차 선정
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white text-green-800 rounded-full h-6 w-6 flex items-center justify-center text-sm">7</div>
                  <strong>Week 8: 협상 및 최종 결정</strong>
                </div>
                <div className="text-sm ml-8">
                  ✓ 화상 미팅<br />
                  ✓ 가격/조건 협상<br />
                  ✓ 최종 1개 업체 선정
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white text-green-800 rounded-full h-6 w-6 flex items-center justify-center text-sm">✓</div>
                  <strong>Week 8+: 계약 체결</strong>
                </div>
                <div className="text-sm ml-8">
                  ✓ 계약서 검토<br />
                  ✓ 선금 30% 송금<br />
                  ✓ 제작 시작
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 최종 권장사항 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-3xl mb-6" style={{ fontWeight: 700 }}>🎯 최종 권장사항</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-600 bg-green-50 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">1. 한국 제조사 벤치마킹 우선</div>
                  <div className="text-sm text-gray-700">
                    이미 한국에서 철근 스페이서를 만들고 있는 회사들의 설비를 보는 것이 가장 빠르고 확실합니다.
                    그들이 쓰는 설비 = 한국 시장에 검증된 설비
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 bg-blue-50 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">2. 공장 방문은 필수</div>
                  <div className="text-sm text-gray-700">
                    온라인 정보만으로는 한계가 있습니다. 실제 공장을 방문해서 설비를 보고, 
                    생산 과정을 학습하고, 노하우를 얻는 것이 가장 가치 있습니다.
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-600 bg-purple-50 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">3. 최소 3개 업체 견적 비교</div>
                  <div className="text-sm text-gray-700">
                    독일 1개 + 이탈리아 1개 + 터키/중국 1개 이렇게 다양한 지역의 견적을 받아서 비교하세요.
                    가격만이 아니라 A/S, 교육, 레퍼런스 등 종합 평가가 중요합니다.
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-600 bg-orange-50 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">4. 재생골재 60% 적용 가능 여부 확인 필수</div>
                  <div className="text-sm text-gray-700">
                    일반 골재용 설비와 재생골재용 설비는 다를 수 있습니다. 
                    반드시 "recycled aggregate 60%" 가능 여부를 RFQ에 명시하고 확인하세요.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
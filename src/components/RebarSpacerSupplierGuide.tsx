import { Search, Mail, FileText, CheckSquare, Globe, Factory, Phone, MapPin, Link as LinkIcon, Download, Copy, ExternalLink, AlertCircle, Lightbulb, Target, TrendingUp } from 'lucide-react';
import { Badge } from './ui/badge';
import { useState } from 'react';

export function RebarSpacerSupplierGuide() {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text: string, label: string) => {
    // Fallback method for copying text
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          setCopiedText(label);
          setTimeout(() => setCopiedText(''), 2000);
        }).catch(() => {
          // Fallback to legacy method
          fallbackCopy(text, label);
        });
      } else {
        // Use fallback method
        fallbackCopy(text, label);
      }
    } catch (err) {
      fallbackCopy(text, label);
    }
  };

  const fallbackCopy = (text: string, label: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedText(label);
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('복사 실패: 텍스트를 수동으로 선택하여 복사해주세요.');
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="bg-white w-full max-w-[210mm] mx-auto">
      {/* 커버 페이지 */}
      <div className="print-page min-h-[297mm] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white p-16 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-8">
            PRACTICAL PROCUREMENT GUIDE 2025
          </div>
          <h1 className="text-6xl mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
            철근 스페이서<br />설비 조달<br />실무 가이드
          </h1>
          <div className="h-2 w-32 bg-white mb-8"></div>
          <p className="text-2xl mb-4">실제 제조사 검색 · 견적 요청 · 비교 분석</p>
          <p className="text-xl text-blue-100">
            Rebar Spacer Equipment Procurement Guide
          </p>
        </div>

        <div className="relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-6">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-2" style={{ fontWeight: 700 }}>50+</div>
                <div className="text-sm text-blue-100">검색 키워드</div>
              </div>
              <div>
                <div className="text-4xl mb-2" style={{ fontWeight: 700 }}>3개국</div>
                <div className="text-sm text-blue-100">RFQ 템플릿</div>
              </div>
              <div>
                <div className="text-4xl mb-2" style={{ fontWeight: 700 }}>100%</div>
                <div className="text-sm text-blue-100">실무 활용</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div>
              <div className="mb-1">하이콘코리아 (HICON Korea)</div>
              <div className="text-blue-100">설비 조달 실무팀</div>
            </div>
            <div className="text-right">
              <div className="mb-1">2025년 11월</div>
              <div className="text-blue-100">즉시 사용 가능</div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. 검색 키워드 가이드 */}
      <div className="print-page min-h-[297mm] p-12">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
            01. SEARCH KEYWORDS GUIDE
          </div>
          <h2 className="text-4xl mb-4" style={{ fontWeight: 700 }}>실제 제조사 검색 키워드</h2>
          <p className="text-lg text-gray-600">Google, Alibaba, ThomasNet 검색용</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-lg p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="h-6 w-6 text-yellow-600" />
            <strong className="text-lg">💡 검색 팁</strong>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded p-3">
              <div className="mb-2"><strong>✓ 정확도 높은 검색</strong></div>
              <div className="text-gray-700 space-y-1 text-xs">
                <div>• 영문 키워드 사용 (한글 X)</div>
                <div>• "큰따옴표"로 정확한 구문 검색</div>
                <div>• manufacturer, machine, equipment 필수 포함</div>
                <div>• 국가명 + 제품명 조합</div>
              </div>
            </div>
            <div className="bg-white rounded p-3">
              <div className="mb-2"><strong>✓ 효율적인 검색</strong></div>
              <div className="text-gray-700 space-y-1 text-xs">
                <div>• Google 이미지 검색도 활용</div>
                <div>• YouTube에서 실제 작동 영상 확인</div>
                <div>• LinkedIn에서 업체 담당자 찾기</div>
                <div>• 전시회 출품사 리스트 확인</div>
              </div>
            </div>
          </div>
        </div>

        {/* 독일 검색 키워드 */}
        <div className="bg-white border-2 border-gray-300 rounded-lg p-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🇩🇪</div>
              <div>
                <div className="text-xl" style={{ fontWeight: 700 }}>독일 제조사 검색 키워드</div>
                <div className="text-sm text-gray-600">Germany - Premium Quality</div>
              </div>
            </div>
            <Badge className="bg-red-500 text-white">HIGH-END</Badge>
          </div>

          <div className="space-y-3 text-sm">
            <div className="bg-gray-50 rounded p-3">
              <div className="mb-2"><strong>🔍 기본 검색어 (Basic)</strong></div>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'concrete spacer making machine germany',
                  'rebar spacer production line german manufacturer',
                  'betonabstandhalter herstellung maschine',
                  'concrete cover spacer equipment germany',
                  'precast concrete machinery germany'
                ].map((keyword, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white rounded p-2 border border-gray-200">
                    <code className="text-xs text-blue-600">{keyword}</code>
                    <button
                      onClick={() => copyToClipboard(keyword, keyword)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      title="복사"
                    >
                      {copiedText === keyword ? (
                        <CheckSquare className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded p-3">
              <div className="mb-2"><strong>🎯 고급 검색어 (Advanced)</strong></div>
              <div className="grid grid-cols-1 gap-2">
                {[
                  '"plastic spacer injection molding" germany manufacturer',
                  'automatic spacer machine "made in germany"',
                  'construction accessories production germany',
                  'concrete products machinery german engineering',
                  'rebar chair manufacturing equipment germany'
                ].map((keyword, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white rounded p-2 border border-blue-200">
                    <code className="text-xs text-indigo-600">{keyword}</code>
                    <button
                      onClick={() => copyToClipboard(keyword, keyword)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      title="복사"
                    >
                      {copiedText === keyword ? (
                        <CheckSquare className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded p-3">
              <div className="mb-2"><strong>🏢 유명 독일 제조사 (추정)</strong></div>
              <div className="text-xs text-gray-700 space-y-2">
                <div className="flex items-center justify-between bg-white rounded p-2">
                  <span>• <strong>HESS Group</strong> - 콘크리트 블록 기계</span>
                  <a 
                    href="https://www.hessgroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    방문
                  </a>
                </div>
                <div className="flex items-center justify-between bg-white rounded p-2">
                  <span>• <strong>Masa GmbH</strong> - 프리캐스트 콘크리트 장비</span>
                  <a 
                    href="https://www.masa-group.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    방문
                  </a>
                </div>
                <div className="flex items-center justify-between bg-white rounded p-2">
                  <span>• <strong>Rekers</strong> - 콘크리트 기계</span>
                  <a 
                    href="https://www.rekers.de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    방문
                  </a>
                </div>
                <div className="flex items-center justify-between bg-white rounded p-2">
                  <span>• <strong>Knauer Engineering</strong> - 건설 장비</span>
                  <a 
                    href="https://www.knauer-engineering.de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    방문
                  </a>
                </div>
                <div className="text-red-600 pt-2">※ 철근 스페이서 전용 기계 제작 여부는 직접 문의 필요</div>
              </div>
            </div>
          </div>
        </div>

        {/* 프랑스 검색 키워드 */}
        <div className="bg-white border-2 border-gray-300 rounded-lg p-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🇫🇷</div>
              <div>
                <div className="text-xl" style={{ fontWeight: 700 }}>프랑스 제조사 검색 키워드</div>
                <div className="text-sm text-gray-600">France - Balanced Quality</div>
              </div>
            </div>
            <Badge className="bg-blue-500 text-white">MID-RANGE</Badge>
          </div>

          <div className="space-y-3 text-sm">
            <div className="bg-gray-50 rounded p-3">
              <div className="mb-2"><strong>🔍 기본 검색어 (Basic)</strong></div>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'concrete spacer machine france manufacturer',
                  'equipement fabrication ecarteur béton france',
                  'rebar spacer production france',
                  'machine plastique espaceur france',
                  'precast concrete equipment french'
                ].map((keyword, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white rounded p-2 border border-gray-200">
                    <code className="text-xs text-blue-600">{keyword}</code>
                    <button
                      onClick={() => copyToClipboard(keyword, keyword)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      title="복사"
                    >
                      {copiedText === keyword ? (
                        <CheckSquare className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded p-3">
              <div className="mb-2"><strong>🏢 프랑스 제조사 후보 (조사 필요)</strong></div>
              <div className="text-xs text-gray-700 space-y-2">
                <div className="flex items-center justify-between bg-white rounded p-2">
                  <span>• <strong>Vicat Group</strong> - 콘크리트 솔루션</span>
                  <a 
                    href="https://www.vicat.fr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    방문
                  </a>
                </div>
                <div className="flex items-center justify-between bg-white rounded p-2">
                  <span>• <strong>Imer Group</strong> - 건설 장비</span>
                  <a 
                    href="https://www.imergroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    방문
                  </a>
                </div>
                <div className="flex items-center justify-between bg-white rounded p-2">
                  <span>• <strong>Socramat</strong> - 콘크리트 장비</span>
                  <a 
                    href="https://www.socramat.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    방문
                  </a>
                </div>
                <div className="text-red-600 pt-2">※ 프랑스는 독일/터키 대비 제조사가 적을 수 있음</div>
              </div>
            </div>
          </div>
        </div>

        {/* 터키 검색 키워드 */}
        <div className="bg-white border-2 border-gray-300 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🇹🇷</div>
              <div>
                <div className="text-xl" style={{ fontWeight: 700 }}>터키 제조사 검색 키워드</div>
                <div className="text-sm text-gray-600">Turkey - Cost Effective</div>
              </div>
            </div>
            <Badge className="bg-green-600 text-white">BEST VALUE</Badge>
          </div>

          <div className="space-y-3 text-sm">
            <div className="bg-gray-50 rounded p-3">
              <div className="mb-2"><strong>🔍 기본 검색어 (Basic)</strong></div>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'concrete spacer machine turkey manufacturer',
                  'rebar spacer production line turkish',
                  'plastic spacer making machine turkey',
                  'türkiye beton ara parçası makinesi',
                  'construction machinery turkey spacer'
                ].map((keyword, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white rounded p-2 border border-gray-200">
                    <code className="text-xs text-blue-600">{keyword}</code>
                    <button
                      onClick={() => copyToClipboard(keyword, keyword)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      title="복사"
                    >
                      {copiedText === keyword ? (
                        <CheckSquare className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded p-3">
              <div className="mb-2"><strong>🏢 터키 제조사 후보 (Alibaba 多)</strong></div>
              <div className="text-xs text-gray-700 space-y-2">
                <div className="flex items-center justify-between bg-white rounded p-2">
                  <span>• <strong>Mussan Group</strong> - 콘크리트 블록 기계</span>
                  <a 
                    href="https://www.mussan.com.tr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    방문
                  </a>
                </div>
                <div className="flex items-center justify-between bg-white rounded p-2">
                  <span>• <strong>Beyazli Group</strong> - 시멘트/콘크리트 기계</span>
                  <a 
                    href="https://www.beyazligroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    방문
                  </a>
                </div>
                <div className="flex items-center justify-between bg-white rounded p-2">
                  <span>• <strong>Globmac</strong> - 콘크리트 제품 기계</span>
                  <a 
                    href="https://www.globmac.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    방문
                  </a>
                </div>
                <div className="flex items-center justify-between bg-white rounded p-2">
                  <span>• <strong>Vess Machinery</strong> - 건설 장비</span>
                  <a 
                    href="https://www.alibaba.com/showroom/vess-machinery.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Alibaba
                  </a>
                </div>
                <div className="flex items-center justify-between bg-white rounded p-2">
                  <span>• <strong>Metalika</strong> - 철근 가공 기계</span>
                  <a 
                    href="https://www.metalika.com.tr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    방문
                  </a>
                </div>
                <div className="text-green-600 pt-2">✓ 터키는 Alibaba에서 다양한 업체 확인 가능</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded p-3">
              <div className="mb-3 flex items-center justify-between">
                <strong>🌐 Alibaba.com 검색 추천</strong>
                <a 
                  href="https://www.alibaba.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-orange-500 text-white rounded text-xs hover:bg-orange-600 flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  Alibaba 가기
                </a>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'spacer making machine turkey',
                  'concrete spacer mold turkey supplier',
                  'plastic injection spacer machine',
                  'rebar chair production turkey'
                ].map((keyword, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white rounded p-2 border border-blue-200">
                    <code className="text-xs text-indigo-600">{keyword}</code>
                    <button
                      onClick={() => copyToClipboard(keyword, keyword)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      title="복사"
                    >
                      {copiedText === keyword ? (
                        <CheckSquare className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 검색 플랫폼 가이드 */}
      <div className="print-page min-h-[297mm] p-12">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm mb-4">
            02. SEARCH PLATFORMS GUIDE
          </div>
          <h2 className="text-4xl mb-4" style={{ fontWeight: 700 }}>검색 플랫폼별 활용법</h2>
          <p className="text-lg text-gray-600">어디서, 어떻게 찾을 것인가</p>
        </div>

        <div className="space-y-4">
          {/* Google */}
          <div className="bg-white border-2 border-blue-400 rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Globe className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-xl" style={{ fontWeight: 700 }}>Google 검색</div>
                  <div className="text-sm text-gray-600">www.google.com</div>
                </div>
              </div>
              <a 
                href="https://www.google.com/search?q=concrete+spacer+making+machine+manufacturer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2 text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                검색 시작
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div><strong>✓ 장점</strong></div>
                <div className="text-xs text-gray-700">
                  <div>• 가장 포괄적인 검색</div>
                  <div>• 제조사 공식 웹사이트 직접 찾기</div>
                  <div>• 이미지 검색으로 실제 기계 확인</div>
                  <div>• 뉴스/기사로 업체 신뢰도 파악</div>
                </div>
              </div>
              <div className="space-y-2">
                <div><strong>📌 활용 팁</strong></div>
                <div className="text-xs text-gray-700">
                  <div>1. 이미지 검색 → 유사 기계 찾기</div>
                  <div>2. "Videos" 탭 → 실제 작동 영상</div>
                  <div>3. "News" 탭 → 최신 업체 동향</div>
                  <div>4. site:*.de 로 독일 사이트만 검색</div>
                </div>
              </div>
            </div>
          </div>

          {/* Alibaba */}
          <div className="bg-white border-2 border-orange-400 rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Factory className="h-8 w-8 text-orange-600" />
                <div>
                  <div className="text-xl" style={{ fontWeight: 700 }}>Alibaba.com</div>
                  <div className="text-sm text-gray-600">www.alibaba.com (터키/중국 제조사 多)</div>
                </div>
              </div>
              <a 
                href="https://www.alibaba.com/trade/search?SearchText=concrete+spacer+making+machine" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 flex items-center gap-2 text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                검색 시작
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div><strong>✓ 장점</strong></div>
                <div className="text-xs text-gray-700">
                  <div>• 터키/중국 업체 다수</div>
                  <div>• 즉시 견적 요청 가능</div>
                  <div>• 과거 거래 리뷰 확인</div>
                  <div>• 가격대 비교 용이</div>
                </div>
              </div>
              <div className="space-y-2">
                <div><strong>⚠️ 주의사항</strong></div>
                <div className="text-xs text-gray-700">
                  <div>• 품질 편차가 큼 (반드시 샘플 요청)</div>
                  <div>• "Gold Supplier" 인증 업체 우선</div>
                  <div>• 최소 주문량(MOQ) 확인</div>
                  <div>• 배송비/관세 별도 계산 필요</div>
                </div>
              </div>
            </div>
            <div className="mt-3 bg-orange-50 rounded p-3 text-xs">
              <strong>💡 Alibaba 스마트 검색:</strong>
              <div className="mt-1 text-gray-700">
                필터 활용 → Supplier Type: "Manufacturer" 선택 → Country: "Turkey" or "Germany" → Trade Assurance 있는 업체 우선
              </div>
            </div>
          </div>

          {/* ThomasNet */}
          <div className="bg-white border-2 border-purple-400 rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Search className="h-8 w-8 text-purple-600" />
                <div>
                  <div className="text-xl" style={{ fontWeight: 700 }}>ThomasNet</div>
                  <div className="text-sm text-gray-600">www.thomasnet.com (미국/유럽 산업 검색)</div>
                </div>
              </div>
              <a 
                href="https://www.thomasnet.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 flex items-center gap-2 text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                검색 시작
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div><strong>✓ 장점</strong></div>
                <div className="text-xs text-gray-700">
                  <div>• 검증된 산업용 제조사</div>
                  <div>• 상세 제품 카탈로그</div>
                  <div>• 직접 RFQ 제출 가능</div>
                  <div>• 미국/유럽 업체 신뢰도 高</div>
                </div>
              </div>
              <div className="space-y-2">
                <div><strong>📌 활용 팁</strong></div>
                <div className="text-xs text-gray-700">
                  <div>• "Concrete Products Machinery" 카테고리</div>
                  <div>• "Custom Manufacturing" 체크</div>
                  <div>• 제조사 상세 프로필 확인</div>
                  <div>• 직접 전화 연락 가능</div>
                </div>
              </div>
            </div>
          </div>

          {/* 전시회 */}
          <div className="bg-white border-2 border-green-400 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-8 w-8 text-green-600" />
              <div>
                <div className="text-xl" style={{ fontWeight: 700 }}>국제 전시회</div>
                <div className="text-sm text-gray-600">직접 방문 or 온라인 출품사 리스트</div>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-gray-50 rounded p-3">
                <div className="mb-2"><strong>🌍 주요 건설기계 전시회</strong></div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 bg-white rounded">
                    <div>
                      <div><strong>bauma</strong> (독일 뮌헨)</div>
                      <div className="text-gray-600">세계 최대 건설기계 박람회 - 3년마다 4월</div>
                    </div>
                    <a href="https://www.bauma.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded">
                    <div>
                      <div><strong>CONEXPO-CON/AGG</strong> (미국 라스베이거스)</div>
                      <div className="text-gray-600">북미 최대 - 3년마다 3월</div>
                    </div>
                    <a href="https://www.conexpoconagg.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded">
                    <div>
                      <div><strong>World of Concrete</strong> (미국)</div>
                      <div className="text-gray-600">콘크리트 전문 - 매년 1월</div>
                    </div>
                    <a href="https://www.worldofconcrete.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded">
                    <div>
                      <div><strong>Intermat</strong> (프랑스 파리)</div>
                      <div className="text-gray-600">유럽 2위 규모 - 3년마다 4월</div>
                    </div>
                    <a href="https://www.intermatconstruction.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded p-3">
                <div className="mb-2"><strong>💡 전시회 활용법</strong></div>
                <div className="text-xs text-gray-700 space-y-1">
                  <div>1. 전시회 웹사이트에서 "Exhibitor List" 다운로드</div>
                  <div>2. "Concrete" or "Precast" 카테고리 업체 리스트업</div>
                  <div>3. 전시회 전에 이메일로 사전 미팅 예약</div>
                  <div>4. 현장에서 실제 기계 시연 관람</div>
                </div>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-white border-2 border-blue-500 rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <LinkIcon className="h-8 w-8 text-blue-700" />
                <div>
                  <div className="text-xl" style={{ fontWeight: 700 }}>LinkedIn</div>
                  <div className="text-sm text-gray-600">www.linkedin.com (B2B 네트워킹)</div>
                </div>
              </div>
              <a 
                href="https://www.linkedin.com/search/results/companies/?keywords=concrete%20machinery%20manufacturer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 flex items-center gap-2 text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                검색 시작
              </a>
            </div>
            <div className="text-sm space-y-2">
              <div><strong>🎯 활용 전략</strong></div>
              <div className="text-xs text-gray-700 space-y-1 bg-gray-50 rounded p-3">
                <div>1. 회사명으로 검색 → "People" 탭에서 Sales Manager 찾기</div>
                <div>2. "InMail"로 직접 연락 (무료 계정은 제한적)</div>
                <div>3. "Posts" 탭에서 회사 최신 소식 확인</div>
                <div>4. 한국어 가능한 담당자 찾기 (프로필에 "Korean" 표시)</div>
              </div>
              <div className="bg-blue-50 rounded p-3 text-xs mt-2">
                <strong>💬 연락 메시지 템플릿:</strong>
                <div className="mt-2 p-2 bg-white rounded border border-blue-200">
                  <code className="text-blue-600">
                    "Hello, I'm from HICON Korea, a recycled aggregate manufacturer. 
                    We're interested in rebar spacer production equipment. 
                    Could we schedule a call to discuss?"
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. RFQ 템플릿 - 독일 */}
      <div className="print-page min-h-[297mm] p-12">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm mb-4">
            03. RFQ TEMPLATE - GERMANY
          </div>
          <h2 className="text-4xl mb-4" style={{ fontWeight: 700 }}>견적 요청서 (독일용)</h2>
          <p className="text-lg text-gray-600">이메일 복사 후 즉시 발송 가능</p>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Mail className="h-6 w-6 text-blue-600" />
              <strong className="text-lg">RFQ Email Template (English)</strong>
            </div>
            <button
              onClick={() => {
                const emailContent = document.getElementById('rfq-germany')?.innerText || '';
                copyToClipboard(emailContent, 'RFQ-Germany');
              }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
            >
              <Copy className="h-4 w-4" />
              {copiedText === 'RFQ-Germany' ? '복사됨!' : '전체 복사'}
            </button>
          </div>

          <div id="rfq-germany" className="bg-gray-50 rounded p-4 text-sm space-y-3 font-mono">
            <div><strong>Subject:</strong> RFQ - Rebar Spacer Production Equipment from South Korea</div>
            <div className="border-t border-gray-300 pt-3">
              <div className="mb-3">Dear Sales Team,</div>
              
              <div className="space-y-2">
                <div>I am writing from <strong>HICON Korea Co., Ltd.</strong>, a leading recycled aggregate manufacturer in South Korea with 28 years of experience.</div>
                
                <div className="mt-3"><strong>Company Background:</strong></div>
                <div>- Annual production capacity: 270,000 tons of recycled aggregate</div>
                <div>- 3 production lines (A: 26 equipment, B: 24 equipment, C: 21 equipment)</div>
                <div>- Location: Hwaseong City, Gyeonggi Province, South Korea</div>
                
                <div className="mt-3"><strong>New Project:</strong></div>
                <div>We are planning to establish a <strong>rebar spacer manufacturing facility</strong> using our recycled aggregate as raw material. We have secured a 3,000 pyeong (approximately 9,900 sqm) site.</div>
                
                <div className="mt-3"><strong>Equipment Requirements:</strong></div>
                <div>1. <strong>Product Type:</strong> Concrete rebar spacers (various sizes)</div>
                <div>2. <strong>Raw Material:</strong> Recycled aggregate + cement + additives</div>
                <div>3. <strong>Target Production Capacity:</strong> 1,000,000 - 1,500,000 pieces/month</div>
                <div>4. <strong>Automation Level:</strong> Fully automated preferred</div>
                <div>5. <strong>Budget Range:</strong> EUR 2.5M - 4.0M</div>
                
                <div className="mt-3"><strong>Information Requested:</strong></div>
                <div>1. Detailed equipment specifications and production capacity</div>
                <div>2. Quotation (CIF Incheon Port, South Korea)</div>
                <div>3. Installation timeline and training program</div>
                <div>4. Warranty, maintenance, and after-sales service</div>
                <div>5. Reference projects (if available)</div>
                <div>6. Company brochure and technical catalog</div>
                
                <div className="mt-3"><strong>Timeline:</strong></div>
                <div>- RFQ Response: Within 2 weeks</div>
                <div>- Decision Making: Q1 2026</div>
                <div>- Installation Target: Q3 2026</div>
                
                <div className="mt-3">We would appreciate if you could provide a preliminary quotation and schedule a video conference to discuss our requirements in detail.</div>
                
                <div className="mt-4">Best regards,</div>
                <div className="mt-2">
                  <div><strong>[Your Name]</strong></div>
                  <div><strong>[Your Title]</strong></div>
                  <div>HICON Korea Co., Ltd.</div>
                  <div>Email: [your-email@hiconkorea.com]</div>
                  <div>Phone: +82-XX-XXXX-XXXX</div>
                  <div>Website: www.hiconkorea.com (if available)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            <strong>📝 작성 전 체크리스트</strong>
          </div>
          <div className="text-sm text-gray-700 space-y-1">
            <div>✓ [Your Name], [Your Title] 부분에 실제 정보 입력</div>
            <div>✓ 이메일 주소와 전화번호 정확히 기입</div>
            <div>✓ 예산 범위는 협상 여지를 위해 약간 낮게 제시 가능</div>
            <div>✓ 첨부파일: 회사 소개서 (영문) PDF 추가하면 신뢰도 ↑</div>
          </div>
        </div>
      </div>

      {/* 4. RFQ 템플릿 - 프랑스/터키 */}
      <div className="print-page min-h-[297mm] p-12">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
            04. RFQ TEMPLATE - FRANCE & TURKEY
          </div>
          <h2 className="text-4xl mb-4" style={{ fontWeight: 700 }}>견적 요청서 (프랑스/터키용)</h2>
          <p className="text-lg text-gray-600">가격 협상력 강화 버전</p>
        </div>

        {/* 프랑스 RFQ */}
        <div className="bg-white border-2 border-blue-300 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🇫🇷</div>
              <strong className="text-lg">France RFQ (영어/프랑스어 혼용 가능)</strong>
            </div>
            <button
              onClick={() => {
                const emailContent = document.getElementById('rfq-france')?.innerText || '';
                copyToClipboard(emailContent, 'RFQ-France');
              }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
            >
              <Copy className="h-4 w-4" />
              {copiedText === 'RFQ-France' ? '복사됨!' : '전체 복사'}
            </button>
          </div>

          <div id="rfq-france" className="bg-gray-50 rounded p-4 text-sm space-y-3 font-mono">
            <div><strong>Subject:</strong> Request for Quotation - Rebar Spacer Manufacturing Line</div>
            <div className="border-t border-gray-300 pt-3">
              <div className="mb-3">Bonjour / Dear Sales Team,</div>
              
              <div className="space-y-2">
                <div>We are <strong>HICON Korea</strong>, a recycled concrete aggregate producer in South Korea (annual capacity: 270,000 tons).</div>
                
                <div className="mt-3"><strong>Project Overview:</strong></div>
                <div>Establishing a rebar spacer production facility using eco-friendly recycled materials.</div>
                
                <div className="mt-3"><strong>Equipment Requirements:</strong></div>
                <div>- Production capacity: 800,000 - 1,000,000 pieces/month</div>
                <div>- Semi-automatic or fully automatic system</div>
                <div>- Raw material: Recycled aggregate-based concrete</div>
                <div>- <strong>Budget: EUR 1.5M - 2.2M</strong></div>
                
                <div className="mt-3"><strong>Please provide:</strong></div>
                <div>1. Equipment specification sheet</div>
                <div>2. Price quote (CIF Incheon, Korea)</div>
                <div>3. Delivery & installation timeline</div>
                <div>4. Training and after-sales support</div>
                <div>5. Payment terms</div>
                
                <div className="mt-3"><strong>Decision Timeline:</strong> Q1 2026</div>
                
                <div className="mt-3">Looking forward to your competitive offer.</div>
                
                <div className="mt-4">Cordialement / Best regards,</div>
                <div className="mt-2">
                  <div>[Your Name], [Title]</div>
                  <div>HICON Korea Co., Ltd.</div>
                  <div>Email: [email] | Phone: +82-XX-XXXX-XXXX</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 터키 RFQ */}
        <div className="bg-white border-2 border-red-300 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🇹🇷</div>
              <strong className="text-lg">Turkey RFQ (가격 중심)</strong>
            </div>
            <button
              onClick={() => {
                const emailContent = document.getElementById('rfq-turkey')?.innerText || '';
                copyToClipboard(emailContent, 'RFQ-Turkey');
              }}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
            >
              <Copy className="h-4 w-4" />
              {copiedText === 'RFQ-Turkey' ? '복사됨!' : '전체 복사'}
            </button>
          </div>

          <div id="rfq-turkey" className="bg-gray-50 rounded p-4 text-sm space-y-3 font-mono">
            <div><strong>Subject:</strong> Urgent RFQ - Concrete Spacer Production Machine</div>
            <div className="border-t border-gray-300 pt-3">
              <div className="mb-3">Dear Manufacturer,</div>
              
              <div className="space-y-2">
                <div>We are a <strong>Korean recycling company</strong> looking for cost-effective rebar spacer manufacturing equipment.</div>
                
                <div className="mt-3"><strong>Quick Specs:</strong></div>
                <div>- Product: Concrete rebar spacers</div>
                <div>- Capacity needed: <strong>700,000 pieces/month minimum</strong></div>
                <div>- Raw material: Recycled aggregate concrete</div>
                <div>- <strong>Target budget: USD 1.0M - 1.5M</strong> (negotiable)</div>
                
                <div className="mt-3"><strong>What we need ASAP:</strong></div>
                <div>1. <strong>Best price</strong> (FOB + CIF Busan/Incheon, Korea)</div>
                <div>2. Machine specs (production speed, mold types, dimensions)</div>
                <div>3. Delivery time (prefer &lt; 3 months)</div>
                <div>4. Warranty & spare parts availability</div>
                <div>5. Payment terms (prefer L/C or T/T 30/70)</div>
                
                <div className="mt-3"><strong>Additional Questions:</strong></div>
                <div>- Can you customize molds for Korean market sizes?</div>
                <div>- Do you have installations in Asia (reference)?</div>
                <div>- Is remote technical support available?</div>
                
                <div className="mt-3"><strong>Our timeline is tight:</strong></div>
                <div>- Quote needed by: [Date, 2 weeks from now]</div>
                <div>- Purchase decision: [Date, 1 month from now]</div>
                
                <div className="mt-3">We are comparing multiple suppliers from Turkey, China, and Europe. <strong>Competitive pricing and fast delivery will be key factors.</strong></div>
                
                <div className="mt-4">Best regards,</div>
                <div className="mt-2">
                  <div>[Your Name]</div>
                  <div>Procurement Manager</div>
                  <div>HICON Korea Co., Ltd.</div>
                  <div>Mobile/WhatsApp: +82-10-XXXX-XXXX</div>
                  <div>Email: [email]</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-300 rounded p-4 text-sm">
            <div className="mb-2"><strong>🇫🇷 프랑스 업체 특징</strong></div>
            <div className="text-xs text-gray-700 space-y-1">
              <div>• 품질과 기술력 강조</div>
              <div>• 유럽 CE 인증 준수</div>
              <div>• 영어/프랑스어 모두 가능</div>
              <div>• 가격은 독일보다 20-30% 저렴</div>
              <div>• 협상 가능성 있음</div>
            </div>
          </div>
          <div className="bg-red-50 border border-red-300 rounded p-4 text-sm">
            <div className="mb-2"><strong>🇹🇷 터키 업체 특징</strong></div>
            <div className="text-xs text-gray-700 space-y-1">
              <div>• <strong>가격 협상 적극 권장</strong></div>
              <div>• 여러 업체에 동시 요청하여 경쟁 유도</div>
              <div>• WhatsApp 선호 (빠른 응답)</div>
              <div>• MOQ(최소 주문량) 없는 경우 多</div>
              <div>• 샘플/시운전 비용 협상 가능</div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. 비교 분석표 템플릿 */}
      <div className="print-page min-h-[297mm] p-12">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm mb-4">
            05. COMPARISON TEMPLATE
          </div>
          <h2 className="text-4xl mb-4" style={{ fontWeight: 700 }}>견적 비교 분석표</h2>
          <p className="text-lg text-gray-600">실제 견적 받으면 이 표에 정리</p>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-gray-800 text-white p-3 text-center">
            <strong>설비 기계 견적 비교표 (Editable Template)</strong>
          </div>
          
          <table className="w-full text-xs">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border border-gray-300 text-left w-1/5">항목</th>
                <th className="p-2 border border-gray-300 text-center">업체 A<br/>(       )</th>
                <th className="p-2 border border-gray-300 text-center">업체 B<br/>(       )</th>
                <th className="p-2 border border-gray-300 text-center">업체 C<br/>(       )</th>
                <th className="p-2 border border-gray-300 text-center">비고</th>
              </tr>
            </thead>
            <tbody>
              {/* 기본 정보 */}
              <tr className="bg-blue-50">
                <td className="p-2 border border-gray-300" colSpan={5}><strong>🏢 기본 정보</strong></td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">제조사명</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">정식 회사명</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">국가</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">독일/프랑스/터키</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">모델명</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">장비 모델 번호</td>
              </tr>

              {/* 가격 */}
              <tr className="bg-green-50">
                <td className="p-2 border border-gray-300" colSpan={5}><strong>💰 가격</strong></td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">FOB 가격</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">USD or EUR</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">CIF 인천 가격</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">배송비 포함</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">설치비</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">별도 or 포함</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">교육비</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">기술자 파견 비용</td>
              </tr>
              <tr className="bg-yellow-100">
                <td className="p-2 border border-gray-300"><strong>총 투자비 (KRW)</strong></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">환율 적용</td>
              </tr>

              {/* 사양 */}
              <tr className="bg-purple-50">
                <td className="p-2 border border-gray-300" colSpan={5}><strong>⚙️ 기술 사양</strong></td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">생산 능력 (개/월)</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">최대치 확인</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">자동화 수준</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">완전/반/수동</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">전력 소비 (kW)</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">kW/h</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">필요 인력 (명)</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">교대 인원</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">장비 크기 (m)</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">L×W×H</td>
              </tr>

              {/* 조건 */}
              <tr className="bg-orange-50">
                <td className="p-2 border border-gray-300" colSpan={5}><strong>📋 계약 조건</strong></td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">납기 (개월)</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">제작~배송</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">설치 기간 (일)</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">현장 조립</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">보증 기간 (년)</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">Warranty</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">결제 조건</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">30/70, L/C 등</td>
              </tr>

              {/* A/S */}
              <tr className="bg-red-50">
                <td className="p-2 border border-gray-300" colSpan={5}><strong>🔧 A/S & 지원</strong></td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">기술 교육 (일)</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">현장 교육 기간</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">매뉴얼 언어</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">영어/한국어</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">원격 지원</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">가능/불가</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">부품 납기 (일)</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">긴급 주문 시</td>
              </tr>

              {/* 종합 평가 */}
              <tr className="bg-blue-100">
                <td className="p-2 border border-gray-300" colSpan={5}><strong>⭐ 종합 평가 (5점 만점)</strong></td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">가격 경쟁력</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">1-5점</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">기술력/품질</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">1-5점</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">A/S 신뢰도</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">1-5점</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-300">납기 적합성</td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">1-5점</td>
              </tr>
              <tr className="bg-yellow-200">
                <td className="p-2 border border-gray-300"><strong>총점</strong></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 bg-gray-50"></td>
                <td className="p-2 border border-gray-300 text-gray-500 text-xs">합산</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-green-50 border-2 border-green-400 rounded p-4 text-sm">
            <div className="mb-2"><strong>✅ 이 표 활용법</strong></div>
            <div className="text-xs text-gray-700 space-y-1">
              <div>1. Excel로 복사하여 실제 견적서 정보 입력</div>
              <div>2. 업체 A/B/C에 받은 견적서 대조</div>
              <div>3. 종합 평가 점수로 최종 선정</div>
              <div>4. 가격만이 아닌 종합적 판단 중요</div>
            </div>
          </div>
          <div className="bg-blue-50 border-2 border-blue-400 rounded p-4 text-sm">
            <div className="mb-2"><strong>💡 협상 팁</strong></div>
            <div className="text-xs text-gray-700 space-y-1">
              <div>• 3개 이상 업체 견적 받기 (경쟁 유도)</div>
              <div>• "다른 업체는 XX가격" 언급하여 협상</div>
              <div>• 설치비/교육비 무료 요청 가능</div>
              <div>• 결제 조건 협상 (50/50 → 30/70)</div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. 실행 체크리스트 */}
      <div className="print-page min-h-[297mm] p-12">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm mb-4">
            06. ACTION CHECKLIST
          </div>
          <h2 className="text-4xl mb-4" style={{ fontWeight: 700 }}>실행 체크리스트</h2>
          <p className="text-lg text-gray-600">단계별 실행 가이드 - 지금 바로 시작</p>
        </div>

        <div className="space-y-4">
          {/* Week 1 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-400 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ fontWeight: 700 }}>1</div>
              <div>
                <div className="text-xl" style={{ fontWeight: 700 }}>Week 1: 제조사 리스트업</div>
                <div className="text-sm text-gray-600">목표: 최소 10개 업체 연락처 확보</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Google에서 독일 제조사 5개 검색</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Alibaba에서 터키 제조사 5개 검색</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>LinkedIn에서 담당자 찾기</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>회사 웹사이트에서 연락처 수집</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Excel에 업체 정보 정리</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>bauma 2025 출품사 리스트 확인</span>
                </div>
              </div>
            </div>
          </div>

          {/* Week 2-3 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ fontWeight: 700 }}>2</div>
              <div>
                <div className="text-xl" style={{ fontWeight: 700 }}>Week 2-3: RFQ 발송</div>
                <div className="text-sm text-gray-600">목표: 10개 업체에 견적 요청 이메일 발송</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>RFQ 템플릿에 하이콘 정보 입력</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>회사 소개서(영문) PDF 준비</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>독일 업체 5곳에 이메일 발송</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>터키 업체 5곳에 이메일 발송</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>3일 후 Follow-up 이메일 발송</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>응답 업체 리스트 업데이트</span>
                </div>
              </div>
            </div>
          </div>

          {/* Week 4-5 */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-400 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ fontWeight: 700 }}>3</div>
              <div>
                <div className="text-xl" style={{ fontWeight: 700 }}>Week 4-5: 견적 비교 & 협상</div>
                <div className="text-sm text-gray-600">목표: 최종 3개 업체 선정</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>받은 견적서 비교표에 입력</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>가격/사양/조건 비교 분석</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>화상 회의 요청 (상위 5개 업체)</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>가격 협상 이메일 발송</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Reference 프로젝트 요청</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>최종 3개 업체 선정</span>
                </div>
              </div>
            </div>
          </div>

          {/* Week 6-8 */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-400 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ fontWeight: 700 }}>4</div>
              <div>
                <div className="text-xl" style={{ fontWeight: 700 }}>Week 6-8: 실사 & 최종 결정</div>
                <div className="text-sm text-gray-600">목표: 1개 업체 계약</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>공장 방문 일정 조율 (선택)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>실제 가동 영상 요청</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>고객사 레퍼런스 전화 인터뷰</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>최종 견적 확인</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>계약서 검토 (법무팀)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>계약 체결 🎉</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-500 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-8 w-8 text-yellow-700" />
            <div className="text-2xl" style={{ fontWeight: 700 }}>🎯 최종 목표</div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded p-4">
              <div className="text-3xl mb-2" style={{ fontWeight: 700 }}>2개월</div>
              <div className="text-sm text-gray-600">제조사 선정 완료</div>
            </div>
            <div className="bg-white rounded p-4">
              <div className="text-3xl mb-2" style={{ fontWeight: 700 }}>3~5개</div>
              <div className="text-sm text-gray-600">경쟁 견적 확보</div>
            </div>
            <div className="bg-white rounded p-4">
              <div className="text-3xl mb-2" style={{ fontWeight: 700 }}>20%↓</div>
              <div className="text-sm text-gray-600">가격 협상 목표</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

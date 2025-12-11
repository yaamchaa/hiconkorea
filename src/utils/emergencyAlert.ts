// ============================================================================
// 긴급 알림 관리 유틸리티
// ============================================================================
//
// 🔴 현재 상태: 테스트용 (LocalStorage 기반)
// 
// ⚠️ 중요: 현재는 같은 브라우저에서만 알림이 작동합니다.
//    - 컴퓨터 A에서 생성한 알림은 컴퓨터 B에 전송되지 않습니다.
//    - 다른 탭/창 간에는 동기화되지 않습니다.
//    - localStorage는 브라우저별로 독립적으로 저장됩니다.
//
// 🚀 실제 배포 시 구현 필요사항:
//    1. Supabase Realtime 연동
//       - 긴급 알림을 Supabase DB에 저장
//       - Realtime 구독으로 모든 사용자에게 실시간 전송
//       - 오프라인 복구, 영구 저장, 다중 기기 지원
//    
//    2. 또는 Polling 방식
//       - 5초마다 서버에서 새 알림 확인
//       - 간단하지만 약간의 지연 발생 (5~10초)
//
//    3. 또는 WebSocket 방식
//       - 실시간 양방향 통신
//       - 가장 빠른 응답 속도
//
// 📝 현재 사용 용도: 개발/테스트 환경
// 📝 배포 전 필수: 실시간 알림 시스템으로 교체 필요
//
// ============================================================================

export interface EmergencyAlert {
  id: string;
  type: 'emergency-tpm';
  title: string;
  message: string;
  lineName?: string;
  equipment?: string;
  qrData?: string;
  timestamp: string;
  acknowledgedBy: string[]; // 확인한 사용자 ID 목록
}

// 긴급 알림 추가
export function addEmergencyAlert(alert: Omit<EmergencyAlert, 'id' | 'timestamp' | 'acknowledgedBy'>) {
  const alerts = getEmergencyAlerts();
  const newAlert: EmergencyAlert = {
    ...alert,
    id: `emergency-${Date.now()}`,
    timestamp: new Date().toISOString(),
    acknowledgedBy: []
  };
  
  alerts.push(newAlert);
  localStorage.setItem('emergency-alerts', JSON.stringify(alerts));
  
  // 이벤트 발생 (다른 컴포넌트에서 감지)
  window.dispatchEvent(new CustomEvent('emergency-alert-added', { detail: newAlert }));
  
  return newAlert;
}

// 모든 긴급 알림 가져오기
export function getEmergencyAlerts(): EmergencyAlert[] {
  try {
    const data = localStorage.getItem('emergency-alerts');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

// 긴급 알림 확인 처리
export function acknowledgeAlert(alertId: string, userId: string = 'anonymous') {
  console.log(`📝 acknowledgeAlert 호출: alertId=${alertId}, userId=${userId}`);
  
  const alerts = getEmergencyAlerts();
  const alert = alerts.find(a => a.id === alertId);
  
  if (alert) {
    if (!alert.acknowledgedBy.includes(userId)) {
      alert.acknowledgedBy.push(userId);
      localStorage.setItem('emergency-alerts', JSON.stringify(alerts));
      console.log(`✅ 알림 ${alertId} 확인 처리 완료 (사용자: ${userId})`);
      
      // 이벤트 발생
      window.dispatchEvent(new CustomEvent('emergency-alert-acknowledged', { detail: { alertId, userId } }));
      
      return true;
    } else {
      console.log(`⚠️ 알림 ${alertId}은(는) 이미 사용자 ${userId}에 의해 확인됨`);
      return false;
    }
  } else {
    console.log(`❌ 알림 ${alertId}을(를) 찾을 수 없음`);
    return false;
  }
}

// 사용자가 확인하지 않은 긴급 알림 가져오기
export function getUnacknowledgedAlerts(userId: string = 'anonymous'): EmergencyAlert[] {
  console.log(`📋 getUnacknowledgedAlerts 호출: userId=${userId}`);
  const alerts = getEmergencyAlerts();
  const unacknowledged = alerts.filter(alert => !alert.acknowledgedBy.includes(userId));
  console.log(`📊 전체 알림: ${alerts.length}개, 미확인 알림: ${unacknowledged.length}개`);
  
  // 각 알림의 확인 상태 출력
  alerts.forEach(alert => {
    const isAcknowledged = alert.acknowledgedBy.includes(userId);
    console.log(`  - ${alert.id}: ${isAcknowledged ? '✅ 확인됨' : '❌ 미확인'} (확인자: ${alert.acknowledgedBy.join(', ') || '없음'})`);
  });
  
  return unacknowledged;
}

// 긴급 알림 삭제 (관리자용)
export function deleteEmergencyAlert(alertId: string) {
  const alerts = getEmergencyAlerts();
  const filtered = alerts.filter(a => a.id !== alertId);
  localStorage.setItem('emergency-alerts', JSON.stringify(filtered));
  
  window.dispatchEvent(new CustomEvent('emergency-alert-deleted', { detail: alertId }));
}

// 사이렌 소리 재생 (긴 반복 재생)
// 전역에서 접근 가능하도록 window 객체에 저장
declare global {
  interface Window {
    emergencySirenAudio?: HTMLAudioElement;
  }
}

let sirenAudio: HTMLAudioElement | null = null;
let audioContext: AudioContext | null = null;
let sirenOscillator: OscillatorNode | null = null;
let sirenGainNode: GainNode | null = null;
let sirenInterval: number | null = null;
let voiceInterval: number | null = null;
let currentUtterance: SpeechSynthesisUtterance | null = null; // 현재 음성 객체
let voiceTimeout: number | null = null; // 타임아웃 ID

export function playSirenSound(lineName?: string) {
  console.log('🔊 playSirenSound() 호출됨, 라인:', lineName);
  
  // 기존 사이렌이 있으면 중지
  if (sirenAudio || window.emergencySirenAudio || sirenOscillator) {
    console.log('⚠️ 기존 사이렌 감지 - 먼저 중지');
    stopSirenSound();
  }
  
  try {
    console.log('🚨 응급차 사이렌 소리 생성 중... (wee-woo-wee-woo)');
    
    // Web Audio API로 응급차 사이렌 소리 생성
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioContext = new AudioContextClass();
    
    // Oscillator (음파 발생기) 생성
    sirenOscillator = audioContext.createOscillator();
    sirenGainNode = audioContext.createGain();
    
    // 연결: Oscillator -> GainNode -> 스피커
    sirenOscillator.connect(sirenGainNode);
    sirenGainNode.connect(audioContext.destination);
    
    // 사인파(부드러운 소리)
    sirenOscillator.type = 'sine';
    
    // 초기 볼륨 설정 (30% - 음성보다 작게)
    sirenGainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    
    // 시작 주파수 (낮은 음)
    sirenOscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    
    // 사이렌 시작
    sirenOscillator.start();
    console.log('✅ 사이렌 Oscillator 시작됨');
    
    // 응급차 사이렌 패턴: 600Hz -> 900Hz -> 600Hz (반복)
    let isHighPitch = false;
    const toggleSiren = () => {
      if (!audioContext || !sirenOscillator) return;
      
      const now = audioContext.currentTime;
      
      if (isHighPitch) {
        // 고음 -> 저음 (900Hz -> 600Hz, 0.5초 동안)
        sirenOscillator.frequency.exponentialRampToValueAtTime(600, now + 0.5);
      } else {
        // 저음 -> 고음 (600Hz -> 900Hz, 0.5초 동안)
        sirenOscillator.frequency.exponentialRampToValueAtTime(900, now + 0.5);
      }
      
      isHighPitch = !isHighPitch;
    };
    
    // 0.5초마다 wee-woo 반복
    sirenInterval = window.setInterval(toggleSiren, 500);
    
    console.log('✅ 응급차 사이렌 재생 시작됨 (wee-woo 패턴)');
    
    // ========== 음성 안내 추가 (Web Speech API) ==========
    if ('speechSynthesis' in window && lineName) {
      console.log('🎤 음성 안내 시스템 활성화');
      
      const speakEmergencyMessage = () => {
        // ===== 음성 재생 중이면 스킵 =====
        if (window.speechSynthesis.speaking) {
          console.log('⚠️ 음성 재생 중 - 스킵');
          return;
        }
        
        try {
          console.log('🎤 음성 안내 준비 시작...');
          
          // 시간차를 두기 위해 마침표와 쉼표 활용
          const utterance = new SpeechSynthesisUtterance(
            `긴급! 긴급!... 티 피 엠!... ${lineName} 출동!... 즉시 출동!`
          );
          
          currentUtterance = utterance;
          
          // 음성 설정 - 매우 빠르고 다급하게
          utterance.lang = 'ko-KR'; // 한국어
          utterance.rate = 1.5; // 속도 매우 빠르게 (다급함)
          utterance.pitch = 1.2; // 음높이 높게 (긴급함)
          utterance.volume = 1.0; // 볼륨 최대
          
          // 한국어 음성 선택
          const voices = window.speechSynthesis.getVoices();
          const koreanVoice = voices.find(voice => voice.lang.includes('ko'));
          if (koreanVoice) {
            utterance.voice = koreanVoice;
            console.log('✅ 한국어 음성 선택:', koreanVoice.name);
          } else {
            console.log('⚠️ 한국어 음성을 찾지 못함, 기본 음성 사용');
          }
          
          utterance.onstart = () => {
            console.log('🎤 음성 안내 시작:', utterance.text);
            // 음성 재생 중에는 사이렌 볼륨 거의 끄기
            if (sirenGainNode && audioContext) {
              sirenGainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
            }
          };
          
          utterance.onend = () => {
            console.log('✅ 음성 안내 종료');
            // 사이렌 볼륨 복구
            if (sirenGainNode && audioContext) {
              sirenGainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            }
            currentUtterance = null;
          };
          
          utterance.onerror = (event) => {
            console.error('❌ 음성 안내 에러:', event.error);
            // 사이렌 볼륨 복구
            if (sirenGainNode && audioContext) {
              try {
                sirenGainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
              } catch (e) {
                // 무시
              }
            }
            currentUtterance = null;
          };
          
          console.log('🔊 음성 재생 시작...');
          window.speechSynthesis.speak(utterance);
        } catch (err) {
          console.error('❌ 음성 안내 생성 실패:', err);
          currentUtterance = null;
        }
      };
      
      // 음성 로딩 확인 및 즉시 재생
      const initializeVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        console.log(`🎤 사용 가능한 음성: ${voices.length}개`);
        voices.forEach((voice, i) => {
          if (voice.lang.includes('ko')) {
            console.log(`  ${i}: ${voice.name} (${voice.lang})`);
          }
        });
        
        if (voices.length === 0) {
          console.log('⚠️ 음성 로딩 대기 중...');
          window.speechSynthesis.onvoiceschanged = () => {
            console.log('✅ 음성 로딩 완료!');
            initializeVoice();
          };
        } else {
          // 즉시 재생
          speakEmergencyMessage();
        }
      };
      
      // 0.5초 후 음성 재생 시작
      voiceTimeout = window.setTimeout(initializeVoice, 500);
      
      // 10초마다 음성 안내 반복
      voiceInterval = window.setInterval(speakEmergencyMessage, 10000);
      
      console.log('✅ 음성 안내 시스템 설정 완료 (15초마다 반복)');
    } else {
      if (!('speechSynthesis' in window)) {
        console.log('⚠️ Web Speech API 미지원 (음성 안내 비활성화)');
      }
      if (!lineName) {
        console.log('⚠️ 라인명 없음 (음성 안내 비활성화)');
      }
    }
    
  } catch (err) {
    console.error('❌ 사이렌 소리 생성 실패:', err);
    
    // 폴백: 기본 비프음
    try {
      console.log('⚠️ 폴백: 기본 알림음 사용');
      sirenAudio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+Dyvm0hBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFApGn+DyvmwhBTiP1+/PeS0GI3fH8N2RQQoUXrTp66hVFA==');
      sirenAudio.loop = true;
      sirenAudio.volume = 0.7;
      sirenAudio.play();
    } catch (fallbackErr) {
      console.error('❌ 폴백 알림음도 실패:', fallbackErr);
    }
  }
}

export function stopSirenSound() {
  console.log('🔇🔇🔇 stopSirenSound 호출됨 🔇🔇🔇');
  console.log('호출 시각:', new Date().toLocaleTimeString());
  
  let stoppedCount = 0;
  
  // ========== 0-1단계: 음성 안내 중지 ==========
  if (voiceTimeout) {
    try {
      console.log('🎤 0-1단계: 음성 타임아웃 중지 중...');
      clearTimeout(voiceTimeout);
      voiceTimeout = null;
      stoppedCount++;
      console.log('✅ 음성 타임아웃 중지 완료');
    } catch (err) {
      console.error('❌ 음성 타임아웃 중지 실패:', err);
    }
  }
  
  if (voiceInterval) {
    try {
      console.log('🎤 0-1단계: 음성 안내 인터벌 중지 중...');
      clearInterval(voiceInterval);
      voiceInterval = null;
      stoppedCount++;
      console.log('✅ 음성 안내 인터벌 중지 완료');
    } catch (err) {
      console.error('❌ 음성 안내 인터벌 중지 실패:', err);
    }
  }
  
  // utterance 정리 (이벤트 리스너만 제거, 취소는 하지 않음)
  if (currentUtterance) {
    try {
      console.log('🎤 0-1단계: utterance 정리 중...');
      currentUtterance.onstart = null;
      currentUtterance.onend = null;
      currentUtterance.onerror = null;
      currentUtterance = null;
      console.log('✅ utterance 정리 완료');
    } catch (err) {
      console.error('❌ utterance 정리 실패:', err);
    }
  }
  
  // Web Speech API 중지 (강제)
  if ('speechSynthesis' in window) {
    try {
      console.log('🎤 0-1단계: 음성 합성 강제 중지 중...');
      // 음성이 재생 중이든 아니든 무조건 cancel() 호출
      window.speechSynthesis.cancel();
      console.log('✅ 음성 합성 강제 중지 완료');
    } catch (err) {
      console.error('❌ 음성 합성 중지 실패 (무시):', err);
    }
  }
  
  // ========== 0-2단계: Web Audio API Oscillator 중지 ==========
  if (sirenInterval) {
    try {
      console.log('⏰ 0-2단계: 사이렌 인터벌 중지 중...');
      clearInterval(sirenInterval);
      sirenInterval = null;
      stoppedCount++;
      console.log('✅ 사이렌 인터벌 중지 완료');
    } catch (err) {
      console.error('❌ 사이렌 인터벌 중지 실패:', err);
    }
  }
  
  if (sirenOscillator) {
    try {
      console.log('🎵 0단계: Oscillator 중지 중...');
      sirenOscillator.stop();
      sirenOscillator.disconnect();
      sirenOscillator = null;
      stoppedCount++;
      console.log('✅ Oscillator 중지 완료');
    } catch (err) {
      console.error('❌ Oscillator 중지 실패:', err);
    }
  }
  
  if (sirenGainNode) {
    try {
      console.log('🔊 0단계: GainNode 해제 중...');
      sirenGainNode.disconnect();
      sirenGainNode = null;
      console.log('✅ GainNode 해제 완료');
    } catch (err) {
      console.error('❌ GainNode 해제 실패:', err);
    }
  }
  
  if (audioContext) {
    try {
      console.log('🎚️ 0단계: AudioContext 닫는 중...');
      audioContext.close();
      audioContext = null;
      console.log('✅ AudioContext 닫기 완료');
    } catch (err) {
      console.error('❌ AudioContext 닫기 실패:', err);
    }
  }
  
  // ========== 1단계: 모든 오디오 엘리먼트를 DOM에서 먼저 찾아서 중지 ==========
  try {
    const allAudios = document.querySelectorAll('audio');
    console.log(`🔍 1단계: DOM에서 찾은 오디오: ${allAudios.length}개`);
    
    allAudios.forEach((audio, index) => {
      try {
        const audioInfo = {
          index,
          paused: audio.paused,
          currentTime: audio.currentTime,
          id: audio.id || '(ID 없음)',
          loop: audio.loop,
          volume: audio.volume,
          src: audio.src ? audio.src.substring(0, 50) + '...' : '(src 없음)'
        };
        console.log(`  📍 오디오 ${index}:`, audioInfo);
        
        // 강력한 중지 처리
        audio.pause();
        audio.currentTime = 0;
        audio.loop = false;
        audio.volume = 0;
        audio.muted = true;
        audio.src = '';
        audio.load();
        
        // DOM에서 제거
        if (audio.parentNode) {
          audio.parentNode.removeChild(audio);
        } else {
          audio.remove();
        }
        
        stoppedCount++;
        console.log(`  ✅ 오디오 ${index} 중지 및 제거 완료`);
      } catch (err) {
        console.error(`  ❌ 오디오 ${index} 처리 실패:`, err);
      }
    });
  } catch (err) {
    console.error('❌ 1단계 실패:', err);
  }
  
  // ========== 2단계: 로컬 변수 sirenAudio 중지 ==========
  if (sirenAudio) {
    try {
      console.log('🎵 2단계: 로컬 sirenAudio 중지 중...');
      sirenAudio.pause();
      sirenAudio.currentTime = 0;
      sirenAudio.loop = false;
      sirenAudio.volume = 0;
      sirenAudio.muted = true;
      sirenAudio.src = '';
      sirenAudio.load();
      
      if (sirenAudio.parentNode) {
        sirenAudio.parentNode.removeChild(sirenAudio);
      }
      
      sirenAudio = null;
      stoppedCount++;
      console.log('✅ 로컬 sirenAudio 중지 완료');
    } catch (err) {
      console.error('❌ 로컬 sirenAudio 중지 실패:', err);
    }
  } else {
    console.log('⚪ 로컬 sirenAudio는 이미 null');
  }
  
  // ========== 3단계: window 전역 변수 중지 ==========
  if (window.emergencySirenAudio) {
    try {
      console.log('🌐 3단계: 전역 emergencySirenAudio 중지 중...');
      window.emergencySirenAudio.pause();
      window.emergencySirenAudio.currentTime = 0;
      window.emergencySirenAudio.loop = false;
      window.emergencySirenAudio.volume = 0;
      window.emergencySirenAudio.muted = true;
      window.emergencySirenAudio.src = '';
      window.emergencySirenAudio.load();
      
      if (window.emergencySirenAudio.parentNode) {
        window.emergencySirenAudio.parentNode.removeChild(window.emergencySirenAudio);
      }
      
      delete window.emergencySirenAudio;
      stoppedCount++;
      console.log('✅ 전역 emergencySirenAudio 중지 완료');
    } catch (err) {
      console.error('❌ 전역 emergencySirenAudio 중지 실패:', err);
    }
  } else {
    console.log('⚪ 전역 emergencySirenAudio는 이미 undefined');
  }
  
  // ========== 4단계: ID로 검색하여 중지 ==========
  try {
    const audioById = document.getElementById('emergency-siren-audio') as HTMLAudioElement;
    if (audioById) {
      console.log('🆔 4단계: ID로 찾은 오디오 중지 중...');
      audioById.pause();
      audioById.currentTime = 0;
      audioById.loop = false;
      audioById.volume = 0;
      audioById.muted = true;
      audioById.src = '';
      audioById.load();
      audioById.remove();
      stoppedCount++;
      console.log('✅ ID로 검색한 오디오 중지 완료');
    } else {
      console.log('⚪ ID로 찾은 오디오 없음');
    }
  } catch (err) {
    console.error('❌ ID로 검색한 오디오 중지 실패:', err);
  }
  
  console.log(`🔇 총 ${stoppedCount}개 오디오/사이렌 처리 완료`);
  
  // ========== 최종 확인 ==========
  setTimeout(() => {
    const remainingAudios = document.querySelectorAll('audio');
    if (remainingAudios.length > 0) {
      console.error(`⚠️⚠️⚠️ 경고: ${remainingAudios.length}개의 오디오가 아직 남아있습니다!`);
      remainingAudios.forEach((audio, index) => {
        console.error(`  ❌ 남은 오디오 ${index}:`, {
          paused: audio.paused,
          currentTime: audio.currentTime,
          id: audio.id,
          src: audio.src ? audio.src.substring(0, 50) : '없음'
        });
        
        // 한 번 더 강제 중지 시도
        try {
          audio.pause();
          audio.volume = 0;
          audio.muted = true;
          audio.src = '';
          audio.load();
          audio.remove();
          console.log(`  ✅ 남은 오디오 ${index} 강제 제거 완료`);
        } catch (e) {
          console.error(`  ❌ 남은 오디오 ${index} 강제 제거 실패:`, e);
        }
      });
    } else {
      console.log('✅✅✅ 모든 오디오가 완전히 제거되었습니다');
    }
  }, 100);
}

// 진동 패턴 (긴 사이렌 패턴)
export function vibrateSiren() {
  console.log('📳 vibrateSiren() 호출됨');
  if ('vibrate' in navigator) {
    try {
      // 긴 진동 패턴 (3초 진동, 0.5초 멈춤 반복)
      const pattern = [3000, 500, 3000, 500, 3000];
      navigator.vibrate(pattern);
      console.log('✅ 진동 패턴 실행:', pattern);
    } catch (err) {
      console.error('❌ 진동 실행 실패:', err);
    }
  } else {
    console.log('⚠️ 진동 API 미지원 (데스크톱 브라우저일 수 있음)');
  }
}

export function stopVibrate() {
  console.log('📳 stopVibrate 호출됨');
  if ('vibrate' in navigator) {
    try {
      navigator.vibrate(0);
      navigator.vibrate([]);
      console.log('✅ 진동 중지 완료');
    } catch (err) {
      console.error('❌ 진동 중지 실패:', err);
    }
  } else {
    console.log('⚠️ 진동 API 미지원');
  }
}

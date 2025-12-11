import { useEffect, useRef } from "react";

// YouTube IFrame Player API 타입 정의
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YoutubeBackgroundProps {
  videoId: string;
  brightness?: number;
  className?: string;
  coverMode?: 'default' | 'height-fit'; // 새로운 prop: 높이 맞춤 모드
  playbackRate?: number; // 재생 속도 (0.25, 0.5, 0.75, 1, 1.25, 1.5, 2)
  maxDuration?: number; // 최대 재생 시간 (초) - 이 시간에 도달하면 처음으로 돌아감
}

export function YoutubeBackground({ videoId, brightness = 1.1, className = "", coverMode = 'default', playbackRate = 1, maxDuration }: YoutubeBackgroundProps) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const apiLoadedRef = useRef(false);
  const checkIntervalRef = useRef<any>(null);

  useEffect(() => {
    // YouTube IFrame API 로드
    if (!apiLoadedRef.current) {
      apiLoadedRef.current = true;
      
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // API 준비 완료 시 플레이어 초기화
    const initPlayer = () => {
      if (window.YT && window.YT.Player && containerRef.current) {
        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            enablejsapi: 1,
            loop: 0, // loop를 0으로 설정하고 onStateChange에서 수동으로 처리
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
          },
          events: {
            onReady: (event: any) => {
              event.target.playVideo();
              event.target.setVolume(0);
              // 재생 속도 설정
              if (playbackRate !== 1) {
                event.target.setPlaybackRate(playbackRate);
              }
              
              // maxDuration이 설정되어 있으면 시간 체크 시작
              if (maxDuration) {
                checkIntervalRef.current = setInterval(() => {
                  try {
                    const currentTime = event.target.getCurrentTime();
                    if (currentTime && currentTime >= maxDuration) {
                      console.log(`🔄 ${maxDuration}초 도달 - 영상 처음으로 돌아감`);
                      event.target.seekTo(0);
                      event.target.playVideo();
                    }
                  } catch (e) {
                    console.error('시간 체크 오류:', e);
                  }
                }, 500); // 0.5초마다 체크 (더 빠른 응답)
              }
            },
            onStateChange: (event: any) => {
              // 영상이 끝나면 (state === 0) 즉시 다시 시작
              if (event.data === 0) {
                event.target.seekTo(0);
                event.target.playVideo();
              }
              // 재생 중일 때도 maxDuration 체크
              if (event.data === 1 && maxDuration) {
                try {
                  const currentTime = event.target.getCurrentTime();
                  if (currentTime && currentTime >= maxDuration) {
                    event.target.seekTo(0);
                  }
                } catch (e) {
                  // 무시
                }
              }
            },
          },
        });
      }
    };

    // YouTube API가 이미 로드되어 있으면 즉시 초기화
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // API 로드 대기
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // Cleanup
    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // 무시
        }
      }
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, [videoId, playbackRate, maxDuration]);

  // 높이 기준 맞춤 스타일 (홈 인트로 방식)
  const heightFitStyle = {
    filter: `brightness(${brightness})`,
    width: '177.78vh', // 16:9 비율 유지하며 높이에 맞춤
    height: '56.25vw', // 16:9 비율 유지하며 너비에 맞춤
    minWidth: '100%',
    minHeight: 'calc(100% + 100px)', // 높이를 100px 더 크게 하여 위아래가 더 잘리도록
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <div
        ref={containerRef}
        className={`absolute left-1/2 pointer-events-none ${className}`}
        style={{
          ...heightFitStyle,
          top: 'calc(50% - 50px)', // 위로 50px 이동
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}

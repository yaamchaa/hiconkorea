import { useEffect, useRef } from "react";

interface VimeoBackgroundProps {
  videoId: string;
  brightness?: number;
  startTime?: number; // 시작 시간 (초)
  maxDuration?: number; // 최대 재생 시간 (초)
}

// Vimeo Player API 타입 정의
declare global {
  interface Window {
    Vimeo: any;
  }
}

export function VimeoBackground({ videoId, brightness = 1.0, startTime, maxDuration }: VimeoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Vimeo Player API 스크립트 로드
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    
    script.onload = () => {
      if (containerRef.current && window.Vimeo) {
        // Vimeo Player 생성
        playerRef.current = new window.Vimeo.Player(containerRef.current, {
          id: videoId,
          background: true,
          autoplay: true,
          loop: false, // 수동으로 루프 처리
          muted: true,
          controls: false,
          responsive: true,
        });

        // 플레이어 이벤트 리스너
        playerRef.current.on('loaded', () => {
          // startTime이 설정되어 있으면 해당 시간으로 이동 후 재생
          if (startTime !== undefined) {
            playerRef.current.setCurrentTime(startTime).then(() => {
              playerRef.current.play();
            });
          } else {
            playerRef.current.play().catch((error: any) => {
              console.warn('Vimeo autoplay failed:', error);
            });
          }
        });

        // 시간 업데이트 이벤트 - maxDuration 체크
        if (maxDuration !== undefined && startTime !== undefined) {
          playerRef.current.on('timeupdate', (data: { seconds: number }) => {
            if (data.seconds >= maxDuration) {
              // 지정된 시간에 도달하면 startTime으로 되돌리기
              playerRef.current.setCurrentTime(startTime).then(() => {
                playerRef.current.play();
              });
            }
          });
        } else if (maxDuration !== undefined) {
          playerRef.current.on('timeupdate', (data: { seconds: number }) => {
            if (data.seconds >= maxDuration) {
              // startTime이 없으면 0초로 되돌리기
              playerRef.current.setCurrentTime(0).then(() => {
                playerRef.current.play();
              });
            }
          });
        }

        // 비디오 종료 이벤트
        playerRef.current.on('ended', () => {
          // 비디오가 끝나면 startTime 또는 처음부터 재생
          const resetTime = startTime !== undefined ? startTime : 0;
          playerRef.current.setCurrentTime(resetTime).then(() => {
            playerRef.current.play();
          });
        });

        // 에러 처리
        playerRef.current.on('error', (error: any) => {
          console.error('Vimeo player error:', error);
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId, startTime, maxDuration]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div
        ref={containerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ 
          filter: `brightness(${brightness})`,
          width: '177.78vh', // 16:9 비율 유지하며 높이에 맞춤
          height: '56.25vw', // 16:9 비율 유지하며 너비에 맞춤
          minWidth: '100%',
          minHeight: '100%',
        }}
      />
    </div>
  );
}
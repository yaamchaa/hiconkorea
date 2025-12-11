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
  coverMode?: 'default' | 'height-fit';
  playbackRate?: number;
  maxDuration?: number;
}

export function YoutubeBackground({ videoId, brightness = 1.1, className = "", coverMode = 'default', playbackRate = 1, maxDuration }: YoutubeBackgroundProps) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const apiLoadedRef = useRef(false);
  const checkIntervalRef = useRef<any>(null);

  useEffect(() => {
    if (!apiLoadedRef.current) {
      apiLoadedRef.current = true;
      
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

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
            loop: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
          },
          events: {
            onReady: (event: any) => {
              event.target.playVideo();
              event.target.setVolume(0);
              if (playbackRate !== 1) {
                event.target.setPlaybackRate(playbackRate);
              }
              
              if (maxDuration) {
                checkIntervalRef.current = setInterval(() => {
                  try {
                    const currentTime = event.target.getCurrentTime();
                    if (currentTime && currentTime >= maxDuration) {
                      event.target.seekTo(0);
                      event.target.playVideo();
                    }
                  } catch (e) {
                    console.error('시간 체크 오류:', e);
                  }
                }, 500);
              }
            },
            onStateChange: (event: any) => {
              if (event.data === 0) {
                event.target.seekTo(0);
                event.target.playVideo();
              }
              if (event.data === 1 && maxDuration) {
                try {
                  const currentTime = event.target.getCurrentTime();
                  if (currentTime && currentTime >= maxDuration) {
                    event.target.seekTo(0);
                  }
                } catch (e) {}
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
      }
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, [videoId, playbackRate, maxDuration]);

  const heightFitStyle = {
    filter: `brightness(${brightness})`,
    width: '177.78vh',
    height: '56.25vw',
    minWidth: '100%',
    minHeight: 'calc(100% + 100px)',
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <div
        ref={containerRef}
        className={`absolute left-1/2 pointer-events-none ${className}`}
        style={{
          ...heightFitStyle,
          top: 'calc(50% - 50px)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Camera, CameraOff, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';

interface QRScannerProps {
  onScan: (data: string) => void;
  onError?: (error: string) => void;
}

export function QRScanner({ onScan, onError }: QRScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string>('');
  const [cameraId, setCameraId] = useState<string>('');
  const [cameras, setCameras] = useState<{ id: string; label: string }[]>([]);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 카메라 권한 요청 및 목록 가져오기
  const requestCameraPermission = async () => {
    try {
      // 먼저 getUserMedia로 권한 요청
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } // 후면 카메라 우선
      });
      
      // 권한을 받았으면 즉시 스트림 중지 (html5-qrcode가 다시 열 것임)
      stream.getTracks().forEach(track => track.stop());
      
      setPermissionGranted(true);
      
      // 이제 카메라 목록 가져오기
      const devices = await Html5Qrcode.getCameras();
      
      if (devices && devices.length > 0) {
        const cameraList = devices.map((device) => ({
          id: device.id,
          label: device.label || `카메라 ${device.id}`,
        }));
        setCameras(cameraList);
        
        // 후면 카메라 우선 선택
        const backCamera = devices.find((d) => 
          d.label.toLowerCase().includes('back') || 
          d.label.toLowerCase().includes('rear') ||
          d.label.toLowerCase().includes('environment')
        );
        setCameraId(backCamera?.id || devices[0].id);
        
        console.log('✅ 카메라 권한 허용됨:', cameraList.length, '개 카메라 발견');
        setError('');
        
        // 권한이 허용되면 바로 스캔 시작하지 않음 (사용자가 버튼 클릭해야 함)
      } else {
        setError('사용 가능한 카메라가 없습니다.');
        onError?.('사용 가능한 카메라가 없습니다.');
      }
    } catch (err: any) {
      console.warn('카메라 권한 요청:', err.name);
      
      let errorMessage = '';
      
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        errorMessage = '카메라 접근 권한이 거부되었습니다. 브라우저 설정에서 카메라 권한을 허용해주세요.';
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        errorMessage = '카메라를 찾을 수 없습니다. 카메라가 연결되어 있는지 확인해주세요.';
      } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
        errorMessage = '카메라가 이미 다른 앱에서 사용 중입니다.';
      } else if (err.name === 'SecurityError') {
        errorMessage = '보안 오류: HTTPS 환경에서만 카메라를 사용할 수 있습니다.';
      } else {
        errorMessage = `카메라 접근 오류: ${err.message || '알 수 없는 오류'}`;
      }
      
      setError(errorMessage);
      onError?.(errorMessage);
      setPermissionGranted(false);
    }
  };

  // QR 스캔 시작
  const startScanning = async () => {
    // 권한이 없으면 먼저 권한 요청
    if (!permissionGranted) {
      await requestCameraPermission();
      return;
    }

    if (!cameraId) {
      setError('카메라를 선택해주세요.');
      return;
    }

    try {
      setError('');
      const scanner = new Html5Qrcode('qr-reader');
      scannerRef.current = scanner;

      await scanner.start(
        cameraId,
        {
          fps: 10, // 초당 10프레임 스캔
          qrbox: { width: 250, height: 250 }, // 스캔 영역 크기
        },
        (decodedText) => {
          // QR 코드 스캔 성공
          console.log('✅ QR 코드 스캔:', decodedText);
          onScan(decodedText);
          stopScanning();
        },
        (errorMessage) => {
          // 스캔 중 에러 (대부분 "QR 코드 못 찾음" 메시지)
          // 이 에러는 무시해도 됨 (계속 스캔 중)
        }
      );

      setIsScanning(true);
      console.log('✅ QR 스캔 시작됨');
    } catch (err: any) {
      console.warn('QR 스캔 시작 실패:', err.name, err.message);
      
      let errorMessage = '';
      
      if (err.message?.includes('NotAllowedError') || err.message?.includes('Permission')) {
        errorMessage = '카메라 권한이 필요합니다. 다시 시도하거나 브라우저 설정을 확인해주세요.';
        setPermissionGranted(false);
      } else {
        errorMessage = err.message || '스캔을 시작할 수 없습니다.';
      }
      
      setError(errorMessage);
      onError?.(errorMessage);
    }
  };

  // QR 스캔 중지
  const stopScanning = async () => {
    if (scannerRef.current && isScanning) {
      try {
        await scannerRef.current.stop();
        scannerRef.current.clear();
        scannerRef.current = null;
        setIsScanning(false);
      } catch (err) {
        console.error('QR 스캔 중지 실패:', err);
      }
    }
  };

  // 카메라 전환
  const switchCamera = async () => {
    if (cameras.length <= 1) return;

    await stopScanning();
    
    const currentIndex = cameras.findIndex((c) => c.id === cameraId);
    const nextIndex = (currentIndex + 1) % cameras.length;
    setCameraId(cameras[nextIndex].id);
  };

  // 컴포넌트 언마운트 시 스캔 중지
  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        stopScanning();
      }
    };
  }, []);

  return (
    <div className="space-y-4">
      {/* 카메라 뷰어 */}
      <div className="relative bg-black rounded-lg overflow-hidden" ref={containerRef}>
        <div id="qr-reader" className="w-full min-h-[300px]"></div>
        
        {/* 카메라 전환 버튼 */}
        {isScanning && cameras.length > 1 && (
          <Button
            size="sm"
            variant="secondary"
            className="absolute top-2 right-2"
            onClick={switchCamera}
          >
            <RefreshCw className="w-4 h-4" />
          </Button>
        )}

        {/* 스캔 안내 오버레이 */}
        {isScanning && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center text-white">
            <p className="text-sm">QR 코드를 사각형 안에 위치시키세요</p>
          </div>
        )}
      </div>

      {/* 권한 요청 안내 */}
      {!permissionGranted && !error && (
        <Alert>
          <AlertDescription>
            카메라를 사용하려면 권한이 필요합니다. "카메라 권한 허용" 버튼을 클릭해주세요.
          </AlertDescription>
        </Alert>
      )}

      {/* 에러 메시지 */}
      {error && (
        <Alert variant={error.includes('거부') ? 'default' : 'destructive'}>
          <AlertDescription className="space-y-2">
            <p>{error}</p>
            {error.includes('거부') && (
              <div className="space-y-2 pt-2 border-t">
                <p className="text-sm">
                  <strong>해결 방법:</strong>
                </p>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Chrome: 주소창 왼쪽 🔒 아이콘 → 카메라 → 허용</li>
                  <li>Safari: 설정 → Safari → 카메라 → 허용</li>
                </ul>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={requestCameraPermission}
                  className="w-full"
                >
                  다시 시도
                </Button>
              </div>
            )}
          </AlertDescription>
        </Alert>
      )}

      {/* 컨트롤 버튼 */}
      <div className="flex gap-2">
        {!permissionGranted ? (
          <Button
            onClick={requestCameraPermission}
            className="flex-1"
          >
            <Camera className="w-4 h-4 mr-2" />
            카메라 권한 허용
          </Button>
        ) : !isScanning ? (
          <Button
            onClick={startScanning}
            disabled={!cameraId}
            className="flex-1"
          >
            <Camera className="w-4 h-4 mr-2" />
            스캔 시작
          </Button>
        ) : (
          <Button
            onClick={stopScanning}
            variant="destructive"
            className="flex-1"
          >
            <CameraOff className="w-4 h-4 mr-2" />
            스캔 중지
          </Button>
        )}
      </div>

      {/* 카메라 선택 (디버그용) */}
      {cameras.length > 1 && !isScanning && (
        <select
          value={cameraId}
          onChange={(e) => setCameraId(e.target.value)}
          className="w-full p-2 border rounded-md text-sm"
        >
          {cameras.map((camera) => (
            <option key={camera.id} value={camera.id}>
              {camera.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

import React, { useState, useEffect, useRef, useCallback } from 'react';

const WebcamDrawingApp: React.FC = () => {
  // 웹캠 비디오를 위한 ref 객체를 생성
  const videoRef = useRef<HTMLVideoElement>(null);
  // 그리기를 위한 캔버스 ref 객체를 생성
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 그리기 상태를 관리하는 state (그리고 있지 않다면 false)
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  // 현재 브러시의 색상을 관리하는 state
  const [brushColor, setBrushColor] = useState<string>('#000000');
  // 브러시의 크기를 관리하는 state
  const [brushSize, setBrushSize] = useState<number>(5);
  // 브러시 모양을 관리하는 state (CanvasLineCap 타입을 명시).
  const [brushShape, setBrushShape] = useState<CanvasLineCap>('round');
  // 그리기 모드를 관리하는 state (true이면 그리기, false이면 지우기).
  const [drawingMode, setDrawingMode] = useState<boolean>(true);

  // 컴포넌트 마운트 시 웹캠을 초기화하는 useEffect 훅.
  useEffect(() => {
    const getVideo = async () => {
      try {
        // 사용자의 웹캠에 접근하여 스트림을 가져옴
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream; // 비디오 요소의 소스로 설정
        }
      } catch (err) {
        console.error("Error accessing the webcam", err); // 웹캠 접근 실패 시 오류를 출력
      }
    };

    getVideo(); // 위에서 정의한 함수를 실행
  }, []);

  // 그리기를 시작할 때 호출되는 함수
  const startDrawing = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent; // 이벤트로부터 마우스의 위치를 가져옴
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      context.beginPath(); // 새로운 경로를 시작
      context.moveTo(offsetX, offsetY); // 경로를 마우스 위치로 이동
      setIsDrawing(true); // 그리기 상태를 true로 설정
    }
  }, []);

  // 마우스를 움직일 때 호출되는 함수
  const draw = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return; // 그리기 상태가 아니라면 함수를 종료
    const { offsetX, offsetY } = event.nativeEvent;
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      context.lineTo(offsetX, offsetY); // 현재 경로에 선을 추가
      context.strokeStyle = drawingMode ? brushColor : '#FFFFFF'; // 선의 색상을 설정
      context.lineWidth = brushSize; // 선의 너비를 설정
      context.lineCap = brushShape; // 선의 끝 모양을 설정
      context.stroke(); // 경로를 그림
    }
  }, [isDrawing, brushColor, brushSize, brushShape, drawingMode]);

  // 그리기를 멈출 때 호출되는 함수
  const stopDrawing = useCallback(() => {
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      context.closePath(); // 현재 경로를 닫음
    }
    setIsDrawing(false); // 그리기 상태를 false로 설정
  }, []);

  // 그림을 저장하는 함수
  const saveDrawing = useCallback(() => {
    if (canvasRef.current) {
      const image = canvasRef.current.toDataURL('image/png'); // 캔버스의 내용을 이미지로 변환
      const link = document.createElement('a');
      link.href = image; // 링크의 href로 이미지 URL을 설정
      link.download = 'drawing.png'; // 다운로드할 파일 이름을 설정
      document.body.appendChild(link); // 링크를 DOM에 추가
      link.click(); // 링크를 클릭하여 이미지를 다운로드
      document.body.removeChild(link); // 링크를 DOM에서 제거
    }
  }, []);

  // 컴포넌트의 JSX 구조를 반환
  return (
    <div>
      <video ref={videoRef} autoPlay muted style={{ display: 'none' }} /> {/* 비디오 컴포넌트 (보이지 않음) */}
      <canvas
        ref={canvasRef} // 캔버스 참조 설정
        onMouseDown={startDrawing} // 마우스를 누를 때 함수 호출
        onMouseMove={draw} // 마우스를 움직일 때 함수 호출
        onMouseUp={stopDrawing} // 마우스 버튼을 뗄 때 함수 호출
        onMouseLeave={stopDrawing} // 마우스가 캔버스를 벗어날 때 함수 호출
        width={800} // 캔버스의 너비
        height={600} // 캔버스의 높이
      />
      <div>
        <input type="color" value={brushColor} onChange={(e) => setBrushColor(e.target.value)} /> {/* 색상 선택 입력 필드 */}
        <input type="range" min="1" max="10" value={brushSize} onChange={(e) => setBrushSize(parseInt(e.target.value, 10))} /> {/* 브러시 크기 조절 입력 필드 */}
        <select value={brushShape} onChange={(e) => setBrushShape(e.target.value as CanvasLineCap)}> {/* 브러시 모양 선택 드롭다운 */}
          <option value="round">Round</option>
          <option value="square">Square</option>
        </select>
        <button onClick={() => setDrawingMode(!drawingMode)}>{drawingMode ? 'Erase' : 'Draw'}</button> {/* 그리기/지우기 모드 전환 버튼 */}
        <button onClick={saveDrawing}>Save Drawing</button> {/* 그림 저장 버튼 */}
      </div>
    </div>
  );
};

export default WebcamDrawingApp;

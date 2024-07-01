import React, { useRef, useState } from 'react'

interface ImageGalleryProps {
  // 이미지 URL 배열
  images: string[]
}

//! 이미지 갤러리 순환 예제
// useRef를 사용하여 이미지 갤러리 내에서 이미지 순서를 순환
export default function UseRef02({ images }: ImageGalleryProps) {
  // 현재 이미지 인덱스를 상태로 관리
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // 이미지 요소에 대한 참조
  // : DOM 요소 >> TS타입 명시 - HTMLImageElement
  const imageRef = useRef<HTMLImageElement>(null);

  const handleNextClick = () => {
    // 다음 이미지로 인덱스를 순환
    // 0(1), 1(2), 2(3), 3(4), 4(0)
    // % images.length === % 5
    // : 인덱스가 이미지 배열의 끝을 넘어가면 다시 0으로 돌아오도록 설정
    // : 이미지 배열의 길이를 초과하지 않고 순환하는 이미지를 생성
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);

    // 참조된(보여지는) 이미지 요소에 애니메이션 효과를 적용
    if (imageRef.current) {
      imageRef.current.style.opacity = '0';
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.opacity = '1';
        }
      }, 300);
    }
  }

  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      <h3>이미지 갤러리</h3>
      <img
        src={images[currentImageIndex]}
        // Display number 1, 2, 3, 4, 5
        alt={`Display number ${currentImageIndex + 1}`}
        // ref 속성을 사용하여 img 태그에 imgRef을 연결
        ref={imageRef}
        style={{
          width: '300px',
          height: '300px',
          transition: 'opacity 0.3s'
        }}
      />
      <button onClick={handleNextClick}>다음 이미지</button>
    </div>
  );
}

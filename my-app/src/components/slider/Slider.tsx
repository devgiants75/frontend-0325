import React, { useState, useEffect, useRef } from 'react'; // React와 훅들을 임포트
import './Slider.css'; // 스타일 파일을 별도로 만듭니다.

interface ImageSliderProps { // 이미지 슬라이더 컴포넌트의 props 인터페이스 정의
  images: string[]; // 이미지 URL 배열
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => { // ImageSlider 컴포넌트 정의, props로 images를 받음
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스를 상태로 관리
  const sliderRef = useRef<HTMLDivElement>(null); // 슬라이더 요소에 대한 참조를 생성
  const [isTransitioning, setIsTransitioning] = useState(false); // 전환 중인지 여부를 상태로 관리

  const handleTransitionEnd = () => { // 전환이 끝났을 때 호출되는 함수
    if (currentIndex === images.length) { // 현재 인덱스가 이미지 배열의 길이와 같으면 (마지막 슬라이드 뒤에 복제된 첫 번째 슬라이드)
      setIsTransitioning(false); // 전환 상태를 false로 설정
      setCurrentIndex(0); // 인덱스를 0으로 초기화 (첫 번째 슬라이드로 이동)
      if (sliderRef.current) { // 슬라이더 참조가 존재하면
        sliderRef.current.style.transition = 'none'; // 전환 효과를 제거
        sliderRef.current.style.transform = `translateX(0)`; // 슬라이더를 첫 번째 슬라이드로 이동
      }
    }
  };

  useEffect(() => { // 컴포넌트가 마운트될 때와 images 배열 길이가 변경될 때 실행되는 useEffect 훅
    const interval = setInterval(() => { // 3초마다 실행되는 간격 타이머 설정
      setIsTransitioning(true); // 전환 상태를 true로 설정
      setCurrentIndex((prevIndex) => prevIndex + 1); // 현재 인덱스를 1 증가
    }, 3000); // 3초마다 슬라이드 변경

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 간격 타이머를 제거
  }, [images.length]); // 의존성 배열로 images 배열의 길이를 사용

  useEffect(() => { // 전환 상태 또는 현재 인덱스가 변경될 때 실행되는 useEffect 훅
    if (isTransitioning && currentIndex === images.length && sliderRef.current) { // 전환 중이고, 현재 인덱스가 마지막 슬라이드 뒤의 복제된 첫 번째 슬라이드일 때
      sliderRef.current.style.transition = 'transform 1s ease-in-out'; // 전환 효과를 설정
      sliderRef.current.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`; // 슬라이더를 이동 (복제된 첫 번째 슬라이드로)
    }
  }, [currentIndex, isTransitioning, images.length]); // 의존성 배열로 현재 인덱스, 전환 상태, 이미지 배열 길이를 사용

  useEffect(() => { // 전환 상태 또는 현재 인덱스가 변경될 때 실행되는 useEffect 훅
    if (sliderRef.current && isTransitioning) { // 슬라이더 참조가 존재하고, 전환 중일 때
      sliderRef.current.style.transition = 'transform 1s ease-in-out'; // 전환 효과를 설정
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`; // 슬라이더를 이동 (현재 인덱스에 해당하는 슬라이드로)
    }
  }, [currentIndex, isTransitioning]); // 의존성 배열로 현재 인덱스와 전환 상태를 사용

  return (
    <div className="slider"> {/* 슬라이더 컨테이너 */}
      <div className="slider-images" ref={sliderRef} onTransitionEnd={handleTransitionEnd}> {/* 슬라이더 이미지 컨테이너 */}
        {images.map((image, index) => ( // 이미지 배열을 매핑하여 슬라이드를 생성
          <div key={index} className="slide"> {/* 각 슬라이드 */}
            <img src={image} alt={`Slide ${index}`} /> {/* 슬라이드 이미지 */}
          </div>
        ))}
        {/* 첫 번째 이미지를 마지막에 복제하여 무한 루프 효과를 만듭니다. */}
        <div className="slide">
          <img src={images[0]} alt="Slide 0" /> {/* 첫 번째 슬라이드를 복제하여 추가 */}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

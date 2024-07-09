import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';

interface SliderProps {
  images: string[];
}

export default function Slider({ images }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransitionEnd = () => {
    if (currentIndex === images.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      if (sliderRef.current) {
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = `translate(0)`;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (isTransitioning && currentIndex === images.length && sliderRef.current) {
      sliderRef.current.style.transition = `transform 1s ease-in-out`;
      sliderRef.current.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`
    }
  }, [currentIndex, isTransitioning, images.length]);
  
  useEffect(() => {
    if (isTransitioning && sliderRef.current) {
      sliderRef.current.style.transition = `transform 1s ease-in-out`;
      sliderRef.current.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`
    }
  }, [currentIndex, isTransitioning]);

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
  )
}

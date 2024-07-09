import React, { useEffect, useRef, useState } from 'react'

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
    <div>Slider</div>
  )
}

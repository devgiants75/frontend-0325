import React from 'react'

import ImageSlider from './ImageSlider';

import cat01 from '../../assets/images/cat01.jpg';
import cat02 from '../../assets/images/cat02.jpg';
import dog01 from '../../assets/images/dog01.jpg';
import dog02 from '../../assets/images/dog02.jpg';
import dog03 from '../../assets/images/dog03.jpg';

export default function ButtonSliderApp() {
  const images = [
    cat01,
    cat02,
    dog01,
    dog02,
    dog03,
  ];

  return (
    <div className="App">
      <h1>Button Image Slider</h1>
      <ImageSlider images={images} />
    </div>
  )
}

import React from 'react'
import Slider from './slider/Slider';
import Pagination from './pagination/Board';

import cat01 from '../assets/images/cat01.jpg';
import cat02 from '../assets/images/cat02.jpg';
import dog01 from '../assets/images/dog01.jpg';
import dog02 from '../assets/images/dog02.jpg';
import dog03 from '../assets/images/dog03.jpg';
import ButtonSliderApp from './buttonSlider/ButtonSliderApp';
import ImageSliderApp from './imagesSlider/ImageSliderApp';
import ModalExample from './modal/ModalExample';

export default function Components() {
  const images = [cat01, cat02, dog01, dog02, dog03];

  return (
    <div>
      <h2>1. 기본 슬라이드</h2>
      <Slider images={images} />
      <ButtonSliderApp />
      <ImageSliderApp />
      <ModalExample />
      <Pagination />

      <hr />
    </div>
  )
}

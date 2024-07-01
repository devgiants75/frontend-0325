import React from 'react'
import UseRef from './a_useRef/UseRef';
import UseRef02 from './a_useRef/UseRef02';
import UseRef03 from './a_useRef/UseRef03';
import UseRef04 from './a_useRef/UseRef04';
import ProductApp from './b_Practice/ProductApp';

const images = [
  'https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/09/19/12/34/dog-8262506_640.jpg',
  'https://cdn.pixabay.com/photo/2019/08/07/14/11/dog-4390885_640.jpg',
  'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_640.jpg',
  'https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_640.jpg'
];

export default function Index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'pink'
      }}>0701</h1>

      <h2>1. 변경 가능한 참조 객체 생성</h2>
      <UseRef />
      <UseRef02 images={images} />
      <UseRef03 />
      <UseRef04 />

      <h2>2. 실습 문제</h2>
      <ProductApp />
    </div>
  )
}

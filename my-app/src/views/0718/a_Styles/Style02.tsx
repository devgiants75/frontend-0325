import React from 'react'

// .css 파일 적용 방법
import './styles/style02.css';

//# 2. CSS 클래스
// : CSS 파일을 작성하고 클래스 이름을 className 속성에 전달하여 스타일을 적용
export default function Style02() {
  return (
    <div className='box'>
      This is a CSS class style component
      <p className='para'>This is a paragraph</p>
    </div>
  )
}

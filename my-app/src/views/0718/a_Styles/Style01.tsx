import React from 'react'

//# 1. 인라인 스타일
// : 인라인 스타일은 리액트 컴포넌트에 직접 스타일을 지정하는 방법

export default function Style01() {

  // 인라인 스타일 지정 시
  // 1. 스타일 속성은 lowerCamelCase 사용
  // 2. 속성 값은 문자열로 전달 
  const boxStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px'
  }

  const paraStyle = {
    backgroundColor: 'lightcoral',
    color: '#333'
  }

  return (
    <div style={boxStyle}>
      This is an inline style component
      <p style={paraStyle}>This is a paragraph</p>
    </div>
  )
}

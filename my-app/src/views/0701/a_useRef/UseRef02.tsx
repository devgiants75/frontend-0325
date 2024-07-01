import React from 'react'

//! 이미지 갤러리 순환 예제
// useRef를 사용하여 이미지 갤러리 내에서 이미지 순서를 순환
export default function UseRef02() {
  // 현재 이미지 인덱스를 상태로 관리
  

  // 이미지 요소에 대한 참조

  const handleNextClick = () => {
    // 다음 이미지로 인덱스를 순환
    // 0, 1, 2, 3, 4
    // % images.length
    // : 인덱스가 이미지 배열의 끝을 넘어가면 다시 0으로 돌아오도록 설정
    // : 이미지 배열의 길이를 초과하지 않고 순환하는 이미지를 생성

    // 참조된(보여지는) 이미지 요소에 애니메이션 효과를 적용
  }

  return (
    <div
      style={{
        margin: '10px'
      }}
    >
      <h3>이미지 갤러리</h3>
      
    </div>
  )
}

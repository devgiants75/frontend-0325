// cat02.jpg 이미지를 생성
// : 픽사베이에서 이미지 다운로드
// : images 폴더 내에 cat02.jpg 저장

// Component03 컴포넌트 내에 
// : img 태그를 사용하여 - cat02를 마크업

// Component03 컴포넌트를 index.tsx 파일에서 호출(사용)
import React from 'react'
import cat02 from '../../../assets/images/cat02.jpg'

export default function Component03() {
  return (
    <div>
      <img src={cat02} alt="고양이02" width={100} />
    </div>
  )
}

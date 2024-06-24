import React from 'react'
import cat01 from '../../../assets/images/cat01.jpg';


/*
! 컴포넌트(Component)
: 사용자 인터페이스(UI)를 구축하는 기본 요소

! 컴포넌트 사용 방법
1. 컴포넌트 내보내기(export default)

2. 함수 정의 
- 컴포넌트는 함수형 또는 클래스형으로 제작 가능
- 함수형 컴포넌트 제작을 권장
: JS의 일반 함수 형태와 동일
  , 함수명을 반드시 대문자로 시작*
: rfc 스니펫 사용 시 
  - 파일명으로 함수명이 구현
  - 파일명 자체를 대문자로 사용하여 제작
  - 폴더의 메인이되는 파일인 index.tsx의 경우
    소문자 index를 사용해야만 디렉토리의 메인 파일로 인식

3. 마크업 추가
: src와 alt 속성을 가진 img 태그를 반환

>> JSX
  : HTML처럼 작성 되지만 JS코드로 분류
  : JS내에서 마크업을 내장할 수 있도록 함

*/

// 대문자로 시작하는 Img 컴포넌트 생성
function Img() {
  // 중괄호 내에서 HTML 코드 작성 시 ()내에 작성
  return(
    <img src={cat01} alt="강아지" width={300} />
  )
}

// 정의된 Img 컴포넌트 사용
export default function Component01() {
  // return <Img />
  return (
    <div>
      <p>강아지 이미지 - img 태그 사용</p>
      <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg" alt="img 태그 강아지" width={200} />

      <p>강아지 이미지 - Img 컴포넌트 사용</p>
      <Img />
      <Img />
      <Img />
      <Img />
    </div>
  )
}
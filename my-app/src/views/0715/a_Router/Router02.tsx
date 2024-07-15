import React from 'react'

//! 리액트 라우터 - 네비게이션 / 링크

//? 1. Link
// : HTML의 a태그와 유사하게 동작
// : to props가 필수값 - 네비게이션 대상 URL을 지정
// >> 페이지를 새로 고침하지 않고 라우트 변경

//? 2. NavLink
// : Link와 유사하게 동작
// : 현재 경로와 일치하는 경우 스타일 또는 클래스 추가
// >> 활성 링크를 시각각적으로 구분 가능

export default function Router02() {
  return (
    <div>
      <h2>Link 컴포넌트 사용법</h2>
      
      <hr />
      <h2>NavLink 컴포넌트 사용법</h2>
      
    </div>
  )
}
import React from 'react'

//! jsonplaceholder의 posts 데이터를 비동기 함수로 가져오기
// - 해당 상태를 관리
// - 화면에 렌더링

//? 1. 각각의 게시물 데이터 타입 정의


export default function Effects04() {
  //? 게시물 상태 및 초기값 지정

  //? 로딩 & 에러 상태 관리

  //? 검색 용어에 대한 상태 관리

  //? 데이터를 불러오는 비동기 함수
  // : 부수 효과

  // 컴포넌트가 마운트될 때 데이터 호출


  return (
    <div>
      <h3>Posts 게시물</h3>


      <ul>
        {/* 
        순서가 없는 태그 내에 
          h4태그 - post 제목
          p태그 - body 내용 
        */}
      </ul>
    </div>
  )
}

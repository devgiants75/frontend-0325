import React, { useState } from 'react'

//! Todo 리스트 관리

// 1. 할 일 내용(문자열)
// 2. 할 일 완료 상태(논리값)
// 3. 시간 기록(Date 날짜 타입)
// 4. 할 일 삭제
//   : 삭제 버튼 클릭 시 배열에서 요소 제거

export default function Practice01() {

  return (
    <div style={{
      backgroundColor: 'lightblue',
      width: '400px',
      margin: '20px auto',
      padding: '10px',
      border: '1px solid black',
      borderRadius: '5px'
    }}>
      <h3>할 일 목록 앱</h3>
      
    </div>
  )
}

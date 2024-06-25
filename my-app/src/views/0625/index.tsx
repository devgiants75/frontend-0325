import React from 'react'
import Props01 from './a_Props/Props01'

export default function index() {
  return (
    <div>
      <h1 
        // CSS의 경우 속성 사용 시
        // : background-color로 지정
        style={{ backgroundColor: 'pink' }}
      >
        0625 수업자료
      </h1>


      <h2>1. Props</h2>
      <Props01 />


      <h2>2. 렌더링(조건부/리스트)</h2>

    </div>
  )
}

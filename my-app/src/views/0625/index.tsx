import React from 'react'
import Props01 from './a_Props/Props01'
import Props02 from './a_Props/Props02'
import Props03 from './a_Props/Props03'
import Rendering01 from './b_Rendering/Rendering01'
import Rendering02 from './b_Rendering/Rendering02'
import Practice0625 from './Practice0625'

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
      <Props02 />
      <Props03 />

      <h2>2. 렌더링(조건부/리스트)</h2>
      <Rendering01 />
      <Rendering02 />

      <p>예제</p>
      <Practice0625 />
    </div>
  )
}

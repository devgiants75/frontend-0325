import React from 'react'
import State01 from './a_State/State01'
import State02 from './a_State/State02'
import State03 from './a_State/State03'
import State04 from './a_State/State04'
import State05 from './a_State/State05'
import State06 from './a_State/State06'

export default function index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'pink'
      }}>0627</h1>

      <h2>1. State 기본 동작 원리</h2>
      <State01 />
      <State02 />
      <State03 />
      <State04 />
      <State05 />
      <State06 />

      <h2>2. State 연습 문제</h2>

    </div>
  )
}

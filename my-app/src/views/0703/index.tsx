import React from 'react'
import Effects01 from './a_Effects/Effects01'
import Effects02 from './a_Effects/Effects02'
import Effects03 from './a_Effects/Effects03'
import Effects04 from './a_Effects/Effects04'

import Practice01 from './b_Practice/Practice01'
import Practice02 from './b_Practice/Practice02'
import Practice03 from './b_Practice/Practice03'
import TodoApp from './c_Todo/TodoApp'

export default function Index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'pink'
      }}>0703</h1>

      <h2>1. 리액트 부수 효과(Effects)</h2>
      <Effects01 />
      <Effects02 />
      <Effects03 />
      <Effects04 />

      <h2>2. 리액트 부수 효과 예제</h2>
      <Practice01 />
      <Practice02 />
      <Practice03 />

      <h2>3. 리액트 기본 Hook 사용 Todo</h2>
      <p>useState, useRef, useEffect</p>
      <TodoApp />
    </div>
  )
}

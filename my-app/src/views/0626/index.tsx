import React from 'react'
import Handler01 from './b_Handler/Handler01'
import Handler02 from './b_Handler/Handler02'
import Handler03 from './b_Handler/Handler03'
import Handler04 from './b_Handler/Handler04'
import Handler05 from './b_Handler/Handler05'
import Practice0626 from './b_Handler/Practice'

export default function Index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'pink'
      }}>
        0626 수업 자료
      </h1>
      <h2>1. Review</h2>


      <h2>2. Handler</h2>
      <Handler01 />
      <Handler02 />
      <Handler03 />
      <Handler04 />
      <Handler05 />
      <Practice0626 />
    </div>
  )
}

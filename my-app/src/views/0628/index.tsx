import React from 'react'
import Practice01 from './b_Practice/Practice01'
import ShoppingListApp from './b_Practice/ShoppingListApp'
import StateProps01 from './a_State_Props/StateProps01'
import StateProps02 from './a_State_Props/StateProps02'

export default function index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'pink'
      }}>0628</h1>

      <h2>1. State VS Props</h2>
      <StateProps01 />
      <StateProps02 />
      
      <h2>2. State 연습 문제</h2>
      <Practice01 />
      <ShoppingListApp />
    </div>
  )
}

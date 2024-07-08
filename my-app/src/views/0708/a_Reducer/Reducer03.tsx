import React from 'react'

//! 2. 리듀서를 사용하여 상태 업데이트 로직을 한 곳에서 관리
// : 상태의 중앙 관리식 구현

export default function Reducer03() {
  //! useState를 사용할 때의 문제점
  // useState는 React에서 가장 기본적인 상태 관리 훅
  // : 복잡한 상태 로직을 관리할 때 몇 가지 한계 O

  // 예시: 복수의 useState 사용


  //! useReducer로 리팩토링
  // useReducer는 복잡한 상태 업데이트 로직을 외부의 reducer 함수에 위임함으로써, 상태 업데이트 로직을 한 곳에서 관리
  // >> 디버깅을 용이하게 하고 코드의 가독성을 향상


  return (
    <div>
      <h4>UseState로 여러 개의 상태 관리</h4>
      
      <hr />
      <h4>UseReducer로 여러 개의 상태 관리</h4>
    </div>
  )
}

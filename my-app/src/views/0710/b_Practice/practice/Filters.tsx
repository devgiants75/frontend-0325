import React from 'react'

//# Filters 컴포넌트의 props 타입을 정의
// : setFilter의 속성값은 filter 상태 변수값을 매개변수로 받아 void를 반환하는 함수 타입
// : 필터 상태를 변경하는 함수 타입

//# Filters 함수형 컴포넌트를 정의
// 이 컴포넌트는 setFilter 함수를 prop으로 받아, 버튼 클릭 시 해당 함수를 호출
export default function Filters() {
  return (
    <div>
      {/* 
        - 버튼을 감싸는 div 태그
        - 'All' 버튼: 클릭하면 setFilter 함수를 호출하여 필터 상태를 'all'로 변경 
      */}
      <button></button>

      {/* 'Completed' 버튼: 클릭하면 setFilter 함수를 호출하여 필터 상태를 'completed'로 변경 */}
      <button></button>

      {/* 'Active' 버튼: 클릭하면 setFilter 함수를 호출하여 필터 상태를 'active'로 변경 */}
      <button></button>
    </div>
  )
}

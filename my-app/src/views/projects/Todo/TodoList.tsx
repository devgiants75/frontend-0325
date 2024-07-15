import React from 'react'

// Todo 항목의 타입을 정의하는 인터페이스
// : 할 일의 고유 id, 할 일의 내용, 할 일의 완료 상태

// TodoList 컴포넌트의 prop 타입을 정의하는 인터페이스
interface TodoListProps {
  // : 할 일 목록, 할 일 완료/미완료 토글 함수, 할 일 삭제 함수
}

// TodoList 함수형 컴포넌트를 정의
// 이 컴포넌트는 할 일 목록, 할 일 토글 함수, 할 일 삭제 함수를 props로 받기
export default function TodoList() {
  return (
    <div>
      {/* 할 일 목록을 ul 태그로 래핑 */}

      {/* 
        할 일 배열을 순회하여 li태그로 각 할 일을 표시 
        : 할 일의 완료 상태에 따라 textDecoration의 값을 'line-through'와 'none'으로 변경
      */}

      {/* 
        li 태그 내부
        - 할 일 내용 
        - input 태그 
          (
            checkbox 타입
            , 체크 박스 상태 변경 시 toggleTodo 함수 호출
            , checked 속성(bool 속성) - 완료여부 값을 속성값으로 전달
          )
        - 삭제 버튼 (삭제 버튼 클릭 시 deleteTodo 함수 호출)
      */}
    </div>
  )
}

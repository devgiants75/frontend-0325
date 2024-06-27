import React from 'react'

//! 이벤트 핸들러 전달 및 하위 컴포넌트와의 상호작용
// : 이벤트 핸들러를 하위 컴포넌트에 전달하고, 이를 통해 이벤트를 처리하는 방법

// 이벤트 핸들러를 처리하는 기본 Button 컴포넌트를 정의
// : onClick 함수와 children을 props로 받음

// ButtonProps 인터페이스 정의

// Button 컴포넌트 정의
function Button() {
  return (
    // 버튼 클릭 시 전달된 함수를 호출하도록 지시
    <button>
    </button>
  )
}

// ClgButton 컴포넌트를 정의
// : clg prop을 받아서 이를 출력하는 핸들러를 내부적으로 정의하고, 이를 Button 컴포넌트에 전달


function ClgButton() {

  return (
    // 내부 Button에 onClick의 prop으로 handleClgClick을 전달
    <></>
  )
}

// BasicButton 컴포넌트를 정의
// : 인라인 함수로 이벤트 핸들러를 정의하고, 이를 Button 컴포넌트에 전달
function BasicButton() {
  return (
    // 내부 Button에 onClick의 prop으로 인라인 함수를 전달
    <></>
  );
}

export default function Handler03() {
  return (
    <div>

    </div>
  )
}

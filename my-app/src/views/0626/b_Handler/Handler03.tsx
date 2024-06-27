import React from 'react'

//! 이벤트 핸들러 전달 및 하위 컴포넌트와의 상호작용
// : 이벤트 핸들러를 하위 컴포넌트에 전달하고, 이를 통해 이벤트를 처리하는 방법

// 이벤트 핸들러를 처리하는 기본 Button 컴포넌트를 정의
// : onClick 함수와 children을 props로 받음

// ButtonProps 인터페이스 정의
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

// Button 컴포넌트 정의
function Button({ onClick, children }: ButtonProps) {
  return (
    // 버튼 클릭 시 전달된 함수를 호출하도록 지시
    <button onClick={onClick}>
      {children}
    </button>
  )
}

// ClgButton 컴포넌트를 정의
// : clg prop을 받아서 이를 출력하는 핸들러를 내부적으로 정의하고, 이를 Button 컴포넌트에 전달

interface ClgButtonProps {
  clg: string;
}

function ClgButton({clg}: ClgButtonProps) {
  function handleClgClick() {
    console.log(`Console log ${clg}`);
  }

  return (
    // 내부 Button에 onClick의 prop으로 handleClgClick을 전달
    <Button onClick={handleClgClick}>
      Console log "{clg}"
    </Button>
  )
}

// BasicButton 컴포넌트를 정의
// : 인라인 함수로 이벤트 핸들러를 정의하고, 이를 Button 컴포넌트에 전달
function BasicButton() {
  return (
    // 내부 Button에 onClick의 prop으로 인라인 함수를 전달
    <Button onClick={() => console.log('기본 버튼입니다.')}>
      기본버튼 - 컴포넌트 사이에 입력 값이 없을 경우 오류
      (ReactNode의 값을 props로 전달)
    </Button>
  );
}

export default function Handler03() {
  return (
    <div>
      <ClgButton clg='콘솔에 내용을 입력합니다.' />
      <BasicButton />
    </div>
  )
}

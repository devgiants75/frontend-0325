import React from 'react'

//! use- 훅(기능)
// : 함수형 컴포넌트 내에서 상태와 기타 리액트 기능을 사용하기 위한 특별한 함수

//! useRef
// : reference(참조)의 축약어
// : 변경 가능한 참조 객체를 생성할 수 있는 훅

//? 용도
// - DOM 요소에 직접적으로 접근하고 조작하기
// - 컴포넌트가 다시 렌더링될 때도 값이 유지되는 변수를 관리하기
// 이전 상태를 기억하기 (렌더링 사이에 지속되는 값을 유지)

//? 기본 문법
// const refContainer = useRef(initialValue);

// - initialValue: 참조 객체의 초기 값
// - refContainer.current: 저장된 현재 값에 접근

//? 텍스트 길이 카운팅 예제

export default function UseRef() {

  //? 1. 텍스트 길이를 저장하기 위한 참조 변수
  // 렌더링 사이에 입력된 텍스트의 길이를 저장
  // : 입력 필드의 값이 변경될 때마다 업데이트

  //? 2. 타이머 구현 함수
  // : 타이머의 간격(인터벌) ID를 저장-

  const startTimer = () => {
  }

  const stopTimer = () => {
  }

  const resetTimer = () => {
    //! 초기화 버튼 클릭 시
    // 1. 카운팅 중
    // - 카운터 종료 / 시간을 0으로 초기화
    // 2. 카운팅 X
    // - 시간을 0으로 초기화

  }

  return (
    <>
      <h4>현재 텍스트 길이 측정 예제</h4>
      

      <hr />
      <h4>타이머 예제</h4>
    </>
  )
}

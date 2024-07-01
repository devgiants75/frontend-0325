import React, { useRef, useState } from "react";

//! use- 훅(Hook, 기능)
// : 함수형 컴포넌트 내에서 상태와 기타 리액트 기능을 사용하기 위한 특별한 함수

//! useRef
// : reference(참조)의 축약어
// : 변경 가능한 참조 객체를 생성할 수 있는 훅

//? 용도
// - DOM 요소에 직접적으로 접근하고 조작하기
// - 컴포넌트가 다시 렌더링될 때도 값이 유지되는 변수를 관리하기
// - 이전 상태를 기억하기 (렌더링 사이에 지속되는 값을 유지)

//? 기본 문법
// const refContainer = useRef(initialValue);

// - initialValue: 참조 객체의 초기 값
// - refContainer.current: 저장된 현재 값에 접근

//? 텍스트 길이 카운팅 예제

export default function UseRef() {
  //? 1. 텍스트 길이를 저장하기 위한 참조 변수
  // 렌더링 사이에 입력된 텍스트의 길이를 저장
  // : 입력 필드의 값이 변경될 때마다 업데이트

  //# input 창에 입력되는 값을 상태 관리
  const [text, setText] = useState<string>("");

  //& 타이머 값을 상태 관리
  const [time, setTime] = useState<number>(0);

  //# 텍스트 길이를 저장하기 위한 참조 변수
  const lengthRef = useRef(0);

  //& 타이머 간격 ID를 저장하기 위한 참조 변수
  // 초기 상태 '초'값 지정 X
  // : 시작 버튼 클릭 시 타이머 간격 '초'값이 저장 - number
  const intervalRef = useRef<number | null>(null);

  //# 입력 필드 값이 변경될 때 호출되는 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    lengthRef.current = e.target.value.length;
  }

  //? 2. 타이머 구현 함수
  // : 타이머의 간격(인터벌) ID를 저장

  const startTimer = () => {
    // 이미 타이머가 실행 중인 경우 추가적으로 시작되지 않도록 설정
    if (intervalRef.current !== null) return;

    // setInterval() 메서드는 글로벌 환경에서 실행(전역 객체 - window)
    intervalRef.current = window.setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      // 타이머 정지
      clearInterval(intervalRef.current);
    
      // 인터벌 참조 초기화
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    //! 초기화 버튼 클릭 시
    // 1. 카운팅 중
    // - 카운터 종료 / 시간을 0으로 초기화
    stopTimer();

    // 2. 카운팅 X
    // - 시간을 0으로 초기화
    setTime(0);
  };

  return (
    <>
      <h4>현재 텍스트 길이 측정 예제</h4>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Text 길이: {lengthRef.current}</p>

      <hr />
      <h4>타이머 예제</h4>
      <p>Time: {time} seconds</p>
      <button onClick={startTimer}>시작</button>
      <button onClick={stopTimer}>종료</button>
      <button onClick={resetTimer}>초기화</button>
    </>
  );
}

import React, { useState } from 'react'; 

//! 1. Custom Hook이란?
// React의 기본 Hook (useState, useEffect 등)을 사용하여 작성되는, 재사용 가능한 로직의 모음

// - 컴포넌트 간에 상태 로직을 쉽게 공유 가능
// >> 복잡한 컴포넌트를 더 깔끔하고 관리하기 쉬운 코드로 분리 가능

//! 2. Custom Hook 만들기
// Custom Hook은 보통 use로 시작하는 함수로 정의
// : 해당 함수 내에서 다른 Hook을 호출하고, 그 결과를 반환

//? useCounter 훅
// : 초기값을 매개변수로 받고, 카운터를 증가, 감소시키고 초기화하는 함수들을 반환

// 커스텀 훅은 export 내보내기를 주로 사용
// : 개발자가 명시한 함수명 그대로를 사용하기를 권장
export function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }

  const reset = () => {
    setCount(initialValue);
  }

  return { count, increment, decrement, reset };
}

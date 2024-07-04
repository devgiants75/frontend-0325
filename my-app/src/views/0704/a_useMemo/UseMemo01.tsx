import React, { useMemo, useState } from 'react'

//! useMemo 개요 (memo - memoization: 메모리에 넣기)
// : 성능 최적화를 위해 사용되는 Hook
// : 계산 비용이 높은 작업의 "결과"를 메모리에 저장하여
//   , 동일한 입력에 대해서는 결과를 재계산하지 않고 
//     메모리에서 바로 가져오는 메모이제이션(memoization) 기법을 활용

//! useMemo의 구조
// : 두 개의 인자를 가짐

// const value = useMemo(() => {
//   return calculate();
// },[item]);

//? 1. 콜백 함수(Callback Function)
// : 메모이제이션될 값을 계산
// : 해당 결과는 종속성 배열(deps)의 값이 변경될 때만 다시 계산

//? 2. 의존성 배열(Dependency Array, deps)
// : 해당 값이 변경될 때만 콜백 함수가 다시 실행되어 결과를 계산
// : 빈배열일 경우 컴포넌트가 마운트 될 때만 함수가 실행되고 값을 저장

//! 콜백 함수 예시
// -- 예) 계산 비용이 높은 함수
function expensiveCalculation(num: number) {
  console.log('비용이 높은 계산이 진행 중입니다.');
  return num * num;
}

//& useMemo 사용 시 주의 사항

// 1. 최적화를 위한 도구
// : 복잡하지 않은 계산 | 가벼운 작업에 useMemo 사용시 메모리 할당량이 증가하여 오히려 비효율적

// 2. 메모리에 저장된 값
// : 부수적인 효과(effect)에 사용될 경우 React가 의도치않게 값을 삭제하는 경우

export default function useMemo01() {
  const [num, setNum] = useState<number>(5);
  const [count, setCount] = useState<number>(0);
  
  //* useMemo 없이 직접 호출
  // const squaredNumber = expensiveCalculation(num);

  //* useMemo를 사용하여 메모이제이션 사용
  // : expensiveCalculation 함수는 num값이 변경될 때만 호출

  const squaredNumber = useMemo(() => {
    return expensiveCalculation(num);
  }, [num]);

  return (
    <div>
      <h4>제곱의 수는 {squaredNumber}입니다.</h4>
      <button onClick={() => setNum(prevNum => prevNum + 1)}>증가 버튼</button>
      <h4>카운터의 수는 {count}입니다.</h4>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>카운터 증가 버튼</button>

    </div>
  )
}

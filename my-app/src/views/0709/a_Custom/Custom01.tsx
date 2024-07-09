import React from 'react'
import { useCounter } from './hooks/useCounter'

//! Custom Hook 사용하기
// Custom Hook을 사용하는 것은 일반 Hook을 사용하는 것과 비슷

export default function Custom01() {
  const { count, increment, decrement, reset } = useCounter(0);

  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(prevCount => prevCount + 1);
  // }

  // const decrement = () => {
  //   setCount(prevCount => prevCount - 1);
  // }

  // const reset = () => {
  //   setCount(0);
  // }

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
    </div>
  )
}

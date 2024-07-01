import React, { useRef, useState } from 'react'

export default function UseRef04() {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(0);

  const incrementCount = () => {
    setCount((prevCount) => {
      prevCountRef.current = prevCount;
      return prevCount + 1;
    })
  }

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <p>이전 카운트: {prevCountRef.current}</p>
      <button onClick={incrementCount}>증가</button>
    </div>
  );
}

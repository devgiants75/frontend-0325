import React, { useEffect, useState } from "react";

export default function Effects03() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('이승아');

  // 마운팅 시 실행
  useEffect(() => {
    console.log(`Component mounted`);

    return () => {
      console.log(`Component will unmounted`);
    }
  }, []);

  // count가 업데이트될 때 실행
  useEffect(() => {
    console.log(`Count is ${count}`);
  }, [count]);

  // name이 업데이트될 때 실행
  useEffect(() => {
    console.log(`Name is ${name}`);
  }, [name]);

  // 모든 렌더링마다 실행
  // : useEffect를 작성하지 않은 것과 동일한 효과
  useEffect(() => {
    console.log('컴포넌트가 리렌더링 됩니다.');
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment Count
      </button>

      <p>Name: {name}</p>
      <button onClick={() => setName(
        name === '이승아' ? '이도경' : '이승아'
      )}>
        Change Name
      </button>
    </div>
  );
}

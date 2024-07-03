import React, { useEffect, useState } from 'react'

// 타이머 기능을 부수 효과로 사용
export default function Effects02() {

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('타이머 종료');
    }

    // 빈 의존성 배열: 컴포넌트가 처음 마운트 될 때 한 번만! 실행
  }, []);

  return (
    <div>
      타이머: {count}
    </div>
  )
}

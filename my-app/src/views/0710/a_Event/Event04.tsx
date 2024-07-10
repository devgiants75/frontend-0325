import React, { useState } from 'react'

//& 커스텀 이벤트 핸들러의 정의
// - 커스텀 이벤트 핸들러는 표준 이벤트 핸들러를 확장하거나 특수한 로직을 포함하여 애플리케이션 특정 요구 사항을 충족시키도록 설계된 함수
// >> 이들은 특히 복잡한 상호작용이나 다양한 이벤트를 조합해야 할 때 유용

interface Props {
  onCustomClick: (data: string) => void;
}

const CustomButton = ({ onCustomClick }: Props) => {

  const handleClick = () => {
    const data = 'Some data';
    onCustomClick(data);
  }

  return <button onClick={handleClick}>Click</button>
};

//! 고차원 함수를 이용한 이벤트 핸들링

// 고차원 함수의 정의
// 고차원 함수는 다른 함수를 인자로 받거나 함수를 결과로 반환하는 함수
// : 이벤트 핸들링에서 고차원 함수는 이벤트 핸들러를 동적으로 생성하는 데 사용

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }
  
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }

  return { count, increment, decrement };
}

export default function Event04() {
  const { count, increment, decrement } = useCounter();

  const handleCustomClick = (data: string) => {
    console.log(`자식 컴포넌트의 데이터: ${data}`);
  }

  const handleEvent = (action: () => void) => {
    return () => { 
      action();
      console.log(`Current count: ${count}`);
    }
  }
  
  return (
    <>
      <CustomButton onCustomClick={handleCustomClick} />

      <div>
        <button onClick={handleEvent(increment)}>증가</button>
        <button onClick={handleEvent(decrement)}>감소</button>
      </div>
    </>
  )
}

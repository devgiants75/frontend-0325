import React, { useState } from "react";

//! 이벤트의 정의

//& 1. 이벤트의 정의
// : 사용자 또는 시스템이 애플리케이션에 전달하는 모든 종류의 알림
// EX) 사용자의 클릭, 키 입력, 마우스 움직 또는 시스템에서 발생하는 업데이트 등

//& 2. 리액트의 이벤트 시스템 특징
// - 합성 이벤트 
// : 브라우저의 네이티브 이벤트를 감싸는 합성 이벤트를 사용

// > 크로스 브라우저 호환성을 제공
// > SyntheticEvent 객체를 통해 전달
//   : target, stopPropagation(), preventDefault()와 같은 속성과 메서드를 포함

// - 이벤트 위임: React는 자동으로 모든 이벤트를 문서의 최상위에서 처리
// >> 이는 메모리 사용량을 줄이고 성능을 향상

//& 3. 이벤트 핸들러 작성 방법
// : 함수형 컴포넌트에서는 화살표 함수를 사용하여 구현
// : 최적화 방안(메모리제이션) - useCallback을 사용하여 이벤트 핸들러 메모화

export default function Event01() {
  const [value, setValue] = useState<string>('');
  
  //! 버튼 클릭 시 발생하는 이벤트 핸들러
  const handleFirstClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert(`Button Clicked (First)`);
  }
  
  const handleSecondClick = (event: React.MouseEvent<HTMLDivElement>) => {
    alert(`Button Clicked (Second)`);
  }

  //! 요소의 값을 변경할 때 일어나는 이벤트 핸들러
  // : input, textarea, select(option)
  const handleChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <>
      <button onClick={handleFirstClick}>Click Me</button>
      <div onClick={handleSecondClick} style={{ border: '1px solid black'}}>Click Me</div>

      <hr />
      <form>
        <input type="text" value={value} onChange={handleChange} />
        <p>{value}</p>
      </form>
    </>
  );
}

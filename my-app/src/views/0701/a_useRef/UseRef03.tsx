import React, { useRef } from "react";

//! useRef를 사용하여 DOM 요소 참조
// useRef는 컴포넌트가 다시 렌더링되더라도 동일한 참조값을 유지
// : 특정 DOM 요소에 접근하고 조작

export default function UseRef03() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    // 'current'는 참조하는 DOM 요소를 나타냄
    if (inputRef.current) {
      // focus(): DOM 요소를 활성화
      inputRef.current.focus();
    }
  };

  return (
    <div>
      {/* input 요소에 inputRef 연결 */}
      <input type="text" ref={inputRef} />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

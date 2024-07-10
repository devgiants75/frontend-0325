import React, { useState } from "react";

//& 이벤트 핸들러란?
// 이벤트 핸들러는 특정 이벤트가 발생했을 때 실행되는 함수
// : React에서는 이벤트 핸들링을 위해 JSX 코드 내에 이벤트 핸들러를 직접 할당

// 주요 이벤트 타입
// onClick: 사용자가 요소를 클릭할 때 발생
// onChange: 입력 요소의 값이 변경될 때 발생
// onSubmit: 폼 제출 시 발생

//& 이벤트 객체(Event object)의 사용

// 2.1 이벤트 객체란?
// 이벤트 객체는 이벤트 발생 시 이벤트에 관련된 모든 정보를 담고 있는 객체
// : React에서는 모든 이벤트 핸들러에 합성 이벤트 객체(SyntheticEvent)를 전달합니다. 이 객체는 브라우저의 네이티브 이벤트를 일관성 있게 추상화한 것

// 2.2 이벤트 객체의 활용
// 이벤트 객체를 사용하여 이벤트의 상세 정보를 알 수 있으며, preventDefault 또는 stopPropagation 메소드를 호출하여 기본 동작의 실행을 막거나 이벤트의 전파를 중단 가능능

export default function Event03() {
  //# 상태 관리 로직 //
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  //# 이벤트 핸들러 구현 //
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(`Input changed to: ${e.target.value}`);

    e.stopPropagation(); // 버블링 방지
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Form submitted: ${inputValue}`);
  };

  const condition = () => {

    if (count >= 5) {
      console.log(`Count limit reached`);
    } else {
      setCount(prevCount => prevCount + 1);
      console.log(`Button clicked ${count + 1} times`);
    }
  }

  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      <button onClick={condition}>조건부 핸들러</button>
    </div>
  );
}

import React from "react";

//! React 컴포넌트에서 이벤트 핸들러 구현

//? 이벤트 핸들러 prop의 이름 지정
// - on으로 시작
// - on 다음에는 이벤트를 설명하는 단어가 오며, 첫 글자는 대문자로 시작
// >> 예를 들어, 클릭 이벤트 핸들러는 onClick

//# ButtonProps 인터페이스
// : 두 개의 선택적 콜백 함수 onClg와 onAlert를 정의
// >> 이들은 각각 콘솔 로그와 알림창을 표시하는 기능
// >> children은 버튼 내부에 표시될 React 노드

// HTML 요소 내부의 prop는 정의된 이벤트 핸들러를 사용
// : 이벤트 핸들러 첨부 시 해당 이벤트를 사용할 수 있는
//   , 적절한 요소 사용이 필요
function Button1() {
  return ;
}

// Button2는 onAlert를 onClick prop으로 사용 
// : 버튼 클릭 시 알림창
function Button2() {
  return;
}

// 사용자 커스텀 Button 컴포넌트 내부의 props는 사용자 이름 정의가 가능
export default function Handler04() {
  return (
    <div>
    </div>
  );
}

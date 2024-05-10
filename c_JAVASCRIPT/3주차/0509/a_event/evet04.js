//& 자바스크립트 키보드와 마우스 이벤트

//! 이벤트 리스너 등록 속성
// 1. 키보드 이벤트

// keydown: 키를 누를 때 발생
// keyup: 키를 떼면 발생
// keypress: 키를 누르는 동안 발생

window.addEventListener("keydown", function (e) {
  console.log(`키보드를 입력하였습니다. ${e.key} - ${e.keyCode}`);
});

// 2. 마우스 이벤트

// click: 마우스 버튼을 클릭할 때 발생
// dblclick: 마우스 버튼을 빠르게 두 번 클릭할 때 발생
// mousemove: 마우스 버튼을 움직일 때 발생
// mousedown: 마우스 버튼을 누를 때 발생
// mouseup: 마우스 버튼을 떼면 발생

window.addEventListener("click", function (e) {
  console.log(`마우스를 클릭하였습니다. ${e.clientX} - ${e.clientY}`);
});

// 3. 폼 이벤트

// submit: 폼이 제출될 때 발생
// reset: 폼이 초기화될 때 발생
// change: 사용자가 폼의 값을 변경하고, 해당 요소에서 포커스를 빼면 발생
// input: 사용자가 폼의 값을 변경할 때 발생, change 이벤트와는 달리 포커스를 빼지 않아도 발생
// focus: 요소에 포커스가 갈 때 발생
// blur: 요소에서 포커스가 빠질 때 발생

let form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("폼이 제출되었습니다.");
});

//* 폼 유효성 검사
// 폼 이벤트는 폼 유효성 검사에도 활용
// 사용자가 폼에 적절한 값을 입력했는지 확인, 그렇지 않다면 경고 메시지를 보여주는 동작을 처리 가능

//! 페이지 로드 이벤트

// load: 페이지의 모든 콘텐츠(이미지, 스크립트 파일, css파일 등)가 완전히 로드되었을 때 발생
// DOMContentLoaded: HTML문서가 완전히 로드되고 DOM 트리가 완성되었을 때 발생, 이미지나 스크립트 파일 등이 아직 로드되지 않아도 이벤트가 발생
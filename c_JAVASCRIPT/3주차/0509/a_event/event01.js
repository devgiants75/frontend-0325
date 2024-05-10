//! ===== 자바스크립트의 이벤트 ===== !//

//& 이벤트 활용 시 사용 될 랜덤 숫자 생성 & 랜덤 색상(rgb) 생성 함수

// 1. random 함수 정의: 랜덤 숫자 생성
function random(number) {
  // Math.random(): 0이상 1미만의 부동 소수점 난수(랜덤 숫자)을 생성(반환)
  // Math.random() * (number + 1): 0이상 number + 1 미만의 범위의 난수가 반환
  // EX) number = 100 인 경우
  //     >> 0이상 101미만의 실수 생성

  // Math.floor(): 괄호 안의 주어진 숫자를 내림하여 가장 가까운 정수를 생성(반환)
  // EX) 위의 식에 이어서 0부터 101미만의 정수 생성
  //     >> 0부터 100까지의 정수 생성
  return Math.floor(Math.random() * (number + 1));
}

// 2. generateRandomColor 함수 정의: 랜덤 색상 생성
function generateRandomColor() {
  // 'rgb(x, y, z)'의 형식과 동일
  // : x, y, z의 값에 0부터 255까지의 무작위 정수를 사용
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

//! ----- 1. 이벤트 정의 ----- //
// : 웹 페이지에서 발생하는 대부분의 일(사건)을 의미
// : 예) 사용자가 버튼 클릭, 웹 페이지가 로드, input필드에 입력하는 것 등

//! ----- 2. 이벤트 핸들링 (handle: 다루다) ----- //
// : 특정 이벤트에 반응해서 특정 동작을 실행하는 것을 의미
// : 이벤트 핸들러(이벤트 리스너)는 특정 이벤트가 발생했을 때 호출되는 함수

// 예) '사용자가 버튼을 클릭'했을 때 'alert창이 실행'되도록 작성

//! ----- 3. 이벤트 핸들러 '등록' 방법 ----- //

//? 1. HTML 이벤트 핸들러 속성(프로퍼티)
// : HTML 요소에 직접 onclick, onload, onchange 등의 이벤트 핸들러 속성을 설정하는 방법
// : HTML 요소를 JS의 객체로 가져와서 이벤트 핸들러 프로퍼티 함수를 할당
// >> HTML과 CSS 분리 가능 - 유지 보수 쉬움

// - 웹 문서에 가져오는 HTML 요소는 객체로 저장
// :bgButton 상수에 버튼 태그에 대한 참조(주소값)를 저장
const bgButton = document.querySelector("#bgChange");

// onclick, onmounseout 프로퍼티는 이벤트 핸들러 속성
bgButton.onmouseover = function () {
  const randomColor = generateRandomColor(); // rgb(x, y, z)

  document.body.style.backgroundColor = randomColor;
};

//& on키워드 - 이벤트 핸들러
// : 속성에 함수를 할당해서 이벤트를 연결

// 이벤트 핸들러를 사용하여 웹 페이지 요소에 이벤트 기능을 추가하는 방법

//* 기본 이벤트 핸들러
// - btn.onclick: 요소를 클릭했을 때 실행되는 이벤트
// - btn.ondblclick: 요소를 더블 클릭했을 때 실행되는 이벤트

//* 포커스 이벤트 핸들러
// - btn.onfocus: 요소가 포커스를 받을 때 실행되는 이벤트
//   예를 들어, 사용자가 탭(Tab) 키를 사용하여 요소를 선택할 때 발생
// - btn.onblur: 요소에서 포커스가 해제될 때 실행되는 이벤트

//* 키보드 이벤트 핸들러
// - window.onkeydown: 키보드의 키가 눌렸을 때 전체 브라우저에서 실행되는 이벤트
// - window.onkeyup: 키보드의 키가 떼어졌을 때 전체 브라우저에서 실행되는 이벤트

window.onkeydown = function (event) {
  const keyDownText = `키를 눌렀습니다. ${event.key} - ${event.keyCode}`;
  document.getElementById("keydown").textContent = keyDownText;
};

//* 마우스 이벤트 핸들러
// - btn.onmouseover: 마우스 포인터가 버튼 위에 올라갔을 때 실행되는 이벤트
// - btn.onmouseout: 마우스 포인터가 버튼에서 벗어났을 때 실행되는 이벤트

//* 특수한 이벤트 핸들러
// <video></video>
// - video.onplay: 비디오 재생이 시작될 때 실행되는 이벤트
//   주로 video와 같은 특정 요소에서만 사용 가능

// 이벤트 핸들러는 대부분의 HTML 요소에서 사용 가능하며
// , 각각의 이벤트에 대한 반응을 커스터마이징 가능

//* >> 대부분의 이벤트 핸들러의 경우 모든 요소에서 사용 가능(button 요소 외에도 사용 가능)
// BUT! 몇몇의 경우에는 특수한 상황에서만 사용 가능
// ex) onplay: 재생을 하는 이벤트 핸들러
//        video와 같은 특정한 요소에서만 사용 가능

//? ----- 2) 인라인 이벤트 핸들러 ----- //
// : 사용하지 않는 것을 권장
// : 코드를 파싱(분석)하기가 어려워지고 유지보수에 어려움이 있음.

const textButton = document.querySelector("#textChange");

function colorChange() {
  const randomColor = generateRandomColor();
  textButton.style.color = randomColor;
}

//& HTML 요소의 참조를 가지고 오는 방법
// 1. document.querySelector('요소명');
// : 같은 요소명을 가진 요소가 많을 경우 첫 번째 요소만 가지고 옴
const btnsButton = document.querySelector(".btnsChange");

// 2. document.querySelectorAll('요소명');
// : 여러 개의 요소의 참조를 모두 가져와 한 번에 이벤트 핸들러를 추가
// : 해당 참조값들이 배열(리스트)로 저장
const divs = document.querySelectorAll("div");

// for (let i = 0; i < divs.length; i++) {
//    각각의 요소에 접근할 때 마다
//    ,해당 요소에 onclick 속성으로 colorChange 함수 전달
//   divs[i].onclick = function() {
//     this.style.backgroundColor = generateRandomColor();
//   }
// }

// forEach를 사용하여 위의 반복문을 재작성
// : 콜백함수(함수의 인자로 함수가 전달)
divs.forEach((div) => {
  div.onclick = function () {
    this.style.backgroundColor = generateRandomColor();
  };
});

//? ----- 3) addEventListener 메서드 ----- //
// : 표준 이벤트 모델
// : HTML요소의 addEventListener 메서드를 사용하여 이벤트 핸들러를 등록하는 방법
// : 한 요소에 여러 개의 이벤트 핸들러 등록 가능

// addEventListener 메서드는 요소에 이벤트 리스너를 '추가'
btnsButton.addEventListener("click", function () {
  const randomColor = generateRandomColor();

  btnsButton.style.backgroundColor = randomColor;
});

// addEventListener() 함수의 두 가지 매개변수
// 첫 번째 매개변수: 이벤트 유형(등록하고자 하는 이벤트의 이름 / 예 - click, load, input 등)
// 두 번째 매개변수: 이벤트 핸들러 함수

//? ----- 4) 이벤트 제거하는 방법 ----- //
// : removeEventListener 메서드 사용
// : 이벤트 핸들러를 제거하는 메서드

// HTML 요소 참조
const remove = document.querySelector("#remove");

// 이벤트 핸들러 함수 정의
// : 이벤트를 제거하려면 이벤트 핸들러 함수를 명시적으로 정의
// : 함수명이 필요
function removeChange() {
  const randomColor = generateRandomColor();
  remove.style.backgroundColor = randomColor;
}

// 이벤트 리스너 추가
remove.addEventListener('click', removeChange);

// 필요한 경우, 이벤트 리스너 제거
// : 현재에는 리스너 제거를 등록할 경우 이벤트가 없는 것 처럼 작용
remove.removeEventListener('click', removeChange);
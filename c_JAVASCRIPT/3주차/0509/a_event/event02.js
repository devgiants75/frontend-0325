//! 이벤트에 필요한 개념 정리

//! 1. 이벤트 객체
// : 이벤트 핸들러가 호출될 때, 브라우저는 자동으로 이벤트 객체를 생성하여 이벤트 핸들러에 전달
// : 이벤트가 발생할 때 브라우저에 의해 자동으로 생성되며 이벤트 핸들러에 전달되는 객체
// : 이벤트와 관련된 다양한 속성과 메소드를 포함

//? 이벤트 객체의 일반적인 속성

// type: 이벤트의 유형을 지정(예: 'click', 'mouseover').
// target: 이벤트가 발생한 요소를 참조
//         , 이벤트 발생 시 변경을 적용할 요소를 결정하는 데 유용
// currentTarget: target과 유사하지만, 이벤트 리스너가 실제로 첨부된 요소를 참조
// preventDefault(): 브라우저가 해당 이벤트에 대해 기본적으로 수행하는 동작을 방지하는 메서드
// stopPropagation(): 이벤트가 이벤트 체인을 따라 버블링되는 것을 중단시키는 메서드

// 예) 마우스 이벤트 - 마우스의 위치, 버튼 상태 등에 대한 정보를 포함
// 예) 키보드 이벤트 - 눌린 키에 대한 정보를 포함

//? : event, evt, e등과 같은 이름을 명명된 매개변수로 전달

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

// 이벤트 객체인 e를 함수에 포함하고
// , 이벤트 객체의 target프로퍼티를 사용하여
// , 이벤트가 일어나는 버튼 그 자체에 실행
function bgChange(e) {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  // target 프로퍼티
  // : 항상 이벤트가 발생된 요소에 대한 참조
  // document.body.style
  // - 웹 문서의 전체 스타일 설정

  // e.target (해당 이벤트가 발생한 그 객체에서만 스타일을 지정)
  // : div를 클릭할 경우 해당 이벤트 리스너가 실행되는 주체는(e.target) div 요소 자체

  // JS에서의 스타일 지정 방식은
  // : CSS의 스타일 지정법을 lowerCamelCase로 지정
  // background-color: backgroundColor
  // border-radius: borderRadius
  e.target.style.backgroundColor = randomColor;
}

// 문서에서 id를 사용해 요소 선택
// : querySelector와의 차이점 - # 사용하지 X
const colorButton = document.getElementById('colorButton');

const divs = document.querySelectorAll('.colorDiv');

colorButton.addEventListener('click', bgChange);

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bgChange);
}

// 이벤트 객체 실습
// : 16개의 타일 세트
// : querySelectorAll()을 사용하여 16개의 타일의 참조를 tiles 상수에 할당
// - 반복문을 사용하여 16개의 타일에 이벤트 핸들러를 등록
// - 각각의 타일을 클릭했을 때 클릭된 타일의 배경색이 변경되도록 지정

function tileChange() {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return randomColor;
}

// - 선택자를 사용하여 전체 요소들을 배열로 가져오기
const tiles = document.querySelectorAll('.tile');

// - 반복문 사용: 각 tile 요소에 onclick 이벤트 핸들러 할당
// : 해당 이벤트는 이벤트 객체를 전달받기
// : 해당 객체에서 일어난 요소값을 찾아 색상 부여
for (let i = 0; i < tiles.length; i++) {
  tiles[i].onclick = function(e) {
    e.target.style.backgroundColor = tileChange();
  }
}

//! 2. 기본 행동 방지
// 텍스트 필드가 비워져있는지를 검사하는 onsubmit 이벤트 핸들러 구현
// : 비었다면 이벤트 객체에 있는 양식 제출을 멈추도록 지정
// : 양식 아래에 있는 단락에 에러 메시지를 표시

const form = document.querySelector('form');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const para = document.querySelector('p');

// querySelector(All): HTML의 요소를 참조
// getElementById('id값'): 해당 id값을 가진 요소를 참조

form.onsubmit = function(e) {
  // 이름과 이메일을 작성하는 form 요소
  // : 이름과 이메일을 반드시 작성하도록 설정

  // 참조된 요소의 값(내용)을 가져올 땐
  // : 참조값.value 속성을 사용
  if (fname.value === '' || email.value === '') {
    // >> input 창의 값은 string 타입이기 때문에
    //    , 비워질 경우 빈 문자열로 반환

    // 기본 행동을 방지하는 메서드
    // sumbit 버튼을 클릭할 때 자동 전송되는 기능 등
    // : 양식 제출, 링크 이동 등의 기본 해동을 방지하는 메서드
    e.preventDefault();

    // 조건식의 내용을 확인하여 조건이 일치하지 않을 경우에만 전송이 실행
    // : 이름과 이메일이 모두 입력된 경우
    para.textContent = '이름과 이메일 모두 입력해야만 합니다.';
  }
}

//! 3. 이벤트 버블링과 캡쳐
// : 같은 이벤트 타입의 두 이벤트 핸들러가 한 요소에서 작동될 때 어떠한 일이 일어나는지를 기술하는 방법

//? 이벤트 버블링(내부 > 외부 요소)
// : 특정 요소에서 이벤트가 발생했을 때
// : , 그 이벤트가 상위의 요소들로 전달되는 현상
// 예) HTML 페이지에서 버튼 요소가 클릭되면 버튼 요소부터 시작해서 그의 부모요소들을 거쳐서 최상위 요소까지 전달

//? 이벤트 캡처링(외부 > 내부 요소)
// : 이벤트 버블링과 반대방향으로 이벤트가 전달되는 현상
// : , 최상위 요소에서 시작되어 이벤트가 발생한 요소까지 이벤트를 전달

// 이벤트의 전파 특징
// : 두 가지 이상의 이벤트가 충돌되는 경우 부모 요소의 이벤트가 차지

// : event.stopPropagation() 메서드
//   - 이벤트 전파를 중지 
// : 해당 메서드를 호출할 경우, 현재 이벤트 이후의 전파가 중지

// 웹 문서 전체에 이벤트 리스너를 추가
// 'DOMContentLoaded'
// : 웹 문서(HTML)가 전체 로드될 때 실행
// : HTML 코드가 끝까지 나열될 때
document.addEventListener('DOMContentLoaded', function() {
  let parentDiv = document.getElementById('parentDiv');
  let childButton = document.getElementById('childButton');

  // 캡쳐링의 경우 일반적인 상황에서 실행 X
  // : 이벤트 리스너에 세 번째 인자로 true값을 전달할 때만 실행
  parentDiv.addEventListener('click', function() {
    console.log('부모 div의 이벤트가 실행됩니다.');
  }, true);

  childButton.addEventListener('click', function(e) {
    console.log('자식 button의 이벤트가 실행됩니다.');
    // 자식에서 부모로 진행(버블링)
    e.stopPropagation();
  }, true);

});// 버블링과 캡쳐링에서 이벤트의 버블링이 전파력이 더 강함
// : 하위 요소에서 이벤트를 전파 중지
// 해당 이벤트에 stopPropagation() 실행
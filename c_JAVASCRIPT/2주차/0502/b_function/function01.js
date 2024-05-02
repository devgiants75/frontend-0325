//! 콜백 함수의 기본

// 'JS 함수'는 자료형이기 때문에 변수 할당 가능 OR 함수를 함수의 매개변수로 전달 가능

//? 1. 콜백 함수(callback)
// : 다른 함수에 인자로 전달되어, 그 함수의 내부에서 실행되는 함수
// : 코드의 실행을 나중에, 즉 어떤 이벤트가 발생한 후나 다른 함수의 실행이 완료된 후에 진행 가능

//? 2. 콜백 함수의 중요성
// 비동기 처리: JavaScript는 웹 브라우저에서 사용되며, 사용자의 입력, 파일 로딩 등 비동기적 이벤트를 자주 다룸
// 콜백 함수 사용 시 비동기 작업의 완료 시점에 원하는 동작을 실행 가능

// - 이벤트 리스너: 사용자의 행동에 반응하기 위해 이벤트 리스너 내부에서 콜백 함수를 사용
// EX) 버튼 클릭, 키보드 입력 등에 대한 반응으로 함수를 실행

// - 모듈성과 재사용성 향상

//? 3. 콜백 함수의 응용 사례
// 서버 요청 처리: 서버로부터 데이터를 요청하고, 데이터가 도착했을 때만 특정 함수를 실행해야 할 때 사용
// 이벤트 처리: 웹 페이지에서 발생하는 다양한 이벤트(예: 클릭, 스크롤)를 처리하기 위해 이벤트 리스너에서 사용
// 타이머 함수: setTimeout이나 setInterval과 같은 타이머 함수는 지정된 시간이 지난 후 함수를 실행하는 데 사용

//& '선언적 함수' 사용으로 콜백 함수 구현
console.log('=== 콜백 함수: 선언적 함수 ===');

function callThreeTimes(callback) {
  for (let i = 0; i < 3; i++) {
    // i(0, 1, 2)를 콘솔창에 출력
    callback(i);
  }
}

function print(count) {
  console.log(`${count}번째 함수 호출`);
}

// 함수 호출
callThreeTimes(print); // 인자로 함수를 전달

//& 콜백함수로 '익명함수' 사용
console.log('=== 콜백 함수: 익명 함수 ===');
const anonymous = function (count) {
  console.log(`${count}번째 함수 호출`);
}

// 함수 호출
callThreeTimes(anonymous);

//& '조건에 따른' 콜백함수 사용
console.log('=== 콜백 함수: 화살표 함수 ===');
function conditionFunc(number, callback) {
  if (number % 2 === 0) {
    callback(number);
  }
}

const arrow = (even) => {
  console.log(`${even}은 짝수입니다.`);
}

conditionFunc(4, arrow);
// conditionFunc(5, arrow); - 출력 X
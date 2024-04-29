//! 자바스크립트 함수 구조

// 매개변수와 인자

//* 매개변수 (파라미터, parameter)
// : 함수를 정의하고 호출하는 과정에서 함수에 데이터 전달 방식(변수를 의미)
// : 함수 호출 시 괄호 안에 인자(arguments)를 넣어서 전달
// : , 해당 인수는 함수 내부로 전달되어 매개변수(parameters)라는 이름으로 사용

//* 인자 (아규먼트, argument)
// : 함수를 호출할 때 전달하는 실제 값
// : 함수 호출 시 소괄호 안에 넣어 함수에 전달

// + 매개변수와 인자를 2개 이상 지정 시
//   ,(콤마)로 구분하여 나열

function add(a, b) { // 함수 정의 시 소괄호 안에 정의된 키워드는 파라미터(parameter)
  // let a = 3;
  // let b = 4;
  console.log(a + b);
}

// 함수 호출
add(3, 4); // 3, 4는 인자(argument) - 7

//? 자바스크립트에서 파라미터와 아규먼트 사용
// 함수 호출 시 전달되는 아규먼트의 수 !== 함수 정의 시 선언된 파라미터의 수

// 파라미터 > 아규먼트: 넘기지 않은 파라미터의 값은 undefined로 지정
// 파라미터 < 아규먼트: 초과된 아규먼트의 값은 무시

function log(a) { // 한 개의 파라미터
  console.log(a);
}

log(); // 아규먼트 X(파라미터의 개수보다 적음) - undefined
log('안녕'); // 한 개의 아규먼트(파라미터의 개수와 동일) - '안녕'

log('hello', 'hi'); // 두 개의 아규먼트(파라미터의 개수보다 많음) 
// >> 지정된 수의 파라미터 이상의 아규먼트는 읽히지 X

//! 반환값(return)
// : 입력 받아 처리한 결과를 '반환'
// : return 키워드를 사용해서 지정 가능
// : 함수 내에서 return 키워드를 사용하는 경우
//   , 함수의 실행을 즉시 중단하고 return 뒤에 오는 값을 반환

function subtract(a, b) {
  let result = a - b;
  return result;
}

// subtract 함수의 반환값이 outcome 변수에 저장
let outcome = subtract(10, 7);
console.log(outcome); // 3

// return이 없는 함수는 undefined를 반환
// : 일반적으로 즉시 콘솔 출력 시 사용

function notValue() {
  console.log('반환값이 없는 함수');
}

let outcome2 = notValue(); // undefined의 값이 outcome2 변수에 할당
console.log(outcome2); // undefined

// 실습 문제
// : 함수 square를 작성하여 파라미터로 x값을 받음
// : 반환 값으로 x의 제곱을 반환
// : 반환 결과를 변수(squareResult)에 담아 해당 변수를 콘솔창에 출력
// - 함수 선언문 형식으로 작성

function square(x) {
  return x * x;
}

let squareResult = square(5);
console.log(squareResult); // 25
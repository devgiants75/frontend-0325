//! 기본 매개변수 & 나머지 매개변수

//? 1. 기본 매개변수(Default)
// : 함수에 인자를 전달하지 않았을 때 사용되는 기본값을 정의
// : 함수의 매개변수가 undefined인 경우에도 함수가 정상적으로 동작하도록 구현
// : 함수 호출 시 특정 매개변수를 생략 가능

// 구현 방법
// : 함수 선언 시 매개변수명 뒤에 '='연산자를 이용하여 기본값을 할당

function defaultParams(param1='defaultValue1', param2=2) {}

function greet(name='이승아') {
  console.log(`안녕하세요 ${name}님`);
}

greet(); // 안녕하세요 이승아님
// : 전달되는 인자가 없을 경우 - 파라미터에 초기화되지 않는 경우 기본 매개변수가 사용

greet('이도경'); // 안녕하세요 이도경님
// : 전달되는 인자가 있을 경우 - 해당 인자값이 사용

//? 2. 가변 매개변수
// : 함수가 받을 수 있는 매개변수의 수가 변할 수 있다는 것을 의미
// : 함수를 호출할 때 인자의 수가 정해져 있지 않고, 함수 내부에서 유동적으로 처리

//? 3. 나머지 매개변수(Rest)
// : JS - 나머지 매개변수를 사용하여 가변 매개변수를 구현
// : 함수에 전달된 인자들을 배열로 받을 수 있도록 작성하는 방법
// : 주로 함수에 가변적인 수의 인자를 전달할 때 유용
// : 매개변수명 앞에 ...을 붙여 정의

//^ 나머지 매개변수의 형태
// : 함수 선언 시 매개변수 목록의 마지막에 위치
function exampleFunction(param1, param2, ...args) { // arguments
  // let param1;
  // let param2;
  // let args = [];
  console.log(param1); // undefined 출력
  console.log(param2);
  console.log(args); // 빈 배열이 출력
}

exampleFunction();

// 예제
function print(num1, num2, ...numbers) {
  console.log(numbers);
}

print(1, 2, 3, 4, 5);
// 1, 2의 값은 num1과 num2에 차례대로 할당
// 나머지 값은 numbers 배열에 할당

print(11, 22, 33);

// Math.min() 함수
// : 여러 개의(복수의) 인자를 받아 그 중 최소값을 반환
function findMin(...numbers) {
  // numbers 배열을 Math.min에 전달
  // : 최소값을 반환
  return Math.min(...numbers);
}

let minResult = findMin(58, 35, 92, 10, 23, 77);
console.log(minResult); // 10

//? 4. 나머지 매개변수와 일반 매개변수의 조합
function combinedExample(firstParam, ...restOfParams) {
  // firstParam: 첫 번째 인자
  // restOfParam: 나머지 인자들을 배열 형태로 받음

  console.log(`첫 번째 매개변수는: ${firstParam}, 타입: ${typeof firstParam}`);

  // 배열의 형태 확인
  // : JS의 내장 함수 Array.isArray(배열명)으로 확인 가능 - boolean 타입으로 반환
  console.log(`나머지 매개변수의 형태는 배열입니까? ${Array.isArray(restOfParams)}`);
  console.log(restOfParams);
}

combinedExample(42, 'Hello', true, [1, 2, 3], null, undefined);
//! 문제 1
// 세 가지 방식으로 선언된 함수 add(함수 선언식), subtract(함수 표현식), multiply(화살표 함수)를 정의

// 각각 사용하여 주어진 입력 값 a = 10과 b = 5를 이용하여 계산을 수행하고 결과를 출력
// : 결과값을 반환하여 함수를 콘솔창에 출력

// - add(덧셈)
// - subtract(뺄셈)
// - multiply(곱셈)

// 출력 포맷
// "Add: 결과값, Subtract: 결과값, Multiply: 결과값"의 형태

console.log('Add: ', add(10, 5));
// console.log('Subtract: ', subtract(10, 5)); - Error
// console.log('Multiply: ', multiply(10, 5)); - 호이스팅 된 함수가 읽히지 않아 오류

function add(a, b) {
  return a + b;
}

const subtract = function(a, b) {
  return a - b;
}

const multiply = (a, b) => a * b;

console.log('Add: ', add(10, 5));
console.log('Subtract: ', subtract(10, 5));
console.log('Multiply: ', multiply(10, 5));

//! 문제 2
// 함수의 재사용성과 모듈성 확인 문제

//? 요구 사항
// 1. 회사의 직원들을 위해 월별 근무 시간과 시급을 기반으로 급여를 계산하는 프로그램을 작성
// : calculatePay(hours, rate)라는 이름의 함수를 작성
// : 근무 시간(hours)과 시급(rate)을 인자로 받고, 총 급여(시간*급여)를 계산하여 반환

// 2. 근무 시간이 160시간을 초과할 경우, 초과 근무 시간은 기본 시급의 1.5배로 계산
// : 함수를 작성한 후, 다음 직원들의 근무 정보를 사용하여 급여를 계산하고 출력

// >> 각 직원의 월별 근무 시간과 시급이 다를 수 있기 때문에 유연하게 동작될 수 있는 함수 작성

// 직원 A: 172시간, 시급 20달러
// 직원 B: 160시간, 시급 22달러
// 직원 C: 180시간, 시급 18달러

//? 예상 출력
// 직원 A 급여: $계산된 금액
// 직원 B 급여: $계산된 금액
// 직원 C 급여: $계산된 금액

function calculatePay(hours, rate) {
  if (hours > 160) {
    const regularPay = 160 * rate // 160시간(초과 근무되지 않은 시간에 대한 급여 계산)
    const overtimeHours = hours - 160;

    // 초과 근무된 시간에 대해 기본 시급의 1.5배 계산
    const overtimePay = overtimeHours * rate * 1.5; 
    return regularPay + overtimePay;
  } else {
    return hours * rate;
  }
}

// 결과값 출력
console.log('직원 A 급여: $' + calculatePay(172, 20));
console.log('직원 B 급여: $' + calculatePay(160, 22));
console.log('직원 C 급여: $' + calculatePay(180, 18));
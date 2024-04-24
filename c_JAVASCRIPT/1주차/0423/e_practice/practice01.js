//! 문제 1

// 여러 개의 데이터 타입 출력
// 사용자로부터 이름과 나이를 입력받아 각각의 데이터 타입을 콘솔에 출력

// : 출력 결과
// 이름의 타입: string
// 나이의 타입: number

let name = prompt('이름을 입력하세요.');

//? prompt 창에서 입력받는 내용은 항상 문자열(string)로 인식
let age = prompt('나이를 입력하세요.');
let numberAge = Number(age);

console.log('이름의 타입: ', typeof name);
console.log('나이의 타입: ', typeof numberAge);

//! 문제 2
// 사용자로부터 받은 두 숫자의 합을 계산하여 출력하는 프로그램을 작성 
// >> 두 숫자를 저장하는 변수는 변하지 않는 값이므로 상수로 선언
// >> 두 숫자의 합은 템플릿 문자열 내에서 계산

// : 출력결과
// 8, 2 입력 시
// 두 수의 합은 10입니다.

let num1 = Number(prompt('첫 번째 숫자를 입력하세요'));
let num2 = Number(prompt('두 번째 숫자를 입력하세요'));

console.log(`두 수의 합은 ${num1 + num2}`);

let num3 = '3';
let num4 = '4';
let result = `${Number(num3) + Number(num4)}` 
console.log(result); // 7
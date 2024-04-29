//! 자바스크립트의 추가 반복문

//? for...in 반복문
// : 객체의 열거 가능한 속성(프로퍼티)을 순회

//& 특징
// 객체의 속성을 순회할 때 주로 사용
// 상속된 속성도 포함하여 열거
// 배열에도 사용할 수 있지만, 배열의 순서가 보장되지 않으므로 주의

// for (변수 in 객체) {
//    반복할 코드
// }

const obj = { a: 1, b: 2, c: 3};

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

//? for...of 반복문
// : 배열이나 이터러블 객체(문자열)의 요소를 순회

//& 특징:

// 배열의 값을 순회할 때 주로 사용
// 배열의 값을 순서대로 가져옴(순서 보장)
// 객체에는 사용할 수 없음

// for (변수 of 배열|이터러블객체) {
//    반복할 코드
// }

const arr = [1, 2, 3, 4, 5];

for (let value of arr) {
  console.log(value);
}

//! 반복문의 Best Practice

//? 배열의 길이를 매 반복마다 계산 X
// >> 배열의 길이는 루프 바깥에서 한 번만 계산하는 것이 효율적

// 비효율적인 방법
let array = [1, 2, 3, 4, 5];

console.log('---배열의 길이 값---');

// 배열의 요소의 개수만큼 반복

let arrayLength = array.length;

for (let index = 0; index < arrayLength; index++) { // 배열의 마지막 요소까지 접근
  console.log(array[index]);
}

// 효율적인 방법
let length = array.length;
for (let index = 0; index < length; index++) {
  // ...
}
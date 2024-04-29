//! 반복문 연습 예제

let fruits = ['apple', 'banana', 'mango']; // 3개의 요소가 담긴 문자열 배열

//? 1. 배열의 모든 요소를 출력
// 배열의 길이만큼 반복: fruits.length
let length = fruits.length; // 3

// for문
console.log('---for문---');
for (let i = 0; i < length; i++) { // 요소의 개수만큼 반복
  // 배열 요소 가져오기
  // : 배열명[요소 인덱스 번호]
  console.log(fruits[i]);
}

// while문
console.log('---while문---');

let i = 0;

while (i < length) {
  console.log(fruits[i]);
  i++;
}

// do-while문
console.log('---do-while문---');

i = 0;
do {
  console.log(fruits[i]);
  i++;
} while (i < length);

//! 반복문 사용하기 실습
// 사용자로부터 입력 받기(do while문)

// userInput 변수에 propmt('Enter a number greater than 10')
// userInput 변수가 10을 초과하는 수가 아닌 경우 반복

//! prompt창
// prompt 함수는 항상 문자열을 반환

let userInput;
do {
  userInput = prompt('10보다 큰 수를 입력해주세요.');
} while (userInput <= 10);

//! 반복문 실습
//! 기타 배열의 고급 메서드 (고차함수)

//? reduce(): 배열의 각 요소에 대해 함수를 적용하여 단일 값을 생성

//& 기본 형태(구조)
// 배열명.reduce((accumulator, currentValue, currentIndex, array) => {
  // 함수 로직
// }, initialValue);

// - reduce 배열의 인자값: 콜백함수, 초기값

// 1. 콜백함수의 인자값
// accumulator: 이전 리듀서 호출의 반환값
// : 첫 번째 호출에서는 initialValue값이 지정
// : 각 호출에서 축적되는 값

// currentValue: 현재 처리 중인 배열의 요소

// - 선택값-
// currentIndex: 현재 처리 중인 배열 요소의 인덱스
// array: reduce가 호출된 배열 그 자체

// 2. 초기값
// initialValue: 초기값, 생략 시 배열의 첫 번째 요소값

// reduce 함수 예시
// : 배열의 모든 숫자를 더하는 합계 계산

let numbers = [1, 2, 3, 4];

// reduce 함수를 사용하여 모든 차량 브랜드 이름을 연결
// : 데이터(각 요소) 사이에는 ', '

let cars = ['audi', 'bmw', 'hyundai', 'volvo'];

//! 배열 요소의 정렬과 순서 변경

//? 1. sort(compareFunction): 배열 요소를 정렬

// - compareFunction
//   : 값이 생략될 경우, 배열의 요소들은 문자열로 취급, 유니코드 값 순서대로 정렬

let numberArray = [3, 1, 4, 1, 5, 9];

// numberArray.sort();
// console.log(numberArray);

// - 해당 함수가 리턴하는 값이
// 0보다 작을 경우: a가 b보다 앞에 오도록 정렬
// 0보다 클 경우: b가 a보다 앞에 오도록 정렬
// 0일 경우: 순서 변경 X

// 오름차순 정렬 (숫자가 작은 값이 먼저 작성)
numberArray.sort((a, b) => {
  // if (a > b) return 1;
  // if (a === b) return 0;
  // if (a < b) return -1;
  return a - b;
});

console.log(numberArray); // [ 1, 1, 3, 4, 5, 9 ]

//? 2. reverse()
// : 배열의 요소 순서를 반대로 뒤집음.

//! 배열의 요소를 검색 & 평가
let fruits = ['사과', '바나나', '체리', '사과'];

//? 1. indexOf, lastIndexOf
// : 특정 요소의 인덱스를 찾는 메서드
// : 중복된 값이 있을 경우 첫 번째 요소의 인덱스가 반환

//? 2. find, findIndex
// : 조건을 만족하는 요소나 해당 인덱스를 찾는 메서드
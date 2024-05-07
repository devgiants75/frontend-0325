//! callback01.js

// map 사용
// : 주어진 숫자 배열의 각 요소에 10을 더한 새로운 배열을 생성
const numbers = [1, 2, 3, 4, 5];

const addedTen = numbers.map(number => number + 10);
console.log(addedTen); // [ 11, 12, 13, 14, 15 ]

// filter 사용
// : 주어진 숫자 배열에서 홀수만 추출하여 새로운 배열을 생성
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = numbers2.filter(number => number % 2 !== 0);
console.log(odds); // [ 1, 3, 5, 7, 9 ]

// map과 filter 함께 사용
// : 주어진 숫자 배열에서 짝수만 찾아 각 숫자에 5를 곱한 새로운 배열을 생성
const numbers3 = [1, 2, 3, 4, 5, 6];

const evenTimesFive = numbers3
  .filter(number => number % 2 === 0)
  .map(number => number * 5);

console.log(evenTimesFive); // [ 10, 20, 30 ]
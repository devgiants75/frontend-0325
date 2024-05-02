//! 콜백 함수를 활용하는 자바스크립트 '내장 함수'

//? 배열이 가지는 콜백함수 활용 - 메서드의 형태

// 배열 - 콜백함수의 인자값
// function (value, index, array)
// : 순회되는 각 요소의 값, 순회되는 각 요소의 인덱스 번호, 배열 그자체

// >> 기본적으로 반복에 대한 기능을 포함
// >> 콜백함수의 인자값은 필수 사항 X (value만 사용하는 경우 많음)
//    : 사용하지 않을 경우 작성 X

//& 1. forEach()
// : 각 요소에 대해 함수를 실행
// : 단순하게 배열 내부의 요소를 사용해서 콜백함수를 호출

console.log('=== forEach() ===');

const numbers = [273, 52, 103, 32, 57];

// 배열명.forEach(각 요소들에게 적용할 함수 - 콜백 함수)

numbers.forEach(function (value, index) {
  console.log(`${index} 번째 요소: ${value}`);
});

// numbers.forEach(function(value, index, array) {
//   array[index] = value * value;
// });

console.log(numbers);

const array = [1, 2, 3];
array[0] = 4;
console.log(array); // 요소값만 변경 O - 참조값 변경 X

// array = [4, 5, 6]; - Error: const 상수에 재할당 불가
// console.log(array);

// const로 선언된 배열의 요소값이 변경
// : const가 가지는 불변성은 해당 값이 가지는 참조값!!!!!

//& 2. map()
// : 배열의 각 요소에 대해 함수를 적용하고 '새로운 배열을 생성하여 반환'
// : 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 생성
// : 요소의 개수 변화 X

console.log('=== map() ===');

const newNumbers = numbers.map(function(value) {
  // 해당 배열의 인덱스와 배열 자체를 사용하지 않을 경우 - 생략 가능
  return value * value;
});

console.log(newNumbers); // [ 74529, 2704, 10609, 1024, 3249 ]

//& 3. filter()
// : 콜백 함수에서 리턴하는 값이 true인 것들만 모아서 '새로운 배열을 만드는 함수'
// : 기존의 배열과 요소의 수가 일치 하지 않을 수도 있다.

console.log('=== filter() ===');

const basicArray = [0, 1, 2, 3, 4, 5];
const evenNumbers = basicArray.filter(function(value) {
  return value % 2 === 0;
})

console.log(`원래 배열 ${basicArray}`);
console.log(`짝수만 추출한 배열 ${evenNumbers}`); // 요소의 개수가 변화 O

// - 배열의 콜백 함수 사용 시 주로 화살표 함수를 사용
const arrowResult = basicArray.filter(value => value % 2 === 0); // [ 0, 2, 4 ]
console.log(arrowResult);

//& 배열을 활용한 콜백 함수 예제
let cars = ['audi', 'bmw', 'hyundai', 'volvo'];

// 1. 전체 배열의 요소를 출력 - forEach
cars.forEach((car) => {
  console.log(car); // 각 요소가 반복될 때 마다 실행할 함수
});

// 2. 전체 배열의 요소를 대문자(영문자)로 변환
// 문자열데이터.toUpperCase()
let carsUpperCase = cars.map(car => car.toUpperCase());
console.log(carsUpperCase); // [ 'AUDI', 'BMW', 'HYUNDAI', 'VOLVO' ] 

// 3. 전체 배열의 요소 중 문자열의 길이가 4보다 큰 요소만 반환
// 문자열데이터.length
let longNameCars = cars.filter(something => something.length > 4);
console.log(longNameCars); // [ 'hyundai', 'volvo' ]

//& 배열의 메서드와 화살표 함수

// 메서드 체이닝
// : 메서드를 연속적으로 호출하는 프로그래밍 패턴
// : 어떤 메서드(기능)이 반환(리턴)하는 값을 기반으로 함수를 줄줄이 사용하는 것

let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbersArray의 값들 중
// - 짝수만 선택(filter)
// - 해당 값들을 제곱(map)
// - 차례로 콘솔에 출력(forEach)

numbersArray
  .filter(value => value % 2 === 0)
  .map(value => value * value)
  .forEach(value => console.log(value));
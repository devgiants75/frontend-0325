
//! 객체의 접근 방법

// 배열(리스트)은 각 요소에 대해 인덱스로 접근
let array = [0, 1, 2, 3];
array[0] = 5;
console.log(array); // [ 5, 1, 2, 3 ]

//? 객체는 각 요소값에 대해 키로 접근
// : 객체명.속성명
// : 객체명.메서드명 - 점 표기법

let dog =  {
  name: {
    last: 'choco',
    first: 'coco'
  },
  age: 3,
  color: 'white',
  favoriteToy: ['곰인형', '탱탱볼'],
  greet: function() {
    // 해당 객체가 가진 속성에 접근하는 경우 this를 사용
    console.log(`Hello, ${this.name.last}`);
  }
}

//? 1. 점 표기법을 사용한 프로퍼티 접근
console.log(dog.age); // 3
console.log(dog.name.last); // choco
console.log(dog.favoriteToy[1]); // 탱탱볼

//? 2. 대괄호 표기법
// 객체명['키'] (키값을 문자열로 전달)
console.log(dog['age']); // 3

//? 객체 내의 함수 호출
// 객체명.함수명()
dog.greet(); // Hello, choco

// ------------------------------ //

//? 프로퍼티(속성) 추가
// 객체명.프로퍼티명 = 값;
dog.speed = 10;
console.log(dog);

//? this 키워드
// : 지금 동작하고 있는 코드를 가지고 있는 객체를 가리킴

// greet: function() {
  // console.log(`Hello, ${this.name.last}`);

  //? this.name.last는
  // : this는 해당 코드를 가지고 있는 dog 객체 그 자체
  // == dog.name.last와 동일 
  //    (점 표기법을 사용한 속성에 접근)
  
// }

//& JS의 this 키워드

//! 1. 전역 컨텍스트
// : 전체 실행 상태
console.log(this); // {}: 해당 페이지의 전역 스코프(전역 상태)

// >> Node.js 에서는 global(전역)객체
// >> 브라우저 환경에서는 window

//! 2. 함수 컨텍스트

//? 일반 함수의 this
// : 전역 객체를 의미 - 전역 컨텍스트와 동일

// + 엄격 모드에서는 undefined로 출력

function showThis() {
  console.log(this);
}

showThis(); // 전역 상태 출력

//? 메서드로서의 함수 내의 this
// : 객체의 메서드로 함수를 호출할 경우, this는 해당 메서드를 호출한 객체에 바인딩

const myObject = {
  name: 'object',
  showThis: function() {
    console.log(this);
  }
}

myObject.showThis(); // { name: 'object', showThis: [Function: showThis] } - myObject 객체 그 자체를 가리킴

//? 생성자 함수에서의 this
// : 새 객체를 생성하기 위한 생성자 함수를 사용할 때 
//   , this는 새로 생성된 객체를 가리킴

function Person(name) {
  // this.name은 해당 Person 생성자 함수로 생성되는 객체의 속성
  // 우항의 name은 매개변수의 값
  this.name = name; 
}

const person1 = new Person('이승아');
const person2 = new Person('이도경');
console.log(person1.name); // 이승아
console.log(person2.name); // 이도경

//? 화살표 함수에서의 this
// : 화살표 함수가 생성될 때의 컨텍스트를 this로 가짐
// : 자신이 생성된 스코프의 this를 상속

const arrowMyObject = {
  name: 'object',
  // 화살표 함수가 정의되는 생성 스코프를 가지는 컨텍스트를 가져옴
  showThis: () => {
    console.log(this);
  }
}

arrowMyObject.showThis(); // {} - global 전역 객체 (브라우저 - window, Node.js - global)
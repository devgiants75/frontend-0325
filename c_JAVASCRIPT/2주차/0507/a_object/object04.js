//! 객체의 참조 타입 이해

// 자바스크립트의 데이터 타입은 크게 2가지로 나뉨

//? 1. '원시' 타입(Primitive Type)
// : 데이터가 변수에 직접 저장되는 형태
// - 문자열, 숫자, 불린, null, undefined, symbol

//? 2. '참조' 타입(reference Type)
// : 객체를 포함한 나머지 데이터 타입
// : 메모리에 저장된 객체의 주소를 변수가 저장
// : 메모리에 직접 저장된 값을 참조하는 데이터 타입

// - 객체, 배열, 함수 등을 포함

//! 참조 타입 
// : 참조 타입은 변수에 직접 값을 저장 X
// : 메모리에 저장된 값을 가져옴
// - 참조 타입의 변수를 다른 변수에 할당할 경우
// : 새로운 변수는 원래 변수가 참조하고 있던 메모리의 주소를 가짐
// : 두 변수가 같은 객체를 참조

// ---원시 타입---
let num1 = 3;
let num2 = num1; // num2 또한 원시 타입
console.log(num2); // 3

num2 = 5;
console.log(num1); // 3
num1 = 10;
console.log(num2); // 5

// >> 원시 타입은 값 자체가 변수에 저장
//   , 한 변수의 값을 다른 변수에 할당할 경우 값이 복사되어 독립적인 상태를 유지

// ---참조 타입---
let computer1 = {
  name: '삼성 노트북'
}

let computer2 = computer1; // computer2에는 computer1의 주소값이 저장
console.log(computer2); // { name: '삼성 노트북' }

computer1.name = '맥북';
console.log(computer2); // { name: '맥북' }

// 참조: 해당 자료의 주소값을 가짐.
// computer1과 computer2의 두 변수는 같은 객체를 참조하기 때문에 각각의 값을 변경할 경우 원본 객체도 변경

// - 참조에 의한 함수 호출
// : 함수에 참조 타입의 변수를 전달하는 경우
// : 위의 예시와 동일하게 원본 객체에 영향

function changeName(computer) {
  computer.name = '아이패드';
}

changeName(computer1); // computer1.name = '아이패드';와 동일
console.log(computer2.name); // 아이패드
/*
  ! 자료형(Data Type)
    : 기본 자료형(string, number, boolean, null & undefined)
    : 자료형 검사
    : 자료형 변환
*/

// ! 기본 자료형
// : 컴퓨터가 처리할 수 있는 자료의 형태

//? 자료형 검사 방법
// typeof 변수명: 자료형을 알 수 있는 함수

// ? 1. 숫자형 (number)
// : 정수 및 실수를 포함하는 자료형
// : 숫자형 데이터는 사칙연산과 같은 수학적 연산에 주로 사용
let num = 10; // 정수 자료형
let float = 10.5; // 실수(소수점) 자료형

// 줄 복사: alt + shift + 방향키(위아래)
console.log(typeof num);
console.log(typeof float);

// ? 2. 문자형 (string)
// : 텍스트 데이터를 나타내는 타입
// : 작은 따옴표('') | 큰 따옴표("") | 백틱 (``)으로 둘러싸서 표현

let str1 = 'hello';
let str2 = "world";
let str3 = `hello, world`;

// & '템플릿 문자열'*****
// : ES6(ECMAScript 2015)에서 도입된 기능
// : 백틱을 사용하여 정의, 문자열 내에서 변수나 표현식을 `${}` 안에 넣어 사용할 수 있도록 하는 문자열

// >> 변수 삽입
let name = '이승아';
let greeting = `안녕하세요 ${name}님`;
console.log('안녕하세요 ' + name + '님');
console.log(greeting);

// >> 표현식 삽입
let num1 = 10;
let num2 = 20;
console.log(`num1 + num2 = ${num1 + num2}`);

// >> 여러 줄 문자열
// : 템플릿 문자열의 경우 여러 줄의 문자열 작성 가능
let multiLine1 = '안녕하세요'; 
// 일반 따옴표의 경우 여러 줄 문자 작성이 불가

let multiLine2 = `백틱을 사용한 템플릿 문자열은
여러 줄로 작성이 가능합니다.
세 번째 줄 작성중입니다.`;
console.log(multiLine2);

//? 논리형 (Boolean)
// : 참(true) | 거짓(false) 값만을 가지는 자료형
// : 조건문이나 반복문에서 조건의 참과 거짓을 판단하는 데 사용

let bool = 100 < 10; 
console.log(bool); // false
console.log(typeof bool); // boolean

bool = true;
console.log(bool); // true

//? null & undefined 자료형

// null
// : 변수에 값이 '없음'을 명시적으로 나타냄
// : 변수가 '비어 있음'을 의도적으로 표현하고자 할 때 사용
// (변수에 할당된) 데이터의 값이 유효하지 않은 상태

console.log(null);
console.log(typeof null); 
// object - 비워져있지만 해당 데이터는 객체라는 구조를 따름

// undefined
// : 변수가 선언되었으나, 아직 어떤 값도 할당되지 않았을 때의 기본값
let hello;
console.log(hello); // undefined
console.log(typeof hello); // undefined

//? 자료형 변환
// : 해당 함수들은 대문자로 시작(upper)

// 1. 문자열로 변환
// String()함수를 사용
let numberData = 123;
let numberToString = String(numberData);
console.log(numberToString);
console.log(typeof numberToString); // string

// 2. 숫자형으로 변환

// Number()함수 
// : 문자열이 숫자로 변환할 수 없는 경우 > NaN 값을 도출

let stringToNumber = Number('123');
console.log(typeof stringToNumber); // number

let notANumber = Number('이것은 숫자로 변환될 수 없습니다.');
console.log(notANumber); // NaN

let nanValue = NaN;
console.log(nanValue); // NaN

// & NaN의 특징
// - 어떤 값과도 동등하지 X
//   NaN === Nan (X)
// - 연산에서 전파
//  : 어떤 수학의 연산도 NaN과 만나면 결괏값이 NaN

// 3. 불리언으로 변환
// Boolean() 함수 사용

// & JS의 불리언 변환에서
// : false, 0, '', null, undefined, NaN을 제외한 값은 모두 true로 간주

let stringToBoolean = Boolean('Hello');
let numberToBoolean = Boolean(123);

let stringToBoolean2 = Boolean('');
let numberToBoolean2 = Boolean(0);

console.log(stringToBoolean); // true
console.log(numberToBoolean); // true

console.log(stringToBoolean2); // false
console.log(numberToBoolean2); // false
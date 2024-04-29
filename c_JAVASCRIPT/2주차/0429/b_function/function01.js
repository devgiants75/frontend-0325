//& 자바스크립트 함수

//! 1. 함수란?
// : 특정 작업을 수행하거나 값을 계산하는 데 사용되는 '코드의 묶음(집합)'
// : A->B->C 동작을 함수 'ABC'로 구현
// :  , 다른 위치(코드)에서 해당 절차 즉, ABC를 다시 사용 가능
// : 코드의 재사용성과 가독성 향상 그리고 디버깅을 용이하게 함.

//! 2. 함수의 사용 용도와 예제(특징)

//? 1. 코드 재사용
// : 한 번 정의하면 프로그램 내의 여러 위치에서 '호출'하여 사용 가능
// : 같은 코드를 여러 번 작성하는 대신 함수를 정의하고
// : , 필요할 때마다 호출하여 사용

// EX) 두 수의 합을 계산하는 자바스크립트 함수 
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(223, 300)); // 66900
let result = multiply(6, 12);
console.log(result); // 72

//? 2. 모듈화 및 추상화
// : 복잡한 작업을 수행하는 코드를 함수로 분리
// : 각 함수가 수행하는 작업에 집중

// : '모듈성'은 복잡한 작업을 작은 단위로 나누어 관리할 수 있다는 특성을 의미

// EX) 두 점의 거리를 계산하는 자바스크립트 함수
function calculateDistance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;

  return Math.sqrt(dx*dx + dy*dy);
}

console.log(calculateDistance(3, 1, 0, 0)); // 3.16
console.log(calculateDistance(3, 4, 0, 0)); // 5

//? 3. 이벤트 처리
// : 웹 페이지에서 발생하는 다양한 이벤트(버튼 클릭, 폼 제출 등)를 처리하는데에 사용

// EX) 문서를 로드 후 버튼을 선택하고 클릭 이벤트 리스너를 추가

//* node로 실행하기 위한 임시 주석
// let btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//   console.log('버튼이 클릭되었습니다.');
// });

//! 3. 함수 구현 방법 (함수 생성)
// function의 키워드를 사용 - function은 자바스크립트의 예약어

// 기본 구조 - 함수 선언문 형식

// function 함수명(매개변수) {
  // 함수가 수행할 코드
  // return 결과값;
// }

//? 1. 함수명
// : 함수를 식별하는 이름
// : 주로 동사를 사용

// cf. 변수명 - 주로 명사를 사용

//? 2. 매개변수(파라미터, parameter)
// : 함수에 입력으로 제공되는 값
// : 함수 내에서 해당 매개변수를 사용하여 특정 작업을 수행

//? 3. 결과값(리턴값, return)
// : 함수가 작업을 완료한 후 반환하는 값
// : return 키워드를 사용하여 결과값을 반환

//! 4. 함수 선언 방식

//& 함수 선언식(Function Declaration)
// : 함수를 선언하는 가장 전통적인 방식
// : function 키워드로 시작, 함수의 이름이 '필수적으로 명시'
// : 호이스팅이 적용
//   함수를 선언되기 전에도 호출할 수 있음

// - 호이스팅
// : 코드가 실행될 때 함수, 변수 등의 선언문이 해당 범위(파일)의 최상단으로 끌어 올려지는 현상

greet(); // 정상 실행 - 호이스팅 O

function greet() { // 함수 선언 - 함수 선언식 
  console.log('안녕하세요, 함수 선언식입니다.');
}

greet(); // 함수 호출

// - 인자값(아규먼트, argrument)
//   실제 계산을 위해 파라미터로 전달되는 값
//   매개변수와 인자, 리턴값은 생략 가능

//& 함수 표현식(Function Expression)
// : 함수를 변수에 할당하는 방식으로 함수를 정의
// : 함수에 이름을 붙일 수도 있고, 붙이지 않을 수도 있다.
// : 정의된 함수는 변수의 스코프 내에서만 사용 가능
// : 호이스팅이 적용되지 X
//   선언(정의) 이전에 호출 불가

// 기본 구조
// const 변수명 = function(매개변수) {
  // 함수 기능 작성
  // return 반환값;
// }

// - 익명 함수
// : 함수명을 지정하지 않는 함수
// : 주로 함수 표현식에서 사용

//& 화살표 함수(Arrow Function)
// : ES6에서 도입된 함수 정의 방식
// : 기존의 function 키워드를 화살표로 대체하여, 간결한 함수를 작성
// : 항상 익명함수로 사용
// : 'this'가 일반 함수와 다르게 바인딩 됨.
// : function 키워드 사용 X

// 기본 구조
// const 변수명 = (매개변수) => {
  // 함수 기능 작성
  // return 반환값
// }

// 함수 본문(기능 구현부)이 단일문으로 작성되는 경우 중괄호와 return 키워드 생략이 가능

//! 5. 함수 호출 방법
// 함수를 생성 - 함수를 선언한다.
// 함수를 사용 - 함수를 호출한다.

// : 함수를 정의한 후에는 함수명과 괄호를 사용하여 함수 호출 가능
// : 함수명(인자값);

//! 6. 함수 사용 시 지역변수와 전역변수 사용

//! 함수 선언 방식에 대한 베스트 프렉티스
// - 일반적 상황에서는 함수 선언문 방식을 사용
// - 조건부 함수 선언 시 함수 표현식 방식을 사용
// - 콜백 함수 사용 시 화살표 함수를 사용
// - 화살표 함수의 경우 this 바인딩이 다르게 동작
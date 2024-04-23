/*
  ! 변수(variable)
    : 변하는 수(값이 달라질 수 있는 데이터)
    : 예) 나이, 연도 등

    : 데이터를 저장하기 위한 '공간'
    : 프로그래밍에서 데이터를 사용하기 위해 생성하는 그릇

  ! 변수 '선언'
    : 변수를 사용하기 위해 변수를 다른 변수들과 구별하기 위해 이름을 붙여 주는 것
      , 값을 저장할 컴퓨터 메모리 공간에 이름을 붙이는 것

  ! 변수명 명명규칙
    ? 필수 사항
    - 첫 글자: 영문자, 언더스코어, 달러만 사용 가능
      (이후 숫자 사용 가능)
      >> 변수명 지정시 영문자, 숫자, 언더스코어(_), 달러($) 사용 가능

    - 띄어쓰기 허용 X
    - 기호는 _, $만 사용 가능
    - 영어 대소문자 구별
      now변수와 nOW변수는 다른 변수
    - 예약어 사용 X

    ? lowerCamelCase 사용(권장 사항)
      : 시작은 소문자로 시작
      : 이어지는 단어의 시작은 대문자로 시작
      (lower - 소문자, upper - 대문자)

    (O) now, _now, now25, now$25
    (X) 25now, now 25, *now

    ? 이름을 의미있게 작성(권장 사항)
    pw >> 'password'

    올해 연도: currentYear
    태어난 연도: birthYear

    나이 변수 age
    age = currentYear - birthYear;

  ! 자바스크립트의 변수 선언
    : 2가지 키워드 (var, let)

    ^ 선언과 초기화
    ? 선언
    변수종류 변수명; // 변수 선언 (그릇 생성)

    ? 초기화
    변수명 = 값; // 변수에 값을 '할당' (그릇에 데이터를 최초로 삽입)
    
    ? 선언과 동시에 초기화
    변수종류 변수명 = 값; // 선언과 동시에 할당(초기화)
    
    ? let
      : 블록 범위(스코프) 변수(Block Scope)
      : 재할당 가능
      : 호이스팅O (하지만, 선언 전에 접근 불가 - 초기화되지 않은 상태에서 접근하면 오류 발생)
      - 동일한 스코프 내에서 같은 이름으로 재선언 불가

    ? var
      : 함수 범위(스코프) 변수(Function Scope)
      : 재할당 가능
      : 호이스팅O (선언 부분이 상단으로 끌어올려짐)
      - 동일한 변수명으로 여러번 선언 가능
*/

// 변수 선언
let letVariable;
var varVariable;

// 값 할당(초기화)
letVariable = 10;
varVariable = 'Hello World';

// 선언과 동시에 할당(초기화)
let letVariable2 = 20;
var varVariable2 = '안녕 변수!';

// 재할당(let, var 모두 가능)
letVariable = 15;
varVariable = 'Hello JavaScript';

// 재선언(let은 불가, var는 가능)
// let letVariable2; - Error
var varVariable2;

//* Practice: 나이 계산 프로그램 만들기

// 올해 연도, 태어난 연도, 나이에 대한 변수 선언 (let)
// 올해 연도를 나타내는 변수에는 2024 값 할당(선언과 동시에 초기화)
let currentYear = 2024;
let birthYear;
let age;

// 태어난 연도의 경우 prompt창에서 값을 할당 받기
birthYear = prompt('태어난 연도를 입력해주세요.');

// 나이 변수에 올해 연도와 태어난 연도 변수를 사용하여 식을 완성
age = currentYear - birthYear;

// 해당 나이 결과를 웹 브라우저에서 출력
// '태어난 연도(숫자)'에 태어난 사람의 나이는 '나이(숫자)'세입니다.
document.write('올해는 ' + currentYear + '년입니다. <br/>');
document.write(birthYear + '년에 태어난 사람의 나이는 ' + age + '세입니다.');

/*
  ! 상수(Constant)
    : 변하지 않는 수, 한 번 할당된 값을 변경할 수 X (재할당 불가)
    : 선언과 동시에 할당이 반드시 이루어져야 함
      (초기화)
    : 과학적 공식에서 사용하는 숫자값(파이 등)
  
  ! 상수 명명규칙
    - 변수의 명명규칙과 동일하지만
      , UPPER_SNAKE_CASE를 사용

      : 모든 영문자를 대문자로 작성
      : 이어지는 단어는 _(언더스코어)로 구분

    const MY_CONSTANT = '안녕';
    const PI = 3.14159...    
*/

const PI = 3.14159;
const CONST_CONSTANT = '선언과 동시에 초기화!';

//! 변수의 유효 범위(스코프)

//? 1. 전역 스코프
var book = '자바스크립트 기초'; // 변수(전역)

function readBook() {
  console.log(book);
}

readBook(); // 함수 실행
console.log(book); // 변수 출력

//? 2. 함수 스코프

function privateLibrary() {
  // 함수만의 스코프가 생성
  var secretBook = '비밀책';
  console.log(secretBook); // 비밀책
}

privateLibrary(); // 함수 호출 - 비밀책
// console.log(secretBook); - Error
//  (전역 범위에는 secretBook 변수가 존재하지 않는다.)

//? 3. 블록 스코프
// : {} 중괄호로 둘러싸인 블록 내부에서만 접근 가능
if (true) {
  // 블록({})로 생성된 사용자 정의 스코프
  let localArticle = '지역 신문';
  const localGuide = '지역 가이드북';
  
  console.log(localArticle);
  console.log(localGuide);
}

// console.log(localArticle); - Error
// console.log(localGuide); - Error

//! 변수의 호이스팅
//? var의 호이스팅
// var a; - 변수가 선언만 되고 값이 할당되지 X
console.log(a); // undefined

var a = 5; // 변수의 선언과 동시에 초기화

//? let과 const의 호이스팅

// console.log(b); - Error
// : 초기화 전에 b에 접근할 수 X (호이스팅은 되었지만 TDZ가 변수의 선언부에 접근할 수 없도록 방지)
let b = 10;

// console.log(c); - Error
const c = 15;

//! var 키워드의 경우
// 변수를 중복해서 선언할 수 있다는 위험성
// , 변수가 속하는 범위가 애매하다는 점에서 코드에 혼란을 줄 수 있기 때문에 사용 X
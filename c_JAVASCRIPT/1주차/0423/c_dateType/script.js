/*
  ! 자료형(Data Type)
    : 기본 자료형(string, number, boolean, null & undefined)
    : 자료형 검사
    : 자료형 변환
*/

// ! 기본 자료형
// : 컴퓨터가 처리할 수 있는 자료의 형태

// typeof 변수명: 자료형을 알 수 있는 함수

// ? 1. 숫자형 (number)
// : 정수 및 실수를 포함하는 자료형
// : 숫자형 데이터는 사칙연산과 같은 수학적 연산에 주로 사용

// ? 2. 문자형 (string)
// : 텍스트 데이터를 나타내는 타입
// : 작은 따옴표('') | 큰 따옴표("") | 백틱 (``)으로 둘러싸서 표현

// & 템플릿 문자열
// : ES6(ECMAScript 2015)에서 도입된 기능
// : 백틱을 사용하여 정의, 문자열 내에서 변수나 표현식을 `${}` 안에 넣어 사용할 수 있도록 하는 문자열

// >> 변수 삽입

// >> 표현식 삽입

// >> 여러 줄 문자열
// : 템플릿 문자열의 경우 여러 줄의 문자열 작성 가능

//? 논리형 (Boolean)
// : 참(true) | 거짓(false) 값만을 가지는 자료형
// : 조건문이나 반복문에서 조건의 참과 거짓을 판단하는 데 사용

//? null & undefined 자료형

// null
// : 변수에 값이 없음을 명시적으로 나타냄
// : 변수가 '비어 있음'을 의도적으로 표현하고자 할 때 사용
// (변수에 할당된) 데이터의 값이 유효하지 않은 상태

// undefined
// : 변수가 선언되었으나, 아직 어떤 값도 할당되지 않았을 때의 기본값

//? 자료형 변환

// 1. 문자열로 변환
// String()함수 | toString()메소드를 사용

// 2. 숫자형으로 변환

// Number()함수 
// : 문자열이 숫자로 변환할 수 없는 경우 > NaN 값을 도출

// & NaN의 특징
// - 어떤 값과도 동등하지 X
//   NaN === Nan (X)
// - 연산에서 전파
//  : 어떤 수학의 연산도 NaN과 만나면 결괏값이 NaN

// 3. 불리언으로 변환
// Boolean() 함수 사용

// & JS의 불리언 변환에서
// : false, 0, '', null, undefined, NaN을 제외한 값은 모두 true로 간주

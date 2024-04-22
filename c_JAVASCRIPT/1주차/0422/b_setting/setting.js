//! 자바스크립트 개발 환경 설정

// 1. 코드 작성 및 확인
// VSCode 설치, 구글 크롬 
// - 개발자도구 (Console창 - 콘솔창) / f12, ctrl + shift + i

// 콘솔 창 출력
// 간단한 코드와 결괏값을 알고 싶은 경우 콘솔창 사용
// >> 에러 확인
console.log('안녕하세요. 첫 콘솔창 활용입니다.');
// consol.log('안녕하세요. 첫 콘솔창 활용입니다.'); - Error

//? 플러그인 설치
// 1. 코드 스니펫
// : JavaScript (ES6) code snippets
console.log(''); // clg

// import moduleName from 'module'; // imp

// function - fnc

// for (const item of object) {
  
// } // fof

// for (const item in object) {
  
// } // fin

// 2. ESLint
console.log('eslint');

// 3. Prettier

//! 자바스크립트 표준 스타일

// 자바스크립트 코딩 규칙 
// = 스타일 가이드(코딩 컨벤션, 코딩 스타일, 표준 스타일)

// 구글, 에어비엔비에서 배포한 것을 기준으로 작성

//? 1. 코드 들여쓰기 
// : 탭(tab)의 경우 시스템 환경 마다 다르게 출력
// : 주로 space로 공백 2칸, 4칸 들여쓰기 권장 
//   (최근 공백 2칸 주로 사용)

// 설정(ctrl + ,) > 설정 검색 > Tab Size 설정: 2
for (let i; i < 5; i++) {
  // 중괄호를 기준으로 안에 작성되는 코드는
  // 들여쓰기 하는 것이 기본
  let j = 0;
}

//? 2. 세미콜론(;)으로 문장 구분
// : 세미콜론 없이도 실행 가능하지만 반드시 작성 권장
// : 문장과 문장의 구분(명확하게 표시)
// : 소스 코드는 한 줄에 한 문장만 사용 권장
console.log('세미콜론 없는 콘솔1'); console.log('세미콜론 없는 콘솔2');

//? 3. 공백을 사용 (가독성)
// : 예약어, 연산자, 값 사이에는 공백을 넣어 
// : 소스 코드의 가독성 향상을 권장

// - 콜론 사용 시
//   앞의 내용: 뒤의 내용

// - for문 작성 시
// for(let i; i<5; i++) { - 소괄호와 중괄호 사이 공백 권장

// }
let num = 1;
let sum = num + 10;
console.log(sum);

// let num=1;
// let sum=num+10;

//? 4. 주석 작성
//// 해당 주석은 사용하지 않는 주석
/* 
  여러 줄 주석 안에 또 다른 주석 X
  // 사용하지 않는 주석처럼 인식
*/
//! 조건문을 사용하는 프로그래밍 로직

//? 1. 사용자 입력값 검사 (유효성 검사)
// 사용자로부터 입력받은 값이 유효한지 검사하기 위해 조건문 사용

// isNaN() 함수
// : 어떤 값이 NaN인지 판별
// : 숫자가 아닌 경우: true, 숫자인 경우: false

let userInput = prompt('숫자를 입력해주세요.');

if (isNaN(userInput)) {
  console.log('유효한 숫자가 아닙니다.');
} else {
  console.log(`당신이 입력한 값은 ${userInput}입니다.`);
}

userInput = '  아이디';

// trim() 함수
// : 문자열 양 끝의 공백을 제거한 값을 반환

if (userInput.trim() === '') {
  console.log('아이디를 입력해주세요.');
} else {
  console.log('로그인을 성공하였습니다.');
}

//? 2. 접근 제어
// 로그인 상태나 사용자 권한에 따라 다른 페이지를 보여줄 때 조건문 사용

let isLoggedIn = true; // 사용자의 로그인 상태 저장
let isAdmin = false; // 관리자 여부를 확인하는 상태 저장

if (isLoggedIn) {
  if (isAdmin) {
    console.log('관리자님 환영합니다.');
  } else {
    console.log('회원님 환영합니다.');
  }

} else {
  // 로그인 하지 않을 경우 화면 출력 X
  console.log('로그인 해주세요.'); 
}

//? 코드 실행 흐름 제어
// 조건에 따라서 특정 코드를 실행할지에 대한 여부를 제어 가능

// confirm 함수 (확인하다: 출력문)

let shouldExecute = confirm('해당 코드를 실행하시겠습니까?');
// : 출력문과 함께 확인 또는 취소의 버튼이 출력
// : 확인(true), 취소(false) 반환

if (shouldExecute) {
  console.log('해당 코드가 실행됩니다.');
} else {
  console.log('해당 코드는 실행되지 않습니다.');
}
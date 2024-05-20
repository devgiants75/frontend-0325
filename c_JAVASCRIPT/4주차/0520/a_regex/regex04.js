//! 1. 비밀번호 복잡성 검증
// 비밀번호 정책을 강화하기 위해, 대문자, 소문자, 숫자, 특수 문자가 각각 최소 하나씩 포함되어야 하며, 전체 길이가 8자 이상

// >>  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/

//? 설명
// ^(?=.*[a-z])
// : .* 어떠한 문자든지 없거나 여러개 작성 가능
// >> 반드시 최소 한 개의 소문자를 포함 작성

// (?=.*[A-Z])
// 위와 동일하지만 최소 한 개의 대문자를 포함하여 작성

// (?=.*\d)
// 위와 동일하지만 최소 한 개의 숫자를 포함하여 작성

// (?=.*[^\da-zA-Z])
// : 숫자, 영문자(대, 소문자)를 제외한 문자 중(특수 기호) 한 개를 반드시 포함
// >> 최 소 한 개 이상의 특수기호를 포함하여 작성

// .{8,}$
// : 총 길이가 최소 8자 이상

function validatePassword(password) {
  // regex: Regular Expression(정규 표현식)
  // >> 레그 엑스프
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
  return regex.test(password);
}

console.log(validatePassword('Password123!')); // true
console.log(validatePassword('password123!')); // false
console.log(validatePassword('Password!')); // false
console.log(validatePassword('Password123'));// false

//! 2. 비밀번호 복잡성 검증
// 비밀번호 6-10자 이내 대문자, 소문자, 숫자가 각각 최소 하나씩 포함

// >> /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,10}$/

//? 설명
// (?=.*[a-z]): 문자열 내에 최소 한 개의 소문자가 포함
// (?=.*[A-Z]): 문자열 내에 최소 한 개의 대문자가 포함
// (?=.*\d): 문자열 내에 최소 한 개의 숫자가 포함
// .{6,10}: 전체 길이가 최소 6자리에서 최대 10자리

function validatePassword2(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,10}$/;
  console.log(regex.test(password));
}

validatePassword2('Pass12'); // true
validatePassword2('P1assWd2'); // true

validatePassword2('Pass1'); // false - 길이 부족
validatePassword2('Pass1231234'); // false - 길이 초과
validatePassword2('pass1231234'); // false - 길이 초과 & 대문자 사용 X
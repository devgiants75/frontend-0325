//& 실습 - 간단한 패턴 만들기

// - 이메일 주소 검증
// - 전화번호 포맷 매칭
// - URL 인식

//! 1. 이메일 주소 검증
// 이메일 주소가 유효한지 확인

// 정규표현식
// : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

//? 설명
// ^[a-zA-Z0-9._-]+
// : ^ 뒤의 문자로 시작
// : [소문자, 대문자, 숫자, 마침표, 언더스코어, 하이픈] 중 하나
// : + 1개 이상 작성

// @
// : 앞의 문자들 뒤에 @ 기호 첨부

// [a-zA-Z0-9.-]+
// : 설명 생략

// \.[a-zA-Z]{2,6}
// : 도메인의 TLD(최상위 도메인)는 마침표.으로 시작
// : 알파벳(대문사, 소문자 모두 가능) 2~6개로 첨부

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

console.log(validateEmail("devgiants@naver.com")); // true
console.log(validateEmail("devgiantsnaver.com")); // false

//! 2. 전화번호 포맷 매칭
//  국제번호 +82 (051)-123-4567
// 다양한 전화번호 포맷을 매칭하기 위한 정규표현식

// 정규표현식
// : /^(\+\d{1,3}\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/

// ^(\+\d{1,3}\s?)?
// : + 플러스 기호로 시작
// : 숫자가 1개 3개 사이로 작성
// : /s? space(공백)가 없거나 최대 한번만
// >> 전체 국제번호 표기가 없거나 최대 한번만 작성

// (\(\d{3}\)|\d{3})
// : \( - 열리는 소괄호 리터럴 문자
// : \d{3} - 숫자 3자리 작성
// : \) - 닫히는 소괄호 리터럴 문자
// : | OR(또는)
// \d{3} - 숫자 3자리 작성

// [\s.-]?
// : 공백, 마침표, 하이픈 중 하나를 택 [abc]

// \d{3}[\s.-]?
// : 설명 생략

// \d{4}$
// : 정규표현식의 끝은 숫자 4자리
// >> decimal 10진수(숫자)

function validateNumber(number) {
  const regex = /^(\+\d{1,3}\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
  console.log(regex.test(number));
}

validateNumber("+82 123-456-7890"); // true
validateNumber("123-456-7890"); // true
validateNumber("(123)456-7890"); // true
validateNumber("1234567890"); // true

//! URL 인식
// URL을 인식하기 위한 정규표현식은 다음과 같습니다.

// 정규표현식
// : /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/

//? 설명
// ^(https?:\/\/)?
// : 'https://' 또는 'http://'로 시작하는 것이 선택적

// ([\da-z.-]+)
// : '숫자, 알파벳(소문자), 점, 하이픈 구성'이 최소 한개 또는 여러개

// \.([a-z.]{2,6})
// : 리터럴 문자 마침표(.) 뒤에 알파벳(소문자)와 점 중에 2 ~ 6개 사이의 작성

// ([\/\w .-]*)*
// : 리터럴 문자 슬래시(/) 또는 (알파벳, 숫자, 언더스코어) 또는 공백 또는 마침표 또는 하이픈(-)
// >> 없거나 있을 경우는 여러개 : 0회 이상 반복 가능

// \/?$
// : URL의 종료는 /로 종료를 허용
// : 리터럴 슬래시가 없거나 최대 하나만 작성

function validateURL(url) {
  const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
  console.log(regex.test(url));
}

validateURL('https://example.com');
validateURL('http://example.com');
validateURL('example.com');
validateURL('http://example.com/path/to/');
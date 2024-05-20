// JavaScript에서의 정규표현식은 RegExp 객체를 통해 다양한 방식으로 활용 가능
// : RegExp 생성자와 주요 메서드들(test(), exec(), match(), search(), replace(), split())의 사용 
// >> 이를 통해 문자열 검색, 검증, 수정 및 분할 작업을 효과적으로 수행 가능

//! 1. RegExp 생성자
// RegExp 객체는 두 가지 방법으로 생성 가능
// : 리터럴 방식과 생성자 함수를 이용하는 방식

// 1) 리터럴 방식
// const regex = /pattern/flags;

// 2) 생성자 함수
// const regex = new RegExp("pattern", "flags");

//? pattern: 정규표현식의 패턴 부분
//? flags: 검색 옵션
// g : 전역 검색
// i : 대소문자 구분 없이 검색
// m : 여러 줄 검색
// u : 유니코드; 패턴을 유니코드 코드 포인트의 시퀀스로 취급
// s : dotAll 모드; . 특수 문자가 줄바꿈 문자도 매치

//! 2. RegExp 메서드
// 1) test()
// 문자열이 정규표현식과 매치되는지 여부를 확인
// 반환값: true 또는 false

const regex = /hello/i;
console.log(regex.test('Hello World')); // true

// 2) exec()
// 정규표현식과 매치되는 정보를 찾아 배열로 반환
// 반환값: 매치된 정보의 배열 또는 null

const regex2 = /a(b)c/;
const result2 = regex2.exec('abc');
console.log(result2);
console.log(result2.index);
console.log(result2.input);

//! 3. String 메서드
// 1) match()
// 문자열에서 정규표현식과 매치되는 부분을 찾기
// 반환값: 매치된 결과의 배열 또는 null
const text3 = 'Hello World';
const matches3 = text3.match(/hello/i);
console.log(matches3[0]); // Hello

//! search()
// 문자열에서 정규표현식과 매치되는 부분의 인덱스를 반환
// 반환값: 인덱스(찾지 못하면 -1)
console.log(text3.search(/world/i)); // 6

//! replace()
// 정규표현식과 매치되는 부분을 다른 문자열로 대체
// 반환값: 새로운 문자열

console.log(text3.replace(/world/i, 'JavaScript')); // Hello JavaScript

//! split()
// 정규표현식을 구분자로 사용하여 문자열을 배열로 분할
// 반환값: 분할된 문자열의 배열

const text4 = 'apple,    banana,    cherry';
const result4 = text4.split(/,\s*/);
console.log(result4);
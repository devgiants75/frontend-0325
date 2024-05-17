/*
! 쿠키(Cookie)

& 1. 쿠키 접근 및 읽기
: document.cookie 속성을 사용
: 이 속성은 쿠키를 세미콜론(;)으로 구분된 이름=값 쌍의 문자열로 반환
: 특정 쿠키의 값을 읽기 위해서는 해당 문자열을 파싱

& 2. 쿠키 값을 가져오는 방법
- 1) document.cookie에서 반환된 문자열을 분석
- 2) 특정 쿠키의 이름을 찾아 그 값을 추출

? 쿠키 문자열 분리
: document.cookie로부터 반환된 문자열을 세미콜론을 기준으로 분리하여 개별 쿠키를 배열로 변환

? 쿠키 파싱
: 각 쿠키 문자열을 = 기호를 사용하여 이름과 값으로 분리

? 값 추출
: 특정 이름을 가진 쿠키의 값을 찾기
*/

// : 사용자의 'username' 쿠키 값을 검색하고 콘솔에 출력
document.cookie = "age=100; path=/;";

function getCookieValue(cookieName) {
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    let parts = cookie.split("=");
    let name = parts[0].trim();
    if (name === cookieName) {
      return parts[1] || "";
    }
  }

  return "";
}

let username = getCookieValue("username");
let age = getCookieValue("age");
// : 쿠키를 가져올 때 내용 값이 없는 경우 null을 반환

if (username && age) {
  console.log(username, age);
} else {
  console.log("해당 쿠키를 찾을 수 없습니다.");
}

//! JS 쿠키 수정 및 삭제: 쿠키 값 변경 및 만료시켜 삭제하기

//& 1. 쿠키 값 변경
// 쿠키의 값을 변경하는 것은 실질적으로 새로운 값을 가진 쿠키를 같은 이름으로 다시 설정 것
// document.cookie를 사용하여 쿠키를 설정할 때
// , 동일한 쿠키 이름에 다른 값을 지정하면 기존의 쿠키 값이 변경
function updateCookie(name, value, daysToExpire = 1) {
  let date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);

  let expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + "path=/;" + expires + ";";
}

updateCookie("age", "500");
updateCookie("username", "이도경", 7);

// : 쿠키의 이름, 새로운 값을, 그리고 만료일을 인자로 받아 쿠키를
// >> 새로운 만료 기간과 함께 쿠키를 설정하면 기존의 값을 덮어쓰고, 새로운 값과 만료일을 적용 가능

//! 쿠키 만료시켜 삭제하기
// 쿠키를 삭제하는 공식적인 방법 X
// , 만료 날짜를 과거로 설정하여 브라우저가 쿠키를 더 이상 유효하지 않은 것으로 처리 가능

function deleteCookie(name) {
  document.cookie = name + "=; expires=Fri, 17 May 2024 00:00:00 GMT; path=/;";
}

deleteCookie("age");

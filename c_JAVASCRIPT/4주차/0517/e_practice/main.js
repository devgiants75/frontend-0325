//! 쿠키 활용 문제

// 문서의 내용이 모두 로드되면 함수를 실행
document.addEventListener('DOMContentLoaded', () => {
  // 방문 횟수를 표시할 HTML 요소를 선택
  const visitCountElement = document.getElementById('visitCount');

  //& 방문 횟수를 업데이트하는 함수 정의
  function updateVisitCount() {
    // 'visits'라는 이름의 쿠키 값을 가져옴
    let visits = getCookie('visits');
    // 쿠키 값이 있으면 값을 1 증가시키고, 없으면 1로 설정
    visits = visits ? parseInt(visits) + 1 : 1;

    // 쿠키 'visits'를 업데이트하고, 유효기간을 1년으로 설정 - 사용자 정의 함수 호출
    setCookie('visits', visits, 365);
    // HTML 요소에 방문 횟수를 표시
    visitCountElement.textContent = visits;
  }

  //& 쿠키 설정 함수 정의
  function setCookie(name, value, days) {
    let expires = ''; // 쿠키의 만료 문자열을 초기화

    // 만료일이 주어진 경우
    if (days) {
      const date = new Date(); // 현재 날짜와 시간을 가져옴

      // 현재 시간에 만료일까지의 밀리초를 더함
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

      // UTC 시간 문자열로 만료 날짜를 설정
      expires = 'expires=' + date.toUTCString();
    }

    document.cookie = name + '=' + value + ';' + expires + ';path=/'; // 쿠키 설정
  }

  //& 쿠키 가져오는 함수 정의
  function getCookie(name) {
    let nameEQ = name + '='; // 쿠키 이름을 찾기 위한 문자열을 생성

    // 저장된 모든 쿠키를 세미콜론으로 분할
    let ca = document.cookie.split(';');

    // 분할된 쿠키 배열을 순회
    for (let i = 0; i < ca.length; i++) {
      // 각 요소의 공백을 제거
      let c = ca[i].trim();

      // indexOf()
      // : 문자열(string)에서 특정 문자열(searchvalue)을 찾고
      //   , 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴

      // substring()
      // : string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환

      // substring(1, 3)
      // : 1 번째 인덱스 부터 2 번째(3 번째 전까지)의 문자열을 반환
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }

    return null; // 일치하는 쿠키가 없을 경우 null을 반환
  } 

  // 방문 횟수를 업데이트하는 함수를 호출
  updateVisitCount();
});
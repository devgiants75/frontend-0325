//! 쿠키 활용 문제
document.addEventListener('DOMContentLoaded', () => {
  const visitCountElement = document.getElementById('visitCount');

  //& 방문 횟수를 업데이트하는 함수 정의
  function updateVisitCount() {
    let visits = getCookie('visits');
    visits = visits ? parseInt(visits) + 1 : 1;

    setCookie('visits', visits, 365);
    visitCountElement.textContent = visits;
  }

  //& 쿠키 설정 함수 정의
  function setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = 'expires=' + date.toUTCString();
    }

    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  //& 쿠키 가져오는 함수 정의
  function getCookie(name) {
    let nameEQ = name + '=';

    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
  }

  updateVisitCount();
});
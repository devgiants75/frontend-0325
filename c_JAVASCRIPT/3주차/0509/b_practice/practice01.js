// JS 기능은 HTML 요소가 존재해야만 실행 가능
// : 웹 문서가 모두 로드된 이후 실행할 JS 이벤트를 등록
document.addEventListener('DOMContentLoaded', function() {
  // HTML 요소 가져오기
  const inputField = document.getElementById('search-input');
  const list = document.getElementById('item-list');
  const items = document.querySelectorAll('li');
  const noResult = document.getElementById('no-result');

  // 검색어 입력 시 이벤트 핸들러 정의
  inputField.addEventListener('input', function() {
    let value = inputField.value.toLowerCase();
    // 보여지는 아이템의 수를 세기 위한 변수
    let visibleItemsCount = 0;

    items.forEach(item => {
      // item.textContent
      // : HTML 요소 객체의 내용값

      // 내용.includes(값)
      // : 내용 안에 값이 포함되는 경우 true값을 반환
      // >> 내용으로는 배열, 문자열 사용 가능
      if (item.textContent.toLowerCase().includes(value)) {
        // JS에서 display 속성에 '' 빈문자열 전달 시
        // : CSS로 정의된 display값으로 복원
        item.style.display = ''; // 일치하는 경우 보이도록 설정
        visibleItemsCount++;
      } else {
        item.style.display = 'none'; // 일치하지 않는 경우 숨김
      }
    });
    noResult.style.display = visibleItemsCount > 0 ? 'none' : 'block';
  })
})
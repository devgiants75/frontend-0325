//! DOM의 정의
// 문서 객체
// : HTML 안에서는 요소(Element)로 불리는 객체를
// : JS에서는 문서 객체라고 불림

// 문서 객체 모델(Document Object Model: DOM)
// : 웹 페이지를 프로그래밍 방식으로 조작하고 관리할 수 있는 인터페이스(상호작용, 규약)

//! 2. DOM의 사용
// : JS를 사용하여 DOM에 접근하는 경우 
// : 웹 페이지의 요소를 선택, 추가, 수정, 삭제하는 데 사용할 수 있는 메소드와 속성에 접근이 가능

// - CRUD
// : Create(생성), Read(읽기), Update(수정), Delete(삭제)

//! 3. DOMContentLoaded 이벤트
// : 문서 객체를 조작할 때 사용하는 이벤트
// : HTML의 모든 문서 구조(내용)가 모두 로드된 이후에 해당 이벤트가 발생

// : 웹 브라우저가 문서 객체를 모두 읽고 나서 실행하는 이벤트
// : 문서 객체가 정립된 이후에 스크립트(콜백함수)가 실행되기 때문에 오류 방지 가능

document.addEventListener('DOMContentLoaded', () => {
  // 해당 위치에 DOM 조작 코드를 작성
})

//! 4. 문서 객체 가져오기
//? document.body
// : 문서의 body 요소를 읽어들이는 코드
// : body 외에도 head요소, title 요소 등도 읽어오기 가능

// 문서 '객체' 가져오기
// >> 문서의 큰 틀 요소 가져오기(HTML 문서에 있는 요소를 직접 가져오기)

// document.head
// document.body
// document.title

//? querySelector() & querySelectorAll() 메소드
// : head요소와 body요소 내부에 생성한 다른 요소들을 읽어올 때 사용하는 메소드

// : 선택자 부분에는 CSS 선택자를 입력
// : 태그, #아이디, .클래스, [속성=값], 선택자A 후손B

//& document.querySelector('선택자')
// : 요소를 하나만 추출(여러 개일 경우 제일 상단의 요소만 가져오기)

document.addEventListener('DOMContentLoaded', () => {
  // 요소를 읽어오기
  const header = document.querySelector('h1');

  // 텍스트와 스타일을 변경 (HTML의 속성값들을 활용)
  header.textContent = 'HEADER ONE';
  header.style.color = 'white';
  header.style.backgroundColor = 'black';
  header.style.padding = '10px';
});


//& document.querySelectorAll('선택자')
// : 문서 객체를 여러 개 추출
// : 문서 객체 여러 개를 배열로 읽어들이는 함수
// : 내부의 요소에 접근하고 활용하려면 반복을 사용
// : 일반적으로 배열 메소드
document.addEventListener('DOMContentLoaded', () => {
  // 요소 읽기
  const items = document.querySelectorAll('li');

  // 텍스트와 스타일을 변경
  items.forEach((item, index) => {
    item.textContent = `LIST ITEM ${index + 1}`;
    item.style.color = 'pink';
    item.style.backgroundColor = 'black';
    item.style.listStyle = 'none';
    item.style.padding = '0px';
  })
});

//& document.getElementById()
// : 주어진 ID를 가진 요소를 찾아 그 요소를 반환
// : ID는 문서 내에서 유일해야 함

document.addEventListener('DOMContentLoaded', () => {
  let example = document.getElementById('example');
  example.style.color = 'blue';
})


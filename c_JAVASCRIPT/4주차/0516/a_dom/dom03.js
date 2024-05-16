//! 1. 문서 객체 생성
// : createElement()메소드 사용

//? 문서 객체 생성 방법
// document.createElement(문서객체명);

// 문서 객체 생성 후에 '배치'
// 배치는 트리구조로 전달
// : 어떤 문서 객체가 있을 때 위에 있는 것을 '부모'
// : , 아래에 있는 것을 '자식'이라고 부른다.

// appendChild()메소드
// : 선택된 부모 요소의 자식 요소 리스트의 마지막에 새로운 요소를 추가
// 부모객체.appendChild(자식객체)

document.addEventListener('DOMContentLoaded', () => {
});

//! 2. 문서 객체 이동
// : appendChild() 메소드를 사용하여 문서 객체 이동
// : 문서 객체의 부모는 반드시 하나여야 한다.
// : 따라서, 문서 객체를 다른 문서 객체에 추가할 경우 문서 객체가 이동
document.addEventListener('DOMContentLoaded', () => {
});

//! 3. 문서 객체 제거
// : removeChild()메소드를 사용

//? 문서 객체 제거 방법
// 부모객체.removeChild(자식객체)

// appendChild() 메소드 등으로 이미 부모 객체와 연결이 완료된 문서 객체의 경우
// : parentNode 속성으로 부모 객체에 접근 가능
// : 해당 부모 객체의 자식 요소를 제거할 수 있다.

// 문서객체.parentNode.removeChild(문서객체)

document.addEventListener('DOMContentLoaded', () => {
})
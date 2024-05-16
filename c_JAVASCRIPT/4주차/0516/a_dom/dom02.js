//! 1. 문서 객체 가져오기
//? head, body, title요소
// : document.head
// : document.body
// : document.title

//? body요소 내부에서 만든 다른 요소들
// : querySelector(선택자) 
// : querySelectorAll(선택자) 

//! 2. 글자 조작하기
//? 문서객체.textContent
// : 입력된 문자열을 그대로 넣습니다.

//? 문서객체.innerHTML
// : 입력된 문자열을 HTML 형식으로 넣습니다.

document.addEventListener('DOMContentLoaded', () => {
});

// +) JS에서 글자 조작 시에는 문서 구조는 HTML이 담당
//    : 따라서 문서구조를 직접 생성하는 innerHTML 보다 
//      , 기능적인 텍스트만 첨부하는 textContent를 사용하는 것을 권장

//! 3. 속성 조작하기
// : 문서 객체의 속성을 조작

//? 문서객체.setAttribute(속성이름, 값)
// : 특정 속성에 값을 지정

//? 문서객체.getAttribute(속성이름)
// : 특정 속성을 추출

document.addEventListener('DOMContentLoaded', () => {
})

//! 4. 스타일 조작하기
// : 문서 객체의 스타일을 조작 시에는 style속성을 사용

//? 스타일 속성 지정 시 주의점
// style속성은 객체
// : 해당 객체 내부에 CSS를 사용하여 스타일 속성을 지정
// : 속성값은 CSS에서 사용하는 값과 동일
// : 속성명의 경우
// : >> JS는 식별자에 -(하이픈)기호를 사용 X
// : >> lowerCamelCase를 사용하여 표기
// text-align >> textAlign
// font-size >> fontSize

//? 스타일 객체 사용법
// : 주로 점표기법을 사용
// h1.style.backgroundColor: 점표기법
// h1.style['backgroundColor']: 대괄호 표기법
// h1.style['background-color']: 대괄호 표기법

// div 25개의 스타일을 조작하여 검은색에서 흰색으로 그라데이션 효과를 보이도록 지정
document.addEventListener('DOMContentLoaded', () => {
})
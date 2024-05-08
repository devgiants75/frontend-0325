//! Todo 객체
//, Todo 객체는 할 일 목록 관리 시스템에서 사용

//? 각 할 일의 속성

// - id: 각 할 일의 고유 식별자. 일반적으로 숫자나 문자열로 표현
// - content: 할 일의 내용을 문자열로 저장
//            사용자가 할 일로 등록한 구체적인 작업 설명

// - completed: 할 일의 완료 상태를 나타내는 부울 값
//              true는 완료된 상태를, false는 아직 완료되지 않은 상태

//? 프로젝트 구조
// 할 일 목록 저장: 객체를 사용하여 할 일(Todo)의 상태(완료 여부)와 내용을 저장
// 할 일 추가: 배열에 객체를 추가하여 새로운 할 일을 목록에 추가
// 할 일 삭제: 특정 조건을 만족하는 할 일을 배열에서 제거
// 할 일 목록 출력: 콜백 함수를 사용하여 목록의 상태를 콘솔에 출력

// let todo = {
//   id: 1,
//   content: "JavaScript 공부하기",
//   completed: false
// }

// 할 일 목록을 저장할 배열을 초기화
let todos = [];

// 할 일을 추가하는 함수
// : 새로운 할 일을 생성하여 todos 배열에 추가
// : 각 할 일은 고유 ID, 내용, 완료 상태를 가짐


// 할 일을 삭제하는 함수
// : 주어진 ID를 가진 할 일을 todos 배열에서 제거


// 할 일의 완료 상태를 변경하는 함수
// : 주어진 ID를 가진 할 일의 완료 상태를 토글


// 현재의 할 일 목록을 출력하는 함수
// : 콘솔에 현재 할 일 목록의 상태를 출력
// : 각 할 일은 콜백 함수를 통해 출력

// 함수 사용 예시


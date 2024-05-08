//! Todo 객체
//, Todo 객체는 할 일 목록 관리 시스템에서 사용

//? 각 할 일의 속성

// - id: 각 할 일의 고유 식별자. 일반적으로 숫자나 문자열로 표현
//       , 배열의 인덱스 + 1 (1부터 1씩 증가하는 정수값)

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

//! 코드 작성 //

// 할 일 목록을 저장할 배열을 초기화
// : 할 일 목록의 요소값은 객체
let todos = [];

//& 할 일을 추가하는 함수
// : 새로운 할 일을 생성하여 todos 배열에 추가
// : 각 할 일은 고유 ID, 내용, 완료 상태를 가짐
function addTodo(content) {
  const todo = {
    id: todos.length + 1, // 새 할 일에 고유 id 할당 (배열의 길이 + 1로 설정)
    content: content,
    completed: false, // 할 일의 완료 상태를 기본적으로 '미완료'로 지정
  };
  todos.push(todo); // 생성한 할 일 객체를 todos 배열에 추가

  //? 새로운 할 일이 추가될 때 마다 할 일 목록을 콘솔에 출력
  displayTodos();
}

//& 할 일을 삭제하는 함수
// : 주어진 ID를 가진 할 일을 todos 배열에서 제거
function deleteTodo(id) { // id: 제거할 요소의 id
  // 주어진 id를 가진 할 일을 제외하고, 새로운 배열로 생성
  todos = todos.filter(todo => todo.id !== id);

  //? 변경된 할 일 목록을 콘솔에 출력
  displayTodos();
}

//& 할 일의 완료 상태를 변경하는 함수
// : 주어진 ID를 가진 할 일의 완료 상태를 토글 >> 수정(Update)
function toggleTodoComplete(id) {
  todos = todos.map(todo => {
    // if (todo.id === id) { // 현재 순회하는 할 일의 id와 주어진 id가 일치한다면
    //   return {...todo, completed: !todo.completed}
    // }
    // return todo; // 일치하지 않는 경우 기존 객체를 반환

    return todo.id === id ? {...todo, completed: !todo.completed} : todo;
  });

  //? 변경된 할 일 목록을 콘솔에 출력
  displayTodos();
}

let lsa = {
  name: '이승아',
  height: 169,
  completed: true,

  name: '이도경',
  completed: false
}
console.log(lsa);

//& 현재의 할 일 목록을 출력하는 함수
// : 콘솔에 현재 할 일 목록의 상태를 출력
// : 각 할 일은 콜백 함수를 통해 출력
function displayTodos() {
  console.log('현재 Todos: ');
  todos.forEach(todo => {
    console.log(`${todo.id}: ${todo.content} - ${todo.completed ? '완료' : '미완료'}`);
  });
}

// 함수 사용 예시
console.log('===할 일 추가===');
addTodo('자바스크립트 공부하기'); // 1
addTodo('HTML, CSS 복습하기'); // 2
addTodo('정보처리기사 필기 공부하기'); // 3

console.log('===완료 상태 토글===');
toggleTodoComplete(2); // id가 2인 할 일의 완료 상태를 토글

console.log('===할 일 삭제===');
deleteTodo(3);

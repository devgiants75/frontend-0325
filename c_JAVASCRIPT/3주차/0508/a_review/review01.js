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

// 할 일 목록을 저장할 배열을 초기화합니다.
let todos = [];

// 할 일을 추가하는 함수입니다.
// : 새로운 할 일을 생성하여 todos 배열에 추가
// : 각 할 일은 고유 ID, 내용, 완료 상태를 가짐
function addTodo(content) {
    const todo = {
        id: todos.length + 1, // 새 할 일에 고유 ID를 할당합니다. 배열 길이 + 1로 설정합니다.
        content: content, // 함수 호출 시 전달받은 내용을 할 일의 내용으로 설정합니다.
        completed: false // 할 일의 완료 상태를 기본적으로 '미완료'로 설정합니다.
    };
    todos.push(todo); // 생성한 할 일 객체를 todos 배열에 추가합니다.
    displayTodos(); // 할 일 목록을 콘솔에 출력하는 함수를 호출합니다.
}

// 할 일을 삭제하는 함수입니다.
// : 주어진 ID를 가진 할 일을 todos 배열에서 제거
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id); // 주어진 ID를 가진 할 일을 제외하고 새로운 배열을 생성합니다.
    displayTodos(); // 변경된 할 일 목록을 콘솔에 출력하는 함수를 호출합니다.
}

// 할 일의 완료 상태를 변경하는 함수입니다.
// : 주어진 ID를 가진 할 일의 완료 상태를 토글
function toggleTodoComplete(id) {
    todos = todos.map(todo => {
        if (todo.id === id) { // 만약 현재 할 일의 ID가 주어진 ID와 일치한다면,
            return {...todo, completed: !todo.completed}; // 해당 할 일의 완료 상태를 반전시키고 새로운 객체로 반환합니다.
        }
        return todo; // 일치하지 않는 경우 기존 객체를 반환합니다.
    });
    displayTodos(); // 변경된 할 일 목록을 콘솔에 출력하는 함수를 호출합니다.
}

// 현재의 할 일 목록을 출력하는 함수입니다.
// : 콘솔에 현재 할 일 목록의 상태를 출력
// : 각 할 일은 콜백 함수를 통해 출력
function displayTodos() {
    console.log("Current Todos:"); // 'Current Todos:'라고 콘솔에 출력합니다.
    todos.forEach(todo => { // todos 배열의 각 요소에 대해 함수를 실행합니다.
        console.log(`${todo.id}: ${todo.content} - ${todo.completed ? 'Completed' : 'Pending'}`); // 각 할 일의 ID, 내용, 완료 상태를 문자열로 만들어 출력합니다.
    });
}

// 함수 사용 예시
addTodo("JavaScript 공부하기"); // 'JavaScript 공부하기'라는 내용의 할 일을 추가합니다.
addTodo("리액트 학습"); // '리액트 학습'이라는 내용의 할 일을 추가합니다.
toggleTodoComplete(1); // ID가 1인 할 일의 완료 상태를 토글합니다.
deleteTodo(2); // ID가 2인 할 일을 삭제합니다.

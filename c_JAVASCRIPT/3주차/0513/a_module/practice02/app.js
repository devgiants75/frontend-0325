// TodoManager 클래스를 "./TodoManager.js" 모듈로부터 임포트
import { TodoManager } from "./TodoManager.js";

// TodoManager의 인스턴스를 생성
const todoManager = new TodoManager();
// 할 일 입력 폼에 해당하는 HTML 요소를 가져옴.
const form = document.getElementById("new-todo-form");
// 입력 필드에 해당하는 HTML 요소를 가져옴.
const input = document.getElementById("new-todo");
// 할 일 목록을 표시할 리스트에 해당하는 HTML 요소를 가져옴.
const todoList = document.getElementById("todo-list");

// 폼 제출 이벤트에 리스너를 추가
form.addEventListener("submit", function (event) {
  event.preventDefault(); // 기본 제출 이벤트를 방지
  const text = input.value.trim(); // 입력 필드에서 텍스트를 가져와 공백을 제거
  if (text !== "") {
    // 텍스트가 비어있지 않다면,
    todoManager.addTodo(text); // 새로운 할 일을 추가
    input.value = ""; // 입력 필드를 비움
    updateTodoList(); // 할 일 목록을 업데이트
  }
});

// 할 일 목록을 업데이트하는 함수
function updateTodoList() {
  const todos = todoManager.getTodos(); // 모든 할 일을 가져옴.
  todoList.innerHTML = ""; // 할 일 목록을 초기화
  todos.forEach((todo) => {
    const li = document.createElement("li"); // 새로운 li 요소를 생성
    li.textContent = todo.text; // li 요소에 할 일 텍스트를 설정
    if (todo.completed) {
      // 할 일이 완료 상태라면,
      li.classList.add("completed"); // 'completed' 클래스를 추가
    } else {
      li.classList.remove("completed"); // 'completed' 클래스를 제거
    }
    li.addEventListener("click", () => {
      // li 요소에 클릭 이벤트 리스너를 추가
      todoManager.toggleComplete(todo.id); // 클릭 시 할 일의 완료 상태를 토글
      updateTodoList(); // 할 일 목록을 다시 업데이트
    });
    todoList.appendChild(li); // 생성된 li 요소를 할 일 목록에 추가
  });
}

// 처음 로드될 때 할 일 목록을 업데이트
updateTodoList();

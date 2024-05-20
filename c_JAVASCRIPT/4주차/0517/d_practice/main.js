let todos = [];  // 할 일 목록을 저장할 빈 배열을 선언

// DOMContentLoaded 이벤트가 발생하면, 즉 문서 로딩이 완료되면 아래의 함수를 실행
document.addEventListener('DOMContentLoaded', function() {
  todos = JSON.parse(localStorage.getItem('todos')) || [];  // 로컬 스토리지에서 'todos' 항목을 가져와 JSON으로 파싱하고, 값이 없으면 빈 배열을 사용
  renderTodos(todos);  // 할 일 목록을 화면에 렌더링하는 함수 호출
});

// 할 일을 추가하는 함수
function addTodo() {
  const input = document.getElementById('todoInput');  // 입력 필드의 DOM 요소를 가져옴
  const newTodo = input.value.trim();  // 입력 필드에서 값을 가져와 공백을 제거
  if (newTodo) {  // 값이 비어있지 않다면
      todos.push(newTodo);  // todos 배열에 새 할 일을 추가
      localStorage.setItem('todos', JSON.stringify(todos));  // 로컬 스토리지에 JSON 형식으로 변환하여 저장
      renderTodos(todos);  // 할 일 목록을 다시 렌더링
      input.value = '';  // 입력 필드를 비움
  }
}

// 할 일 목록을 렌더링하는 함수
function renderTodos(todos) {
  const list = document.getElementById('todoList');  // 할 일 목록을 표시할 리스트의 DOM 요소를 가져옴
  list.innerHTML = '';  // 현재 목록의 내용을 비움
  todos.forEach((todo, index) => {  // todos 배열의 각 요소에 대해 반복
      const li = document.createElement('li');  // 새로운 리스트 아이템 요소를 생성
      li.textContent = todo;  // 리스트 아이템에 할 일 텍스트를 설정
      const deleteBtn = document.createElement('button');  // 삭제 버튼을 위한 요소 생성
      deleteBtn.textContent = 'Delete';  // 버튼의 텍스트를 'Delete'로 설정
      deleteBtn.onclick = () => removeTodo(index);  // 버튼 클릭 시 해당 할 일을 삭제하는 함수 호출
      li.appendChild(deleteBtn);  // 리스트 아이템에 삭제 버튼을 추가
      list.appendChild(li);  // 최종적으로 리스트 아이템을 할 일 목록에 추가
  });
}

// 할 일을 삭제하는 함수
function removeTodo(index) {
  todos.splice(index, 1);  // todos 배열에서 지정된 인덱스의 할 일을 삭제
  localStorage.setItem('todos', JSON.stringify(todos));  // 변경된 할 일 목록을 로컬 스토리지에 다시 저장
  renderTodos(todos);  // 할 일 목록을 다시 렌더링
}

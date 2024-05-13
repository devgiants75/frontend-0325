//& 1) HTML 요소 가져오기
let addButton = document.getElementById('add-btn');
let todoInput = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list');

// 입력된 할 일을 li로 추가하는 기능
addButton.addEventListener('click', function() {
  // 웹 문서의 새로운 요소 생성 방법
  // : document.createElement('요소명');
  let newItem = document.createElement('li');

  newItem.textContent = todoInput.value;

  newItem.classList.add('todo-item');

  // 상위요소.appendChild(하위요소);
  todoList.appendChild(newItem);

  // 입력 창의 내용은 사용 후 비우는 것이 원칙
  todoInput.value = '';
});

//& 토글 상태 변경 기능
// : 리스트의 항목을 클릭하면 '완료' 상태를 토글
todoList.addEventListener('click', function(e) {
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
})
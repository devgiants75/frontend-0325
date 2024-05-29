
{
  //! 타입스크립트로 TODO 리스트 구현

  // 요구 사항
  // - Todo 항목의 인터페이스 정의(ITodoItem)
  //   : Todo 항목은 id(number), task(string), completed(boolean)

  // - Todo 리스트를 관리할 수 있는 함수 구현
  // 1. addTodo: 새로운 Todo 항목을 추가
  // 2. completeTodo: Todo 항목의 completed 상태를 true로 변경
  // 3. deleteTodo: Todo 항목을 삭제

  // 4. editTodo: Todo 항목의 task를 편집
  // 5. clearCompleted: 완료된 모든 Todo 항목을 삭제
  // 6. getAllTodos: 모든 Todo 항목을 조회
  // 7. filterTodos: 특정 상태의 Todo 항목을 필터링
  // 8. toggleTodo: Todo 항목의 completed 상태를 토글
  // 9. set

  //# ======================================== //
  // interface ITodoItem {
  //   id: number;
  //   task: string;
  //   completed: boolean;
  // }
  
  // function addTodo(todos: ITodoItem[], task: string): ITodoItem[] {
  //   const newTodo: ITodoItem = {
  //     id: Math.max(0, ...todos.map(t => t.id)) + 1,
  //     task: task,
  //     completed: false,
  //   };
  //   return [...todos, newTodo];
  // }
  
  // function completeTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  //   return todos.map(todo => 
  //     todo.id === id ? { ...todo, completed: true } : todo
  //   );
  // }
  
  // function deleteTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  //   return todos.filter(todo => todo.id !== id);
  // }
  
  function editTodo() {
    
  }
  
  function clearCompleted() {
    
  }
  
  function getAllTodos() {

  }
  
  function filterTodos() {

  }
  
  function toggleTodo() {

  }
  
  function setAllTodosCompletion() {
  }
  
  // 함수 사용 예시

}
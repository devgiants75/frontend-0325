// z_todo.ts
{
  //! 타입스크립트로 TODO 리스트 구현
  // 요구 사항
  // - Todo 항목의 인터페이스 정의(ITodoItem)
  //   : Todo 항목은 id(number), task(string), completed(boolean)

  // - Todo 리스트를 관리할 수 있는 함수 구현
  // 1. addTodo: 새로운 Todo 항목을 추가
  // 2. completeTodo: Todo 항목의 completed 상태를 true로 변경
  // 3. deleteTodo: Todo 항목을 삭제
  // : 각 함수는 Todo 항목 배열을 입력받고, 변경된 배열을 반환

  interface ITodoItem {
    id: number;
    task: string;
    completed: boolean;
  }

  let todos: ITodoItem[] = [];

  // 전체 할 일 목록, 추가될 할 일
  function addTodo(todos: ITodoItem[], task: string): ITodoItem[] {
    const newTodo: ITodoItem = {
      id: Math.max(0, ...todos.map(t => t.id)) + 1,
      // ['a', 'b', 'c']
      // >> [1, 2, 3]
      task: task,
      completed: false
    };
    return [...todos, newTodo];
  }

  // 전체 할 일 목록, 변경할 요소의 id
  function completeTodo(todos: ITodoItem[], id: number): ITodoItem[] {
    return todos.map(todo => todo.id === id ? {...todo, completed: true} : todo);
  }

  // 전체 할 일 목록, 변경할 요소의 id
  function deleteTodo(todos: ITodoItem[], id: number): ITodoItem[] {
    return todos.filter(todo => todo.id !== id);
  }

  todos = addTodo(todos, '타입스크립트 복습하기');
  todos = addTodo(todos, '자바스크립트 복습하기');
  todos = addTodo(todos, 'HTML/CSS 복습하기');
  // console.log(todos);

  todos = completeTodo(todos, 1);
  todos = completeTodo(todos, 2);
  // console.log(todos);

  todos = deleteTodo(todos, 2);
  console.log(todos);
}

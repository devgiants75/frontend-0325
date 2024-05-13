// TodoManager 클래스를 정의
export class TodoManager {
  // TodoManager 인스턴스를 초기화하는 생성자
  constructor() {
    this.todos = []; // 할 일 항목들을 저장할 빈 배열을 초기화
  }

  // 새로운 할 일 항목을 추가하는 메소드
  addTodo(text) {
    const todo = {
      id: Date.now(), // 할 일 항목의 고유 ID를 현재 타임스탬프로 설정
      text, // 전달된 인자에서 할 일의 텍스트를 설정
      completed: false, // 초기 완료 상태를 false로 설정
    };
    this.todos.push(todo); // 새 할 일 항목을 todos 배열에 추가
  }

  // ID를 통해 할 일 항목의 완료 상태를 토글하는 메소드
  toggleComplete(id) {
    const todo = this.todos.find((t) => t.id === id); // ID가 일치하는 할 일 항목을 찾기
    if (todo) {
      todo.completed = !todo.completed; // 찾은 할 일 항목의 완료 상태를 토글
    }
  }

  // ID를 통해 특정 할 일 항목을 제거하는 메소드
  removeTodo(id) {
    this.todos = this.todos.filter((t) => t.id !== id); // ID가 일치하지 않는 항목들만 남겨 todos 배열을 재구성
  }

  // 저장된 모든 할 일 항목을 반환하는 메소드
  getTodos() {
    return this.todos; // todos 배열을 반환
  }
}
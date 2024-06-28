import React, { useState } from 'react'

//! Todo 리스트 관리

// 1. 할 일 내용(문자열)
// 2. 할 일 완료 상태(논리값)
// 3. 시간 기록(Date 날짜 타입)

// 4. 할 일 삭제
//   : 삭제 버튼 클릭 시 배열에서 요소 제거

interface Todo {
  description: string; // 사용자로부터 입력 받은 데이터
  completed: boolean; // 기본값: false
  timestamp: Date; // 새로운 할 일이 생성되는 시점을 Date객체로 생성
}

export default function Practice01() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputTask, setInputTask] = useState<string>('');

  //# 새로운 할 일 추가 기능
  const addTodo = () => {
    if (inputTask.trim() !== '') {
      // 입력된 내용 값이 존재하는 경우
      // : 새로운 할 일 생성
      const newTodo: Todo = {
        description: inputTask,
        completed: false,
        timestamp: new Date()
      };

      // 전체 할 일 배열의 요소를 가져와서 추가 내용을 마지막 요소로 추가
      setTodos([...todos, newTodo]);

      setInputTask(''); // 입력 필드 초기화
    }
  }

  //# 완료 여부를 토글하는 기능
  const toggleTodo = (index: number) => {
    const newTodos = todos.map((todo, idx) => 
      // 매개변수로 전달된 index값과 배열의 모든 요소를 순회하였을 때
      // , 일치하는 idx값이 있는 경우 해당 요소의 완료 여부를 토글
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(newTodos);
  }

  //# 할 일 삭제 기능
  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
  }

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "400px",
        margin: "20px auto",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      <h3>할 일 목록 앱</h3>
      <input
        type="text"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        placeholder="할 일을 입력해주세요."
      />
      <button onClick={addTodo}>할 일 추가</button>
      <hr />

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.description}
            (추가 시간: {todo.timestamp.toLocaleTimeString()})
            <button onClick={() => toggleTodo(index)}>
              {todo.completed ? '완료 취소' : '할 일 완료'}
            </button>
            <button onClick={() => deleteTodo(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

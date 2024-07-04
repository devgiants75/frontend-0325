import React, { useEffect, useRef, useState } from 'react'
import TodoList from './TodoList';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const loadTodos = (): Todo[] => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(loadTodos);
  const [inputValue, setInputValue] = useState<string>('');

  let nexIdInitialValue = todos.length > 0 
    ? Math.max(...todos.map(todo => todo.id)) + 1 
    : 1;

  const nextId = useRef(nexIdInitialValue);

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    setTodos([...todos, {
      id: nextId.current,
      text: inputValue,
      completed: false
    }]);

    setInputValue('');
    nextId.current += 1;
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id 
          ? { ...todo, completed: !todo.completed } 
          : todo
      )
    );
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // useEffect(() => {
  //   const storedTodos = localStorage.getItem('todos');
  //   if (storedTodos) {
  //     setTodos(JSON.parse(storedTodos));
  //     nextId.current = JSON.parse(storedTodos).lenght + 1;
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h4>Todo List</h4>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? addTodo() : null)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

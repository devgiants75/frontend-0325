import React, { useState } from 'react'

//! 리액트 상태 관리의 불변성

//# 불변성(Immutable)
// cf. mutable: 변할 수 있는

// : 어떤 객체가 한 번 생성된 후에는 그 상태가 변경되지 않는 것을 의미
// : 불변성을 유지하는 방법은 객체를 변경하는 대신 새로운 객체를 생성하는 것

//? 리액트 컴포넌트의 상태가 변경될 때마다 UI를 다시 렌더링하여 변경 사항을 반영
// : 상태 변경에 따라 컴포넌트를 효율적으로 업데이트

//? 상태가 변경되었는지를 판단하기 위해 이전 상태와 새로운 상태를 비교
// : 원본 배열을 직접 수정하는 경우 불변성을 유지하지 X

// >> 비교 작업을 효율적으로 수행하기 위해 상태는 불변(immutable)하게 관리하는 것이 중요

// >> 스프레드 연산자 | concat 메서드를 사용하여 새로운 배열 생성을 권장!!

interface Task {
  id: number;
  text: string;
}

export default function Array03() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: '리액트 복습' },
    { id: 2, text: '타입스크립트 복습' }
  ]);

  const addTask = (text: string) => {
    const newTask: Task = { id: tasks.length + 1, text };
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <h4>불변성 지키기 - Task List</h4>
      {tasks.map(task => (
        <li key={task.id}>{task.text}</li>
      ))}
    </div>
  )
}

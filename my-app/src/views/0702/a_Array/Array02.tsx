import React, { useState } from "react";

//# 3. sort 메서드
// : 배열의 요소를 정렬하여 "원본 배열을 변경"

interface Student {
  id: number;
  name: string;
  score: number;
}

const students: Student[] = [
  { id: 1, name: "이승아", score: 85 },
  { id: 2, name: "이도경", score: 92 },
  { id: 3, name: "이지훈", score: 78 },
];

// Sort 컴포넌트
const Sort = () => {
  // sort: 배열 내부의 요소를 정렬하는 메서드

  // 0보다 작은 값: 첫 번째 인수가 두 번째 인수보다 작음
  // 0: 두 인수가 같음
  // 0보다 큰 값: 첫 번째 인수가 두 번째 인수보다 큼

  // 오름차순
  const sortedStudents = [...students].sort((a, b) => a.score - b.score);

  // 내림차순
  // const sortedStudents = [...students].sort((a, b) => b.score - a.score);

  return (
    <div>
      <h4>Sort - Student List</h4>
      {sortedStudents.map((student) => (
        <li key={student.id}>
          {student.name} - {student.score}
        </li>
      ))}
    </div>
  );
};

//# 4. push 메서드
// : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환

interface Task {
  id: number;
  text: string;
}

const initialTasks: Task[] = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a project" },
];

const Push = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (text: string) => {
    // 새로운 task 객체 생성
    const newTask: Task = { id: tasks.length + 1, text };

    // 원본 배열 복사
    // slice(a, b): a부터 b전까지(b 미포함)에 대한 복사본을 새로운 배열 객체로 반환
    const updatedTasks = tasks.slice();

    // 배열에 새 task 추가
    updatedTasks.push(newTask);

    // 상태 업데이트
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h4>Push - Task List</h4>
      <button onClick={() => addTask('새로운 할 일')}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  )
}

//# 5. concat 메서드
// : 기존 배열에 새로운 배열이나 값을 추가하여 "새로운 배열을 반환"

interface Item {
  id: number;
  name: string;
}

const initialItems: Item[] = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

const additionalItems: Item[] = [
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
];

const Concat = () => {
  const allItems = initialItems.concat(additionalItems);

  return (
    <div>
      <h4>Concat - Item List</h4>
      <ul>
        {allItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Array02() {
  return (
    <div>
      <Sort /> 
      <Push /> 
      <Concat /> 
    </div>
  );
}

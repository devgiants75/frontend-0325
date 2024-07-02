import React, { ChangeEvent, useRef, useState } from 'react'
import CreateGoal from './CreateGoal';
import GoalList from './GoalList';

export interface Goal {
  id: number;
  title: string;
  explanation: string;
  active: boolean;
}

const initialGoals: Goal[] = [
  {
    id: 1,
    title: '책 10권 읽기',
    explanation: '경제 서적 10권 읽기',
    active: true
  },
  {
    id: 2,
    title: '야구 직관 보러가기',
    explanation: '잠실 구장 가보기',
    active: false
  },
  {
    id: 3,
    title: '저축하기',
    explanation: '맥북 구매하기',
    active: false
  },
]

export default function GoalApp() {

  const [goals, setGoals] = useState<Goal[]>(initialGoals);
  const [goalInput, setGoalInput] = useState<Omit<Goal, 'id' | 'active'>>({
    title: '',
    explanation: ''
  })

  const nextId = useRef<number>(4);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setGoalInput({
      ...goalInput,
      [name]: value
    });
  };

  // 
  const handleCreate = () => {
    const newGoal = {
      id: nextId.current,
      title: goalInput.title,
      explanation: goalInput.explanation,
      active: false
    }

    // setGoals([...goals, newGoal]);
    setGoals(goals.concat(newGoal));

    setGoalInput({
      title: '',
      explanation: ''
    });

    nextId.current += 1;
  }

  const handleToggle = (id: number) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, active: !goal.active } : goal
      )
    )
  }

  const handleRemove = (id: number) => {
    setGoals(goals.filter(goal => goal.id !== id));
  }

  return (
    <div>
      <CreateGoal 
        goal={goalInput}
        onChange={handleInputChange}
        onCreate={handleCreate}
      />
      <GoalList 
        goals={goals}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </div>
  )
}

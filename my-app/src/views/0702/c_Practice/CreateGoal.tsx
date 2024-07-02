import React, { ChangeEvent } from 'react'
import { Goal } from './GoalApp'

interface GoalProps {
  goal: Omit<Goal, 'id' | 'active'>;
  onCreate: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CreateGoal({ goal, onChange, onCreate }: GoalProps) {
  const { title, explanation } = goal;
  return (
    <div>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="목표를 입력하세요."
        onChange={onChange}
      />
      <input
        type="text"
        name="explanation"
        value={explanation}
        placeholder="설명을 입력하세요."
        onChange={onChange}
      />
      <button onClick={onCreate}>목표 추가</button>
    </div>
  );
}

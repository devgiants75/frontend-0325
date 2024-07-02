import React, { ChangeEvent } from 'react'
import { Goal } from './GoalApp'

interface GoalProps {
  goal: Omit<Goal, 'id' | 'active'>;
  // '목표 추가' 버튼에 동작될 이벤트 핸들러
  onCreate: () => void;
  // input창 데이터를 변경해주는 이벤트 핸들러
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CreateGoal({ goal, onChange, onCreate }: GoalProps) {
  const { title, explanation } = goal;
  return (
    <div>
      {/* 목표 입력 input */}
      <input
        type="text"
        name="title"
        value={title}
        placeholder="목표를 입력하세요."
        onChange={onChange}
      />
      {/* 목표 설명 입력 input */}
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

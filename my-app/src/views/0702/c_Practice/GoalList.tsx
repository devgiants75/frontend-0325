import React from 'react'
import { Goal } from './GoalApp'

interface GoalProps {
  goals: Goal[];
  // 목표 활성 상태 토글 함수, 목표의 id를 인자로 전달
  onToggle: (id: number) => void;
  // 목표 삭제 함수, 목표의 id를 인자로 전달
  onRemove: (id: number) => void;
}

export default function GoalList({ goals, onToggle, onRemove}: GoalProps) {
  return (
    <div>
      <hr />
      {/* 
        goals 배열을 map으로 순회 - 각 목표의 정보를 렌더링 
      */}
      {goals.map((goal) => (
        // 각 목표를 정의 - key속성(각 목표를 고유하게 식별)
        <div key={goal.id}>
          {/* 
            목표의 제목과 설명을 표시 
            : 클릭될 경우 '해당 목표'의 활성 상태가 토글
          */}
          <span
            style={{
              cursor: 'pointer',
              color: goal.active ? 'green' : 'red'
            }}
            // 클릭 시 onToggle 함수 호출
            // , 목표 id를 인자로 전달
            onClick={() => onToggle(goal.id)}
          >
            {goal.title} - {goal.explanation}
          </span>
          {/* 목표 삭제 버튼 - 클릭 시 onRemove 함수 호출 */}
          <button onClick={() => onRemove(goal.id)}>삭제</button>
        </div>
      ))}
      <hr />
    </div>
  )
}

import React from 'react'
import { Goal } from './GoalApp'

interface GoalProps {
  goals: Goal[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function GoalList({ goals, onToggle, onRemove}: GoalProps) {
  return (
    <div>
      <hr />
      {goals.map((goal) => (
        <div key={goal.id}>
          <span
            style={{
              cursor: 'pointer',
              color: goal.active ? 'green' : 'red'
            }}
            onClick={() => onToggle(goal.id )}
          >
            {goal.title} - {goal.explanation}
          </span>
          <button onClick={() => onRemove(goal.id)}>삭제</button>
        </div>
      ))}
      <hr />
    </div>
  )
}

import React, { useReducer, useState } from 'react'

//! 2. 리듀서를 사용하여 상태 업데이트 로직을 한 곳에서 관리
// : 상태의 중앙 관리식 구현

type UserInfo = {
  name: string;
  age: number;
  email: string;
}

// payload: 액션 객체 내에 포함된 데이터를 지칭
// >> 순수한 데이터

type Action = 
  | { type: 'setName'; payload: string }
  | { type: 'setAge'; payload: number }
  | { type: 'setEmail'; payload: string };

function reducer(state: UserInfo, action: Action): UserInfo {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload };
    case 'setAge':
      return { ...state, age: action.payload };
    case 'setEmail':
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

export default function Reducer03() {
  //! useState를 사용할 때의 문제점
  // useState는 React에서 가장 기본적인 상태 관리 훅
  // : 복잡한 상태 로직을 관리할 때 몇 가지 한계 O

  // 예시: 복수의 useState 사용
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  //! useReducer로 리팩토링
  // useReducer는 복잡한 상태 업데이트 로직을 외부의 reducer 함수에 위임함으로써, 상태 업데이트 로직을 한 곳에서 관리
  // >> 디버깅을 용이하게 하고 코드의 가독성을 향상 
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    age: 0,
    email: ''
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  }


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }





  return (
    <div>
      <h4>UseState로 여러 개의 상태 관리</h4>
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="text" value={age} onChange={handleAgeChange} />
      <input type="text" value={email} onChange={handleEmailChange} />

      <hr />
      <h4>UseReducer로 여러 개의 상태 관리</h4>
      <input
        type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: "setName", payload: e.target.value })}
      />
      <input
        type="text"
        value={state.age}
        onChange={(e) =>
          dispatch({ type: "setAge", payload: Number(e.target.value) })
        }
      />
      <input
        type="text"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "setEmail", payload: e.target.value })
        }
      />
    </div>
  );
}

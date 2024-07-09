import React, { useEffect, useMemo, useReducer } from 'react'
import { useInput } from './hooks/useInput';

// 복합 컴포넌트 예제
// : useReducer, useState, useEffect, useMemo를 사용하여 간단한 입력 폼과 그 결과를 관리하는 애플리케이션

//! FormState 인터페이스 정의
interface FormState {
  username: string;
  email: string;
}

//! FormAction 타입 정의
type FormAction = 
  | { type: 'SET_USERNAME', payload: string }
  | { type: 'SET_EMAIL', payload: string };

//! formReducer 함수 정의
// 액션에 따라 상태를 업데이트하는 리듀서 함수
function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    default:
      throw new Error('다루지 않은 액션 타입 입니다.');
  }
}

//! Custom03 컴포넌트 정의
export default function Custom03() {
  
  //# useInput: 커스텀 훅
  // - input 값과 그 값을 변경하는 핸들러를 반환
  const usernameInput = useInput('');
  const emailInput = useInput('');

  //# useReducer: 폼 상태 (username, email)를 관리하는 데 사용
  const [formState, dispatch] = useReducer(formReducer, {
    username: '',
    email: ''
  });

  //# input 값이 변경될 때마다 useReducer를 통해 상태를 업데이트
  useEffect(() => {
    dispatch({
      type: 'SET_USERNAME',
      payload: usernameInput.value
    });
  }, [usernameInput.value]);
  
  useEffect(() => {
    dispatch({
      type: 'SET_EMAIL',
      payload: emailInput.value
    });
  }, [emailInput.value]);

  //# useMemo: formState가 변경될 때만 userInfo를 다시 계산
  const userInfo = useMemo(() => {
    return `${formState.username} (${formState.email})`;
  }, [formState]);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter Username" 
        {...usernameInput}
        // value={value}
        // onChange={handleInputChange}
      />
      <br />
      <input 
        type="text" 
        placeholder="Enter Email" 
        {...emailInput}
        // value={value}
        // onChange={handleInputChange}
      />
      <div>
        User Information: {userInfo}
      </div>
    </div>
  );
}

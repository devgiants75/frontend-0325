import React from 'react'


// 복합 컴포넌트 예제
// : useReducer, useState, useEffect, useMemo를 사용하여 간단한 입력 폼과 그 결과를 관리하는 애플리케이션

//! FormState 인터페이스 정의

//! FormAction 타입 정의

//! formReducer 함수 정의
// 액션에 따라 상태를 업데이트하는 리듀서 함수


//! Custom03 컴포넌트 정의
export default function Custom03() {
  
  //# useInput: 커스텀 훅
  // - input 값과 그 값을 변경하는 핸들러를 반환

  //# useReducer: 폼 상태 (username, email)를 관리하는 데 사용

  //# input 값이 변경될 때마다 useReducer를 통해 상태를 업데이트


  //# useMemo: formState가 변경될 때만 userInfo를 다시 계산

  return (
    <div>
      
    </div>
  );
}

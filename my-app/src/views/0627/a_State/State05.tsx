import React, { useState } from 'react'

//! 실습 문제

//? 요구사항 정리
// 1. 폼 필드: 사용자는 아이디, 비밀번호, 이메일 주소(문자열 데이터)를 입력 가능

// 2. 입력 유효성 검사: 모든 필드는 비어져 있을 수 X
//    , 이메일은 유효한 형식을 지정

// 3. 상태 관리: 입력 값은 useState를 통해 상태 관리 - formData

// 4. 폼 제출: 폼 제출 시 모든 입력 값이 콘솔에 출력
//    , 입력 조건을 만족하지 않은 경우(유효성 검사 불일치 시) 오류 메시지 출력
//    , 오류 메시지 또한 상태 관리 - errors

//? 작업 순서
// 1. 폼과 필요한 입력 필드 생성
// 2. 입력 필드에 대한 상태 관리 로직을 구현
// 3. 입력 유효성 검사를 추가, 오류 메시지 표시 로직을 작성
// 4. 폼 제출 함수를 구현, 콘솔에 입력 데이터 출력


export default function State05() {
  //! 폼 데이터 상태 관리
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    email: ''
  });
  
  //! 폼 입력 오류 메시지 상태 관리
  

  //! 각 입력 필드 변수 선언(비구조화 할당)
  const { id, password, email } = formData;

  //! 이메일 유효성 검사 함수 정의(정규 표현식 패턴)
  const validateEmail = (email: string): boolean => {
    //? test() 메서드
    // : 주어진 문자열이 정규 표현식을 만족하는지 판별
    //   , 그 여부를 boolean으로 반환
    // 만족할 경우 true, 만족하지 않을경우 false
    return /\S+@\S+\.\S+/.test(email);

    /*
    ? 정규 표현식(이메일: devgiants75@naver.com)
      : \S+@\S+\.\S+
      \S+ : 하나 이상의 공백이 아닌 문자에 일치(아이디) (devgiants75)
      @ : 리터럴 문자인 @ 문자를 포함 (@)
      \S+ : 하나 이상의 공백이 아닌 문자에 일치(도메인 이름의 시작)
      \. : 리터럴 점(.)문자를 포함(도메인의 일부)
      \S+ : 하나 이상의 공백이 아닌 문자에 일치
            (도메인의 최상위 도메인: com, net, co.kr 등)
    */ 
  }

  //! 폼 제출 이벤트를 처리하는 이벤트 핸들러 함수
  const handleSubmit = () => {
    // 기본 폼 제출 동작을 방지

    // 임시 오류 메시지 객체를 초기화
    

    // 폼의 유효성 상태를 추적하는 변수 (boolean 타입의 변수)


    //? 아이디 유효성 검사(비워져 있으면 X)
    if(true) { // 아이디 필드가 비어 있으면
      // 오류 메시지 설정

      // 유효성의 상태를 false로 설정
    }

    //? 비밀번호 유효성 검사(비워져 있으면 X)
    if(true) {
      
    }

    //? 이메일 유효성 검사(비워져 있거나 사용자 정의 표현식에 유효하지 않으면)
    if(true) {
      
    }

    //? 오류 상태를 업데이트
    

    //? 모든 입력이 유효한 경우
    if (true) {

      // 입력 필드 초기화
      
    }
  }

  //! 입력 필드의 변경을 감지하는 이벤트 핸들러 함수
  const handleInputChange = () => {
    //? 이벤트에서 입력 필드의 이름과 값을 추출
  }

  return (
    <div style={{ margin: '20px', padding: '10px'}}>
      <h3>회원가입 구현</h3>
      <form>
        <div>
          <label>아이디: </label>
          <input 
            type="text" 
            name='id'
            value={id}
            onChange={handleInputChange}
          />
          {/* 
            상태관리되는 errors에 id 속성이 존재한다면 
            아이디 대한 에러 메시지 출력
          */}
        </div>
        <div>
          <label>비밀번호: </label>
          <input 
            type="text" 
            name='password'
            value={password}
            onChange={handleInputChange}
          />
          {/* 
            상태관리되는 errors에 password 속성이 존재한다면 
            패스워드에 대한 에러 메시지 출력
          */}
        </div>
        <div>
          <label>이메일: </label>
          <input 
            type="text" 
            name='email'
            value={email}
            onChange={handleInputChange}
          />
          {/* 
            상태관리되는 errors에 email 속성이 존재한다면 
            이메일에 대한 에러 메시지 출력
          */}
        </div>
        <button type='submit'>회원가입</button>
      </form>
    </div>
  )
}

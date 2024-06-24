import React from 'react'

//! JSX안에서 자바스크립트 값 사용하기

//? 1. JSX 내에서 중괄호 사용 방법 (2가지)
// a. JSX 태그(HTML) 내에서 직접 텍스트 사용 시
// b. 속성=(기호) 바로 다음

export default function JSX02() {

  // ? 1. 중괄호를 사용한 변수 참조
  // : 변수명으로 사용
  const welcomeMassage = '안녕하세요';

  // ? 2. 중괄호를 사용한 함수 호출
  // : 함수명()로 사용
  const greeting = (name: string) => `안녕하세요 ${name}님`;

  // ? 3. 중괄호를 사용한 객체 사용
  // 객체명.속성명
  type UserType = {
    name: string;
    age: number;
  }

  const userInfo: UserType = {
    name: '이승아',
    age: 50
  }

  //? style 속성 지정 시
  // : 객체 형식으로 작성
  // - 더블 컬리 {{}}를 사용
  // - JSX에서 JS 객체를 전달하는 경우 객체를 중괄호 쌍으로 감싸야 함.

  const divStyle = {
    backgroundColor: 'black',
    color: 'orange',
    fontSize: 24,
    padding: '10px'
  };

  const text = '스타일 속성 사용하기';

  // JS 주석 형태
  return (
    <>
      {/* HTML 주석 형태 */}
      {/* 
      HTML 내에서 JS의 속성 지정 
      : JSX에서 문자열, 숫자, 기타 JS 표현식 뿐만 아니라 객체 까지도 모두 중괄호 내에 작성
      */}
      <div>{welcomeMassage}</div>
      <div>{greeting('이승아')}</div>
      <div>
        이름: {userInfo.name} <br />
        나이: {userInfo.age}
      </div>

      <div style={divStyle}>{text}</div>
    </>
  )
}

// JSX 내에서 주석 사용 시
// JS 문법 영역에서는 // JS 주석 사용
// () 소괄호 내에서는 {/*  */} HTML 주석 사용
import React from 'react'
import styled from 'styled-components'

//# 4. Styled-Components
// : Styled-Components는 CSS-in-JS 라이브러리로, 컴포넌트 수준의 스타일을 작성 가능

//! CSS-in-JS의 개념
// CSS-in-JS는 JavaScript를 사용하여 컴포넌트 스타일을 적용하는 방식
// : CSS 코드를 JavaScript 파일 내에 직접 작성하고, 이를 컴포넌트와 함께 번들링하여 스타일을 적용
// : 컴포넌트 기반의 개발 패러다임에서 주로 사용

//! Styled-Components 설치
// : npm install styled-components
// : npm install @types/styled-components --save-dev

// 박스 스타일 생성
// const Box = styled.div``;
const Box = styled.div`
  background-color: lightblue;
  padding: 20px;
  border-radius: 35px;
  color: #333;
  font-weight: bold;
`;

// 버튼 스타일 생성
const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* &: 현재 스타일 태그 그 자체를 의미 */
  &:hover {
    background-color: darkblue;
  }
`;

//! 프롭스를 활용한 동적 스타일링
// styled-components는 props를 통해 동적으로 스타일을 적용

interface Button2Props {
  // 옵셔널 속성(선택적)
  primary?: boolean;
}

const Button2 = styled.button<Button2Props>`
  background-color: ${props => props.primary ? 'red' : 'gray'};
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-weight: ${props => props.primary ? 'bold' : 'normal'};
`;

//! 글로벌 스타일과 테마의 적용
// : 전체 애플리케이션에 걸쳐 공통 스타일을 적용하려면 createGlobalStyle을 사용

export default function Style04() {
  return (
    <Box>
      스타일드 컴포넌트
      : 박스 스타일
      <Button>버튼 스타일</Button>
      <Button2>Props 사용 버튼 스타일</Button2>
      <Button2 primary>Props 사용 버튼 스타일</Button2>
    </Box>
  )
}

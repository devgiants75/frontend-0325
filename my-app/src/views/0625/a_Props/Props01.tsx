import React, { ReactNode } from "react";

//! Props(properties, 속성)

// "Properties"의 줄임말
// : React 컴포넌트 간에 데이터를 전달하기 위해 사용되는 "객체"

// - Props를 통해 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달 가능
// - 자식 컴포넌트는 전달받은 props를 읽어서 UI를 렌더링

//# Props 사용 목적

// 1. 데이터 전달
// 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하여 자식 컴포넌트가 해당 데이터를 기반으로 UI를 렌더링

// 예를 들어, 부모 컴포넌트에서 사용자 이름을 전달하면, 자식 컴포넌트에서 해당 이름을 표시할 수 있습니다.

// 2. 컴포넌트 재사용성 향상
// Props를 사용하면 컴포넌트의 재사용성 향상
// : 동일한 컴포넌트를 다양한 데이터로 여러 번 사용할 수 있으며, 각 인스턴스는 전달받은 props에 따라 다르게 렌더링

// 3. 컴포넌트 간 통신
// Props는 부모와 자식 간의 데이터 흐름을 가능
// : 단방향 데이터 흐름을 유지하면서도 컴포넌트 간의 명확한 데이터 전달을 보장

//? 단일 Props 전달
// : 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달할 때 사용
// - props의 경우 자식 컴포넌트에서 읽기 전용(read-only)으로 사용
// 컴포넌트 내부에서는 수정 불가

// 타입 별칭: 해당 데이터가 객체!
type DataType = {
  name: string;
};

//? 자식 컴포넌트
// : 부모 컴포넌트로부터 데이터를 받아 출력
function Data(props: DataType) {
  // props는 객체값
  return <div>안녕하세요, {props.name}님</div>;
}

//? 여러 개의 Props 전달과 비구조화 할당
// 비구조화 할당(구조 분해)
// : 객체나 배열에서 해당 묶음 구조를 풀이해서 작성

type HelloType = {
  name: string;
  color: string;
};

function Hello({ name, color }: HelloType) {
  return <div style={{ color: color }}>안녕하세요, {name}님</div>
}

//? defaultProps로 기본값 설정
// : 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값 설정
// : 컴포넌트명.defaultProps = { 기본속성: '기본속성값' }

Hello.defaultProps = {
  name: '등록되지않은고객'
}

//? Props.children
// : 컴포넌트 태그 사이에 위치한 '내용'을 전달 받기 위해 사용되는 props

type ChildrenType = {
  // ReactNode: React 내의 HTML 요소들 + 사용자 정의 컴포넌트
  children: React.ReactNode;
}

// 다른 컴포넌트를 감싸는 Wrapper 컴포넌트
// React.FC
// : 해당 컴포넌트가 React의 기능 컴포넌트 임을 명시, ChildrenType 타입의 props를 전달받음을 명시
const Wrapper: React.FC<ChildrenType> = ({ children }) => {

  const style = {
    border: '2px solid black',
    padding: '16px'
  }

  return (
    <div style={style}>
      {/* 
      UI 컴포넌트 또는 HTML 요소가 담김 
      >> 단일 태그 컴포넌트로 사용 X
        : 열리고 닫히는 태그 사이에 내용으로 
          Node 요소(컴포넌트)가 포함되어 있어야 함!
      */}
      {children}
    </div>
  )
};

// 부모 컴포넌트
// : 자식 컴포넌트의 속성으로 데이터 전달
export default function Props01() {
  return (
    // 자식 컴포넌트 호출 >> 자식 컴포넌트에게 필요한 props를 전달!
    <Wrapper>
      <Data name="이도경" />
      <Hello name="이승아" color="pink" />
      <Hello color="orange" />
    </Wrapper>
  );
}

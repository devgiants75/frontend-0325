import React from 'react'

//! Context API 란?
// : React의 애플리케이션에서 "전역적"으로 데이터를 관리할 수 있는 기능
// : React에서 제공하는 기능
// >> 컴포넌트 트리 전체에 걸쳐서 데이터를 효율적으로 전달 가능
// EX) 사용자의 로그인 상태, 테마 설정, 언어 설정 등 

//! Context API의 주요 구성 요소
//? 1) Context 생성 - React.createContext
// - 데이터를 공유하고자 하는 범위에 대한 Context를 생성
// : 해당 객체는 Provider와 Consumer 컴포넌트를 포함

//? 2) Provider
// - Context 객체로부터 생성된 컴포넌트
// : Context를 구독하는 컴포넌트들에게 context의 변화를 알림
// : Provider는 value 속성을 통해 자식 컴포넌트에게 데이터를 전달

//? 3) Consumer
// : Provider로부터 데이터를 받아 사용하는 컴포넌트
// : Context 변화를 구독하는 컴포넌트
// - React에서는 useContext 훅을 사용하여 이 데이터에 접근하는 것이 일반적

//& Context API를 사용한 '사용자 로그인 상태 관리'

//! 사용자 정보를 위한 인터페이스 정의


//! Context에서 사용할 값의 타입 정의
// : Context가 다룰 값의 타입을 정의


//# Context 생성 및 초기값 설정
// : createContext를 사용하여 Context 생성

//# UserProvider 컴포넌트 정의

//! Navbar 컴포넌트

//! Profile 컴포넌트
// : Consumer

export default function ContextApi01() {
  return (
    <div>

    </div>
  )
}
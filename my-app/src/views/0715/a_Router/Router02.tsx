import React from 'react'
import { Link, NavLink } from 'react-router-dom'

//! 리액트 라우터 - 네비게이션 / 링크

//? 1. Link
// : HTML의 a태그와 유사하게 동작
// : to props가 필수값 - 네비게이션 대상 URL을 지정
// >> 페이지를 새로 고침하지 않고 라우트 변경

//? 2. NavLink
// : Link와 유사하게 동작
// : 현재 경로와 일치하는 경우 스타일 또는 클래스 추가
// >> 활성 링크를 시각각적으로 구분 가능

export default function Router02() {
  return (
    <div>
      <h2>Link 컴포넌트 사용법</h2>
      <Link to='/'>Home</Link>
      <Link to='/0715/router02'>현재 컴포넌트로 이동</Link>
      
      <hr />
      <h2>NavLink 컴포넌트 사용법</h2>
      <NavLink
        to='/0709'
        style={{
          fontSize: '30px',
          border: '1px solid black',
          padding: '10px'
        }}
      >
        0709
      </NavLink>
      <NavLink
        to='/0710'
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'pink',
          backgroundColor: isActive ? 'yello' : 'black'
        })}
      >
        0710
      </NavLink>
      
    </div>
  )
}
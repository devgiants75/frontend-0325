import React from 'react'

//! 배열 메서드
// :배열을 조작하고 데이터를 처리하는 JS의 기능
// >> 상태를 관리하고 렌더링을 효율적으로 처리

//! 배열 메서드 종류
// map, filter, sort, push, concat 메서드 등

//# 1. map 메서드
// : 배열의 각 요소를 변환하여 새로운 배열을 생성
// : 주로 React 컴포넌트에서 배열을 렌더링할 때 사용

const users = [
  { id: 1, name: '이승아' },
  { id: 2, name: '이도경' },
  { id: 3, name: '이지희' }
];

// Map 컴포넌트


//# 2. filter 메서드
// : 배열의 요소를 조건에 따라 필터링하여 새로운 배열 생성

const products = [
  { id: 1, name: '노트북', inStock: true },
  { id: 2, name: '핸드폰', inStock: false },
  { id: 3, name: '태블릿', inStock: true }
];

// Filter 컴포넌트

export default function Array01() {
  return (
    <div>
    </div>
  )
}

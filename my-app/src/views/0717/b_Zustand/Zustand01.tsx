import React from 'react'
import { create } from 'zustand';

//! Zustand 상태관리 프로그램
// : React Hooks을 기반
// : 최소한의 API를 사용하여 상태를 쉽게 생성하고 접근
// >> 상태를 단일 저장소 store에 저장
//    , 해당 store를 가져와서 컴포넌트에 자동으로 업데이트 전달

//? Zustand의 장점
// - 간결성: 최소한의 코드로 상태 관리 가능
// - 유연성: 여러 상태 조각들을 하나의 저장소에서 결합

//? Zustand 사용법
// 설치
// : npm install zustand

//? Zustand 예시 코드
// - 폴더/파일 단위 분리 X

//# 1. store 생성 (전역 상태가 담길 저장소)

// store
// : 애플리케이션의 상태를 저장하는 곳
// : create 함수를 사용하여 생성
// >> 애플리케이션의 상태와 상태를 업데이트 하는 함수들이 포함

//* State의 타입 선언
// : 카운트 상태 저장
interface CounteState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

//* create 함수의 파라미터에 함수 형태로 state의 초기값과 state를 변경하는 함수를 선언

// 1) set 함수
// : Zustand 스토어의 상태를 업데이트 하는 데 사용
// : 해당 함수는 '이전 상태를 인수로 받아 새로운 상태를 반환하는 함수'를 인자로 받음

// 2) state
// : Zustand 스토어의 현재 상태
// : set 함수 내에서 이전 상태에 접근할 때 사용
// EX) state.count는 현재 count 값에 접근하는 방법

// 스토어 명명방법
// 사용자 데이터 전역 상태 관리: useUserStore
// 제품 데이터 전역 상태 관리: useProductStore
// 장바구니 전역 상태 관리: useCartStore

// 스토어 파일 명명 방법
// 사용자 데이터 전역 상태 관리: user.store.ts
// 제품 데이터 전역 상태 관리: product.store.ts
// 장바구니 전역 상태 관리: cart.store.ts

export const useCountStore = create<CounteState>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 }))
}));

// 외부 컴포넌트를 대체
function Component () {
  const { count, decrement } = useCountStore();

  return (
    <>
      <p>{count}</p>
      <button onClick={decrement}>감소</button>
    </>
  )
}

//! 메인 컴포넌트
export default function Zustand01() {
  const { count, increment } = useCountStore();

  // 스토어의 원하는 특정 부분만 선택하여 사용
  const otherCount = useCountStore(state => state.count);

  const otherDecrement = useCountStore(state => state.decrement);

  return (
    <div>
      <Component />

      <p>{count}</p>
      <p>{otherCount}</p>

      <button onClick={increment}>증가</button>
      <button onClick={otherDecrement}>감소</button>
    </div>
  )
}
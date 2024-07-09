import React from 'react'; 

//! 1. Custom Hook이란?
// React의 기본 Hook (useState, useEffect 등)을 사용하여 작성되는, 재사용 가능한 로직의 모음

// - 컴포넌트 간에 상태 로직을 쉽게 공유 가능
// >> 복잡한 컴포넌트를 더 깔끔하고 관리하기 쉬운 코드로 분리 가능

//! 2. Custom Hook 만들기
// Custom Hook은 보통 use로 시작하는 함수로 정의
// : 해당 함수 내에서 다른 Hook을 호출하고, 그 결과를 반환

//? useCounter 훅
// : 초기값을 매개변수로 받고, 카운터를 증가, 감소시키고 초기화하는 함수들을 반환

export function useCounter() {

}

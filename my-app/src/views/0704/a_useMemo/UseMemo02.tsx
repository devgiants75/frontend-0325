import React from 'react'

//! 사용자의 입력에 따라 필터링된 리스트를 표시하는 간단한 컴포넌트를 구현
// : 사용자의 입력이 변경될 때마다 리스트가 필터링되는 비용이 큰 작업을 useMemo를 사용하여 최적화


// 큰 리스트를 생성하는 Array 인스턴스 생성
// Array.from은 배열로 부터 새로운 Array 인스턴스를 생성

// - Array.from 메서드는 배열 또는 유사 배열 객체(예: 문자열, NodeList 등)를 새로운 배열 인스턴스로 변환할 때 사용

export default function UseMemo02() {
  
  
  //? 1. useMemo를 사용하지 않고 단순히 필터링 로직을 변수에 저장

  //? 2. useMemo를 사용하여 리스트 필터링 로직을 메모이제이션
  // : 필터링 로직은 비용이 큰 작업이므로, filter 상태가 변경될 때만 다시 계산

  return (
    <div>
      {/* 입력 필드를 렌더링하고, 사용자 입력을 통해 filter 상태를 업데이트합니다. */}
      
    </div>
  );
}

/*
! useMemo와 useEffect의 차이점

1. 목적:

useMemo: 값의 계산을 메모이제이션하여 성능 최적화
useEffect: 부수 효과 실행

2. 실행 시점:

useMemo: 컴포넌트 렌더링 중에 실행
useEffect: 컴포넌트가 렌더링된 후에 실행

3. 사용 사례:

useMemo: 비용이 큰 계산을 피하기 위해 값 메모이제이션
useEffect: 데이터 가져오기, 이벤트 리스너 설정 등 부수 효과 처리

*/
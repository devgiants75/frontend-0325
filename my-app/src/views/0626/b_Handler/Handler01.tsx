import React from 'react'

/*
! React 이벤트 핸들러란?
: 사용자와의 상호작용을 처리하기 위한 함수

? 2. 이벤트 핸들러의 사용 목적
- 사용자 인터페이스에서 발생하는 이벤트에 반응하여 동작을 정의
- 사용자의 입력을 처리하고 이에 따른 상태 변화를 관리
*/

/*
- 버튼 클릭 시 일어날 로직 정리
  : 버튼 클릭 시 console 창에 '버튼을 클릭하였습니다.' 출력

? 3. 이벤트 핸들러 구현 방법
*/

export default function Handler01() {

  // # 3-1. 컴포넌트 내부에서 함수 정의

  // 1. 보통 (이벤트를 실행시킬 요소가 담긴)컴포넌트 내부에서 정의
  // 2. handle 키워드로 함수가 시작 + 이벤트 이름을 작성
  //  >> 관례) 이벤트 이름을 따라 작성
  //          onChange={handleChange}
  //          onClick={handleClick}

  //? 함수 정의
  function handleClick() {
    console.log('버튼을 클릭하였습니다.');
  }

  return (
    <div>
      {/* 
      - 버튼 요소에 prop 속성으로 이벤트 '전달'

      - 이벤트 핸들러에 전달된 함수는 호출되지 않아야 한다!!!!!
        : 함수를 호출할 경우 화면이 렌더링 되는 즉시 함수가 실행
      */}
      <button onClick={handleClick}>
        클릭
      </button>

      {/* 
        # 3-2. 인라인 함수 정의 
        : JSX 내부에서 함수를 직접 정의하여 이벤트 핸들러로 전달하는 방식
        : 함수 이름을 따로 정의하지 않아도 가능
      */}
      <button onClick={function () {
        console.log('TSX(JSX) 내에서 이벤트 핸들러를 인라인으로 정의');
      }}>
        클릭2
      </button>

      {/* 
        # 3-3. 화살표 함수 사용
        : 화살표 함수를 사용하여 간결하게 이벤트 핸들러를 정의하는 방식
      */}
      <button onClick={() => {
        console.log('화살표 함수를 사용하여 간결하게 작성');
      }}>
        클릭3
      </button>
    </div>
  )
}

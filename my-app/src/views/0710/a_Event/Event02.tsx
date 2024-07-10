import React from 'react'

//! 전통적인 이벤트 핸들링
// 직접 바인딩: 전통적인 HTML과 JavaScript에서는 이벤트 핸들러를 직접 DOM 요소에 바인딩

document.getElementById('button')?.addEventListener('click', function() {
  alert('버튼이 클릭되었습니다.');
});

//! React의 이벤트 핸들링
// - 이벤트 위임: 모든 이벤트를 문서의 최상위에서 한 번에 처리
// >> 메모리와 성능을 최적화
// - 자동 클리닝: 합성 이벤트는 React가 관리하므로, 컴포넌트가 언마운트될 때 이벤트 리스너를 자동으로 정리

//? 합성 이벤트의 구조
// : 합성 이벤트는 모든 브라우저에서 일관된 속성과 메서드를 제공

// - type: 이벤트의 타입을 나타냄 (click, change, submit 등)
// - target: 이벤트가 발생한 DOM 요소를 가리킴
// - currentTarget: 이벤트 핸들러가 연결된 DOM 요소를 가리킴
// - timestamp: 이벤트가 생성된 시간을 나타냄

// - preventDefault(): 이벤트의 기본 동작을 취소
//   EX) submit 동작에 주로 사용
// - stopPropagation(): 이벤트의 전파를 중지

export default function Event02() {

  const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {

    // 이벤트 형 변환
    // >> 합성 이벤트인 e가 이벤트 형식을 EventTarget으로 지정
    //    : e.target을 HTML 요소 타입으로 변환
    const target = e.target as HTMLElement;

    console.log(`이벤트 타입: ${e.type}`);
    console.log(`현재 이벤트가 등록된 객체: ${e.currentTarget.tagName}`);
    console.log(`이벤트가 실제 일어난 요소: ${target.tagName}`);
  }

  return (
    <div onClick={handleDivClick} style={{ padding: '10px', border: '1px solid black' }}>
      <button>
        버튼
      </button>
      <p>버튼을 클릭해주세요.</p>
    </div>
  )
}

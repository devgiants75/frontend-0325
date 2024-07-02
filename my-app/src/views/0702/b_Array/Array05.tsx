import React from "react";

//! useRef: DOM 선택
// : 컴포넌트 내에서 조회 및 수정할 수 있는 변수 관리

//? 컴포넌트 내부에서 배열을 선언하여 사용 시
// : 배열에 새 항목을 추가할 때, 그 항목의 고유 id를 관리하는 용도

// '각' 아이템을 보여주는 컴포넌트
// : 수정과 삭제 기능은 상위 컴포넌트에서 처리
const ItemComponent = () => {
  return (
    <div>
    </div>
  );
};


const ItemList = () => (
  <>
  </>
);

// 기존 장바구니 항목
const initialItems = [
  { id: 1, name: "사과", amount: 2 },
  { id: 2, name: "칸쵸", amount: 1 },
  { id: 3, name: "우유", amount: 3 },
];

export default function Array05() {

  // 다음 아이템의 id 관리를 위한 useRef 사용
  // : 컴포넌트가 리렌더링 되어도 해당 값이 유지


  return (
    <div>
      
    </div>
  );
}

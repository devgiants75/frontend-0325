import React, { useRef, useState } from "react";

//! useRef: DOM 선택
// : 컴포넌트 내에서 조회 및 수정할 수 있는 변수 관리

//? 컴포넌트 내부에서 배열을 선언하여 사용 시
// : 배열에 새 항목을 추가할 때, 그 항목의 고유 id를 관리하는 용도

interface Item {
  id: number;
  name: string;
  amount: number;
}

interface ItemProps {
  item: Item;
  onEdit: (id: number, amount: number) => void;
  onRemove: (id: number) => void;
}

// '각' 아이템을 보여주는 컴포넌트
// : 수정과 삭제 기능은 상위 컴포넌트에서 처리
const ItemComponent = ({ item, onEdit, onRemove }: ItemProps) => {
  return (
    <div>
      <strong>{item.name}</strong>
      <input
        type="number"
        value={item.amount}
        onChange={(e) => onEdit(item.id, parseInt(e.target.value))}
      />
      <button onClick={() => onRemove(item.id)}>삭제</button>
    </div>
  );
};

interface ItemListProps {
  items: Item[],
  onEdit: (id: number, amount: number) => void;
  onRemove: (id: number) => void;
}

// 아이템 목록을 보여주는 컴포넌트
const ItemList = ({ items, onEdit, onRemove }: ItemListProps) => (
  <>
    {items.map((item) => (
      <ItemComponent item={item} onEdit={onEdit} onRemove={onRemove} />
    ))}
  </>
);

// 기존 장바구니 항목
const initialItems = [
  { id: 1, name: "사과", amount: 2 },
  { id: 2, name: "칸쵸", amount: 1 },
  { id: 3, name: "우유", amount: 3 },
];

export default function Array05() {
  const [items, setItems] = useState<Item[]>(initialItems);

  // 다음 아이템의 id 관리를 위한 useRef 사용
  // : 컴포넌트가 리렌더링 되어도 해당 값이 유지
  const nextId = useRef<number>(4);

  // 새로운 아이템 생성 함수
  const onCreate = (name: string, amount: number) => {
    const newItem = { id: nextId.current, name, amount };

    setItems([...items, newItem]);
    nextId.current += 1;
  }

  // 수량 수정 함수
  const handleAmountEdit = (id: number, amount: number) => {
    setItems(
      items.map((item) => (
        item.id === id ? { ...item, amount } : item
      ))
    );
  };

  // 아이템 삭제 함수
  const handleItemRemove = (id: number) => {
    setItems(
      items.filter((item) => item.id !== id)
    );
  };


  return (
    <div>
      <button onClick={() => onCreate("새 항목", 1)}>새 물품 추가</button>
      <ItemList
        items={items}
        onEdit={handleAmountEdit}
        onRemove={handleItemRemove}
      />
    </div>
  );
}

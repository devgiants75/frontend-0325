import React from 'react'

//! 배열 렌더링 (추가, 조회, 수정, 제거 - CRUD 기능)

// 동적인 배열 렌더링
// : JS 내장 함수 map/filter 사용

//? 장바구니 구현

interface Item {
  id: number;
  name: string;
  amount: number;
}

// 기존 장바구니 항목
const initialItems: Item[] = [
  { id: 1, name: '사과', amount: 2 },
  { id: 2, name: '칸쵸', amount: 1 },
  { id: 3, name: '우유', amount: 3 }
]

interface ItemsType {
  item: Item;
}

// 장바구니 항목 1개
function Item ({ item }: ItemsType) {
  return (
    <div>
      <p>
        <b>{item.name}</b>
        (amount: {item.amount})
      </p>
    </div>
  )
}

export default function Array04() {
  return (
    <>
      {/*
        <Item item={initialItems[0]} />
        <Item item={initialItems[1]} />
        <Item item={initialItems[2]} />
      */}

      {/*
        {initialItems.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      */}

      {initialItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </>
  )
}

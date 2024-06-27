import React, { useState } from "react";

//! useState를 사용한 다양한 타입의 상태 관리

interface User {
  id: number;
  name: string;
}

export default function State06() {
  //? 1. 숫자형(number)
  const [count, setCount] = useState<number>(0);

  //? 2. 문자열(string)
  const [name, setName] = useState<string>('');

  //? 3. 논리형(boolean)
  const [isVisiable, setIsVisiable] = useState<boolean>(false);

  //? 4. 객체(Object)
  const [user, setUser] = useState<User>({
    id: 0,
    name: ''
  })

  //? 5. 배열(Array)
  const [items, setItems] = useState<string[]>([]);

  // ---------------------------- //
  // 객체 타입의 user에 대한 input 관리 함수
  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    })
  }

  // 배열에 대한 요소 증가 함수
  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;

    setItems([...items, newItem]);
  }

  return (
    <div style={{ margin: "20px", border: "1px solid black" }}>
      <h5>여러 타입의 상태 관리</h5>

      {/* 숫자형: 카운터 증가 버튼 */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>증가 버튼</button>

      {/* 문자열: 사용자 이름 입력 필드 */}
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={(e) => {
        setName(e.target.value)
      }}/>
      
      {/* 논리형: 토글 버튼 */}
      <p>Visiable: {isVisiable ? 'Yes' : 'No'}</p>
      <button onClick={() => setIsVisiable(!isVisiable)}>토글 버튼</button>

      {/* 
      ! JSON.stringify 사용
      >> 상태 값이 객체나 배열일 때, 해당 값을 쉽게 읽을 수 있는 문자열로 변환하여 화면에 출력
      */}

      {/* 객체: 사용자 정보 수정 입력 필드 */}
      <p>User: {JSON.stringify(user)}</p>
      <input 
        type="text" 
        name="name"
        value={user.name}
        onChange={handleUserChange}
      />

      {/* 배열: 배열 요소 추가 */}
      <p>Items: {JSON.stringify(items)}</p>
      <button onClick={addItem}>아이템 추가</button>
    </div>
  );
}

import React from 'react'
import { UserType } from './StateProps02';

// Props에 대한 타입 정의
interface ChildComponentProps {
  userInfo: UserType;
  onUpdate: (newInfo: UserType) => void;
}

export default function ChildProps02({ userInfo, onUpdate }: ChildComponentProps) {

  let newData: UserType = {
    username: '이승아',
    height: 169
  }

  const updateInfo = () => {
    // 부모로부터 전달받은 상태 업데이트를 사용
    onUpdate(newData);
  }

  return (
    <>
      <p>사용자 이름: {userInfo.username}</p>
      <p>사용자 이름: {userInfo.height}</p>
      <button onClick={updateInfo}>사용자 정보 업데이트</button>
    </>
  )
}

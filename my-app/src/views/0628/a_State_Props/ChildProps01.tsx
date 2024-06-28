import React from 'react'
import { UserType } from './StateProps01';

type ChildProps = {
  userInfo: UserType | undefined;
}

//! 자식 컴포넌트
// : 부모 컴포넌트에서 내려받은 속성을 사용하여 데이터를 표시
const ChildProps01 = ({ userInfo }: ChildProps) => {
  return (
    <>
      {/* userInfo의 값은 undefined 또는 UserType */}
      {userInfo && (
        // JSX 내에서 소괄호 내에 UI 구현부는 비워져 있는 경우 오류
        <>
          <p>사용자 이름: {userInfo.userName}</p>
          <p>사용자 키: {userInfo.height}</p>
        </>
      )}
    </>
  )
}

export default ChildProps01;
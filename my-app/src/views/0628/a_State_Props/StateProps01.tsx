import React, { useState } from 'react'
import ChildProps01 from './ChildProps01';

//! 컴포넌트 트리 안의 상태
//? 상태를 컴포넌트 트리의 아래로 내려보내기
// : 부모 컴포넌트에서 자식 컴포넌트로 상태 전달

//? 상태(State) VS 속성(Props)

// 상태
// : 컴포넌트 '내부'에서 관리되는 데이터
// : 상태가 변경되면 렌더링을 유발(업데이트)

// 속성
// : 부모 컴포넌트('외부')로 부터 받은 데이터
//   >> 부모 컴포넌트로부터 자식 컴포넌트로 전달되는 데이터
// : '읽기 전용': 자식 컴포넌트에서 수정 X

//# 사용자 타입 정의
export interface UserType {
  userName: string;
  height: number;
}

//# 초기 값 설정
const initialValue: UserType = {
  userName: '이승아',
  height: 169
}

//! 부모 컴포넌트
export default function StateProps01() {
  // 사용자의 입력을 추적하는 상태
  const [userInfo, setUserInfo] = useState<UserType>(initialValue);

  // 최종 제출된 값에 대한 상태
  // : 자식 컴포넌트로 전달할 최종 제출 값
  const [submittedData, setSubmittedData] = useState<undefined | UserType>();

  //? 비구조화 할당
  const { userName, height } = userInfo;

  // 입력 값 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // [name]: value 
    // >> name.value 동일 (객체값 가져오는 방법)

    setUserInfo({
      ...userInfo,
      // name: '이승아'
      // height: 169

      // 이벤트가 발생된 name의 키를 가진 값을 value로 지정
      [name]: value
      // 예) 이름 input에 변경이 발생하는 경우 - [userName]: '이도경'
    })
  }

  // 제출 버튼 클릭 핸들러
  const handleSubmit = () => {
    // submittedData에 현재 userInfo를 값으로 업데이트
    setSubmittedData(userInfo);
  }

  return (
    <>
      <input 
        type="text" 
        placeholder='이름을 입력하세요.'
        value={userName}
        name='userName'
        onChange={handleInputChange}
      />
      <input 
        type="text" 
        placeholder='키를 입력하세요.'
        value={height}
        name='height'
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>확인</button>
      {/* 자식 컴포넌트에 userInfo라는 props로 최종 제출 값을 전달 */}
      <ChildProps01 userInfo={submittedData} />
    </>
  )
}

import React from "react";
/*
! Props를 사용하는 사용자 프로필 컴포넌트 만들기
? 요구 사항
- UserProfile 컴포넌트를 만드세요.
- 이 컴포넌트는 user 객체를 props로 받아야 하며, user 객체는 name, email, age 속성을 포함해야 합니다.
- 이 컴포넌트는 사용자의 이름(h1), 이메일(p), 나이(p)를 보여주는 간단한 UI를 렌더링해야 합니다.

! 조건부 렌더링을 사용하여 할인 메시지 표시하기
? 요구 사항
- DiscountMessage 컴포넌트 생성
- isDiscountActive라는 boolean props를 전달 받기
- 할인이 활성화되어 있으면 "할인 중!"이라는 메시지를 표시하고, 그렇지 않으면 "현재 할인되지 않음."이라는 메시지를 표시 
>> 삼항 연산자를 사용

! 다중 조건 필터링 및 정렬
? employees 배열에는 여러 직원의 정보가 저장
- role이 'developer'이고, experience가 3년 이상인 직원을 찾아 그들의 이름과 경력을 <li>로 표시하되, 경력에 따라 내림차순으로 정렬
- 각 <li>에는 직원의 id를 키로 사용

const employees = [
  { id: 1, name: '이승아', role: 'developer', experience: 5 },
  { id: 2, name: '정주연', role: 'designer', experience: 2 },
  { id: 3, name: '전예찬', role: 'developer', experience: 3 },
  { id: 4, name: '이도경', role: 'manager', experience: 7 },
  { id: 5, name: '정혜윤', role: 'developer', experience: 1 }
];

*/

//! User 인터페이스를 정의
interface User {
  name: string;
  email: string;
  age: number;
}

//! UserProfile 컴포넌트의 props 인터페이스를 정의
// : // User 타입의 user 객체를 props로 받음
interface UserProfileProps {
  user: User;
}

//! DiscountMessage 컴포넌트의 props 인터페이스를 정의
// : // 할인이 활성화되어 있는지를 나타내는 boolean 값
interface DiscountMessageProps {
  isDisCountActive: boolean;
}

//! UserProfile 컴포넌트를 정의
function UserProfile({ user }: UserProfileProps) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  )
}

//! DiscountMessage 컴포넌트를 정의
function DiscountMessage({ isDisCountActive }: DiscountMessageProps) {
  return (
    <div>
      {/* 
        삼항 연산자를 사용 >> 할인 메시지를 조건부로 표시 
        - true: strong 태그(할인 중!!!)
        - false: 일반 텍스트 값 - 문자열 (현재 할인되지 않음)
      */}
      { isDisCountActive ? <strong>할인 중!!!</strong> : "현재 할인되지 않음." }
    </div>
  )
}

//! FilteredEmployeeList 컴포넌트를 정의
function FilteredEmployeeList() {
  const employees = [
    { id: 1, name: '이승아', role: 'developer', experience: 5 },
    { id: 2, name: '정주연', role: 'designer', experience: 2 },
    { id: 3, name: '전예찬', role: 'developer', experience: 3 },
    { id: 4, name: '이도경', role: 'manager', experience: 7 },
    { id: 5, name: '정혜윤', role: 'developer', experience: 1 }
  ];

  //? role이 'developer'이고 experience가 3년 이상인 직원들을 필터링하고, experience 기준으로 내림차순 정렬
  // : filter, sort, map 사용
  const filteredAndSorted = employees
    .filter(employee => 
      employee.role === 'developer' && employee.experience >= 3)
    .sort((a, b) => b.experience - a.experience)
    .map(employee => (
      <li key={employee.id}>{employee.name} ({employee.experience})</li>
    ));

  //? 필터링 및 정렬된 직원 목록을 ul 태그로 반환
  return <ul>{filteredAndSorted}</ul>;
}

//! Practice0625 컴포넌트를 정의
export default function Practice0625() {
  //? UserProfile 컴포넌트에 전달할 user 객체를 정의
  const user: User = {
    name: '이승아',
    email: 'abc@example.com',
    age: 50
  }

  return (
    <div>
      {/* UserProfile 컴포넌트를 렌더링하고 user props를 전달 */}
      <UserProfile user={user} />

      <hr /> {/* 구분선 */}
      {/* DiscountMessage 컴포넌트를 렌더링하고 isDiscountActive props를 true로 전달 */}
      <DiscountMessage isDisCountActive={true} />

      <hr /> {/* 구분선 */}
      {/* FilteredEmployeeList 컴포넌트를 렌더링 */}
      <FilteredEmployeeList />
    </div>
  )
}

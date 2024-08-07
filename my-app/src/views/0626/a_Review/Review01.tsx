import React from 'react'

/*
! 일기 앱 구현
- DiaryEntry 컴포넌트
  : Props로 date(string), content, mood(Mood) 받음
    >> 일기의 날짜, 내용, 기분을 보여주는 컴포넌트 (h3, p, p)

- DiaryList 컴포넌트
  : 여러 개의 DiaryEntry 컴포넌트를 렌더링
  : 전체 일기 목록(entries - DiaryEntryProps가 하나의 일기)과 
    현재 필터링 된 기분 상태를 props로 받음

  : 선택된 기분 상태에 따라 일기를 필터링하여 표시
    >> filter / map을 사용하여 일기 목록을 처리

- App 컴포넌트(Review01)
  : 전체 프로젝트의 루트 컴포넌트
  : 일기 목록과 현재 선택된 기분 필터 상태를 관리 (>> useState 학습)
  : 조건부 렌더링을 사용하여 필터 옵션을 표시
*/

//? 타입 정의
// 1) DiaryEntryProps

// 2) Mood >> '좋음' 또는 '나쁨' 또는 '보통' 중 하나


//& DiaryEntry
const DiaryEntry = () => {
  return (
    <div>

    </div>
  );
};

//& DiaryList
const DiaryList = () => {
  return (
    <div>
      {/* 배열을 렌더링할 때 각각의 고유값을 전달 key값 */}

    </div>
  );
}


export default function Review01() {
  const entries = [
    {
      date: '2024-04-20', content: '오늘 비가 옵니다.', mood: '좋음'
    },
    {
      date: '2024-04-19', content: '피자를 먹었습니다.', mood: '좋음'
    },
    {
      date: '2024-04-18', content: '평범한 하루였습니다.', mood: '나쁨'
    },
    {
      date: '2024-04-17', content: '평범한 하루였습니다.', mood: '나쁨'
    },
  ]; 

  return (
    <div>
      <h2>일기 앱</h2>
      {/* <DiaryList entries={entries} /> */}
    </div>
  )
}

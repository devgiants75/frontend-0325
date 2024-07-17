import React from "react";
import ThemeProvider, { ThemeConsumer } from "./a_ContextApi/ThemeProvider";
import ContextApi01 from "./a_ContextApi/ContextApi";
import Zustand01 from "./b_Zustand/Zustand01";
import Zustand02 from "./b_Zustand/Zustand02";

/*
! 전역 상태 관리 (Global State Management)
전역 상태 관리는 애플리케이션의 다양한 컴포넌트나 페이지에서 공유될 수 있는 데이터를 중앙에서 관리하는 방식

사용 시기: 사용자 로그인 상태, 프로필 정보, 설정 등 앱 전반에서 공유되어야 하는 데이터를 관리할 때 사용

>> 이 데이터는 "클라이언트 사이드"에서만 유지되며 페이지를 새로고침하면 초기화

장점: 여러 컴포넌트 간 데이터 공유와 상태 업데이트가 용이
단점: 페이지 리로드 시 상태 정보가 사라짐

! localStorage
브라우저가 제공하는 저장소로, 키-값 쌍으로 데이터를 저장
: localStorage에 저장된 데이터는 브라우저 세션이 종료되어도 유지

사용 시기: 사용자 설정, 로그인 상태 유지(예: "로그인 상태 유지" 옵션), 자동 로그인 등 장기간 유지해야 하는 정보를 저장할 때 사용

장점: 페이지를 새로고침하거나 브라우저를 재시작해도 데이터가 유지
단점: 보안에 취약할 수 있으므로 중요한 정보(비밀번호, 개인 정보 등)를 저장하기에는 부적합

+) 모든 데이터가 클라이언트 사이드에 저장되므로 서버와 동기화가 필요할 때는 추가 로직이 필요
*/

export default function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0717
      </h1>

      <h2>1. Context Api</h2>
      <ThemeProvider>
        <ThemeConsumer />
        <ContextApi01 />
      </ThemeProvider>

      <hr />
      <h2>2. Zustand</h2>
      <Zustand01 />
      <Zustand02 />

    </div>
  );
}

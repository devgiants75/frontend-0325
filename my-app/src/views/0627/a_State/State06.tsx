import React, { useState } from "react";

//! useState를 사용한 다양한 타입의 상태 관리

export default function State06() {
  //? 1. 숫자형(number)

  //? 2. 문자열(string)

  //? 3. 논리형(boolean)

  //? 4. 객체(Object)

  //? 5. 배열(Array)

  const handleUserChange = () => {


  }

  return (
    <div style={{ margin: "20px", border: "1px solid black" }}>
      <h5>여러 타입의 상태 관리</h5>

      {/* 숫자형: 카운터 증가 버튼 */}

      {/* 문자열: 사용자 이름 입력 필드 */}
      
      {/* 논리형: 토글 버튼 */}

      {/* 
      ! JSON.stringify 사용
      >> 상태 값이 객체나 배열일 때, 해당 값을 쉽게 읽을 수 있는 문자열로 변환하여 화면에 출력
      */}

      {/* 객체: 사용자 정보 수정 입력 필드 */}

      {/* 배열: 배열 요소 추가 */}
    </div>
  );
}

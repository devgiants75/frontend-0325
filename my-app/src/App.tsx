import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

// 폴더명까지만 명시하는 경우 해당 폴더의
// , index라는 이름의 파일을 가져옴
import Index0624 from './views/0624';

function App() {
  return (
    <>
      {/* 
        npm run start
          기본 경로 - localhost:3000
          
          Route의 path속성으로 지정된 경로를 element가 렌더링

          npm run start의 첫 번째 렌더링 페이지의 경우: 경로를 /로 전달
          (a태그의 href="#"와 유사)
      */}


      {/* Routes 태그 */}
      <Routes>
        <Route path="/0624" element={<Index0624 />} />
      </Routes>
    </>
  )
}

export default App;

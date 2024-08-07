import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GlobalStyles from './views/0718/a_Styles/styles/GlobalStyles';

import { Route, Routes } from "react-router-dom";

// 폴더명까지만 명시하는 경우 해당 폴더의
// , index라는 이름의 파일을 가져옴
import Components from "./components/Components";

import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import Index0621 from './views/0621';
import Index0624 from './views/0624';
import Index0625 from './views/0625';
import Index0626 from './views/0626';
import Index0627 from './views/0627';
import Index0628 from './views/0628';
import Index0701 from './views/0701';
import Index0702 from './views/0702';
import Index0703 from './views/0703';
import Index0704 from './views/0704';
import Index0705 from './views/0705';
import Index0708 from './views/0708';
import Index0709 from './views/0709';
import Index0710 from './views/0710';
import Index0715 from './views/0715';
import Index0716 from './views/0716';
import Index0717 from './views/0717';
import Index0718 from './views/0718';
import JsonServer from './mocks/MockServer';
import MainServer from './mocks/Main';

import Projects from './views/projects';
import Examples from './examples/date-picker';
import Nav from './examples/nav';
import Drawer from './examples/drawer';

function App() {

  return (
    <>
      <GlobalStyles />
      <h1>Global Styles 적용</h1>
      <div className="globalBox">글로벌 스타일 박스</div>
      {/* 
        Routes 태그 외부에 있는 코드의 경우
        : URL 경로와 상관없이 렌더링

        Router의 Link 태그
        : Link 컴포넌트 
          - 라우터에서 페이지를 불러오는 방식
          - a태그와 유사하게 경로를 지정
            (페이지를 새로고침 하지 X 
              - SPA 특성을 사용)

          - to 속성을 사용하여 이동하고자 하는 경로를 지정


        npm run start
          기본 경로 - localhost:3000
          
          Route의 path속성으로 지정된 경로를 element가 렌더링

          npm run start의 첫 번째 렌더링 페이지의 경우: 경로를 /로 전달
          (a태그의 href="#"와 유사)
      */}
      <Header />
      <NavigationBar />

      {/* Routes 태그 */}
      <Routes>
        <Route path="/components" element={<Components />} />

        <Route path="/0621" element={<Index0621 />} />
        <Route path="/0624" element={<Index0624 />} />
        <Route path="/0625" element={<Index0625 />} />
        <Route path="/0626" element={<Index0626 />} />
        <Route path="/0627" element={<Index0627 />} />
        <Route path="/0628" element={<Index0628 />} />
        <Route path="/0701" element={<Index0701 />} />
        <Route path="/0702" element={<Index0702 />} />
        <Route path="/0703" element={<Index0703 />} />
        <Route path="/0704" element={<Index0704 />} />
        <Route path="/0705" element={<Index0705 />} />
        <Route path="/0708" element={<Index0708 />} />
        <Route path="/0709" element={<Index0709 />} />
        <Route path="/0710" element={<Index0710 />} />
        <Route path="/0715/*" element={<Index0715 />} />
        <Route path="/0716/*" element={<Index0716 />} />
        <Route path="/0717" element={<Index0717 />} />
        <Route path="/0718" element={<Index0718 />} />
        
        <Route path="/json-server" element={<JsonServer />} />
        <Route path="/cart-app/*" element={<MainServer />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/drawer" element={<Drawer />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import BlogPosts from "./a_Router/BlogPosts";
import BlogPost from "./a_Router/BlogPost";

export default function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0716
      </h1>
      
      <nav>
        <ul>
          <li><Link to='/0716/posts'>posts</Link></li>
        </ul>
      </nav>

      <h2>1. React-Router-Dom</h2>
      <Routes>
        {/* 
          해당 컴포넌트의 경로에 추가되는 경로를 지정 
          : localhost:3000/0716  
        */}
        <Route path="/posts" element={<BlogPosts />} />
        <Route path="/posts/:postId" element={<BlogPost />} />
      </Routes>

    </div>
  );
}

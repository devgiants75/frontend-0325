import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import BlogPosts from "./a_Router/BlogPosts";
import BlogPost from "./a_Router/BlogPost";
import UserList from "./a_Router/UserList";
import UserDetail from "./a_Router/UserDetail";
import QueryParams01 from "./b_QueryParams/QueryParams01";
import QueryParams02 from "./b_QueryParams/QueryParams02";
import Axios01 from "./c_Axios/Axios01";
import Axios02 from "./c_Axios/Axios02";
import Axios03 from "./c_Axios/Axios03";
import SearchForm from "./z_Example/SearchForm";

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
          <li><Link to='/0716/posts'>Posts</Link></li>
          <li><Link to='/0716/users'>Users</Link></li>
          <li><Link to='/0716/search'>Search</Link></li>
          <li><Link to='/0716/product'>Product</Link></li>
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
        
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />

        <Route path="/search" element={<QueryParams01 />} />
        <Route path="/product" element={<QueryParams02 />} />

      </Routes>

      <Axios01 />
      <Axios02 />
      <Axios03 />

      <Routes>
      <Route path="/results" element={<SearchForm />} />
      <Route path="/results/:query" element={<SearchForm />} />
      </Routes>

    </div>
  );
}

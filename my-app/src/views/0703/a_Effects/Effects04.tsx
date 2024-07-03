import React, { useEffect, useState } from "react";

//! jsonplaceholder의 posts 데이터를 비동기 함수로 가져오기
// - 해당 상태를 관리
// - 화면에 렌더링

//? 1. 각각의 게시물 데이터 타입 정의
type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Effects04() {
  //? 게시물 상태 및 초기값 지정
  const [posts, setPosts] = useState<Post[]>([]);

  //? 로딩 & 에러 상태 관리
  // 로딩 중의 여부를 boolean으로 관리
  const [loading, setLoading] = useState<boolean>(false);

  // 에러 메시지가 존재하는 경우 string으로 관리 (에러가 발생하지 않으면 null)
  const [error, setError] = useState<string | null>(null);

  //? 검색 용어에 대한 상태 관리
  const [searchTerm, setSearchTerm] = useState<string>('');

  //? 데이터를 불러오는 비동기 함수
  // : 부수 효과
  async function fetchPosts() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      // response 응답의 코드가 200(성공)번대가 아닐경우
      if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
      }

      const data = await response.json();

      setPosts(data);
    } catch (error) {
      // Error 객체의 message(string값)을 가져오기
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  // 컴포넌트가 마운트될 때 데이터 호출
  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  //# 이벤트 핸들러 정의
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h3>Posts 게시물</h3>
      <button onClick={fetchPosts}>게시물 불러오기</button>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="검색어를 입력해주세요."
      />

      {loading && <div>게시물을 로딩중입니다.</div>}
      {error && <div>Error: {error}</div>}

      <ul>
        {/* 
        순서가 없는 태그 내에 
          h4태그 - post 제목
          p태그 - body 내용 
        */}
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

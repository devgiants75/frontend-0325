import React, { useRef, useState } from 'react';
import { useInput2 } from './hooks/useInput2';

interface Post {
  id: number;
  title: string;
  content: string;
}

//# useInput Hook: 각 입력 필드(제목, 내용)의 상태를 관리
// - 입력 필드에 필요한 값과 이벤트 핸들러를 제공

export default function Custom04() {
  //! 커스텀 훅을 사용한 input창 상태 관리
  const { 
    value: title, 
    bind: bindTitle, 
    reset: resetTitle 
  } = useInput2("");
  
  const {
    value: content,
    bind: bindContent,
    reset: resetContent,
  } = useInput2("");

  // 게시글 목록을 상태로 관리
  const [posts, setPosts] = useState<Post[]>([]);

  const postIdRef = useRef(1);

  // 게시글 추가 함수
  const addPost = () => {
    if (!title || !content) { // 제목과 내용이 모두 입력되었는지 확인
      alert('제목과 내용을 모두 입력하세요.');
      return;
    }

    const newPost = {
      id: postIdRef.current,
      title,
      content
    };

    setPosts([...posts, newPost]);
    resetTitle();
    resetContent();
    postIdRef.current += 1;
  }

  return (
    <div>
      <h4>미니 게시판</h4>
      <div>
        <input 
          type="text" 
          placeholder="제목을 입력해주세요." 
          {...bindTitle} 
        />
        <br />
        <textarea 
          placeholder='내용을 입력해주세요.' 
          {...bindContent}
        ></textarea>
        <button onClick={addPost}>게시글 추가</button>
      </div>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//! 동적 라우팅
// : API에서 데이터를 가져와야 할 때 또는 사용자가 생성한 경로에 따라 컨텐츠가 바뀌어야 할 때 유용

//? 동적 라우팅 구현 방법
// : URL에서 변수 부분을 캡처
//   >> 해당 변수에 따라 다른 데이터를 불러옴

// : React Router v6에서는 useParams 훅을 사용

//? useParams를 사용한 동적 파라미터 처리
// useParams
// : 현재 라우트의 파라미터를 객체 형태로 반환하는 훅

// 객체의 키와 값은 Route 컴포넌트의 path 속성에서 정의한 파라미터 이름과 URL에서 추출한 실제 값에 대응

interface Post {
  id: number;
  title: string;
  body: string;
}

const BlogPost: React.FC = () => {

  const { postId } = useParams<{ postId: string }>();

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

      if (!response.ok) {
        throw new Error('Fetch Error');
      }

      const data = await response.json();
      setPost(data);
    }

    fetchPost();
  }, [postId]);

  return (
    <div>
      <h2>Blog Post Detail</h2>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading Post...</p>
      )}
    </div>
  );
};

export default BlogPost;

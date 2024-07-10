import React, { useState } from 'react'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Practice01() {

  const [post, setPost] = useState<Post | null>(null);

  const fetchPost = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
    const data: Post = await response.json();
    setPost(data);
  };

  return (
    <div>
      <button onClick={fetchPost}>Load Post</button>
      <div>
        {post ? (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ) : (
          <p>No data loaded</p>
        )}
      </div>
    </div>
  )
}
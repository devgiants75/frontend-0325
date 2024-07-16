import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

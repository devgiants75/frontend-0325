import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!response.ok) {
        throw new Error('Fetch Error');
      }
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

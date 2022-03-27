import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/posts';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (e) {
        setError(e.message, 'error girl');
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {error && <p>{error}</p>}
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.title}</li>
          {post.message}
          <li>{post.contact}</li>
        </ul>
      ))}
    </div>
  );
}

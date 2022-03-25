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
        <p key={post.id}>
          {post.title}
          {post.message}- {post.contact}
        </p>
      ))}
    </div>
  );
}

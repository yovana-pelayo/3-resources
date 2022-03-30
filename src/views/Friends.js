import React from 'react';
import { useEffect, useState } from 'react';
import { fetchFriends } from '../services/friends';
import { useParams } from 'react-router-dom';
export default function Friends() {
  const params = useParams();
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFriends();
        setFriends(data);
      } catch (e) {
        setError(e.message, 'error girl');
      }
    };
    fetchData();
  }, [params]);
  return (
    <div>
      <h1>Friends</h1>
      {error && <p>{error}</p>}
      {friends.map((friend) => (
        <ul key={friend.id}>
          <li>{friend.name}</li>
          <li>Famous Quotes: {friend.quote}</li>
        </ul>
      ))}
    </div>
  );
}

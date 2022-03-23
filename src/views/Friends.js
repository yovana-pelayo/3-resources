import React from 'react';
import { useEffect, useState } from 'react';
import { fetchFriends } from '../services/friends';

export default function Friends() {
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
  }, []);
  return (
    <div>
      <h1>Friends</h1>
      {error && <p>{error}</p>}
      {friends.map((friend) => (
        <p key={friend.id}>{friend.name}</p>
      ))}
    </div>
  );
}

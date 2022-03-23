import React from 'react';
import { useEffect, useState } from 'react';
import { fetchFriends } from '../services/friends';

export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFriends();
      setFriends(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {friends.map((friend) => (
        <p key={friend.id}>{friend.name}</p>
      ))}
    </div>
  );
}

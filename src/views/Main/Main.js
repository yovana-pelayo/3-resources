import React, { useEffect, useState } from 'react';
import getFriends from '../../services/Friends/Friends.js';

export default function Main() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getFriends();
      setFriends(resp);
    };
    fetchData();
  }, []);
  return (
    <div className="Main">
      {friends.map((friend) => (
        <p key={friend.id} {...friend}></p>
      ))}
    </div>
  );
}

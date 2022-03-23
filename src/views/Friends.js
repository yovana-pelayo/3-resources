import React from 'react';
import { useEffect, useState } from 'react';

export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFriends();
      setFriends();
    };
    fetchData();
  }, []);
  return <div></div>;
}

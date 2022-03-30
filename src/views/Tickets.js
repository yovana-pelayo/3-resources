import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTickets } from '../services/tickets';

export default function Tickets() {
  const params = useParams();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTickets();
      setTickets(data);
      setLoading(false);
    };
    fetchData();
  }, [params]);

  if (loading) return <div>Loading</div>;
  return (
    <div>
      <h1>Concert Tickets</h1>
      {tickets.map((ticket) => (
        <ul key={ticket.id}>
          <li>{ticket.name}</li>
        </ul>
      ))}
    </div>
  );
}

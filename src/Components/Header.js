import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/friends">
            Friends
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/posts">
            Notepad
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/tickets">
            Tickets
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

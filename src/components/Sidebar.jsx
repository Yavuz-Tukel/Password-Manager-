import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/passwords">My Passwords</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}

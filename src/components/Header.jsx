import React from 'react';

export default function Header({ darkMode, toggleTheme }) {
  return (
    <header className="header">
      <h1>Kurumsal Password Manager</h1>
      <button onClick={toggleTheme} className="accent">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import MyPasswords from './pages/MyPasswords';
import Favorites from './pages/Favorites';
import Categories from './pages/Categories';
import Settings from './pages/Settings';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? 'dark-mode':''}>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Header darkMode={darkMode} toggleTheme={()=>setDarkMode(m=>!m)} />
          <div className="content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/passwords" element={<MyPasswords />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

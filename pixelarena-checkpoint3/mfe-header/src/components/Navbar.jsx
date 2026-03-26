import React from 'react';
import './Navbar.css';

function Navbar({ notifications = 0 }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo">PixelArena</span>
        <span className="mfe-badge">MFE</span>
      </div>

      <div className="navbar-menu">
        <button className="nav-button">Lobby</button>
        <button className="nav-button">Scores</button>
      </div>

      <div className="navbar-user">
        <span className="username">Joueur_42</span>
        <button className="nav-button notification-btn">
          {notifications > 0 && <span className="badge">{notifications}</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

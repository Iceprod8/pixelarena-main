import React from 'react';
import './Navbar.css';

function Navbar({ notifications }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo">PixelArena</span>
      </div>

      <div className="navbar-menu">
        <button className="button">Lobby</button>
        <button className="button">Scores</button>
      </div>

      <div className="navbar-user">
        <span className="username">Joueur_42</span>
        <button className="button notification-btn">
          {notifications > 0 && <span className="badge">{notifications}</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

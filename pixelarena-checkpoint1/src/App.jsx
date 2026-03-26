import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Lobby from './components/Lobby';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  const [notifications, setNotifications] = useState(0);

  const handleJoinGame = (gameName) => {
    setNotifications(prev => prev + 1);
    alert(`Vous avez rejoint : ${gameName}`);
  };

  return (
    <div className="app">
      <Navbar notifications={notifications} />
      <main className="main-content">
        <Lobby onJoinGame={handleJoinGame} />
        <Leaderboard />
      </main>
    </div>
  );
}

export default App;

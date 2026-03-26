import React from 'react';
import eventBus from 'shared/eventBus';
import './Lobby.css';

const GAMES = [
  { id: 1, name: 'Battle Royale', players: '87/100', status: 'En cours' },
  { id: 2, name: 'Team Deathmatch', players: '12/16', status: 'En attente' },
  { id: 3, name: 'Capture the Flag', players: '8/20', status: 'En attente' },
  { id: 4, name: 'Free for All', players: '45/50', status: 'En cours' },
];

function GameCard({ game }) {
  const handleJoinGame = () => {
    eventBus.emit('game:joined', { gameName: game.name });

    // Feedback visuel
    alert(`Vous avez rejoint : ${game.name}`);
  };

  return (
    <div className="game-card">
      <div className="game-info">
        <h3 className="game-name">{game.name}</h3>
        <div className="game-meta">
          <span className="players">{game.players} joueurs</span>
          <span className={`status ${game.status === 'En cours' ? 'active' : 'waiting'}`}>
            {game.status}
          </span>
        </div>
      </div>
      <button className="join-button" onClick={handleJoinGame}>
        Rejoindre
      </button>
    </div>
  );
}

function Lobby() {
  return (
    <div className="lobby">
      <div className="lobby-header">
        <h2>Parties Disponibles</h2>
        <span className="mfe-badge">MFE</span>
      </div>

      <div className="games-list">
        {GAMES.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <div className="lobby-hint">
        <p>Cliquez sur "Rejoindre" pour envoyer un evenement au Header !</p>
      </div>
    </div>
  );
}

export default Lobby;

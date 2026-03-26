import React from 'react';
import './Lobby.css';

const games = [
  { id: 1, name: 'Quiz Battle', players: 4, maxPlayers: 8, icon: '' },
  { id: 2, name: 'Draw & Guess', players: 2, maxPlayers: 6, icon: '' },
  { id: 3, name: 'Word Race', players: 5, maxPlayers: 10, icon: '' },
];

function Lobby({ onJoinGame }) {
  return (
    <section className="lobby">
      <h2 className="lobby-title">Parties disponibles</h2>

      <div className="games-list">
        {games.map(game => (
          <div key={game.id} className="game-card">
            <div className="game-icon">{game.icon}</div>
            <div className="game-info">
              <h3 className="game-name">{game.name}</h3>
              <p className="game-players">
                {game.players}/{game.maxPlayers} joueurs
              </p>
            </div>
            <button
              className="button join-btn"
              onClick={() => onJoinGame(game.name)}
            >
              JOIN
            </button>
          </div>
        ))}
      </div>

      <button className="button create-btn">
        + Creer une partie
      </button>
    </section>
  );
}

export default Lobby;

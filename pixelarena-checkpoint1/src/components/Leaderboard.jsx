import React from 'react';
import './Leaderboard.css';

const players = [
  { rank: 1, name: 'Alice', score: 2450, games: 12 },
  { rank: 2, name: 'Bob', score: 2100, games: 10 },
  { rank: 3, name: 'Charlie', score: 1890, games: 8 },
  { rank: 4, name: 'Diana', score: 1650, games: 15 },
  { rank: 5, name: 'Eve', score: 1420, games: 7 },
];

const medals = ['', '', ''];

function Leaderboard() {
  return (
    <aside className="leaderboard">
      <h2 className="leaderboard-title">Classement</h2>

      <div className="players-list">
        {players.map(player => (
          <div key={player.rank} className="player-row">
            <span className="player-rank">
              {medals[player.rank - 1] || `#${player.rank}`}
            </span>
            <span className="player-name">{player.name}</span>
            <span className="player-score">{player.score.toLocaleString()}</span>
          </div>
        ))}
      </div>

      <button className="button see-all-btn">
        Voir tout
      </button>
    </aside>
  );
}

export default Leaderboard;

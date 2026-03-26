import React from 'react';
import './App.css';

function App() {
  return (
    <div className="shell">
      <header className="shell-header">
        <h1>PixelArena</h1>
        <p>Shell operationnel</p>
      </header>

      <main className="shell-content">
        <div className="placeholder">
          <p>Les Micro-Frontends seront charges ici</p>
        </div>
      </main>

      <footer className="shell-footer">
        <p>Module Federation actif sur le port 3000</p>
      </footer>
    </div>
  );
}

export default App;

import React, { Suspense, lazy } from 'react';
import './App.css';

const Header = lazy(() => import('mfeHeader/Navbar'));
const Lobby = lazy(() => import('mfeLobby/Lobby'));

function LoadingFallback({ name }) {
  return (
    <div className="loading-fallback">
      Chargement {name}...
    </div>
  );
}

function App() {
  return (
    <div className="shell">
      <Suspense fallback={<LoadingFallback name="Header" />}>
        <Header />
      </Suspense>

      <main className="shell-content">
        <Suspense fallback={<LoadingFallback name="Lobby" />}>
          <Lobby />
        </Suspense>
      </main>

      <footer className="shell-footer">
        <p>Shell (3000) | Header MFE (3001) | Lobby MFE (3002)</p>
        <p className="hint">Ouvrez la console pour voir les evenements Event Bus</p>
      </footer>
    </div>
  );
}

export default App;

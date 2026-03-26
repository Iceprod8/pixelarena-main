import React, { Suspense, lazy } from 'react';
import './App.css';

const Header = lazy(() => import('mfeHeader/Navbar'));
const Lobby  = lazy(() => import('mfeLobby/Lobby'));
const Catalog = lazy(() => import('mfeCatalog/Catalog'));

function LoadingFallback({ name }) {
  return <div className="loading-fallback">Chargement {name}...</div>;
}

function App() {
  return (
    <div className="shell">
      <Suspense fallback={<LoadingFallback name="Header" />}>
        <Header />
      </Suspense>

      <main className="shell-content">
        <div className="content-grid">
          <section className="section">
            <Suspense fallback={<LoadingFallback name="Lobby" />}>
              <Lobby />
            </Suspense>
          </section>

          <section className="section">
            <Suspense fallback={<LoadingFallback name="Catalog" />}>
              <Catalog />
            </Suspense>
          </section>
        </div>
      </main>

      <footer className="shell-footer">
        <p>Shell (3000) | Header (3001) | Lobby (3002) | Catalog (3003)</p>
      </footer>
    </div>
  );
}

export default App;

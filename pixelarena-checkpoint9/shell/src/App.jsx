import React, { Suspense, useState, useEffect } from 'react';
import './App.css';

// Composant de fallback quand un MFE est indisponible
function OfflineFallback({ name }) {
  return (
    <div className="error-fallback">
      {name} indisponible
    </div>
  );
}

function LoadingFallback({ name }) {
  return <div className="loading-fallback">Chargement {name}...</div>;
}

// Wrapper resilient : charge le MFE ou affiche un fallback
function RemoteMFE({ name, importFn }) {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    importFn()
      .then((mod) => {
        if (!cancelled) {
          setComponent(() => mod.default);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn(`[MFE] ${name} indisponible :`, err.message);
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, []);

  if (loading) return <LoadingFallback name={name} />;
  if (error || !Component) return <OfflineFallback name={name} />;
  return <Component />;
}

function App() {
  return (
    <div className="shell">
      <RemoteMFE name="Header" importFn={() => import('mfeHeader/Navbar')} />

      <main className="shell-content">
        <div className="content-grid-3">
          <section className="section">
            <RemoteMFE name="Lobby" importFn={() => import('mfeLobby/Lobby')} />
          </section>

          <section className="section">
            <RemoteMFE name="Catalog" importFn={() => import('mfeCatalog/Catalog')} />
          </section>

          <section className="section">
            <RemoteMFE name="Cart" importFn={() => import('mfeCart/Cart')} />
          </section>
        </div>
      </main>

      <footer className="shell-footer">
        <p>Shell (3000) | Header (3001) | Lobby (3002) | Catalog (3003) | Cart (3004)</p>
      </footer>
    </div>
  );
}

export default App;

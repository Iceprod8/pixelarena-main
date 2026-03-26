import React, { Suspense, lazy } from 'react';
import './App.css';

const RemoteNavbar = lazy(() => import('mfeHeader/Navbar'));

function HeaderFallback() {
  return (
    <div className="header-loading">
      Chargement du Header...
    </div>
  );
}

function App() {
  return (
    <div className="shell">
      <Suspense fallback={<HeaderFallback />}>
        <RemoteNavbar notifications={2} />
      </Suspense>

      <main className="shell-content">
        <div className="placeholder">
          <h2>Shell Operationnel</h2>
          <p>Le Header devrait apparaitre au-dessus quand le MFE sera branche.</p>
        </div>
      </main>

      <footer className="shell-footer">
        <p>Shell sur le port 3000 | Header MFE sur le port 3001</p>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Navbar from './components/Navbar';

// Cette App est utilisee uniquement en mode standalone
// pour tester le Header de maniere isolee
function App() {
  const [notifications, setNotifications] = useState(2);

  return (
    <div style={{ background: '#0f0f1a', minHeight: '100vh' }}>
      <Navbar notifications={notifications} />

      <div style={{
        padding: '40px',
        textAlign: 'center',
        color: '#a0a0b0'
      }}>
        <h2 style={{ color: '#6c5ce7', marginBottom: '16px' }}>
          Mode Standalone
        </h2>
        <p>Ce MFE peut fonctionner seul pour le developpement.</p>
        <p>Il sera integre dans le Shell via Module Federation.</p>

        <button
          onClick={() => setNotifications(n => n + 1)}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Ajouter notification ({notifications})
        </button>
      </div>
    </div>
  );
}

export default App;

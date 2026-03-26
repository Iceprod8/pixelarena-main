import React from 'react';
import Lobby from './components/Lobby';

function App() {
  return (
    <div style={{ background: '#0f0f1a', minHeight: '100vh', padding: '24px' }}>
      <h2 style={{ color: '#6c5ce7', marginBottom: '16px', textAlign: 'center' }}>
        Lobby MFE - Standalone
      </h2>
      <Lobby />
    </div>
  );
}

export default App;

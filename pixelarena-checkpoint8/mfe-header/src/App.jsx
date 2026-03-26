import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div style={{ background: '#0f0f1a', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '40px', textAlign: 'center', color: '#a0a0b0' }}>
        <h2 style={{ color: '#6c5ce7', marginBottom: '16px' }}>Header MFE - Standalone</h2>
        <p>Ce MFE ecoute les evenements <code>game:joined</code></p>
        <p>Lancez le Lobby pour tester la communication !</p>
      </div>
    </div>
  );
}

export default App;

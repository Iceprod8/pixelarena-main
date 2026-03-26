import React from 'react';
import Catalog from './components/Catalog';

function App() {
  return (
    <div style={{ background: '#0f0f1a', minHeight: '100vh', padding: '24px' }}>
      <h2 style={{ color: '#f59e0b', marginBottom: '16px', textAlign: 'center' }}>
        Catalog MFE - Standalone
      </h2>
      <Catalog />
    </div>
  );
}

export default App;

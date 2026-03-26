import React from 'react';
import Cart from './components/Cart';

function App() {
  return (
    <div style={{ background: '#0f0f1a', minHeight: '100vh', padding: '24px' }}>
      <h2 style={{ color: '#ef4444', marginBottom: '16px', textAlign: 'center' }}>
        Cart MFE - Standalone
      </h2>
      <Cart />
    </div>
  );
}

export default App;

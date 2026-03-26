import React, { useState, useEffect } from 'react';
import eventBus from 'shared/eventBus';
import './Cart.css';

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = eventBus.on('cart:add', (product) => {
      setItems(prev => [...prev, { ...product, cartId: Date.now() }]);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    eventBus.emit('cart:updated', {
      count: items.length,
      total: items.reduce((sum, item) => sum + item.price, 0),
    });
  }, [items]);

  const handleRemove = (cartId) => {
    setItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const handleClear = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Panier</h2>
        <span className="mfe-badge">MFE</span>
        <span className="item-count">{items.length} article(s)</span>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Votre panier est vide</p>
          <p className="hint">Ajoutez des produits depuis le Catalog !</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <div key={item.cartId} className="cart-item">
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price} €</span>
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemove(item.cartId)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span className="total-price">{total} €</span>
            </div>
            <div className="cart-actions">
              <button className="clear-button" onClick={handleClear}>
                Vider le panier
              </button>
              <button className="checkout-button">
                Commander
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

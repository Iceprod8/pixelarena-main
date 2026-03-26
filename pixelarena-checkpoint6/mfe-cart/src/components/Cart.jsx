import React, { useEffect, useRef, useState } from 'react';
import eventBus from 'shared/eventBus';
import './Cart.css';

function Cart() {
  const [items, setItems] = useState([]);
  const hasMounted = useRef(false);

  useEffect(() => {
    const unsubscribeCartAdd = eventBus.on('cart:add', (product) => {
      setItems((currentItems) => [
        ...currentItems,
        {
          ...product,
          cartId: `${product.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        },
      ]);
    });

    // Garde un listener actif pour rendre l'emission observable dans la console.
    const unsubscribeCartUpdated = eventBus.on('cart:updated', () => {});

    return () => {
      unsubscribeCartAdd();
      unsubscribeCartUpdated();
    };
  }, []);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const total = items.reduce((sum, item) => sum + item.price, 0);

    eventBus.emit('cart:updated', {
      count: items.length,
      total,
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

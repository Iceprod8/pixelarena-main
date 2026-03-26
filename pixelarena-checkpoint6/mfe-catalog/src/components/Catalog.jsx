import React from 'react';
import eventBus from 'shared/eventBus';
import './Catalog.css';

const PRODUCTS = [
  { id: 1, name: 'Skin Dragon', price: 15, image: '🐉' },
  { id: 2, name: 'Arme Laser', price: 25, image: '🔫' },
  { id: 3, name: 'Cape Invisible', price: 30, image: '🧥' },
  { id: 4, name: 'Bouclier Or', price: 20, image: '🛡️' },
  { id: 5, name: 'Potion Vitesse', price: 10, image: '⚡' },
  { id: 6, name: 'Casque Viking', price: 18, image: '⛑️' },
];

function ProductCard({ product }) {
  const handleAddToCart = () => {
    eventBus.emit('cart:add', {
      id: product.id,
      name: product.name,
      price: product.price,
    });
  };

  return (
    <div className="product-card">
      <div className="product-image">{product.image}</div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price} €</p>
      </div>
      <button className="add-button" onClick={handleAddToCart}>
        Ajouter au panier
      </button>
    </div>
  );
}

function Catalog() {
  return (
    <div className="catalog">
      <div className="catalog-header">
        <h2>Boutique</h2>
        <span className="mfe-badge">MFE</span>
      </div>

      <div className="products-grid">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="catalog-hint">
        <p>Cliquez "Ajouter au panier" pour envoyer au Cart MFE !</p>
      </div>
    </div>
  );
}

export default Catalog;

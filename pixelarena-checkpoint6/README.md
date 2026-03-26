# CP6 — Le Panier

Télécharge le zip **checkpoint6** depuis Teams.

```bash
T1 : cd mfe-header  && npm install && npm start  # 3001
T2 : cd mfe-lobby   && npm install && npm start  # 3002
T3 : cd mfe-catalog && npm install && npm start  # 3003
T4 : cd mfe-cart    && npm install && npm start  # 3004
T5 : cd shell       && npm install && npm start  # 3000
```

---

## Mission

`mfe-cart/src/components/Cart.jsx` — 2 useEffects à compléter.

**useEffect 1 — écoute**
→ Abonne-toi à `cart:add` et ajoute chaque produit reçu au state `items`

**useEffect 2 — émission**
→ Quand `items` change, notifie l'eventBus que le panier a changé
→ L'événement doit contenir le nombre d'articles et le total

---

## Validation

- Cliquer "Ajouter" dans Catalog → item apparaît dans Cart
- Console : `[EventBus] cart:updated` visible à chaque ajout
- Push ta branche

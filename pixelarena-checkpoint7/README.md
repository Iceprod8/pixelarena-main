# CP7 — L'Assemblage Final

Télécharge le zip depuis le dossier partagé Teams et extrais-le.

```bash
T1 : cd mfe-header  && npm install && npm start   # 3001
T2 : cd mfe-lobby   && npm install && npm start   # 3002
T3 : cd mfe-catalog && npm install && npm start   # 3003
T4 : cd mfe-cart    && npm install && npm start   # 3004
T5 : cd shell       && npm install && npm start   # 3000
```

---

## Mission

`mfe-header/src/components/Navbar.jsx` — 1 `useEffect`, 3 TODOs :

**TODO 1** — s'abonner à `game:joined` et incrémenter le badge notifications

**TODO 2** — s'abonner à `cart:updated` et mettre à jour le badge panier avec le `count`

**TODO 3** — retourner le cleanup des 2 abonnements

---

## Validation

- Rejoindre une partie → badge 🔔 +1
- Ajouter au panier → badge 🛒 +1
- Vider le panier → badge 🛒 = 0
- Push ta branche

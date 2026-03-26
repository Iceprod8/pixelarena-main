# CP4 — La Babel

Télécharge le zip **checkpoint4** depuis Teams.

```bash
T1 : cd mfe-header && npm install && npm start   # 3001
T2 : cd mfe-lobby  && npm install && npm start   # 3002
T3 : cd shell      && npm install && npm start   # 3000
```

---

## Mission

Lobby et Header doivent communiquer via l'Event Bus (`shared/eventBus.js`).

**`mfe-lobby/src/components/Lobby.jsx`**
→ Quand on rejoint une partie, notifie l'eventBus

**`mfe-header/src/components/Navbar.jsx`**
→ Écoute l'événement et incrémente le badge
→ Hint : `eventBus.on()` retourne une fonction — utilise-la pour le cleanup React

---

## Validation

- Cliquer "Rejoindre" → badge notifications +1 dans le Header
- Console : `[EventBus] game:joined { ... }`

---

📤 Push ta branche

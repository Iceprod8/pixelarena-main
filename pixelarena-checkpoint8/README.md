# CP8 — Le Crash

> ⏱ 20 min — Compétences couvertes : C17

Télécharge le zip **checkpoint8** depuis Teams.

---

## Lancer (5 terminaux)

```bash
T1 : cd mfe-header  && npm install && npm start   # 3001
T2 : cd mfe-lobby   && npm install && npm start   # 3002
T3 : cd mfe-catalog && npm install && npm start   # 3003
T4 : cd mfe-cart    && npm install && npm start   # 3004
T5 : cd shell       && npm install && npm start   # 3000
```

---

## Mission

L'app est cassée. **3 bugs à trouver et corriger.**

Ouvre `localhost:3000` et observe ce qui ne s'affiche pas correctement.
Ouvre la console du navigateur (F12) et lis les erreurs.

Les 3 bugs se trouvent dans des fichiers `webpack.config.js` :
- 1 bug dans `shell/webpack.config.js`
- 1 bug dans `mfe-header/webpack.config.js`
- 1 bug dans `mfe-catalog/webpack.config.js`

---

## Validation

`localhost:3000` affiche les 4 MFEs sans erreur console.

---

📤 Push ta branche

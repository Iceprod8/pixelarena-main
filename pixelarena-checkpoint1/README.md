# PixelArena - Checkpoint 1 : Le Bug du Lobby

## Contexte

Bienvenue chez **PixelArena** ! Vous venez d'etre embauche comme developpeur frontend.

Le developpeur precedent a quitte l'entreprise precipitamment. Son code... disons qu'il a ses particularites.

Votre manager vous demande une modification "simple" :

> "Change la couleur du bouton JOIN dans le Lobby. Le bleu ne va pas avec notre nouvelle charte graphique. Mets-le en **vert** (#10b981). Ca devrait prendre 5 minutes."

## Installation

```bash
npm install
npm start
```

L'application demarre sur http://localhost:3000

## Votre Mission

### Objectif
Changer la couleur du bouton "JOIN" dans le Lobby de **bleu** (#3b82f6) vers **vert** (#10b981).

### Fichier a modifier
`src/components/Lobby.css`

### Ce que vous devez faire
1. Ouvrir `src/components/Lobby.css`
2. Trouver la classe `.button`
3. Changer `background: #3b82f6` en `background: #10b981`
4. Sauvegarder

### Resultat attendu
Seul le bouton "JOIN" du Lobby devrait devenir vert.

---

## Validation du Checkpoint

Apres avoir fait la modification, repondez a ces questions :

1. Le bouton "JOIN" est-il devenu vert ?
2. Les autres boutons ont-ils change de couleur aussi ?
3. Si oui, pourquoi selon vous ?

---

## Structure du projet

```
pixelarena-checkpoint1/
├── src/
│   ├── index.js
│   ├── App.jsx
│   ├── App.css
│   └── components/
│       ├── Navbar.jsx
│       ├── Navbar.css      <- Equipe Navbar
│       ├── Lobby.jsx
│       ├── Lobby.css       <- Equipe Lobby (MODIFIER ICI)
│       ├── Leaderboard.jsx
│       └── Leaderboard.css <- Equipe Leaderboard
├── public/
│   └── index.html
├── package.json
└── webpack.config.js
```

---

Bonne chance !

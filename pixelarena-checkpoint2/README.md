# CP2 — Le Shell

Télécharge le zip depuis le dossier partagé Teams et extrais-le.

```bash
npm install
npm start
```

---

## Mission

Ouvrir `webpack.config.js` et compléter les 3 TODOs :

**TODO 1 — Nommer le Shell**
```js
name: 'shell',
```

**TODO 2 — Préparer les remotes**
```js
remotes: {},
```

**TODO 3 — Partager React**
```js
shared: {
  react: { singleton: true, requiredVersion: '^18.2.0' },
  'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
},
```

---

## Validation

- `npm start` démarre sans erreur
- http://localhost:3000 affiche "Shell opérationnel"
- Push sur `checkpoint2-[nom-equipe]`

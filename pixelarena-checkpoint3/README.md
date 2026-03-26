# CP3 — La Résurrection

Télécharge le zip depuis le dossier partagé Teams et extrais-le.

```bash
# Terminal 1
cd mfe-header && npm install && npm start   # → localhost:3001

# Terminal 2
cd shell && npm install && npm start        # → localhost:3000
```

---

## Mission

### mfe-header/webpack.config.js — 4 TODOs

```js
name: 'mfeHeader',
filename: 'remoteEntry.js',
exposes: { './Navbar': './src/components/Navbar' },
shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
```

### shell/webpack.config.js — 1 TODO

```js
remotes: {
  mfeHeader: 'mfeHeader@http://localhost:3001/remoteEntry.js',
},
```

---

## Validation

- http://localhost:3000 affiche le Header chargé depuis le port 3001
- Push ta branche

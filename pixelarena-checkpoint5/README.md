# CP5 — Le Catalogue

Télécharge le zip **checkpoint5** depuis Teams.

```bash
T1 : cd mfe-catalog && npm install && npm start  # 3003
T2 : cd mfe-header  && npm install && npm start  # 3001
T3 : cd mfe-lobby   && npm install && npm start  # 3002
T4 : cd shell       && npm install && npm start  # 3000
```

---

## Mission

Créer `mfe-catalog` de A à Z et le brancher sur le Shell.

**`mfe-catalog/webpack.config.js`**
→ 4 TODOs : configurer Module Federation (name, filename, exposes, shared)

**`mfe-catalog/src/components/Catalog.jsx`**
→ Notifier l'eventBus quand l'utilisateur ajoute un produit

**`shell/webpack.config.js`**
→ Déclarer `mfe-catalog` comme remote (port 3003)

**`shell/src/App.jsx`**
→ Importer et afficher le Catalog

---

## Validation

- `localhost:3000` → 6 produits s'affichent dans la Boutique
- Console : `[EventBus] cart:add { id, name, price }` au clic sur "Ajouter"

---

📤 Push ta branche

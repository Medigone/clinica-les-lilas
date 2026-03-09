# Landing Page Clinique Oncologie

Landing page moderne pour une clinique de traitement oncologique par hyperthermie, développée avec React et Tailwind CSS.

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir votre navigateur à l'adresse indiquée (généralement `http://localhost:5173`)

## Build pour production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## Structure du projet

- `src/components/` - Composants React réutilisables
  - `Hero.jsx` - Section d'en-tête avec navigation et titre principal
  - `About.jsx` - Section à propos avec description de l'hyperthermie
  - `Statistics.jsx` - Section statistiques avec cartes
- `src/App.jsx` - Composant principal assemblant toutes les sections
- `src/main.jsx` - Point d'entrée de l'application
- `src/index.css` - Styles globaux et imports Tailwind

## Technologies utilisées

- React 18
- Vite
- Tailwind CSS
- Inter (Google Fonts)


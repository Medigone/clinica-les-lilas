# Préparation Google Ads - Clínica Les Lilas

Ce document décrit comment activer le tracking Google Ads sur le site.

## 1. Script gtag.js

**Emplacement** : `index.html`, dans la balise `<head>`.

Remplacer `G-XXXXXXXXXX` par votre ID de mesure Google Analytics 4 / Google Ads :

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 2. Conversion tracking

### Formulaire de contact

- **ID du formulaire** : `contact-form` (attribut `id` sur le formulaire dans `src/pages/Contact.jsx`)
- **Comportement** : après envoi réussi, redirection vers `/contact/merci`

### Page de remerciement

- **URL** : `/contact/merci`
- **Usage** : configurer cette URL comme "Conversion page" dans Google Ads pour les conversions de formulaire de contact
- **Alternative** : déclencher un événement `gtag('event', 'conversion', {...})` dans `handleSubmit` de Contact.jsx avant la redirection, ou sur le chargement de la page ContactMerci

### Exemple d'événement de conversion

```javascript
// Dans Contact.jsx, après envoi réussi (avant navigate) :
if (typeof gtag === 'function') {
  gtag('event', 'conversion', {
    'send_to': 'AW-XXXXXXXXX/YYYYYYYYYY', // ID de conversion Google Ads
  });
}
```

## 3. Remarques

- Le site ne contient pas encore le script gtag.js (désactivé par défaut)
- Les redirections existantes (medicina-integrativa, contacto, etc.) sont conservées
- Base URL : https://clinicaleslilas.com

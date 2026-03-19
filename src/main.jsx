import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/600.css'
import '@fontsource/dm-sans/700.css'
import '@fontsource/dm-sans/400-italic.css'
import './index.css'
import { loadInitialTranslationBundle, useLanguageStore } from './store/languageStore'

const root = document.getElementById('root')

loadInitialTranslationBundle()
  .catch(() =>
    import('./locales-data/es.js').then(({ default: data }) => {
      useLanguageStore.getState().hydrateFromBundle('es', data)
    }),
  )
  .then(() => {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
    // Signal pour vite-plugin-prerender — doit être APRÈS render()
    document.dispatchEvent(new Event('render-event'))
  })


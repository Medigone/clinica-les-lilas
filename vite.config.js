import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePrerender from 'vite-plugin-prerender-esm-fix'
import path from 'path'

const ROUTES = [
  '/',
  '/notre-approche',
  '/traitements',
  '/traitements/hyperthermie-oncologique',
  '/traitements/sueroterapia',
  '/traitements/medecine-regenerative',
  '/traitements/soutien-immunitaire',
  '/a-propos',
  '/contact',
]

// Prerender activé uniquement si PRERENDER=true (nécessite Chrome/Puppeteer)
const enablePrerender = process.env.PRERENDER === 'true'

const plugins = [react()]

if (enablePrerender) {
  const PuppeteerRenderer = vitePrerender.PuppeteerRenderer
  plugins.push(
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ROUTES,
      renderer: new PuppeteerRenderer({
        renderAfterDocumentEvent: 'render-event',
        renderAfterTime: 2000, // fallback si l'événement ne se déclenche pas
        blockConcurrentRequests: true,
      }),
    })
  )
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
})


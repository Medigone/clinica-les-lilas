import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useLanguageStore } from './store/languageStore';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import { ALL_REDIRECTS, ROUTES, toRoutePath } from './routes';

const NotreApproche = lazy(() => import('./pages/NotreApproche'));
const Traitements = lazy(() => import('./pages/Traitements'));
const Hyperthermie = lazy(() => import('./pages/Hyperthermie'));
const Oncologia = lazy(() => import('./pages/Oncologia'));
const Bienestar = lazy(() => import('./pages/Bienestar'));
const APropos = lazy(() => import('./pages/APropos'));
const Contact = lazy(() => import('./pages/Contact'));
const ContactMerci = lazy(() => import('./pages/ContactMerci'));
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center text-primary/60 text-sm" aria-hidden>
      …
    </div>
  );
}

function App() {
  const { language } = useLanguageStore();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div key={language} className="min-h-screen">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={toRoutePath(ROUTES.NOTRE_APPROCHE)} element={<NotreApproche />} />
                <Route path={toRoutePath(ROUTES.TRAITEMENTS)} element={<Traitements />} />
                <Route path={toRoutePath(ROUTES.HIPERTERMIA)} element={<Hyperthermie />} />
                <Route path={toRoutePath(ROUTES.ONCOLOGIA)} element={<Oncologia />} />
                <Route path={toRoutePath(ROUTES.BIENESTAR)} element={<Bienestar />} />
                <Route path={toRoutePath(ROUTES.A_PROPOS)} element={<APropos />} />
                <Route path={toRoutePath(ROUTES.CONTACT)} element={<Contact />} />
                <Route path={toRoutePath(ROUTES.CONTACT_MERCI)} element={<ContactMerci />} />
                <Route path={toRoutePath(ROUTES.POLITIQUE_CONFIDENTIALITE)} element={<PolitiqueConfidentialite />} />
                <Route path={toRoutePath(ROUTES.BLOG)} element={<Blog />} />
                <Route path={`${toRoutePath(ROUTES.BLOG)}/:slug`} element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              {ALL_REDIRECTS.map((redirect) => (
                <Route
                  key={redirect.from}
                  path={redirect.from}
                  element={<Navigate to={redirect.to} replace />}
                />
              ))}
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

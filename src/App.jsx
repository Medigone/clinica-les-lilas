import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useLanguageStore } from './store/languageStore';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import NotreApproche from './pages/NotreApproche';
import Traitements from './pages/Traitements';
import Hyperthermie from './pages/Hyperthermie';
import Sueroterapia from './pages/Sueroterapia';
import MedecineRegenerative from './pages/MedecineRegenerative';
import SoutienImmunitaire from './pages/SoutienImmunitaire';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import ContactMerci from './pages/ContactMerci';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import { ALL_REDIRECTS, ROUTES, toRoutePath } from './routes';

function App() {
  const { language } = useLanguageStore();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div key={language} className="min-h-screen">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path={toRoutePath(ROUTES.NOTRE_APPROCHE)} element={<NotreApproche />} />
              <Route path={toRoutePath(ROUTES.TRAITEMENTS)} element={<Traitements />} />
              <Route path={toRoutePath(ROUTES.HIPERTERMIA)} element={<Hyperthermie />} />
              <Route path={toRoutePath(ROUTES.SUEROTERAPIA)} element={<Sueroterapia />} />
              <Route path={toRoutePath(ROUTES.MEDECINE_REGENERATIVE)} element={<MedecineRegenerative />} />
              <Route path={toRoutePath(ROUTES.SOUTIEN_IMMUNITAIRE)} element={<SoutienImmunitaire />} />
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
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

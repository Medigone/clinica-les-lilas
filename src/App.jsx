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
import NotFound from './pages/NotFound';
import { ROUTES } from './routes';

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
              <Route path="notre-approche" element={<NotreApproche />} />
              <Route path="traitements" element={<Traitements />} />
              <Route path="traitements/hyperthermie-oncologique" element={<Hyperthermie />} />
              <Route path="traitements/sueroterapia" element={<Sueroterapia />} />
              <Route path="traitements/medecine-regenerative" element={<MedecineRegenerative />} />
              <Route path="traitements/soutien-immunitaire" element={<SoutienImmunitaire />} />
              <Route path="a-propos" element={<APropos />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            {/* Redirections des anciennes URLs */}
            <Route path="/medicina-integrativa" element={<Navigate to={ROUTES.NOTRE_APPROCHE} replace />} />
            <Route path="/hipertermia-oncologica" element={<Navigate to={ROUTES.HIPERTERMIA} replace />} />
            <Route path="/sueroterapia" element={<Navigate to={ROUTES.SUEROTERAPIA} replace />} />
            <Route path="/medicina-regenerativa" element={<Navigate to={ROUTES.MEDECINE_REGENERATIVE} replace />} />
            <Route path="/soporte-inmunologico" element={<Navigate to={ROUTES.SOUTIEN_IMMUNITAIRE} replace />} />
            <Route path="/sobre-nosotros" element={<Navigate to={ROUTES.A_PROPOS} replace />} />
            <Route path="/contacto" element={<Navigate to={ROUTES.CONTACT} replace />} />
            <Route path="/politique-confidentialite" element={<Navigate to="/?mentions=1" replace />} />
            <Route path="/mentions-legales" element={<Navigate to="/?mentions=1" replace />} />
            <Route path="/faq" element={<Navigate to={ROUTES.HOME} replace />} />
            <Route path="/consulta-inicial" element={<Navigate to={ROUTES.CONTACT} replace />} />
            <Route path="/tu-recorrido" element={<Navigate to={ROUTES.NOTRE_APPROCHE} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguageStore } from '../store/languageStore';
import LanguageSelector from './LanguageSelector';
import { ROUTES } from '../routes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const { t, language } = useLanguageStore();
  const contactPath = `${ROUTES.CONTACT}?language=${language}`;
  const location = useLocation();

  const mainNavItems = [
    { key: 'home', path: ROUTES.HOME },
    { key: 'notreApproche', path: ROUTES.NOTRE_APPROCHE },
    { key: 'aPropos', path: ROUTES.A_PROPOS },
    { key: 'contact', path: ROUTES.CONTACT },
  ];

  const treatmentItems = [
    { key: 'hyperthermie', path: ROUTES.HIPERTERMIA },
    { key: 'sueroterapia', path: ROUTES.SUEROTERAPIA },
    { key: 'medecineRegenerative', path: ROUTES.MEDECINE_REGENERATIVE },
    { key: 'soutienImmunitaire', path: ROUTES.SOUTIEN_IMMUNITAIRE },
  ];

  const isActive = (path) => location.pathname === path;
  const isTreatmentsActive = treatmentItems.some((item) => location.pathname === item.path) || location.pathname === ROUTES.TRAITEMENTS;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-16 py-2 md:py-3">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-3 shrink-0">
          <img
            src="/assets/Logo_clinica_les_lilas.svg"
            alt=""
            className="h-12 md:h-14 w-auto object-contain shrink-0"
            aria-hidden
          />
          <div className="flex flex-col justify-center text-center">
            <span className="text-primary font-semibold text-lg md:text-xl tracking-tight leading-tight block">
              {t('brand.name')}
            </span>
            <span className="text-primary/70 text-[10px] md:text-xs font-normal tracking-wide leading-tight block -mt-1">
              {t('brand.subtitle')}
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-5 flex-nowrap">
          <Link
            to={ROUTES.HOME}
            className={`text-sm transition-colors whitespace-nowrap shrink-0 ${
              isActive(ROUTES.HOME) ? 'text-primary font-semibold' : 'text-primary/80 hover:text-primary font-medium'
            }`}
          >
            {t('navigation.home')}
          </Link>
          <Link
            to={ROUTES.NOTRE_APPROCHE}
            className={`text-sm transition-colors whitespace-nowrap shrink-0 ${
              isActive(ROUTES.NOTRE_APPROCHE) ? 'text-primary font-semibold' : 'text-primary/80 hover:text-primary font-medium'
            }`}
          >
            {t('navigation.notreApproche')}
          </Link>
          <div className="relative group shrink-0">
            <Link
              to={ROUTES.TRAITEMENTS}
              className={`text-sm transition-colors whitespace-nowrap flex items-center gap-0.5 ${
                isTreatmentsActive ? 'text-primary font-semibold' : 'text-primary/80 hover:text-primary font-medium'
              }`}
            >
              {t('navigation.traitements')} ▾
            </Link>
            <div className="absolute top-full left-0 mt-1 w-64 py-2 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {treatmentItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className="block px-4 py-2.5 text-sm text-primary hover:bg-primary/5"
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to={ROUTES.A_PROPOS}
            className={`text-sm transition-colors whitespace-nowrap shrink-0 ${
              isActive(ROUTES.A_PROPOS) ? 'text-primary font-semibold' : 'text-primary/80 hover:text-primary font-medium'
            }`}
          >
            {t('navigation.aPropos')}
          </Link>
          <Link
            to={contactPath}
            className={`text-sm transition-colors whitespace-nowrap shrink-0 ${
              isActive(ROUTES.CONTACT) ? 'text-primary font-semibold' : 'text-primary/80 hover:text-primary font-medium'
            }`}
          >
            {t('navigation.contact')}
          </Link>
          <LanguageSelector />
          <Link
            to={contactPath}
            className="px-4 py-2 rounded-xl font-medium text-sm text-white bg-primary hover:bg-primary/90 hover:shadow-lg transition-all whitespace-nowrap shrink-0"
          >
            {t('cta.bookAppointment')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center gap-4">
          <Link
            to={contactPath}
            className="hidden sm:inline-flex px-3 py-1.5 rounded-lg font-medium text-sm text-white bg-primary"
          >
            {t('cta.bookAppointment')}
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <div className={`w-6 h-[2px] bg-primary transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-[2px] bg-primary transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-[2px] bg-primary transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/5 z-40 xl:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-full left-0 right-0 bg-white border-b border-primary/10 shadow-xl z-50 xl:hidden max-h-[80vh] overflow-y-auto">
            <div className="p-4 space-y-1">
              <Link
                to={ROUTES.HOME}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 text-left rounded-lg transition-colors ${
                  isActive(ROUTES.HOME) ? 'bg-primary/10 text-primary font-semibold' : 'text-primary hover:bg-primary/5 font-medium'
                }`}
              >
                {t('navigation.home')}
              </Link>
              <Link
                to={ROUTES.NOTRE_APPROCHE}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 text-left rounded-lg transition-colors ${
                  isActive(ROUTES.NOTRE_APPROCHE) ? 'bg-primary/10 text-primary font-semibold' : 'text-primary hover:bg-primary/5 font-medium'
                }`}
              >
                {t('navigation.notreApproche')}
              </Link>
              <div className="py-2">
                <button
                  onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                  className="w-full py-3 px-4 text-left font-medium rounded-lg text-primary hover:bg-primary/5 flex justify-between items-center"
                >
                  {t('navigation.traitements')}
                  <span className={`transition-transform ${isTreatmentsOpen ? 'rotate-180' : ''}`}>▾</span>
                </button>
                {isTreatmentsOpen && (
                  <div className="pl-4 space-y-1">
                    <Link
                      to={ROUTES.TRAITEMENTS}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-2.5 px-4 text-sm rounded-lg transition-colors ${
                        isActive(ROUTES.TRAITEMENTS) ? 'bg-primary/10 text-primary font-semibold' : 'text-primary hover:bg-primary/5 font-medium'
                      }`}
                    >
                      {t('cta.seeTreatments')}
                    </Link>
                    {treatmentItems.map((item) => (
                      <Link
                        key={item.key}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-2.5 px-4 text-sm rounded-lg transition-colors ${
                          isActive(item.path) ? 'bg-primary/10 text-primary font-semibold' : 'text-primary hover:bg-primary/5 font-medium'
                        }`}
                      >
                        {t(`navigation.${item.key}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to={ROUTES.A_PROPOS}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 text-left rounded-lg transition-colors ${
                  isActive(ROUTES.A_PROPOS) ? 'bg-primary/10 text-primary font-semibold' : 'text-primary hover:bg-primary/5 font-medium'
                }`}
              >
                {t('navigation.aPropos')}
              </Link>
              <Link
                to={contactPath}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 text-left rounded-lg transition-colors ${
                  isActive(ROUTES.CONTACT) ? 'bg-primary/10 text-primary font-semibold' : 'text-primary hover:bg-primary/5 font-medium'
                }`}
              >
                {t('navigation.contact')}
              </Link>
              <div className="pt-4 mt-4 border-t border-primary/10">
                <LanguageSelector inMenu onLanguageSelected={() => setIsMenuOpen(false)} />
              </div>
              <Link
                to={contactPath}
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4 py-2.5 text-center text-white font-medium text-sm bg-primary rounded-xl"
              >
                {t('cta.bookAppointment')}
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;

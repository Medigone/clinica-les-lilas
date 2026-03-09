import React, { useEffect } from 'react';
import { Xmark } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';

const MentionsLegalesModal = ({ isOpen, onClose }) => {
  const { t } = useLanguageStore();
  const content = t('mentionsLegales.content', { returnObjects: true });

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mentions-legales-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 p-6 pb-4 border-b border-gray-100 shrink-0">
          <div>
            <p className="text-sm font-medium text-primary/60 uppercase tracking-widest mb-1">
              Clínica Les Lilas
            </p>
            <h2 id="mentions-legales-title" className="text-2xl font-bold text-primary">
              {t('mentionsLegales.h1')}
            </h2>
            <p className="text-text/40 text-sm mt-1">
              {t('mentionsLegales.lastUpdate')}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 -m-2 rounded-lg text-text/60 hover:text-primary hover:bg-primary/5 transition-colors"
            aria-label={t('common.close')}
          >
            <Xmark className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 p-6">
          {content && typeof content === 'object' && (
            <div className="divide-y divide-gray-100">
              {Object.values(content).map((section, index) => (
                <div key={index} className="py-6 first:pt-0">
                  <h3 className="text-base font-semibold text-primary mb-3">
                    {section.title}
                  </h3>
                  {section.text && (
                    <p className="text-text/70 leading-relaxed text-[15px] mb-3">
                      {section.text}
                    </p>
                  )}
                  {Array.isArray(section.items) && (
                    <ul className="space-y-1.5 mt-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[15px] text-text/70">
                          <span className="mt-2 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-text/40 leading-relaxed">
            Clínica Les Lilas — Avinguda de la Diagonal, 4, 03550 Sant Joan d'Alacant, Alicante, España
          </div>
        </div>

        {/* Close button at bottom */}
        <div className="p-6 pt-4 border-t border-gray-100 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 px-6 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            {t('common.close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegalesModal;

import { fr } from '../translations/fr';
import { en } from '../translations/en';
import { es } from '../translations/es';

const translations = {
  fr,
  en,
  es,
};

export const getTranslation = (key, language = 'fr') => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback sur le français si la clé n'existe pas
      value = translations.fr;
      for (const k2 of keys) {
        if (value && typeof value === 'object' && k2 in value) {
          value = value[k2];
        } else {
          return key; // Retourner la clé si aucune traduction n'est trouvée
        }
      }
      break;
    }
  }
  
  return value || key;
};

export default translations;

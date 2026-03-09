import React from 'react';
import { useLanguageStore } from '../store/languageStore';

const LanguageSelector = ({ inMenu = false, onLanguageSelected }) => {
  const { language, setLanguage } = useLanguageStore();

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const handleChange = (e) => {
    const code = e.target.value;
    console.info('[LanguageSelector] Native select change ->', code);
    setLanguage(code);
    onLanguageSelected?.(code);
  };

  return (
    <div className={`relative ${inMenu ? 'w-full' : ''}`}>
      <select
        value={language}
        onChange={handleChange}
        className={`
          appearance-none
          bg-transparent
          text-primary 
          font-medium 
          text-sm 
          rounded-md 
          border-none
          pl-1
          pr-6
          py-1.5 
          cursor-pointer 
          hover:opacity-70
          transition-opacity
          focus:outline-none 
          focus:ring-0
          ${inMenu ? 'w-full' : ''}
        `}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 4.5L6 7.5L9 4.5' stroke='%23252525' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.25rem center',
          backgroundSize: '12px'
        }}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
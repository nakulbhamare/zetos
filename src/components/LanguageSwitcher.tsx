import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector / Sélecteur de langue"
      className={`relative inline-flex items-center p-1 rounded-full bg-[#0d0915]/90 border border-white/10 backdrop-blur-md shadow-inner transition-all hover:border-[#8a2be2]/40 ${className}`}
    >
      {/* Sliding Pill Background Indicator */}
      <div
        className={`absolute top-1 bottom-1 w-[32px] rounded-full bg-gradient-to-r from-[#8a2be2] to-[#a855f7] shadow-[0_0_12px_rgba(138,43,226,0.6)] transition-transform duration-300 ease-out ${
          language === 'en' ? 'translate-x-[36px]' : 'translate-x-0'
        }`}
      />

      {/* FR Button */}
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        aria-pressed={language === 'fr'}
        className={`relative z-10 w-[32px] h-[24px] flex items-center justify-center text-xs font-bold transition-colors duration-200 rounded-full select-none ${
          language === 'fr' ? 'text-white' : 'text-[#9890a8] hover:text-white'
        }`}
      >
        FR
      </button>

      {/* EN Button */}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`relative z-10 w-[32px] h-[24px] flex items-center justify-center text-xs font-bold transition-colors duration-200 rounded-full select-none ${
          language === 'en' ? 'text-white' : 'text-[#9890a8] hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};

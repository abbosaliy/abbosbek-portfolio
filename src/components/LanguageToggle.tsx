import i18n from 'i18next';
import { useState, useEffect } from 'react';

export function LanguageToggle() {
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    setLang(i18n.language);
  }, []);

  const isDE = lang === 'de';

  const toggleLanguage = () => {
    const newLang = isDE ? 'en' : 'de';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
    setLang(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative h-10 w-20 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center px-1 transition"
    >
      <span className="text-xs font-medium ml-2 text-gray-600">EN</span>
      <span className="text-xs font-medium ml-auto mr-2 text-gray-600">DE</span>

      <div
        className={`absolute top-1 h-8 w-8 rounded-full bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 flex items-center justify-center text-xs font-bold ${
          isDE ? 'translate-x-10' : 'translate-x-0'
        }`}
      >
        {isDE ? 'DE' : 'EN'}
      </div>
    </button>
  );
}

import { useState } from 'react';
import { FiMenu, FiSun, FiX } from 'react-icons/fi';
import { ThemeToggle } from './ThemaToggle';
import { LanguageToggle } from './LanguageToggle';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const links = [
    { key: 'about', label: t('about') },
    { key: 'skills', label: t('skills') },
    { key: 'projects', label: t('projects') },
    { key: 'contact', label: t('contact') },
  ];

  return (
    <>
      <header
        id="header"
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 text-black dark:text-white border-b border-gray-200/100 dark:border-gray-700/80"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 ">
          <a href="header">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="relative h-14 w-14 flex items-center justify-center hover:scale-105 duration-300 ">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 blur-lg opacity-25"></div>
                <div className="relative h-10 w-10 rounded-full p-[2px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
                  <div className="h-full w-full rounded-full bg-black flex items-center justify-center shadow-inner">
                    <span className="text-white font-semibold tracking-wide">
                      AN
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-lg font-bold tracking-wide text-slate-700 dark:text-white hover:text-purple-500 transition">
                Abbosbek Anvarjonov
              </span>
            </div>
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.key}
                  href={`#${link.key}`}
                  className="relative group px-1 hover:text-purple-500 transition"
                >
                  <span className="transition">{link.label}</span>
                  <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>
              <LanguageToggle />
              <button
                className="lg:hidden text-2xl relative z-50"
                onClick={() => setOpen(!open)}
              >
                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {open ? <FiX /> : <FiMenu />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-screen w-[85%] sm:w-[70%] max-w-xs z-50 
                   bg-white dark:bg-gray-900 
                   border-l border-gray-200/80 dark:border-gray-700/80 
                   shadow-xl p-4 sm:p-5 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6 border-b border-gray-200/80 dark:border-gray-700/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="relative h-12 w-12 flex items-center justify-center hover:scale-105 duration-300 cursor-pointer">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 blur-md opacity-25"></div>

                    <div className="relative h-9 w-9 rounded-full p-[2px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
                      <div className="h-full w-full rounded-full bg-black flex items-center justify-center shadow-inner">
                        <span className="text-white text-sm font-semibold">
                          AN
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-base font-semibold text-slate-700 dark:text-white">
                    Abbosbek
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white transition"
                >
                  <FiX />
                </button>
              </div>

              <nav className="flex flex-col gap-5">
                {links.map((link, i) => (
                  <motion.a
                    key={link.key}
                    href={`#${link.key}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: i * 0.08 }}
                    className="inline-block relative group hover:text-purple-500 transition text-black dark:text-white text-sm font-medium"
                  >
                    <span className="relative inline-block">
                      {link.label}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </motion.a>
                ))}

                <div className="border-t border-gray-200/80 dark:border-gray-700/80 pt-4 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm dark:text-white text-black">
                    <FiSun className="opacity-70" />
                    <span>Theme</span>
                  </div>
                  <ThemeToggle />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

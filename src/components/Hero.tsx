import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

function Hero() {
  const { t } = useTranslation();

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }

   
  };

  const handleContactClick = () => {
    const contacSection = document.getElementById('contact');
    if (contacSection) {
      contacSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 pt-40 lg:px-8 min-h-screen  flex flex-col lg:flex-row  justify-between   gap-10">
      <div className="flex flex-col items-start gap-8 ">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="rounded-xl border border-violet-500/45 px-3 py-0.5 text-xs text-violet-500 font-medium">
            PORTFOLIO 2026
          </span>

          <span className="flex items-center gap-2 rounded-xl bg-violet-500/10 px-3 py-1 font-semibold text-xs text-black/80 dark:text-white/80">
            <span className="relative flex h-2.5 w-2.5">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                animate={{ scale: [1, 1.6, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {t('status')}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold 
        bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
        bg-clip-text text-transparent"
            animate={{
              clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          >
            {t('title')}
          </motion.h2>

          <p className="text-bolder sm:text-md text-slate-600 dark:text-gray-300">
            {t('subtitle')}
          </p>
          <p className="text-bolder sm:text-md text-slate-600 dark:text-gray-300">
            {t('subDescription')}
          </p>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={handleProjectsClick}
            className="px-4 py-2  bg-purple-500 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            {t('projectsButton')}
          </button>

          <button
            onClick={handleContactClick}
            className="ml-4 px-4 py-2 border text-black dark:text-white border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 dark:hover:bg-gray-500"
          >
            {t('contactButton')}
          </button>
          <span
            className="text-xs px-3 py-1 rounded-full 
                 text-gray-600
                 dark:text-gray-300 "
          >
            {t('location')}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400">
            KONTAKT & NETZWERK
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/abbosaliy"
              target="_blank"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
            >
              <FaGithub className="text-gray-600 dark:text-gray-400" />
            </a>

            <a className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer">
              <FaLinkedinIn className="text-gray-600 dark:text-gray-400" />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs  text-black dark:text-white/80">
          <span className="  border border-gray-300 dark:border-gray-700  dark:bg-gray-800  px-2 py-1 rounded-xl">
            JavaScript
          </span>
          <span className="font-mono border border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-2 py-1 rounded-xl">
            TypeScript
          </span>
          <span className="font-mono border border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-2 py-1 rounded-xl">
            React
          </span>
          <span className="font-mono border border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-2 py-1 rounded-xl">
            Tailwind CSS
          </span>
        </div>
      </div>

      <div className="relative w-full max-w-sm flex justify-center items-center mx-auto">
        <div
          className="absolute -top-5 left-1/2 -translate-x-1/2 
                w-[150%] h-[90%]
                bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30
                blur-2xl opacity-50 rounded-full"
        ></div>

        <motion.div
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className="relative"
        >
          <div className="w-80 aspect-square overflow-hidden rounded-full shadow-[0_15px_15px_rgba(0,0,0,0.1)]">
            <img
              src="images/person.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;

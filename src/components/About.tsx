import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TfiArrowsHorizontal } from 'react-icons/tfi';

type Experience = {
  period: string;
  company: string;
  role: string;
  location: string;
  description: string[];
};


function About() {
  const { t } = useTranslation();
  const data = t('experience', { returnObjects: true }) as Experience[];

  return (
    <section
      id="about"
      className="max-w-[90rem] mx-auto px-4 sm:px-6 pt-40 lg:px-8 min-h-screen flex flex-col gap-10"
    >
      <div className="flex flex-col max-w-3xl gap-5">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-sm font-semibold tracking-wide uppercase 
                        text-purple-500 dark:text-purple-400"
        >
          Über mich
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-2xl sm:text-3xl font-bold 
                        text-gray-900 dark:text-white/80 leading-tight"
        >
          {t('aboutTitle')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-base sm:text-md text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          {t('aboutContent')}
        </motion.p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-300"></span>
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              {t('journey')}
            </span>
          </div>
          <div
            className="sm:flex hidden  items-center gap-2 
                            text-xs text-gray-500 dark:text-gray-400 
                            px-3 py-1 rounded-full 
                            border border-gray-300 dark:border-gray-700 "
          >
            <TfiArrowsHorizontal className="w-4 h-4  opacity-70" />
            <span>{t('scrollHint')}</span>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-6 overflow-x-auto sm:overflow-x-auto py-4 custom-scrollbar"
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="p-5 max-w-xs min-w-[250px] h-[300px] flex-shrink-0 
                                border border-gray-300 dark:border-gray-700 
                                rounded-xl shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 
                                hover:shadow-lg transition hover:-translate-y-1 duration-300"
          >
            <div
              className="flex items-center gap-3 mb-4 
                                    border-b border-gray-300 dark:border-gray-700 
                                    pb-4 -mx-5 px-5"
            >
              {i === data.length - 1 ? (
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full 
                                            bg-green-400 opacity-75 animate-ping"
                  ></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                </span>
              ) : (
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              )}

              <div>
                <span className="text-[11px] font-semibold text-gray-800 dark:text-gray-400 ">
                  {item.period}
                </span>

                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.company}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pb-10">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {item.role}
              </p>

              <span className="text-xs text-gray-500 dark:text-gray-400">
                {item.location}
              </span>

              <div className="flex flex-wrap gap-2 mt-2">
                {item.description.map((desc: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs font-medium  text-gray-600 dark:text-gray-300"
                  >
                    {desc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default About;

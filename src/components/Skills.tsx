import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import { SiTypescript, SiVite, SiSupabase, SiShadcnui } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import { TbSql } from 'react-icons/tb';
import { SiMui, SiBootstrap, SiWebpack, SiJson } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';
import { GiToolbox } from 'react-icons/gi';
import { MdPalette } from 'react-icons/md';
import { MdStorage } from 'react-icons/md';
import { MdBuild } from 'react-icons/md';

function Skills() {
  const { t } = useTranslation();
  const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 className="text-orange-500" />,
      category: 'ui',
    },
    {
      name: 'CSS/SCSS',
      icon: <FaCss3Alt className="text-blue-500" />,
      category: 'ui',
    },
    {
      name: 'JavaScript',
      icon: <FaJs className="text-yellow-400" />,
      category: 'frontend',
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="text-blue-600" />,
      category: 'frontend',
    },
    {
      name: 'React',
      icon: <FaReact className="text-cyan-400" />,
      category: 'frontend',
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-cyan-400" />,
      category: 'ui',
    },
    {
      name: 'Bootstrap',
      icon: <SiBootstrap className="text-purple-600" />,
      category: 'ui',
    },
    {
      name: 'Material UI',
      icon: <SiMui className="text-blue-500" />,
      category: 'ui',
    },
    {
      name: 'shadcn/ui',
      icon: <SiShadcnui className="text-gray-700 dark:text-gray-300" />,
      category: 'ui',
    },

    {
      name: 'Git',
      icon: <FaGitAlt className="text-orange-600" />,
      category: 'tools',
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-gray-800 dark:text-white" />,
      category: 'tools',
    },
    {
      name: 'Webpack',
      icon: <SiWebpack className="text-blue-400" />,
      category: 'tools',
    },
    {
      name: 'Vite',
      icon: <SiVite className="text-purple-500" />,
      category: 'tools',
    },
    {
      name: 'Supabase',
      icon: <SiSupabase className="text-green-600" />,
      category: 'tools',
    },
    {
      name: 'GitHub Copilot',
      icon: <FaRobot className="text-gray-700 dark:text-gray-300" />,
      category: 'tools',
    },
    {
        name:'SQL',
        icon: <TbSql className="text-green-500" />,
        category: 'api',
    },

    {
      name: 'REST API',
      icon: <MdApi className="text-green-500" />,
      category: 'api',
    },
    {
      name: 'JSON',
      icon: <SiJson className="text-yellow-500" />,
      category: 'api',
    },
  ];
  

  return (
    <section
      id="skills"
      className="max-w-[90rem] mx-auto px-4 sm:px-6 pt-40 lg:px-8 min-h-screen flex  flex-col gap-5"
    >
        <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-sm font-semibold tracking-wide uppercase 
                        text-purple-500 dark:text-purple-400"
        >
            {t('skillsTitle')}
        </motion.h2>
        <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-2xl font-bold text-gray-900 dark:text-gray-100"
        >
            {t('skillsSubtitle')}
        </motion.h3>
        <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-gray-700 dark:text-gray-300 max-w-3xl"
        >
            {t('skillsContent')}
        </motion.p>   
        

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-wrap gap-3 mt-8 border border-gray-200 dark:border-gray-700 rounded-xl p-4"
            >
            {skills.map((skill, i) => (
            <div
                key={i}
                className="flex items-center gap-1 px-3 py-1 
                                        border border-gray-200 dark:border-gray-700 
                                        rounded-xl  hover:shadow-md transition"
            >
                <div className="text-md">{skill.icon}</div>

                <span className="text-xs font-medium text-gray-800 dark:text-gray-300">
                {skill.name}
                </span>
            </div>
            ))}
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col md:flex-row md:items-start  gap-6 mt-8"
            >
            <div className="md:max-w-xs">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 transition">
                    <GiToolbox className="text-gray-700 dark:text-gray-300 text-xl" />
                    <span className="group-hover:text-blue-500 transition">
                        {t('technologiesTitle')}
                    </span>
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {t('technologiesSubtitle')}
                </p>
            </div>
            <div className="flex w-full  flex-wrap gap-3 border border-gray-200 dark:border-gray-700 rounded-xl p-8">
                {skills
                    .filter((skill) => skill.category === "frontend")
                    .map((skill, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-1 px-3 py-1 
                                    border border-gray-200 dark:border-gray-700 
                                    rounded-xl hover:shadow-md transition"
                        >
                            <div className="text-md">
                                {skill.icon}
                            </div>
                            <span className="text-xs font-medium text-gray-800 dark:text-gray-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col md:flex-row md:items-start  gap-6 mt-8"
            >
            <div className="md:max-w-xs">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 transition">
                    <MdPalette className="text-gray-700 dark:text-gray-300 text-xl" />
                    <span className="group-hover:text-blue-500 transition">
                        {t('uiTitle')}
                    </span>
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {t('uiSubtitle')}
                </p>
            </div>
            <div className="flex w-full  flex-wrap gap-3 border border-gray-200 dark:border-gray-700 rounded-xl p-8">
                {skills
                    .filter((skill) => skill.category === "ui")
                    .map((skill, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-1 px-3 py-1 
                                    border border-gray-200 dark:border-gray-700 
                                    rounded-xl hover:shadow-md transition"
                        >
                            <div className="text-md">
                                {skill.icon}
                            </div>

                            <span className="text-xs font-medium text-gray-800 dark:text-gray-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
            </div>

        </motion.div>

      
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col md:flex-row md:items-start  gap-6 mt-8"
            >

            <div className="md:max-w-xs">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 transition">
                    <MdStorage className="text-gray-700 dark:text-gray-300 text-xl" />
                    <span className="group-hover:text-blue-500 transition">
                        {t('apiTitle')}
                    </span>
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {t('apiSubtitle')}
                </p>
            </div>
            <div className="flex w-full  flex-wrap gap-3 border border-gray-200 dark:border-gray-700 rounded-xl p-8">
                {skills
                    .filter((skill) => skill.category === "api")
                    .map((skill, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-1 px-3 py-1 
                                    border border-gray-200 dark:border-gray-700 
                                    rounded-xl hover:shadow-md transition"
                        >
                            <div className="text-md">
                                {skill.icon}
                            </div>

                            <span className="text-xs font-medium text-gray-800 dark:text-gray-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
            </div>

        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col md:flex-row md:items-start  gap-6 mt-8"
            >

            <div className="md:max-w-xs">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 transition">
                    <MdBuild className="text-gray-700 dark:text-gray-300 text-xl" />
                    <span className="group-hover:text-blue-500 transition">
                        {t('toolsTitle')}
                    </span>
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {t('toolsSubtitle')}
                </p>
            </div>

            <div className="flex w-full  flex-wrap gap-3 border border-gray-200 dark:border-gray-700 rounded-xl p-8">
                {skills
                    .filter((skill) => skill.category === "tools")
                    .map((skill, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-1 px-3 py-1 
                                    border border-gray-200 dark:border-gray-700 
                                    rounded-xl hover:shadow-md transition"
                        >
                            <div className="text-md">
                                {skill.icon}
                            </div>

                            <span className="text-xs font-medium text-gray-800 dark:text-gray-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
            </div>

        </motion.div>
    </section>
  );
}

export default Skills;

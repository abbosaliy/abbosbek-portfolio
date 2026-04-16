import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FiCheckCircle,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="max-w-[90rem] mx-auto px-4 sm:px-6 pt-40 lg:px-8 min-h-screen flex flex-col gap-12"
    >
      <div className="flex flex-col max-w-3xl gap-5">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-sm font-semibold tracking-wide uppercase text-purple-500 dark:text-purple-400"
        >
          {t("contact")}
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-2xl font-bold text-gray-900 dark:text-gray-100"
        >
          {t("contactTitel")}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-gray-700 dark:text-gray-300 max-w-3xl"
        >
          {t("contactDescription")}
        </motion.p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-5 border border-gray-200 dark:border-gray-700 rounded-xl p-5 transition hover:shadow-md">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t("info.titel")}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-sm">
                {t("info.description")}
              </p>
            </div>

            <span className="relative flex h-3 w-3 mt-1">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <a
              href="abbosbekanvarjonov8@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition">
                <FiMail className="text-gray-600 dark:text-gray-300" />
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {t("info.emailLabel")}
                </span>
                <span className="text-sm text-gray-900 dark:text-white group-hover:underline">
                  abbosbekanvarjonov8@gmail.com
                </span>
              </div>
            </a>
            <a
              href="tel:+49123456789"
              className="flex items-center gap-3 group"
            >
              <div className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition">
                <FiPhone className="text-gray-600 dark:text-gray-300" />
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {t("info.phoneLabel")}
                </span>
                <span className="text-sm text-gray-900 dark:text-white group-hover:underline">
                  +49 173 475 91 22
                </span>
              </div>
            </a>

            <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
    
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg border border-gray-200 dark:border-gray-700">
                  <FiCheckCircle className="text-green-500" />
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {t("availability.label")}
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {t("availability.value")}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg border border-gray-200 dark:border-gray-700">
                  <FiMapPin className="text-gray-600 dark:text-gray-300" />
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Standort
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {t("location")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t("social.titel")}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {t("social.description")}
            </p>
          </div>

          <a
            href="https://github.com/abbosaliy"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md border border-gray-200 dark:border-gray-700 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition">
                <FaGithub className="text-gray-700 dark:text-gray-300" />
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  GitHub
                </h4>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t("social.github")}
                </p>
              </div>
            </div>
            <GoArrowUpRight className="text-gray-400 group-hover:translate-x-1 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/abbosbek-an"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md border border-gray-200 dark:border-gray-700 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition">
                <FaLinkedin className="text-blue-500" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  LinkedIn
                </h4>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t("social.linkedin")}
                </p>
              </div>
            </div>

            <GoArrowUpRight className="text-gray-400 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

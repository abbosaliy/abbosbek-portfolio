import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import ImpressumModal from "./modals/Imprint";
import DatenschutzModal from "./modals/privacyPolicy";

function Footer() {
  const [modal, setModal] = useState<"impressum" | "datenschutz" | null>(null);
  const { t } = useTranslation();

  return (
    <section className="border-t border-gray-200 dark:border-gray-700">
     
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 pt-10 lg:px-8 pb-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-sm flex flex-col gap-3">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="relative h-14 w-14 flex items-center justify-center hover:scale-105 duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 blur-lg opacity-25"></div>
                <div className="relative h-10 w-10 rounded-full p-[2px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
                  <div className="h-full w-full rounded-full bg-black flex items-center justify-center shadow-inner">
                    <span className="text-white font-semibold tracking-wide">
                      AN
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-md font-bold tracking-wide text-slate-700 dark:text-white hover:text-purple-500 transition">
                Abbosbek Anvarjonov
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {t("footerdescription")}
            </p>
          </div>

     
          <div className="flex flex-col sm:flex-row gap-10">
    
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Navigation
              </h3>

              <ul className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a href="#about" className="hover:text-purple-500 transition">
                    {t("about")}
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-purple-500 transition">
                    {t("skills")}
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-purple-500 transition">
                    {t("projects")}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-purple-500 transition">
                    {t("contact")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {t("footerContact")}
              </h3>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {t("info.emailLabel")}
                  </span>
                  <a
                    href="abbosbekanvarjonov8@gmail.com"
                    className="text-gray-900 dark:text-white"
                  >
                    abbosbekanvarjonov8@gmail.com
                  </a>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {t("info.phoneLabel")}
                  </span>
                  <a
                    href="tel:+49123456789"
                    className="text-gray-900 dark:text-white"
                  >
                    +49 173 475 91 22
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {t("footerSocial")}
              </h3>

              <ul className="flex items-center gap-3">
                <a
                  href="https://github.com/abbosaliy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-transparent hover:border-black/20 dark:hover:border-purple-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200"
                >
                  <FaGithub className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>

                <a
                  href="https://www.linkedin.com/in/abbosbek-an"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-transparent hover:border-black/10 dark:hover:border-purple-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

     
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 pt-6 lg:px-8 pb-10 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2026 Abbosbek Anvarjonov. {t("footerRights")}
          </p>
          <div className="text-xs text-gray-500 dark:text-gray-400 flex gap-4">
            <button onClick={() => setModal("impressum")}>{t("imprint")}</button>
            <button onClick={() => setModal("datenschutz")}>{t("policy")}</button>
            {modal === "impressum" && (
              <ImpressumModal onClose={() => setModal(null)} />
            )}
            {modal === "datenschutz" && (
              <DatenschutzModal onClose={() => setModal(null)} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

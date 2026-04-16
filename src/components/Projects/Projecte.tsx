
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Carousel from "./cotrusel";

function Projecte() {
    const { t } = useTranslation();
   
      
  return( 
    <section id="projects" className="max-w-[90rem] mx-auto px-4 sm:px-6 pt-40 lg:px-8 min-h-screen flex   flex-col       gap-12">

        <div  className="flex flex-col max-w-3xl gap-5">
            
            <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-sm font-semibold tracking-wide uppercase 
                                text-purple-500 dark:text-purple-400">
                        {t("projectsTitle")}
            </motion.h2>

            <motion.h3
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {t('projectsSubtitle')}
            </motion.h3>

            <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-gray-700 dark:text-gray-300 max-w-3xl" >
                            {t('projectsDescription')}
            </motion.p>   
        </div>

        <div className="flex flex-col gap-10 border rounded-lg border-gray-300 dark:border-gray-700 pt-10">
       <Carousel />

        </div>


    </section>
  );
}

export default Projecte;

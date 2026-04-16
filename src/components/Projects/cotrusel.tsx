import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
  technologies?: string[];
  live: string;
  liveGithub: string;
  fulldescription: string;
};

export default function ProjectCarousel() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const { t } = useTranslation();

  const raw = t("resources", { returnObjects: true });
  const projects = Array.isArray(raw) ? raw : [];

  console.log("resources:", projects);

  return (
    <div className="relative mt-10">
      <button
        className="swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-md dark:shadow-gray-700/50 hover:scale-110 transition duration-200"
      >
        <FaChevronLeft />
      </button>

      <button
        className="swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-md dark:shadow-gray-700/50 hover:scale-110 transition duration-200"
      >
        <FaChevronRight />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1.2}
        centeredSlides
        loop
        speed={500}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.5 },
        }}
      >
        {projects.map((item: Project) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => setActiveProject(item)}
              className="h-[400px] flex flex-col rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 cursor-pointer bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="h-[65%] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-4 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-2.5 py-1 border border-gray-200 dark:border-gray-700 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>

                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Web Development
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    FRONTEND
                  </p>
                </div>

                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between gap-2 mt-2">
                  {item.technologies && item.technologies.length > 0 && (
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-200 flex flex-wrap gap-1">
                      {item.technologies.map((tech: string, idx: number) => (
                        <span key={idx}>
                          {tech}
                          {idx < item.technologies!.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                  )}
                  <button className="mt-auto px-4 py-2 bg-purple-500 text-white rounded-lg text-sm hover:opacity-90">
                    {t("details")}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-2xl w-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-3 p-6 border-b border-gray-300 dark:border-gray-700">
              <div className="flex items-center justify-between gap-3">
                <h1 className="text-sm font-semibold text-purple-500 dark:text-purple-400 tracking-wide uppercase">
                  PROJECTS
                </h1>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-2 rounded-full transition duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                >
                  <IoCloseSharp className="w-5 h-5" />
                </button>
              </div>
              <h2 className="font-bold text-gray-900 dark:text-white/90">
                {activeProject.title}
              </h2>
            </div>

            <div className="px-6 pt-4">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div className="p-6 flex flex-col gap-5 flex-1">
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Project
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-400">
                    Web Development Project
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Tech stack
                  </p>

                  {activeProject.technologies &&
                    activeProject.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {activeProject.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="text-xs font-medium text-gray-700 dark:text-gray-400 border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                </div>
              </div>
              <div className="border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {activeProject.fulldescription}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <a
                  href={activeProject?.live || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition"
                >
                  Live Demo
                </a>

                <a
                  href={activeProject?.liveGithub || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-purple-500 dark:hover:border-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
               {t("close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import { useTranslation } from "react-i18next";

type Props = {
  onClose: () => void;
};

export default function ImpressumModal({ onClose }: Props) {
     const { t } = useTranslation();
    
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-xl w-full p-6 shadow-xl border border-gray-200 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t("imprint")}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Rechtliche Hinweise für diese Website
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Angaben gemäß § 5 TMG
            </h3>

            <div className="flex flex-col gap-1 text-gray-600 dark:text-gray-400">
              <p>Abbosbek Anvarjonov</p>
              <p>Ringerweg 4</p>
              <p>06110 Halle</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Kontakt
            </h3>

            <div className="flex flex-col gap-1 text-gray-600 dark:text-gray-400">
              <p>Telefon: 01734759122</p>
              <p>E-Mail: abbosbekanvarjonov8@gmail.com</p>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">Quelle:</p>
            <a
              href="https://www.e-recht24.de/impressum-generator.html"
              target="_blank"
              className="text-xs text-purple-500 hover:underline break-all"
            >
              e-recht24.de/impressum-generator
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
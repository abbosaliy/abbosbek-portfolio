import { useTranslation } from "react-i18next";

type Props = {
  onClose: () => void;
};

export default function DatenschutzModal({ onClose }: Props) {
  const { t } = useTranslation();

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t("policy")}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Informationen zum Umgang mit personenbezogenen Daten gemäß DSGVO
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-8">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              1. Datenschutz auf einen Blick
            </h3>
            <p>
              Die folgenden Hinweise geben einen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website
              besuchen...
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              2. Datenerfassung auf dieser Website
            </h3>
            <p>
              Die Datenverarbeitung erfolgt durch den Websitebetreiber. Daten
              werden entweder direkt durch Ihre Eingaben oder automatisch durch
              unsere IT-Systeme erfasst.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              3. Hosting
            </h3>
            <p>
              Diese Website wird bei ALL-INKL.COM – Neue Medien Münnich
              gehostet.
            </p>

            <a
              href="https://all-inkl.com/datenschutzinformationen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline text-xs block mt-2"
            >
              Datenschutzinformationen des Hostings
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              4. Allgemeine Hinweise und Pflichtinformationen
            </h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst...
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              5. Verantwortliche Stelle
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-1">
              <p>Abbosbek Anvarjonov</p>
              <p>Deutschland</p>
              <p>Telefon: +49 173 495 91 22</p>
              <p>E-Mail: abbosbekanvarjonov.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              6. Ihre Rechte
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Auskunft über gespeicherte Daten</li>
              <li>Berichtigung oder Löschung</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Widerruf erteilter Einwilligungen</li>
              <li>Beschwerderecht bei Aufsichtsbehörde</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              7. Speicherdauer
            </h3>
            <p>
              Ihre personenbezogenen Daten verbleiben nur so lange bei uns, wie
              dies für den jeweiligen Zweck erforderlich ist.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              8. Datenverarbeitung auf Grundlage der DSGVO
            </h3>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 DSGVO
              (Einwilligung, Vertragserfüllung oder berechtigtes Interesse).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              9. Datensicherheit
            </h3>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet
              Sicherheitslücken aufweisen kann.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-1">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Quelle:
            </p>

            <a
              href="https://www.e-recht24.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-500 hover:underline break-all"
            >
              e-recht24.de
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './thema-provider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="h-10 w-10 rounded-full flex items-center justify-center 
             
             border border-gray-300 dark:border-gray-700
             shadow-sm
             hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700
             transition-transform duration-300
             "
    >
      <div className="transition-transform duration-500 rotate-0 dark:rotate-180">
        {isDark ? (
          <FiSun className="w-5 h-5 text-black dark:text-white" />
        ) : (
          <FiMoon className="w-5 h-5 text-black dark:text-white" />
        )}
      </div>
    </button>
  );
}

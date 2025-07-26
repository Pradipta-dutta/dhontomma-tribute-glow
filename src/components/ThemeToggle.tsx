
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const ThemeToggle = ({ darkMode, setDarkMode }: ThemeToggleProps) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed top-6 right-6 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
        darkMode 
          ? 'bg-white/10 text-white hover:bg-white/20' 
          : 'bg-black/10 text-black hover:bg-black/20'
      } backdrop-blur-sm border ${
        darkMode ? 'border-white/20' : 'border-black/20'
      }`}
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;

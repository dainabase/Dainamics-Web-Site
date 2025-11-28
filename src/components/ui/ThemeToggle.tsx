// src/components/ui/ThemeToggle.tsx
// Bouton toggle pour changer le thème : system → light → dark → system

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Cycle : dark → light → system → dark
  const cycleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('system');
    } else {
      setTheme('dark');
    }
  };

  // Icône selon le thème actuel
  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className="w-4 h-4" />;
    }
    if (theme === 'light') {
      return <Sun className="w-4 h-4" />;
    }
    return <Moon className="w-4 h-4" />;
  };

  // Tooltip selon le thème
  const getTooltip = () => {
    if (theme === 'system') {
      return 'Thème : Système';
    }
    if (theme === 'light') {
      return 'Thème : Clair';
    }
    return 'Thème : Sombre';
  };

  return (
    <button
      onClick={cycleTheme}
      className="
        relative p-2 rounded-lg
        bg-gray-900/10 hover:bg-gray-900/20
        dark:bg-white/5 dark:hover:bg-white/10
        border border-gray-900/20 dark:border-white/10
        text-gray-900 hover:text-gray-700
        dark:text-white/70 dark:hover:text-white
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-dainamics-primary/50
      "
      title={getTooltip()}
      aria-label={getTooltip()}
    >
      {getIcon()}
    </button>
  );
}

export default ThemeToggle;

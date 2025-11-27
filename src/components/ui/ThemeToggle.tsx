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
        bg-white/5 hover:bg-white/10
        dark:bg-white/5 dark:hover:bg-white/10
        light:bg-gray-900/5 light:hover:bg-gray-900/10
        border border-white/10 dark:border-white/10 light:border-gray-900/10
        text-white/70 hover:text-white
        dark:text-white/70 dark:hover:text-white
        light:text-gray-900/70 light:hover:text-gray-900
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

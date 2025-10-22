/**
 * Custom hook for persistent state with localStorage
 * Automatically saves and restores state across sessions
 */

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  expirationMinutes?: number
): [T, (value: T | ((val: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) return initialValue;

      const parsed = JSON.parse(item);

      if (expirationMinutes && parsed.expiry) {
        const now = new Date().getTime();
        if (now > parsed.expiry) {
          window.localStorage.removeItem(key);
          return initialValue;
        }
      }

      return parsed.value || initialValue;
    } catch (error) {
      console.error(`Error loading from localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      const itemToStore = expirationMinutes
        ? {
            value: valueToStore,
            expiry: new Date().getTime() + expirationMinutes * 60 * 1000
          }
        : { value: valueToStore };

      window.localStorage.setItem(key, JSON.stringify(itemToStore));
    } catch (error) {
      console.error(`Error saving to localStorage key "${key}":`, error);
    }
  };

  const clearValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`Error clearing localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue, clearValue];
}

export function useQuestionnaireProgress() {
  const [progress, setProgress, clearProgress] = useLocalStorage(
    'dainamics_questionnaire_progress',
    {
      currentStep: 0,
      selectedChallenges: [] as string[],
      specificAnswers: {} as Record<string, string[]>,
      formData: { email: '', name: '', company: '', consent: false },
      startTime: Date.now()
    },
    30
  );

  return { progress, setProgress, clearProgress };
}

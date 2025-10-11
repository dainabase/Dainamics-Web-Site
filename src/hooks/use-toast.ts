
import { useState, useEffect, useCallback } from "react";

export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback((toast: Omit<ToastProps, "id">) => {
    setToasts((prev) => [
      ...prev,
      { ...toast, id: Math.random().toString(36).substring(2, 9) },
    ]);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return {
    toasts,
    addToast,
    dismissToast,
  };
}

export function toast(props: Omit<ToastProps, "id">) {
  const event = new CustomEvent("toast", {
    detail: props,
  });
  window.dispatchEvent(event);
}

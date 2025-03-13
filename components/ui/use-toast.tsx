"use client";

import * as React from "react";

export interface Toast {
  id: number;
  title: string;
  description?: string;
  variant?: "default" | "destructive";
}

const ToastContext = React.createContext<{
  toasts: Toast[];
  toast: (toast: Omit<Toast, "id">) => void;
} | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, "id">) => {
    setToasts((prev) => [...prev, { id: Date.now(), ...toast }]);

    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000); // Auto-hide after 3s
  };

  return (
    <ToastContext.Provider value={{ toasts, toast: addToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

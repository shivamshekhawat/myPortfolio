"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useToast as useShadToast } from "@/components/ui/use-toast";
import { X } from "lucide-react"; // Import close icon

export function Toaster() {
  const { toasts } = useShadToast(); // Get all active toasts

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map(({ id, title, description, variant }) => (
        <div
          key={id}
          className={cn(
            "p-4 rounded-lg shadow-md flex items-start justify-between gap-4 transition-opacity duration-300",
            variant === "destructive" ? "bg-red-500" : "bg-gray-900"
          )}
        >
          <div>
            <strong>{title}</strong>
            {description && <p className="text-sm">{description}</p>}
          </div>
          <button
            className="text-white hover:opacity-75"
            onClick={() => {
              // Handle manual dismissal
            }}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}

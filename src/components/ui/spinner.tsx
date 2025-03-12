import React from "react";

export function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-t-transparent border-neutral-800 dark:border-neutral-200 rounded-full animate-spin"></div>
    </div>
  );
}

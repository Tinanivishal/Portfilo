// src/components/ui/badge.jsx
import React from "react";

export function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-sm ${className}`}
    >
      {children}
    </span>
  );
}

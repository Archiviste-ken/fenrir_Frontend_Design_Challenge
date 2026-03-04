/* filepath: c:\Users\Asus\OneDrive\Desktop\fenrir-dashboard\src\components\ui\EmptyState.tsx */
"use client";

import React from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function EmptyState({ title, description, icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div
        className="flex items-center justify-center rounded-full mb-4"
        style={{
          width: "56px",
          height: "56px",
          background: "var(--bg-tertiary)",
          color: "var(--text-muted)",
        }}
      >
        {icon || (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        )}
      </div>
      <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
        {title}
      </h3>
      <p className="text-xs max-w-xs" style={{ color: "var(--text-muted)" }}>
        {description}
      </p>
    </div>
  );
}
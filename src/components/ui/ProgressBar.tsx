/* filepath: c:\Users\Asus\OneDrive\Desktop\fenrir-dashboard\src\components\ui\ProgressBar.tsx */
"use client";

import React from "react";

interface ProgressBarProps {
  value: number;
  size?: "sm" | "md";
  showLabel?: boolean;
  color?: string;
}

export default function ProgressBar({
  value,
  size = "sm",
  showLabel = false,
  color,
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));
  const barColor = color || "var(--accent-primary)";

  return (
    <div className="flex items-center gap-2 w-full">
      <div
        className="flex-1 rounded-full overflow-hidden"
        style={{
          height: size === "sm" ? "4px" : "6px",
          background: "var(--bg-tertiary)",
        }}
      >
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${clampedValue}%`,
            background: barColor,
          }}
        />
      </div>
      {showLabel && (
        <span
          className="text-[11px] font-medium tabular-nums flex-shrink-0"
          style={{ color: "var(--text-secondary)", minWidth: "32px", textAlign: "right" }}
        >
          {clampedValue}%
        </span>
      )}
    </div>
  );
}
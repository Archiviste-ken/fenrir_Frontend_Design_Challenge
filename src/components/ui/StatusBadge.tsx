/* filepath: c:\Users\Asus\OneDrive\Desktop\fenrir-dashboard\src\components\ui\StatusBadge.tsx */
"use client";

import React from "react";
import type { ScanStatus } from "@/types";

const config: Record<ScanStatus, { label: string; color: string; bg: string; pulse?: boolean }> = {
  completed: { label: "Completed", color: "var(--status-success)", bg: "var(--status-success-bg)" },
  running: { label: "Running", color: "var(--status-running)", bg: "var(--status-running-bg)", pulse: true },
  failed: { label: "Failed", color: "var(--status-error)", bg: "var(--status-error-bg)" },
  queued: { label: "Queued", color: "var(--status-warning)", bg: "var(--status-warning-bg)" },
};

export default function StatusBadge({ status }: { status: ScanStatus }) {
  const c = config[status];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        padding: "2px 8px",
        borderRadius: "9999px",
        fontSize: "11px",
        fontWeight: 600,
        background: c.bg,
        color: c.color,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: c.color,
          flexShrink: 0,
          animation: c.pulse ? "pulseDot 2s ease-in-out infinite" : "none",
        }}
      />
      {c.label}
    </span>
  );
}
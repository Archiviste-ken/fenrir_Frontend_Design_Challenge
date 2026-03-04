/* filepath: c:\Users\Asus\OneDrive\Desktop\fenrir-dashboard\src\components\ui\SeverityBadge.tsx */
"use client";

import React from "react";
import type { SeverityLevel } from "@/types";

const config: Record<SeverityLevel, { label: string; color: string; bg: string; border: string }> = {
  critical: { label: "Critical", color: "var(--severity-critical)", bg: "var(--severity-critical-bg)", border: "var(--severity-critical-border)" },
  high: { label: "High", color: "var(--severity-high)", bg: "var(--severity-high-bg)", border: "var(--severity-high-border)" },
  medium: { label: "Medium", color: "var(--severity-medium)", bg: "var(--severity-medium-bg)", border: "var(--severity-medium-border)" },
  low: { label: "Low", color: "var(--severity-low)", bg: "var(--severity-low-bg)", border: "var(--severity-low-border)" },
  info: { label: "Info", color: "var(--severity-info)", bg: "var(--severity-info-bg)", border: "var(--severity-info-border)" },
};

export default function SeverityBadge({ severity }: { severity: SeverityLevel }) {
  const c = config[severity];
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
        border: `1px solid ${c.border}`,
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: c.color, flexShrink: 0 }} />
      {c.label}
    </span>
  );
}
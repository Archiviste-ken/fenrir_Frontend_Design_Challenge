/* filepath: c:\Users\Asus\OneDrive\Desktop\fenrir-dashboard\src\components\dashboard\StatsBar.tsx */
"use client";

import React from "react";

interface DashboardStats {
  totalScans: number;
  activeProjects: number;
  totalFindings: number;
  criticalFindings: number;
  highFindings: number;
  mediumFindings: number;
  lowFindings: number;
  overallScore: number;
}

export default function StatsBar({ stats }: { stats: DashboardStats }) {
  const items = [
    { label: "Score", value: String(stats.overallScore), accent: true },
    { label: "Project", value: "Project X", accent: false },
    { label: "Scans", value: stats.totalScans.toLocaleString(), accent: false },
    { label: "Findings", value: String(stats.totalFindings), accent: false },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        padding: "10px 20px",
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-primary)",
        overflowX: "auto",
      }}
    >
      {items.map((item, i) => (
        <React.Fragment key={item.label}>
          {i === 1 && (
            <div style={{ width: "1px", height: "28px", background: "var(--border-primary)", flexShrink: 0 }} />
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", flexShrink: 0 }}>
            <span style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)" }}>
              {item.label}
            </span>
            <span style={{ fontSize: "18px", fontWeight: 700, color: item.accent ? "var(--accent-primary)" : "var(--text-primary)", fontVariantNumeric: "tabular-nums" }}>
              {item.value}
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
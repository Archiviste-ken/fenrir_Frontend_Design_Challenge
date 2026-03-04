/* filepath: c:\Users\Asus\OneDrive\Desktop\fenrir-dashboard\src\components\ui\CircularProgress.tsx */
"use client";

import React from "react";

interface Props {
  value: number;
  size?: number;
  strokeWidth?: number;
}

export default function CircularProgress({ value, size = 100, strokeWidth = 8 }: Props) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  const color = value >= 80 ? "var(--status-success)" : value >= 50 ? "var(--status-warning)" : "var(--status-error)";

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--bg-tertiary)" strokeWidth={strokeWidth} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={strokeWidth} strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" style={{ transition: "stroke-dashoffset 700ms ease" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "22px", fontWeight: 700, color: "var(--text-primary)", fontVariantNumeric: "tabular-nums" }}>{value}%</span>
      </div>
    </div>
  );
}
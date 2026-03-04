"use client";

import React from "react";

type SeverityLevel = "critical" | "high" | "medium" | "low" | "info";

interface SeverityCardData {
  label: string;
  count: number;
  severity: SeverityLevel;
  trend?: "up" | "down" | "stable";
  trendValue?: number;
}

const colors: Record<SeverityLevel, { text: string; border: string }> = {
  critical: { text: "var(--severity-critical)", border: "var(--severity-critical-border)" },
  high: { text: "var(--severity-high)", border: "var(--severity-high-border)" },
  medium: { text: "var(--severity-medium)", border: "var(--severity-medium-border)" },
  low: { text: "var(--severity-low)", border: "var(--severity-low-border)" },
  info: { text: "var(--severity-info)", border: "var(--severity-info-border)" },
};

export default function SeverityCards({ cards }: { cards: SeverityCardData[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "12px",
        padding: "16px 20px",
      }}
    >
      {cards.map((card) => {
        const c = colors[card.severity];
        return (
          <div
            key={card.severity}
            style={{
              background: "var(--bg-card)",
              border: `1px solid ${c.border}`,
              borderRadius: "var(--radius-lg)",
              padding: "16px",
              boxShadow: "var(--shadow-card)",
              cursor: "default",
              transition: "box-shadow 200ms ease, border-color 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
              e.currentTarget.style.borderColor = c.text;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "var(--shadow-card)";
              e.currentTarget.style.borderColor = c.border;
            }}
          >
            <div style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: c.text, marginBottom: "4px" }}>
              {card.label}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <span style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-primary)", fontVariantNumeric: "tabular-nums" }}>
                {card.count}
              </span>
              {card.trend && card.trend !== "stable" && (
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    padding: "2px 6px",
                    borderRadius: "4px",
                    background: card.trend === "down" ? "var(--status-success-bg)" : "var(--status-error-bg)",
                    color: card.trend === "down" ? "var(--status-success)" : "var(--status-error)",
                  }}
                >
                  {card.trend === "down" ? "\u2193" : "\u2191"} {card.trendValue}
                </span>
              )}
            </div>
            <div style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "8px" }}>
              vs last scan period
            </div>
          </div>
        );
      })}
    </div>
  );
}
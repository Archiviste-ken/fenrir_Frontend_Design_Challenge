"use client";

import React from "react";
import type { SeverityCardData, SeverityLevel } from "@/types";

interface SeverityCardsProps {
  cards: SeverityCardData[];
}

const severityStyles: Record<SeverityLevel, { border: string; text: string; bg: string; glow: string }> = {
  critical: {
    border: "var(--severity-critical-border)",
    text: "var(--severity-critical)",
    bg: "var(--severity-critical-bg)",
    glow: "var(--severity-critical)",
  },
  high: {
    border: "var(--severity-high-border)",
    text: "var(--severity-high)",
    bg: "var(--severity-high-bg)",
    glow: "var(--severity-high)",
  },
  medium: {
    border: "var(--severity-medium-border)",
    text: "var(--severity-medium)",
    bg: "var(--severity-medium-bg)",
    glow: "var(--severity-medium)",
  },
  low: {
    border: "var(--severity-low-border)",
    text: "var(--severity-low)",
    bg: "var(--severity-low-bg)",
    glow: "var(--severity-low)",
  },
  info: {
    border: "var(--severity-info-border)",
    text: "var(--severity-info)",
    bg: "var(--severity-info-bg)",
    glow: "var(--severity-info)",
  },
};

export default function SeverityCards({ cards }: SeverityCardsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-5 py-4">
      {cards.map((card) => {
        const style = severityStyles[card.severity];
        return (
          <div
            key={card.severity}
            className="rounded-lg p-4 transition-all duration-200 cursor-default group"
            style={{
              background: "var(--bg-card)",
              border: `1px solid ${style.border}`,
              boxShadow: "var(--shadow-card)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card-hover)";
              (e.currentTarget as HTMLElement).style.borderColor = style.text;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)";
              (e.currentTarget as HTMLElement).style.borderColor = style.border;
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div
                  className="text-[10px] font-semibold uppercase tracking-wider mb-1"
                  style={{ color: style.text }}
                >
                  {card.label}
                </div>
                <div className="text-2xl font-bold tabular-nums" style={{ color: "var(--text-primary)" }}>
                  {card.count}
                </div>
              </div>
              {card.trend && card.trend !== "stable" && (
                <span
                  className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                  style={{
                    background: card.trend === "down" ? "var(--status-success-bg)" : "var(--status-error-bg)",
                    color: card.trend === "down" ? "var(--status-success)" : "var(--status-error)",
                  }}
                >
                  {card.trend === "down" ? "↓" : "↑"} {card.trendValue}
                </span>
              )}
            </div>
            <div
              className="text-[10px] mt-2"
              style={{ color: "var(--text-muted)" }}
            >
              vs last scan period
            </div>
          </div>
        );
      })}
    </div>
  );
}
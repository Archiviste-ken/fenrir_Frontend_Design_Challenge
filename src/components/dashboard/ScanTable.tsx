"use client";

import React from "react";
import Link from "next/link";

type SeverityLevel = "critical" | "high" | "medium" | "low" | "info";
type ScanStatus = "completed" | "running" | "failed" | "queued";

interface ScanTarget {
  name: string;
  type: string;
  url?: string;
}

interface Scan {
  id: string;
  project: string;
  target: ScanTarget;
  scanner: string;
  status: ScanStatus;
  severity: SeverityLevel;
  findings: number;
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
  infoCount: number;
  progress: number;
  startedAt: string;
  completedAt?: string;
  duration: string;
}

const severityConfig: Record<SeverityLevel, { label: string; color: string; bg: string; border: string }> = {
  critical: { label: "Critical", color: "var(--severity-critical)", bg: "var(--severity-critical-bg)", border: "var(--severity-critical-border)" },
  high: { label: "High", color: "var(--severity-high)", bg: "var(--severity-high-bg)", border: "var(--severity-high-border)" },
  medium: { label: "Medium", color: "var(--severity-medium)", bg: "var(--severity-medium-bg)", border: "var(--severity-medium-border)" },
  low: { label: "Low", color: "var(--severity-low)", bg: "var(--severity-low-bg)", border: "var(--severity-low-border)" },
  info: { label: "Info", color: "var(--severity-info)", bg: "var(--severity-info-bg)", border: "var(--severity-info-border)" },
};

const statusConfig: Record<ScanStatus, { label: string; color: string; bg: string; pulse?: boolean }> = {
  completed: { label: "Completed", color: "var(--status-success)", bg: "var(--status-success-bg)" },
  running: { label: "Running", color: "var(--status-running)", bg: "var(--status-running-bg)", pulse: true },
  failed: { label: "Failed", color: "var(--status-error)", bg: "var(--status-error-bg)" },
  queued: { label: "Queued", color: "var(--status-warning)", bg: "var(--status-warning-bg)" },
};

function SeverityBadge({ severity }: { severity: SeverityLevel }) {
  const c = severityConfig[severity];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "2px 8px", borderRadius: "9999px", fontSize: "11px", fontWeight: 600, background: c.bg, color: c.color, border: `1px solid ${c.border}`, whiteSpace: "nowrap" }}>
      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: c.color, flexShrink: 0 }} />
      {c.label}
    </span>
  );
}

function StatusBadge({ status }: { status: ScanStatus }) {
  const c = statusConfig[status];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "2px 8px", borderRadius: "9999px", fontSize: "11px", fontWeight: 600, background: c.bg, color: c.color, whiteSpace: "nowrap" }}>
      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: c.color, flexShrink: 0, animation: c.pulse ? "pulseDot 2s ease-in-out infinite" : "none" }} />
      {c.label}
    </span>
  );
}

export default function ScanTable({ scans }: { scans: Scan[] }) {
  if (scans.length === 0) {
    return (
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>No scans found</div>
        <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>Try adjusting your search or filter criteria.</div>
      </div>
    );
  }

  const headers = ["Target", "Scanner", "Status", "Severity", "Findings", "Progress", "Duration", ""];

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", minWidth: "760px" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid var(--border-primary)" }}>
            {headers.map((h) => (
              <th key={h} style={{ padding: "10px 20px", textAlign: "left", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scans.map((scan, i) => (
            <tr
              key={scan.id}
              style={{ borderBottom: i < scans.length - 1 ? "1px solid var(--border-secondary)" : "none", cursor: "pointer", transition: "background 150ms ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-card-hover)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <td style={{ padding: "12px 20px" }}>
                <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>{scan.target.name}</div>
                <div style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "1px" }}>{scan.target.type}</div>
              </td>
              <td style={{ padding: "12px 20px", color: "var(--text-secondary)" }}>{scan.scanner}</td>
              <td style={{ padding: "12px 20px" }}><StatusBadge status={scan.status} /></td>
              <td style={{ padding: "12px 20px" }}><SeverityBadge severity={scan.severity} /></td>
              <td style={{ padding: "12px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontWeight: 700, color: "var(--text-primary)", fontVariantNumeric: "tabular-nums" }}>{scan.findings}</span>
                  {scan.criticalCount > 0 && (
                    <span style={{ fontSize: "10px", fontWeight: 600, padding: "1px 4px", borderRadius: "3px", background: "var(--severity-critical-bg)", color: "var(--severity-critical)" }}>
                      {scan.criticalCount}C
                    </span>
                  )}
                  {scan.highCount > 0 && (
                    <span style={{ fontSize: "10px", fontWeight: 600, padding: "1px 4px", borderRadius: "3px", background: "var(--severity-high-bg)", color: "var(--severity-high)" }}>
                      {scan.highCount}H
                    </span>
                  )}
                </div>
              </td>
              <td style={{ padding: "12px 20px", minWidth: "110px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ flex: 1, height: "4px", borderRadius: "9999px", background: "var(--bg-tertiary)", overflow: "hidden" }}>
                    <div style={{ height: "100%", borderRadius: "9999px", background: "var(--accent-primary)", width: `${scan.progress}%`, transition: "width 500ms ease" }} />
                  </div>
                  <span style={{ fontSize: "10px", fontWeight: 600, color: "var(--text-secondary)", fontVariantNumeric: "tabular-nums", minWidth: "28px", textAlign: "right" }}>
                    {scan.progress}%
                  </span>
                </div>
              </td>
              <td style={{ padding: "12px 20px", color: "var(--text-secondary)", fontVariantNumeric: "tabular-nums" }}>{scan.duration}</td>
              <td style={{ padding: "12px 20px" }}>
                <Link
                  href={`/scans/${scan.id}`}
                  style={{ fontSize: "11px", fontWeight: 600, padding: "6px 10px", borderRadius: "6px", color: "var(--accent-primary)", background: "var(--accent-primary-subtle)", textDecoration: "none", whiteSpace: "nowrap" }}
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ padding: "10px 20px", fontSize: "10px", color: "var(--text-muted)", borderTop: "1px solid var(--border-primary)" }}>
        Showing {scans.length} of {scans.length} scans
      </div>
    </div>
  );
}
"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import AppLayout from "@/components/layout/AppLayout";
import { getScanById } from "@/data/mockData";
import type { SeverityLevel, StepStatus } from "@/types";
import { redirect } from "next/navigation";

const severityColor: Record<SeverityLevel, string> = {
  critical: "var(--severity-critical)",
  high: "var(--severity-high)",
  medium: "var(--severity-medium)",
  low: "var(--severity-low)",
  info: "var(--severity-info)",
};

const severityBg: Record<SeverityLevel, string> = {
  critical: "var(--severity-critical-bg)",
  high: "var(--severity-high-bg)",
  medium: "var(--severity-medium-bg)",
  low: "var(--severity-low-bg)",
  info: "var(--severity-info-bg)",
};

const stepIcons: Record<string, string> = {
  Initializing: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
  Reconnaissance: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 11l-3-3m0 0l-3 3m3-3v8",
  "Vulnerability Scan": "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
  Exploitation: "M13 10V3L4 14h7v7l9-11h-7z",
  Reporting: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
};

function StepIndicator({ label, status, isLast }: { label: string; status: StepStatus; isLast: boolean }) {
  const color =
    status === "completed" ? "var(--status-success)" :
    status === "running" ? "var(--accent-primary)" :
    "var(--text-muted)";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", flex: 1, position: "relative" }}>
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: status === "completed" ? "var(--status-success-bg)" : status === "running" ? "var(--status-running-bg)" : "var(--bg-tertiary)",
          border: `2px solid ${color}`,
          transition: "all 300ms ease",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d={stepIcons[label] || "M12 2v20M2 12h20"} />
        </svg>
      </div>
      <span style={{ fontSize: "10px", fontWeight: 600, color, textAlign: "center", whiteSpace: "nowrap" }}>
        {label}
      </span>
    </div>
  );
}

export default function ScanDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const scan = getScanById(id);

  if (!scan) return notFound();

  const progress = scan.progress;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (progress / 100) * circumference;
  const progressColor = progress >= 80 ? "var(--status-success)" : progress >= 40 ? "var(--accent-primary)" : "var(--status-warning)";

  return (
    <AppLayout>
      <div style={{ padding: "20px 24px", animation: "fadeIn 400ms ease" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px", fontSize: "13px" }}>
          <a href="/dashboard" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Scan</a>
          <span style={{ color: "var(--text-muted)" }}>›</span>
          <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>Scan Detail</span>
        </div>

        {/* Progress Circle + Steps */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-primary)",
            borderRadius: "var(--radius-lg)",
            padding: "24px",
            marginBottom: "16px",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            {/* Circular Progress */}
            <div style={{ position: "relative", width: "120px", height: "120px" }}>
              <svg width="120" height="120" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="60" cy="60" r="45" fill="none" stroke="var(--bg-tertiary)" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="45" fill="none"
                  stroke={progressColor}
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 700ms ease" }}
                />
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-primary)" }}>{progress}%</span>
                <span style={{ fontSize: "10px", fontWeight: 600, color: scan.status === "running" ? "var(--accent-primary)" : "var(--text-muted)" }}>
                  {scan.status === "running" ? "InProgress" : scan.status}
                </span>
              </div>
            </div>

            {/* Step Indicators */}
            {scan.steps.length > 0 && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", width: "100%", maxWidth: "500px", justifyContent: "center" }}>
                {scan.steps.map((step, i) => (
                  <StepIndicator key={step.id} label={step.label} status={step.status} isLast={i === scan.steps.length - 1} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Metadata Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          {[
            { icon: "⚙", label: "Scan Type", value: "Grey Box" },
            { icon: "🎯", label: "Targets", value: scan.target.url || scan.target.name },
            { icon: "🕐", label: "Started At", value: new Date(scan.startedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }) },
            { icon: "🔑", label: "Credentials", value: "2 Active" },
            { icon: "📄", label: "Files", value: "Control.pdf" },
            { icon: "✅", label: "Checklists", value: `${Math.round(scan.progress * 1.5)}/350` },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-md)",
                padding: "14px",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div style={{ fontSize: "10px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "4px" }}>
                {item.icon} {item.label}
              </div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Console + Findings */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
          {/* Live Console */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-primary)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border-primary)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: scan.status === "running" ? "var(--status-success)" : "var(--text-muted)", animation: scan.status === "running" ? "pulseDot 2s ease-in-out infinite" : "none" }} />
                <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>Live Scan Console</span>
              </div>
              {scan.status === "running" && (
                <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "9999px", background: "var(--status-running-bg)", color: "var(--status-running)" }}>
                  ⟳ Running...
                </span>
              )}
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", gap: "0", borderBottom: "1px solid var(--border-primary)" }}>
              <button style={{ padding: "10px 20px", fontSize: "12px", fontWeight: 600, color: "var(--accent-primary)", borderBottom: "2px solid var(--accent-primary)", background: "none", border: "none", borderBottomStyle: "solid", borderBottomWidth: "2px", borderBottomColor: "var(--accent-primary)", cursor: "pointer" }}>
                Activity Log
              </button>
              <button style={{ padding: "10px 20px", fontSize: "12px", fontWeight: 500, color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer" }}>
                Verification Loops
              </button>
            </div>

            <div style={{ padding: "16px 20px", maxHeight: "280px", overflowY: "auto", fontFamily: "'SF Mono', 'Fira Code', monospace", fontSize: "12px", lineHeight: "1.8" }}>
              {scan.consoleLogs.length > 0 ? (
                scan.consoleLogs.map((log, i) => {
                  const isError = log.includes("ERROR") || log.includes("CRITICAL");
                  const isWarn = log.includes("WARN") || log.includes("HIGH");
                  const isOk = log.includes("OK");
                  const color = isError ? "var(--severity-critical)" : isWarn ? "var(--severity-high)" : isOk ? "var(--status-success)" : "var(--text-secondary)";
                  return (
                    <div key={i} style={{ color, padding: "2px 0" }}>
                      {log}
                    </div>
                  );
                })
              ) : (
                <div style={{ color: "var(--text-muted)", textAlign: "center", padding: "20px" }}>
                  No console output available.
                </div>
              )}
            </div>
          </div>

          {/* Finding Log */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-primary)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border-primary)" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>Finding Log</span>
            </div>
            <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: "12px", maxHeight: "400px", overflowY: "auto" }}>
              {scan.findingsList.length > 0 ? (
                scan.findingsList.map((finding) => (
                  <div
                    key={finding.id}
                    style={{
                      padding: "16px",
                      borderRadius: "var(--radius-md)",
                      background: "var(--bg-secondary)",
                      borderLeft: `3px solid ${severityColor[finding.severity]}`,
                      animation: "slideUp 400ms ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          background: severityBg[finding.severity],
                          color: severityColor[finding.severity],
                        }}
                      >
                        {finding.severity}
                      </span>
                      <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>18:45:23</span>
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>
                      {finding.title}
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--accent-primary)", fontFamily: "monospace", marginBottom: "8px" }}>
                      {finding.location}
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                      {finding.description}
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: "center", padding: "30px", color: "var(--text-muted)", fontSize: "12px" }}>
                  No findings recorded yet.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default function ScansRedirect() {
  redirect("/dashboard");
}
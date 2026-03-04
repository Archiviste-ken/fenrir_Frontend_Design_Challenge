/* filepath: c:\Users\Asus\OneDrive\Desktop\fenrir-dashboard\src\components\ComingSoon.tsx */
"use client";

import React from "react";
import Link from "next/link";
import AppLayout from "@/components/layout/AppLayout";

export default function ComingSoon({ title, description }: { title: string; description?: string }) {
  return (
    <AppLayout>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", minHeight: "70vh" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "24px", maxWidth: "420px", animation: "fadeIn 300ms ease" }}>
          {/* Icon */}
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "var(--radius-xl)",
              background: "var(--accent-primary-muted)",
              color: "var(--accent-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>

          <h1 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px", marginTop: 0 }}>
            {title}
          </h1>

          <p style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: "24px" }}>
            {description || "We are working hard to bring you this feature. It will be available in a future update. Stay tuned!"}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border-primary)",
              marginBottom: "24px",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-primary)", animation: "pulseDot 2s ease-in-out infinite" }} />
            <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-muted)" }}>In Development</span>
          </div>

          <Link
            href="/dashboard"
            style={{
              padding: "10px 24px",
              fontSize: "13px",
              fontWeight: 600,
              borderRadius: "var(--radius-md)",
              background: "var(--accent-primary)",
              color: "white",
              textDecoration: "none",
            }}
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
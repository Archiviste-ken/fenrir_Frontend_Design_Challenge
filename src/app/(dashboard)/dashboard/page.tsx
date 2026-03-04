"use client";

import React, { useState, useMemo } from "react";
import AppLayout from "@/components/layout/AppLayout";
import StatsBar from "@/components/dashboard/StatsBar";
import SeverityCards from "@/components/dashboard/SeverityCards";
import Toolbar from "@/components/dashboard/Toolbar";
import ScanTable from "@/components/dashboard/ScanTable";
import { dashboardStats, severityCards, mockScans } from "@/data/mockData";

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");

  const filteredScans = useMemo(() => {
    return mockScans.filter((scan) => {
      const matchSearch =
        !searchQuery ||
        scan.target.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scan.scanner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scan.project.toLowerCase().includes(searchQuery.toLowerCase());

      const matchStatus = statusFilter === "all" || scan.status === statusFilter;
      const matchSeverity = severityFilter === "all" || scan.severity === severityFilter;

      return matchSearch && matchStatus && matchSeverity;
    });
  }, [searchQuery, statusFilter, severityFilter]);

  return (
    <AppLayout>
      <div style={{ animation: "fadeIn 400ms ease" }}>
        {/* Header */}
        <div
          style={{
            padding: "20px 24px 16px",
            borderBottom: "1px solid var(--border-primary)",
          }}
        >
          <h1 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
            Security Dashboard
          </h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>
            Monitor vulnerabilities, track scans, and manage your security posture.
          </p>
        </div>

        <StatsBar stats={dashboardStats} />
        <SeverityCards cards={severityCards} />

        {/* Scans Section */}
        <div
          style={{
            margin: "16px 20px",
            background: "var(--bg-card)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-primary)",
            boxShadow: "var(--shadow-card)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid var(--border-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2 style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                Recent Scans
              </h2>
              <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>
                {filteredScans.length} scan{filteredScans.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>

          <Toolbar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            severityFilter={severityFilter}
            onSeverityFilterChange={setSeverityFilter}
          />

          <ScanTable scans={filteredScans} />
        </div>
      </div>
    </AppLayout>
  );
}
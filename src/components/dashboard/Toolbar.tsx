"use client";

import React from "react";

interface ToolbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  statusFilter: string;
  onStatusFilterChange: (s: string) => void;
  severityFilter: string;
  onSeverityFilterChange: (s: string) => void;
}

export default function Toolbar({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  severityFilter,
  onSeverityFilterChange,
}: ToolbarProps) {
  const selectStyle: React.CSSProperties = {
    padding: "8px 12px",
    fontSize: "12px",
    borderRadius: "var(--radius-md)",
    background: "var(--bg-input)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-primary)",
    outline: "none",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "10px",
        padding: "12px 20px",
        borderBottom: "1px solid var(--border-primary)",
      }}
    >
      <div style={{ position: "relative", flex: "1 1 200px", maxWidth: "320px" }}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }}
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search by target, scanner, project..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            width: "100%",
            padding: "8px 12px 8px 32px",
            fontSize: "12px",
            borderRadius: "var(--radius-md)",
            background: "var(--bg-input)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-primary)",
            outline: "none",
          }}
        />
      </div>

      <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} style={selectStyle}>
        <option value="all">All Statuses</option>
        <option value="completed">Completed</option>
        <option value="running">Running</option>
        <option value="failed">Failed</option>
        <option value="queued">Queued</option>
      </select>

      <select value={severityFilter} onChange={(e) => onSeverityFilterChange(e.target.value)} style={selectStyle}>
        <option value="all">All Severities</option>
        <option value="critical">Critical</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button
        style={{
          padding: "8px 16px",
          fontSize: "12px",
          fontWeight: 600,
          borderRadius: "var(--radius-md)",
          background: "var(--accent-primary)",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginLeft: "auto",
          whiteSpace: "nowrap",
        }}
      >
        Export Report
      </button>
    </div>
  );
}
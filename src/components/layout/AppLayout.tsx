"use client";

import React from "react";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          background: "var(--bg-primary)",
        }}
      >
        {children}
      </main>
    </div>
  );
}
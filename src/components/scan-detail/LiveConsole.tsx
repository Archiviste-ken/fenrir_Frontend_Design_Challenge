"use client"

import { useState } from "react"

export function LiveConsole() {
  const [activeTab, setActiveTab] = useState<"activity" | "verification">(
    "activity"
  )

  return (
    <div
      className="rounded-xl border shadow-sm p-6 flex flex-col h-[450px]"
      style={{
        backgroundColor: "rgb(var(--card))",
        borderColor: "rgb(var(--border))",
      }}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold">
          Live Scan Console
        </div>

        <div className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-500 font-medium">
          Running
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-6 mb-4 text-sm">
        <button
          onClick={() => setActiveTab("activity")}
          className={`transition ${
            activeTab === "activity"
              ? "font-semibold text-[rgb(var(--foreground))]"
              : "text-[rgb(var(--foreground))]/60"
          }`}
        >
          Activity Log
        </button>

        <button
          onClick={() => setActiveTab("verification")}
          className={`transition ${
            activeTab === "verification"
              ? "font-semibold text-[rgb(var(--foreground))]"
              : "text-[rgb(var(--foreground))]/60"
          }`}
        >
          Verification Loops
        </button>
      </div>

      {/* TERMINAL */}
      <div
        className="flex-1 overflow-y-auto rounded-lg p-4 text-xs font-mono border"
        style={{
          backgroundColor: "rgb(var(--muted))",
          borderColor: "rgb(var(--border))",
        }}
      >
        {activeTab === "activity" ? (
          <>
            <p>[09:00:01] Starting reconnaissance...</p>
            <p>[09:00:05] Target is online</p>
            <p>[09:00:08] Apache HTTP 2.4.65 detected</p>
            <p className="text-green-500">
              [09:00:12] Login endpoint discovered
            </p>
            <p className="text-red-500">
              [09:00:20] Possible SQL injection vector found
            </p>
          </>
        ) : (
          <>
            <p>[Verification] Testing authentication flows...</p>
            <p>[Verification] Checking session handling...</p>
          </>
        )}
      </div>
    </div>
  )
}
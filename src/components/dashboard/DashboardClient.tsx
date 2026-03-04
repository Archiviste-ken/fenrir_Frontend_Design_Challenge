"use client"

import { useState } from "react"
import { scans } from "@/data/scans"
import { Scan } from "@/types/scan"
import { Toolbar } from "./Toolbar"
import { ScanTable } from "./ScanTable"
import { StatsBar } from "./StatsBar"
import { SeverityOverview } from "./SeverityOverview"

export function DashboardClient() {
  const [filtered, setFiltered] = useState<Scan[]>(scans)

  const handleSearch = (query: string) => {
    const lower = query.toLowerCase()
    setFiltered(
      scans.filter((scan) =>
        scan.name.toLowerCase().includes(lower)
      )
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">
        Dashboard
      </h1>

      <StatsBar />
      <SeverityOverview />

      <Toolbar onSearch={handleSearch} />

      <ScanTable scans={filtered} />
    </div>
  )
}
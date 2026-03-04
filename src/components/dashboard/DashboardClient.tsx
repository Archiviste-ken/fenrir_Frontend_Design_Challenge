"use client"

import { useState } from "react"
import { scans } from "@/data/scans"
import { Scan } from "@/types/scan"
import Toolbar from "./Toolbar"
import ScanTable from "./ScanTable"
import StatsBar from "./StatsBar"
import { SeverityOverview } from "./SeverityOverview"

export function DashboardClient() {
  const [filtered, setFiltered] = useState<Scan[]>(scans)

  const [searchQuery, setSearchQuery] = useState("")
const [statusFilter, setStatusFilter] = useState("all")
const [severityFilter, setSeverityFilter] = useState("all")
const stats = {
  org: "Project X",
  owner: "Nammagiri",
  totalScans: 100,
  scheduled: 1000,
  rescans: 100,
  failed: 100,

  activeProjects: 6,
  totalFindings: 144,
  criticalFindings: 5,
  highFindings: 16,
  mediumFindings: 26,
  lowFindings: 16,
  overallScore: 82
}

  const handleSearch = (query: string) => {
    const q = query.toLowerCase()

    setFiltered(
      scans.filter((scan) =>
        scan.name.toLowerCase().includes(q)
      )
    )
  }

  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      <StatsBar stats={stats} />

      <SeverityOverview />

     <Toolbar
  searchQuery={searchQuery}
  onSearchChange={setSearchQuery}
  statusFilter={statusFilter}
  onStatusFilterChange={setStatusFilter}
  severityFilter={severityFilter}
  onSeverityFilterChange={setSeverityFilter}
/>

      <ScanTable scans={filtered} />
    </>
  )
}
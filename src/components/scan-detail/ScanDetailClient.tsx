"use client"

import { useEffect, useState, useRef } from "react"
import { ScanHeader } from "./ScanHeader"
import { MetadataRow } from "./MetadataRow"
import { LiveConsole } from "./LiveConsole"
import { FindingLog } from "./FindingLog"

type Finding = {
  severity: string
  title: string
  path: string
}

type Scan = {
  id: string
  progress: number
  status: "running" | "completed" | "stopped"
  currentStep: number
  type: string
  target: string
  startedAt: string
  credentials: number
  files: string
  checklistCompleted: number
  checklistTotal: number
  findings: Finding[]
  logs: string[]
}

export function ScanDetailClient({ initialScan }: { initialScan: Scan }) {
  const [scan, setScan] = useState(initialScan)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  /* -------------------------- */
  /* Realistic Progress Engine  */
  /* -------------------------- */

  useEffect(() => {
    if (scan.status !== "running") return

    intervalRef.current = setInterval(() => {
      setScan((prev) => {
        if (prev.progress >= 100) {
          clearInterval(intervalRef.current!)
          return {
            ...prev,
            progress: 100,
            status: "completed",
            currentStep: 5,
            logs: [
              ...prev.logs,
              `[${timestamp()}] Scan completed successfully.`,
            ],
          }
        }

        const randomIncrease = Math.floor(Math.random() * 8) + 3
        const newProgress = Math.min(prev.progress + randomIncrease, 100)

        const newStep = Math.min(
          Math.floor(newProgress / 20) + 1,
          5
        )

    let newFindings = [...prev.findings]
let newLogs = [
  ...prev.logs,
  `[${timestamp()}] Progress updated to ${newProgress}%`,
]

// Inject findings at milestones
if (newProgress >= 30 && !prev.findings.some(f => f.title.includes("User Enumeration"))) {
  newFindings.push({
    severity: "high",
    title: "User Enumeration Vulnerability",
    path: "/api/users/list",
  })
  newLogs.push(`[${timestamp()}] High severity vulnerability discovered.`)
}

if (newProgress >= 60 && !prev.findings.some(f => f.title.includes("Rate Limiting"))) {
  newFindings.push({
    severity: "medium",
    title: "Missing Rate Limiting",
    path: "/auth/login",
  })
  newLogs.push(`[${timestamp()}] Medium severity vulnerability discovered.`)
}

if (newProgress >= 80 && !prev.findings.some(f => f.title.includes("Remote Code Execution"))) {
  newFindings.push({
    severity: "critical",
    title: "Remote Code Execution Risk",
    path: "/upload",
  })
  newLogs.push(`[${timestamp()}] Critical vulnerability discovered.`)
}

return {
  ...prev,
  progress: newProgress,
  currentStep: newStep,
  logs: newLogs,
  findings: newFindings,
}
      })
    }, 2500)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [scan.status])

  /* -------------------------- */
  /* Stop Scan Handler          */
  /* -------------------------- */

  function stopScan() {
    if (intervalRef.current) clearInterval(intervalRef.current)

    setScan((prev) => ({
      ...prev,
      status: "stopped",
      logs: [
        ...prev.logs,
        `[${timestamp()}] Scan manually stopped.`,
      ],
    }))
  }

  /* -------------------------- */
  /* Render                     */
  /* -------------------------- */

  return (
    <div className="space-y-6">
      <ScanHeader
        progress={scan.progress}
        currentStep={scan.currentStep}
        status={scan.status}
        onStop={stopScan}
      />

      <MetadataRow scan={scan} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LiveConsole logs={scan.logs} status={scan.status} />
        <FindingLog findings={scan.findings} />
      </div>
    </div>
  )
}

/* -------------------------- */
/* Helper                     */
/* -------------------------- */

function timestamp() {
  return new Date().toLocaleTimeString()
}
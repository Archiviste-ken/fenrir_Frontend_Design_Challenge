export type ScanStatus = "Completed" | "Scheduled" | "Failed"

export type Scan = {
  id: string
  name: string
  type: string
  status: "completed" | "running" | "failed" | "scheduled"
  progress: number
  lastScan: string
  vulnerabilities: {
    critical: number
    high: number
    medium: number
    low: number
  }
}
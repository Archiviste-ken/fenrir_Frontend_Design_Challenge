export type ScanStatus = "Completed" | "Scheduled" | "Failed"

export interface Scan {
  id: string
  name: string
  type: "Greybox" | "Blackbox"
  status: ScanStatus
  progress: number
  vulnerabilities: {
    critical: number
    high: number
    medium: number
    low: number
  }
  lastScan: string
}
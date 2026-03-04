import { Scan } from "@/types/scan"

export const scans: Scan[] = [
  {
    id: "1",
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 8 },
    lastScan: "4d ago",
  },
  {
    id: "2",
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulnerabilities: { critical: 2, high: 4, medium: 6, low: 1 },
    lastScan: "3d ago",
  },
  {
    id: "3",
    name: "Temp Data",
    type: "Blackbox",
    status: "Scheduled",
    progress: 0,
    vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
    lastScan: "—",
  },
]
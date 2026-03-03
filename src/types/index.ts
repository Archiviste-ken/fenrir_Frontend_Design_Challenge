export type Severity = 'Critical' | 'High' | 'Medium' | 'Low';
export type ScanStatus = 'Completed' | 'Scheduled' | 'Failed'; // Status chips use distinct colors [cite: 51]

export interface VulnerabilityCounts {
  critical: number;
  high: number;
  medium: number;
  low: number;
}

export interface Scan {
  id: string;
  name: string;
  type: string;
  status: ScanStatus;
  progress: number;
  vulnerabilities: VulnerabilityCounts;
  lastScan: string; // e.g., "4d ago", "10 mins ago"
}

export interface LogEntry {
  timestamp: string; // e.g., "[09:08:00]"
  message: string;
  type: 'recon' | 'testing' | 'success' | 'warning';
}

export interface Finding {
  id: string;
  severity: Severity;
  title: string;
  path: string; // Endpoint path in teal [cite: 58]
  timestamp: string;
  description: string;
}
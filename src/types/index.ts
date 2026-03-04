/* filepath: c:\Users\Asus\OneDrive\Desktop\fenrir-dashboard\src\types\index.ts */
export type SeverityLevel = "critical" | "high" | "medium" | "low" | "info";

export type ScanStatus = "completed" | "running" | "failed" | "queued";

export type StepStatus = "completed" | "running" | "pending" | "failed";

export interface Finding {
  id: string;
  title: string;
  severity: SeverityLevel;
  category: string;
  description: string;
  location: string;
  remediation: string;
}

export interface ScanTarget {
  name: string;
  type: string;
  url?: string;
}

export interface ScanStep {
  id: number;
  label: string;
  status: StepStatus;
  timestamp?: string;
}

export interface Scan {
  id: string;
  project: string;
  target: ScanTarget;
  scanner: string;
  status: ScanStatus;
  severity: SeverityLevel;
  findings: number;
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
  infoCount: number;
  progress: number;
  startedAt: string;
  completedAt?: string;
  duration: string;
  steps: ScanStep[];
  findingsList: Finding[];
  consoleLogs: string[];
}

export interface DashboardStats {
  totalScans: number;
  activeProjects: number;
  totalFindings: number;
  criticalFindings: number;
  highFindings: number;
  mediumFindings: number;
  lowFindings: number;
  overallScore: number;
}

export interface SeverityCardData {
  label: string;
  count: number;
  severity: SeverityLevel;
  trend?: "up" | "down" | "stable";
  trendValue?: number;
}
export const mockScanDetails = [
  {
    id: "1",
    progress: 45,
    status: "running",
    currentStep: 3,
    type: "Grey Box",
    target: "google.com",
    startedAt: "Nov 22, 09:00AM",
    credentials: 2,
    files: "Control.pdf",
    checklistCompleted: 40,
    checklistTotal: 150,
    findings: [
      {
        severity: "critical",
        title: "SQL Injection in Authentication Endpoint",
        path: "/api/users/profile",
      },
      {
        severity: "high",
        title: "Unauthorized Access to User Metadata",
        path: "/api/auth/login",
      },
      {
        severity: "medium",
        title: "Broken Authentication Rate Limiting",
        path: "/auth/search",
      },
    ],
    logs: [
      "[09:00:01] Starting reconnaissance...",
      "[09:00:05] Target is online",
      "[09:00:08] Apache HTTP 2.4.65 detected",
      "[09:00:12] Login endpoint discovered",
      "[09:00:20] Possible SQL injection vector found",
    ],
  },
]
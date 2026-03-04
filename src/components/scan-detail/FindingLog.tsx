export function FindingLog() {
  return (
    <div
      className="rounded-xl border p-6 flex flex-col gap-4 h-[450px] overflow-y-auto"
      style={{
        backgroundColor: "rgb(var(--card))",
        borderColor: "rgb(var(--border))",
      }}
    >
      <div className="font-semibold mb-2">
        Finding Log
      </div>

      <FindingCard
        severity="critical"
        title="SQL Injection in Authentication Endpoint"
        endpoint="/api/users/profile"
      />

      <FindingCard
        severity="high"
        title="Unauthorized Access to User Metadata"
        endpoint="/api/auth/login"
      />

      <FindingCard
        severity="medium"
        title="Broken Authentication Rate Limiting"
        endpoint="/auth/search"
      />
    </div>
  )
}

function FindingCard({
  severity,
  title,
  endpoint,
}: {
  severity: "critical" | "high" | "medium"
  title: string
  endpoint: string
}) {
  return (
    <div className="rounded-lg p-4 border space-y-2"
      style={{ borderColor: "rgb(var(--border))" }}
    >
      <div className="text-xs uppercase opacity-60">
        {severity}
      </div>

      <div className="font-medium">
        {title}
      </div>

      <div className="text-xs text-[rgb(var(--primary))]">
        {endpoint}
      </div>
    </div>
  )
}
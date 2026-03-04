import { SeverityCard } from "./SeverityCard"

export function SeverityOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <SeverityCard
        type="critical"
        count={86}
        change="+12% increase from yesterday"
        shadow-sm
      />
      <SeverityCard
        type="high"
        count={16}
        change="+0.5% increase from yesterday"
        shadow-sm
      />
      <SeverityCard
        type="medium"
        count={26}
        change="+4.5% increase from yesterday"
        shadow-sm
      />
      <SeverityCard
        type="low"
        count={16}
        change="+4.5% increase from yesterday"
        shadow-sm
      />
    </div>
  )
}
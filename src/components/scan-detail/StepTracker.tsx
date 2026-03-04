import { scanDetail } from "@/data/scanDetail"

export function StepTracker() {
  return (
    <div className="flex flex-wrap gap-6">
      {scanDetail.steps.map((step, index) => {
        const active = index === scanDetail.activeStep

        return (
          <div
            key={step}
            className="flex flex-col items-center text-sm"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                active
                  ? "bg-[rgb(var(--primary))] text-white"
                  : "bg-[rgba(255,255,255,0.08)]"
              }`}
            >
              {index + 1}
            </div>
            <span className="mt-2 opacity-70">
              {step}
            </span>
          </div>
        )
      })}
    </div>
  )
}
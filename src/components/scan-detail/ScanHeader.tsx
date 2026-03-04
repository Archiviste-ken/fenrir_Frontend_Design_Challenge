"use client"

type Props = {
  progress: number
  currentStep: number
  status: string
  onStop: () => void
}

export function ScanHeader({
  progress,
  currentStep,
  status,
  onStop,
}: Props) {
  return (
    <div
      className="rounded-xl border shadow-sm p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
      style={{
        backgroundColor: "rgb(var(--card))",
        borderColor: "rgb(var(--border))",
      }}
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-6">
       <CircularProgress value={progress} />
        <div>
          <div className="text-lg font-semibold">
            In Progress
          </div>
          <div className="text-sm text-[rgb(var(--foreground))]/70">
            Scan is currently running
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
<div className="flex items-center gap-6">
  <StepTracker currentStep={currentStep} />

  {status === "running" && (
    <button
      onClick={onStop}
      className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:opacity-90 transition"
    >
      Stop Scan
    </button>
  )}
</div>
    </div>
  )
}

/* ========================================= */
/* Circular Progress                         */
/* ========================================= */

function CircularProgress({ value }: { value: number }) {
  const radius = 48
  const stroke = 8
  const normalizedRadius = radius - stroke * 0.5
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset =
    circumference - (value / 100) * circumference

  return (
    <svg height={radius * 2} width={radius * 2}>
      {/* Background Ring */}
      <circle
        stroke="rgb(var(--border))"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* Progress Ring */}
      <circle
        stroke="rgb(var(--primary))"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{
          strokeDashoffset,
          transition: "stroke-dashoffset 0.6s ease",
        }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="fill-[rgb(var(--foreground))] text-sm font-semibold"
      >
        {value}%
      </text>
    </svg>
  )
}

/* ========================================= */
/* Step Tracker                              */
/* ========================================= */

function StepTracker({ currentStep }: { currentStep: number }) {
  const steps = [
    "Spidering",
    "Mapping",
    "Testing",
    "Validating",
    "Reporting",
  ]

  return (
    <div className="flex items-center gap-4 flex-wrap">
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const isActive = stepNumber === currentStep
        const isCompleted = stepNumber < currentStep

        return (
          <div key={step} className="flex items-center">
            {/* Circle */}
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                ${
                  isCompleted
                    ? "bg-green-500 text-black"
                    : isActive
                    ? "bg-[rgb(var(--primary))] text-black scale-110"
                    : "bg-[rgb(var(--muted))] text-[rgb(var(--foreground))]"
                }`}
            >
              {stepNumber}
            </div>

            {/* Label */}
            <div className="ml-2 mr-4 text-sm text-[rgb(var(--foreground))] whitespace-nowrap">
              {step}
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div
                className={`h-[2px] w-10 transition-all
                  ${
                    isCompleted
                      ? "bg-green-500"
                      : "bg-[rgb(var(--border))]"
                  }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
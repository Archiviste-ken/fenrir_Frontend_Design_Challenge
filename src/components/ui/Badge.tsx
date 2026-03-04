import clsx from "clsx"

type Variant = "critical" | "high" | "medium" | "low" | "neutral"

interface BadgeProps {
  variant?: Variant
  children: React.ReactNode
  className?: string
}

export function Badge({
  variant = "neutral",
  children,
  className,
}: BadgeProps) {
  const colors: Record<Variant, string> = {
    critical: "bg-[rgb(var(--critical))] text-white",
    high: "bg-[rgb(var(--high))] text-black",
    medium: "bg-[rgb(var(--medium))] text-black",
    low: "bg-[rgb(var(--low))] text-black",
    neutral:
      "bg-[rgb(var(--card))] text-[rgb(var(--foreground))] border border-[rgb(var(--border))]",
  }

  return (
 <span
  className={clsx(
    "inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full",
    colors[variant],
    className
  )}
>
      {children}
    </span>
  )
}
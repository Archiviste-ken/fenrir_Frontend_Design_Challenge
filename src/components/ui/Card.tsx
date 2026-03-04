import { ReactNode } from "react"
import clsx from "clsx"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border p-6 transition-all duration-200",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
        className
      )}
      style={{
        backgroundColor: "rgb(var(--card))",
        borderColor: "rgb(var(--border))",
        color: "rgb(var(--card-foreground))",
      }}
    >
      {children}
    </div>
  )
}
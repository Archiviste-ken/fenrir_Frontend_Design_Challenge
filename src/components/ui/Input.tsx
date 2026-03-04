import { InputHTMLAttributes } from "react"
import clsx from "clsx"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className="space-y-1 w-full">
      {label && (
        <label className="text-sm font-medium">
          {label}
        </label>
      )}

      <input
        className={clsx(
  "w-full rounded-lg border px-3 py-2 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[rgb(var(--primary))]",
  className
)}
        style={{
          backgroundColor: "rgb(var(--card))",
          borderColor: "rgb(var(--border))",
        }}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
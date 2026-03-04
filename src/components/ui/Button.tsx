"use client"

import { ButtonHTMLAttributes } from "react"
import clsx from "clsx"

type Variant = "primary" | "secondary" | "ghost" | "danger"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  loading?: boolean
}

export function Button({
  variant = "primary",
  loading,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants: Record<Variant, string> = {
  primary:
  "bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] shadow-md hover:brightness-110 active:scale-[0.98]",
    secondary:
      "bg-[rgb(var(--card))] text-[rgb(var(--foreground))] border border-[rgb(var(--border))] hover:bg-opacity-80",
    ghost:
      "bg-transparent text-[rgb(var(--foreground))] hover:bg-[rgb(var(--card))]",
    danger:
      "bg-[rgb(var(--critical))] text-white hover:opacity-90",
  }

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  )
}
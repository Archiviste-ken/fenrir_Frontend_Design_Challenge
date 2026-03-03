"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="h-6 w-6" /> // Placeholder to prevent layout shift
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button 
      onClick={() => setTheme(isDark ? 'light' : 'dark')} 
      aria-label="Toggle theme"
    >
      {isDark ? "Switch to Light" : "Switch to Dark"}
    </button>
  )
}
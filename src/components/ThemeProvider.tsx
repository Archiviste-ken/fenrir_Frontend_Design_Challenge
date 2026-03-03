"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  // attribute="class" is the class strategy that injects 'dark' into the <html> tag for Tailwind
  // defaultTheme="system" falls back to user OS preference
  // enableSystem ensures it listens to OS-level theme changes
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  )
}
/* filepath: c:\Users\Asus\OneDrive\Desktop\fenrir-dashboard\src\context\ThemeContext.tsx */
"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("fenrir-theme");
    const initial: Theme = stored === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", initial);
    // Use a microtask to avoid synchronous setState in effect
    queueMicrotask(() => {
      setTheme(initial);
      setMounted(true);
    });
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("fenrir-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
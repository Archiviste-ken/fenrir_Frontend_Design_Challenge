"use client"

import { useState } from "react"
import { Sidebar } from "./Sidebar"

export function MobileSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2"
      >
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="relative w-64 bg-[rgb(var(--card))]">
            <Sidebar />
          </div>
        </div>
      )}
    </>
  )
}
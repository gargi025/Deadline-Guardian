"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
            <ShieldCheck className="h-4.5 w-4.5 text-primary" />
          </div>
          <span className="text-sm font-semibold tracking-tight">Deadline Guardian</span>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#futures" className="transition-colors hover:text-foreground">
            Futures
          </a>
          <a href="#timeline" className="transition-colors hover:text-foreground">
            Timeline
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button size="sm" className="rounded-full px-4">
            Get started
          </Button>
        </div>
      </div>
    </motion.header>
  )
}

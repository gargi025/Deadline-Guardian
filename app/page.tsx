"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { TaskComposer } from "@/components/task-composer"
import { FutureCard } from "@/components/future-card"
import { TodayTimeline } from "@/components/today-timeline"
import { FUTURES, type FutureScenario } from "@/lib/futures-data"

export default function Page() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [showFutures, setShowFutures] = useState(false)
  const [selected, setSelected] = useState<FutureScenario["id"] | null>(null)
  const futuresRef = useRef<HTMLDivElement>(null)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setShowFutures(true)
      requestAnimationFrame(() => {
        futuresRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }, 1600)
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Ambient glow */}
      <div className="aurora-glow pointer-events-none absolute inset-x-0 top-0 h-[600px]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <SiteHeader />

        {/* Hero */}
        <section className="mx-auto flex max-w-6xl flex-col items-center px-5 pt-16 pb-20 text-center sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/40 px-3.5 py-1.5 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Your AI productivity companion
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl"
          >
            Deadline Guardian
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl"
          >
            Don&apos;t just manage deadlines. Change your future.
          </motion.p>

          <div className="mt-10 w-full">
            <TaskComposer onGenerate={handleGenerate} isGenerating={isGenerating} />
          </div>
        </section>

        {/* Futures */}
        <section id="futures" ref={futuresRef} className="mx-auto max-w-6xl px-5 pb-24 scroll-mt-24">
          <AnimatePresence>
            {showFutures && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-10 text-center">
                  <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                    Three futures, one decision
                  </h2>
                  <p className="mx-auto mt-3 max-w-lg text-pretty text-muted-foreground">
                    Guardian simulated where each path leads. Choose the future you want to live.
                  </p>
                </div>

                <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
                  {FUTURES.map((future, i) => (
                    <FutureCard
                      key={future.id}
                      future={future}
                      index={i}
                      selected={selected === future.id}
                      onSelect={setSelected}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <TodayTimeline />

        <footer className="border-t border-border/60 py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:flex-row">
            <span>Deadline Guardian</span>
            <span>Change your future, one deadline at a time.</span>
          </div>
        </footer>
      </div>
    </main>
  )
}

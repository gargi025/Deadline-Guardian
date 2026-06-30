"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Circle, CalendarClock } from "lucide-react"
import { cn } from "@/lib/utils"
import { TODAY_TIMELINE } from "@/lib/futures-data"

export function TodayTimeline() {
  return (
    <section id="timeline" className="mx-auto w-full max-w-3xl px-5 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-3"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
          <CalendarClock className="h-4.5 w-4.5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-balance">Today&apos;s Timeline</h2>
          <p className="text-sm text-muted-foreground">Your Guardian-protected schedule</p>
        </div>
      </motion.div>

      <div className="glass rounded-2xl border border-border/70 p-5 sm:p-7">
        <ol className="relative">
          {TODAY_TIMELINE.map((block, i) => {
            const isLast = i === TODAY_TIMELINE.length - 1
            return (
              <motion.li
                key={block.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex gap-4 pb-7 last:pb-0"
              >
                {/* connector */}
                {!isLast && (
                  <span className="absolute left-[11px] top-7 h-full w-px bg-border" aria-hidden="true" />
                )}

                <div className="relative z-10 mt-0.5 shrink-0">
                  {block.status === "done" ? (
                    <CheckCircle2 className="h-6 w-6 text-success" />
                  ) : block.status === "active" ? (
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      <motion.span
                        className="absolute inset-0 rounded-full bg-primary/30"
                        animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity }}
                      />
                      <span className="h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
                    </span>
                  ) : (
                    <Circle className="h-6 w-6 text-muted-foreground/50" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-xs text-muted-foreground">{block.time}</span>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide",
                        block.status === "active"
                          ? "bg-primary/15 text-primary"
                          : "bg-secondary text-muted-foreground",
                      )}
                    >
                      {block.tag}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "mt-1 font-medium",
                      block.status === "done" ? "text-muted-foreground line-through" : "text-foreground",
                    )}
                  >
                    {block.title}
                  </h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{block.detail}</p>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Check, Activity, ArrowRight, ShieldCheck, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { FutureScenario, StressLevel } from "@/lib/futures-data"

const stressStyles: Record<StressLevel, string> = {
  Low: "text-success bg-success/10 ring-success/25",
  Medium: "text-warning bg-warning/10 ring-warning/25",
  High: "text-destructive bg-destructive/10 ring-destructive/25",
  Critical: "text-destructive bg-destructive/15 ring-destructive/40",
}

type Props = {
  future: FutureScenario
  index: number
  selected: boolean
  dimmed: boolean
  onSelect: (id: FutureScenario["id"]) => void
}

export function FutureCard({ future, index, selected, dimmed, onSelect }: Props) {
  const highlight = future.id === "future-2"

  const barColor =
    future.success_probability >= 80
      ? "bg-success"
      : future.success_probability >= 60
        ? "bg-primary"
        : "bg-warning"

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      animate={{
        opacity: dimmed ? 0.6 : 1,
        scale: selected ? 1.02 : 1,
      }}
      transition={{ duration: 0.45, delay: dimmed || selected ? 0 : index * 0.12, ease: "easeOut" }}
      className={cn(
        "glass relative flex flex-col rounded-2xl border p-6",
        highlight
          ? "border-primary/50 shadow-2xl shadow-primary/15 lg:-mt-4 lg:mb-4"
          : "border-border/70 hover:border-border",
        selected && "border-primary ring-2 ring-primary",
      )}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/30">
            <ShieldCheck className="h-3.5 w-3.5" />
            Recommended Future
          </span>
        </div>
      )}

      <header className={cn(highlight && "mt-2")}>
        <h3 className="text-lg font-semibold tracking-tight">{future.title}</h3>
        <p className="mt-1 italic text-sm text-muted-foreground">
          {future.quote}
        </p>
      </header>

      {/* Chance of Success — primary visual focus */}
      <div className="mt-6 rounded-xl border border-border/60 bg-background/30 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Chance of Success
        </p>
        <div className="mt-1 flex items-end gap-2">
          <span className="font-mono text-4xl font-semibold leading-none tracking-tight text-foreground">
            {future.success_probability}
          </span>
          <span className="mb-0.5 text-xl font-medium text-muted-foreground">%</span>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <motion.div
            className={cn("h-full rounded-full", barColor)}
            initial={{ width: 0 }}
            whileInView={{ width: `${future.success_probability}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 + index * 0.1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Stress level */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Activity className="h-4 w-4" /> Stress level
        </span>
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-xs font-medium ring-1",
            stressStyles[future.stress_level],
          )}
        >
          {future.stress_level}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{future.summary}</p>

      {/* Timeline preview — schedule style */}
      <div className="mt-5 rounded-xl border border-border/60 bg-background/30 p-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Timeline preview
        </p>
        <div className="divide-y divide-border/50">
          {future.timeline.map((item) => (
            <div key={item.time + item.title} className="flex items-baseline gap-4 py-2 first:pt-0 last:pb-0">
              <span className="w-16 shrink-0 font-mono text-xs text-muted-foreground">{item.time}</span>
              <span className="text-sm text-foreground">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Guardian Insight */}
      <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
          <Lightbulb className="h-3.5 w-3.5" /> Guardian Insight
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{future.recommendation}</p>
      </div>

      {/* Why this plan? accordion */}
      <div className="mt-4 rounded-xl border border-border/60 bg-background/30 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Why this future?
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Guardian estimated this outcome using your task, work style,
          leadership personality, timeline and predicted execution quality.
        </p>
      </div>
      <div className="mt-6 flex-1" />

      <Button
        onClick={() => onSelect(future.id)}
        variant={highlight || selected ? "default" : "outline"}
        className="group w-full rounded-xl"
      >
        {selected ? (
          <>
            <Check className="h-4 w-4" /> Future Locked In
          </>
        ) : (
          <>
            Commit to this Future
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </Button>
    </motion.article>
  )
}

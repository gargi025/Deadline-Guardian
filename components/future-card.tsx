"use client"

import { motion } from "framer-motion"
import { Check, Clock, TrendingUp, Activity, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { FutureScenario, StressLevel } from "@/lib/futures-data"

const stressStyles: Record<StressLevel, string> = {
  Low: "text-success bg-success/10 ring-success/25",
  Moderate: "text-warning bg-warning/10 ring-warning/25",
  High: "text-warning bg-warning/10 ring-warning/25",
  Critical: "text-destructive bg-destructive/10 ring-destructive/25",
}

type Props = {
  future: FutureScenario
  index: number
  selected: boolean
  onSelect: (id: FutureScenario["id"]) => void
}

export function FutureCard({ future, index, selected, onSelect }: Props) {
  const highlight = future.highlight

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className={cn(
        "glass relative flex flex-col rounded-2xl border p-6 transition-all duration-300",
        highlight
          ? "border-primary/50 shadow-2xl shadow-primary/15 lg:-mt-4 lg:mb-4"
          : "border-border/70 hover:border-border",
        selected && "ring-2 ring-primary",
      )}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/30">
            Recommended
          </span>
        </div>
      )}

      <header className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden="true">
              {future.globe}
            </span>
            <h3 className="text-lg font-semibold tracking-tight">{future.title}</h3>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{future.subtitle}</p>
        </div>
      </header>

      {/* Success probability */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <TrendingUp className="h-4 w-4" /> Success probability
          </span>
          <span className="font-mono font-semibold text-foreground">
            {future.successProbability}%
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <motion.div
            className={cn(
              "h-full rounded-full",
              future.successProbability >= 80
                ? "bg-success"
                : future.successProbability >= 60
                  ? "bg-primary"
                  : "bg-warning",
            )}
            initial={{ width: 0 }}
            whileInView={{ width: `${future.successProbability}%` }}
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
            stressStyles[future.stressLevel],
          )}
        >
          {future.stressLevel}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{future.summary}</p>

      {/* Timeline preview */}
      <div className="mt-5 rounded-xl border border-border/60 bg-background/30 p-3">
        <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <Clock className="h-3.5 w-3.5" /> Timeline preview
        </p>
        <ul className="space-y-2">
          {future.tasks.map((t) => (
            <li key={t.title} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                {t.title}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {t.start} · {t.duration}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recommendation */}
      <div className="mt-4 rounded-xl bg-secondary/40 p-3 text-sm leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">Recommendation: </span>
        {future.recommendation}
      </div>

      <div className="mt-6 flex-1" />

      <Button
        onClick={() => onSelect(future.id)}
        variant={highlight || selected ? "default" : "outline"}
        className="group w-full rounded-xl"
      >
        {selected ? (
          <>
            <Check className="h-4 w-4" /> Future selected
          </>
        ) : (
          <>
            Choose this Future
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </Button>
    </motion.article>
  )
}

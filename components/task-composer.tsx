"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mic, Sparkles, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

type Props = {
  onGenerate: () => void
  isGenerating: boolean
}

export function TaskComposer({ onGenerate, isGenerating }: Props) {
  const [task, setTask] = useState("")
  const [listening, setListening] = useState(false)
  const [leadership, setLeadership] = useState("commander")
  const [workStyle, setWorkStyle] = useState("deep-work")

  const toggleVoice = () => {
    setListening((prev) => !prev)
    if (!listening) {
      // Simulated capture — replace with the Web Speech API when wiring the backend.
      setTimeout(() => {
        setTask((t) =>
          t ? t : "Finish the Q3 strategy report and submit it before Friday at 5pm.",
        )
        setListening(false)
      }, 1600)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      className="glass mx-auto w-full max-w-2xl rounded-2xl border border-border/80 p-2 shadow-2xl shadow-black/40"
    >
      <div className="rounded-xl border border-border/60 bg-background/40 p-2">
        <div className="relative">
          <Textarea
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="What deadline are you facing? e.g. Ship the investor deck by Thursday morning…"
            aria-label="Describe your task and deadline"
            className="pr-14"
          />
          <button
            type="button"
            onClick={toggleVoice}
            aria-label={listening ? "Stop voice input" : "Start voice input"}
            aria-pressed={listening}
            className={cn(
              "absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border transition-all",
              listening
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary/60 text-muted-foreground hover:text-foreground",
            )}
          >
            {listening && (
              <motion.span
                className="absolute inset-0 rounded-full bg-primary/30"
                animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <Mic className="h-4.5 w-4.5 relative z-10" />
          </button>
        </div>

        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="px-1 text-xs font-medium text-muted-foreground">
              Leadership Style
            </label>
            <Select value={leadership} onValueChange={setLeadership}>
              <SelectTrigger aria-label="Leadership style">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="commander">Commander</SelectItem>
                <SelectItem value="mentor">Mentor</SelectItem>
                <SelectItem value="roaster">Roaster</SelectItem>
                <SelectItem value="zen">Zen</SelectItem>
                <SelectItem value="jarvis">Jarvis</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="px-1 text-xs font-medium text-muted-foreground">
              Work Style
            </label>
            <Select value={workStyle} onValueChange={setWorkStyle}>
              <SelectTrigger aria-label="Work style">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deep-work">Deep Work</SelectItem>
                <SelectItem value="night-owl">Night Owl</SelectItem>
                <SelectItem value="pomodoro">Pomodoro</SelectItem>
                <SelectItem value="finish-early">Finish Early</SelectItem>
                <SelectItem value="steady-pace">Steady Pace</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="p-2 pt-3">
        <Button
          size="lg"
          onClick={onGenerate}
          disabled={isGenerating}
          className="group w-full rounded-xl text-base font-semibold shadow-lg shadow-primary/20"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Simulating your futures…
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5 transition-transform group-hover:scale-110" />
              Generate Guardian Futures
            </>
          )}
        </Button>
      </div>
    </motion.div>
  )
}

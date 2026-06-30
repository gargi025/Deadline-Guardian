"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { messages } from "@/lib/pomodoro-messages"

const personalities = [
    "Commander",
    "Roaster",
    "Indian Mom",
    "Coach",
    "Zen",
] as const

export default function GuardianFocus() {
    const [workMinutes, setWorkMinutes] = useState(25)
    const [breakMinutes, setBreakMinutes] = useState(5)

    const [running, setRunning] = useState(false)
    const [onBreak, setOnBreak] = useState(false)
    const [showComplete, setShowComplete] = useState(false)

    const [secondsLeft, setSecondsLeft] = useState(workMinutes * 60)

    const [personality, setPersonality] =
        useState<(typeof personalities)[number]>("commander")

    useEffect(() => {
        if (!running) return

        const timer = setInterval(() => {
            setSecondsLeft((s) => {

                if (s <= 1) {

                    if (!onBreak) {

                        setOnBreak(true)

                        setShowComplete(true)

                        setTimeout(() => {
                            setShowComplete(false)
                        }, 2000)

                        return breakMinutes * 60

                    }

                    setRunning(false)
                    setOnBreak(false)

                    return workMinutes * 60

                }

                return s - 1

            })

        }, 1000)

        return () => clearInterval(timer)

    }, [running, onBreak, workMinutes, breakMinutes])

    const currentMessage = useMemo(() => {

        const pool = onBreak
            ? messages[personality].break
            : messages[personality].start

        return pool[0]

    }, [personality, onBreak])

    const minutes = Math.floor(secondsLeft / 60)
    const seconds = secondsLeft % 60

    return (

        <div className="glass rounded-2xl border p-6">

            <h2 className="text-2xl font-semibold">
                Guardian Focus Mode
            </h2>

            <p className="mt-2 text-muted-foreground">
                AI-guided focus sessions powered by your personality.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">

                <div>

                    <label className="text-sm">Work</label>

                    <input
                        type="number"
                        className="mt-2 w-full rounded-xl border bg-transparent p-2"
                        value={workMinutes}
                        onChange={(e) => {
                            const v = Number(e.target.value)
                            setWorkMinutes(v)
                            if (!running && !onBreak) setSecondsLeft(v * 60)
                        }}
                    />

                </div>

                <div>

                    <label className="text-sm">Break</label>

                    <input
                        type="number"
                        className="mt-2 w-full rounded-xl border bg-transparent p-2"
                        value={breakMinutes}
                        onChange={(e) => setBreakMinutes(Number(e.target.value))}
                    />

                </div>

                <div>

                    <label className="text-sm">
                        Personality
                    </label>

                    <select
                        className="mt-2 w-full rounded-xl border bg-transparent p-2"
                        value={personality}
                        onChange={(e) => setPersonality(e.target.value as any)}
                    >

                        {personalities.map(p => (
                            <option
                                key={p}
                                value={p}
                            >
                                {p}
                            </option>
                        ))}

                    </select>

                </div>

            </div>

            <div className="mt-10 text-center">

                {showComplete && (
                    <p className="mb-4 text-green-400 font-semibold">
                        ✓ Focus Session Complete
                    </p>
                )}

                <div className="font-mono text-6xl">

                    {String(minutes).padStart(2, "0")}:

                    {String(seconds).padStart(2, "0")}

                </div>

                <div className="mt-5">

                    <p className="text-xl font-semibold">

                        {onBreak ? "Break Time" : "Focus Time"}

                    </p>

                    <p className="mt-2 italic text-muted-foreground">
                        Guardian says:
                    </p>

                    <p className="mt-1 text-lg font-medium">
                        {currentMessage}
                    </p>

                </div>

            </div>

            <div className="mt-8 flex justify-center gap-3">

                <Button
                    onClick={() => setRunning(true)}
                >
                    Start
                </Button>

                <Button
                    variant="outline"
                    onClick={() => setRunning(false)}
                >
                    Pause
                </Button>

                <Button
                    variant="outline"
                    onClick={() => {
                        setRunning(false)
                        setOnBreak(false)
                        setSecondsLeft(workMinutes * 60)
                    }}
                >
                    Reset
                </Button>

            </div>

        </div>

    )

}
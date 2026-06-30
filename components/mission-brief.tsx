"use client"

import { ShieldCheck, Activity, Target, Flag } from "lucide-react"
import type { FutureScenario } from "@/lib/futures-data"

type Props = {
    future: FutureScenario
}

export default function MissionBrief({ future }: Props) {
    return (
        <section className="mx-auto mb-10 max-w-5xl rounded-2xl border border-primary/20 bg-primary/5 p-8">

            <div className="mb-8 flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-primary" />
                <div>
                    <h2 className="text-2xl font-semibold">
                        Mission Brief
                    </h2>

                    <p className="text-muted-foreground">
                        Guardian has prepared your execution strategy.
                    </p>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-4">

                <div className="rounded-xl border p-5">
                    <Target className="mb-3 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                        Success Probability
                    </p>
                    <p className="mt-1 text-3xl font-bold">
                        {future.success_probability}%
                    </p>
                </div>

                <div className="rounded-xl border p-5">
                    <Activity className="mb-3 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                        Stress
                    </p>
                    <p className="mt-1 text-3xl font-bold">
                        {future.stress_level}
                    </p>
                </div>

                <div className="rounded-xl border p-5">
                    <Flag className="mb-3 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                        Chosen Future
                    </p>
                    <p className="mt-1 font-semibold">
                        {future.title}
                    </p>
                </div>

                <div className="rounded-xl border p-5">
                    <ShieldCheck className="mb-3 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                        Next Milestone
                    </p>
                    <p className="mt-1 font-semibold">
                        {future.timeline[0]?.title}
                    </p>
                </div>

            </div>

        </section>
    )
}
// Shapes mirror the backend FutureScenario / TimelineItem pydantic models.
// Core backend fields: time + title on each timeline item. The optional
// category/detail enrich the schedule view and degrade gracefully if absent.
export type TimelineItem = {
  time: string
  title: string
  category?: string
  detail?: string
}

export type StressLevel = "Low" | "Medium" | "High" | "Critical"

export type FutureScenario = {
  id: "comfortable" | "guardian" | "rescue"
  title: string
  subtitle: string
  successProbability: number
  stressLevel: StressLevel
  summary: string
  recommendation: string
  quote: string
  timeline: TimelineItem[]
  reasoning: string[]
  highlight?: boolean
}

export const FUTURES: FutureScenario[] = [
  {
    id: "comfortable",
    title: "The Comfortable Path",
    subtitle: "Familiar habits. Familiar outcomes.",
    successProbability: 48,
    stressLevel: "High",
    summary:
      "You keep your existing habits. Work clusters near the deadline, leaving little room for review or surprises.",
    recommendation:
      "This protects your routine, but it leaves almost no margin if anything slips. Expect a late push.",
    quote: "Comfortable today often means costly tomorrow.",
    timeline: [
      { time: "Day 4", title: "Outline and research", category: "Planning", detail: "First serious look at the work." },
      { time: "Day 6", title: "First draft", category: "Build", detail: "Most of the writing happens here." },
      { time: "Day 7", title: "Final scramble", category: "Crunch", detail: "Long session right before the deadline." },
    ],
    reasoning: [
      "Work is concentrated into the final two days.",
      "There is no dedicated time set aside for review.",
      "A single delay would push you past the deadline.",
      "This path repeats the pattern that caused stress before.",
    ],
  },
  {
    id: "guardian",
    title: "The Guardian Path",
    subtitle: "Small changes today. Bigger wins tomorrow.",
    successProbability: 92,
    stressLevel: "Low",
    summary:
      "Guardian spreads the work into focused sessions with buffer time. You finish a full day early with energy to spare.",
    recommendation:
      "This approach keeps your workload balanced and leaves room for unexpected delays.",
    quote: "Steady effort beats a frantic finish every time.",
    timeline: [
      { time: "Today", title: "Kickoff and plan", category: "Planning", detail: "Define scope and the first milestone." },
      { time: "Day 2", title: "Deep work block", category: "Focus", detail: "Two focused hours on the core work." },
      { time: "Day 4", title: "Deep work block", category: "Focus", detail: "Continue while energy is highest." },
      { time: "Day 6", title: "Review and polish", category: "Review", detail: "Refine and check before submitting." },
    ],
    reasoning: [
      "Your workload is evenly distributed across the week.",
      "Your preferred work style favors long focus sessions.",
      "There is enough time reserved for review.",
      "This minimizes the chance of last-minute work.",
    ],
    highlight: true,
  },
  {
    id: "rescue",
    title: "The Last-Minute Rescue",
    subtitle: "Built for when time is running out.",
    successProbability: 71,
    stressLevel: "Critical",
    summary:
      "A compressed sprint that protects the essentials. Guardian triages scope and removes everything non-critical.",
    recommendation:
      "Use this only if you are already behind. It delivers a viable result, not a polished one.",
    quote: "When time is short, protect what matters most.",
    timeline: [
      { time: "Now", title: "Triage scope", category: "Triage", detail: "Decide what can be cut safely." },
      { time: "Now +1h", title: "Build the core", category: "Build", detail: "Focus only on the essentials." },
      { time: "Now +5h", title: "Ship and verify", category: "Ship", detail: "Final check, then submit." },
    ],
    reasoning: [
      "Only the essential parts of the task are kept.",
      "Non-critical work is removed to save time.",
      "The plan assumes uninterrupted focus.",
      "Success depends on starting immediately.",
    ],
  },
]

// Default schedule shown before a plan is chosen.
export const TODAY_TIMELINE: TimelineItem[] = [
  {
    time: "9:00 AM",
    title: "Morning briefing",
    category: "Planning",
    detail: "Guardian reviews today's deadlines and flags one at risk.",
  },
  {
    time: "10:30 AM",
    title: "Deep work, Q3 report",
    category: "Focus",
    detail: "Focused 90-minute block. Notifications muted.",
  },
  {
    time: "1:00 PM",
    title: "Client proposal draft",
    category: "Writing",
    detail: "Draft the first two sections before the 5pm checkpoint.",
  },
  {
    time: "4:00 PM",
    title: "Review and buffer",
    category: "Buffer",
    detail: "Guardian holds this slot open in case anything slips.",
  },
]

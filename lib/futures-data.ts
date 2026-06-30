// Shapes mirror the backend FutureScenario / FutureTask pydantic models.
export type FutureTask = {
  title: string
  start: string
  duration: string
}

export type StressLevel = "Low" | "Moderate" | "High" | "Critical"

export type FutureScenario = {
  id: "current" | "guardian" | "emergency"
  globe: string
  title: string
  subtitle: string
  successProbability: number
  stressLevel: StressLevel
  summary: string
  recommendation: string
  tasks: FutureTask[]
  highlight?: boolean
}

export const FUTURES: FutureScenario[] = [
  {
    id: "current",
    globe: "🌍",
    title: "Current Path",
    subtitle: "If nothing changes",
    successProbability: 48,
    stressLevel: "High",
    summary:
      "You keep your existing habits. Work clusters near the deadline, leaving little room for review or surprises.",
    recommendation: "Acceptable only if scope shrinks. Risk of a late-night crunch is high.",
    tasks: [
      { title: "Outline & research", start: "Day 4", duration: "3h" },
      { title: "First draft", start: "Day 6", duration: "5h" },
      { title: "Final scramble", start: "Day 7", duration: "6h" },
    ],
  },
  {
    id: "guardian",
    globe: "🌎",
    title: "Guardian Recommended",
    subtitle: "The balanced future",
    successProbability: 92,
    stressLevel: "Low",
    summary:
      "Guardian spreads the work into focused sessions with buffer time. You finish a full day early with energy to spare.",
    recommendation: "Best overall outcome. Steady pace, built-in review, minimal stress.",
    tasks: [
      { title: "Kickoff & plan", start: "Today", duration: "1h" },
      { title: "Deep work blocks", start: "Day 2-4", duration: "2h/day" },
      { title: "Review & polish", start: "Day 6", duration: "2h" },
    ],
    highlight: true,
  },
  {
    id: "emergency",
    globe: "🌏",
    title: "Emergency Recovery",
    subtitle: "When time is gone",
    successProbability: 71,
    stressLevel: "Critical",
    summary:
      "A compressed sprint that protects the essentials. Guardian triages scope and removes everything non-critical.",
    recommendation: "Use only if you're already behind. Delivers a viable result, not a polished one.",
    tasks: [
      { title: "Triage scope", start: "Now", duration: "30m" },
      { title: "Build the core", start: "Now +1h", duration: "4h" },
      { title: "Ship & verify", start: "Now +5h", duration: "1h" },
    ],
  },
]

export type TimelineBlock = {
  time: string
  title: string
  detail: string
  status: "done" | "active" | "upcoming"
  tag: string
}

export const TODAY_TIMELINE: TimelineBlock[] = [
  {
    time: "9:00 AM",
    title: "Morning briefing",
    detail: "Guardian reviews today's deadlines and flags one at risk.",
    status: "done",
    tag: "Planning",
  },
  {
    time: "10:30 AM",
    title: "Deep work — Q3 report",
    detail: "Focused 90-minute block. Notifications muted.",
    status: "active",
    tag: "Focus",
  },
  {
    time: "1:00 PM",
    title: "Client proposal draft",
    detail: "Draft the first two sections before the 5pm checkpoint.",
    status: "upcoming",
    tag: "Writing",
  },
  {
    time: "4:00 PM",
    title: "Review & buffer",
    detail: "Guardian holds this slot open in case anything slips.",
    status: "upcoming",
    tag: "Buffer",
  },
]

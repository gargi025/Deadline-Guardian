from google.adk.agents import LlmAgent

from backend.guardian.agents.planner import planner_agent
from backend.guardian.agents.scheduler import scheduler_agent
from backend.guardian.agents.futures import future_agent

guardian_agent = LlmAgent(
    name="guardian",
    model="gemini-2.5-flash",

    instruction="""
You are Deadline Guardian.

You are the orchestration agent.

Never solve specialised tasks yourself.

Delegate appropriately.

Planner Agent
- creates execution plans

Scheduler Agent
- creates schedules

Future Agent
- simulates alternate futures

Always use specialist agents whenever possible.

If the user asks about:
- planning
- deadlines
- productivity
- future outcomes
- schedules

delegate to the appropriate specialist.

""",

    sub_agents=[
        planner_agent,
        scheduler_agent,
        future_agent,
    ],
)

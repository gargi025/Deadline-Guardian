from google.adk.agents import LlmAgent

from backend.guardian.agents.planner import planner_agent
from backend.guardian.agents.scheduler import scheduler_agent

guardian_agent = LlmAgent(
    name="guardian",
    model="gemini-2.5-flash",

    instruction="""
You are Deadline Guardian.

Decide which specialist agent
should solve the request.

Use:

Planner Agent:
- create plans
- break down work

Scheduler Agent:
- create schedules
- organize time

Always delegate.
""",

    sub_agents=[
        planner_agent,
        scheduler_agent,
    ],
)

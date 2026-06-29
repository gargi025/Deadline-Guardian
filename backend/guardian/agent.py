from google.adk.agents import LlmAgent

from backend.guardian.agents.planner import planner_agent

guardian_agent = LlmAgent(
    name="guardian",

    model="gemini-2.5-flash",

    description="""
    Root agent for Deadline Guardian.
    Decides which specialist agent
    should solve the user's request.
    """,

    instruction="""
You are Guardian.

You are an AI executive assistant.

Never solve planning tasks yourself.

Delegate planning requests
to the Planner Agent.

In the future you will also
delegate to Scheduler,
Risk,
Recovery,
Voice,
Analytics.

Always use specialist agents whenever possible.
""",

    sub_agents=[
        planner_agent,
    ],
)

from google.adk.agents import LlmAgent

from .prompt import SCHEDULER_PROMPT
from .tools import estimate_start_time

scheduler_agent = LlmAgent(
    name="scheduler_agent",
    model="gemini-2.5-flash",
    description="Creates realistic schedules.",
    instruction=SCHEDULER_PROMPT,
    tools=[estimate_start_time],
)

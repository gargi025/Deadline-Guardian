from google.adk.agents import LlmAgent

from backend.app.models.planner import ExecutionPlan
from .prompt import PLANNER_PROMPT
from .tools import decompose_task


planner_agent = LlmAgent(
    name="planner_agent",
    model="gemini-2.5-flash",
    description="Creates structured execution plans.",

    instruction=PLANNER_PROMPT,

    tools=[
        decompose_task,
    ],

    output_schema=ExecutionPlan,
)
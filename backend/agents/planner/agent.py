from google.adk.agents import LlmAgent

from .prompt import PLANNER_PROMPT
from .tools import decompose_task
from app.models.planner import ExecutionPlan


planner_agent = LlmAgent(
    name="planner_agent",

    model="gemini-2.5-flash",

    instruction=PLANNER_PROMPT,

    tools=[
        decompose_task,
    ],

    output_schema=ExecutionPlan,
)

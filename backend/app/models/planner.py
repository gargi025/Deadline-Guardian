from pydantic import BaseModel, Field
from typing import List


class PlanStep(BaseModel):
    title: str = Field(description="Title of the subtask")
    description: str = Field(description="Detailed explanation")
    estimated_minutes: int = Field(description="Estimated completion time")


class ExecutionPlan(BaseModel):
    task: str = Field(description="Original task")
    total_estimated_minutes: int = Field(
        description="Total estimated effort"
    )
    subtasks: List[PlanStep]
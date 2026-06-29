from pydantic import BaseModel
from datetime import datetime


class TaskRequest(BaseModel):
    task: str
    deadline: datetime


class SubTask(BaseModel):
    title: str
    estimated_minutes: int


class PlannerResponse(BaseModel):
    subtasks: list[SubTask]
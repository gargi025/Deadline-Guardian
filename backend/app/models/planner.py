from datetime import datetime
from enum import Enum
from typing import List
from uuid import uuid4

from pydantic import BaseModel, Field


class Priority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class RiskLevel(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"


class PlanStep(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid4()))

    title: str

    description: str

    estimated_minutes: int

    difficulty: int

    dependencies: List[str] = Field(default_factory=list)

    completed: bool = False


class ExecutionPlan(BaseModel):
    task: str

    summary: str

    deadline: datetime

    total_estimated_minutes: int

    priority: str

    risk_level: str

    confidence: float

    reasoning: str

    subtasks: List[PlanStep]
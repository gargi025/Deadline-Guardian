from pydantic import BaseModel
from typing import List


class FutureTask(BaseModel):
    title: str
    start: str
    duration: str


class FutureScenario(BaseModel):
    title: str
    subtitle: str

    success_probability: int

    stress_level: str

    summary: str

    recommendation: str

    tasks: List[FutureTask]


class FutureSimulation(BaseModel):
    futures: List[FutureScenario]

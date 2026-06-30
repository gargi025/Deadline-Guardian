from typing import List
from pydantic import BaseModel


class TimelineItem(BaseModel):
    time: str
    title: str


class FutureScenario(BaseModel):
    id: str

    title: str

    success_probability: int

    stress_level: str

    summary: str

    recommendation: str

    quote: str

    timeline: List[TimelineItem]


class GuardianFutures(BaseModel):
    futures: List[FutureScenario]
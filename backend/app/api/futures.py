from fastapi import APIRouter

from backend.guardian.workflows.futures import guardian_futures
from pydantic import BaseModel

router = APIRouter()


class FutureRequest(BaseModel):
    task: str
    work_style: str
    leadership_style: str


@router.post("/guardian-futures")
async def generate(request: FutureRequest):

    futures = guardian_futures.generate(
        task=request.task,
        work_style=request.work_style,
        leadership_style=request.leadership_style,
    )

    return futures

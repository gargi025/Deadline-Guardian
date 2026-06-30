from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class FutureRequest(BaseModel):
    task: str
    work_style: str
    leadership_style: str


@router.post("/guardian-futures")
async def guardian_futures(request: FutureRequest):
    """
    Temporary endpoint.

    We'll replace the hardcoded response with Gemini
    in the next step.
    """

    return {
        "task": request.task,
        "work_style": request.work_style,
        "leadership_style": request.leadership_style,
        "futures": [
            {
                "id": "guardian",
                "title": "The Guardian Path"
            }
        ]
    }

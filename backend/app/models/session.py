from datetime import datetime

from pydantic import BaseModel


class Session(BaseModel):
    session_id: str

    user_id: str

    created_at: datetime
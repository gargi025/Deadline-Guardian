from pydantic import BaseModel


class UserProfile(BaseModel):
    user_id: str

    preferred_personality: str = "mentor"

    timezone: str = "Asia/Kolkata"
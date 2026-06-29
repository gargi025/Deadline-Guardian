from google.genai import Client
from app.core.config import settings


class ModelService:
    """
    Wrapper around Gemini.

    All agents use this service instead of
    creating their own clients.
    """

    def __init__(self):
        self.client = Client(
            vertexai=True,
            project=settings.GOOGLE_CLOUD_PROJECT,
            location=settings.GOOGLE_CLOUD_LOCATION,
        )


model_service = ModelService()
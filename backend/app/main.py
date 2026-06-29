from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Deadline Guardian API",
    description="AI-powered executive assistant backend",
    version="1.0.0",
)

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "status": "healthy",
        "service": "Deadline Guardian",
        "version": "1.0.0",
    }


@app.get("/health")
async def health():
    return {
        "status": "ok"
    }
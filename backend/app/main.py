from fastapi import FastAPI
from backend.app.api.futures import router as futures_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Deadline Guardian API",
    description="AI-powered executive assistant backend",
    version="1.0.0",
)

app.include_router(futures_router)

origins = [
    "http://localhost:3000",
    "https://deadline-guardian-4ij7.vercel.app",
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

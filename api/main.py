from pathlib import Path
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from utils.database import engine, Base
from routers.v1 import router as v1_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Dorpsvereniging De Schrijvershoek", docs_url="/docs", redoc_url="/redocs")

BASE_DIR = Path(__file__).resolve().parent

static_dir = BASE_DIR / "static"

static_dir.mkdir(parents=True, exist_ok=True)

app.mount("/static", StaticFiles(directory=str(static_dir)), name="static")

news_images_dir = static_dir / "news_images"
news_images_dir.mkdir(parents=True, exist_ok=True)
app.mount("/news_images", StaticFiles(directory=str(news_images_dir)), name="news_images")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(v1_router, prefix="/api/v1")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)

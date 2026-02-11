from fastapi import APIRouter
from .health import router as health_router
from .news import router as news_router
from .activities import router as activities_router

router = APIRouter(
    tags=["v1"]
)

router.include_router(health_router, tags=["health"])
router.include_router(news_router, tags=["news"])
router.include_router(activities_router, tags=["activities"])
from fastapi import APIRouter
from config import get_settings

router = APIRouter(tags=["health"])

settings = get_settings()


@router.get("/health")
async def health():
    return {
        "status": "healthy",
        "app": settings.app_name,
        "version": settings.app_version,
    }
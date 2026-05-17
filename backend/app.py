from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config import get_settings
from routes.generate import router as generate_router
from routes.health import router as health_router
from utils.error_handlers import register_exception_handlers
from utils.logger import configure_logging

settings = get_settings()

configure_logging()

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

register_exception_handlers(app)

app.include_router(generate_router)
app.include_router(health_router)
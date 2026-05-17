from fastapi import Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from pydantic import ValidationError


def register_exception_handlers(app):

    @app.exception_handler(RequestValidationError)
    async def request_validation_handler(
        request: Request,
        exc: RequestValidationError,
    ):
        return JSONResponse(
            status_code=422,
            content={
                "status": "error",
                "type": "request_validation_error",
                "details": exc.errors(),
            },
        )

    @app.exception_handler(ValidationError)
    async def pydantic_validation_handler(
        request: Request,
        exc: ValidationError,
    ):
        return JSONResponse(
            status_code=422,
            content={
                "status": "error",
                "type": "pydantic_validation_error",
                "details": exc.errors(),
            },
        )

    @app.exception_handler(Exception)
    async def generic_exception_handler(
        request: Request,
        exc: Exception,
    ):
        return JSONResponse(
            status_code=500,
            content={
                "status": "error",
                "type": "internal_server_error",
                "message": str(exc),
            },
        )
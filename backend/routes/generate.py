from fastapi import APIRouter

from schemas.request import ResumeRequest
from schemas.response import GenerateResponse
from services.pipeline_orchestrator import PipelineOrchestrator

router = APIRouter(tags=["resume"])

orchestrator = PipelineOrchestrator()


@router.post("/generate", response_model=GenerateResponse)
async def generate_resume(payload: ResumeRequest):

    result = await orchestrator.generate(payload)

    return result
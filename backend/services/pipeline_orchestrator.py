from services.json_generation_service import JSONGenerationService
from services.html_generation_service import HTMLGenerationService


class PipelineOrchestrator:
    def __init__(self):
        self.json_service = JSONGenerationService()
        self.html_service = HTMLGenerationService()

    async def generate(self, payload):
        ats_json = await self.json_service.generate(payload)

        html_resume = await self.html_service.generate(ats_json)

        return {
            "status": "success",
            "source": "groq",
            "ats_json": ats_json,
            "html_resume": html_resume,
        }
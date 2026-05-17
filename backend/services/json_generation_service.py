from prompts.step1_ats_json import build_ats_json_prompt
from services.groq_service import GroqService
from utils.json_validator import validate_ats_json


class JSONGenerationService:
    def __init__(self):
        self.groq_service = GroqService()

    async def generate(self, payload):
        system_prompt, user_prompt = build_ats_json_prompt(payload)

        raw_json = await self.groq_service.generate_json(
            system_prompt,
            user_prompt,
        )
        print(raw_json)

        return validate_ats_json(raw_json)
from prompts.step2_html_resume import build_html_resume_prompt
from services.groq_service import GroqService


class HTMLGenerationService:
    def __init__(self):
        self.groq_service = GroqService()

    async def generate(self, ats_json):
        system_prompt, user_prompt = build_html_resume_prompt(ats_json)

        html = await self.groq_service.generate_html(
            system_prompt,
            user_prompt,
        )

        html = html.replace("```html", "")
        html = html.replace("```", "")

        return html.strip()
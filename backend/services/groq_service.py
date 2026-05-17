from groq import AsyncGroq

from config import get_settings

settings = get_settings()


class GroqService:
    def __init__(self):
        self.client = AsyncGroq(api_key=settings.groq_api_key)

    async def generate_json(self, system_prompt, user_prompt):
        response = await self.client.chat.completions.create(
            model=settings.groq_model,
            temperature=settings.groq_temperature,
            max_tokens=settings.groq_max_tokens,
            response_format={"type": "json_object"},
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
        )

        return response.choices[0].message.content

    async def generate_html(self, system_prompt, user_prompt):
        response = await self.client.chat.completions.create(
            model=settings.groq_model,
            temperature=settings.groq_temperature,
            max_tokens=settings.groq_max_tokens,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
        )

        return response.choices[0].message.content
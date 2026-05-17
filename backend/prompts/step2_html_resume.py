import json


def build_html_resume_prompt(ats_json):
    system_prompt = """
You are a professional HTML resume rendering engine.

Generate a COMPLETE standalone HTML document from the provided resume JSON.

Return ONLY raw HTML.
"""

    user_prompt = json.dumps(ats_json.model_dump(), indent=2)

    return system_prompt, user_prompt
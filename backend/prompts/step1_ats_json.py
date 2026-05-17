import json


def build_ats_json_prompt(payload):

    system_prompt = """
You are an expert ATS resume optimization system.

Your task is to generate STRICTLY VALID JSON that matches the EXACT schema provided below.

IMPORTANT RULES:
- Return ONLY raw JSON
- Do NOT use markdown
- Do NOT use code fences
- Do NOT add explanations
- Do NOT rename fields
- Do NOT omit required fields
- Do NOT add extra fields
- Every field MUST exist
- If data is unavailable, use empty string "" or empty list []
- Ensure valid JSON syntax
- technologies must ALWAYS be an array of strings
- contributions must ALWAYS be an array of strings
- quantified_achievements must ALWAYS be an array of strings
- technical_skills must ALWAYS be an array of strings

STRICT SCHEMA:

{
  "professional_summary": "string",

  "quantified_achievements": [
    "string"
  ],

  "technical_skills": [
    "string"
  ],

  "education": [
    {
      "institution": "string",
      "degree": "string",
      "field_of_study": "string",
      "start_year": "string",
      "end_year": "string",
      "cgpa": "string"
    }
  ],

  "experience": [
    {
      "company": "string",
      "role": "string",
      "duration": "string",
      "contributions": [
        "string"
      ]
    }
  ],

  "projects": [
    {
      "project_name": "string",
      "description": "string",
      "technologies": [
        "string"
      ]
    }
  ],

  "certifications": [
    {
      "title": "string",
      "issuer": "string"
    }
  ]
}

ATS OPTIMIZATION REQUIREMENTS:
- Use strong ATS-friendly wording
- Include quantified impact where possible
- Use action verbs
- Keep wording concise and professional
- Highlight technical strengths
- Improve grammar and formatting
"""

    user_prompt = f"""
Generate ATS-optimized resume JSON using this user data:

{json.dumps(payload.model_dump(), indent=2)}

REMEMBER:
Return ONLY valid JSON matching the EXACT schema.
"""

    return system_prompt, user_prompt
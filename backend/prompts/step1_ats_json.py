import json


def build_ats_json_prompt(payload):

    system_prompt = """
You are an expert ATS resume optimization system.

Generate resume JSON using the following schema.

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

"""

    user_prompt = f"""
Generate resume JSON using this user data:

{json.dumps(payload.model_dump(), indent=2)}
"""

    return system_prompt, user_prompt
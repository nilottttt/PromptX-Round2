from pydantic import BaseModel
from schemas.resume_json import ATSResumeJSON


class GenerateResponse(BaseModel):
    status: str
    source: str
    ats_json: ATSResumeJSON
    html_resume: str
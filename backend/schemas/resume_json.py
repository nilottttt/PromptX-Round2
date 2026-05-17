from pydantic import BaseModel
from typing import List


class EducationItem(BaseModel):
    institution: str
    degree: str
    field_of_study: str
    start_year: str
    end_year: str
    cgpa: str


class ExperienceItem(BaseModel):
    company: str
    role: str
    duration: str
    contributions: List[str]


class ProjectItem(BaseModel):
    project_name: str
    description: str
    technologies: List[str]


class CertificationItem(BaseModel):
    title: str
    issuer: str


class ATSResumeJSON(BaseModel):

    professional_summary: str

    quantified_achievements: List[str]

    technical_skills: List[str]

    education: List[EducationItem]

    experience: List[ExperienceItem]

    projects: List[ProjectItem]

    certifications: List[CertificationItem]
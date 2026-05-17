from typing import List
from pydantic import BaseModel, EmailStr


class PersonalDetails(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    address: str
    linkedin: str | None = None
    github: str | None = None


class Education(BaseModel):
    institution: str
    degree: str
    field_of_study: str
    start_year: str
    end_year: str
    cgpa: str | None = None


class Project(BaseModel):
    project_name: str
    description: str
    technologies: List[str]


class Experience(BaseModel):
    company: str
    role: str
    duration: str
    contributions: List[str]


class Certification(BaseModel):
    title: str
    issuer: str


class Club(BaseModel):
    name: str
    role: str


class ResumeRequest(BaseModel):
    personal_details: PersonalDetails
    career_objective: str
    technical_skills: List[str]
    education: List[Education]
    projects: List[Project]
    experience: List[Experience]
    certifications: List[Certification]
    clubs: List[Club]
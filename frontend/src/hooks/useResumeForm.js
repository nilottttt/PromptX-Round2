import { useState } from "react";

function useResumeForm() {
  const [formData, setFormData] = useState({
    personal_details: {
      full_name: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      github: "",
    },

    career_objective: "",

    technical_skills: [],

    education: [
      {
        institution: "",
        degree: "",
        field_of_study: "",
        start_year: "",
        end_year: "",
        cgpa: "",
      },
    ],

    projects: [
      {
        project_name: "",
        description: "",
        technologies: [],
      },
    ],

    experience: [
      {
        company: "",
        role: "",
        duration: "",
        contributions: [],
      },
    ],

    certifications: [
      {
        title: "",
        issuer: "",
      },
    ],

    clubs: [
      {
        name: "",
        role: "",
      },
    ],
  });

  const updateSection = (section, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  const getPayload = () => formData;

  return {
    formData,
    updateSection,
    getPayload,
  };
}

export default useResumeForm;
import { useState } from "react";

import PersonalDetailsForm from "./PersonalDetailsForm";
import ObjectiveForm from "./ObjectiveForm";
import EducationForm from "./EducationForm";
import ProjectsForm from "./ProjectsForm";
import ExperienceForm from "./ExperienceForm";
import CertificationsForm from "./CertificationsForm";
import ClubsForm from "./ClubsForm";
import SkillsForm from "./SkillsForm";
import StepIndicator from "./StepIndicator";

const steps = [
  "Personal",
  "Objective",
  "Education",
  "Projects",
  "Experience",
  "Certifications",
  "Clubs",
  "Skills",
];

function ResumeForm({ form, onSubmit, loading }) {
  const [step, setStep] = useState(0);

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  return (
    <div className="bg-slate-900 p-6 rounded-2xl shadow-xl">
      <StepIndicator current={step} steps={steps} />

      {step === 0 && <PersonalDetailsForm form={form} />}
      {step === 1 && <ObjectiveForm form={form} />}
      {step === 2 && <EducationForm form={form} />}
      {step === 3 && <ProjectsForm form={form} />}
      {step === 4 && <ExperienceForm form={form} />}
      {step === 5 && <CertificationsForm form={form} />}
      {step === 6 && <ClubsForm form={form} />}
      {step === 7 && <SkillsForm form={form} />}

      <div className="flex justify-between mt-8">
        <button
          disabled={step === 0}
          onClick={prev}
          className="bg-gray-700 px-4 py-2 rounded"
        >
          Previous
        </button>

        {step < steps.length - 1 ? (
          <button
            onClick={next}
            className="bg-blue-600 px-4 py-2 rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={onSubmit}
            className="bg-green-600 px-4 py-2 rounded"
          >
            {loading ? "Generating..." : "Generate Resume"}
          </button>
        )}
      </div>
    </div>
  );
}

export default ResumeForm;
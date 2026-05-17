function SkillsForm({ form }) {
  const skills = form.formData.technical_skills || [];

  return (
    <textarea
      rows="8"
      placeholder="Technical Skills (comma separated)"
      value={skills.join(", ")}
      onChange={(e) =>
        form.updateSection(
          "technical_skills",
          e.target.value
            .split(",")
            .map((s) => s.trim())
        )
      }
      className="w-full p-4 rounded bg-slate-800 text-white border border-slate-600"
    />
  );
}

export default SkillsForm;
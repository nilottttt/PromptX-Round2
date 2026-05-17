function ObjectiveForm({ form }) {
  return (
    <textarea
      rows="8"
      placeholder="Career Objective"
      value={form.formData.career_objective || ""}
      onChange={(e) =>
        form.updateSection("career_objective", e.target.value)
      }
      className="w-full p-4 rounded bg-slate-800 text-white"
    />
  );
}

export default ObjectiveForm;
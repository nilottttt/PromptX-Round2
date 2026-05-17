function ExperienceForm({ form }) {
  const experience = form.formData.experience;

  const updateExperience = (index, field, value) => {
    const updated = [...experience];

    updated[index][field] = value;

    form.updateSection("experience", updated);
  };

  const addExperience = () => {
    form.updateSection("experience", [
      ...experience,
      {
        company: "",
        role: "",
        duration: "",
        description: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    const updated = experience.filter((_, i) => i !== index);

    form.updateSection("experience", updated);
  };

  return (
    <div className="space-y-6">
      {experience.map((item, index) => (
        <div
          key={index}
          className="bg-slate-800 p-6 rounded-xl space-y-4"
        >
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">
              Experience {index + 1}
            </h2>

            {experience.length > 1 && (
              <button
                onClick={() => removeExperience(index)}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Remove
              </button>
            )}
          </div>

          <input
            placeholder="Company"
            value={item.company}
            onChange={(e) =>
              updateExperience(index, "company", e.target.value)
            }
            className="w-full p-3 rounded bg-slate-900"
          />

          <input
            placeholder="Role"
            value={item.role}
            onChange={(e) =>
              updateExperience(index, "role", e.target.value)
            }
            className="w-full p-3 rounded bg-slate-900"
          />

          <input
            placeholder="Duration"
            value={item.duration}
            onChange={(e) =>
              updateExperience(index, "duration", e.target.value)
            }
            className="w-full p-3 rounded bg-slate-900"
          />

          <textarea
            rows="5"
            placeholder="Contributions (comma separated)"
            value={item.contributions.join(", ")}
            onChange={(e) =>
              updateExperience(
                index,
                "contributions",
                e.target.value.split(",").map((s) => s.trim())
              )
          }
  className="w-full p-3 rounded bg-slate-900"
/>
        </div>
      ))}

      <button
        onClick={addExperience}
        className="bg-blue-600 px-4 py-2 rounded"
      >
        Add Experience
      </button>
    </div>
  );
}

export default ExperienceForm;
function EducationForm({ form }) {
  const education = form.formData.education;

  const updateEducation = (index, field, value) => {
    const updated = [...education];

    updated[index][field] = value;

    form.updateSection("education", updated);
  };

  const addEducation = () => {
    form.updateSection("education", [
      ...education,
      {
        institution: "",
        degree: "",
        field_of_study: "",
        start_year: "",
        end_year: "",
        cgpa: "",
      },
    ]);
  };

  const removeEducation = (index) => {
    const updated = education.filter((_, i) => i !== index);

    form.updateSection("education", updated);
  };

  return (
    <div className="space-y-6">
      {education.map((item, index) => (
        <div
          key={index}
          className="bg-slate-800 p-6 rounded-xl space-y-4"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Education {index + 1}
            </h2>

            {education.length > 1 && (
              <button
                onClick={() => removeEducation(index)}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Remove
              </button>
            )}
          </div>

          <input
            placeholder="Institution"
            value={item.institution}
            onChange={(e) =>
              updateEducation(index, "institution", e.target.value)
            }
            className="w-full p-3 rounded bg-slate-900"
          />

          <input
            placeholder="Degree"
            value={item.degree}
            onChange={(e) =>
              updateEducation(index, "degree", e.target.value)
            }
            className="w-full p-3 rounded bg-slate-900"
          />

          <input
            placeholder="Field of Study"
            value={item.field_of_study}
            onChange={(e) =>
              updateEducation(index, "field_of_study", e.target.value)
            }
            className="w-full p-3 rounded bg-slate-900"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="Start Year"
              value={item.start_year}
              onChange={(e) =>
                updateEducation(index, "start_year", e.target.value)
              }
              className="w-full p-3 rounded bg-slate-900"
            />

            <input
              placeholder="End Year"
              value={item.end_year}
              onChange={(e) =>
                updateEducation(index, "end_year", e.target.value)
              }
              className="w-full p-3 rounded bg-slate-900"
            />
          </div>

          <input
            placeholder="CGPA"
            value={item.cgpa}
            onChange={(e) =>
              updateEducation(index, "cgpa", e.target.value)
            }
            className="w-full p-3 rounded bg-slate-900"
          />
        </div>
      ))}

      <button
        onClick={addEducation}
        className="bg-blue-600 px-4 py-2 rounded"
      >
        Add Education
      </button>
    </div>
  );
}

export default EducationForm;
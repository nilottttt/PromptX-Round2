function ProjectsForm({ form }) {
  const projects = form.formData.projects;

  const updateProject = (index, field, value) => {
    const updated = [...projects];

    updated[index][field] = value;

    form.updateSection("projects", updated);
  };

  const addProject = () => {
    form.updateSection("projects", [
      ...projects,
      {
        project_name: "",
        description: "",
        technologies: [],
      },
    ]);
  };

  const removeProject = (index) => {
    const updated = projects.filter((_, i) => i !== index);

    form.updateSection("projects", updated);
  };

  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-slate-800 p-6 rounded-xl space-y-4"
        >
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">
              Project {index + 1}
            </h2>

            {projects.length > 1 && (
              <button
                onClick={() => removeProject(index)}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Remove
              </button>
            )}
          </div>

          <input
            placeholder="Project Name"
            value={project.project_name}
            onChange={(e) =>
              updateProject(index, "project_name", e.target.value)
            }
            className="w-full p-3 rounded bg-slate-900"
          />

          <textarea
            rows="5"
            placeholder="Project Description"
            value={project.description}
            onChange={(e) =>
              updateProject(index, "description", e.target.value)
            }
            className="w-full p-3 rounded bg-slate-900"
          />

          <input
            placeholder="Technologies (comma separated)"
            value={project.technologies.join(", ")}
            onChange={(e) =>
              updateProject(
                index,
                "technologies",
                e.target.value.split(",").map((t) => t.trim())
              )
            }
            className="w-full p-3 rounded bg-slate-900"
          />
        </div>
      ))}

      <button
        onClick={addProject}
        className="bg-blue-600 px-4 py-2 rounded"
      >
        Add Project
      </button>
    </div>
  );
}

export default ProjectsForm;
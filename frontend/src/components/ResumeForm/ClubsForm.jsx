function ClubsForm({ form }) {
  const clubs = form.formData.clubs;

  const updateClub = (index, field, value) => {
    const updated = [...clubs];
    updated[index][field] = value;

    form.updateSection("clubs", updated);
  };

  const addClub = () => {
    form.updateSection("clubs", [
      ...clubs,
      {
        name: "",
        role: "",
      },
    ]);
  };

  return (
    <div className="space-y-4">
      {clubs.map((club, index) => (
        <div key={index} className="space-y-2">
          <input
            placeholder="Club Name"
            value={club.name}
            onChange={(e) =>
              updateClub(index, "name", e.target.value)
            }
            className="w-full p-3 rounded bg-slate-900"
          />

          <input
            placeholder="Role"
            value={club.role}
            onChange={(e) =>
              updateClub(index, "role", e.target.value)
            }
            className="w-full p-3 rounded bg-slate-900"
          />
        </div>
      ))}

      <button
        onClick={addClub}
        className="bg-blue-600 px-4 py-2 rounded"
      >
        Add Club
      </button>
    </div>
  );
}

export default ClubsForm;
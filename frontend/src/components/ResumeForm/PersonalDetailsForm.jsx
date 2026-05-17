function PersonalDetailsForm({ form }) {
  const data = form.formData.personal_details || {};

  const handleChange = (e) => {
    form.updateSection("personal_details", {
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-4">
      <input
        name="full_name"
        placeholder="Full Name"
        value={data.full_name || ""}
        onChange={handleChange}
        className="w-full p-3 rounded bg-slate-800 text-white"
      />

      <input
        name="email"
        placeholder="Email"
        value={data.email || ""}
        onChange={handleChange}
        className="w-full p-3 rounded bg-slate-800 text-white"
      />

      <input
        name="phone"
        placeholder="Phone"
        value={data.phone || ""}
        onChange={handleChange}
        className="w-full p-3 rounded bg-slate-800 text-white"
      />

      <input
        name="address"
        placeholder="Address"
        value={data.address || ""}
        onChange={handleChange}
        className="w-full p-3 rounded bg-slate-800 text-white"
      />

      <input
        name="linkedin"
        placeholder="LinkedIn"
        value={data.linkedin || ""}
        onChange={handleChange}
        className="w-full p-3 rounded bg-slate-800 text-white"
      />

      <input
        name="github"
        placeholder="GitHub"
        value={data.github || ""}
        onChange={handleChange}
        className="w-full p-3 rounded bg-slate-800 text-white"
      />
    </div>
  );
}

export default PersonalDetailsForm;
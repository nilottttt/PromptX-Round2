function CertificationsForm({ form }) {
  const certifications = form.formData.certifications;

  const updateCertification = (index, field, value) => {
    const updated = [...certifications];
    updated[index][field] = value;

    form.updateSection("certifications", updated);
  };

  const addCertification = () => {
    form.updateSection("certifications", [
      ...certifications,
      {
        title: "",
        issuer: "",
      },
    ]);
  };

  return (
    <div className="space-y-4">
      {certifications.map((item, index) => (
        <div key={index} className="space-y-2">
          <input
            placeholder="Certification Title"
            value={item.title}
            onChange={(e) =>
              updateCertification(index, "title", e.target.value)
            }
            className="w-full p-3 rounded bg-slate-900"
          />

          <input
            placeholder="Issuer"
            value={item.issuer}
            onChange={(e) =>
              updateCertification(index, "issuer", e.target.value)
            }
            className="w-full p-3 rounded bg-slate-900"
          />
        </div>
      ))}

      <button
        onClick={addCertification}
        className="bg-blue-600 px-4 py-2 rounded"
      >
        Add Certification
      </button>
    </div>
  );
}

export default CertificationsForm;
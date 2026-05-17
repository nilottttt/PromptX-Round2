function StepIndicator({ steps, current }) {
  return (
    <div className="flex gap-2 mb-8 flex-wrap">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`px-3 py-2 rounded-full text-sm ${
            current === index
              ? "bg-blue-600"
              : "bg-slate-700"
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}

export default StepIndicator;
import ResumeForm from "./components/ResumeForm";
import ResumeOutput from "./components/ResumeOutput";
import useResumeForm from "./hooks/useResumeForm";
import useGenerateResume from "./hooks/useGenerateResume";

function App() {
  const form = useResumeForm();

  const {
    loading,
    response,
    error,
    generateResume,
  } = useGenerateResume();

  const handleSubmit = async () => {
    const payload = form.getPayload();
    await generateResume(payload);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">
          PromptX Finals
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ResumeForm
            form={form}
            onSubmit={handleSubmit}
            loading={loading}
          />

          <ResumeOutput
            response={response}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
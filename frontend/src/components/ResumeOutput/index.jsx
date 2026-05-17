import { useState } from "react";
import JSONTab from "./JSONTab";
import HTMLTab from "./HTMLTab";

function ResumeOutput({ response, loading, error }) {
  const [tab, setTab] = useState("json");

  if (loading) {
    return (
      <div className="bg-slate-900 rounded-2xl p-6">
        Generating Resume...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500 p-4 rounded-xl">
        {error}
      </div>
    );
  }

  if (!response) {
    return (
      <div className="bg-slate-900 rounded-2xl p-6">
        Resume output will appear here.
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setTab("json")}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          ATS JSON
        </button>

        <button
          onClick={() => setTab("html")}
          className="bg-green-600 px-4 py-2 rounded"
        >
          HTML Resume
        </button>
      </div>

      {tab === "json" ? (
        <JSONTab data={response.ats_json} />
      ) : (
        <HTMLTab html={response.html_resume} />
      )}
    </div>
  );
}

export default ResumeOutput;
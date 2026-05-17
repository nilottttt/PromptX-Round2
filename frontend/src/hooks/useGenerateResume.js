import { useState } from "react";
import { generateResume as generateResumeAPI } from "../services/api";

function useGenerateResume() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  const generateResume = async (data) => {
    try {
      setLoading(true);
      setError("");

      const result = await generateResumeAPI(data);

      setResponse(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    response,
    error,
    generateResume,
  };
}

export default useGenerateResume;
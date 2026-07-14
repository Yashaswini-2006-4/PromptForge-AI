import { useState } from "react";
import { generateExtension } from "../services/aiService";

export default function useGenerateExtension() {
  const [loading, setLoading] = useState(false);
  const [extension, setExtension] = useState(null);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const handleGenerate = async (prompt) => {
    try {
      setLoading(true);
      setError("");

      const data = await generateExtension(prompt);

      setExtension(data.extension);
      setFiles(data.files);

      return data;
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to generate extension."
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    extension,
    files,
    handleGenerate,
  };
}
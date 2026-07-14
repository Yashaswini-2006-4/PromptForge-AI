import { useState } from "react";
import { generateExtension } from "../services/aiService";

export default function useGenerateExtension() {
  const [loading, setLoading] = useState(false);
  const [extension, setExtension] = useState(null);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  /*
  |--------------------------------------------------------------------------
  | Generate New Extension
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | Load Saved Extension
  |--------------------------------------------------------------------------
  */

  const loadExtension = (savedExtension) => {
    setExtension({
      title: savedExtension.title,
      description: savedExtension.description,
      version: savedExtension.version,
    });

    setFiles(savedExtension.files || []);
  };

  /*
  |--------------------------------------------------------------------------
  | Reset Workspace
  |--------------------------------------------------------------------------
  */

  const resetExtension = () => {
    setExtension(null);
    setFiles([]);
    setError("");
  };

  return {
    loading,
    error,

    extension,
    files,

    handleGenerate,
    loadExtension,
    resetExtension,
  };
}
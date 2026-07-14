import { useState } from "react";
import toast from "react-hot-toast";

import WorkspaceLayout from "../layouts/WorkspaceLayout";
import FileExplorer from "../components/generate/FileExplorer";
import CodeEditor from "../components/generate/CodeEditor";
import PreviewPanel from "../components/generate/PreviewPanel";
import useGenerateExtension from "../hooks/useGenerateExtension";

import {
  downloadExtension,
  saveExtension,
} from "../services/extensionService";

export default function Generate() {
  const [prompt, setPrompt] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    loading,
    error,
    extension,
    files,
    handleGenerate,
  } = useGenerateExtension();

  const generate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt.");
      return;
    }

    try {
      const data = await handleGenerate(prompt);

      if (data?.files?.length > 0) {
        setSelectedFile(data.files[0]);
      }

      toast.success("Extension generated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate extension.");
    }
  };

  const handleSave = async () => {
    try {
      await saveExtension({
        title: extension.title,
        description: extension.description,
        prompt,
        version: extension.version,
        files,
      });

      toast.success("Extension saved successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to save extension.");
    }
  };

  const handleDownload = async () => {
    try {
      await downloadExtension({
        title: extension?.title,
        files,
      });

      toast.success("ZIP downloaded successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to download ZIP.");
    }
  };

  return (
    <WorkspaceLayout>
      <div className="flex flex-col gap-6">

        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold text-white">
            AI Extension Generator
          </h1>

          <p className="text-zinc-400 mt-2">
            Describe your Chrome Extension and let PromptForge build it.
          </p>
        </div>

        {/* Prompt */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <textarea
            rows={7}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: Build a Chrome Extension that summarizes YouTube videos using AI."
            className="
              w-full
              bg-zinc-950
              border
              border-zinc-800
              rounded-xl
              p-4
              text-white
              resize-none
              outline-none
              focus:border-violet-500
            "
          />

          <div className="flex items-center gap-4 mt-6">

            <button
              onClick={generate}
              disabled={loading}
              className="
                px-8
                py-3
                rounded-xl
                bg-violet-600
                hover:bg-violet-500
                disabled:opacity-50
                transition
                text-white
                font-semibold
              "
            >
              {loading ? "Generating..." : "Generate Extension"}
            </button>

            {files.length > 0 && (
              <>
                <button
                  onClick={handleSave}
                  className="
                    px-8
                    py-3
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-500
                    transition
                    text-white
                    font-semibold
                  "
                >
                  💾 Save Extension
                </button>

                <button
                  onClick={handleDownload}
                  className="
                    px-8
                    py-3
                    rounded-xl
                    bg-green-600
                    hover:bg-green-500
                    transition
                    text-white
                    font-semibold
                  "
                >
                  📦 Download ZIP
                </button>
              </>
            )}

          </div>

          {error && (
            <p className="text-red-400 mt-4">
              {error}
            </p>
          )}

        </div>

        {/* Workspace */}

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-2">
            <FileExplorer
              files={files}
              selectedFile={selectedFile}
              onSelectFile={setSelectedFile}
            />
          </div>

          <div className="col-span-6">
            <CodeEditor file={selectedFile} />
          </div>

          <div className="col-span-4">
            <PreviewPanel extension={extension} />
          </div>

        </div>

      </div>
    </WorkspaceLayout>
  );
}
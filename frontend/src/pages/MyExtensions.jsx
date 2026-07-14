import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import WorkspaceLayout from "../layouts/WorkspaceLayout";
import {
  getMyExtensions,
  deleteExtension,
  downloadExtension,
} from "../services/extensionService";

export default function MyExtensions() {
  const [extensions, setExtensions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExtensions = async () => {
    try {
      const data = await getMyExtensions();
      setExtensions(data.extensions);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load extensions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExtensions();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this extension?"
    );

    if (!confirmDelete) return;

    try {
      await deleteExtension(id);

      setExtensions((prev) =>
        prev.filter((extension) => extension._id !== id)
      );

      toast.success("Extension deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete extension.");
    }
  };

  const handleDownload = async (extension) => {
    try {
      await downloadExtension(extension);
      toast.success("ZIP downloaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to download ZIP.");
    }
  };

  return (
    <WorkspaceLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold text-white">
            My Extensions
          </h1>

          <p className="text-zinc-400 mt-2">
            Manage your saved AI-generated Chrome extensions.
          </p>
        </div>

        {loading ? (
          <div className="text-zinc-400 text-lg">
            Loading extensions...
          </div>
        ) : extensions.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center">
            <h2 className="text-xl text-white font-semibold">
              No Extensions Yet
            </h2>

            <p className="text-zinc-400 mt-3">
              Generate and save your first extension.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {extensions.map((extension) => (

              <div
                key={extension._id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500 transition"
              >

                <h2 className="text-xl font-bold text-white">
                  {extension.title}
                </h2>

                <p className="text-zinc-400 mt-2 line-clamp-3">
                  {extension.description}
                </p>

                <div className="mt-4 text-sm text-zinc-500">
                  Version {extension.version}
                  <br />
                  {(extension.files || []).length} files
                </div>

                <div className="flex gap-3 mt-6">

                  <button
                    onClick={() => handleDownload(extension)}
                    className="flex-1 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition text-white"
                  >
                    Download
                  </button>

                  <button
                    onClick={() => handleDelete(extension._id)}
                    className="flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition text-white"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </WorkspaceLayout>
  );
}
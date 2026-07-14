export default function FileExplorer({
  files = [],
  selectedFile,
  onSelectFile,
}) {
  return (
    <div className="h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
      <div className="px-5 py-4 border-b border-zinc-800">
        <h2 className="text-white font-semibold">
          Files
        </h2>
      </div>

      {files.length === 0 ? (
        <div className="flex items-center justify-center h-64 text-zinc-500 text-sm px-4 text-center">
          Generate an extension to view project files.
        </div>
      ) : (
        <div className="p-2">
          {files.map((file) => (
            <button
              key={file.name}
              onClick={() => onSelectFile(file)}
              className={`
                w-full
                text-left
                px-4
                py-3
                rounded-xl
                transition
                mb-2

                ${
                  selectedFile?.name === file.name
                    ? "bg-violet-600 text-white"
                    : "text-zinc-300 hover:bg-zinc-800"
                }
              `}
            >
              {file.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
export default function CodeEditor({ file }) {
  if (!file) {
    return (
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 h-[650px] flex items-center justify-center">
        <p className="text-zinc-500">
          Select a file to preview.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">

      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">

        <h2 className="text-xl font-semibold text-white">
          {file.name}
        </h2>

      </div>

      <pre
        className="
          p-6
          text-sm
          text-zinc-200
          overflow-auto
          h-[650px]
          whitespace-pre-wrap
          break-words
          font-mono
        "
      >
        <code>
          {file.content}
        </code>
      </pre>

    </div>
  );
}
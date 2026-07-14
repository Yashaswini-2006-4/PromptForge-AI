export default function PreviewPanel({
  extension,
}) {
  return (
    <div className="h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col">

      <div className="px-5 py-4 border-b border-zinc-800">
        <h2 className="text-white font-semibold">
          Live Preview
        </h2>
      </div>

      {!extension ? (
        <div className="flex-1 flex items-center justify-center text-zinc-500 text-sm px-6 text-center">
          Generate an extension to preview its details.
        </div>
      ) : (
        <div className="p-6 space-y-5">

          <div>
            <p className="text-zinc-400 text-sm">
              Extension Name
            </p>

            <h3 className="text-white text-xl font-semibold mt-1">
              {extension.title}
            </h3>
          </div>

          <div>
            <p className="text-zinc-400 text-sm">
              Description
            </p>

            <p className="text-zinc-200 mt-1">
              {extension.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-zinc-800 rounded-xl p-4">
              <p className="text-zinc-400 text-sm">
                Version
              </p>

              <p className="text-white mt-1">
                {extension.version || "1.0.0"}
              </p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-4">
              <p className="text-zinc-400 text-sm">
                Status
              </p>

              <p className="text-green-400 mt-1">
                {extension.status || "Draft"}
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
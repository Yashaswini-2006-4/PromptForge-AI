export default function GenerateButton({
  loading,
  onClick,
}) {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className="
        px-8
        py-3
        rounded-xl
        bg-violet-600
        hover:bg-violet-500
        disabled:opacity-50
        disabled:cursor-not-allowed
        transition
        text-white
        font-semibold
      "
    >
      {loading
        ? "Generating..."
        : "Generate Extension"}
    </button>
  );
}
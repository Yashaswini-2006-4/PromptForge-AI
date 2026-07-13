export default function StatCard({
  title,
  value,
  color,
}) {
  return (
    <div
      className="
        rounded-2xl
        bg-zinc-900
        border
        border-zinc-800
        p-6
      "
    >
      <p className="text-gray-400">
        {title}
      </p>

      <h2
        className={`text-4xl font-bold mt-4 ${color}`}
      >
        {value}
      </h2>
    </div>
  );
}
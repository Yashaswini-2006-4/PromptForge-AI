export default function NotificationPanel({
  open,
  notifications = [],
}) {
  if (!open) return null;

  return (
    <div
      className="
        absolute
        top-16
        right-0
        w-96
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        shadow-2xl
        overflow-hidden
        z-50
      "
    >
      <div className="px-5 py-4 border-b border-zinc-800">
        <h2 className="text-white text-lg font-semibold">
          Notifications
        </h2>
      </div>

      {notifications.length === 0 ? (
        <div className="py-12 text-center text-zinc-500">
          🔔 No notifications yet.
        </div>
      ) : (
        <div className="max-h-96 overflow-y-auto">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="
                px-5
                py-4
                border-b
                border-zinc-800
                hover:bg-zinc-800
                transition
              "
            >
              <p className="text-white">
                {item.title}
              </p>

              <p className="text-sm text-zinc-500 mt-1">
                {item.time}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

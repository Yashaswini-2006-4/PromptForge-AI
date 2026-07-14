import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "../../services/authService";

export default function EditProfileModal({
  open,
  onClose,
  user,
}) {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({
        fullName: user.fullName || "",
        username: user.username || "",
        email: user.email || "",
      });
    }
  }, [user]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateProfile(form);

      toast.success("Profile updated successfully!");

      onClose();

      window.location.reload();
    } catch (error) {
      console.error(error);

      toast.error(
  error.response?.data?.message ||
    "Failed to update profile."
    );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      <div className="w-full max-w-xl bg-zinc-900 rounded-3xl border border-zinc-800 p-8">

        <h2 className="text-2xl font-bold text-white">
          Edit Profile
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 mt-8"
        >

          <div>
            <label className="text-zinc-400">
              Full Name
            </label>

            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full mt-2 bg-zinc-800 rounded-xl px-4 py-3 text-white outline-none"
            />
          </div>

          <div>
            <label className="text-zinc-400">
              Username
            </label>

            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full mt-2 bg-zinc-800 rounded-xl px-4 py-3 text-white outline-none"
            />
          </div>

          <div>
            <label className="text-zinc-400">
              Email
            </label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-2 bg-zinc-800 rounded-xl px-4 py-3 text-white outline-none"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-zinc-800 text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}
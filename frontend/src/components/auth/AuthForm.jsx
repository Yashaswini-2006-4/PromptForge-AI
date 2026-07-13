import { Link } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Loader from "../ui/Loader";

export default function AuthForm({
  isRegister = false,
  form,
  setForm,
  loading,
  onSubmit,
}) {
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {isRegister && (
        <>
          <Input
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="John Doe"
          />

          <Input
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="john_doe"
          />
        </>
      )}

      <Input
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="john@gmail.com"
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="••••••••"
      />

      <Button type="submit" disabled={loading}>
        {loading ? <Loader /> : isRegister ? "Create Account" : "Login"}
      </Button>

      <div className="text-center text-gray-400 text-sm">
        {isRegister ? (
          <>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-violet-400 hover:text-violet-300"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-violet-400 hover:text-violet-300"
            >
              Create Account
            </Link>
          </>
        )}
      </div>
    </form>
  );
}
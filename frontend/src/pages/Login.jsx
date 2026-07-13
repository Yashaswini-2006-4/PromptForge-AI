import { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import AuthForm from "../components/auth/AuthForm";
import useLogin from "../hooks/useLogin";

export default function Login() {
  const { handleLogin, loading } = useLogin();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(form);
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue building AI-powered Chrome Extensions."
    >
      <AuthForm
        form={form}
        setForm={setForm}
        loading={loading}
        onSubmit={submitHandler}
      />
    </AuthLayout>
  );
}
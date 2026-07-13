import { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import AuthForm from "../components/auth/AuthForm";
import useRegister from "../hooks/useRegister";

export default function Register() {
  const { handleRegister, loading } = useRegister();

  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    handleRegister(form);
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start building AI-powered Chrome Extensions."
    >
      <AuthForm
        isRegister
        form={form}
        setForm={setForm}
        loading={loading}
        onSubmit={submitHandler}
      />
    </AuthLayout>
  );
}
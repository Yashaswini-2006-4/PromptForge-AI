import { useState } from "react";
import { registerUser } from "../services/authService";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useRegister() {
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      setLoading(true);

      const data = await registerUser(formData);

      login(data.token, data.user);

      toast.success("Account created successfully!");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    handleRegister,
    loading,
  };
}
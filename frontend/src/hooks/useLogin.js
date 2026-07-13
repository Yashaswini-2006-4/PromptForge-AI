import { useState } from "react";
import { loginUser } from "../services/authService";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      setLoading(true);

      const data = await loginUser(formData);

      login(data.token, data.user);

      toast.success("Welcome back!");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    handleLogin,
    loading,
  };
}
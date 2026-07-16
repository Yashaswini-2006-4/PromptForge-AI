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
      console.error("REGISTER ERROR:", error);

      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else if (error.response?.data?.errors?.length > 0) {
        toast.error(error.response.data.errors[0].msg);
      } else {
        toast.error("Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    handleRegister,
    loading,
  };
}
import api from "../api/axios";

export const generateExtension = async (prompt) => {
  const { data } = await api.post("/ai/generate", {
    prompt,
  });

  return data;
};
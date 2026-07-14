import api from "../api/axios";

/*
|--------------------------------------------------------------------------
| Register
|--------------------------------------------------------------------------
*/

export const registerUser = async (userData) => {
  const { data } = await api.post("/auth/register", userData);
  return data;
};

/*
|--------------------------------------------------------------------------
| Login
|--------------------------------------------------------------------------
*/

export const loginUser = async (userData) => {
  const { data } = await api.post("/auth/login", userData);
  return data;
};

/*
|--------------------------------------------------------------------------
| Current User
|--------------------------------------------------------------------------
*/

export const getCurrentUser = async () => {
  const { data } = await api.get("/auth/me");
  return data;
};

/*
|--------------------------------------------------------------------------
| Update Profile
|--------------------------------------------------------------------------
*/

export const updateProfile = async (profileData) => {
  const { data } = await api.put(
    "/auth/profile",
    profileData
  );

  return data;
};
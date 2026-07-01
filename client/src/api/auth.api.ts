import api from "./api";

export const loginWithGoogle = (token: string) =>
  api.post("/auth/google", { token });

export const getCurrentUser = () => api.get("/users/me");

export const logout = () => api.post("/auth/logout");

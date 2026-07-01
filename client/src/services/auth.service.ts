import api from "../api/api";

export const googleLogin = (token: string) => {
  return api.post("/auth/google", {
    token,
  });
};

import { useEffect, useState, type ReactNode } from "react";
import { AuthContext, type User } from "./AuthContext";
import { getCurrentUser, logout as logoutApi } from "../api/auth.api";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async () => {
    const response = await getCurrentUser();
    setUser(response.data.user);
  };

  const logout = async () => {
    await logoutApi();
    setUser(null);
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        const response = await getCurrentUser();
        setUser(response.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

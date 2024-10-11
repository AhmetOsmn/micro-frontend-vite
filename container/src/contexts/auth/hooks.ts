import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { AuthContextType } from "./types/AuthContextType";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const useIsAuthenticated = (): boolean => {
  const { user } = useAuth();
  return user !== null;
};

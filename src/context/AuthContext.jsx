import { createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const value = {
    user: null,
    token: null,
    isAuthenticated: false,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
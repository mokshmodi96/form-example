import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AUTH_KEY = "isAuthenticated";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_KEY);
    setIsAuthenticated(stored === "true");
  }, []);

  const login = (cb) => {
    localStorage.setItem(AUTH_KEY, true);
    setIsAuthenticated(true);
    cb();
  };

  const logout = (cb) => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
    cb();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

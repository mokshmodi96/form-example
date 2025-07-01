import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();
const AUTH_KEY = "isAuthenticated";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // wait for initial load

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_KEY);
    setIsAuthenticated(stored === "true");
    setLoading(false);
  }, []);

  const login = (cb) => {
    localStorage.setItem(AUTH_KEY, "true");
    setIsAuthenticated(true);
    cb();
  };

  const logout = (cb) => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
    cb();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

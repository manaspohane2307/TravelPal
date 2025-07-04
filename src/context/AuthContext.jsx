// src/context/AuthContext.js
import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  );

  const [token, setToken] = useState(() => localStorage.getItem("token"));

  // 🔐 Signup
  const signup = async (name, email, password) => {
    const res = await axios.post("http://localhost:5000/api/auth/signup", {
      name,
      email,
      password,
    });

    const { token, user } = res.data;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

    setUser(user);
    setToken(token);
  };

  // 🔐 Login
  const login = async (email, password) => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    const { token, user } = res.data;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

    setUser(user);
    setToken(token);
  };

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);

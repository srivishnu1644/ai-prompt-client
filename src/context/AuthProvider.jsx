import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { jwtDecode } from "jwt-decode";

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("authToken"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      try {
        const decodedUser = jwtDecode(storedToken).user;
        setUser(decodedUser);
        setToken(storedToken);
      } catch (err) {
        console.error("Invalid token in storage");
        logout();
      }
    }
  }, []); // The empty array [] means this runs only once on mount

  const login = (newToken) => {
    try {
      const decodedUser = jwtDecode(newToken).user;

      localStorage.setItem("authToken", newToken);
      setToken(newToken);
      setUser(decodedUser);
    } catch (err) {
      console.error("Failed to decode token on login", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
    setUser(null);
  };

  const value = {
    token,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

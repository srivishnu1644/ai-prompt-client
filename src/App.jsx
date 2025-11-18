import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 dark:bg-black text-gray-200 dark:text-gray-100 relative overflow-hidden font-sans transition-colors duration-500">
      <div className="absolute inset-0 z-0 animate-gradient-bg"></div>

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

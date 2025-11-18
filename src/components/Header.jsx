import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
function Header({ theme, handleThemeToggle }) {
  const { user, token, logout } = useAuth();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <header className="relative z-10 bg-gray-900 dark:bg-gray-950 shadow-lg p-4 md:px-6 border-b border-purple-500 dark:border-blue-600 transition-colors duration-500">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-0">
        <h1 className="text-2xl md:text-3xl font-extrabold font-crimson text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 tracking-wide truncate">
          AI Prompt Playground
        </h1>
        <div className="flex items-center gap-3 md:gap-4 mt-2 md:mt-0">
          <button
            onClick={handleThemeToggle}
            className="p-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>
          <div className="relative">
            {token ? (
              <div>
                <button
                  onClick={() => setShowLogout(!showLogout)}
                  className="font-semibold text-gray-100 hover:text-purple-400 transition-colors"
                  onBlur={() => setTimeout(() => setShowLogout(false), 150)}
                >
                  Welcome, {user?.username}!
                </button>
                {showLogout && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
                    <button
                      onClick={() => {
                        logout();
                        setShowLogout(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3 md:gap-4">
                <Link
                  to="/login"
                  className="font-semibold text-gray-100 hover:text-purple-400 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

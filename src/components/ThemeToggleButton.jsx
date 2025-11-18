import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function ThemeToggleButton({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="p-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
      aria-label={
        theme === "light" ? "Toggle Deep Dark Mode" : "Toggle Neo-Dusk Mode"
      }
    >
      {theme === "light" ? (
        <MoonIcon className="h-6 w-6" />
      ) : (
        <SunIcon className="h-6 w-6" />
      )}
    </button>
  );
}

export default ThemeToggleButton;

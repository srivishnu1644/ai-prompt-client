import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import PromptInputArea from "../components/PromptInputArea";
import AIResponseDisplay from "../components/AIResponseDisplay";
import PromptHistoryList from "../components/PromptHistoryList";
function HomePage() {
  const [promptInput, setPromptInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [promptHistory, setPromptHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { token, user, logout } = useAuth();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleThemeToggle = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    if (token) {
      const fetchHistory = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(
            "https://ai-prompt-api-vishnu.onrender.com/api/prompts",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          if (response.status === 401) {
            logout();
            return;
          }
          if (!response.ok) throw new Error("Failed to fetch prompt history");

          const data = await response.json();

          setPromptHistory(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchHistory();
    } else {
      setPromptHistory([]);
      setAiResponse("");
    }
  }, [token, logout]);

  const handleGeneratePrompt = async () => {
    if (promptInput.trim() === "") {
      setAiResponse("Please enter a prompt!");
      return;
    }

    if (!token) {
      setError("Please log in or register to generate a prompt.");
      return;
    }
    setIsLoading(true);
    setError(null);
    const currentPrompt = promptInput;
    try {
      const response = await fetch(
        "https://ai-prompt-api-vishnu.onrender.com/api/prompts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ prompt: currentPrompt }),
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong");
      setAiResponse(data.response);
      setPromptHistory((prevHistory) => [data, ...prevHistory]);
    } catch (err) {
      setError(err.message);
      if (err.message.includes("Token")) logout();
    } finally {
      setIsLoading(false);
      setPromptInput("");
    }
  };
  const handleHistoryClick = (historyEntry) => {
    setPromptInput(historyEntry.prompt);
    setAiResponse(historyEntry.response);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Header theme={theme} handleThemeToggle={handleThemeToggle} />
      <main className="container mx-auto px-4 sm:px-6 p-4 sm:p-6 max-w-3xl relative z-10">
        {token ? (
          <>
            <PromptInputArea
              promptInput={promptInput}
              setPromptInput={setPromptInput}
              handleGeneratePrompt={handleGeneratePrompt}
              isLoading={isLoading}
            />

            {error && (
              <div className="mt-4 p-4 bg-red-900/50 border border-red-500 text-red-200 rounded-lg">
                <strong>Error:</strong> {error}
              </div>
            )}

            {isLoading && (
              <div className="mt-8 p-6 text-center text-lg text-brand-purple animate-pulse">
                {aiResponse ? "Generating response..." : "Loading history..."}
              </div>
            )}

            {aiResponse && <AIResponseDisplay aiResponse={aiResponse} />}

            {promptHistory.length > 0 && (
              <PromptHistoryList
                promptHistory={promptHistory}
                handleHistoryClick={handleHistoryClick}
              />
            )}
          </>
        ) : (
          <div className="mt-12 p-6 sm:p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Welcome to the AI Playground
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-6">
              Please log in or register to start generating AI prompts and
              saving your history.
            </p>

            <Link
              to="/login"
              className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-glow-blue transform hover:scale-[1.02] transition-all duration-300"
            >
              Go to Login
            </Link>
          </div>
        )}
      </main>
    </>
  );
}

export default HomePage;

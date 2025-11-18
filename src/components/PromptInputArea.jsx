import React from "react";

function PromptInputArea({
  promptInput,
  setPromptInput,
  handleGeneratePrompt,
}) {
  return (
    <div className="mt-8 mb-8 p-6 bg-brand-card-bg/70 backdrop-blur-sm border border-brand-border rounded-xl shadow-2xl">
      <label
        htmlFor="prompt-input"
        className="block text-xl font-semibold mb-3 text-brand-label"
      >
        Your Prompt:
      </label>
      <textarea
        id="prompt-input"
        rows="6"
        placeholder="Type your prompt here..."
        value={promptInput}
        onChange={(e) => setPromptInput(e.target.value)}
        className="w-full p-4 border border-brand-border rounded-lg shadow-inner 
                   focus:outline-none focus:ring-2 focus:ring-brand-purple 
                   bg-brand-dark-bg text-gray-50 resize-y transition-all duration-300"
      ></textarea>

      <button
        onClick={handleGeneratePrompt}
        className="mt-6 w-full px-8 py-3 bg-gradient-to-r from-brand-purple to-brand-blue 
                   text-white font-bold rounded-lg shadow-lg 
                   hover:shadow-glow-blue transform hover:scale-[1.02] transition-all duration-300 ease-in-out 
                   focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 focus:ring-offset-brand-dark-bg"
      >
        Generate Prompt
      </button>
    </div>
  );
}

export default PromptInputArea;

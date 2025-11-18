import React from "react";
function PromptHistoryList({ promptHistory, handleHistoryClick }) {
  return (
    <div className="mt-12 p-6 bg-brand-card-bg/70 backdrop-blur-sm border border-brand-border rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-brand-purple">
        Prompt History
      </h2>
      <div className="mt-4 max-h-96 overflow-y-auto space-y-4 pr-2">
        {promptHistory.map((entry) => (
          <div
            key={entry.id}
            onClick={() => handleHistoryClick(entry)}
            className="p-4 bg-brand-dark-bg rounded-lg shadow-lg border border-brand-border 
                       cursor-pointer hover:border-brand-purple
                       transform hover:scale-[1.01] transition-all duration-200 ease-in-out"
          >
            <p className="text-sm text-gray-400 mb-1">{entry.timestamp}</p>
            <p className="font-medium text-gray-100 truncate">
              "{entry.prompt}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromptHistoryList;

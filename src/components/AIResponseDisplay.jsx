import React from "react";

function AIResponseDisplay({ aiResponse }) {
  return (
    <div className="mt-12 p-6 bg-brand-card-bg/70 backdrop-blur-sm border border-brand-border rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-green-400">
        Current AI Response:
      </h2>
      <pre
        className="p-4 bg-brand-dark-bg border border-brand-border rounded-lg shadow-inner 
                    whitespace-pre-wrap break-words text-gray-50 leading-relaxed"
      >
        {aiResponse}
      </pre>
    </div>
  );
}

export default AIResponseDisplay;

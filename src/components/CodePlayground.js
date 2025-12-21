"use client";

import { useState } from "react";

export default function CodePlayground({ initialCode, title }) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const runCode = () => {
    setOutput("");
    setError("");

    // Capture console.log output
    const logs = [];
    const originalLog = console.log;
    console.log = (...args) => {
      logs.push(
        args
          .map((arg) =>
            typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)
          )
          .join(" ")
      );
    };

    try {
      // Create a function to execute the code
      const result = eval(code);

      // Restore console.log
      console.log = originalLog;

      // Show output
      if (logs.length > 0) {
        setOutput(logs.join("\n"));
      } else if (result !== undefined) {
        setOutput(String(result));
      } else {
        setOutput("Code executed successfully (no output)");
      }
    } catch (err) {
      console.log = originalLog;
      setError(err.message);
    }
  };

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
      {title && (
        <div className="bg-gray-900/50 px-4 py-2 border-b border-gray-700">
          <h3 className="text-sm font-semibold text-gray-300">{title}</h3>
        </div>
      )}

      {/* Code Editor */}
      <div className="relative">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full bg-gray-900 text-gray-100 font-mono text-sm p-4 min-h-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-y"
          spellCheck="false"
        />
        <div className="absolute top-2 right-2 text-xs text-gray-500">
          JavaScript
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-900/50 px-4 py-3 border-t border-gray-700 flex items-center justify-between">
        <button
          onClick={runCode}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium text-sm hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Run Code
        </button>
        <button
          onClick={() => setCode(initialCode)}
          className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Output */}
      {(output || error) && (
        <div className="border-t border-gray-700">
          <div className="bg-gray-900 px-4 py-2 border-b border-gray-700">
            <div className="text-xs font-semibold text-gray-400 uppercase">
              Output
            </div>
          </div>
          <div className="bg-gray-950 p-4 font-mono text-sm">
            {error ? (
              <div className="text-red-400">
                <div className="font-semibold mb-1">Error:</div>
                {error}
              </div>
            ) : (
              <div className="text-green-400 whitespace-pre-wrap">{output}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

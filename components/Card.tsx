"use client";
import { useState } from "react";

export default function Flashcard() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-700 to-gray-900 min-h-screen flex flex-col items-center justify-center">
      
      <h1 className="text-2xl font-bold text-white">Simple Quiz</h1>
   
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl border border-gray-200 p-8 text-center">
        
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          What is the capital of America?
        </h2>
        
        <p
          id="answer"
          className={`text-lg font-medium text-black mt-2 transition-opacity duration-300 ${
            showAnswer ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          Washington DC
        </p>

        <button
          onClick={() => setShowAnswer(!showAnswer)}
          aria-expanded={showAnswer}
          aria-controls="answer"
          className={`px-5 py-2 rounded-lg font-medium transition mt-6 shadow-md
            ${showAnswer 
              ? "bg-red-500 text-white hover:bg-red-600" 
              : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
      </div>
    </div>
  );
}

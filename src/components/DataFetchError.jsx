
"use client";

import React from "react";
import { useRouter } from "next/navigation";

const DataFetchError = ({ onRetry }) => {
  const router = useRouter();

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      router.refresh();
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-black px-4">
      <div className="max-w-md w-full text-center space-y-5">

        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="bg-[#1c2410] p-5 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#c2f800]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 5.636a9 9 0 1 1-12.728 0M12 8v4m0 4h.01M5 5l14 14"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">
            Connection Lost!
          </h1>
          <p className="text-gray-400 text-sm leading-6">
            We couldn&apos;t load your workouts.
            Please check your internet connection
            and try again.
          </p>
        </div>

        {/* Retry Button */}
        <button
          onClick={handleRetry}
          className="inline-flex items-center gap-2
            bg-[#c2f800] text-black font-semibold
            px-6 py-3 rounded-lg
            hover:bg-[#a8d900] transition-colors
            active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h5M5.64 15a7 7 0 0 0 12.73-7M20 20v-5h-5"
            />
          </svg>
          Try Again
        </button>

        {/* Error Code */}
        <p className="text-xs text-gray-600 tracking-widest">
          ERROR · FAILED TO FETCH DATA
        </p>
      </div>
    </div>
  );
};

export default DataFetchError;
// src/components/LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black/50 z-50 fixed top-0 left-0 w-full">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-white"></div>
    </div>
  );
};

export default LoadingSpinner;

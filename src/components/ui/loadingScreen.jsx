import React from "react";

const LoadingScreen = () => {
  return (
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 border-[3px] border-[#2C363F] neubrutalism-shadow max-w-sm w-full mx-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-2">
            <div
              className="w-3 h-3 bg-[#FF6B6B] rounded-full animate-bounce outline outline-[3px] outline-[#2C363F]"
              style={{ animationDelay: "0ms" }}
            />
            <div
              className="w-3 h-3 bg-[#FF6B6B] rounded-full animate-bounce outline outline-[3px] outline-[#2C363F]"
              style={{ animationDelay: "150ms" }}
            />
            <div
              className="w-3 h-3 bg-[#FF6B6B] rounded-full animate-bounce outline outline-[3px] outline-[#2C363F]"
              style={{ animationDelay: "300ms" }}
            />
          </div>
          <span className="text-xl font-bold text-[#2C363F]">Thinking...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

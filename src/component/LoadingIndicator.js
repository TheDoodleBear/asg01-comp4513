import React from "react";

const LoadingIndicator = props => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[10px]">
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="flex items-center justify-center w-full min-h-screen ">
          <div className="flex items-center justify-center rounded-full h-14 w-14 bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
            <div className="bg-gray-200 rounded-full h-9 w-9" />
          </div>
        </div>
        <span>Loading Data...</span>
      </div>
    </div>
  );
};

export default LoadingIndicator;

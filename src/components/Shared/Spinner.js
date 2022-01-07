import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-cyan-100 hover:bg-cyan-200 md:py-4 md:text-lg md:px-10">
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
          Loading...
        </button>
      </div>
    </>
  );
};

export default Spinner;

import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#0d1b29]">
      <div className="w-12 h-12 border-8 border-[#55e6a5] border-b-[#ffffff] rounded-full inline-block box-border animate-spin m-auto"></div>
    </div>
  );
};

export default Loader;

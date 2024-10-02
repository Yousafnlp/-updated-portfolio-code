import dynamic from "next/dynamic";
import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";
const DynamicHeader = dynamic(() => import("./HeaderTypeAnimation"), {
  loading: () => (
    <div className="h-[23px] md:h-[28px] lg:h-[42.5px]  md:w-[250px] w-[180px] lg:w-[300px] bg-[#55e6a5]/80 animate-pulse rounded-md"></div>
  ),
  ssr: false,
});

// Custom animations using Tailwind CSS
const Introduction = () => {
  return (
    <>
      {/* Header with fade-in and slide-in animation */}
      <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold md:pb-4 pb-1 mt-6 animate-slide-in">
        I👋 am Yousaf Ijaz
      </h1>

      {/* HeaderTypeAnimation component */}
      <DynamicHeader />

      {/* Paragraph with fade-in animation */}
      <p className="text-sm text-white/70 pt-4 md:pt-6 animate-fade-in">
        I&apos;m a skilled Full Stack Web Developer specializing in building
        robust and dynamic web applications. From designing intuitive front-end
        interfaces to developing powerful back-end solutions, I create
        end-to-end digital experiences that drive results.
      </p>

      {/* Button with scaling effect on hover and bounce animation for the icon */}
      <button className="mt-4 text-sm md:text-base cursor-pointer bg-[#55e6a5] flex gap-2 items-center text-black md:px-4 px-2 md:py-2 py-1 rounded-md md:w-[180px] w-[140px] justify-center leading-[2] hover:bg-[#222831] hover:text-[#55e6a5] transition-all duration-300 hover:scale-105">
        Download CV
        <FaChevronCircleDown className="animate-bounce-on-hover" />
      </button>
    </>
  );
};

export default Introduction;

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import React from "react";

const ProjectItem = ({ image, link }) => {
  return (
    <div
      className="flex flex-col items-center mt-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col gap-4 items-center relative group">
        <img
          src={image}
          alt={"title"}
          className="md:w-[280px] w-full max-w-[320px] md:max-w-none cursor-pointer  h-auto object-cover rounded-lg border-[#55e6a5] transition-all duration-300 group-hover:border-[4px] border-2 group-hover:opacity-30 "
        />

        <Link
          target="_blank"
          href={link}
          className="mt-3 cursor-pointer text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text-xs group-hover:opacity-100 bg-[#55e6a5] text-black py-2 w-[50px] leading-[1] hover:bg-[#222831] hover:text-[#55e6a5] transition-all duration-300 rounded-full"
        >
          VIEW
        </Link>
      </div>
      <Link
        target="_blank"
        href={link}
        className="mt-4  text-center cursor-pointer bg-[#55e6a5] text-black px-4 py-2 rounded-md w-[130px] leading-[1] hover:bg-[#222831] hover:text-[#55e6a5] transition-all duration-300"
      >
        View Live
      </Link>
    </div>
  );
};

export default ProjectItem;

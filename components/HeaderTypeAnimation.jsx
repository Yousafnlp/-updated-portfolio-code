"use client";
import { TypeAnimation } from "react-type-animation";

const HeaderTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "React Developer",
        1000,
        "Web Developer",
        1000,
        "Full Stack Developer",
        1000,
        "Frontend Developer",
        1000,
        "Mern Stack Developer",
        1000,
        "Next.js Developer",
        1000,
        "Node.js Developer",
        1000,
        "Backend Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-[#55e6a5] text-xl md:text-2xl lg:text-4xl leading-[15px]"
      repeat={Infinity}
    />
  );
};

export default HeaderTypeAnimation;

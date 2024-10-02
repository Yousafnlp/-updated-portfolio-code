import React from "react";
import CoverImage from "../components/CoverImage";
import { educationData, experienceData } from "../data";
import ExperienceItem from "../components/commen/ExperienceItem";
import EducationItem from "../components/commen/EducationItem";

const About = () => {
  return (
    <div
      className="flex gap-20 xl:gap-10  md:pt-20 pt-10 xl:flex-nowrap flex-wrap-reverse animate-fade-in"
      id="about"
    >
      <div className="w-full flex flex-col gap-5 ">
        <>
          <div className="text-3xl font-semibold text-white w-fit">
            Education
          </div>
          <div className="flex-col flex gap-4 md:gap-8 ">
            {educationData.map((item, index) => (
              <EducationItem
                key={index}
                title={item.title}
                description={item.description}
                institute={item.institute}
              />
            ))}
          </div>
          <div className="w-full flex justify-center xl:justify-start">
            <CoverImage />
          </div>
        </>
      </div>

      <div className="w-full flex flex-col gap-5">
        <>
          <div className="text-3xl font-semibold text-white w-fit">
            Experience
          </div>

          <div className="flex-col flex gap-6 md:gap-8">
            {experienceData.map((item, index) => (
              <ExperienceItem
                key={index}
                title={item.title}
                years={item.years}
                description={item.description}
                institute={item.institute}
              />
            ))}
          </div>
        </>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import ProjectItem from "../components/commen/ProjectItem";
import { projects } from "../data";
const Projects = () => {
  return (
    <div
      className="w-full flex flex-col gap-5 items-center justify-center  pt-10 md:pt-20"
      id="projects"
    >
      <div className="text-3xl font-semibold text-white w-fit">Projects</div>

      <div className="flex flex-wrap gap-8 md:g justify-center items-center">
        {projects.map((project, index) => (
          <ProjectItem key={index} image={project.image} link={project.link} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

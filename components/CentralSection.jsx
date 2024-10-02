import React from "react";
import Home from "../sections/Home";
import Services from "../sections/Services";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import SocialLinks from "../components/SocialLinks";
import MobileNavbar from "./commen/MobileNavbar";
import TechIconsSection from "./TechIconsSection";

const CentralSection = () => {
  return (
    <>
      <MobileNavbar />
      <div className="md:px-8 px-4">
        <Home />
        <TechIconsSection />
        <About />
        <SocialLinks />
        <Services />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default CentralSection;

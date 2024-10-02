import React from "react";

import LaptopNavbar from "../../components/LaptopNavbar";
import CentralSection from "../../components/CentralSection";

const Main = () => {
  return (
    <>
      <div className="flex h-screen">
        <LaptopNavbar />
        <div className="grow">
          <CentralSection />
        </div>
      </div>
    </>
  );
};

export default Main;

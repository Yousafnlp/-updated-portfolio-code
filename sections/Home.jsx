import React from "react";
import Introduction from "../components/Introduction";
import CoverImage from "../components/CoverImage";

const Home = () => {
  return (
    <div className="flex items-center justify-between  pt-28 lg:pt-20 flex-wrap-reverse md:flex-nowrap" id="home">
      <div className="md:basis-[70%] basis-[100%]">
        <Introduction />
      </div>
      <div className="md:basis-[30%] basis-[100%]  flex justify-center">
        <CoverImage />
      </div>
    </div>
  );
};

export default Home;

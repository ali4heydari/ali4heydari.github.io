import React from "react";
import Introduction from "./components/Introduction";
import Banner from "./components/Banner";

const HeroBanner: React.FC = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center md:flex-row-reverse">
      <Banner />
      <Introduction />
    </div>
  );
};

export default HeroBanner;

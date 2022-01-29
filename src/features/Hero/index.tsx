import React from "react";
import Introduction from "./components/Introduction";
import Banner from "./components/Banner";

const HeroBanner: React.FC = () => {
  return (
    <div className="flex flex-row-reverse items-center">
      <Banner />
      <Introduction />
    </div>
  );
};

export default HeroBanner;

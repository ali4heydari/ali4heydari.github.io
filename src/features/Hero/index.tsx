import React from "react";
import Introduction from "./components/Introduction";
import Banner from "./components/Banner";

const HeroBanner: React.FC = () => {
  return (
    <div className="mx-auto flex flex-row-reverse items-center justify-center">
      <Banner />
      <Introduction />
    </div>
  );
};

export default HeroBanner;

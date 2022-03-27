import React from "react";
import Quote from "../Quote";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="flex w-full items-center justify-center md:w-1/2">
      <div className="w-full md:w-2/3">
        <img
          src="/images/hero-banner.jpg"
          alt="Hero Banner"
          className={
            "w-full border border-2 border-purple-700 dark:border-purple-200"
          }
        />
        <Quote quote="Be the change that you want to see in the world." />
      </div>
    </div>
  );
};

export default Banner;

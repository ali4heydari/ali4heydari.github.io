import React from "react";
import type { Metadata, NextPage } from "next";
import Hero from "src/components/molecules/Hero";
import Careers from "src/features/Careers";
import { Skills } from "src/features/Skills";
import { allCareers } from ".contentlayer/generated";

export function generateMetadata(): Metadata {
  return {
    title: {
      template: "%s | Ali Heydari",
      default: "Personal website - Ali Heydari",
    },
  };
}

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Careers allCareers={allCareers} />
      <Skills />
    </>
  );
};

export default Home;

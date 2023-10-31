import React from "react";
import type { Metadata, NextPage } from "next";
import Hero from "src/components/molecules/Hero";
import Experiences from "src/features/Experiences";
import { Skills } from "src/features/Skills";
import { allExperiences } from ".contentlayer/generated";

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
      <Experiences allExperiences={allExperiences} />
      <Skills />
    </>
  );
};

export default Home;

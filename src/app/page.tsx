import React from "react";
import Hero from "../features/Hero";
import Experiences from "../features/Experiences";
import { NextPage } from "next";
import { allExperiences } from "../../.contentlayer/generated";
import { Skills } from "../features/Skills";

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

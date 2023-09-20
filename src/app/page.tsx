import React from "react";
import Hero from "../features/Hero";
import Experiences from "../features/Experiences";
import { ContactMe } from "../features/ContactForm";
import { NextPage } from "next";
import { allExperiences } from "../../.contentlayer/generated";

const Home: NextPage = () => {
  return (
    <>
      {/*<Balloons birthDate={SiteConfigs.BIRTHDATE} />*/}
      <Hero />
      <hr />
      <Experiences allExperiences={allExperiences} />
      <hr />
      <ContactMe />
    </>
  );
};

export default Home;

import Hero from "src/features/Hero";
import Experiences from "src/features/Experiences";
import { ContactMe } from "src/features/ContactMe";
import { allExperiences } from ".contentlayer/data";

import React from "react";
import MainLayout from "../src/layouts/MainLayout";

const IndexPage: React.FC<any> = ({ allExperiences }) => {
  return (
    <MainLayout container>
      {/*<Balloons birthDate={SiteConfigs.BIRTHDATE} />*/}
      <hr />
      <Hero />
      <hr />
      <Experiences allExperiences={allExperiences} />
      <hr />
      <ContactMe />
    </MainLayout>
  );
};

export async function getStaticProps({ params }) {
  return { props: { allExperiences } };
}

export default IndexPage;

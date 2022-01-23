import HeroBanner from "src/features/Hero";
import TimeLine from "src/features/WorkExperiences";
import { ContactMe } from "src/features/ContactMe";
import { allExperiences } from ".contentlayer/data";

import React from "react";
import MainLayout from "../src/layouts/MainLayout";

const IndexPage: React.FC<any> = ({ allExperiences }) => {
  return (
    <MainLayout>
      {/*<Balloons birthDate={SiteConfigs.BIRTHDATE} />*/}
      <hr />
      <HeroBanner />
      <hr />
      <TimeLine allExperiences={allExperiences} />
      <hr />
      <ContactMe />
    </MainLayout>
  );
};

export async function getStaticProps({ params }) {
  return { props: { allExperiences } };
}

export default IndexPage;

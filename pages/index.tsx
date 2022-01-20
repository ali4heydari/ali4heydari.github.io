import Layout from "src/components/Layout";
import HeroBanner from "src/features/Hero";
import TimeLine from "src/features/WorkExperiences";
import { ContactMe } from "src/features/ContactMe";
import { allExperiences } from ".contentlayer/data";

import React from "react";

const IndexPage: React.FC<any> = ({ allExperiences }) => {
  return (
    <Layout title="Home">
      {/*<Balloons birthDate={SiteConfigs.BIRTHDATE} />*/}
      <hr />
      <HeroBanner />
      <hr />
      <TimeLine allExperiences={allExperiences} />
      <hr />
      <ContactMe />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  return { props: { allExperiences } };
}

export default IndexPage;

import Layout from "src/components/Layout";
import HeroBanner from "src/components/HeroBanner";
import TimeLine from "../src/components/Experience";
import { ContactMe } from "../src/components/ContactMeForm";
import { allExperiences } from ".contentlayer/data";

import React from "react";
import Balloons from "../src/components/ui/Balloons";
import SiteConfigs from "../SiteConfigs";

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

import Layout from "src/components/Layout";
import HeroBanner from "src/components/HeroBanner";
import TimeLine from "../src/components/Experience";
import { ContactMe } from "../src/components/ContactMeForm";
import React from "react";
import Balloons from "../src/components/ui/Balloons";
import SiteConfigs from "../SiteConfigs";

const IndexPage: React.FC = () => {
  return (
    <Layout title="Home">
      {/*<Balloons birthDate={SiteConfigs.BIRTHDATE} />*/}
      <hr />
      {/*<HeroBanner />*/}
      <hr />
      {/*<Experience />*/}
      <hr />
      {/*<ContactMe />*/}
    </Layout>
  );
};

export default IndexPage;

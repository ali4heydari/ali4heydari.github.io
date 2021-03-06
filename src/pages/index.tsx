import Layout from "components/Layout";
import HeroBanner from "components/HeroBanner";
import Experience from "../components/Experience";
import { ContactMe } from "../components/ContactMeForm";
import React from "react";
import Balloons from "../components/ui/Balloons";
import SiteConfigs from "../../SiteConfigs";

const IndexPage: React.FC = () => {
  return (
    <Layout title="Home">
      <Balloons birthDate={SiteConfigs.BIRTHDATE} />
      <hr />
      <HeroBanner />
      <hr />
      <Experience />
      <hr />
      <ContactMe />
    </Layout>
  );
};

export default IndexPage;

import Layout from "components/Layout";
import HeroBanner from "components/HeroBanner";
import Testimonials from "components/Testimonials";
import Experience from "../components/Experience";
import { ContactMe } from "../components/ContactMeForm";
import React from "react";
import Balloons from "../components/ui/Balloons";

const IndexPage: React.FC = () => {
  return (
    <Layout title="About Me">
      <Balloons birthDate={new Date(1997, 0, 30)} />
      <hr />
      <HeroBanner />
      <hr />
      <Experience />
      <hr />
      <Testimonials />
      <hr />
      <ContactMe />
    </Layout>
  );
};

export default IndexPage;

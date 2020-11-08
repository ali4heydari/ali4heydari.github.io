import Layout from "components/Layout";
import HeroBanner from "components/HeroBanner";
import Testimonials from "components/Testimonials";
import Experience from "../components/Experience";
import { ContactMe } from "../components/ContactMeForm";
import React from "react";

const IndexPage: React.FC = () => {
  return (
    <Layout title="About Me">
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

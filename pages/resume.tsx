import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import Experience from "src/components/Experience";
import Education from "src/components/Education";
import React from "react";

const ResumePage: React.FC = () => (
  <Layout title="Resume">
    <Experience />
    <hr />
    <Education />
  </Layout>
);

export default ResumePage;

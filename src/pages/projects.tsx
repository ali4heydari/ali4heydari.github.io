import Layout from "components/Layout";
import SEO from "components/SEO";
import Projects from "components/Projects";
import React from "react";

const ProjectsPage: React.FC = () => {
  return (
    <Layout title="Projects">
      <Projects />
    </Layout>
  );
};

export default ProjectsPage;

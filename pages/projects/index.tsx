import Projects from "src/features/Projects";
import React from "react";
import MainLayout from "../../src/layouts/MainLayout";

const ProjectsPage: React.FC = () => {
  return (
    <MainLayout>
      <Projects />
    </MainLayout>
  );
};

export default ProjectsPage;

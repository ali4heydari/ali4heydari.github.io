import Layout from "src/components/Layout";
import Experiences from "src/features/Experiences";
import React from "react";
import { allExperiences, allEducation } from ".contentlayer/generated";
import Educations from "src/features/Education";
import MainLayout from "../src/layouts/MainLayout";

const ResumePage: React.FC<any> = ({ allExperiences, allEducation }) => {
  return (
    <MainLayout>
      <Experiences allExperiences={allExperiences} />
      <hr />
      <Educations allEducation={allEducation} />
    </MainLayout>
  );
};

export async function getStaticProps({ params }) {
  return { props: { allExperiences, allEducation } };
}

export default ResumePage;

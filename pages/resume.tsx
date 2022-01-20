import Layout from "src/components/Layout";
import TimeLine from "src/features/WorkExperiences";
import React from "react";
import { allExperiences, allEducation } from ".contentlayer/data";
import Educations from "src/features/Education";

const ResumePage: React.FC<any> = ({ allExperiences, allEducation }) => {
  return (
    <Layout title="Resume">
      <TimeLine allExperiences={allExperiences} />
      <hr />
      <Educations allEducation={allEducation} />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  return { props: { allExperiences, allEducation } };
}

export default ResumePage;

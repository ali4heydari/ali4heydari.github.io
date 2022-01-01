import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import TimeLine from "src/components/Experience";
import Education from "src/components/Educations";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allExperiences, allEducation } from ".contentlayer/data";
import Timeline from "../src/components/ui/Timeline";
import TitleSection from "../src/components/ui/TitleSection";
import Container from "src/components/ui/Container";
import Educations from "src/components/Educations";

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

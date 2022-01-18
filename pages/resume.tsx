import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import TimeLine from "src/components/Experience";
import Education from "src/components/Education";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allExperiences } from ".contentlayer/data";
import Timeline from "../src/components/ui/Timeline";
import TitleSection from "../src/components/ui/TitleSection";
import Container from "src/components/ui/Container";

const ResumePage: React.FC<any> = ({ allExperiences }) => {
  return (
    <Layout title="Resume">
      <TimeLine allExperiences={allExperiences} />
      <hr />
      {/*<Education />*/}
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  return { props: { allExperiences } };
}

export default ResumePage;

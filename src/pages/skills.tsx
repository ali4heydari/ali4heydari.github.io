import Layout from "components/Layout";
import SEO from "components/SEO";
import SkillsBar from "components/SkillsBar";
import React from "react";
import { SkillsCard } from "../components/SkillsCard";

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Skills" />
    <SkillsCard />
  </Layout>
);

export default ResumePage;

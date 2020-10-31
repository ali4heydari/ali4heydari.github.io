import Layout from "components/Layout";
import SEO from "components/SEO";
import Experience from "components/Experience";
import Education from "components/Education";
import Skills from "components/SkillsBar";

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Experience />
    <hr />
    <Education />
    <hr />
    <Skills />
  </Layout>
);

export default ResumePage;

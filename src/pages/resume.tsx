import Layout from "components/Layout";
import SEO from "components/SEO";
import Experience from "components/Experience";
import Education from "components/Education";

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Experience />
    <hr />
    <Education />
  </Layout>
);

export default ResumePage;

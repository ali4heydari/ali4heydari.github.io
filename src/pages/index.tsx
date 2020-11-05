import Layout from "components/Layout";
import SEO from "components/SEO";
import HeroBanner from "components/HeroBanner";
import Testimonials from "components/Testimonials";
import Experience from "../components/Experience";
import { ContactMe } from "../components/ContactMeForm";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <hr />
      <Experience />
      <hr />
      <Testimonials />
      <ContactMe />
    </Layout>
  );
};

export default IndexPage;

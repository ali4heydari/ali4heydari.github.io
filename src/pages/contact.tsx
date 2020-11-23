import Layout from "components/Layout";
import ContactInfo from "components/ContactInfo";
import React from "react";
import { InlineWidget } from "react-calendly";
import SiteConfigs from "../../SiteConfigs";

const ContactPage: React.FC = () => {
  return (
    <Layout title="Contact">
      <ContactInfo />
      <InlineWidget url={`https://calendly.com/${SiteConfigs.CALENDLY_ID}`} />
    </Layout>
  );
};

export default ContactPage;

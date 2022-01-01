import Layout from "src/components/Layout";
import ContactInfo from "src/components/ContactInfo";
import React from "react";
import { InlineWidget } from "react-calendly";
import SiteConfigs from "../SiteConfigs";

const ContactPage: React.FC = () => {
  return (
    <Layout title="Contact">
      <ContactInfo />
      <InlineWidget
        styles={{ height: "660px" }}
        url={`https://calendly.com/${SiteConfigs.CALENDLY_ID}/${SiteConfigs.CALENDLY_EVENT_LINK}`}
      />
    </Layout>
  );
};

export default ContactPage;

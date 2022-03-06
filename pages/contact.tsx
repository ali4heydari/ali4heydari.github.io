import ContactInfo from "src/features/ContactInfo";
import React from "react";
import { InlineWidget } from "react-calendly";
import siteConfig from "site.config";
import MainLayout from "../src/layouts/MainLayout";

const ContactPage: React.FC = () => {
  return (
    <MainLayout>
      <ContactInfo />
      <InlineWidget
        styles={{ height: "660px" }}
        url={`https://calendly.com/${siteConfig.CALENDLY_ID}/${siteConfig.CALENDLY_EVENT_LINK}`}
      />
    </MainLayout>
  );
};

export default ContactPage;

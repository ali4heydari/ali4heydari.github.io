import ContactInfo from "src/features/ContactInfo";
import React from "react";
import { InlineWidget } from "react-calendly";
import SiteConfigs from "../SiteConfigs";
import MainLayout from "../src/layouts/MainLayout";

const ContactPage: React.FC = () => {
  return (
    <MainLayout>
      <ContactInfo />
      <InlineWidget
        styles={{ height: "660px" }}
        url={`https://calendly.com/${SiteConfigs.CALENDLY_ID}/${SiteConfigs.CALENDLY_EVENT_LINK}`}
      />
    </MainLayout>
  );
};

export default ContactPage;

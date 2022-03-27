import ContactInfo from "src/features/ContactInfo";
import React, { CSSProperties } from "react";
import { InlineWidget } from "react-calendly";
import siteConfig from "site.config";
import MainLayout from "../src/layouts/MainLayout";

const ContactPage: React.FC = () => {
  const widgetStyles: CSSProperties = {
    height: "660px",
    paddingLeft: 5,
    paddingRight: 5,
    maxWidth: 1050,
    margin: "0 auto",
  };
  return (
    <MainLayout>
      <ContactInfo />
      <InlineWidget
        styles={widgetStyles}
        url={`https://calendly.com/${siteConfig.CALENDLY_ID}/${siteConfig.CALENDLY_EVENT_LINK}`}
      />
    </MainLayout>
  );
};

export default ContactPage;

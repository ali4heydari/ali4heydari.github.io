import Layout from "components/Layout";
import ContactInfo from "components/ContactInfo";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <Layout title="Contact">
      <ContactInfo />
    </Layout>
  );
};

export default ContactPage;

import Layout from "components/Layout";
import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import React from "react";

const NotFoundPage: React.FC = () => (
  <Layout title="404: Not found">
    <Container section maxWidth="lg">
      <TitleSection title="404" subtitle="Page not found" center />
      <p className="mt-4 text-center w-full">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </Container>
  </Layout>
);

export default NotFoundPage;

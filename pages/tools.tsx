import Layout from "src/components/Layout";
import React from "react";
import Container from "../src/components/Container";
import TitleSection from "../src/components/TitleSection";
import { CommentThread } from "../src/components/CommentThread";
import { allTools } from ".contentlayer/data";
import { Tool } from ".contentlayer/types";
import { useMDXComponent } from "next-contentlayer/hooks";

const ToolsPage: React.FC<{ tools: Tool }> = ({ tools }) => {
  const Component = useMDXComponent(tools.body.code);

  return (
    <Layout title={tools.title}>
      <Container section maxWidth="lg">
        <TitleSection title={tools.title} subtitle={tools.subtitle} />
        <Component />
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const [tools] = allTools;
  return { props: { tools } };
}

export default ToolsPage;

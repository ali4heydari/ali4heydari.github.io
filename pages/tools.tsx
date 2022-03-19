import Layout from "src/components/Layout";
import React from "react";
import Container from "../src/components/Container";
import TitleSection from "../src/components/TitleSection";
import CommentThread from "../src/components/CommentThread";
import { allTools } from ".contentlayer/generated";
import { Tool } from ".contentlayer/generated";
import { NextPage } from "next";

const ToolsPage: NextPage<{ tools: Tool }> = ({ tools, ...rest }) => {
  return (
    <Layout title={tools.title}>
      <Container section maxWidth="lg">
        <TitleSection title={tools.title} subtitle={tools.subtitle} />
        <main
          className="prose prose-headings:underline prose-a:text-blue-600 prose-img:rounded-xl dark:text-white"
          dangerouslySetInnerHTML={{ __html: tools.body.html }}
        />
        <CommentThread />
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const [tools] = allTools;
  return { props: { tools } };
}

export default ToolsPage;

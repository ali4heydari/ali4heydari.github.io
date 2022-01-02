import Layout from "src/components/Layout";
import React from "react";
import Container from "../src/components/ui/Container";
import TitleSection from "../src/components/ui/TitleSection";
import { MarkDown } from "../src/components/utils/MarkDown";
import { CommentThread } from "../src/components/ui/CommentThread";

const ToolsPage: React.FC = () => {
  const frontmatter = {
    title: "",
    subtitle: "",
  };

  return (
    <Layout title={frontmatter.title}>
      <Container section maxWidth="lg">
        <TitleSection
          title={frontmatter.title}
          subtitle={frontmatter.subtitle}
        />
        <MarkDown content={"body"} />
        <CommentThread
          config={{
            url: `${window.location.host}/tools`,
            identifier: "tools",
            title: frontmatter.title,
          }}
        />
      </Container>
    </Layout>
  );
};

export default ToolsPage;

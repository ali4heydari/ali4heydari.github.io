import Layout from "components/Layout";
import BlogPosts from "components/BlogPosts";
import React from "react";

const BlogPage: React.FC = () => {
  return (
    <Layout title="Blog">
      <BlogPosts />
    </Layout>
  );
};

export default BlogPage;

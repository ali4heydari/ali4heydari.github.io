import Layout from "src/components/Layout";
import BlogPosts from "src/components/BlogPosts";
import React from "react";

const BlogPage: React.FC = () => {
  return (
    <Layout title="Blog">
      <BlogPosts />
    </Layout>
  );
};

export default BlogPage;

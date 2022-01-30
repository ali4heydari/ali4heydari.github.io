import BlogPosts from "src/features/Blog/components/BlogPosts";
import React from "react";
import MainLayout from "../../src/layouts/MainLayout";

const BlogPage: React.FC = () => {
  return (
    <MainLayout>
      <BlogPosts />
    </MainLayout>
  );
};

export default BlogPage;

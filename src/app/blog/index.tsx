import BlogPosts from "src/features/Blog/components/BlogPosts";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { NextPage } from "next";

const BlogPage: NextPage = () => {
  return (
    <MainLayout>
      <BlogPosts />
    </MainLayout>
  );
};

export default BlogPage;

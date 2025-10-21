import React from "react";
import BlogLayout from "./BlogLayout";
import { BlogTitle } from "./styled";

const BlogHome: React.FC = () => {
  return (
    <BlogLayout>
      <BlogTitle>Blog</BlogTitle>
      Posts coming soon...
    </BlogLayout>
  );
};

export default BlogHome;

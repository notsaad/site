import React from "react";
import styled from "styled-components";
import BlogLayout from "./BlogLayout";
import { theme } from "../../styles/theme";

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 0 0 ${theme.spacing.grid} 0;
  letter-spacing: -0.02em;
`;

const BlogHome: React.FC = () => {
  return (
    <BlogLayout>
      <Title>Blog</Title>
      Posts coming soon...
    </BlogLayout>
  );
};

export default BlogHome;

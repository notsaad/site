import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BlogLayout from "./BlogLayout";
import { blogPosts } from "./posts";
import { theme } from "../../styles/theme";
import { useTheme } from "../styles/ThemeProvider";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(${theme.spacing.grid} * 0.75);
`;

const PostCard = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== "$isDark",
})<{ $isDark: boolean }>`
  display: block;
  padding: ${theme.spacing.grid};
  border: 1px solid currentColor;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition:
    transform 120ms ease,
    background-color 120ms ease;

  &:hover {
    transform: translateY(-2px);
    background-color: ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.04)"};
  }

  h2 {
    margin: 0;
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  }

  p {
    margin: ${theme.spacing.unit} 0 0;
    line-height: 1.6;
  }

  time {
    display: block;
    margin-top: ${theme.spacing.unit};
    font-size: 0.875rem;
    opacity: 0.65;
    letter-spacing: 0.04em;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 0 0 ${theme.spacing.grid} 0;
  letter-spacing: -0.02em;
`;

const BlogHome: React.FC = () => {
  const { isDarkMode } = useTheme();

  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const formatDate = (iso: string) =>
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso));

  return (
    <BlogLayout>
      <Title>Blog</Title>
      <List>
        {sortedPosts.map((post) => (
          <PostCard
            key={post.slug}
            to={`/blog/${post.slug}`}
            $isDark={isDarkMode}
          >
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          </PostCard>
        ))}
      </List>
    </BlogLayout>
  );
};

export default BlogHome;

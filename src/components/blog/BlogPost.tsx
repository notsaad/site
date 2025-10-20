import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import BlogLayout from "./BlogLayout";
import { blogPosts } from "./posts";
import { theme } from "../../styles/theme";

const Title = styled.h1`
  font-size: clamp(2.25rem, 5vw, 3.25rem);
  margin: 0 0 ${theme.spacing.unit} 0;
  letter-spacing: -0.02em;
`;

const Meta = styled.div`
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.7;
  margin-bottom: ${theme.spacing.grid};
`;

const Body = styled(ReactMarkdown)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.unit};
  line-height: 1.7;

  h2 {
    margin-top: ${theme.spacing.grid};
    margin-bottom: ${theme.spacing.unit};
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  ul {
    padding-left: ${theme.spacing.grid};
  }

  li {
    margin: ${theme.spacing.unit} 0;
  }
`;

const BackLink = styled(Link)`
  margin-top: ${theme.spacing.grid};
  color: inherit;
  text-decoration: underline;
`;

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return (
      <BlogLayout>
        <Title>Post not found</Title>
        <p>The post you are looking for doesn't exist yet.</p>
        <BackLink to="/blog">Return to blog</BackLink>
      </BlogLayout>
    );
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(post.publishedAt));

  return (
    <BlogLayout>
      <article>
        <Title>{post.title}</Title>
        <Meta>
          <time dateTime={post.publishedAt}>{formattedDate}</time>
        </Meta>
        <Body>{post.content}</Body>
      </article>
    </BlogLayout>
  );
};

export default BlogPost;

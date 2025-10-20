import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme } from "../styles/ThemeProvider";
import { theme } from "../../styles/theme";

const Page = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDark",
})<{ isDark: boolean }>`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => (props.isDark ? "#050505" : "#fafafa")};
  color: ${(props) => (props.isDark ? "#f5f5f5" : "#111")};
  padding: ${theme.spacing.grid};
  display: flex;
  justify-content: center;
  font-family: ${theme.typography.fontFamily};
`;

const Content = styled.main`
  width: min(720px, 100%);
  padding: ${theme.spacing.grid};
  padding-top: calc(${theme.spacing.grid} * 2.5);
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.grid};
`;

const Controls = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDark",
})<{ isDark: boolean }>`
  position: fixed;
  top: ${theme.spacing.grid};
  right: ${theme.spacing.grid};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.unit};
  z-index: 10;

  a,
  button {
    border: ${theme.borders.style};
    border-color: ${(props) =>
      props.isDark ? theme.colors.dark.border : theme.colors.light.border};
    background-color: transparent;
    color: inherit;
    padding: ${theme.spacing.unit};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing.unit};
    cursor: pointer;

    &:hover {
      background-color: ${(props) =>
        props.isDark ? theme.colors.dark.accent : theme.colors.light.accent};
    }
  }
`;

const IconButton = styled.button`
  border-radius: 999px;
`;

const HomeLink = styled(Link)`
  border-radius: 999px;
`;

const Icon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
`;

const SunIcon: React.FC = () => (
  <Icon viewBox="0 0 24 24" role="img" aria-hidden="true">
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </g>
  </Icon>
);

const MoonIcon: React.FC = () => (
  <Icon viewBox="0 0 24 24" role="img" aria-hidden="true">
    <path
      d="M21 14.5A9 9 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
      fill="currentColor"
    />
  </Icon>
);

const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Page isDark={isDarkMode}>
      <Controls isDark={isDarkMode}>
        <IconButton
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </IconButton>
        <HomeLink to="/">Home</HomeLink>
      </Controls>
      <Content>{children}</Content>
    </Page>
  );
};

export default BlogLayout;

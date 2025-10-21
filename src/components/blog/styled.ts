import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

export const Icon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
`;

export const IconButton = styled.button`
  border-radius: 999px;
`;

export const HomeLink = styled(Link)`
  border-radius: 999px;
`;

export const Controls = styled.div.withConfig({
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

export const Page = styled.div.withConfig({
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

export const Content = styled.main`
  width: min(720px, 100%);
  padding: ${theme.spacing.grid};
  padding-top: calc(${theme.spacing.grid} * 2.5);
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.grid};
`;

export const BlogTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 0 0 ${theme.spacing.grid} 0;
  letter-spacing: -0.02em;
`;

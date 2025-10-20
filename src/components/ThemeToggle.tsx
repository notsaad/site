import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "./styles/ThemeProvider";
import styled from "styled-components";
import { theme } from "../styles/theme";

const ToggleContainer = styled.div`
  position: absolute;
  top: ${theme.spacing.grid};
  right: ${theme.spacing.grid};
  font-family: ${theme.typography.fontFamily};
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.unit};
`;

const ToggleBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDark",
})<{ isDark?: boolean }>`
  display: inline-block;
  padding: ${theme.spacing.unit};
  border: ${theme.borders.style};
  border-color: ${(props) =>
    props.isDark ? theme.colors.dark.border : theme.colors.light.border};
  background-color: ${(props) => (props.isDark ? "#111" : "#fff")};

  &:hover {
    background-color: ${(props) =>
      props.isDark ? theme.colors.dark.accent : theme.colors.light.accent};
  }
`;

const StyledNavLink = styled(NavLink)<{ $isDark?: boolean }>`
  display: inline-block;
  padding: ${theme.spacing.unit};
  border: ${theme.borders.style};
  border-color: ${(props) =>
    props.$isDark ? theme.colors.dark.border : theme.colors.light.border};
  background-color: ${(props) => (props.$isDark ? "#111" : "#fff")};
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: ${(props) =>
      props.$isDark ? theme.colors.dark.accent : theme.colors.light.accent};
  }

  &.active {
    font-weight: bold;
    background-color: ${(props) =>
      props.$isDark ? theme.colors.dark.accent : theme.colors.light.accent};
  }
`;

interface RoutingBoxProps {
  isDark?: boolean;
  text: string;
  route: string;
}

const RoutingBox: React.FC<RoutingBoxProps> = ({ isDark, text, route }) => {
  return (
    <StyledNavLink to={route} $isDark={isDark}>
      [ {text} ]
    </StyledNavLink>
  );
};

export const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleContainer>
      <ToggleBox isDark={isDarkMode} onClick={toggleTheme}>
        [ {isDarkMode ? "LIGHT" : "DARK"} ]
      </ToggleBox>
      <RoutingBox isDark={isDarkMode} text="SAADGPT" route="/saadgpt" />
      <RoutingBox isDark={isDarkMode} text="RESUME" route="/resume" />
      <RoutingBox isDark={isDarkMode} text="BLOG" route="/blog" />
      <RoutingBox isDark={isDarkMode} text="HOME" route="/" />
    </ToggleContainer>
  );
};

export default ThemeToggle;

import React from "react";
import { useTheme } from "../styles/ThemeProvider";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import { IconButton, HomeLink, Controls, Page, Content } from "./styled";

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

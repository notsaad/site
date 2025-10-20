import React, { createContext, useContext, useState, useEffect } from 'react';
import { theme } from '../../styles/theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.typography.fontFamily};
    font-optical-sizing: auto;
    font-weight: ${theme.typography.fontWeights.normal};
    font-style: normal;
    font-variant-numeric: tabular-nums lining-nums;
    font-size: ${theme.typography.fontSize};
    line-height: ${theme.typography.lineHeight};
  }
`;

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  currentTheme: typeof theme.colors.dark | typeof theme.colors.light;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', (!isDarkMode).toString());
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === 'true');
    }
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? theme.colors.dark.background : theme.colors.light.background;
    document.body.style.color = isDarkMode ? theme.colors.dark.text : theme.colors.light.text;
  }, [isDarkMode]);

  const currentTheme = isDarkMode ? theme.colors.dark : theme.colors.light;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, currentTheme }}>
      <GlobalStyle />
      {children}
    </ThemeContext.Provider>
  );
}; 
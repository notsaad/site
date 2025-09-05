import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { useTheme } from './ThemeProvider';

const Container = styled.div<{ isDark: boolean }>`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.fontSize};
  line-height: ${theme.typography.lineHeight};
  max-width: 80ch;
  margin: 0 auto;
  padding: ${theme.spacing.grid};
  background-color: ${props => props.isDark ? `#111` : `#fff`};
  
  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: normal;
    margin: ${theme.spacing.grid} 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: ${theme.borders.style};
    border-color: ${props => props.isDark ? theme.colors.dark.border : theme.colors.light.border};
    
    &:hover {
      background-color: ${props => props.isDark ? theme.colors.dark.accent : theme.colors.light.accent};
    }
  }
  
  button {
    color: inherit;
    text-decoration: none;
    border-bottom: ${theme.borders.style};
    border-color: ${props => props.isDark ? theme.colors.dark.border : theme.colors.light.border};
    
    &:hover {
      background-color: ${props => props.isDark ? theme.colors.dark.accent : theme.colors.light.accent};
    }
  }
`;

const Border = styled.div<{ isDark: boolean }>`
  border: ${theme.borders.style};
  border-color: ${props => props.isDark ? theme.colors.dark.border : theme.colors.light.border};
  padding: ${theme.spacing.grid};
  margin-bottom: ${theme.spacing.grid};
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <Container isDark={isDarkMode}>
      <Border isDark={isDarkMode}>
        {children}
      </Border>
    </Container>
  );
};

export default Layout; 
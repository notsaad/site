import React from 'react';
import { useTheme } from './ThemeProvider';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const ToggleContainer = styled.div`
  position: absolute;
  top: ${theme.spacing.grid};
  right: ${theme.spacing.grid};
  font-family: ${theme.typography.fontFamily};
  cursor: pointer;
  user-select: none;
`;

const ToggleBox = styled.div<{ isDark: boolean }>`
  display: inline-block;
  padding: ${theme.spacing.unit};
  border: ${theme.borders.style};
  border-color: ${props => props.isDark ? theme.colors.dark.border : theme.colors.light.border};
  
  &:hover {
    background-color: ${props => props.isDark ? theme.colors.dark.accent : theme.colors.light.accent};
  }
`;

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleContainer onClick={toggleTheme}>
      <ToggleBox isDark={isDarkMode}>
        [ {isDarkMode ? 'LIGHT' : 'DARK'} ]
      </ToggleBox>
    </ToggleContainer>
  );
};

export default ThemeToggle; 
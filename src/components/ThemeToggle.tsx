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
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.unit};
`;

const ToggleBox = styled.div<{ isDark?: boolean }>`
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
    <ToggleContainer>
      <ToggleBox isDark={isDarkMode} onClick={toggleTheme}>
        [ {isDarkMode ? 'LIGHT' : 'DARK'} ]
      </ToggleBox>
      {/* TODO: make the click lead to the saadgpt route of the site */}
      <ToggleBox isDark={isDarkMode}>
        [ SAADGPT ]
      </ToggleBox>
    </ToggleContainer>
  );
};

export default ThemeToggle; 
import styled from 'styled-components';
import { theme } from '../styles/theme';

export const Section = styled.section`
  margin: ${theme.spacing.grid} 0;
`;

export const SectionTitle = styled.h2`
  border-bottom: ${theme.borders.style} ${props => props.theme.currentTheme?.border};
  padding-bottom: ${theme.spacing.unit};
  margin-bottom: ${theme.spacing.grid};
  text-transform: uppercase;
`; 
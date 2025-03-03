import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@500;600;700&family=Fira+Code:wght@400;500&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.textPrimary};
    background-color: ${theme.colors.background};
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: ${theme.fontSizes['5xl']};
  }

  h2 {
    font-size: ${theme.fontSizes['4xl']};
  }

  h3 {
    font-size: ${theme.fontSizes['3xl']};
  }

  h4 {
    font-size: ${theme.fontSizes['2xl']};
  }

  h5 {
    font-size: ${theme.fontSizes.xl};
  }

  h6 {
    font-size: ${theme.fontSizes.lg};
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  ul, ol {
    margin-left: 2rem;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.secondary};
  }

  /* Responsive typography */
  @media (max-width: ${theme.breakpoints.md}) {
    html {
      font-size: 14px;
    }

    h1 {
      font-size: ${theme.fontSizes['4xl']};
    }

    h2 {
      font-size: ${theme.fontSizes['3xl']};
    }

    h3 {
      font-size: ${theme.fontSizes['2xl']};
    }
  }
`;

export default GlobalStyle;
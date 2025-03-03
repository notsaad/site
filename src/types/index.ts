export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
  codeLink?: string;
}

export interface ThemeType {
  colors: {
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
    background: string;
    accent: string;
    cardBg: string;
    border: string;
  };
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
  transitions: {
    default: string;
    fast: string;
  };
}
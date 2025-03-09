export const theme = {
  colors: {
    dark: {
      background: '#000000',
      backgroundAlt: '#222222',
      text: '#FFFFFF',
      textAlt: '#999999',
      border: '#FFFFFF',
      accent: '#666666',
    },
    light: {
      background: '#FFFFFF',
      backgroundAlt: '#EEEEEE',
      text: '#000000',
      textAlt: '#666666',
      border: '#000000',
      accent: '#999999',
    }
  },
  typography: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '16px',
    lineHeight: '1.20rem',
    fontWeights: {
      normal: 500,
      medium: 600,
      bold: 800,
    }
  },
  spacing: {
    unit: '1ch', // Character-based spacing
    grid: '2ch',
  },
  borders: {
    style: '2px solid',
  }
};

export type Theme = typeof theme; 
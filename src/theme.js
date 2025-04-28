import { createGlobalStyle } from 'styled-components';

// Dark theme color palette
export const theme = {
  // Main colors
  primary: '#6979F8',
  secondary: '#BE52F2',
  success: '#00C48C',
  warning: '#FFCF5C',
  danger: '#FF647C',
  info: '#0084F4',
  
  // Background colors
  background: {
    primary: '#121212',
    secondary: '#1E1E1E',
    card: '#252525',
    elevated: '#2D2D2D'
  },
  
  // Text colors
  text: {
    primary: '#FFFFFF',
    secondary: '#A0A0A0',
    tertiary: '#6C6C6C',
    inverse: '#000000'
  },
  
  // Border colors
  border: {
    light: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.15)',
    strong: 'rgba(255, 255, 255, 0.2)'
  },
  
  // Chart colors
  chart: {
    green: '#00C48C',
    red: '#FF647C',
    blue: '#0084F4',
    purple: '#BE52F2',
    yellow: '#FFCF5C',
    teal: '#00D4D4',
    orange: '#FF9F43'
  },
  
  // Spacing
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  
  // Border radius
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    round: '50%'
  },
  
  // Shadows
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.3)',
    md: '0 4px 8px rgba(0, 0, 0, 0.3)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.3)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.3)'
  }
};

// Global styles
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${theme.background.primary};
    color: ${theme.text.primary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: ${theme.spacing.md};
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.75rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  h4 {
    font-size: 1.25rem;
  }
  
  p {
    margin-bottom: ${theme.spacing.md};
  }
  
  a {
    color: ${theme.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  button {
    cursor: pointer;
  }
`;
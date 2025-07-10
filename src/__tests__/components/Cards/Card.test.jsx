import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Card from '../../../components/Cards/Card';
import { FiDollarSign } from 'react-icons/fi';

// Mock theme for testing
const theme = {
  background: {
    card: '#ffffff'
  },
  borderRadius: {
    md: '8px',
    round: '50%'
  },
  shadows: {
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px'
  },
  text: {
    primary: '#ffffff',
    secondary: '#333333',
    tertiary: '#666666'
  },
  primary: '#3498db',
  success: '#2ecc71',
  danger: '#e74c3c'
};

// Wrapper component to provide theme
const renderWithTheme = (ui) => {
  return render(
    <ThemeProvider theme={theme}>
      {ui}
    </ThemeProvider>
  );
};

describe('Card Component', () => {
  test('renders with title and value', () => {
    renderWithTheme(<Card title="Test Card" value={1000} />);
    
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
  });

  test('renders with formatter function', () => {
    const formatter = (value) => `$${value.toFixed(2)}`;
    renderWithTheme(<Card title="Test Card" value={1000} formatter={formatter} />);
    
    expect(screen.getByText('$1000.00')).toBeInTheDocument();
  });

  test('renders with positive change', () => {
    renderWithTheme(<Card title="Test Card" value={1000} change={5.25} />);
    
    expect(screen.getByText('5.25%')).toBeInTheDocument();
    expect(screen.getByText('vs previous period')).toBeInTheDocument();
  });

  test('renders with negative change', () => {
    renderWithTheme(<Card title="Test Card" value={1000} change={-3.75} />);
    
    expect(screen.getByText('3.75%')).toBeInTheDocument();
    expect(screen.getByText('vs previous period')).toBeInTheDocument();
  });

  test('renders with custom change label', () => {
    renderWithTheme(
      <Card 
        title="Test Card" 
        value={1000} 
        change={5.25} 
        changeLabel="vs last month" 
      />
    );
    
    expect(screen.getByText('vs last month')).toBeInTheDocument();
  });

  test('renders with icon', () => {
    renderWithTheme(
      <Card 
        title="Test Card" 
        value={1000} 
        icon={<FiDollarSign data-testid="dollar-icon" />} 
      />
    );
    
    expect(screen.getByTestId('dollar-icon')).toBeInTheDocument();
  });

  test('renders with children content', () => {
    renderWithTheme(
      <Card title="Test Card" value={1000}>
        <div data-testid="child-content">Additional content</div>
      </Card>
    );
    
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
    expect(screen.getByText('Additional content')).toBeInTheDocument();
  });

  test('handles non-number values', () => {
    renderWithTheme(<Card title="Test Card" value="Not a number" change="Invalid" />);
    
    // Should default to 0 for invalid number values
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('0.00%')).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import RateCard from '../../../components/Cards/RateCard';

// Mock the LineChart component
jest.mock('../../../components/Charts/LineChart', () => {
  return function MockLineChart({ data, colors, formatter }) {
    return (
      <div data-testid="line-chart">
        <span>Chart with {data.length} points</span>
        <span>Color: {colors[0]}</span>
        <span>Sample formatted value: {formatter(data[0].value)}</span>
      </div>
    );
  };
});

// Mock the timeLabels from mockData
jest.mock('../../../data/mockData', () => ({
  timeLabels: ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM']
}));

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

describe('RateCard Component', () => {
  const mockPositiveData = {
    current: 3.25,
    change: -0.5, // For interest rates, negative change is considered positive
    history: [3.75, 3.70, 3.65, 3.60, 3.55, 3.45, 3.35, 3.25]
  };

  const mockNegativeData = {
    current: 4.75,
    change: 0.25, // For interest rates, positive change is considered negative
    history: [4.50, 4.55, 4.60, 4.65, 4.70, 4.72, 4.74, 4.75]
  };

  const mockMixedData = {
    current: 5.25,
    change: 0.1,
    history: [5.15, 5.20, "5.22", "invalid", 5.23, 5.24, 5.25, 5.25]
  };

  test('renders with positive data (negative change)', () => {
    renderWithTheme(
      <RateCard 
        title="Mortgage Rate" 
        data={mockPositiveData} 
      />
    );
    
    expect(screen.getByText('Mortgage Rate')).toBeInTheDocument();
    expect(screen.getByText('3.25%')).toBeInTheDocument();
    expect(screen.getByText('0.50%')).toBeInTheDocument();
    expect(screen.getByText('vs yesterday')).toBeInTheDocument();
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
    expect(screen.getByText('Chart with 8 points')).toBeInTheDocument();
    expect(screen.getByText('Color: #00C48C')).toBeInTheDocument();
  });

  test('renders with negative data (positive change)', () => {
    renderWithTheme(
      <RateCard 
        title="Auto Loan Rate" 
        data={mockNegativeData} 
      />
    );
    
    expect(screen.getByText('Auto Loan Rate')).toBeInTheDocument();
    expect(screen.getByText('4.75%')).toBeInTheDocument();
    expect(screen.getByText('0.25%')).toBeInTheDocument();
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
    expect(screen.getByText('Color: #FF647C')).toBeInTheDocument();
  });

  test('renders with custom color', () => {
    renderWithTheme(
      <RateCard 
        title="Treasury Yield" 
        data={mockPositiveData} 
        color="#1E88E5"
      />
    );
    
    expect(screen.getByText('Treasury Yield')).toBeInTheDocument();
    expect(screen.getByText('Color: #1E88E5')).toBeInTheDocument();
  });

  test('handles mixed data types in history', () => {
    renderWithTheme(
      <RateCard 
        title="Credit Card Rate" 
        data={mockMixedData} 
      />
    );
    
    expect(screen.getByText('Credit Card Rate')).toBeInTheDocument();
    expect(screen.getByText('5.25%')).toBeInTheDocument();
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
    // The formatter should handle the first value in the chart data
    expect(screen.getByText('Sample formatted value: 5.15%')).toBeInTheDocument();
  });
});
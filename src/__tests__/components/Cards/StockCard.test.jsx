import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import StockCard from '../../../components/Cards/StockCard';

// Mock the LineChart component
jest.mock('../../../components/Charts/LineChart', () => {
  return function MockLineChart({ data, colors }) {
    return (
      <div data-testid="line-chart">
        <span>Chart with {data.length} points</span>
        <span>Color: {colors[0]}</span>
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

describe('StockCard Component', () => {
  const mockPositiveData = {
    current: 3500.75,
    change: 2.5,
    history: [3400, 3420, 3450, 3480, 3490, 3510, 3520, 3500.75]
  };

  const mockNegativeData = {
    current: 3200.50,
    change: -1.8,
    history: [3250, 3240, 3230, 3220, 3210, 3205, 3200, 3200.50]
  };

  test('renders with positive data', () => {
    renderWithTheme(
      <StockCard 
        title="NASDAQ" 
        data={mockPositiveData} 
      />
    );
    
    expect(screen.getByText('NASDAQ')).toBeInTheDocument();
    expect(screen.getByText('3,500.75')).toBeInTheDocument();
    expect(screen.getByText('2.50%')).toBeInTheDocument();
    expect(screen.getByText('vs yesterday')).toBeInTheDocument();
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
    expect(screen.getByText('Chart with 8 points')).toBeInTheDocument();
    expect(screen.getByText('Color: #00C48C')).toBeInTheDocument();
  });

  test('renders with negative data', () => {
    renderWithTheme(
      <StockCard 
        title="DOW" 
        data={mockNegativeData} 
      />
    );
    
    expect(screen.getByText('DOW')).toBeInTheDocument();
    expect(screen.getByText('3,200.50')).toBeInTheDocument();
    expect(screen.getByText('1.80%')).toBeInTheDocument();
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
    expect(screen.getByText('Color: #FF647C')).toBeInTheDocument();
  });

  test('renders with custom color', () => {
    renderWithTheme(
      <StockCard 
        title="S&P 500" 
        data={mockPositiveData} 
        color="#1E88E5"
      />
    );
    
    expect(screen.getByText('S&P 500')).toBeInTheDocument();
    expect(screen.getByText('Color: #1E88E5')).toBeInTheDocument();
  });
});
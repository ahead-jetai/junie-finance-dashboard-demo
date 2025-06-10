import React from 'react';
import styled from 'styled-components';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import Card from './Card';
import LineChart from '../Charts/LineChart';
import { timeLabels } from '../../data/mockData';

// Styled components
/**
 * ChartContainer is a styled div component designed to serve as a container
 * for charts or chart-related elements. It provides a consistent height and
 * manages vertical spacing through dynamic theme-based margin values.
 *
 * The height of the container is fixed at 120px.
 * The top margin is determined by the 'md' spacing value from the theme.
 * The bottom margin is determined by the 'sm' spacing value from the theme.
 *
 * This component leverages theme properties for spacing, ensuring
 * adherence to the application's design system.
 */
const ChartContainer = styled.div`
  height: 120px;
  margin-top: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

// Format currency values
/**
 * Formats a numeric value into a currency-like string with two decimal places.
 *
 * This function uses the `Intl.NumberFormat` object to standardize the formatting
 * of numbers to two decimal places. It ensures proper formatting in the 'en-US'
 * locale without including currency symbols.
 *
 * @param {number} value - The numeric value to be formatted.
 * @returns {string} The formatted string representation of the input with two decimal places.
 */
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};



// StockCard component
/**
 * Component representing a stock card that displays current value, change percentage,
 * and a line chart for the stock's historical performance.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the stock card.
 * @param {Object} props.data - Data object containing stock information.
 * @param {number} props.data.current - The current value of the stock.
 * @param {number} props.data.change - The change in value of the stock compared to a previous period.
 * @param {number[]} props.data.history - Array of historical values for the stock.
 * @param {string} [props.color] - Optional custom color for the line chart or default based on stock change.
 * @returns {JSX.Element} A styled card containing stock-related details and a line chart.
 */
const StockCard = ({ title, data, color }) => {
  // Prepare chart data
  const chartData = timeLabels.map((label, index) => ({
    name: label,
    value: data.history[index]
  }));

  // Determine icon based on change
  const icon = data.change >= 0 ? <FiTrendingUp size={20} /> : <FiTrendingDown size={20} />;

  // Determine background color based on change
  const iconBg = data.change >= 0 ? '#00C48C' : '#FF647C';

  return (
    <Card
      title={title}
      value={data.current}
      change={data.change}
      changeLabel="vs yesterday"
      icon={icon}
      iconBg={iconBg}
      formatter={formatCurrency}
    >
      <ChartContainer>
        <LineChart
          data={chartData}
          dataKeys={['value']}
          colors={[color || (data.change >= 0 ? '#00C48C' : '#FF647C')]}
          formatter={formatCurrency}
          showGrid={false}
          showLegend={false}
          showTooltip={true}
          showXAxis={true}
          showYAxis={false}
          height={120}
        />
      </ChartContainer>
    </Card>
  );
};

export default StockCard;
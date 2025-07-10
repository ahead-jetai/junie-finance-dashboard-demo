import React from 'react';
import styled from 'styled-components';
import { FiPercent } from 'react-icons/fi';
import Card from './Card';
import LineChart from '../Charts/LineChart';
import { timeLabels } from '../../data/mockData';

// Styled components
/**
 * ChartContainer is a styled `div` component designed to encapsulate and style chart-related content.
 * It provides a fixed height and configurable top and bottom margins based on the theme's spacing values.
 *
 * Properties:
 * - height: Defines the height of the container, set to 120px.
 * - margin-top: Applies a top margin derived from the theme's medium spacing value.
 * - margin-bottom: Applies a bottom margin derived from the theme's small spacing value.
 */
const ChartContainer = styled.div`
  height: 120px;
  margin-top: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

// Format percentage values
/**
 * Converts a given value to a formatted percentage string with two decimal places.
 * If the input is not a valid number or cannot be converted to one, the default return value is '0.00%'.
 *
 * @param {number|string} value - The value to be formatted as a percentage. Can be a number or a string representation of a number.
 * @returns {string} The formatted percentage string with two decimal places, followed by a percentage symbol.
 */
const formatPercentage = (value) => {
  // Check if value is a number and convert it if it's not
  const numValue = typeof value === 'number' ? value : Number(value);

  // Check if conversion resulted in a valid number
  if (isNaN(numValue)) {
    return '0.00%';
  }

  return numValue.toFixed(2) + '%';
};

// RateCard component
/**
 * Represents the RateCard component which is used to display statistical data with a chart
 * visualization and additional information such as title, value, change, and associated color.
 *
 * @param {Object} props - The properties passed to the RateCard component.
 * @param {string} props.title - The title of the rate card, typically describing the statistic.
 * @param {Object} props.data - Data object containing historical values and current statistics.
 * @param {number} props.data.current - The current value of the statistic displayed on the card.
 * @param {Array<number|string>} props.data.history - An array representing historical data points.
 * @param {number} props.data.change - The percentage change in value compared to the previous period.
 * @param {string} [props.color] - Optional override for the default color used for visual representation.
 *
 * @returns {JSX.Element} - A component displaying a card with a chart, statistical data, and visual indicators.
 */
const RateCard = ({ title, data, color }) => {
  // Prepare chart data
  const chartData = timeLabels.map((label, index) => {
    // Get the value from history or default to 0
    const historyValue = data.history[index];
    // Convert to number if it's not already
    const numValue = typeof historyValue === 'number' ? historyValue : Number(historyValue);
    // Use 0 if the value is NaN
    const safeValue = isNaN(numValue) ? 0 : numValue;

    return {
      name: label,
      value: safeValue
    };
  });

  // Determine color based on change (for interest rates, negative change is good)
  const isPositive = data.change < 0;
  const chartColor = color || (isPositive ? '#00C48C' : '#FF647C');

  return (
    <Card
      title={title}
      value={data.current}
      change={data.change}
      changeLabel="vs yesterday"
      icon={<FiPercent size={20} />}
      iconBg={chartColor}
      formatter={formatPercentage}
    >
      <ChartContainer>
        <LineChart
          data={chartData}
          dataKeys={['value']}
          colors={[chartColor]}
          formatter={formatPercentage}
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

export default RateCard;

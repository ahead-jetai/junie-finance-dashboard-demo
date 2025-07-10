import React from 'react';
import styled from 'styled-components';
import { FiDollarSign, FiActivity } from 'react-icons/fi';
import Card from './Card';
import LineChart from '../Charts/LineChart';
import { timeLabels } from '../../data/mockData';

// Styled components
/**
 * Styled container component for charts.
 *
 * This container provides a predefined height and applies vertical margins
 * dynamically based on the theme's spacing values. The `margin-top` and `margin-bottom`
 * are set using the `md` and `sm` spacing tokens from the theme, respectively.
 *
 * The `height` is statically set to `120px`.
 */
const ChartContainer = styled.div`
  height: 120px;
  margin-top: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

// Format large numbers with abbreviations
/**
 * Formats a number into a currency string with abbreviations for large numbers.
 *
 * Converts a given value into a string representing its currency format.
 * If the number is in the thousands, it appends 'K' to the value.
 * If the number is in the millions, it appends 'M' to the value.
 * For smaller values, it formats the number as a standard currency.
 * Returns '$0.00' if the input is not a valid number.
 *
 * @param {number|string} value - The input value to format, which can be a number or a string representation of a number.
 * @returns {string} The formatted currency string, abbreviated for large numbers.
 */
const formatLargeNumber = (value) => {
  // Check if value is a number and convert it if it's not
  const numValue = typeof value === 'number' ? value : Number(value);

  // Check if conversion resulted in a valid number
  if (isNaN(numValue)) {
    return '$0.00';
  }

  if (numValue >= 1000000) {
    return '$' + (numValue / 1000000).toFixed(2) + 'M';
  } else if (numValue >= 1000) {
    return '$' + (numValue / 1000).toFixed(2) + 'K';
  }
  return '$' + numValue.toFixed(2);
};

// MetricCard component
/**
 * MetricCard is a functional component that displays a card containing
 * metric-related information, such as the current value, historical data
 * as a line chart, and a comparison to the previous day.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the metric being displayed.
 * @param {Object} props.data - The data related to the metric.
 * @param {number} props.data.current - The current value of the metric.
 * @param {number} props.data.change - The change in metric value compared to the previous day.
 * @param {Array<number|string>} props.data.history - The historical values of the metric over time.
 * @param {string} [props.color] - The color to use for the chart and icon. Defaults to green for positive change and red for negative change.
 * @param {boolean} [props.isTransaction=false] - Determines the type of icon displayed. If true, an activity icon is shown. If false, a dollar-sign icon is shown.
 * @returns {JSX.Element} A component that renders a metric card with a title, current value, change information, and a line chart.
 */
const MetricCard = ({ title, data, color, isTransaction = false }) => {
  // Prepare chart data
  const chartData = data.history.map((historyValue, index) => {
    // Convert to number if it's not already
    const numValue = typeof historyValue === 'number' ? historyValue : Number(historyValue);
    // Use 0 if the value is NaN
    const safeValue = isNaN(numValue) ? 0 : numValue;

    return {
      name: timeLabels[index] || `Day ${index + 1}`,
      value: safeValue
    };
  });

  // Determine icon based on metric type
  const icon = isTransaction ? <FiActivity size={20} /> : <FiDollarSign size={20} />;

  // Determine color based on change
  const chartColor = color || (data.change >= 0 ? '#00C48C' : '#FF647C');

  return (
    <Card
      title={title}
      value={data.current}
      change={data.change}
      changeLabel="vs yesterday"
      icon={icon}
      iconBg={chartColor}
      formatter={formatLargeNumber}
    >
      <ChartContainer>
        <LineChart
          data={chartData}
          dataKeys={['value']}
          colors={[chartColor]}
          formatter={formatLargeNumber}
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

export default MetricCard;

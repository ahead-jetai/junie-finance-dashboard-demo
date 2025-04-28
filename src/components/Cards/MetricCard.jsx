import React from 'react';
import styled from 'styled-components';
import { FiDollarSign, FiActivity } from 'react-icons/fi';
import Card from './Card';
import LineChart from '../Charts/LineChart';
import { timeLabels } from '../../data/mockData';

// Styled components
const ChartContainer = styled.div`
  height: 120px;
  margin-top: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

// Format large numbers with abbreviations
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

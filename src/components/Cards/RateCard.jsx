import React from 'react';
import styled from 'styled-components';
import { FiPercent } from 'react-icons/fi';
import Card from './Card';
import LineChart from '../Charts/LineChart';

// Styled components
const ChartContainer = styled.div`
  height: 120px;
  margin-top: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

// Format percentage values
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
const RateCard = ({ title, data, color, timeLabels }) => {
  // Prepare chart data
  const chartData = timeLabels ? timeLabels.map((label, index) => {
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
  }) : [];

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

import React from 'react';
import styled from 'styled-components';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import Card from './Card';
import LineChart from '../Charts/LineChart';
import { timeLabels } from '../../data/mockData';

// Styled components
const ChartContainer = styled.div`
  height: 120px;
  margin-top: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

// Format currency values
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

// StockCard component
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
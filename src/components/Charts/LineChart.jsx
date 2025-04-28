import React from 'react';
import styled from 'styled-components';
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

// Styled components
const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 250px;
`;

const CustomTooltipContainer = styled.div`
  background-color: ${props => props.theme.background.elevated};
  border: 1px solid ${props => props.theme.border.medium};
  border-radius: ${props => props.theme.borderRadius.sm};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.md};
`;

const TooltipLabel = styled.div`
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.text.primary};
`;

const TooltipValue = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${props => props.theme.spacing.xs};
`;

const TooltipColor = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-right: ${props => props.theme.spacing.sm};
`;

const TooltipText = styled.span`
  color: ${props => props.theme.text.secondary};
`;

// Custom tooltip component
const CustomTooltip = ({ active, payload, label, formatter }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <CustomTooltipContainer>
      <TooltipLabel>{label}</TooltipLabel>
      {payload.map((entry, index) => (
        <TooltipValue key={`tooltip-${index}`}>
          <TooltipColor color={entry.color} />
          <TooltipText>
            {entry.name}: {formatter ? formatter(entry.value) : entry.value}
          </TooltipText>
        </TooltipValue>
      ))}
    </CustomTooltipContainer>
  );
};

// LineChart component
const LineChart = ({
  data,
  dataKeys,
  xAxisDataKey = 'name',
  colors,
  formatter,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  showXAxis = true,
  showYAxis = true,
  height = 300
}) => {
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255, 255, 255, 0.1)"
              vertical={false}
            />
          )}
          
          {showXAxis && (
            <XAxis
              dataKey={xAxisDataKey}
              tick={{ fill: '#A0A0A0', fontSize: 12 }}
              axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
              tickLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
            />
          )}
          
          {showYAxis && (
            <YAxis
              tick={{ fill: '#A0A0A0', fontSize: 12 }}
              axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
              tickLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
              tickFormatter={formatter}
            />
          )}
          
          {showTooltip && (
            <Tooltip
              content={<CustomTooltip formatter={formatter} />}
              cursor={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
            />
          )}
          
          {showLegend && (
            <Legend
              wrapperStyle={{
                paddingTop: '10px',
                fontSize: '12px',
                color: '#A0A0A0'
              }}
            />
          )}
          
          {dataKeys.map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors ? colors[index % colors.length] : '#6979F8'}
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 1 }}
              activeDot={{ r: 5, strokeWidth: 0 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default LineChart;
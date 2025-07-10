import React from 'react';
import styled from 'styled-components';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

// Styled components
/**
 *
 */
const CardContainer = styled.div`
  background-color: ${props => props.theme.background.card};
  border-radius: ${props => props.theme.borderRadius.md};
  box-shadow: ${props => props.theme.shadows.md};
  padding: ${props => props.theme.spacing.lg};
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

/**
 *
 */
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`;

/**
 *
 */
const CardTitle = styled.h3`
  font-size: 1rem;
  color: ${props => props.theme.text.secondary};
  margin: 0;
`;

/**
 *
 */
const CardIcon = styled.div.attrs(props => ({
  iconbg: props.iconBg
}))`
  width: 36px;
  height: 36px;
  border-radius: ${props => props.theme.borderRadius.round};
  background-color: ${props => props.iconbg || props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text.primary};
  opacity: 0.9;
`;

/**
 *
 */
const CardContent = styled.div`
  flex: 1;
`;

/**
 *
 */
const CardValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

/**
 *
 */
const CardFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${props => props.theme.spacing.md};
`;

/**
 *
 */
const ChangeIndicator = styled.div.attrs(props => ({
  ispositive: props.isPositive,
  isnegative: props.isNegative
}))`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.ispositive 
    ? props.theme.success 
    : props.isnegative 
      ? props.theme.danger 
      : props.theme.text.secondary};
  margin-right: ${props => props.theme.spacing.md};
`;

/**
 *
 */
const ChangeIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => props.theme.spacing.xs};
`;

/**
 *
 */
const ChangeLabel = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.text.tertiary};
`;

// Card component
/**
 *
 */
const Card = ({
  title,
  value,
  change,
  changeLabel = "vs previous period",
  icon,
  iconBg,
  formatter = value => value,
  children
}) => {
  const isPositive = change > 0;
  const isNegative = change < 0;

  // Handle non-number values for value
  const numValue = typeof value === 'number' ? value : Number(value);
  const formattedValue = isNaN(numValue) ? formatter(0) : formatter(numValue);

  // Handle non-number values for change
  const numChange = typeof change === 'number' ? change : Number(change);
  const formattedChange = isNaN(numChange) ? '0.00' : Math.abs(numChange).toFixed(2);
  


  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {icon && <CardIcon iconBg={iconBg}>{icon}</CardIcon>}
      </CardHeader>

      <CardContent>
        <CardValue>{formattedValue}</CardValue>
        {children}
      </CardContent>

      {change !== undefined && (
        <CardFooter>
          <ChangeIndicator isPositive={isPositive} isNegative={isNegative}>
            <ChangeIcon>
              {isPositive ? <FiArrowUp /> : isNegative ? <FiArrowDown /> : null}
            </ChangeIcon>
            {formattedChange}%
          </ChangeIndicator>
          <ChangeLabel>{changeLabel}</ChangeLabel>
        </CardFooter>
      )}
    </CardContainer>
  );
};

export default Card;

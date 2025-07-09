import React from 'react';
import styled from 'styled-components';

// Styled components
const TrackerContainer = styled.div`
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

const TrackerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const TrackerTitle = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.text.primary};
  margin: 0;
`;

const TrackerContent = styled.div`
  flex: 1;
`;

// BitCoin Tracker component
const BitCoinTracker = () => {
  return (
    <TrackerContainer>
      <TrackerHeader>
        <TrackerTitle>BitCoin</TrackerTitle>
      </TrackerHeader>
      <TrackerContent>
        {/* Content will be added in future updates */}
      </TrackerContent>
    </TrackerContainer>
  );
};

export default BitCoinTracker;
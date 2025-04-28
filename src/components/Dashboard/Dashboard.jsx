import React from 'react';
import styled from 'styled-components';
import { FiDollarSign, FiTrendingUp, FiPercent, FiBriefcase } from 'react-icons/fi';
import StockCard from '../Cards/StockCard';
import RateCard from '../Cards/RateCard';
import MetricCard from '../Cards/MetricCard';
import { 
  stockIndices, 
  cryptoIndices, 
  interestRates, 
  dailyMetrics,
  marketOverview
} from '../../data/mockData';

// Styled components
const DashboardContainer = styled.div`
  padding: ${props => props.theme.spacing.lg};
  max-width: 1600px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const Title = styled.h1`
  color: ${props => props.theme.text.primary};
  font-size: 1.75rem;
  margin: 0;
`;

const DateDisplay = styled.div`
  color: ${props => props.theme.text.secondary};
  font-size: 1rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.text.primary};
  font-size: 1.25rem;
  margin-top: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;

  svg {
    margin-right: ${props => props.theme.spacing.sm};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const MarketOverviewContainer = styled.div`
  background-color: ${props => props.theme.background.card};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing.lg};
`;

const MarketTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    padding: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.text.secondary};
    font-weight: 500;
    border-bottom: 1px solid ${props => props.theme.border.light};
  }

  td {
    padding: ${props => props.theme.spacing.sm};
    border-bottom: 1px solid ${props => props.theme.border.light};
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const SymbolCell = styled.td`
  font-weight: 600;
`;

const NameCell = styled.td`
  color: ${props => props.theme.text.secondary};
`;

const PriceCell = styled.td`
  font-weight: 600;
`;

const ChangeCell = styled.td`
  color: ${props => props.change >= 0 ? props.theme.success : props.theme.danger};
  font-weight: 600;
`;

const SentimentContainer = styled.div`
  display: flex;
  margin-top: ${props => props.theme.spacing.lg};
  gap: ${props => props.theme.spacing.md};
`;

const SentimentItem = styled.div`
  flex: 1;
  background-color: ${props => props.theme.background.elevated};
  border-radius: ${props => props.theme.borderRadius.sm};
  padding: ${props => props.theme.spacing.md};
  text-align: center;
`;

const SentimentValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => {
    if (props.type === 'bullish') return props.theme.success;
    if (props.type === 'bearish') return props.theme.danger;
    return props.theme.info;
  }};
`;

const SentimentLabel = styled.div`
  color: ${props => props.theme.text.secondary};
  font-size: 0.875rem;
  margin-top: ${props => props.theme.spacing.xs};
`;

// Format currency
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
};

// Dashboard component
const Dashboard = () => {
  // Get current date
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <DashboardContainer>
      <Header>
        <Title>Stock & Banking Financial Dashboard 📈 {''}| <small style={{ color: '#00C48C'}}>powered by JetBrains Junie</small></Title>
        <DateDisplay>{currentDate}</DateDisplay>
      </Header>

      <SectionTitle>
        <FiTrendingUp size={20} />
        Stock Indices
      </SectionTitle>
      <Grid>
        <StockCard 
          title={stockIndices.nasdaq.label} 
          data={stockIndices.nasdaq} 
          color="#6979F8"
        />
        <StockCard 
          title={stockIndices.sp500.label} 
          data={stockIndices.sp500}
          color="#BE52F2"
        />
        <StockCard 
          title={stockIndices.dowJones.label} 
          data={stockIndices.dowJones} 
          color="#00D4D4"
        />
        <StockCard 
          title={stockIndices.russell2000.label} 
          data={stockIndices.russell2000} 
          color="#FF647C"
        />
      </Grid>

      <SectionTitle>
        <FiDollarSign size={20} />
        Crypto Indices
      </SectionTitle>
      <Grid>
        <StockCard 
          title={cryptoIndices.bitcoin.label} 
          data={cryptoIndices.bitcoin} 
          color="#FF9F43"
        />
        <StockCard 
          title={cryptoIndices.ethereum.label} 
          data={cryptoIndices.ethereum} 
          color="#0084F4"
        />
        <StockCard 
          title={cryptoIndices.solana.label} 
          data={cryptoIndices.solana} 
          color="#00C48C"
        />
        <StockCard 
          title={cryptoIndices.cryptoIndex.label} 
          data={cryptoIndices.cryptoIndex} 
          color="#BE52F2"
        />
      </Grid>

      <SectionTitle>
        <FiPercent size={20} />
        Interest Rates
      </SectionTitle>
      <Grid>
        <RateCard 
          title={interestRates.mortgage.label} 
          data={interestRates.mortgage} 
          color="#FF647C"
        />
        <RateCard 
          title={interestRates.treasury10Y.label} 
          data={interestRates.treasury10Y} 
          color="#FF647C"
        />
        <RateCard 
          title={interestRates.treasury2Y.label} 
          data={interestRates.treasury2Y} 
          color="#FF647C"
        />
        <RateCard 
          title={interestRates.autoLoan.label} 
          data={interestRates.autoLoan} 
          color="#FF647C"
        />
      </Grid>

      <SectionTitle>
        <FiBriefcase size={20} />
        Banking Metrics
      </SectionTitle>
      <Grid>
        <MetricCard 
          title={dailyMetrics.deposits.label} 
          data={dailyMetrics.deposits} 
          color="#00C48C"
        />
        <MetricCard 
          title={dailyMetrics.withdrawals.label} 
          data={dailyMetrics.withdrawals} 
          color="#FF647C"
        />
        <MetricCard 
          title={dailyMetrics.profit.label} 
          data={dailyMetrics.profit} 
          color="#6979F8"
        />
        <MetricCard 
          title={dailyMetrics.transactions.label} 
          data={dailyMetrics.transactions} 
          color="#0084F4"
          isTransaction={true}
        />
      </Grid>

      <SectionTitle>
        <FiTrendingUp size={20} />
        Market Overview
      </SectionTitle>
      <MarketOverviewContainer>
        <h3>Top Gainers</h3>
        <MarketTable>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {marketOverview.topGainers.map((stock, index) => (
              <tr key={`gainer-${index}`}>
                <SymbolCell>{stock.symbol}</SymbolCell>
                <NameCell>{stock.name}</NameCell>
                <PriceCell>{formatCurrency(stock.price)}</PriceCell>
                <ChangeCell change={stock.change}>+{stock.change}%</ChangeCell>
              </tr>
            ))}
          </tbody>
        </MarketTable>

        <h3 style={{ marginTop: '20px' }}>Top Losers</h3>
        <MarketTable>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {marketOverview.topLosers.map((stock, index) => (
              <tr key={`loser-${index}`}>
                <SymbolCell>{stock.symbol}</SymbolCell>
                <NameCell>{stock.name}</NameCell>
                <PriceCell>{formatCurrency(stock.price)}</PriceCell>
                <ChangeCell change={stock.change}>{stock.change}%</ChangeCell>
              </tr>
            ))}
          </tbody>
        </MarketTable>

        <h3 style={{ marginTop: '20px' }}>Market Sentiment</h3>
        <SentimentContainer>
          <SentimentItem>
            <SentimentValue type="bullish">{marketOverview.marketSentiment.bullish}%</SentimentValue>
            <SentimentLabel>Bullish</SentimentLabel>
          </SentimentItem>
          <SentimentItem>
            <SentimentValue type="neutral">{marketOverview.marketSentiment.neutral}%</SentimentValue>
            <SentimentLabel>Neutral</SentimentLabel>
          </SentimentItem>
          <SentimentItem>
            <SentimentValue type="bearish">{marketOverview.marketSentiment.bearish}%</SentimentValue>
            <SentimentLabel>Bearish</SentimentLabel>
          </SentimentItem>
        </SentimentContainer>
      </MarketOverviewContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

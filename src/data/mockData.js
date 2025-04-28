// Mock data for finance dashboard

// Stock Indices
export const stockIndices = {
  nasdaq: {
    current: 16789.45,
    previous: 16750.22,
    change: 0.23,
    history: [16720.45, 16740.32, 16760.78, 16730.56, 16750.22, 16789.45],
    label: "NASDAQ Composite"
  },
  sp500: {
    current: 5234.67,
    previous: 5210.34,
    change: 0.47,
    history: [5180.23, 5195.67, 5205.34, 5190.45, 5210.34, 5234.67],
    label: "S&P 500"
  },
  dowJones: {
    current: 38976.34,
    previous: 38900.12,
    change: 0.20,
    history: [38850.45, 38870.23, 38920.67, 38880.34, 38900.12, 38976.34],
    label: "Dow Jones Industrial Average"
  },
  russell2000: {
    current: 2123.45,
    previous: 2098.76,
    change: 1.18,
    history: [2080.34, 2085.67, 2090.23, 2095.45, 2098.76, 2123.45],
    label: "Russell 2000"
  }
};

// Crypto Indices
export const cryptoIndices = {
  bitcoin: {
    current: 67890.45,
    previous: 66750.22,
    change: 1.71,
    history: [65720.45, 66140.32, 66560.78, 66230.56, 66750.22, 67890.45],
    label: "Bitcoin (BTC)"
  },
  ethereum: {
    current: 3456.78,
    previous: 3400.34,
    change: 1.66,
    history: [3380.23, 3395.67, 3405.34, 3390.45, 3400.34, 3456.78],
    label: "Ethereum (ETH)"
  },
  solana: {
    current: 145.67,
    previous: 138.92,
    change: 4.86,
    history: [132.45, 135.67, 137.23, 136.89, 138.92, 145.67],
    label: "Solana (SOL)"
  },
  cryptoIndex: {
    current: 2345.67,
    previous: 2310.34,
    change: 1.53,
    history: [2280.23, 2295.67, 2305.34, 2290.45, 2310.34, 2345.67],
    label: "Crypto Index"
  }
};

// Interest Rates
export const interestRates = {
  mortgage: {
    current: 6.75,
    previous: 6.82,
    change: -0.07,
    history: [6.95, 6.90, 6.87, 6.85, 6.82, 6.75],
    label: "30-Year Fixed Mortgage Rate"
  },
  treasury10Y: {
    current: 4.32,
    previous: 4.35,
    change: -0.03,
    history: [4.40, 4.38, 4.37, 4.36, 4.35, 4.32],
    label: "10-Year Treasury Yield"
  },
  treasury2Y: {
    current: 4.75,
    previous: 4.78,
    change: -0.03,
    history: [4.85, 4.82, 4.80, 4.79, 4.78, 4.75],
    label: "2-Year Treasury Yield"
  },
  autoLoan: {
    current: 7.25,
    previous: 7.30,
    change: -0.05,
    history: [7.45, 7.40, 7.35, 7.32, 7.30, 7.25],
    label: "Average Auto Loan Rate"
  }
};

// Daily Banking Metrics
export const dailyMetrics = {
  deposits: {
    current: 12567890,
    previous: 12345678,
    change: 1.80,
    history: [12100000, 12200000, 12300000, 12345678, 12567890],
    label: "Daily Deposits"
  },
  withdrawals: {
    current: 10234567,
    previous: 10123456,
    change: 1.10,
    history: [9900000, 10000000, 10050000, 10123456, 10234567],
    label: "Daily Withdrawals"
  },
  profit: {
    current: 2333323,
    previous: 2222222,
    change: 5.00,
    history: [2100000, 2150000, 2200000, 2222222, 2333323],
    label: "Day Over Day Profit"
  },
  transactions: {
    current: 567890,
    previous: 545678,
    change: 4.07,
    history: [520000, 530000, 540000, 545678, 567890],
    label: "Total Transactions"
  }
};

// Market Overview
export const marketOverview = {
  topGainers: [
    { symbol: "AAPL", name: "Apple Inc.", price: 189.45, change: 2.34 },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 415.23, change: 1.89 },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 178.56, change: 1.76 }
  ],
  topLosers: [
    { symbol: "META", name: "Meta Platforms Inc.", price: 475.12, change: -1.23 },
    { symbol: "TSLA", name: "Tesla Inc.", price: 175.34, change: -0.98 },
    { symbol: "NFLX", name: "Netflix Inc.", price: 605.67, change: -0.76 }
  ],
  marketSentiment: {
    bullish: 65,
    neutral: 20,
    bearish: 15
  }
};

// Time labels for charts (last 6 days)
export const timeLabels = [
  "Mon", "Tue", "Wed", "Thu", "Fri", "Today"
];

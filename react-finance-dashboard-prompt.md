
# React Finance Dashboard Creation Prompt

## Overview
This prompt will guide you through creating a financial dashboard application using React. The dashboard will display various financial metrics including stock indices, crypto indices, interest rates, banking metrics, and market overview. The application will have a dark theme with a clean, modern UI and interactive components.

## Step 1: Project Setup
1. Create a new React project using Vite:
    - Use the command: `npm create vite@latest react-finance-dashboard -- --template react`
    - Navigate to the project directory: `cd react-finance-dashboard`
    - Install dependencies: `npm install`

2. Install required packages:
    - Styled Components: `npm install styled-components`
    - React Icons: `npm install react-icons`
    - Recharts: `npm install recharts`

3. Project structure:
   ```
   src/
   ├── components/
   │   ├── Cards/
   │   │   ├── Card.jsx
   │   │   ├── StockCard.jsx
   │   │   ├── RateCard.jsx
   │   │   └── MetricCard.jsx
   │   ├── Charts/
   │   │   └── LineChart.jsx
   │   └── Dashboard/
   │       └── Dashboard.jsx
   ├── data/
   │   └── mockData.js
   ├── App.jsx
   ├── App.css
   ├── theme.js
   ├── main.jsx
   └── index.css
   ```

## Step 2: Theme Configuration
Create a theme.js file in the src directory with the following content:

1. Define a dark theme with:
    - Color palette (primary, secondary, success, warning, danger, info)
    - Background colors (primary, secondary, card, elevated)
    - Text colors (primary, secondary, tertiary, inverse)
    - Border colors (light, medium, strong)
    - Chart colors (green, red, blue, purple, yellow, teal, orange)
    - Spacing (xs, sm, md, lg, xl, xxl)
    - Border radius (sm, md, lg, xl, round)
    - Shadows (sm, md, lg, xl)

2. Create global styles using styled-components' createGlobalStyle
    - Reset CSS (box-sizing, margin, padding)
    - Set font family to Inter with system fallbacks
    - Set background color to dark theme primary background
    - Set text color to theme primary text color
    - Define typography styles for headings and paragraphs

## Step 3: Mock Data Creation
Create a mockData.js file in the src/data directory with the following data sets:

1. Stock Indices:
    - NASDAQ Composite
    - S&P 500
    - Dow Jones Industrial Average
    - Russell 2000

2. Crypto Indices:
    - Bitcoin (BTC)
    - Ethereum (ETH)
    - Solana (SOL)
    - Crypto Index

3. Interest Rates:
    - 30-Year Fixed Mortgage Rate
    - 10-Year Treasury Yield
    - 2-Year Treasury Yield
    - Average Auto Loan Rate

4. Daily Banking Metrics:
    - Daily Deposits
    - Daily Withdrawals
    - Day Over Day Profit
    - Total Transactions

5. Market Overview:
    - Top Gainers (3 stocks)
    - Top Losers (3 stocks)
    - Market Sentiment (bullish, neutral, bearish percentages)

6. Time Labels for charts (last 6 days: Mon, Tue, Wed, Thu, Fri, Today)

## Step 4: Component Implementation

### 4.1 Base Card Component
Create a reusable Card component (Card.jsx) that will serve as the foundation for all card types:
- Styled container with background color, border radius, and box shadow
- Header with title and icon
- Content area for the main value and children components
- Footer with change indicator (positive/negative) and change label

### 4.2 Specialized Card Components
Create three specialized card components that extend the base Card:

1. StockCard.jsx:
    - Displays stock/crypto indices with a line chart
    - Shows current value, change percentage, and trend icon
    - Uses LineChart component to visualize historical data

2. RateCard.jsx:
    - Displays interest rates with a line chart
    - Shows current rate, change percentage, and percentage icon
    - Uses LineChart component to visualize historical data

3. MetricCard.jsx:
    - Displays banking metrics with a line chart
    - Shows current value, change percentage, and appropriate icon
    - Uses LineChart component to visualize historical data
    - Formats large numbers with abbreviations (K, M)

### 4.3 LineChart Component
Create a LineChart component using Recharts:
- Responsive container that adapts to parent size
- Customizable line chart with options for grid, axes, tooltip, and legend
- Custom tooltip component with styled container and formatted values
- Support for multiple data series with different colors

### 4.4 Dashboard Component
Create the main Dashboard component that brings everything together:
- Styled container with appropriate spacing
- Header with title and current date
- Sections for different card types (Stock Indices, Crypto Indices, Interest Rates, Banking Metrics)
- Market Overview section with tables for top gainers and losers
- Market Sentiment display with bullish, neutral, and bearish percentages

## Step 5: App Component and Final Setup
1. Set up the App component to use ThemeProvider and render the Dashboard
2. Configure the Vite build system in vite.config.js
3. Add any necessary CSS in App.css or index.css

## Step 6: Common Issues and Solutions

### Issue 1: Styled Components Theme Not Working
- Ensure ThemeProvider is wrapping your application
- Check that you're accessing theme properties correctly with props.theme

### Issue 2: Charts Not Rendering Correctly
- Verify that the data structure matches what Recharts expects
- Ensure the ResponsiveContainer has a defined width and height
- Check that the parent container has a defined height

### Issue 3: Formatting Issues with Numbers
- Use Intl.NumberFormat for consistent currency formatting
- Create helper functions for formatting different types of values (currency, percentage, large numbers)

### Issue 4: React Version Compatibility
- If using React 19, ensure all dependencies are compatible
- For React 18, adjust the package.json accordingly

### Issue 5: Vite Configuration
- Enable HMR (Hot Module Replacement) for better development experience
- Configure the server settings for detailed logging

## Final Notes
- The dashboard uses a dark theme throughout for a modern financial application look
- All data is mock data and would need to be replaced with real API calls in a production app
- The design is responsive and should work well on different screen sizes
- The application uses styled-components for all styling, avoiding traditional CSS files
- Icons are from react-icons library, specifically the FI (Feather Icons) set
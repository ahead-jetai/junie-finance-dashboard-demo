# Task: Refactor Mock Data to API Integration
## Context
The application currently uses static mock data from `mockData.js`, but needs to be updated to fetch real data from a REST API. The API mirrors the mock data structure exactly. `mockData.js`
## API Details
- Base URL: `https://junie-finance-api.onrender.com/`
- Available Endpoints:
    - `/stockindices` - Stock market indices data
    - `/cryptoindices` - Cryptocurrency data
    - `/interestrates` - Interest rates information
    - `/dailymetrics` - Banking metrics
    - `/marketoverview` - Market overview data
    - `/timelabels` - Time labels for charts

## Requirements
1. **Data Fetching**
    - Replace all mock data imports with API calls
    - Implement proper error handling for failed requests
    - Add loading states while data is being fetched

2. **API Integration**
    - Create a dedicated API service layer
    - Use appropriate HTTP client (axios/fetch)
    - Maintain the existing data structure in the application

3. **Code Organization**
    - Create an `api` or `services` directory for API-related code
    - Implement environment-based API configuration
    - Consider implementing caching for frequently accessed data

4. **Type Safety**
    - Maintain the same TypeScript interfaces/types that match the data structure
    - Ensure API responses are properly typed

## Example Implementation Structure
```
// api/config.js
const API_BASE_URL = 'https://junie-finance-api.onrender.com';

// api/endpoints.js
export const ENDPOINTS = {
  STOCK_INDICES: '/stockindices',
  CRYPTO_INDICES: '/cryptoindices',
  INTEREST_RATES: '/interestrates',
  DAILY_METRICS: '/dailymetrics',
  MARKET_OVERVIEW: '/marketoverview',
  TIME_LABELS: '/timelabels'
};
```

## Migration Steps
1. Create API service layer
2. Replace mock data imports with API calls
3. Update components to handle loading/error states
4. Implement error boundaries if needed
5. Add data caching if required
6. Update tests to mock API calls instead of static data

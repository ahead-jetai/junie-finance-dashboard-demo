// API service
import { API_BASE_URL } from './config';
import { ENDPOINTS } from './endpoints';

/**
 * Fetches data from the API with error handling
 * @param {string} endpoint - The API endpoint to fetch from
 * @returns {Promise<any>} - The response data
 */
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

/**
 * API service object with methods for each endpoint
 */
export const apiService = {
  /**
   * Fetches stock indices data
   * @returns {Promise<Object>} - Stock indices data
   */
  getStockIndices: () => fetchData(ENDPOINTS.STOCK_INDICES),
  
  /**
   * Fetches crypto indices data
   * @returns {Promise<Object>} - Crypto indices data
   */
  getCryptoIndices: () => fetchData(ENDPOINTS.CRYPTO_INDICES),
  
  /**
   * Fetches interest rates data
   * @returns {Promise<Object>} - Interest rates data
   */
  getInterestRates: () => fetchData(ENDPOINTS.INTEREST_RATES),
  
  /**
   * Fetches daily metrics data
   * @returns {Promise<Object>} - Daily metrics data
   */
  getDailyMetrics: () => fetchData(ENDPOINTS.DAILY_METRICS),
  
  /**
   * Fetches market overview data
   * @returns {Promise<Object>} - Market overview data
   */
  getMarketOverview: () => fetchData(ENDPOINTS.MARKET_OVERVIEW),
  
  /**
   * Fetches time labels data
   * @returns {Promise<Array<string>>} - Time labels data
   */
  getTimeLabels: () => fetchData(ENDPOINTS.TIME_LABELS)
};